---
title: "BiomeResources"
description: "Static cache of all cave generation assets (attributes, biomes, elements, sections, plugins) loaded from the Caves/ Resources folders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeResources

A **static class** in `Root.Township`, `Alta.Caves`.

Static cache of all cave generation assets (attributes, biomes, elements, sections, plugins) loaded from the `Caves/` Resources folders. Call `Initialize` before use.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private static "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{"[] attributes"}</code> | Backing array for `Attributes`. |
| <Link id="m-biomes" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{"[] biomes"}</code> | Backing array for `Biomes`. |
| <Link id="m-elements" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{"[] elements"}</code> | Backing array for `Elements`. |
| <Link id="m-isinitialized" /><code>{"private static bool isInitialized"}</code> | Whether `Initialize` has already run. |
| <Link id="m-plugins" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{"[] plugins"}</code> | Backing array for `Plugins`. |
| <Link id="m-sections" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world-generation/section">{"Section"}</Link>{"[] sections"}</code> | Backing array for `Sections`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributecount" /><code>{"static int AttributeCount { get; }"}</code> | Number of loaded biome attributes. |
| <Link id="m-attributes-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{"> Attributes { get; }"}</code> | All `BiomeAttribute` assets from `Caves/Attributes`. |
| <Link id="m-biomecount" /><code>{"static int BiomeCount { get; }"}</code> | Number of loaded biomes. |
| <Link id="m-biomes-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{"> Biomes { get; }"}</code> | All `Biome` assets from `Caves/Biomes`. |
| <Link id="m-elementcount" /><code>{"static int ElementCount { get; }"}</code> | Number of loaded elements. |
| <Link id="m-elements-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{"> Elements { get; }"}</code> | All `Element` assets from `Caves/Elements`. |
| <Link id="m-plugincount" /><code>{"static int PluginCount { get; }"}</code> | Number of loaded plugins. |
| <Link id="m-plugins-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{"> Plugins { get; }"}</code> | All `Plugin` assets from `Caves/Plugins`. |
| <Link id="m-sectioncount" /><code>{"static int SectionCount { get; }"}</code> | Number of loaded sections. |
| <Link id="m-sections-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/section">{"Section"}</Link>{"> Sections { get; }"}</code> | All `Section` assets from `Caves/Sections`, in load order; `CaveGeneratingBiome` uses this order to work out depth. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"static void Initialize()"}</code> | Loads every list from Resources the first time it is called; later calls do nothing. |
