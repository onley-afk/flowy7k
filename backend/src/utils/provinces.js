/**
 * Provincias de Argentina con códigos postales y costos de envío
 */

const ARGENTINA_PROVINCES = {
  'BUENOS_AIRES': {
    name: 'Buenos Aires',
    code: 'BA',
    shippingCost: 300,
    estimatedDays: 2
  },
  'CATAMARCA': {
    name: 'Catamarca',
    code: 'CT',
    shippingCost: 800,
    estimatedDays: 5
  },
  'CHACO': {
    name: 'Chaco',
    code: 'CC',
    shippingCost: 900,
    estimatedDays: 6
  },
  'CHUBUT': {
    name: 'Chubut',
    code: 'CH',
    shippingCost: 1500,
    estimatedDays: 7
  },
  'CORDOBA': {
    name: 'Córdoba',
    code: 'CD',
    shippingCost: 600,
    estimatedDays: 4
  },
  'CORRIENTES': {
    name: 'Corrientes',
    code: 'CR',
    shippingCost: 850,
    estimatedDays: 5
  },
  'ENTRE_RIOS': {
    name: 'Entre Ríos',
    code: 'ER',
    shippingCost: 500,
    estimatedDays: 3
  },
  'FORMOSA': {
    name: 'Formosa',
    code: 'FO',
    shippingCost: 1000,
    estimatedDays: 6
  },
  'JUJUY': {
    name: 'Jujuy',
    code: 'JY',
    shippingCost: 1200,
    estimatedDays: 7
  },
  'LA_PAMPA': {
    name: 'La Pampa',
    code: 'LP',
    shippingCost: 700,
    estimatedDays: 5
  },
  'LA_RIOJA': {
    name: 'La Rioja',
    code: 'LR',
    shippingCost: 900,
    estimatedDays: 6
  },
  'MENDOZA': {
    name: 'Mendoza',
    code: 'MZ',
    shippingCost: 1000,
    estimatedDays: 6
  },
  'MISIONES': {
    name: 'Misiones',
    code: 'MI',
    shippingCost: 950,
    estimatedDays: 6
  },
  'NEUQUEN': {
    name: 'Neuquén',
    code: 'NQ',
    shippingCost: 1300,
    estimatedDays: 7
  },
  'RIO_NEGRO': {
    name: 'Río Negro',
    code: 'RN',
    shippingCost: 1400,
    estimatedDays: 7
  },
  'SALTA': {
    name: 'Salta',
    code: 'SA',
    shippingCost: 1100,
    estimatedDays: 7
  },
  'SAN_JUAN': {
    name: 'San Juan',
    code: 'SJ',
    shippingCost: 950,
    estimatedDays: 6
  },
  'SAN_LUIS': {
    name: 'San Luis',
    code: 'SL',
    shippingCost: 800,
    estimatedDays: 5
  },
  'SANTA_CRUZ': {
    name: 'Santa Cruz',
    code: 'SC',
    shippingCost: 1800,
    estimatedDays: 8
  },
  'SANTA_FE': {
    name: 'Santa Fe',
    code: 'SF',
    shippingCost: 550,
    estimatedDays: 3
  },
  'SANTIAGO_DEL_ESTERO': {
    name: 'Santiago del Estero',
    code: 'SE',
    shippingCost: 900,
    estimatedDays: 6
  },
  'TIERRA_DEL_FUEGO': {
    name: 'Tierra del Fuego',
    code: 'TF',
    shippingCost: 2000,
    estimatedDays: 10
  },
  'TUCUMAN': {
    name: 'Tucumán',
    code: 'TM',
    shippingCost: 950,
    estimatedDays: 6
  }
};

/**
 * Obtiene el costo de envío para una provincia
 * @param {string} provinceKey - Clave de la provincia (ej: 'BUENOS_AIRES')
 * @returns {object|null} Objeto con información de envío o null
 */
function getShippingCost(provinceKey) {
  return ARGENTINA_PROVINCES[provinceKey.toUpperCase()] || null;
}

/**
 * Lista todas las provincias disponibles
 * @returns {array} Array de provincias
 */
function getAllProvinces() {
  return Object.entries(ARGENTINA_PROVINCES).map(([key, value]) => ({
    id: key,
    ...value
  }));
}

module.exports = {
  ARGENTINA_PROVINCES,
  getShippingCost,
  getAllProvinces
};
