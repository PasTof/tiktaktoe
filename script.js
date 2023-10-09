let fields = [null, 'circle', null, null, 'cross', null, 'circle', null, null];

function render() {
  const contentDiv = document.getElementById('content');
  const table = document.createElement('table');

  for (let i = 0; i < 3; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement('td');
      const index = i * 3 + j;
      cell.textContent = fields[index];
      if (fields[index] === 'circle') {
        cell.classList.add('circle');
      } else if (fields[index] === 'cross') {
        cell.classList.add('cross');
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  contentDiv.innerHTML = ''; // Löscht den vorherigen Inhalt
  contentDiv.appendChild(table);
}

render();
