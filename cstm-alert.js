// Author: Vidur Tuli
// Email: vidurtuli53@gmail.com
// Free to use

var popupNode = document.createElement('div');
popupNode.className = 'alertPopWrp';
document.body.appendChild(popupNode);

function cstmAlert(jsonData){
    var iconCls = '';
    
    if(jsonData.alertCls == 'success'){
        iconCls = "icon-check";
    }
    if(jsonData.alertCls == 'warning'){
        iconCls = "icon-exclamation-triangle";
    }
    if(jsonData.alertCls == 'error'){
        iconCls = "icon-times";
    }
    var appendHtml = '<div class="alertPopBg '+ jsonData.alertCls +'"><i class="'+ iconCls +'"></i><h2 class="alertPopTitle">' + jsonData.title + '</h2><p class="alertPopDesc">' + jsonData.desc + '</p><a href="javascript:void(0);" class="alertPopClose" onclick="closePop();">Okay</a></div>';
    document.getElementsByClassName('alertPopWrp')[0].innerHTML = appendHtml;
    document.getElementsByClassName('alertPopWrp')[0].classList.add('openAlert');
}

function closePop(){
    document.getElementsByClassName('alertPopWrp')[0].classList.remove('openAlert');
}