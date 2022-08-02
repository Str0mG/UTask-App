import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { actions } from "../../actions/task.actions";
import { useTheme } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Task = (task: any) => {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);
  const [desc, setDesc] = useState("Ler Descrição");
  const [isHide, setIsHide] = useState(true);
  const [emoti, setEmoti] = useState<"chevron-small-up" | "chevron-small-down">(
    "chevron-small-down"
  );

  const dispatch = useDispatch();
  const handleDelete = () => {
    Alert.alert(
      "Deletar Task",
      "Você tem certeza que deseja deletar esta taks?",
      [
        { text: "Cancel" },
        { text: "OK", onPress: () => dispatch(actions.remover(task.task)) },
      ]
    );
  };
  const handleEdit = () => {
    setVisible(true);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundTask }]}
    >
      <Ionicons
        name="ios-trash-outline"
        size={18}
        color={colors.trash}
        onPress={handleDelete}
        style={{ position: "absolute", right: 0, top: 0, padding: 10 }}
      />
      <Text
        style={{
          color: colors.text,
          maxWidth: wp("52%"),
          paddingLeft: 18,
          paddingBottom: 10,
          textAlign: "justify",
          paddingTop: 5,
        }}
      >
        {task.task.description}
      </Text>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    minHeight: 90,
    borderRadius: 10,
    marginBottom: 7,
    marginTop: 7,
  },
});
