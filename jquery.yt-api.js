var YtApi;
(function ($) {
  "use strict";
  
  /**
   * Build a YouTube Data API request for a video.
   * @param string videoId The video ID
   & @return string The API request URL
   */
  function buildApiRequest(videoId) {
    return 'http://gdata.youtube.com/feeds/api/videos/'
      + videoId
      + '?v=2&alt=jsonc';
  }
  
  YtApi = function (url) {
    // 2 things:
    // 1. Need to store a reference to this object.
    // 2. Need to chop out the video ID with a bit of regex.
    var $this   = this,
      videoId = url.match(/watch\?v=([A-Za-z0-9\-_]+)/)[1];
    
    // Make request to YouTube Data API
    $.ajax(
      buildApiRequest(videoId),
      {
        success: function (response) {
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
}(jQuery));