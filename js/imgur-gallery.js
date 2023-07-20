(function() {
   angular.module('imgurGalleryApp', [])
      .controller('ImgurGalleryController', function() {
         var vm = this;
         vm.images = [
            {
               link: 'https://images.pexels.com/photos/1292843/pexels-photo-1292843.jpeg?auto=compress&cs=tinysrgb&w=600',
               title: 'Image 1'
            },
            {
               link: 'https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
               title: 'Image 2'
            },
            {
               link: 'https://images.pexels.com/photos/1856488/pexels-photo-1856488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
               title: 'Image 3'
            },
            {
               link: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
               title: 'Image 4'
            },
            {
               link: 'https://images.pexels.com/photos/1598072/pexels-photo-1598072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
               title: 'Image 5'
            },
            {
               link: 'https://images.pexels.com/photos/2695391/pexels-photo-2695391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
               title: 'Image 6'
            },
            {
               link: 'https://images.pexels.com/photos/2065850/pexels-photo-2065850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
               title: 'Image 7'
            },
            {
               link: 'https://images.pexels.com/photos/1535775/pexels-photo-1535775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
               title: 'Image 8'
            },
            {
               link: 'https://images.pexels.com/photos/1754853/pexels-photo-1754853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
               title: 'Image 9'
            }
         ];
      });
})();

// (function() {
//    angular.module('imgurGalleryApp', [])
//       .controller('ImgurGalleryController', ['$http', function($http) {
//          var vm = this;
//          vm.images = [];

//          // GET request to the Imgur API
//          $http.get('https://api.imgur.com/3/gallery/hot/', {
//             headers: {
//                'Authorization': 'Client-ID 81c3d04c80f0c3b'
//             }
//          })
//          .then(function(response) {
//            vm.images = response.data;
//            console.log(vm.images); // Log the images array
//          });
//       }]);
// })();

 