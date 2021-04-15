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
     src: "https://dl.airtable.com/.attachmentThumbnails/57f752b468f4a22162195022258b6135/8e2bc6fa",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/9f52eb1361b94944faa198b01a129431/cb67b4fe",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/5ce67fef65acd7ed630925411cb65aab/4fde9ce3",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/966729e5ae2f84cf45e970b3f2c470b9/8a18d219",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/9ec120f0a4b593a65bc96ecb5103c8a8/de818d24",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/66b71f4d3f7d31aa07be28840a9d1ec2/4c559ffb",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/f1451530d1764a0e0ce204a3ca6c0894/12d6ddd6",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/f0a4ea86eb33685d1f8570e6e9ad7348/27316a57",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/65df050ad6ba5f031b1a2430b25720fa/f9bbc82d",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/6579557d435e8ebfd741997a2b61063f/cc3c9b74",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/20d9609c93477550c8947e23e25aa00a/6885113a",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/4e1e6ee69772ad9152d20ac8271a1c82/78a621e0",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/23f2d1bad6f91fa16002b0de66c64752/2b4e4ee7",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/2f9b6e501bc41b663d1fe3b49f319c48/77307be6",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/e2512dd8c5c6fcb04eeec4a5c993eaaf/1ebf1d99",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/25352ce1a305d1de105efdfac69011e7/d3f10f4b",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/37dbcfef36fdd831524d25f078460515/6e0ab57a",
     width: "280",
     height: "280"
   },
   {
     src: "https://dl.airtable.com/.attachmentThumbnails/28ca15f99e39d4359d799735206c8111/4d0390fe",
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
