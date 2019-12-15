<template>
  <div >
    <el-container id="Main">
      <el-header>
        <h1>阳光长跑工时管理系统</h1>
      </el-header>
      <el-container>
        <el-aside style="width:200px" class="tac">
          <el-menu router :default-active="$route.path">
             <h2>活动报名</h2>
            <el-menu-item index="/sign">
                <i class="el-icon-edit"></i>
                <span slot="title">义工报名</span>
            </el-menu-item>
            <el-menu-item index="/test2" :disabled='lead'>
                <i class="el-icon-setting"></i>
                <span slot="title">报名统计</span>
             </el-menu-item>
             <el-menu-item index="/test2" :disabled='lead'>
                <i class="el-icon-setting"></i>
                <span slot="title">报名发布</span>
             </el-menu-item>
             <h2>工时统计</h2>
             <el-menu-item index="/table">
                <i class="el-icon-document"></i>
                <span slot="title">每日工时</span>
            </el-menu-item>
            <el-menu-item index="/test">
                <i class="el-icon-setting"></i>
                <span slot="title">组长工时</span>
             </el-menu-item>
             <el-menu-item index="/table3">
                <i class="el-icon-document"></i>
                <span slot="title">奖励工时</span>
            </el-menu-item>
           <el-menu-item index="/table3">
                <i class="el-icon-document"></i>
                <span slot="title">工时总结</span>
            </el-menu-item>
              <h2>违规处理</h2>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">违规统计</span>
             </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">违规判断</span>
             </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">违规处理</span>
             </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
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
.el-aside{
  background-color: #E4E7ED;
  h2 {
            font-size: 15px;
            text-align: left;
            margin-left: 20px;
            margin-top: 0px;
            padding-top: 20px;
            padding-bottom: 10px;
            color: #B0B0B0;
        }
}
.el-footer {
  h5{
    color: #409EFF;
  }
        margin-left:199px;  
        width:1310px;
        background: rgb(221, 227, 233);
        padding-bottom:20px;
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