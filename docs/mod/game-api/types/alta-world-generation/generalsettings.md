---
title: "GeneralSettings"
description: "Cave settings asset with the seed, top entrance and layer prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneralSettings

A **class** in `Root.Township`, `Alta.Caves`.

Cave settings asset with the seed, top entrance and layer prefab. Loaded through `CaveSettings<GeneralSettings>.Instance`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`CaveSettings<GeneralSettings>`](/mod/game-api/types/alta-world-generation/cavesettings-t)
- **Derived types** [`GeneralSettings`](/mod/game-api/types/alta-world-generation/generalsettings), [`GeneralSettings.Create`](/mod/game-api/types/alta-world-generation/generalsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/generalsettings-create)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GeneralSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunksize" /><code>{"private int chunkSize"}</code> | <span className="api-desc">Layer chunk size. Marked as not used.</span> |
| <Link id="m-heightseparation" /><code>{"private float heightSeparation"}</code> | <span className="api-desc">Backing field for `HeightSeparation`.</span> |
| <Link id="m-layerprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" layerPrefab"}</code> | <span className="api-desc">Backing field for `LayerPrefab`.</span> |
| <Link id="m-millisecondallowance" /><code>{"private float millisecondAllowance"}</code> | <span className="api-desc">Backing field for `MillisecondAllowance`.</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">Backing field for `Seed`.</span> |
| <Link id="m-topopening" /><code>{"private Vector2 topOpening"}</code> | <span className="api-desc">Backing field for `TopOpening`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heightseparation-2" /><code>{"float HeightSeparation { get; }"}</code> | <span className="api-desc">Depth between cave layers, used for layers past the stored depth list.</span> |
| <Link id="m-layerprefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" LayerPrefab { get; }"}</code> | <span className="api-desc">Network prefab spawned for cave layers by `CaveLayerStreamer`.</span> |
| <Link id="m-millisecondallowance-2" /><code>{"float MillisecondAllowance { get; }"}</code> | <span className="api-desc">Time budget per frame for cave generation rendering work, minus the frame's own time.</span> |
| <Link id="m-seed-2" /><code>{"int Seed { get; }"}</code> | <span className="api-desc">Fixed cave seed. -1 (the default) means a random seed, which also clears the caves save.</span> |
| <Link id="m-topentrancedirection" /><code>{"Vector2 TopEntranceDirection { get; }"}</code> | <span className="api-desc">Direction of the top cave entrance. Always (0, -1).</span> |
| <Link id="m-topopening-2" /><code>{"Vector2 TopOpening { get; }"}</code> | <span className="api-desc">Position of the top cave entrance on layer 0, used when no entrances are set yet.</span> |
