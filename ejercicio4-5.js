window.onload = function () {
    const tabla = document.createElement("table");
    document.body.appendChild(tabla);
    for (let i = 0; i < 180; i++) {
      const row = document.createElement("tr");
      tabla.appendChild(row);
      for (let j = 0; j < 380; j++) {
        let cell = document.createElement("td");
        cell.onmouseover = function (e) {
          if (e.ctrlKey) {
            this.style.backgroundColor = "red";
          }
          if (e.shiftKey) {
            this.style.backgroundColor = "blue";
          }
          if (e.altKey) {
            this.style.backgroundColor = "white";
          }
        };
        row.appendChild(cell);
      }
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === " ") {
          let tds = document.querySelectorAll("td");
          tds.forEach((td) => {
            td.style.backgroundColor = "white";
          });
        }
      });
    };