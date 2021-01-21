document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("fetch").addEventListener("click", function () {
    chrome.tabs.executeScript({
      file: "js/contentScript.js",
    });
  });
});
