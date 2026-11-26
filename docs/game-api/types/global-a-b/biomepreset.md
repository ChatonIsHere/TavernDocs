---
title: "BiomePreset"
description: "Hashed ScriptableObject holding a serialized biome for cave and world generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomePreset

A **class** in `Root.Township`, no namespace.

Hashed ScriptableObject holding a serialized biome for cave and world generation. The generated biome is built on first use and cached.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`HashedGeneralValue<BiomePreset>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`BiomePreset`](/game-api/types/global-a-b/biomepreset), [`BiomePreset.Create`](/game-api/types/global-a-b/biomepreset-create)
- **Nested types** [`Create`](/game-api/types/global-a-b/biomepreset-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BiomePreset()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/serializedgeneratedbiome">{"SerializedGeneratedBiome"}</Link>{" biome"}</code> | Serialized biome settings. |
| <Link id="m-generated" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" generated"}</code> | Cached result of `Biome`. Not serialized. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-biome-2" /><code><Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Biome { get; }"}</code> | The generated biome, built from the serialized one the first time it is read. |

## Used in

Members of other types that take, return or hold a `BiomePreset`:

[`GenerationStarter.preset`](/game-api/types/global-e-h/generationstarter#m-preset), [`GenerationStartSaveData.preset`](/game-api/types/global-e-h/generationstartsavedata#m-preset).
