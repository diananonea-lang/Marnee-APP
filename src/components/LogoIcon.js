import Svg, { Path, Rect, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

export default function LogoIcon({ size = 32 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <Defs>
        <LinearGradient id="body" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#6b21a8" />
          <Stop offset="1" stopColor="#40086d" />
        </LinearGradient>
        <LinearGradient id="head" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#40086d" />
          <Stop offset="1" stopColor="#1a0530" />
        </LinearGradient>
        <LinearGradient id="mic" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <Stop offset="0" stopColor="#dccaf4" />
          <Stop offset="1" stopColor="#c4a8e8" />
        </LinearGradient>
      </Defs>
      <Path d="M20 36C28 36 34 30 34 22C34 14 28 10 20 10C12 10 6 14 6 22C6 30 12 36 20 36Z" fill="url(#body)" />
      <Path d="M10 12C8 8 9 4 12 4C15 4 15 8 14 12" fill="url(#body)" />
      <Path d="M30 12C32 8 31 4 28 4C25 4 25 8 26 12" fill="url(#body)" />
      <Path d="M8 18C8 12 13 8 20 8C27 8 32 12 32 18" stroke="url(#head)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <Rect x="4" y="16" width="5" height="8" rx="2" fill="url(#head)" />
      <Rect x="31" y="16" width="5" height="8" rx="2" fill="url(#head)" />
      <Path d="M9 22C9 22 12 24 14 28" stroke="url(#head)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <Circle cx="15" cy="29" r="2.5" fill="url(#mic)" />
    </Svg>
  );
}
