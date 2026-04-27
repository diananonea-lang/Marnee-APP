import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
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

const BRAINSTORM_IDEAS = [
  { id: 1, text: 'Trending audio hook for Q2' },
  { id: 2, text: 'Collab idea with Korean beauty brand' },
  { id: 3, text: '5 myths about personal branding — carousel' },
];

export default function CalendarScreen() {
  const [activeTab, setActiveTab] = useState('Calendar');
  const [newIdea, setNewIdea] = useState('');
  const [ideas, setIdeas] = useState(BRAINSTORM_IDEAS);

  function addIdea() {
    if (!newIdea.trim()) return;
    setIdeas((prev) => [...prev, { id: Date.now(), text: newIdea.trim() }]);
    setNewIdea('');
  }

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

      {/* Tabs */}
      <View style={styles.tabRow}>
        {['Calendar', 'Brainstorming'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === 'Calendar' ? (
        <ScrollView style={styles.flex}>
          {/* Day headers */}
          <View style={styles.dayHeader}>
            {DAYS.map((d) => (
              <Text key={d} style={styles.dayLabel}>
                {d}
              </Text>
            ))}
          </View>

          {/* Calendar grid — simplified weeks */}
          <ScrollView horizontal={false}>
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
        </ScrollView>
      ) : (
        <ScrollView style={styles.flex} contentContainerStyle={styles.brainstormContent}>
          <Text style={styles.brainstormTitle}>Ideas Backlog</Text>
          <Text style={styles.brainstormSub}>Drop content ideas here to develop later.</Text>

          {/* Add idea */}
          <View style={styles.addRow}>
            <TextInput
              style={styles.ideaInput}
              value={newIdea}
              onChangeText={setNewIdea}
              placeholder="New idea..."
              placeholderTextColor={colors.textMuted}
              onSubmitEditing={addIdea}
              returnKeyType="done"
            />
            <TouchableOpacity style={styles.addButton} onPress={addIdea}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Ideas list */}
          {ideas.map((idea, i) => (
            <View key={idea.id} style={styles.ideaCard}>
              <View style={styles.ideaDot} />
              <Text style={styles.ideaText}>{idea.text}</Text>
            </View>
          ))}
        </ScrollView>
      )}
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
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.black,
  },
  headerSub: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  regenButton: {
    backgroundColor: colors.lilacSoft,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  regenText: {
    fontSize: 13,
    color: colors.deepPurple,
    fontWeight: '600',
  },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lilac,
    paddingHorizontal: 20,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 4,
    marginRight: 24,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: colors.deepPurple,
  },
  tabText: {
    fontSize: 14,
    color: colors.textMuted,
    fontWeight: '500',
  },
  tabTextActive: {
    color: colors.black,
    fontWeight: '700',
  },
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
  dayNum: {
    fontSize: 11,
    color: colors.textMuted,
    marginBottom: 4,
  },
  postChip: {
    borderRadius: 6,
    padding: 6,
    marginTop: 2,
  },
  postTitle: {
    fontSize: 9,
    color: colors.black,
    fontWeight: '500',
    lineHeight: 12,
  },
  postMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  postType: {
    fontSize: 8,
    color: colors.textMuted,
  },
  postPriority: {
    fontSize: 8,
    color: colors.textMuted,
    fontWeight: '700',
  },
  brainstormContent: {
    padding: 20,
  },
  brainstormTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.black,
    marginBottom: 6,
  },
  brainstormSub: {
    fontSize: 13,
    color: colors.textMuted,
    marginBottom: 20,
  },
  addRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  ideaInput: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lilac,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.black,
  },
  addButton: {
    backgroundColor: colors.deepPurple,
    width: 48,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: colors.iceWhite,
    fontSize: 24,
    fontWeight: '300',
  },
  ideaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lilac,
    padding: 14,
    marginBottom: 10,
  },
  ideaDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.deepPurple,
  },
  ideaText: {
    fontSize: 14,
    color: colors.black,
    flex: 1,
  },
});
