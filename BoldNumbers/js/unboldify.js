// ボタンがクリックされたら、現在のタブ上のすべての数字の太字を解消します
document.getElementById('unboldifyButton').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: function() {
            const numbers = document.querySelectorAll('*'); // ページ上のすべての要素を選択します
            numbers.forEach(function(element) {
                if (!isNaN(element.innerText) && element.style.fontWeight == 'bold') {
                    element.style.fontWeight = 'normal';
                }
            });
        }
      });
    });
  });