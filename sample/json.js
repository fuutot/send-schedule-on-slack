// 文字列を定義
let text = '{"result":true, "count":42}';
// 文字列をjsonとして解析
let obj = JSON.parse(text);

console.log(text);
// Expected output: {"result": true, "count":42}

console.log(text.result);
// Expected output: undefined

console.log(obj.count);
// Expected output: 42

console.log(obj.result);
// Expected output: true

// オブジェクトを文字列に変換
json_text = JSON.stringify(obj);

console.log(json_text);
// Expected output: {"result": true, "count":42}