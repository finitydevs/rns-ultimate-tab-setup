import { Application } from '@nativescript/core'
import * as utils from '@nativescript/core/utils'

export * from './device';
export * from './ux';


export const getStatusBarHeight = () => {
  let result = 0
  if (Application.android) {
    const resourceId = (Application.android.foregroundActivity || Application.android.startActivity)?.getResources().getIdentifier('status_bar_height', 'dimen', 'android')
    if (resourceId) {
      result = (Application.android.foregroundActivity || Application.android.startActivity)?.getResources().getDimensionPixelSize(resourceId)

      result = utils.layout?.toDeviceIndependentPixels(result)
    }
  }
  return result
}