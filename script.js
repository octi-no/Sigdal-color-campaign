var hue = 150;
var saturation = 0;
var lightness = 38;
var sliderWidth = 470;
var animationIndex = 0;

var handleHue = document.getElementById('handle-hue');
setTimeout(function() {
	handleHue.classList.add('transition');
}, 10);

var target = document.getElementById('target');

var animations = [
	{
		hue: 150,
		saturation: 0,
		lightness: 38
	},
	{
		hue: 139,
		saturation: 13,
		lightness: 75
	},
	{
		hue: 207,
		saturation: 5,
		lightness: 62
	},
	{
		hue: 13,
		saturation: 5,
		lightness: 64
	},
	{
		hue: 45,
		saturation: 61,
		lightness: 88
	}
];

var animationInterval = setInterval(function() {
	if (animationIndex == animations.length) {
		animationIndex = 0;
	}
	hue = animations[animationIndex].hue;
	saturation = animations[animationIndex].saturation;
	lightness = animations[animationIndex].lightness;

	update();

	animationIndex++;
}, 2000);

function range(value, inMax, outMax) {
	return (value * outMax) / inMax;
}

function update() {
	target.style.fill =
		'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
	handleHue.style.transform =
		'translateY(' + range(hue, 360, sliderWidth) + 'px)';
}

update();
