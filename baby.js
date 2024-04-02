document.getElementById('babyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    const babyName = document.getElementById('babyName').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const broughtBy = document.getElementById('broughtBy').value;
    const arrivalTime = document.getElementById('arrivalTime').value;
    const parentsNames = document.getElementById('parentsNames').value;
    const feePaid = document.getElementById('feePaid').value;
    const periodOfStay = document.getElementById('periodOfStay').value;
    const babyNumber = document.getElementById('babyNumber').value;
    const setOffTime = document.getElementById('setOffTime').value;

    // Create baby object
    const baby = {
        babyName,
        gender,
        age,
        location,
        broughtBy,
        arrivalTime,
        parentsNames,
        feePaid,
        periodOfStay,
        babyNumber,
        setOffTime
    };

    // Store baby data in local storage
    let babies = JSON.parse(localStorage.getItem('babies')) || [];
    babies.push(baby);
    localStorage.setItem('babies', JSON.stringify(babies));

    // Refresh baby table
    displayBabyTable();

    // Reset form
    document.getElementById('babyForm').reset();
});

// Display baby information in a table
function displayBabyTable() {
    const babies = JSON.parse(localStorage.getItem('babies')) || [];
    const table = document.getElementById('babyTable');
    table.innerHTML = '';
    let tableHTML = `
        <table>
            <tr>
                <th>Baby's Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Location</th>
                <th>Brought By</th>
                <th>Arrival Time</th>
                <th>Parents' Names</th>
                <th>Fee Paid</th>
                <th>Period of Stay</th>
                <th>Baby Number</th>
                <th>Set Off Time</th>
            </tr>
    `;
    babies.forEach(baby => {
        tableHTML += `
            <tr>
                <td>${baby.babyName}</td>
                <td>${baby.gender}</td>
                <td>${baby.age}</td>
                <td>${baby.location}</td>
                <td>${baby.broughtBy}</td>
                <td>${baby.arrivalTime}</td>
                <td>${baby.parentsNames}</td>
                <td>${baby.feePaid}</td>
                <td>${baby.periodOfStay}</td>
                <td>${baby.babyNumber}</td>
                <td>${baby.setOffTime}</td>
            </tr>
        `;
    });
    tableHTML += `</table>`;
    table.innerHTML = tableHTML;

    // Update summary card
    const summaryCard = document.getElementById('summaryCard');
    const totalBabies = babies.length;
    summaryCard.innerHTML = `
        <h3>Summary</h3>
        <p>Total Babies: ${totalBabies}</p>
    `;
}

// Display initial baby table
displayBabyTable();
