
// ループ、反復処理
let x = 0;
console.log(`ループ開始前のxの値: ${x}`);

while (x < 10) {
  console.log(x);
  x += 1;
}
console.log(`ループ終了後のxの値: ${x}`);


// 無限ループ
let i = 1;
// 条件式が常にtrueになるため、無限ループする
while (i > 0) {
    console.log(`${i}回目のループ`);
    i += 1;
}


// do-while 文
const x = 1000;
do {
  console.log(x); // => 1000
} while (x < 10);

/*
  do-while の実行フロー
  
  1. 実行する文 を実行
  2. 条件式の評価結果が true の場合、次のステップへ
     false なら終了
  3. ステップ1 へ戻る
*/


// for 文 
for (初期化式; 条件式; 増分式) {
    実行する文;
}

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
  }
  return total;
}

console.log(sum([1, 2, 3, 4, 5])); // => 15


// forEach メソッド
const array = [1, 2, 3];
array.forEach(currentValue => {
  console.log(currentValue);
});
// 1
// 2
// 3
// と順番に出力される


function sum(numbers) {
    let total = 0;
    numbers.forEach(num => {
        total += num;
    });
    return total;
}

sum([1, 2, 3, 4, 5]); // => 15


// break 文
// 処理中の文から抜けて次の文へ移行する制御文

while (true) {
    break; // *1 へ
}
// *1 次の文

// continue 文
// 現在の反復処理を終了し、次の反復処理を行う

let x = 0;
while (x < 5) {
  x += 1;
  if (x === 2) {
    continue;
  }
  console.log(`${x}`); // => 2 回目はパスされる。
}


// filter メソッド
const array = [1, 2, 3, 4, 5, 6];
const result = array.filter((x) => {
  return 3 <= x && x <= 5
});

console.log(result);


// for...in 文
const array = [1, 2, 3, 4, 5, 6, 7, 8];
for (n in array) {
  console.log(n);
}


