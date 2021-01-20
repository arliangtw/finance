<template>
      <table class="table">
          <thead>
            <tr>
              <td>名稱</td>
              <td>現金</td>
              <td>icash</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in datas" :key="key">
              <td>{{item.name}}</td>
              <td>{{item.cash}}</td>
              <td>{{item.icash}}</td>
            </tr>    
          </tbody>
          <tfoot>
            <tr><td colspan="3">{{message}}</td></tr>
          </tfoot>
      </table>
</template>


<script>
  export default {
    data: function() {  //一定要用function ????
      return {
        datas: [
          {
            name: '小明',
            cash: 100,
            icash: 500
          },
          {
            name: '杰倫',
            cash: 10000,
            icash: 5000
          },
          {
            name: '漂亮阿姨',
            cash: 500,
            icash: 500
          },
          {
            name: '老媽',
            cash: 10000,
            icash: 100
          }
        ]
      }
    },
    props:["message"]
  }
</script>

<style>
    .hello {
        background-color: rgb(238, 238, 255);
    }
</style>