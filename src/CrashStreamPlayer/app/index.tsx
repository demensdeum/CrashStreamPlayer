import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Video from 'react-native-video';

export default function HomeScreen() {

    const [currentTime, setCurrentTime] = useState(0);
    const [videoKey, setVideoKey] = useState(0);
    const [paused, setPaused] = useState(false);

    const handleError = (error) => {
        console.log("Video playback error:", error);
        console.log("Restaring")
        const timer = setTimeout(() => {
            setPaused(false);
        }, 1000);
    };

    const handlePlaybackStateChange = (data: OnPlaybackStateChangedData) => {
        console.log('Playback state changed:', data);

        if (data.isPlaying) {
            console.log("playing")
        } else {
            console.log("NOT playing -> restaring")
            const timer = setTimeout(() => {
            setPaused(false);
            }, 1000);
        }
    };

    return (
        <View style={styles.container}>
        <Video
        source={{
            uri: 'http://172.20.10.14:9090/vlc',
            minLoadRetryCount: 10
        }}
        style={styles.fullscreenVideo}
        disableDisconnectError
        controls
        //autoplay
        onPlaybackStateChanged={handlePlaybackStateChange}
        onError={handleError}
        hideShutterView={true}
        paused={paused}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullscreenVideo: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
});
