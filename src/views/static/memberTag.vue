<template>
  <div style="margin-top:10px">
    <div style="width: 95%; margin:0 auto">
      <el-form-item
        label="标签编号"
        :label-width="80"
        style="display:inline-flex; margin-right: 10px;"
      >
        <el-input
          v-model="searchId"
          placeholder="请输入标签编号"
        ></el-input>
      </el-form-item>
      <el-button
        type="primary"
        @click="search"
      >查询</el-button>
      <el-button
        type="info"
        @click="research"
      >重置</el-button>
      <el-button
        type="success"
        @click="toAdd"
      >添加
      </el-button>
    </div>
    <el-table
      :data="memberTags"
      style="width: 95%; margin:0 auto"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="100"
      />
      <el-table-column
        prop="name"
        label="标签名称"
        width="200"
      />

      <el-table-column
        prop="finishOrderCount"
        label="自动打标签完成订单数量"
        width="200"
      />

      <el-table-column
        prop="finishOrderAmount"
        label="自动打标签完成订单金额"
        width="200"
      />

      <el-table-column
        fixed="right"
        label="功能管理"
        width="140"
      >
        <template #default="scope">
          <el-button
            type="warning"
            size="small"
            @click="toEdit(scope.row)"
          >更新</el-button>
          <el-button
            type="danger"
            size="small"
            @click="del(scope.row.id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :page-size="page.size"
      :total="page.total"
      style="width: 95%; margin:0 auto"
      @current-change="currentchange"
    />
  </div>
  <el-dialog
    v-model="dialogFormVisible"
    title="标签编辑"
  >
    <el-form :model="memberTag">

      <el-form-item
        label="标签名称"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="memberTag.name"
          placeholder="请输入标签名称"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="订单数量"
        :label-width="formLabelWidth"
      >
        <el-input-number
          v-model="memberTag.finishOrderCount"
          placeholder="请输入订单数量"
          style="width:80%;"
        ></el-input-number>
      </el-form-item>

      <el-form-item
        label="订单金额"
        :label-width="formLabelWidth"
      >
        <el-input-number
          v-model="memberTag.finishOrderAmount"
          placeholder="请输入订单金额"
          style="width:80%;"
        ></el-input-number>
      </el-form-item>

    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="save"
        >保存
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
  <script>
import { defineComponent } from "vue";
import {
  updateOne,
  addOne,
  delOne,
  getMemberTagPage,
  getOne,
} from "../../http/memberTag";
import { cloneDeep } from "lodash-es";
export default defineComponent({
  data() {
    return {
      memberTags: [],
      page: {
        total: 0,
        current: 1,
        size: 10,
      },
      searchId: null,
      dialogFormVisible: false,
      memberTag: {
        finishOrderAmount: 0,
        finishOrderCount: 0,
        id: 0,
        name: "",
      },
      formLabelWidth: 80,
    };
  },
  mounted() {
    this.getMemberTagsPage(1);
  },
  methods: {
    search() {
      if (this.searchId == null || this.searchId == "") {
        alert("请输入标签编号后查询");
        return;
      }
      getOne(this.searchId)
        .then((res) => {
          if (res.data == null) {
            this.memberTags = [];
          } else {
            this.memberTags = [];
            this.memberTags.push(res.data.help);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    research() {
      this.searchId = null;
      this.getMemberTagsPage(1);
    },
    toEdit(memberTag) {
      this.dialogFormVisible = true;
      this.memberTag = cloneDeep(memberTag);
    },
    getMemberTagsPage(current) {
      const data = {
        current: current,
        size: 10,
      };
      getMemberTagPage(data)
        .then((res) => {
          console.log(res);
          const page = res.data.page;
          this.memberTags = page.records;
          this.page = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    currentchange(current) {
      // console.log(current);
      this.getMemberTagsPage(current);
      this.page.current = current; //数据更新到目前显示的页面
    },
    del(id) {
      if (confirm("是否删除") == true) console.log(id);
      console.log(id);
      delOne(id)
        .then((res) => {
          if (res.success) {
            this.getMemberTagsPage(this.page.current);
          } else {
            return false;
          }
        })
        .catch((err) => {});
    },
    toAdd() {
      this.dialogFormVisible = true;
      this.memberTag = {
        finishOrderAmount: 0,
        finishOrderCount: 0,
        id: 0,
        name: "",
      };
    },
    save() {
      const memberTag = this.memberTag;
      if (memberTag.id == 0) {
        addOne(memberTag)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getMemberTagsPage(this.page.current);
              ElMessage(res.msg);
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("网络错误联系管理员");
          });
      } else {
        updateOne(memberTag)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getMemberTagsPage(this.page.current);
              ElMessage(res.msg);
            } else {
              ElMessage(res.msg);
              return false;
            }
          })
          .catch((err) => {
            ElMessage("网络错误联系管理员");
          });
      }
    },
  },
});
</script>
      <style scoped>
.el-col-12 {
  width: 15%;
}
</style>