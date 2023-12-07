var Body = {
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
        
    },
    setTextColor: function (color) {
        document.querySelector('body').style.color = color;
    }
}
var Links = {
    setTextColor:function(color) {
        var a_list = document.querySelectorAll('a');
        var i = 0;
        while (i < a_list.length) {
            a_list[i].style.color = color;
            i++;
        }
    }
}

function DayNightHandler(self) {
    if (self.value === 'night') {
        Body.setBackgroundColor('white');
        Body.setTextColor('black');
        Links.setTextColor('blue');
        document.querySelector('ol').style.color = 'blue';
        self.value = 'day';
    }
    else {
        Body.setBackgroundColor('black');
        Body.setTextColor('darkgray');
        Links.setTextColor('cyan');
        document.querySelector('ol').style.color = 'cyan';
        self.value = 'night';
    }
}