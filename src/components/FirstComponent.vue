<template>

  <div>

    <div class="el-first">
      <h1>
        父组件的值：{{ fromBase }}
      </h1>

      <button @click="testAddClick">子组件点击</button>
    </div>

  </div>

</template>


<script>

  export default {

    // 接收来自父组件的传递值
    props:[ 'fromFather' ],

    data(){

      return {
        outPutMessage:'First Component Message!',
        fromBase:'',
      }

    },

    methods:{

      testAddClick ()
      {
        this.fromBase = this.fromFather

        // 向父组件传递参数
        this.$emit( 'son-click', this.outPutMessage )
      }

    },

    watch:{

    },


  }

</script>


<style>



</style>
