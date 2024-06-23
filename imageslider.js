import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
  ImageBackground,
} from 'react-native';

const {width} = Dimensions.get('window');

const ImageSlider = ({
  images,
  height = width * 0.5,
  renderOverlay = () => null,
}) => {
  const [active, setActive] = useState(0);

  const onScrollChange = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={onScrollChange}
        ga
        showsHorizontalScrollIndicator={false}
        style={{width, height}}>
        {images.map((image, index) => (
          <View key={index} style={{position: 'relative'}}>
            <Image
              source={{uri: image.url}}
              style={{width, height, resizeMode: 'contain'}}
            />
            {renderOverlay(image)}
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
            •
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 50,
  },
  activeDot: {
    color: '#FFF',
    fontSize: 50,
  },
  animated: {},
});

export default ImageSlider;
