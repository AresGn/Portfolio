// Cette fonction combine des classes CSS conditionnellement
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
} 