import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { actions } from "../../actions/task.actions";
import { useTheme } from "styled-components/native";
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import ModalNote from "../Modal/ModalEdit";

const Task = (task: any) => {
  const { colors } = useTheme();
  const [modal, setModal] = useState(false);

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

  

  const toggleModal = (aux:boolean) => setModal(aux);

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundTask }]}
    >
      <MaterialCommunityIcons name="playlist-edit" size={24} color={colors.trash} style={{position:'absolute', right:20,top:0, padding:8,marginRight:10}} onPress={()=> setModal(true)}  />
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
      <ModalNote isOpen={modal} toggleModal={toggleModal} id={task.task.id} desc={task.task.description}/>   
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
