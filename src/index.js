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
console.log("------------------------");
console.log(message1);

// テンプレート文字列を用いた方法
console.log("------------------------");
console.log("テンプレート文字列を用いた方法:");
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str){
//     return str;
// }
// constを使ってfunctionの定義が可能です。
const func1 = function(str){
    return str;
}
console.log(func1("func1です。"));

// アロー関数
const func2 = (str) => {
    return str;
}
console.log(func2("func2です。"));

// // 引数が１つの場合"()"を省略可能です
// const func3 = str => {
//     return str;
// }
// console.log(func3("func3です。"));

// // 処理が一行で終わるときは{}とreturnを省略可能、なお{}を記述する場合returnを省略不可
// const func4 = (str) => str;
// console.log(func4("func4です。"));

// const func3 = (num1, num2) => {
//     return num1 + num2;
// }
// 省略の書き方
const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 * 分割代入
 */
const myProfile = {
    name1: "aimori",
    age1: 42,
};
// //　通常の書き方
// const message = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
//console.log(message);

// 分割代入の仕方ですが、変数と属性が一致しないとエラーになります。
const {name1, age1} = myProfile;
const message = `名前は${name1}です。年齢は${age1}です。`;
console.log(message);

console.log('------------myProfileArray----------------');
const myProfileArray = ['aimori', 42];
//const message3 =  `名前は${myProfileArray[0]}です。年齢は${myProfileArray[1]}です。`;
//console.log(message3);
const [name3, age3] = myProfileArray;
const message3 =  `名前は${name3}です。年齢は${age3}です。`;
console.log(message3);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "guest") => console.log(`こんにちは${name}さん！`)
sayHello();
sayHello("aimori");

/**
 * スプレッド構文
 */
//　配列の展開
const arr1 = [1,2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// 配列をまとめて受け取る
console.log("------配列をまとめて受け取る------")
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

console.log("---------------------...arr4-------------")
const arr6 = [...arr4];
console.log(arr6);
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

const arr7 = [...arr4, ...arr5]
console.log(arr7);

const arr8 = arr4;
console.log(arr8);
arr8[0] = 100;
console.log(arr8);
console.log(arr4);

/**
 * mapやfileterを使った配列の処理
 */
const nameArr = [ "aimori", "田中", "山田", "竹内"];
// 従来の書き方
for(let index = 0; index < nameArr.length; index++){
    console.log(`${index}番目の要素：${nameArr[index]}です。`);
}
// 各要素をほかの変数に設定する方法
const nameArr2 = nameArr.map((name) => {
    return name;
})
console.log(nameArr2);

// 
console.log("--------------------------")
nameArr.map((name) => console.log(name));
console.log("--------------------------")
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`))
console.log("--------------------------")

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
    return num % 2 === 1;
});
console.log(newNumArr);


const newNameArr = nameArr.map((name) => {
    if(name === "aimori"){
        return name;
    } else {
        return `${name}さん`;
    }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ?　条件がtrueの時 : 条件がfalseの時
const val11 = 1 > 0 ? 'trueです' : 'falseです';
console.log(val11);

const num = "1300";
console.log(num.toLocaleString());

const formattedNum = typeof num === "number" ? num.toLocaleString() : '数値を入力してください。'
console.log(formattedNum);

const checkSum = (num1, num2) => {
    return num1 + num2 > 100 ? '100を超えています！！！' : '許容範囲内です';
}
console.log(checkSum(10,100));

/**
 * 論理演算子の本当の意味
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2){
    console.log("flage1かflag2はtrueになります");
}
if (flag1 && flag2){
    console.log("flage1もflag2もtrueになります");
}

// ||は左側がfalseの場合右側を返す
const num10 = null; //const num10 = 100;
const fee = num10 || "金額未設定です";
console.log(fee);

// &&は左側がtrueなら右側を返す
//const num11 = null;
const num11 = 100;
const fee11 = num11 && "何か設定されました"
console.log(fee11);