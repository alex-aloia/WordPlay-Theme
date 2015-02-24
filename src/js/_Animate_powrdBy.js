/**
 * Created by tripl3inf on 1/16/15.
 */


var animate_pwrdBy = function(){
 var pwrdByTL = new TimelineLite(),
  //txt = ["powered",'by'];
  txt = "powered by";

  var container = d3.select('body')
    .append('div')
    .attr('class', 'container_pwrdBy'),
    txtObj = container.selectAll('span')
    .data(txt)
    .enter()
    .append('span')
    .html(function(d, i){
            if(d === " "){
                d = "&nbsp;"
            }
     return d;
    })

//  txtObj[0].node().style('margin-right', '20px')
  console.log(txtObj[0][1])

  $('.container_pwrdBy').center()

  pwrdByTL
      .set(container, {css:{perspective:500, perspectiveOrigin:"50% 50%", transformStyle:"preserve-3d"}})
      .staggerFrom(txtObj[0], 1, {autoAlpha:0, ease:Back.easeIn, y:'-=400',  rotationX:180, transformOrigin:"50% 50% -20"}, .1)
      .staggerTo(txtObj[0], 0.6, {color:'#aaff00'}, 0.1, 1)
    //  .staggerFrom(txtObj[0], 1, {autoAlpha:0, x:'-=300px'}, 0.1, 0)
    .staggerTo(txtObj[0], 1, {autoAlpha:0, y:'+=400',  rotationX:180, transformOrigin:"50% 50% 20"}, .1)
    .staggerTo(txtObj[0], 0.6, {color:'#666'}, 0.1, '-=2')
    .set( $('.container_pwrdBy'), {display:'none'})


  return pwrdByTL;
}
