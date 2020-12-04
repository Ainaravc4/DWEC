/*Crea una página en la que representarás 2 gráficas diferentes haciendo uso
 de Google Charts sobre los siguientes conjuntos de datos:

a) Representación en el Congreso de los Diputados por partidos en 
las últimas elecciones generales. Estos datos los deberás representar
 mediante un gráfico de barras y mediante uno de sectores (PieChart).*/

 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(politicos);

 function politicos() {
   
     var dataPoliticos1 = new google.visualization.DataTable();
     dataPoliticos1.addColumn('string', 'Partidos');
     dataPoliticos1.addColumn('number', 'Escaños');
     dataPoliticos1.addRows([
     ['PP', 120,],
     ['PSOE', 89],
     ['Cs', 10],
     ['UP', 35],
     ['Vox', 52],
     ['Otros', 40]
     ]);
     
     var options = {
                'title':'Votos de los partidos',
                'width':400,
                'height':400};
 
     var chart = new google.visualization.PieChart(document.getElementById('politica2'));
     chart.draw(dataPoliticos1, options);    
 
     var dataPoliticos2 = new google.visualization.arrayToDataTable([
            ['Partidos', 'Escaños',{role: "style"}],
            ['PP', 120,"blue"],
            ['PSOE', 89,"red"],
            ['Cs', 10,"orange"],
            ['UP', 35,"green"],
            ['Vox', 52,"purple"],
            ['Otros', 40,"aqua"]
         ]);
 
       var options2 = {
         title: 'Votos de los partidos',
         chartArea: {width: '50%'}
         
       };
 
       var chart = new google.visualization.BarChart(document.getElementById('politica1'));
       chart.draw(dataPoliticos2, options2);
 
}      
         


/*b) Ránking mundial de países más turísticos (por número de visitantes). 
Deberás representar estos datos mediante un gráfico Geográfico.*/

google.charts.load('current', {'packages':['geochart']});
google.charts.setOnLoadCallback(turismo);

function turismo() {
    var datosTurismo = new google.visualization.arrayToDataTable([
    ['Paises', 'Turismo'],
    ['Spain', 81.8],
    ['United States', 76.9],
    ['France', 86.9],
    ['China', 60.7],
    ['Italy', 58.3],
    ['Turkey', 37.6],
    ['Thailand', 35.4],
    ['Mexico', 39.3]
    ]);


    var chart = new google.visualization.GeoChart(document.getElementById('turismo'));

    chart.draw(datosTurismo);
}
