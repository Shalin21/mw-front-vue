function initGraphs (object) {
  var speedData = {
    labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    datasets: [
      {
      label: "",
      data: [0, 59, 75, 20, 20, 55, 40],
      backgroundColor: [
        '#03a9f333',

      ],
      borderColor: [
        '#03a9f3',

      ],

    }
  ]
  };

  var ctx = object
  ctx.style.backgroundColor = 'grey';
  var myChart = new Chart(ctx, {
  type: 'line',
  data: speedData,
  chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)'
    },
  options: {
    backgroundColor: 'red',
    scaleStartValue: 0,
    tooltips:{
      intersect: false,
      // backgroundColor: 'rgba(100, 99, 132, 0.8)',
    }
  }
  });
 }
export {initGraphs}


function doSync(object){
  var mid_core = 0;
  var mid_mem = 0;
  var mid_fan = 0;
  var mid_power = 0;

  object.forEach(function (value, key) {
    console.log(value.params.core.max - value.params.core.min);
    mid_core += parseInt(100-((value.params.core.max - value.params.core.cur) * 100) / (value.params.core.max - value.params.core.min));
    mid_mem += parseInt(100-((value.params.memory.max - value.params.memory.cur) * 100) / (value.params.memory.max - value.params.memory.min));
    mid_fan += parseInt(100-((value.params.fan.max - value.params.fan.cur) * 100) / (value.params.fan.max - value.params.fan.min));
    mid_power += parseInt(100-((value.params.power.max - value.params.power.cur) * 100) / (value.params.power.max - value.params.power.min));
  });

  mid_core = (mid_core / object.length);
  mid_mem = mid_mem / object.length;
  mid_fan = mid_fan / object.length;
  mid_power = mid_power / object.length;

  object.forEach(function (value, key) {
    value.params.core.cur = parseInt((value.params.core.min + (mid_core * (value.params.core.max - value.params.core.min))/100));
    value.params.memory.cur = parseInt((value.params.memory.min +(mid_mem * (value.params.memory.max - value.params.memory.min))/100));
    value.params.fan.cur = parseInt((value.params.fan.min +(mid_fan * (value.params.fan.max - value.params.fan.min))/100));
    value.params.power.cur = ((value.params.power.min +(mid_power * (value.params.power.max - value.params.power.min))/100));
  });
}
export {doSync}
