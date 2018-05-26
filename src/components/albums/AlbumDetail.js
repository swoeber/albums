import React, {Component} from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';

const AlbumDetail = ({ album }) => {
  const { title, thumbnail_image, artist, image, url } = album;
  const {
    headerContentStyle,
    headerTextStyle,
    textStyle,
    thumbNailStyle,
    thumbNailContainerStyle,
    imageStyle,
    btnTextStyle
  } = styles;

  return (
      <Card>
        <CardSection>
          <View style={thumbNailContainerStyle}>
            <Image
                style={ thumbNailStyle }
                source={{ uri : thumbnail_image }}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={[headerTextStyle, textStyle]}> {title} </Text>
            <Text style={[ textStyle ]}> {artist} </Text>
          </View>
        </CardSection>
        <CardSection>
            <Image style={imageStyle} source={{uri: image}} />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(url)}>
              Purchase Now!
          </Button>
        </CardSection>
      </Card>
  )
};

const styles = {
  headerContentStyle : {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle : {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle : {
    color: '#ddd'
  },
  btnTextStyle : {
    alignSelf: 'center',
    color: "#ddd",
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  thumbNailStyle : {
    height: 50,
    width: 50
  },
  thumbNailContainerStyle : {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle : {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;