import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

const STATS = [
  { label: 'Posts Scheduled', value: '12', sub: 'this month' },
  { label: 'Content Types', value: '3', sub: 'Viral · Educational · Authority' },
  { label: 'Brand Score', value: '87%', sub: 'based on your test' },
];

const QUICK_ACTIONS = [
  { label: 'Generate content', icon: '✦' },
  { label: 'Update brand test', icon: '◎' },
  { label: 'View calendar', icon: '◫' },
];

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning, Diana</Text>
            <Text style={styles.subGreeting}>Here's your brand overview</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>DN</Text>
          </View>
        </View>

        {/* Stats */}
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.statsGrid}>
          {STATS.map((stat, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
              <Text style={styles.statSub}>{stat.sub}</Text>
            </View>
          ))}
        </View>

        {/* Quick actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          {QUICK_ACTIONS.map((action, i) => (
            <TouchableOpacity key={i} style={styles.actionCard}>
              <Text style={styles.actionIcon}>{action.icon}</Text>
              <Text style={styles.actionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Brand profile summary */}
        <Text style={styles.sectionTitle}>Your Brand Profile</Text>
        <View style={styles.profileCard}>
          <View style={styles.profileRow}>
            <Text style={styles.profileKey}>Brand Voice</Text>
            <Text style={styles.profileValue}>Strategic · Confident</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.profileRow}>
            <Text style={styles.profileKey}>Target Audience</Text>
            <Text style={styles.profileValue}>Founders & Creators</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.profileRow}>
            <Text style={styles.profileKey}>Top Channel</Text>
            <Text style={styles.profileValue}>Instagram · TikTok</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.profileRow}>
            <Text style={styles.profileKey}>Content Mix</Text>
            <Text style={styles.profileValue}>60% Edu · 30% Viral · 10% Auth</Text>
          </View>
        </View>

        {/* Settings shortcuts */}
        <View style={styles.settingsRow}>
          {['Profile Settings', 'Billing & Plans', 'Help & Support'].map((item, i) => (
            <TouchableOpacity key={i} style={styles.settingItem}>
              <Text style={styles.settingText}>{item}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.settingItem}>
            <Text style={[styles.settingText, styles.logoutText]}>Logout</Text>
          </TouchableOpacity>
        </View>
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
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.black,
  },
  subGreeting: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 2,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.deepPurple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.iceWhite,
    fontSize: 14,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 12,
    marginTop: 8,
  },
  statsGrid: {
    gap: 10,
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.lilac,
    padding: 16,
  },
  statValue: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.deepPurple,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 2,
  },
  statSub: {
    fontSize: 12,
    color: colors.textMuted,
  },
  actionsGrid: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  actionCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.lilac,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  actionIcon: {
    fontSize: 22,
    color: colors.deepPurple,
  },
  actionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
  },
  profileCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.lilac,
    padding: 16,
    marginBottom: 28,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  profileKey: {
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '500',
  },
  profileValue: {
    fontSize: 13,
    color: colors.black,
    fontWeight: '600',
    textAlign: 'right',
    flex: 1,
    marginLeft: 12,
  },
  divider: {
    height: 0.5,
    backgroundColor: colors.lilac,
  },
  settingsRow: {
    gap: 8,
  },
  settingItem: {
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lilac,
  },
  settingText: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '500',
  },
  logoutText: {
    color: colors.deepPurple,
  },
});
