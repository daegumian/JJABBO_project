
var teamList = document.querySelector("#teamList");
var first = document.getElementById("default");
var teamDetail = document.querySelector(".team-detail");
var title = document.querySelector("#title")
var logo = document.querySelector(".logo");
var year = document.querySelector(".year");
var region = document.querySelector(".region");
var win = document.querySelector(".win span");
var owner = document.querySelector(".owner");
var ceo = document.querySelector(".ceo");
var leader = document.querySelector(".leader");
var director = document.querySelector(".director");
var address = document.querySelector(".address");
var page = document.querySelector(".page a");


teamList.onclick = function() {
    if(event.target.tagName != 'LI') {
        return;
    };

    first.style.display = 'none';
    logo.remove();
    
    
    console.log(event.target.id);

    if(event.target.id == 'SSG') {
        teamDetail.firstElementChild.textContent = "";       
        var h2 = document.createElement("h2");
        var img = document.createElement("img");
        h2.id = "title";
        h2.classList.add('slide-in-blurred-top');
        img.classList.add('rotate-in-ver','logo');
        img.src = "img/SSG.png";
        img.width = '400';
        teamDetail.firstElementChild.appendChild(h2);
        teamDetail.firstElementChild.appendChild(img);

        h2.innerHTML = "SSG 렌더스";
        year.innerHTML = "2001년";
        region.innerHTML = "인천광역시";
        win.title = '2007, 2008, 2010, 2018, 2022';
        win.innerHTML = '5회';
        owner.innerHTML = "정용진";
        ceo.innerHTML = "민경삼";
        leader.innerHTML = "김성용";
        director.innerHTML = "김원형"
        address.innerHTML = "인천광역시 미추홀구 매소홀로 618 인천SSG랜더스필드";
        page.href = "http://www.ssglanders.com";
        page.innerHTML = "www.ssglanders.com";
        

        teamDetail.classList.add('active');
    } else if(event.target.id == 'KIWOOM') {
        teamDetail.firstElementChild.textContent = "";
        var img = document.createElement("img");
        var h2 = document.createElement("h2");
        h2.id = "title";
        h2.classList.add('slide-in-blurred-top');
        img.classList.add('rotate-in-ver','logo');
        img.src = "img/KIWOOM.png";
        img.width = '400';
        teamDetail.firstElementChild.appendChild(h2);
        teamDetail.firstElementChild.appendChild(img);

        h2.innerHTML = "키움 히어로즈";
        year.innerHTML = "2008년";
        region.innerHTML = "서울특별시";
        win.innerHTML = "-";
        owner.innerHTML = "박세영";
        ceo.innerHTML = "위재민";
        leader.innerHTML = "고형욱";
        director.innerHTML = "홍원기";
        address.innerHTML = "서울특별시 구로구 경인로 430 고척스카이돔";
        page.href = "http://www.heroesbaseball.co.kr";
        page.innerHTML = "www.heroesbaseball.co.kr";

        teamDetail.classList.add('active');
    } else if(event.target.id == 'LG') {
        teamDetail.firstElementChild.textContent = "";
        var img = document.createElement("img");
        var h2 = document.createElement("h2");
        h2.id = "title";
        h2.classList.add('slide-in-blurred-top');
        img.classList.add('rotate-in-ver','logo');
        img.src = "img/LG.png";
        img.width = '400';
        teamDetail.firstElementChild.appendChild(h2);
        teamDetail.firstElementChild.appendChild(img);
        h2.innerHTML = "LG 트윈스";
        year.innerHTML = "1990년";
        region.innerHTML = "서울특별시";
        win.title = '1990, 1994';
        win.innerHTML = "2회";
        owner.innerHTML = "구광모";
        ceo.innerHTML = "김인석";
        leader.innerHTML = "차명석";
        director.innerHTML = "염경엽";
        address.innerHTML = "서울특별시 송파구 올림픽로 25 잠실야구장";
        page.href = "http://www.lgtwins.com";
        page.innerHTML = "www.lgtwins.com";

        teamDetail.classList.add('active');
    } else if(event.target.id == 'KT') {
        teamDetail.firstElementChild.textContent = "";
        var img = document.createElement("img");
        var h2 = document.createElement("h2");
        h2.id = "title";
        h2.classList.add('slide-in-blurred-top');
        img.classList.add('rotate-in-ver','logo');
        img.src = "img/KT.png";
        img.width = '400';
        teamDetail.firstElementChild.appendChild(h2);
        teamDetail.firstElementChild.appendChild(img);
        h2.innerHTML = "KT 위즈";
        year.innerHTML = "2013";
        region.innerHTML = "수원시";
        win.title = '2021';
        win.innerHTML = "1회";
        owner.innerHTML = "구현모";
        ceo.innerHTML = "신현옥";
        leader.innerHTML = "나도현";
        director.innerHTML = "이강철"
        address.innerHTML = "경기도 수원시 장안구 경수대로 893 수원 케이티 위즈 파크";
        page.href = "http://www.ktwiz.co.kr";
        page.innerHTML = "www.ktwiz.co.kr";

        teamDetail.classList.add('active');
    } else if(event.target.id == 'KIA') {
        teamDetail.firstElementChild.textContent = "";
        var img = document.createElement("img");
        var h2 = document.createElement("h2");
        h2.id = "title";
        h2.classList.add('slide-in-blurred-top');
        img.classList.add('rotate-in-ver','logo');
        img.src = "img/KIA.png";
        img.width = '400';
        teamDetail.firstElementChild.appendChild(h2);
        teamDetail.firstElementChild.appendChild(img);
        h2.innerHTML = "KIA 타이거즈";
        year.innerHTML = "2001년";
        region.innerHTML = "광주광역시";
        win.title = '1983, 1986~1989, 1991, 1993, 1996, 1997, 2009, 2017'
        win.innerHTML = "11회";
        owner.innerHTML = "송호성";
        ceo.innerHTML = "최준영";
        leader.innerHTML = "심재학";
        director.innerHTML = "김종국";
        address.innerHTML = "광주광역시 북구 서림로 10 광주 기아 챔피언스 필드";
        page.href = "http://www.tigers.co.kr";
        page.innerHTML = "www.tigers.co.kr";

        teamDetail.classList.add('active');
    } else if(event.target.id == 'NC') {
        teamDetail.firstElementChild.textContent = "";
        var img = document.createElement("img");
        var h2 = document.createElement("h2");
        h2.id = "title";
        h2.classList.add('slide-in-blurred-top');
        img.classList.add('rotate-in-ver','logo');
        img.src = "img/NC.png";
        img.width = '400';
        teamDetail.firstElementChild.appendChild(h2);
        teamDetail.firstElementChild.appendChild(img);
        h2.innerHTML = "NC 다이노스";
        year.innerHTML = "2001년";
        region.innerHTML = "창원시";
        win.title = '2020';
        win.innerHTML = "1회";
        owner.innerHTML = "김택진";
        ceo.innerHTML = "이진만";
        leader.innerHTML = "임선남";
        director.innerHTML = "강인권"
        address.innerHTML = "경상남도 창원시 마산회원구 삼호로 63 창원NC파크";
        page.href = "http://www.ncdinos.com";
        page.innerHTML = "www.ncdinos.com";

        teamDetail.classList.add('active');
    } else if(event.target.id == 'SS') {
        teamDetail.firstElementChild.textContent = "";
        var img = document.createElement("img");
        var h2 = document.createElement("h2");
        h2.id = "title";
        h2.classList.add('slide-in-blurred-top');
        img.classList.add('rotate-in-ver','logo');
        img.src = "img/SS.png";
        img.width = '400';
        teamDetail.firstElementChild.appendChild(h2);
        teamDetail.firstElementChild.appendChild(img);
        h2.innerHTML = "삼성 라이온즈";
        year.innerHTML = "1982년";
        region.innerHTML = "대구광역시";
        win.title = '1985, 2002, 2005, 2006, 2011~2014';
        win.innerHTML = "8회";
        owner.innerHTML = "유정근";
        ceo.innerHTML = "유정근";
        leader.innerHTML = "홍준학";
        director.innerHTML = "박진만"
        address.innerHTML = "대구광역시 수성구 야구전설로 1 대구삼성라이온즈파크";
        page.href = "http://www.samsunglions.com";
        page.innerHTML = "www.samsunglions.com";

        teamDetail.classList.add('active');
    } else if(event.target.id == 'LOTTE') {
        teamDetail.firstElementChild.textContent = "";
        var img = document.createElement("img");
        var h2 = document.createElement("h2");
        h2.id = "title";
        h2.classList.add('slide-in-blurred-top');
        img.classList.add('rotate-in-ver','logo');
        img.src = "img/LOTTE.png";
        img.width = '400';
        teamDetail.firstElementChild.appendChild(h2);
        teamDetail.firstElementChild.appendChild(img);
        h2.innerHTML = "롯데 자이언츠";
        year.innerHTML = "1982년";
        region.innerHTML = "부산광역시";
        win.title = "1984, 1992";
        win.innerHTML = "2회";
        owner.innerHTML = "신동빈";
        ceo.innerHTML = "이강훈";
        leader.innerHTML = "성민규";
        director.innerHTML = "래리 서튼"
        address.innerHTML = "부산광역시 동래구 사직로 45 사직야구장";
        page.href = "http://www.giantsclub.com";
        page.innerHTML = "www.giantsclub.com ";

        teamDetail.classList.add('active');
    } else if(event.target.id == 'OB') {
        teamDetail.firstElementChild.textContent = "";
        var img = document.createElement("img");
        var h2 = document.createElement("h2");
        h2.id = "title";
        h2.classList.add('slide-in-blurred-top');
        img.classList.add('rotate-in-ver','logo');
        img.src = "img/OB.png";
        img.width = '400';
        teamDetail.firstElementChild.appendChild(h2);
        teamDetail.firstElementChild.appendChild(img);
        h2.innerHTML = "두산 베어스";
        year.innerHTML = "1982년";
        region.innerHTML = "서울특별시";
        win.title = "1982, 1995, 2001, 2015, 2016, 2019";
        win.innerHTML = "6회";
        owner.innerHTML = "박정원";
        ceo.innerHTML = "전풍";
        leader.innerHTML = "김태룡";
        director.innerHTML = "이승엽";
        address.innerHTML = "서울특별시 송파구 올림픽로 25 잠실야구장";
        page.href = "http://www.doosanbears.com";
        page.innerHTML = "www.doosanbears.com";

        teamDetail.classList.add('active');
    } else if(event.target.id == 'HH') {
        teamDetail.firstElementChild.textContent = "";
        var img = document.createElement("img");
        var h2 = document.createElement("h2");
        h2.id = "title";
        h2.classList.add('slide-in-blurred-top');
        img.classList.add('rotate-in-ver','logo');
        img.src = "img/HH.png";
        img.width = '400';
        teamDetail.firstElementChild.appendChild(h2);
        teamDetail.firstElementChild.appendChild(img);
        h2.innerHTML = "한화 이글스";
        year.innerHTML = "1986년";
        region.innerHTML = "대전광역시";
        win.title = "1999";
        win.innerHTML = "1회";
        owner.innerHTML = "김승연";
        ceo.innerHTML = "박찬혁";
        leader.innerHTML = "손혁";
        director.innerHTML = "최원호";
        address.innerHTML = "대전광역시 중구 대종로 373 한화생명 이글스파크";
        page.href = "http://www.hanwhaeagles.co.kr";
        page.innerHTML = "www.hanwhaeagles.co.kr";

        teamDetail.classList.add('active');
    }
}

