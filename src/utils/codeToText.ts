const codeToWeather = (code: number): string => {
  const codes: Record<number, string> = {
    0: 'Despejado',
    1: 'Principalmente despejado',
    2: 'Parcialmente nublado',
    3: 'Nublado',
    45: 'Niebla',
    48: 'Escarcha',
    51: 'Llovizna ligera',
    53: 'Llovizna moderada',
    55: 'Llovizna densa',
    61: 'Lluvia ligera',
    63: 'Lluvia moderada',
    65: 'Lluvia fuerte',
    66: 'Lluvia helada ligera',
    67: 'Lluvia helada fuerte',
    71: 'Nieve ligera',
    73: 'Nieve moderada',
    75: 'Nieve intensa',
    77: 'Copos de nieve',
    80: 'Chubascos ligeros',
    81: 'Chubascos moderados',
    82: 'Chubascos fuertes',
    95: 'Tormenta eléctrica',
    96: 'Tormenta eléctrica ligera con lluvia',
    99: 'Tormenta eléctrica fuerte con lluvia',
  }

  return codes[code] ?? 'Invasión alienígena';
}

const codeToIcon = (code: number): string => {
  const icons: Record<string, number[]>= {
    sunny: [0],
    cloudy: [1, 2, 3, 45],
    rainy: [51, 53, 55, 61, 63, 65, 66, 67, 80, 81, 82],
    snow: [71, 73, 75, 77, 48],
    thunderstorm: [95, 96, 99],
  }

  for(const icon in icons){
    if(icons[icon].includes(code)){
      return icon
    }
  }
  return "rocket";
}

export {
  codeToWeather,
  codeToIcon,
}