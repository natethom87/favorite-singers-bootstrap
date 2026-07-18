// JSON Object
const singers = [
    {
        name: "Brad Paisley",
        dob: "10/28/1972",
        song: "Whiskey Lullaby",
        hometown: "Glen Dale, West Virginia"
    },
    {
        name: "Lionel Richie",
        dob: "06/20/1949",
        song: "Stuck on You",
        hometown: "Tuskegee, Alabama"
    },
    {
        name: "Nas",
        dob: "09/14/1973",
        song: "Street Dreams",
        hometown: "Queens, New York"
    },
    {
        name: "The Notorious B.I.G.",
        dob: "05/21/1972",
        song: "What's Beef?",
        hometown: "Brooklyn, New York"
    }
];

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