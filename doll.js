document.addEventListener("DOMContentLoaded", function() {
    fetch('/dolls')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('dollsTableBody');
            data.forEach(doll => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${doll.name}</td>
                    <td>${doll.price}</td>
                    <td>${doll.number}</td>
                    <td><button onclick="window.location.href='/sell.html'">Sell</button></td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching dolls:', error));
});