
// 関数と宣言

// よくあるやつ

function double(num) {
  return num * 2;
}

console.log(double(10)) // => 20


// return 文の返り値を省略した場合、未定義の値 undefined を返す

function fn() {
  return;
  // return 以降は実行されない
}

console.log(fn()); 

// 関数が何も返す必要がなければ return 文そのものを省略できる
function fn() {
}

console.log(fn()); // => undefined


// 呼び出し時の引数が少ない場合は、余った仮引数には undefined が代入される
function echo(x) {
  return x;
}

console.log(echo(1)); // => 1
console.log(echo()); // => undefined


// デフォルト引数
function echo(x = "デフォルト値") {
  return x;
}

console.log(echo(1)); // => 1
console.log(echo()); // => "デフォルト値"


// こういう場合は無視される
function add(x, y) {
  return x + y;
}

add(1, 3) // => 4
// 5 x でも y でもないので無視される
add(1, 3, 5) // => 4


// 可変長引数
function fn(...args) {
  console.log(args); // => ["a", "b", "c"]
}

fn("a", "b", "c");


// arguments
function fn() {
  console.log(arguments[0]); // => "a"
  console.log(arguments[1]); // => "b"
  console.log(arguments[2]); // => "c"
}

fn("a", "b", "c");


// 関数式
const 変数名 = function() {
    // 関数を呼び出したときの処理
    // ...
  return 関数の返り値;
};


// Arrow Functionを使った関数定義
const 変数名 = () => {
    // 関数を呼び出したときの処理
    // ...
  return 関数の返す値;
};

// 仮引数の数と定義
const fnA = () => { /* 仮引数がないとき */ };
const fnB = (x) => { /* 仮引数が1つのみのとき */ };
const fnC = x => { /* 仮引数が1つのみのときは()を省略可能 */ };
const fnD = (x, y) => { /* 仮引数が複数のとき */ };
// 値の返し方
// 次の２つの定義は同じ意味となる
const mulA = x => { return x * x; }; // ブロックの中でreturn
const mulB = x => x * x;            // 1行のみの場合はreturnとブロックを省略できる


function fn(x) {
  return `最初の関数 x: ${x}`;
}
function fn(x, y) {
  return `最後の関数 x: ${x}, y: ${y}`;
}
console.log(fn(2, 10)); // => "最後の関数 x: 2, y: 10"


// コールバック関数
const array = [1, 2, 3];
array.forEach((value) => {
  console.log(value);
});


// メソッド
const obj = {
  method1: function() {
        // `function`キーワードでのメソッド
  },
  method2: () => {
        // Arrow Functionでのメソッド
  }
};


const obj = {
  method: function() {
    return "this is method";
  }
};
console.log(obj.method()); // => "this is method"


// メソッドの短縮 (こっちの方がシンプル)
const obj = {
  method() {
    return "this is method";
  }
};
console.log(obj.method()); // => "this is method"


