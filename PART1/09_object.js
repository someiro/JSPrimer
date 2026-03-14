// オブジェクト
// オブジェクトはプロパティの集合
// プロパティとは、名前(キー)と値(バリュー)が対になったもの

// プロパティのキーには文字列 または Symbol が利用できる
// 値には任意のデータを指定できる

/*
  今まで登場した配列や関数もオブジェクトの一種である
  JavaScript にはあらゆるオブジェクトの元となる Object という
  ビルドインオブジェクトがある
  ビルドインオブジェクトはあらかじめ実行環境に定義されているオブジェクト
  ECMAScriptの仕様で定義されているため、あらゆる実行環境で利用できる
*/

// オブジェクトの作成
// オブジェクトリテラル "{}" を使用する 

// プロパティを持たない空のオブジェクト
const obj = {};

// プロパティを持つオブジェクトを定義する
const obj = {
  // キー: バリュー
  "key": "value"
};

/* NG 

  const obj = {
    my-prop: "value"  
  }

*/

const obj = {
  "my-prop": "value" // OK
}

const color = {
  red: "red",
  green: "green",
  blue: "blue"
};

// プロパティの値に変数名を指定することで、キーは指定した変数を参照する
const name = "名前";

const obj = {
  name: name
};

console.log(obj); // => { name: "名前" }

// ES2015 以降はプロパティメイト値に指定する変数が同じ場合は { name } と省略できる
const name = "名前";

const obj = {
  name
};

console.log(obj); // => { name: "名前" }

/*
  "{}" は Object のインスタンスオブジェクト
  つまり new 演算子を使うことで Object から新しいオブジェクトを作成できる
  
  const obj = new Object();
  console.log(obj); // => {}

  // 空のオブジェクトリテラルと同じ

*/


// プロパティへのアクセス
// ドット記法 or ブラケット記法

const obj = {
  key: "value"
}

// ドット記法
console.log(obj.key); // => "value"

// ブラケット記法
console.log(obj["key"]); // => "value"


// オブジェクトと分割代入

const lang = {
  ja: "日本語",
  en: "英語"
};

const ja = lang.ja;
const en = lang.en;

console.log(ja); // => "日本語"
console.log(en); // => "英語"


// 分割代入の書き方
// 変数とプロパティのキーは一致している必要がある

const lang = {
  ja: "日本語",
  en: "英語"
};

const { ja, en } = lang;

console.log(ja);
console.log(en);


// プロパティの追加

const obj = {};

obj.key = "value";
console.log(obj.key); // => "value"

// ブラケット記法
const key = "key-string";
const obj = {};

obj[key] = "value of key";
console.log(obj[key]); // => "value of key"


// プロパティの削除
// delete 演算子を利用する

const obj = {
  key1: "value1",
  key2: "value2"
};

// key1 プロパティを削除
delete obj.key1;
console.log(obj); // => { "key2": "value2" }




// コラム
// const で定義したオブジェクトは変更できる
const obj = { key: "value" };
obj.key = "Hi!"; // constで定義したオブジェクト(`obj`)が変更できる
console.log(obj.key); // => "Hi!"


// 再代入はできない
const obj = { key: "value" };
obj = {}; // => TypeError

// Object.freeze 静的メソッドを利用することでオブジェクトを凍結させることができる
const object = Object.freeze({ key: "value" });
object.key = "value"; // => TypeError: "key" is read-only


// プロパティの存在を確認
// in 演算子を使う

const obj = { key: undefined };
// `key`プロパティを持っているならtrue
if ("key" in obj) {
  console.log("`key`プロパティは存在する");
}

// toString メソッド
// オブジェクト自身を文字列化するメソッド
// String コンストラクタ関数は引数に渡されたオブジェクトの
// toString メソッドを呼び出している
// つまり結果はどちらも同じになる

const obj = { key: "value" };
console.log(obj.toString()); // => "[object Object]"
console.log(String(obj)); // => "[object Object]"


