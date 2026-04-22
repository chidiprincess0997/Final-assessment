import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PrimaryButton } from '@/components/xend/PrimaryButton';
import { XendColors, XendRadii, XendSpace } from '@/constants/xend-theme';

export default function ReferralScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <StatusBar style="light" />

      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingHorizontal: XendSpace.screenX }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Referral</Text>
        <Text style={styles.sub}>
          Share your code and earn rewards with every friend who joins.
        </Text>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.giftBox}>
            <Ionicons name="gift" size={28} color={XendColors.primaryBlue} />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>Rewards</Text>
            <Text style={styles.bannerBody}>
              Let’s grow together — refer your friends and family with your referral code.
            </Text>
          </View>
        </View>

        {/* Referral Code */}
        <View style={styles.codeCard}>
          <Text style={styles.codeLabel}>Your referral code</Text>
          <Text style={styles.code}>XEND-PRINCESS</Text>

          <Pressable style={styles.copyRow}>
            <Ionicons name="copy-outline" size={18} color={XendColors.primaryBlue} />
            <Text style={styles.copyText}>Copy code</Text>
          </Pressable>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <StatItem label="Referrals" value="0" />
          <StatItem label="Points" value="0" />
        </View>

        <PrimaryButton label="Share invite link" variant="blue" onPress={() => {}} />

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

/* Small reusable component (like your friend’s style but subtle) */
const StatItem = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.stat}>
    <Text style={styles.statVal}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: XendColors.background },

  scroll: { paddingBottom: 24 },

  title: {
    color: XendColors.text,
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 8,
  },

  sub: {
    color: XendColors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },

  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: XendColors.primaryBlue,
    borderRadius: XendRadii.md,
    padding: 18,
    marginBottom: 20,
  },

  giftBox: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bannerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '800',
  },

  bannerBody: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 6,
  },

  codeCard: {
    borderWidth: 1,
    borderColor: XendColors.cardBorder,
    borderRadius: XendRadii.md,
    padding: 18,
    backgroundColor: XendColors.card,
    marginBottom: 20,
  },

  codeLabel: {
    color: XendColors.textSecondary,
    fontSize: 12,
    marginBottom: 8,
  },

  code: {
    color: XendColors.text,
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 12,
  },

  copyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  copyText: {
    color: XendColors.primaryBlue,
    fontWeight: '700',
    fontSize: 15,
  },

  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },

  stat: {
    flex: 1,
    backgroundColor: XendColors.card,
    borderRadius: XendRadii.md,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: XendColors.cardBorder,
  },

  statVal: {
    color: XendColors.text,
    fontSize: 28,
    fontWeight: '800',
  },

  statLabel: {
    color: XendColors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },
});