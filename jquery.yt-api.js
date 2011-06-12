var YtApi;
(function ($) {
  YtApi = function (url) {
    $this = this;    
    // Need to chop out the video ID with a bit of regex.
    // 
    
    // Make request to YouTube Data API
    $.ajax(
      url,
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
})(jQuery)