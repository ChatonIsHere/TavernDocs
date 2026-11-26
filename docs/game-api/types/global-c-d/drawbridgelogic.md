---
title: "DrawBridgeLogic"
description: "class DrawBridgeLogic in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DrawBridgeLogic

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<DrawBridgeLogicSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<DrawBridgeLogicSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`DrawBridgeLogicSaveData`](/game-api/types/global-c-d/drawbridgelogicsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DrawBridgeLogic()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-isup" /><code>{"bool isUp"}</code> |

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-angletorotate" /><code>{"private float angleToRotate"}</code> |
| <Link id="m-ismoving" /><code>{"private bool isMoving"}</code> |
| <Link id="m-rotationend" /><code>{"private Quaternion rotationEnd"}</code> |
| <Link id="m-rotationstart" /><code>{"private Quaternion rotationStart"}</code> |
| <Link id="m-rotationtime" /><code>{"private float rotationTime"}</code> |
| <Link id="m-z" /><code>{"private Vector3 z"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-togglerotate" /><code>{"void ToggleRotate()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-rotateovertime" /><code>{"private IEnumerator RotateOverTime(Quaternion start, Quaternion end, float rotTime) (iterator)"}</code> |

</details>
