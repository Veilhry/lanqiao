// TODO：完善此函数 显示红色颜色的灯
function red() {
    var defaultlight = document.querySelector('#defaultlight')
    var redlight = document.querySelector('#redlight')
    defaultlight.style.display = 'none'
    redlight.style.display = 'inline-block'
}

// TODO：完善此函数  显示绿色颜色的灯
function green() {
    var redlight = document.querySelector('#redlight')
    var greenlight = document.querySelector('#greenlight')
    redlight.style.display = 'none'
    greenlight.style.display = 'inline-block'
}

// TODO：完善此函数
function trafficlights() {
    setTimeout(red, 3000);
    setTimeout(green, 6000);

}

trafficlights();
