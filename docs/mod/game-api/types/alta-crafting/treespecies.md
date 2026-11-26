---
title: "TreeSpecies"
description: "A hashed asset for one kind of tree: its wood material, how chopping damage spreads, when the trunk falls and what drops when pieces are chopped."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeSpecies

A **class** in `Root.Township`, `Alta.Woodcutting`.

A hashed asset for one kind of tree: its wood material, how chopping damage spreads, when the trunk falls and what drops when pieces are chopped. Stored under `Woodcutting/TreeSpecies`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<TreeSpecies>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`TreeSpecies`](/mod/game-api/types/alta-crafting/treespecies), [`TreeSpecies.Create`](/mod/game-api/types/alta-crafting/treespecies-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/treespecies-create)
- **Attributes** `HashedPath`
- **Documented in** [Farming, woodcutting and carpentry](/mod/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeSpecies()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-atlasedmaterials" /><code>{"private Material[] atlasedMaterials"}</code> | Atlased leaf materials written by `FixMaterials` at build time. |
| <Link id="m-breakthresholdmultiplier" /><code>{"private float breakThresholdMultiplier"}</code> | Backing field for `BreakThresholdMultiplier`, which scales how much force breaks tree connections. |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> | Backing field for `DamageMultiplier`. |
| <Link id="m-distancedistribution" /><code>{"private float distanceDistribution"}</code> | Backing field for `DistanceDistribution`, the radius chopping damage spreads over. |
| <Link id="m-doneeffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" doneEffect"}</code> | Backing field for `DoneEffect`. |
| <Link id="m-dropvelocity" /><code>{"private float dropVelocity"}</code> | Backing field for `DropVelocity`, the random speed given to wedges and sticks dropped by chopping. |
| <Link id="m-hiteffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" hitEffect"}</code> | Backing field for `HitEffect`. |
| <Link id="m-imposterlod" /><code>{"private int imposterLod"}</code> | Backing field for `ImposterLod`. Defaults to 2. |
| <Link id="m-leafneedsfixing" /><code>{"private bool[] leafNeedsFixing"}</code> | Per leaf material, whether it was found in an atlas. Written by `FixMaterials`. |
| <Link id="m-leafoffsetscale" /><code>{"private Vector4[] leafOffsetScale"}</code> | Per leaf material, its atlas rect. Written by `FixMaterials`. |
| <Link id="m-modifiedmaterial" /><code>{"private Material modifiedMaterial"}</code> | A material set in the inspector. Nothing in the server build reads it. |
| <Link id="m-oppositesthreshold" /><code>{"private float oppositesThreshold"}</code> | Backing field for `OppositesThreshold`: combined progress of two opposite cut points that fells the section. |
| <Link id="m-pcleafmaterials" /><code>{"private Material[] pcLeafMaterials"}</code> | Backing field for `LeafMaterials`, the unatlased leaf materials. |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> | Backing field for `PhysicalMaterial`. |
| <Link id="m-stick" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" stick"}</code> | Backing field for `Stick`, the drop distribution for stick-type pieces. |
| <Link id="m-totalfallsidethreshold" /><code>{"private float totalFallSideThreshold"}</code> | Backing field for `TotalFallSideThreshold`: progress one cut point needs to fell the section once the total is past `totalPercentThreshold`. |
| <Link id="m-totalpercentthreshold" /><code>{"private float totalPercentThreshold"}</code> | Backing field for `TotalPercentThreshold`: average cut progress at which a section can fall to its most cut side. |
| <Link id="m-wedge" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" wedge"}</code> | Backing field for `Wedge`, the drop distribution for wedge-type pieces. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-breakthresholdmultiplier-2" /><code>{"float BreakThresholdMultiplier { get; }"}</code> | Multiplies the impulse needed to break tree branches off when something hits them. |
| <Link id="m-damagemultiplier-2" /><code>{"float DamageMultiplier { get; }"}</code> | Divides chopping damage, so a higher value means a tougher tree. Also used as the tree's max health. |
| <Link id="m-distancedistribution-2" /><code>{"float DistanceDistribution { get; }"}</code> | Radius around a hit over which chopping damage spreads to nearby cut points. |
| <Link id="m-doneeffect-2" /><code><Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" DoneEffect { get; }"}</code> | Impact effect used when a section is chopped through. |
| <Link id="m-dropvelocity-2" /><code>{"float DropVelocity { get; }"}</code> | Random velocity (and spin) given to wedges or sticks dropped from a chop. |
| <Link id="m-hiteffect-2" /><code><Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" HitEffect { get; }"}</code> | Impact effect used when the tree is hit. |
| <Link id="m-imposterlod-2" /><code>{"int ImposterLod { get; }"}</code> | LOD index at which the tree switches to an imposter. |
| <Link id="m-leafmaterialrects" /><code><Link to="/mod/game-api/types/alta-utilities/materialrect">{"MaterialRect"}</Link>{"[] LeafMaterialRects { get; }"}</code> | Leaf materials as atlas rects, using the baked atlas data if present. |
| <Link id="m-leafmaterials" /><code>{"Material[] LeafMaterials { get; }"}</code> | The tree's leaf materials before atlasing. |
| <Link id="m-oppositesthreshold-2" /><code>{"float OppositesThreshold { get; }"}</code> | If two opposite cut points add up to more than this, the section is chopped through. |
| <Link id="m-physicalmaterial-2" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | The wood material, which sets hardness, renderer material and the material of dropped pieces. |
| <Link id="m-stick-2" /><code><Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" Stick { get; }"}</code> | Distribution of prefabs dropped when a stick-type piece is chopped. |
| <Link id="m-totalfallsidethreshold-2" /><code>{"float TotalFallSideThreshold { get; }"}</code> | Once `TotalPercentThreshold` is passed, the first cut point past this progress chops the section and sets the fall side. |
| <Link id="m-totalpercentthreshold-2" /><code>{"float TotalPercentThreshold { get; }"}</code> | Average cut progress across a section's cut points needed before `TotalFallSideThreshold` is checked. |
| <Link id="m-wedge-2" /><code><Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" Wedge { get; }"}</code> | Distribution of prefabs (wood wedges) dropped when a section is chopped. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixmaterials" /><code>{"void FixMaterials(IEnumerable<"}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"> definitions)"}</code> | Editor bake: finds the atlased version of each leaf material and stores its rect. |

