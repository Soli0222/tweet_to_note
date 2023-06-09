document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('save-button');
    var urlInput = document.getElementById('replacement-url');
  
    // Save the URL when the Save button is clicked
    saveButton.addEventListener('click', function() {
      var url = urlInput.value;
      chrome.storage.sync.set({ 'replacementUrl': url }, function() {
        console.log('Replacement URL saved: ' + url);
      });
    });
  
    // Load the saved URL when the options page is opened
    chrome.storage.sync.get('replacementUrl', function(data) {
      if (data.replacementUrl) {
        urlInput.value = data.replacementUrl;
      }
    });
  });
  