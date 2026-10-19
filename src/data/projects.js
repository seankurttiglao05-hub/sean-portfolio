export const projects = [
  {
    id: 'smartcut',
    name: 'SmartCut',
    role: 'Capstone · Sole developer',
    summary: "An Android app that recommends hairstyles based on the user's face.",
    points: [
      'Built with React Native and Expo, shipped as an APK to alpha testers',
      "Uses image processing to analyze the user's photo",
      'Evaluated with ISO/IEC 25059 and the System Usability Scale',
    ],
    tags: ['React Native', 'Expo', 'Android', 'Image processing'],
  },
  {
    id: 'weather',
    name: 'Weather',
    role: 'Personal project · Mobile and web',
    summary: 'A weather app that runs on Android, iOS and the web from one codebase, with a daily helper for Filipino weather.',
    points: [
      'Live forecast, air quality and UV from the Open-Meteo APIs, by city search or GPS',
      'Background color, moving clouds and falling rain change with the current weather',
      'Daily helper: rain countdown, best time to hang laundry (Sampay meter) and PAGASA heat index',
    ],
    tags: ['React Native', 'Expo', 'JavaScript', 'REST API'],
    live: 'https://weather-app-seven-vert-37.vercel.app',
    code: 'https://github.com/seankurttiglao05-hub/weather-app',
  },
 
]
