(function($, undefined) {
	
	$.fn.extend({
		memeify: function(options) {
			var settings = $.extend({
				setup: 'Default Top Text', 
				punchline: 'Default Bottom Text', 
				image: ''
			}, options);
			
			var allTheImages = [];
			var memeTopText = settings.setup;
			var memeBottomText = settings.punchline;
			var memeImage = settings.image;
			$(this).find('img').each(function(index) {
				var originalImage = $(this).attr('src');
				$(this).hover(function() {
					//$(this).addClass('memeify');
					var image = $(this);
					var imgHeight = $(image).height();
					var imgWidth = $(image).width();
					console.log(memeImage);
					if(memeImage != '')
					{
						$(image).attr('src', memeImage);
					}
					
					$(image).wrap('<div class="image-wrapper" style="height:' + imgHeight + 'px;width:' + imgWidth + 'px;"></div>');
					
					var fontSize = Math.ceil(imgWidth / 12);
					var bottomTextXPos = Math.ceil(imgHeight - fontSize);
					$(image).after('<span class="meme-text" style="font-size:' + fontSize + 'px;top:0px">' + memeTopText + '</span>');
					$(image).after('<span class="meme-text" style="font-size:' + fontSize + 'px;top:' + bottomTextXPos + 'px">' + memeBottomText + '</span>');
				},
				function() {
					var image = $(this);
					$(this).parent().find('span').remove();
					$(this).unwrap();
					$(this).attr('src',originalImage);
				});
			});
			return this;
		}
	});
}(jQuery));