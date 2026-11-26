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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperation`](/game-api/types/alta-intelligence/targetoperation)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private FailTargetOperation()"}</code> | Creates a `FailTargetOperation` with default values. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-intelligence/failtargetoperation">{"FailTargetOperation"}</Link>{" Instance { get; }"}</code> | The single shared instance. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"override float Evaluate("}<Link to="/game-api/types/alta-intelligence/agent">{"Agent"}</Link>{" agent, "}<Link to="/game-api/types/alta-intelligence/itarget">{"ITarget"}</Link>{" target)"}</code> | Always returns 0. |
