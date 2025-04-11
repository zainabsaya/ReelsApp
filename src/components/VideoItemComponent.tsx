import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { VideoItem } from '../../data/ExtraData';
import styles from '../Videos/styles'; 

type Props = {
  item: VideoItem;
  index: number;
  paused: boolean;
  togglePause: (index: number) => void;
};

const VideoItemComponent: React.FC<Props> = ({ item, index, paused, togglePause }) => {
  return (
    <TouchableWithoutFeedback onPress={() => togglePause(index)}>
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: item?.videoUrl }}
          style={StyleSheet.absoluteFillObject}
          resizeMode="cover"
          paused={paused}
          repeat
        />
        <View style={styles.overlay}>
          <View style={styles.userInfo}>
            <Image source={{ uri: item?.user?.profilePic }} style={styles.profilePic} />
            <Text style={styles.username}>{item?.user?.username}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
              {item?.description}
            </Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.stats}>likes:{item.likes}</Text>
            <Text style={styles.stats}>Comments:{item.comments}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VideoItemComponent;
