$(document).ready(function(){
	expInitialize();
	chinaInitialize();
	oneInitialize();
	usaMulInitialize();
	eventInitialize();
});

function expInitialize(){
	var content = "";

	for (var i = 0; i < experienceList.length; i ++){

		var exp = experienceList[i];

		if (i % 2 == 0){
			
			if (exp.imageSrc.length == 0){
				content += '<div class="row experience">' + 
							'<div class="col-md-9">' + 
							'<h2 class="experience-heading">' + exp.jobTitle + '</h2>' +
							'<p class="text-right">' + exp.duration + '</p>' + 
							'<ul class="list-group">';

				for (var d in exp.discription){
					content += '<li><p class="lead text-justify">' + exp.discription[d] + '</p></li>';
				}

				for(var r in exp.reference){
					content += '<li><p class="lead">Reference: </p><a href="' + exp.reference[r] + '" target="_blank">' + 
					exp.reference[r] + '</a></li>';
				}

				content += '</ul>';

			}else{
				content += '<div class="row experience">' + 
							'<div class="col-md-7">' + 
							'<h2 class="experience-heading">' + exp.jobTitle + '</h2>' +
							'<p class="text-right">' + exp.duration + '</p>' + 
							'<ul class="list-group">';

				for (var d in exp.discription){
					content += '<li><p class="lead text-justify">' + exp.discription[d] + '</p></li>';
				}

				for(var r in exp.reference){
					content += '<li><p class="lead">Reference: </p><a href="' + exp.reference[r] + '" target="_blank">' + 
					exp.reference[r] + 
					'</a></li>';
				}

				content += '</ul></div>' + 
							'<div class="col-md-5">';

				for(var img in exp.imageSrc){
					content += '<img class="experience-image img-responsive center-block" src="' + exp.imageSrc[img] + 
					'" alt="Generic placeholder image"><hr>';
				}
			}

			if (i != experienceList.length - 1) {
				content += '</div></div><hr class="experience-divider">';
			} 
		}else{
			
			if (exp.imageSrc.length == 0) {
				content += '<div class="row experience">' +  
							'<div class="col-md-9  col-md-push-3">' + 
							'<h2 class="experience-heading">' + exp.jobTitle + '</h2>' +
							'<p class="text-right">' + exp.duration + '</p>' + 
							'<ul class="list-group">';

				for (var d in exp.discription){
					content += '<li><p class="lead text-justify">' + exp.discription[d] + '</p></li>';
				}

				for(var r in exp.reference){
					content += '<li><p class="lead">Reference: </p><a href="' + exp.reference[r] + '" target="_blank">' + 
					exp.reference[r] + '</a></li>';
				}
			}else{
				content += '<div class="row experience">' + 
							'<div class="col-md-5">';
				for(var img in exp.imageSrc){
					content += '<img class="experience-image img-responsive center-block" src="' + exp.imageSrc[img] + 
					'" alt="Generic placeholder image"><hr>';
				}

				content += '</div>' + 
							'<div class="col-md-7">' + 
							'<h2 class="experience-heading">' + exp.jobTitle + '</h2>' +
							'<p class="text-right">' + exp.duration + '</p>' + 
							'<ul class="list-group">';

				for (var d in exp.discription){
					content += '<li><p class="lead text-justify">' + exp.discription[d] + '</p></li>';
				}

				for(var r in exp.reference){
					content += '<li><p class="lead">Reference: </p><a href="' + exp.reference[r] + '" target="_blank">' + 
					exp.reference[r] + '</a></li>';
				}
			}

			if (i != experienceList.length - 1) {
				content += '</ul></div></div><hr class="experience-divider">';
			}
		}

		content += '</div></div>';
	}



	document.getElementById("experience-list").innerHTML = content;
}

