import { Ionicons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { XendColors, XendRadii, XendSpace } from '@/constants/xend-theme';

const TABS = ['Stablecoins', 'Utility', 'Memes 🔥'] as const;

const ASSETS = [
  { id: 'CNGN', name: 'Compliant Naira', color: '#7B61FF', icon: 'N' },
  { id: 'USDT', name: 'Tether USD', color: '#26A17B', icon: 'T' },
  { id: 'USDC', name: 'USD Coin', color: '#2775CA', icon: '$' },
];

const ACTIONS = [
  { key: 'add', label: 'Add Fund', icon: 'plus', type: 'fa' },
  { key: 'wd', label: 'Withdraw', icon: 'arrow-down', type: 'fa' },
  { key: 'swap', label: 'Swap', icon: 'swap-vertical', type: 'mci' },
  { key: 'stmt', label: 'Statement', icon: 'document-text-outline', type: 'ion' },
];

export default function WalletScreen() {
  const insets = useSafeAreaInsets();
  const [hidden, setHidden] = useState(true);
  const [tab, setTab] = useState<(typeof TABS)[number]>('Stablecoins');

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Wallets</Text>

        {/* Portfolio Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardLabel}>My Asset Portfolio</Text>
            <Pressable onPress={() => setHidden(!hidden)}>
              <Ionicons name={hidden ? 'eye-outline' : 'eye-off-outline'} size={20} color="#fff" />
            </Pressable>
          </View>
          <Text style={styles.balance}>{hidden ? '********' : '$12,480.22'}</Text>
        </View>

        {/* Actions */}
        <View style={styles.actionRow}>
          {ACTIONS.map((a) => (
            <ActionItem key={a.key} />
          ))}
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          {TABS.map((t) => (
            <Pressable
              key={t}
              onPress={() => setTab(t)}
              style={[styles.tab, tab === t && styles.activeTab]}>
              <Text style={[styles.tabText, tab === t && styles.activeTabText]}>
                {t}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Assets */}
        <View>
          {ASSETS.map((a, i) => (
            <View key={a.id}>
              <Pressable style={styles.assetRow}>
                <View style={[styles.coin, { backgroundColor: a.color }]}>
                  <Text style={styles.coinText}>{a.icon}</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.assetTitle}>{a.id}</Text>
                  <Text style={styles.assetSubtitle}>{a.name}</Text>
                </View>

                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.assetAmount}>
                    {hidden ? '******' : '1,200.00'}
                  </Text>
                  <Text style={styles.assetSub}>
                    {hidden ? '*****' : '≈ $1,200'}
                  </Text>
                </View>

                <Ionicons name="chevron-forward" size={18} color="#777" />
              </Pressable>

              {i !== ASSETS.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

/* Reusable Action Component */
const ActionItem = ({ icon, label, type }: any) => {
  return (
    <View style={styles.actionItem}>
      <View style={styles.actionIcon}>
        {type === 'mci' ? (
          <MaterialCommunityIcons name={icon} size={22} color="#1A233E" />
        ) : type === 'ion' ? (
          <Ionicons name={icon} size={22} color="#1A233E" />
        ) : (
          <FontAwesome6 name={icon} size={18} color="#1A233E" />
        )}
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: XendColors.background },
  scroll: { padding: 20 },

  title: { fontSize: 34, fontWeight: 'bold', color: XendColors.text },

  card: {
    backgroundColor: XendColors.primaryBlue,
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  cardLabel: { color: '#fff' },
  balance: { color: '#fff', fontSize: 32, fontWeight: 'bold', marginTop: 10 },

  actionRow: { flexDirection: 'row', justifyContent: 'space-between' },
  actionItem: { alignItems: 'center' },
  actionIcon: {
    width: 55,
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionLabel: { marginTop: 5, color: XendColors.text },

  tabs: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderRadius: 25,
    marginVertical: 20,
    padding: 4,
  },
  tab: { flex: 1, alignItems: 'center', padding: 10 },
  activeTab: { backgroundColor: XendColors.primaryBlue, borderRadius: 20 },
  tabText: { color: '#aaa' },
  activeTabText: { color: '#fff' },

  assetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    gap: 10,
  },
  coin: {
    width: 45,
    height: 45,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinText: { color: '#fff', fontWeight: 'bold' },

  assetTitle: { color: XendColors.text, fontWeight: 'bold' },
  assetSubtitle: { color: '#777', fontSize: 12 },

  assetAmount: { color: XendColors.text },
  assetSub: { color: '#777', fontSize: 12 },

  divider: { height: 1, backgroundColor: '#222' },
});