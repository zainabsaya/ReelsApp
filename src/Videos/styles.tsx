import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    videoContainer: {
      height,
      width: '100%',
      backgroundColor: 'black',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'space-between',
      padding: 16,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 40,
    },
    profilePic: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    username: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    descriptionContainer: {
      position: 'absolute',
      bottom: 80,
      left: 16,
      right: 16,
    },
    description: {
      color: 'white',
      fontSize: 14,
    },
    statsContainer: {
      position: 'absolute',
      bottom: 20,
      right: 16,
      alignItems: 'flex-end',
    },
    stats: {
      color: 'white',
      fontSize: 16,
      marginBottom: 4,
    },
  });
  
  export default styles;