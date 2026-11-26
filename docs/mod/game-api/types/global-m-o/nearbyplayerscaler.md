---
title: "NearbyPlayerScaler"
description: "Scales an object up when the local player comes close and down when they move away, and turns on extra behaviours while shown."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NearbyPlayerScaler

A **class** in `Root.Township`, the global namespace.

Scales an object up when the local player comes close and down when they move away, and turns on extra behaviours while shown. Client side.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`CurveScaler`](/mod/game-api/types/global-c-d/curvescaler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NearbyPlayerScaler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activatedistance" /><code>{"private float activateDistance"}</code> | <span className="api-desc">Distance at which the object shows.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached transform.</span> |
| <Link id="m-deactivatedistance" /><code>{"private float deactivateDistance"}</code> | <span className="api-desc">Distance at which it hides again.</span> |
| <Link id="m-debugview" /><code>{"private bool debugView"}</code> | <span className="api-desc">Inspector button flag for `DebugView`.</span> |
| <Link id="m-enabledwhileactivated" /><code>{"private Behaviour[] enabledWhileActivated"}</code> | <span className="api-desc">Behaviours turned on only while shown.</span> |
| <Link id="m-sqrdactivatedistance" /><code>{"private float sqrdActivateDistance"}</code> | <span className="api-desc">`activateDistance` squared.</span> |
| <Link id="m-sqrddeactivatedistance" /><code>{"private float sqrdDeactivateDistance"}</code> | <span className="api-desc">`deactivateDistance` squared.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isscalingforced" /><code>{"bool? IsScalingForced { get; set; }"}</code> | <span className="api-desc">When set, forces shown or hidden regardless of distance.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onnearchanged" /><code>{"event Action<bool> OnNearChanged"}</code> | <span className="api-desc">Raised with true when the object shows and false when it hides.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-debugview-2" /><code>{"void DebugView()"}</code> | <span className="api-desc">Editor button: shows the object.</span> |
| <Link id="m-setscale" /><code>{"void SetScale(float progress)"}</code> | <span className="api-desc">Sets the scale from the curve at the given progress and toggles dock visuals.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Caches distances, scales to zero and turns off the linked behaviours.</span> |
| <Link id="m-ondisable" /><code>{"protected override void OnDisable()"}</code> | <span className="api-desc">Hides the object when disabled.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Shows or hides the object by the local player's head distance, or hides it while the player is dead.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Sets shown or hidden right away from the current distance.</span> |
| <Link id="m-set" /><code>{"private void Set(bool isOn)"}</code> | <span className="api-desc">Shows or hides with the scale animation and toggles the linked behaviours.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NearbyPlayerScaler`:

<div className="api-used-in">

[`Chest.childDocks`](/mod/game-api/types/alta-items/chest#m-childdocks), [`DockVisual.nearbyScaler`](/mod/game-api/types/alta-items/dockvisual#m-nearbyscaler), [`PickupDock.scaler`](/mod/game-api/types/alta-items/pickupdock#m-scaler).

</div>
