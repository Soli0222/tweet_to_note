chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      // Replace the Twitter intent URL with the custom URL
      chrome.storage.sync.get('replacementUrl', function(data) {
        var url = data.replacementUrl;
        if (url) {
          var replacedUrl = details.url.replace('https://twitter.com/intent/tweet?', url);
          return { redirectUrl: replacedUrl };
        }
      });
    },
    { urls: ['https://twitter.com/intent/tweet?*'] },
    ['blocking']
  );
  