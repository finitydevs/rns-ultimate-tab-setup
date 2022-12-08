import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { Navigator } from './components/Navigator';
import { registerTabNavigationBase } from '@nativescript-community/ui-material-core-tabs/react';
import { registerBottomNavigation } from '@nativescript-community/ui-material-bottom-navigation/react';

registerTabNavigationBase();
registerBottomNavigation();
ReactNativeScript.registerElement('lottieView', () => require('@nativescript-community/ui-lottie').LottieView)

// In NativeScript, the app.ts file is the entry point to your application. You
// can use this file to perform app-level initialization, but the primary
// purpose of the file is to pass control to the app’s first module.

// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', { value: false });
import { CoreTypes, TouchManager, View } from '@nativescript/core';

// default Touch animations for entire app
const originalTransform = Symbol('originalTransform');
TouchManager.enableGlobalTapAnimations = true;
TouchManager.animations = {
  down: (view: View) => {
    if (global.isIOS) {
      UIView.animateWithDurationDelayUsingSpringWithDampingInitialSpringVelocityOptionsAnimationsCompletion(
        0.3,
        0,
        0.5,
        3,
        UIViewAnimationOptions.CurveEaseInOut,
        () => {
          if (view?.ios) {
            view[originalTransform] = view[originalTransform] ?? view.ios.transform;

            view.ios.transform = CGAffineTransformConcat(view[originalTransform], CGAffineTransformMakeScale(0.97, 0.97));
          }
        },
        () => {}
      );
    } else {
      view
        ?.animate({
          scale: { x: 0.97, y: 0.97 },
          duration: 120,
          curve: CoreTypes.AnimationCurve.easeInOut,
        })
        .then(() => {})
        .catch(() => {});
    }
  },
  up: (view: View) => {
    if (global.isIOS) {
      UIView.animateWithDurationDelayUsingSpringWithDampingInitialSpringVelocityOptionsAnimationsCompletion(
        0.3,
        0,
        0.5,
        3,
        UIViewAnimationOptions.CurveEaseInOut,
        () => {
          if (view?.ios) {
            view.ios.transform = view[originalTransform] ?? CGAffineTransformMakeScale(1, 1);
          }
        },
        () => {}
      );
    } else {
      view
        ?.animate({
          scale: { x: 1, y: 1 },
          duration: 120,
          curve: CoreTypes.AnimationCurve.easeInOut,
        })
        .then(() => {})
        .catch(() => {});
    }
  },
};


ReactNativeScript.start(React.createElement(Navigator, {}, null));

// Do not place any code after the application has been started as it will not
// be executed on iOS.
