const knex = require('./knex');

function updatePiValue (pi) {
    return knex("pi").where("id", 1).update(pi);
}

function getCurrentPrecision() {
    return knex("pi").where("id", 1).select("precision");
}
function getPi() {
    return knex("pi").where("id", 1).select("*");
}

module.exports = {
    updatePiValue,
    getCurrentPrecision,
    getPi
}