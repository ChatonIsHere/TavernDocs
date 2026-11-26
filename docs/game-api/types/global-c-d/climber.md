---
title: "Climber"
description: "Client: smooth locomotion modifier that adds hand climbing for the local player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Climber

A **class** in `Root.Township`, no namespace.

Client: smooth locomotion modifier that adds hand climbing for the local player. It makes a `ClimbingHandler` once the character is linked to the local player.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`SmoothLocomotionModifier`](/game-api/types/global-s/smoothlocomotionmodifier)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Climber()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialsettings" /><code>{"private "}<Link to="/game-api/types/global-c-d/climbingsettings">{"ClimbingSettings"}</Link>{" initialSettings"}</code> | Serialized climbing settings. Not read by this class. |
| <Link id="m-unlock" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock"}</code> | Player unlock passed to the climbing handler, probably to gate climbing. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canoverridemovement" /><code>{"override bool CanOverrideMovement { get; }"}</code> | Always true. |
| <Link id="m-climbinghandler" /><code><Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" { get; private set; }"}</code> | The handler that does the climbing. Null until the local player is linked. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos("}<Link to="/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" locomotion)"}</code> | Empty. |
| <Link id="m-getfrictionmultiplier" /><code>{"override void GetFrictionMultiplier(ref float friction)"}</code> | Multiplies friction by the climbing handler's friction. |
| <Link id="m-getheight" /><code>{"override void GetHeight(ref float height)"}</code> | Sets the body height to the climbing handler's height. |
| <Link id="m-getupwardgrip" /><code>{"override void GetUpwardGrip(ref float upwardGrip)"}</code> | Sets upward grip to 1 while climbing. |
| <Link id="m-isblockingteleportation" /><code>{"override void IsBlockingTeleportation(ref bool isBlocking)"}</code> | Blocks teleport locomotion while climbing. |
| <Link id="m-isoverridingmovement" /><code>{"override bool IsOverridingMovement()"}</code> | True while climbing. |
| <Link id="m-locomotionupdate" /><code>{"override void LocomotionUpdate()"}</code> | Runs the climbing handler each locomotion update. |
| <Link id="m-movementoverride" /><code>{"override bool MovementOverride()"}</code> | While climbing, uses the climbing step height and applies only gravity, replacing normal movement. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Waits for the character to be linked to the local player. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Runs the climbing handler's late update. |
| <Link id="m-linked" /><code>{"private void Linked()"}</code> | Creates the climbing handler and registers this modifier with locomotion. |

</details>
