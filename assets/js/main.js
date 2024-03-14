// Header menu Start

function toggleMenu() {
  var menuBar = document.querySelector('.menu-bar');
  menuBar.classList.toggle('open');
  var menuItems = document.querySelector('.menu-items');
  menuItems.classList.toggle('show');
}
// Header menu End

// Header Js Start
// (function () {
//   var width,
//     height,
//     largeHeader,
//     canvas,
//     ctx,
//     points,
//     target,
//     animateHeader = true;

//   // Main
//   initHeader();
//   initAnimation();
//   addListeners();

//   function initHeader() {
//     // width = window.innerWidth;
//     width = window.innerWidth;
//     height = window.innerHeight;
//     target = { x: width / 2, y: height / 2 };

//     largeHeader = document.getElementById("large-header");
//     largeHeader.style.height = height + "px";

//     canvas = document.getElementById("demo-canvas");
//     canvas.width = width;
//     canvas.height = height;
//     ctx = canvas.getContext("2d");

//     // create points
//     points = [];
//     for (var x = 0; x < width; x = x + width / 20) {
//       for (var y = 0; y < height; y = y + height / 20) {
//         var px = x + (Math.random() * width) / 20;
//         var py = y + (Math.random() * height) / 20;
//         var p = { x: px, originX: px, y: py, originY: py };
//         points.push(p);
//       }
//     }

//     // for each point find the 5 closest points
//     for (var i = 0; i < points.length; i++) {
//       var closest = [];
//       var p1 = points[i];
//       for (var j = 0; j < points.length; j++) {
//         var p2 = points[j];
//         if (!(p1 == p2)) {
//           var placed = false;
//           for (var k = 0; k < 5; k++) {
//             if (!placed) {
//               if (closest[k] == undefined) {
//                 closest[k] = p2;
//                 placed = true;
//               }
//             }
//           }

//           for (var k = 0; k < 5; k++) {
//             if (!placed) {
//               if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                 closest[k] = p2;
//                 placed = true;
//               }
//             }
//           }
//         }
//       }
//       p1.closest = closest;
//     }

//     // assign a circle to each point
//     for (var i in points) {
//       var c = new Circle(
//         points[i],
//         2 + Math.random() * 2,
//         "rgba(255,255,255,0.3)"
//       );
//       points[i].circle = c;
//     }
//   }

//   // Event handling
//   function addListeners() {
//     if (!("ontouchstart" in window)) {
//       window.addEventListener("mousemove", mouseMove);
//     }
//     window.addEventListener("scroll", scrollCheck);
//     window.addEventListener("resize", resize);
//   }

//   function mouseMove(e) {
//     var posx = (posy = 0);
//     if (e.pageX || e.pageY) {
//       posx = e.pageX;
//       posy = e.pageY;
//     } else if (e.clientX || e.clientY) {
//       posx =
//         e.clientX +
//         document.body.scrollLeft +
//         document.documentElement.scrollLeft;
//       posy =
//         e.clientY +
//         document.body.scrollTop +
//         document.documentElement.scrollTop;
//     }
//     target.x = posx;
//     target.y = posy;
//   }

//   function scrollCheck() {
//     if (document.body.scrollTop > height) animateHeader = false;
//     else animateHeader = true;
//   }

//   function resize() {
//     width = window.innerWidth;
//     height = window.innerHeight;
//     largeHeader.style.height = height + "px";
//     canvas.width = width;
//     canvas.height = height;
//   }

//   // animation
//   function initAnimation() {
//     animate();
//     for (var i in points) {
//       shiftPoint(points[i]);
//     }
//   }

//   function animate() {
//     if (animateHeader) {
//       ctx.clearRect(0, 0, width, height);
//       for (var i in points) {
//         // detect points in range
//         if (Math.abs(getDistance(target, points[i])) < 4000) {
//           points[i].active = 0.3;
//           points[i].circle.active = 0.6;
//         } else if (Math.abs(getDistance(target, points[i])) < 20000) {
//           points[i].active = 0.1;
//           points[i].circle.active = 0.3;
//         } else if (Math.abs(getDistance(target, points[i])) < 40000) {
//           points[i].active = 0.02;
//           points[i].circle.active = 0.1;
//         } else {
//           points[i].active = 0;
//           points[i].circle.active = 0;
//         }

//         drawLines(points[i]);
//         points[i].circle.draw();
//       }
//     }
//     requestAnimationFrame(animate);
//   }

//   function shiftPoint(p) {
//     TweenLite.to(p, 1 + 1 * Math.random(), {
//       x: p.originX - 50 + Math.random() * 100,
//       y: p.originY - 50 + Math.random() * 100,
//       ease: Circ.easeInOut,
//       onComplete: function () {
//         shiftPoint(p);
//       }
//     });
//   }

//   // Canvas manipulation
//   function drawLines(p) {
//     if (!p.active) return;
//     for (var i in p.closest) {
//       ctx.beginPath();
//       ctx.moveTo(p.x, p.y);
//       ctx.lineTo(p.closest[i].x, p.closest[i].y);
//       ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
//       ctx.stroke();
//     }
//   }

//   function Circle(pos, rad, color) {
//     var _this = this;

//     // constructor
//     (function () {
//       _this.pos = pos || null;
//       _this.radius = rad || null;
//       _this.color = color || null;
//     })();

//     this.draw = function () {
//       if (!_this.active) return;
//       ctx.beginPath();
//       ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
//       ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
//       ctx.fill();
//     };
//   }

