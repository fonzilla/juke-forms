juke.factory('PlaylistFactory', function ($http, $log, SongFactory) {

	var cachedPlaylists = [];
  	var PlaylistFactory = {};

  PlaylistFactory.create = function (data) {
    return $http.post('/api/playlists', {name:data})
    .then(function (res) {
	    var playlist = res.data;
	    cachedPlaylists.push(playlist);
	    return playlist;
    })
    .catch($log.error);
  };

  PlaylistFactory.fetchAll = function () {
  	return $http.get('/api/playlists')
  	.then(function (res) {
  		angular.copy(res.data, cachedPlaylists);
  		return cachedPlaylists;
  	})
  	.catch($log.error);
  }

  PlaylistFactory.findById = function(id){
  	var url = '/api/playlists/' + id;
  	return $http.get(url)
  	.then(function(res){
  		return res.data;
  	})
  }

  PlaylistFactory.addSong = function (song, playlistId) {
  	return $http.post('/api/playlists/' + playlistId + '/songs', SongFactory.convert(song))
  	.then(function (res) {
  		return res.data;
  	})
  	.catch($log.error);
  }

  return PlaylistFactory;

});