import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import LogoIcon from '../components/LogoIcon';
import DotBackground from '../components/DotBackground';

const PILLS = ['Social Strategy', 'Content Intelligence', 'Brand Voice', 'Audience Insights'];

export default function SplashScreen({ navigation }) {
  return (
    <DotBackground>
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.iceWhite} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>
          <Text style={styles.logoBold}>Marnee</Text>
          <Text style={styles.logoLight}> Lite</Text>
        </Text>
        <TouchableOpacity style={styles.langBtn}>
          <Text style={styles.langText}>ES</Text>
        </TouchableOpacity>
      </View>

      {/* Center */}
      <View style={styles.center}>
        <Image
          source={require('../assets/mascot.png')}
          style={styles.mascot}
          resizeMode="contain"
        />
        <Text style={styles.heading}>Your AI Social Media{'\n'}Strategist</Text>
        <Text style={styles.desc}>
          Marnee Lite analyzes your personal brand and builds a social strategy tailored to who you are.
        </Text>
        <View style={styles.pillsRow}>
          {PILLS.map(p => (
            <View key={p} style={styles.pill}>
              <Text style={styles.pillText}>{p}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.copyright}>© 2026 Marnee Lite</Text>
    </SafeAreaView>
    </DotBackground>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    fontSize: 19,
    color: colors.black,
    letterSpacing: -0.3,
  },
  logoBold: {
    fontWeight: '700',
  },
  logoLight: {
    fontWeight: '300',
  },
  langBtn: {
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: 'rgba(30,30,30,0.15)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  langText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.black,
  },
  center: {
    alignItems: 'center',
  },
  mascot: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.deepPurple,
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 12,
  },
  desc: {
    fontSize: 13,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  pillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  pill: {
    borderWidth: 1.5,
    borderColor: colors.lilac,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 7,
    backgroundColor: colors.white,
  },
  pillText: {
    fontSize: 12,
    color: colors.black,
  },
  copyright: {
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(30,30,30,0.35)',
  },
});
