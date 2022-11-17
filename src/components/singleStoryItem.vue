<template>
    <div class="comment-container">
        <h2 class="story-title">{{ item.title }}</h2>
        <p class="score">Votes: {{ item.score }}</p>
        <p class="author-url">{{ item.url }}</p>
        <div v-for="(comment, index) in comments" :key="index">
            <div class="comment-wrap">
                <div class="comment-block">
                    <p class="comment-text">{{ comment.text }}</p>
                    <div class="bottom-comment">
                        <div class="comment-author">{{ comment.by }}</div>
                        <div class="comment-date">{{ comment.time }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'single-story',
  props: {
    item: {
      type: Object,
      required: true
    },
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.comment-container {
    width: 60%;
    margin: 0 auto;
    color: #000;
}

.story-title,
.score,
.author-url {
    padding: 1rem;
}

.story-title {
    text-transform: uppercase;
    font-weight: 900;
}

.author-url {
    font-size: .8rem;
    font-weight: 900;
}

.score {
    font-weight: 900;
}

.comment-wrap {
    margin-bottom: 1.25rem;
    display: table;
    width: 100%;
    min-height: 5.3125rem;
}

.photo {
    padding-top: 0.625rem;
    display: table-cell;
    width: 3.5rem;
}

.photo .avatar {
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 50%;
    background-size: contain;
}

.comment-block {
    padding: 1rem;
    background-color: #fff;
    display: table-cell;
    vertical-align: top;
    border-radius: 0.1875rem;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
}

.comment-block textarea {
    width: 100%;
    resize: none;
}

.comment-text {
    margin-bottom: 1.25rem;
}

.bottom-comment {
    color: #acb4c2;
    font-size: 0.875rem;
}

.comment-date {
    float: left;
}

.comment-actions {
    float: right;
}

.comment-actions li {
    display: inline;
    margin: -2px;
    cursor: pointer;
}

.comment-actions li.complain {
    padding-right: 0.75rem;
    border-right: 1px solid #e1e5eb;
}

.comment-actions li.reply {
    padding-left: 0.75rem;
    padding-right: 0.125rem;
}

.comment-actions li:hover {
    color: #0095ff;
}
</style>
