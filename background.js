chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: `
    function updateIcon() {
      while(true) {
        var elements = Array.from(document.querySelectorAll("a.jsexpands"));
        if(elements === undefined || elements.length < 1 ){ console.log("done"); break; }
        elements.map(element => element.click());
      }
    };
    updateIcon();`
  });
});
