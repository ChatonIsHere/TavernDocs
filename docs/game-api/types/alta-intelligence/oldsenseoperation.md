---
title: "OldSenseOperation"
description: "class OldSenseOperation in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OldSenseOperation

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TargetOperationComponent`](/game-api/types/alta-intelligence/targetoperationcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OldSenseOperation()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-from" /><code>{"private float from"}</code> |
| <Link id="m-istarget" /><code>{"private bool isTarget"}</code> |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> |
| <Link id="m-sense" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" sense"}</code> |
| <Link id="m-to" /><code>{"private float to"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getoperation" /><code>{"override "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> |
| <Link id="m-migrate" /><code>{"static void Migrate(Component old, "}<Link to="/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" sense, float from, float to, bool isTarget, float multiplier)"}</code> |
| <Link id="m-getname" /><code>{"protected override string GetName()"}</code> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |
