import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";

const Course = () => {
  const [Data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getuserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const getdata = await response.json();
      console.log(getdata);
      setData(getdata);
      setisLoading(false);
    } catch (err) {
      setisLoading(false);
      console.log(err.message);
    }
  };
  useEffect(() => getuserData(), []);

  const ShowData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.image }} />
        </View>
        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.Biodata}>Bio-data</Text>

            <Text style={styles.idnumber}>
              {item.id < 10 ? `#0${item.id}` : `${item.id}`}
            </Text>
          </View>
          <View style={styles.mainContain}>
            <Text>Name :{item.name}</Text>
            <Text>Website :{item.website}</Text>
            <Text>PhoneNumber :{item.mobile}</Text>
            <Text>Email ID :{item.email}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainHeader}>
      <Text>Student Details</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Data}
        renderItem={ShowData}
        horizontal
        showsHorizontalScrollIndicato={false}
      />
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: "100%",
    width: "100%",
    paddingVertical: 50,
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 30,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
  },
  idnumber: {
    fontSize: 20,
    color: "grey",
    paddingRight: 10,
  },
  Biodata: {
    fontSize: 30,
    color: "#fff",
  },
  mainHeader: {
    textAlign: "center",
    fontSize: 30,
    color: "#a18ce5",
  },
  imgContainer: {
    padding: 10,
  },
  imgStyle: {
    width: "100%",
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "grey",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 14,
    color: "#fff",
    marginBottom: "10",
    alignSelf: "flex-start",
    textTransform: "capitalize",
  },
});
