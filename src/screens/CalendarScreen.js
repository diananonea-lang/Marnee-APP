import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const POSTS = [
  { day: 4, title: 'The Psychology of Brand...', type: 'Viral', priority: 'M', color: '#FFD6D6' },
  { day: 6, title: 'Navigating Your Startup...', type: 'Educational', priority: 'H', color: '#D6E8FF' },
  { day: 8, title: 'Building Resilience in B...', type: 'Viral', priority: 'M', color: '#FFD6D6' },
  { day: 11, title: 'From Idea to Impact: St...', type: 'Educational', priority: 'H', color: '#D6E8FF' },
  { day: 13, title: 'The Art of Authentic M...', type: 'Educational', priority: 'L', color: '#D6E8FF' },
  { day: 15, title: "Maximize Your Brand's...", type: 'Authority', priority: 'M', color: '#FFF3D6' },
];

export default function CalendarScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Content Calendar</Text>
          <Text style={styles.headerSub}>12 posts · Apr 27 – May 25</Text>
        </View>
        <TouchableOpacity style={styles.regenButton}>
          <Text style={styles.regenText}>↺ Regenerate</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.flex}>
        {/* Day headers */}
        <View style={styles.dayHeader}>
          {DAYS.map((d) => (
            <Text key={d} style={styles.dayLabel}>{d}</Text>
          ))}
        </View>

        {/* Calendar grid */}
        {[0, 1, 2, 3, 4].map((week) => (
          <View key={week} style={styles.weekRow}>
            {DAYS.map((_, dayIdx) => {
              const dayNum = week * 7 + dayIdx - 2;
              const post = POSTS.find((p) => p.day === dayNum);
              return (
                <View key={dayIdx} style={styles.dayCell}>
                  {dayNum > 0 && dayNum <= 29 && (
                    <Text style={styles.dayNum}>{dayNum}</Text>
                  )}
                  {post && (
                    <View style={[styles.postChip, { backgroundColor: post.color }]}>
                      <Text style={styles.postTitle} numberOfLines={2}>
                        {post.title}
                      </Text>
                      <View style={styles.postMeta}>
                        <Text style={styles.postType}>{post.type}</Text>
                        <Text style={styles.postPriority}>{post.priority}</Text>
                      </View>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.iceWhite },
  flex: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lilac,
  },
  headerTitle: { fontSize: 20, fontWeight: '800', color: colors.black },
  headerSub: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  regenButton: {
    backgroundColor: colors.lilacSoft,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  regenText: { fontSize: 13, color: colors.deepPurple, fontWeight: '600' },
  dayHeader: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 8,
    backgroundColor: colors.white,
  },
  dayLabel: {
    flex: 1,
    textAlign: 'center',
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: '500',
  },
  weekRow: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: colors.lilac,
    minHeight: 80,
  },
  dayCell: {
    flex: 1,
    borderRightWidth: 0.5,
    borderRightColor: colors.lilac,
    padding: 4,
  },
  dayNum: { fontSize: 11, color: colors.textMuted, marginBottom: 4 },
  postChip: { borderRadius: 6, padding: 6, marginTop: 2 },
  postTitle: { fontSize: 9, color: colors.black, fontWeight: '500', lineHeight: 12 },
  postMeta: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  postType: { fontSize: 8, color: colors.textMuted },
  postPriority: { fontSize: 8, color: colors.textMuted, fontWeight: '700' },
});
