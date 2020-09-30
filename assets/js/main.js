const WIDTH = document.documentElement.clientWidth

/*
 * Swiper Sliders
 */

$(document).ready(function () {

	if ($('.qa_similar_grid').length) {
		var questionsSlider = new Swiper('.qa_similar_grid', {
			slidesPerView: 3,
			spaceBetween: 24,
			breakpoints: {
				600: {
					slidesPerView: 1,
					spaceBetween: 16
				},
				1176: {
					slidesPerView: 2,
					spaceBetween: 24
				},
			}
		});
	}
	if ($('.kont-swiper-container').length) {
		var first = new Swiper('.kont-swiper-container', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			mousewheel: true,
			eventsTarget: '.swiper-body',
			speed : 1500,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '"></span>';
				}
			},
			breakpoints: {
				1024: {
					spaceBetween: 30,
				},
				991: {
					mousewheel: false,
				}
			}
			
		});
	}

	if ($('.montors').length) {
		var questionsSlider = new Swiper('.montors', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			mousewheel: true,
			speed : 1500,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '"></span>';
				}
			},
			breakpoints: {
				1024: {
					spaceBetween: 30,
				},
				991: {
					mousewheel: false,
				}
			}
		});
	}
	if ($('.support').length) {
		var questionsSlider = new Swiper('.support', {
			slidesPerView: 'auto',
			spaceBetween: 30,
			mousewheel: true,
			speed : 1500,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '"></span>';
				}
			},
			breakpoints: {
				1024: {
					spaceBetween: 30,
				},
				991: {
					mousewheel: false,
					initialSlide : 1
				}
			}
		});
	}
});

//  Прокрутка слайдов страницы (section)

const itemsSliders = $('.item')
let step = 0
const listen = (e) => {
	
	var delta =  e.deltaY || e.detail || e.wheelDelta
  
	if (delta > 0) {
		itemsSliders[step].classList.remove('item-active')
		itemsSliders[step].classList.remove('animatedCustomClass')
		step + 1 === itemsSliders.length ? step = 0 : step ++
		itemsSliders[step].classList.add('item-active')
		itemsSliders[step].classList.add('animatedCustomClass')
		
		
	}else{
		itemsSliders[step].classList.remove('item-active')
		itemsSliders[step].classList.remove('animatedCustomClass')
		step - 1 ===  -1 ? step = itemsSliders.length - 1 : step --
		itemsSliders[step].classList.add('item-active')
		itemsSliders[step].classList.add('animatedCustomClass')
	}

  
	return false;
  }

if(WIDTH > 991){
	window.addEventListener("wheel", listen, {passive: true});
}else{
	$('.item').addClass('animatedCustomClass')
}


$('.noScroll').on('mouseenter', () => {
	window.removeEventListener("wheel", listen)
})
$('.noScroll').on('mouseleave', () => {
	window.addEventListener("wheel", listen, {passive: true});
})

//  Модальное окно форма заявка на менторство

document.querySelector('#mentorForm').addEventListener('click', (e) => {
	e.preventDefault()
	if(e.target.getAttribute('id') === 'do-back'){
		$('#mentor-modal').removeClass('kontModal-show')
		window.addEventListener("wheel", listen, {passive: true});
	}
})

$('#toggle-modal').on('click', function(){
	$('#mentor-modal').addClass('kontModal-show')
	window.removeEventListener("wheel", listen)
})


// * Reverse time counter

var countDownDate = new Date("Oct 20, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    // Output the result in an element with id="demo"
	document.getElementById("countdown").innerHTML = `<div class="reverseTime-data">
	<span class="reverseTime-span">${days}d</span>
	<span class="reverseTime-span">${hours}h</span>
	<span class="reverseTime-span">${minutes}m</span>
	</div>`
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("reverseTime-head").innerHTML = "Прием заявок закрыт";
    }
}, 1000);
/*
 * Modals
 */

// Кнопки табов фнимация 

$('.switcher-bth').on('click', function(){
	let index = $(this).data('index')
	let text = $(this).text()
	let caretka = $('.psevdo-active')
	let caretkaStyleLeft = $('.psevdo-active').css('left')
	let caretkaStyleTop = $('.psevdo-active').css('top')
	if(WIDTH > 640) {
		switch (index) {
			case 'tab-2':
				if(caretkaStyleLeft === '8px' || caretkaStyleLeft === '415px'){
					caretka.css('left', '210px')
					caretka.text(text)
				}
				break;
			case 'tab-1' :
				if(caretkaStyleLeft === '210px' || caretkaStyleLeft === '415px'){
					caretka.css('left', '8px')
					caretka.text(text)
				}
				break;
			case 'tab-3':
				if(caretkaStyleLeft === '8px' || caretkaStyleLeft === '210px'){
					caretka.css('left', '415px')
					caretka.text(text)
				}
				break;
			default: caretka.css('left', '8px')
				break;
		}
	}else {

		switch (index) {
			case 'tab-2':
				if(caretkaStyleTop === '8px' || caretkaStyleTop === '150px'){
					caretka.css('top', '82px')
					caretka.text(text)
				}
				break;
			case 'tab-1' :
				if(caretkaStyleTop === '82px' || caretkaStyleTop === '150px'){
					caretka.css('top', '8px')
					caretka.text(text)
				}
				break;
			case 'tab-3':
				if(caretkaStyleTop === '82px' || caretkaStyleTop === '8px'){
					caretka.css('top', '150px')
					caretka.text(text)
				}
				break;
			default: caretka.css('top', '8px')
				break;
		}
	}
	
	
	$('.tab').removeClass('tab-active')
	$(`#${index}`).addClass('tab-active')
})

