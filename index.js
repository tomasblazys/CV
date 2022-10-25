// --------------------------launch


$(window).resize(function() {
  recalc();
  setTimeout(function() {
    recalc();
  }, 100)
});


$(window).resize(animacijos);
animacijos();

var randomArray = [];
function randomizeris() {
  randomArray = [];
  while (randomArray.length < 9) {
    var random = (Math.floor(Math.random() * 9)) + 1;

    if (randomArray.includes(random)) {

    } else {
      randomArray.push(random);
      console.log(randomArray);
    };
  };
}

$('.margin-opacity-left').waypoint(function() {
        $('#' + this.element.id).animate({
              paddingLeft: 0,
              opacity: 1
            }, 400);
    }, {offset:'80%' });


$('.margin-opacity-right').waypoint(function() {
        $('#' + this.element.id).animate({
              paddingRight: 0,
              opacity: 1
            }, 400);
    }, {offset:'85%' });


$('.opacity').waypoint(function() {
        $('#' + this.element.id).animate({
              marginRight: 0,
              opacity: 1
            }, 600);
    }, {offset:'85%' });

    $('.opacity-short').waypoint(function() {
            $('#' + this.element.id).animate({
                  marginRight: 0,
                  opacity: 1
                }, 400);
        }, {offset:'85%' });




// --------------------------navigacijos animacijos

$(".header-title").mouseenter(
  function() {
    $(this).stop(true).animate({
      marginLeft: '9%',
      opacity: 0.7
    }, 100);
  }
).mouseleave(
  function() {
    $(this).stop(true).animate({
      marginLeft: '8%',
      opacity: 1
    }, 100);
  }
);

function animacijos() {
  if ($(window).width() < 992) {
    $(".navigacija-linkas").mouseenter(
      function() {
        $(this).stop(true).animate({
          marginRight: '1%',
          opacity: 0.7
        }, 100);
      }
    ).mouseleave(
      function() {
        $(this).stop(true).animate({
          marginRight: '0',
          opacity: 1
        }, 100);
      }
    );
  } else {
    $(".navigacija-linkas").mouseenter(
      function() {
        $(this).stop(true).animate({
          verticalAlign: '-19px',
          opacity: 0.7
        }, 100);
      }
    ).mouseleave(
      function() {
        $(this).stop(true).animate({
          verticalAlign: '-24px',
          opacity: 1
        }, 100);
      }
    );
  };
};



function puzle() {

  var spotas = 0;
  var delejus = 1700;

  while (spotas < 9) {

    $(".greeting-pic" + randomArray[spotas]).delay(delejus).animate({
      marginTop: eval(("marginTop" + randomArray[spotas])),
      opacity: 1
    }, 300);
    spotas = spotas + 1;
    delejus = delejus + 75;;
  };
};

// -----------------load (ready) animacijos greeting

$(document).ready(function() {

  randomizeris();

  $(".greeting-pic-small").animate({
    opacity: 1

  }, 400);



  puzle();

  $(".greeting-hi").delay(150).animate({
    marginLeft: '0',
    opacity: 1
  }, 300);

  $(".greeting-iam").delay(450).animate({
    marginLeft: '0',
    opacity: 1
  }, 300);

  $(".greeting-name").delay(750).animate({
    marginLeft: '0',
    opacity: 1
  }, 300);

  $(".greeting-who").delay(1400).animate({
    marginLeft: '0',
    opacity: 1
  }, 300);

});

//-----------------------------click photo

$(".greeting-pic").click(function() {

  randomizeris();
  // recalc();
  var spotas = 0;
  var delejus = 100;

  while (spotas < 9) {

    $(".greeting-pic" + randomArray[spotas]).delay(delejus).animate({
      marginTop: eval(("marginTop" + randomArray[spotas])) - 1000
    }, 300);
    spotas = spotas + 1;
    delejus = delejus + 75;;
  };

  randomizeris();
  // recalc();
  var spotas = 0;
  var delejus = 300;

  while (spotas < 9) {

    $(".greeting-pic" + randomArray[spotas]).delay(delejus).animate({
      marginTop: eval(("marginTop" + randomArray[spotas]))
    }, 300);
    spotas = spotas + 1;
    delejus = delejus + 75;;
  };


});

//------------------------------foto mozaika start pozicijos



var box = document.querySelector('.hole');
var greetingWidth = box.offsetWidth;
var greetingHeight = box.offsetHeight;

var screenWidth = window.innerWidth;
var marginLeft = ((((screenWidth / 2) - 480) / 2) - 4);
var marginTop = ((greetingHeight - 480) / 2);
var marginTopStart = ((greetingHeight - 480) / 2) - 480;

