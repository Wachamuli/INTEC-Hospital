export class Client {
  private static idCounter = 0;

  public id: number;
  public name: string;
  public haircut: number;
  public date?: string;
  public time?: string;

  public constructor(name: string, haircut: number, date: Date | null, time: Date | null) {
    Client.idCounter += 1;
    this.id = Client.idCounter;
    this.name = name;
    this.haircut = haircut;
    this.date = date?.toLocaleDateString("en-US");
    this.time = time?.toLocaleString(
      "en-US",
      { hour: "numeric", hour12: true, minute: "numeric" }
    );
  }
}


