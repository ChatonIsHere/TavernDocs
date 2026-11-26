---
title: "SenseOperation"
description: "Prefab scoring component that adds a sense rule: a sense asset read on the target or the creature, mapped onto 0 to 1."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SenseOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Prefab scoring component that adds a sense rule: a sense asset read on the target or the creature, mapped onto 0 to 1. The older scoring components migrate to this one.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SenseOperation()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | Sense value that maps to 0. |
| <Link id="m-istarget" /><code>{"private bool isTarget"}</code> | Read the sense on the target (true) or on the creature itself. |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Weight of the rule. Only matters for preferred rules. |
| <Link id="m-sense" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense"}</code> | The sense asset read. |
| <Link id="m-to" /><code>{"private float to"}</code> | Sense value that maps to 1 (default 1). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | Makes the sense rule with these settings, weighted by `multiplier`. |
| <Link id="m-migrate" /><code>{"static void Migrate(Component old, "}<Link to="/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense, float from, float to, bool isTarget, float multiplier)"}</code> | Editor: adds or reuses a `SenseOperation` on the old component's GameObject and copies the settings over. |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | Builds the GameObject name, like `Danger 0 -> 1 (x1)`. |
