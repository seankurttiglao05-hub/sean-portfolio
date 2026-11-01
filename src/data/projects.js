// categories decide which filter tabs show the project: 'Mobile', 'Web'
// media: { type: 'video' | 'phone' | 'browser', src, webm?, poster?, full?, vertical? }
// featured: true puts a "Featured" badge on the card
export const projects = [
  {
    id: 'smartcut',
    name: 'SmartCut',
    role: 'Capstone · Sole developer',
    summary: "An Android app that recommends hairstyles based on the user's face.",
    points: [
      'Built with React Native and Expo, shipped as an APK to alpha testers',
      "Analyzes the user's selfie to find their face shape and skin tone, then previews each haircut on their own photo",
      'Evaluated with ISO/IEC 25059 and the System Usability Scale',
    ],
    tags: ['React Native', 'Expo', 'Android', 'Image processing'],
    categories: ['Mobile', 'AI'],
    featured: true,
    media: {
      type: 'video',
      vertical: true, // tall 9:16 promo: tapping it opens the pop-up with sound
      src: '/projects/smartcut-promo.mp4',
      poster: '/projects/smartcut-promo-poster.jpg',
    },
  },
  {
    id: 'generic-finder',
    name: 'Generic Finder',
    role: 'Personal project · Full stack',
    summary:
      'A website that shows the generic name behind Philippine medicine brands, so people can buy the same medicine for less.',
    points: [
      'Search 560+ medicines by brand or generic name, or scan a medicine box with the camera',
      'Brand vs generic price comparison and drug studies for nursing students',
      'Admin panel with secure login, plus search insights showing what people look for',
    ],
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'REST API'],
    categories: ['Web', 'AI'],
    media: { type: 'browser', src: '/projects/generic-finder.jpg' },
    code: 'https://github.com/seankurttiglao05-hub/generic-finder',
  },
  {
    id: 'weather',
    name: 'Weather',
    role: 'Personal project · Mobile and web',
    summary:
      'A weather app that runs on Android, iOS and the web from one codebase, with a daily helper for Filipino weather.',
    points: [
      'Live forecast, air quality and UV from the Open-Meteo APIs, by city search or GPS',
      'Background color, moving clouds and falling rain change with the current weather',
      'Daily helper: rain countdown, best time to hang laundry (Sampay meter) and PAGASA heat index',
    ],
    tags: ['React Native', 'Expo', 'JavaScript', 'REST API'],
    categories: ['Mobile', 'Web'],
    media: { type: 'phone', src: '/projects/weather.jpg' },
    live: 'https://weather-app-seven-vert-37.vercel.app',
  },
  {
    id: 'spa-agent',
    name: 'Spa Booking Assistant',
    role: 'AI agent · Demo for a sample spa',
    summary:
      'An AI chat assistant for a fictional Filipino spa that helps customers choose a treatment and prepare a booking.',
    points: [
      'Answers questions about services, prices, payment and policies, in English or Taglish',
      'Recommends a treatment based on what the customer needs and how much time they have',
      'Collects booking details and preferences, suggests an add-on, and confirms everything in a clear recap',
    ],
    tags: ['AI agent', 'Agentplace', 'Prompt design', 'Testing'],
    categories: ['AI'],
    live: 'https://qli5yjrnvkge.run.agentplace.io',
  },
]
