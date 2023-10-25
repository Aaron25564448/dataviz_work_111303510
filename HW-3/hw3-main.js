let hw3_Graph = document.getElementById('hw3_Graph');

let phone_account = {};
phone_account.type = "pie";
phone_account.labels = [];
phone_account.values = [];

for(let x=0; x<cellphone.length; x++){
    phone_account.labels[x] = cellphone[x]["name"];
    phone_account.values[x] = cellphone[x]["count"];
}


let hw3_data = [];
hw3_data.push(phone_account);

let hw3_layout = {
    margin:{ t:30 },
    title:'2023/06台灣手機市占率'
};

Plotly.newPlot(hw3_Graph, hw3_data, hw3_layout);