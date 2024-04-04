// 空のインスタンスを作成。現在時刻になる
let time = new Date();

let year = time.getFullYear();
let month = time.getMonth();
let date = time.getDate();
let day = time.getDay();
let hour = time.getHours();

console.log(year);
// 実行した時点の年

console.log(month);
// 実行した時点の月

console.log(date)
// 実行した時点の日付

console.log(day);
// 実行した時点の曜日（０〜6）

console.log(hour);
// 実行した時点の時間