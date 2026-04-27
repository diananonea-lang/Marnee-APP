import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import ChatScreen from '../screens/ChatScreen';
import CalendarScreen from '../screens/CalendarScreen';
import DashboardScreen from '../screens/DashboardScreen';

const Tab = createBottomTabNavigator();

function TabIcon({ label, focused }) {
  const icons = {
    Chat: '✦',
    Calendar: '◫',
    Dashboard: '▤',
  };
  return (
    <View style={styles.iconWrap}>
      <Text style={[styles.iconText, focused && styles.iconActive]}>
        {icons[label]}
      </Text>
      <Text style={[styles.labelText, focused && styles.labelActive]}>
        {label}
      </Text>
    </View>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon label="Chat" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon label="Calendar" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => <TabIcon label="Dashboard" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.nightPurple,
    borderTopWidth: 0,
    height: 72,
    paddingBottom: 8,
  },
  iconWrap: {
    alignItems: 'center',
    gap: 4,
  },
  iconText: {
    fontSize: 18,
    color: colors.lilac,
    opacity: 0.5,
  },
  iconActive: {
    opacity: 1,
    color: colors.lilacSoft,
  },
  labelText: {
    fontSize: 10,
    color: colors.lilac,
    opacity: 0.5,
    fontFamily: 'System',
    letterSpacing: 0.5,
  },
  labelActive: {
    opacity: 1,
    color: colors.lilacSoft,
  },
});
