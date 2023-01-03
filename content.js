function removeUsernames() {
  var usernameElements = document.querySelectorAll("[class*='userTagDiscriminator']");

  for (var i = 0; i < usernameElements.length; i++) {
    var element = usernameElements[i];
    var text = element.innerText;
    if (/^#\d{4}$/.test(text)) {
      element.innerHTML = "";
    }
  }
}

const targetNode = document.body;

const observerOptions = {
  childList: true,
  subtree: true
};

const observer = new MutationObserver(removeUsernames);

observer.observe(targetNode, observerOptions);

