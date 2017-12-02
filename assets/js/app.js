jQuery(document).ready(function() {
  Layout.init();
  Layout.initOWL();
  Layout.initTwitter();
  Layout.initUniform();
  Layout.initFixHeaderWithPreHeader(); /* Switch On Header Fixing (only if you have pre-header) */
  Layout.initNavScrolling();

  // var ContactUs = function () {

  //       return {
  //           //main function to initiate the module
  //           init: function () {
  //         var map;
  //         $(document).ready(function(){
  //           map = new GMaps({
  //           div: '#map',
  //                 lat: -13.004333,
  //           lng: -38.494333,
  //           });
  //            var marker = map.addMarker({
  //                   lat: -13.004333,
  //             lng: -38.494333,
  //                   title: 'Loop, Inc.',
  //                   infoWindow: {
  //                       content: "<b>Loop, Inc.</b> 795 Park Ave, Suite 120<br>San Francisco, CA 94107"
  //                   }
  //               });

  //            marker.infoWindow.open(map, marker);
  //         });
  //           }
  //       };
  // }();
  // ContactUs.init();
});
