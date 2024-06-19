export function createInput(labelText, type, name, id, placeholder, value) {

    const container = createDiv("m-property");

    const label = document.createElement("label");
    label.className = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
    label.setAttribute("for", "name-input-id");
    label.innerHTML = labelText;

    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.id = id;
    input.className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500";
    input.placeholder = placeholder;
    input.required = true;
    input.value = value;

    container.appendChild(label);
    container.appendChild(input);

    return container;
}

function createDiv(className) {
    const div = document.createElement("div");
    div.className = className;
    return div;
}