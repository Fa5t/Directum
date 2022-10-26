export default function inputRadio(item, newForm) {
    item.items.forEach(function (radio) {
        const newBlock = document.createElement('p')
        const inputRadio = document.createElement('input');
        Object.assign(inputRadio, {
            type: item.type,
            value: item.value,
            name: item.name,
            checked: item.checked,
        })
        newBlock.appendChild(inputRadio)
        newBlock.innerHTML += radio.label;
        newForm.appendChild(newBlock);
    });
}