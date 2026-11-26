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
| <Link id="m-ctor" /><code>{"TreeSpecies()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-atlasedmaterials" /><code>{"private Material[] atlasedMaterials"}</code> | <span className="api-desc">Atlased leaf materials written by `FixMaterials` at build time.</span> |
| <Link id="m-breakthresholdmultiplier" /><code>{"private float breakThresholdMultiplier"}</code> | <span className="api-desc">Backing field for `BreakThresholdMultiplier`, which scales how much force breaks tree connections.</span> |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> | <span className="api-desc">Backing field for `DamageMultiplier`.</span> |
| <Link id="m-distancedistribution" /><code>{"private float distanceDistribution"}</code> | <span className="api-desc">Backing field for `DistanceDistribution`, the radius chopping damage spreads over.</span> |
| <Link id="m-doneeffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" doneEffect"}</code> | <span className="api-desc">Backing field for `DoneEffect`.</span> |
| <Link id="m-dropvelocity" /><code>{"private float dropVelocity"}</code> | <span className="api-desc">Backing field for `DropVelocity`, the random speed given to wedges and sticks dropped by chopping.</span> |
| <Link id="m-hiteffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" hitEffect"}</code> | <span className="api-desc">Backing field for `HitEffect`.</span> |
| <Link id="m-imposterlod" /><code>{"private int imposterLod"}</code> | <span className="api-desc">Backing field for `ImposterLod`. Defaults to 2.</span> |
| <Link id="m-leafneedsfixing" /><code>{"private bool[] leafNeedsFixing"}</code> | <span className="api-desc">Per leaf material, whether it was found in an atlas. Written by `FixMaterials`.</span> |
| <Link id="m-leafoffsetscale" /><code>{"private Vector4[] leafOffsetScale"}</code> | <span className="api-desc">Per leaf material, its atlas rect. Written by `FixMaterials`.</span> |
| <Link id="m-modifiedmaterial" /><code>{"private Material modifiedMaterial"}</code> | <span className="api-desc">A material set in the inspector. Nothing in the server build reads it.</span> |
| <Link id="m-oppositesthreshold" /><code>{"private float oppositesThreshold"}</code> | <span className="api-desc">Backing field for `OppositesThreshold`: combined progress of two opposite cut points that fells the section.</span> |
| <Link id="m-pcleafmaterials" /><code>{"private Material[] pcLeafMaterials"}</code> | <span className="api-desc">Backing field for `LeafMaterials`, the unatlased leaf materials.</span> |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> | <span className="api-desc">Backing field for `PhysicalMaterial`.</span> |
| <Link id="m-stick" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" stick"}</code> | <span className="api-desc">Backing field for `Stick`, the drop distribution for stick-type pieces.</span> |
| <Link id="m-totalfallsidethreshold" /><code>{"private float totalFallSideThreshold"}</code> | <span className="api-desc">Backing field for `TotalFallSideThreshold`: progress one cut point needs to fell the section once the total is past `totalPercentThreshold`.</span> |
| <Link id="m-totalpercentthreshold" /><code>{"private float totalPercentThreshold"}</code> | <span className="api-desc">Backing field for `TotalPercentThreshold`: average cut progress at which a section can fall to its most cut side.</span> |
| <Link id="m-wedge" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" wedge"}</code> | <span className="api-desc">Backing field for `Wedge`, the drop distribution for wedge-type pieces.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-breakthresholdmultiplier-2" /><code>{"float BreakThresholdMultiplier { get; }"}</code> | <span className="api-desc">Multiplies the impulse needed to break tree branches off when something hits them.</span> |
| <Link id="m-damagemultiplier-2" /><code>{"float DamageMultiplier { get; }"}</code> | <span className="api-desc">Divides chopping damage, so a higher value means a tougher tree. Also used as the tree's max health.</span> |
| <Link id="m-distancedistribution-2" /><code>{"float DistanceDistribution { get; }"}</code> | <span className="api-desc">Radius around a hit over which chopping damage spreads to nearby cut points.</span> |
| <Link id="m-doneeffect-2" /><code><Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" DoneEffect { get; }"}</code> | <span className="api-desc">Impact effect used when a section is chopped through.</span> |
| <Link id="m-dropvelocity-2" /><code>{"float DropVelocity { get; }"}</code> | <span className="api-desc">Random velocity (and spin) given to wedges or sticks dropped from a chop.</span> |
| <Link id="m-hiteffect-2" /><code><Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" HitEffect { get; }"}</code> | <span className="api-desc">Impact effect used when the tree is hit.</span> |
| <Link id="m-imposterlod-2" /><code>{"int ImposterLod { get; }"}</code> | <span className="api-desc">LOD index at which the tree switches to an imposter.</span> |
| <Link id="m-leafmaterialrects" /><code><Link to="/mod/game-api/types/alta-utilities/materialrect">{"MaterialRect"}</Link>{"[] LeafMaterialRects { get; }"}</code> | <span className="api-desc">Leaf materials as atlas rects, using the baked atlas data if present.</span> |
| <Link id="m-leafmaterials" /><code>{"Material[] LeafMaterials { get; }"}</code> | <span className="api-desc">The tree's leaf materials before atlasing.</span> |
| <Link id="m-oppositesthreshold-2" /><code>{"float OppositesThreshold { get; }"}</code> | <span className="api-desc">If two opposite cut points add up to more than this, the section is chopped through.</span> |
| <Link id="m-physicalmaterial-2" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | <span className="api-desc">The wood material, which sets hardness, renderer material and the material of dropped pieces.</span> |
| <Link id="m-stick-2" /><code><Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" Stick { get; }"}</code> | <span className="api-desc">Distribution of prefabs dropped when a stick-type piece is chopped.</span> |
| <Link id="m-totalfallsidethreshold-2" /><code>{"float TotalFallSideThreshold { get; }"}</code> | <span className="api-desc">Once `TotalPercentThreshold` is passed, the first cut point past this progress chops the section and sets the fall side.</span> |
| <Link id="m-totalpercentthreshold-2" /><code>{"float TotalPercentThreshold { get; }"}</code> | <span className="api-desc">Average cut progress across a section's cut points needed before `TotalFallSideThreshold` is checked.</span> |
| <Link id="m-wedge-2" /><code><Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" Wedge { get; }"}</code> | <span className="api-desc">Distribution of prefabs (wood wedges) dropped when a section is chopped.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixmaterials" /><code>{"void FixMaterials(IEnumerable<"}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"> definitions)"}</code> | <span className="api-desc">Editor bake: finds the atlased version of each leaf material and stores its rect.</span> |

