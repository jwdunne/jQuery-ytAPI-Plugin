var YtApi;
(function ($) {
  YtApi = function (url) {
    $this = this;
    $this.get = {};
    
    // Need to chop out the video ID with a bit of regex.
    // 
    
    // Make request to YouTube Data API
    $.ajax(
      url,
      {
        success: function (response, status) {
          $this.get = function (attr) {
            return reponse.data[attr];
          };
        },
        dataType: 'json',
        crossDomain: true
      }
    );
  };
})(jQuery)