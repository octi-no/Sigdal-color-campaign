var pickerHue = document.getElementById('picker-hue');
var pickerSaturation = document.getElementById('picker-saturation');
var pickerLightness = document.getElementById('picker-lightness');

var handleSaturation = document.getElementById('handle-saturation');
var handleLightness = document.getElementById('handle-lightness');

function update() {
	target.style.fill =
		'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
	handleHue.style.transform =
		'translateY(' + range(hue, 360, sliderHeight) + 'px)';
	handleSaturation.style.transform =
		'translateY(' + range(saturation, 100, sliderHeight) + 'px)';
	handleLightness.style.transform =
		'translateY(' + range(lightness, 100, sliderHeight) + 'px)';
}

pickerHue.addEventListener('click', function(event) {
	hue = range(event.layerY, sliderHeight, 360);
	update();
});
pickerSaturation.addEventListener('click', function(event) {
	saturation = range(event.layerY, sliderHeight, 100);
	update();
});
pickerLightness.addEventListener('click', function(event) {
	lightness = range(event.layerY, sliderHeight, 100);
	update();
});

document.addEventListener('click', function() {
	clearTimeout(animationInterval);
});

var mouseY = 0;
var mouseStartY = 0;
var mousedown = false;
var colorType = '';

document.addEventListener('mousemove', function(event) {
	if (mousedown) {
		var diff = event.y - 20;
		mouseStartY = event.y;

		if (colorType == 'picker-hue') {
			hue += range(diff, 256, sliderHeight);
		} else if (colorType == 'picker-saturation') {
			saturation += range(diff, 100, sliderHeight);
		} else {
			lightness += range(diff, 100, sliderHeight);
		}
		update();
	}
});

document.addEventListener('mousedown', function(event) {
	if (event.target.classList.contains('picker')) {
		mousedown = true;
		mouseStartY = event.y;
		colorType = event.target.id;
	}
});

document.addEventListener('mouseup', function(event) {
	mousedown = false;
});
