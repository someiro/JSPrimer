
// 基本 const と let

// const
// 再代入不可な変数
const 変数名 = "初期値";
const bookTitle = "JavaScript Primer";

const bookTitle = "JavaScript Primer",
      bookCategory = "プログラミング";

const bookTitle = "JavaScript Primer";
bookTitle = "新しいタイトル"; // => TypeError: invalid assignment to const 'bookTitle'

// let
// 再代入可能な変数
let bookTitle = "JavaScript Primer";
let bookTitle; // `bookTitle`は自動的に`undefined`

let bookTitle;
bookTitle = "JavaScript Primer";

let count = 0;
count = 1;
count = 2;
count = 3;

// NGな命名
let 1st; // NG: 数字から始まっている
let 123; // NG: 数字のみで構成されている

let let; // NG: `let`は変数宣言のために予約されているので利用できない
let if; // NG: `if`はif文のために予約されているので利用できない


// const は定数ではない
// TEN_NUMBERという変数は常に10という値を示す
const TEN_NUMBER = 10;


// `const`でオブジェクトを定義している
const object = {
    key: "値"
};
// オブジェクトそのものは変更できてしまう
object.key = "新しい値";

// constで宣言した変数が常に同じ値を示すとは限らない => 定数とは呼べない


