---
title: "DrawBridgeLogic"
description: "Saved, non-networked drawbridge that rotates its transform around local Z by a set angle over time each time it is toggled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DrawBridgeLogic

A **class** in `Root.Township`, no namespace.

Saved, non-networked drawbridge that rotates its transform around local Z by a set angle over time each time it is toggled.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<DrawBridgeLogicSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<DrawBridgeLogicSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`DrawBridgeLogicSaveData`](/game-api/types/global-c-d/drawbridgelogicsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DrawBridgeLogic()"}</code> | Creates a `DrawBridgeLogic` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isup" /><code>{"bool isUp"}</code> | Whether the bridge is up; flipped after each move. |

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angletorotate" /><code>{"private float angleToRotate"}</code> | Degrees to turn on the next toggle; negated after each move. |
| <Link id="m-ismoving" /><code>{"private bool isMoving"}</code> | True while a rotation is running. |
| <Link id="m-rotationend" /><code>{"private Quaternion rotationEnd"}</code> | Target rotation of the current move. |
| <Link id="m-rotationstart" /><code>{"private Quaternion rotationStart"}</code> | Starting rotation of the current move. |
| <Link id="m-rotationtime" /><code>{"private float rotationTime"}</code> | Seconds each move takes. |
| <Link id="m-z" /><code>{"private Vector3 z"}</code> | Unit Z vector set in `Awake`, not otherwise used. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-togglerotate" /><code>{"void ToggleRotate()"}</code> | Starts rotating by `angleToRotate` unless already moving. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets up the Z axis vector and clears the moving flag. |
| <Link id="m-rotateovertime" /><code>{"private IEnumerator RotateOverTime(Quaternion start, Quaternion end, float rotTime) (iterator)"}</code> | Coroutine that slerps the local rotation, then flips `isUp` and negates the angle for the next toggle. |

</details>
