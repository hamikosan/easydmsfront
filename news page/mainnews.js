
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
/*new FroalaEditor('div#froala-editor', {
    documentReady: true
  })*/

function showOutSideLink() {
    var checkBox = document.getElementById("link_check");
    var outsidelink = document.getElementById("outsidelink_form");
    var detail= document.getElementById("prewriting");

    if (checkBox.checked == true){
        outsidelink.style.display = "block";
        detail.style.display="none";
    } else {
        outsidelink.style.display = "none";
        detail.style.display="block";
    }
}

function deletePopUP(){
    var confirmbox = document.getElementById("modal");
    var btn = document.getElementById("deleteB");
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
}/*language setting*/
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
  
//html editor
$(() => {
    const editor = $('.html-editor').dxHtmlEditor({
      height: 725,
      value: markup,
      imageUpload: {
        tabs: ['file', 'url'],
        fileUploadMode: 'base64',
      },
      toolbar: {
        items: [
          'undo', 'redo', 'separator',
          {
            name: 'size',
            acceptedValues: ['8pt', '10pt', '12pt', '14pt', '18pt', '24pt', '36pt'],
          },
          {
            name: 'font',
            acceptedValues: ['Arial', 'Courier New', 'Georgia', 'Impact', 'Lucida Console', 'Tahoma', 'Times New Roman', 'Verdana'],
          },
          'separator', 'bold', 'italic', 'strike', 'underline', 'separator',
          'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'separator',
          'orderedList', 'bulletList', 'separator',
          {
            name: 'header',
            acceptedValues: [false, 1, 2, 3, 4, 5],
          }, 'separator',
          'color', 'background', 'separator',
          'link', 'image', 'separator',
          'clear', 'codeBlock', 'blockquote', 'separator',
          'insertTable', 'deleteTable',
          'insertRowAbove', 'insertRowBelow', 'deleteRow',
          'insertColumnLeft', 'insertColumnRight', 'deleteColumn',
        ],
      },
      mediaResizing: {
        enabled: true,
      },
    }).dxHtmlEditor('instance');
     
    $('#multiline').dxCheckBox({
      text:language.multi,
      value: true,
      onValueChanged(e) {
        editor.option('toolbar.multiline', e.value);
      },
    });
  
    $('#image-uploader-tabs').dxSelectBox({
      items: tabs,
      value: tabs[2].value,
      valueExpr: 'value',
      displayExpr: 'name',
      onValueChanged: (e) => {
        editor.option('imageUpload.tabs', e.value);
      },
    });
  });
  getLanguage();
  const tabs = [{ name: language.ftd, value: ['file'] }, { name: language.ftw, value: ['url'] }, { name: language.both, value: ['file', 'url'] }];

    const markup = "";
   
  $(document).ready(function(){

      $('#adr-header').text(language.adr_reportHead);
      $('#track-header').text(language.unsendHead);
      $('#medicine-header').text(language.medHead);
      $('#account-header').text(language.accManage);
      $('#news-header').text(language.newsHead);
      $('#logout').text(language.logout);
      $('h4#news-header').text(language.newsHead);
      $('#searchkey').attr("placeholder",language.searchPlaceholder);
      $('button#add').text(language.add);
      $('#general').text(language.general);
      $('div#lastUp').text(language.lastUp);
      $('div#on').text(language.onDate);
      $('#news').text(language.news);
      $('label#en').text(language.enable);
      $('label#dis').text(language.disable);
      $('#addNews').text(language.add+" "+language.news);
      $('#editNews').text(language.edit+" "+language.news);
      $('#title').text(language.title);
      $('#category').text(language.category);
      $('#outLink').text(language.outLink);
      $('#newsDetail').text(language.newsDetail);
      $('#options').text(language.options);
      $('#s-desc').text(language.shortDesc);
      $('#iut').text(language.imgUpTab);
      $('button#update').text(language.update);
      $('button#preview').html("<a href='news_preview.html'>"+language.preview+"</a>");
      $('#previewNews').text(language.preview+" "+language.news);
        });
    