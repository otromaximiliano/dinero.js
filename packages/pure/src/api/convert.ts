import { convert as coreConvert } from '@dinero.js/core';
import { multiply, halfEven } from '@dinero.js/core/calculator';
import { buildMethod } from '../buildMethod';

/**
 * Convert a pure Dinero object to another currency.
 *
 * @param dineroObject The pure Dinero object to convert.
 * @param newCurrency The currency to convert to.
 * @param options.rates The rates to convert with.
 * @param options.roundingMode The rounding mode to use.
 * @param options.preserveScale Whether to preserve the source scale or not.
 *
 * @returns A new pure Dinero object.
 */
export const convert = buildMethod(coreConvert, {
  multiply,
  round: halfEven,
});