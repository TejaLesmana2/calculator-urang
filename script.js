function insert(num) {
  document.form.textView.value = document.form.textView.value + num;
}
function c(){
  document.form.textView.value = "";
}

function del(){
  var x = document.form.textView.value;
    document.form.textView.value = x.substring(0,x.length-1);
}
function equal() {
  var hasil = document.form.textView.value;
  document.form.textView.value = eval(hasil);
}
function percent() {
  var persen = document.form.textView.value;
  document.form.textView.value = eval(persen) / 100;
}
