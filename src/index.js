document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  
  form.addEventListener('submit', (e) => {
    
    e.preventDefault()
    buildToDo(e.target.newTaskDescription.value)
    form.reset()

  })
});


function buildToDo(todo) {
  // console.log(todo)

  //Create elements
  let taskList = document.createElement('li')
  let button = document.createElement('button')

 //Add contents to elements
  taskList.textContent = `${todo}  `
  button.textContent = 'x'

 
  taskList.appendChild(button)
//Remove task
button.addEventListener('click', handleDelete)


  console.log(taskList)


  //Pass anything to element selected 

  document.querySelector('#tasks').appendChild(taskList)
}


function handleDelete(e){
  e.target.parentNode.remove()
}

