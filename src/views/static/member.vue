<template>
  <div style="margin-top:10px">
    <div style="width: 95%; margin:0 auto">
      <el-form-item
        label="会员编号"
        :label-width="80"
        style="display:inline-flex; margin-right: 10px;"
      >
        <el-input
          v-model="searchId"
          placeholder="请输入会员编号"
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
      :data="members"
      style="width: 95%; margin:0 auto"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="80"
      />
      <el-table-column
        prop="username"
        label="用户名"
        width="120"
      />

      <el-table-column
        prop="nickname"
        label="昵称"
        width="120"
      />

      <el-table-column
        prop="password"
        label="密码"
        width="120"
      />

      <el-table-column
        label="性别"
        width="100"
      >
        <template #default="scope">
          {{ scope.row.gender == 0 ? "男" : "女" }}
        </template>
      </el-table-column>

      <el-table-column
        prop="integration"
        label="积分"
        width="100"
      />

      <el-table-column
        prop="job"
        label="职业"
        width="100"
      />

      <el-table-column
        prop="phone"
        label="手机号"
        width="120"
      />

      <el-table-column
        prop="personalizedSignature"
        label="个性签名"
        width="120"
      />
      <el-table-column
        label="启用状态"
        width="100"
      >
        <template #default="scope">
          {{ scope.row.showStatus == 0 ? "禁用" : "启用" }}
        </template>
      </el-table-column>

      <el-table-column
        label="注册时间"
        width="120"
      >
        <template #default="scope">
          {{ scope.row.createTime != null ? scope.row.createTime.replace("T"," ").slice(0,19) : ""}}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="功能管理"
        width="140"
      >
        <template #default="scope">
          <el-button
            type="warning"
            size="small"
            link
            @click="toEdit(scope.row)"
          >更新</el-button>
          <el-button
            type="danger"
            link
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
    title="会员编辑"
  >
    <el-form :model="member">

      <el-form-item
        label="用户名"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="member.username"
          placeholder="请输入用户名"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="昵称"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="member.nickname"
          placeholder="请输入昵称"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="密码"
        :label-width="formLabelWidth"
      >
        <el-input
          type="password"
          v-model="member.password"
          placeholder="请输入密码"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="会员等级"
        :label-width="formLabelWidth"
      >
        <t-pagination-select
          @page-change="pageChange"
          :optionSource="levels"
          v-model="member.memberLevelId"
          labelKey="name"
          valueKey="id"
          style="width:90%;"
          placeholder="请选择会员等级"
          :paginationOption="selectPage"
        />
      </el-form-item>

      <el-form-item
        label="性别"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="member.showStatus"
          placeholder="请选择性别"
          style="width:80%;"
        >
          <el-option
            label="男"
            :value="0"
          />
          <el-option
            label="女"
            :value="1"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        label="积分"
        :label-width="formLabelWidth"
      >
        <el-input-number
          v-model="member.integration"
          placeholder="请输入积分数量"
          style="width:80%;"
        ></el-input-number>
      </el-form-item>

      <el-form-item
        label="职业"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="member.job"
          placeholder="请输入职业"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="手机号"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="member.phone"
          placeholder="请输入手机号"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="启用状态"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="member.status"
          placeholder="请选择启用状态"
          style="width:80%;"
        >
          <el-option
            label="禁用"
            :value="0"
          />
          <el-option
            label="启用"
            :value="1"
          />
        </el-select>
      </el-form-item>

      <el-form-item
        label="个性签名"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="member.personalizedSignature"
          placeholder="请输入个性签名"
          type="textarea"
          style="width:80%"
          :rows="2"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="注册时间"
        :label-width="formLabelWidth"
      >
        <div class="block">
          <el-date-picker
            v-model="member.createTime"
            type="datetime"
            placeholder="请选择注册时间"
          />
        </div>
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
  getMemberPage,
  getOne,
} from "../../http/member";
import { getLevelPage } from "../../http/level";
import TPaginationSelect from "./module/TPaginationSelect.vue";
import { cloneDeep } from "lodash-es";
export default defineComponent({
  data() {
    return {
      members: [],
      page: {
        total: 0,
        current: 1,
        size: 10,
      },
      selectPage: {
        total: 0,
        current: 1,
        size: 6,
        pagerCount: 5,
      },
      searchId: null,
      dialogFormVisible: false,
      member: {
        birthday: new Date(),
        city: "",
        createTime: new Date(),
        gender: 0,
        id: 0,
        integration: 0,
        job: "",
        nickname: "",
        password: "",
        personalizedSignature: "",
        phone: "",
        status: 1,
        username: "",
      },
      levels: [],
      formLabelWidth: 80,
    };
  },
  mounted() {
    this.getMembersPage(1);
    this.getLevelsPage(1);
  },
  components: {
    "t-pagination-select": TPaginationSelect,
  },
  methods: {
    search() {
      if (this.searchId == null || this.searchId == "") {
        alert("请输入专题编号后查询");
        return;
      }
      getOne(this.searchId)
        .then((res) => {
          if (res.data == null) {
            this.members = [];
          } else {
            this.members = [];
            this.members.push(res.data.help);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    research() {
      this.searchId = null;
      this.getMembersPage(1);
    },
    toEdit(member) {
      this.dialogFormVisible = true;
      this.member = cloneDeep(member);
    },
    getLevelsPage(current) {
      const data = {
        current: current,
        size: 6,
      };
      getLevelPage(data)
        .then((res) => {
          const page = res.data.page;
          this.levels = page.records;
          this.selectPage = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pageChange(current) {
      this.getLevelsPage(current);
    },
    getMembersPage(current) {
      const data = {
        current: current,
        size: 10,
      };
      getMemberPage(data)
        .then((res) => {
          console.log(res);
          const page = res.data.page;
          this.members = page.records;
          this.page = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    currentchange(current) {
      // console.log(current);
      this.getMembersPage(current);
      this.page.current = current; //数据更新到目前显示的页面
    },
    del(id) {
      if (confirm("是否删除") == true) console.log(id);
      console.log(id);
      delOne(id)
        .then((res) => {
          if (res.success) {
            this.getMembersPage(this.page.current);
          } else {
            return false;
          }
        })
        .catch((err) => {});
    },
    toAdd() {
      this.dialogFormVisible = true;
      this.member = {
        birthday: new Date(),
        city: "",
        createTime: new Date(),
        gender: 0,
        id: 0,
        integration: 0,
        job: "",
        nickname: "",
        password: "",
        personalizedSignature: "",
        phone: "",
        status: 1,
        username: "",
      };
    },
    save() {
      const member = this.member;
      if (member.id == 0) {
        addOne(member)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getMembersPage(this.page.current);
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
        updateOne(member)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getMembersPage(this.page.current);
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