


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









var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";

    }
  });
}


$(document).ready(function () {
  $('#drawer-toggle').click(function () {
    $('#nav-icon1').toggleClass('open');
  });
});

$(document).ready(function () {
  $('#drawer-togglem').click(function () {
    $('#nav-icon1m').toggleClass('open');
  });
});



var dropdown1 = document.getElementsByClassName("dropdown-btn-m");
var i;

for (i = 0; i < dropdown1.length; i++) {
  dropdown1[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


$(".rotate").click(function () {
  $(this).toggleClass("down");
})



$(document).ready(function () {
  $('.dropdown-btn').click(function () {
    $('.dropdown-container').toggleClass('up');
  });
});

$(document).ready(function () {
  $('.dropdown-btn').click(function () {
    $('.roter').toggleClass('ned');
  });
});

