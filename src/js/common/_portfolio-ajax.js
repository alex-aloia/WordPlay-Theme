// Portfolio AJAX

// bind data obj to doc to track status of ajax/detail mode
$.data(document, 'ajax_status', {'active':false, 'detail_mode': false} );


var portTL = new TimelineLite({paused: true});


var initPortfolio = function () {

  var ajax_status = $.data(document, "ajax_status");

  if (ajax_status.active) {
    return;
  }

  ajax_status.active = true;

    // This does the ajax request
    var ajax_request = $.ajax({
      type: "POST",
      dataType: "json",
      url: ajax_handler.ajaxurl,
      data: {
        action: 'portfolio_page_request',
        postCommentNonce: ajax_handler.postCommentNonce
      },
      beforeSend: function () {
        //loaderTL.play();
      },
      success: function (response) {
        if (response.success) {
          $('#portfolio').empty();
          createSVGimgs(response.data);
        }
      },
      //complete: function () {},
      error: function (response) {
        console.log('error =' + response.error);
      }
    });
}


var loadPortfolioDetail = function (d) {

 // $.data(document, "ajax_status", {'detail_mode': true});
  var detail_mode = $.data(document, "ajax_status").detail_mode;

  var detailTL = new TimelineLite(),
    url = d.img_url,
    w = d.img_w,
    h = d.img_h,
    win_w = document.documentElement.clientWidth,
    win_h = document.documentElement.clientHeight,
    calc_w = null,
    calc_h = null;

  var detailBox = $('<div>').addClass('portDetailBox'),
    img = $('<img>').attr('src', url),
    closeBtn = $('<i class="detailBtn fa fa-times-circle-o">');

  detailBox.append(img);
  detailBox.append(closeBtn);
  $('body').append(detailBox);

  if (h > w && h > win_h) {
    calc_h = win_h * .9;
    img.attr('height', calc_h);
  }

  else if (w > h && w > win_w) {
    calc_w = win_w * .9;
    img.attr('width', calc_w);
  }
  else {

  }

  detailBox.center();
  var closeDetail = function(){
    detail_mode === false;
    portTL.play('port_open')
  }

  detailTL.to(detailBox, 0.6, {autoAlpha: 1})
    .to(closeBtn, 1, {autoAlpha: 1});

  closeBtn.hover( function(){
      TweenLite.to(this, 1, {color:'#af0'});
  },
    function(){
      TweenLite.to(this, 1, {color:'#666'});
    }
  )
    .click(function(){
      detailTL.to($('.portDetailBox'), 0.6, {autoAlpha: 0, onComplete:closeDetail})
    })

}






var createSVGimgs = function (jsonObj) {

  //$.data(document, "ajax_status", {'detail_mode': false});
  var detail_mode = $.data(document, "ajax_status").detail_mode;

  var container = d3.select('body').append('div').attr('id', 'portfolio'),
    list = container.append("ul"),
    li = list.selectAll("li")
      .data(jsonObj)
      .enter()
      .append("li")
      .style('width', function (d) {
        return d.thumb_w + 'px';
      }),
    svg = li.append('svg'),
    filter = svg.append("defs")
      .append("filter")
      .attr("id", function (d, i) {
        return 'filter_' + i;
      })
      .append("feColorMatrix")
      .attr('type', 'saturate')
      .attr('values', 0),
    link = li.append('a')
      .attr('href', function (d, i) {
        if (d.ext_link != null) {
          return d.ext_link;
        }
      }).on('click', function () {
        d3.event.preventDefault()
      }),
    img = link.append("img"),
    imgAttributes = img
      .attr("src", function (d) {
        return d.img_url;
      })
      .style('filter', function (d, i) {
        return 'url(#filter_' + i + ')';
      })
      .style('-webkit-filter', function (d, i) {
        return 'url(#filter_' + i + ')';
      }),
    closeBtn = d3.select('body').append('i').attr('id', 'portCloseBtn').attr('class', ' fa fa-chevron-left');

  var portItems = $('#portfolio ul'),
    layout = function () {
      portItems.layout({
        type: 'flow',
        alignment: 'center',
        resize: false,
        hgap: 50,
        vgap: 50,
        items: li[0]
      });
      scrollH = portItems.prop('scrollHeight');
      portItems.parent().height(scrollH);
    };

  $(window).resize(function () {
    layout();
  });

  layout();

  portTL
    .set( container, {'z-index':'9'})
    .add('port_open')
    .staggerFrom(li[0], 0.75, {y: '-=200px', ease: Expo.easeIn}, 0.15, 's1')
    .staggerTo(li[0], 0.75, {autoAlpha: 1, ease: Expo.easeIn}, 0.15, 's1')
    .to(closeBtn, 1, {autoAlpha:1})
    .addPause('port_close')
    .staggerTo(li[0], 0.75, {y: '+=300px', ease: Circ.easeOut}, 0.15, 'end')
    .staggerTo(li[0], 0.75, {autoAlpha: 0, ease: Sine.easeOut}, 0.15, 'end')
    .set( container, {'z-index':'-9'});

  // Event handlers
  li.on('mouseover', function (d, i) {
    TweenLite.to(filter[0][i], 0.3, {attr: {"values": 1}, ease: Linear.easeNone});
  })

    .on('mouseout', function (d, i) {
      TweenLite.to(filter[0][i], 0.3, {attr: {"values": 0}, ease: Linear.easeNone});
    })

    .on('click', function (d) {
      //if(detail_mode === true){
      //  return;
      //}
      //detail_mode === true;

      portTL.play('port_close')
        .to(closeBtn, 1, {autoAlpha:0})
        .call(loadPortfolioDetail, [d]);

    });

  closeBtn.on('click', function () {
    portTL.play('port_close')
      .to(this, 1, {autoAlpha:0}, '-=1')
      .call(openMenu)
  })
    .on('mouseover', function(){
      TweenLite.to(this, 0.6, {color: '#aaff00', scale:1.1})
    })
    .on('mouseout', function(){
      TweenLite.to(this, 0.6, {color: '#666', scale:1})
    })
};


//Create Back/Exit Button
//function createBackBtn() {
//
//  var detail_mode = $.data(document, "ajax_status").detail_mode;
//
//  var closeBtnTL = new TimelineMax()
//    .to(closeBtn, 2, {autoAlpha: 1})
//
//  //closeBtn.on('mouseover', function () {
//  //  TweenLite.to(this, 0.5, {color: '#aaff00'})
//  //})
//  //
//  //closeBtn.on('mouseout', function () {
//  //  TweenLite.to(this, 0.5, {color: '#666'})
//  //})
//
//  closeBtn.on('click', function () {
//
//    if (detail_mode === false ) {
//      console.log('portfolio close')
//      closeBtnTL.to(closeBtn, 1, {autoAlpha: 0})
//      portTL.play('port_close');
//      openMenu();
//    }
//    else {
//      console.log('portfolio open')
//      var regenPortfolio = function () {
//        detail_status === false;
//        portTL.play('port_open')
//      }
//      closeBtnTL.to($('.portDetailBox'), 1, {autoAlpha: 0, onComplete: regenPortfolio()})
//    }
//  })
//
//}






