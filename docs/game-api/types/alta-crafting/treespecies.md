---
title: "TreeSpecies"
description: "Species asset: physical material, hit effects, Wedge and Stick drop distributions, damage and break multipliers, DropVelocity, leaf materials."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeSpecies

A **class** in `Root.Township`, `Alta.Woodcutting`.

Species asset: physical material, hit effects, `Wedge` and `Stick` drop distributions, damage and break multipliers, `DropVelocity`, leaf materials.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<TreeSpecies>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`TreeSpecies`](/game-api/types/alta-crafting/treespecies), [`TreeSpecies.Create`](/game-api/types/alta-crafting/treespecies-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/treespecies-create)
- **Attributes** `HashedPath`
- **Documented in** [Farming, woodcutting and carpentry](/game-api/game-systems/farming-and-woodcutting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeSpecies()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-atlasedmaterials" /><code>{"private Material[] atlasedMaterials"}</code> |  |
| <Link id="m-breakthresholdmultiplier" /><code>{"private float breakThresholdMultiplier"}</code> |  |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> |  |
| <Link id="m-distancedistribution" /><code>{"private float distanceDistribution"}</code> |  |
| <Link id="m-doneeffect" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" doneEffect"}</code> |  |
| <Link id="m-dropvelocity" /><code>{"private float dropVelocity"}</code> |  |
| <Link id="m-hiteffect" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" hitEffect"}</code> |  |
| <Link id="m-imposterlod" /><code>{"private int imposterLod"}</code> |  |
| <Link id="m-leafneedsfixing" /><code>{"private bool[] leafNeedsFixing"}</code> |  |
| <Link id="m-leafoffsetscale" /><code>{"private Vector4[] leafOffsetScale"}</code> |  |
| <Link id="m-modifiedmaterial" /><code>{"private Material modifiedMaterial"}</code> |  |
| <Link id="m-oppositesthreshold" /><code>{"private float oppositesThreshold"}</code> |  |
| <Link id="m-pcleafmaterials" /><code>{"private Material[] pcLeafMaterials"}</code> |  |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> |  |
| <Link id="m-stick" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" stick"}</code> |  |
| <Link id="m-totalfallsidethreshold" /><code>{"private float totalFallSideThreshold"}</code> |  |
| <Link id="m-totalpercentthreshold" /><code>{"private float totalPercentThreshold"}</code> |  |
| <Link id="m-wedge" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" wedge"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-breakthresholdmultiplier-2" /><code>{"float BreakThresholdMultiplier { get; }"}</code> |  |
| <Link id="m-damagemultiplier-2" /><code>{"float DamageMultiplier { get; }"}</code> |  |
| <Link id="m-distancedistribution-2" /><code>{"float DistanceDistribution { get; }"}</code> |  |
| <Link id="m-doneeffect-2" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" DoneEffect { get; }"}</code> |  |
| <Link id="m-dropvelocity-2" /><code>{"float DropVelocity { get; }"}</code> |  |
| <Link id="m-hiteffect-2" /><code><Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" HitEffect { get; }"}</code> |  |
| <Link id="m-imposterlod-2" /><code>{"int ImposterLod { get; }"}</code> |  |
| <Link id="m-leafmaterialrects" /><code><Link to="/game-api/types/alta-utilities/materialrect">{"MaterialRect"}</Link>{"[] LeafMaterialRects { get; }"}</code> |  |
| <Link id="m-leafmaterials" /><code>{"Material[] LeafMaterials { get; }"}</code> |  |
| <Link id="m-oppositesthreshold-2" /><code>{"float OppositesThreshold { get; }"}</code> |  |
| <Link id="m-physicalmaterial-2" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> |  |
| <Link id="m-stick-2" /><code><Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" Stick { get; }"}</code> |  |
| <Link id="m-totalfallsidethreshold-2" /><code>{"float TotalFallSideThreshold { get; }"}</code> |  |
| <Link id="m-totalpercentthreshold-2" /><code>{"float TotalPercentThreshold { get; }"}</code> |  |
| <Link id="m-wedge-2" /><code><Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" Wedge { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixmaterials" /><code>{"void FixMaterials(IEnumerable<"}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{"> definitions)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TreeSpecies`:

[`PresetTree.GenerateRunTimeTree`](/game-api/types/alta-crafting/presettree#m-generateruntimetree), [`PresetTree.GenerateRunTimeTreeWithoutParent`](/game-api/types/alta-crafting/presettree#m-generateruntimetreewithoutparent), [`PresetTree.SpawnAndInitWoodcutTree`](/game-api/types/alta-crafting/presettree#m-spawnandinitwoodcuttree), [`PresetTree.species`](/game-api/types/alta-crafting/presettree#m-species), [`PresetTree.Species`](/game-api/types/alta-crafting/presettree#m-species-2), [`TreeSpawner.species`](/game-api/types/alta-crafting/treespawner#m-species), [`WoodcutTree.species`](/game-api/types/alta-crafting/woodcuttree#m-species), [`WoodcutTree.Species`](/game-api/types/alta-crafting/woodcuttree#m-species-2), [`WoodcutTreeSaveData.species`](/game-api/types/alta-crafting/woodcuttreesavedata#m-species), [`WoodcutTreeSaveData2.species`](/game-api/types/alta-crafting/woodcuttreesavedata2#m-species), [`WoodcutPooledObject.SetSpecies`](/game-api/types/global-t-x/woodcutpooledobject#m-setspecies).
