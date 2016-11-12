console.log('app loaded');

/*
GSAP JS Demo
http://www.greensock.com/gsap-js/
Animation and Bezier motion:
http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js
*/

var container = $("#container"),
    tl;

function getAnimation() {
  var element = $('<img src="images/penguin-sideways.png" class="penguin penguin1" />');
  container.append(element);
  TweenLite.set(element, {x:0, y:100})
  //bezier magic provided by GSAP BezierPlugin (included with TweenMax)
  //http://api.greensock.com/js/com/greensock/plugins/BezierPlugin.html

 //create a semi-random tween
  var bezTween = new TweenMax(element, 6, {
    bezier:{
      type:"soft",
      values:[
          {x:60, y:80},
          {x:150, y:30},
          {x:500, y:600},
          {x:500, y:300},
          {x:700, y:100},
          {x:800, y:500},
          {x:900, y:600},
          {x:910, y:500},
      ],
      autoRotate:true
    },
    ease:Linear.easeNone});
  return bezTween;
}

//create a bunch of Bezier tweens and add them to a timeline
function buildTimeline() {
  tl = new TimelineMax({repeat:1, delay:1});
  //for (i = 0 ; i< 20; i++){
    //start creature animation every 0.17 seconds
    tl.add(getAnimation(), 0 * 0.17);
  //}
}

buildTimeline();
tl.progress(0.5).timeScale(0);

$("#playPause").click(function(){
  if(this.innerHTML === "Play"){
    this.innerHTML = "Pause"
    TweenLite.to(tl, 2, {timeScale:2})
  } else {
    this.innerHTML = "Play"
    TweenLite.to(tl, 2, {timeScale:0})
  }
})
