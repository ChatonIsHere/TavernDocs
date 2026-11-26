---
title: "RemoteEquipmentModeVisuals"
description: "Visuals that scale in when shown and destroy themselves after scaling out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteEquipmentModeVisuals

A **class** in `Root.Township`, the global namespace.

Visuals that scale in when shown and destroy themselves after scaling out. Client side.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RemoteEquipmentModeVisuals()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-appearscaler" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" appearScaler"}</code> | <span className="api-desc">Curve scaler that runs the scale animation.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-makeappear" /><code>{"void MakeAppear()"}</code> | <span className="api-desc">Starts the scale-in animation.</span> |
| <Link id="m-makedissappear" /><code>{"void MakeDissappear()"}</code> | <span className="api-desc">Starts the scale-out animation and destroys the object when it ends.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-waitfordissapearanimation" /><code>{"private IEnumerator WaitForDissapearAnimation() (iterator)"}</code> | <span className="api-desc">Coroutine that waits for the scale animation to finish, then destroys the object.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RemoteEquipmentModeVisuals`:

<div className="api-used-in">

[`EquipmentState.remoteDummyEffects`](/mod/game-api/types/alta-player/equipmentstate#m-remotedummyeffects), [`EquipmentStateSettings.remoteDummyEffects`](/mod/game-api/types/alta-player/equipmentstatesettings#m-remotedummyeffects), [`EquipmentStateSettings.RemoteDummyEffects`](/mod/game-api/types/alta-player/equipmentstatesettings#m-remotedummyeffects-2).

</div>
