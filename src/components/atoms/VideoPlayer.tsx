import { VideoView, useVideoPlayer } from 'expo-video';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const VideoPlayer = () => {
    const videoPlayer = useVideoPlayer(require('../../assets/videos/welcomme_pg_bg.mp4'), player => {
        player.loop = true;
        player.muted = true;
        player.play();
    });
    const { height } = Dimensions.get('screen');
    return (
        <View style={styles.container}>
            <VideoView
                style={[styles.video, { height }]}
                player={videoPlayer}
                nativeControls={false}
                allowsFullscreen={false}
                allowsPictureInPicture={false}
                contentFit="cover"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        ...StyleSheet.absoluteFillObject, // full screen
        zIndex: -1,
    },
});

export default VideoPlayer