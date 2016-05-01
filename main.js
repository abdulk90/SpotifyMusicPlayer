@(document).on("ready", function(){
	$(.js-track-input)on("click", function (){

	$.ajax({
		url: "htps://api.spotify.com/v1/search?type=track" ,

		success: function(theData) {
			console.log("HELLA WORKED");
			console.log(theData);
			console.log(theData.length);
		}

	})
		error: function(error){
			console.log("ES NO WORKY")
		}


})
})


function onArtistFindSuccess(artistResponse) {
	$(".track-list").empty()
}