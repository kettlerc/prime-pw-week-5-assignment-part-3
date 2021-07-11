console.log('***** Music Collection *****')

//empty array variable called 'collection'
let collection = [ ];

//addToCollection function
function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
  collection.push(album);
  return album;
} //end addToCollection

//testing addToCollection
addToCollection('The Miseducation of Lauryn Hill', 'Lauryn Hill', '1998');
addToCollection('The White Album', 'The Beatles', '1968');
addToCollection('In The Wee Small Hours', 'Frank Sinatra', '1955');
addToCollection('Crash', 'Dave Matthews Band', '1996');
addToCollection('Abbey Road', 'The Beatles', '1969');
addToCollection('License to Ill', 'Beastie Boys', '1986');
addToCollection('Monk\'s Dream', 'The Thelonius Monk Quartet', '1963');
console.log(collection);

//showCollection function
function showCollection (array) {
  console.log(array.length);
  for (let albums of collection) {
    console.log(albums.title + ' by ' + albums.artist + ', published in ' + albums.yearPublished);
  }
}//end showCollection

//testing showCollection
showCollection(collection);

//findByArtist function
function findByArtist (artist) {
  console.log('Search for ' + artist + ':');
  let results = [ ];
  for (let item of collection){
    if (item.artist === artist) {
      results.push(item);
    }
  }
  return results;
} //end findByArtist

//testing findByArtist with an artist that is in the collection and one that isn't
//you would NEVER find Pitbull in my music collection hahaha
console.log(findByArtist('The Beatles'));
console.log(findByArtist('Pitbull'));

//search function
function search (artist, year) {
  console.log('Searching for: ' + artist + ' ' + year);
  let results = [ ];
  for (let item of collection) {
    if (item.artist === artist && item.yearPublished === year) {
      results.push(item);
    } else if (artist === undefined && year === undefined) {
    console.log('You did not search for anything. Here is the collection you can search:');
    return collection;
    }
  }
  return results;
} //end search function

//testing search function
//both arguments meet criteria
console.log(search('Frank Sinatra', '1955'));
//artist argument meets the criteria, year does not
console.log(search('Dave Matthews Band', '1682'));
// year argument meets criteria, artist does not
console.log(search('Celine Dion', '1986'));
//no arguments passed through
console.log(search());
