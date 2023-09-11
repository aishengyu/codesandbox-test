console.log("-----------------------------")
console.log("test");

const onClickAdd = () => {
   
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = inputText;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了"; 
    completeButton.addEventListener("click", () => {
        // 押下された完了ボタンの親タグ(div)を未完了リストから削除
        deleteFromImcompleteList(completeButton.parentNode);

        // 完了リストへ追加する要素
        const addTarget = completeButton.parentNode;
        
        // TODO内容テキストを取得
        const text = addTarget.firstElementChild.innerText;

        // div以下を初期化
        addTarget.textContent = null;

        // liタグ生成
        const li = document.createElement("li");
        li.innerText = text;

        // button(戻す)タグ生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        
        // divタグの子要素に各要素を設定
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        // 完了リストに追加
        document.getElementById("complete-list").appendChild(addTarget);

    });

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押下された削除ボタンの親タグ(div)を未完了リストから削除
        deleteFromImcompleteList(deleteButton.parentNode);
    });

    // divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // 未完了のリストに追加
    document.getElementById("imcomplete-list").appendChild(div);

};

// 未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
    document.getElementById("imcomplete-list").removeChild(target);
}

// 未完了リストに追加する関数
const addToImcompleteList = (text) => {
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";
    // console.log(div);

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // console.log(li);

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    // completeButton.addEventListener("click", () => alert("完了"));
    // console.log(completeButton);
    completeButton.addEventListener("click", () => {
        //　完了リストに追加する要素
        const addTarget = completeButton.parentNode;
        
        // 未完了リストから削除
        deleteFromImcompleteList(addTarget);

        // TODO内容テキストを取得
        const text = addTarget.firstElementChild.innerText;

        // div以下を初期化
        addTarget.textContent = null;
        // console.log(addTarget);

        // liタグ生成
        const li = document.createElement("li");
        li.innerText = text;

        // button(戻す)タグ生成

    });
}

const deleteFromCompleteList = (target) => {
    document.getElementById("complete-list").removeChild(target);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());