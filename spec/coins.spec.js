import { totalCoins } from '../logic/coins';

describe('totalCoins', () => {

  it('returns 0 when all coins are 0', () => {
    expect(totalCoins(0,0,0,0,0)).toBe(0);
  });

  it('calculates mixed coins correctly', () => {
    expect(totalCoins(1,1,1,1,1)).toBeCloseTo(3.40);
  });

  it('calculates larger values', () => {
    expect(totalCoins(10,5,4,2,3)).toBeCloseTo(13.40);
  });

});