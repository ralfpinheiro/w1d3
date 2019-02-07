var library = {
    tracks: {
        t01: {
            id: "t01",
            name: "Code Monkey",
            artist: "Jonathan Coulton",
            album: "Thing a Week Three"
        },
        t02: {
            id: "t02",
            name: "Model View Controller",
            artist: "James Dempsey",
            album: "WWDC 2003"
        },
        t03: {
            id: "t03",
            name: "Four Thirty-Three",
            artist: "John Cage",
            album: "Woodstock 1952"
        }
    },
    playlists: {
        p01: {
            id: "p01",
            name: "Coding Music",
            tracks: ["t01", "t02"]
        },
        p02: {
            id: "p02",
            name: "Other Playlist",
            tracks: ["t03"]
        }
    }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function(playlist) {

    for (var pId in playlist) {
        console.log( `${pId}: ${playlist[pId].name} - ${playlist[pId].tracks.length} tracks`);
    }

}

printPlaylists(library.playlists);


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function(track) {

    for (var tId in track) {
        console.log(`${tId}: ${track[tId].name}, by ${track[tId].artist} (${track[tId].album}) `)
    }

}

printTracks(library.tracks);

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function(playlistId) {
    // console.log(playlistId);
    let playlist = library.playlists[playlistId];
    let pName = playlist.name;
    let trackIds = playlist.tracks;
    let res = "";

    res += `${playlistId}: ${pName} - ${trackIds.length}\n`;

    trackIds.forEach((tid) => {
        let track = library.tracks[tid];
        res += `${tid}: ${track.name} by ${track.artist} (${track.album})\n`;

    })
    return res;
}

console.log(printPlaylist("p01"));

// adds an existing track to an existing playlist

var addTrackToPlaylist = function(trackId, playlistId) {

    var trackAdded = library.playlists[playlistId].tracks.push(trackId);
    console.log(library.playlists[playlistId].tracks);
    console.log(trackAdded + ' is the track added');


    // let tId = library.tracks[trackId].id;
    // let pId = library.playlists[playlistId].tracks;
    // let res ='';

    // for (trackId in playlistId) {
    //   // console.log('id is here');
    //   // console.log(pId);
    // }


}

addTrackToPlaylist('t03', 'p01');


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function(name, artist, album) {

    var newTrackId = uid();

    library.tracks[newTrackId] = {}; // creates a new object for the new track

    library.tracks[newTrackId].id = newTrackId; //creates a new key for ID
    library.tracks[newTrackId].name = name; // creates a new key for name
    library.tracks[newTrackId].artist = artist; // creates a new key for artist
    library.tracks[newTrackId].album = album; // creates a new key for album

    console.log(library.tracks[newTrackId]);

}

addTrack('Live Forever', 'Oasis', 'Masterplan');


// adds a playlist to the library

var addPlaylist = function(name) {

    var newPlaylistId = uid();

    library.playlists[newPlaylistId] = {};

    library.playlists[newPlaylistId].id = newPlaylistId;
    library.playlists[newPlaylistId].name = name;
    library.playlists[newPlaylistId].tracks = [];

    console.log(library.playlists[newPlaylistId]);

}

addPlaylist('Running');

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}