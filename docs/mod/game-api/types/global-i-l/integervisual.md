---
title: "IntegerVisual"
description: "Shows a small integer as a fan of bars, one shown per point of value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IntegerVisual

A **class** in `Root.Township`, the global namespace.

Shows a small integer as a fan of bars, one shown per point of value. Used by `Mould` for its remaining uses.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IntegerVisual()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglerange" /><code>{"private float angleRange"}</code> | <span className="api-desc">Total angle the bars fan across (default 70).</span> |
| <Link id="m-barprefab" /><code>{"private GameObject barPrefab"}</code> | <span className="api-desc">Prefab for one bar.</span> |
| <Link id="m-max" /><code>{"private int max"}</code> | <span className="api-desc">Number of bars (default 3).</span> |
| <Link id="m-spawnedbars" /><code>{"private GameObject[] spawnedBars"}</code> | <span className="api-desc">The spawned bar objects.</span> |
| <Link id="m-testbutton" /><code>{"private bool testButton"}</code> | <span className="api-desc">Editor button to test the visual.</span> |
| <Link id="m-value" /><code>{"private int value"}</code> | <span className="api-desc">Backing field for `Value`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value-2" /><code>{"int Value { get; internal set; }"}</code> | <span className="api-desc">The number shown. Setting it (internal) updates the bars.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatebars" /><code>{"void UpdateBars()"}</code> | <span className="api-desc">Shows the first `Value` bars and hides the rest.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupallbars" /><code>{"private void SetupAllBars()"}</code> | <span className="api-desc">Spawns `max` bars once, spread across the angle range.</span> |
| <Link id="m-spawnbar" /><code>{"private GameObject SpawnBar(int i, int barCount)"}</code> | <span className="api-desc">Instantiates one bar and rotates it to its place in the fan.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Spawns the bars and shows the current value.</span> |

</details>

## Used in

Members of other types that take, return or hold a `IntegerVisual`:

<div className="api-used-in">

[`Mould.usageVisual`](/mod/game-api/types/global-m-o/mould#m-usagevisual).

</div>
