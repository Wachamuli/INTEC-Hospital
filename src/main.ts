import { Client } from "./client";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div id="grid">
    <div id="left-side">
      <h1 id="title">Beautiful Beards</h1>
      <form>
        <div class="control">
          <label>What's your name?</label>
          <input id="name" type="text"/>
        </div>

        <div class="control">
          <label>Haircut</label>
          <input id="haircut" type="text"/>
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
      </form>

      <button id="submit-btn" class="btn" type="submit">Submit</button>
    </div>

    <div id="right-side">
      <div id="cites"></div>
    </div>
    
  </div>
`;

const name = document.getElementById("name") as HTMLInputElement;
const haircut = document.getElementById("haircut") as HTMLInputElement;
const date = document.getElementById("date") as HTMLInputElement;
const time = document.getElementById("time") as HTMLInputElement;

const submitBtn = document.getElementById("submit-btn");
const cites = document.getElementById("cites");

let database: Client[] = [new Client("Default", 1, new Date(2), new Date(1))];

function render_queue() {
  if (cites) cites.innerHTML = `${database.map(client => (
    `<label>${client.name} ${client.date} ${client.time}</label>`
  ))}`;
}

submitBtn?.addEventListener("click", (evt: MouseEvent) => {
  evt.preventDefault();
  database.push(
    new Client(
      name.value,
      parseFloat(haircut.value),
      date.valueAsDate,
      time.valueAsDate
    )
  )
  render_queue()
});

