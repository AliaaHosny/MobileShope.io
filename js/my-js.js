  window.onload = function () {
    var chart1 = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "Manfacture year vs mobile"    
      },
      animationEnabled: true,
      axisY: {
        title: "Reserves(MMbbl)"
      },
      legend: {
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      theme: "theme2",
      data: [

      {        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "MMbbl = one million barrels",
        dataPoints: [      
        {y: 297571, label: "Samsung"},
        {y: 267017,  label: "Nokia" },
        {y: 175200,  label: "IPhone"},
        {y: 154580,  label: "LG"},
        {y: 116000,  label: "Sony"},
        {y: 97800, label: "ZTE"},
        {y: 20682,  label: "Other 2012"},        
        {y: 20350,  label: "Other 2013"}        
        ]
      }   
      ]
    });

    chart1.render();
  }


/*Pie chart*/
var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");
var lastend = 0;
var data = [200, 60, 15]; // If you add more data values make sure you add more colors
var myTotal = 0; // Automatically calculated so don't touch
var myColor = ['#4753c4','#c4475b',  'orange']; // Colors of each slice

for (var e = 0; e < data.length; e++) {
  myTotal += data[e];
}

for (var i = 0; i < data.length; i++) {
  ctx.fillStyle = myColor[i];
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  // Arc Parameters: x, y, radius, startingAngle (radians), endingAngle (radians), antiClockwise (boolean)
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, lastend, lastend + (Math.PI * 2 * (data[i] / myTotal)), false);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.fill();
  lastend += Math.PI * 2 * (data[i] / myTotal);
}