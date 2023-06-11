<template>
  <div style="margin-top:10px">
    <div style="width: 95%; margin:0 auto">
      <el-form-item
        label="等级编号"
        :label-width="80"
        style="display:inline-flex; margin-right: 10px;"
      >
        <el-input
          v-model="searchId"
          placeholder="请输入等级编号"
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
        prop="name"
        label="名称"
        width="120"
      />

      <el-table-column
        prop="commentGrowthPoint"
        label="获取成长值"
        width="120"
      />

      <el-table-column
        prop="freeFreightPoint"
        label="免运费标准"
        width="120"
      />

      <el-table-column
        label="默认等级"
        width="100"
      >
        <template #default="scope">
          {{ scope.row.defaultStatus == 0 ? "不是" : "是" }}
        </template>
      </el-table-column>

      <el-table-column
        label="生日特权"
        width="100"
      >
        <template #default="scope">
          {{ scope.row.priviledgeBirthday == 0 ? "不是" : "是" }}
        </template>
      </el-table-column>
      <el-table-column
        label="奖励特权"
        width="100"
      >
        <template #default="scope">
          {{ scope.row.priviledgeComment == 0 ? "不是" : "是" }}
        </template>
      </el-table-column>

      <el-table-column
        label="免邮特权"
        width="100"
      >
        <template #default="scope">
          {{ scope.row.priviledgeFreeFreight == 0 ? "不是" : "是" }}
        </template>
      </el-table-column>

      <el-table-column
        label="会员价格"
        width="100"
      >
        <template #default="scope">
          {{ scope.row.会员价格特权 == 0 ? "不是" : "是" }}
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
    title="等级编辑"
  >
    <el-form :model="member">

      <el-form-item
        label="名称"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="member.name"
          placeholder="请输入名称"
          style="width:80%;"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="成长值"
        :label-width="formLabelWidth"
      >
        <el-input-number
          v-model="member.commentGrowthPoint"
          placeholder="请输入获取的成长值"
          style="width:80%;"
        ></el-input-number>
      </el-form-item>

      <el-form-item
        label="运费标准"
        :label-width="formLabelWidth"
      >
        <el-input-number
          v-model="member.freeFreightPoint"
          placeholder="请输入运费标准"
          style="width:80%;"
        ></el-input-number>
      </el-form-item>

      <el-form-item
        label="默认等级"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="member.defaultStatus"
          placeholder="请选择默认等级"
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

      <el-form-item
        label="生日特权"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="member.priviledgeBirthday"
          placeholder="请选择生日特权"
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

      <el-form-item
        label="奖励特权"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="member.priviledgeComment"
          placeholder="请选择奖励特权"
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

      <el-form-item
        label="免邮特权"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="member.priviledgeFreeFreight"
          placeholder="请选择免邮特权"
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

      <el-form-item
        label="会员价格"
        :label-width="formLabelWidth"
      >
        <el-select
          v-model="member.priviledgeMemberPrice"
          placeholder="请选择会员价格"
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
  getLevelPage,
  getOne,
} from "../../http/level";
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
      searchId: null,
      dialogFormVisible: false,
      member: {
        defaultStatus: 0,
        freeFreightPoint: 0,
        id: 0,
        name: "",
        priviledgeBirthday: 0,
        priviledgeComment: 0,
        priviledgeFreeFreight: 0,
        priviledgeMemberPrice: 0,
        priviledgePromotion: 0,
        priviledgeSignIn: 0,
      },
      formLabelWidth: 80,
    };
  },
  mounted() {
    this.getLevelsPage(1);
  },
  methods: {
    search() {
      if (this.searchId == null || this.searchId == "") {
        alert("请输入等级编号后查询");
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
      this.getLevelsPage(1);
    },
    toEdit(member) {
      this.dialogFormVisible = true;
      this.member = cloneDeep(member);
    },
    getLevelsPage(current) {
      const data = {
        current: current,
        size: 10,
      };
      getLevelPage(data)
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
      this.getLevelsPage(current);
      this.page.current = current; //数据更新到目前显示的页面
    },
    del(id) {
      if (confirm("是否删除") == true) console.log(id);
      console.log(id);
      delOne(id)
        .then((res) => {
          if (res.success) {
            this.getLevelsPage(this.page.current);
          } else {
            return false;
          }
        })
        .catch((err) => {});
    },
    toAdd() {
      this.dialogFormVisible = true;
      this.member = {
        defaultStatus: 0,
        freeFreightPoint: 0,
        id: 0,
        name: "",
        priviledgeBirthday: 0,
        priviledgeComment: 0,
        priviledgeFreeFreight: 0,
        priviledgeMemberPrice: 0,
        priviledgePromotion: 0,
        priviledgeSignIn: 0,
      };
    },
    save() {
      const member = this.member;
      if (member.id == 0) {
        addOne(member)
          .then((res) => {
            if (res.success) {
              this.dialogFormVisible = false;
              this.getLevelsPage(this.page.current);
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
              this.getLevelsPage(this.page.current);
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