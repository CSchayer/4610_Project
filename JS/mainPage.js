/**
 * Created by chrisschayer on 11/15/17.
 */
$(document).ready(function(){

    $("#flight-form-submit").submit(function (event) {

        event.preventDefault();
        // var data = options selected
        var startTime = $('#start').val();
        var endTime = $('#end').val();
        var locations=$('#cities').val();
        var precip = $('#rain-percent').val();

        $.ajax({
            url: '/forecastServlet/forecast',
            method: 'GET',
            data: {
                //locations:locations,
                startTime:String(startTime),
                endTime:String(endTime),
                percent:String(precip)
            },
            dataType:'multipart/form-data',
            success: function (results) {
                if (results != null && results != "") {

                    console.log(results);

                }
                else {
                    alert("Some exception has occured please try again.");
                }
            }
        });
    });

    /*$("#FS").click(function(e){
        e.preventDefault();
        $("#FS").addClass('active')
    })

    $("#VerFlight").click(function(e){
        e.preventDefault();
        $("#FS").addClass('active')
    })*/

    $(".contentBar").click(function(e){
        e.preventDefault();
        $('.mainContent').each(function(i, obj) {
            $(obj).hide();
        });
        var link = $(this);
        if ($(this).is("#FS")){
            $("#mapWrapper").show();
        }

    });


    $('#cities').multiselect({nonSelectedText:"All"});
   map = new GMaps({
        div:"#map",
        lat:30.9843,
        lng:-91.9623,
        width:'860px',
        height:'550px',
        zoom:12,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false,
        resize:function(e){

       }

    });
    
    $('#mapWrapper').hide();
    //$("#FAA").hide();
    //$("#APRS").hide();
});
var map;
