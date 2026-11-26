---
title: "OldSenseOperation"
description: "Older prefab scoring component that names its sense with the SenseOld enum."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OldSenseOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

Older prefab scoring component that names its sense with the `SenseOld` enum. In the editor it replaces itself with a `SenseOperation` once a matching sense asset exists.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/mod/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OldSenseOperation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private float from"}</code> | Sense value that maps to 0. |
| <Link id="m-istarget" /><code>{"private bool isTarget"}</code> | Read the sense on the target (true) or on the creature itself. |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Weight of the rule. Only matters for preferred rules. |
| <Link id="m-sense" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" sense"}</code> | The old enum value naming the sense. |
| <Link id="m-to" /><code>{"private float to"}</code> | Sense value that maps to 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | Makes a sense rule for the sense asset mapped to this `SenseOld` value. |
| <Link id="m-migrate" /><code>{"static void Migrate(Component old, "}<Link to="/mod/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" sense, float from, float to, bool isTarget, float multiplier)"}</code> | Editor: moves an old scoring component's settings onto a `SenseOperation`, or onto an `OldSenseOperation` if no sense asset matches. |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> | Builds the GameObject name, like `Danger 0 -> 1 (x1)`. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: renames the GameObject and migrates to a `SenseOperation` if possible. |
