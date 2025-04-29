import { Text } from "@/components/UI"
import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"


export default function HomeScreen() {
    const { top } = useSafeAreaInsets()

    return (
        <View style={{ paddingTop: top, }}>
            <Text>Home Screen</Text>
        </View>
    )
}