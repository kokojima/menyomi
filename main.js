//変数の設定
let answer, btnAdd;

//診断結果用の変数
let ans = "";

//質問回答回数のカウンター（4になると質問完了、診断結果表示）
let qn = 0;

//質問のリスト
contents = [
  "麺の色は白いですか？",
  "こってりしていますか？",
  "麺は太いですか？",
  "インスタント食品になっていますか？",
];

//診断結果のリスト
diagnosis = [
  "つけめん",
  "きしめん",
  "そうめん・ひやむぎ",
  "うどん",
  "そば",
  "冷やし中華",
  "ラーメン",
  "パスタ",
  "焼きそば",
  "わかりません...",
];

//イベント処理を実行するメソッドの設定
document.querySelector("#btn_start").addEventListener("click", getStart);
document.querySelector("#btn_yes").addEventListener("click", yesCount);
document.querySelector("#btn_no").addEventListener("click", noCount);
document.querySelector("#reset").addEventListener("click", reStart);

//DOMの設定
let q = document.querySelector("h4");
let result = document.querySelector("h3");
let a = document.querySelector("#guess");
document.getElementById("btn_yes").style.visibility = "hidden";
document.getElementById("btn_no").style.visibility = "hidden";
document.getElementById("reset").style.visibility = "hidden";
document.getElementById("bubble").style.visibility = "hidden";
const tl = document.getElementById("titleLogo");
const by = document.getElementById("btn_yes");
const bn = document.getElementById("btn_no");
const bs = document.getElementById("btn_start");
const bl = document.getElementById("bubble");

//診断のセリフ（共通部分）を最初は非表示にしておく
a.style.visibility = "hidden";

//「PLAY」ボタン押下時の動き
function getStart() {
  by.style.visibility = "visible";
  bn.style.visibility = "visible";
  bl.style.visibility = "visible";
  q.innerHTML = contents[0];
  // console.log(q.innerHTML);
  bs.style.visibility = "hidden";
}

//診断成功時イラスト
successPic = "./img/menyomiDoya.png";
//診断失敗時イラスト
failPic = "./img/menojiGaan.png";

//結果判定表示用の関数
function finalResult(x) {
  ans = ans.concat(String(x));
  let f = document.querySelector("#ojiFace");
  switch (ans) {
    case "0110":
      result.innerHTML = diagnosis[0];
      f.src = successPic;
      break;
    case "1010":
      result.innerHTML = diagnosis[1];
      f.src = successPic;
      break;
    case "1000":
      result.innerHTML = diagnosis[2];
      f.src = successPic;
      break;
    case "1011":
      result.innerHTML = diagnosis[3];
      f.src = successPic;
      break;
    case "0001":
      result.innerHTML = diagnosis[4];
      f.src = successPic;
      break;
    case "0000":
      result.innerHTML = diagnosis[5];
      f.src = successPic;
      break;
    case "0101":
      result.innerHTML = diagnosis[6];
      f.src = successPic;
      break;
    case "1100":
      result.innerHTML = diagnosis[7];
      f.src = successPic;
      break;
    case "0111":
      result.innerHTML = diagnosis[8];
      f.src = successPic;
      break;
    default:
      f.src = failPic;
      result.innerHTML = diagnosis[9];
  }
  q.style.display = "none";
  by.style.display = "none";
  bn.style.display = "none";
  a.style.visibility = "visible";
  // console.log(result.innerHTML);
}

//「はい」ボタン押下時に作動する関数
function yesCount() {
  if (qn == 0) {
    const rs = document.getElementById("reset");
    rs.style.visibility = "visible";
    ans = ans.concat("1");
    qn = qn + 1;
    q.innerHTML = contents[qn];
    // console.log(q.innerHTML);
    // console.log(ans);
  } else if (qn < 3 && qn > 0) {
    qn = qn + 1;
    ans = ans.concat("1");
    q.innerHTML = contents[qn];
    // console.log(q.innerHTML);
    // console.log(ans);
  } else {
    finalResult(1);
  }
}

//「いいえ」ボタン押下時に作動する関数
function noCount() {
  if (qn == 0) {
    const rs = document.getElementById("reset");
    rs.style.visibility = "visible";
    ans = ans.concat("0");
    qn = qn + 1;
    q.innerHTML = contents[qn];
    // console.log(q.innerHTML);
    // console.log(ans);
  } else if (qn < 3 && qn > 0) {
    qn = qn + 1;
    ans = ans.concat("0");
    q.innerHTML = contents[qn];
    // console.log(q.innerHTML);
    // console.log(ans);
  } else {
    finalResult(0);
  }
}

//「BACK」ボタンおよびヘッダーのロゴを押下時の動き（再読み込み）
function reStart() {
  window.location.reload();
}
