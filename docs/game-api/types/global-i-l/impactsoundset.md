---
title: "ImpactSoundSet"
description: "Asset that pairs a physic material with the Wwise switch used for its impact sounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactSoundSet

A **class** in `Root.Township`, no namespace.

Asset that pairs a physic material with the Wwise switch used for its impact sounds. Listed in `ImpactSoundMap`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactSoundSet()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-materialswitch" /><code>{"private Switch materialSwitch"}</code> | Backing field for `MaterialSwitch`. |
| <Link id="m-physicmaterial" /><code>{"private PhysicMaterial physicMaterial"}</code> | Backing field for `PhysicMaterial`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-materialswitch-2" /><code>{"Switch MaterialSwitch { get; }"}</code> | Wwise switch set when playing impacts on this material. |
| <Link id="m-physicmaterial-2" /><code>{"PhysicMaterial PhysicMaterial { get; }"}</code> | The physic material this set applies to. |

## Used in

Members of other types that take, return or hold a `ImpactSoundSet`:

[`ImpactSoundMap.impactSoundSets`](/game-api/types/global-i-l/impactsoundmap#m-impactsoundsets).
