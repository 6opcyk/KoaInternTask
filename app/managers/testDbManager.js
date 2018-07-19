var Memcached = require('memcached');
memcached = new Memcached( "localhost:11211" );
var auto_increment = 1;

getGood: function getGood(id) {
    return new Promise((resolve, reject) => {
        memcached.get(id.toString(), function (err, data) {
            resolve(data);
        });
    });
}

//curl -XPOST "http://localhost:8081/goods" -d '{"row":"Hello!"}' -H 'Content-Type: application/json'

setGood: function setGood(value) {
    return new Promise((resolve, reject) => {
        memcached.set(auto_increment.toString(), value.row, 120, function (err) {
            resolve(auto_increment);
            auto_increment++;
        });
    });
}

delGood: function delGood(id) {
    return new Promise((resolve, reject) => {
        memcached.del(id.toString(), function (err) {
            resolve("Deleted!");
        });
    });
}

module.exports = {getGood, setGood, delGood};