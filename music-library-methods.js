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
    },
    printPlaylists: function(playlist) {

        for (var pId in playlist) {
            console.log('* Q01 *', `${pId}: ${playlist[pId].name} - ${playlist[pId].tracks.length} tracks`);
        }

    },

     printTracks: function(track) {

        for (var tId in track) {
            console.log('* Q02 *', `${tId}: ${track[tId].name}, by ${track[tId].artist} (${track[tId].album}) `)
        }

    },

    printPlaylist: function(playlistId) {
        let playlist = this.playlists[playlistId];
        let pName = playlist.name;
        let trackIds = playlist.tracks;
        let res = "";

        res += `${playlistId}: ${pName} - ${trackIds.length}\n`;

        trackIds.forEach((tid) => {
            let track = this.tracks[tid];
            res += `${tid}: ${track.name} by ${track.artist} (${track.album})\n`;

        })
        console.log(res);
    },


    addTrackToPlaylist: function(trackId, playlistId) {

        // var trackAdded = this.playlists[playlistId].tracks.push(trackId);
        // console.log(this.playlists[playlistId].tracks);
        // console.log(trackAdded + ' is the track added');

        library.playlists[playlistId].tracks.push(trackId);

    },

    addTrack: function(name, artist, album) {

        var newTrackId = uid();

        this.tracks[newTrackId] = {}; // creates a new object for the new track

        this.tracks[newTrackId].id = newTrackId;
        this.tracks[newTrackId].name = name;
        this.tracks[newTrackId].artist = artist;
        this.tracks[newTrackId].album = album;

        console.log(this.tracks[newTrackId]);

    },

    addPlaylist: function(name) {

        var newPlaylistId = uid();

        this.playlists[newPlaylistId] = {};

        this.playlists[newPlaylistId].id = newPlaylistId;
        this.playlists[newPlaylistId].name = name;
        this.playlists[newPlaylistId].tracks = [];

        console.log(this.playlists[newPlaylistId]);

    }


}

// // generates a unique id

var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


library.printPlaylists(library.playlists);

library.printTracks(library.tracks);

library.printPlaylist("p01");

library.addTrackToPlaylist('t03', 'p01');

library.addTrack('Live Forever', 'Oasis', 'Masterplan');

library.addPlaylist('Running');








