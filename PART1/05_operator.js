
// 演算子

1 + 2;

/*
  足し算は "+" 演算子が値同士を足し算する加算演算を行っている
  このとき、"+" 演算子の対象になっている "1" と "2" という２つの値が 「オペランド」
*/

// 二項演算子

/*
  左オペランド 演算子 右オペランド
*/

// 単項演算子

let num = 1;

num++;
// or
++num;

/*
  １つの演算子に対して１つのオペランドだけを取るものも存在する
  => 単項演算子
  例えば、数値をインクリメントする "++" 演算子
  前後どちらか一方にオペランドを置く
*/



// 二項演算子

// プラス演算子 "+"
// ２つの数値を加算する演算子

console.log(1 + 1);

// 文字列結合演算子 "+"
// 数値の加算に利用したプラス演算子は文字列の結合にも利用することができる

const value = "文字列" + "結合";
console.log(value);

// マイナス演算子 "-"
// ２つの数値を減算する演算子

console.log(1 - 1);

// 乗算演算子 "*"
// ２つの数値を乗算する演算子

console.log(2 * 8);

// 除算演算子 "/"
// ２つの数値を除算する演算子

console.log(8 / 2);

// 任意の数値を 0 で除算した結果は、無限大を表す Infinity を返す
console.log(10 / 0); // => Infinity

// 剰余演算子 "%"
// ２つの数値を除算したあまりを求める演算子

console.log(8 % 2);

// べき乗演算子 "**"
// ２つの数値のべき乗を求める演算子

console.log(2 ** 4);

// べき乗演算子と同じ動作をする "Math.pow" 静的メソッドが存在する

console.log(Math.pow(2, 4));



// インクリメント演算子 "++"

let num = 1;
num++; // num = num + 1;

console.log(num); // => 2

// num++ と ++num の違い

/* 
  
  num++ は
  - num の評価結果を返す
  - num に対して +1 する

  そのため
  
  let num = 1;
  console.log(num++); // => 1
  console.log(num); // => 2
  
  となる

  ++num は
  - num に対して +1 する
  - num の評価結果を返す

  つまり

  let num = 1;
  console.log(++num); // => 2
  console.log(num); // => 2

  となる

*/

// デクリメント演算子 "--"

let num = 1;
num--; // num = num - 1;
console.log(num); // => 0

// num-- と --num の違い
// インクリメントの場合と同じ仕様



// 比較演算子
// 厳密等価演算子 "==="
// 左右の２つのオペランドを比較し、同じ型で同じ値である場合に "true" を返す

console.log(1 === 1); // => true
console.log(1 === "1"); // => false

/*
  オペランドがどちらもオブジェクトであるとき、
  オブジェクトの参照が同じである場合には "true" を返す

  オブジェクトリテラルは新しいオブジェクトを作成するため、
  異なるオブジェクトを参照する変数を "===" で比較すると "false" を返す
*/

const objA = {};
const objB = {};

console.log(objA === objB); // => false
console.log(objA === objA); // => true

// 厳密不等価演算子 "!=="
// 左右のオペランドを比較し、異なる型または、異なる値である場合に "true" を返す

console.log(1 !== 1); // => false
console.log(1 !== "1"); // => true

// => "===" を反転した結果を返す演算子


// 等価演算子 "=="
// 同じデータ型のオペランドを比較する場合、厳密等価演算子と同じ結果を返す

/* 
  等価演算子はオペランド同士が異なる型の値であった場合に、
  同じ型になるように暗黙的な型変換をしてから比較される
*/

// 文字列を数値に変換して比較
console.log(1 == "1"); // => true

// "01" を数値変換すると "1" になる
console.log(1 == "01"); // => true

// 真偽値を数値に変換して比較
console.log(0 == false); // => true

// null の比較は false を返す
console.log(0 == null); // => false

// null と undefined の比較は常に true を返す
console.log(null == undefined); // => true



/*
  意図しない挙動を未然に防ぐためにも
  暗黙的な型変換が行われる等価演算子 "==" は使用すべきではない
  変わりに厳密等価演算子 "===" を使用し、異なる方を比較したい場合は明示的に型を合わせるべきである
  
  例外的に等価演算子を使用する場面としては
  null と undefined を比較する場合である

  null と undefined の比較は常に true を返す性質を利用して２つの値の比較を省略することができる
*/

const value = undefined;

if (value === null || value === undefined) {
  console.log("value が null または undefined である場合の処理");
}

if (value == null) {
  console.log("value が null または undefined である場合の処理");
}

// 不等価演算子 "!="
// 等価演算子のときと同じ仕様で、暗黙的な型変換が行われるので使用すべきではない
// 代わりに厳密不等演算子 "!==" を使用する


// 大なり演算子 / より大きい ">"
console.log(42 > 21); // => true
console.log(42 > 42); // => false

// 大なりイコール演算子 / 以上 ">="
console.log(42 >= 21); // => true
console.log(42 >= 42); // => true
console.log(42 >= 43); // => false

// 小なり演算子 / より小さい "<"
console.log(21 < 42); // => true
console.log(42 < 42); // => false

// 小なりイコール演算子 / 以下 "<="
console.log(21 <= 42); // => true
console.log(42 <= 42); // => true
console.log(43 <= 42); // => false


// 代入演算子 "="
// 変数に対して値を代入する

let x = 1;
x = 42;
console.log(x);

// 代入演算子は二項演算子と組み合わせることができる
/*
  "+=", "-=", "*=", "/=", "**=" のように演算した結果を代入できる
*/


// 分割代入

