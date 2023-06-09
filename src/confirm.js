
window.addEventListener('load', () =>{
    const params = (new URL(document.location)).searchParams;
    const calendar = params.get('calendarTest');
    //const name = params.get("name");
    //const select = (localStorage.getItem("testselectname")) ? localStorage.getItem("testselectname") : null;
    const barber = params.get("testselectname");
    const service = params.get("testselectservice");
    var test ="";
    if (barber == "MATIAS PEREIRA") {
        test = 'barber2.bd0f97b4.png';
    } else if (barber == "SIDD DULAL") {
        test = 'barber1.9b283311.png';
    } else if (barber == "SID SUBRA") {
        test = 'barber3.7a58b8e6.png';
    } else if (barber == "ABTIN NEGINI") {
        test = 'barber4.258de493.png';
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

