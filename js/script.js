//Getting the value of inputs
const input =document.querySelector(".input");
const button =document.querySelector(".add-button");
const list=document.querySelector(".list");

//Defining the event listeners
button.addEventListener('click',addItem);
list.addEventListener('click',deletecheck);
list.addEventListener('click',edit);

//Defining Eventlistener function
function addItem(event)
{
    event.preventDefault();

    const tododiv = document.createElement('div');
    tododiv.classList.add("todo");



    const newlist = document.createElement('li');
    newlist.innerText = input.value;
    newlist.classList.add("todo-item");

    tododiv.appendChild(newlist);

    //Specify Buttons
    //Complete Button
    const compbutton = document.createElement('button');
    compbutton.classList.add("comp-btn");
    compbutton.innerText = "CHECKED";
    tododiv.appendChild(compbutton);

    //Delete Button
    const delbutton = document.createElement('button');
    delbutton.classList.add("del-btn");
    delbutton.innerText = "DELETE";
    tododiv.appendChild(delbutton);



    //Append tododiv to main ul list
    list.appendChild(tododiv);

    //clear input value
    input.value = "";
}


function deletecheck(e){
    const deltitem = e.target;
    console.log(deltitem);

    if(deltitem.classList[0] === "del-btn")
    {
        const tododel = deltitem.parentElement;
        tododel.classList.add("fall");
        tododel.remove();
    }

    //Logic for check mark
    if(deltitem.classList[0] === "comp-btn")
    {
        const tododel = deltitem.parentElement;
        console.log(tododel);
        tododel.classList.toggle("checked");
    }


}

