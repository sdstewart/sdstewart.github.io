$(function(){
    $("#nav-placeholder").load("nav.html");
    });

function howdy(){
    var inputValue = prompt("Please enter your name: ");
    alert("Howdy "+inputValue);
};

function conditional(){
    var currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good morning!");
    } else if (currentHour < 18){
        alert("Good day!");
    } else {
        alert("Good evening!");
    }
};

function spam(){
    var currentHour = new Date().getHours();
    for (i = 0; i < currentHour; i++){
        alert("SPAM")
    }
};

function evalNumber(parameters){
    var inputValue = prompt("Enter any five-digit number without commas")
    if (isNaN(inputValue) || inputValue > 99999 || inputValue % 1 != 0){
        alert(inputValue + " is not a valid number.")
    } else if (inputValue % 2 == 0){
        alert(inputValue + " is an even number")
    } else {
        alert(inputValue + " is an odd number")
    } 
};

function changeTitle(){
    let selectedElement=document.getElementById("myName");
    var inputValue = prompt("Please enter your name: ");
    console.log(selectedElement);
    selectedElement.innerText=inputValue;
};

function getMinute(){
    let selectedElement=document.getElementById("minute");
    var currentMinute = new Date().getMinutes();
    console.log(selectedElement);
    selectedElement.innerText="The current Minute is: "+ currentMinute
};

function removeImage(){
    document.getElementById("image").style.display = "none";
};

function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [41.789649, -87.599702];
  
    //Set attribution and access key URL
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  
    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });
  
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
  
    L.control.layers(baseLayers).addTo(map);
  
    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup();
  
    //Click event
    var popup = L.popup();
  
    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);  
  };

function addElements() {
    var valueArray = ['first', 'second', 'third'];
    for (i in valueArray) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "row");
        newDiv.setAttribute("id", "div "+i);
        document.getElementById('addElements').appendChild(newDiv);
        newDiv.innerText = valueArray[i];
    }
}



function searchMusic() {
    //declare variable from user input
    var artistName = document.getElementById("artistInput").value;

    //declare base url for API - use data from input form
    var url = "https://www.theaudiodb.com/api/v1/json/1/discography.php?s=" + artistName;

    //fetch command
    fetch(url)
    .then(
        function(response) {
            if (response.status != 200) {
                console.log('PROBLEM! STATUS CODE IS: ' + response.status);
                return;
            }
        response.json().then(function(data) {
            console.log(data);
            let jsonContent = data.album;
            console.log(jsonContent);
            for (i in jsonContent) {
                //var discographyDiv = document.getElementById("discography");
                //var albumYearDiv = document.createElement("span");
                //var albumYearDiv = document.createElement('div');
                //albumYearDiv.setAttribute("class","h4");
                //albumYearDiv.innerText = jsonContent[i].strAlbum;
                //console.log(albumYearDiv)

                //var albumNameDiv = document.createElement("span");
                //var albumNameDiv = document.createElement('div');
                //albumNameDiv.setAttribute("class","h4");
                //albumNameDiv.innerText = jsonContent[i].strAlbum;
                //discographyDiv.appendChild(albumYearDiv);
                //discographyDiv.appendChild(albumNameDiv);

                var discographyDiv = document.getElementById("discography");
                var album = document.createElement("span");
                var album = document.createElement('div');
                album.setAttribute("class","h4");
                album.innerText = jsonContent[i].strAlbum + " (" + jsonContent[i].intYearReleased + ")";
                discographyDiv.appendChild(album);
            }

           // document.getElementById("albumYear").innerText=jsonContent.intYearReleased;
           // document.getElementById("albumName").innerText=jsonContent.strAlbum;
        });
        });
    };


function wikiAPI() {
    document.getElementById('wiki').innerHTML = "";
    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

    connect.open('GET', url);

    connect.onload = function() {
        var wikiObject = JSON.parse(this.response);
        //console.log(wikiObject);
        // console.log(wikiObject.query.pages);
        var pages = wikiObject.query.pages;
        for (var i in pages) {
            var pageURL = 'https://en.wikipedia.org/?curid='
            var newAnchor = document.createElement("a");
            newAnchor.href = pageURL + pages[i].pageid;
            newAnchor.className = 'd-block';
            newAnchor.innerText = pages[i].title;
            document.getElementById("wiki").appendChild(newAnchor);

           // var newDiv = document.createElement("div");
           // newDiv.setAttribute('class','row h4');
           // document.getElementById('wiki').appendChild(newDiv);   
           // link = 'https://en.wikipedia.org/?curid=' + pages[i].pageid;     
           // newDiv.innerHTML = '<a href="' + link + '">' + pages[i].title + '</a>';
        }
    }
    connect.send()
}


function parseArray(array) {
    var newFruit = prompt("enter a fruit"); //prompt asks for input
    array.push(newFruit); //.push method adds a value to an array
    var x = array.sort(); //.sort method sorts values in an array
    var y = x.length; //.length method accesses the length of an array
    console.log(x[y-1]); //log the last item in the array
    console.log(array); //log the entire array
  }
  //var newArray = ["papaya", "apple", "orange", "banana"];


  var userArray = []
  function addValue() {  
    var userInput = document.getElementById('inputTerm').value;
    if (userInput.length == 0){
        alert("Please input a value");
    }
    else {
        userArray.push(userInput)
        console.log(userArray);
        document.getElementById('list').innerHTML = 'List: '+userArray.join(", ");
        document.getElementById('longestValue').innerHTML = 'Longest value: '+lenSort(userArray)[0];
        document.getElementById('inputTerm').value = '';
    }
  }

  function sortArray(sortType){
    document.getElementById('sortedOutput').innerHTML = "";
    var sortedOutput = document.getElementById('sortedOutput');
    
    if (sortType == 1) {
        var sortedArray = lenSort(userArray);
        document.getElementById('sortedOutput').innerHTML = "Sorted by Length";
    }
    else {
        var sortedArray = alpSort(userArray);
        document.getElementById('sortedOutput').innerHTML = "Sorted Alphabetically";
    }

    for (i in sortedArray) {
        var newLI = document.createElement('li');
        newLI.innerText = sortedArray[i];
        sortedOutput.appendChild(newLI);
    }
}

function alpSort(array) {
    return array.concat().sort();
}

  function lenSort(array){
    return array.concat().sort(function (a, b) {return b.length - a.length;});
  }