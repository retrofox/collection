
/**
 * Expose `collection` component.
 */

module.exports = collection;

/**
 * collection container
 *
 * @param {Function} require parent require function
 * @param {Array} components components collections (optional)
 * @api public
 */

function collection(require, components) {
  if (!(this instanceof collection)) return new collection(require, components);
  this._require = require;
  this.tool = {};

  if (components) {
    for (var i = 0; i < components.length; i++) {
      this.add(components[i]);
    }
  }

  return this;
}

/**
 * Add a component
 *
 * @param {String} component component name
 * @api public
 */

collection.prototype.add= function(cmp){
  if (this.tool[cmp]) return;
  this.tool[cmp] = this._require(cmp);
  return this;
};
