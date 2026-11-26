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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Nested in** [`WedgeChooser`](/mod/game-api/types/alta-utilities/wedgechooser)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Wedge()"}</code> | <span className="api-desc">Creates a `WedgeChooser.Wedge` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angle" /><code>{"private float angle"}</code> | <span className="api-desc">Backing field for `Angle`.</span> |
| <Link id="m-inverse" /><code>{"private GameObject[] inverse"}</code> | <span className="api-desc">Mirrored prefabs, used for turns the other way.</span> |
| <Link id="m-isreverse" /><code>{"private bool isReverse"}</code> | <span className="api-desc">Backing field for `IsReverse`.</span> |
| <Link id="m-prefabs" /><code>{"private GameObject[] prefabs"}</code> | <span className="api-desc">Backing field for `Prefabs`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-angle-2" /><code>{"float Angle { get; }"}</code> | <span className="api-desc">Turn angle in degrees this wedge fits. The chooser picks the wedge closest to the absolute turn.</span> |
| <Link id="m-hasinverse" /><code>{"bool HasInverse { get; }"}</code> | <span className="api-desc">True when mirrored prefabs are set.</span> |
| <Link id="m-isreverse-2" /><code>{"bool IsReverse { get; }"}</code> | <span className="api-desc">When there is no inverse list, flips the reverse flag the chooser records for this piece.</span> |
| <Link id="m-prefabs-2" /><code>{"GameObject[] Prefabs { get; }"}</code> | <span className="api-desc">Prefabs for this turn.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"GameObject GetRandom(bool isInverse)"}</code> | <span className="api-desc">Random prefab from the list, or from the inverse list when asked and one exists. Null if there are no prefabs.</span> |

## Used in

Members of other types that take, return or hold a `Wedge`:

<div className="api-used-in">

[`WedgeChooser.FindClosest`](/mod/game-api/types/alta-utilities/wedgechooser#m-findclosest), [`WedgeChooser.wedges`](/mod/game-api/types/alta-utilities/wedgechooser#m-wedges).

</div>
