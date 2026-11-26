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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger used by `Fail`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-chance" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Chance(float chance, float success = 1, float failure = 0)"}</code> | <span className="api-desc">Makes a `Chance` rule: a fresh dice roll each evaluation.</span> |
| <Link id="m-fail" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Fail(string message)"}</code> | <span className="api-desc">Logs the message as an error and returns `FailTargetOperation.Instance`, which always scores 0.</span> |
| <Link id="m-formula" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Formula<T>(string name, Func<T, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", float> formula)"}</code> | <span className="api-desc">Makes a `Formula<T>` rule that runs your own function on the agent and target.</span> |
| <Link id="m-grounded" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Grounded(float groundedValue, float airValue)"}</code> | <span className="api-desc">Makes a `Grounded` rule: one value when the creature's walker is grounded, another in the air.</span> |
| <Link id="m-lifetime" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Lifetime(float minimum, float maximum)"}</code> | <span className="api-desc">Makes a `Lifetime` rule: the creature's age in seconds mapped from minimum to maximum onto 0 to 1.</span> |
| <Link id="m-raycastgrounded" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" RaycastGrounded(float groundedValue, float airValue, Vector3 raycastOriginOffset, float raycastDistance, LayerMask layerMask, "}<Link to="/mod/game-api/types/alta-intelligence/raycastgroundedoperationtype">{"RaycastGroundedOperationType"}</Link>{" operationType)"}</code> | <span className="api-desc">Makes a `RaycastGrounded` rule that checks for ground with a ray or sphere from the creature's body.</span> |
| <Link id="m-rvoblocked" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" RVOBlocked(float unblocked, float blocked)"}</code> | <span className="api-desc">Makes an `RVOBlockedValue` rule: one value when the creature's walker is blocked, another otherwise.</span> |
| <Link id="m-sametarget" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" SameTarget(float sameValue, float differentValue = 1)"}</code> | <span className="api-desc">Makes a `SameTarget` rule: one value if the target is the creature's current target, another if not.</span> |
| <Link id="m-sense" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Sense("}<Link to="/mod/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" sense, float from0 = 0, float to1 = 1, bool isTarget = true)"}</code> | <span className="api-desc">Makes a rule mapping a sense on the target (or the creature itself) from `from0` to `to1` onto 0 to 1. Accepts a `Sense` asset or a `SenseOld` value.</span> |
| <Link id="m-sense-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" "}<Link to="/mod/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{"("}<Link to="/mod/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense, float from0 = 0, float to1 = 1, bool isTarget = true)"}</code> | <span className="api-desc">Makes a rule mapping a sense on the target (or the creature itself) from `from0` to `to1` onto 0 to 1. Accepts a `Sense` asset or a `SenseOld` value.</span> |
| <Link id="m-stat" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Stat("}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, float from, float to, bool isTargetStat, bool isRatio)"}</code> | <span className="api-desc">Makes a `StatValue` rule that maps a stat on the creature or target onto 0 to 1.</span> |
| <Link id="m-velocitylimit" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" VelocityLimit(float maximimumVelocitySquared, float withinLimitValue, float outsideLimitValue)"}</code> | <span className="api-desc">Makes a `VelocityLimit` rule comparing the creature's rigidbody speed to a squared limit.</span> |
