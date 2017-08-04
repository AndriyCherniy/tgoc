let mongoose = require('mongoose').connect('mongodb://127.0.0.1:27017/tgoc', {useMongoClient: true});
let mongd = require('mongoose');
let db = require('mongodb');
let conn = db.MongoClient;
let mongooseschema = mongoose.Schema;
let mongdschema = mongd.Schema;


let playerSchema = mongdschema({
    nickname : String,
    coins: Number,
    EXP: Number,
    LV: Number,
    rank: String,
    VIP: Boolean,
    Admin: Boolean,
    Custom: Boolean,
    BetaTester: Boolean
});

let Player = mongoose.model("Player", playerSchema);










module.exports.findById = function(id, cb) {
    process.nextTick(function() {
        let idx = id - 1;
        if (records[idx]) {
            cb(null, records[idx]);
        } else {
            cb(new Error('User ' + id + ' does not exist'));
        }
    });
};

module.exports.findByUsername = function(username, cb) {
    process.nextTick(function() {
        for (let i = 0, len = records.length; i < len; i++) {
            let record = records[i];
            if (record.username === username) {
                return cb(null, record);
            }
        }
        return cb(null, null);
    });
};


module.exports.findPlayers = whatfind => {
    let yay = false;
    let findedPlayers;
    console.log("test")
    let connectionpromise = new Promise((resolve, reject) => {

        conn.connect('mongodb://127.0.0.1:27017/tgoc', (err, db) => {

            console.log("0")
            if (whatfind = undefined) {
                let players = db.collection('players');
                findedPlayers = players.find();
                resolve("!whatfind");

            } else {
                if (typeof whatfind === "object") {
                    let players = db.collection('players');
                    let findedPlayers = players.find(whatfind);
                    resolve("whatfind");
                } else {
                    reject(`${whatfind} is not object`);
                }
            }

            db.close();
        });

    });
    return connectionpromise;
    // connectionpromise.then(result => {
    //     console.log("1");
    //         yay = true;
    //     },
    //     error => {
    //         console.log(`Oops, ${error}`);
    //     });
    //     console.log("2");
    //     if (yay) {
    //         return findedPlayers;
    //     }
};