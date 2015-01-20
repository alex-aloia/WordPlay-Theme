/**
 * Created by tripl3inf on 1/14/15.
 */

var initMainMenu = function () {
    $('#main_menu').center()

    mainMenu = d3.select('#menu-primary-navigation'),
        menuItem = mainMenu.selectAll('li'),
        link = mainMenu.selectAll('a'),
        circlePath = ["M 102.16,194.99 C 154.9,194.07 196.9,150.57 195.99,97.84 195.07,45.1 151.57,3.1 98.84,4.01 82.51,4.3 67.21,8.67 53.89,16.13 24.2,32.76 4.38,64.76 5.01,101.16 5.93,153.9 49.43,195.9 102.16,194.99 L 102.18,195.99 C 48.89,196.91 4.94,154.47 4.01,101.18 3.09,47.89 45.53,3.94 98.82,3.01 152.11,2.09 196.06,44.53 196.99,97.82 197.91,151.11 155.47,195.06 102.18,195.99 L 102.16,194.99 Z M 102.16,194.99"],
        svg = menuItem.insert('svg', 'a')
            .attr('class', 'nav_circle')
            .attr('viewBox', '0 0 200 200')
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('preserveAspectRatio', 'xMidYMid meet'),
        nav_circle = svg.append('g')
            .selectAll('path')
            .data(circlePath)
            .enter()
            .append('path')
            .attr('d', function (d) {
                return d;
            })
            .attr('class', 'circ1');

    mainMenuTL = new TimelineMax()
        .set(menuItem[0], {autoAlpha: 0})
        .staggerTo(menuItem[0], 2.5, {autoAlpha: 1}, 0.3)

    nav_circle.each(function (d, i) {
        var pathLength = this.getTotalLength();
        TweenLite.set(this, {strokeDasharray: pathLength, strokeDashoffset: pathLength})
    });

    // hover event
    menuItem.on("mouseenter", function (d, i) {
        var target = nav_circle[i][0];
        TweenLite.to( target, 1, {strokeDashoffset: 0, ease: Sine.easeInOut})
        TweenLite.to(link[0][i], 0.8, {color: '#aaff00'})
    })

    menuItem.on("mouseleave", function (d, i) {
        var target = nav_circle[i][0]
            pathLength = target.getTotalLength();
        TweenLite.to(target, 1, {strokeDashoffset: 1208, ease: Sine.easeInOut})
        TweenLite.to(link[0][i], 0.8, {color: '#333'}, 's1')
    })

    menuItem.on('click', function (d, i){
        d3.event.preventDefault();
        var li = menuItem[0][i];
        closeMenu(li)
    })

    var closeMenu = function(current){
        var link = d3.select(current).select('a').node().href.split('/')[3];
        var siblings = $(current).siblings()

        var gotoLink = function() {
            if (link != null) {
                if (link == 'featured-work') {
                    //closeMenu(menuItem[0][0])
                    initPortfolio()
                }
                else {
                    window.location.href = link;
                }
            }
        }

        mainMenuTL.staggerTo(siblings, 1, {autoAlpha:0}, 0.25)
            .to(current, 1, {autoAlpha:0}, '-=0.7')
            .set(menuItem[0], {display:'none', onComplete:gotoLink()})

    }

    var openMenu = function(current){
        mainMenuTL.set(menuItem[0], {display:'inline-block'})
            .staggerTo(menuItem[0], 1, {autoAlpha:1}, 0.25)
    }

    //var test_btn = d3.select('body').append('span').attr('id', 'testBtn').html('fade out').on('click', function(){
    //    closeMenu(menuItem[0][0])
    //});
    //var test_btn2 = d3.select('body').append('span').attr('id', 'testBtn2').html('fade in').on('click', function() {
    //    openMenu()
    //});

    return mainMenuTL;

}



