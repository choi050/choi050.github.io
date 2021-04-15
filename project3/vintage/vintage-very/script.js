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
     src: "https://dl.airtable.com/.attachmentThumbnails/28db331b4464f84f302c22f1adefe8b1/f5e516bf",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/5ed092619786c2ef9d5e9fd28aaaa139/48855ee8",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/6d0f7f6a99ca1cf1b911653218ddd3c0/9397c996",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/7da52a3a74f74efb00bb52bb0ceab0a7/e258ebfd",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/21881d5c0cbecbd9ac9fae738b0e31a5/29b30f43",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/bb9faaf994eb0ea1de13529d76a1dff6/f1c75bde",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/2f9b6e501bc41b663d1fe3b49f319c48/77307be6",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/0679687df79127271e6b59eaf1842e00/64fb9741",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/bfb77ac7cbc76d2efbc3a030c121582f/231b202e",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/aef85cd57bd7279ddccd905a48893a07/906fe03d",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/218908df3e5f44e3f89eb0673e3c14a8/7748eace",
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
