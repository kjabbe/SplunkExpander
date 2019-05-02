function updateIcon() {
  chrome.storage.sync.get('number', function(data) {
    var current = data.number;
    chrome.browserAction.setIcon({path: 'icon' + current + '.png'});
    current++;
    if (current > 5)
      current = 1;
    chrome.storage.sync.set({number: current}, function() {
      console.log('The number is set to ' + current);
    });
  });
};

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'while(true){var elements = Array.from(document.querySelectorAll("a.jsexpands"));if(elements === undefined || elements.length < 1 ){console.log("broke");break;}elements.map(element => element.click());}'
  });
});