function chinaInitialize(){
	var chinaList = "";
	var chinaDetail = "";

	for (var i = 1; i <= tripChina.length; i++) {
		var province = tripChina[i - 1];

		chinaList += '<li><a href="#' + province.id + '">' + province.list + '</a></li>';
		
		if (i % 2 == 1) {
			chinaDetail += '<div class="row" id="' + province.id + '">' + 
						'<h2><span class="font-italic">#' + i + ': </span>' + province.name + '</h2><hr>' +
						'<div class="col-md-7"><p class="text-justify"><span class="lead">Description: </span>' + 
						province.description + '</p>' + 
						'<p class="lead">Tourist Attractions:</p>' + 
						'<ul>';

			for (var v = 1; v < province.viewpoints.length; v ++){
				if (province.links[v] == "") {
					chinaDetail += '<li>' + province.viewpoints[v] + '</li>';
				}else{
					chinaDetail += '<li><a href="' + province.links[v] + 
						'" target="_blank" class="text-right" data-toggle="popover" data-trigger="focus" title="Image Preview">' + 
						province.viewpoints[v] + '</a></li>';
				}
			}

			chinaDetail += '</ul></div>' + 
							'<div class="col-md-5">' + 
							'<img class="trip-image img-responsive center-block" src="' + 
							province.links[0] + 
							'" alt="Generic placeholder image">' +
							'<a href="' + 
							province.links[0] + 
							'" target="_blank" class="text-right">Full Picture -- ' + 
							province.viewpoints[0] + 
							'</a></div></div>' + 
							'<br><p class="pull-right"><a href="#trip-detail-china">Back to List</a></p>' + 
							'<br><hr class="profile_divider">';

		}else{
			chinaDetail += '<div class="row" id="' + province.id + '">' + 
							'<h2><span class="font-italic">#' + i + ': </span>' + province.name + '</h2><hr>' + 
							'<div class="col-md-5">' + 
								'<img class="trip-image img-responsive center-block" src="' + 
								province.links[0] + 
								'" alt="Generic placeholder image">' +
								'<a href="' + 
								province.links[0] + 
								'" target="_blank" class="text-right">Full Picture -- ' + 
								province.viewpoints[0] + 
								'</a></div>' + 
								'<div class="col-md-7"><p class="text-justify"><span class="lead">Description: </span>' + 
								province.description + '</p>' + 
								'<p class="lead">Tourist Attractions:</p>' + 
								'<ul>';

			for (var v = 1; v < province.viewpoints.length; v ++){
				if (province.links[v] == "") {
					chinaDetail += '<li>' + province.viewpoints[v] + '</li>';
				}else{
					chinaDetail += '<li><a href="' + province.links[v] + 
						'" target="_blank" class="text-right" data-toggle="popover" data-trigger="focus" title="Image Preview">' + 
						province.viewpoints[v] + '</a></li>';
				}
			}

			chinaDetail += '</ul><br><p class="pull-right"><a href="#trip-detail-china">Back to List</a></p></div></div>' + 
							'<hr class="profile_divider">';
		} 

	}

	document.getElementById("prov-list").innerHTML = chinaList;
	document.getElementById("china-detail").innerHTML = chinaDetail;
}

function oneInitialize(){
	
	var oneList = "";
	var oneContent = "";

	for (var i = 0; i < oneDay.length; i ++) {
		var trip = oneDay[i];

		//alert(i + oneDay.length);
		oneList += '<li><a href="#' + trip.id + '">' + trip.title + '</a></li>';

		oneContent += '<div class="row" id="' + trip.id + '">';

		if (i % 2 == 0) {
			oneContent += '<div class="col-md-5">' + 
							'<img class="trip-image img-responsive center-block" src="' + 
							trip.coverImg[0] + 
							'" alt="Generic placeholder image"><a href="' + 
							trip.coverImg[0] + 
							'" target="_blank" class="text-right">Full Picture -- ' + 
							trip.coverImg[1] + 
							'</a></div>';

			oneContent += '<div class="col-md-7">' + 
							'<p><span class="lead">The ' + trip.title + ' </span>-- ' + trip.time + '</p>' + 
							'<ul>';

			for (var r = 0; r < trip.rows.length; r++) {
				row = trip.rows[r];
				if (row.link == "") {
					oneContent += '<li>' + row.name + '</li>';
				} else {
					oneContent += '<li><a href="' + row.link + 
							'" target="_blank" class="text-right" data-toggle="popover" data-trigger="focus" title="Image Preview">' + 
							row.name + 
							'</a></li>';
				}

			}

			oneContent += '</ul></div>';
		} else {
			oneContent += '<div class="col-md-7">' + 
							'<p><span class="lead">The ' + trip.title + ' </span>-- ' + trip.time + '</p>' + 
							'<ul>';

			for (var r = 0; r < trip.rows.length; r++) {
				row = trip.rows[r];
				if (row.link == "") {
					oneContent += '<li>' + row.name + '</li>';
				} else {
					oneContent += '<li><a href="' + row.link + 
							'" target="_blank" class="text-right" data-toggle="popover" data-trigger="focus" title="Image Preview">' + 
							row.name + 
							'</a></li>';
				}

			}

			oneContent += '</ul></div>';

			oneContent += '<div class="col-md-5">' + 
							'<img class="trip-image img-responsive center-block" src="' + 
							trip.coverImg[0] + 
							'" alt="Generic placeholder image"><a href="' + 
							trip.coverImg[0] + 
							'" target="_blank" class="text-right">Full Picture -- ' + 
							trip.coverImg[1] + 
							'</a><hr></div>';
		}

		oneContent += '</div>' + 
						'<p class="pull-right"><a href="#one-day-headline">Back to List</a></p>' + 
						'<hr>';
		//alert(oneList);
	}

	//alert(oneList);
	document.getElementById("one-day-list").innerHTML = oneList;
	document.getElementById("one-day-detail").innerHTML = oneContent;
}

