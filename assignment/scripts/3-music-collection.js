console.log('***** Music Collection *****')

//empty array variable called 'collection'
let collection = [ ];

//addToCollection function
function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
} //end addToCollection

//testing addToCollection function
console.log(addToCollection('Album Name', 'Album Artist', '1999'));
console.log(collection);
//further testing
addToCollection('The White Album', 'The Beatles', '1968');
addToCollection('The Miseducation of Lauryn Hill', 'Lauryn Hill', '1998');
addToCollection('In The Wee Small Hours', 'Frank Sinatra', '1955');
addToCollection('Crash', 'Dave Matthews Band', '1996');
addToCollection('License to Ill', 'Beastie Boys', '1986');
addToCollection('Monk\'s Dream', 'The Thelonius Monk Quartet', '1963');
console.log(collection);
