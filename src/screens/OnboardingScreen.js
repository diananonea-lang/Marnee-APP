import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

export default function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Step badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Let's get to know yourself</Text>
        </View>

        {/* Heading */}
        <Text style={styles.heading}>
          Build Your{'\n'}
          <Text style={styles.headingAccent}>Personal Brand</Text>
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Our AI analyzes your business and personal brand to design a personalized
          marketing strategy that drives real results.
        </Text>

        {/* Test card */}
        <View style={styles.card}>
          <View style={styles.requiredBadge}>
            <Text style={styles.requiredText}>★  REQUIRED</Text>
          </View>

          <View style={styles.cardHeader}>
            <Text style={styles.cardIcon}>💬</Text>
            <View style={styles.cardTitleWrap}>
              <Text style={styles.cardTitle}>Brand Test</Text>
              <Text style={styles.cardDesc}>
                Covers your business model, target audience, positioning, and growth priorities.
              </Text>
            </View>
          </View>

          <View style={styles.cardMeta}>
            <View style={styles.metaBadge}>
              <Text style={styles.metaBadgeText}>Mandatory</Text>
            </View>
            <Text style={styles.metaPriority}>Priority 1</Text>
          </View>

          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('Questions')}
          >
            <Text style={styles.startButtonText}>Start Test</Text>
          </TouchableOpacity>
        </View>

        {/* Progress hint */}
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.progressText}>0%</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.iceWhite,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
  },
  badge: {
    backgroundColor: colors.lilacSoft,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginBottom: 28,
  },
  badgeText: {
    fontSize: 12,
    color: colors.deepPurple,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  heading: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.black,
    textAlign: 'center',
    lineHeight: 42,
    marginBottom: 16,
  },
  headingAccent: {
    color: colors.deepPurple,
  },
  description: {
    fontSize: 15,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.lilac,
    marginBottom: 32,
    position: 'relative',
  },
  requiredBadge: {
    position: 'absolute',
    top: -14,
    right: 16,
    backgroundColor: colors.deepPurple,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  requiredText: {
    color: colors.iceWhite,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  cardHeader: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
    marginTop: 8,
  },
  cardIcon: {
    fontSize: 32,
  },
  cardTitleWrap: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 18,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  metaBadge: {
    backgroundColor: colors.lilacSoft,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  metaBadgeText: {
    fontSize: 12,
    color: colors.deepPurple,
    fontWeight: '500',
  },
  metaPriority: {
    fontSize: 12,
    color: colors.textMuted,
  },
  startButton: {
    backgroundColor: colors.black,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
  },
  startButtonText: {
    color: colors.iceWhite,
    fontSize: 15,
    fontWeight: '700',
  },
  progressBar: {
    width: '100%',
    height: 2,
    backgroundColor: colors.lilac,
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    width: '0%',
    height: 2,
    backgroundColor: colors.deepPurple,
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: colors.textMuted,
  },
});
