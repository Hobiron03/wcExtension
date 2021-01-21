var elementsInsideBody = [...document.body.getElementsByTagName("*")];

function findAndReplace() {
  elementsInsideBody.forEach((element) => {
    element.childNodes.forEach((child) => {
      if (child.nodeType === 3) {
        replaceText(child);
      }
    });
  });
}

function replaceText(node) {
  let value = node.nodeValue;
  value = value.replace(/リ/gi, "ソ");
  value = value.replace(/ン/gi, "ソ");
  node.nodeValue = value;
}

window.onload = findAndReplace();
