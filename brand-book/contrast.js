/* Mimee Creation Brand book tervezet · WCAG contrast calculation. */
(function (root) {
  const colors = [
    { name: 'Fehér', hex: '#FFFFFF', group: 'kiegészítő' },
    { name: 'Törtfehér', hex: '#F9F5EF', group: 'kiegészítő' },
    { name: 'Púderrózsaszín', hex: '#E09AA6', group: 'elsődleges' },
    { name: 'Türkiz', hex: '#39B7C4', group: 'elsődleges' },
    { name: 'Márkagrafit', hex: '#5D6672', group: 'kiegészítő' },
    { name: 'Szöveggrafit', hex: '#3E454F', group: 'funkcionális' },
    { name: 'Bézs', hex: '#D6C3A6', group: 'kiegészítő' },
    { name: 'Zsályazöld', hex: '#A8B8A2', group: 'kiegészítő' },
    { name: 'Lágy vajsárga', hex: '#EEDB91', group: 'kiegészítő' },
    { name: 'Siker', hex: '#1F7A54', group: 'státusz' },
    { name: 'Figyelmeztetés', hex: '#8A6414', group: 'státusz' },
    { name: 'Hiba', hex: '#B4344B', group: 'státusz' }
  ];
  function luminance(hex) {
    const c = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map(v => v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  function ratio(a, b) {
    const x = luminance(a), y = luminance(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  }
  function grade(value) { return value >= 4.5 ? 'normal' : value >= 3 ? 'large' : 'fail'; }
  const api = { colors, ratio, grade };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.MimeeContrast = api;
})(typeof window !== 'undefined' ? window : globalThis);
