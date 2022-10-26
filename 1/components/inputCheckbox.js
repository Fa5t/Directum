export default function inputCheckbox(item, newForm) {
    const inputCheckbox = document.createElement('input');
    Object.assign(inputCheckbox, {
        type: item.type,
        class: item.class,
        value: item.label,
        name: item.name,
        placeholder: item.label,
        validationRules: item.validationRules.type,
        required: item.required,
        disabled: item.disabled,
        label: item.label,
        checked: item.checked,
    })
    newForm.appendChild(inputCheckbox);
}