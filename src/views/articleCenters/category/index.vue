<template>
  <div class="app-container">
    分类
    <!-- <div class="search-wrapper">
      <el-input
        v-model="newCategory"
        placeholder="请输入分类名称"
        class="search-input"
        clearable
        @keyup.enter.native="createCategory"
      />
      <el-button type="primary" icon="el-icon-plus" @click="createCategory">新增分类</el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="categoryList"
      tooltip-effect="dark"
      :default-sort="{ prop: 'date', order: 'descending' }"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column ref="test" type="selection" width="55" />
      <el-table-column prop="categoryName" align="center" label="分类名称">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.categoryName"
            class="wcategory"
            :readonly="scope.row.readonly"
            placeholder="请输入内容"
          />
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button v-show="scope.row.readonly" type="primary" icon="el-icon-edit" @click="Edit(scope.$index)">修改</el-button>
          <el-button
            v-show="!scope.row.readonly"
            class="no-margin"
            type="primary"
            icon="el-icon-check"
            @click="comfirm(scope.$index)"
          >
            确认</el-button>
          <el-button
            v-show="!scope.row.readonly"
            class="no-margin"
            type="warning"
            icon="el-icon-close"
            @click="cancle(scope.$index)"
            >取消</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="del(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="del-batch" type="danger" icon="el-icon-delete" @click="delCategoryBatch">批量删除</el-button>
    <div class="pagination-wrapper">
      <el-pagination
        background
        :current-page="page"
        layout="prev, pager, next, jumper"
        :total="sumList"
        @current-change="handlePageChange"
      />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Category",
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss"></style>
