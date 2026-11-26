---
title: "CreateTargetOperation"
description: "Static factory for the common TargetOperation scoring rules used by actions in code and by the scoring components on prefabs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CreateTargetOperation

A **static class** in `Root.Township`, `Alta.Intelligence`.

Static factory for the common `TargetOperation` scoring rules used by actions in code and by the scoring components on prefabs. Server only, like the decider.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger used by `Fail`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-chance" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Chance(float chance, float success = 1, float failure = 0)"}</code> | Makes a `Chance` rule: a fresh dice roll each evaluation. |
| <Link id="m-fail" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Fail(string message)"}</code> | Logs the message as an error and returns `FailTargetOperation.Instance`, which always scores 0. |
| <Link id="m-formula" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Formula<T>(string name, Func<T, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", float> formula)"}</code> | Makes a `Formula<T>` rule that runs your own function on the agent and target. |
| <Link id="m-grounded" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Grounded(float groundedValue, float airValue)"}</code> | Makes a `Grounded` rule: one value when the creature's walker is grounded, another in the air. |
| <Link id="m-lifetime" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Lifetime(float minimum, float maximum)"}</code> | Makes a `Lifetime` rule: the creature's age in seconds mapped from minimum to maximum onto 0 to 1. |
| <Link id="m-raycastgrounded" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" RaycastGrounded(float groundedValue, float airValue, Vector3 raycastOriginOffset, float raycastDistance, LayerMask layerMask, "}<Link to="/game-api/types/alta-intelligence/raycastgroundedoperationtype">{"RaycastGroundedOperationType"}</Link>{" operationType)"}</code> | Makes a `RaycastGrounded` rule that checks for ground with a ray or sphere from the creature's body. |
| <Link id="m-rvoblocked" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" RVOBlocked(float unblocked, float blocked)"}</code> | Makes an `RVOBlockedValue` rule: one value when the creature's walker is blocked, another otherwise. |
| <Link id="m-sametarget" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" SameTarget(float sameValue, float differentValue = 1)"}</code> | Makes a `SameTarget` rule: one value if the target is the creature's current target, another if not. |
| <Link id="m-sense" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Sense("}<Link to="/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" sense, float from0 = 0, float to1 = 1, bool isTarget = true)"}</code> | Makes a rule mapping a sense on the target (or the creature itself) from `from0` to `to1` onto 0 to 1. Accepts a `Sense` asset or a `SenseOld` value. |
| <Link id="m-sense-2" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{"("}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense, float from0 = 0, float to1 = 1, bool isTarget = true)"}</code> | Makes a rule mapping a sense on the target (or the creature itself) from `from0` to `to1` onto 0 to 1. Accepts a `Sense` asset or a `SenseOld` value. |
| <Link id="m-stat" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Stat("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, float from, float to, bool isTargetStat, bool isRatio)"}</code> | Makes a `StatValue` rule that maps a stat on the creature or target onto 0 to 1. |
| <Link id="m-velocitylimit" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" VelocityLimit(float maximimumVelocitySquared, float withinLimitValue, float outsideLimitValue)"}</code> | Makes a `VelocityLimit` rule comparing the creature's rigidbody speed to a squared limit. |
