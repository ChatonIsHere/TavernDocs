---
title: "MovementBendController"
description: "class MovementBendController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovementBendController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MovementBendController()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-baseskirtrotation" /><code>{"private Quaternion baseSkirtRotation"}</code> |
| <Link id="m-bodycontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" bodyController"}</code> |
| <Link id="m-btnread" /><code>{"private bool btnRead"}</code> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> |
| <Link id="m-movementbend" /><code>{"private Quaternion movementBend"}</code> |
| <Link id="m-originalup" /><code>{"private Vector3 originalUp"}</code> |
| <Link id="m-skirtmovementtarget" /><code>{"private Transform skirtMovementTarget"}</code> |
| <Link id="m-skirtmovementtargetbone" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" skirtMovementTargetBone"}</code> |

</details>

## Methods

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-calculatemovementbend" /><code>{"private void CalculateMovementBend(Vector3 headPosition, "}<Link to="/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" settings)"}</code> |
| <Link id="m-checkforenabledinsettings" /><code>{"private void CheckForEnabledInSettings(Settings settings)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>
