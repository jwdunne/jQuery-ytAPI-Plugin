var YtApi;
(function ($) {
  YtApi = function (url) {
    $this = this;
    
    // Need to chop out the video ID with a bit of regex.
    var videoId = url.match(/watch\?v=(.*)/)[1];
    
    // Make request to YouTube Data API
    $.ajax(
      buildApiRequest(videoId),
      {
        success: function (response, status) {
          $this.get = function (attr) {
            return response.data[attr];
          };
        },
        dataType: 'json',
        crossDomain: true,
        async: false
      }
    );
  };
  
  function buildApiRequest(videoId) {
    return 'http://gdata.youtube.com/feeds/api/videos/'
           + videoId
           + '?v=2&alt=jsonc';
  }
})(jQuery)