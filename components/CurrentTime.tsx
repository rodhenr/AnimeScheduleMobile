import { Text, View } from "react-native";
import { getUserCurrentDate } from "../utils/dateUtils";

function CurrentTime() {
  return (
    <View>
      <Text>{getUserCurrentDate()}</Text>
    </View>
  );
}

export default CurrentTime;
