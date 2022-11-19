<template>
    <div class="container">
        <div class="cellphone-container">
            <div class="movie-img">
                <b-img :src="`${imageURL}`" fluid alt="Responsive image"></b-img>
            </div>
            <div class="text-movie-cont">
                <div class="mr-grid">
                    <div class="col1">
                        <h1> {{ title }}</h1>
                        <ul class="movie-gen">
                            <li>{{ language }}</li>
                            <li>{{ runtime }}</li>
                            <li>Adventure, Drama, Sci-Fi,</li>
                        </ul>
                    </div>
                </div>
                <div class="mr-grid">
                    <div class="col1">
                        <h5>SUMMARY</h5>
                        <div class="movie-description" v-html="summary">
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

export default {
  name: 'MovieBio',
  components: {

  },
  props: {
    title: {
      type: String,
      required: true
    },
    imageURL: {
      type: String,
      required: true

    },
    language: {
      type: String,
      required: true

    },
    runtime: {
      type: Number,
      required: true

    },
    summary: {
      type: String,
      required: true
    }
  },
  filters: {
    trimText (title) {
      return title.length > 300 ? title.substring(0, 300) + '...' : title
    }
  }
}
</script>
<style scoped>
.container {
    width: 610px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
  max-width: 600px;
  max-height: 600px;
}

.cellphone-container {
    width: 408px;
    background-color: #1e1b26;
    margin: 0 auto;
    box-shadow: 5px 5px 115px -14px black;
    border-radius: 4px;
}

.movie-img {
    z-index: 111 !important;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative;
}

.summary-row {
    margin-top: 12px;
}

h1,
h2,
h3,
h4,
h5 {
    font-size: 18px;
    color: white;
    margin: 0px;
}

.col1,
.col2,
.col3,
.col3rest,
.col4,
.col4rest,
.col5,
.col5rest,
.col6,
.col6rest {
    margin: 0% 0.5% 0.5% 0.5%;
    padding: 1%;
    float: left;
    display: block;
}

.movie-gen {
    margin: 0px;
    padding: 0px;
}

.movie-gen li {
    font-size: 12px;
    color: white;
    width: auto;
    display: block;
    float: left;
    margin-right: 6px;
    font-weight: 600;
}

.movie-likes {
    margin: 0px;
    padding: 0px;
    float: right;

}

.movie-likes li {
    list-style: none;
    margin: 0px;
    padding: 0px;
    float: right;
    color: white;
}

.movie-likes li i {
    font-size: 14px;
    margin-right: 4px;
    position: relative;
    float: left;
    line-height: 1;
}

>>> .movie-description > p {
    font-size: 12px;
    color: white;
    text-align: justify;
    line-height: 1.3;
}
</style>
