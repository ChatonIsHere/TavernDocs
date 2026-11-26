---
title: "ImpactSoundSet"
description: "Asset that pairs a physic material with the Wwise switch used for its impact sounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactSoundSet

A **class** in `Root.Township`, the global namespace.

Asset that pairs a physic material with the Wwise switch used for its impact sounds. Listed in `ImpactSoundMap`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactSoundSet()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-materialswitch" /><code>{"private Switch materialSwitch"}</code> | <span className="api-desc">Backing field for `MaterialSwitch`.</span> |
| <Link id="m-physicmaterial" /><code>{"private PhysicMaterial physicMaterial"}</code> | <span className="api-desc">Backing field for `PhysicMaterial`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-materialswitch-2" /><code>{"Switch MaterialSwitch { get; }"}</code> | <span className="api-desc">Wwise switch set when playing impacts on this material.</span> |
| <Link id="m-physicmaterial-2" /><code>{"PhysicMaterial PhysicMaterial { get; }"}</code> | <span className="api-desc">The physic material this set applies to.</span> |

## Used in

Members of other types that take, return or hold a `ImpactSoundSet`:

<div className="api-used-in">

[`ImpactSoundMap.impactSoundSets`](/mod/game-api/types/global-i-l/impactsoundmap#m-impactsoundsets).

</div>
