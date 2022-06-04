import { Client } from "./client";
import { createClient, updateQueue, deleteClient } from "./crud";

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div id="grid">
    <div id="left-side">
      <form>
        <h1 id="title">INTEC Hospital</h1>
        <div class="control">
          <label>Patient name?</label>
          <input id="name" type="text"/>
        </div>

        <div class="control">
          <label>Illness</label>
          <input id="illness" type="text"/>
        </div>

        <div id="datetime-container">
          <div class="control">
            <label>Date</label>
            <input id="date" type="date"/> 
          </div>
          <div class="control">
            <label>Time</label>
            <input id="time" type="time"/>
          </div>
        </div>
        <button id="submit-btn" class="btn" type="submit">Submit</button>
      </form>

      <div class="delete-container">
        <input id="delete" class="input" type="number" />
        <button id="delete-btn" class="btn delete-btn">DELETE</button>
      </div>
    </div>

    <div id="right-side">
      <div id="queue"></div>
    </div>
    
  </div>
`;

const name = document.getElementById("name") as HTMLInputElement;
const illness = document.getElementById("illness") as HTMLInputElement;
const date = document.getElementById("date") as HTMLInputElement;
const time = document.getElementById("time") as HTMLInputElement;

const submitBtn = document.getElementById("submit-btn");
const deleteId = document.getElementById("delete") as HTMLInputElement;
const deleteBtn = document.getElementById("delete-btn");
const queue = document.getElementById("queue");

function cleanupForm() {
  name.value    = "";
  illness.value = "";
  date.value    = "";
  time.value    = "";
}

submitBtn?.addEventListener("click", (evt: MouseEvent) => {
  evt.preventDefault();
  const newClient = new Client(
    name.value,
    parseFloat(illness.value),
    date.valueAsDate,
    time.valueAsDate,
  );
  createClient(newClient);
  updateQueue(queue);
  cleanupForm();
});

deleteBtn?.addEventListener("click", () => {
  deleteClient(parseFloat(deleteId.value));
  updateQueue(queue);
})
