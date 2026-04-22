import { Ionicons } from '@expo/vector-icons'
import { router, type Href } from 'expo-router' 
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { LabeledField } from '@/components/xend/LabeledField'
import { PrimaryButton } from '@/components/xend/PrimaryButton'
import { SupportChatButton } from '@/components/xend/SupportChatButton'
import { TrustFooter } from '@/components/xend/TrustFooter'
import { XendLogo } from '@/components/xend/XendLogo'
import { XendColors, XendSpace } from '@/constants/xend-theme'

export default function LoginScreen() {
    const insets =useSafeAreaInsets();
    const [password, setPassword] = useState('');

    const goApp = () => {
        router .replace('/(tabs)');
    };

    return (
        <View style={[styles.root, { paddingTop: insets.top}]}>
            <StatusBar style='light' />
            <View style={[styles.stopRow, { paddingHorizontal: XendSpace.screenX}]}>
                <XendLogo compact />
                <SupportChatButton />
            </View>
            <ScrollView 
            contentContainerStyle={[styles.scroll, {paddingHorizontal: XendSpace.screenX}]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
                <View style={styles.profileRow}>
                    <View style={styles.avatar}>
                        <Ionicons name="person" size={36} color="#8E8E93" />
                    </View>
                    <Text style={styles.greet}>Welcome, Princess_Chidi</Text>
                </View>

                <Text style={styles.title}>Enter your password</Text>
                <LabeledField
                label='Your Password'
                placeholder='********'
                leftIcon='lock-closed-outline'
                secure
                value={password}
                onChangeText={setPassword}
                />
                <Pressable style={styles.forgot}>
                    <Text style={styles.forgotText}>Forgot Password</Text>
                </Pressable>

                <View style={styles.bio}>
                    <View style={styles.bioCircle}>
                        <Ionicons name='scan-outline' size={32} color={XendColors.orange} />
                    </View>
                </View>

                <PrimaryButton label='Login' onPress={goApp} style={styles.loginBtn} />
                <Pressable onPress={() => router.replace('/email' as Href)} style={styles.switchRow} >
                    <Text style={styles.switchBase}>Not you?</Text>
                    <Text style={styles.switchAccent}>Switch account</Text>
                </Pressable>

                <TrustFooter />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    root: { flex: 1, backgroundColor: XendColors.background},
    topRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    scroll: { paddingBottom: 32, gap:16 },
    profileRow: { flexDirection: 'row', alignItems: 'center'},
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: XendColors.primaryBlue,
        backgroundColor: '#2C2C2E',
        alignItems: 'center',
        justifyContent: 'center',
    },
    greet: { color: XendColors.text, fontSize: 18, fontWeight:'700', flex:1},
    title: { color: XendColors.text, fontSize: 24 , fontWeight:'800', marginTop: 20 },
    forgot: { alignSelf: 'flex-end', marginTop: -4 },
    forgotText: { color: XendColors.text, fontSize: 14, fontWeight:'700' },
    bio:{ alignItems: 'center'},
    bioCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#E8E8E8',
    },
    stopRow: {},
    loginBtn: {},
    switchRow: {},
    switchAccent: {},
    switchBase: {},
})