## Used in

Members of other types that take, return or hold a `TreeSpecies`:

[`PresetTree.GenerateRunTimeTree`](/mod/game-api/types/alta-crafting/presettree#m-generateruntimetree), [`PresetTree.GenerateRunTimeTreeWithoutParent`](/mod/game-api/types/alta-crafting/presettree#m-generateruntimetreewithoutparent), [`PresetTree.SpawnAndInitWoodcutTree`](/mod/game-api/types/alta-crafting/presettree#m-spawnandinitwoodcuttree), [`PresetTree.species`](/mod/game-api/types/alta-crafting/presettree#m-species), [`PresetTree.Species`](/mod/game-api/types/alta-crafting/presettree#m-species-2), [`TreeSpawner.species`](/mod/game-api/types/alta-crafting/treespawner#m-species), [`WoodcutTree.species`](/mod/game-api/types/alta-crafting/woodcuttree#m-species), [`WoodcutTree.Species`](/mod/game-api/types/alta-crafting/woodcuttree#m-species-2), [`WoodcutTreeSaveData.species`](/mod/game-api/types/alta-crafting/woodcuttreesavedata#m-species), [`WoodcutTreeSaveData2.species`](/mod/game-api/types/alta-crafting/woodcuttreesavedata2#m-species), [`WoodcutPooledObject.SetSpecies`](/mod/game-api/types/global-t-x/woodcutpooledobject#m-setspecies).
