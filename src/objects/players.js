const players = [
    {
        id: 1,
        firstName: "Michael",
        lastName: "Borohov",
        displayName: "M.Borohov",
        jersey: 3,
        imgURL: "../images/default.png",
        team: "WSC-West",
        stats: {
            ppg: 75,
            rpg: 13,
            apg: 33
        }
    },
    {
        id: 2,
        firstName: "Amir",
        lastName: "Tawig",
        displayName: "A.Tawig",
        jersey: 42,
        imgURL: "../images/default.png",
        team: "WSC-East",
        stats:{
            ppg: 62,
            rpg: 11,
            apg: 88
        }
    },
    {
        id:3,
        firstName: "",
        lastName: "",
        displayName: "",
        jersey: "",
        imgURL: "../images/default.png",
        team: "",
        stats:{
            ppg: "",
            rpg: "",
            apg: ""
        }
    }
];


export default players;

/*

When you will fetch the data from API this is how you will parse it and use it.

const myJson = [{"id":1,"firstName":"Michael","lastName":"Borohov","displayName":"M.Borohov","jersey":3,"imgURL":"../images/default.png","team":"WSC-West","stats":{"ppg":75,"rpg":13,"apg":33}},{"id":2,"firstName":"Amir","lastName":"Tawig","displayName":"A.Tawig","jersey":42,"imgURL":"../images/default.png","team":"WSC-East","stats":{"ppg":62,"rpg":11,"apg":88}},{"id":3,"firstName":"","lastName":"","displayName":"","jersey":"","imgURL":"../images/default.png","team":"","stats":{"ppg":"","rpg":"","apg":""}}];

const players = JSON.parse(JSON.stringify(myJson));

console.log(players);

*/
