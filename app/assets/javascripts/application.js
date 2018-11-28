// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .


function check_form(){
  var count = 0;
  if (document.getElementById("n1").value == ""){
    count = count+1;
  }
  if (document.getElementById("n2").value == ""){
    count = count+1;
  }
  if (document.getElementById("n3").value == ""){
    count = count+1;
  }
  if (document.getElementById("n4").value == ""){
    count = count+1;
  }
  if (document.getElementById("n5").value == ""){
    count = count+1;
  }
  if (document.getElementById("n6").value == ""){
    count = count+1;
  }

  if(count >= 4){
    alert("最低３人の名前を入力してください");
    return false;
  }
  if (document.getElementById("n1").value == ""){
    alert("上から詰めて名前を入力してください");
    return false;
  }
  if (document.getElementById("n2").value == ""){
    alert("上から詰めて名前を入力してください");
    return false;
  }
  if (document.getElementById("n3").value == ""){
    alert("上から詰めて名前を入力してください");
    return false;
  }
  if (document.getElementById("n4").value == "" && count <= 2){
    alert("上から詰めて名前を入力してください");
    return false;
  }
  if (document.getElementById("n5").value == "" && count <= 1){
    alert("上から詰めて名前を入力してください");
    return false;
  }
  return true;
}