var marginLeft11 = ((((screenWidth / 2) - 480) / 2) - 4);
var marginTop1 = ((greetingHeight - 480) / 2);
document.querySelector(".greeting-pic1").style.marginLeft = marginLeft11 + "px";
document.querySelector(".greeting-pic1").style.marginTop = marginTop1 - 1000 + "px";

var marginLeft12 = ((((screenWidth / 2) - 480) / 2) - 4);
var marginTop2 = (((greetingHeight - 480) / 2) + 170);
document.querySelector(".greeting-pic2").style.marginLeft = marginLeft12 + "px";
document.querySelector(".greeting-pic2").style.marginTop = marginTop2 - 1000 + "px";

var marginLeft13 = ((((screenWidth / 2) - 480) / 2) - 4);
var marginTop3 = (((greetingHeight - 480) / 2) + 400);
document.querySelector(".greeting-pic3").style.marginLeft = marginLeft13 + "px";
document.querySelector(".greeting-pic3").style.marginTop = marginTop3 - 1000 + "px";

var marginLeft21 = ((((screenWidth / 2) - 480) / 2) - 4 + 199);
var marginTop4 = (((greetingHeight - 480) / 2));
document.querySelector(".greeting-pic4").style.marginLeft = marginLeft21 + "px";
document.querySelector(".greeting-pic4").style.marginTop = marginTop4 - 1000 + "px";

var marginLeft22 = ((((screenWidth / 2) - 480) / 2) - 4 + 199);
var marginTop5 = (((greetingHeight - 480) / 2) + 160);
document.querySelector(".greeting-pic5").style.marginLeft = marginLeft22 + "px";
document.querySelector(".greeting-pic5").style.marginTop = marginTop5 - 1000 + "px";

var marginLeft23 = ((((screenWidth / 2) - 480) / 2) - 4 + 199);
var marginTop6 = (((greetingHeight - 480) / 2) + 350);
document.querySelector(".greeting-pic6").style.marginLeft = marginLeft23 + "px";
document.querySelector(".greeting-pic6").style.marginTop = marginTop6 - 1000 + "px";

var marginLeft31 = ((((screenWidth / 2) - 480) / 2) - 4 + 348);
var marginTop7 = (((greetingHeight - 480) / 2));
document.querySelector(".greeting-pic7").style.marginLeft = marginLeft31 + "px";
document.querySelector(".greeting-pic7").style.marginTop = marginTop7 - 1000 + "px";

var marginLeft32 = ((((screenWidth / 2) - 480) / 2) - 4 + 348);
var marginTop8 = (((greetingHeight - 480) / 2) + 270);
document.querySelector(".greeting-pic8").style.marginLeft = marginLeft32 + "px";
document.querySelector(".greeting-pic8").style.marginTop = marginTop8 - 1000 + "px";

var marginLeft33 = ((((screenWidth / 2) - 480) / 2) - 4 + 348);
var marginTop9 = (((greetingHeight - 480) / 2) + 370);
document.querySelector(".greeting-pic9").style.marginLeft = marginLeft33 + "px";
document.querySelector(".greeting-pic9").style.marginTop = marginTop9 - 1000 + "px";


document.querySelector(".greeting-pic-not").style.marginLeft = marginLeft + "px";
document.querySelector(".greeting-pic-not").style.marginTop = marginTop + "px";


//------------------------------foto mozaika window size

