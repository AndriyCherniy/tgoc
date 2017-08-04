let pjs = new PointJS('2D', 1200, 720, {});
// function getCookie(name) {
//     let matches = document.cookie.match(new RegExp(
//         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     return matches ? decodeURIComponent(matches[1]) : undefined;
// }
//if (getCookie("session") == undefined)
//   document.location.href = "/register.html";

// pjs.system.initFullScreen(); // for Full Screen mode (only Desctop)

let log    = pjs.system.log;     // log = console.log;
let game   = pjs.game;           // Game Manager
let point  = pjs.vector.point;   // Constructor for Point
let camera = pjs.camera;         // Camera Manager
let brush  = pjs.brush;          // Brush, used for simple drawing
let OOP    = pjs.OOP;            // Objects manager
let math   = pjs.math;           // More Math-methods
let levels = pjs.levels;         // Levels manager

 let key   = pjs.keyControl.initKeyControl();
 let mouse = pjs.mouseControl.initMouseControl();
// let touch = pjs.touchControl.initTouchControl();
// let act   = pjs.actionControl.initActionControl();

let width  = game.getWH().w; // width of scene viewport
let height = game.getWH().h; // height of scene viewport

pjs.system.setTitle('PointJS Game'); // Set Title for Tab or Window

let Andrmist = {
    nickname : "Andrmist",
    coins: 9999999999,
    EXP: 0,
    LV: 0,
    rank: "King nof the Kings",
    VIP: false,
    Admin: true,
    Custom: false,
    BetaTester: true
};



let pl = game.newImageObject({
    file: "img/skinpn.png",
    x : 0,
    y : 0,
    scale: 3
});

let village = game.newImageObject({
    file: "img/village.png",
    x : 100,
    y : 100,
    scale: 0.3
});

let villageName = game.newTextObject({
    text: "Пикарасово",
    x: 500,
    y: 20,
    size:21,
    color: '#000',
    strokeColor: '#5c5c5c',
    strokeWidth: 2
});
let villageBuildButton = game.newTextObject({
    text: "Построить",
    x: 500,
    y: 60,
    size:21,
    color: '#7ebcff'
});
let moneyText = game.newTextObject({
    text: "Монеты: ",
    x: 0,
    y: 0,
    size: 24,
    color: "#ffd300",
    setVisible: false
});
let moneyImage = game.newImageObject({
    file: 'img/Coin.png',
    x: 0,
    y: 0,
    scale: 0.1,
    setVisible:moneyText.setVisible
});

function showMoney(playerBalance, x, y) {
    moneyText.x = x;
    moneyText.y = y;
    moneyImage.x = moneyText.x - 20;
    moneyImage.y = moneyText.y - 5;
    moneyText.text = moneyText.text + playerBalance.coins;
    moneyText.draw();
    moneyImage.draw();
}



// Game Loop
game.newLoop('myGame', function () {
    game.clear();
    game.fill('#2bff00');

    camera.setPositionC(pl.getPosition(1));

    if (key.isDown('UP')) {
        pl.move(point(0, -2.2));

    }
    if (key.isDown('DOWN')) {
        pl.move(point(0, 2.2));

    }
    if (key.isDown('LEFT')) {
        pl.move(point(-2.2, 0));

    }
    if (key.isDown('RIGHT')) {
        pl.move(point(2.2, 0));

    }
    let dist = pl.getDistanceC(village.getPosition(1));
    if (dist < 100) {
        village.drawDynamicBox('white');
        if (key.isPress('SPACE'))
            game.setLoop('village');
    }
    if (key.isPress('N'))
        game.setLoop('village');
    if (key.isPress('B'))
        game.setLoop('build');


    village.draw();
    pl.draw();

});

game.newLoop('village', function () {
    game.clear();
    game.fill('#ff7d00');

    if (mouse.isPeekObject('LEFT', villageBuildButton))
        game.setLoop('build');

    villageName.draw();
    villageBuildButton.draw();
});

game.newLoop('build', function () {
    game.clear();
    game.fill('#ff7d00');

    villageName.text = 'Построить:';
    showMoney(Andrmist, 800, 30);

});

game.startLoop('myGame');