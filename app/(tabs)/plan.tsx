import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { XendColors, XendRadii, XendSpace } from '@/constants/xend-theme';

export default function PlansScreen() {
    const insets = useSafeAreaInsets();
    const rateLine = "This rate is updated daily (Apr 13, 2026 02:43 AM)";

return (
  <View style={[styles.root, { paddingTop: insets.top }]}>
    <StatusBar style="light" />

    <ScrollView
      contentContainerStyle={[
        styles.scroll,
        { paddingHorizontal: XendSpace.screenX },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Plans</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.planTag}>SAVINGS PLAN</Text>
        <Text style={styles.planAmt}>USD 0.00</Text>
      </View>

      <View style={styles.twoCol}>
        <Pressable style={[styles.tile, styles.tileOrange]}>
          <View
            style={[styles.tileIcon, { backgroundColor: '#FFE8D6' }]}
          >
            <MaterialCommunityIcons
              name="piggy-bank-outline"
              size={22}
              color={XendColors.orange}
            />
          </View>
          <Text style={styles.tileTitleo}>Create Plan</Text>
          <Text style={styles.tileDesc}>
            Create a new fixed savings plan
          </Text>
        </Pressable>

        <Pressable style={[styles.tile, styles.tileBlue]}>
          <View
            style={[styles.tileIcon, { backgroundColor: '#1a2a5c' }]}
          >
            <MaterialCommunityIcons
              name="calculator-variant-outline"
              size={22}
              color="#588DEF"
            />
          </View>
          <Text style={styles.tileTitleo}>Interest Calculator</Text>
          <Text style={styles.tileDesc}>
            Calculate the interest on your savings
          </Text>
        </Pressable>
      </View>

      <Text style={styles.sectionLabel}>ALL SAVINGS PLANS</Text>

      <View style={styles.twoCol}>
        <View style={styles.planBox}>
          <Text style={styles.boxTag}>FLEXIBLE SAVINGS</Text>
          <Text style={styles.boxAmt}>$0.00</Text>

          <Pressable style={styles.boxCta}>
            <View style={styles.plusCircle}>
              <Ionicons name="add" size={18} color="#FFF" />
            </View>
            <Text style={styles.boxCtaText}>ADD FUNDS</Text>
          </Pressable>
        </View>

        <View style={styles.planBox}>
          <Text style={styles.boxTag}>FIXED SAVINGS</Text>
          <Text style={styles.boxAmt}>$0.00</Text>

          <Pressable style={styles.boxCta}>
            <View style={styles.plusCircle}>
              <Ionicons name="list" size={16} color="#FFF" />
            </View>
            <Text style={styles.boxCtaText}>VIEW ALL PLANS</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.sectionLabel}>TODAY&apos;S RATE</Text>
      <Text style={styles.rateText}>{rateLine}</Text>

      <View style={{ height: 100 }} />
    </ScrollView>
  </View>
);
}

const styles = StyleSheet.create({
    root: { flex: 1, backgroundColor: XendColors.background },
    scroll: { paddingBottom: 24 },
    title: { color: XendColors.text, fontSize: 34, fontWeight: '800', marginBottom: 20 },
    balanceCard: {
        backgroundColor: XendColors.primaryBlue,
        borderRadius: XendRadii.md,
        padding: 20,
        marginBottom: 18,
},
    planTag: { color:'rgba(255, 255, 255, 0.85) ', fontSize: 11, fontWeight: '700', letterSpacing: 1 },
    planAmt: { color: '#FFF', fontSize: 32, fontWeight: '800', marginTop: 8 },
    twoCol: { flexDirection: 'row', gap: 12, marginBottom: 22 },
    tile: {
        flex: 1,
        borderRadius: XendRadii.md,
        padding: 14,
        backgroundColor: XendColors.card,
        minHeight: 130,
},        
    tileOrange: { borderWidth: 1, borderColor: XendColors.orange },
    tileBlue: { borderWidth: 1, borderColor: XendColors.primaryBlue },
    tileIcon: {
        width: 40,
        height: 40, 
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
},
    tileTitleo: { color: XendColors.orange, fontSize: 15, fontWeight: '800', marginBottom: 6 },
    tileTitleW: { color: XendColors.text, fontSize: 15, fontWeight: '800', marginBottom: 6 },
    tileDesc: {color: XendColors.text, fontSize: 12, lineHeight: 17, opacity: 0.85 },
    sectionLabel: {
        color: XendColors.textSecondary,
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 1,
        marginBottom: 12,
},        
    planBox: {
        flex: 1,
        backgroundColor: XendColors.card,
        borderRadius: XendRadii.md,
        padding: 16,
        minHeight: 160,
        justifyContent: 'space-between', 
},
    boxTag: { color: XendColors.textSecondary, fontSize: 10, fontWeight: '700', letterSpacing: 1 },
    boxAmt: { color: XendColors.text, fontSize: 28, fontWeight: '800', marginTop: 8},
    boxCta: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 16 },
    plusCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: XendColors.primaryBlue,
        alignItems: 'center',
        justifyContent: 'center',
},
    boxCtaText: { color: XendColors.text, fontSize: 10, fontWeight: '800', letterSpacing: 0.8 },
        rateText: { color: XendColors.textSecondary, fontSize: 12, lineHeight: 18 },
});
