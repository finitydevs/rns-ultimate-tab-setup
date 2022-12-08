import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import Feed from './Feed';
import { MainStackParamList } from "./NavigationParamList";
import BottomTabsNavigator from './components/BottomTabsNavigator/BottomTabsNavigator';
import TabIcon from './components/TabIcon/TabIcon';

type ScreenOneProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

const BottomNav = BottomTabsNavigator()


const Comp1 = () => (
    <gridLayout rows="auto,*" class="bg-transparent" >
        <label
            text="Likes"
            class="text-3xl font-bold ml-8 mt-6"
        />
    </gridLayout>
)
const Comp2 = () => (
    <gridLayout rows="auto,*" class="bg-transparent" >
        <label
            text="Settings"
            class="text-3xl font-bold ml-8 mt-6"
        />
    </gridLayout>
)

export default ({ navigation }: ScreenOneProps) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const changeTab = (index: number) => setSelectedIndex(index)

    return (
        <gridLayout rows="*, auto" className="bg-transparent">
            <BottomNav.Navigator
                defaultScreenOptions={{showHeader: false}}
                selectedIndex={selectedIndex}
                onSelectedIndexChanged={(oldIndex, newIndex) => {
                    setSelectedIndex(newIndex);
                }}
                rowSpan="2"
            >
                <BottomNav.Screen name="Search" component={Feed} />
                <BottomNav.Screen name="Likes" component={Comp1} />
                <BottomNav.Screen name="Settings" component={Comp2} />
            </BottomNav.Navigator>

            <contentView row={0} className="align-bottom bg-semi-gradient" height="20" opacity={0.5} />

            <gridLayout className="pb-5" row="1" columns="*, *, *" rows='56' backgroundColor="#efefef">
                <gridLayout col={0} className="debug:bg-red-50/50" onTap={() => changeTab(0)}>
                    <TabIcon
                        className="w-[38]"
                        active={selectedIndex === 0}
                        image="https://img.icons8.com/fluency-systems-regular/344/search-in-list.png"
                        activeImage="https://img.icons8.com/fluency/344/search-in-list.png"
                    />
                </gridLayout>
                <gridLayout col={1} className="debug:bg-blue-50/50" onTap={() => changeTab(1)}>
                    <TabIcon
                        className="w-[32]"
                        active={selectedIndex === 1}
                        image="https://img.icons8.com/fluency-systems-regular/344/heart-with-arrow.png"
                        activeImage="https://img.icons8.com/cotton/344/favorite-heart--v1.png"
                    />
                </gridLayout>
                <gridLayout col={2} className="debug:bg-yellow-50/50" onTap={() => changeTab(2)}>
                    <TabIcon
                        className="w-[32]"
                        active={selectedIndex === 2}
                        image="https://img.icons8.com/sf-regular/344/gear.png"
                        activeImage="https://img.icons8.com/3d-fluency/344/gear--v2.png"
                    />
                </gridLayout>
            </gridLayout>
        </gridLayout>
    );
}
