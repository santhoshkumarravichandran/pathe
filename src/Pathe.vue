<template>
  <div id="pathe">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'pathe'
}
</script>

<style>
#pathe {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,
    html {
      padding: 0;
      margin: 0;
      background: #f3f3f3;
      font-size: 16px;
      word-spacing: 1px;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: white;
    }
    h1,
    h2,
    h3,
    h4 {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      font-weight: 700;
    }
    p,
    li {
      font-family: 'Barlow', sans-serif;
    }
    #nav{
      background-color: teal;
      height: 40px;
    }
    #nav a {
      text-decoration: none;
      color: #ffffff;
      margin: .7rem;
      margin-top: .8rem;
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
      margin: 0;
    }

    .container {
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }
</style>
