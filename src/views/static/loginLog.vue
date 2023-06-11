<template>
  <div style="margin-top:10px">
    <div style="width: 95%; margin:0 auto">
      <el-form-item
        label="日志编号"
        :label-width="80"
        style="display:inline-flex; margin-right: 10px;"
      >
        <el-input
          v-model="searchId"
          placeholder="请输入日志编号"
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
      :data="loginLogs"
      style="width: 95%; margin:0 auto"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="80"
      />
      <el-table-column
        prop="memberId"
        label="会员编号"
        width="120"
      />

      <el-table-column
        prop="province"
        label="省"
        width="120"
      />

      <el-table-column
        prop="city"
        label="城市"
        width="120"
      />

      <el-table-column
        prop="ip"
        label="IP地址"
        width="120"
      />

      <el-table-column
        prop="userAgent"
        label="用户代理"
        width="120"
      />

      <el-table-column
        label="创建时间"
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
    title="日志编辑"
  >
    <el-form :model="loginLog">

      <el-form-item
        label="所属会员"
        :label-width="formLabelWidth"
      >
        <t-pagination-select
          @page-change="pageChange"
          :optionSource="members"
          v-model="loginLog.memberId"
          labelKey="username"
          valueKey="id"
          style="width:90%;"
          placeholder="请选择所属会员"
          :paginationOption="selectPage"
        />
      </el-form-item>

      <el-form-item
        label="省"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="loginLog.province"
          placeholder="请输入省"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="城市"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="loginLog.city"
          placeholder="请输入城市"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="IP地址"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="loginLog.ip"
          placeholder="IP地址"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="用户类型"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="loginLog.userAgent"
          placeholder="请输入用户类型"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="创建时间"
        :label-width="formLabelWidth"
      >
        <div class="block">
          <el-date-picker
            v-model="loginLog.createTime"
            type="datetime"
            placeholder="请选择创建时间"
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
  getLoginLogPage,
  getOne,
} from "../../http/loginLog";
import { getMemberPage } from "../../http/member";
import TPaginationSelect from "./module/TPaginationSelect.vue";
import { cloneDeep } from "lodash-es";
export default defineComponent({
  data() {
    return {
      loginLogs: [],
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
      loginLog: {
        city: "",
        id: 0,
        ip: "",
        province: "",
        userAgent: "",
        createTime: new Date(),
      },
      members: [],
      formLabelWidth: 80,
    };
  },
  mounted() {
    this.getLoginLogsPage(1);
    this.getMembersPage(1);
  },
  components: {
    "t-pagination-select": TPaginationSelect,
  },
  methods: {
    search() {
      if (this.searchId == null || this.searchId == "") {
        alert("请输入日志编号后查询");
        return;
      }
      getOne(this.searchId)
        .then((res) => {
          if (res.data == null) {
            this.loginLogs = [];
          } else {
            this.loginLogs = [];
            this.loginLogs.push(res.data.help);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    research() {
      this.searchId = null;
      this.getLoginLogsPage(1);
    },
    toEdit(loginLog) {
      this.dialogFormVisible = true;
      this.loginLog = cloneDeep(loginLog);
    },
    getMembersPage(current) {
      const data = {
        current: current,
        size: 6,
      };
      getMemberPage(data)
        .then((res) => {
          const page = res.data.page;
          this.members = page.records;
          this.selectPage = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pageChange(current) {
      this.getMembersPage(current);
    },
    getLoginLogsPage(current) {
      const data = {
        current: current,
        size: 10,
      };
      getLoginLogPage(data)
        .then((res) => {
          console.log(res);
          const page = res.data.page;
          this.loginLogs = page.records;
          this.page = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    currentchange(current) {
      // console.log(current);
      this.getLoginLogsPage(current);
      this.page.current = current; //数据更新到目前显示的页面
    },
    del(id) {
      if (confirm("是否删除") == true) console.log(id);
      console.log(id);
      delOne(id)
        .then((res) => {
          if (res.success) {
            this.getLoginLogsPage(this.page.current);
          } else {
            return false;
          }
        })
        .catch((err) => {});
    },
    toAdd() {
      this.dialogFormVisible = true;
      this.loginLog = {
        city: "",
        id: 0,
        ip: "",
        province: "",
        userAgent: "",
        createTime: new Date(),
      };
    },
    save() {
      const loginLog = this.loginLog;
      if (loginLog.id == 0) {
        addOne(loginLog)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getLoginLogsPage(this.page.current);
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
        updateOne(loginLog)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getLoginLogsPage(this.page.current);
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