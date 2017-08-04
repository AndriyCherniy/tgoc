let Andrmist = new Player({
    nickname : "Andrmist",
    coins: 9999999999,
    EXP: 0,
    LV: 0,
    rank: "King nof the Kings",
    VIP: false,
    Admin: true,
    Custom: false,
    BetaTester: true
});

let saving = new Promise((resolve, reject) => {
    Andrmist.save(err => {
        if (err) {reject("Error")} else {resolve("Ok")}
    });
});

saving.then(result => {
        // первая функция-обработчик - запустится при вызове resolve
        console.log("Result: " + result); // result - аргумент resolve
    },
    error => {
        console.log("Result: " + error);
});