define(
["jquery", "velocity"], 
function ($, Velocity) {

	var logo = $("#logo"),
		logoChain,
		socialIconContainer = $('.social-icon-container'),
		socialsChain = [],
		canAnimateSocial = {},
		isOutOfSocial = true,
		logoDropRotations = 2,
		logoDropDuration = 1600,
		$window = $(window),
		html = $("html");

	function getElementPosition(el)
	{
		return {
			"id" : el.attr("id") || "none",
			"centerX" : el.offset().left + el.outerWidth()/2,
			"centerY" : el.offset().top + el.outerHeight()/2
		}
	}

	socialIconContainer.on("click", function(e){
		e.preventDefault();
		var self = $(this), newWindow;
		newWindow = window.open(self.attr("href"));
	});

	socialIconContainer.on("mouseenter mouseleave", function(e){
		var self = $(this);
		if(!canAnimateSocial[self.attr("id")]){
			return;
		}
		if(e.type == "mouseenter"){
			self.velocity("stop");
			self.velocity({
				"rotateZ" : 180
			});
		}

		if(e.type == "mouseleave"){
			self.velocity("stop");
			self.velocity({
				"rotateZ" : 0
			});
		}
	});


	AFnimation = {};

	AFnimation.logoDrop = function(options){

		var opt = $.extend({}, {
			"onBegin" : function(){},
			"onComplete" : function(){}
		}, options);
		
		return logo
		.velocity({
			"rotateX" : [0,logoDropRotations*180],
			"width" : $window.width() < 700 ? 200 : 350,
			"opacity" : [1, 0]
		}, {
			"duration" : logoDropDuration,
			"delay" : 0,
			"begin" : function(){
				logo.css({"width": "0px"});
				opt.onBegin();
			},
			"complete" : function(){
				opt.onComplete();
			}
		});
	}

	AFnimation.socialsFlyIn = function(options){
		var numberOfSocials = socialIconContainer.length,
			completedSocials = 0,
			opt = $.extend({},{
				"onBegin" : function(){},
				"onComplete" : function(){}
			}, options);

		socialIconContainer.each(function(i){
			var self = $(this);

			window.setTimeout(function(){

				socialsChain[i] = 
				self
				.velocity({
					"translateY" : [0, -500+i*50],
					"opacity" : [1,0]
				}, {
					"duration" : 1000,
					"easing" : "spring",
					"begin" : function(){
						canAnimateSocial[self.attr("id")] = false;
						if(!i){
							opt.onBegin();
						}
					},
					"complete" : function(){
						canAnimateSocial[self.attr("id")] = true;
						completedSocials++;
						if(numberOfSocials==completedSocials){
							opt.onComplete();
						}
					}
				});

			}, i * (logoDropDuration/logoDropRotations/4));
		});

	}

	AFnimation.animate = function(){
		var self = this;
		logoChain = self.logoDrop({
			"onBegin" : function(){
				html.css({"overflow" : "hidden"});
				//preventAnimation = true;
			}
		});
		window.setTimeout(function(){
			self.socialsFlyIn({
				"onComplete" : function(){
					html.css({"overflow" : "auto"});
					//preventAnimation = false;
				}
			});
		}, logoDropDuration - 0.1145*logoDropDuration);

	}

   	return AFnimation;

}
);
