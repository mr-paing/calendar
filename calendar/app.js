// Get UI 
var getcurmonth = document.getElementById('curmonth');
var getcuryear = document.getElementById('curyear');
var getcaldays = document.getElementById('caldays');
var getuimonths = document.getElementById('months');
var getuiyears = document.getElementById('years');

var getyearbtn = document.querySelector('.year-btn');

var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var startyear = 2020;
var endyear = 2030;

var month,year;

window.addEventListener('load',function(){
    // console.log('hey I am working');

    var svday = new Date();
    month = svday.getMonth();
    year = svday.getFullYear();
    // console.log(year);

    getcurmonth.textContent = months[month];
    getcuryear.textContent = year;

    inityears();
    initmonths();
    initdays();

});


function initmonths(){

    getuimonths.innerHTML = '';

    // <div class="dropdown-item">Feb</div>
    for(var x = 0; x < months.length; x++){
        var newdiv = document.createElement('div');
        newdiv.classList.add('dropdown-item');
        newdiv.textContent = months[x];
        // console.log(newdiv);

// self_invoking_function
        // newdiv.onclick = (
        //     function(){
        //         // console.log('hey');
        //         return function(){
        //             initdays();
        //         }
        //     }
        // )();


        newdiv.onclick = selectmonth(x);

        getuimonths.appendChild(newdiv);
    }
}

function selectmonth(num){
    // console.log(num);
    var allidx = num;

    return function(){
        month = allidx;
        getcurmonth.textContent = months[month];
        initdays();
    }
}

function inityears(){
    getuiyears.textContent = '';

    for(var x = startyear; x <= endyear; x++){
        // console.log(x);

        // <div class="dropdown-item">2000</div>

        var newdiv = document.createElement('div');
        newdiv.className = "dropdown-item";
        newdiv.textContent = x;

        newdiv.onclick = function(){
            var alldix = x;
            return function(){
                year = alldix;
                getcuryear.innerText = year;
                initdays();
            }
        }();

        getuiyears.appendChild(newdiv);
        // console.log(newdiv);
    }

}


function initdays(){
    getcaldays.innerHTML = "";

    var tmpdays = new Date(year,month,0);
    // console.log(tmpdays); // Sun Mar 31 2024 00:00:00 GMT+0630 (Myanmar Time)

    var getalldays = alldays(year,month);
    // console.log(getalldays);
    var getweekday = tmpdays.getDay();
    // console.log(getweekday);

    // <div id="" class="day">1</div>

    for(var i = 0; i <= getweekday; i++){
        var newdiv = document.createElement('div');
        newdiv.className = "day blank";
        getcaldays.appendChild(newdiv);
    }

    for(var x = 0; x < getalldays; x++){
        // console.log(x);

        var addday = x+1;
        var newdiv = document.createElement('div');
        newdiv.innerText = addday;
        newdiv.classList.add('day');
        // console.log(newdiv);
        getcaldays.appendChild(newdiv);
    }
}

function alldays(year,month){
    // console.log(month,year);

    // console.log(new Date()); // Sat Apr 13 2024 13:10:56 GMT+0630 (Myanmar Time)
    // console.log(new Date(2024,1,10)); // Fri Feb 10 2024 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2024,1,0)); // Wed Jan 31 2024 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2024,0,0)); //Sun Dec 31 2023 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2024,5,0)); // Fri May 31 2024 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2024,1,30)); //Fri Mar 01 2024 00:00:00 GMT+0630 (Myanmar Time)

    var curalldays = new Date(year,month+1,0);
    curalldays = curalldays.getDate();
    return curalldays;
}

getyearbtn.addEventListener('click',function(){
    if(this.lastElementChild.classList.contains('show')){
        this.lastElementChild.classList.remove('show');
    }else{
        this.lastElementChild.classList.add('show');
    }
});
