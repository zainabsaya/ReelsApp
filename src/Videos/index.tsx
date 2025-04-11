import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { VideoItem, videos } from '../../data/ExtraData';
import VideoItemComponent from '../components/VideoItemComponent';


const ReelsPlayer: React.FC = () => {
  const [pausedList, setPausedList] = useState<boolean[]>(videos.map((_, index) => index !== 0));

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      const updatedPausedList = videos.map((_, i) => i !== index);
      setPausedList(updatedPausedList);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 80 });

  const togglePause = (index: number) => {
    const updatedPausedList = [...pausedList];
    updatedPausedList[index] = !updatedPausedList[index];
    setPausedList(updatedPausedList);
  };

  const renderItem = ({ item, index }: { item: VideoItem; index: number }) => (
    <VideoItemComponent
      item={item}
      index={index}
      paused={pausedList[index]}
      togglePause={togglePause}
    />
  );

  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      pagingEnabled
      horizontal={false}
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
    />
  );
};

export default ReelsPlayer;
