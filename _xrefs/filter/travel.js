
var map ;
var marker ;
var myLatlng = new google.maps.LatLng( 36.705202, -103.007871 );
var geocoder = new google.maps.Geocoder();
var infowindow = new google.maps.InfoWindow();

function initialize () { 
        var mapOptions = { zoom: 2.5 , center: myLatlng , mapTypeId: google.maps.MapTypeId.ROADMAP } ;
        map = new google.maps.Map( document.getElementById("myMap"), mapOptions );
        marker = new google.maps.Marker( { map: map , position: myLatlng , draggable: true } ) ; 

        geocoder.geocode(
                {'latLng': myLatlng }, function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                                if (results[0]) {
                                        $('#latitude,#longitude').show() ;
                                        $('#address').val(results[0].formatted_address) ;
                                        $('#latitude').val(marker.getPosition().lat()) ;
                                        $('#longitude').val(marker.getPosition().lng()) ;
                                        infowindow.setContent(results[0].formatted_address);
                                        infowindow.open(map, marker);
                                }
                        }
                }
        );
        google.maps.event.addListener ( 
                marker, 'dragend', function() {
                        geocoder.geocode({'latLng': marker.getPosition()}, function(results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                        if (results[0]) {
                                                $('#address').val(results[0].formatted_address);
                                                $('#latitude').val(marker.getPosition().lat());
                                                $('#longitude').val(marker.getPosition().lng());
                                                infowindow.setContent(results[0].formatted_address);
                                                infowindow.open(map, marker);
                                        }
                                }
                        });
                }
        );

}
google.maps.event.addDomListener(window, 'load', initialize);





// Travel process
function OpenTravel () { OpenMap () ;  ClearTravelLocation () ; ActivateTravelBtn();  }
function DefineTravelLocation () { 
        searchLocation = document.getElementById( 'IDlocation' ).value ;
        if ( searchLocation.length > 0 ) { document.getElementById( 'IDaddress' ).innerHTML = searchLocation ; CloseMap () ;   }
}


// Set Radius
function ChooseRadius () { 
        radiusValueKm = document.getElementById( 'IDradiusValue' ).value ;   
        radiusValueMile = document.getElementById( 'IDradiusValue' ).value * 0.621371 ;   
        document.getElementById( 'IDradiusSelected' ).innerHTML = radiusValueMile.toFixed(1)  + " miles" +  " / " +  radiusValueKm + " km" ; 
}
function SetRadius() { 
        document.getElementById( 'IDradiusSelected' ).innerHTML = Math.round( radiusValueKm ) + " km / " + radiusValueMile.toFixed(1) + " mile radius. " ; 
}


// Create a Home Address
function CreateAddress () { OpenMap () ; ActivateCreateAddressBtn(); ClearTravelLocation () ; }
function DefineCreateAddress () { 
        userAddress = document.getElementById( "IDlocation" ).value ;
        if ( userAddress == "" ) { DefineCreateAddress () ;  }
        if ( userAddress.length > 0 ) { document.getElementById( 'IDaddressCreateNew' ).value = userAddress ;   CloseMap () ;  }
}


// Common between Address and Travel
function ClearTravelLocation () {  searchLocation = document.getElementById( 'IDlocation' ).value = "" ; }
function OpenMap () { Show ( 'IDtravel' , 'travelSliderOpen' ) ;  }
function CloseMap () { Show ( 'IDtravel' , 'travelSliderClose' ) ; Hide ( "IDtravelSubmitBtn" ); Hide( "IDcreateAddress");  }

function ActivateTravelBtn() { Show ( "IDtravelSubmitBtn" , "btn btnBig BGgreen" );  }
function ActivateCreateAddressBtn() { Show( "IDcreateAddress" , "btn btnBig BGgreen" );  }

function HideRadius () { Hide( "IDradiusSelected" ) ; Hide( "IDradiusBox0" ) ;  }