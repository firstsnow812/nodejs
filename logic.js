'use strict';
const axios = require("axios");
const cheerio = require("cheerio");
const JsonDB = require("node-json-db");
const Config = require("node-json-db/dist/lib/JsonDBConfig");
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');


class logic {
    async getHTML(){
        try {
            return await axios.get(
              "https://www.melon.com/chart/index.htm"
            );
          } catch (err) {
            console.log(err);
          }
   };

// 가져온 웹 페이지를 파싱해서 필요한 정보(강의 정보)만 추출하는 함수
//const parsing = async (page) => {
    async parsing(page){
    const $ = cheerio.load(page); // 웹 페이지를 파싱이 가능한 구조로 로드 시킴
    //console.log("$", $);

    // var db = new JsonDB(new Config("myDataBase", true, false, '/'));
    // db.push("/test1","super test");

    const adapter = new FileSync('db.json');
    const db = low(adapter);
    // 파일이 존재 하지 않을때 기본 값 설정
    db.defaults({ table1:[], table2:[] }).write();
    // 생성
    db.get('table1').push({
        name:'영재',
        age : 27
      }).write();
  
    // 이런 select 하는것도 나중에는 수정해야될듯
    const $courseList = $("table tbody tr");
  
    let courses = []; // 정보를 담을 배열
    $courseList.each((idx, node) => { // 반복문 수행
        // 랭킹 정보
        const rank = $(node).find("td:eq(1) .rank").text();
        // 노래 정보
        const title = $(node).find("td:eq(5) .wrap_song_info div:eq(0) span a").text();
        // 가수 정보
        const singer = $(node).find("td:eq(5) .wrap_song_info div:eq(1) span a").text();
        // 앨범 정보
        const album = $(node).find("td:eq(6) .wrap_song_info div a").text();
        // 좋아요 수
        //const like = $(node).find("td:eq(7) div button .cnt").not(".none").text();

        console.log("rank", rank);
        console.log("title", title);
        console.log("singer", singer);
        console.log("album", album);
        //console.log("like", like);

        courses.push({
            rank: rank,
            title: title,
            singer: singer,
            album: album
          });        
    });
  
    return courses;
  };   

}


module.exports = logic;