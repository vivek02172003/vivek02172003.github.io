
window.addEventListener('load', () =>{
    const params = (new URL(document.location)).searchParams;
    const calendar = params.get('calendarTest');
    //const name = params.get("name");
    //const select = (localStorage.getItem("testselectname")) ? localStorage.getItem("testselectname") : null;
    const barber = params.get("testselectname");
    const service = params.get("testselectservice");
    var test ="";
    if (barber == "MATIAS PEREIRA"){
        test= 'barber2.23340dd5.png'
    } else if (barber == "SIDD DULAL"){ 
        test = '../images/barber1.png'
    } else if(barber == "SID SUBRA"){
        test ='barber3.d9d4c6ef.png'
    } else if (barber =="ABTIN NEGINI"){
        test = 'barber4.d7a28c4b.png'
    }
    const dateArray=calendar.split('T')
    const date = new Date(dateArray[0]);

    document.getElementById('calendar').innerHTML = date.toDateString();
    document.getElementById('time').innerHTML = dateArray[1]
    document.getElementById('barber').innerHTML = barber;
    document.getElementById('service').innerHTML = service;
    document.getElementsByName('barbertest')[0].src = test;

    window.localStorage.setItem("barber", barber);
    window.localStorage.setItem("service", service);
    window.localStorage.setItem("calendar", date.toDateString());
    window.localStorage.setItem("time", dateArray[1]);
    window.localStorage.setItem("time", dateArray[1]);
    window.localStorage.setItem("barbertest", test);

})

