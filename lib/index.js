var Artists = require("./Artists"),
    Albums = require("./Albums"),
    Tracks = require("./Tracks"),
    Favorites = require("./Favorites"),
    Library = require("./Library"),
    History = require("./History"),
    Playlists = require("./Playlists"),
    Search = require("./Search"),
    Stations = require("./Stations");

function Rhapsody(data) {
  var apikey = '';
  
  if (typeof data === 'undefined') {
    throw new Error("apikey required");
  } else if (typeof data === 'string') {
    apikey = data;
  } else { // assume object
    if (typeof data.apikey === 'undefined') {
      throw new Error("apikey required");
    } else {
      apikey = data.apikey;
    }
  }

  
  
  // ARTISTS
  function topArtists(params) {
    return Artists.getTop(apikey, params);
  }
  function artistDetails(artist) {
    return Artists.getDetails(apikey, artist);
  }
  function artistBio(artist) {
    return Artists.getBio(apikey, artist);
  }
  function artistNewReleases(artist, params) {
    return Artists.getNewReleases(apikey, artist, params);
  }
  function artistTopAlbums(artist, params) {
    return Artists.getTopAlbums(apikey, artist, params);
  }
  function artistDiscography(artist, params) {
    return Artists.getDiscography(apikey, artist, params);
  }
  function artistTopTracks(artist, params) {
    return Artists.getTopTracks(apikey, artist, params);
  }
  function artistImages(artist) {
    return Artists.getImages(apikey, artist);
  }
  function artistSimilar(artist) {
    return Artists.getSimilar(apikey, artist);
  }
  function artistEditorialPosts(artist) {
    return Artists.getEditorialPosts(apikey, artist);
  }
  
  
  
  
  // ALBUMS
  function newAlbums(params) {
    return Albums.getNewReleases(apikey, params);
  }
  function staffPickAlbums(params) {
    return Albums.getStaffPicks(apikey, params);
  }
  function topAlbums(params) {
    return Albums.getTopAlbums(apikey, params);
  }
  function albumDetails(album, params) {
    return Albums.getAlbumDetails(apikey, album);
  }
  function albumTracks(album, params) {
    return Albums.getAlbumTracks(apikey, album);
  }
  function albumImages(album, params) {
    return Albums.getAlbumImages(apikey, album);
  }
  function similarAlbums(album, params) {
    return Albums.getSimilarAlbums(apikey, album);
  }
  function albumReviews(album, params) {
    return Albums.getAlbumReviews(apikey, album);
  }
  function albumEditorialPosts(album, params) {
    return Albums.getAlbumPosts(apikey, album);
  }
  
  
  
  
  // TRACKS
  function getTopTracks(params) {
    return Tracks.getTop(apikey, params);
  }
  function getTrackDetails(track) {
    return Tracks.getDetails(apikey, track);
  }




  // SEARCH
  function search(params) {
    return Search.search(apikey, params);
  }


  
  
  // FAVORITES
  function myFavorites(token) {
    return Favorites.getAll(token);
  }
  function addFavorite(token, tracks) {
  }
  function removeFavorite(token, track) {
  }
  
  
  
  
  // LIBRARY
  function getMyLibraryArtists(token) {
    return Library.getAllArtists(token);
  }
  
  
  // PLAYLISTS
  function getMyPlaylists(token) {
    return Playlists.getAll(token);
  }
  function getPlaylistDetails(token, playlist) {
    return Playlists.getDetails(token, playlist);
  }
  function getPlaylistTracks(token, playlist) {
    return Playlists.getTracks(token, playlist);
  }
  
  // HISTORY
  function getRecentArtists(token) {
    return History.getArtists(token);
  }
  function getRecentGenres(token) {
    return History.getGenres(token);
  }
  function getRecentListens(token) {
    return History.getHistory(token);
  }
  
  return {
    topArtists:topArtists,
    artistDetails:artistDetails,
    artistBio:artistBio,
    artistNewReleases:artistNewReleases,
    artistTopAlbums:artistTopAlbums,
    artistDiscography:artistDiscography,
    artistTopTracks:artistTopTracks,
    artistImages:artistImages,
    artistSimilar:artistSimilar,
    artistEditorialPosts:artistEditorialPosts,
    
    newAlbums:newAlbums,
    staffPickAlbums:staffPickAlbums,
    topAlbums:topAlbums,
    albumDetails:albumDetails,
    albumTracks:albumTracks,
    albumImages:albumImages,
    similarAlbums:similarAlbums,
    albumReviews:albumReviews,
    albumEditorialPosts:albumEditorialPosts,
    
    getTopTracks:getTopTracks,
    getTrackDetails:getTrackDetails,
    
    myFavorites:myFavorites,
    
    getMyLibraryArtists:getMyLibraryArtists,
    
    getMyPlaylists:getMyPlaylists,
    getPlaylistDetails:getPlaylistDetails,
    getPlaylistTracks:getPlaylistTracks,
    
    getRecentArtists:getRecentArtists,
    getRecentGenres:getRecentGenres,
    getRecentListens:getRecentListens,

    search: search
  }
}

module.exports = Rhapsody;