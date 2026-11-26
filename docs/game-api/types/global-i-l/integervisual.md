---
title: "IntegerVisual"
description: "Shows a small integer as a fan of bars, one shown per point of value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IntegerVisual

A **class** in `Root.Township`, no namespace.

Shows a small integer as a fan of bars, one shown per point of value. Used by `Mould` for its remaining uses.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IntegerVisual()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglerange" /><code>{"private float angleRange"}</code> | Total angle the bars fan across (default 70). |
| <Link id="m-barprefab" /><code>{"private GameObject barPrefab"}</code> | Prefab for one bar. |
| <Link id="m-max" /><code>{"private int max"}</code> | Number of bars (default 3). |
| <Link id="m-spawnedbars" /><code>{"private GameObject[] spawnedBars"}</code> | The spawned bar objects. |
| <Link id="m-testbutton" /><code>{"private bool testButton"}</code> | Editor button to test the visual. |
| <Link id="m-value" /><code>{"private int value"}</code> | Backing field for `Value`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value-2" /><code>{"int Value { get; internal set; }"}</code> | The number shown. Setting it (internal) updates the bars. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatebars" /><code>{"void UpdateBars()"}</code> | Shows the first `Value` bars and hides the rest. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setupallbars" /><code>{"private void SetupAllBars()"}</code> | Spawns `max` bars once, spread across the angle range. |
| <Link id="m-spawnbar" /><code>{"private GameObject SpawnBar(int i, int barCount)"}</code> | Instantiates one bar and rotates it to its place in the fan. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Spawns the bars and shows the current value. |

</details>

## Used in

Members of other types that take, return or hold a `IntegerVisual`:

[`Mould.usageVisual`](/game-api/types/global-m-o/mould#m-usagevisual).
