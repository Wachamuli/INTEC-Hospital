export class Client {
  public name: string;
  public haircut: number;
  public date?: string;
  public time?: string;

  public constructor(name: string, haircut: number, date: Date | null, time: Date | null) {
    this.name = name;
    this.haircut = haircut;
    this.date = date?.toLocaleDateString("en-US");
    this.time = time?.toLocaleString(
      "en-US",
      { hour: "numeric", hour12: true, minute: "numeric" }
    );
  }

  toString() {
    return `
      <label>Name: ${this.name}</label>
      <label>Haircut: ${this.haircut}</label>
      <label>Date: ${this.date}</label>
      <label>Time: ${this.time}</label>
    `;
  }
}