function usaMulInitialize(){
	var mulList = "";
	var mulContent = "";

	for (var i = 1; i <= multipleDay.length; i++) {
		var trip = multipleDay[i - 1];

		mulList += '<li><a href="#' + trip.id + '">' + trip.list + '</a></li>';

		//title row 
		mulContent += '<div id="' + trip.id + '">' + 
						'<h2><span class="font-italic">#' + i + ': </span>' + trip.title + '</h2>' + 
						'<hr>' + 
						'<div class="row">' + 
							'<div class="col-md-7">' + 
								'<p><span class="lead">Time: </span>' + trip.time + '</p>' + 
								'<p class="text-justify"><span class="lead">Description: </span>' + trip.description + 
									'</p>' + 
							'</div>' + 
							'<div class="col-md-5">' + 
							'<img class="trip-image img-responsive center-block" src="' + trip.titleImg[0] + 
							'" alt="Generic placeholder image">' + 
							'<a href="' + trip.titleImg[0] + '" target="_blank" class="text-right">Full Picture -- ' +
							trip.titleImg[1] + '</a>' + 
							'</div>' + 
						'</div><hr>';

		//sections
		for (var s = 0; s < trip.rows.length; s ++){
			mulContent += '<div class="row">';

			var row = trip.rows[s];

			if (s % 2 == 0) {

				mulContent += '<div class="col-md-5">';

				for (var img in row.coverImg){
					mulContent += '<img class="trip-image img-responsive center-block" src="' + row.coverImg[img][0] + 
	                  				'" alt="Generic placeholder image">' + 
	                  				'<a href="' + row.coverImg[img][0] + '" target="_blank" class="text-right">Full Picture -- ' +
	                  				row.coverImg[img][1] + 
	                  				'</a>' + 
	                  				'<hr>';
				}
                  				 
                mulContent += '</div>';

                mulContent += '<div class="col-md-7">' + 
                				'<p class="lead">' + row.rowTitle + '</p><hr>' + 
                				'<p class="lead">Itinerary and Tourist Attractions:</p>' +  
                				'<ul>';

                for (var t = 0; t < row.details.length; t ++){
                	if (row.details[t].link == "") {
                		mulContent += '<li>' + row.details[t].name + '</li>';
                	} else {
                		mulContent += '<li><a href="' + row.details[t].link + 
                					'" target="_blank" class="text-right" data-toggle="popover" data-trigger="focus" title="Image Preview">' +
                					row.details[t].name + 
                					'</a></li>';	
                	}
                }

                mulContent += '</ul>' + 
                				'</div>';

			} else {

				mulContent += '<div class="col-md-7">' + 
                				'<p class="lead">' + row.rowTitle + '</p><hr>' +
                				'<p class="lead">Itinerary and Tourist Attractions:</p>' +  
                				'<ul>';

                for (var t = 0; t < row.details.length; t ++){
                	if (row.details[t].link == "") {
                		mulContent += '<li>' + row.details[t].name + '</li>';
                	} else {
                		mulContent += '<li><a href="' + row.details[t].link + 
                					'" target="_blank" class="text-right" data-toggle="popover" data-trigger="focus" title="Image Preview">' +
                					row.details[t].name + 
                					'</a></li>';	
                	}
                }


                mulContent += '</ul>' + 
                				'</div>';

                mulContent += '<div class="col-md-5">'; 
                
                for (var img in row.coverImg){
					mulContent += '<img class="trip-image img-responsive center-block" src="' + row.coverImg[img][0] + 
	                  				'" alt="Generic placeholder image">' + 
	                  				'<a href="' + row.coverImg[img][0] + '" target="_blank" class="text-right">Full Picture -- ' +
	                  				row.coverImg[img][1] + 
	                  				'</a>' + 
	                  				'<hr>';
				}
                
                mulContent += '</div>';
			}
			
			if (s == trip.rows.length - 1) {
				mulContent += '</div>';
			} else {
				mulContent += '</div><hr>';
			}

			//alert(mulContent);
		}

		mulContent += '</div><p class="pull-right"><a href="#trip-detail-usa">Back to List</a></p><hr class="profile_divider">';
	}

	document.getElementById("multip-days").innerHTML = mulList;
	document.getElementById("multip-days-detail").innerHTML = mulContent;
}

