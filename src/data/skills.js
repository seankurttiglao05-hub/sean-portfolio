import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiVite, SiExpo, SiAndroid,
  SiMysql, SiFirebase, SiNodedotjs, SiNpm, SiXampp,
} from 'react-icons/si'
import { TbBrandReactNative, TbBrandVscode, TbFaceId } from 'react-icons/tb'

// learning: true shows a small "Learning" badge next to the skill.
// color is the logo color; leave it out to use the normal text color.
export const skills = [
  { name: 'React', icon: SiReact, color: '#58C4DC' },
  { name: 'JavaScript', icon: SiJavascript, color: '#E8C900' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#663399' },
  { name: 'Vite', icon: SiVite, color: '#9135FF' },
  { name: 'React Native', icon: TbBrandReactNative, color: '#58C4DC' },
  { name: 'Expo', icon: SiExpo },
  { name: 'Android APK builds', icon: SiAndroid, color: '#3DDC84' },
  { name: 'Image processing', icon: TbFaceId },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', learning: true },
  { name: 'Firebase', icon: SiFirebase, color: '#F5A100', learning: true },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'npm', icon: SiNpm, color: '#CB3837' },
  { name: 'VS Code', icon: TbBrandVscode, color: '#2F9BF0' },
  { name: 'XAMPP', icon: SiXampp, color: '#FB7A24' },
]
