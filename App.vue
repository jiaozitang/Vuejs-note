<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">HelloWorld</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{

  },
  created(){
    this.$axios.post('http://jsonplaceholder.typicode.com/users')
      .then(data =>{
        console.log(data)
      })
  }
  /*beforeCreate: function(){
    alert("beforeCreate:组件实例化之前执行的函数")
  },
  created: function() {
    alert("created:组件实例化完毕，但页面还未显示")
  },
  beforeMount: function(){
    alert("beforeMount:组件挂在前，页面仍未展示，但虚拟dom已经配置")
  },
  mounted: function() {
    alert("mounted:组件挂在后，此方法执行后，页面展示")
  },
  beforeUpdate: function() {
    alert("beforeUpdate:组件更新前，页面仍未更新，但虚拟dom已经配置");
  },
  updated: function() {
    alert("updated:组件更新，此方法执行后，页面展示")
  },
  beforeDestory: function(){
    alert("beforeDestory:组件销毁前")
  },
  destoryed: function() {
    alert("destoryed:组件销毁")
  },*/
  /*getData() {
    var self = this;
    var url = "/api/query/abnormal_login";
    var search_params = new Object();
    self.$http.get(url).then(function (response) {
      response.json().then(function(result) {
        //self.punishQueryData = result.data.length > 0 ? result.data[0] :{};
        console.log(result)
      });
    }).catch(function (response) {
      console.log("服务器异常！");
      console.log(response);
    });
  },*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
