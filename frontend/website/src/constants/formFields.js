export const profileFields = [
    {name: "biography", label: "biografia", value: "", minLength: 5, maxLength: 50, errors: {}},
    {name: "current_instituition", label: "estuda na instituição", value: "", minLength: 5, maxLength: 50, errors: {}},
    {
        name: "graduated_institution",
        label: "estudou na instituição",
        value: "",
        minLength: 5,
        maxLength: 50,
        errors: {}
    },
    {name: "current_city", label: "mora em", value: "", minLength: 5, maxLength: 50, errors: {}},
    {name: "birth_city", label: "de", value: "", minLength: 5, maxLength: 50, errors: {}},
    {name: "instagram", label: "instagram", value: "", minLength: 5, maxLength: 50, errors: {}},
    {name: "website", label: "url website", value: "", minLength: 5, maxLength: 50, errors: {}},
    {name: "profile_photo", label: 'Foto do Perfil', value: "", type: 'file', errors: {}},
];
