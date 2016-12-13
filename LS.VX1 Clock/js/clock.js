/*
   _,.----.              _,.---._      _,.----.  ,--.-.,-.            ,--.-,  ,-,--.
 .' .' -   \   _.-.    ,-.' , -  `.  .' .' -   \/==/- |\  \          |==' -|,-.'-  _\
/==/  ,  ,-' .-,.'|   /==/_,  ,  - \/==/  ,  ,-'|==|_ `/_ /          |==|- /==/_ ,_.'
|==|-   |  .|==|, |  |==|   .=.     |==|-   |  .|==| ,   /         __|==|, \==\  \
|==|_   `-' \==|- |  |==|_ : ;=:  - |==|_   `-' \==|-  .|       ,--.-'\=|- |\==\ -\
|==|   _  , |==|, |  |==| , '='     |==|   _  , |==| _ , \      |==|- |=/ ,|_\==\ ,\
\==\.       /==|- `-._\==\ -    ,_ /\==\.       /==/  '\  | .=. |==|. /=| -/==/\/ _ |
 `-.`.___.-'/==/ - , ,/'.='. -   .'  `-.`.___.-'\==\ /\=\.':=; :\==\, `-' /\==\ - , /
            `--`-----'   `--`--''                `--`       `=`  `--`----'  `--`---'
** Creator: JunesiPhone
** Website: http://junesiphone.com/libraries
** Javascript clocks the easy way.
** Usage clock({
          twentyfour : false,
          padzero : false,
          refresh : 5000,
          success: function(clock){
            document.getElementById('time').innerHTML = clock.hour() + ':' + clock.minute();
          }
        });
*/
function clock(options) {
    'use strict';
    var getTimes = function () {
            var d = new Date(),
                funcs = {
                    numbers : ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six ', 'twenty seven', 'twenty eight', 'twenty nine', 'thirty'],
                    hour: function () {
                        var hour = (options.twentyfour === true) ? d.getHours() : (d.getHours() + 11) % 12 + 1;
                        hour = (options.padzero === true) ? (hour < 10 ? "0" + hour : "" + hour) : hour;
                        return hour;
                    },
                    rawhour: function () {
                        return d.getHours();
                    },
                    minute: function () {
                        return (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
                    },
                    rawminute: function () {
                        return d.getMinutes();
                    },
                    am: function () {
                        if (options.twentyfour === true) {
                            return ' ';
                        }
                        return (d.getHours() > 11) ? "pm" : "am";
                    },
                    date: function () {
                        return d.getDate();
                    },
                    datepadded: function () {
                        return (d.getDate() < 10) ? "0" + d.getDate() : d.getDate();
                    },
                    day: function () {
                        return d.getDay();
                    },
                    month: function () {
                        return d.getMonth();
                    },
                    monthnum: function () {
                        return d.getMonth() + 1;
                    },
                    year: function () {
                        return d.getFullYear();
                    },
                    hourtext: function () {
                        var hourtxt = (options.twentyfour === true) ? ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four"] : ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
                        return hourtxt[this.rawhour()];
                    },
                    minuteonetext: function () {
                        var minuteone = ["o' clock", "o' one", "o' two", "o' three", "o' four", "o' five", "o' six", "o' seven", "o' eight", "o' nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
                        if (minuteone[this.rawminute()] !== undefined) {
                            return minuteone[this.rawminute()];
                        }
                        return "";
                    },
                    minutetwotext: function () {
                        var minutetwo = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", ""];
                        if (minutetwo[this.rawminute()] !== undefined) {
                            return minutetwo[this.rawminute()];
                        }
                        return "";
                    },
                    daytext: function () {
                        var textdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        return textdays[this.day()];
                    },
                    sdaytext: function () {
                        var stextdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                        return stextdays[this.day()];
                    },
                    sdaytextmanual: function (day) {
                        var stextdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                        return stextdays[day];
                    },
                    monthtext: function () {
                        var textmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        return textmonth[this.month()];
                    },
                    smonthtext: function () {
                        var textmonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        return textmonth[this.month()];
                    },
                    datetext: function () {
                        var textdate = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eightheenth", "Nineteenth", "Twentyith", "TwentyFirst", "TwentySecond", "TwentyThird", 'TwentyFourth', "TwentyFifth", "TwentySixth", "TwentySeventh", "TwentyEight", "TwentyNinth", "Thirtyith", "ThirtyFirst"];
                        return textdate[this.date() - 1];
                    },
                    nth: function (d) {
                        if (d > 3 && d < 21) {
                            return 'th';
                        }
                        switch (d % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                        }
                    },
                    tod: function () {
                        var rhr = this.rawhour();
                        if (rhr === 12) {
                            return 'Lunch Time';
                        }
                        if (rhr === 0) {
                            return "It's Midnight";
                        }
                        if (rhr > 0 && rhr < 12) {
                            return 'Good Morning';
                        }
                        if (rhr > 12 && rhr < 17) {
                            return 'Good Afternoon';
                        }
                        if (rhr > 18 && rhr < 24) {
                            return 'Good Night';
                        }
                    },
                    dateplus: function () {
                        return this.date() + this.nth(Number(this.date()));
                    },
                    isPlural: function (n, s) {
                        if (n > 1) { s += 's'; }
                        return s;
                    },
                    timeStrPlus: function (set) {
                        var min = d.getMinutes(),
                            hr = (options.twentyfour === true) ? d.getHours() : (d.getHours() + 11) % 12 + 1, //12/24hr
                            con = ' past ',
                            oclock = '  ';

                        if (min >= 30) {
                            min = 60 - min;
                            con = ' to ';
                            hr += 1;
                        }
                        if (min < 1 || min > 59) {
                            oclock = " o'clock ";
                        }
                        if (set === 'hr') {
                            if (min !== 0) {
                                return con + this.numbers[hr - 1] + oclock;
                            }
                            return '';
                        }
                        if (set === 'min') {
                            if (min === 0) {
                                return this.numbers[hr - 1] + oclock;
                            }
                            return this.numbers[min - 1] + " " + this.isPlural(min, 'minute');
                        }

                    },
                };
            options.success(funcs);
            setTimeout(function () {
                getTimes();
            }, options.refresh);
        };
    getTimes();
}