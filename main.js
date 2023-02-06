
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
    var btn = document.getElementById("dis_acc");
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
/*document.querySelector("input[type=number]").oninput = e => console.log(new Date(e.target.valueAsNumber, 0, 1));

const date = new Date();

let year = date.getFullYear();
var year_def= document.getElementById("year");
year_def.setAttribute("value",year);*/

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

//select language
var language;
 
function getLanguage() {
    (localStorage.getItem('language') == null) ? setLanguage('en') : false;
    $.ajax({ 
    url:  localStorage.getItem('language') + '.json', 
    dataType: 'json', async: false, dataType: 'json', 
    success: function (lang) { language = lang } });  
}
//var lan = localStorage.getItem('language')+'.json';

//const en=JSON.parse(lan);
function setLanguage(lang) {
    localStorage.setItem('language', lang);
}
//console.log(en.med);
getLanguage();
$(document).ready(function(){
    $('#med').text(language.med);
    $('th#med').text(language.med);
    $('#more').text(language.more);
    $('#myInput').attr("placeholder",language.searchPlaceholder);
    $('#myInput2').attr("placeholder",language.searchPlaceholder);
    $('#symp').text(language.sympDrop);
    $('#sevl').text(language.sevDrop);
    $('#mon').text(language.month);
    $('#m1').text(language.january);
    $('#m2').text(language.february);
    $('#m3').text(language.march);
    $('#m4').text(language.april);
    $('#m5').text(language.may);
    $('#m6').text(language.june);
    $('#m7').text(language.july);
    $('#m8').text(language.august);
    $('#m9').text(language.september);
    $('#m10').text(language.october);
    $('#m11').text(language.november);
    $('#m12').text(language.december);
    $('#yearh').text(language.year);
    $('#adr-header').text(language.adr_reportHead);
    $('#date').text(language.date);
    $('th#name').text(language.name);
    $('th#uname').text(language.username);
    $('th#pw').text(language.password);
    $('th#pro').text(language.license);
    $('th#edit').text(language.edit);
    $('th#status').text(language.status);
    $('#sym1').text(language.sympDrop+" "+1);
    $('#sym2').text(language.sympDrop+" "+2);
    $('#sym3').text(language.sympDrop+" "+3);
    $('#osym').text(language.othSymp);
    $('#tel').text(language.tel);
    $('#n-export').text(language.exportTab);
    $('#c-export').text(language.exportTab);
    $('#track-header').text(language.unsendHead);
    $('#medicine-header').text(language.medHead);
    $('#account-header').text(language.accManage);
    $('#news-header').text(language.newsHead);
    $('#logout').text(language.logout);
    $('h4#adr-header').text(language.adr_reportHead);
    $('h4#track-header').text(language.unsendHead);
    $('h4#medicine-header').text(language.medHead);
    $('h4#account-header').text(language.accManage);
    $('h4#news-header').text(language.newsHead);
    $('button#add_acc').html(language.add+" "+language.acc);
    $('button#add').html(language.add);
    $('button#dis_acc').text(language.disable+" "+language.acc);
    $('#searchacc').attr("placeholder",language.searchPlaceholder);
    $('#searchkey').attr("placeholder",language.searchPlaceholder);
    $('#adWarn').text(language.adminAccAvailability);
    $('#dis_confirm_text').html(language.rUSure+"<br>"+language.wantToDisable);
    $('button#confirm_button').text(language.yes);
    $('button#no_button').text(language.no);
    $('#addNewAcc').text(language.new);
    $('#editAcc').text(language.edit+" "+language.acc);
    $('#first_name').text(language.first);
    $('#last_name').text(language.last);
    $('#uname').text(language.username);
    $('#pw').text(language.password);
    $('#log-u').text(language.username);
    $('#pw-u').text(language.password);
    $('#reset-u').text(language.username);
    $('#pro').text(language.license);
    $('#new-pw').text(language.password);
    $('#conPw').text(language.confirm+" "+language.password);
    $('#con-new-pw').text(language.confirm+" "+language.password);
    $('#addacc').text(language.add);
    $('#upacc').text(language.update);
    $('#addMedH').text(language.add+" "+language.med);
    $('#addmed').text(language.add+" "+language.med);
    $('#editMedH').text(language.edit+" "+language.med);
    $('#upmed').attr("value",language.update+" "+language.med);
    $('#drug_program').text(language.adrp);
    $('div#lastUp').text(language.lastUp);
    $('div#on').text(language.onDate);
    $('label#en').text(language.enable);
    $('label#dis').text(language.disable);
    $('#medname').text(language.medGeneralName);
    $('#medmarname').text(language.medMarket);
    $('#dosage').text(language.dosageForm);
    $('#strength').text(language.str);
    $('#indication').text(language.ind);
    $('#contraindication').text(language.contraindication);
    $('#storage').text(language.storage);
    $('#posad').text(language.par);
    $('#upImg').text(language.upload+" "+language.image);
    $('#editImg').text(language.edit+" "+language.image);
    $('#log-title').text(language.login_title);
    $('#link-reset').text(language.forget_passq);
    $('#forgot-title').text(language.forget_passh);
    $('#log-sub').text(language.login);
    $('#signin').text(language.signin);
    $('#forgot-inst').text(language.forget_inst);
    //$('#navigateToReset').html("<a href='reset_password.html'>"+language.reset_password+"</a>");
    $('#navigateToReset').text(language.reset_password);
    $('#resetpwButton').text(language.reset_password);
    $('#reset-title').text(language.reset_password);
    $('#reset-inst').text(language.reset_inst);
    $('#sev').text(language.sevDrop);
     });

