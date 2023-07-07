
// 변수선언

var code = 'fmGy5j%2FOtBQcRHWsVX4R4yrHrPD8IqYLuyUpm7DywLt6GlacmQRRihWPmcXKMk7ZYkzgTFfBeI0o3i1mGqpc%2Bg%3D%3D';

var selectStadium = document.querySelectorAll(".stadium");
var schedule = document.querySelector(".schedule-area");
var schedule_teamName = document.querySelector(".info-area > span");
var awayLogo = document.querySelector(".away > img");
var awayName = document.querySelector(".away > p");
var homeLogo = document.querySelector(".home > img");
var homeName = document.querySelector(".home > p");
var stadium_weather = document.querySelector(".stadium-weather > p");
var weather_day = document.querySelector(".chooseDay > ul > li > a");
var stadium_list = document.querySelector(".stadium-list");
var timeTable = document.querySelector(".time");
var rainP = document.querySelector(".rainP");
var humidityTable = document.querySelector(".humidityTable");
var windSpeed = document.querySelector(".windSpeed");
var temp = document.querySelector(".temp");
var weather_icon = document.querySelector(".weather > img");
var weather_text = document.querySelector(".weather > p");
var hum = document.querySelector(".humidity > p");
var rain = document.querySelector(".rain > p");
var wind = document.querySelector(".wind > p");
var dot = document.querySelectorAll(".dot-area > a");
var gc = document.querySelector(".GC");
var js = document.querySelector(".JS");
var ic = document.querySelector(".IC");
var sw = document.querySelector(".SW");
var dj = document.querySelector(".DJ");
var dg = document.querySelector(".DG");
var gj = document.querySelector(".GJ");
var bs = document.querySelector(".BS");
var cw = document.querySelector(".CW");



var dsjamsil = document.querySelector(".dsjamsil");
var lgjamsil = document.querySelector(".lgjamsil");
var sajik = document.querySelector(".sajik");
var wizpark = document.querySelector(".wizpark");
var munhak = document.querySelector(".munhak");
var gochuck = document.querySelector(".gochuck");
var eagles = document.querySelector(".eagles");
var ncpark = document.querySelector(".ncpark");
var lions = document.querySelector(".lions");
var champil = document.querySelector(".champil");

const currentDate = new Date();

// 요일 목록
const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
const weekdayIndex = currentDate.getDay(); // 요일 인덱스 (0: 일요일, 1: 월요일, ... , 6: 토요일)
const weekday = weekdays[weekdayIndex]; // 현재 요일

// 날짜 정보
const year = currentDate.getFullYear(); // 연도 (ex: 2023)
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월 (ex: 07)
const day = String(currentDate.getDate()).padStart(2, '0'); // 일 (ex: 06)

// 시간 정보
const hours = String(currentDate.getHours()).padStart(2, '0'); // 시간 (ex: 18)
const minutes = String(currentDate.getMinutes()).padStart(2, '0'); // 분 (ex: 30)

// 형식화된 날짜 및 시간 문자열 생성
const formattedDate = `${year}.${month}.${day} (${weekday})`;
const formattedDateTime = `${year}.${month}.${day} (${weekday}) ${hours}:${minutes}`;






// 함수 작동

window.onload = function () {
    stadium_list.firstElementChild.classList.add("select");
    setTeamOnLoad();
}


for (var i = 0; i < selectStadium.length; i++) {
    selectStadium[i].addEventListener('click', setTeam);
}



weather_day.innerHTML = formattedDate;