function recalc() {

  box = document.querySelector('.hole');
  greetingWidth = box.offsetWidth;
  greetingHeight = box.offsetHeight;

  screenWidth = window.innerWidth;
  marginLeft = ((((screenWidth / 2) - 480) / 2) - 4);
  marginTop = ((greetingHeight - 480) / 2);

  marginLeft11 = ((((screenWidth / 2) - 480) / 2) - 4);
  marginTop1 = ((greetingHeight - 480) / 2);
  document.querySelector(".greeting-pic1").style.marginLeft = marginLeft11 + "px";
  document.querySelector(".greeting-pic1").style.marginTop = marginTop1 + "px";

  marginLeft12 = ((((screenWidth / 2) - 480) / 2) - 4);
  marginTop2 = (((greetingHeight - 480) / 2) + 170);
  document.querySelector(".greeting-pic2").style.marginLeft = marginLeft12 + "px";
  document.querySelector(".greeting-pic2").style.marginTop = marginTop2 + "px";

  marginLeft13 = ((((screenWidth / 2) - 480) / 2) - 4);
  marginTop3 = (((greetingHeight - 480) / 2) + 400);
  document.querySelector(".greeting-pic3").style.marginLeft = marginLeft13 + "px";
  document.querySelector(".greeting-pic3").style.marginTop = marginTop3 + "px";

  marginLeft21 = ((((screenWidth / 2) - 480) / 2) - 4 + 200);
  marginTop4 = (((greetingHeight - 480) / 2));
  document.querySelector(".greeting-pic4").style.marginLeft = marginLeft21 + "px";
  document.querySelector(".greeting-pic4").style.marginTop = marginTop4 + "px";

  marginLeft22 = ((((screenWidth / 2) - 480) / 2) - 4 + 200);
  marginTop5 = (((greetingHeight - 480) / 2) + 160);
  document.querySelector(".greeting-pic5").style.marginLeft = marginLeft22 + "px";
  document.querySelector(".greeting-pic5").style.marginTop = marginTop5 + "px";

  marginLeft23 = ((((screenWidth / 2) - 480) / 2) - 4 + 200);
  marginTop6 = (((greetingHeight - 480) / 2) + 350);
  document.querySelector(".greeting-pic6").style.marginLeft = marginLeft23 + "px";
  document.querySelector(".greeting-pic6").style.marginTop = marginTop6 + "px";

  marginLeft31 = ((((screenWidth / 2) - 480) / 2) - 4 + 350);
  marginTop7 = (((greetingHeight - 480) / 2));
  document.querySelector(".greeting-pic7").style.marginLeft = marginLeft31 + "px";
  document.querySelector(".greeting-pic7").style.marginTop = marginTop7 + "px";

  marginLeft32 = ((((screenWidth / 2) - 480) / 2) - 4 + 350);
  marginTop8 = (((greetingHeight - 480) / 2) + 270);
  document.querySelector(".greeting-pic8").style.marginLeft = marginLeft32 + "px";
  document.querySelector(".greeting-pic8").style.marginTop = marginTop8 + "px";

  marginLeft33 = ((((screenWidth / 2) - 480) / 2) - 4 + 350);
  marginTop9 = (((greetingHeight - 480) / 2) + 370);
  document.querySelector(".greeting-pic9").style.marginLeft = marginLeft33 + "px";
  document.querySelector(".greeting-pic9").style.marginTop = marginTop9 + "px";

  document.querySelector(".greeting-pic-not").style.marginLeft = marginLeft + "px";
  document.querySelector(".greeting-pic-not").style.marginTop = marginTop + "px";


}

//---------------------------------hole!!!

function makeCircleHoleClipPathRule(radius) {

  const inner_path = [];
  const circumference = Math.PI * radius;
  const step = Math.PI * 2 / circumference;
  // we are coming from top-left corner
  const start_step = circumference * (5 / 8);
  for (let i = start_step; i < circumference + start_step; i++) {
    const angle = step * i;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    const str = `calc( 50% + ${ x }px ) calc( 50% + ${ y }px )`;
    inner_path.push(str);
  }

  inner_path.push(inner_path[0]);

  return `polygon( evenodd,
    /* outer rect */
    0 0,       /* top - left */
    100% 0,    /* top - right */
    100% 100%, /* bottom - right */
    0% 100%,   /* bottom - left */
    0 0,       /* and top - left again */
    ${ inner_path.join( "," ) }
   )`;

}

const hole_elem = document.querySelector(".hole");
// set the clip-path rule
hole_elem.style.clipPath = makeCircleHoleClipPathRule(235);

// ---------------------Load animacijos Experience

var status1, status2, status3, status4, status5 = "hidden";

$(".btn-more1").click(function() {
  if (status1 == "shown") {
    $(".hidden1").hide("slow");
    $(".btn-more1").text("Read more...");
    status1 = "hidden";
  } else {
    $(".hidden1").show("fast");
    $(".btn-more1").text("Read less...");
    status1 = "shown";
  }
});

$(".btn-more2").click(function() {
  if (status2 == "shown") {
    $(".hidden2").hide("slow");
    $(".btn-more2").text("Read more...");
    status2 = "hidden";
  } else {
    $(".hidden2").show("fast");
    $(".btn-more2").text("Read less...");
    status2 = "shown";
  }
});

$(".btn-more3").click(function() {
  if (status3 == "shown") {
    $(".hidden3").hide("slow");
    $(".btn-more3").text("Read more...");
    status3 = "hidden";
  } else {
    $(".hidden3").show("fast");
    $(".btn-more3").text("Read less...");
    status3 = "shown";
  }
});

$(".btn-more4").click(function() {
  if (status4 == "shown") {
    $(".hidden4").hide("slow");
    $(".btn-more4").text("Read more...");
    status4 = "hidden";
  } else {
    $(".hidden4").show("fast");
    $(".btn-more4").text("Read less...");
    status4 = "shown";
  }
});


// if (direction == "down") {
//
//     $(".header-title").animate({
//       marginLeft: '0',
//
//     }, 500);
//
//   } else {
//
//   $(".header-title").animate({
//     marginLeft: '-50',
//     opacity: 0
//   }, 500);
// }
