(function() {
    angular.module('imgurGalleryApp', [])
       .controller('ImgurGalleryController', ['$http', function($http) {
          var vm = this;
          vm.images = [];
 
          // GET request to the Imgur API
          $http.get('https://api.imgur.com/3/gallery/hot/', {
             headers: {
                'Authorization': 'Client-ID 81c3d04c80f0c3b'
             }
          })
          .then(function(response) {
            vm.images = response.data;
            console.log(response.data);
          });
       }]);
 })();
 