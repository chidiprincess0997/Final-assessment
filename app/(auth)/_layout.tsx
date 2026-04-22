import { Stack, Redirect } from "expo-router";

export default function AuthLayout() {
    const isLoggedIn = false

    if (isLoggedIn) {
        return <Redirect href="/(tabs)" />;
    }
    return(
        <Stack
        initialRouteName="welcome"
        screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            contentStyle: { backgroundColor: '#121212'}
        }}
      />
    )
}