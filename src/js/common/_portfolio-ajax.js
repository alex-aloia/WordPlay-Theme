// Portfolio AJAX

var initPortfolio = function () {

  $.data(document.body, "port_status", 'close');

  ajaxInProg = false;
  if (ajaxInProg === true) {
    return;
  }
  else {
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
          ajaxInProg = true;
          createSVGimgs(response.data);
        }
      },
      complete: function () {
        ajaxInProg = false;
      },
      error: function (response) {
        console.log('error =' + response.error);
      }
    });
  }
}

var loadPortfolioDetail = function (d) {
  jQuery.data(document.body, "port_status", 'open');

  var url = d.img_url,
    w = d.img_w,
    h = d.img_h,
    win_w = document.documentElement.clientWidth,
    win_h = document.documentElement.clientHeight,
    calc_w = null,
    calc_h = null;

  var detailBox = $('<div>').addClass('portDetailBox'),
    img = $('<img>').attr('src', url);
  detailBox.append(img);
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

  TweenLite.to(detailBox, 1, {autoAlpha: 1});
  detailBox.center();

}

var createSVGimgs = function (jsonObj) {
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
      })

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

  var portTL = new TimelineLite({paused: true, autoRemoveChildren: true}),
    t3iLogo = d3.select('.main.tripl3infLogo');

  portTL.to(t3iLogo, 1, {autoAlpha: 0});

  portTL.staggerFrom(li[0], 0.75, {y: '-=200px', ease: Expo.easeIn}, 0.15, 0)
    .staggerTo(li[0], 0.75, {autoAlpha: 1, ease: Expo.easeIn}, 0.15, 0)

  layout();
  portTL.play();

  var backBtn = $('#portCloseBtn');
  if (!backBtn.length) {
    createBackBtn();
  }


  // Event handlers
  li.on('mouseover', function (d, i) {
    TweenLite.to(filter[0][i], 0.3, {attr: {"values": 1}, ease: Linear.easeNone});
  })

    .on('mouseout', function (d, i) {
      TweenLite.to(filter[0][i], 0.3, {attr: {"values": 0}, ease: Linear.easeNone});
    })

    .on('click', function (d) {
      portTL.staggerTo(li[0], 0.4, {autoAlpha: 0}, 0.3, 0)
        .staggerTo(li[0], 0.6, {y: '+=200px'}, 0.1, 0)
        .call(loadPortfolioDetail, [d]);

    });
};


// Create Back/Exit Button
var createBackBtn = function () {
  closeBtn = d3.select('body').append('i').attr('id', 'portCloseBtn').attr('class', ' fa fa-chevron-left');
  closeBtnTL = new TimelineMax()
    .to(closeBtn, 2, {autoAlpha: 1})

  closeBtn.on('mouseover', function () {
    TweenLite.to(this, 0.5, {color: '#aaff00'})
  })

  closeBtn.on('mouseout', function () {
    TweenLite.to(this, 0.5, {color: '#666'})
  })

  closeBtn.on('click', function () {
    var portStat = jQuery.data(document.body, "port_status");

    if (portStat === 'close') {
      console.log('portfolio close')
      var regenMenu = function () {
        $('#portfolio').remove()
        $('#portCloseBtn').remove()
        openMenu();
      }
      closeBtnTL.to(closeBtn, 1, {autoAlpha: 0})
        .to($('#portfolio'), 2, {autoAlpha: 0, onComplete: regenMenu()}, 1)
    }
    else {
      console.log('portfolio open')
      var regenPortfolio = function () {
        $('#portfolio').remove()
        initPortfolio()
      }
      closeBtnTL.to($('.portDetailBox'), 1, {autoAlpha: 0, onComplete: regenPortfolio()})
    }
  })

}



