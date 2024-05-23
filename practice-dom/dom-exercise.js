//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let e2 = document.querySelector("h2#ex42");
let p2 = document.createElement("p");
p2.textContent = "写真表と都市の経度緯度のページです";
//p2.setAttribute("style","text-emphasis:sesame green;")
p2.style.textEmphasis="sesame green";
e2.insertAdjacentElement("afterend",p2);
// 練習4-3 写真表作成プログラム
let e3 = document.querySelector("div#phototable");
let p3_1 = document.createElement("p");
let p3_2 = document.createElement("p");
let p3_3 = document.createElement("p");
let img3_1 = document.createElement("img");
let img3_2 = document.createElement("img");
let img3_3 = document.createElement("img");
img3_1.setAttribute("src","taro.png");
img3_2.setAttribute("src","jiro.png");
img3_3.setAttribute("src","hanako.png");
e3.insertAdjacentElement("beforeend",p3_1);
e3.insertAdjacentElement("beforeend",p3_2);
e3.insertAdjacentElement("beforeend",p3_3);
p3_1.insertAdjacentElement("afterbegin",img3_1);
p3_2.insertAdjacentElement("afterbegin",img3_2);
p3_3.insertAdjacentElement("afterbegin",img3_3);
// 練習4-4 箇条書き削除プログラム
let e4 = document.querySelector("ul#location");
let li4 = document.querySelectorAll("li");
for(let n of li4){
	n.remove();
}
// 練習4-5 箇条書き追加プログラム
/*
let li5 = document.createElement("li");
li5.textContent = data[0].name+" ... 緯度:"+data[0].lat+", 経度:"+data[0].lng;
e4.insertAdjacentElement("afterbegin",li5);
*/
for (let n of data) {
    let li = document.createElement("li");
    li.textContent = n.name + " ... 緯度:" + n.lat + ", 経度:" + n.lng;
    e4.insertAdjacentElement("afterbegin", li);
}

