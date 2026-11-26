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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Follower("}<Link to="/mod/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator)"}</code> | <span className="api-desc">Creates a `Follower` from `navigator`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minimuminterval" /><code>{"private float minimumInterval"}</code> | <span className="api-desc">Shortest time between path requests (interval minus 0.1 seconds).</span> |
| <Link id="m-navigator" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator"}</code> | <span className="api-desc">The navigator being driven.</span> |
| <Link id="m-reevaluationcoroutine" /><code>{"private Coroutine reevaluationCoroutine"}</code> | <span className="api-desc">The running re-path coroutine, if any.</span> |
| <Link id="m-reevaluationinterval" /><code>{"private WaitForSeconds reevaluationInterval"}</code> | <span className="api-desc">Wait between re-paths (default 0.5 seconds).</span> |
| <Link id="m-target" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target"}</code> | <span className="api-desc">The target being followed.</span> |
| <Link id="m-targetreacheddistance" /><code>{"private float targetReachedDistance"}</code> | <span className="api-desc">Distance at which the target counts as reached (default 0.1).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-follow" /><code>{"void Follow("}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" newTarget, float reevaluationInterval = 0.5, float targetReachedDistance = 0.1)"}</code> | <span className="api-desc">Starts following a target (or updates the interval and reach distance); null stops following.</span> |
| <Link id="m-stopfollow" /><code>{"void StopFollow()"}</code> | <span className="api-desc">Clears the target and stops the re-path loop.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-continuereevaluation" /><code>{"private void ContinueReevaluation(Path path)"}</code> | <span className="api-desc">Seeker path callback that restarts the re-path loop once a pending path request finishes.</span> |
| <Link id="m-reevaluation" /><code>{"private IEnumerator Reevaluation() (iterator)"}</code> | <span className="api-desc">Coroutine that paths to the target's ground position every interval while it is alive, pausing while a path request is pending.</span> |
| <Link id="m-startreevaluationcoroutine" /><code>{"private void StartReevaluationCoroutine()"}</code> | <span className="api-desc">Starts `Reevaluation` on the navigator.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Follower`:

<div className="api-used-in">

[`Director.follower`](/mod/game-api/types/alta-intelligence/director#m-follower).

</div>
