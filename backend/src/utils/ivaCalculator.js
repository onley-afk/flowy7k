/**
 * Utilidades para cálculo de IVA en Argentina
 * IVA estándar: 21%
 */

const IVA_RATE = 0.21; // 21%

/**
 * Calcula el IVA sobre un monto
 * @param {number} amount - Monto sin IVA
 * @returns {number} IVA calculado
 */
function calculateIVA(amount) {
  return parseFloat((amount * IVA_RATE).toFixed(2));
}

/**
 * Calcula el total con IVA incluido
 * @param {number} amount - Monto sin IVA
 * @returns {number} Monto total con IVA
 */
function addIVA(amount) {
  return parseFloat((amount + calculateIVA(amount)).toFixed(2));
}

/**
 * Calcula el subtotal sin IVA (inverso)
 * @param {number} totalWithIVA - Monto con IVA
 * @returns {number} Subtotal sin IVA
 */
function removeIVA(totalWithIVA) {
  return parseFloat((totalWithIVA / (1 + IVA_RATE)).toFixed(2));
}

/**
 * Desglose completo de precios
 * @param {number} subtotal - Monto sin IVA
 * @returns {object} Objeto con subtotal, IVA y total
 */
function getPriceBreakdown(subtotal) {
  const iva = calculateIVA(subtotal);
  const total = addIVA(subtotal);

  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    iva: iva,
    total: total,
    ivaPercentage: (IVA_RATE * 100)
  };
}

module.exports = {
  calculateIVA,
  addIVA,
  removeIVA,
  getPriceBreakdown,
  IVA_RATE
};
