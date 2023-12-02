// Your JavaScript code goes here

const chartData = {
  labels: ["positive", "negative", "neutral"],
  data: [333, 17, 10],
};

const myChart = document.querySelector(".my-chart");
const ul = document.querySelector(".programming-stats .details ul");

// Create the doughnut chart
const chart = new Chart(myChart, {
  type: "doughnut",
  afterDraw: chart => {
    var ctx = chart.chart.ctx;
    ctx.save();
    var image = new Image();
    image.src = ''
      imageSize = 1200;
    const { top, left, width, height } = chart.chartArea;
    const x = left + width / 2 - imageSize / 2;
    const y = top + height / 2 - imageSize / 2;
    ctx.drawImage(image, x, y, imageSize, imageSize);
    ctx.restore();
  },
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Language Popularity",
        data: chartData.data,
      },
    ],
  },
  options: {
    borderWidth: 10,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// Position the image
function positionImage(chart) {
  var img = document.getElementById("img"); // Replace with the actual ID of your image element
  // img.style.position = "relative";
  img.style.display = "block";
  img.style.top = chart.height+400 / 2 - img.offsetHeight / 2 + "px";
  img.style.left = chart.width / 2 - img.offsetWidth / 2.3 + "px";
}

// Call the function with the chart instance
positionImage(chart);

// Handle window resize
window.addEventListener("resize", function () {
  positionImage(chart);
});

// Populate the ul with data
const populateUl = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${l}: <span class='percentage'>${chartData.data[i]}%</span>`;
    ul.appendChild(li);
  });
};

populateUl();
