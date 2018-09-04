<template>
  <div id="users">
    <ul>
      <li v-for="lists in list" v-on:click="lists.show = !lists.show">
        <h1>{{lists.name}}</h1>
        <p v-show="lists.show">{{lists.position}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "users",
      props: ["list"],
      data () {
        return {

        }
      }
    }
</script>

<style scoped>
ul{
  width: 1000px;
  height: 400px;
}
li{
  float: left;
  text-align: center;
  width: 200px;
  height: 100px;
  margin: 0 30px 20px 0;
  list-style: none;
  border: 1px solid #000;
}
</style>
