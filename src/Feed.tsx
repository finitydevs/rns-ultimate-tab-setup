import React from "react"
import { useHideOnScroll } from "./hooks/useHideOnScroll"

const Feed = () => {
    const { onWrapperLoaded } = useHideOnScroll({
        scrollViewId: 'scrollView',
        elementId: 'bar'
    })

    return (
        <gridLayout rows="auto, *" className="bg-transparent" onLoaded={onWrapperLoaded}>
            <gridLayout id="bar" className="pb-3 pl-4 pr-4 bg-slate-50" row={0}>
                <gridLayout columns="60, *, 60">
                    <image src="~/assets/twitter-avatar.png" className="h-10" col={0} />
                    <label col={1} text="Feed" className="font-bold text-center" />
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
    )
}

export default Feed