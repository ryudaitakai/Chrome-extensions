// ボタンがクリックされたら、現在のタブ上のすべての数字を太字にします
document.getElementById('boldifyButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: function() {
          const numbers = document.querySelectorAll('*'); // ページ上のすべての要素を選択します
          numbers.forEach(function(element) {
            if (!isNaN(element.innerText)) {
              element.style.fontWeight = 'bold';
            }
          });
        }
      });
    });
  });