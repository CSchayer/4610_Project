/**
 * Created by chrisschayer on 11/15/17.
 */
$(document).ready(function(){
    $("#flight-form").submit(function (event) {

        event.preventDefault();
        // var data = options selected
        var startTime = $('#start').val();
        var endTime = $('#end').val();
        $.ajax({
            url: 'flight suggester',
            method: get,
            data: {
                locations:''
            },
            success: function (results) {
                if (results != null && results != "") {

                    $('');

                }
                else {
                    alert("Some exception has occured please try again.");
                }
            }
        });
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
        panControl: false
    });
    
    //$('#map').hide();
    //$("#FAA").hide();
    //$("#APRS").hide();
});
var map;
