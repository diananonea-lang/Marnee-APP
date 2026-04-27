import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { colors } from '../theme/colors';

const SECTIONS = [
  { title: 'Business Context', count: 3 },
  { title: 'Business Model', count: 4 },
  { title: 'Core Offer', count: 3 },
  { title: 'Ideal Customer', count: 3 },
  { title: 'Positioning & Market', count: 4 },
  { title: 'Branding & Assets', count: 1 },
  { title: 'Marketing & Channels', count: 1 },
  { title: 'Content & Execution', count: 3 },
  { title: 'Growth & Priorities', count: 3 },
];

const TOTAL = 25;

export default function QuestionsScreen({ navigation }) {
  const [answer, setAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const progress = Math.round((currentQuestion / TOTAL) * 100);

  function handleNext() {
    if (currentQuestion < TOTAL) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer('');
    } else {
      navigation.navigate('Main');
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.layout}>
          {/* Sidebar */}
          <View style={styles.sidebar}>
            <TouchableOpacity
              style={styles.backRow}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backText}>← Back</Text>
            </TouchableOpacity>

            <Text style={styles.sidebarTitle}>Brand Test</Text>
            <Text style={styles.sidebarSub}>
              Complete all sections to unlock your personalized marketing campaign.
            </Text>

            <Text style={styles.sectionLabel}>SECTIONS</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              {SECTIONS.map((s, i) => (
                <View key={i} style={styles.sectionRow}>
                  <Text style={[styles.sectionName, i === 0 && styles.sectionActive]}>
                    {s.title}
                  </Text>
                  <Text style={styles.sectionCount}>0/{s.count}</Text>
                </View>
              ))}
            </ScrollView>

            {/* Bottom progress */}
            <View style={styles.sidebarFooter}>
              <Text style={styles.questionCount}>
                Question {currentQuestion} of {TOTAL}
              </Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${progress}%` }]} />
              </View>
              <Text style={styles.progressText}>{progress}%</Text>
            </View>
          </View>

          {/* Main content */}
          <View style={styles.content}>
            {/* Section + required badge */}
            <View style={styles.questionMeta}>
              <View style={styles.sectionBadge}>
                <Text style={styles.sectionBadgeText}>
                  Business Context · Question {currentQuestion}
                </Text>
              </View>
              <Text style={styles.requiredText}>* Required</Text>
            </View>

            <Text style={styles.questionText}>
              In one sentence, how would you describe your business?
            </Text>

            <TextInput
              style={styles.textarea}
              value={answer}
              onChangeText={setAnswer}
              placeholder="e.g., We help SaaS companies scale their content marketing..."
              placeholderTextColor={colors.textMuted}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />

            {/* Nav buttons */}
            <View style={styles.navRow}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  if (currentQuestion > 1) {
                    setCurrentQuestion(currentQuestion - 1);
                    setAnswer('');
                  } else {
                    navigation.goBack();
                  }
                }}
              >
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>
                  {currentQuestion === TOTAL ? 'Finish' : 'Next'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.iceWhite,
  },
  flex: {
    flex: 1,
  },
  layout: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 160,
    backgroundColor: colors.white,
    borderRightWidth: 1,
    borderRightColor: colors.lilac,
    padding: 16,
  },
  backRow: {
    marginBottom: 16,
  },
  backText: {
    fontSize: 13,
    color: colors.black,
    fontWeight: '500',
  },
  sidebarTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 6,
  },
  sidebarSub: {
    fontSize: 11,
    color: colors.textMuted,
    lineHeight: 15,
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 9,
    color: colors.textMuted,
    letterSpacing: 1,
    marginBottom: 8,
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lilac,
  },
  sectionName: {
    fontSize: 11,
    color: colors.black,
    flex: 1,
  },
  sectionActive: {
    color: colors.deepPurple,
    fontWeight: '600',
  },
  sectionCount: {
    fontSize: 10,
    color: colors.textMuted,
  },
  sidebarFooter: {
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 0.5,
    borderTopColor: colors.lilac,
  },
  questionCount: {
    fontSize: 11,
    color: colors.textMuted,
    marginBottom: 6,
  },
  progressBar: {
    height: 3,
    backgroundColor: colors.lilac,
    borderRadius: 3,
    marginBottom: 4,
  },
  progressFill: {
    height: 3,
    backgroundColor: colors.deepPurple,
    borderRadius: 3,
  },
  progressText: {
    fontSize: 10,
    color: colors.textMuted,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  questionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  sectionBadge: {
    backgroundColor: colors.lilacSoft,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  sectionBadgeText: {
    fontSize: 11,
    color: colors.deepPurple,
    fontWeight: '500',
  },
  requiredText: {
    fontSize: 12,
    color: '#c0392b',
    fontWeight: '500',
  },
  questionText: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.black,
    lineHeight: 30,
    marginBottom: 24,
  },
  textarea: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.lilac,
    padding: 16,
    fontSize: 14,
    color: colors.black,
    marginBottom: 24,
    maxHeight: 160,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  backButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.lilac,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '500',
  },
  nextButton: {
    flex: 1,
    backgroundColor: colors.black,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 14,
    color: colors.iceWhite,
    fontWeight: '700',
  },
});
