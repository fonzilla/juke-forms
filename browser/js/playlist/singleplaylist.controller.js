juke.controller('singlePlaylistCtrl', function ($scope, PlayerFactory, PlaylistFactory, SongFactory, $log, playlist, allSongs){
	$scope.playlist = playlist;

	$scope.allSongs = allSongs;
	$scope.addSongtoPlaylist = function () {
		PlaylistFactory.addSong($scope.songSelection, $scope.playlist.id)
		.then(function(song){
			$scope.playlist.songs.push(SongFactory.convert(song));
		})
		.catch($log.error);
	}

	$scope.toggle = function (song) {
	    if (song !== PlayerFactory.getCurrentSong()) {
	      PlayerFactory.start(SongFactory.convert(song), $scope.playlist.songs);
	    } else if ( PlayerFactory.isPlaying() ) {
	      PlayerFactory.pause();
	    } else {
	      PlayerFactory.resume();
	    }
	  };

	$scope.getCurrentSong = function () {
    	return PlayerFactory.getCurrentSong();
  	};

  	$scope.isPlaying = function (song) {
    	return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  	};



})