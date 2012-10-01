
/**
 * Expose `collection` component.
 */

module.exports = collection;

/**
 * collection container
 *
 * @param {Function} require parent require function
 * @param {Array} components components collections
 * @api public
 */

function collection(require, components) {
  if (!(this instanceof collection)) return new collection(require, components);
  if (components) {
    for (var i = 0; i < components.length; i++) {
      var cmp = components[i];
      if (!this[cmp]) {
        this[cmp] = require(cmp);
      }
    }
  }

  return this;
}
