---
title: "Climber"
description: "Client: smooth locomotion modifier that adds hand climbing for the local player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Climber

A **class** in `Root.Township`, the global namespace.

Client: smooth locomotion modifier that adds hand climbing for the local player. It makes a `ClimbingHandler` once the character is linked to the local player.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`SmoothLocomotionModifier`](/mod/game-api/types/global-s/smoothlocomotionmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Climber()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/climbingsettings">{"ClimbingSettings"}</Link>{" initialSettings"}</code> | <span className="api-desc">Serialized climbing settings. Not read by this class.</span> |
| <Link id="m-unlock" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock"}</code> | <span className="api-desc">Player unlock passed to the climbing handler, probably to gate climbing.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canoverridemovement" /><code>{"override bool CanOverrideMovement { get; }"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-climbinghandler" /><code><Link to="/mod/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The handler that does the climbing. Null until the local player is linked.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos("}<Link to="/mod/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" locomotion)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-getfrictionmultiplier" /><code>{"override void GetFrictionMultiplier(ref float friction)"}</code> | <span className="api-desc">Multiplies friction by the climbing handler's friction.</span> |
| <Link id="m-getheight" /><code>{"override void GetHeight(ref float height)"}</code> | <span className="api-desc">Sets the body height to the climbing handler's height.</span> |
| <Link id="m-getupwardgrip" /><code>{"override void GetUpwardGrip(ref float upwardGrip)"}</code> | <span className="api-desc">Sets upward grip to 1 while climbing.</span> |
| <Link id="m-isblockingteleportation" /><code>{"override void IsBlockingTeleportation(ref bool isBlocking)"}</code> | <span className="api-desc">Blocks teleport locomotion while climbing.</span> |
| <Link id="m-isoverridingmovement" /><code>{"override bool IsOverridingMovement()"}</code> | <span className="api-desc">True while climbing.</span> |
| <Link id="m-locomotionupdate" /><code>{"override void LocomotionUpdate()"}</code> | <span className="api-desc">Runs the climbing handler each locomotion update.</span> |
| <Link id="m-movementoverride" /><code>{"override bool MovementOverride()"}</code> | <span className="api-desc">While climbing, uses the climbing step height and applies only gravity, replacing normal movement.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Waits for the character to be linked to the local player.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Runs the climbing handler's late update.</span> |
| <Link id="m-linked" /><code>{"private void Linked()"}</code> | <span className="api-desc">Creates the climbing handler and registers this modifier with locomotion.</span> |

</details>
