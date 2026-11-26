---
title: "SplineDisplayModifier"
description: "Base for components that tweak a sibling SplineDisplay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineDisplayModifier

An **abstract class** in `Root.Township`, `Alta.Bezier`.

Base for components that tweak a sibling `SplineDisplay`. Destroyed when the spline is baked.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`, [`IDestroyOnBake`](/game-api/types/global-i-l/idestroyonbake)
- **Derived types** [`ItemModifier`](/game-api/types/alta-utilities/itemmodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SplineDisplayModifier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor: calls `OnValidate` on the `SplineDisplay` on the same object so it can refresh. |
