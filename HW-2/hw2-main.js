let hw2_Graph = document.getElementById('hw2_Graph');

let population1 = {};
population1.type = "bar";
population1.name = "Kaohsiung population";
population1.x = [];
population1.y = [];
population1.marker = {color:'blue'};

for(let i=0;i<kaohsiung_population.length;i++){
    population1.x[i] = kaohsiung_population[i]['year'];
    population1.y[i] = kaohsiung_population[i]['population'];
}
population1.text = population1.y;
population1.textfont = {
    color:'white',
    size:20
}
population1.visible = true;

let population2 = {};
population2.type = "bar";
population2.name = "Taichung population";
population2.x = [];
population2.y = [];
population2.marker = {color:'yellow'};

for(let i=0;i<taichung_population.length;i++){
    population2.x[i] = taichung_population[i]['year'];
    population2.y[i] = taichung_population[i]['population'];
}
population2.text = population2.y;
population2.textfont = {
    color:'white',
    size:20
}
population2.visible = false;

let hw2_data = [];
hw2_data.push(population1);
hw2_data.push(population2);

let hw2_layout = {
    margin:{ t:50 },
    xaxis:{ 
        range:[2010, 2016],
        title:'Year'
    },
    yaxis:{ 
        range:[0, 3],
        title:'population(million people)'
    },
    title:'Kaohsiung population vs Taichung population',
    updatemenus:[
        {
            y:1.2,
            x:0.1,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible', [true, false]],
                    label:'Kaohsiung'
                },
                {
                    method:'restyle',
                    args:['visible', [false, true]],
                    label:'Taichung'
                },
                {
                    method:'restyle',
                    args:['visible', [true, true]],
                    label:'Display All'
                }
            ]
        }
    ]
};

Plotly.newPlot(hw2_Graph, hw2_data, hw2_layout);