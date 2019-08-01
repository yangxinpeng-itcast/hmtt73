<template>
  <el-container class="listContainer">
    <el-aside :width="isout?'200px':'64px'" class="list">
      <div class="listImg">
        <img src="../../assets/images/logo_admin.png" v-if="isout">
        <img src="../../assets/images/logo_admin_01.png" v-if="!isout">
      </div>
      <el-menu
        default-active="/"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse='!isout'
        :collapse-transition='false'
        style="border-right:none"
        :router="true"
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-menu"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-document"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-setting"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-setting"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-setting"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span class="el-icon-s-fold" @click="tab()"></span>
        <span>江苏传智播客教育科技有限公司</span>
        <div class="right">
          <img src="../../assets/images/avatar.jpg" />
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="img">
        <img src="../../assets/images/welcome.jpg" alt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isout: true
    };
  },
  methods: {
    tab() {
      this.isout = !this.isout;
    }
  }
};
</script>

<style scoped lang="less">
.listContainer {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .list {
    background: #002033;
    width: 200px;
    .listImg {
      box-sizing: border-box;
      height: 64px;
      background-color:#002840;
      text-align: center;
      padding-top: 10px;
    }
  }
  .el-header {
    line-height: 60px;
    .right {
      float: right;
      line-height: 60px;
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
    .el-icon-s-fold {
      font-size: 26px;
      vertical-align: middle;
    }
  }
  .img {
    position: relative;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
