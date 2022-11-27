/**
 * Created by following the React Navigation docs.
 * @see https://reactnavigation.org/docs/custom-navigators/
 */
import * as React from 'react';
import {
  createNavigatorFactory,
  useNavigationBuilder,
  DefaultNavigatorOptions,
  TabRouter,
  TabActions,
  TabActionHelpers,
  TabRouterOptions,
  TabNavigationState,
  ParamListBase,
} from '@react-navigation/core';
import type { TabsNavigationOptions, TabsNavigationConfig, TabsNavigationEventMap } from './types';
import { BottomNavigationAttributes } from '@nativescript-community/ui-material-bottom-navigation/react';
import { BottomNavigation } from '@nativescript-community/ui-material-bottom-navigation';

// The props accepted by the component is a combination of 3 things
type Props = DefaultNavigatorOptions<BottomNavigationAttributes> &
  BottomNavigation &
  TabsNavigationConfig;

/**
 * 
 * @see https://github.com/react-navigation/react-navigation/blob/a35ac813b6b0816cef93b54792f2164f9b82d55e/packages/bottom-tabs/src/navigators/createBottomTabNavigator.tsx
 * @see https://github.com/react-navigation/react-navigation/blob/f51086edea42f2382dac8c6914aac8574132114b/packages/material-top-tabs/src/navigators/createMaterialTopTabNavigator.tsx
 */
function BottomTabsNavigator({
  initialRouteName,
  backBehavior,
  children,
  screenOptions,
  style,
  tabStripOptions,
  onSelectedIndexChanged,
  selectedIndex,
  ...rest
}: Props) {
  const { state, navigation, descriptors } = useNavigationBuilder<
    TabNavigationState<ParamListBase>,
    TabRouterOptions,
    TabActionHelpers<ParamListBase>,
    TabsNavigationOptions,
    TabsNavigationEventMap
  >(TabRouter, {
    initialRouteName,
    backBehavior,
    children,
  });

  // React.useEffect(() => {
  //   if (selectedIndex !== state.index)
  //     navigation.navigate(state.routes[selectedIndex].name)

  //     console.log(state.history)
  // }, [selectedIndex])

  return (
    <bottomNavigation
      {...rest}
      style={{ ...style }}
      selectedIndex={state.index}
      /**
       * Firing the navigation event upon onSelectedIndexChanged handles both the case of
       * tapping the target TabStripItem and swiping between TabContentItems.
       * 
       * There is also onSelectedIndexChange (the Property change event) which fires afterward.
       * I think either work fine; would have to closely inspect the implementation to say more.
       */
      onSelectedIndexChanged={(args) => {
      //  onSelectedIndexChanged(args.oldIndex, args.newIndex)
        const route = state.routes[args.newIndex];

        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        // @ts-ignore
        if (!event.defaultPrevented) {
          navigation.dispatch({
            ...TabActions.jumpTo(route.name),
            target: state.key,
          });
        }
      }}
    >
      <tabStrip>
        {state.routes.map(() => <tabStripItem class="debug:bg-[#000316]" />)}
      </tabStrip>

      {state.routes.map(route => (
        <tabContentItem key={route.key + "-tabContentItem"} nodeRole="items">
          {descriptors[route.key].render()}
        </tabContentItem>
      ))}
    </bottomNavigation>
  );
}

export default createNavigatorFactory<
  TabNavigationState<ParamListBase>,
  TabsNavigationOptions,
  TabsNavigationEventMap,
  typeof BottomTabsNavigator
>(BottomTabsNavigator);