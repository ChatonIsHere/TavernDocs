---
title: "ScaleLerpPooledObject"
description: "A pooled object that grows from tiny to its start size when taken from the pool and shrinks away before it goes back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaleLerpPooledObject

A **class** in `Root.Township`, the global namespace.

A pooled object that grows from tiny to its start size when taken from the pool and shrinks away before it goes back. Client-side visual effect.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)
- **Derived types** [`NameBoard`](/mod/game-api/types/alta-player/nameboard), [`QuickAccessMenuBubble`](/mod/game-api/types/alta-player/quickaccessmenububble), [`QuickAccessSettingsBoard`](/mod/game-api/types/alta-player/quickaccesssettingsboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScaleLerpPooledObject()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadespeed" /><code>{"private float fadeSpeed"}</code> | Lerp speed for growing and shrinking. Default 0.05. |
| <Link id="m-scale" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/lerpingfloatvalue">{"LerpingFloatValue"}</Link>{" scale"}</code> | Lerping value that drives the uniform local scale. |
| <Link id="m-startsize" /><code>{"private float startSize"}</code> | Scale it grows to when requested. Default 1. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Registered update method that steps the scale lerp, or null when idle. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isalwaysupdating" /><code>{"protected virtual bool IsAlwaysUpdating { get; }"}</code> | When true, subclasses keep `UpdateLerp` registered themselves, so this class does not register or deregister it. False by default. |
| <Link id="m-isreleasing" /><code>{"protected bool IsReleasing { get; private set; }"}</code> | True while the object is shrinking on its way back to the pool. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> | Unparents the object and starts shrinking it. The real pool release happens in `FadeFinished` once the shrink ends. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Sets up the scale lerp, snaps the scale to 0.01 and hooks the grow animation to the pool's `Requested` event. |
| <Link id="m-fadefinished" /><code>{"protected virtual void FadeFinished()"}</code> | Called when the shrink finishes. Stops updating and returns the object to the pool. |
| <Link id="m-lerp" /><code>{"protected void Lerp(float target, float speed)"}</code> | Starts a scale lerp to a target size at the given speed, registering the update if needed. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Deregisters the update method before the base clean-up. |
| <Link id="m-updatelerp" /><code>{"protected virtual void UpdateLerp()"}</code> | Steps the scale lerp each frame and deregisters itself when the lerp ends (unless `IsAlwaysUpdating`). |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatestart" /><code>{"private void AnimateStart("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Runs when the object is taken from the pool: clears the releasing flag, starts growing to `startSize` and registers the update. |

</details>
