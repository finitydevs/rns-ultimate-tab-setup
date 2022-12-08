import { ScrollView } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { useHideOnScroll } from '../../hooks/useHideOnScroll';
import { MainStackParamList } from "../../NavigationParamList";
import BottomTabsNavigator from '../BottomTabsNavigator/BottomTabsNavigator';
import TabIcon from '../TabIcon/TabIcon';

type ScreenOneProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

const BottomNav = BottomTabsNavigator()

const Comp = () => {
    const { onWrapperLoaded } = useHideOnScroll({
        scrollViewId: 'scrollView',
        elementId: 'bar'
    })

    return (
        <gridLayout rows="*" className="bg-transparent" onLoaded={onWrapperLoaded}>
            <gridLayout className="wrapper" rows="auto, *">
                <gridLayout id="bar" className="pb-5 pl-4 pr-4 bg-slate-50" row={0}>
                    <gridLayout columns="60, *, 60">
                        <image src="~/assets/twitter-avatar.png" className="h-10" col={0} />
                        <label col={1} text="Home" className="font-bold text-center"></label>
                        <image src="~/assets/twitter-star.png" className="h-9" col={2} />
                    </gridLayout>
                </gridLayout>

                <scrollView id="scrollView" row={1}>
                    <stackLayout>
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                        <image src="~/assets/tweet.png" />
                    </stackLayout>
                </scrollView>
            </gridLayout>
        </gridLayout>
    )
}

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
        <>
            <BottomNav.Navigator
                selectedIndex={selectedIndex}
                onSelectedIndexChanged={(oldIndex, newIndex) => {
                    setSelectedIndex(newIndex);
                }}
            >
                <BottomNav.Screen name="Search" component={Comp} />
                <BottomNav.Screen name="Likes" component={Comp1} />
                <BottomNav.Screen name="Settings" component={Comp2} />
            </BottomNav.Navigator>

            <gridLayout className="pb-5" row="1" columns="*, *, *" rows='49' backgroundColor="#efefef">
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
        </>
    );
}
