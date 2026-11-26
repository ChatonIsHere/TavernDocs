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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandCamera()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>46 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-emission" /><code>{"private static readonly int _Emission"}</code> | Shader property ID for `_Emission`, used on the marker. |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> | Shader property ID for `_MainTex`, used on the viewfinder. |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | Shader property ID for `_Progress`. |
| <Link id="m-androidfarclipplane" /><code>{"private int androidFarClipPlane"}</code> | Far clip distance for the cameras on Android builds. |
| <Link id="m-capturealert" /><code>{"private Renderer captureAlert"}</code> | Renderer flashed when a photo is taken; turns red if saving failed. |
| <Link id="m-currentevent" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" currentEvent"}</code> | What the camera is rendering for (idle or photo), passed to the render events. |
| <Link id="m-currenttimer" /><code>{"private int currentTimer"}</code> | Index of the selected self-timer option. |
| <Link id="m-darkfadematerial" /><code>{"private static Material darkFadeMaterial"}</code> | Shared material that darkens the viewfinder when the lens is blocked. |
| <Link id="m-frontcamera" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/blockablecamera">{"BlockableCamera"}</Link>{" frontCamera"}</code> | The forward-facing camera. |
| <Link id="m-handles" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] handles"}</code> | Backing field for `Handles`; only the owner can grab them. |
| <Link id="m-iscameralocked" /><code>{"private bool isCameraLocked"}</code> | True while a photo is being taken, so visibility changes don't turn rendering on. |
| <Link id="m-isforcinghighres" /><code>{"private bool isForcingHighRes"}</code> | When set, the viewfinder renders at the streaming resolution. |
| <Link id="m-istakingpicture" /><code>{"private bool isTakingPicture"}</code> | True during a photo, its timer and review. |
| <Link id="m-localplayerhandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/localplayerheadrenderer">{"LocalPlayerHeadRenderer"}</Link>{" localPlayerHandler"}</code> | Handles showing the local player's head in the camera's view. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-longhaptics" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{", Coroutine> longHaptics"}</code> | Running long-press haptic coroutine per hand. |
| <Link id="m-marker" /><code>{"private Renderer marker"}</code> | The light that blinks for the timer and photo. |
| <Link id="m-markermaterial" /><code>{"private Material markerMaterial"}</code> | Instance of the marker's material whose emission is animated. |
| <Link id="m-materializer" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderermaterializer">{"RendererMaterializer"}</Link>{" materializer"}</code> | Fades the camera's renderers in and out. |
| <Link id="m-nonownedrenderingcamera" /><code>{"private static "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" nonOwnedRenderingCamera"}</code> | The one other player's camera this client renders, if any. |
| <Link id="m-onphototakeneffects" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onPhotoTakenEffects"}</code> | Effects played when a photo is taken. |
| <Link id="m-ontimermarkeffects" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" onTimerMarkEffects"}</code> | Effects played on each timer tick. |
| <Link id="m-owner" /><code>{"private int owner"}</code> | Player identifier of the camera's owner. |
| <Link id="m-remoteobiturator" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/remoteobiturator">{"RemoteObiturator"}</Link>{" remoteObiturator"}</code> | Serialized reference not used in this class. |
| <Link id="m-rendererstomaterialize" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" renderersToMaterialize"}</code> | Renderers faded by `materializer`. |
| <Link id="m-rendertexture" /><code>{"private RenderTexture renderTexture"}</code> | Render texture the cameras draw the viewfinder image into. |
| <Link id="m-screenshot" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/screenshot">{"Screenshot"}</Link>{" screenshot"}</code> | Helper that captures and saves photos. |
| <Link id="m-screenshotheight" /><code>{"private const int ScreenShotHeight"}</code> | Base photo height (1080) before the resolution scale setting. |
| <Link id="m-screenshotwidth" /><code>{"private const int ScreenShotWidth"}</code> | Base photo width (1920) before the resolution scale setting. |
| <Link id="m-selfiecamera" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/blockablecamera">{"BlockableCamera"}</Link>{" selfieCamera"}</code> | The backward-facing camera. |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamerasettings">{"HandCameraSettings"}</Link>{" settings"}</code> | Timer options, colours and durations for this camera. |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEffect"}</code> | Message carrying fade in or out. |
| <Link id="m-syncowner" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOwner"}</code> | Message carrying the owner. |
| <Link id="m-syncphoto" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPhoto"}</code> | Message sent when a photo is taken. |
| <Link id="m-syncselfie" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSelfie"}</code> | Message carrying the selfie state. |
| <Link id="m-syncstreaming" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStreaming"}</code> | Message carrying the streaming state. |
| <Link id="m-timercanvas" /><code>{"private Canvas timerCanvas"}</code> | Canvas showing the self-timer count. |
| <Link id="m-timertext" /><code>{"private Text timerText"}</code> | Text showing the seconds left. |
| <Link id="m-viewfinder" /><code>{"private Renderer viewFinder"}</code> | Renderer showing the camera image. |
| <Link id="m-viewfinderheight" /><code>{"private const int ViewFinderHeight"}</code> | Base viewfinder height (1080). |
| <Link id="m-viewfinderobject" /><code>{"private GameObject viewfinderObject"}</code> | Viewfinder object hidden while fading. |
| <Link id="m-viewfinderresizersettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcameraviewfinderresizersettings">{"HandCameraViewfinderResizerSettings"}</Link>{" viewfinderResizerSettings"}</code> | Lets the owner resize the viewfinder. |
| <Link id="m-viewfinderwidth" /><code>{"private const int ViewFinderWidth"}</code> | Base viewfinder width (1920). |
| <Link id="m-visibilitytrigger" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/visibilitytrigger">{"VisibilityTrigger"}</Link>{" visibilityTrigger"}</code> | Reports when the viewfinder is visible, to save rendering. |
| <Link id="m-volume" /><code>{"private PostProcessVolume volume"}</code> | Post-process volume; ambient occlusion is turned off for the photo on Windows. |
| <Link id="m-waitforevent" /><code>{"private TaskCompletionSource<bool> waitForEvent"}</code> | Completes when the next pre-render happens during a photo. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activecamera" /><code><Link to="/mod/game-api/types/alta-customization/blockablecamera">{"BlockableCamera"}</Link>{" ActiveCamera { get; }"}</code> | The front camera, or the selfie camera when selfie mode is on. |
| <Link id="m-current" /><code>{"static "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" Current { get; private set; }"}</code> | Static: the camera owned by the local player, or null. |
| <Link id="m-currenttimer-2" /><code>{"int CurrentTimer { get; }"}</code> | Seconds of the selected photo timer. |
| <Link id="m-handles-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> Handles { get; }"}</code> | The pickups the camera is held by. |
| <Link id="m-islocalplayer" /><code>{"bool IsLocalPlayer { get; private set; }"}</code> | True if the local player owns this camera. |
| <Link id="m-isscreenfree" /><code>{"bool IsScreenFree { get; }"}</code> | False while a photo is being taken. |
| <Link id="m-isstreaming" /><code>{"bool IsStreaming { get; private set; }"}</code> | True while the camera feed is being streamed out. |
| <Link id="m-isusingselfiecamera" /><code>{"bool IsUsingSelfieCamera { get; private set; }"}</code> | True in selfie mode. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Bake order (10). |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onconnectedcalled" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> OnConnectedCalled"}</code> | Raised after `OnConnected` for a player. |
| <Link id="m-onpostrender" /><code>{"static event "}<Link to="/mod/game-api/types/alta-customization/handcamerarender">{"HandCameraRender"}</Link>{" onPostRender"}</code> | Static event after either camera renders. |
| <Link id="m-onprerender" /><code>{"static event "}<Link to="/mod/game-api/types/alta-customization/handcamerarender">{"HandCameraRender"}</Link>{" onPreRender"}</code> | Static event before either camera renders, with the reason (for example a photo). UI uses it to hide things. |
| <Link id="m-onupdatedsettings" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{"> OnUpdatedSettings"}</code> | Raised when timer, streaming or resolution settings change. |
| <Link id="m-ownerupdated" /><code>{"event Action<bool> OwnerUpdated"}</code> | Raised when the owner is set, with whether it is the local player. |
| <Link id="m-photostart" /><code>{"event Action PhotoStart"}</code> | Raised when a long press to take a photo begins. |
| <Link id="m-selfiemodechanged" /><code>{"event Action<bool> SelfieModeChanged"}</code> | Raised when selfie mode turns on or off. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changetimer" /><code>{"void ChangeTimer()"}</code> | Client: cycles to the next photo timer option. |
| <Link id="m-endhaptics" /><code>{"void EndHaptics("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Stops the long-press vibration for a hand. |
| <Link id="m-fade" /><code>{"void Fade(bool isFadingIn)"}</code> | Fades the camera in or out. Server: sends it to clients, and fading out destroys the camera afterwards. |
| <Link id="m-flipcamera" /><code>{"void FlipCamera()"}</code> | Switches between front and selfie camera and syncs it. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up sync messages and marks the handles as not saved. |
| <Link id="m-interactionfilter" /><code>{"void InteractionFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Blocks anyone but the owner from grabbing the handles. |
| <Link id="m-isinteractorowner" /><code>{"bool IsInteractorOwner("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | True if the hand belongs to the camera's owner. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the owner and selfie state to a newly connected player. |
| <Link id="m-screenshot-2" /><code>{"void Screenshot("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Input handler for the photo button: stops the haptics and takes a photo. |
| <Link id="m-setforcedhighres" /><code>{"void SetForcedHighRes(bool isforced)"}</code> | Forces the high resolution render texture even when not streaming. |
| <Link id="m-setupowner" /><code>{"void SetupOwner("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: sets which player owns the camera and syncs it. Called when the camera is spawned for a player. |
| <Link id="m-starthaptics" /><code>{"void StartHaptics("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Starts a light vibration on a hand while the photo button is held. |
| <Link id="m-takescreenshot" /><code>{"void TakeScreenshot()"}</code> | Takes a photo (after the timer) and tells others so they see it too. |
| <Link id="m-togglestreaming" /><code>{"void ToggleStreaming()"}</code> | Turns streaming of the camera feed on or off and syncs it. |

<details>
<summary>33 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addlocalplayer" /><code>{"private void AddLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Client: registers the local player's head renderer handling when the local player is set, or releases it when cleared. |
| <Link id="m-animatemarker" /><code>{"private IEnumerator AnimateMarker(Color color, bool hasEffectss = false, int blips = 1) (iterator)"}</code> | Coroutine: lights the marker in a colour, blinking for timer ticks, then turns it off. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: sets up the marker, viewfinder visibility trigger, handle hooks, settings and render events. Also marks the camera as never saved. |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Build bake: on Android, sets the far clip plane and strips post processing layers. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Empty build-bake step. |
| <Link id="m-clearrendertexture" /><code>{"private void ClearRenderTexture()"}</code> | Releases the viewfinder render texture and detaches it from both cameras. |
| <Link id="m-finishfadein" /><code>{"private void FinishFadeIn()"}</code> | After fading in: shows the viewfinder, makes the handles grabbable and, for the owner, enables viewfinder resizing. |
| <Link id="m-internalflipcamera" /><code>{"private void InternalFlipCamera(bool value)"}</code> | Switches between the front and selfie camera, mirrors the viewfinder for selfies and raises `SelfieModeChanged`. |
| <Link id="m-longhaptic" /><code>{"private IEnumerator LongHaptic("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput) (iterator)"}</code> | Coroutine: buzzes the hand lightly every frame while the long photo button is held. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks events, cleans materials, stops streaming if on and releases the head renderer handling. |
| <Link id="m-ondestroyedbyscene" /><code>{"private void OnDestroyedByScene("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Clears `Current` if it was this camera. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Releases the render texture and turns off the active camera. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Turns on the active camera and makes a render texture at the viewfinder (or forced high) resolution. |
| <Link id="m-onpostrender-2" /><code>{"private void OnPostRender()"}</code> | Raises the static `onPostRender` event for this camera's render. |
| <Link id="m-onprerender-2" /><code>{"private void OnPreRender()"}</code> | Raises the static `onPreRender` event for this camera's render. |
| <Link id="m-remotescreenshot" /><code>{"private async void RemoteScreenshot()"}</code> | Client: plays the timer, marker and capture effects for a photo another player took, without saving one. |
| <Link id="m-runtimer" /><code>{"private async Task RunTimer(int timer)"}</code> | Counts the self-timer down once a second on the timer canvas, blinking the marker. |
| <Link id="m-screenshot-3" /><code>{"private async void Screenshot()"}</code> | Input handler for the photo button: stops the haptics and takes a photo. |
| <Link id="m-setantialiasing" /><code>{"private void SetAntialiasing(bool isEnabled)"}</code> | Not on Android: sets both cameras' post-process antialiasing to the settings' mode or none. |
| <Link id="m-setupforlocalplayerowner" /><code>{"private void SetupForLocalPlayerOwner()"}</code> | Client: marks the local player as owner and makes this the `Current` camera. |
| <Link id="m-setviewfindertexture" /><code>{"private void SetViewFinderTexture(Texture texture)"}</code> | Shows a texture on the viewfinder. |
| <Link id="m-startscreenshots" /><code>{"private void StartScreenshots("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When the local player grabs a handle, hooks the take-photo action and the long photo button. |
| <Link id="m-stopscreenshots" /><code>{"private void StopScreenshots("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When the local player lets go, unhooks the photo inputs and stops the haptics. |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isFadingIn)"}</code> | Serializes a fade in or out; clients run `Fade`. |
| <Link id="m-syncowner-2" /><code>{"private void SyncOwner("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Serializes the owner's player identifier plus the selfie state; a client that owns it sets itself up as owner. |
| <Link id="m-syncphoto-2" /><code>{"private void SyncPhoto("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Serializes the timer index when a photo is taken; other clients play the remote effects and the server logs and relays it. |
| <Link id="m-syncselfie-2" /><code>{"private void SyncSelfie("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Serializes whether the selfie camera is in use; the server relays it to the chunk. |
| <Link id="m-syncstreaming-2" /><code>{"private void SyncStreaming("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Serializes whether the camera is streaming; the server relays it to the chunk. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Updates the active camera's blocked check and darkens the viewfinder image while blocked. |
| <Link id="m-updatedsettings" /><code>{"private void UpdatedSettings(Settings settings)"}</code> | Remakes the `Screenshot` helper at the photo resolution scale setting. |
| <Link id="m-updaterendertexture" /><code>{"private void UpdateRenderTexture(float scale)"}</code> | Remakes the render texture at 1920 by 1080 times the scale and points both cameras and the viewfinder at it. |
| <Link id="m-visibilityupdated" /><code>{"private void VisibilityUpdated(bool isVisible)"}</code> | Turns rendering on or off as the viewfinder becomes visible. For other players' cameras, only one renders at a time, and only if the setting allows it. |
| <Link id="m-waitforevent-2" /><code>{"private void WaitForEvent("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" renderingCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | One-shot pre-render hook that lets a pending photo continue on the next render. |

</details>

## Used in

Members of other types that take, return or hold a `HandCamera`:

[`DockVisual.PostCameraRender`](/mod/game-api/types/alta-items/dockvisual#m-postcamerarender), [`DockVisual.PreCameraRender`](/mod/game-api/types/alta-items/dockvisual#m-precamerarender), [`ButtonGroup.baseCamera`](/mod/game-api/types/alta-customization/buttongroup#m-basecamera), [`CameraButton.handCamera`](/mod/game-api/types/alta-customization/camerabutton#m-handcamera), [`CameraButton.UpdateSettings`](/mod/game-api/types/alta-customization/camerabutton#m-updatesettings), [`CameraEventsListener.Post`](/mod/game-api/types/alta-customization/cameraeventslistener#m-post), [`CameraEventsListener.Pre`](/mod/game-api/types/alta-customization/cameraeventslistener#m-pre), [`CameraFilters.handCamera`](/mod/game-api/types/alta-customization/camerafilters#m-handcamera), [`CameraStabilization.handCamera`](/mod/game-api/types/alta-customization/camerastabilization#m-handcamera), [`Filter.Initialize`](/mod/game-api/types/alta-customization/filter#m-initialize), [`Filter.Terminate`](/mod/game-api/types/alta-customization/filter#m-terminate), [`FilterAction.Initialize`](/mod/game-api/types/alta-customization/filteraction#m-initialize), [`FilterAction.Terminate`](/mod/game-api/types/alta-customization/filteraction#m-terminate), [`FiltersButton.handCamera`](/mod/game-api/types/alta-customization/filtersbutton#m-handcamera), [`FocusButton.UpdateSettings`](/mod/game-api/types/alta-customization/focusbutton#m-updatesettings), [`FocusPuller.baseCamera`](/mod/game-api/types/alta-customization/focuspuller#m-basecamera), [`FocusPuller.FinishedRender`](/mod/game-api/types/alta-customization/focuspuller#m-finishedrender), [`FocusPuller.PrepareToRender`](/mod/game-api/types/alta-customization/focuspuller#m-preparetorender), [`HandCameraRender.BeginInvoke`](/mod/game-api/types/alta-customization/handcamerarender#m-begininvoke), [`HandCameraRender.Invoke`](/mod/game-api/types/alta-customization/handcamerarender#m-invoke), [`HandyCameraManager.PlayerCameraHandler.Camera`](/mod/game-api/types/alta-customization/handycameramanager-playercamerahandler#m-camera), [`HandyCameraManager.PlayerCameraHandler.PlayerCameraHandler`](/mod/game-api/types/alta-customization/handycameramanager-playercamerahandler#m-ctor), [`LocalPlayerHeadRenderer.OnPostRender`](/mod/game-api/types/alta-customization/localplayerheadrenderer#m-onpostrender), [`LocalPlayerHeadRenderer.OnPreCull`](/mod/game-api/types/alta-customization/localplayerheadrenderer#m-onprecull), [`OnDrawFilter.Initialize`](/mod/game-api/types/alta-customization/ondrawfilter#m-initialize), [`OnDrawFilter.PostRender`](/mod/game-api/types/alta-customization/ondrawfilter#m-postrender), [`OnDrawFilter.PreRender`](/mod/game-api/types/alta-customization/ondrawfilter#m-prerender), [`OnDrawFilter.renderingCameras`](/mod/game-api/types/alta-customization/ondrawfilter#m-renderingcameras), [`OnDrawFilter.Terminate`](/mod/game-api/types/alta-customization/ondrawfilter#m-terminate), [`OpticalZoom.PostRender`](/mod/game-api/types/alta-customization/opticalzoom#m-postrender), [`OpticalZoom.PreRender`](/mod/game-api/types/alta-customization/opticalzoom#m-prerender), [`PlayerSwapMaterialFilter.PreRender`](/mod/game-api/types/alta-customization/playerswapmaterialfilter#m-prerender), [`PlayerSwapMaterialFilter.Terminate`](/mod/game-api/types/alta-customization/playerswapmaterialfilter#m-terminate), [`PostProcessFilter.Initialize`](/mod/game-api/types/alta-customization/postprocessfilter#m-initialize), [`PostProcessFilter.Terminate`](/mod/game-api/types/alta-customization/postprocessfilter#m-terminate), [`RemoteObiturator.handCamera`](/mod/game-api/types/alta-customization/remoteobiturator#m-handcamera), [`RemoteObiturator.OnTakingPhoto`](/mod/game-api/types/alta-customization/remoteobiturator#m-ontakingphoto), [`RemoteObiturator.OnTookPhoto`](/mod/game-api/types/alta-customization/remoteobiturator#m-ontookphoto), [`StreamingButton.UpdateSettings`](/mod/game-api/types/alta-customization/streamingbutton#m-updatesettings), [`TimerButton.UpdateSettings`](/mod/game-api/types/alta-customization/timerbutton#m-updatesettings), [`TouchScreenMenu.handCamera`](/mod/game-api/types/alta-customization/touchscreenmenu#m-handcamera), [`TouchScreenMenu.PostRenderEnableButtons`](/mod/game-api/types/alta-customization/touchscreenmenu#m-postrenderenablebuttons), [`TouchScreenMenu.PreRenderDisableButtons`](/mod/game-api/types/alta-customization/touchscreenmenu#m-prerenderdisablebuttons), [`StatBarBase.OnTakingPhoto`](/mod/game-api/types/alta-stats-effects/statbarbase#m-ontakingphoto), [`StatBarBase.OnTookPhoto`](/mod/game-api/types/alta-stats-effects/statbarbase#m-ontookphoto), [`Screenshot.Camera`](/mod/game-api/types/alta-utilities/screenshot#m-camera), [`Screenshot.Screenshot`](/mod/game-api/types/alta-utilities/screenshot#m-ctor).
