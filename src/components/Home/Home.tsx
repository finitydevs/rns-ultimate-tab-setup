import { BottomNavigation } from '@nativescript-community/ui-material-bottom-navigation';
import { EventData, isAndroid } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { MainStackParamList } from "../../NavigationParamList";
import TabIcon from '../TabIcon/TabIcon';

type ScreenOneProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};



export default ({ navigation }: ScreenOneProps) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const changeTab = (index: number) => setSelectedIndex(index)

    return (
        <gridLayout rows="*, auto" className="bg-transparent"  >
            <bottomNavigation
                selectedIndex={selectedIndex}
                onSelectedIndexChanged={(args) => {
                    setSelectedIndex(args.newIndex);
                }}
            >
                <tabStrip>
                    <tabStripItem class="debug:bg-[#000316]"></tabStripItem>
                    <tabStripItem class="debug:bg-[#000316]"></tabStripItem>
                    <tabStripItem class="debug:bg-[#000316]"></tabStripItem>
                </tabStrip>
                <tabContentItem nodeRole="items">
                    <gridLayout rows="auto,*" class="bg-transparent" >
                        <label
                            text="Search"
                            class="text-3xl font-bold ml-8"
                        />
                    </gridLayout>
                </tabContentItem>
                <tabContentItem nodeRole="items">
                    <gridLayout rows="auto,*" class="bg-transparent" >
                        <label
                            text="Likes"
                            class="text-3xl font-bold ml-8  mt-20"
                        />
                    </gridLayout>
                </tabContentItem>
                <tabContentItem nodeRole="items">
                    <gridLayout rows="auto,*" class="bg-transparent" >
                        <label
                            text="Settings"
                            class="text-3xl font-bold ml-8 mt-20"
                        />
                    </gridLayout>
                </tabContentItem>
            </bottomNavigation>

            <contentView
                row="0"
                class="align-bottom bg-semi-gradient"
                height="20"
                opacity={.5}
            />

            <gridLayout row="1" columns="*, *, *" rows='49' backgroundColor="#efefef">
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
        </gridLayout >

    );
}
