
$(document).ready(function(){
    var iconUrl = "";
   $('#card-data').hide();
    $("#submit-btn").click(function(){
        var city = $("#input-city").val();
        $.ajax({
            type: "POST",
            url: "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=a37cec0467561d22f52c421d0f1c7aa9&units=imperial",
            dataType : "json",
            success: function(result, status, xhr){
                console.log(result);
                $('#card-data').show();
                let cityName=result.name;
                let description = result.weather[0].main;
                let temp=result.main.temp;
                let countyName = result.sys.country;
                let icon = result.weather[0].icon;
                let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                console.log(icon);
                $("#img-icon").attr('src',iconUrl);
                $('#city-name').text(cityName);
                $('#country-name').text(countyName);
                
                $('#div-desc').text(description);
                $('#spn-temp').text(temp);
            },
            error: function(xhr, status, error){
                //console.log(error);
                alert(error + "Try Different City");
            }
        });
    });
  
});


