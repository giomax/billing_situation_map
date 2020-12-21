var base_url = "https://billing.com.ge/api/";
//var base_url = "http://82.211.132.146:1881/api/";
var storage = window.localStorage;
var datatable;
var app = {
	debug:function(text){
		//console.log(text);
		//$('.debug').html(text);
	},
    initialize: function() {
        this.bindEvents();
    },    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },    
    onDeviceReady: function() {
        app.receivedEvent('deviceready');		
		app.functions();
    },
	page:function(page){
		storage.setItem('menu',page);
		$('.app').html();	
			$.ajax({
					  method: "POST",
					  url: base_url+'auth/load_sit_map',
					
					}).done(function(data){							
							$('.app').append("<div class='gis_map'></div>");
							$('.gis_map').html(data);
					});
	},
    receivedEvent: function(id) {		
		var networkState = navigator.connection.type;
		/*
		app.debug("-------------- NETWORK");
		app.debug(networkState);
		app.debug("-------------- NETWORK");
		
		app.debug("-------------- TOKEN");
		app.debug(storage);
		app.debug("-------------- TOKEN");
		*/
		app.page('map');	
		
    },
	functions:function(){
		$(document).on('click','.hidePopup',function(){
			if($('#addTemplatesDiv').is(':visible')){
				$('#addTemplatesDiv').hide();
				$(this).text('გამოჩენა');
			}else{
				$(this).text('დამალვა');
				$('#addTemplatesDiv').show();
			}
		});
	}
};