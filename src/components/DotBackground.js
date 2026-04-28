import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Svg, { Defs, Pattern, Circle, Rect } from 'react-native-svg';

export default function DotBackground({ children, style }) {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.container, style]}>
      <Svg style={StyleSheet.absoluteFill} width={width} height={height}>
        <Defs>
          <Pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <Circle cx="1" cy="1" r="1" fill="#c8c8c8" />
          </Pattern>
        </Defs>
        <Rect width={width} height={height} fill="url(#dots)" />
      </Svg>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f6f6' },
});
