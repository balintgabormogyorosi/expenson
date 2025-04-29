import { Tabs } from 'expo-router'
import { View } from 'react-native'


export default function UserLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <View style={{ height: 16, width: 16, borderRadius: 8, backgroundColor: color }} />,
                }}
            />
        </Tabs>
    )
}
