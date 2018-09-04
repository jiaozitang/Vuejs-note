<template>
<div id="users">
    <header>hello world</header>
  <p>{{title}}</p>
  </div>
</template>

<script>
    export default {
      name: "users",
      props: ["title"],
      data () {
        return {
          list:[1,2,3,4]
        }
      }
    }
</script>

<style scoped>
header{
  height: 50px;
  background: aquamarine;
}
</style>
