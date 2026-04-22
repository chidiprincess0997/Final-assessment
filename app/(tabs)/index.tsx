import React, { useMemo, useState } from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';

import { SupportChatButton } from '@/components/xend/SupportChatButton'
import { XendColors } from '@/constants/xend-theme';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [showBalance, setShowBalance] = useState(false);

  const quickActions = useMemo(
    () => [
      { key: 'bank', label: 'To Bank', icon: 'bank', type: 'fa6', isNew: true },
      { key: 'withdraw', label: 'Withdraw', icon: 'arrow-down-circle', type: 'ion' },
      { key: 'save', label: 'Save', icon: 'piggy-bank', type: 'fa6' },
      { key: 'invest', label: 'Invest', icon: 'hand-holding-dollar', type: 'fa6' },
      { key: 'yield', label: 'High Yield', icon: 'trending-up', type: 'mc', isHot: true },
      { key: 'swap', label: 'Swap', icon: 'swap-horizontal', type: 'mc' },
    ],
    []
  );

  const todoItems = [
    { label: 'Update your profile.', completed: false },
    { label: 'Verify your Phone Number', completed: false },
    { label: 'Complete KYC Process Check', completed: false },
  ];

  const renderIcon = (item: any) => {
    const color = XendColors.navyButton;

    switch (item.type) {
      case 'fa6':
        return <FontAwesome6 name={item.icon} size={20} color={color} />;
      case 'ion':
        return <Ionicons name={item.icon} size={24} color={color} />;
      case 'mc':
        return <MaterialCommunityIcons name={item.icon} size={24} color={color} />;
      default:
        return null;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop:
            insets.top || (Platform.OS === 'android' ? StatusBar.currentHeight : 20),
        },
      ]}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatarCircle}>
            <Ionicons name="person" size={20} color={XendColors.textSecondary} />
          </View>
          <View>
            <Text style={styles.userTitle}>Hi, @Nneji_Emmanuel</Text>
            <Text style={styles.userSubtitle}>Start saving now</Text>
          </View>
        </View>

        <SupportChatButton onPress={() => console.log('Support chat pressed')} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* BALANCE CARD */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceLabel}>PORTFOLIO BALANCE</Text>

            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <Ionicons
                name={showBalance ? 'eye-outline' : 'eye-off-outline'}
                size={18}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.historyLink}>
              <Text style={styles.historyText}>History</Text>
              <Ionicons name="chevron-forward" size={12} color="white" />
            </TouchableOpacity>
          </View>

          <Text style={styles.balanceAmount}>
            {showBalance ? '₦ 2,450,120.00' : '**********'}
          </Text>

          <View style={styles.savingsRow}>
            <View style={styles.savingsIconBox}>
              <Ionicons name="leaf-outline" size={22} color={XendColors.primaryBlue} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.savingsLabel}>Total Savings</Text>
              <Text style={styles.savingsAmount}>
                {showBalance ? '₦ 890,000.00' : '*********'}
              </Text>
            </View>

            <TouchableOpacity style={styles.plansButton}>
              <Text style={styles.plansButtonText}>Plans</Text>
              <Ionicons name="chevron-forward" size={12} color={XendColors.primaryBlue} />
            </TouchableOpacity>
          </View>
        </View>

        {/* QUICK ACTIONS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>

          <View style={styles.actionsGrid}>
            {quickActions.map((item) => (
              <View key={item.key} style={styles.actionItemContainer}>
                <TouchableOpacity style={styles.actionButton}>
                  {renderIcon(item)}

                  {item.isNew && (
                    <View style={styles.newBadge}>
                      <Text style={styles.badgeText}>NEW</Text>
                    </View>
                  )}

                  {item.isHot && (
                    <View style={styles.hotBadge}>
                      <Ionicons name="flame" size={10} color="white" />
                    </View>
                  )}
                </TouchableOpacity>

                <Text style={styles.actionLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* TODO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TO DO</Text>

          {todoItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.todoItem}>
              <View style={styles.checkbox}>
                {item.completed && (
                  <Ionicons name="checkmark" size={16} color="white" />
                )}
              </View>

              <Text style={styles.todoLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: XendColors.background },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },

  userInfo: { flexDirection: 'row', alignItems: 'center', gap: 10 },

  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: XendColors.backgroundElevated,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: XendColors.cardBorder,
  },

  userTitle: { color: XendColors.text, fontSize: 16, fontWeight: '700' },
  userSubtitle: { color: XendColors.textSecondary, fontSize: 11 },

  scrollContent: { paddingHorizontal: 20, paddingBottom: 100 },

  balanceCard: {
    backgroundColor: XendColors.primaryBlue,
    borderRadius: 24,
    padding: 20,
    marginVertical: 10,
  },

  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },

  balanceLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  historyLink: { flexDirection: 'row', alignItems: 'center', marginLeft: 'auto' },
  historyText: { color: 'white', fontSize: 11 },

  balanceAmount: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  savingsRow: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  savingsIconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: XendColors.iconBg,
    justifyContent: 'center',
    alignItems: 'center',
  },

  savingsLabel: {
    color: XendColors.navyButton,
    fontSize: 11,
    fontWeight: '700',
  },

  savingsAmount: {
    color: XendColors.primaryBlue,
    fontSize: 16,
    fontWeight: 'bold',
  },

  plansButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    gap: 4,
  },

  plansButtonText: {
    color: XendColors.navyButton,
    fontSize: 13,
    fontWeight: '700',
  },

  section: { marginTop: 24 },

  sectionTitle: {
    color: XendColors.textSecondary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 16,
  },

  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },

  actionItemContainer: { width: '30%', alignItems: 'center', marginBottom: 8 },

  actionButton: {
    width: 56,
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    position: 'relative',
  },

  actionLabel: {
    color: XendColors.textSecondary,
    fontSize: 11,
    textAlign: 'center',
  },

  newBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF4B4B',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 5,
  },

  hotBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: XendColors.orange,
    padding: 3,
    borderRadius: 5,
  },

  badgeText: { color: 'white', fontSize: 7, fontWeight: '900' },

  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: XendColors.backgroundElevated,
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: XendColors.cardBorder,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: XendColors.primaryBlue,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  todoLabel: {
    color: XendColors.text,
    fontSize: 14,
    fontWeight: '500',
  },
});