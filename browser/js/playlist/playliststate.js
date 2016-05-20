'use strict'

juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/addplaylist/new',
    templateUrl: '/js/playlist/templates/addplaylist.html',
    controller: 'PlaylistCtrl'
  });

  $stateProvider.state('singlePlaylist', {
  	url: '/playlists/:id',
  	templateUrl: '/js/playlist/templates/singlePlaylist.html',
  	controller: 'singlePlaylistCtrl',
  	resolve: {
  		playlist: function(PlaylistFactory, $stateParams){
  			return PlaylistFactory.findById($stateParams.id);
  		},
  		allSongs: function(SongFactory) {
  			return SongFactory.fetchAll();
  		}
  	}
  });


});
