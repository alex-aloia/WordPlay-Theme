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

  var url = d.img_url,
    w = d.img_w,
    h = d.img_h,
    win_w = document.documentElement.clientWidth - 100,
    win_h = document.documentElement.clientHeight - 150,
    calc_w = null,
    calc_h = null;

  var detailBox = $('<div>').addClass('portDetailBox'),
    img = $('<img>').attr('src', url),
    closeDetailBtn = $('<i class="detailBtn fa fa-times-circle-o">');

  detailBox.append(img);
  detailBox.append(closeDetailBtn);
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
  TweenLite.to(closeDetailBtn, 0.6, {autoAlpha: 1});

  closeDetailBtn.hover(function () {
      TweenLite.to(this, 1, {color: '#af0'});
    },
    function () {
      TweenLite.to(this, 1, {color: '#666'});
    }
  )
    .click(function () {
      TweenLite.to(detailBox, 0.6, {autoAlpha: 0, onComplete: closeDetail})
    })

  var closeDetail = function () {
    detailBox.remove()
    portTL.play('port_open')
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
      }),
    closeBtn = d3.select('body').append('i').attr('id', 'portCloseBtn').attr('class', ' fa fa-chevron-left');

  // Event handlers

  li.on('mouseover', function (d, i) {
    TweenLite.to(filter[0][i], 0.3, {attr: {"values": 1}, ease: Linear.easeNone});
  })

    .on('mouseout', function (d, i) {
      TweenLite.to(filter[0][i], 0.3, {attr: {"values": 0}, ease: Linear.easeNone});
    })

    .on('mousedown', function (d) {
      if (!portTL.isActive()) {
        portTL.play('port_close')
          .eventCallback('onComplete', null)
          .eventCallback('onComplete', loadPortfolioDetail, [d]);
      }

    });


  closeBtn.on('mousedown', function () {
    if (!portTL.isActive()) {
      TweenLite.to(this, 1, {autoAlpha: 0, onComplete: openMenu});

      portTL
        .eventCallback('onComplete', null)
        .play('port_close');
    }

  })
    .on('mouseover', function () {
      TweenLite.to(this, 0.6, {color: '#aaff00', scale: 1.1});
    })
    .on('mouseout', function () {
      TweenLite.to(this, 0.6, {color: '#666', scale: 1});
    })



  $(window).resize(function () {
    layout();
  });

  var container2 = document.querySelectorAll('#portfolio');

  portTL.add('port_open')
    //.call(layout, 0)
    .set(container2, {autoAlpha:1, 'z-index':999})
    .staggerFrom(li[0], 0.75, {y: '-=200px', ease: Circ.easeIn}, 0.15, 'in')
    .staggerTo(li[0], 0.75, {autoAlpha: 1, ease: Expo.easeIn}, 0.15, 'in')
    .to(closeBtn, 0.5, {autoAlpha: 1}, 'in')
    .addPause('port_close')
    .to(closeBtn, 0.5, {autoAlpha: 0})
    .staggerTo(li[0], 0.5, {y: '+=300px', ease: Circ.easeOut}, 0.1, 'out')
    .staggerTo(li[0], 0.5, {autoAlpha: 0, ease: Sine.easeOut}, 0.1, 'out')
    .set(container, {'z-index': '-9'})



  var imgsLoaded = imagesLoaded(list.node());
  imgsLoaded.on('done', function (instance) {
    layout();
  });

};





