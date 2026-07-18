// JSON Object

const singers = [
    {
        name: "Taylor Swift",
        dob: "12/13/1989",
        song: "Cruel Summer",
        hometown: "West Reading, Pennsylvania"
    },
    {
        name: "Ed Sheeran",
        dob: "02/17/1991",
        song: "Perfect",
        hometown: "Halifax, England"
    },
    {
        name: "Adele",
        dob: "05/05/1988",
        song: "Hello",
        hometown: "London, England"
    },
    {
        name: "Bruno Mars",
        dob: "10/08/1985",
        song: "Just The Way You Are",
        hometown: "Honolulu, Hawaii"
    }
];

// Populate Table

window.onload = function () {

    const tableBody = document.getElementById("singerTableBody");

    singers.forEach(function (singer) {

        let row = `
            <tr>
                <td>${singer.name}</td>
                <td>${singer.dob}</td>
                <td>${singer.song}</td>
                <td>${singer.hometown}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });

};