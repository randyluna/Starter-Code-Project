const addBtn = document.getElementById("add");
// console.log(addBtn);
addBtn.addEventListener("click", ()=> addNewNote());

const notes = JSON.parse(localStorage.getItem("notes"));
console.log(notes);
if (notes) {
    notes.forEach(note => addNewNote(note));
};

function addNewNote(text = "") {
    // console.log("clicked");
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        <div class="main ${text?"":"hidden"}"></div>
        <textarea class="${text?"hidden":""}"></textarea>
    `;

    // DELETE AND EDIT BUTTON
    const deleteBtn = note.querySelector(".delete");
    const editBtn = note.querySelector(".edit");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
    // console.log(deleteBtn);

    textArea.value = text;
    main.innerHTML = text;
    deleteBtn.addEventListener("click", ()=> {
        note.remove();
        update();
    });

    editBtn.addEventListener("click", ()=> {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
        update();
    });

    textArea.addEventListener("input", (e)=>{
        const value = e.target.value;
        // console.log(value);
        main.innerHTML = value;
        update();
    })

    // update();

    document.body.appendChild(note);
};

// LOCAL STORAGE MANIPULATION
// localStorage.setItem("name", "Spark");
// localStorage.getItem("name");
// localStorage.removeItem("name"); // OR...
// localStorage.clear(); // TO CLEAR ALL OF LOCAL STORAGE INFO
// localStorage.setItem("studentNames", JSON.stringify("studentNames")); // TO PASS OBJECTS INTO LOCAL STORAGE
// localStorage.setItem("studentNames", JSON.parse("studentNames")); // TO RETRIEVE OBJECTS FROM LOCAL STORAGE

const update = () => {
    const notesText = document.querySelectorAll("textarea");
    // console.log(notesText);
    const notes = [];
    notesText.forEach(note=> notes.push(note.value));
    // console.log(notes, notesText);
    localStorage.setItem("notes", JSON.stringify(notes));
};