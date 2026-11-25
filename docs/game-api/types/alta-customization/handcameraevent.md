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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Attributes** `Flags`

## Values

| Member | What it is |
| --- | --- |
| <Link id="m-idle" /><code>{"idle = 1"}</code> |  |
| <Link id="m-photo" /><code>{"photo = 2"}</code> |  |

## Used in

Members of other types that take, return or hold a `HandCameraEvent`:

[`DockVisual.PostCameraRender`](/game-api/types/alta-items/dockvisual#m-postcamerarender), [`DockVisual.PreCameraRender`](/game-api/types/alta-items/dockvisual#m-precamerarender), [`CameraEventsListener.Post`](/game-api/types/alta-customization/cameraeventslistener#m-post), [`CameraEventsListener.Pre`](/game-api/types/alta-customization/cameraeventslistener#m-pre), [`CameraEventsListener.targetEvents`](/game-api/types/alta-customization/cameraeventslistener#m-targetevents), [`FocusPuller.FinishedRender`](/game-api/types/alta-customization/focuspuller#m-finishedrender), [`FocusPuller.PrepareToRender`](/game-api/types/alta-customization/focuspuller#m-preparetorender), [`HandCamera.currentEvent`](/game-api/types/alta-customization/handcamera#m-currentevent), [`HandCamera.WaitForEvent`](/game-api/types/alta-customization/handcamera#m-waitforevent-2), [`HandCameraRender.BeginInvoke`](/game-api/types/alta-customization/handcamerarender#m-begininvoke), [`HandCameraRender.Invoke`](/game-api/types/alta-customization/handcamerarender#m-invoke), [`LocalPlayerHeadRenderer.OnPostRender`](/game-api/types/alta-customization/localplayerheadrenderer#m-onpostrender), [`LocalPlayerHeadRenderer.OnPreCull`](/game-api/types/alta-customization/localplayerheadrenderer#m-onprecull), [`OnDrawFilter.PostRender`](/game-api/types/alta-customization/ondrawfilter#m-postrender), [`OnDrawFilter.PreRender`](/game-api/types/alta-customization/ondrawfilter#m-prerender), [`OnDrawFilter.targetEvent`](/game-api/types/alta-customization/ondrawfilter#m-targetevent), [`OpticalZoom.PostRender`](/game-api/types/alta-customization/opticalzoom#m-postrender), [`OpticalZoom.PreRender`](/game-api/types/alta-customization/opticalzoom#m-prerender), [`RemoteObiturator.OnTakingPhoto`](/game-api/types/alta-customization/remoteobiturator#m-ontakingphoto), [`RemoteObiturator.OnTookPhoto`](/game-api/types/alta-customization/remoteobiturator#m-ontookphoto), [`TouchScreenMenu.PostRenderEnableButtons`](/game-api/types/alta-customization/touchscreenmenu#m-postrenderenablebuttons), [`TouchScreenMenu.PreRenderDisableButtons`](/game-api/types/alta-customization/touchscreenmenu#m-prerenderdisablebuttons), [`StatBarBase.OnTakingPhoto`](/game-api/types/alta-stats-effects/statbarbase#m-ontakingphoto), [`StatBarBase.OnTookPhoto`](/game-api/types/alta-stats-effects/statbarbase#m-ontookphoto).
