---
title: "NearbyPlayerScaler"
description: "class NearbyPlayerScaler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NearbyPlayerScaler

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`CurveScaler`](/game-api/types/global-c-d/curvescaler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NearbyPlayerScaler()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activatedistance" /><code>{"private float activateDistance"}</code> |  |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-deactivatedistance" /><code>{"private float deactivateDistance"}</code> |  |
| <Link id="m-debugview" /><code>{"private bool debugView"}</code> |  |
| <Link id="m-enabledwhileactivated" /><code>{"private Behaviour[] enabledWhileActivated"}</code> |  |
| <Link id="m-sqrdactivatedistance" /><code>{"private float sqrdActivateDistance"}</code> |  |
| <Link id="m-sqrddeactivatedistance" /><code>{"private float sqrdDeactivateDistance"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isscalingforced" /><code>{"bool? IsScalingForced { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onnearchanged" /><code>{"event Action<bool> OnNearChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debugview-2" /><code>{"void DebugView()"}</code> |  |
| <Link id="m-setscale" /><code>{"void SetScale(float progress)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-ondisable" /><code>{"protected override void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-set" /><code>{"private void Set(bool isOn)"}</code> |  |

## Used in

Members of other types that take, return or hold a `NearbyPlayerScaler`:

[`Chest.childDocks`](/game-api/types/alta-items/chest#m-childdocks), [`DockVisual.nearbyScaler`](/game-api/types/alta-items/dockvisual#m-nearbyscaler), [`PickupDock.scaler`](/game-api/types/alta-items/pickupdock#m-scaler).
