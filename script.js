var hue = 189;
var saturation = 27;
var lightness = 56;
var sliderHeight = 470;

var pickerHue = document.getElementById('picker-hue');
var pickerSaturation = document.getElementById('picker-saturation');
var pickerLightness = document.getElementById('picker-lightness');

var handleHue = document.getElementById('handle-hue');
var handleSaturation = document.getElementById('handle-saturation');
var handleLightness = document.getElementById('handle-lightness');

var target = document.getElementById('target');

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

function range(value, inMax, outMax) {
	return (value * outMax) / inMax;
}

update();

var animations = [
	{
		hue: 32,
		saturation: 14,
		lightness: 56
	},
	{
		hue: 187,
		saturation: 27,
		lightness: 56
	},
	{
		hue: 327,
		saturation: 25,
		lightness: 77
	}
];
animationIndex = 0;
var animationInterval = setInterval(function() {
	console.log('run run run', animationIndex);
	if (animationIndex == animations.length) {
		animationIndex = 0;
	}
	hue = animations[animationIndex].hue;
	saturation = animations[animationIndex].saturation;
	lightness = animations[animationIndex].lightness;
	update();
	animationIndex++;
}, 3000);

document.addEventListener('click', function() {
	clearTimeout(animationInterval);
});
