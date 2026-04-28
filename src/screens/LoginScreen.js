import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { colors } from '../theme/colors';
import LogoIcon from '../components/LogoIcon';
import DotBackground from '../components/DotBackground';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <DotBackground>
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.iceWhite} />
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

          {/* Card */}
          <View style={styles.card}>
            {/* Logo */}
            <View style={styles.logoBlock}>
              <View style={styles.logoRow}>
                <LogoIcon size={44} />
                <Text style={styles.logoText}>Marnee</Text>
              </View>
              <View style={styles.dividerLine} />
            </View>

            {/* Title */}
            <Text style={styles.heading}>Welcome back</Text>
            <Text style={styles.subheading}>Sign in to continue to Marnee.</Text>

            {/* Email */}
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="you@email.com"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Password */}
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              placeholderTextColor={colors.textMuted}
              secureTextEntry
            />

            {/* Remember + Forgot */}
            <View style={styles.rememberRow}>
              <TouchableOpacity style={styles.checkRow} onPress={() => setRemember(!remember)}>
                <View style={[styles.checkbox, remember && styles.checkboxOn]}>
                  {remember && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.rememberText}>Remember me</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            {/* Log in */}
            <TouchableOpacity
              style={styles.btnPrimary}
              onPress={() => navigation.navigate('Onboarding')}
            >
              <Text style={styles.btnPrimaryText}>Log in</Text>
            </TouchableOpacity>

            {/* OR divider */}
            <View style={styles.orRow}>
              <View style={styles.orLine} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.orLine} />
            </View>

            {/* Google */}
            <TouchableOpacity style={styles.btnGoogle}>
              <Text style={styles.googleG}>G</Text>
              <Text style={styles.btnGoogleText}>Google</Text>
            </TouchableOpacity>

            {/* Sign up */}
            <Text style={styles.switchText}>
              Don't have an account?{' '}
              <Text style={styles.switchLink}>Sign up</Text>
            </Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
    </DotBackground>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: 'transparent' },
  flex: { flex: 1 },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(30,30,30,0.1)',
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  logoBlock: { alignItems: 'center', marginBottom: 20 },
  logoRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 12 },
  logoText: { fontSize: 26, fontWeight: '300', color: colors.black, letterSpacing: -0.5 },
  dividerLine: { height: 1, width: 64, backgroundColor: 'rgba(64,8,109,0.2)' },
  heading: { fontSize: 20, fontWeight: '600', color: '#111827', textAlign: 'center', marginBottom: 4 },
  subheading: { fontSize: 12, color: '#6b7280', textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 12, fontWeight: '500', color: '#374151', marginBottom: 6, marginTop: 14 },
  input: {
    backgroundColor: colors.iceWhite,
    borderWidth: 1,
    borderColor: 'rgba(30,30,30,0.1)',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 14,
    color: colors.black,
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  checkRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(30,30,30,0.3)',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxOn: { backgroundColor: colors.deepPurple, borderColor: colors.deepPurple },
  checkmark: { color: '#fff', fontSize: 10, fontWeight: '700' },
  rememberText: { fontSize: 12, color: '#6b7280' },
  forgotText: { fontSize: 12, color: colors.deepPurple, fontWeight: '500' },
  btnPrimary: {
    backgroundColor: colors.black,
    borderRadius: 6,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 16,
  },
  btnPrimaryText: { color: colors.white, fontSize: 14, fontWeight: '500' },
  orRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 14 },
  orLine: { flex: 1, height: 1, backgroundColor: 'rgba(30,30,30,0.1)' },
  orText: { fontSize: 11, color: '#9ca3af' },
  btnGoogle: {
    borderWidth: 1,
    borderColor: 'rgba(30,30,30,0.1)',
    borderRadius: 6,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: colors.white,
  },
  googleG: { fontSize: 16, fontWeight: '700', color: '#4285F4' },
  btnGoogleText: { fontSize: 13, fontWeight: '500', color: '#374151' },
  switchText: { textAlign: 'center', fontSize: 12, color: '#6b7280', marginTop: 16 },
  switchLink: { color: colors.deepPurple, fontWeight: '500' },
});
