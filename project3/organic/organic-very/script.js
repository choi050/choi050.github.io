// console.log ("Is our script file working");

// load the airtable library call it airtable
var Airtable = require("airtable");
//console.log (Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "key13kR0tFI0uWBsu" }).base(
  "appZsUatFBd8mFAYt"
);

// get our collection base select all the records
// and specify functions that will recieve data
base("fonts").select({
  view: "celebration"
}).eachPage(gotPageOfFonts, gotAllFonts);

// an empty array to hold our data
var fonts = [];

// a callback function that receives our data
function gotPageOfFonts(records, fetchNextPage) {
  console.log("gotPageOfFonts()");
  // add the records from this page to our fonts array
  fonts.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllFonts(err) {
  console.log("gotAllFonts()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading books");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogFonts();
  showFonts();
}

// just loop through the fonts and console.log them
function consoleLogFonts() {
  console.log("consoleLogFonts()");
  fonts.forEach((font) => {
    console.log("Font:", font);
  });
}

// look through the airtable data
//create an elements for everyone
function showFonts() {
  console.log("showFonts()");
  fonts.forEach((font) => {

    // creating a new div fontContainer
    // this is where font info will go
    var fontContainer = document.createElement("div");
    fontContainer.classList.add("font-container");
    document.querySelector(".fontcontainer").append(fontContainer);

  /*  var fontSample = document.createElement("img");
    fontSample.classList.add("font-sample");
    fontSample.src = font.fields.sample_image[0].url;
    fontContainer.append(fontSample);

    // add font titles to font fontContainer
    var fontTitle = document.createElement("h2");
    fontTitle.classList.add("font-title");
    fontTitle.innerText = font.fields.title;
    fontContainer.append(fontTitle); */

    //var fontTitle = document.createElement("h1");
    //fontTitle.innerText = font.fields.title;
    //document.body.append(fontTitle);

    //var fontDesigner = document.createElement("h2");
    //fontDesigner.innerText = font.fields.designer;
    //document.body.append(fontDesigner);

    //var fontImage = document.createElement("img");
    //fontImage.src = font.fields.image[0].url;
    //document.body.append(fontImage);

    //creating a new div container
    //this is where our font info will go
    //var fontContainer = document.createElement("div");
    //fontContainer.classList.add("font-container");
    //document.querySelector(".container").append(fontContainer);

  });
}

function displayRandomImages()
{
   //array of images with image location, height, and width
   var imageArray = [
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/9f52eb1361b94944faa198b01a129431/cb67b4fe",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/7423d5d9dc8488363542ef217e5af962/471024b3",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/c31e00edaeaa8e40aefefde97a5e2b52/d2a413e0",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/21d922e7116cac09fd45f980759c30f5/ffa3c9b0",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/08efc883d2a6e9f46ac94e683ad1092a/2eecbacb",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/f1451530d1764a0e0ce204a3ca6c0894/12d6ddd6",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/21881d5c0cbecbd9ac9fae738b0e31a5/29b30f43",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/65df050ad6ba5f031b1a2430b25720fa/f9bbc82d",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/88a9a73a8e0ea07ccf8575955ab34c00/1b4bbf0c",
     width: "280",
     height: "280"
   }];

    //find the length of the array of images
    var arrayLength = imageArray.length;
    var newArray = [];
    for (var i = 0; i < arrayLength; i++) {
        newArray[i] = new Image();
        newArray[i].src = imageArray[i].src;
        newArray[i].width = imageArray[i].width;
        newArray[i].height = imageArray[i].height;
    }

  // create random image number
  function getRandomNum(min, max)
  {
      // generate and return a random number for the image to be displayed
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;
      return newArray[imgNo];
  }

  // 0 is first image and (preBuffer.length - 1) is last image of the array
  var newImage = getRandomNum(0, newArray.length - 1);

  // remove the previous images
  var images = document.getElementsByTagName('img');
  var l = images.length;
  for (var p = 0; p < l; p++) {
     images[0].parentNode.removeChild(images[0]);
  }
  // display the new random image
  var fontContainer = document.createElement("div");
  fontContainer.classList.add("font-container");
  document.querySelector(".fontcontainer").append(newImage);
}
