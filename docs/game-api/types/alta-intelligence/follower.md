---
title: "Follower"
description: "class Follower in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Follower

A **class** in `Root.Township`, `Alta.Pathfinding`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Follower("}<Link to="/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-minimuminterval" /><code>{"private float minimumInterval"}</code> |  |
| <Link id="m-navigator" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/navigator">{"Navigator"}</Link>{" navigator"}</code> |  |
| <Link id="m-reevaluationcoroutine" /><code>{"private Coroutine reevaluationCoroutine"}</code> |  |
| <Link id="m-reevaluationinterval" /><code>{"private WaitForSeconds reevaluationInterval"}</code> |  |
| <Link id="m-target" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target"}</code> |  |
| <Link id="m-targetreacheddistance" /><code>{"private float targetReachedDistance"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-follow" /><code>{"void Follow("}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" newTarget, float reevaluationInterval = 0.5, float targetReachedDistance = 0.1)"}</code> |  |
| <Link id="m-stopfollow" /><code>{"void StopFollow()"}</code> |  |
| <Link id="m-continuereevaluation" /><code>{"private void ContinueReevaluation(Path path)"}</code> |  |
| <Link id="m-reevaluation" /><code>{"private IEnumerator Reevaluation() (iterator)"}</code> |  |
| <Link id="m-startreevaluationcoroutine" /><code>{"private void StartReevaluationCoroutine()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Follower`:

[`Director.follower`](/game-api/types/alta-intelligence/director#m-follower).
