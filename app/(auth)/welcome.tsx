import { Ionicons } from '@expo/vector-icons'
import { router, type Href } from 'expo-router' 
import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { PrimaryButton } from '@/components/xend/PrimaryButton'
import { SupportChatButton } from '@/components/xend/SupportChatButton'
import { TrustFooter } from '@/components/xend/TrustFooter'
import { XendColors, XendSpace } from '@/constants/xend-theme'

function GoogleMark() {
    return (
        <view style={styles.gWarp}>
            <Text style={[styles.gLetter, {color: '#4285f4'}]}>G</Text>
        </view>
    );
}

export default function WelcomeSocialScreen() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.root, { paddingTop: insets.top}]}>
            <StatusBar style="light" />
            <View style={[styles.topBar, { paddingHorizontal: XendSpace.screenX }]}>
                <view style= {{width:44}} />
                <SupportChatButton />
            </View>
            <ScrollView 
            contentContainerStyle={styles.scroll}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
                <view style={styles.hero}>
                    <View style={[styles.coinBlur, styles.coinBlurTop]} />
                    <View style={styles.coinMain}>
                        <View style={styles.coinRim} />
                        <View style={styles.coinFace}>
                            <View style={styles.coinLogoBar}>
                                <View style={[styles.miniBar, { height: 12, backgroundColor: XendColors.orange}]} />
                                <View style={[styles.miniBar, { height: 18, backgroundColor: '#8B5CF6'}]} />
                                <View style={[styles.miniBar, { height: 14, backgroundColor: XendColors.primaryBlue}]} />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.coinBlur, styles.coinBlurBot]} />
                </view>

                <Text style={styles.title}>Welcome to the{'\n'}Future of finance</Text>
                <Text style={styles.sub}>
                    To get started create an account, if you already have an account we will log you in
                </Text>

                <view style={styles.gap}>
                    <PrimaryButton
                       label="Continue with Email"
                       variant="blue"
                       left={<Ionicons name="mail-outline" size={22} color="#FFF" />}
                       onPress={() => router.push('/email' as Href)} 
                       /> 
                    <PrimaryButton
                       label="Continue with Google"
                       variant="outline"
                       left={<GoogleMark />}
                       onPress={() => router.push('/email' as Href)} 
                       />
                       <PrimaryButton
                       label="Continue with Apple"
                       variant="outline"
                       left={<Ionicons name="logo-apple" size={22} color="#FFF" />}
                       onPress={() => router.push('/email' as Href)} 
                       />
                </view>

                <TrustFooter />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: XendColors.background,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 8,
    },
    scroll: {
        paddingHorizontal: XendSpace.screenX,
        paddingBottom: 32,
    },
    hero: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 220,
        marginBottom: 8,
    },
    coinBlur: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#2A2A2A',
        opacity: 0.5,
    },
    coinBlurTop: { top: 20, transform: [{ scale: 0.85}] },
    coinBlurBot: { bottom: 10, transform: [{ scale: 0.7}] },
    coinMain: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: '#C9A27A',
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 16,
        shadowOffset: {width: 0, height: 8 },
        elevation: 12,
    },
    coinRim: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 70,
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,0.25)',
    },
    coinFace: {
        width: 118,
        height: 118,
        borderRadius: 59,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    coinLogoBar: { flexDirection: 'row', alignItems: 'flex-end', gap: 4} ,
    miniBar: { width: 6, borderRadius: 2 },
    title: {
        color: XendColors.text,
        fontSize: 28,
        fontWeight: '800',
        textAlign: 'center',
        lineHeight: 34,
        marginBottom: 16,
    },
     sub: {
        color: XendColors.text,
        textAlign: 'center',
        lineHeight: 34,
        marginBottom: 16,
    },
    gWarp: {},
    gap: {},
    gLetter: {},
})
