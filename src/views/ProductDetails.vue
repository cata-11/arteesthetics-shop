<template>
  <section>
    <div id="gallery">
      <div class="main-image">
        <img :src="images[currentImageIdx].src" alt="" />
      </div>
      <div class="images-carousel">
        <button
          @click="scrollToImage(null, false)"
          :class="{ hide: currentImageIdx == 0 }"
        >
          &lsaquo;
        </button>
        <div
          class="images-container"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
        >
          <div
            v-for="(img, idx) in images"
            :key="img.id"
            @click="scrollToImage(idx, null)"
            class="image-item"
            :class="{ active: img.isActive }"
          >
            <img :src="img.src" :alt="img.id" />
          </div>
        </div>
        <button
          @click="scrollToImage(null, true)"
          :class="{ hide: currentImageIdx == images.length - 1 }"
        >
          &rsaquo;
        </button>
      </div>
    </div>
    <div id="details"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          src: '/1.png',
          isActive: true
        },
        {
          id: 2,
          src: '/2.png',
          isActive: false
        },
        {
          id: 3,
          src: '/3.png',
          isActive: false
        },
        {
          id: 4,
          src: '/4.png',
          isActive: false
        },
        {
          id: 5,
          src: '/5.png',
          isActive: false
        },
        {
          id: 6,
          src: '/6.png',
          isActive: false
        },
        {
          id: 7,
          src: '/7.png',
          isActive: false
        }
      ],
      touch: {
        xDown: null,
        yDown: null
      },
      currentImageIdx: 0
    };
  },
  methods: {
    sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
    scrollToImage(idx = null, next = null) {
      const scroller = document.querySelector('.images-container');
      const image = scroller.querySelector('.image-item');
      const imageStyle = window.getComputedStyle(image);
      const imageWidth = parseFloat(imageStyle.width);

      if (idx === null) {
        if (next === true) {
          idx = this.currentImageIdx + 1;
        } else if (next === false) {
          idx = this.currentImageIdx - 1;
        }
      } else if (next === null) {
        if (idx > this.currentImageIdx) {
          next = true;
        } else if (idx < this.currentImageIdx) {
          next = false;
        }
      }

      if (next == true) {
        if (idx == 1) scroller.scrollBy(0, 0);
        else scroller.scrollBy(imageWidth, 0);
      } else if (next == false) {
        if (idx == this.images.length - 2) scroller.scrollBy(0, 0);
        else scroller.scrollBy(-imageWidth, 0);
      }

      for (let i = 0; i < this.images.length; ++i) {
        if (idx == i) {
          this.images[i].isActive = true;
        } else {
          this.images[i].isActive = false;
        }
      }

      this.currentImageIdx = idx;
    },
    handleTouchStart(e) {
      const firstTouch = e.touches[0];
      this.touch.xDown = firstTouch.clientX;
      this.touch.yDown = firstTouch.clientY;
    },
    handleTouchMove(e) {
      if (!this.touch.xDown) return;

      let xUp = e.touches[0].clientX;
      let yUp = e.touches[0].clientY;

      let xDiff = this.touch.xDown - xUp;
      let yDiff = this.touch.yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          this.scrollToNextImage(true);
        } else {
          this.scrollToNextImage(false);
        }
      }
      this.touch.xDown = null;
    }
  },
  mounted() {
    // console.log(this.$route.params.id);
  }
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 70rem;
}
#gallery {
  width: 35rem;
}
.main-image {
  width: 35rem;
  height: 35rem;
  border: 1rem solid var(--a-white);
  box-sizing: border-box;
}
.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.images-carousel {
  margin-top: 1rem;
  width: 35rem;
  height: 12rem;
  display: flex;
  position: relative;
}
button {
  position: absolute;
  z-index: 3;
  width: 3rem;
  height: 10rem;
  font-size: 5rem;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--a-white);
  background-color: var(--violet);
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
}
button:first-of-type {
  top: 0;
  left: 0;
}
button:last-of-type {
  top: 0;
  right: 0;
}
button:hover {
  opacity: 0.9;
}
.hide {
  display: none;
}
.images-container {
  width: 100%;
  scroll-behavior: smooth;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  scroll-snap-type: x mandatory;
  /* scroll-padding-left: 1rem; */
}
.image-item {
  margin: 0 1rem 0 0;
  border: 0.5rem solid var(--a-white);
  box-sizing: border-box;
  scroll-snap-align: end;
  display: inline;
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  filter: brightness(50%);
}
.image-item:hover {
  filter: brightness(60%);
}
.image-item:last-of-type {
  margin: 0;
}
.image-item > img {
  width: 9rem;
  height: 9rem;
  object-fit: cover;
}
.active {
  filter: brightness(100%);
}
.active:hover {
  filter: brightness(100%);
}
</style>
