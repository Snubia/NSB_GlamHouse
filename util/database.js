const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = callback => {
    MongoClient.connect(
        "mongodb+srv://Babila:GlamHouse@glamhouse.4byzd.mongodb.net/<dbname>?retryWrites=true&w=majority"
    ).then(client => {
        console.log('Mongodb connected');
        _db = client.db();
        callback();
    }).catch(err => {
        console.log(err);
        throw err;
    });
};
const getDb = () = {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;