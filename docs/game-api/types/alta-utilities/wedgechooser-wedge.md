---
title: "WedgeChooser.Wedge"
description: "One choice in a WedgeChooser: prefabs for a spline piece that turns by a given angle, with optional mirrored versions for left turns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WedgeChooser.Wedge

A **class** in `Root.Township`, `Alta.Bezier`.

One choice in a `WedgeChooser`: prefabs for a spline piece that turns by a given angle, with optional mirrored versions for left turns.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Nested in** [`WedgeChooser`](/game-api/types/alta-utilities/wedgechooser)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Wedge()"}</code> | Creates a `WedgeChooser.Wedge` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angle" /><code>{"private float angle"}</code> | Backing field for `Angle`. |
| <Link id="m-inverse" /><code>{"private GameObject[] inverse"}</code> | Mirrored prefabs, used for turns the other way. |
| <Link id="m-isreverse" /><code>{"private bool isReverse"}</code> | Backing field for `IsReverse`. |
| <Link id="m-prefabs" /><code>{"private GameObject[] prefabs"}</code> | Backing field for `Prefabs`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-angle-2" /><code>{"float Angle { get; }"}</code> | Turn angle in degrees this wedge fits. The chooser picks the wedge closest to the absolute turn. |
| <Link id="m-hasinverse" /><code>{"bool HasInverse { get; }"}</code> | True when mirrored prefabs are set. |
| <Link id="m-isreverse-2" /><code>{"bool IsReverse { get; }"}</code> | When there is no inverse list, flips the reverse flag the chooser records for this piece. |
| <Link id="m-prefabs-2" /><code>{"GameObject[] Prefabs { get; }"}</code> | Prefabs for this turn. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"GameObject GetRandom(bool isInverse)"}</code> | Random prefab from the list, or from the inverse list when asked and one exists. Null if there are no prefabs. |

## Used in

Members of other types that take, return or hold a `Wedge`:

[`WedgeChooser.FindClosest`](/game-api/types/alta-utilities/wedgechooser#m-findclosest), [`WedgeChooser.wedges`](/game-api/types/alta-utilities/wedgechooser#m-wedges).
