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
| <Link id="m-ctor" /><code>{"MovementBendController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseskirtrotation" /><code>{"private Quaternion baseSkirtRotation"}</code> | <span className="api-desc">Local rotation of the bone with no bend.</span> |
| <Link id="m-bodycontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" bodyController"}</code> | <span className="api-desc">Body controller giving the head position and settings.</span> |
| <Link id="m-btnread" /><code>{"private bool btnRead"}</code> | <span className="api-desc">Inspector button flag labelled Read Rotation.</span> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | <span className="api-desc">Character dummy that owns the bone.</span> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | <span className="api-desc">Lagging head position on the ground plane.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger; unused in this build.</span> |
| <Link id="m-maxdistancesquared" /><code>{"private float maxDistanceSquared"}</code> | <span className="api-desc">If the head jumps further than this (squared), the bend resets, as after a teleport.</span> |
| <Link id="m-movementbend" /><code>{"private Quaternion movementBend"}</code> | <span className="api-desc">Current bend rotation.</span> |
| <Link id="m-originalup" /><code>{"private Vector3 originalUp"}</code> | <span className="api-desc">Reference direction used to orient the bend axis.</span> |
| <Link id="m-skirtmovementtarget" /><code>{"private Transform skirtMovementTarget"}</code> | <span className="api-desc">Bone transform being rotated.</span> |
| <Link id="m-skirtmovementtargetbone" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" skirtMovementTargetBone"}</code> | <span className="api-desc">Which bone to rotate.</span> |

</details>

## Methods

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculatemovementbend" /><code>{"private void CalculateMovementBend(Vector3 headPosition, "}<Link to="/mod/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Works out a bend from how far the head has moved from a lagging point and blends the bone rotation toward it.</span> |
| <Link id="m-checkforenabledinsettings" /><code>{"private void CheckForEnabledInSettings(Settings settings)"}</code> | <span className="api-desc">Enables the component based on the local player's body bending setting.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the settings event.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Resets the bend and the lagging position.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the lagging point and a line to the head.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Finds the target bone; destroys itself on headless servers.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Updates the bend each frame, or disables itself if the player is being destroyed.</span> |

</details>
