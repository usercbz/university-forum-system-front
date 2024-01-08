<template>
  <div>
    <!-- 创作中心 -->
    <creative-center> </creative-center>
    <!-- 粉丝列表 -->
    <div class="follow-content-wrapper">
      <el-row>
        <el-col :span="12">
          <el-card :body-style="{ padding: '8px' }">
            <div class="card-wrapper">
              <p @click="clickText('follow')">关注了</p>
              <h3>{{ follow }}</h3>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card :body-style="{ padding: '8px' }">
            <div class="card-wrapper">
              <p @click="clickText('fans')">关注者</p>
              <h3>{{ fans }}</h3>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import CreativeCenter from '../CreativeCenter.vue';
export default {
  props: ["follow", "fans"],
  components:{
    CreativeCenter
  },
  data() {
    return {
      imageUrl: require("@/assets/creator_icon.png"),
    };
  },
  methods: {
    clickText(data) {
      this.$emit("clickText", data);
    },
  },
};
</script>

<style scoped>

.follow-content-wrapper {
  margin-top: 8px;
}
.creation-btn {
  width: 260px;
  align-self: center;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.card-wrapper p {
  cursor: pointer;
  color: rgb(104, 101, 101);
}
.card-wrapper p:hover {
  color: #000;
}
</style>