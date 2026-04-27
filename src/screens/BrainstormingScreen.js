import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { colors } from '../theme/colors';

const CATEGORIES = [
  { label: 'Viral', color: '#FFD6D6' },
  { label: 'Educational', color: '#D6E8FF' },
  { label: 'Authority', color: '#FFF3D6' },
  { label: 'Personal', color: '#D6FFE8' },
  { label: 'Promo', color: colors.lilac },
  { label: 'Collab', color: '#F0D6FF' },
];

const INITIAL_IDEAS = [
  { id: 1, text: 'Trending audio hook for Q2', category: 'Viral' },
  { id: 2, text: 'Collab idea with Korean beauty brand', category: 'Collab' },
  { id: 3, text: '5 myths about personal branding — carousel', category: 'Educational' },
];

export default function BrainstormingScreen() {
  const [ideas, setIdeas] = useState(INITIAL_IDEAS);
  const [newIdea, setNewIdea] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Viral');
  const [filterCategory, setFilterCategory] = useState('All');
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);

  function addIdea() {
    if (!newIdea.trim()) return;
    setIdeas((prev) => [
      { id: Date.now(), text: newIdea.trim(), category: selectedCategory },
      ...prev,
    ]);
    setNewIdea('');
  }

  function deleteIdea(id) {
    setIdeas((prev) => prev.filter((i) => i.id !== id));
  }

  const filtered =
    filterCategory === 'All' ? ideas : ideas.filter((i) => i.category === filterCategory);

  function getCategoryColor(label) {
    return CATEGORIES.find((c) => c.label === label)?.color ?? colors.lilacSoft;
  }

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Brainstorming</Text>
        <Text style={styles.headerSub}>{ideas.length} ideas in your backlog</Text>
      </View>

      {/* Add idea row */}
      <View style={styles.addSection}>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={newIdea}
            onChangeText={setNewIdea}
            placeholder="New idea..."
            placeholderTextColor={colors.textMuted}
            onSubmitEditing={addIdea}
            returnKeyType="done"
          />
          <TouchableOpacity
            style={styles.categoryPill}
            onPress={() => setShowCategoryPicker(true)}
          >
            <View style={[styles.categoryDot, { backgroundColor: getCategoryColor(selectedCategory) }]} />
            <Text style={styles.categoryPillText}>{selectedCategory}</Text>
            <Text style={styles.chevron}>▾</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={addIdea}>
          <Text style={styles.addButtonText}>Add idea</Text>
        </TouchableOpacity>
      </View>

      {/* Filter chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterScroll}
        contentContainerStyle={styles.filterContent}
      >
        {['All', ...CATEGORIES.map((c) => c.label)].map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.filterChip,
              filterCategory === cat && styles.filterChipActive,
            ]}
            onPress={() => setFilterCategory(cat)}
          >
            <Text
              style={[
                styles.filterChipText,
                filterCategory === cat && styles.filterChipTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Ideas list */}
      <ScrollView style={styles.flex} contentContainerStyle={styles.listContent}>
        {filtered.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No ideas yet. Add one above.</Text>
          </View>
        )}
        {filtered.map((idea) => (
          <View key={idea.id} style={styles.ideaCard}>
            <View
              style={[styles.categoryTag, { backgroundColor: getCategoryColor(idea.category) }]}
            >
              <Text style={styles.categoryTagText}>{idea.category}</Text>
            </View>
            <Text style={styles.ideaText}>{idea.text}</Text>
            <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteIdea(idea.id)}>
              <Text style={styles.deleteBtnText}>✕</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Category picker modal */}
      <Modal visible={showCategoryPicker} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setShowCategoryPicker(false)}>
          <View style={styles.modalSheet}>
            <Text style={styles.modalTitle}>Select category</Text>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat.label}
                style={styles.modalOption}
                onPress={() => {
                  setSelectedCategory(cat.label);
                  setShowCategoryPicker(false);
                }}
              >
                <View style={[styles.modalDot, { backgroundColor: cat.color }]} />
                <Text style={styles.modalOptionText}>{cat.label}</Text>
                {selectedCategory === cat.label && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.iceWhite,
  },
  flex: { flex: 1 },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lilac,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.black,
  },
  headerSub: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  addSection: {
    backgroundColor: colors.white,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lilac,
    gap: 10,
  },
  inputRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: colors.lilacSoft,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.black,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.iceWhite,
    borderWidth: 1,
    borderColor: colors.lilac,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  categoryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  categoryPillText: {
    fontSize: 12,
    color: colors.black,
    fontWeight: '600',
  },
  chevron: {
    fontSize: 10,
    color: colors.textMuted,
  },
  addButton: {
    backgroundColor: colors.deepPurple,
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: 'center',
  },
  addButtonText: {
    color: colors.iceWhite,
    fontSize: 14,
    fontWeight: '700',
  },
  filterScroll: {
    maxHeight: 52,
    borderBottomWidth: 1,
    borderBottomColor: colors.lilac,
  },
  filterContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lilac,
    backgroundColor: colors.white,
  },
  filterChipActive: {
    backgroundColor: colors.deepPurple,
    borderColor: colors.deepPurple,
  },
  filterChipText: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: '500',
  },
  filterChipTextActive: {
    color: colors.iceWhite,
    fontWeight: '700',
  },
  listContent: {
    padding: 16,
    gap: 10,
  },
  emptyState: {
    alignItems: 'center',
    paddingTop: 60,
  },
  emptyText: {
    fontSize: 14,
    color: colors.textMuted,
  },
  ideaCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.lilac,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  categoryTag: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  categoryTagText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.black,
  },
  ideaText: {
    flex: 1,
    fontSize: 14,
    color: colors.black,
    lineHeight: 20,
  },
  deleteBtn: {
    padding: 4,
  },
  deleteBtnText: {
    fontSize: 12,
    color: colors.textMuted,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    gap: 4,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 12,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lilac,
  },
  modalDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  modalOptionText: {
    flex: 1,
    fontSize: 15,
    color: colors.black,
  },
  checkmark: {
    fontSize: 16,
    color: colors.deepPurple,
    fontWeight: '700',
  },
});
