import { Text, View } from "react-native";
import { Box } from "@/components/ui/box";

export default function HomeScreen() {
  return (
    <View className="bg-red-100 p-7">
      <Text>Home Screen</Text>
      <Box className="bg-tertiary-400 p-5">
        <Text className="text-typography-0">This is the Box</Text>
      </Box>
    </View>
  );
}
