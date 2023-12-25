import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Travel = () => {
  const [count, setCount] = React.useState(0);
  const [heart, setHeart] = React.useState(false);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const favourite = () => {
    setHeart(!heart);
  };
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.heroImage}
            source={{
              uri: 'https://img.freepik.com/free-vector/gradient-mountain-landscape_23-2149152829.jpg?w=1060&t=st=1703534837~exp=1703535437~hmac=99ef034b2aa413cfafcab0e20c0601fdbc9076dd458a07b1c44e3de0be437440',
            }}
          />
          <View style={styles.Name}>
            <View>
              <Text style={styles.imageText}>Yellowstone Park</Text>
              <Text style={styles.imageTextDescription}>@ Wyoming</Text>
            </View>
            <Text style={styles.imageText}>$80</Text>
          </View>
        </View>
        <View style={styles.Description}>
          <View style={{gap: 7}}>
            <Text style={styles.imageText}>About</Text>
            <Text style={styles.TextDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              repellat consequatur earum cum corrupti inventore esse, ea,
              assumenda ad voluptas consequuntur reprehenderit incidunt?
              Recusandae blanditiis laboriosam eveniet? Consequuntur, temporibus
              et?
            </Text>
          </View>
          <View style={styles.guide}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.imageText}>People</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 25,
                  paddingRight: 18,
                }}>
                <Text
                  onPress={decrement}
                  style={{
                    fontSize: 30,
                    color: 'white',
                    fontFamily: 'Oswald',
                    paddingBottom: 5,
                  }}>
                  -
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    color: 'white',
                    fontFamily: 'Oswald',
                    paddingBottom: 5,
                  }}>
                  {count}
                </Text>
                <Text
                  onPress={increment}
                  style={{
                    fontSize: 30,
                    color: 'white',
                    fontFamily: 'Oswald',
                  }}>
                  +
                </Text>
              </View>
            </View>
            <View></View>
          </View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 15,
              }}>
              <Text style={styles.total}> ToTal</Text>
              <Text style={styles.total}> $335</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <TouchableOpacity
                onPress={favourite}
                style={{
                  backgroundColor: '#2d2b50',
                  paddingVertical: 6,
                  paddingHorizontal: 18,
                  borderRadius: 12,
                }}>
                <Text
                  style={{
                    fontSize: 40,
                    color: 'white',
                  }}>
                  <Text>{heart ? '♥︎' : '♡'}</Text>
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#ed5e6a',
                  paddingVertical: 15,
                  paddingHorizontal: 80,
                  borderRadius: 12,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    fontFamily: 'Oswald',
                  }}>
                  Book The Trip
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Travel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191825',
    display: 'flex',
  },
  heroImage: {
    width: 390,
    height: 400,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  Name: {
    marginVertical: '-22%',
    marginHorizontal: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageText: {
    color: 'white',
    fontFamily: 'Oswald',
    fontSize: 22,
  },
  imageTextDescription: {
    color: '#F1f1f1',
    fontFamily: 'Oswald',
    fontSize: 16,
  },
  Description: {
    zIndex: 1,
    gap: 20,
    marginTop: '30%',
    color: 'black',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
  },
  TextDescription: {
    color: 'white',
    opacity: 0.85,
    fontFamily: 'Oswald',
    fontSize: 17,
  },
  guide: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  total: {
    fontFamily: 'Oswald',
    fontSize: 27,
    color: 'white',
  },
});
