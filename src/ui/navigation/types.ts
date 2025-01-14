export enum Screen {
    TabNavigator = 'TabNavigator',
    Home = 'Home',
    Settings = 'Settings',
}

export type TabParams = {
    [Screen.Home]: undefined;
    [Screen.Settings]: undefined;
};

export type MainParamList = {
    TabNavigator: undefined;
};