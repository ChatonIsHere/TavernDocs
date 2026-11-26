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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Heat](/mod/game-api/game-systems/heat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FireExtinguisher()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-heatpointlayer" /><code>{"private int heatPointLayer"}</code> | <span className="api-desc">Index of the `HeatPoint` layer, set in `Awake`.</span> |
| <Link id="m-sourcesmap" /><code>{"private Dictionary<Collider, "}<Link to="/mod/game-api/types/alta-stats-effects/heatsourcebase">{"HeatSourceBase"}</Link>{"> sourcesMap"}</code> | <span className="api-desc">Heat sources currently being smothered, keyed by the collider that entered.</span> |
| <Link id="m-validationroutine" /><code>{"private Coroutine validationRoutine"}</code> | <span className="api-desc">The running `EnsureHeatSourcesAreValid` coroutine, or null when nothing is held.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the `HeatPoint` layer index.</span> |
| <Link id="m-ensureheatsourcesarevalid" /><code>{"private IEnumerator EnsureHeatSourcesAreValid() (iterator)"}</code> | <span className="api-desc">Coroutine that runs while any source is held, releasing and dropping entries whose source was destroyed or whose collider was disabled.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">When a collider on the `HeatPoint` layer enters, finds its `HeatSourceBase` (on the rigidbody or the collider) and asphyxiates it if it can be.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">Releases the asphyxiation on the heat source tied to the leaving collider.</span> |

</details>
