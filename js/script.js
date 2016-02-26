// console.log($)
// console.log("Hello World")


//+++Sunglight Congress API***//

var url = 'https://congress.api.sunlightfoundation.com/legislators/?apikey=422453b7410942de8ff24bd9d3bb9f1e'

// console.log(inforUrl)

var capitolPromise = $.getJSON(url)

//console.log(capitolPromise)

//===================================================
//*******attempt 1

// var congressToHTML = function(legislatorObject){
// 	var newString = 'div class"congressContainer">' + '<p class="legislatorName">' + legislatorsObject.first_name + legislatorObject.last_name + '</p></div>'
// 	return newString
// }	

//==================================================

//********attempt 2 

var congressToHTML = function(congressObject){	
	console.log(congressObject)
	var infoRef = '<div class = "capitolContainer">' 
	infoRef += '<p class="legislatorsName">' + congressObject.first_name + congressObject.last_name + '</p>'
	infoRef += '<p class="nameTitle">' + congressObject.title + '--' + congressObject.party + '-' + congressObject.state_name + '</p>'
	infoRef += '<p class="phoneNum">' + congressObject.phone + '</p>'
	infoRef += '<p class="email">' + congressObject.oc_email + '</p>'
	infoRef += '<p class="website">' + congressObject.website + '</p>'
	infoRef += '<p class="termEnd">' + congressObject.term_end + '</p></div>'
	// infoRef +=  '<hr/> </div>'
	return infoRef
}


//console.log(congressToHTML)
//=====================================================



var handleData = function(dataFromAPI){
	console.log(dataFromAPI)

	var resultArray = dataFromAPI.results  
	//need to remember: results from dataFromAPI is nested in the result

	var htmlString = ""
	
	for (var i=0; i<resultArray.length; i++){
		var congressObj = resultArray[i]
		console.log(congressObj)
		htmlString += congressToHTML(congressObj)
	}
	
	var containerEl = document.querySelector(".container")
	console.log(htmlString)
	containerEl.innerHTML = htmlString
}

capitolPromise.then(handleData)




// ========================================================
//***open state API

// var url = 'http://openstates.org/api/v1/legislators/?state=ca&chamber=upper&apikey=7ba96d266cc84b168fab4d878d9aa141'

// //console.log(url)

// var congressPromise =$.getJSON(url)

// var congressToHTML = function(chamberObj){
// 	var newString = '<img src="' + chamberObj.photo_url + '"<p class="legistlatorName">' + chamberObj.full_name + '"<p class="district" >' + chamberObj.district + '"<p class="party">' + chamberObj.party + '<p class="phone">'+ '</p></div>'
// 	return newString
// }


// var handleData = function(resultArray){

// 	console.log(resultArray)

// 	var htmlString = ""
// 	for(var i=0; i<resultArray.length; i++){
// 		var upChamOBj = resultArray[i]
// 		htmlString += congressToHTML(upChamOBj)

// 	}
// 	var containerEl = document.querySelector(".container")
// 	containerEl.innerHTML = htmlString

// }

// congressPromise.then(handleData)




