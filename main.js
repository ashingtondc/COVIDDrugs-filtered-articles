let url  ='filtered_data_reformatted.json';

fetch(url)
  .then(response => response.json())
  .then(data => convert(data));

function convert(data)
{
    console.log(data.entries)
    display(data.entries);
}

function display(json)
{
    let loader = document.getElementById("circle");
    loader.remove();
    //create Tabulator on DOM element with id "table"
    let table = new Tabulator("#table", {
        height: window.innerHeight - 20,
        data:json, //assign data to table
        autoColumns:true,
    });

    // Add header filter to all columns
    let columns = table.getColumnDefinitions();

    columns.forEach(column => {
        column.headerFilter = true;
        column.tooltip = true;
    });

    table.setColumns(columns);
}