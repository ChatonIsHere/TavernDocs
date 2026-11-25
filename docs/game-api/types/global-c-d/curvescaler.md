---
title: "CurveScaler"
description: "class CurveScaler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveScaler

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`NearbyPlayerScaler`](/game-api/types/global-m-o/nearbyplayerscaler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurveScaler()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private "}<Link to="/game-api/types/global-s/scaleanimator">{"ScaleAnimator"}</Link>{" animator"}</code> |  |
| <Link id="m-dockvisuals" /><code>{"private "}<Link to="/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{"[] dockVisuals"}</code> |  |
| <Link id="m-isdisallowingzero" /><code>{"protected bool isDisallowingZero"}</code> |  |
| <Link id="m-isinitiallyon" /><code>{"private bool isInitiallyOn"}</code> |  |
| <Link id="m-off" /><code>{"protected AnimationCurve off"}</code> |  |
| <Link id="m-on" /><code>{"protected AnimationCurve on"}</code> |  |
| <Link id="m-startscale" /><code>{"protected Vector3 startScale"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dockvisuals-2" /><code><Link to="/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{"[] DockVisuals { get; }"}</code> |  |
| <Link id="m-isnear" /><code>{"bool IsNear { get; }"}</code> |  |
| <Link id="m-scaleanimator" /><code><Link to="/game-api/types/global-s/scaleanimator">{"ScaleAnimator"}</Link>{" "}<Link to="/game-api/types/global-s/scaleanimator">{"ScaleAnimator"}</Link>{" { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedanimation" /><code>{"event Action<"}<Link to="/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{"> FinishedAnimation"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setvalue" /><code>{"void SetValue(bool isOn)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CurveScaler`:

[`CraftedDocks.storage`](/game-api/types/alta-items/crafteddocks#m-storage), [`StabilizeJointContainer.heldScaler`](/game-api/types/alta-items/stabilizejointcontainer#m-heldscaler), [`StabilizeJointContainer.storage`](/game-api/types/alta-items/stabilizejointcontainer#m-storage), [`LiquidContainerLid.fakeCork`](/game-api/types/alta-stats-effects/liquidcontainerlid#m-fakecork), [`Panel.animation`](/game-api/types/alta-menus/panel#m-animation), [`EquipmentRoomAnimator.pedestalAnimator`](/game-api/types/global-e-h/equipmentroomanimator#m-pedestalanimator), [`RemoteEquipmentModeVisuals.appearScaler`](/game-api/types/global-q-r/remoteequipmentmodevisuals#m-appearscaler).
