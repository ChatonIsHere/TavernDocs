---
title: "CreateTargetOperation"
description: "static class CreateTargetOperation in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CreateTargetOperation

A **static class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-chance" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Chance(float chance, float success = 1, float failure = 0)"}</code> |
| <Link id="m-fail" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Fail(string message)"}</code> |
| <Link id="m-formula" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Formula<T>(string name, Func<T, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{", float> formula)"}</code> |
| <Link id="m-grounded" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Grounded(float groundedValue, float airValue)"}</code> |
| <Link id="m-lifetime" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Lifetime(float minimum, float maximum)"}</code> |
| <Link id="m-raycastgrounded" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" RaycastGrounded(float groundedValue, float airValue, Vector3 raycastOriginOffset, float raycastDistance, LayerMask layerMask, "}<Link to="/game-api/types/alta-intelligence/raycastgroundedoperationtype">{"RaycastGroundedOperationType"}</Link>{" operationType)"}</code> |
| <Link id="m-rvoblocked" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" RVOBlocked(float unblocked, float blocked)"}</code> |
| <Link id="m-sametarget" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" SameTarget(float sameValue, float differentValue = 1)"}</code> |
| <Link id="m-sense" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Sense("}<Link to="/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" sense, float from0 = 0, float to1 = 1, bool isTarget = true)"}</code> |
| <Link id="m-sense-2" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" "}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{"("}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense, float from0 = 0, float to1 = 1, bool isTarget = true)"}</code> |
| <Link id="m-stat" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" Stat("}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition, float from, float to, bool isTargetStat, bool isRatio)"}</code> |
| <Link id="m-velocitylimit" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" VelocityLimit(float maximimumVelocitySquared, float withinLimitValue, float outsideLimitValue)"}</code> |
