from rest_framework import serializers

from ...models import Posts

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ['content', 'image']

    def validate(self, attrs):
        fields_rules = {
            'content': {'max_length': 100, 'min_length': 5, 'value': attrs.get('content') or ''},
        }
        errors = {}

        for field, rules in fields_rules.items():
            value = rules.get('value') or ''
            min_length = rules.get('min_length') or 5
            max_length = rules.get('max_length') or 100

            if len(value) < min_length:
                errors[field] = f'Campo {field} precisa ter no mínimo {rules["min_length"]} caracteres'

            if len(value) > max_length:
                errors[field] = f'Campo {field} precisa ter no máximo {rules["max_length"]} caracteres'

        if errors:
            raise serializers.ValidationError(errors)

        return attrs
