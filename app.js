// clicking the submit button to submit a form
const form = document.querySelector('#todoList');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log ("you submitted the form!");
})

// clicking a button to remove a list
const removeButton = document.querySelectorAll('li button');
for(let btn of removeButton){
    btn.addEventListener('click', function(e){
        e.target.parentElement.remove();
    })
}

// To add to the list
const input = document.querySelector('#chore-list');
const choreList = document.querySelector('#cleaning-todoList');
form.addEventListener('submit',function(e){
e.preventDefault();
console.log(input.value);


// adding to the li
const newChore = document.createElement('li');
const removeBtn = document.createElement('button');
removeBtn.innerText="Delete ";
newChore.innerText = input.value;
newChore.appendChild(removeBtn);
input.value = '';
choreList.appendChild(newChore);
})

// strike-through li
choreList.addEventListener('click',function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
       
    }
    else if (e.target.tagName === 'LI'){
        e.target.style.textDecoration = "line-through";
        
    }
});
