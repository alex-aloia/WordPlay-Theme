//    var $container = $('ul.portfolio');
// init
//    $container.packery({
//        itemSelector: 'ul.portfolio li',
//        gutter: 10,
//        columnWidth: 10,
//        rowHeight: 200,
//        //isHorizontal: true,
//        //isOriginLeft: false
//        isOriginTop: false
//    });

//$container.packery( 'once', 'layoutComplete', function() {
//    alert('layout is complete, just once');
//});


var $container = $('.portfolio').packery({
    //isHorizontal: true
    //isOriginTop: false,
    columnWidth: 'li',
    //itemSelector: 'li',
    gutter: 50
    //containerStyle: {width:'90%','margin-left':'5%',position: 'absolute'}
    //rowHeight: 100
    //isInitLayout: false

});


$container.packery( 'on', 'layoutComplete', function() {
    var port_TL = new TimelineLite();
    port_TL.staggerTo( $('.portfolio li'), 0.5, {autoAlpha:1}, 0.25);
});


$container.on( 'click', 'li', function( event ) {
    var $target = $( event.target),
        elem_width = $target.width(),
        win_width = $container.width(),
        center = (win_width / 2) - (elem_width);

    console.log(elem_width);
    console.log(win_width);
    console.log(center);
    var isGigante = $target.hasClass('gigante');
    $target.addClass('gigante');
    $target.siblings().removeClass('gigante');

    if ( isGigante ) {
        // if shrinking, just layout
        $container.packery();
    } else {
        $container.packery( 'fit', event.target, center );
    }
});

$('#test').click( function(){
    $container.packery()
})

$('ul.portfolio a').click( function(e){
    e.preventDefault();
});