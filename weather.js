let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

console.log("緯度："+data.coord.lon);
console.log("経度："+data.coord.lat);
console.log("天気："+data.weather[0].description);
console.log("気温："+data.main.temp+"℃");
console.log("最低気温："+data.main.temp_min+"℃");
console.log("最高気温："+data.main.temp_max+"℃");
console.log("湿度："+data.main.humidity+"%");
console.log("風速："+data.wind.speed+"m/s");
console.log("都市名："+data.name);

console.log("風向き："+data.wind.deg);

////////////////////////////////////
let resultId = document.querySelector("div#result")
let divIdZentai = document.createElement("div");
divIdZentai.setAttribute("id","zentai");
resultId.insertAdjacentElement("beforeend",divIdZentai);

let input = document.createElement("input");
divIdZentai.insertAdjacentElement("beforeend",input);


let divIdMain = document.createElement("div");
divIdMain.setAttribute("id","main");
divIdZentai.insertAdjacentElement("beforeend",divIdMain);


let divIdMap = document.createElement("div");
divIdMap.setAttribute("id","map");
divIdMain.insertAdjacentElement("beforeend",divIdMap);


let iframe = document.createElement("iframe");
iframe.setAttribute("id","theMap");
iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7570661315866!2d経度を入力してください!3d緯度を入力してください!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A場所名を入力してください!2s場所名を入力してください!5e0!3m2!1sen!2sus!4v1610226176309!5m2!1sen!2sus");
iframe.setAttribute("width","600");
iframe.setAttribute("height","450");
iframe.setAttribute("loading","lazy");
divIdMap.insertAdjacentElement("beforeend",iframe);

let divIdDate = document.createElement("div");
divIdDate.setAttribute("id","data");
divIdMain.insertAdjacentElement("beforeend",divIdDate);

let ul_1 = document.createElement("ul");
divIdDate.insertAdjacentElement("beforeend",ul_1);

let li_1 = document.createElement("li");
ul_1.insertAdjacentElement("beforeend",li_1);

let p = document.createElement("p");
p.setAttribute("id","kensaku");
p.textContent = "世界の天気(検索結果1件)";
li_1.insertAdjacentElement("beforeend",p);

let ul_2 = document.createElement("ul");
li_1.insertAdjacentElement("beforeend",ul_2);

let li_2 = document.createElement("li");
li_2.textContent="緯度："+data.coord.lon;
ul_2.insertAdjacentElement("beforeend",li_2);

let li_3 = document.createElement("li");
li_3.textContent="経度："+data.coord.lat;
ul_2.insertAdjacentElement("beforeend",li_3);

let li_4 = document.createElement("li");
li_4.textContent="天気："+data.weather[0].description;
ul_2.insertAdjacentElement("beforeend",li_4);

let li_5 = document.createElement("li");
li_5.textContent="気温："+data.main.temp+"℃";
ul_2.insertAdjacentElement("beforeend",li_5);

let li_6 = document.createElement("li");
li_6.textContent="最低気温："+data.main.temp_min+"℃";
ul_2.insertAdjacentElement("beforeend",li_6);

let li_7 = document.createElement("li");
li_7.textContent="最高気温："+data.main.temp_max+"℃";
ul_2.insertAdjacentElement("beforeend",li_7);

let li_8 = document.createElement("li");
li_8.textContent="湿度："+data.main.humidity+"%";
ul_2.insertAdjacentElement("beforeend",li_8);

let li_9 = document.createElement("li");
li_9.textContent="風速："+data.wind.speed+"m/s";
ul_2.insertAdjacentElement("beforeend",li_9);

let li_10 = document.createElement("li");
li_10.textContent="都市名："+data.name;
ul_2.insertAdjacentElement("beforeend",li_10);

