---
title: "HandCamera"
description: "The handheld photo camera a player spawns from the quick access menu."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandCamera

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

The handheld photo camera a player spawns from the quick access menu. Only its owner can pick it up; photos, selfie mode and streaming sync to others. Never saved. `HandCamera.Current` is the local player's.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandCamera()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-emission" /><code>{"private static readonly int _Emission"}</code> |  |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> |  |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> |  |
| <Link id="m-androidfarclipplane" /><code>{"private int androidFarClipPlane"}</code> |  |
| <Link id="m-capturealert" /><code>{"private Renderer captureAlert"}</code> |  |
| <Link id="m-currentevent" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" currentEvent"}</code> |  |
| <Link id="m-currenttimer" /><code>{"private int currentTimer"}</code> |  |
| <Link id="m-darkfadematerial" /><code>{"private static Material darkFadeMaterial"}</code> |  |
| <Link id="m-frontcamera" /><code>{"private "}<Link to="/game-api/types/alta-customization/blockablecamera">{"BlockableCamera"}</Link>{" frontCamera"}</code> |  |
| <Link id="m-handles" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] handles"}</code> |  |
| <Link id="m-iscameralocked" /><code>{"private bool isCameraLocked"}</code> |  |
| <Link id="m-isforcinghighres" /><code>{"private bool isForcingHighRes"}</code> |  |
| <Link id="m-istakingpicture" /><code>{"private bool isTakingPicture"}</code> |  |
| <Link id="m-localplayerhandler" /><code>{"private "}<Link to="/game-api/types/alta-customization/localplayerheadrenderer">{"LocalPlayerHeadRenderer"}</Link>{" localPlayerHandler"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-longhaptics" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{", Coroutine> longHaptics"}</code> |  |
| <Link id="m-marker" /><code>{"private Renderer marker"}</code> |  |
| <Link id="m-markermaterial" /><code>{"private Material markerMaterial"}</code> |  |
| <Link id="m-materializer" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderermaterializer">{"RendererMaterializer"}</Link>{" materializer"}</code> |  |
| <Link id="m-nonownedrenderingcamera" /><code>{"private static "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" nonOwnedRenderingCamera"}</code> |  |
| <Link id="m-onphototakeneffects" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onPhotoTakenEffects"}</code> |  |
| <Link id="m-ontimermarkeffects" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onTimerMarkEffects"}</code> |  |
| <Link id="m-owner" /><code>{"private int owner"}</code> |  |
| <Link id="m-remoteobiturator" /><code>{"private "}<Link to="/game-api/types/alta-customization/remoteobiturator">{"RemoteObiturator"}</Link>{" remoteObiturator"}</code> |  |
| <Link id="m-rendererstomaterialize" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderersToMaterialize"}</code> |  |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> |  |
| <Link id="m-screenshot" /><code>{"private "}<Link to="/game-api/types/alta-utilities/screenshot">{"Screenshot"}</Link>{" screenshot"}</code> |  |
| <Link id="m-screenshotheight" /><code>{"private const int ScreenShotHeight"}</code> |  |
| <Link id="m-screenshotwidth" /><code>{"private const int ScreenShotWidth"}</code> |  |
| <Link id="m-selfiecamera" /><code>{"private "}<Link to="/game-api/types/alta-customization/blockablecamera">{"BlockableCamera"}</Link>{" selfieCamera"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamerasettings">{"HandCameraSettings"}</Link>{" settings"}</code> |  |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEffect"}</code> |  |
| <Link id="m-syncowner" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOwner"}</code> |  |
| <Link id="m-syncphoto" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPhoto"}</code> |  |
| <Link id="m-syncselfie" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSelfie"}</code> |  |
| <Link id="m-syncstreaming" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStreaming"}</code> |  |
| <Link id="m-timercanvas" /><code>{"private Canvas timerCanvas"}</code> |  |
| <Link id="m-timertext" /><code>{"private Text timerText"}</code> |  |
| <Link id="m-viewfinder" /><code>{"private Renderer viewFinder"}</code> |  |
| <Link id="m-viewfinderheight" /><code>{"private const int ViewFinderHeight"}</code> |  |
| <Link id="m-viewfinderobject" /><code>{"private GameObject viewfinderObject"}</code> |  |
| <Link id="m-viewfinderresizersettings" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcameraviewfinderresizersettings">{"HandCameraViewfinderResizerSettings"}</Link>{" viewfinderResizerSettings"}</code> |  |
| <Link id="m-viewfinderwidth" /><code>{"private const int ViewFinderWidth"}</code> |  |
| <Link id="m-visibilitytrigger" /><code>{"private "}<Link to="/game-api/types/alta-customization/visibilitytrigger">{"VisibilityTrigger"}</Link>{" visibilityTrigger"}</code> |  |
| <Link id="m-volume" /><code>{"private PostProcessVolume volume"}</code> |  |
| <Link id="m-waitforevent" /><code>{"private TaskCompletionSource<bool> waitForEvent"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activecamera" /><code><Link to="/game-api/types/alta-customization/blockablecamera">{"BlockableCamera"}</Link>{" ActiveCamera { get; }"}</code> | The front camera, or the selfie camera when selfie mode is on. |
| <Link id="m-current" /><code>{"static "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" Current { get; private set; }"}</code> | Static: the camera owned by the local player, or null. |
| <Link id="m-currenttimer-2" /><code>{"int CurrentTimer { get; }"}</code> | Seconds of the selected photo timer. |
| <Link id="m-handles-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> Handles { get; }"}</code> | The pickups the camera is held by. |
| <Link id="m-islocalplayer" /><code>{"bool IsLocalPlayer { get; private set; }"}</code> | True if the local player owns this camera. |
| <Link id="m-isscreenfree" /><code>{"bool IsScreenFree { get; }"}</code> | False while a photo is being taken. |
| <Link id="m-isstreaming" /><code>{"bool IsStreaming { get; private set; }"}</code> | True while the camera feed is being streamed out. |
| <Link id="m-isusingselfiecamera" /><code>{"bool IsUsingSelfieCamera { get; private set; }"}</code> | True in selfie mode. |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onconnectedcalled" /><code>{"event Action<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> OnConnectedCalled"}</code> | Raised after `OnConnected` for a player. |
| <Link id="m-onpostrender" /><code>{"static event "}<Link to="/game-api/types/alta-customization/handcamerarender">{"HandCameraRender"}</Link>{" onPostRender"}</code> | Static event after either camera renders. |
| <Link id="m-onprerender" /><code>{"static event "}<Link to="/game-api/types/alta-customization/handcamerarender">{"HandCameraRender"}</Link>{" onPreRender"}</code> | Static event before either camera renders, with the reason (for example a photo). UI uses it to hide things. |
| <Link id="m-onupdatedsettings" /><code>{"event Action<"}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{"> OnUpdatedSettings"}</code> | Raised when timer, streaming or resolution settings change. |
| <Link id="m-ownerupdated" /><code>{"event Action<bool> OwnerUpdated"}</code> | Raised when the owner is set, with whether it is the local player. |
| <Link id="m-photostart" /><code>{"event Action PhotoStart"}</code> | Raised when a long press to take a photo begins. |
| <Link id="m-selfiemodechanged" /><code>{"event Action<bool> SelfieModeChanged"}</code> | Raised when selfie mode turns on or off. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changetimer" /><code>{"void ChangeTimer()"}</code> | Client: cycles to the next photo timer option. |
| <Link id="m-endhaptics" /><code>{"void EndHaptics("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Stops the long-press vibration for a hand. |
| <Link id="m-fade" /><code>{"void Fade(bool isFadingIn)"}</code> | Fades the camera in or out. Server: sends it to clients, and fading out destroys the camera afterwards. |
| <Link id="m-flipcamera" /><code>{"void FlipCamera()"}</code> | Switches between front and selfie camera and syncs it. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up sync messages and marks the handles as not saved. |
| <Link id="m-interactionfilter" /><code>{"void InteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Blocks anyone but the owner from grabbing the handles. |
| <Link id="m-isinteractorowner" /><code>{"bool IsInteractorOwner("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | True if the hand belongs to the camera's owner. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the owner and selfie state to a newly connected player. |
| <Link id="m-screenshot-2" /><code>{"void Screenshot("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Input handler for the photo button: stops the haptics and takes a photo. |
| <Link id="m-setforcedhighres" /><code>{"void SetForcedHighRes(bool isforced)"}</code> | Forces the high resolution render texture even when not streaming. |
| <Link id="m-setupowner" /><code>{"void SetupOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: sets which player owns the camera and syncs it. Called when the camera is spawned for a player. |
| <Link id="m-starthaptics" /><code>{"void StartHaptics("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Starts a light vibration on a hand while the photo button is held. |
| <Link id="m-takescreenshot" /><code>{"void TakeScreenshot()"}</code> | Takes a photo (after the timer) and tells others so they see it too. |
| <Link id="m-togglestreaming" /><code>{"void ToggleStreaming()"}</code> | Turns streaming of the camera feed on or off and syncs it. |
| <Link id="m-addlocalplayer" /><code>{"private void AddLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |
| <Link id="m-animatemarker" /><code>{"private IEnumerator AnimateMarker(Color color, bool hasEffectss = false, int blips = 1) (iterator)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |  |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |  |
| <Link id="m-clearrendertexture" /><code>{"private void ClearRenderTexture()"}</code> |  |
| <Link id="m-finishfadein" /><code>{"private void FinishFadeIn()"}</code> |  |
| <Link id="m-internalflipcamera" /><code>{"private void InternalFlipCamera(bool value)"}</code> |  |
| <Link id="m-longhaptic" /><code>{"private IEnumerator LongHaptic("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput) (iterator)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondestroyedbyscene" /><code>{"private void OnDestroyedByScene("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onpostrender-2" /><code>{"private void OnPostRender()"}</code> |  |
| <Link id="m-onprerender-2" /><code>{"private void OnPreRender()"}</code> |  |
| <Link id="m-remotescreenshot" /><code>{"private async void RemoteScreenshot()"}</code> |  |
| <Link id="m-runtimer" /><code>{"private async Task RunTimer(int timer)"}</code> |  |
| <Link id="m-screenshot-3" /><code>{"private async void Screenshot()"}</code> | Input handler for the photo button: stops the haptics and takes a photo. |
| <Link id="m-setantialiasing" /><code>{"private void SetAntialiasing(bool isEnabled)"}</code> |  |
| <Link id="m-setupforlocalplayerowner" /><code>{"private void SetupForLocalPlayerOwner()"}</code> |  |
| <Link id="m-setviewfindertexture" /><code>{"private void SetViewFinderTexture(Texture texture)"}</code> |  |
| <Link id="m-startscreenshots" /><code>{"private void StartScreenshots("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-stopscreenshots" /><code>{"private void StopScreenshots("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isFadingIn)"}</code> |  |
| <Link id="m-syncowner-2" /><code>{"private void SyncOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncphoto-2" /><code>{"private void SyncPhoto("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncselfie-2" /><code>{"private void SyncSelfie("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncstreaming-2" /><code>{"private void SyncStreaming("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-updatedsettings" /><code>{"private void UpdatedSettings(Settings settings)"}</code> |  |
| <Link id="m-updaterendertexture" /><code>{"private void UpdateRenderTexture(float scale)"}</code> |  |
| <Link id="m-visibilityupdated" /><code>{"private void VisibilityUpdated(bool isVisible)"}</code> |  |
| <Link id="m-waitforevent-2" /><code>{"private void WaitForEvent("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |  |

## Used in

Members of other types that take, return or hold a `HandCamera`:

[`DockVisual.PostCameraRender`](/game-api/types/alta-items/dockvisual#m-postcamerarender), [`DockVisual.PreCameraRender`](/game-api/types/alta-items/dockvisual#m-precamerarender), [`ButtonGroup.baseCamera`](/game-api/types/alta-customization/buttongroup#m-basecamera), [`CameraButton.handCamera`](/game-api/types/alta-customization/camerabutton#m-handcamera), [`CameraButton.UpdateSettings`](/game-api/types/alta-customization/camerabutton#m-updatesettings), [`CameraEventsListener.Post`](/game-api/types/alta-customization/cameraeventslistener#m-post), [`CameraEventsListener.Pre`](/game-api/types/alta-customization/cameraeventslistener#m-pre), [`CameraFilters.handCamera`](/game-api/types/alta-customization/camerafilters#m-handcamera), [`CameraStabilization.handCamera`](/game-api/types/alta-customization/camerastabilization#m-handcamera), [`Filter.Initialize`](/game-api/types/alta-customization/filter#m-initialize), [`Filter.Terminate`](/game-api/types/alta-customization/filter#m-terminate), [`FilterAction.Initialize`](/game-api/types/alta-customization/filteraction#m-initialize), [`FilterAction.Terminate`](/game-api/types/alta-customization/filteraction#m-terminate), [`FiltersButton.handCamera`](/game-api/types/alta-customization/filtersbutton#m-handcamera), [`FocusButton.UpdateSettings`](/game-api/types/alta-customization/focusbutton#m-updatesettings), [`FocusPuller.baseCamera`](/game-api/types/alta-customization/focuspuller#m-basecamera), [`FocusPuller.FinishedRender`](/game-api/types/alta-customization/focuspuller#m-finishedrender), [`FocusPuller.PrepareToRender`](/game-api/types/alta-customization/focuspuller#m-preparetorender), [`HandCameraRender.BeginInvoke`](/game-api/types/alta-customization/handcamerarender#m-begininvoke), [`HandCameraRender.Invoke`](/game-api/types/alta-customization/handcamerarender#m-invoke), [`HandyCameraManager.PlayerCameraHandler.Camera`](/game-api/types/alta-customization/handycameramanager-playercamerahandler#m-camera), [`HandyCameraManager.PlayerCameraHandler.PlayerCameraHandler`](/game-api/types/alta-customization/handycameramanager-playercamerahandler#m-ctor), [`LocalPlayerHeadRenderer.OnPostRender`](/game-api/types/alta-customization/localplayerheadrenderer#m-onpostrender), [`LocalPlayerHeadRenderer.OnPreCull`](/game-api/types/alta-customization/localplayerheadrenderer#m-onprecull), [`OnDrawFilter.Initialize`](/game-api/types/alta-customization/ondrawfilter#m-initialize), [`OnDrawFilter.PostRender`](/game-api/types/alta-customization/ondrawfilter#m-postrender), [`OnDrawFilter.PreRender`](/game-api/types/alta-customization/ondrawfilter#m-prerender), [`OnDrawFilter.renderingCameras`](/game-api/types/alta-customization/ondrawfilter#m-renderingcameras), [`OnDrawFilter.Terminate`](/game-api/types/alta-customization/ondrawfilter#m-terminate), [`OpticalZoom.PostRender`](/game-api/types/alta-customization/opticalzoom#m-postrender), [`OpticalZoom.PreRender`](/game-api/types/alta-customization/opticalzoom#m-prerender), [`PlayerSwapMaterialFilter.PreRender`](/game-api/types/alta-customization/playerswapmaterialfilter#m-prerender), [`PlayerSwapMaterialFilter.Terminate`](/game-api/types/alta-customization/playerswapmaterialfilter#m-terminate), [`PostProcessFilter.Initialize`](/game-api/types/alta-customization/postprocessfilter#m-initialize), [`PostProcessFilter.Terminate`](/game-api/types/alta-customization/postprocessfilter#m-terminate), [`RemoteObiturator.handCamera`](/game-api/types/alta-customization/remoteobiturator#m-handcamera), [`RemoteObiturator.OnTakingPhoto`](/game-api/types/alta-customization/remoteobiturator#m-ontakingphoto), [`RemoteObiturator.OnTookPhoto`](/game-api/types/alta-customization/remoteobiturator#m-ontookphoto), [`StreamingButton.UpdateSettings`](/game-api/types/alta-customization/streamingbutton#m-updatesettings), [`TimerButton.UpdateSettings`](/game-api/types/alta-customization/timerbutton#m-updatesettings), [`TouchScreenMenu.handCamera`](/game-api/types/alta-customization/touchscreenmenu#m-handcamera), [`TouchScreenMenu.PostRenderEnableButtons`](/game-api/types/alta-customization/touchscreenmenu#m-postrenderenablebuttons), [`TouchScreenMenu.PreRenderDisableButtons`](/game-api/types/alta-customization/touchscreenmenu#m-prerenderdisablebuttons), [`StatBarBase.OnTakingPhoto`](/game-api/types/alta-stats-effects/statbarbase#m-ontakingphoto), [`StatBarBase.OnTookPhoto`](/game-api/types/alta-stats-effects/statbarbase#m-ontookphoto), [`Screenshot.Camera`](/game-api/types/alta-utilities/screenshot#m-camera), [`Screenshot.Screenshot`](/game-api/types/alta-utilities/screenshot#m-ctor).
