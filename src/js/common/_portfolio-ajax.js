// Portfolio AJAX

var ajax_active = false;

portTL = new TimelineMax({paused: true});

var initPortfolio = function () {

  if (ajax_active) {
    return;
  }

  ajax_active = true;

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
        createSVGimgs(response.data);
      }
    },
    complete: function (response) {
      layout();
    },
    error: function (response) {
      console.log('error =' + response.error);
    }
  });
}


var layout = function (container) {
  var container = $('#portfolio ul');
  container.layout({
    type: 'flow',
    alignment: 'center',
    resize: false,
    hgap: 50,
    vgap: 50
//          items: li
  });
}

var loadPortfolioDetail = function (d) {

  arwTL.reverse()
  var detCloseBtn = d3.select('.port_close'),
    x1 = detCloseBtn.select('.port_close_x1'),
    x2 = detCloseBtn.select('.port_close_x2'),
    closeBtnHvrTL = new TimelineLite({paused: true})
      .to(x1, .4, {fill: '#9933FF'}, 'stage1')
      .to(x2, .4, {fill: '#9933FF'}, 'stage1');
  detCloseBtn.animation = closeBtnHvrTL;

  closeBtnTL = new TimelineLite()
    .set(detCloseBtn, {display: 'block'})
    .set(x1, {x: '+=120px', y: '+=120px', autoAlpha: 0, transformOrigin: "50% 50%"})
    .set(x2, {x: '-=120px', y: '+=120px', autoAlpha: 0, transformOrigin: "50% 50%"})
    .to(x1, .4, {x: '0px', y: '0px', autoAlpha: .7}, '+=1')
    .to(x2, .4, {x: '0px', y: '0px', autoAlpha: .7}, '-=.2')


  var url = d.img_url,
    w = d.img_w,
    h = d.img_h,
    win_w = document.documentElement.clientWidth - 100,
    win_h = document.documentElement.clientHeight - 150,
    calc_w = null,
    calc_h = null,
    detailBox = $('<div>').addClass('portDetailBox'),
    img = $('<img>').attr('src', url),
    closeBtn = d3.select('.port_close');

  detailBox.append(img);
  $('body').append(detailBox);

  if (h > win_h) {
    calc_h = win_h * .9;
    img.attr('height', calc_h);
  }

  else if (w > win_w) {
    calc_w = win_w * .9;
    img.attr('width', calc_w);
  }

  detailBox.center();

  TweenLite.to(detailBox, 0.6, {autoAlpha: 1})

  closeBtn.on('mousedown', function () {
    closeBtnTL.reverse();
    TweenLite.to(detailBox, 0.6, {autoAlpha: 0, onComplete: closeDetail});
  })
    .on('mouseover', function () {
      closeBtnHvrTL.play();
    })
    .on('mouseout', function () {
      closeBtnHvrTL.reverse();
    })


  var closeDetail = function () {
    detailBox.remove()
    portOpen()
  }
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
      });


  // Event handlers
  li.on('mouseover', function (d, i) {
    TweenLite.to(filter[0][i], 0.3, {attr: {"values": 1}, ease: Linear.easeNone});
  })

    .on('mouseout', function (d, i) {
      TweenLite.to(filter[0][i], 0.3, {attr: {"values": 0}, ease: Linear.easeNone});
    })

    .on('mousedown', function (d) {
      portClose();
      loadPortfolioDetail(d);
      //if (!portTL.isActive()) {
      //}

    });


  $(window).resize(function () {
    layout();
  });

  // when all imgs are actually done loading, call the layout algorithm
  var imgsLoaded = imagesLoaded(list.node());
  imgsLoaded.on('done', function (instance) {
    layout();
  });

};


var portOpen = function () {
  var portfolio = document.querySelectorAll('#portfolio'),
    li = document.querySelectorAll('#portfolio ul>li'),
    portOpenTL = new TimelineLite()
      .set(li, {transformOrigin: "50% 50%"})
      .set(portfolio, {autoAlpha: 1, 'z-index': 999})
      //.staggerFrom(li, 0.75, {scale: 0, ease: Circ.easeIn}, 0.15, 'in')
      .staggerTo(li, 0.8, {autoAlpha: 1, ease: Expo.easeIn}, 0.15, 'in')
      .call(backBtnOn)
//    .to(closeBtn, 0.5, {autoAlpha: 1}, 'in')
//    .addPause('port_close')
//    .to(closeBtn, 0.5, {autoAlpha: 0}).delay(.5)
}

var portClose = function () {
  var portfolio = document.querySelectorAll('#portfolio'),
    li = document.querySelectorAll('#portfolio ul>li'),
    portCloseTL = new TimelineLite()
      //.staggerTo(li, 0.8, {scale: 0, ease: Expo.easeOut}, 0.1, 'out')
      .staggerTo(li, 0.8, {autoAlpha: 0, ease: Expo.easeOut}, 0.1, 'out')
      .set(portfolio, {'z-index': '-9'})
}


var backBtnOn = function () {
  var backBtn = d3.select('.port_arw'),
    arw = backBtn.select('.arw'),
    hvrTL = new TimelineLite({paused: true})
      .to(arw, .4, {stroke: '#9933FF'})

  arwTL = new TimelineLite()
    .set(backBtn, {display: 'block'})
    .set(arw, {drawSVG: 0})
    .to(arw, .8, {drawSVG: '100%', autoAlpha: .4}),

    backBtn.on('mouseover', function () {
      hvrTL.play()
    })
      .on('mouseout', function () {
        hvrTL.reverse()
      })
      .on('mousedown', function () {
        arwTL.reverse()
        portClose()
        openMenu();
      })
}



