'use strict';
const model = require('./model');

// 이걸로 호출이 됨
exports.test = async (req, res) => {
    const result = await model.test();

    res.send(result);
    console.log("test");
};