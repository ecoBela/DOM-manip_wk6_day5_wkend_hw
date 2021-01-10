document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
})



// handleSubmit function should do the following:
const handleSubmit = (event) => {
    event.preventDefault();
    const newListItem = document.createElement('li');
    const list = document.querySelector('ul');

}
// *take the event parameter
// * event.preventDefault();
// 1. create a new li element, store in variable (done)
// 1a. select ul, store in variable
// 2. appendChild new li element to the ul
// 3. capture value typed in
// 4. append text to li element e.g. .textContent(event.target.value?)
// 5. reset the form with event.target.reset();