<template>
    <div>
        <h2>New Posts</h2>
      <item v-for="story in stories" :key="story.data.id" :story="story"/>
    </div>
</template>
<script>
import item from '@/components/item'
import axios from 'axios'
export default {
  name: 'New',
  components:{
    'item': item
  },
  data () {
    return {
      error:'',
      stories:[]
    }

  },  created: function () {
    axios.get('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then((result) => {
        this.results = result.data.slice(0, 10)
        this.results.forEach(element => {
          axios.get('https://hacker-news.firebaseio.com/v0/item/' + element + '.json')
            .then((result) => {
              this.stories.push(result)
            })
            .catch((err) => {
              console.log(err)
            })
        })
      })
      .catch((err) => { this.err = err })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  text-align: center;
  padding-top: 10px;
}
</style>
