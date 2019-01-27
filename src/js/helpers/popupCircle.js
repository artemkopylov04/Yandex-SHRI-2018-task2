function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians)),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
  ].join(' ');
}

export default function circlePopup(context) {
  const slider = context.querySelector('.modal-block-slider-floor-temp__input');

  if (slider) {
    const orangePartSlider = context.querySelector('.modal-block-slider-floor-temp__path_orange');
    const blackPartSlider = context.querySelector('.modal-block-slider-floor-temp__path_black');
    const dashArray = context.querySelector('.modal-block-slider-floor-temp__path_dasharray');

    let degree = 270 / (slider.max - slider.min);
    orangePartSlider.setAttribute('d', describeArc(110, 110, 98, 225, 225 + (slider.value - slider.min) * degree));
    blackPartSlider.setAttribute('d', describeArc(110, 110, 98, 225 + (slider.value - slider.min) * degree, 495));
    dashArray.setAttribute('d', describeArc(110, 110, 98, 225, 495));

    slider.addEventListener('input', function () {
      const output = context.querySelector('.modal-block-slider-floor-temp__output');

      output.innerHTML = `+${this.value}`;
      degree = 270 / (this.max - this.min);
      const iteration = this.value - this.min;
      orangePartSlider.setAttribute('d', describeArc(110, 110, 98, 225, 225 + iteration * degree));
    });
  }
}
