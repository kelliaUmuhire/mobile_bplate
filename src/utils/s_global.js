import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  b_title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
  },
  c_title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container_b: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  w_button: {
    backgroundColor: "#FFA900",
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  i_text: {
    width: 300,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    margin: 10,
  },
  i_text_lg: {
    width: 345,
    backgroundColor: "white",
    borderColor: "black",
    marginTop: 5,
  },
  underline: {
    textDecorationLine: "underline",
  },
  t_done: {
    textDecorationLine: "line-through",
  },
  b_tcolor: {
    color: "blue",
  },
  error_msg: {
    color: "red",
    marginTop: 15,
  },
});

export default globalStyles;
