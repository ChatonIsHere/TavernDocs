---
title: "CurveScaler"
description: "Animates an object's scale between off and on using curves, for example a dock hint or a fake cork that grows and shrinks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveScaler

A **class** in `Root.Township`, the global namespace.

Animates an object's scale between off and on using curves, for example a dock hint or a fake cork that grows and shrinks.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`NearbyPlayerScaler`](/mod/game-api/types/global-m-o/nearbyplayerscaler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurveScaler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isdisallowingzero" /><code>{"protected bool isDisallowingZero"}</code> | <span className="api-desc">Whether the scale may reach exactly zero. True by default.</span> |
| <Link id="m-off" /><code>{"protected AnimationCurve off"}</code> | <span className="api-desc">Curve played when turning off.</span> |
| <Link id="m-on" /><code>{"protected AnimationCurve on"}</code> | <span className="api-desc">Curve played when turning on.</span> |
| <Link id="m-startscale" /><code>{"protected Vector3 startScale"}</code> | <span className="api-desc">The object's scale when it woke, used as the full-size scale.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private "}<Link to="/mod/game-api/types/global-s/scaleanimator">{"ScaleAnimator"}</Link>{" animator"}</code> | <span className="api-desc">Cached scale animator; rebuilt if it belongs to another behaviour.</span> |
| <Link id="m-dockvisuals" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{"[] dockVisuals"}</code> | <span className="api-desc">Dock visuals in children; when present a renderer scale animator is used.</span> |
| <Link id="m-isinitiallyon" /><code>{"private bool isInitiallyOn"}</code> | <span className="api-desc">Whether the animator starts in the on (scaled up) state.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dockvisuals-2" /><code><Link to="/mod/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{"[] DockVisuals { get; }"}</code> | <span className="api-desc">Child dock visuals. If any exist, a renderer-based scale animator is used.</span> |
| <Link id="m-isnear" /><code>{"bool IsNear { get; }"}</code> | <span className="api-desc">True while the scaler is on.</span> |
| <Link id="m-scaleanimator" /><code><Link to="/mod/game-api/types/global-s/scaleanimator">{"ScaleAnimator"}</Link>{" "}<Link to="/mod/game-api/types/global-s/scaleanimator">{"ScaleAnimator"}</Link>{" { get; }"}</code> | <span className="api-desc">The animator doing the scaling, created on first use.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedanimation" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{"> FinishedAnimation"}</code> | <span className="api-desc">Raised when an animation finishes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setvalue" /><code>{"void SetValue(bool isOn)"}</code> | <span className="api-desc">Turns the scaler on or off, animating the change.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Remembers the starting scale.</span> |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | <span className="api-desc">Stops the animation.</span> |

## Used in

Members of other types that take, return or hold a `CurveScaler`:

<div className="api-used-in">

[`CraftedDocks.storage`](/mod/game-api/types/alta-items/crafteddocks#m-storage), [`StabilizeJointContainer.heldScaler`](/mod/game-api/types/alta-items/stabilizejointcontainer#m-heldscaler), [`StabilizeJointContainer.storage`](/mod/game-api/types/alta-items/stabilizejointcontainer#m-storage), [`LiquidContainerLid.fakeCork`](/mod/game-api/types/alta-stats-effects/liquidcontainerlid#m-fakecork), [`Panel.animation`](/mod/game-api/types/alta-menus/panel#m-animation), [`EquipmentRoomAnimator.pedestalAnimator`](/mod/game-api/types/global-e-h/equipmentroomanimator#m-pedestalanimator), [`RemoteEquipmentModeVisuals.appearScaler`](/mod/game-api/types/global-q-r/remoteequipmentmodevisuals#m-appearscaler).

</div>
