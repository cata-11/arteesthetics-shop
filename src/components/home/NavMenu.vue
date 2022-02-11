<template>
  <nav @mouseleave="hideEffect">
    <ul>
      <li
        v-for="item in menu"
        :key="item.pos"
        @mouseover="followEffect(item.color, item.pos)"
      >
        <a :href="item.link">
          <img :src="item.img" :alt="item.img" />
        </a>
      </li>
    </ul>
    <span class="mouse-effect"></span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      listPos: [],
      menu: [
        {
          pos: 0,
          color: 'violet',
          img: 'house.svg',
          link: '#'
        },
        {
          pos: 1,
          color: 'pink',
          img: 'shop.svg',
          link: '#'
        },
        {
          pos: 2,
          color: 'red',
          img: 'custom.svg',
          link: '#'
        },
        {
          pos: 3,
          color: 'violet',
          img: 'account.svg',
          link: '#'
        },
        {
          pos: 4,
          color: 'red',
          img: 'cart.svg',
          link: '#'
        }
      ]
    };
  },
  methods: {
    followEffect(color, pos) {
      const mouseEffect = document.querySelector('.mouse-effect');
      mouseEffect.style.opacity = '1';
      mouseEffect.style.backgroundColor = `var(--${color})`;
      mouseEffect.style.left = this.listPos[pos] + 'px';
    },
    hideEffect() {
      const mouseEffect = document.querySelector('.mouse-effect');
      mouseEffect.style.opacity = '0';
    },
    getListElPositions() {
      const ul = document.querySelector('ul').children;
      const list = [...ul];
      list.forEach((li) => {
        this.listPos.push(li.offsetLeft + 8);
      });
    }
  },
  mounted() {
    this.getListElPositions();
  }
};
</script>

<style scoped>
nav {
  /* border: 1px solid white; */
  margin: 1rem;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--white);
  position: relative;
}
.mouse-effect {
  width: 12rem;
  height: 6rem;
  position: absolute;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}
li {
  margin: 0;
  padding: 0 4rem;
  list-style: none;
  border-right: 2px solid var(--white);
  position: relative;
  z-index: 2;
}
li:last-of-type {
  border: none;
}
a {
  text-decoration: none;
  color: var(--white);
  transition: all linear 0.2s;
}
div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
img {
  filter: invert(100%);
  width: 5rem;
  height: 5rem;
}
</style>
