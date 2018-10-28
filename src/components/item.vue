<template>
    <div class="story">
        <span class="score">{{story.data.score}}</span>
        <router-link :to="{ path: '/story/' + story.data.id }">{{story.data.title}} <span>{{story.data.url | host }}</span> </router-link><br>
        <span class="meta">
            by  {{story.data.by}} | {{story.data.time}} Ago | {{story.data.descedants}} comments
        </span>
    </div>
</template>

<script>
export default {
    name: 'item',
    props:[
        'story'
    ]
}
</script>
<style scoped>

</style>
