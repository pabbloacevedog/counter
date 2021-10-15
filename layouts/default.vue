<template>
  <div class="grid-container">
    <Header class="header" />
    <main class="main">
      <Nuxt />
    </main>
    <Footer class="footer" />
  </div>
</template>
<script>
export default {
  name: "default",
  data() {
    return {
      filtrar: false,
      name_asc: true,
      value_asc: true,
      filters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
@import url('https://css.gg/import.css');

body {
  font-family: "Raleway", sans-serif;
  min-height: 100%;
  margin: 0;
}
.header {
  grid-area: header;
  background-color: #45289f;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  grid-area: main;
  background-color: #1f1f1f;
}
.footer {
  grid-area: footer;
  background-color: #45289f;
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid-container {
  display: grid;
  min-height: 100vh;
  grid-template-rows: 8vh auto 8vh;
  grid-template-areas:
    "header"
    "main"
    "footer";
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}
</style>