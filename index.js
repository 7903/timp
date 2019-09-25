$(function() {
	// alert(1);
	var canvas = document.getElementById('canvas');
	var cantext = canvas.getContext('2d');
	cantext.strokeStyle = '#000000';

	//绘制文字
	cantext.font = '14px 微软雅黑';
	cantext.fillStyle = '#000000';
	cantext.textAlign = 'center';

	// cantext.lineWidth = 1;


	// 	for (var i = 0; i < 15; i++) {
	// 		cantext.moveTo(20 + 42.8 * i, 20);
	// 		cantext.lineTo(20 + 42.8 * i, 620);
	// 
	// 		//绘制文字
	// 		cantext.font = '14px 微软雅黑';
	// 		cantext.fillStyle = '#000000';
	// 		cantext.textAlign = 'center';
	// 		cantext.fillText(i+1,20 + 42.8 * i,15);
	// 
	// 	}


	for (var i = 0; i < 15; i++) {

		// x
		cantext.moveTo(20, 20 + 42.8 * i);
		cantext.lineTo(620, 20 + 42.8 * i);

		cantext.fillText(i + 1, 10, 25 + 42.8 * i);


		// y
		cantext.moveTo(20 + 42.8 * i, 20);
		cantext.lineTo(20 + 42.8 * i, 620);

		cantext.fillText(i + 1, 20 + 42.8 * i, 15);

	}


	cantext.stroke();




	var ul = $('.layer>ul');
	// 	for(var i = 0; i < 225; i++){
	// 		var $li = $(`<li data-x='${i}' data-y='${i}'></li>`);
	// 		ul.append($li);
	// 	}
	// var n = -1;
	for (var j = 0; j < 15; j++) {
		// n++;
		for (var i = 0; i < 15; i++) {
			var x = 42.6625 * i;
			var y = j * 42.6625;
			// console.log(left);
			var $li = $(`<li data-x='${x}' data-y='${y}' activ='false'></li>`);
			$li.css({
				top: y,
				left: x
			});
			ul.append($li);
		}
	}



	var li = $('.layer>ul>li');
	var liW = li.width();
	var liH = li.height();
	// console.log(liW);

	var bool = false;
	
	var white = [];
	var black = [];

	li.on('click', function() {

		// console.log($(this).attr('activ'));

		if ($(this).attr('activ') == 'true') {
			console.log('此坐标已有棋子');
			return;
		}

		$(this).attr('activ', true);

		var x = $(this).data('x');
		var y = $(this).data('y');
		// console.log(x + liW / 2, y - liH / 2);

		var color = null;
		
		//行
		var row = Math.round($(this).data('y') / liW);
		// 列
		var col = Math.round($(this).data('x') / liW);
		console.log(row,col);


		if (bool) {
			bool = false;
			color = '#fff';
			$(this).attr('name', 'white');
		} else {
			bool = true;
			color = '#000';
			$(this).attr('name', 'black');
		}

		cantext.beginPath();
		cantext.fillStyle = color;
		cantext.arc(x + liW / 2, y + liH / 2, 10, 0, 360 / 180 * Math.PI, false);
		cantext.fill();
		cantext.closePath();

		
// 		for (var i = 0; i < li.length; i++) {
// 			if (li.eq(i).data('y') == 0) {
// 				// console.log(i);
// 			}
// 		}


	});



});
