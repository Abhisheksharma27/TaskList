//define ui variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');

const btn= document.querySelector('.btn');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector("#filter");
const taskInput = document.querySelector('#task');
//const collectionItem = document.querySelector('.collection-item');

//load all event listeners

loadEventListeners();


function loadEventListeners(){

    form.addEventListener('submit', addTask);   
}

function addTask(e){

    const li = document.createElement('li');

    li.className= 'collection-item';

    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element

    const link = document.createElement('a');

    //add class to link

    link.className = 'delete-item secondary-content' ;

    //add delete btn
    link.innerHTML = '<i class = "fa fa-remove"></i>'

    //append li to ul
    taskList.appendChild(link);

    //clear input

    taskInput.value= '';

    e.preventDefault();

}
