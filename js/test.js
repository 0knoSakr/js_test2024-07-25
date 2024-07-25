// let food = かき;
// alert(food);
// let food = 広島;
// alert(food);

// let add = 5 + 3;
// let sub = 5 - 3;
// let kake = 5 * 3;
// let wari = 5 / 3;
// alert (add)
// alert (sub)
// alert (kake)
// alert (wari)

// let num = 10;
// num++;
// alert(num);

// let num = 5;
// num +=10;
// alert(num);

// let fishName = document.getElementById(fishName);
// let getText = fishName.textContent;
// alert(getText);

// let textBox = document.getElementById(textBox);
// let getText = textBox.value;
// alert(getText);

// let changeColor = document.getElementById(changeColor);
// changeColor.style.backgroundColor = green;
// changeColor.style.color = white;

// function btn() {
//   let textBox2 = document.getElementById(textBox2);
//   let getValue = textBox2.value;
//   let text = document.getElementById(text);
//   text.textContent = getValue;
// }

// let btn = document.getElementById(btn);
// btn.addEventListener(click, function () {
//   console.log(コンソールから見れる);}

// function addStyle() {
//   let addClass = document.getElementById(addClass);
//   addClass.setAttribute(class,backColor)
// }
// let btn = document.getElementById(btn);
// btn.addEventListener(click, addStyle)

// function total(text) {
//   console.log(text);
// }

// total('おはよう');
// total('こんにちわ');
// total('こんばんわ');

// function total(x, y, z) {
//   let head = x + x + x;
//   let body = y + z + z;
//   let foot = x + y + z;
//     let total = head + body + foot;
//   alert(total);
// }

// total('イカ速', 'ヒト速', 'アクション');

// total(100, 30);

// function add(x, y) {
//   let num = x + y + 1;
//   return num;
// }
// let total = add(10, 100);
// console.log(total);

// let btn = document.getElementById(btn);
// btn.addEventListener(click, textLength)
// function textLength() {
//   let textBox = document.getElementById(textBox);
//   let getText = textBox.value;
//   let count = getText.length;
//   if (count >= 10) {
//     alert(文字数が多すぎます);
//   } else if (count >= 6) {
//     alert(適正な文字数です);
//   } else {
//     alert(文字が少なすぎます);
//   }
// }

// let pref = Nigata;
// switch (pref) {
//   case Tokyo:
//     console.log(東京)
//     break;
//   case Osaka:
//     console.log(大阪)
//     break;
//   defalut:
//     console.log(その他)
// }

// let btn = document.getElementById(btn);
// btn.addEventListener(click, text)
// function text() {
//   let textBox = document.getElementById(textBox);
//   let getText = textBox.value;
//   let answer = getText == カクレクマノミ ? '1200円' : '6900円';
//   alert(answer);
// }

// const version = ES6;
// if (version === ES5) {
//     console.log(ECMAScript 5);
// } else if (version === ES6) {
//     console.log(ECMAScript 2015);
// } else if (version === ES7) {
//     console.log(ECMAScript 2016);
// } else {
//     console.log(しらないバージョンです);
// }

// let btn = document.getElementById(btn);
// btn.addEventListener(click, text)
// function text() {
//   let textBox = document.getElementById(textBox);
//   let goTo = [沖縄, 広島, 北海道]
//   let getText = textBox.value;
//   if (getText == goTo[0]) {
//     let output = document.getElementById(output);
//     output.textContent = getText;
//   } else if (getText == goTo[1]) {
//     let output = document.getElementById(output);
//     output.textContent = getText;
//   } else if (getText == goTo[2]) {
//     let output = document.getElementById(output);
//     output.textContent = getText;
//   }
// }

// let food = [焼き鳥, 唐揚げ, カレー, 焼きそば, だんご]
// alert(food.length);

// let output = document.getElementById(output);
// let goTo = [沖縄, 広島, 北海道];
// for (let i = 0; i < goTo.length; i++) {
//   let text = goTo[i];
//   output.append(document.createTextNode(text));
// }

// 日時の取得方法
// let btn = document.getElementById(btn);
// btn.addEventListener(click, text);
// function text() {
//   let textBox = document.getElementById(textBox);
//   let getText = textBox.value;
//   let date = new Date(getText);
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   output.append(document.createTextNode(year + 年 + month + 月 + day + 日));
// }

