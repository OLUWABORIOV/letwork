import './style.css'
const button = document.querySelector('button');

const input = document.querySelector('input');

button.addEventListener("click", 
createTodo);
input.addEventListener("keydown", (event) => 
{
  if (event.key === 'Enter') {
      createTodo();
  }
});

function  createTodo(event) {

    let input = button.previousElementSibling;
    let divTodo = button.nextElementSibling;
    let ul = divTodo.firstElementChild;
      //console.log(ul);
    const todo = input.value;
  
    // create li
    let li = document.createElement('li')
    // set textContent
    li.textContent = todo.trim();

   //single click on the line means todo is done
   li.onclick = (event) => {
    event.target.classList.toggle ('completed');
   };

   // double click on the line mean edit todo



    // add a deleete button
    let deleteButton = document.createElement
    ("button");
  
    deleteButton.textContent = 'x';
    //add onclick event to button
    deleteButton.onclick = (event) => {
    // remove li
      let deleteTodoConfirmed = confirm('todo removed suceessfully !')
      if(deleteTodoConfirmed) {
        event.target.parentElement.
        parentElement.remove();
      }
        // alert later
    };
  
    let span = document.createElement('span')
    span.append(deleteButton);
    li.append(span);
     // apend li to ul 
    ul.append(li);
  
     // clear input
    input.value = '';
};
