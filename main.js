function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}
function deletePopUP(){
    var confirmbox = document.getElementById("modal");
    var btn = document.getElementById("del_acc");
    var close = document.getElementById("no_button");
    btn.onclick = function() {
        confirmbox.style.display = "block";
    }

    close.onclick = function() {
        confirmbox.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == confirmbox) {
            confirmbox.style.display = "none";
        }
    }
}

//image editor section
var imgout=document.getElementById("imgout");
var imgin=document.getElementById("imgin");
var loadFile = function(event){
    imgout.setAttribute("src",URL.createObjectURL(event.target.files[0]));  
}
var loadFileIn = function(event){
    imgin.setAttribute("src",URL.createObjectURL(event.target.files[0]));
}

/*date filtering */
document.querySelector("input[type=number]").oninput = e => console.log(new Date(e.target.valueAsNumber, 0, 1));

const date = new Date();

let year = date.getFullYear();
var year_def= document.getElementById("year");
year_def.setAttribute("value",year);

/*Export table*/
function exportReportData(){
    /* Get the HTML data using Element by Id */
    var table = document.getElementById("receive-report");
 
    /* Declaring array variable */
    var rows =[];
 
      //iterate through rows of table
    for(var i=0,row; row = table.rows[i];i++){
        //rows would be accessed using the "row" variable assigned in the for loop
        //Get each cell value/column from the row
        column1 = row.cells[0].innerText;
        column2 = row.cells[1].innerText;
        column3 = row.cells[2].innerText;
        column4 = row.cells[3].innerText;
        column5 = row.cells[4].innerText;
        column6 = row.cells[5].innerText;
        column7 = row.cells[6].innerText;
        column8 = row.cells[7].innerText;
 
    /* add a new records in the array */
        rows.push(
            [
                column1,
                column2,
                column3,
                column4,
                column5,
                column6,
                column7,
                column8
            ]
        );
 
        }
        csvContent = "data:text/csv;charset=utf-8,";
         /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
        rows.forEach(function(rowArray){
            row = rowArray.join(",");
            csvContent += row + "\r\n";
        });
 
        /* create a hidden <a> DOM node and set its download attribute */
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "ADR_Report.csv");
        document.body.appendChild(link);
         /* download the data file named "Stock_Price_Report.csv" */
        link.click();
}
function exportUnsendReportData(){
    /* Get the HTML data using Element by Id */
    var table = document.getElementById("unreceive-report");
 
    /* Declaring array variable */
    var rows =[];
 
      //iterate through rows of table
    for(var i=0,row; row = table.rows[i];i++){
        //rows would be accessed using the "row" variable assigned in the for loop
        //Get each cell value/column from the row
        column1 = row.cells[0].innerText;
        column2 = row.cells[1].innerText;
        column3 = row.cells[2].innerText;
 
    /* add a new records in the array */
        rows.push(
            [
                column1,
                column2,
                column3
            ]
        );
 
        }
        csvContent = "data:text/csv;charset=utf-8,";
         /* add the column delimiter as comma(,) and each row splitted by new line character (\n) */
        rows.forEach(function(rowArray){
            row = rowArray.join(",");
            csvContent += row + "\r\n";
        });
 
        /* create a hidden <a> DOM node and set its download attribute */
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Unsend_Report.csv");
        document.body.appendChild(link);
         /* download the data file named "Stock_Price_Report.csv" */
        link.click();
}