document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
});


//createNinjaListItem function should take the form as parameter (done)
// Function should then:
// 1. create a newListItem (done)
// 2. create element for name
// 3. create element for power
// 4. create element for powere element
// Then add text for: 1/ name 2/ power 3/ element
// Then append 1/ name, 2/ pwoer 3/wlement to newListItem

const createNinjaListItem = (form) => {
    const newListItem = document.createElement('li');

    const ninjaName = document.createElement('h1');
    ninjaName.textContent = form.ninja-name.value;
    newListItem.appendChild(ninjaName);

    const 



}


//handleSubmit function should take (event)
// newListItem = it should call createNinjaListItem, pass it event.value, and store the whole thing in a variable
// it should select ul
// append newListItem to the ul.
//event.target.reset()

// handleSubmit function should do the following:
const handleSubmit = (event) => {
    // *take the event parameter (done)
    // * event.preventDefault(); (done)
    event.preventDefault();
    
    //1. call readinglist function
    const ninjaListItem = createNinjaListItem(event.target);
   
    // 1a. select ul, store in variable (done)
    // 2. appendChild new li element to the ul (done)
    const ninjaList = document.querySelector('ul');
    ninjaList.appendChild(ninjaListItem);

    // event.target.reset();
}

const createNinjaListItem = (form) => {
// 1. create a new li element, store in variable (done) (done)
    const newListItem = document.createElement('li');

    const ninjaName = document.createElement('h1');
    ninjaName.textContent = form.ninja-name.value;
    newListItem.appendChild(ninjaName);

}




// 3. capture value typed in (same as below?) (done)
// 4. append text to li element e.g. .textContent(event.target.value?) (done)
// 5. reset the form with event.target.reset();