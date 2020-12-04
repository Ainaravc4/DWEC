google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(politicos);

function politicos() {
    var options = {
        title: 'Votos de los partidos',
        colors:["blue","red","orange","pink","purple","gray"],
        chartArea: {width: '50%'},
        animation:{duration: 1000,easing: "out"},
        vAxis: {minValue:0, maxValue:1000,startup: true,},        
    };

    var dataPoliticos1 = new google.visualization.arrayToDataTable([
           ['Partidos', 'Escaños', { role: "style" }],
           ['PP', 120,"blue"],
           ['PSOE', 89,"red"],
           ['Cs', 10,"orange"],
           ['UP', 35,"pink"],
           ['Vox', 52,"purple"],
           ['Otros', 40, "gray"]
        ]);

    var dataPoliticos2 = new google.visualization.arrayToDataTable([
        ['Partidos', 'Escaños', { role: "style" }],
        ['PP', 20,"blue"],
        ['PSOE', 189,"red"],
        ['Cs', 1,"orange"],
        ['UP', 58,"pink"],
        ['Vox', 99,"purple"],
        ['Otros', 100, "gray"]
        ]);
 
    var chart = new google.visualization.BarChart(document.getElementById('politica'));
        
    window.setInterval(()=>{
        
        chart.draw(dataPoliticos1, options);
    
        window.setTimeout(()=>{
            chart.draw(dataPoliticos2, options);
                
        },3000);
        
    },10000)
    
    
}   