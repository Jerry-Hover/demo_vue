<template>
  <div>

    <div class="navi-ul">
      <ul>
        <li v-for="val in navibar">
          <router-link :to="{ path:val.link }">{{ val.label }}</router-link>
        </li>
      </ul>
    </div>

    <el-button :plain="true" @click="open2">成功</el-button>

  </div>
</template>


<script>

  name:'导航首页'

  export default {

    data() {
      return {

        navibar:[
          { label:'首页', link:'#' },
          { label:'测试页-1', link:'demo1' },
          { label:'测试页-2', link:'demo2' },
          { label:'测试页-3', link:'demo3' },
        ]

      }
    },

    methods: {
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
    }

  }

</script>


<style>
  .navi-ul ul{
    list-style-type: none;
  }

  .navi-ul li {
    width:auto;
    height:auto;
    margin:5px auto;
  }

</style>

