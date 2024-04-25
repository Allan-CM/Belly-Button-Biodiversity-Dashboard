# Belly Button Biodiversity Dashboard

# Overview
This project focuses on building an interactive web dashboard to explore and visualize data related to belly button biodiversity. The data includes samples collected from various test subjects, each identified by a unique ID number. The dashboard allows users to select a test subject ID from a dropdown menu and view corresponding charts and demographic information.

# Technologies Used
* JavaScript
* D3.js
* Plotly
* Bootstrap

# Project Structure
## JavaScript Code
* Data Loading: The data is fetched from a JSON file hosted on AWS.
* Data Filtering: The data is filtered based on the selected test subject ID.
* Plot Generation: Two types of plots are generated: a bar chart and a bubble chart.
* Metadata Display: Demographic information for the selected test subject is displayed in a panel.
## HTML Code
* Dropdown Menu: A dropdown menu allows users to select a test subject ID.
* Charts: The dashboard includes two main charts: a bar chart and a bubble chart.
* Demographic Info Panel: A panel displays demographic information for the selected test subject.

# Data Analysis
The dashboard provides visual insights into the biodiversity found in belly button samples. It displays the top 10 OTUs (Operational Taxonomic Units) based on sample values and visualizes the relationship between OTU IDs and sample values using a bubble chart.

# How to Use
1. Open the HTML file in a web browser using https://allan-cm.github.io/Belly-Button-Biodiversity-Dashboard/ 
2. Use the dropdown menu to select a test subject ID.
3. Explore the bar chart and bubble chart to visualize the sample data.
4. View the demographic information in the panel below the dropdown menu.

# Conclusion
This interactive dashboard serves as a tool for exploring and understanding belly button biodiversity data. Users can easily navigate through different test subject IDs to visualize and analyze the microbial composition of belly button samples.
