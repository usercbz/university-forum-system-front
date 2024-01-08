<template>
  <div class="wrapper">
    <div class="header-wrapper">
      <el-page-header @back="goBack" content="发表文章"></el-page-header>
      <el-button size="mini">发布</el-button>
    </div>

    <div class="body-wrapper">
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="text"
        :rows="8"
        resize="none"
        class="textarea"
      >
      </el-input>
      <div class="upload-wrapper">
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
          :file-list="fileList"
          :on-exceed="handleExceed"
          :http-request="uploadFile"
          multiple
          :on-change="fileChange"
          :limit="5"
          ref="uploadImage"
        >
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img class="el-upload-list__item-thumbnail" :src="file.url" />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>

              <span
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" />
        </el-dialog>
      </div>
    </div>

    <div class="floor-wrapper">
      <span class="visible-text">
        <i class="el-icon-view"></i>
        <span>权限设置</span>
      </span>
      <el-select
        v-model="visible"
        placeholder="请选择活动区域"
        class="visible-select"
      >
        <el-option label="所有人可见" value="0"></el-option>
        <el-option label="好友可见" value="1"></el-option>
        <el-option label="仅自己可见" value="2"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",

      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],

      visible: "0",
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    //移出文件
    handleRemove(file) {
      const idx = this.fileList.findIndex((item) => {
        if (item.uid == file.uid) {
          return true;
        }
      });

      this.fileList.splice(idx, 1);
    },
    //查看大图
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //超出文件个数限制
    handleExceed(files, fileList) {
      this.$message.error("只能上传5张图片");
      // console.log(files, fileList);
    },
    //文件上传
    uploadFile(params) {
      console.log(params);
    },

    fileChange(file, fileList) {
      this.$message("文件状态改变");
      this.fileList.push(file);
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 800px;
  margin: 5px auto;
}
.header-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.textarea >>> .el-textarea__inner {
  border: 0;
  padding: 0;
}
.body-wrapper {
  margin-top: 10px;
  padding: 12px 5px;
  border-top: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
}

.floor-wrapper{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 8px 5px;
  border-top: solid 1px #e6e6e6;
  border-bottom: solid 1px #e6e6e6;
}
.visible-text{
  display: flex;
  justify-content: center;
  align-items: center;
}
.visible-text .el-icon-view{
  margin-right: 10px;
}
.el-select{
  width: 128px;
}
.visible-select >>> .el-input__inner {
  border: none;
}
</style>