// $("#result").text("通信中...");
// // Ajax通信を開始
// $.ajax({
//   url: "https://word-collection-api.herokuapp.com/api-auth/",
//   type: "post",
//   dataType: "json",
//   // フォーム要素の内容をハッシュ形式に変換
//   data: { username: "test", password: "1234" },
//   timeout: 5000,
// }).then(
//   function (data) {
//     // 通信成功時の処理を記述
//     console.log("success: ");

//     console.log(data);
//   },

//   function (error) {
//     // 通信失敗時の処理を記述
//     console.log("error: ");
//     console.log(error);
//   }
// );

chrome.runtime.sendMessage({ method: "getUser" }, function (response) {
  if (response.user_id) {
    console.log(response.user_id);
  }
});
