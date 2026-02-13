export const totalCoins = (nickels, dimes, quarters, loonies, toonies) => {
  return (
    nickels * 0.05 +
    dimes * 0.10 +
    quarters * 0.25 +
    loonies * 1.0 +
    toonies * 2.0
  );
};