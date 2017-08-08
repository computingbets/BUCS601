// var script = document.createElement('script');
// script.src = 'http://code.jquery.com/jquery-2.2.4.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);


// let sassCorrect = function() {
//   if ($.sDrop.hasClass()
// }

// gbdrag
// bcdrag
// sdrag
// ercdrag
// ppdrag
// gadrag
// wodrag
// ahdrag

// function init() {
//   $('.gbdrag').drags();
//   $('.bcdrag').drags();
//   $('.sdrag').drags();
//   $('.ercdrag').drags();
//   $('.ppdrag').drags();
//   $('.gadrag').drags();
//   $('.wodrag').drags();
//   $('.ahdrag').drags();
// };


// $(function drop() {
// $('.gbdrag').droppable( {
//    drop: handleDropEvent
//  });
//  $('.bcdrag').droppable( {
//     drop: handleDropEvent
//   });
//   $('.sdrag').droppable( {
//      drop: handleDropEvent
//    });
//    $('.ercdrag').droppable( {
//       drop: handleDropEvent
//     });
//     $('.gadrag').droppable( {
//        drop: handleDropEvent
//      });
//      $('.wodrag').droppable( {
//         drop: handleDropEvent
//       });
//       $('.ahdrag').droppable( {
//          drop: handleDropEvent
//        });
//        $('.gbdrag').droppable( {
//           drop: handleDropEvent
//         });
//  });


 // function handleDropEvent(event, ui) {
 //   //  var draggable = ui.draggable;
 //   //  alert( 'The square with ID "' + draggable.attr('id') + '" was dropped onto me!' );
 //   console.log("hi" event);
 // };

// const addHandlers = () => {
//  $('#sign-up').on('submit', onSignUp);
//
// };

// module.exports = {
//  init,
//  drop,
//  handleDropEvent,
// };

(function($) {
    $.fn.drags = function(opt) {

        opt = $.extend({handle:"",cursor:"move"}, opt);

        if(opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
            if(opt.handle === "") {
                var $drag = $(this).addClass('draggable');
            } else {
                var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
                $('.draggable').offset({
                    top:e.pageY + pos_y - drg_h,
                    left:e.pageX + pos_x - drg_w
                }).on("mouseup", function() {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault(); // disable selection
        }).on("mouseup", function() {
            if(opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });

    }
})(jQuery);

  $('.gbdrag').drags();
  $('.bcdrag').drags();
  $('.sdrag').drags();
  $('.ercdrag').drags();
  $('.ppdrag').drags();
  $('.gadrag').drags();
  $('.wodrag').drags();
  $('.ahdrag').drags()
