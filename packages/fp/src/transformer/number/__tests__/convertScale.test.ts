import { USD } from '@dinero.js/currencies';
import { Dinero, toSnapshot, convertScale } from '../../..';

describe('convertScale', () => {
  it('returns a new functional Dinero object with a new scale and a converted amount', () => {
    const d = Dinero({ amount: 500, currency: USD, scale: 2 });
    const snapshot = toSnapshot(convertScale(d, 4));

    expect(snapshot).toMatchObject({ amount: 50000, scale: 4 });
  });
  it('returns a new functional Dinero object with a new scale and a converted rounded amount', () => {
    const d = Dinero({ amount: 14270, currency: USD, scale: 2 });
    const snapshot = toSnapshot(convertScale(d, 0));

    expect(snapshot).toMatchObject({ amount: 143, scale: 0 });
  });
  it('converts between scales correctly', () => {
    const d = Dinero({ amount: 333336, currency: USD, scale: 5 });
    const snapshot = toSnapshot(convertScale(d, 2));

    expect(snapshot).toMatchObject({ amount: 333, scale: 2 });
  });
  it('converts from long initial scales correctly', () => {
    const d = Dinero({ amount: 3333333336, currency: USD, scale: 9 });
    const snapshot = toSnapshot(convertScale(d, 2));

    expect(snapshot).toMatchObject({ amount: 333, scale: 2 });
  });
});