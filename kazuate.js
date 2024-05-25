// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b1 = document.querySelector("button#b1");
b1.addEventListener("click",hantei);
//hantei();
/*
hantei();
hantei();
hantei();
*/

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let inputDate = document.querySelector('input[name="yoso"]');
  let yoso = inputDate.value;
  yoso = Number(yoso);
  console.log('a');
  console.log(inputDate);
  console.log(yoso);
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  let kaisuId = document.querySelector("span#kaisu");
  let answerId = document.querySelector("span#answer");
  let resultId = document.querySelector("p#result");
  kaisu+=1;
  console.log(kaisu+"回目の予想: "+yoso);
  kaisuId.textContent = kaisu;
  answerId.textContent = yoso;

  if(kaisu<4){
    if(kotae === yoso){
        console.log("正解です．おめでとう!");
        resultId.textContent = "正解です．おめでとう!";
    }
    else if(kaisu===3){
        console.log("まちがい．残念でした答えは "+kotae+" です．");
        resultId.textContent = "まちがい．残念でした答えは "+kotae+" です．";
    }
    else if(kotae>yoso){
        console.log("まちがい．答えはもっと大きいですよ");
        resultId.textContent = "まちがい．答えはもっと大きいですよ";
    }
    else{
        console.log("まちがい．答えはもっと小さいですよ");
        resultId.textContent = "まちがい．答えはもっと小さいですよ";
    }
  }
  else{
    console.log("答えは "+kotae+" でした．すでにゲームは終わっています")
    resultId.textContent = "答えは "+kotae+" でした．すでにゲームは終わっています";
  }
}