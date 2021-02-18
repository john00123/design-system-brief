var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;


var section = `<!-- Section -->
<table class='section' cellpadding="0" style="border-collapse:collapse;border-spacing:0;width:100%;">
  <td class="outlook-row-container bottom_3 top_3 left_6_3 right_6_3" style="padding-bottom: 24px; padding-top: 24px; padding-left: 48px; padding-right: 48px; 1px solid red;">

    <!-- Title -->
    <table cellpadding="0"  style="border-collapse:collapse;border-spacing:0;width:100%;">
      <td>
        <h3 contenteditable="true" style="font-size: 20px; line-height: 26px; color: #22272E; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-weight: 500; margin: 0;mso-line-height-rule:exactly;">
          Title
        </h3>
      </td>
    </table>

    <!-- Paragraph -->
    <table cellpadding="0" style="border-collapse:collapse;border-spacing:0;width:100%;">
      <td style="padding-top: 8px;">
        <p contenteditable="true" style="font-size: 18px; line-height: 28px; font-weight:300; ; color: #4D5969; font-family: 'nutanix_soft',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; margin: 0 !important;">
          Paragraph text
        </p>
      </td>
    </table>
    <!-- End of Paragraph -->
  </td>
</table>
<!-- End of Section -->`

var paragraph =`
<!-- Paragraph -->
    <br><p contenteditable="true" style="font-size: 18px; line-height: 28px; font-weight:300; ; color: #4D5969; font-family: 'nutanix_soft',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; margin: 0 !important;">
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

  $('.copy-btn').click(function(){
    var copyText = $('.codeInput').val();
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.val());
  });

  function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

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