function eventInitialize(){

	var eveList = "";
	var eveContent = "";

	for (var i = 1; i <= events.length; i++) {
		var eve = events[i - 1];

		eveList += '<li><a href="#' + eve.id + '">' + eve.list + '</a></li>';

		eveContent += '<div id="' + eve.id + '" class="row">' + 
						'<h2><span class="font-italic">#' + i + ': </span>' + eve.title + '</h2>' + 
						'<hr>' + 
						'<div class="row">';

		if (i % 2 == 1) {
			eveContent += '<div class="col-md-7">' + 
							'<p><span class="lead">Time: </span>' + eve.time + '</p>' +
							'<p class="text-justify"><span class="lead">Description: </span>' + eve.description + '</p>' + 
							'<ul>';

			for (var r in eve.rows){

				if (eve.rows[r].link != "") {
					eveContent += '<li><a href="' + eve.rows[r].link + 
					'" target="_blank" class="text-right" data-toggle="popover" data-trigger="focus" title="Image Preview">' + 
					eve.rows[r].name + '</a></li>';
				} else {
					eveContent += '<li>' + eve.rows[r].name + '</li>';
				}

			}

			eveContent += '</ul></div>';

			eveContent += '<div class="col-md-5">' + 
							'<img class="trip-image img-responsive center-block" src="' + 
							eve.coverImg[0] + 
							'" alt="Generic placeholder image"><a href="' + 
							eve.coverImg[0] + 
							'" target="_blank" class="text-right">Full Picture -- ' + 
							eve.coverImg[1] + 
							'</a><hr></div>';
		} else {
			eveContent += '<div class="col-md-5">' + 
							'<img class="trip-image img-responsive center-block" src="' + 
							eve.coverImg[0] + 
							'" alt="Generic placeholder image"><a href="' + 
							eve.coverImg[0] + 
							'" target="_blank" class="text-right">Full Picture -- ' + 
							eve.coverImg[1] + 
							'</a><hr></div>';

			eveContent += '<div class="col-md-7">' + 
							'<p><span class="lead">Time: </span>' + eve.time + '</p>' +
							'<p class="text-justify"><span class="lead">Description: </span>' + eve.description + '</p>' + 
							'<ul>';

			for (var r in eve.rows){

				if (eve.rows[r].link != "") {
					eveContent += '<li><a href="' + eve.rows[r].link + 
					'" target="_blank" class="text-right" data-toggle="popover" data-trigger="focus" title="Image Preview">' + 
					eve.rows[r].name + '</a></li>';
				} else {
					eveContent += '<li>' + eve.rows[r].name + '</li>';
				}
				
			}

			eveContent += '</ul></div>';
		}

		eveContent += '</div>' + 
						'<p class="pull-right"><a href="#trip-detail-usa">Back to List</a></p><hr>' + 
						'</div>';
	}

	document.getElementById("event").innerHTML = eveList;
	document.getElementById("event-detail").innerHTML = eveContent;
}
