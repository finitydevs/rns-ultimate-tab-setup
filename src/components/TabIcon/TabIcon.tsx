// import { Component, EventEmitter, Input, Output } from "@angular/core";
// import { CoreTypes, EventData, Image } from "@nativescript/core";
// import React, { useState } from "react";

import { CoreTypes, EventData, Image, Observable } from "@nativescript/core";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { ImageAttributes, NativeScriptProps, NSVElement } from "react-nativescript";

// @Component({
//   moduleId: module.id,
//   selector: "ns-tab-icon",
//   templateUrl: "./tab-icon.component.html",
// })
// export class TabIconComponent {
//   @Input() image: string;
//   @Input() activeImage: string;
//   @Input("class") className: string;

//   _active: boolean = false;

//   @Input()
//   set active(value: boolean) {
//     this._active = value;

//     this.update();
//   }


//   _inactiveImage: Image;
//   _activeImage: Image;



// }

type TabIconProps = {
  image: string;
  activeImage: string;
  active: boolean;
  className: string;
}

const _scaleInactive = { x: 0.8, y: 0.8 };
const _scaleActive = { x: 1, y: 1 };

const TabIcon = (props: TabIconProps) => {
  const activeImageRef = useRef<NSVElement<Image>>(null)
  const inActiveImageRef = useRef<NSVElement<Image>>(null)

  useEffect(() => {
    update()
  }, [props.active])

  const update = () => {
    if (!(activeImageRef.current && inActiveImageRef.current)) {
      return;
    }

    inActiveImageRef.current?.nativeView
      ?.animate({
        opacity: props.active ? 1 : 0,
        scale: props.active ? _scaleActive : _scaleInactive,
        duration: 120,
        curve: CoreTypes.AnimationCurve.easeInOut,
      })
      .catch(() => { });

      activeImageRef.current?.nativeView
      ?.animate({
        opacity: props.active ? 0 : 1,
        scale: props.active ? _scaleActive : _scaleInactive,
        duration: 120,
        curve: CoreTypes.AnimationCurve.easeInOut,
      })
      .catch(() => { });
  }
  return (
    <>
      <image
        src={props.image}
        className={props.className}
        horizontalAlignment="center"
        onLoaded={(args) => {
            const image = args.object as Image
            image.opacity = 0

            update()
        }}
        ref={activeImageRef}
      />
      <image
        src={props.activeImage}
        className={props.className}
        horizontalAlignment="center"
        onLoaded={(args) => {
          const image = args.object as Image
          image.opacity = 0

          update()

      }}
        ref={inActiveImageRef}
      />
    </>
  )
}


export default TabIcon