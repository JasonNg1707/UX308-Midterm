import { fahrenheitToCelsius } from '../logic/temperature';

describe('fahrenheitToCelsius', () => {

  it('freezing water (32F)', () => {
    expect(fahrenheitToCelsius(32)).toBeCloseTo(0);
  });

  it('boiling water (212F)', () => {
    expect(fahrenheitToCelsius(212)).toBeCloseTo(100);
  });

  it('room temperature (70F)', () => {
    expect(fahrenheitToCelsius(70)).toBeCloseTo(21.11, 1);
  });

});