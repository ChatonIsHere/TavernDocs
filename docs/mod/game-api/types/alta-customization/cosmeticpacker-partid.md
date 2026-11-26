---
title: "CosmeticPacker.PartId"
description: "Identifies one mesh part of a cosmetic: the cosmetic's hash and the part's index in its visual."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPacker.PartId

A **struct** in `Root.Township`, `Alta.Customization`.

Identifies one mesh part of a cosmetic: the cosmetic's hash and the part's index in its visual.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Nested in** [`CosmeticPacker`](/mod/game-api/types/alta-customization/cosmeticpacker)
- **Inherits or implements** `IEquatable<CosmeticPacker.PartId>`
- **Derived types** [`CosmeticPacker.PartId`](/mod/game-api/types/alta-customization/cosmeticpacker-partid)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint hash"}</code> | <span className="api-desc">The cosmetic's hash (its purchasable ID).</span> |
| <Link id="m-index" /><code>{"int index"}</code> | <span className="api-desc">Which part of the cosmetic's visual this is.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">Equal when both the hash and the index match.</span> |
| <Link id="m-equals-2" /><code>{"bool Equals("}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" other)"}</code> | <span className="api-desc">Equal when both the hash and the index match.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Combines the hash and the index.</span> |

## Used in

Members of other types that take, return or hold a `PartId`:

<div className="api-used-in">

[`CosmeticPacker.cacheInputs`](/mod/game-api/types/alta-customization/cosmeticpacker#m-cacheinputs), [`CosmeticPacker.inputs`](/mod/game-api/types/alta-customization/cosmeticpacker#m-inputs), [`CosmeticPacker.Inputs`](/mod/game-api/types/alta-customization/cosmeticpacker#m-inputs-2), [`CosmeticPacker.partMap`](/mod/game-api/types/alta-customization/cosmeticpacker#m-partmap), [`CosmeticPacker.workingIndexes`](/mod/game-api/types/alta-customization/cosmeticpacker#m-workingindexes), [`CosmeticPacker.Input.CopyFrom`](/mod/game-api/types/alta-customization/cosmeticpacker-input#m-copyfrom), [`CosmeticPacker.Input.PartId`](/mod/game-api/types/alta-customization/cosmeticpacker-input#m-partid), [`CustomizationVisualPart.PartId`](/mod/game-api/types/alta-customization/customizationvisualpart#m-partid), [`ICosmeticMeshPartBase.PartId`](/mod/game-api/types/alta-customization/icosmeticmeshpartbase#m-partid), [`MeshPacker.Pack`](/mod/game-api/types/alta-customization/meshpacker#m-pack), [`TexturePacker.Pack`](/mod/game-api/types/alta-customization/texturepacker#m-pack), [`PaintBrush.ApplyColor`](/mod/game-api/types/global-p/paintbrush#m-applycolor-2).

</div>
