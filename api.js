'use strict';
const axios = require("axios");
const cheerio = require("cheerio");
const Logic = require('./logic');

// 이걸로 호출이 됨
exports.test = async (req, res) => {
    const logic = new Logic();
    const html = await logic.getHTML();
    const result = await logic.parsing(html.data);
    console.log(result);





    res.json(result);
};