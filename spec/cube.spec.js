import { cubeVolume } from '../logic/cube';

describe('cubeVolume', () => {

  it('volume of 1m cube', () => {
    expect(cubeVolume(1)).toBe(1);
  });

  it('volume of 2m cube', () => {
    expect(cubeVolume(2)).toBe(8);
  });

  it('volume of 3m cube', () => {
    expect(cubeVolume(3)).toBe(27);
  });

});