// Product type structure (using JSDoc for type documentation)

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {string} image
 * @property {string} category
 * @property {boolean} inStock
 * @property {number} rating
 * @property {number} reviews
 */

/**
 * @typedef {Object} CartItem
 * @property {number} id
 * @property {string} name
 * @property {number} price
 * @property {string} image
 * @property {number} quantity
 */

/**
 * @typedef {Object} CartContextType
 * @property {CartItem[]} items
 * @property {function(Product): void} addToCart
 * @property {function(number): void} removeFromCart
 * @property {function(number, number): void} updateQuantity
 * @property {function(): void} clearCart
 * @property {number} totalItems
 * @property {number} totalPrice
 */

export {};