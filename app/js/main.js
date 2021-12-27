// NAVBAR SEARCH FIELD
setTimeout(function() {
  let slides = document.querySelectorAll('.slick-slide');

  Array.from(slides).forEach(slide=>{
    slide.hide().css('visibility','visible').fadeIn('slow');
  })
}, 2000);
try {
  var countSearch = 0;
  const search_toggle = () => {
    const search_inp = document.getElementById("search_inp");
    if (countSearch == 0) {
      search_inp.style.opacity = "0";
    }
    countSearch += 1;
    if (search_inp.style.opacity == "0") {
      search_inp.style.opacity = "1";
      search_inp.style.transform = "translate(0px,60%)";
    } else {
      search_inp.style.transform = "translate(0px,-100%)";
      search_inp.style.opacity = "0";
    }
  };
  const search_btn = document.getElementById("search_btn");
  search_btn.addEventListener("click", search_toggle);
} catch (err) {
  console.log(err);
}
// HOME PAGE  PRODUCTS SLIDER ONE
try {
  $("#home_products_one").slick({
    slidesPerRow: 4,
    rows: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: "#home_next1",
    prevArrow: "#home_prev1",
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesPerRow: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesPerRow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesPerRow: 1,
          rows: 2,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}

// HOME PAGE  PRODUCTS SLIDER TWO
try {
  $("#home_products_two").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: "#home_next2",
    prevArrow: "#home_prev2",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}

// SUBSCRIBE RADIO BUTTONS
try {
  function ShowingCheckMark(element) {
    let checkmark = element.previousElementSibling.childNodes;
    if (element.checked) {
      checkmark[1].style.opacity = "1";
    } else {
      checkmark[1].style.opacity = "0";
    }
  }
  const radio_inp = document.querySelectorAll(
    '.subscribe_save input[type="radio"]'
  );
  Array.from(radio_inp).forEach((element) => {
    ShowingCheckMark(element);

    element.addEventListener("change", () => {
      Array.from(radio_inp).forEach((element) => {
        ShowingCheckMark(element);
      });
    });
  });
} catch (err) {
  console.log(err);
}
// CUSTOM RANGE
try {
  const custom_range = document.getElementById("customRange");
  const variations = document.querySelector(".variations");
  function variationStyling(rangeValue, variationList) {
    Array.from(variationList).forEach((element, index) => {
      if (index == rangeValue) {
        element.style.fontWeight = "700";
        element.style.color = "#ED6401";
      } else {
        element.style.fontWeight = "400";
        element.style.color = "#565656";
      }
    });
  }
  variationStyling(custom_range.value, variations.children);
  custom_range.addEventListener("change", () => {
    variationStyling(custom_range.value, variations.children);
  });
} catch (err) {
  console.log(err);
}

// SIDED CONTAINER
try {
  function Side_Container() {
    // GETTING MARGIN OF DEFAULT CONTAINER
    let def_container = document.querySelector(".container"),
      margin_right = getComputedStyle(def_container).marginRight,
      max_width = getComputedStyle(def_container).maxWidth;

    let side_containers = document.querySelectorAll(".side_container");

    Array.from(side_containers).forEach((side_container) => {
      if (side_container && !(window.innerWidth <= 991)) {
        var new_width = parseInt(margin_right) + parseInt(max_width);
      } else {
        var new_width = parseInt(max_width);
      }
      side_container.style.maxWidth = `${new_width}px`;
    });
  }
  Side_Container();
  window.addEventListener("resize", Side_Container);
} catch (err) {
  console.log(err);
}

// BRANDS LOGO SLIDER
try {
  $(".brand_logo").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive:[
      {
        breakpoint:'767',
        settings:{
          slidesToShow:2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint:'375',
        settings:{
          slidesToShow:1,
          slidesToScroll: 1,
        }
      }
    ]
  });
} catch (err) {
  console.log(err);
}

// CUSTOMER REVIEW SLIDER
try {
  $(".home_cutomer_review").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: "#home_next3",
    prevArrow: "#home_prev3",
    variableWidth: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}
// PRODUCT PAGE CUSTOMER REVIEW SLIDER
try {
  $("#productPage_1").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: "#product_next1",
    prevArrow: "#product_prev1",
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}
// PRODUCT PAGE RELATED PRODUCTS SLIDER
try {
  $("#productPage_2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: "#product_next2",
    prevArrow: "#product_prev2",
    variableWidth: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}
// CART PAGE SOLD PRODECTS SLIDER
try {
  $(".cart_sold_products .products_list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: ".slick_control_next",
    prevArrow: ".slick_control_prev",
    variableWidth: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}

//PRODUCT PAGE MESSAGE VIDEO
try {
  const msg_play_btn = document.querySelector(".msg_play_btn");
  msg_play_btn.addEventListener("click", (e) => {
    BigPicture({
      el: e.target,
      ytSrc: "9EhR0pG0JUQ",
    });
  });
} catch (err) {
  console.log(err);
}

// ABOUT PAGE VIDEO
try {
  const about_play_btn = document.querySelector(".about_play_button");
  console.log(about_play_btn);
  about_play_btn.addEventListener("click", (e) => {
    BigPicture({
      el: e.target,
      ytSrc: "9EhR0pG0JUQ",
    });
  });
} catch (err) {
  console.log(err);
}

// CHAT BUTTON DISPLAYING
try {
  const chat_btn = document.querySelector(".chat_button");
  document.addEventListener("scroll", () => {
    if (window.scrollY >= 800 && chat_btn) {
      chat_btn.style.display = "block";
    } else if (window.scrollY < 800 && chat_btn) {
      chat_btn.style.display = "none";
    }
  });
} catch (err) {
  console.log(err);
}

// SHOP PAGE TWO PRODUCTS SLIDER
try {
  $("#shop2_products_list").slick({
    slidesPerRow: 3,
    rows: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: "#shop2_next",
    prevArrow: "#shop2_prev",
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesPerRow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesPerRow: 1,
          rows: 2,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}

// SHOP PAGE SLIDER ONE
try {
  $("#shop_products_list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: ".shop_next_1",
    prevArrow: ".shop_prev_1",
    variableWidth: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}

// SHOP PAGE SLIDER TWO
try {
  $("#shop_products_list2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: ".shop_next_2",
    prevArrow: ".shop_prev_2",
    variableWidth: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}

// SHOP PAGE SLIDER THREE
try {
  $("#shop_products_list3").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: ".shop_next_3",
    prevArrow: ".shop_prev_3",
    variableWidth: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}

// SHOP PAGE SLIDER FOUR
try {
  $(".cutomer_review_inner").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: ".shop_next_4",
    prevArrow: ".shop_prev_4",
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}

// SUBSCRIPTION PRODUCTS SLIDER ONE
try {
  $("#subscription_products_list").slick({
    slidesPerRow: 4,
    rows: 2,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    nextArrow: "#shop2_next",
    prevArrow: "#shop2_prev",
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesPerRow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesPerRow: 1,
          rows: 2,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}

// SUBSCRIPTION PRODUCTS SLIDER TWO
try {
  $("#subscription_orderSummary_products_list").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    nextArrow: "#shop2_next",
    prevArrow: "#shop2_prev",
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}

// WHOLE SALE LOGO SLIDER
try {
  $("#whlSale_logos").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });
} catch (err) {
  console.log(err);
}

// IMPACT IN US PRODUCTS LIST ONE
try {
  $("#impactUs_products_one").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: ".impactUs_next1",
    prevArrow: ".impactUs_prev1",
    variableWidth: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}

// IMPACT IN US PRODUCTS LIST TWO
try {
  $("#impactUs_products_two").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: ".impactUs_next2",
    prevArrow: ".impactUs_prev2",
    variableWidth: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
} catch (err) {
  console.log(err);
}

// HOME PAGE PRODUCT IMAGE SLIDER
try {
  $("#image_for_slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: "#home_img_nav",
  });
  $("#home_img_nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    asNavFor: "#image_for_slide",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });
} catch (err) {
  console.log(err);
}
// PRODUCT PAGE PRODUCT IMAGE SLIDER
try {
  $("#productPage_image").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: "#productPage_images_nav",
  });
  $("#productPage_images_nav").slick({
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: "#productPage_image",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  });
} catch (err) {
  console.log(err);
}
// PRODUCT PAGE ACCORDIONS
const Accordion = (
  parent,
  tab_count,
  icon = false,
  icon1 = false,
  icon2 = false
) => {
  for (let index = 1; index <= tab_count; index++) {
    let tab = `${parent} .tab${index}`;
    $(tab).on("click", () => {
      let collapse_data = `${parent} .collapse_data${index}`;

      $(collapse_data)
        .stop()
        .slideToggle(() => {
          if (icon) {
            if (
              !(document.querySelector(collapse_data).style.display == "none")
            ) {
              $(`${tab} .icon`).html(icon1);
            } else {
              $(`${tab} .icon`).html(icon2);
            }
          }
        });
    });
  }
};
try {
  Accordion(".extra_info", 3);
  Accordion(".extra_info_two", 3, true, "-", "+");
} catch (err) {
  console.log(err);
}
// FAQ PAGE ACCORIONS
function Main_Accordion(parent){
  $(`${parent} .accordion_box:first`).addClass("active");
  $(`${parent} .accordion_box:first`)
    .children(".acc_trigger")
    .children(".icon")
    .addClass("fa-caret-up");
  $(`${parent} .accordion_box:first`)
    .children(".acc_trigger")
    .addClass("selected")
    .next(".acc_container")
    .show();

  $(`${parent} .acc_trigger`).click(function (event) {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
      $(`${parent} .acc_trigger`)
      .children('.icon')[0]
      .classList.remove("fa-caret-down");
      $(this).children('.icon')[0].classList.remove("fa-caret-up");
      $(this).children('.icon')[0].classList.add("fa-caret-down");

      $(this).next().stop().slideUp();
      $(this).parent().removeClass("active");
    } else {
      $(`${parent} .acc_trigger`).removeClass("selected");
      $(this).addClass("selected");
      $(`${parent} .acc_trigger`)
        .children('.icon')[0]
        .classList.remove("fa-caret-up");
      $(`${parent} .acc_trigger`)
        .children('.icon')[0]
        .classList.add("fa-caret-down"); 
      $(this).children('.icon')[0].classList.add("fa-caret-up");
      $(this).children('.icon')[0].classList.remove("fa-caret-down");
      $(`${parent} .acc_trigger`).next().stop().slideUp();
      $(this).next().slideDown();
      $(`${parent} .accordion_box:first`).removeClass("active");
      $(this).parent().addClass("active");
    }
  });
  if($(`${parent} .inner_accordion`)){
    console.log('entered')
    $(`${parent} .inner_accordion .accordion_box_inner:first`).addClass("active");
    $(`${parent} .inner_accordion .accordion_box_inner:first`)
      .children(".acc_trigger_inner")
      .addClass("selected")
      .next(".acc_container_inner")
      .show();
    $(`${parent} .inner_accordion .acc_trigger_inner`).click(function (event) {
      if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
        $(this).next().stop().slideUp();
        $(this).parent().removeClass("active");
      } else {
        $(`${parent} .inner_accordion .acc_trigger_inner`).removeClass("selected");
        $(this).addClass("selected");

        $(`${parent} .inner_accordion .acc_trigger_inner`).next().stop().slideUp();
        $(this).next().slideDown();
        $(`${parent} .inner_accordion .accordion_box_inner:first`).removeClass("active");
        $(this).parent().addClass("active");
      }
    });
  }
}
try {
  Main_Accordion('.faq_accordion');
} catch (err) {
  console.log(err);
}
// SHOP PAGE CATEGORIES ACCORION
try{
  Main_Accordion('.categories_accordion');
}catch(err){
  console.log(err);
}
// SUBSCRIPTION PAGE VIDEO
try {
  const msg_play_btn = document.querySelector(".msg_play_btn");
  msg_play_btn.addEventListener("click", (e) => {
    BigPicture({
      el: e.target,
      ytSrc: "9EhR0pG0JUQ",
    });
  });
} catch (err) {
  console.log(err);
}

// COPYRIGHT DATE
const footer_bar = document.querySelector(".footer_bar p");
const year = new Date().getFullYear();
footer_bar.innerHTML = `© ${year}, Caribbrew`;
