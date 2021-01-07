function checkuser() {
    if($('name' == "zjy") && $('pwd') == "bjyx95") {
      return true;
    }else {
       return false;
    }
 }
 
 function $(id) {
   return document.getElementById(id).value;
 }
