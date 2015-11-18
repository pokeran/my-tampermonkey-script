//SPAのDOMイベントにも対応できるようにしたけど…これはひどい
$('#page-container').bind('DOMNodeInserted', function(event) {
  $('.has-profile-suggested-tweet').hide();
  $('.has-profile-promoted-tweet').hide();
  $('.promoted-tweet').hide();
});
