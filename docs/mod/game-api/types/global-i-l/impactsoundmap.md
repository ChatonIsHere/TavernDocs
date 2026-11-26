---
title: "ImpactSoundMap"
description: "Asset that maps physic materials to Wwise switches, so impact sounds play the right material sound."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactSoundMap

A **class** in `Root.Township`, the global namespace.

Asset that maps physic materials to Wwise switches, so impact sounds play the right material sound.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactSoundMap()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-impactsoundsets" /><code>{"private List<"}<Link to="/mod/game-api/types/global-i-l/impactsoundset">{"ImpactSoundSet"}</Link>{"> impactSoundSets"}</code> | <span className="api-desc">The material and switch pairs set in the inspector.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for load warnings.</span> |
| <Link id="m-materialtype" /><code>{"private Dictionary<PhysicMaterial, Switch> materialType"}</code> | <span className="api-desc">Backing field for `MaterialType`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-materialtype-2" /><code>{"Dictionary<PhysicMaterial, Switch> MaterialType { get; }"}</code> | <span className="api-desc">Physic material to Wwise switch map, built on first use.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadimpactsoundmap" /><code>{"private void LoadImpactSoundMap()"}</code> | <span className="api-desc">Builds `materialType` from the sound sets. Warns on null sets and duplicates; the last duplicate wins.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ImpactSoundMap`:

<div className="api-used-in">

[`ImpactSoundSettings.impactSoundMap`](/mod/game-api/types/global-i-l/impactsoundsettings#m-impactsoundmap), [`ImpactSoundSettings.ImpactSoundMap`](/mod/game-api/types/global-i-l/impactsoundsettings#m-impactsoundmap-2).

</div>
