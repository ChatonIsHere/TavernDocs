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

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private static "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{"[] attributes"}</code> | <span className="api-desc">Backing array for `Attributes`.</span> |
| <Link id="m-biomes" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{"[] biomes"}</code> | <span className="api-desc">Backing array for `Biomes`.</span> |
| <Link id="m-elements" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{"[] elements"}</code> | <span className="api-desc">Backing array for `Elements`.</span> |
| <Link id="m-isinitialized" /><code>{"private static bool isInitialized"}</code> | <span className="api-desc">Whether `Initialize` has already run.</span> |
| <Link id="m-plugins" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{"[] plugins"}</code> | <span className="api-desc">Backing array for `Plugins`.</span> |
| <Link id="m-sections" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world-generation/section">{"Section"}</Link>{"[] sections"}</code> | <span className="api-desc">Backing array for `Sections`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributecount" /><code>{"static int AttributeCount { get; }"}</code> | <span className="api-desc">Number of loaded biome attributes.</span> |
| <Link id="m-attributes-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{"> Attributes { get; }"}</code> | <span className="api-desc">All `BiomeAttribute` assets from `Caves/Attributes`.</span> |
| <Link id="m-biomecount" /><code>{"static int BiomeCount { get; }"}</code> | <span className="api-desc">Number of loaded biomes.</span> |
| <Link id="m-biomes-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{"> Biomes { get; }"}</code> | <span className="api-desc">All `Biome` assets from `Caves/Biomes`.</span> |
| <Link id="m-elementcount" /><code>{"static int ElementCount { get; }"}</code> | <span className="api-desc">Number of loaded elements.</span> |
| <Link id="m-elements-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{"> Elements { get; }"}</code> | <span className="api-desc">All `Element` assets from `Caves/Elements`.</span> |
| <Link id="m-plugincount" /><code>{"static int PluginCount { get; }"}</code> | <span className="api-desc">Number of loaded plugins.</span> |
| <Link id="m-plugins-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{"> Plugins { get; }"}</code> | <span className="api-desc">All `Plugin` assets from `Caves/Plugins`.</span> |
| <Link id="m-sectioncount" /><code>{"static int SectionCount { get; }"}</code> | <span className="api-desc">Number of loaded sections.</span> |
| <Link id="m-sections-2" /><code>{"static IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/section">{"Section"}</Link>{"> Sections { get; }"}</code> | <span className="api-desc">All `Section` assets from `Caves/Sections`, in load order; `CaveGeneratingBiome` uses this order to work out depth.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"static void Initialize()"}</code> | <span className="api-desc">Loads every list from Resources the first time it is called; later calls do nothing.</span> |
