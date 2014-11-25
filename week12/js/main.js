$( document ).ready(function() {
// jQuery project demo
var playHadouken = false;

$('#main-example').hover(function() {
  this.src = 'http://learn/static/guides/intro-to-jquery/images/ryu_animated.gif'}, function() {
    this.src = 'http://learn/static/guides/intro-to-jquery/images/ryu_stand_still.png';
  });

$('#main-example').on('mousedown', function() {
  this.src = 'http://learn/static/guides/intro-to-jquery/images/ryu_hadoken_pose.png';
  });

$('#main-example').on('mousedown', function() {
  $('.moving-hadouken').remove();
  });

$('#main-example').on('mousedown', function() {
  $('#main-example-container').append('<img class="moving-hadouken" src="/learn/static/guides/intro-to-jquery/images/hadouken.gif" >');
  });

$('#main-example').on('mousedown', function() {
  if (playHadouken) {
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
    }

$('.moving-hadouken').animate({"margin-left": "200px"}, 1000, 'swing', function() {
  this.remove();
  });
});

$('#main-example').on('mouseup', function() {
  this.src = 'http://learn/static/guides/intro-to-jquery/images/ryu_animated.gif';
  });

$('#main-example-add-sound').on('click', function() {
  playHadouken = !playHadouken;
  if (playHadouken)
    $(this).html('Sound added, click on Ryu');
    if (!playHadouken)
      $(this).html('Sound removed, click to add it back');
      });
    });
