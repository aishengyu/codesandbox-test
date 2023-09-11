/**
 * const、letなどの変数宣言
 */

var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);

let val2 = "let変数";
console.log(val2);

// let変数は上書きが可能
val2 = "let変数は上書きが可能";
console.log(val2);

// // letは再宣言不可能
//let val2 = "let変数を再宣言";//Uncaught SyntaxError: Identifier 'val2' has already been declared

const val3 = "const変数";
console.log(val3);
//val3 = "const変数を上書き不可";
//console.log(val3);

// const val3 = "const変数を再宣言不可";

// constで定義したオブジェクトはプロパティの変更が可能、今後はconstでオブジェクトの定義をしましょう。
const val4 = {
    name: "じゃけえ",
    age: 28,
};
console.log(val4);
val4.name = "constで宣言したオブジェクトのプロパティを変更することは可能です";
val4.address = "constで宣言したオブジェクトに対してプロパティを追加することが可能です。"
console.log(val4);

// constで定義した配列は中身の変更が可能、今後はconstで配列の定義をしましょう。
const val5 = ['dog', 'cat'];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "aimori";
const age = 42;
// [私の名前はaimoriです。年齢は42です。]

//　従来の方法
const message1 = "私の名前は" + name + "です。" + "年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
console.log("テンプレート文字列を用いた方法:");
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

