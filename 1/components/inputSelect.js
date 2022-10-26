export default function inputSelect(item, newForm) {
    const inputSelect = document.createElement('select');
    inputSelect.setAttribute("name", item.name);
    item.options ? item.options.forEach(function (option) {
        const newOption = document.createElement('option');
        Object.assign(newOption, {
            selected: item.selected,
            value: item.value,
        })
        newOption.innerHTML += option.text;
        inputSelect.appendChild(newOption)
    }) : '';
    newForm.appendChild(inputSelect);
}