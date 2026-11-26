---
title: "FailTargetOperation"
description: "Scoring rule that always returns 0, so a required rule built from it switches its action off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FailTargetOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Scoring rule that always returns 0, so a required rule built from it switches its action off. Returned by `CreateTargetOperation.Fail` after logging an error.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/mod/game-api/types/alta-intelligence/targetoperation)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private FailTargetOperation()"}</code> | <span className="api-desc">Creates a `FailTargetOperation` with default values.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-intelligence/failtargetoperation">{"FailTargetOperation"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The single shared instance.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/mod/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/mod/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | <span className="api-desc">Always returns 0.</span> |
