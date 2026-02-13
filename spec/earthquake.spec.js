import { earthquakeDamage } from '../logic/earthquake';

describe('earthquakeDamage', () => {

  it('below 5', () => {
    expect(earthquakeDamage(4.8)).toBe("Little or no damage");
  });

  it('5.2', () => {
    expect(earthquakeDamage(5.2)).toBe("Some damage");
  });

  it('6.0', () => {
    expect(earthquakeDamage(6.0)).toBe("Serious damage: walls may crack or fall");
  });

  it('7.0', () => {
    expect(earthquakeDamage(7.0)).toBe("Disaster: buildings may collapse");
  });

  it('8.0', () => {
    expect(earthquakeDamage(8.0)).toBe("Catastrophe: most buildings destroyed");
  });

});