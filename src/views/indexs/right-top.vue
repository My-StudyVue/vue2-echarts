<template>
  <ul
    class="user_Overview flex"
    v-if="pageflag"
  >
    <li
      class="user_Overview-item"
      style="color: #00fdfa"
    >
      <div class="user_Overview_nums allnum ">
        <dv-digital-flop
          :config="config"
          style="width:100%;height:100%;"
        />
      </div>
      <p>12000以上</p>
      <p class="rate">占比 {{rate(userOverview['totalNum'])}}</p>
    </li>
    <li
      class="user_Overview-item"
      style="color: #07f7a8"
    >
      <div class="user_Overview_nums online">
        <dv-digital-flop
          :config="onlineconfig"
          style="width:100%;height:100%;"
        />
      </div>
      <p>8000-12000</p>
      <p class="rate">占比 {{rate(userOverview['onlineNum'])}}</p>
    </li>
    <li
      class="user_Overview-item"
      style="color: #e3b337"
    >
      <div class="user_Overview_nums offline">
        <dv-digital-flop
          :config="offlineconfig"
          style="width:100%;height:100%;"
        />

      </div>
      <p>5000-8000</p>
      <p class="rate">占比 {{rate(userOverview['offlineNum'])}}</p>
    </li>
    <li
      class="user_Overview-item"
      style="color: #f5023d"
    >
      <div class="user_Overview_nums laramnum">
        <dv-digital-flop
          :config="laramnumconfig"
          style="width:100%;height:100%;"
        />
      </div>
      <p>5000以下</p>
      <p class="rate">占比 {{rate(userOverview['alarmNum'])}}</p>
    </li>
  </ul>
  <Reacquire
    v-else
    @onclick="getData"
    line-height="200px"
  >
    重新获取
  </Reacquire>
</template>

<script>
import { currentGET } from 'api/modules'
let style = {
  fontSize: 24
}
export default {
  data() {
    return {
      options: {},
      userOverview: {
        alarmNum: 0,
        offlineNum: 0,
        onlineNum: 0,
        totalNum: 0,
      },
      pageflag: true,
      config: {
        number: [100],
        content: '{nt}',
        style: {
          ...style,
          // stroke: "#00fdfa",
          fill: "#00fdfa",
        },
      },
      onlineconfig: {
        number: [0],
        content: '{nt}',
        style: {
          ...style,
          // stroke: "#07f7a8",
          fill: "#07f7a8",
        },
      },
      offlineconfig: {
        number: [0],
        content: '{nt}',
        style: {
          ...style,
          // stroke: "#e3b337",
          fill: "#e3b337",
        },
      },
      laramnumconfig: {
        number: [0],
        content: '{nt}',
        style: {
          ...style,
          // stroke: "#f5023d",
          fill: "#f5023d",
        },
      }

    };
  },
  filters: {
    numsFilter(msg) {
      return msg || 0;
    },
  },
  created() {
    this.getData()
  },
  computed: {
    rate() {
      return (value) => {
        if (eval(Object.values(this.userOverview).join('+')) != 0) {
          return (value / eval(Object.values(this.userOverview).join('+')) * 100).toFixed(2) + '%'
        }
      }
    },
  },
  mounted() {
  },
  beforeDestroy() {

  },
  methods: {
    getData() {
      this.pageflag = true;
      currentGET("big2").then((res) => {
        if (res.success) {
          console.log("毕业生薪酬分布情况", res);
          this.userOverview = res.data;
          this.onlineconfig = {
            ...this.onlineconfig,
            number: [res.data.onlineNum]
          }
          this.config = {
            ...this.config,
            number: [res.data.totalNum]
          }
          this.offlineconfig = {
            ...this.offlineconfig,
            number: [res.data.offlineNum]
          }
          this.laramnumconfig = {
            ...this.laramnumconfig,
            number: [res.data.alarmNum]
          }
        } else {
          this.pageflag = false;
          this.$Message.warning(res.msg);
        }
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.user_Overview {
  li {
    flex: 1;

    p {
      text-align: center;
      height: 16px;
      font-size: 16px;
    }

    .rate {
      font-size: 14px;
      margin-top: 10px;
    }

    .user_Overview_nums {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      font-size: 22px;
      margin: 50px auto 30px;
      background-size: cover;
      background-position: center center;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      &.bgdonghua::before {
        animation: rotating 14s linear infinite;
      }
    }

    .allnum {
      // background-image: url("../../assets/img/left_top_lan.png");
      &::before {
        background-image: url("../../assets/img/left_top_lan.png");
      }
    }

    .online {
      &::before {
        background-image: url("../../assets/img/left_top_lv.png");
      }
    }

    .offline {
      &::before {
        background-image: url("../../assets/img/left_top_huang.png");
      }
    }

    .laramnum {
      &::before {
        background-image: url("../../assets/img/left_top_hong.png");
      }
    }
  }
}
</style>