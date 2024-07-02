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
let divIdBackground = document.createElement("div");
divIdBackground.setAttribute("id","background");
resultId.insertAdjacentElement("beforeend",divIdBackground);

let divIdAnimation = document.createElement("div");
divIdAnimation.setAttribute("id","animation");
divIdBackground.insertAdjacentElement("beforeend",divIdAnimation);

let divIdContents = document.createElement("div");
divIdContents.setAttribute("id","contents");
divIdAnimation.insertAdjacentElement("beforeend",divIdContents);

let label = document.createElement("label");
label.setAttribute("for","kensaku");
label.textContent = "検索キー:"
divIdContents.insertAdjacentElement("beforeend",label);

let input = document.createElement("input");
input.setAttribute("Type","text");
input.setAttribute("name","kensaku");
input.setAttribute("id","kensaku");
input.setAttribute("size","20");
divIdContents.insertAdjacentElement("beforeend",input);

let button = document.createElement("button");
button.setAttribute("id","zikkou");
button.textContent = "検索";
divIdContents.insertAdjacentElement("beforeend",button);


let divIdMain = document.createElement("div");
divIdMain.setAttribute("id","main");
divIdContents.insertAdjacentElement("beforeend",divIdMain);


let divIdMap = document.createElement("div");
divIdMap.setAttribute("id","map");
divIdMain.insertAdjacentElement("beforeend",divIdMap);


let iframe = document.createElement("iframe");
iframe.setAttribute("id","theMap");
iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7570661315866!2d経度を入力してください!3d緯度を入力してください!2m3!1f10!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A場所名を入力してください!2s場所名を入力してください!5e0!3m2!1sen!2sus!4v1610226176309!5m2!1sja!2sjp");
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

/*
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
*/

let p = document.createElement("p");
p.setAttribute("id","kensaku");
p.textContent = "世界の天気(検索結果0件)";
li_1.insertAdjacentElement("beforeend",p);

let ul_2 = document.createElement("ul");
li_1.insertAdjacentElement("beforeend",ul_2);

let li_2 = document.createElement("li");
li_2.textContent="緯度：";
ul_2.insertAdjacentElement("beforeend",li_2);

let li_3 = document.createElement("li");
li_3.textContent="経度：";
ul_2.insertAdjacentElement("beforeend",li_3);

let li_4 = document.createElement("li");
li_4.textContent="天気：";
ul_2.insertAdjacentElement("beforeend",li_4);

let li_5 = document.createElement("li");
li_5.textContent="気温：";
ul_2.insertAdjacentElement("beforeend",li_5);

let li_6 = document.createElement("li");
li_6.textContent="最低気温：";
ul_2.insertAdjacentElement("beforeend",li_6);

let li_7 = document.createElement("li");
li_7.textContent="最高気温：";
ul_2.insertAdjacentElement("beforeend",li_7);

let li_8 = document.createElement("li");
li_8.textContent="湿度：";
ul_2.insertAdjacentElement("beforeend",li_8);

let li_9 = document.createElement("li");
li_9.textContent="風速：";
ul_2.insertAdjacentElement("beforeend",li_9);

let li_10 = document.createElement("li");
li_10.textContent="都市名：";
ul_2.insertAdjacentElement("beforeend",li_10);

button.addEventListener("click",getkey);
button.addEventListener('click', sendRequest);


let key = 0;

function reload(){
  if(key !== 0){
    iframe.setAttribute("src",'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7570661315866!2d'+data.coord.lon+'!3d'+data.coord.lat+'!2m3!1f8!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A場所名を入力してください!2s場所名を入力してください!5e0!3m2!1sen!2sus!4v1610226176309!5m2!1sja!2sjp');
    p.textContent = "世界の天気(検索結果1件)";
    li_2.textContent="緯度："+data.coord.lon;
    li_3.textContent="経度："+data.coord.lat;
    li_4.textContent="天気："+data.weather[0].description;
    li_5.textContent="気温："+data.main.temp+"℃";
    li_6.textContent="最低気温："+data.main.temp_min+"℃";
    li_7.textContent="最高気温："+data.main.temp_max+"℃";
    li_8.textContent="湿度："+data.main.humidity+"%";
    li_9.textContent="風速："+data.wind.speed+"m/s";
    li_10.textContent="都市名："+data.name;
    if(data.weather[0].description === '小雨'){
      divIdAnimation.setAttribute("id","animation_ame");
    }
    else{
      divIdAnimation.setAttribute("id","animation");
    }
  }
  else{
    iframe.setAttribute("src",'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7570661315866!2d!3d!2m3!1f8!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A場所名を入力してください!2s場所名を入力してください!5e0!3m2!1sen!2sus!4v1610226176309!5m2!1sja!2sjp');
    p.textContent = "世界の天気(検索結果0件)";
    li_2.textContent="緯度：";
    li_3.textContent="経度：";
    li_4.textContent="天気：";
    li_5.textContent="気温：";
    li_6.textContent="最低気温：";
    li_7.textContent="最高気温：";
    li_8.textContent="湿度：";
    li_9.textContent="風速：";
    li_10.textContent="都市名：";
    divIdAnimation.setAttribute("id","animation");
  }
  key = 0;
}

//検索キーの取得
function getkey(){
  let i = document.querySelector('input[name="kensaku"]');
  let strkey = i.value;
  console.log("検索キー:"+strkey);

  switch(strkey){
    case 'Cairo':
    case 'カイロ':
    case 'エジプト':
      key = 360630;
    break;

    case 'Moscow':
    case 'モスクワ':
    case 'ロシア':
      key = 524901;
    break;

    case 'Johannesburg':
    case 'ヨハネスブルク':
    case '南アフリカ':
      key = 993800;
    break;

    case 'Beijing':
    case '北京':
    case '中華人民共和国':
      key = 1816670;
    break;

    case 'Tokyo':
    case '東京':
    case '日本':
      key = 1850147;
    break;

    case 'Singapore':
    case 'シンガポール':
    //case '':
      key = 1880252;
    break;

    case 'Sydney':
    case 'シドニー':
    case 'オーストラリア':
      key = 2147714;
    break;

    case 'London':
    case 'ロンドン':
    case 'イギリス':
      key = 2643743;
    break;

    case 'Paris':
    case 'パリ':
    case 'フランス':
      key = 2968815;
    break;

    case 'Rio de Janeiro':
    case 'リオデジャネイロ':
    case 'ブラジル':
      key = 3451189;
    break;

    case 'New York':
    case 'ニューヨーク':
    case 'アメリカ合衆国':
      key = 5128581;
    break;

    case 'Los Angeles':
    case 'ロサンゼルス':
    case 'アメリカ合衆国':
      key = 5368361;
    break;
  }

  /*
  let keyId;
  for(let n of data){
    if(n === key){
      keyId = n.id;
    }
  }
  console.log(keyId);
  */
 console.log(key);
}

// 通信を開始する処理
function sendRequest() {
	// URL を設定
  /*
  while(key !== 0){
    getkey
  }
  */
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+key+'.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
  reload();
}
