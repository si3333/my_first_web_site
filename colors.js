var Body = {
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
        
    },
    setTextColor: function (color) {
        document.querySelector('body').style.color = color;
    }
}
var Links = {
    setTextColor:function(currentPageLinkColor, color) {
        var aList = document.querySelectorAll('a');
        var i = 0;
        while (i < aList.length) {
            if (aList[i].href == window.location) {
                aList[i].style.color = currentPageLinkColor;
            }
            else {
                aList[i].style.color = color;
            }
            i++;
        }
    }
}

function DayNightHandler(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('white');
        Body.setTextColor('black');
        Links.setTextColor('blue', 'gray');
        document.querySelector('ol').style.color = 'blue';
        self.value = 'day';   
    }
    else {
        Body.setBackgroundColor('black');
        Body.setTextColor('darkgray');
        Links.setTextColor('green', 'cyan');
        document.querySelector('ol').style.color = 'cyan';
        self.value = 'night';
        // 현재 페이지를 담고있는 링크의 색 = 진한 색
    }
}
// + 페이지가 새로고침 돼도, 버튼의 value값이 유지됐으면 좋겠어..
// => window 객체, cookie에 대해 공부하기