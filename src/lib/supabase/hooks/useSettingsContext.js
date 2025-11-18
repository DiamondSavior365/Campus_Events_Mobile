import React, { createContext, useContext, useEffect, useState } from "react";
import { saveSettings, loadSettings } from "../settingsStorage";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
    const [settings, setSettings] = useState({
        button_style: "Image",
        allow_btn_animations: "Animated",
        allow_video_bg: "Enabled",
        background_color: "#FFFFFF",
        font_color: "#FFFFFF"
    });

    useEffect(() => {
        (async () => {
            const stored = await loadSettings();
            if (stored) setSettings(prev => ({ ...prev, ...stored }));
        })();
    }, []);

    useEffect(() => {
        saveSettings(settings);
    }, [settings]);

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettingsContext = () => useContext(SettingsContext);
