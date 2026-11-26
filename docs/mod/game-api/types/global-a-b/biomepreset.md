---
title: "BiomePreset"
description: "Hashed ScriptableObject holding a serialized biome, referenced by GenerationStarter to generate an area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomePreset

A **class** in `Root.Township`, the global namespace.

Hashed ScriptableObject holding a serialized biome, referenced by `GenerationStarter` to generate an area. The generated biome is built on first use and cached.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`HashedGeneralValue<BiomePreset>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`BiomePreset`](/mod/game-api/types/global-a-b/biomepreset), [`BiomePreset.Create`](/mod/game-api/types/global-a-b/biomepreset-create)
- **Nested types** [`Create`](/mod/game-api/types/global-a-b/biomepreset-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BiomePreset()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/serializedgeneratedbiome">{"SerializedGeneratedBiome"}</Link>{" biome"}</code> | <span className="api-desc">Serialized biome settings.</span> |
| <Link id="m-generated" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" generated"}</code> | <span className="api-desc">Cached result of `Biome`. Not serialized.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-biome-2" /><code><Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Biome { get; }"}</code> | <span className="api-desc">The generated biome, built from the serialized one the first time it is read.</span> |

## Used in

Members of other types that take, return or hold a `BiomePreset`:

<div className="api-used-in">

[`GenerationStarter.preset`](/mod/game-api/types/global-e-h/generationstarter#m-preset), [`GenerationStartSaveData.preset`](/mod/game-api/types/global-e-h/generationstartsavedata#m-preset).

</div>
