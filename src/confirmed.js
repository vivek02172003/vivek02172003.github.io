window.addEventListener('load', () =>{
    const params = (new URL(document.location)).searchParams;
    const firstName = params.get('firstName');
    const lastName = params.get('lastName');
    document.getElementById('fullName').innerHTML = firstName +" "+lastName;

    const email = params.get('email');
    document.getElementById('email').innerHTML = email;

    const num= Math.floor(Math.random() * 999999999) + 1;

    document.getElementById('bookingNum').innerHTML = num;
    
    let data1 = window.localStorage.getItem('barber');
    document.getElementById('barber').innerHTML = data1;
    
    let data2 = window.localStorage.getItem('service');
    document.getElementById('service').innerHTML = data2;

    let data3 = window.localStorage.getItem('calendar');
    document.getElementById('calendar').innerHTML = data3;

    let data4 = window.localStorage.getItem('time');
    document.getElementById('time').innerHTML = data4;

    let data5 = window.localStorage.getItem('barbertest');
    document.getElementsByName('barbertest')[0].src = data5;
})
