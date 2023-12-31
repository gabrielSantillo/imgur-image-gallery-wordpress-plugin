(function () {
  angular.module("imgurGalleryApp", []).controller("ImgurGalleryController", [
    "$http",
    function ($http) {
      var vm = this;
      vm.imageGroups = [];

      // GET request to the Imgur API
      $http
        .get("https://api.imgur.com/3/gallery/hot/", {
          headers: {
            Authorization: "Client-ID 81c3d04c80f0c3b",
          },
        })
        .then(function (response) {
          vm.imageGroups = response.data;
          console.log(response); // Log the images array
        })
        .catch((e) => {
          console.log("Error trying to fetch images: ", e);
          vm.imageGroups = [
            {
               title: 'Title 1',
               images: [
                  {
                     link: 'https://images.pexels.com/photos/1292843/pexels-photo-1292843.jpeg?auto=compress&cs=tinysrgb&w=600',
                  }
               ]
            },
            {
               title: 'Title 2',
               images: [
                  {
                     link: 'https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }
               ]
            },
            {
               title: 'Title 3',
               images: [
                  {
                     link: 'https://images.pexels.com/photos/1856488/pexels-photo-1856488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }
               ]
            },
            {
               title: 'Title 4',
               images: [
                  {
                     link: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }
               ]
            },
            {
               title: 'Title 5',
               images: [
                  {
                     link: 'https://images.pexels.com/photos/1598072/pexels-photo-1598072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }
               ]
            },
            {
               title: 'Title 6',
               images: [
                  {
                     link: 'https://images.pexels.com/photos/2695391/pexels-photo-2695391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }
               ]
            },
            {
               title: 'Title 7',
               images: [
                  {
                     link: 'https://images.pexels.com/photos/2065850/pexels-photo-2065850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }
               ]
            },
            {
               title: 'Title 8',
               images: [
                  {
                     link: 'https://images.pexels.com/photos/1535775/pexels-photo-1535775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }
               ]
            },
            {
               title: 'Title 9',
               images: [
                  {
                     link: 'https://images.pexels.com/photos/1754853/pexels-photo-1754853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                  }
               ]
            },
         ];
        });
    },
  ]);
})();
