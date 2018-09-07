chrome.webNavigation.onCompleted.addListener(function(e) {
  chrome.tabs.remove(e.tabId);
}, {
  url: [
    {
      hostSuffix: 'zoom.us',
      pathPrefix: "/s/",
      queryContains: "status=success",
    },
    {
      hostSuffix: 'zoom.us',
      pathPrefix: "/j/",
      queryContains: "status=success",
    },
  ]
});
