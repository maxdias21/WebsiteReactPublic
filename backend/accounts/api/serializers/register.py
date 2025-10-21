from rest_framework import serializers
from django.contrib.auth.models import User


class RegisterUserSerializer(serializers.ModelSerializer):
    # Remove os validadores padrão do campo username para evitar validação automática de unicidade
    username = serializers.CharField(
        max_length=150, validators=[]  # Aqui removemos validadores padrão
    )
    email = serializers.CharField(
        max_length=150, validators=[]  # Aqui removemos validadores padrão
    )

    class Meta:
        model = User
        # Campos que serão usados para criar o usuário e receber dados
        fields = ['first_name', 'last_name', 'email', 'username', 'password']

    def validate(self, data):
        validation_rules = {
            'first_name': {'name': 'nome', 'min_length': 2, 'max_length': 100},
            'last_name': {'name': 'sobrenome', 'min_length': 2, 'max_length': 100},
            'email': {'name': 'email', 'min_length': 5, 'max_length': 100},
            'username': {'name': 'usuário', 'min_length': 6, 'max_length': 20},
            'password': {'name': 'senha', 'min_length': 8, 'max_length': 100},
        }

        errors = []

        for key, value in validation_rules.items():
            field_value = data.get(key, None)
            name_field = value['name']
            min_length = value['min_length']
            max_length = value['max_length']

            if (len(field_value) < min_length):
                errors.append({key: f'Campo {name_field} precisa ter no mínimo {min_length} caracteres'})

            if (len(field_value) > max_length):
                errors.append({key: f'Campo {name_field} precisa ter no máximo {max_length} caracteres'})

        if User.objects.filter(username=data['username']).exists():
            errors.append({'username': "Este nome de usuário já está em uso, por favor escolha outro."})

        if User.objects.filter(email=data['email']).exists():
            errors.append({'email': "Este email já está em uso, por favor escolha outro."})
        print(errors)
        print('ok')
        if errors:
            raise serializers.ValidationError({'errors': errors})

        return data