address.onclick = function() {
    if(event.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML=='SSG 렌더스'){
        window.open('TeamMap/SSG_map.html', 'minimap', 'width=640px, height= 360px, left=500px, top=20px');
    } else if(event.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML=='키움 히어로즈') {
        window.open('TeamMap/KIWOOM_map.html', 'minimap', 'width=640px, height= 360px, left=500px, top=20px');
    } else if(event.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML=='LG 트윈스') {
        window.open('TeamMap/LG_map.html', 'minimap', 'width=640px, height= 360px, left=500px, top=20px');
    } else if(event.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML=='KT 위즈') {
        window.open('TeamMap/KT_map.html', 'minimap', 'width=640px, height= 360px, left=500px, top=20px');
    } else if(event.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML=='KIA 타이거즈') {
        window.open('TeamMap/KIA_map.html', 'minimap', 'width=640px, height= 360px, left=500px, top=20px');
    } else if(event.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML=='NC 다이노스') {
        window.open('TeamMap/NC_map.html', 'minimap', 'width=640px, height= 360px, left=500px, top=20px');
    } else if(event.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML=='삼성 라이온즈') {
        window.open('TeamMap/SS_map.html', 'minimap', 'width=640px, height= 360px, left=500px, top=20px');
    } else if(event.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML=='롯데 자이언트') {
        window.open('TeamMap/LOTTE_map.html', 'minimap', 'width=640px, height= 360px, left=500px, top=20px');
    } else if(event.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML=='두산 베어스') {
        window.open('TeamMap/OB_map.html', 'minimap', 'width=640px, height= 360px, left=500px, top=20px');
    } else if(event.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML=='한화 이글스') {
        window.open('TeamMap/HH_map.html', 'minimap', 'width=640px, height= 360px, left=500px, top=20px');
    } 
}

$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();   
  
  });

