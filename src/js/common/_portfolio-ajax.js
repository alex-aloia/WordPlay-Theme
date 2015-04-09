// Portfolio AJAX

ajax_active = false;

portTL = new TimelineMax({paused: true});



// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight = ((window.innerHeight || document.documentElement.clientHeight) - 100);
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

  TweenLite.to('#back_arw .arw', .8, {drawSVG: 0, autoAlpha: 0});
  animate_title_close();

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
    .to(x2, .4, {x: '0px', y: '0px', autoAlpha: .8}, '-=.2');


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
  console.log('img w ' + w)
  console.log('img h ' + h)
  detailBox.append(img);
  $('body').append(detailBox);


  if (w > win_w) {
    //calc_h = win_h - h;
    calc_w = win_w - w;
    //img.attr('height', calc_h);
    img.attr('width', calc_w);
  }
  else {
    img.attr('height', h);
    img.attr('width', w);
  }

  //detailBox.center();

  var scrollUp = function () {
    TweenLite.to('body', .8, {scrollTo: {y: 0, autoKill: false}, ease: Power3.easeOut})
  }

  scrollUp();

  TweenLite.to(detailBox, 0.6, {autoAlpha: 1, delay: 1, zIndex: 5})

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
    scrollUp();
    portOpen(TweenLite.to('#back_arw .arw', .8, {drawSVG: '100%', autoAlpha: .7}));
  }
}


var createSVGimgs = function (jsonObj) {

  var container = d3.select('#portfolio'),
    content = container.append('div').attr('class', 'content'),
    list = content.append("ul"),
    li = list.selectAll("li")
      .data(jsonObj)
      .enter()
      .append("li")
      .style('width', function (d) {
        if (d.img_url == null){
          return;
        }
        else {
          return d.thumb_w + 'px';
        }
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
        if(d.img_url != null){
          return d.img_url;
        }
        else{
          return;
        }
      })
      .style('filter', function (d, i) {
        return 'url(#filter_' + i + ')';
      })
      .style('-webkit-filter', function (d, i) {
        return 'url(#filter_' + i + ')';
      }),
    winWidth = (window.innerWidth || document.documentElement.clientWidth);

  li.each(function (d, i) {
    var $this = this,
      $thisNode = $('#portfolio ul li'),
      target_filter = filter[0][i],
      hoverTL = new TimelineLite({paused: true})
        .to(target_filter, .5, {attr: {"values": 1}, ease: Linear.easeNone});

    $this.animation = hoverTL;

    // check window width: if small screen size, we will poll each image to see if its in viewport
    if (winWidth < 993) {
      $this.animation.play();
      /*var checkViz = function () {
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
      })*/

    } // end if

  })

  // Event handlers
  li.on('mouseover', function () {
    this.animation.play();
  })
    .on('mouseout', function () {
      this.animation.reverse();
    })
    .on('mousedown', function (d) {
      portClose(loadPortfolioDetail(d));
      //if (!portTL.isActive()) {
      //}

    });

  $(window).resize(function () {
    layout();
  });
};


portOpen = function () {
  //document.body.scrollTop = document.documentElement.scrollTop = 0;

  var portfolio = document.querySelectorAll('#portfolio'),
    li = document.querySelectorAll('#portfolio ul>li'),
    portOpenTL = new TimelineLite({delay: 1})
      .call(layout)
      //.call(set_scroll)
      //.to('.logo_aaa', 1, {y: '+=200px'})
      .set(li, {transformOrigin: "50% 50%"})
      //.set(portfolio, {autoAlpha: 1, 'z-index': 999})
      .set(portfolio, {display: 'block'})
      .call(animate_title, ['Featured Works'])
      //.set(title_block, {display: 'block'})
      //.staggerTo(split.chars, .25, {autoAlpha: 1}, 0.1, 'title')
      //.staggerFrom(split.chars, .25, {y: '-=25px'}, 0.1, 'title')
      //.to(lines[0][0], 1, {drawSVG: '0 100%'}, 'lines')
      //.staggerFrom(li, 0.75, {scale: 0, ease: Circ.easeIn}, 0.15, 'in')
      .staggerTo(li, 0.8, {autoAlpha: 1, ease: Expo.easeIn}, 0.15, 'in')
}

portClose = function () {
  var portfolio = document.querySelectorAll('#portfolio'),
    li = document.querySelectorAll('#portfolio ul>li'),
    portCloseTL = new TimelineLite();

  portCloseTL
    //.staggerTo(li, 0.8, {scale: 0, ease: Expo.easeOut}, 0.1, 'out')
    .staggerTo(li, 0.8, {autoAlpha: 0, ease: Expo.easeOut}, 0.1, 'out')
    .set(portfolio, {'z-index': '-9'})
}





