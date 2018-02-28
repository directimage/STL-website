function titleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
}

function getText(path) {
  var request = new XMLHttpRequest();
  request.open("GET", path, false);
  request.send(null);

  return request.responseText;
}

function makeGallery(targetID, galleryTitle, galleryName, imageClass, numSpacer) {
  var filePath = 'images/galleries/' + galleryName + '/x-names';
  var fileNames = getText(filePath);

  var fileList = fileNames.split('\r');

  var galleryString = '' +
  '<div class="gallery-title">' + galleryTitle + '</div><div class="gallery-instructions">Select desired gallery from INTERIOR or EXTERIOR menu above.</div>' +
  '<div class="content galleries">';

  for(var i = 1; i < fileList.length-1; i++) {
    var imageName = fileList[i].replace('.jpg', '');
    var imageURL = 'images/galleries/' + galleryName + '/' + fileList[i];
    var thumbURL = 'images/galleries/' + galleryName + '/thumbs/' + imageName + '-thumb.jpg';
    var galleryHeading = titleCase(galleryName.replace(/-/g, ' ')) + ' Gallery';
    var imageTitle = titleCase(imageName.replace(/\(\d*\)/g, '').replace(/-/g, ' ').replace(/_/g, ', '));

    galleryString += '' +
    '<a href="' + imageURL + '" class="highslide" onclick="return hs.expand(this, config1)">' +
      '<img class="' +imageClass+ '" src="' + thumbURL + '" alt="' + imageTitle + '" title="' + imageTitle + '"/>' +
    '</a>' + 
    '<div class="highslide-heading">' + galleryHeading + '</div>' +
    '<span class="highslide-caption">' + imageTitle + '</span>\n\n';
  }

  for(var i = 0; i < numSpacer; i++) {
    galleryString += '<div class="justify-spacer ' + imageClass + '"></div>\n';
  }

  galleryString += '</div>';

  //console.log(galleryString);

  document.getElementById(targetID).innerHTML = galleryString;
}
