---
title: "Follower"
description: "Makes a Navigator keep re-pathing to a moving target on an interval."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Follower

A **class** in `Root.Township`, `Alta.Pathfinding`.

Makes a `Navigator` keep re-pathing to a moving target on an interval. Made by `Director`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Follower("}<Link to="/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator)"}</code> | Creates a `Follower` from `navigator`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minimuminterval" /><code>{"private float minimumInterval"}</code> | Shortest time between path requests (interval minus 0.1 seconds). |
| <Link id="m-navigator" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator"}</code> | The navigator being driven. |
| <Link id="m-reevaluationcoroutine" /><code>{"private Coroutine reevaluationCoroutine"}</code> | The running re-path coroutine, if any. |
| <Link id="m-reevaluationinterval" /><code>{"private WaitForSeconds reevaluationInterval"}</code> | Wait between re-paths (default 0.5 seconds). |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target"}</code> | The target being followed. |
| <Link id="m-targetreacheddistance" /><code>{"private float targetReachedDistance"}</code> | Distance at which the target counts as reached (default 0.1). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-follow" /><code>{"void Follow("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" newTarget, float reevaluationInterval = 0.5, float targetReachedDistance = 0.1)"}</code> | Starts following a target (or updates the interval and reach distance); null stops following. |
| <Link id="m-stopfollow" /><code>{"void StopFollow()"}</code> | Clears the target and stops the re-path loop. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-continuereevaluation" /><code>{"private void ContinueReevaluation(Path path)"}</code> | Seeker path callback that restarts the re-path loop once a pending path request finishes. |
| <Link id="m-reevaluation" /><code>{"private IEnumerator Reevaluation() (iterator)"}</code> | Coroutine that paths to the target's ground position every interval while it is alive, pausing while a path request is pending. |
| <Link id="m-startreevaluationcoroutine" /><code>{"private void StartReevaluationCoroutine()"}</code> | Starts `Reevaluation` on the navigator. |

</details>

## Used in

Members of other types that take, return or hold a `Follower`:

[`Director.follower`](/game-api/types/alta-intelligence/director#m-follower).
