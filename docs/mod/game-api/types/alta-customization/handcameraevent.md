---
title: "HandCameraEvent"
description: "Flags for what the hand-held screenshot camera is doing: idle or taking a photo."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandCameraEvent

An **enum** in `Root.Township`, `Alta.ScreenshotCamera`.

Flags for what the hand-held screenshot camera is doing: `idle` or taking a `photo`.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-idle" /><code>{"idle = 1"}</code> |
| <Link id="m-photo" /><code>{"photo = 2"}</code> |

## Used in

Members of other types that take, return or hold a `HandCameraEvent`:

<div className="api-used-in">

[`DockVisual.PostCameraRender`](/mod/game-api/types/alta-items/dockvisual#m-postcamerarender), [`DockVisual.PreCameraRender`](/mod/game-api/types/alta-items/dockvisual#m-precamerarender), [`CameraEventsListener.Post`](/mod/game-api/types/alta-customization/cameraeventslistener#m-post), [`CameraEventsListener.Pre`](/mod/game-api/types/alta-customization/cameraeventslistener#m-pre), [`CameraEventsListener.targetEvents`](/mod/game-api/types/alta-customization/cameraeventslistener#m-targetevents), [`FocusPuller.FinishedRender`](/mod/game-api/types/alta-customization/focuspuller#m-finishedrender), [`FocusPuller.PrepareToRender`](/mod/game-api/types/alta-customization/focuspuller#m-preparetorender), [`HandCamera.currentEvent`](/mod/game-api/types/alta-customization/handcamera#m-currentevent), [`HandCamera.WaitForEvent`](/mod/game-api/types/alta-customization/handcamera#m-waitforevent-2), [`HandCameraRender.BeginInvoke`](/mod/game-api/types/alta-customization/handcamerarender#m-begininvoke), [`HandCameraRender.Invoke`](/mod/game-api/types/alta-customization/handcamerarender#m-invoke), [`LocalPlayerHeadRenderer.OnPostRender`](/mod/game-api/types/alta-customization/localplayerheadrenderer#m-onpostrender), [`LocalPlayerHeadRenderer.OnPreCull`](/mod/game-api/types/alta-customization/localplayerheadrenderer#m-onprecull), [`OnDrawFilter.PostRender`](/mod/game-api/types/alta-customization/ondrawfilter#m-postrender), [`OnDrawFilter.PreRender`](/mod/game-api/types/alta-customization/ondrawfilter#m-prerender), [`OnDrawFilter.targetEvent`](/mod/game-api/types/alta-customization/ondrawfilter#m-targetevent), [`OpticalZoom.PostRender`](/mod/game-api/types/alta-customization/opticalzoom#m-postrender), [`OpticalZoom.PreRender`](/mod/game-api/types/alta-customization/opticalzoom#m-prerender), [`RemoteObiturator.OnTakingPhoto`](/mod/game-api/types/alta-customization/remoteobiturator#m-ontakingphoto), [`RemoteObiturator.OnTookPhoto`](/mod/game-api/types/alta-customization/remoteobiturator#m-ontookphoto), [`TouchScreenMenu.PostRenderEnableButtons`](/mod/game-api/types/alta-customization/touchscreenmenu#m-postrenderenablebuttons), [`TouchScreenMenu.PreRenderDisableButtons`](/mod/game-api/types/alta-customization/touchscreenmenu#m-prerenderdisablebuttons), [`StatBarBase.OnTakingPhoto`](/mod/game-api/types/alta-stats-effects/statbarbase#m-ontakingphoto), [`StatBarBase.OnTookPhoto`](/mod/game-api/types/alta-stats-effects/statbarbase#m-ontookphoto).

</div>
