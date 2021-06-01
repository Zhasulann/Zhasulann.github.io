let status = true;

let cabinet = $('#cabinet');
let me = $('#me');

let  w = cabinet.width() - me.width();
let  d = {};
let  x = 3;

$('#button').click(function(){

  let age = $("#age").val()
  let name = $("#name").val()

  if (age < 18 && name != null){

    status = true;
    confirm('Привет, ' + name + '!');

   
    if(status) {

      $(window).keydown(function(e) { 
          d[e.which ] = true;
          console.log('test ', e )
    });

      $(window).keyup( function(e) {
           d[e.which] = false;
           console.log('test ', e ) 
        });
      

      setInterval(function() {
          me.css({
              left: function(i,v) { return newv(v, 37, 39); },
              top: function(i,v) { return newv(v, 38, 40); }

          });
      }, 20);
    }
   
  } else {

    confirm('Нельзя, ' + name + '!');

  };

});  

function newv(v,a,b) {
  var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
  return n < 0 ? 0 : n > w ? w : n;
}




$('body').keyup(function(e){
    console.log('test ', e )
  var koor = document.getElementById('me');  
  var X = koor.offsetTop;
  var Y = koor.offsetLeft;
  console.log('x=[' + X + '] y=[' + Y + ']');

  if(X==444 && Y==147 || X==444 && Y==150 || X==444 && Y==148 || X==444 && Y==149){
    w = cabinet.width() + me.width();

  }
  if(X>500){
    $("h1").last().addClass("see");
  }

 
   
})





  