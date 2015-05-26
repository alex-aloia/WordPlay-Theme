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


portOpen = function () {
  var portfolio = document.querySelectorAll('#portfolio'),
    li = document.querySelectorAll('#portfolio ul>li'),
    portOpenTL = new TimelineLite({delay: 0.5})
      .call(layout)
      .set(li, {transformOrigin: "50% 50%"})
      .set(portfolio, {display: 'block'})
      .call(animate_title, ['Featured Works'])
      .staggerTo(li, 0.5, {autoAlpha: 1, ease: Expo.easeIn}, 0.15, 'in')
}

function portClose() {
  var defObj = $.Deferred();

  var portfolio = document.querySelectorAll('#portfolio'),
    li = document.querySelectorAll('#portfolio ul>li'),
    portCloseTL = new TimelineLite();

  portCloseTL
    .staggerTo(li, 0.5, {autoAlpha: 0, ease: Expo.easeOut}, 0.1, 'out')
    .set(portfolio, {'z-index': '-9'})
    .call(defObj.resolve);

  return defObj.promise();
};


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


  var img_url = d.img_url,
    w = d.detail_imgW,
    title = d.title,
    type = d.type,
    desc = d.desc,
    extLink = d.ext_link,
    detailBox = $('<div>').addClass('portDetail'),
    imgContainer = $('<div>').addClass('imgContainer'),
    txtContainer = $('<div>').addClass('txtContainer'),
    txtContent = $('<div>').addClass('txtContent'),
    txtDL = $('<dl>');


  //closeBtn = d3.select('.port_close');


  $('#portDetailWrap').append(detailBox);
  detailBox.append(imgContainer);
  detailBox.append(txtContainer);
  txtContainer.append(txtContent);

  if (title.length > 0) {
    title = $('<h3>').text(d.title);
    txtContent.append(title);
  }

  txtContent.append(txtDL);

  if (type.length > 0) {
    var h = $('<dd>').text('type: ');
    type = $('<dt>').text(d.type);
    txtDL.append(h, type);
  }

  if (desc.length > 0) {
    var h = $('<dd>').text('info: ');
    desc = $('<dt>').text(d.desc);
    txtDL.append(h, desc);
  }

  if (extLink.length > 0) {
    extLink = $('<a>').attr('href', extLink).attr('target', '_blank').html('view live');
    txtContent.append(extLink);
  }

  console.info(extLink)

  function loadImg(src) {
    var defObj = $.Deferred(),
      image = new Image();

    image.onload = function () {
      $(image).addClass('img-responsive').appendTo(imgContainer);
      defObj.resolve();
    }

    image.onerror = function () {
      defObj.reject();
    }

    image.src = src;

    return defObj.promise();
  };


  function animateDetail() {
    var $window = $(window),
      detTL = new TimelineLite();


    $window.disablescroll({
      handleWheel: true,
      handleKeys: true
    });

    detTL.to(detailBox, 3, {autoAlpha: 1});

    console.log('done')

  }


  $.when(portClose(), loadImg(img_url))
    .done(animateDetail());


  detCloseBtn.on('mousedown', function () {
    closeBtnTL.reverse();
    TweenLite.to(detailBox, 0.6, {autoAlpha: 0, onComplete: closeDetail});

    $(window).disablescroll("undo");
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
        if (d.img_url == null) {
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
        if (d.img_url != null) {
          return d.img_url;
        }
        else {
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
      loadPortfolioDetail(d);
    });

  $(window).resize(function () {
    layout();
  });
};








