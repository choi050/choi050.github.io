// console.log ("albumcovers");

//load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log("Airtable");

// connect to my base using my apikey
var base = new Airtable({ apiKey: "key13kR0tFI0uWBsu" }).base(
  "appJvmOSg0bM8M1Mx"
);

// get our collection base, select all records
// specify functions that will recieve the dateTag
base("albums").select({}).eachPage(gotPageOfAlbums, gotAllAlbums);

// an empty array to hold our data
var albums = [];

// callback function that recieves our data
// records refer to the different rows
// fetchnextpage is if we have over 100 items and this groups that into pages
function gotPageOfAlbums(records, fetchNextPage) {
  console.log("gotPageOfAlbums()");
  // add the records from this page to our albums array
  albums.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function when all the pages are loaded
function gotAllAlbums(err) {
  console.log("gotAllAlbums()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading albums");
    console.error(err);
    return;
  }

  // call functions to log and show the albums
  consoleLogAlbums();
  showAlbums();
}

// just loop through the books and console.log them
function consoleLogAlbums() {
  console.log("consoleLogAlbums()");
  albums.forEach((album) => {
    console.log("Album:", album);
  });
}

// look through our airtable data, create elements
function showAlbums() {
  console.log("showAlbums()");
  albums.forEach((album) => {

    /* var albumTitle = document.createElement("h2");
    albumTitle.innerText = album.fields.title;
    document.body.append(albumTitle);

    var nameOfArtist = document.createElement("h3");
    nameOfArtist.innerText = album.fields.artist;
    document.body.append(nameOfArtist);

    var albumImage = document.createElement("img");
    albumImage.src = album.fields.cover[0].url;
    document.body.append(albumImage); */

    //creating a new div container
    //this is where our album info will go
    var albumContainer = document.createElement("div");
    albumContainer.classList.add("album-container");
    document.querySelector(".container").append(albumContainer);

    // add album titles to album container
    var albumTitle = document.createElement("h1");
    albumTitle.classList.add("album-title");
    albumTitle.innerText = album.fields.title;
    albumContainer.append(albumTitle);

    // add artists to album albumContainer
    var albumArtist = document.createElement("h1");
    albumArtist.classList.add("album-artist");
    albumArtist.innerText = album.fields.artist;
    albumContainer.append(albumArtist);

    // add description to album albumContainer
    var albumDescription = document.createElement("p");
    albumDescription.classList.add("album-description");
    albumDescription.innerText = album.fields.description;
    albumContainer.append(albumDescription);

    // add image to song container
    var albumCover = document.createElement("img");
    albumCover.classList.add("album-cover");
    albumCover.src = album.fields.cover[0].url;
    albumContainer.append(albumCover);

    // add addEventListener
    // when user clicks on album container it will show description + image
    albumContainer.addEventListener("click", function(){
      albumDescription.classList.toggle("active");
      albumCover.classList.toggle("active");
      albumContainer.classList.toggle("active");
    })


  });
}