// let btn = document.getElementById(btn);
// btn.addEventListener(click, text);
// function text() {
//   let textBox = document.getElementById(textBox);
//   let getText = textBox.value;
//   let date = new Date(getText);
//   date.setDate(date.getDate(getText)+100)
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   output.append(document.createTextNode(year + 年 + month + 月 + day + 日));
// }

// let items = [{
//   id: 1,
//   name: 千葉翔,
//   age: 35,
// },
// {
//   id: 2,
//   name: 田中太郎,
//   age: 31,
// },
// {
//   id: 3,
//   name: 柴田詩織,
//   age: 22,
//   },
// ];

// for文と.insertAdjacentHTMLを使った文
// let output = document.getElementById(output);
// for (let i = 0; i < items.length; i++) {
//   let text = `<p>ID:${items[i].id}名前:${items[i].name}年齢:${items[i].age}</p>`
//   output.insertAdjacentHTML('beforeend', text);
// }

// let data = [{
//     name: 田中太郎,
//     age: 35,
//     department: 営業部,
//     position: 課長,
//     salary: 5000000
//   },
//   {
//     name: 山田花子,
//     age: 28,
//     department: 人事部,
//     position: 人事担当,
//     salary: 4000000
//   },
// {
//     name: 佐藤一郎,
//     age: 42,
//     department: 製造部,
//     position: チームリーダー,
//     salary: 6000000
//   },
//   {
//     name: 鈴木美咲,
//     age: 31,
//     department: 研究開発部,
//     position: エンジニア,
//     salary: 4500000
//   },
//   {
//     name: 高橋健太,
//     age: 37,
//     department: 財務部,
//     position: 経理担当,
//     salary: 4800000
//   },
// ]
// let output = document.getElementById(output);
// for (let i = 0; i < data.length; i++){
//   let text = `<p>名前:${data[i].name}年齢:${data[i].age}部門:${data[i].department}位置:${data[i].position}給料:${data[i].salary}</p>`
//   output.insertAdjacentHTML('afterend', text);
// }

// let btn = document.getElementById(btn);
// btn.addEventListener(click, text);
// function text() {
//   let textBox = document.getElementById(textBox);
//   let getText = textBox.value;
//   let count = getText.length;
//   if (count >= 1) {
//     let text = `<p>エラー</p>`
//     btn.insertAdjacentHTML('afterend', text);
//   }
// }

// let btn = document.getElementById(btn);
// btn.addEventListener(click, text);
// function text() {
//   let list = document.getElementById(list);
//   while(list.firstChild) {
//     list.removeChild(list.firstChild);
//   }
// }


//問題06
// let ul = document.querySelector('ul');

// let items = [
//   {
//     propertyName: "サンプルビル",
//     tokyo23Ward: "港区",
//     age: "5年",
//   },
//   {
//     propertyName: "グリーンマンション",
//     tokyo23Ward: "渋谷区",
//     age: "10年",
//   },
//   {
//     propertyName: "エンパイアタワー",
//     tokyo23Ward: "中央区",
//     age: "15年",
//   },
//   {
//     propertyName: "レインボーハイツ",
//     tokyo23Ward: "新宿区",
//     age: "20年",
//   },
//   {
//     propertyName: "サンシャインレジデンス",
//     tokyo23Ward: "豊島区",
//     age: "3年",
//   }
// ];
// items.forEach(function (element) {
//     let textBrowser = `<li>建物名:${element.propertyName} 地区名:${element.tokyo23Ward} 築年数:${element.age}</li>`
//     ul.insertAdjacentHTML('beforeend', textBrowser);
// });

// //問題07
// let array = ['キノコ','ふきのとう', 'タケノコ', 'さつまいも', 'ししとう', 'さやえんどう', 'とうみょう'];
// const kinoko = array.filter(function (item) {
//   console.log(item.length)
//   return item.length <= 4;
// });
// console.log(kinoko)

// for (let i = 0; i < array.length; i++) {
//   // console.log(array[i].length);
//   if (array[i].length <= 4) {
//     console.log(array[i]);
//   }
// }

//問題１
// let fruits = [
//   { "name": "りんご", "price": 300 },
//   { "name": "バナナ", "price": 100 },
//   { "name": "みかん", "price": 200 },
//   { "name": "ぶどう", "price": 400 }
// ];
// // // ソートする関数
// function sortFruitsByPrice(fruits) {
//   fruits.sort(function (a, b) {
//     if (a.price > b.price) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
//   //ソートの内容をreturnでsortFruitsByPrice返している
//   return fruits;
//   // ここにソートのコードを書く
// }

