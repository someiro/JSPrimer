// 条件分岐

if (条件式) {
  console.log("この行が実行される"); 
}

// 実行する文が一つの場合は{}ブロックを省略できる
if (true) 
  console.log("この行が実行される")


const x = 42;
if (x > 10) {
  console.log("xは10より大きな値です");
}

// 真偽値以外も指定可能
// 真偽値以外の場合は暗黙的型変換が走る

// Falsy な値
/* 
  false
  undefined
  null
  0
  0n
  NaN
  ""
*/

if (true) {
  console.log("この行は実行されます");
}
if ("文字列") {
  console.log("この行は実行されます");
}
if (42) {
  console.log("この行は実行されます");
}
if (["配列"]) {
  console.log("この行は実行されます");
}
if ({ name: "オブジェクト" }) {
  console.log("この行は実行されます");
}


// else if 文
const version = "ES6";

if (version === "ES5") {
  console.log("ECMAScript 5");
} else if (version === "ES6") {
  console.log("ECMAScript 2015");
} else if (version === "ES7") {
  console.log("ECMAScript 2016");
}


// else 文
const num = 1;
if (num > 10) {
  console.log(`numは10より大きいです: ${num}`);
} else {
  console.log(`numは10以下です: ${num}`);
}



// switch 文
const version = "ES6";
switch (version) {
  case "ES5":
      console.log("ECMAScript 5");
      break;
  case "ES6":
      console.log("ECMAScript 2015");
      break;
  case "ES7":
      console.log("ECMAScript 2016");
      break;
  default:
      console.log("しらないバージョンです");
      break;
}
// "ECMAScript 2015" と出力される


// break 文
/*
  break 文 を使って switch 文を抜ける
  break; は省略可能
  省略した場合、後ろに続く case 節 が条件に関係なく実行される
*/

function getECMAScriptName(version) {
  switch (version) {
    case "ES5":
      return "ECMAScript 5";
    case "ES6":
      return "ECMAScript 2015";
    case "ES7":
      return "ECMAScript 2016";
    default:
      return "しらないバージョンです";
  }
}
// 関数を実行して`return`された値を得る
getECMAScriptName("ES6"); // => "ECMAScript 2015"




