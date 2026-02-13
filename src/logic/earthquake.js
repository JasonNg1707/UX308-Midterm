export const earthquakeDamage = (intensity) => {

  if (intensity < 5) return "Little or no damage";
  if (intensity < 5.5) return "Some damage";
  if (intensity < 6.5) return "Serious damage: walls may crack or fall";
  if (intensity < 7.5) return "Disaster: buildings may collapse";
  return "Catastrophe: most buildings destroyed";
};