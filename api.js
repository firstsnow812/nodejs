'use strict';

// 이걸로 호출이 됨
exports.test = async (req, res) => {
    res.send("test");
    console.log("test");
};