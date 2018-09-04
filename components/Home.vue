<template>
  <div id="Home" :style="{fontSize:postFontSize +'em'}">
      Home
    <!--<News v-for="(article_lists) in article_list"
          :news="article_lists"
          v-on:enlarge-text="postFontSize +=$event"
          :key="article_lists.id"
    ></News>-->
    <v-model :val="val" @input="val = $event"></v-model>
    <!--<p>{{val}}</p>-->
  </div>
</template>

<script>
import News from "./News"
import vModel from "./vModel"
  export default {
    name: 'Home',
    components:{News,vModel},
    data(){
      return{
        val:"123",
        postFontSize:1,
        article_list:[
          {
            id:1,
            title:"a",
            content:"a_content"
          },
          {
            id:2,
            title:"a",
            content:"a_content"
          },
          {
            id:3,
            title:"a",
            content:"a_content"
          }
        ],
      }
    },
    methods:{
    }
  }
</script>

<style>
  #Home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
