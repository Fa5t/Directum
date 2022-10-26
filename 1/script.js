import inputText from "./components/inputText.js";
import inputTextarea from "./components/inputTextarea.js";
import inputCheckbox from "./components/inputCheckbox.js";
import inputButton from "./components/inputButton.js";
import inputSelect from "./components/inputSelect.js";
import inputRadio from "./components/inputRadio.js";

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('./form2.json');
    const data = await response.json();

    const divBlock = document.querySelector('.test');
    const newForm = document.createElement('form');
    Object.assign(newForm, {
        style: 'display: flex; flex-direction: column; max-width: 500px; margin: 0 auto; margin-top:100px; border: solid black 1px; padding: 10px; border-radius: 10px;',
        name: data.form.name,
        postmessage: data.form.postmessage,
    })

    data.form.items.forEach(function (item) {
        switch (item.type) {
            case 'text':
                inputText(item, newForm);
                break;
            case 'textarea':
                inputTextarea(item, newForm);
                break;
            case 'checkbox':
                inputCheckbox(item, newForm);
                break;
            case 'button':
                inputButton(item, newForm);
                break;
            case 'select':
                inputSelect(item, newForm);
                break;
            case 'radio':
                inputRadio(item, newForm);
                break;
        }
    })
    divBlock.appendChild(newForm)
});











