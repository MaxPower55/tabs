var tab = 0;
var radio1 = document.getElementById('radio1');
var radio2 = document.getElementById('radio2');
var radio3 = document.getElementById('radio3');
var radio4 = document.getElementById('radio4');

radio1.addEventListener('click',function() {tab = 0;showView(tab)},false);
radio2.addEventListener('click',function() {tab = 1;showView(tab)},false);
radio3.addEventListener('click',function() {tab = 2;showView(tab)},false);
radio4.addEventListener('click',function() {tab = 3;showView(tab)},false);

function showView(n) {
    var views = document.getElementsByClassName('view');
    for(var i = 0;i < views.length;i++) {
        views[i].className = 'view view-hide';
    }
    views[n].className = 'view';
}
showView(tab);