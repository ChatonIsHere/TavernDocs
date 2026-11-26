---
title: "GeneralLoadingObjectManager"
description: "Runs the loading scene: tracks the headset, sets flat lighting, spins a frame and cycles loading tips."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneralLoadingObjectManager

A **class** in `Root.Township`, `Alta.UserAuthentication`.

Runs the loading scene: tracks the headset, sets flat lighting, spins a frame and cycles loading tips. Client only. `DisplayMessage` shows a message to the player there.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`TempSceneObject`](/mod/game-api/types/global-t-x/tempsceneobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GeneralLoadingObjectManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambientcolor" /><code>{"private Color ambientColor"}</code> | <span className="api-desc">Ambient light colour in the loading scene.</span> |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> | <span className="api-desc">Camera that follows the headset.</span> |
| <Link id="m-custommessagetextrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" customMessageTextRenderer"}</code> | <span className="api-desc">Text that `DisplayMessage` writes to.</span> |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/alta-menus/generalloadingobjectmanager">{"GeneralLoadingObjectManager"}</Link>{" instance"}</code> | <span className="api-desc">The current loading scene manager.</span> |
| <Link id="m-isinstanceinitialized" /><code>{"private static bool isInstanceInitialized"}</code> | <span className="api-desc">True once a loading scene has started. It is never set back to false.</span> |
| <Link id="m-istransformtorotatenull" /><code>{"private bool isTransformToRotateNull"}</code> | <span className="api-desc">True if there is no transform to spin.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | <span className="api-desc">Spin speed of the frame in degrees per second.</span> |
| <Link id="m-tipcancellationtokensource" /><code>{"private CancellationTokenSource tipCancellationTokenSource"}</code> | <span className="api-desc">Cancels the tip loop; nothing cancels it in this build.</span> |
| <Link id="m-tipdurationseconds" /><code>{"private float tipDurationSeconds"}</code> | <span className="api-desc">How long each tip shows.</span> |
| <Link id="m-tipindex" /><code>{"private int tipIndex"}</code> | <span className="api-desc">Index of the tip shown.</span> |
| <Link id="m-tips" /><code>{"private string[] tips"}</code> | <span className="api-desc">The tip texts, shuffled on start.</span> |
| <Link id="m-tiptextrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" tipTextRenderer"}</code> | <span className="api-desc">Text that shows the tips.</span> |
| <Link id="m-tomilliseconds" /><code>{"private const int ToMilliseconds"}</code> | <span className="api-desc">1000, for turning seconds into milliseconds.</span> |
| <Link id="m-transformtorotate" /><code>{"private Transform transformToRotate"}</code> | <span className="api-desc">The object that spins.</span> |
| <Link id="m-vrtrackeddevice" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" vrTrackedDevice"}</code> | <span className="api-desc">Headset tracking for the camera.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-displaymessage" /><code>{"static void DisplayMessage(string message)"}</code> | <span className="api-desc">Shows a message on the loading scene's custom message text. Logs a warning if no loading scene has started yet.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Calls `InitializeLoadingScene`.</span> |
| <Link id="m-cachetransformtorotatenullcomparison" /><code>{"private void CacheTransformToRotateNullComparison()"}</code> | <span className="api-desc">Warns and remembers if there is no transform to spin, so `Update` can skip it cheaply.</span> |
| <Link id="m-createinstance" /><code>{"private void CreateInstance()"}</code> | <span className="api-desc">Stores this as the static instance.</span> |
| <Link id="m-initializeloadingscene" /><code>{"private void InitializeLoadingScene()"}</code> | <span className="api-desc">Sets up tracking, lighting, reflections and the static instance.</span> |
| <Link id="m-initializetips" /><code>{"private void InitializeTips()"}</code> | <span className="api-desc">Shuffles the tips and starts cycling them.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Sets the ambient light again every frame.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the headset tracking. The tip loop is not cancelled.</span> |
| <Link id="m-setambientlight" /><code>{"private void SetAmbientLight()"}</code> | <span className="api-desc">Sets flat ambient lighting in `ambientColor`.</span> |
| <Link id="m-setreflections" /><code>{"private static void SetReflections()"}</code> | <span className="api-desc">Sets custom reflections with no cubemap.</span> |
| <Link id="m-settrackeddevice" /><code>{"private void SetTrackedDevice()"}</code> | <span className="api-desc">Makes the camera follow the headset.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Calls `InitializeTips`.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Spins the frame.</span> |
| <Link id="m-updateframerotation" /><code>{"private void UpdateFrameRotation()"}</code> | <span className="api-desc">Turns `transformToRotate` around the up axis by `rotationSpeed` degrees per second.</span> |
| <Link id="m-updatetiptext" /><code>{"private async void UpdateTipText(CancellationToken cancellationToken)"}</code> | <span className="api-desc">Shows each tip for `tipDurationSeconds`, looping until cancelled.</span> |

</details>
