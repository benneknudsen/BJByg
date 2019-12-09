"use strict"

// Single page


// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".titel");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  location.href = `#${pageId}`;
}



// set default page
function setDefaultPage() {
  let page = "home";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

setDefaultPage();

Vue.config.devtools = true;

Vue.component('card', {
  template: '\n    <div class="card-wrap"\n      @mousemove="handleMouseMove"\n      @mouseenter="handleMouseEnter"\n      @mouseleave="handleMouseLeave"\n      ref="card">\n      <div class="card"\n        :style="cardStyle">\n        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>\n        <div class="card-info">\n          <slot name="header"></slot>\n          <slot name="content"></slot>\n        </div>\n      </div>\n    </div>',
  mounted: function mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },

  props: ['dataImage'],
  data: function data() {
    return {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null
    };
  },
  computed: {
    mousePX: function mousePX() {
      return this.mouseX / this.width;
    },
    mousePY: function mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle: function cardStyle() {
      var rX = this.mousePX * 30;
      var rY = this.mousePY * -30;
      return {
        transform: 'rotateY(' + rX + 'deg) rotateX(' + rY + 'deg)'
      };
    },
    cardBgTransform: function cardBgTransform() {
      var tX = this.mousePX * -40;
      var tY = this.mousePY * -40;
      return {
        transform: 'translateX(' + tX + 'px) translateY(' + tY + 'px)'
      };
    },
    cardBgImage: function cardBgImage() {
      return {
        backgroundImage: 'url(' + this.dataImage + ')'
      };
    }
  },
  methods: {
    handleMouseMove: function handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter: function handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave: function handleMouseLeave() {
      var _this = this;

      this.mouseLeaveDelay = setTimeout(function () {
        _this.mouseX = 0;
        _this.mouseY = 0;
      }, 1000);
    }
  }
});

var app = new Vue({
  el: '#app'
});


const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const navbar = document.querySelector('.navbar');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero,1, {height: "0%"}, {height: '90%', ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: '100%'}, {width: '90%', ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: '0%', ease: Power2.easeInOut}, "-=1.2")
.fromTo(headline, 1.2, {opacity: 0, x: 50}, {opacity: 1, x: 0}, "-=0.1");



AOS.init({

  duration: 1000
});

$(".gallery").magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{
    enabled: true
  }
});
