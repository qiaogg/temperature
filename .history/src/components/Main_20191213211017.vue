<template>
  <div >
    <el-container id="Main">
      <el-header>
        <h1>阳光长跑工时管理系统</h1>
      </el-header>
      <el-container>
        <el-main>
        </el-main>
      </el-container>
      <el-footer>
        <h5> 阳光长跑后台管理 1.0.0</h5>
      </el-footer>
    </el-container>

  </div>
</template>
<script>
export default {
  data(){
    return{
      lead:0,
    }
  }
}
</script>
<style lang="scss" scoped>
#Main{
  height: 100vh;
   width: 200vh;
.el-main{
  background-color: rgb(221, 227, 233);
}
.el-header{
  h1{
color: #606266

  }
  background-color: #EBEEF5;
}
.el-footer {
  h5{
    color: #409EFF;
  }
        background: rgb(221, 227, 233);
        h1 {
            float:left;
            padding:10px;
            padding-top:40px;
            color:rgb(107, 185, 216);
            font-size: 15px;
            text-align: left;
            margin-left: 20px;
            margin-top: 0px;
        }
        h2 {
            float:right;
            padding-right:65px;
            padding-top:40px;
            font-size: 15px;
            text-align: left;
            margin-left: 20px;
            margin-top: 0px;
            color: #B0B0B0;
        }
    }
}
</style>