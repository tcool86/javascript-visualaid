<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Editor</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #434365;
  background-color: #f2f4da;
}

#nav {
  text-align: left;
  a {
    padding-left: 2em;
    font-weight: bold;
    text-decoration: none;
    color: #4f3267;

    &.router-link-exact-active {
      color: #5c5a23;
    }
  }
}
</style>
