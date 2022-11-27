// app.ts

import { BottomNavigation, TabContentItem } from "@nativescript-community/ui-material-bottom-navigation"
import { BottomNavigationAttributes } from "@nativescript-community/ui-material-bottom-navigation/react"
import { NativeScriptProps } from "react-nativescript"

export interface TabContentItemAttributes {
	canBeLoaded?: boolean;
	index: number;
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			/**
			 * If determining the GradientAttributes is too much work,
			 * you could substitute it for `any` type!
			 */
			tabContentItem: NativeScriptProps<any, any>
			bottomNavigation: NativeScriptProps<BottomNavigationAttributes, BottomNavigation>
			tabStrip: NativeScriptProps<any, any>
			tabStripItem: NativeScriptProps<any, any>
			lottieView: NativeScriptProps<any, any>
		}
	}
}