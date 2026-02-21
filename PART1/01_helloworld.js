
// 大文字と小文字
// これらは区別される。

const name = "azu";
const NAME = "azu";

// 予約語を持つ
// const という変数名をつけることはできない。
// const const = "const"; はエラー

// 文はセミコロンで区切る
// 式や文の間にスペースがいくつあっても同じ意味となる
1 + 1;
1   +   1;

// strict mode
// 厳格な実行モード

"use strict";
mistypedVariable = 42; // => ReferenceError

// "Script"と"Module"がある。
// 多くの実行環境ではデフォルトは"Script"
// "Script"はデフォルトで strict mode でない

// "Module"は、JavaScriptをモジュールとして実行する場合
// ECMAScript 2015で導入
// デフォルトが strict mode


