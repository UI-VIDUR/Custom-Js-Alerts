// Author: Vidur Tuli
// Email: vidurtuli53@gmail.com
// Free to use

var popupNode = document.createElement('div');
popupNode.className = 'alertPopWrp';
document.body.appendChild(popupNode);

function cstmAlert(title, desc, alertCls){
    var iconCls = '';
    
    if(alertCls == 'success'){
        iconCls = "icon-check";
    }
    if(alertCls == 'warning'){
        iconCls = "icon-exclamation-triangle";
    }
    if(alertCls == 'error'){
        iconCls = "icon-times";
    }
    var appendHtml = '<div class="alertPopBg '+ alertCls +'"><i class="'+ iconCls +'"></i><h2 class="alertPopTitle">' + title + '</h2><p class="alertPopDesc">' + desc + '</p><a href="javascript:void(0);" class="alertPopClose" onclick="closePop();">Okay</a></div>';
    document.getElementsByClassName('alertPopWrp')[0].innerHTML = appendHtml;
    document.getElementsByClassName('alertPopWrp')[0].classList.add('openAlert');
}

function closePop(){
    document.getElementsByClassName('alertPopWrp')[0].classList.remove('openAlert');
}