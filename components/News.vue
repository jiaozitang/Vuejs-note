<template>
<div id="news">
  <div>
    <h6>title:{{news.title}}</h6>
    <p>content:{{news.content}}</p>
  </div>
  <button @click="$emit('enlarge-text',0.2)">changeFontSize</button>
</div>
</template>

<script>
    export default {
        name: "news",
        props:["news"],
    }
</script>

<style scoped>

</style>
