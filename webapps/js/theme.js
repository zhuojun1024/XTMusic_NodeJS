//主色调
var neteaseTheme = "223,59,59";
var kugouTheme = "12,143,231";
var qqTheme = "53,176,118";
var color = neteaseTheme;

function changeTheme(type) {
    let audiolrc = window.frames["audiolrc"];
    switch (type) {
        case 'netease': color = neteaseTheme; break;
        case 'kugou': color = kugouTheme; break;
        case 'qq': color = qqTheme; break;
    }
    $('#header').css('backgroundColor', 'rgb(' + color + ')');
    $('#selecttime').css('border', '1px solid rgb(' + color + ')');
    $('#bottom').css('backgroundColor', 'rgb(' + color + ')');
    $('#bottom').css('borderTop', '2px solid rgb(' + color + ')');
    $('#selectmode').css('border', '1px solid rgb(' + color + ')');
    audiolrc.geci = 'rgb(' + color + ')';

    $('#vinyl').css('background-image', 'url(../image/Vinyl_' + type + '.png)');

    let num = audiolrc.num;
    let li = audiolrc.document.getElementById("li" + (num - 1));
    if (num != 0 && li != undefined) {
        li.style.color = 'rgb(' + color + ')';
    }
}