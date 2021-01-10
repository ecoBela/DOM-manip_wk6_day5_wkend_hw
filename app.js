
document.addEventListener('DOMContentLoaded', () => {
    console.log("this works");
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleSubmitForm);
});


const handleSubmitForm = function (event) {
    event.preventDefault();
    const newListItem = createListItem(event.target);
    const ninjaList = document.querySelector('#listOfNinjas');
    ninjaList.appendChild(newListItem);

    event.target.reset();

    //1. call createListItem function

    // const listItem = createNinjaListItem(event.target);

// 1a. select ul, store in variable (done)
//     // 2. appendChild new li element to the ul (done)
//     const ninjaList = document.querySelector('ul');
//     ninjaList.appendChild(ninjaListItem);


}


const createListItem = function (form){
    const newListItem = document.createElement('li');
    

    const nameOfNinja = document.createElement('h3');
    nameOfNinja.textContent = `${form.ninjaName.value} has the ability to ${form.ninjaPower.value}`;
    newListItem.appendChild(nameOfNinja);

    // const ninjaPower = document.createElement('h2');
    // ninjaPower.textContent = form.ninjaPower.value;
    // newListItem.appendChild(ninjaPower);

    // const ninjaElement = document.createElement('h3');
    // ninjaElement.textContent = form.element.value;
    // newListItem.appendChild(ninjaElement);

    return newListItem;
};




// 3. capture value typed in (same as below?) (done)
// 4. append text to li element e.g. .textContent(event.target.value?) (done)
// 5. reset the form with event.target.reset();


//createNinjaListItem function should take the form as parameter (done)
// Function should then:
// 1. create a newListItem (done)
// 2. create element for name
// 3. create element for power
// 4. create element for powere element
// Then add text for: 1/ name 2/ power 3/ element
// Then append 1/ name, 2/ pwoer 3/wlement to newListItem




// const createNinjaListItem = function(event){
//     event.preventDefault();
//     const ninjaListItem = document.createElement('li');
//     ninjaListItem.append(event.target.value);
    


//     const ninjaList = document.querySelector('#listOfNinjas');
//     ninjaList.appendChild("ninjaListItem");
    
// }

// const handleSubmit = function (event) {
//     event.preventDefault();
//     const newListItem = createNinjaListItem(event.value);
//     const ninjaList = document.querySelector('ul');
//     ninjaList.appendChild(newListItem);
//     //event.target.reset()
// };

// 



