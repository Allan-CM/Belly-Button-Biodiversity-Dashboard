//Storing data link 
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function init(){

    d3.json(url).then(function(data) {
    console.log(data);

    let samples = data.samples;
    let metadata = data.metadata;

    //Setting an random id number
    let id_numb = 940;

    //Filtering Data by id number
    let filteredByValues = samples.filter(originalSample => originalSample.id == id_numb);
    let filteredByMetadata = metadata.filter(originalSample => originalSample.id == id_numb);

    //Selecting for the first and only values in the array
    let sampleData = filteredByValues[0];
    let sampleMetaData = filteredByMetadata[0];

    //Storing out otu_ids, lebels and values in its owl list
    values = sampleData.sample_values;
    ids = sampleData.otu_ids;
    labels = sampleData.otu_labels;

    // Trace1 for the Bacteria Data
    let trace1 = [{
        //Slicing our data and conertin our numbers into strings
        y: ids.slice(0,10).reverse().map(ids => `OTU ${ids}`),
        x: values.slice(0,10).reverse(),
        //setting hover text
        text: labels,
        name: "Bacteria Data",
        type: "bar",
        //Setting Bar graph posistioning 
        orientation: "h"
    }];

    // Trace2 for the Bacteria Data
    let trace2 = [{
        //setting x and y value for the bubble graph
        x: ids,
        y: values,
        mode: 'markers',
        //setting marker parameters
        marker: {
          color: ids,
          opacity: 1,
          size: values
        },
        //Setting hover text
        text: labels
    }];

    // Storing grpahing information as an array
    let graph = trace1;
    let graph2 = trace2;
    
    // Render the plot to the div tag with id "bar" and "bubble"
    Plotly.newPlot("bar", graph);
    Plotly.newPlot("bubble", graph2);

    //Selecting panel-body element of our page 
    const metadataPanel = d3.select(".panel-body");
  
    //Posting Demogrpahic information 
    metadataPanel
      .selectAll("p")
      .data(Object.entries(sampleMetaData))
      .enter()
      .append("p")
      .text(([key, value]) => `${key}: ${value}`);

    console.log(ids)
    })};

    init()

    // On change to the DOM, call getData()
    //d3.selectAll("#selDataset").on("change", optionChanged);

    // Function called by DOM changes
    function optionChanged(id_numb) {
        updatePlotly(id_numb);
    }

    // Update the restyled plot's values
    function updatePlotly(newsample) {

    d3.json(url).then(function(data){
    // Fetch new data based on the selected ID
    let filteredByValues = data.samples.filter(originalSample => originalSample.id == newsample);
    let filteredByMetadata = data.metadata.filter(originalSample => originalSample.id == newsample);

    // Selecting for the first and only values in the array
    let sampleData = filteredByValues[0];
    let sampleMetaData = filteredByMetadata[0];

    console.log(sampleData);
    //Storing out otu_ids, lebels and values in its owl list
    values = sampleData.sample_values;
    ids = sampleData.otu_ids;
    labels = sampleData.otu_labels;

     // Trace1 for the Bacteria Data
     let trace1 = [{
        //Slicing our data and conertin our numbers into strings
        y: ids.slice(0,10).reverse().map(ids => `OTU ${ids}`),
        x: values.slice(0,10).reverse(),
        //setting hover text
        text: labels,
        name: "Bacteria Data",
        type: "bar",
        //Setting Bar graph posistioning 
        orientation: "h"
    }];

    // Trace2 for the Bacteria Data
    let trace2 = [{
        //setting x and y value for the bubble graph
        x: ids,
        y: values,
        mode: 'markers',
        //setting marker parameters
        marker: {
          color: ids,
          opacity: 1,
          size: values
        },
        //Setting hover text
        text: labels
    }];

    // Storing grpahing information as an array
    let graph = trace1;
    let graph2 = trace2;
    
    // Render the plot to the div tag with id "bar" and "bubble"
    Plotly.newPlot("bar", graph);
    Plotly.newPlot("bubble", graph2);

    // Update metadata panel
    const metadataPanel = d3.select(".panel-body");
    metadataPanel.selectAll("p").remove(); // Clear existing data
    metadataPanel
        .selectAll("p")
        .data(Object.entries(sampleMetaData))
        .enter()
        .append("p")
        .text(([key, value]) => `${key}: ${value}`);  
    })
};