## Used in

Members of other types that take, return or hold a `TreeSpecies`:

<div className="api-used-in">

[`PresetTree.GenerateRunTimeTree`](/mod/game-api/types/alta-crafting/presettree#m-generateruntimetree), [`PresetTree.GenerateRunTimeTreeWithoutParent`](/mod/game-api/types/alta-crafting/presettree#m-generateruntimetreewithoutparent), [`PresetTree.SpawnAndInitWoodcutTree`](/mod/game-api/types/alta-crafting/presettree#m-spawnandinitwoodcuttree), [`PresetTree.species`](/mod/game-api/types/alta-crafting/presettree#m-species), [`PresetTree.Species`](/mod/game-api/types/alta-crafting/presettree#m-species-2), [`TreeSpawner.species`](/mod/game-api/types/alta-crafting/treespawner#m-species), [`WoodcutTree.species`](/mod/game-api/types/alta-crafting/woodcuttree#m-species), [`WoodcutTree.Species`](/mod/game-api/types/alta-crafting/woodcuttree#m-species-2), [`WoodcutTreeSaveData.species`](/mod/game-api/types/alta-crafting/woodcuttreesavedata#m-species), [`WoodcutTreeSaveData2.species`](/mod/game-api/types/alta-crafting/woodcuttreesavedata2#m-species), [`WoodcutPooledObject.SetSpecies`](/mod/game-api/types/global-t-x/woodcutpooledobject#m-setspecies).

</div>
