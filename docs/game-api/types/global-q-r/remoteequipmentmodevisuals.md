---
title: "RemoteEquipmentModeVisuals"
description: "Visuals that scale in when shown and destroy themselves after scaling out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RemoteEquipmentModeVisuals

A **class** in `Root.Township`, no namespace.

Visuals that scale in when shown and destroy themselves after scaling out. Client side.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RemoteEquipmentModeVisuals()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-appearscaler" /><code>{"private "}<Link to="/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" appearScaler"}</code> | Curve scaler that runs the scale animation. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-makeappear" /><code>{"void MakeAppear()"}</code> | Starts the scale-in animation. |
| <Link id="m-makedissappear" /><code>{"void MakeDissappear()"}</code> | Starts the scale-out animation and destroys the object when it ends. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-waitfordissapearanimation" /><code>{"private IEnumerator WaitForDissapearAnimation() (iterator)"}</code> | Coroutine that waits for the scale animation to finish, then destroys the object. |

</details>

## Used in

Members of other types that take, return or hold a `RemoteEquipmentModeVisuals`:

[`EquipmentState.remoteDummyEffects`](/game-api/types/alta-player/equipmentstate#m-remotedummyeffects), [`EquipmentStateSettings.remoteDummyEffects`](/game-api/types/alta-player/equipmentstatesettings#m-remotedummyeffects), [`EquipmentStateSettings.RemoteDummyEffects`](/game-api/types/alta-player/equipmentstatesettings#m-remotedummyeffects-2).
