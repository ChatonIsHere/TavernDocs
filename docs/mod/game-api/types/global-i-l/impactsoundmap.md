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
| <Link id="m-ctor" /><code>{"ImpactSoundMap()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-impactsoundsets" /><code>{"private List<"}<Link to="/mod/game-api/types/global-i-l/impactsoundset">{"ImpactSoundSet"}</Link>{"> impactSoundSets"}</code> | The material and switch pairs set in the inspector. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for load warnings. |
| <Link id="m-materialtype" /><code>{"private Dictionary<PhysicMaterial, Switch> materialType"}</code> | Backing field for `MaterialType`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-materialtype-2" /><code>{"Dictionary<PhysicMaterial, Switch> MaterialType { get; }"}</code> | Physic material to Wwise switch map, built on first use. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadimpactsoundmap" /><code>{"private void LoadImpactSoundMap()"}</code> | Builds `materialType` from the sound sets. Warns on null sets and duplicates; the last duplicate wins. |

</details>

## Used in

Members of other types that take, return or hold a `ImpactSoundMap`:

[`ImpactSoundSettings.impactSoundMap`](/mod/game-api/types/global-i-l/impactsoundsettings#m-impactsoundmap), [`ImpactSoundSettings.ImpactSoundMap`](/mod/game-api/types/global-i-l/impactsoundsettings#m-impactsoundmap-2).
