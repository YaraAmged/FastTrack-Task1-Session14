class Model {
  constructor() {
    this.sessionsNumber = 12;
    const defaultRow = [
      {
        attendance: new Array(this.sessionsNumber).fill(false),
        name: "Slappy the Frog",
      },
      {
        attendance: new Array(this.sessionsNumber).fill(false),
        name: "Lilly the Lizard	",
      },
      {
        attendance: new Array(this.sessionsNumber).fill(false),
        name: "Paulrus the Walrus",
      },
      {
        attendance: new Array(this.sessionsNumber).fill(false),
        name: "Gregory the Goat	",
      },
      {
        attendance: new Array(this.sessionsNumber).fill(false),
        name: "Adam the Anaconda",
      },
    ];
    const itemsFromLocalStorage = localStorage.getItem("items");
    this.nameCol = itemsFromLocalStorage
      ? JSON.parse(itemsFromLocalStorage)
      : defaultRow;
  }
}
export { Model };
