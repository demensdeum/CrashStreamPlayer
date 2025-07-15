import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Video from 'react-native-video';

export default function HomeScreen() {

    const [videoKey, setVideoKey] = useState(0);

    const handleError = (error) => {
        console.error("Video playback error:", error); // Log the error for debugging
        setTimeout(() => {
            setVideoKey(prevKey => prevKey + 1);
        }, 300);
    };

    return (
        <View style={styles.container}>
        <Video
        key={videoKey}
        source={{
            uri: 'http://172.20.10.14:9090/vlc',
            minLoadRetryCount: 5
        }}
        style={styles.fullscreenVideo}
        disableDisconnectError
        controls
        autoplay
        onError={handleError}
        hideShutterView={true}
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
