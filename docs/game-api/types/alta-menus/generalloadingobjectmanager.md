---
title: "GeneralLoadingObjectManager"
description: "class GeneralLoadingObjectManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneralLoadingObjectManager

A **class** in `Root.Township`, `Alta.UserAuthentication`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`TempSceneObject`](/game-api/types/global-t-x/tempsceneobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GeneralLoadingObjectManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ambientcolor" /><code>{"private Color ambientColor"}</code> |  |
| <Link id="m-cameratransform" /><code>{"private Transform cameraTransform"}</code> |  |
| <Link id="m-custommessagetextrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" customMessageTextRenderer"}</code> |  |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/alta-menus/generalloadingobjectmanager">{"GeneralLoadingObjectManager"}</Link>{" instance"}</code> |  |
| <Link id="m-isinstanceinitialized" /><code>{"private static bool isInstanceInitialized"}</code> |  |
| <Link id="m-istransformtorotatenull" /><code>{"private bool isTransformToRotateNull"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> |  |
| <Link id="m-tipcancellationtokensource" /><code>{"private CancellationTokenSource tipCancellationTokenSource"}</code> |  |
| <Link id="m-tipdurationseconds" /><code>{"private float tipDurationSeconds"}</code> |  |
| <Link id="m-tipindex" /><code>{"private int tipIndex"}</code> |  |
| <Link id="m-tips" /><code>{"private string[] tips"}</code> |  |
| <Link id="m-tiptextrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" tipTextRenderer"}</code> |  |
| <Link id="m-tomilliseconds" /><code>{"private const int ToMilliseconds"}</code> |  |
| <Link id="m-transformtorotate" /><code>{"private Transform transformToRotate"}</code> |  |
| <Link id="m-vrtrackeddevice" /><code>{"private "}<Link to="/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" vrTrackedDevice"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-displaymessage" /><code>{"static void DisplayMessage(string message)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-cachetransformtorotatenullcomparison" /><code>{"private void CacheTransformToRotateNullComparison()"}</code> |  |
| <Link id="m-createinstance" /><code>{"private void CreateInstance()"}</code> |  |
| <Link id="m-initializeloadingscene" /><code>{"private void InitializeLoadingScene()"}</code> |  |
| <Link id="m-initializetips" /><code>{"private void InitializeTips()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-setambientlight" /><code>{"private void SetAmbientLight()"}</code> |  |
| <Link id="m-setreflections" /><code>{"private static void SetReflections()"}</code> |  |
| <Link id="m-settrackeddevice" /><code>{"private void SetTrackedDevice()"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-updateframerotation" /><code>{"private void UpdateFrameRotation()"}</code> |  |
| <Link id="m-updatetiptext" /><code>{"private async void UpdateTipText(CancellationToken cancellationToken)"}</code> |  |
