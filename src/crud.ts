import { Client } from "./client";

export let database: Client[] = [];

export function createClient(client: Client) {
  database.push(client);
}

export function updateQueue(queue: HTMLElement | null) {
  let citesList = database.map((client) => 
    `<label>${client.id}. ${client.name} ${client.date} ${client.time}</label>`
  )
  .join("<br>");

  if (queue) 
    queue.innerHTML = citesList;
}

export function deleteClient(clientId: number) {
  const updatedDatabase = database.filter(client => !(client.id == clientId));
  database = [...updatedDatabase];
}