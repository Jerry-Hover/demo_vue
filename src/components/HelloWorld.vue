<template>

    <div>

      <p v-html="message"></p>
      <input v-model="message" @keyup.enter="addNewLabel">
      <button @click="test">测试按钮</button>

      <ul class="test-ul">
        <li v-for="( item,key ) in testArr" v-bind:class="{ showClass: item.flag }" @click="testClick( key,item.flag )" >
          {{ item.label }}
        </li>
      </ul>

      <div class="el-first">
        <h1>子组件传递的值：{{ sonValue }}</h1>
        <!--<first-component fromFather="component value" v-on:son-click="getSonValue"></first-component>-->
        <first-component :fromFather="message" v-on:son-click="getSonValue"></first-component>
      </div>


    </div>
</template>

<script>

  // 导入文件
  import testStorage from '@/Common/LocalStorage/testLocalStorage'

  // 导入组件
  import firstComponent from '@/components/FirstComponent'


export default {

  name:'test2',

    // 注册组件
  components:{ firstComponent },

  // 页面构造加载
  created(){

  },

  // TODO...
  mounted()
  {

  },


  // 数据
  data () {

    return {

      message: '',

      // 获取 local storage 的值
      testArr:testStorage.getTestVueLocalStorage(),

      sonValue:'',
      secondValue:''
    }

  },


  // 方法实现
  methods:{
    // 测试方法
    test ()
    {
      alert( this.message )
    },

    testClick( key, flag )
    {
      this.testArr[ key ].flag = ! flag
    },

    addNewLabel()
    {
      if ( this.message != '' )
      {
        this.testArr.push({
          label:this.message,
          flag:false,
        })

        this.message = ''
      }

    },

    getSonValue( msg )
    {
      this.sonValue = msg
    },


  },

  // 监听数值
  watch:{
    message( val, before )
    {
//      console.log( val )
//      console.log( before )
    },

    testArr:
    {
      handler: function( argument )
      {
        testStorage.setTestVueLocalStorage( argument )
      },

      // 保持更新[ local storage ]
      deep:true
    }
  }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .showClass
  {
    font-size: 30px;
  }

  .test-ul
  {
    list-style-type: none;
    border:1px solid green;
  }

  .test-ul li
  {
    width: auto;
    height: auto;
    display: inline-block;
    margin: 0 10px;
  }

  .el-first{
    width:auto;
    height:auto;
    border:1px solid #08acee;
    margin:5px auto;
  }

  .el-second{
    width:auto;
    height:auto;
    border:1px solid maroon;
    margin:5px auto;
  }

</style>
