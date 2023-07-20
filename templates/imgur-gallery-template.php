<div ng-app="imgurGalleryApp">
   <div ng-controller="ImgurGalleryController as galleryCtrl">
      <div class="imgur-gallery">
         <div ng-repeat="image in galleryCtrl.images">
            <img ng-src="{{ image.link }}" alt="{{ image.title }}">
         </div>
      </div>
   </div>
</div>
