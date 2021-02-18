var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;


var section = `<!-- Section -->
<table class='section' cellpadding="0" style="border-collapse:collapse;border-spacing:0;width:100%;">
  <td class="outlook-row-container bottom_3 top_3 left_6_3 right_6_3" style="padding-bottom: 24px; padding-top: 24px; padding-left: 48px; padding-right: 48px;">

    <!-- Title -->
    <table cellpadding="0"  style="border-collapse:collapse;border-spacing:0;width:100%;">
      <td>
        <h3 contenteditable="true" style="font-size: 20px; line-height: 26px; color: #22272E; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-weight: 500; margin: 0;mso-line-height-rule:exactly;">
          Figma Migration
        </h3>
      </td>
    </table>

    <!-- Paragraph -->
    <table cellpadding="0" style="border-collapse:collapse;border-spacing:0;width:100%;">
      <td style="padding-top: 8px;">
        <p contenteditable="true" style="font-size: 18px; line-height: 28px; font-weight:300; ; color: #4D5969; font-family: 'nutanix_soft',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; margin: 0 !important;">
          We will be releasing a library for Figma on the week of Feb 15 - 19. All new and existing projects under our corporate account will have immediate access to them. The library requires no set-up. Things like fonts are also automatically taken care of through the platform. No need to be looking for the font files and color files anymore.
        </p>
      </td>
    </table>
    <!-- End of Prargraph -->
  </td>
</table>
<!-- End of Section -->`

var paragraph =`
<!-- Paragraph -->
    <p contenteditable="true" style="font-size: 18px; line-height: 28px; padding-top:20px; font-weight:300; ; color: #4D5969; font-family: 'nutanix_soft',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; margin: 0 !important;">
      Paragraph text
    </p>
<!-- End of Paragraph -->
`



$(document).ready(function(){
  $('.modal_bg').hide();
  $('.code').text($('#app').html());
  $('.codeInput').val($('#app').html());

  $('.section-text').click(function(){
    $('.section').last().after(section);
  })

  $('.p-text').click(function(){
    $('p').last().after(paragraph);
  })

  $('.render').click(function(){
    $('.code').text($('#app').html());
    $('.codeInput').val($('#app').html());
  });

  $('.chg-image').click(function(){
    $('.modal_bg').show();
  });


  var d = new Date();
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var n = month[d.getMonth()];
  var year = d.getFullYear();


  $('.date').text(n +' '+year);

  $('.change').click(function(){
    $('.modal_bg').hide();
    var address = $('.web-address').val()
    var newimage= ``
    $('.hero-img').html(`<td class="top_4_3" style="padding-top: 20px;">
      <!-- non outlook -->
      <div class="non-outlook-only">
        <table cellpadding="0" class="non-outlook-only" style="border-collapse:collapse;border-spacing:0;width:100%">
          <td class="image_no" data-eon-prop="imageUrl" data-eon-role="image" width="100% !important" height="0 !important" style="
          padding-bottom: 55%; background-position: center !important; background-repeat: no-repeat !important; background-size: cover !important; height: 0px !important; max-height: 0px !important; overflow: hidden !important; width: 100% !important;
          background: url(${address});">
          </td>
        </table>
      </div>
      <!-- outlook -->
      <table cellpadding="0" style="border-collapse:collapse;border-spacing:0;width:100%">
        <td class="outlook-only" style="display: none;">
          <img class='image_o' style="border: 0 !important;"
          src="${address}"
          alt='Dribble image' />
        </td>
      </table>
    </td>`);

  })

});
