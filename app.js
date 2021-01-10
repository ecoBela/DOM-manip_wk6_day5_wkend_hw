
document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleSubmitForm);

    const deleteAll = document.querySelector('#deleteAll');
    deleteAll.addEventListener('click', handleDeleteAll);
});


const handleSubmitForm = function (event) {
    event.preventDefault();
    const newListItem = createListItem(event.target);
    const ninjaList = document.querySelector('#listOfNinjas');
    ninjaList.appendChild(newListItem);
    event.target.reset();
}


const createListItem = function (form){
    const newListItem = document.createElement('li');
    const nameOfNinja = document.createElement('h3');
    nameOfNinja.textContent = `${form.ninjaName.value} has the ability to ${form.ninjaPower.value}.
    This power is controlled by the ${form.powerElement.value} element.`;
    newListItem.appendChild(nameOfNinja);

    // const ninjaPower = document.createElement('h2');
    // ninjaPower.textContent = form.ninjaPower.value;
    // newListItem.appendChild(ninjaPower);

    // const ninjaElement = document.createElement('h3');
    // ninjaElement.textContent = form.powerElement.value;
    // newListItem.appendChild(ninjaElement);

    return newListItem;
};

const handleDeleteAll = function(event){
    const ninjaList = document.querySelector('#listOfNinjas');
    ninjaList.innerHTML = '';
}