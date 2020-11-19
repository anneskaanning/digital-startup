<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">CREATE LIST</router-link> |
      <router-link to="/items">FRUITS</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  background-color: lightgoldenrodyellow;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  width: 30%;
  margin: 5px;
  padding: 10px;
  background-color: lightpink;
  border: solid black 0.5px;
  border-radius: 10px;
}

input {
  width: 70%;
  padding: 15px;
  border: solid grey 1px;
  border-radius: 20px;
  margin: 10px;
}

article {
  margin: 30px 0;
}
</style>
