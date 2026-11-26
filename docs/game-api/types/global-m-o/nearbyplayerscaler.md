---
title: "NearbyPlayerScaler"
description: "Scales an object up when the local player comes close and down when they move away, and turns on extra behaviours while shown."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NearbyPlayerScaler

A **class** in `Root.Township`, no namespace.

Scales an object up when the local player comes close and down when they move away, and turns on extra behaviours while shown. Client side.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`CurveScaler`](/game-api/types/global-c-d/curvescaler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NearbyPlayerScaler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activatedistance" /><code>{"private float activateDistance"}</code> | Distance at which the object shows. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached transform. |
| <Link id="m-deactivatedistance" /><code>{"private float deactivateDistance"}</code> | Distance at which it hides again. |
| <Link id="m-debugview" /><code>{"private bool debugView"}</code> | Inspector button flag for `DebugView`. |
| <Link id="m-enabledwhileactivated" /><code>{"private Behaviour[] enabledWhileActivated"}</code> | Behaviours turned on only while shown. |
| <Link id="m-sqrdactivatedistance" /><code>{"private float sqrdActivateDistance"}</code> | `activateDistance` squared. |
| <Link id="m-sqrddeactivatedistance" /><code>{"private float sqrdDeactivateDistance"}</code> | `deactivateDistance` squared. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isscalingforced" /><code>{"bool? IsScalingForced { get; set; }"}</code> | When set, forces shown or hidden regardless of distance. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onnearchanged" /><code>{"event Action<bool> OnNearChanged"}</code> | Raised with true when the object shows and false when it hides. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debugview-2" /><code>{"void DebugView()"}</code> | Editor button: shows the object. |
| <Link id="m-setscale" /><code>{"void SetScale(float progress)"}</code> | Sets the scale from the curve at the given progress and toggles dock visuals. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Caches distances, scales to zero and turns off the linked behaviours. |
| <Link id="m-ondisable" /><code>{"protected override void OnDisable()"}</code> | Hides the object when disabled. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Shows or hides the object by the local player's head distance, or hides it while the player is dead. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Sets shown or hidden right away from the current distance. |
| <Link id="m-set" /><code>{"private void Set(bool isOn)"}</code> | Shows or hides with the scale animation and toggles the linked behaviours. |

</details>

## Used in

Members of other types that take, return or hold a `NearbyPlayerScaler`:

[`Chest.childDocks`](/game-api/types/alta-items/chest#m-childdocks), [`DockVisual.nearbyScaler`](/game-api/types/alta-items/dockvisual#m-nearbyscaler), [`PickupDock.scaler`](/game-api/types/alta-items/pickupdock#m-scaler).
