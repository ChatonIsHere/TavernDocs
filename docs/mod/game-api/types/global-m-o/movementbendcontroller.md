---
title: "MovementBendController"
description: "Client-side visual: tilts a player's skirt bone as their head moves, so the body leans with movement."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovementBendController

A **class** in `Root.Township`, the global namespace.

Client-side visual: tilts a player's skirt bone as their head moves, so the body leans with movement. Removed on headless servers; for the local player it follows the body bending setting.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MovementBendController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseskirtrotation" /><code>{"private Quaternion baseSkirtRotation"}</code> | Local rotation of the bone with no bend. |
| <Link id="m-bodycontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" bodyController"}</code> | Body controller giving the head position and settings. |
| <Link id="m-btnread" /><code>{"private bool btnRead"}</code> | Inspector button flag labelled Read Rotation. |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | Character dummy that owns the bone. |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | Lagging head position on the ground plane. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger; unused in this build. |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> | If the head jumps further than this (squared), the bend resets, as after a teleport. |
| <Link id="m-movementbend" /><code>{"private Quaternion movementBend"}</code> | Current bend rotation. |
| <Link id="m-originalup" /><code>{"private Vector3 originalUp"}</code> | Reference direction used to orient the bend axis. |
| <Link id="m-skirtmovementtarget" /><code>{"private Transform skirtMovementTarget"}</code> | Bone transform being rotated. |
| <Link id="m-skirtmovementtargetbone" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" skirtMovementTargetBone"}</code> | Which bone to rotate. |

</details>

## Methods

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatemovementbend" /><code>{"private void CalculateMovementBend(Vector3 headPosition, "}<Link to="/mod/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" settings)"}</code> | Works out a bend from how far the head has moved from a lagging point and blends the bone rotation toward it. |
| <Link id="m-checkforenabledinsettings" /><code>{"private void CheckForEnabledInSettings(Settings settings)"}</code> | Enables the component based on the local player's body bending setting. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the settings event. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Resets the bend and the lagging position. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the lagging point and a line to the head. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Finds the target bone; destroys itself on headless servers. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Updates the bend each frame, or disables itself if the player is being destroyed. |

</details>
