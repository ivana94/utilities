module.exports.generateArrayOfN = (n, callback) =>
    [...new Array(n)].map(callback);
