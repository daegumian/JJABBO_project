

function addCookie(name, value) {

    //쿠키 생성

    var date = new Date();
    date.setDate(date.getDate() + 1); //현재시간 + 1일
    document.cookie = 'xxx=aaa123; expires=' + date.toUTCString() + ";";

}

//쿠키 삭제
function delCookie(name, value){

    var date = new Date(); //현재시간
    date.setDate(date.getDate()); //현재시간
    document.cookie = 'xxx=aaa123; expires=' + date.toUTCString() + ";";

}