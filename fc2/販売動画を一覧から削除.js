$('.video_list_renew').each(function(i, dom) {
  if ($(dom).find('.purchased_icon_yet').length > 0
   || $(dom).find('.user_name').text().includes('FC2コンテンツマーケット')) {
    $(dom).hide();
  }
});
