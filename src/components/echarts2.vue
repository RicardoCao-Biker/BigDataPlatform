<template>
  <div class="hello">
    <div id="charts" ref="charts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import json from "../wonderland.project.js";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  mounted() {
    var myChart = echarts.init(
      document.getElementById("charts"),
      json.default.theme
    );
    myChart.setOption({
      title: {
        text: "异步数据加载示例2",
        left: "center"
      },
      legend: {
        type: "plain",
        left: "center",
        top: 30,
        data: ["销量", "销量1"]
      },
      grid: {},
      tooltip: {},
      xAxis: {
        type: "category",
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        name: "sadas"
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        },
        {
          name: "销量1",
          type: "bar",
          data: [52, 16, 36, 10, 10, 20]
        }
      ]
    });
  }
};
</script>


<style scoped>
#charts {
  width: 100%;
  height: 400px;
}
</style>