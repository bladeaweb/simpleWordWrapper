;(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
	$.fn.simpleWordWrapper = function (options) {
		options = $.extend({
			separator: " ",
			parts: 2,
			wrapperTag: "span",
			wrapperClass: "simpleWordWrapper",
			eachWord: false,
			returnSeparator: true,
			lastSeparator: false
		}, options);
		var element = this,
				separator = options.separator,
				parts = parseInt(options.parts),
				eachWords = options.eachWord,
				wrapperTag = options.wrapperTag,
				wrapperClass = options.wrapperClass,
    		returnSeparator = options.returnSeparator,
      	lastSeparator = options.lastSeparator,
      	returnSeparatorValue = separator;
		var init = function init() {
			if (typeof returnSeparator !== 'string' && typeof returnSeparator !== 'boolean') {
				returnSeparator = true;
			}
      returnSeparatorValue = getSeparator();

			for(var i = 0; i < element.length; i++){
				element[i].innerHTML = (element[i].innerHTML[element[i].innerHTML.length - 1] == separator) ? element[i].innerHTML.slice(0, -1) : element[i].innerHTML;
				element[i].innerHTML = (element[i].innerHTML[0] == separator) ? element[i].innerHTML.slice(1, element[i].innerHTML.length) : element[i].innerHTML;
				var itemArray = element[i].innerHTML.split(separator);
				element[i].innerHTML =  (eachWords || parseInt(itemArray.length/parts) < 2) ? eachWordsMode(itemArray) : defaultMode(itemArray);
			}
		}();
		function eachWordsMode(item) {
			var result = "";
			for(var i = 0; i < item.length; i++) {
				if(!lastSeparator && i+1 === item.length){
					result += '<'+wrapperTag+' class="'+wrapperClass+' '+wrapperClass+'-'+parseInt(i+1)+'">'+item[i]+'</'+wrapperTag+'>';
				}else{
					result += '<'+wrapperTag+' class="'+wrapperClass+' '+wrapperClass+'-'+parseInt(i+1)+'">'+item[i]+returnSeparatorValue+'</'+wrapperTag+'>';
				}
			}
			return result;
		}
		function defaultMode(item) {
			var result = '',
					position = parseInt(0),
					subArray = [],
					partsStep = 0,
					partsEnd = item.length % parts,
					i = 0;
			partsStep = item.length/parts;
			partsStep = parseInt(partsStep.toFixed(0));
			position += partsStep;
			while(position <= item.length + partsEnd) {
				var endOfArray = (position <= item.length) ? position : item.length;
				subArray.push(item.slice(i, endOfArray));
				i = position;
				position += partsStep;
			}
			function _items(item, last){
				var result = "";
				for (var i = 0; i < item.length; i++){
					if (!lastSeparator && (last && i+1 === item.length)){
						result+= item[i];
					}else{
						result += item[i]+returnSeparatorValue;
					}
				}
				return result;
			}
			function _group(item){
				var result = "";
				for (var i = 0; i < item.length; i++){
					if(i+1 === item.length){
						result += '<'+wrapperTag+' class="'+wrapperClass+' '+wrapperClass+'-'+parseInt(i+1)+'">'+_items(item[i], true)+'</'+wrapperTag+'>';
					}else{
						result += '<'+wrapperTag+' class="'+wrapperClass+' '+wrapperClass+'-'+parseInt(i+1)+'">'+_items(item[i], false)+'</'+wrapperTag+'>';
					}
				}
				return result;
			}
			result += _group(subArray);
			return result;
		}
		function getSeparator() {
			var returnSeparatorValue = separator;

			if(typeof returnSeparator === 'string'){
        returnSeparatorValue = returnSeparator;
			}

      if(typeof returnSeparator === 'boolean') {
        returnSeparatorValue = returnSeparator ? returnSeparatorValue : '';
      }

      return returnSeparatorValue;
		}
	};
}));
