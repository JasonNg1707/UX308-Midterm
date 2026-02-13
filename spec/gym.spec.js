import { gymCost } from '../logic/gym';

describe('gymCost', () => {

  it('1 friend → 5%', () => {
    expect(gymCost(100,1)).toBe(95);
  });

  it('2 friends → 10%', () => {
    expect(gymCost(100,2)).toBe(90);
  });

  it('3 friends → 15%', () => {
    expect(gymCost(100,3)).toBe(85);
  });

  it('4 friends → 15%', () => {
    expect(gymCost(100,4)).toBe(85);
  });

});