/**
 * Creates a new Point.
 *
 * @param {Object} [opt_options=] A map of initial properties.
 * @constructor
 */
function Point(opt_options) {

  var options = opt_options || {};
  options.name = 'Point';
  BitShadowMachine.Item.call(this, options);
}
BitShadowMachine.Utils.extend(Point, BitShadowMachine.Item);

/**
 * Initializes the Point.
 * @param {Object} options Initial options.
 */
Point.prototype.init = function(options) {
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.color = options.color || [100, 100, 100];
  this.location = options.location || new BitShadowMachine.Vector(this.world.width / 2, this.world.height / 2);
};

/**
 * Updates properties.
 */
Point.prototype.step = function() {};