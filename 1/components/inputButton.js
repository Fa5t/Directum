export default function inputButton(item, newForm) {
    const inputButton = document.createElement('input');
    Object.assign(inputButton, {
        type: item.type,
        class: item.class,
        value: item.text,
    })
    newForm.appendChild(inputButton);
}