const addbtn= document.getElementById('add');

addbtn.addEventListener('click',()=> addNewNote());

function addNewNote() {
    const note= document.createElement('div');
    note.classList.add('note');

    note.innerHTML =
    `<div class="tools">
    <button class="edit">
        <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
        <i class="fas fa-edit"></i>
    </button>
    </div>

    <div class="hidden"> </div>
    <textarea></textarea>
    `;

    //delete button 
const deletebtn= note.querySelector('.delete')
//delete function
deletebtn.addEventListener('click', ()=>{

})

document.body.appendChild(note)
}
