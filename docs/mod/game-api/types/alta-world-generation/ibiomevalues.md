---
title: "IBiomeValues"
description: "Generated values of a biome: biome weightings, attribute set and per-element chances."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IBiomeValues

An **interface** in `Root.Township`, `Alta.Caves`.

Generated values of a biome: biome weightings, attribute set and per-element chances.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code><Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" Attributes { get; }"}</code> | <span className="api-desc">The biome's attribute values.</span> |
| <Link id="m-biomeweightings" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{", float> BiomeWeightings { get; }"}</code> | <span className="api-desc">Weight of each source biome in the mix.</span> |
| <Link id="m-elementchances" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{", float> ElementChances { get; }"}</code> | <span className="api-desc">Chance of each element, read by plugin parts such as `ApplyElementInstance`.</span> |
