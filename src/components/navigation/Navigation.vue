<template>
    <div>
      <vs-navbar class="nabarx">
        <div slot="title">
          <vs-navbar-title>
            Pathe
          </vs-navbar-title>
        </div>
        <vs-navbar-item index="0">
          <a href="#">Pathe Home</a>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <a href="#">Pathe Business</a>
        </vs-navbar-item>
        <vs-navbar-item index="2">
          <a href="#">Customer Service</a>
        </vs-navbar-item>
      </vs-navbar>
    </div>
  </template>
<script>
export default {
  name: 'Navigation',
  data () {
    return {
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
