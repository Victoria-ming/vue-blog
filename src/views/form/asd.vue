<template>
  <el-dialog :title="headerTitle" :visible.sync="dialogVisible" :before-close="beforeClose">
    <el-form
      ref="addForm"
      :model="addForm"
      :rules="formRules"
      label-position="right"
      label-width="130px"
      style="margin: 0px 50px"
    >
      <el-form-item label="公司名称" prop="companyName">
        <el-input v-model.trim="addForm.companyName" placeholder="请输入公司名称" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="beforeClose"> 取消 </el-button>
      <el-button type="primary" :loading="loading" @click="submitClick"> 确定 </el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "Asd",
  components: {},
  props: {},
  data() {
    return {
      headerTitle: "新增",
      dialogVisible: false,
      loading: false,
      addForm: {
        companyName: "",
      },
      formRules: {
        companyName: [{ required: true, message: "请输入公司名称", trigger: "blur" }],
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    open(type, data) {
      this.dialogVisible = true
    },
    beforeClose() {
      this.confirm("退出后已输入数据无法保存, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.closeDialog()
        })
        .catch(() => {})
    },
    closeDialog() {
      this.dialogVisible = false
      this.refs.addForm.resetFields()
    },
    submitClick() {
      this.refs.addForm.validate((valid) => {
        if (valid) {
          console.log(11)
          this.dialogVisible = false
        }
      })
    },
  },
}
</script>
<style scoped lang="scss"></style>
