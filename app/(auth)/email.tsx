import { router, type Href } from 'expo-router' 
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { LabeledField } from '@/components/xend/LabeledField'
import { PrimaryButton } from '@/components/xend/PrimaryButton'
import { SupportChatButton } from '@/components/xend/SupportChatButton'
import { TrustFooter } from '@/components/xend/TrustFooter'
import { XendColors, XendSpace } from '@/constants/xend-theme'

export default function WelcomeEmailScreen() {
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState('');

    return(
        <View style={[styles.root, {padding: insets.top }]}>
            <StatusBar style="light" />
            <View style={[styles.header, {paddingHorizontal: XendSpace.screenX}]}>
                <Text style={styles.welcome}>welcome</Text>
                <SupportChatButton />
            </View>
            <ScrollView
            contentContainerStyle={[styles.body, { paddingHorizontal: XendSpace.screenX}]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}></ScrollView>
            <Text style={styles.lead}>Enter your email address</Text>
            <LabeledField
                label="Email"
                placeholder="Enter your Email"
                leftIcon="mail-outline"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <PrimaryButton
                label="continue"
                onPress={() => router.push('/login' as Href)}
                style={styles.cta}
            />
            <TrustFooter />
            <ScrollView />
        </View>
    );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: XendColors.background},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 8,
  },
  welcome: { fontSize: 32, fontWeight: "800", color: XendColors.text},
  body: { flexGrow: 1, paddingBottom: 24, gap:20},
  lead: { color: XendColors.text, fontSize: 20, fontWeight: '700', marginBottom: 8},
  cta: { marginTop: 12},
});