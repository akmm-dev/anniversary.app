
let totalYear = localStorage.getItem('totalYear');
let totalMonth = localStorage.getItem('totalMonth');
let totalDay = localStorage.getItem('totalDay');

console.log(totalYear, totalMonth, totalDay,localStorage.getItem('name1'));


if (totalYear !== null && totalMonth !== null && totalDay !== null) {
    document.querySelector('.form-body').style.display = 'none';
    document.querySelector('.main-body').style.display = 'flex';
    
    document.getElementById('year').innerHTML = totalYear;
    document.getElementById('month').innerHTML = totalMonth;
    document.getElementById('day').innerHTML = totalDay;
    document.querySelector('.person1').innerHTML = localStorage.getItem('name1');
    document.querySelector('.person2').innerHTML = localStorage.getItem('name2');

} else{
    document.querySelector('.form-body').style.display = 'flex';
    document.querySelector('.main-body').style.display = 'none';
}

let Button = document.getElementById('btn');

Button.onclick = function () {
    let User = document.getElementById('userName').value.toUpperCase();
    let Partner = document.getElementById('partnerName').value.toUpperCase();
    console.log(User);
    console.log(Partner);
    localStorage.setItem('name1', User);
    localStorage.setItem('name2', Partner);

    let anniDate;
    if ( User !== '' && Partner !== '' && anniDate !== '') {
        let anniDate = new Date(document.getElementById('date').value);
        $('.menu').show();
        let d1 = anniDate.getDate();
        let m1 = anniDate.getMonth() + 1;
        let y1 = anniDate.getFullYear();
        
        let today = new Date();
        let d2 = today.getDate();
        let m2 = today.getMonth() + 1;
        let y2 = today.getFullYear();

        let d3, m3, y3;
        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }
        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = gerDaysInMonth(y1, m1) + d2 - d1;
        }
        if (m3 < 0) {
            m3 = 11;
            y3--;
        }
        localStorage.setItem('totalYear', y3);
        localStorage.setItem('totalMonth', m3);
        localStorage.setItem('totalDay', d3);

        location.reload();
    
    } else {
        alert('Please fill form');
    }
    
    function gerDaysInMonth(year, month) {
        return new Date(year,month,0).getDate();   
    }
    
}
function menu() {
    $('.menuList').slideToggle('fast');
    $('.updateForm').hide();

}
window.onload = function () { 
    $('.menuList').hide();
    $('.updateForm').hide();
}
function hidemenu() {
    $('.menuList').hide('fast');
    $('.updateForm').hide('fast');
}
function deleteAnni() {
    localStorage.removeItem('totalYear');
    localStorage.removeItem('totalMonth');
    localStorage.removeItem('totalDay');
    localStorage.removeItem('name1');
    localStorage.removeItem('name2');
    location.reload();
}
function updateName() {
    $('.updateForm').slideToggle('fast');
}
function update() {
    let User = document.getElementById('updateName').value.toUpperCase();
    let Partner = document.getElementById('updatepartnerName').value.toUpperCase();
    localStorage.setItem('name1', User);
    localStorage.setItem('name2', Partner);
    location.reload();
}