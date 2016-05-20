'use strict';

juke.controller('SidebarCtrl', function ($scope, PlaylistFactory, $log) {
	PlaylistFactory.fetchAll()
	.then(function (playlistArr) {
		$scope.playlists = playlistArr;
	})
	.catch($log.error);
  // nothing to see here for now… state transitions happening with ui-sref!
 
});
