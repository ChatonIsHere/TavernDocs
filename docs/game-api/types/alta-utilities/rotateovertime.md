---
title: "RotateOverTime"
description: "Script animation that spins a transform at a fixed rate in degrees per second on each axis."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotateOverTime

A **class** in `Root.Township`, `Alta.Utilities`.

Script animation that spins a transform at a fixed rate in degrees per second on each axis. Skipped by static flattening and mesh splitting.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`TransformScriptAnimation`](/game-api/types/global-t-x/transformscriptanimation), [`IIgnoreForStaticFlatten`](/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/game-api/types/global-i-l/idontsplit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotateOverTime()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rotationamount" /><code>{"private Vector3 rotationAmount"}</code> | Degrees per second to rotate around each local axis. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updateanimation" /><code>{"protected override void UpdateAnimation()"}</code> | Adds `rotationAmount` times delta time to the transform's local Euler rotation. |