function setTeam() {
    for (var j = 0; j < selectStadium.length; j++) {
        selectStadium[j].classList.remove("select");

    }
    this.classList.add("select");
    schedule.classList.remove("eagles", "dsjamsil", "lgjamsil", "gochuck", "wizpark", "munhak", "lions", "sajik", "ncpark", "champil");
    var homeStadium = this.firstElementChild.firstElementChild;
    var teams = this.firstElementChild;
    schedule.classList.add(homeStadium.classList[0]);
    schedule_teamName.innerHTML = homeStadium.innerHTML;
    stadium_weather.innerHTML = homeStadium.innerHTML + ' 시간대별 예보';
    var homeNameW = changeLogo(homeStadium, teams);
    for(var i = 0; i < dot.length; i++){
        dot[i].classList.remove("today");
    }
    if(teams.classList.contains("kt")){
        sw.classList.add("today");
    } else if(teams.classList.contains("ds")){
        js.classList.add("today");
    } else if(teams.classList.contains("lt")){
        bs.classList.add("today");
    } else if(teams.classList.contains("nc")){
        cw.classList.add("today");
    } else if(teams.classList.contains("hh")){
        dj.classList.add("today");
    }
    getWeather(homeNameW);
}







function setTeamOnLoad() {
    stadium_list.firstElementChild.classList.add("select");
    var homeStadium = stadium_list.firstElementChild.firstElementChild.firstElementChild;
    var teams = stadium_list.firstElementChild.firstElementChild;
    schedule.classList.add(homeStadium.classList[0]);
    schedule_teamName.innerHTML = homeStadium.innerHTML;
    changeLogo(homeStadium, teams);
}



function setTeamDot(home) {
    for (var j = 0; j < selectStadium.length; j++) {
        selectStadium[j].classList.remove("select");

    }
    console.log(home);
    home.parentElement.classList.add("select");
    schedule.classList.remove("eagles", "dsjamsil", "lgjamsil", "gochuck", "wizpark", "munhak", "lions", "sajik", "ncpark", "champil");
    var homeStadium = home.firstElementChild;
    var teams = home;
    schedule.classList.add(homeStadium.classList[0]);
    schedule_teamName.innerHTML = homeStadium.innerHTML;
    stadium_weather.innerHTML = homeStadium.innerHTML + ' 시간대별 예보';

    var homeNameW = changeLogo(homeStadium, teams);

    getWeather(homeNameW);
}





function changeLogo(home, away) {

    if (home.classList.contains("sajik")) {
        homeLogo.src = "img/LT.png";
        homeName.innerHTML = "롯데 자이언츠";
    } else if (home.classList.contains("lgjamsil")) {
        homeLogo.src = "img/LG.png";
        homeName.innerHTML = "LG 트윈스";
    } else if (home.classList.contains("dsjamsil")) {
        homeLogo.src = "img/OB.png";
        homeName.innerHTML = "두산 베어스";
    } else if (home.classList.contains("gochuck")) {
        homeLogo.src = "img/WO.png";
        homeName.innerHTML = "키움 히어로즈";
    } else if (home.classList.contains("munhak")) {
        homeLogo.src = "img/SK.png";
        homeName.innerHTML = "SSG 랜더스";
    } else if (home.classList.contains("eagles")) {
        homeLogo.src = "img/HH.png";
        homeName.innerHTML = "한화 이글스";
    } else if (home.classList.contains("lions")) {
        homeLogo.src = "img/SS.png";
        homeName.innerHTML = "삼성 라이온즈";
    } else if (home.classList.contains("champil")) {
        homeLogo.src = "img/HT.png";
        homeName.innerHTML = "KIA 타이거즈";
    } else if (home.classList.contains("ncpark")) {
        homeLogo.src = "img/NC.png";
        homeName.innerHTML = "NC 다이노스";
    } else if (home.classList.contains("wizpark")) {
        homeLogo.src = "img/KT.png";
        homeName.innerHTML = "KT WIZ";
    }

    if (away.classList.contains("lt") && !home.classList.contains("sajik")) {
        awayLogo.src = "img/LT.png";
        awayName.innerHTML = "롯데 자이언츠";
    } else if (away.classList.contains("lg") && !home.classList.contains("lgjamsil")) {
        awayLogo.src = "img/LG.png";
        awayName.innerHTML = "LG 트윈스";
    } else if (away.classList.contains("ds") && !home.classList.contains("dsjamsil")) {
        awayLogo.src = "img/OB.png";
        awayName.innerHTML = "두산 베어스";
    } else if (away.classList.contains("kw") && !home.classList.contains("gochuck")) {
        awayLogo.src = "img/WO.png";
        awayName.innerHTML = "키움 히어로즈";
    } else if (away.classList.contains("ssg") && !home.classList.contains("munhak")) {
        awayLogo.src = "img/SK.png";
        awayName.innerHTML = "SSG 랜더스";
    } else if (away.classList.contains("hh") && !home.classList.contains("eagles")) {
        awayLogo.src = "img/HH.png";
        awayName.innerHTML = "한화 이글스";
    } else if (away.classList.contains("ss") && !home.classList.contains("lions")) {
        awayLogo.src = "img/SS.png";
        awayName.innerHTML = "삼성 라이온즈";
    } else if (away.classList.contains("kia") && !home.classList.contains("champil")) {
        awayLogo.src = "img/HT.png";
        awayName.innerHTML = "KIA 타이거즈";
    } else if (away.classList.contains("nc") && !home.classList.contains("ncpark")) {
        awayLogo.src = "img/NC.png";
        awayName.innerHTML = "NC 다이노스";
    } else if (away.classList.contains("kt") && !home.classList.contains("wizpark")) {
        awayLogo.src = "img/KT.png";
        awayName.innerHTML = "KT WIZ";
    }

    return homeName.innerHTML;

}



