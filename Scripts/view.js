class View {
  constructor(controller) {
    this.controller = controller;
    this.render();
  }
  render() {
    document.body.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const tbody = document.createElement("tbody");
    tr.innerHTML += `
          <th class="name-col">Student Name</th>`;
    for (let i = 1; i <= 12; i++) {
      tr.innerHTML += `<th>${i}</th>`;
    }
    tr.innerHTML += `<th class="missed-col">Days Missed-col</th>`;
    thead.append(tr);
    for (let [index, student] of this.controller.modelRows.entries()) {
      const studentTr = document.createElement("tr");
      studentTr.classList.add("student");
      studentTr.innerHTML += `<td class="name-col">${student.name}</td>`;
      let missedSessionsNumber = 0;
      for (let i = 1; i <= this.controller.modelSessionsNum; i++) {
        const td = document.createElement("td");
        td.classList.add("attend-col");
        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        const checked = student.attendance[i - 1];
        input.checked = checked;
        input.addEventListener("click", () => {
          this.controller.handleCheckboxClicked(index, i - 1, !checked);
          this.render();
        });
        if (!checked) {
          missedSessionsNumber++;
        }
        td.append(input);
        studentTr.append(td);
      }
      const missedCol = document.createElement("td");
      missedCol.className = "missed-col";
      missedCol.innerHTML = missedSessionsNumber;
      studentTr.append(missedCol);
      tbody.append(studentTr);
    }
    table.append(thead, tbody);
    document.body.append(table);
  }
}
export { View };
