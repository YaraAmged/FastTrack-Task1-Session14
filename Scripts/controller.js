class Controller {
  constructor(model) {
    this.model = model;
  }
  get modelRows() {
    return this.model.nameCol;
  }
  get modelSessionsNum() {
    return this.model.sessionsNumber;
  }

  handleCheckboxClicked(studentIndex, attendanceIndex, checked) {
    this.model.nameCol[studentIndex].attendance[attendanceIndex] = checked;
    localStorage.setItem("items", JSON.stringify(this.model.nameCol));
  }
}
export { Controller };
