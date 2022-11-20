<template>
  <main>
    <div class="show_card" id="bright">
      <div class="info_section">
        <div class="movie_header">
          <img class="locandina" :src="`${imageURL}`" />
          <h1>{{ title }}</h1>
          <h4>{{ language }}</h4>
          <span class="minutes">{{ runtime }} minutes</span>
          <p class="type">Action, Crime, Fantasy</p>
        </div>
        <div class="movie_desc">
          <div class="text" v-html="summary">
          </div>
        </div>
      </div>
      <div class="blur_back" v-bind:style="{ 'background-image': 'url(' + imageURL + ')' }"></div>
    </div>
  </main>
</template>

<script>

export default {
  name: 'ShowInformation',
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
.link {
  display: block;
  text-align: center;
  color: #777;
  text-decoration: none;
  padding: 10px;
}

img {
  max-width: 100px;
  max-height: 100px;
}

.show_card {
  position: relative;
  display: block;
  width: 800px;
  height: auto;
  margin: 80px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
}

.show_card:hover {
  transform: scale(1.02);
  box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  transition: all 0.4s;
}

.show_card .info_section {
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;
}

.show_card .info_section .movie_header {
  position: relative;
  padding: 25px;
  height: 40%;
}

.show_card .info_section .movie_header h1 {
  color: black;
  font-weight: 400;
}

.show_card .info_section .movie_header h4 {
  color: #555;
  font-weight: 400;
}

.show_card .info_section .movie_header .minutes {
  display: inline-block;
  margin-top: 15px;
  color: #555;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.show_card .info_section .movie_header .type {
  display: inline-block;
  color: #959595;
  margin-left: 10px;
}

.show_card .info_section .movie_header .locandina {
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
}

.show_card .info_section .movie_desc {
  padding: 25px;
  height: 50%;
}

.show_card .info_section .movie_desc .text {
  color: #545454;
}

.show_card .info_section .movie_social {
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
}

.show_card .info_section .movie_social ul {
  list-style: none;
  padding: 0;
}

.show_card .info_section .movie_social ul li {
  display: inline-block;
  color: rgba(0, 0, 0, 0.3);
  transition: color 0.3s;
  transition-delay: 0.15s;
  margin: 0 10px;
}

.show_card .info_section .movie_social ul li:hover {
  transition: color 0.3s;
  color: rgba(0, 0, 0, 0.7);
}

.show_card .info_section .movie_social ul li i {
  font-size: 19px;
  cursor: pointer;
}

.show_card .blur_back {
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-size: cover;
  border-radius: 11px;
}

@media screen and (min-width: 768px) {
  .movie_header {
    width: 65%;
  }

  .movie_desc {
    width: 50%;
  }

  .info_section {
    background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
  }

  .blur_back {
    width: 80%;
    background-position: -100% 10% !important;
  }
}

@media screen and (max-width: 768px) {
  .show_card {
    width: 95%;
    margin: 0 auto;
    min-height: 350px;
    height: auto;
  }

  .blur_back {
    width: 100%;
    background-position: 50% 50% !important;
  }

  .movie_header {
    width: 100%;
    margin-top: 85px;
  }

  .movie_desc {
    width: 100%;
  }

  .info_section {
    background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
    display: inline-grid;
  }
}
</style>