//   // Util
//   function getDistance(p1, p2) {
//     return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
//   }
// })();

// Header Js End

// Card Layout JS Start

// const AnimateOnScroll = function ({ offset } = { offset: 10 }) {
//   const windowTop = offset * window.innerHeight / 100;
//   const windowBottom = window.innerHeight - windowTop;
//   const windowLeft = 0;
//   const windowRight = window.innerWidth;

//   this.start = element => {
//     window.requestAnimationFrame(() => {
//       element.style.animationDelay = element.dataset.animationDelay;
//       element.style.animationDuration = element.dataset.animationDuration;

//       element.classList.add(element.dataset.animation);

//       element.dataset.animated = "true";
//     });
//   };

//   this.inViewport = element => {
//     const elementRect = element.getBoundingClientRect();
//     const elementTop =
//     elementRect.top + parseInt(element.dataset.animationOffset) ||
//     elementRect.top;
//     const elementBottom =
//     elementRect.bottom - parseInt(element.dataset.animationOffset) ||
//     elementRect.bottom;
//     const elementLeft = elementRect.left;
//     const elementRight = elementRect.right;

//     return (
//       elementTop <= windowBottom &&
//       elementBottom >= windowTop &&
//       elementLeft <= windowRight &&
//       elementRight >= windowLeft);

//   };

//   this.verifyElementsInViewport = (els = elements) => {
//     for (let i = 0, len = els.length; i < len; i++) {
//       if (els[i].dataset.animated) continue;

//       this.inViewport(els[i]) && this.start(els[i]);
//     }
//   };

//   this.getElements = () =>
//   document.querySelectorAll("[data-animation]:not([data-animated])");

//   this.update = () => {
//     elements = this.getElements();
//     elements && this.verifyElementsInViewport(elements);
//   };

//   window.addEventListener("load", this.update, false);
//   window.addEventListener(
//   "scroll",
//   () => this.verifyElementsInViewport(elements),
//   { passive: true });

//   window.addEventListener(
//   "resize",
//   () => this.verifyElementsInViewport(elements),
//   { passive: true });

// };

// const options = {
//   offset: 15 // percentage of the window
// };

// const animation = new AnimateOnScroll(options);

// Card Layout JS End


// section 3 Scroll Animation JS Start
//  ------- Button CLick Active code start
var header = document.getElementById("activeBtn");
var btns = header.getElementsByClassName("faqBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activeHoverBtn");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" activeHoverBtn", "");
    }
    this.className += " activeHoverBtn";
  });
}
//  ------- Button CLick Active code End
// Hide Show Intelligere Telly And All FAQs Start
var All = document.getElementById("All");
var intel = document.getElementById("Intelligere");
var Tall = document.getElementById("Tally");
Tall.style.display = "none";
intel.style.display = "none";

document.getElementById("Intelligere-tab").onclick = function () {
  Tall.style.display = "none";
  intel.style.display = "block";
  All.style.display = "none";
};

document.getElementById("Tally-tab").onclick = function () {
  Tall.style.display = "block";
  intel.style.display = "none";
  All.style.display = "none";
};
document.getElementById("All-tab").onclick = function () {
  Tall.style.display = "none";
  intel.style.display = "none";
  All.style.display = "block";
};
// Hide Show Intelligere Telly And All FAQs End

const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});


// section 3 Scroll Animation JS End

// Secation 4 Testimonial JS Start
var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
  testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
  testimLeftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer,
  touchStartPos,
  touchEndPos,
  touchPosDiff,
  ignoreTouch = 30;
;

window.onload = function () {

  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide(currentSlide += 1);
    }, testimSpeed)
  }

  testimLeftArrow.addEventListener("click", function () {
    playSlide(currentSlide -= 1);
  })

  testimRightArrow.addEventListener("click", function () {
    playSlide(currentSlide += 1);
  })

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide(currentSlide = testimDots.indexOf(this));
    })
  }

  playSlide(currentSlide);

  // keyboard shortcuts
  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      default:
        break;
    }
  })

  testim.addEventListener("touchstart", function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  })

  testim.addEventListener("touchend", function (e) {
    touchEndPos = e.changedTouches[0].clientX;

    touchPosDiff = touchStartPos - touchEndPos;

    console.log(touchPosDiff);
    console.log(touchStartPos);
    console.log(touchEndPos);


    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click();
    } else {
      return;
    }

  })
}
// Secation 4 Testimonial JS End


// Counter Effect Start
var isAlreadyRun = false;

$(window).scroll(function () {
  $(".counter-show").each(function (i) {
    var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if (bottom_of_window > bottom_of_object + 20) {
      if (!isAlreadyRun) {
        $(".count-number").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text()
              },
              {
                duration: 3500,
                easing: "swing",
                step: function (now) {
                  // $(this).text(Math.ceil(now));
                  $(this).text(Math.ceil(now));
                }
              }
            );
        });
      }
      isAlreadyRun = true;
    }
  });
});

// Counter Effect End

// Zoom In Effect on Div Start
AOS.init({
  duration: 1000
});
// Zoom In Effect on Div End


// Our Team Carousal Start
(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

// Our Team Carousal End

// Contact Page Start 
// button JS
// const button = document.querySelector(".contactbutton");

// button.addEventListener("click", (e) => {
//   e.preventDefault;
//   button.classList.add("animate");
//   setTimeout(() => {
//     button.classList.remove("animate");
//   }, 600);
// });


// Contact Page  End