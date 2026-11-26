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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/mod/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SenseOperation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | <span className="api-desc">Sense value that maps to 0.</span> |
| <Link id="m-istarget" /><code>{"private bool isTarget"}</code> | <span className="api-desc">Read the sense on the target (true) or on the creature itself.</span> |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Weight of the rule. Only matters for preferred rules.</span> |
| <Link id="m-sense" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense"}</code> | <span className="api-desc">The sense asset read.</span> |
| <Link id="m-to" /><code>{"private float to"}</code> | <span className="api-desc">Sense value that maps to 1 (default 1).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | <span className="api-desc">Makes the sense rule with these settings, weighted by `multiplier`.</span> |
| <Link id="m-migrate" /><code>{"static void Migrate(Component old, "}<Link to="/mod/game-api/types/alta-intelligence/sense">{"Sense"}</Link>{" sense, float from, float to, bool isTarget, float multiplier)"}</code> | <span className="api-desc">Editor: adds or reuses a `SenseOperation` on the old component's GameObject and copies the settings over.</span> |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | <span className="api-desc">Builds the GameObject name, like `Danger 0 -> 1 (x1)`.</span> |