/*sort filter function*/
function filterFunction() {
    // Declare variables
    var reportinput, filter, reporttable, reporttr, reporttd,uncheckinput,unchecktable,unchecktr,unchecktd, i, txtValue;
    reportinput = document.getElementById("myInput");
    uncheckinput = document.getElementById("myInput2");
    filterreport = reportinput.value.toUpperCase();
    filteruncheck = uncheckinput.value.toUpperCase();
    reporttable = document.getElementById("receive-report");
    unchecktable = document.getElementById("unreceive-report");
    reporttr = reporttable.getElementsByTagName("tr");
    unchecktr = unchecktable.getElementsByTagName("tr");
  
    // Loop through all report table rows, and hide those who don't match the search query
    for (i = 0; i < reporttr.length; i++) {
      reporttd = reporttr[i].getElementsByTagName("td")[0];
      if (reporttd) {
        reporttxtValue = reporttd.textContent || reporttd.innerText;
        if (reporttxtValue.toUpperCase().indexOf(filterreport) > -1) {
          reporttr[i].style.display = "";
        } else {
          reporttr[i].style.display = "none";
        }
      }
    }
    // Loop through all uncheck report table rows, and hide those who don't match the search query
    for (i = 0; i < unchecktr.length; i++) {
        unchecktd = unchecktr[i].getElementsByTagName("td")[0];
        if (unchecktd) {
          unchecktxtValue = unchecktd.textContent || unchecktd.innerText;
          if (unchecktxtValue.toUpperCase().indexOf(filteruncheck) > -1) {
            unchecktr[i].style.display = "";
          } else {
            unchecktr[i].style.display = "none";
          }
        }
      }
  }
  /*show hide password*/
  /*$(".toggle-password").click(function() {

    $(this).toggleClass("fa fa-eye");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });*/



$(".field-icon").click(function() {

    if ($(this).hasClass("fa fa-eye-slash")) {  //check the class
        $(this).removeClass( "fa fa-eye-slash" ).addClass( "fa fa-eye" );
    }else if($(this).hasClass("fa fa-eye")){
        $(this).removeClass( "fa fa-eye " ).addClass( "fa fa-eye-slash" );
    }
    
    
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
    input.attr("type", "text");
    } else {
    input.attr("type", "password");
    }
});
/*password table hiding */
