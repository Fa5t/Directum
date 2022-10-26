export default function inputTextarea(item, newForm) {
    const inputTextarea = document.createElement('input');
    Object.assign(inputTextarea, {
        type: item.type,
        value: item.value,
        name: item.name,
        class: item.class,
        placeholder: item.label,
        validationRules: item.validationRules.type,
        required: item.required,
        disabled: item.disabled,
        label: item.label,
    })
    newForm.appendChild(inputTextarea);
}