// console.log(sortFruitsByPrice(fruits));

//問題２
  // let fruits = [
  //   { "name": "りんご", "price": 300 },
  //   { "name": "バナナ", "price": 100 },
  //   { "name": "みかん", "price": 200 },
  //   { "name": "ぶどう", "price": 400 }
  // ];
//document.getElementByIdでid=priceInputのついてるinputの情報を持ってきている
//.addEventListenerでテキストボックスの内容が変わったらchangeイベントが発生する
//functionあとにchangeイベントの内容が書かれている
  // document.getElementById('priceInput').addEventListener('change', function() {
  //   //maxPriceはテキストボックスに入力された値
  //   let maxPrice = parseInt(this.value);
  //   // console.log(maxPrice)
  //   //sortFruitsByPriceは、テキストボックスに入れた数字以下のpriceの情報を持っている
  //   const sortFruitsByPrice = fruits.filter(function (item) {
  //     return item.price <= maxPrice;
  //   });
  //   console.log(sortFruitsByPrice)
  //   //for文でsortFruitsByPriceに入っている値の数を数える
  //   for (let i = 0; i < sortFruitsByPrice.length; i++){
  //     //textはブラウザに表記したいテキストを入れている
  //     let text = `<p>名前：${sortFruitsByPrice[i].name}金額：${sortFruitsByPrice[i].price}</p>`;
  //     //fruitListはid名でtextを入れたい場所を指定している
  //     fruitList.insertAdjacentHTML("afterbegin", text);
  //   }
  // });

  //問題３
// let fruits = ["りんご", "バナナ", "みかん", "ぶどう"];
// //変数ulにulのid=fruitListの情報を持ってくるグローバル変数
//   let ul = document.getElementById('fruitList');

// // リストを動的に生成するコード
// fruits.forEach(fruit => {
//   //変数liの中身はcreateElementでliタグを作成
//   let li = document.createElement('li');
//   //liタグに入れるコンテンツの指定
//   li.textContent = fruit;
//   // ulタグの子要素としてliタグを入れる
//     ul.appendChild(li);
//   });

//   // クリアボタンのイベントリスナー
//   document.getElementById('clearButton').addEventListener('click', function() {
//     // ここにliタグを削除するコードを書く
//     //ulの子要素をremoveChildで消す
//     while (ul.firstChild) {
//       ul.removeChild(ul.firstChild);
//     }
//   });

//問題4
// let items = [
//   { "name": "クマノミ", "amount": 1000 },
//   { "name": "カクレクマノミ", "amount": 2000 },
//   { "name": "ネオンテトラ", "amount": 1500 },
//   { "name": "タツノオトシゴ", "amount": 3000 },
//   { "name": "ライオンフィッシュ", "amount": 2500 }
// ];

// // ulの情報を持ってくるグローバル変数
// let ul = document.getElementById('itemList');
// // 価格が1500円以下のアイテムをフィルタリングして表示するコード
// //fishFilterにはamountが1500以下のitemの値の情報が入っている
// const fishFilter = items.filter(function (item) {
//   return item.amount <= 1500;
// })
// //ブラウザに出したい情報の指定をfor文で指定
// for (let i = 0; i < fishFilter.length; i++){
//   //textの中にliタグを書いてタグを作る
//   let text = `<li>名前:${fishFilter[i].name}金額:${fishFilter[i].amount}</li>`
//   // グローバル変数のulを指定してulの子要素に変数textを入れる
//   ul.insertAdjacentHTML("afterbegin", text);
// }

// 問題5
// let items = [
//   { "name": "クマノミ", "amount": 1000 },
//   { "name": "カクレクマノミ", "amount": 2000 },
//   { "name": "ネオンテトラ", "amount": 1500 },
//   { "name": "タツノオトシゴ", "amount": 3000 },
//   { "name": "ライオンフィッシュ", "amount": 2500 }
// ];

