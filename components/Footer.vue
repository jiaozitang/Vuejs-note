<template>
<div id="users">
    <footer>
      <button  v-on:click="changet">changeTitle</button>
      footer<p>{{title}}</p>
    </footer>

  </div>
</template>

<script>
    export default {
      name: "users",
      props: ["title"],
      data () {
        return {
          list:[1,2,3,4],
          title1: 'changed title'
        }
      },
      methods:{
        changet: function () {
          // this.$emit('getdata',this.title1);
        }
      }
    }
</script>

<style scoped>
footer{
  height: 30px;
  background: #222;
}
</style>
