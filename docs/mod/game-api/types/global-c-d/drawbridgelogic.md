---
title: "DrawBridgeLogic"
description: "Saved, non-networked drawbridge that rotates its transform around local Z by a set angle over time each time it is toggled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DrawBridgeLogic

A **class** in `Root.Township`, the global namespace.

Saved, non-networked drawbridge that rotates its transform around local Z by a set angle over time each time it is toggled.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<DrawBridgeLogicSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<DrawBridgeLogicSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`DrawBridgeLogicSaveData`](/mod/game-api/types/global-c-d/drawbridgelogicsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DrawBridgeLogic()"}</code> | <span className="api-desc">Creates a `DrawBridgeLogic` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isup" /><code>{"bool isUp"}</code> | <span className="api-desc">Whether the bridge is up; flipped after each move.</span> |

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angletorotate" /><code>{"private float angleToRotate"}</code> | <span className="api-desc">Degrees to turn on the next toggle; negated after each move.</span> |
| <Link id="m-ismoving" /><code>{"private bool isMoving"}</code> | <span className="api-desc">True while a rotation is running.</span> |
| <Link id="m-rotationend" /><code>{"private Quaternion rotationEnd"}</code> | <span className="api-desc">Target rotation of the current move.</span> |
| <Link id="m-rotationstart" /><code>{"private Quaternion rotationStart"}</code> | <span className="api-desc">Starting rotation of the current move.</span> |
| <Link id="m-rotationtime" /><code>{"private float rotationTime"}</code> | <span className="api-desc">Seconds each move takes.</span> |
| <Link id="m-z" /><code>{"private Vector3 z"}</code> | <span className="api-desc">Unit Z vector set in `Awake`, not otherwise used.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-togglerotate" /><code>{"void ToggleRotate()"}</code> | <span className="api-desc">Starts rotating by `angleToRotate` unless already moving.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets up the Z axis vector and clears the moving flag.</span> |
| <Link id="m-rotateovertime" /><code>{"private IEnumerator RotateOverTime(Quaternion start, Quaternion end, float rotTime) (iterator)"}</code> | <span className="api-desc">Coroutine that slerps the local rotation, then flips `isUp` and negates the angle for the next toggle.</span> |

</details>
