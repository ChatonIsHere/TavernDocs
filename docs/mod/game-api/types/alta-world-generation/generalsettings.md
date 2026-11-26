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
| <Link id="m-ctor" /><code>{"GeneralSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunksize" /><code>{"private int chunkSize"}</code> | Layer chunk size. Marked as not used. |
| <Link id="m-heightseparation" /><code>{"private float heightSeparation"}</code> | Backing field for `HeightSeparation`. |
| <Link id="m-layerprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" layerPrefab"}</code> | Backing field for `LayerPrefab`. |
| <Link id="m-millisecondallowance" /><code>{"private float millisecondAllowance"}</code> | Backing field for `MillisecondAllowance`. |
| <Link id="m-seed" /><code>{"private int seed"}</code> | Backing field for `Seed`. |
| <Link id="m-topopening" /><code>{"private Vector2 topOpening"}</code> | Backing field for `TopOpening`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heightseparation-2" /><code>{"float HeightSeparation { get; }"}</code> | Depth between cave layers, used for layers past the stored depth list. |
| <Link id="m-layerprefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" LayerPrefab { get; }"}</code> | Network prefab spawned for cave layers by `CaveLayerStreamer`. |
| <Link id="m-millisecondallowance-2" /><code>{"float MillisecondAllowance { get; }"}</code> | Time budget per frame for cave generation rendering work, minus the frame's own time. |
| <Link id="m-seed-2" /><code>{"int Seed { get; }"}</code> | Fixed cave seed. -1 (the default) means a random seed, which also clears the caves save. |
| <Link id="m-topentrancedirection" /><code>{"Vector2 TopEntranceDirection { get; }"}</code> | Direction of the top cave entrance. Always (0, -1). |
| <Link id="m-topopening-2" /><code>{"Vector2 TopOpening { get; }"}</code> | Position of the top cave entrance on layer 0, used when no entrances are set yet. |
