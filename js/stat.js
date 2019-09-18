'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 260;
var COLUMN_X = CLOUD_X + GAP;
var COLUMN_WIDTH = 40;
var COLUMN_MARGIN = 50;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeStyle = 'blue';
  ctx.strokeRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
};

var getMaxTime = function (times) {
  var maxTime = times[0];
  for (var i = 1; i < times.length; i++) {
    if (maxTime < times[i]) {
      maxTime = times[i];
    }
  }
  return maxTime;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  var maxTime = getMaxTime(times);
  var columnX = COLUMN_X;

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsla(225, ' + Math.random() * 100 + '% , 50%, 1)';
    }

    var columnHeight = times[i] * BAR_HEIGHT / maxTime;
    ctx.fillText(names[i], columnX, TEXT_GAP);
    ctx.fillRect(columnX, CLOUD_HEIGHT - 20, COLUMN_WIDTH, -columnHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), columnX, CLOUD_HEIGHT - columnHeight - 40);
    columnX += COLUMN_WIDTH + COLUMN_MARGIN;
  }
};
