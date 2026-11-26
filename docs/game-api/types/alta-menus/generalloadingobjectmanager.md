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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`TempSceneObject`](/game-api/types/global-t-x/tempsceneobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GeneralLoadingObjectManager()"}</code> |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambientcolor" /><code>{"private Color ambientColor"}</code> | Ambient light colour in the loading scene. |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> | Camera that follows the headset. |
| <Link id="m-custommessagetextrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" customMessageTextRenderer"}</code> | Text that `DisplayMessage` writes to. |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-menus/generalloadingobjectmanager">{"GeneralLoadingObjectManager"}</Link>{" instance"}</code> | The current loading scene manager. |
| <Link id="m-isinstanceinitialized" /><code>{"private static bool isInstanceInitialized"}</code> | True once a loading scene has started. It is never set back to false. |
| <Link id="m-istransformtorotatenull" /><code>{"private bool isTransformToRotateNull"}</code> | True if there is no transform to spin. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Logger for this class. |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | Spin speed of the frame in degrees per second. |
| <Link id="m-tipcancellationtokensource" /><code>{"private CancellationTokenSource tipCancellationTokenSource"}</code> | Cancels the tip loop; nothing cancels it in this build. |
| <Link id="m-tipdurationseconds" /><code>{"private float tipDurationSeconds"}</code> | How long each tip shows. |
| <Link id="m-tipindex" /><code>{"private int tipIndex"}</code> | Index of the tip shown. |
| <Link id="m-tips" /><code>{"private string[] tips"}</code> | The tip texts, shuffled on start. |
| <Link id="m-tiptextrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" tipTextRenderer"}</code> | Text that shows the tips. |
| <Link id="m-tomilliseconds" /><code>{"private const int ToMilliseconds"}</code> | 1000, for turning seconds into milliseconds. |
| <Link id="m-transformtorotate" /><code>{"private Transform transformToRotate"}</code> | The object that spins. |
| <Link id="m-vrtrackeddevice" /><code>{"private "}<Link to="/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" vrTrackedDevice"}</code> | Headset tracking for the camera. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-displaymessage" /><code>{"static void DisplayMessage(string message)"}</code> | Shows a message on the loading scene's custom message text. Logs a warning if no loading scene has started yet. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Calls `InitializeLoadingScene`. |
| <Link id="m-cachetransformtorotatenullcomparison" /><code>{"private void CacheTransformToRotateNullComparison()"}</code> | Warns and remembers if there is no transform to spin, so `Update` can skip it cheaply. |
| <Link id="m-createinstance" /><code>{"private void CreateInstance()"}</code> | Stores this as the static instance. |
| <Link id="m-initializeloadingscene" /><code>{"private void InitializeLoadingScene()"}</code> | Sets up tracking, lighting, reflections and the static instance. |
| <Link id="m-initializetips" /><code>{"private void InitializeTips()"}</code> | Shuffles the tips and starts cycling them. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Sets the ambient light again every frame. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the headset tracking. The tip loop is not cancelled. |
| <Link id="m-setambientlight" /><code>{"private void SetAmbientLight()"}</code> | Sets flat ambient lighting in `ambientColor`. |
| <Link id="m-setreflections" /><code>{"private static void SetReflections()"}</code> | Sets custom reflections with no cubemap. |
| <Link id="m-settrackeddevice" /><code>{"private void SetTrackedDevice()"}</code> | Makes the camera follow the headset. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Calls `InitializeTips`. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Spins the frame. |
| <Link id="m-updateframerotation" /><code>{"private void UpdateFrameRotation()"}</code> | Turns `transformToRotate` around the up axis by `rotationSpeed` degrees per second. |
| <Link id="m-updatetiptext" /><code>{"private async void UpdateTipText(CancellationToken cancellationToken)"}</code> | Shows each tip for `tipDurationSeconds`, looping until cancelled. |

</details>
