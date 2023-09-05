const addBtn = document.querySelector("#add-btn");
const main = document.querySelector("main");

addBtn.addEventListener("click", addNote);

function addNote() {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = ` <div class="tool">
  <i class="save fas fa-save"></i> 
  <i class="trash fas fa-trash"></i> 
</div>
<textarea></textarea>`;
  main.appendChild(note);

  const save = note.querySelector(".save");
  const trash = note.querySelector(".trash");
  const textarea = note.querySelector("textarea");

  save.addEventListener("click", saveNotes);
  // The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.
  textarea.addEventListener("input", saveNotes);
  trash.addEventListener("click", () => {
    note.remove();
    saveNotes();
  });
}

function saveNotes() {
  const notes = [...document.querySelectorAll(".note textarea")];
  const data = notes.map((note) => note.value);
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
}

function loadNotes() {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));
  if (lsNotes !== null) {
    lsNotes.forEach((noteText) => {
      addNote();
      const notes = document.querySelectorAll(".note textarea");
      console.log('notes', notes);
      const lastNote = notes[notes.length - 1];
      lastNote.value = noteText;
      console.log(lastNote.value);
    });
  } else {
    addNote();
  }
}

loadNotes();
