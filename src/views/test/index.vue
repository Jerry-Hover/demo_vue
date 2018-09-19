<template>
  <div>

    <ul class="navi-ul">
      <li v-for="val in navibar">
        <router-link :to="{ path:val.link }">{{ val.label }}</router-link>
      </li>
    </ul>

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
    }

  }

</script>


<style>
  .navi-ul {
    list-style-type: none;
  }

  .navi-ul li {
    width:auto;
    height:auto;
    margin:5px auto;
  }
</style>

