import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import SettingsRowControl from './Components/SettingsRowControl';
import SettingsRowColor from './Components/SettingsRowColor';
import { useSettingsContext } from "../lib/supabase/hooks/useSettingsContext";
import { supabase } from '../lib/supabase/supabase';

const SettingsScreen = () => {
    /*const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
    const [fontColor, setFontColor] = useState("#FFFFFF");
    const [buttonStyle, setButtonStyle] = useState("Image");
    const [allowBtnAnimations, setAllowBtnAnimations] = useState("Animated");
    const [allowVideoBg, setAllowVideoBg] = useState("Enabled");*/

    const { settings, setSettings } = useSettingsContext();

    return (
        <View style={{padding: 20}}>
            <Text style={styles.h1}>UI Preferences</Text>
            <SettingsRowControl
                title="Button Style"
                options={["Image", "Glass"]}
                value={settings.button_style}
                onChange={(newValue) => setSettings({ ...settings, button_style: newValue})}
            />
            <SettingsRowControl
                title="Button Animations"
                options={["Animated", "Static"]}
                value={settings.allow_btn_animations}
                onChange={(newValue) => setSettings({ ...settings, allow_btn_animations: newValue})}
            />
            <SettingsRowControl
                title="Video Background"
                options={["Enabled", "Disabled"]}
                value={settings.allow_video_bg}
                onChange={(newValue) => setSettings({ ...settings, allow_video_bg: newValue})}
            />
            <SettingsRowColor
                title="Background Color"
                value={settings.background_color}
                onChange={(newValue) => setSettings({ ...settings, background_color: newValue})}
            />
            <SettingsRowColor
                title="Font Color"
                value={settings.font_color}
                onChange={(newValue) => setSettings({ ...settings, font_color: newValue})}
            />
            <TouchableOpacity 
                style={styles.resetButton}
                onPress={() => setSettings({
                    button_style: "Image",
                    allow_btn_animations: "Animated",
                    allow_video_bg: "Enabled",
                    background_color: "#FFFFFF",
                    font_color: "#FFFFFF"
                })}
            >
                <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 18 }}>Reset to default</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
    h2: {
        fontSize: 18,
    },
    resetButton: {
        marginTop: 5,
        height: 40, 
        backgroundColor: "#ff4545", 
        borderRadius: 10, 
        justifyContent: "center", 
        alignItems: "center"
    }
})

export default SettingsScreen;