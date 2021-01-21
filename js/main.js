document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("save").addEventListener("click", function () {
    console.log("push fetch button");
    chrome.tabs.executeScript({
      file: "js/contentScript.js",
    });
  });

  document.getElementById("get").addEventListener("click", function () {
    chrome.tabs.executeScript({
      file: "js/contentScript.js",
    });
  });
});
