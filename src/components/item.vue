<template>
  <b-container>
    <div class="story">
      <span class="score">{{story.data.score}}</span>
      <router-link :to="{ path: '/story/' + story.data.id }">{{story.data.title}} <span>{{story.data.url | host }}</span>
      </router-link><br>
      <span class="meta">
        By: {{story.data.by}} | {{story.data.time}} Ago | {{story.data.descendants}} comments
      </span>
    </div>
  </b-container>
</template>

<script>
  export default {
    name: 'item',
    props: [
      'story'
    ]
  }

</script>
<style scoped>
  .score {
    color: #196868;
    font-size: 1.1em;
    width: 80px;
    text-align: center;
    margin-top: -10px;
  }

  a {
    color: rgb(49, 5, 5);
  }

  .story {}

</style>
