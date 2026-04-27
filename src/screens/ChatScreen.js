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

const INITIAL_MESSAGES = [
  {
    id: 1,
    role: 'assistant',
    text: "Hi! I'm Marnee, your AI content strategist. What would you like to work on today?",
  },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');

  function sendMessage() {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), role: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
  }

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerEmoji}>🐻</Text>
        <View>
          <Text style={styles.headerTitle}>Marnee</Text>
          <Text style={styles.headerSub}>AI Content Strategist</Text>
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      >
        {/* Messages */}
        <ScrollView
          style={styles.messageList}
          contentContainerStyle={styles.messageContent}
        >
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.bubble,
                msg.role === 'user' ? styles.userBubble : styles.assistantBubble,
              ]}
            >
              <Text
                style={[
                  styles.bubbleText,
                  msg.role === 'user' && styles.userBubbleText,
                ]}
              >
                {msg.text}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Input */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Ask Marnee anything..."
            placeholderTextColor={colors.textMuted}
            multiline
          />
          <TouchableOpacity
            style={[styles.sendButton, !input.trim() && styles.sendDisabled]}
            onPress={sendMessage}
            disabled={!input.trim()}
          >
            <Text style={styles.sendText}>↑</Text>
          </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lilac,
    backgroundColor: colors.white,
  },
  headerEmoji: {
    fontSize: 32,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.black,
  },
  headerSub: {
    fontSize: 12,
    color: colors.textMuted,
  },
  messageList: {
    flex: 1,
  },
  messageContent: {
    padding: 20,
    gap: 12,
  },
  bubble: {
    maxWidth: '80%',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  assistantBubble: {
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: colors.lilac,
  },
  userBubble: {
    backgroundColor: colors.deepPurple,
    alignSelf: 'flex-end',
  },
  bubbleText: {
    fontSize: 14,
    color: colors.black,
    lineHeight: 20,
  },
  userBubbleText: {
    color: colors.iceWhite,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.lilac,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    backgroundColor: colors.lilacSoft,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: colors.black,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: colors.deepPurple,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendDisabled: {
    backgroundColor: colors.lilac,
  },
  sendText: {
    color: colors.iceWhite,
    fontSize: 18,
    fontWeight: '700',
  },
});
