// Contact Ajax Handler


var loadContactForm = function(status){

  var contactStatus = $(document.body).data('status')
  //console.log(contactStatus);

  if (contactStatus === 'active') {
    //console.log('prevent event');
    return false;
  }
  else {
    // This does the ajax request
    var ajax_request = $.ajax({
      type: "POST",
      dataType: "json",
      url: ajax_handler.ajaxurl,
      data: {
        action: 'contact_page_request',
        postCommentNonce: ajax_handler.postCommentNonce
      },
      beforeSend: function () {
        //loaderTL.play();
        $(document.body).data('status', 'active')
      },
      success: function (response) {
        if (response.success) {
          var contactContainer = $('<div id="contactContainer">');
          $('body').append(contactContainer);
          //console.log(response.data[0]);
          getContactPage(response.data, contactContainer);
        }
      },
      complete: function () {
        $(document.body).data('status', 'inactive')
      },
      error: function (response) {
        console.log('error =' + response.error);
      }
    });
  }
}


var getContactPage = function (jsonObj, container) {
  container.append(jsonObj);
    //.center();
  var contactTL = new TimelineLite()
    .to( container, 1.5, {autoAlpha:1})
    .from( container, 0.8, {y:'+=200px'}, 0);
};
