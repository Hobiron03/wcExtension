chrome.runtime.sendMessage(
  { method: "setUser", user_id: 2 },
  function (response) {
    if (response) {
      console.log(response);
    }
  }
);
