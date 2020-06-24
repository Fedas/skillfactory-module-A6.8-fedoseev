const btn1 = $('.btn1');
const btn2 = $('.btn2');
const btn3 = $('.btn3');
let currentProgress = 0;
function init() {
}

/*Проверяю подключение*/
$('.btn1').click((event) => {
  console.log('push', event);
});

$('.btn1').click(function() {
	currentProgress = currentProgress + 1;
       /*console.log('currentProgress = ', currentProgress);*/
       $('.progress-bar').width(currentProgress + "%");
});



function init() {
   btn1.click(function() {
      currentProgress = currentProgress + 1;
       /*console.log('currentProgress = ', currentProgress); */
       $('.progress-bar').width(currentProgress + "%");
     });
   };

$('.btn2').click(function() {
	currentProgress = currentProgress + 3;
       /*console.log('currentProgress = ', currentProgress);*/
       $('.progress-bar').width(currentProgress + "%");
});

$('.btn3').click(function() {
  currentProgress = currentProgress + 7;
       /*console.log('currentProgress = ', currentProgress);*/
       $('.progress-bar').width(currentProgress + "%");
});
