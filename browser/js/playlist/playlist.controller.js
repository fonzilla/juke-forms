'use strict';

juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory, $log, $state) {

  $scope.createPlaylist = function() {
    console.log($scope.playlistName);
    PlaylistFactory.create($scope.playlistName)
    .then(function(data){
      $scope.playlistName = '';
      $scope.addPlaylist.name.$setPristine();
      $state.go('singlePlaylist', {id: data.id});
    })
    .catch($log.error);
  }


});