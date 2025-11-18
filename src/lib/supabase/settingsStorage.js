import * as SecureStore from "expo-secure-store";

export async function loadSettings() {
    try {
        const value = await SecureStore.getItemAsync("settings");
        return value ? JSON.parse(value) : null;
    } catch (ex) {
        console.log(ex);
        return null;
    }
}

export async function saveSettings(settings) {
    await SecureStore.setItemAsync("settings", JSON.stringify(settings));
}
