<template>
  <el-row class="tac">
    <!-- <el-col :span="3">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="/projectCategory" @click="goTo('/projectCategory')">
          <span >商品分类</span>
        </el-menu-item>
        <el-menu-item index="/brand" @click="goTo('/brand')">
          <span >品牌管理</span>
        </el-menu-item>
        <el-menu-item index="/projectAttributeCategory" @click="goTo('/projectAttributeCategory')">
          <span >商品属性分类</span>
        </el-menu-item>
        <el-menu-item index="/projectAttribute" @click="goTo('/projectAttribute')">
          <span >商品属性</span>
        </el-menu-item>
        <el-menu-item index="/project" @click="goTo('/project')">
          <span>商品管理</span>
        </el-menu-item>
      </el-menu>
    </el-col> -->

    <el-col
      :span="3"
      style="background-color: #545c64; height: calc(100vh);"
    >
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <Operation />
            </el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              index="/member"
              @click="goTo('/member')"
            >会员管理</el-menu-item>
            <el-menu-item
              index="/level"
              @click="goTo('/level')"
            >会员等级</el-menu-item>
            <el-menu-item
              index="/loginLog"
              @click="goTo('/loginLog')"
            >会员登录日志</el-menu-item>
            <el-menu-item
              index="/receive"
              @click="goTo('/receive')"
            >会员获取地址</el-menu-item>
            <el-menu-item
              index="/memberTag"
              @click="goTo('/memberTag')"
            >会员标签</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-col>

    <el-col :span="21">
      <router-view></router-view>
    </el-col>

  </el-row>
</template>
<script>
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useUserStore } from "../../store/user";
export default defineComponent({
  setup() {
    //组合api
    const store = useUserStore();
    const { count } = storeToRefs(store);
    console.log(count);
    return {
      count,
    };
  },
  data() {
    return {
      msg: "this is vue app",
      msgHtml: "<h3>this is v-html 指令</h3>",
      home: "home",
      ok: true,
      number1: 1, //数量增加
      data: [],
      obj: {
        name: "rose",
        children: {
          name: "22",
        },
      },
      product: {
        name: "mac book",
        price: 99,
        count: 10,
        total: 0,
      },
    };
  },
  computed: {
    //商品的价格计算
    //简单数字计算
    sum() {
      this.product.total = this.product.price * this.product.count;
      return this.product.total;
    },
  },
  mounted() {
    // this.increate();
    // this.sum();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goTo(path) {
      this.$router.replace(path);
    },
    componentEvent(data) {
      console.log("组件自定义事件", data);
    },
    componentEmitEvent(data) {
      console.log("$emit组件自定义事件", data);
    },
    btnTemple() {
      let str = "home";
      let str1 = `this is vue string temple ${str}`; //字符串模板写法
      console.log(str1);
    },
    // increate() {
    //     this.number1++
    // },
    btnDeep() {
      this.obj.children.age = 23;
    },
    // sum() {
    //     this.product.total = this.product.price * this.product.count;
    // }
  },
  components: {
    //HelloWorld
  },
});
</script>

<style lang="scss" scoped>
.home {
  background-color: $blue;
}

.index {
  background-color: red;
}
* {
  margin: 0;
  padding: 0;
}
</style>
