$(function () {
  $("#result").text("通信中...");
  // Ajax通信を開始
  $.ajax({
    url: "https://word-collection-api.herokuapp.com/api-auth/",
    type: "post",
    dataType: "json",
    // フォーム要素の内容をハッシュ形式に変換
    data: { username: "test", password: "1234" },
    timeout: 5000,
  }).then(
    function (data) {
      // 通信成功時の処理を記述
      console.log("success: ");

      console.log(data);
    },

    function (error) {
      // 通信失敗時の処理を記述
      console.log("error: ");
      console.log(error);
    }
  );
});

// const login = (e) => {
//   e.preventDefault();
//   setIsloading(true);

//   let form_data = new FormData();
//   form_data.append("username", userName);
//   form_data.append("password", password);
//   axios
//     .post(apiServer + "api-auth/", form_data, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//     .then((response) => {
//       const jwt = response.data.token;
//       localStorage.setItem("jwt", jwt);
//       history.push("/mypage");
//     })
//     .catch((error) => {
//       setIsloading(false);
//       setIsError(true);
//       console.log(error);
//     });
// };

console.log("Hello World");
let token = localStorage.getItem("jwt");
if (token) {
  console.log(token);
} else {
  console.log("No: ");
  console.log(token);
}
