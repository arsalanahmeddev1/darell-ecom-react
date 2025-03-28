

// eye btn
let shoePassBtn = document.querySelectorAll('.show-pass')
shoePassBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    e.target.classList.toggle('fa-eye')
    let parent = btn.closest('.input-area')
    let input = parent.querySelector('input')
    if (input.type == 'password') {
      input.type = 'text'
    } else {
      input.type = 'password'
    }
  })
})
// eye btn


// let inputpromo = document.querySelector (".promo-code")
// let promobtn = document.querySelector(".promo")
// promobtn.addEventListener("click", function() {


// })
// crop image
$(document).on('click', '#upload-aphoto', function () {
  document.getElementById('selectedFile').click();
});

$('#selectedFile').change(function () {
  if (this.files[0] == undefined)
    return;
  $('#imageModalContainer').modal('show');
  let reader = new FileReader();
  reader.addEventListener("load", function () {
    window.src = reader.result;
    $('#selectedFile').val('');
  }, false);
  if (this.files[0]) {
    reader.readAsDataURL(this.files[0]);
  }
});

let croppi;
$('#imageModalContainer').on('shown.bs.modal', function () {
  let width = document.getElementById('crop-image-container').offsetWidth - 20;
  $('#crop-image-container').height((width - 80) + 'px');
  croppi = $('#crop-image-container').croppie({
    viewport: { width: 200, height: 200, type: 'circle' },
    boundary: { width: 230, height: 230 },
  });
  $('.modal-body1').height(document.getElementById('crop-image-container').offsetHeight + 50 + 'px');
  croppi.croppie('bind', {
    url: window.src,
  }).then(function () {
    croppi.croppie('setZoom', 0);
  });
});
$('#imageModalContainer').on('hidden.bs.modal', function () {
  croppi.croppie('destroy');
});

$(document).on('click', '.save-modal', function (ev) {
  croppi.croppie('result', {
    type: 'base64',
    format: 'png',
    size: 'viewport'
  }).then(function (resp) {
    $('#confirm-img').attr('src', resp);
    $('.modal').modal('hide');
  });
});
// crop image
// drop
$(document).ready(function () {
  $('.accordion-wrapper > ul > li:has(ul)').addClass("accordion-content");

  $('.accordion-wrapper > ul > li > a').click(function () {
    var checkElement = $(this).next();

    $('.accordion-wrapper li').removeClass('accordion-active');
    $(this).closest('li.accordion-content').addClass('accordion-active');

    if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $(this).closest('li').removeClass('accordion-active');
      checkElement.slideUp('normal');
    }

    if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      $('.accordion-wrapper ul ul:visible').slideUp('normal');
      checkElement.slideDown('normal');
    }

    if (checkElement.is('ul')) {
      return false;
    } else {
      return true;
    }
  });
});
// 




const menuBtn = document.querySelectorAll('.menu-toggler')
const nav = document.querySelector('.primary-navs')
menuBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    nav.classList.toggle('active')
  })
})


// 
var buttonPlus = $(".qty-btn-plus");
var buttonMinus = $(".qty-btn-minus");

var incrementPlus = buttonPlus.click(function () {
  var $n = $(this)
    .parent(".qtntainer")
    .find(".input-qty");
  $n.val(Number($n.val()) + 1);
});

var incrementMinus = buttonMinus.click(function () {
  var $n = $(this)
    .parent(".qty-container")
    .find(".input-qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount - 1);
  }
});
// 
$('.product-d-slide').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  prevArrow: false,
  nextArrow: false,
  dots: false,
});
$('.prod-box-wrap').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: false,
  nextArrow: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// 
// 
$('.second-slide').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: true,
  nextArrow: true,
  dots: false,
  prevArrow: '.arrow-left',
  nextArrow: '.arrow-right',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
// 

// 
$('.feed-back-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: true,
  nextArrow: true,
  dots: false,
  nextArrow: '.arrow-prev',
  prevArrow: '.arrow-next',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// 
// 

new WOW().init();
AOS.init();
$('.rooms').slick({
  centerMode: true,
  centerPadding: '25vw',
  slidesToShow: 1,
  prevArrow: '.room-prev',
  nextArrow: '.room-next',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
$('[data-targetit]').on('click', function (e) {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  var target = $(this).data('targetit');
  $('.' + target).siblings('[class^="box-"]').hide();
  $('.' + target).siblings('[class^="box-"]')
  $('.' + target).fadeIn();
  $(".product-list").slick("setPosition");
  $(".recommends-sec").slick("setPosition");
});
$('.menu-toggler').on('click', function (e) {
  $('.primary-nav').toggleClass('active');
});

const scrollTopBtn = document.querySelector(".scroll-btn");
if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", function () {
    let scrollValue = window.scrollY + window.innerHeight
    window.scrollTo(0, scrollValue)
  });
}

// Start upload preview image
var basic = $("#main-cropper").croppie({
  viewport: { width: 200, height: 200, type: 'circle' },
  boundary: { width: 230, height: 230 },
  showZoomer: true,
  url: "http://lorempixel.com/500/400/",
  enableExif: true

});

function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#main-cropper").croppie("bind", {
        url: e.target.result
      });

    };

    reader.readAsDataURL(input.files[0]);
  }
}
$("#edit-pf").on("change", function () {
  $('.cr-slider').addClass('image-range')
  $('.cr-slider').removeClass('cr-slider')
  $('.modal-btn').click()

  // $('.popup-wrap').addClass('active')
  readFile(this);
});

$("#showResult").click(function () {
  $('.popup-wrap').removeClass('active')
  $("#main-cropper")
    .croppie("result", {
      type: "canvas",
      size: "viewport",
      circle: true
    })
    .then(function (resp) {
      $("#result").attr("src", resp);
      // let va = document.getElementById('my-avator')
      // va.value = 'C:\fakepath\placeholder.jpg'
      // va.files[0] = resp
      // console.log(va.files)
    });
  $('.close-modal').click()
});


$('#daterange').daterangepicker();


$(document).ready(function () {
  $('#myTable').DataTable();
});




// $(".eye-btn").on("click", function () {
//   let input = $(this).parents('.field-wrap').find('.field')
//   if (input.attr('type') == 'password') {
//     input.attr('type', 'text')
//     $(this).find('i').removeClass('fa-eye')
//     $(this).find('i').addClass('fa-eye-slash')
//   } else {
//     input.attr('type', 'password')
//     $(this).find('i').addClass('fa-eye')
//     $(this).find('i').removeClass('fa-eye-slash')
//   }
// });
// $(".search-btn, .search-toggler-btn").on("click", function () {
//   $(this).toggleClass('active')
//   $(this).parents('.header-secondary-items').toggleClass('active')
// });


$(function () {
  var current = location.pathname.split('/').at(-1)
  console.log(current)
  $('.nav-btn').each(function () {
    let $this = $(this);
    let link = $this.attr('href').split('/').at(-1)
    if (link == current) {
      $this.addClass('active');
    }
  })
})


$('#nav-icon1, .menu-closer').click(function () {
  $('#nav-icon1').toggleClass('open');
  $('.nav-area').toggleClass('active');
  $('.side-bar').toggleClass('active');
});

const footer = document.querySelector('footer');
function callback(entries) {
  entries.forEach(ent => {
    if (ent.isIntersecting) {
      $('.scroll-btn').addClass('d-none')
    } else {
      $('.scroll-btn').removeClass('d-none')
    }
  })
}
let observer = new IntersectionObserver(callback);
observer.observe(footer) 