function getWeather(homeName) {

    // 사직, 잠실, 고척, 문학, 대전, 대구, 광주, 마산, 수원구장 순
    var nx = [98,61,58,55,68,90,59,89,60];
    var ny = [76,126,125,124,100,90,75,76,121];
    var hn;
    
    if (homeName == '롯데 자이언츠') {
        nx = 98;
        ny = 76;
        hn = document.querySelector(".sajik");
    } else if (homeName == 'LG 트윈스') {
        nx = 61;
        ny = 126;
        hn = document.querySelector(".lgjamsil");
    } else if(homeName == '두산 베어스'){
        nx = 61;
        ny = 126;
        hn = document.querySelector(".dsjamsil");
    } else if (homeName == '키움 히어로즈') {
        nx = 58;
        ny = 125;
        hn = document.querySelector(".gochuck");
    } else if (homeName == 'SSG 랜더스') {
        nx = 55;
        ny = 124;
        hn = document.querySelector(".munhak");
    } else if (homeName == '한화 이글스') {
        nx = 68;
        ny = 100;
        hn = document.querySelector(".eagles");
    } else if (homeName == '삼성 라이온즈') {
        nx = 90;
        ny = 90;
        hn = document.querySelector(".lions");
    } else if (homeName == 'KIA 타이거즈') {
        nx = 59;
        ny = 75;
        hn = document.querySelector(".champil");
    } else if (homeName == 'NC 다이노스') {
        nx = 89;
        ny = 76;
        hn = document.querySelector(".ncpark");
    } else if (homeName == 'KT WIZ') {
        nx = 60;
        ny = 121;
        hn = document.querySelector(".wizpark");
    }


    // 날씨 테이블 삭제
    if(rainP.children.length > 2){
        while(rainP.children.length > 1 && humidityTable.children.length > 1 && windSpeed.children.length > 1 && temp.children.length > 1){
            humidityTable.removeChild(humidityTable.lastElementChild);
            rainP.removeChild(rainP.lastElementChild);
            windSpeed.removeChild(windSpeed.lastElementChild);
            temp.removeChild(temp.lastElementChild);
        }
    }


        var xhr = new XMLHttpRequest();
        var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'; /*URL*/
        var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + code; /*Service Key*/
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('2'); /**/
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('300'); /**/
        queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
        queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent('20230706'); /**/
        queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent('0800'); /**/
        queryParams += '&' + encodeURIComponent('nx') + '=' + encodeURIComponent(nx); /**/
        queryParams += '&' + encodeURIComponent('ny') + '=' + encodeURIComponent(ny); /**/
        xhr.open('GET', url + queryParams);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                var data = JSON.parse(this.responseText);
                var arr = data.response.body.items.item;
                for (var i = 0; i < arr.length; i++) {
                    var time = arr[i].fcstTime;
                    var formTime = '';
                    if(time == '1400'){
                        formTime = '14시';
                    } else if(time == '1500'){
                        formTime = '15시';
                    } else if(time == '1600'){
                        formTime = '16시';
                    } else if(time == '1700'){
                        formTime = '17시';
                    } else if(time == '1800'){
                        formTime = '18시';
                    } else if(time == '1900'){
                        formTime = '19시';
                    } else if(time == '2000'){
                        formTime = '20시';
                    } else if(time == '2100'){
                        formTime = '21시';
                    }
                    var th = document.createElement("th");
                    var td = document.createElement("td");
                    
                    

                    if(time >= 1400 && time <= 2100){
                        if(arr[i].category == 'POP'){
                            var rainPer = '';
                            td.innerHTML = arr[i].fcstValue + '%';
                            rainP.appendChild(td);
                            if(time == 1700){
                                if(arr[i].fcstValue == 0){
                                    rain.innerHTML = "-";
                                } else {
                                    rainPer = arr[i].fcstValue;
                                }
                                hn.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = '강수확률 ' + arr[i].fcstValue + '%';
                            } 
    
                        } else if(arr[i].category == 'REH'){
                            td.innerHTML = arr[i].fcstValue + '%';
                            humidityTable.appendChild(td);
                            if(time == 1700){
                                hum.innerHTML = arr[i].fcstValue + '%';
                            }

                        } else if(arr[i].category == 'WSD'){
                            td.innerHTML = arr[i].fcstValue + 'm/s';
                            windSpeed.appendChild(td);

                        } else if (arr[i].category == "TMP"){
                            td.innerHTML = arr[i].fcstValue + ' °C';
                            temp.appendChild(td);
                            if(time == 1700){
                                hn.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = arr[i].fcstValue + ' ℃';
                            }
                        } else if(arr[i].category == "SKY" && time == 1700){
                            if(arr[i].fcstValue == 1){
                                weather_icon.src = "img/bsun.png";
                                weather_text.innerHTML = "맑음";
                                hn.nextElementSibling.firstElementChild.src = 'img/ssunny.png';
                            } else if(arr[i].fcstValue == 3){
                                weather_icon.src = "img/bcloud.png";
                                weather_text.innerHTML = "구름많음";
                                hn.nextElementSibling.firstElementChild.src = 'img/scloud.png'
                            } else if(arr[i].fcstValue == 4){
                                weather_icon.src = "img/bnotsun.png";
                                weather_text.innerHTML = "흐림";
                                hn.nextElementSibling.firstElementChild.src = 'img/swindy.png'
                            }


                        } else if(arr[i].category == 'VEC'){
                            var vec = arr[i].fcstValue;
                            if(vec > 315 && vec <= 360){
                                wind.innerHTML = '북풍';
                            } else if(vec >= 0 && vec <= 45){
                                wind.innerHTML = '북풍';
                            } else if(vec > 45 && vec <= 135){
                                wind.innerHTML = '동풍';
                            } else if(vec > 135 && vec <= 225){
                                wind.innerHTML = '남풍';
                            } else if(vec > 225 && vec <= 315){
                                wind.innerHTML = '서풍';
                            }
                        } else if(arr[i].category == 'PCP' && rainPer > 0){
                            rain.innerHTML = arr[i].fcstValue;
                        }
                        
                    }
                }
            }
        };
    
        xhr.send('');


}


for(var i = 0; i < dot.length; i++){

    dot[i].addEventListener('click', function() {
        var h = '';
        var a = '';
        for(var j = 0; j < dot.length; j++){
            dot[j].classList.remove("today");
        }
        this.classList.add("today");
        if(this.classList.contains('BS')){
            setTeamDot(sajik.parentElement);
        } else if(this.classList.contains('DJ')){
            setTeamDot(eagles.parentElement);
        } else if(this.classList.contains('SW')){
            setTeamDot(wizpark.parentElement);
        } else if(this.classList.contains('JS')){
            setTeamDot(dsjamsil.parentElement);
        } else if(this.classList.contains('CW')){
            setTeamDot(ncpark.parentElement);
        } else {
            alert('오늘 경기가 없는 구장입니다.');
        }

    })
}





