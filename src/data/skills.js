import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss, SiVite, SiExpo, SiAndroid,
  SiMysql, SiFirebase, SiNodedotjs, SiNpm, SiXampp,
  SiPython, SiPhp, SiCplusplus,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { TbBrandReactNative, TbBrandVscode, TbFaceId } from 'react-icons/tb'

// learning: true shows a small "Learning" badge next to the skill.
// basic: true shows a small "Basic" badge (I know the basics of it).
// color is the logo color; leave it out to use the normal text color.
export const skills = [
  { name: 'React', icon: SiReact, color: '#58C4DC' },
  { name: 'JavaScript', icon: SiJavascript, color: '#E8C900' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss, color: '#663399' },
  { name: 'Vite', icon: SiVite, color: '#9135FF' },
  { name: 'React Native', icon: TbBrandReactNative, color: '#58C4DC' },
  { name: 'Expo', icon: SiExpo },
  { name: 'Android APK builds', icon: SiAndroid, color: '#3DDC84' },
  { name: 'Image processing', icon: TbFaceId },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Firebase', icon: SiFirebase, color: '#F5A100' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'npm', icon: SiNpm, color: '#CB3837' },
  { name: 'VS Code', icon: TbBrandVscode, color: '#2F9BF0' },
  { name: 'XAMPP', icon: SiXampp, color: '#FB7A24' },
  { name: 'Python', icon: SiPython, color: '#3776AB', basic: true },
  { name: 'PHP', icon: SiPhp, color: '#777BB4', basic: true },
  { name: 'Java', icon: FaJava, color: '#E76F00', basic: true },
  { name: 'C++', icon: SiCplusplus, color: '#00599C', basic: true },
]
