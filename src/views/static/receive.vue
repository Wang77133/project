<template>
  <div style="margin-top:10px">
    <div style="width: 95%; margin:0 auto">
      <el-form-item
        label="地址编号"
        :label-width="80"
        style="display:inline-flex; margin-right: 10px;"
      >
        <el-input
          v-model="searchId"
          placeholder="请输入地址编号"
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
      :data="receives"
      style="width: 95%; margin:0 auto"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="80"
      />
      <el-table-column
        prop="name"
        label="收货人"
        width="120"
      />

      <el-table-column
        prop="memberId"
        label="所属会员编号"
        width="120"
      />

      <el-table-column
        prop="phoneNumber"
        label="手机号"
        width="120"
      />

      <el-table-column
        prop="postCode"
        label="邮政编码"
        width="120"
      />

      <el-table-column
        prop="province"
        label="省份/直辖市"
        width="100"
      />

      <el-table-column
        prop="region"
        label="区"
        width="120"
      />

      <el-table-column
        prop="city"
        label="城市"
        width="100"
      />

      <el-table-column
        prop="detailAddress"
        label="详细地址(街道)"
        width="120"
      />

      <el-table-column
        label="是否为默认"
        width="100"
      >
        <template #default="scope">
          {{ scope.row.defaultStatus == 0 ? "不是" : "是" }}
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
            link
            size="small"
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
    title="地址编辑"
  >
    <el-form :model="receive">

      <el-form-item
        label="收货人"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="receive.name"
          placeholder="请输入收货人"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="所属会员"
        :label-width="formLabelWidth"
      >
        <t-pagination-select
          @page-change="pageChange"
          :optionSource="members"
          v-model="receive.memberId"
          labelKey="username"
          valueKey="id"
          style="width:90%;"
          placeholder="请选择所属会员"
          :paginationOption="selectPage"
        />
      </el-form-item>

      <el-form-item
        label="手机号"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="receive.phoneNumber"
          placeholder="请输入手机号"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="邮政编码"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="receive.postCode"
          placeholder="请输入邮政编码"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="省份"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="receive.province"
          placeholder="请输入省份/直辖市"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="区"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="receive.region"
          placeholder="请输入区"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="城市"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="receive.city"
          placeholder="请输入城市"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="详细地址"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="receive.detailAddress"
          placeholder="请输入详细地址(街道)"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="是否默认"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="receive.defaultStatus"
          placeholder="请选择是否默认"
          style="width:80%;"
        >
          <el-option
            label="不是"
            :value="0"
          />
          <el-option
            label="是"
            :value="1"
          />
        </el-select>
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
  getReceivePage,
  getOne,
} from "../../http/receive";
import { getMemberPage } from "../../http/member";
import TPaginationSelect from "./module/TPaginationSelect.vue";
import { cloneDeep } from "lodash-es";
export default defineComponent({
  data() {
    return {
      receives: [],
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
      receive: {
        city: "",
        defaultStatus: 0,
        detailAddress: "",
        id: 0,
        name: "",
        phoneNumber: "",
        postCode: "",
        province: "",
        region: "",
      },
      members: [],
      formLabelWidth: 80,
    };
  },
  mounted() {
    this.getReceivesPage(1);
    this.getMembersPage(1);
  },
  components: {
    "t-pagination-select": TPaginationSelect,
  },
  methods: {
    search() {
      if (this.searchId == null || this.searchId == "") {
        alert("请输入地址编号后查询");
        return;
      }
      getOne(this.searchId)
        .then((res) => {
          if (res.data == null) {
            this.receives = [];
          } else {
            this.receives = [];
            this.receives.push(res.data.help);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    research() {
      this.searchId = null;
      this.getReceivesPage(1);
    },
    toEdit(receive) {
      this.dialogFormVisible = true;
      this.receive = cloneDeep(receive);
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
    getReceivesPage(current) {
      const data = {
        current: current,
        size: 10,
      };
      getReceivePage(data)
        .then((res) => {
          console.log(res);
          const page = res.data.page;
          this.receives = page.records;
          this.page = page;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    currentchange(current) {
      // console.log(current);
      this.getReceivesPage(current);
      this.page.current = current; //数据更新到目前显示的页面
    },
    del(id) {
      if (confirm("是否删除") == true) console.log(id);
      console.log(id);
      delOne(id)
        .then((res) => {
          if (res.success) {
            this.getReceivesPage(this.page.current);
          } else {
            return false;
          }
        })
        .catch((err) => {});
    },
    toAdd() {
      this.dialogFormVisible = true;
      this.receive = {
        city: "",
        defaultStatus: 0,
        detailAddress: "",
        id: 0,
        name: "",
        phoneNumber: "",
        postCode: "",
        province: "",
        region: "",
      };
    },
    save() {
      const receive = this.receive;
      if (receive.id == 0) {
        addOne(receive)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getReceivesPage(this.page.current);
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
        updateOne(receive)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getReceivesPage(this.page.current);
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