// //IDnameInputから情報を持ってきてinputイベントが発生したら変化が起こる
// document.getElementById('nameInput').addEventListener('input', function () {
//   //this.valueはnameInputのvalueを指しているローカル変数
//   let input = this.value.toLowerCase();
//   //fishFilterはitemsの中のオブジェクトをフィルターにかける
//   //functionの後のitemはitemsの中のオブジェクトのこと
//   // ここに絞り込みと表示のコードを書く
//   const fishFilter = items.filter(function (item) {
//     //filterは同じ値を比較する
//     //今回はitemsの名前とnameInputのvalueに入る名前を比較している
//     return item.name === input;
//   });
//   //フィルターにかけて必要な値をブラウザに表示するためのfor文
//   for (let i = 0; i < fishFilter.length; i++){
//     //ulにテキストを入れるためにulの情報を持ってくる
//     let ul = document.getElementById("filteredList");
//     //ulに入れるためのテキストを変数で設定
//     let text = `<li>名前:${fishFilter[i].name} 金額:${fishFilter[i].amount}円</li>`;
//     ul.insertAdjacentHTML("afterbegin", text);
//   }
// });

// 問題６
// let items = [
//   { "name": "クマノミ", "amount": 1000 },
//   { "name": "カクレクマノミ", "amount": 2000 },
//   { "name": "ネオンテトラ", "amount": 1500 },
//   { "name": "タツノオトシゴ", "amount": 3000 },
//   { "name": "ライオンフィッシュ", "amount": 2500 }
// ];

// //id名addButtonの情報を持ってきてボタンをクリックしたらイベントが発生する
// document.getElementById('addButton').addEventListener('click', function() {
//   let newItem = { "name": "新しい魚", "amount": 1800 };
//   //push新しいオブジェクトを入れる
//   items.push(newItem);
//   // ここに表示のコードを書く
//   //必要なオブジェクトをブラウザに表示するためのfor文
//   for (let i = 0; i < items.length; i++){
//     //ulの情報をid名itemListで持ってくる
//     let ul = document.getElementById("itemList");
//     //ulの中に入れるテキストを変数で指定
//     let text = `<li>名前:${items[i].name}　金額:${items[i].amount}円</li>`;
//     //ulの中にtextを入れる
//     ul.insertAdjacentHTML("afterbegin", text);
//   }
// });

//問題7: 配列の削除機能
// let items = [
//   { "name": "クマノミ", "amount": 1000 },
//   { "name": "カクレクマノミ", "amount": 2000 },
//   { "name": "ネオンテトラ", "amount": 1500 },
//   { "name": "タツノオトシゴ", "amount": 3000 },
//   { "name": "ライオンフィッシュ", "amount": 2500 }
// ];

// //id名removeButtonから情報を持ってきてボタンをクリックしたらイベントが発生する
// document.getElementById('removeButton').addEventListener('click', function () {
//   //itemsの中のオブジェクトをフィルターにかけた値の情報がitemsに入っている
//   //今回のフィルターはitemsの中から2000円以下のオブジェクトを選んでいる
//   items = items.filter(item => item.amount < 2000);
//   // ここに表示のコードを書く
//   //必要な値を表示するためのfor文
//   for (let i = 0; i < items.length; i++){
//     //ulの情報をidを使って持ってくる
//     let ul = document.getElementById("itemList");
//     //変数textに表示させたいテキストを指定する
//     let text = `<li>名前：${items[i].name}金額：${items[i].amount}</li>`;
//     //ulの中にテキストを表示させる
//     ul.insertAdjacentHTML("afterbegin", text);
//   }
// });

//問題8: 配列の更新機能
let items = [
  { "name": "クマノミ", "amount": 1000 },
  { "name": "カクレクマノミ", "amount": 2000 },
  { "name": "ネオンテトラ", "amount": 1500 },
  { "name": "タツノオトシゴ", "amount": 3000 },
  { "name": "ライオンフィッシュ", "amount": 2500 }
];

//id名updateButtonの情報を持ってきてボタンをクリックしたらイベントが発生する
document.getElementById('updateButton').addEventListener('click', function() {
  //変数itemはitemsの中からクマノミを探し（find）ifで内容を書き換えた情報が入っている
  let item = items.find(item => item.name === "クマノミ");
  if (item) {
    item.amount = 1200;
  }
  // ここに表示のコードを書く
  //必要な情報を書くためのfor文
  for (let i = 0; i < items.length; i++){
    //ulの情報をid名から持ってくる
    let ul = document.getElementById("itemList");
    //ulの中に入れるtextの内容を変数で指定する
    let text = `<li>名前:${items[i].name}金額:${items[i].amount}</li>`;
    //ulの中にテキストをブラウザに表示させる
    ul.insertAdjacentHTML("afterbegin", text);
  }
});
