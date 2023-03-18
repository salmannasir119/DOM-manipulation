const table = document.getElementById('my-table');
const headerCells = table.querySelectorAll('th');

headerCells.forEach(cell => {
	cell.addEventListener('click', () => {
		const headerIndex = Array.from(headerCells).indexOf(cell);
		const rows = Array.from(table.querySelectorAll('tbody tr'));

		rows.sort((a, b) => {
			const aText = a.cells[headerIndex].textContent.trim();
			const bText = b.cells[headerIndex].textContent.trim();
			return aText.localeCompare(bText, undefined, { numeric: true });
		});

		table.querySelector('tbody').append(...rows);
	});
});
