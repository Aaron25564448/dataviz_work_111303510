let hw1_Graph = document.getElementById('hw1_Graph');

let trace01 = {};
trace01.mode = "lines+markers";
trace01.type = "scatter";
trace01.name = "Taiwan";
trace01.marker = { size:10 };
trace01.x = [];
trace01.y = [];
trace01.visible = true;

for(let i=0;i<taiwan.length;i++){
    trace01.x[i] = taiwan[i][0];
    trace01.y[i] = taiwan[i][1];
}

let trace02 = {};
trace02.mode = "lines+markers";
trace02.type = "scatter";
trace02.name = "Japan";
trace02.marker = { size:10 };
trace02.x = [];
trace02.y = [];
trace02.visible = false;
trace02.line = { color:'red' };

for(let i=0;i<japan.length;i++){
    trace02.x[i] = japan[i][0];
    trace02.y[i] = japan[i][1];
}

let trace03 = {};
trace03.mode = "lines+markers";
trace03.type = "scatter";
trace03.name = "Korea";
trace03.marker = { size:10 };
trace03.x = [];
trace03.y = [];
trace03.visible = false;
trace03.line = { 
    color:'green'
};

for(let i=0;i<korea.length;i++){
    trace03.x[i] = korea[i][0];
    trace03.y[i] = korea[i][1];
}

let hw1_data = [];
hw1_data.push(trace01);
hw1_data.push(trace02);
hw1_data.push(trace03);

let hw1_layout = {
    margin:{ t:50 },
    xaxis:{ 
        range:[1999, 2021],
        title:'Year'
    },
    yaxis:{ 
        range:[0, 2],
        title:'Birth rate'
    },
    title:'Birth Rate of Taiwan, Japan, and Korea from 2000 to 2020',
    updatemenus:[
        {
            y:1.5,
            x:0.1,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible', [true, false, false]],
                    label:'Taiwan'
                },
                {
                    method:'restyle',
                    args:['visible', [false, true, false]],
                    label:'Japan'
                },
                {
                    method:'restyle',
                    args:['visible', [false, false, true]],
                    label:'Korea'
                },
                {
                    method:'restyle',
                    args:['visible', [true, true, true]],
                    label:'Display All'
                }
            ]
        }
    ]
};

Plotly.newPlot(hw1_Graph, hw1_data, hw1_layout);