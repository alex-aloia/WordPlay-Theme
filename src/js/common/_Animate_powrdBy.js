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
    .html(function(d){
     return d;
    })

//  txtObj[0].node().style('margin-right', '20px')
  console.log(txtObj[0][1])

  $('.container_pwrdBy').center()

  pwrdByTL.staggerFrom(txtObj[0], 1, {autoAlpha:0, x:'-=300px'}, 0.1, 0)
    .staggerTo(txtObj[0], 0.6, {color:'#aaff00'}, 0.1, 0.5)
    .staggerTo(txtObj[0], 1, {autoAlpha:0}, 0.2, 1.5)
    .set( $('.container_pwrdBy'), {display:'none'})


  return pwrdByTL;
}
