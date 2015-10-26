/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// MY GOOGLE MAPS FROM MAPBUILDER -- snazzy maps: https://mapbuildr.com/buildr/mmbsb3
google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
        var mapOptions = {
            center: new google.maps.LatLng(51.507273,-0.269545),
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            scaleControl: true,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: false,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: [
				/* LIGHT GREY
				{"featureType": "water","elementType": "geometry.fill","stylers": [{ "color": "#d3d3d3" }]},
				{"featureType": "transit","stylers": [{ "color": "#808080" },{ "visibility": "off" }]},
				{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{ "visibility": "on" },{ "color": "#b3b3b3" }]},
				{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{ "color": "#ffffff" }]},
				{"featureType": "road.local","elementType": "geometry.fill","stylers": [{ "visibility": "on" },{ "color": "#ffffff" },{ "weight": 1.8 }]},
				{"featureType": "road.local","elementType": "geometry.stroke","stylers": [{ "color": "#d7d7d7" }]},
				{"featureType": "poi","elementType": "geometry.fill","stylers": [{ "visibility": "on" },{ "color": "#ebebeb" }]},
				{"featureType": "administrative","elementType": "geometry","stylers": [{ "color": "#a7a7a7" }]},{"featureType": "road.arterial","elementType": "geometry.fill","stylers": [{ "color": "#ffffff" }]},
				{"featureType": "road.arterial","elementType": "geometry.fill","stylers": [{ "color": "#ffffff" }]},
				{"featureType": "landscape","elementType": "geometry.fill","stylers": [{ "visibility": "on" },{ "color": "#efefef" }]},
				{"featureType": "road","elementType": "labels.text.fill","stylers": [{ "color": "#696969" }]},
				{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{ "visibility": "on" },{ "color": "#737373" }]},
				{"featureType": "poi","elementType": "labels.icon","stylers": [{ "visibility": "off" }]},
				{"featureType": "poi","elementType": "labels","stylers": [{ "visibility": "off" }]},
				{"featureType": "road.arterial","elementType": "geometry.stroke","stylers": [{ "color": "#d6d6d6" }]},
				{"featureType": "road","elementType": "labels.icon","stylers": [{ "visibility": "off" }]},
				{ },
				{"featureType": "poi","elementType": "geometry.fill","stylers": [{ "color": "#dadada" }]}
				*/
				{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
				{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
				{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
				{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
				{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
				{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
				{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
				{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
				{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
				{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
				{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
				{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
				{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
			],
        }
        var mapElement = document.getElementById('jkwc');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
			[	'Jack Kontou<br />Wing Chun',
				'108 Churchfield Road,<br/>Acton,<br>W3 6BY',
				'undefined',
				'undefined',
				'undefined',
				51.508412, 
				-0.269422,
				'https://mapbuildr.com/assets/img/markers/solid-pin-yellow.png'
			]
        ];
        for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
			if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
			if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
			if (web.substring(0, 7) != "http://") {
				link = "http://" + web;
			} else {
				link = web;
			}
            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
        }
  google.maps.event.trigger(marker,'click',{});
	function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
		var infoWindowVisible = (function () {
			var currentlyVisible = false;
			return function (visible) {
			if (visible !== undefined) {
			currentlyVisible = visible;
			}
			return currentlyVisible;
			};
		}());
		iw = new google.maps.InfoWindow();
		google.maps.event.addListener(marker, 'click', function() {
			if (infoWindowVisible()) {
			iw.close();
			infoWindowVisible(false);
			} else {
			var html= "<div style='color:#000;background-color:#fff;padding:5px;width:300px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a><a href='"+link+"'' >"+web+"<a></div>";
			iw = new google.maps.InfoWindow({content:html, maxWidth: 305});
			iw.open(map,marker);
			infoWindowVisible(true);
			}
		});
		google.maps.event.addListener(iw, 'closeclick', function () {
			infoWindowVisible(false);
		});
	}
}
