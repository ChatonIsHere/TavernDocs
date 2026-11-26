---
title: "Climber"
description: "class Climber in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Climber

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`SmoothLocomotionModifier`](/game-api/types/global-s/smoothlocomotionmodifier)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Climber()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-initialsettings" /><code>{"private "}<Link to="/game-api/types/global-c-d/climbingsettings">{"ClimbingSettings"}</Link>{" initialSettings"}</code> |
| <Link id="m-unlock" /><code>{"private "}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-canoverridemovement" /><code>{"override bool CanOverrideMovement { get; }"}</code> |
| <Link id="m-climbinghandler" /><code><Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/climbinghandler">{"ClimbingHandler"}</Link>{" { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-drawgizmos" /><code>{"override void DrawGizmos("}<Link to="/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" locomotion)"}</code> |
| <Link id="m-getfrictionmultiplier" /><code>{"override void GetFrictionMultiplier(ref float friction)"}</code> |
| <Link id="m-getheight" /><code>{"override void GetHeight(ref float height)"}</code> |
| <Link id="m-getupwardgrip" /><code>{"override void GetUpwardGrip(ref float upwardGrip)"}</code> |
| <Link id="m-isblockingteleportation" /><code>{"override void IsBlockingTeleportation(ref bool isBlocking)"}</code> |
| <Link id="m-isoverridingmovement" /><code>{"override bool IsOverridingMovement()"}</code> |
| <Link id="m-locomotionupdate" /><code>{"override void LocomotionUpdate()"}</code> |
| <Link id="m-movementoverride" /><code>{"override bool MovementOverride()"}</code> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |
| <Link id="m-linked" /><code>{"private void Linked()"}</code> |

</details>
