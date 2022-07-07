import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import s_global from "../utils/s_global";

const Item = ({ data }) => {
  return (
    <Card style={{ marginTop: 20 }} key={data.id} elevation={2}>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
        <Title>{data.name}</Title>
        <Paragraph>{data.content}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => console.log("Theree")}>View</Button>
        {/* <Button>Ok</Button> */}
      </Card.Actions>
    </Card>
  );
};

export default function Home() {
  const [data, setData] = useState([]);

  const renderItem = ({ item }) => <Item data={item} />;

  useEffect(() => {
    setData([
      { id: 1, name: "Counter 1", content: "Lorem Ipsum Lorem Inoo DB" },
      { id: 2, name: "Counter 2", content: "Lorem Ipsum Lorem Inoo DB" },
      { id: 3, name: "Counter 3", content: "Lorem Ipsum Lorem Inoo DB" },
      { id: 4, name: "Counter 4", content: "Lorem Ipsum Lorem Inoo DB" },
      { id: 5, name: "Counter 5", content: "Lorem Ipsum Lorem Inoo DB" },
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={s_global.b_title}>Welcome</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
