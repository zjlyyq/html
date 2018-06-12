var nav;
var banner_play_direction = true;   //轮播图
var count = 1;
var currentIndex = 0;    //当前轮播图下标
var nots;                //轮播图下部的小横条
var timer;
timer = setInterval(f,4000);

function f() {
    currentIndex ++
    currentIndex = currentIndex%4
    try {
        nav.style.transform = "translate(" + -1024 * (currentIndex%4) + "px)";
        addClass(nots[currentIndex],'current');
        nots[(currentIndex+3)%4].setAttribute('class','not')
    }catch (e) {
        alert(e)
    }
}
//为元素增添新的类名
function addClass(e,newClassName) {
    var oldClass = e.getAttribute('class')
    e.setAttribute('class',oldClass + ' ' + 'current')
}
//点击箭头变换banner图
function changeItem(num) {
    clearInterval(timer)
    // alert('点击了箭头')
    currentIndex=num?currentIndex + 1:currentIndex - 1;
    nav.style.transform = "translate(" + -1024 * (currentIndex%4) + "px)";
    timer = setInterval(f,4000);
}
//点击轮播图下方的小横条
function changeItem2(e) {
    clearInterval(timer)
    for(var i = 0;i < nots.length;i ++){
        if(nots[i] === e){
            currentIndex = i;
            addClass(e,'current')
        }
        else{
            nots[i].setAttribute('class','not')
        }
    }
    nav.style.transform = "translate(" + -1024 * (currentIndex%4) + "px)";
    timer = setInterval(f,4000);
}
// 初始化工作
function init(){
    //获得轮播图对象
    nav = document.getElementById('nav');
    nots = document.getElementsByClassName('not');
    addClass(nots[0],'current')
    if(localStorage.getItem('username')){
        // alert('storage')
        var user = localStorage.getItem('username');
        document.getElementById('form1').username.value = user;
    }
}

var saveStorage = function() {
    // alert('username')
    localStorage = localStorage;
    // alert('zjl')
    var username = document.getElementById('form1').username.value;
    localStorage.setItem('username', username)
}