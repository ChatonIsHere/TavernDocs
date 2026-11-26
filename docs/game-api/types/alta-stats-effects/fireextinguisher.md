---
title: "FireExtinguisher"
description: "A trigger that smothers fires: any asphyxiable HeatSourceBase whose heat point collider enters it is asphyxiated until it leaves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireExtinguisher

A **class** in `Root.Township`, `Alta.Heat`.

A trigger that smothers fires: any asphyxiable `HeatSourceBase` whose heat point collider enters it is asphyxiated until it leaves.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Heat](/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireExtinguisher()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-heatpointlayer" /><code>{"private int heatPointLayer"}</code> | Index of the `HeatPoint` layer, set in `Awake`. |
| <Link id="m-sourcesmap" /><code>{"private Dictionary<Collider, "}<Link to="/game-api/types/alta-stats-effects/heatsourcebase">{"HeatSourceBase"}</Link>{"> sourcesMap"}</code> | Heat sources currently being smothered, keyed by the collider that entered. |
| <Link id="m-validationroutine" /><code>{"private Coroutine validationRoutine"}</code> | The running `EnsureHeatSourcesAreValid` coroutine, or null when nothing is held. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the `HeatPoint` layer index. |
| <Link id="m-ensureheatsourcesarevalid" /><code>{"private IEnumerator EnsureHeatSourcesAreValid() (iterator)"}</code> | Coroutine that runs while any source is held, releasing and dropping entries whose source was destroyed or whose collider was disabled. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | When a collider on the `HeatPoint` layer enters, finds its `HeatSourceBase` (on the rigidbody or the collider) and asphyxiates it if it can be. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | Releases the asphyxiation on the heat source tied to the leaving collider. |

</details>
