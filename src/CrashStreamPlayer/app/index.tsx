import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Video from 'react-native-video';

export default function HomeScreen() {

    const [videoUri, setVideoUri] = useState('http://172.20.10.14:9090/vlc');
    const [currentTime, setCurrentTime] = useState(0);
    const [videoKey, setVideoKey] = useState(0);
    const [paused, setPaused] = useState(false);

    const handleError = (error) => {
        console.log("Video playback error:", error);
        console.log("Restarting")

        setTimeout(() => {
            setVideoUri('https://www.w3schools.com/html/mov_bbb.mp4')
            setPaused(false);
        }, 1000);

        setTimeout(() => {
            setVideoUri('http://172.20.10.14:9090/vlc')
            setPaused(false);
        }, 2000);

    };

    const handlePlaybackStateChange = (data: OnPlaybackStateChangedData) => {
        console.log('Playback state changed:', data);

        if (data.isPlaying) {
            console.log("playing")
        } else {
            console.log("NOT playing -> restarting")

            setTimeout(() => {
                setVideoUri('https://www.w3schools.com/html/mov_bbb.mp4')
                setPaused(false);
            }, 1000);

            setTimeout(() => {
                setVideoUri('http://172.20.10.14:9090/vlc')
                setPaused(false);
            }, 2000);
        }
    };

    return (
        <View style={styles.container}>
        <Video
        source={{
            uri: videoUri,
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
