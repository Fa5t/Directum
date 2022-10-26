export default function inputText(item, newForm) {
    const inputText = document.createElement('input');
    Object.assign(inputText, {
        type: item.type,
        value: item.value,
        name: item.name,
        placeholder: item.label,
        validationRules: item.validationRules.type,
        required: item.required,
        disabled: item.disabled,
        label: item.label,
    })
    newForm.appendChild(inputText);
}