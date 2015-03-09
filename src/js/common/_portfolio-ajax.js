// Portfolio AJAX

ajax_active = false;
detail_active = false;

portTL = new TimelineMax({paused: true});

// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight = (window.innerHeight || document.documentElement.clientHeight) - 50;
  var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  return (
  (rect.left >= 0)
  && (rect.top >= 0)
  && ((rect.left + rect.width) <= windowWidth)
  && ((rect.top + rect.height) <= windowHeight)
  );
}

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
      //layout();
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
  detail_active = true;


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
    .to(x1, .4, {x: '0px', y: '0px', autoAlpha: .8}, '+=1')
    .to(x2, .4, {x: '0px', y: '0px', autoAlpha: .8}, '-=.2')


  var url = d.img_url,
    w = d.img_w,
    h = d.img_h,
    win_w = document.documentElement.clientWidth,
    win_h = document.documentElement.clientHeight,
    calc_w = null,
    calc_h = null,
    detailBox = $('<div>').addClass('portDetailBox'),
    img = $('<img>').attr('src', url),
    closeBtn = d3.select('.port_close');
console.log('img w '+w)
  console.log('img h '+h)
  detailBox.append(img);
  $('body').append(detailBox);

  img.attr('height', h);
  img.attr('width', w);
/*
  if (h > win_h) {
    calc_h = win_h * .9;
    img.attr('height', calc_h);
  }

  else if (w > win_w) {
    calc_w = win_w * .9;
    img.attr('width', calc_w);
  }
*/
  //detailBox.center();

  document.body.scrollTop = document.documentElement.scrollTop = 0;
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
    detail_active = false;
    detailBox.remove();
    portOpen();
  }
}


var createSVGimgs = function (jsonObj) {

  var container = d3.select('.content').append('div').attr('id', 'portfolio'),
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


  var wWidth = (window.innerWidth || document.documentElement.clientWidth);

  li.each(function (d, i) {
    var $this = this,
      $thisNode = $('#portfolio ul li'),
      target_filter = filter[0][i],
      hoverTL = new TimelineLite({paused: true})
        .to(target_filter, .5, {attr: {"values": 1}, ease: Linear.easeNone});

    $this.animation = hoverTL;

    if (wWidth < 993) {
      var checkViz = function () {
        var vis = isElementInViewport($this);
        if (vis) {
          $this.animation.play();
        }
        else {
          $this.animation.reverse();
        }
      }
      checkViz();

      $(window).scroll(function () {
        checkViz();
      })

    }
  })

  // Event handlers
  li.on('mouseover', function () {
    this.animation.play();
  })
    .on('mouseout', function () {
      this.animation.reverse();
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


portOpen = function () {
  document.body.scrollTop = document.documentElement.scrollTop = 0;

  var portfolio = document.querySelectorAll('#portfolio'),
    li = document.querySelectorAll('#portfolio ul>li'),
    portOpenTL = new TimelineLite()
      //.to('.logo_aaa', 1, {y: '+=200px'})
      .set(li, {transformOrigin: "50% 50%"})
      .set(portfolio, {autoAlpha: 1, 'z-index': 999})
      //.staggerFrom(li, 0.75, {scale: 0, ease: Circ.easeIn}, 0.15, 'in')
      .staggerTo(li, 0.8, {autoAlpha: 1, ease: Expo.easeIn}, 0.15, 'in')

  arwTL.play()
      //.call(backBtnOn)
//    .to(closeBtn, 0.5, {autoAlpha: 1}, 'in')
//    .addPause('port_close')
//    .to(closeBtn, 0.5, {autoAlpha: 0}).delay(.5)
}

portClose = function () {
  var portfolio = document.querySelectorAll('#portfolio'),
    li = document.querySelectorAll('#portfolio ul>li'),
    portCloseTL = new TimelineLite();
  if (detail_active = false) {
    //portCloseTL.to('.logo_aaa', 1, {y: '-=200px'})
  }
  portCloseTL
    //.staggerTo(li, 0.8, {scale: 0, ease: Expo.easeOut}, 0.1, 'out')
    .staggerTo(li, 0.8, {autoAlpha: 0, ease: Expo.easeOut}, 0.1, 'out')
    .set(portfolio, {'z-index': '-9'})
}





