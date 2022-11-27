import { LottieView } from "@nativescript-community/ui-lottie"
import { ContentView, CoreTypes, EventData, Animation } from "@nativescript/core"
import { useNavigation, CommonActions } from '@react-navigation/core';
import React, { useRef } from "react"
import { __unstable__forwardNavOpts } from "react-nativescript";

const LaunchScreen = () => {
    const lottieRef = useRef<LottieView>()
    const navigation = useNavigation()

    const goToHome = () => {
        __unstable__forwardNavOpts.push({ transition: { name: 'fade', duration: 2000 }, clearHistory: true })
        navigation.navigate('Home')
    }

    const loadedLottie = (args: EventData) => {
        const lottieView = (args.object as LottieView)

        if (lottieView)
            lottieView.completionBlock = (finished) => {
                if (finished) {
                    const animate = new Animation([{
                        target: lottieView,
                        opacity: 0,
                        scale: { x: 0.7, y: 0.7 },
                        // translate: {x: 0, y: 10},
                        duration: 400,
                        curve: CoreTypes.AnimationCurve.linear,
                    }])

                    animate
                        .play()

                    lottieView.opacity = 0;
                    lottieView.scaleX = lottieView.scaleY = 1;
                    goToHome();
                }
            };
        playLottie();
    }

    const loadedColor = (args) => {
        const colorView = args.object as ContentView
        colorView.opacity = 0;
        colorView
            .animate({
                scale: { x: 4, y: 4 },
                opacity: 1,
                duration: 700,
                delay: 800,
                curve: CoreTypes.AnimationCurve.easeInOut,
            })
            .then(() => {
                colorView
                    .animate({
                        scale: { x: 8, y: 8 },
                        opacity: 0,
                        duration: 500,
                        curve: CoreTypes.AnimationCurve.easeInOut,
                    })
                    .then(() => { })
                    .catch(() => { });
            })
            .catch(() => { });
    }

    const playLottie = () => {
        const lottieView = lottieRef.current?.nativeView

        lottieView?.animate({
            opacity: 1,
            duration: 300,
        })
            .then(() => { })
            .catch(() => { });

        lottieView?.playAnimation();
    }

    return (
        <gridLayout className="w-full bg-[#c1e7fd]">
            <lottieView
                onLoaded={loadedLottie}
                height="300"
                width="300"
                autoPlay="false"
                src="~/assets/fish-jump.json"
                ref={lottieRef}
                className="h-center v-center"
            />

            <contentView
                className="bg-[#7dadff] rounded-full"
                width="300"
                height="300"
                onLoaded={loadedColor}
            />
        </gridLayout>
    )
}

export default LaunchScreen