fetch('http://api.openweathermap.org/data/2.5/weather?id=686762&appid=72699dd5a960b24104883da823ef7510')
    .then(function (resp) {return resp.json()})
    .then(function(data){
        var day = new Date();
        console.log(data);
        var month=new Array(12);
        month[0]="January";
        month[1]="February";
        month[2]="March";
        month[3]="April";
        month[4]="May";
        month[5]="June";
        month[6]="July";
        month[7]="August";
        month[8]="September";
        month[9]="October";
        month[10]="November";
        month[11]="December";
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.date').textContent = day.getDate() + ' ' + month[day.getMonth()];
        document.querySelector('.weatherCondition').textContent = data.weather[0]['description'];
        document.querySelector('.weatherIcon').innerHTML = '<img src="https://openweathermap.org/img/wn/'+data.weather[0]['icon']+'@4x.png">';


    })
    .catch(function() {
    });