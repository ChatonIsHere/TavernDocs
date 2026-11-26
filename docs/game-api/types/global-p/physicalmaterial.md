---
title: "PhysicalMaterial"
description: "A material asset (iron, oak, copper and so on) that holds the heat, crafting, impact and bow numbers for items made of it, plus the render materials per..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalMaterial

A **class** in `Root.Township`, no namespace.

A material asset (iron, oak, copper and so on) that holds the heat, crafting, impact and bow numbers for items made of it, plus the render materials per channel. A hashed `ScriptableObject`; look one up through `HashedGeneralValue`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`HashedGeneralValue<PhysicalMaterial>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PhysicalMaterial`](/game-api/types/global-p/physicalmaterial), [`PhysicalMaterial.Create`](/game-api/types/global-p/physicalmaterial-create)
- **Nested types** [`Create`](/game-api/types/global-p/physicalmaterial-create), [`MaterialChannel`](/game-api/types/global-p/physicalmaterial-materialchannel)
- **Documented in** [Items and materials](/game-api/items/items-and-materials#physicalmaterial)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PhysicalMaterial()"}</code> |

## Fields

<details>
<summary>30 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> | Backing field for `DamageMultiplier`: damage multiplier for weapons and tools made of this material. |
| <Link id="m-density" /><code>{"private float density"}</code> | Backing field for `Density`. The tooltip says it scales damage when chiselling wood on the chisel deck. |
| <Link id="m-durabilitymultiplier" /><code>{"private float durabilityMultiplier"}</code> | Backing field for `DurabilityMultiplier`, used by durability modules. |
| <Link id="m-effectonfullyheated" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectOnFullyHeated"}</code> | Backing field for `EffectOnFullyHeated`. |
| <Link id="m-firstisdoneimpacteffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" firstIsDoneImpactEffect"}</code> | Backing field for `FirstIsDoneImpactEffect`. |
| <Link id="m-firstisdonemesheffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" firstIsDoneMeshEffect"}</code> | Backing field for `FirstIsDoneMeshEffect`. |
| <Link id="m-followingdoneimpactseffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" followingDoneImpactsEffect"}</code> | Backing field for `FollowingDoneImpactsEffect`. |
| <Link id="m-followingdonemesheffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" followingDoneMeshEffect"}</code> | Backing field for `FollowingDoneMeshEffect`. |
| <Link id="m-forgemultiplier" /><code>{"private float forgeMultiplier"}</code> | Backing field for `ForgeMultiplier`: damage resistance when forging on an anvil. |
| <Link id="m-glowingend" /><code>{"private float glowingEnd"}</code> | Backing field for `GlowingEnd`: temperature where the forged model's glow particles cap out. Default 1000. |
| <Link id="m-glowingstart" /><code>{"private float glowingStart"}</code> | Backing field for `GlowingStart`: temperature where the forged model starts to glow. Default 100. |
| <Link id="m-hardnesslevel" /><code>{"private uint hardnessLevel"}</code> | Backing field for `HardnessLevel`: the tier needed to damage other materials of equal or lower level. |
| <Link id="m-internalthermalconductivity" /><code>{"private float internalThermalConductivity"}</code> | Backing field for `InternalThermalConductivity`, in W/m.k. |
| <Link id="m-isshowinginlist" /><code>{"private bool isShowingInList"}</code> | Backing field for `IsShowingInList`. Default true. |
| <Link id="m-material" /><code>{"private Material material"}</code> | Hidden inspector material that this class never reads; the per channel materials are used instead. |
| <Link id="m-materialchannels" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial-materialchannel">{"PhysicalMaterial.MaterialChannel"}</Link>{"[] materialChannels"}</code> | Per `PhysicalMaterialChannel` materials, so items of the same material can use different textures. |
| <Link id="m-maxcraftingdamagemultiplier" /><code>{"private float maxCraftingDamageMultiplier"}</code> | Backing field for `MaxCraftingDamageMultiplier`: raises the break threshold of generic crafting nails. |
| <Link id="m-maxinvalidprojectilevelocitymultiplier" /><code>{"private float maxInvalidProjectileVelocityMultiplier"}</code> | Backing field for `MaxInvalidProjectileVelocityMultiplier`: velocity multiplier for projectiles under the minimum weight. |
| <Link id="m-maxtemperatureforparticles" /><code>{"private float maxTemperatureForParticles"}</code> | Backing field for `MaxTemperatureForParticles`. Default 1250. |
| <Link id="m-meltingpoint" /><code>{"private float meltingPoint"}</code> | Backing field for `MeltingPoint`: the temperature at which the recycler consumes the item. |
| <Link id="m-minimumprojectileweight" /><code>{"private float minimumProjectileWeight"}</code> | Backing field for `MinimumProjectileWeight`. Lighter projectiles can only fire up to max bow speed. Default -1. |
| <Link id="m-nailhealthmultiplier" /><code>{"private float nailHealthMultiplier"}</code> | Backing field for `NailHealthMultiplier`: impact resistance when nailing a part made of this material. |
| <Link id="m-noisemultiplier" /><code>{"private float noiseMultiplier"}</code> | Backing field for `NoiseMultiplier`: scales stat impact values on a pickup, like shield bashing. |
| <Link id="m-nondeformingmaterial" /><code>{"private Material nonDeformingMaterial"}</code> | Hidden inspector material that this class never reads; the per channel materials are used instead. |
| <Link id="m-receivethermalconductivity" /><code>{"private float receiveThermalConductivity"}</code> | Backing field for `ReceiveThermalConductivity`, in W/m.k. |
| <Link id="m-sourcematerialhash" /><code>{"private uint sourceMaterialHash"}</code> | Backing field for `SourceMaterialHash`: a network prefab hash, probably the raw material this one comes from. |
| <Link id="m-sourcethermalconductivity" /><code>{"private float sourceThermalConductivity"}</code> | Backing field for `SourceThermalConductivity`, in W/m.k. |
| <Link id="m-tightnessbowimpact" /><code>{"private float tightnessBowImpact"}</code> | Backing field for `TightnessBowImpact`: how much tightness affects bow pull back speed. |
| <Link id="m-tightnessmultiplier" /><code>{"private float tightnessMultiplier"}</code> | Backing field for `TightnessMultiplier`: changes a shooter's firing distance with arrows. |
| <Link id="m-weightmultiplier" /><code>{"private float weightMultiplier"}</code> | Backing field for `WeightMultiplier`: multiplies a pickup's raw weight into its physical weight. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-damagemultiplier-2" /><code>{"float DamageMultiplier { get; }"}</code> | Multiplies the damage of tools and weapons made of this material (also used for chiselling and digging). |
| <Link id="m-density-2" /><code>{"float Density { get; }"}</code> | Divides chisel damage on timber made of this material, so denser wood takes longer to carve. |
| <Link id="m-durabilitymultiplier-2" /><code>{"float DurabilityMultiplier { get; }"}</code> | Multiplies the base durability of a `DurabilityModule` on items of this material. |
| <Link id="m-effectonfullyheated-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" EffectOnFullyHeated { get; }"}</code> | Pooled effect a metal or melting heat point spawns once its temperature passes `MaxTemperatureForParticles`. |
| <Link id="m-firstisdoneimpacteffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" FirstIsDoneImpactEffect { get; }"}</code> | Pooled effect spawned at the hit point the first time a forged model is finished by a hammer blow. |
| <Link id="m-firstisdonemesheffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" FirstIsDoneMeshEffect { get; }"}</code> | Pooled mesh effect for the first time a forged model is finished. |
| <Link id="m-followingdoneimpactseffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" FollowingDoneImpactsEffect { get; }"}</code> | Pooled effect spawned on hits to a forged model that is already finished. |
| <Link id="m-followingdonemesheffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" FollowingDoneMeshEffect { get; }"}</code> | Pooled mesh effect for hits after a forged model is finished. |
| <Link id="m-forgemultiplier-2" /><code>{"float ForgeMultiplier { get; }"}</code> | Multiplies how much shaping progress each anvil hit gives a forged model of this material. |
| <Link id="m-glowingend-2" /><code>{"float GlowingEnd { get; }"}</code> | Temperature where glow caps out. Also the temperature every melting heat point must reach before the recycler melts the item. |
| <Link id="m-glowingstart-2" /><code>{"float GlowingStart { get; }"}</code> | Temperature where a heated metal item starts to glow. |
| <Link id="m-hardnesslevel-2" /><code>{"uint HardnessLevel { get; }"}</code> | Hardness tier copied to impact generators and detectors. A tool cannot damage a detector with a higher hardness level. |
| <Link id="m-internalthermalconductivity-2" /><code>{"float InternalThermalConductivity { get; }"}</code> | Conductivity (W/m.k) between heat points inside the same item; used by metal and melting heat points. |
| <Link id="m-isshowinginlist-2" /><code>{"bool IsShowingInList { get; }"}</code> | Whether the spawn command lists this material as an option. |
| <Link id="m-maxcraftingdamagemultiplier-2" /><code>{"float MaxCraftingDamageMultiplier { get; }"}</code> | Raises the damage threshold at which a crafting nail breaks, so strong nails stay valid. |
| <Link id="m-maxinvalidprojectilevelocitymultiplier-2" /><code>{"float MaxInvalidProjectileVelocityMultiplier { get; }"}</code> | Velocity multiplier a bow uses for a projectile lighter than `MinimumProjectileWeight`. |
| <Link id="m-maxtemperatureforparticles-2" /><code>{"float MaxTemperatureForParticles { get; }"}</code> | Above this temperature metal and melting heat points spawn `EffectOnFullyHeated`. |
| <Link id="m-meltingpoint-2" /><code>{"float MeltingPoint { get; }"}</code> | Serialized as the temperature at which the recycler consumes the item, but nothing in this build reads it; melting checks `GlowingEnd` instead. |
| <Link id="m-minimumprojectileweight-2" /><code>{"float MinimumProjectileWeight { get; }"}</code> | Projectiles lighter than this fire at reduced speed from a bow of this material. -1 turns the check off. |
| <Link id="m-nailhealthmultiplier-2" /><code>{"float NailHealthMultiplier { get; }"}</code> | Damage resistance when nailing a crafting part made of this material. |
| <Link id="m-noisemultiplier-2" /><code>{"float NoiseMultiplier { get; }"}</code> | Multiplies the stat impact value of hits from a pickup of this material (for example shield bashing). |
| <Link id="m-receivethermalconductivity-2" /><code>{"float ReceiveThermalConductivity { get; }"}</code> | Conductivity (W/m.k) used when this material takes heat from another object. |
| <Link id="m-sourcematerialhash-2" /><code>{"uint SourceMaterialHash { get; }"}</code> | Prefab hash of the raw material (ingot or similar) the recycler spawns when melting items of this material. |
| <Link id="m-sourcethermalconductivity-2" /><code>{"float SourceThermalConductivity { get; }"}</code> | Conductivity (W/m.k) used when this material gives heat to another object. |
| <Link id="m-tightnessbowimpact-2" /><code>{"float TightnessBowImpact { get; }"}</code> | How much `TightnessMultiplier` affects a bow string's pull speed. |
| <Link id="m-tightnessmultiplier-2" /><code>{"float TightnessMultiplier { get; }"}</code> | Multiplies bow string tightness, which changes how far a bow of this wood fires. |
| <Link id="m-weightmultiplier-2" /><code>{"float WeightMultiplier { get; }"}</code> | Multiplies a pickup's raw weight to give its physical weight. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmaterial" /><code>{"Material GetMaterial("}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" channel)"}</code> | Returns the Unity render material for a `PhysicalMaterialChannel`. Falls back to channel 0 if the channel is out of range. |
| <Link id="m-getnonatlasednondeformingmaterial" /><code>{"Material GetNonAtlasedNonDeformingMaterial("}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" channel)"}</code> | Returns the plain non-deforming render material for a channel, without the atlas offset. |
| <Link id="m-getnondeformingmaterial" /><code><Link to="/game-api/types/alta-utilities/materialrect">{"MaterialRect"}</Link>{" GetNonDeformingMaterial("}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" channel)"}</code> | Returns the atlased non-deforming material for a channel as a `MaterialRect` (atlas material plus offset and scale). |
| <Link id="m-setup" /><code>{"bool Setup("}<Link to="/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{" definition)"}</code> | Editor/build: fills in atlas offsets for each channel from an `AtlasDefinition`. Returns true if any channel matched. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getchannel" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial-materialchannel">{"PhysicalMaterial.MaterialChannel"}</Link>{" GetChannel(int index)"}</code> | Returns the material channel at an index, falling back to the first channel when the index is out of range. |

</details>

## Used in

Members of other types that take, return or hold a `PhysicalMaterial`:

[`BasicMeltingModel.InternalSetup`](/game-api/types/alta-crafting/basicmeltingmodel#m-internalsetup), [`BasicMeltingModel.physicalMaterial`](/game-api/types/alta-crafting/basicmeltingmodel#m-physicalmaterial), [`BasicMeltingModel.PhysicalMaterial`](/game-api/types/alta-crafting/basicmeltingmodel#m-physicalmaterial-2), [`ForgedModel<TB, TA>.PhysicalMaterial`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-physicalmaterial), [`ForgedModel<TB, TA>.UpdateMaterial`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-updatematerial), [`MeltingModel.InternalSetup`](/game-api/types/alta-crafting/meltingmodel#m-internalsetup), [`MeltingModel.PhysicalMaterial`](/game-api/types/alta-crafting/meltingmodel#m-physicalmaterial), [`MeltingModel.Setup`](/game-api/types/alta-crafting/meltingmodel#m-setup), [`MeltingModelPart.InternalSetup`](/game-api/types/alta-crafting/meltingmodelpart#m-internalsetup), [`MeltingModelPart.PhysicalMaterial`](/game-api/types/alta-crafting/meltingmodelpart#m-physicalmaterial), [`MetalHeatPoint.physicalMaterial`](/game-api/types/alta-crafting/metalheatpoint#m-physicalmaterial), [`MetalHeatPoint.UpdateMaterial`](/game-api/types/alta-crafting/metalheatpoint#m-updatematerial), [`Recycler.GetSlot`](/game-api/types/alta-crafting/recycler#m-getslot), [`RecyclerOutputSlot.CurrentMaterial`](/game-api/types/alta-crafting/recycleroutputslot#m-currentmaterial), [`RecyclerOutputSlot.Reappropriate`](/game-api/types/alta-crafting/recycleroutputslot#m-reappropriate), [`RecyclerOutputSlot.SaveData.material`](/game-api/types/alta-crafting/recycleroutputslot-savedata#m-material), [`Smelter.CheckMould`](/game-api/types/alta-crafting/smelter#m-checkmould), [`Smelter.mouldMaterial`](/game-api/types/alta-crafting/smelter#m-mouldmaterial), [`SmelterSaveData.currentMaterial`](/game-api/types/alta-crafting/smeltersavedata#m-currentmaterial), [`SmelterUnlockManager.PhysicalMaterials`](/game-api/types/alta-crafting/smelterunlockmanager#m-physicalmaterials), [`SmelterUnlockManager.physMats`](/game-api/types/alta-crafting/smelterunlockmanager#m-physmats), [`SmelterUpgrades.physicalMaterials`](/game-api/types/alta-crafting/smelterupgrades#m-physicalmaterials), [`SmelterUpgrades.PhysicalMaterials`](/game-api/types/alta-crafting/smelterupgrades#m-physicalmaterials-2), [`BuilderDock.CurrentPhysicalMaterial`](/game-api/types/alta-crafting/builderdock#m-currentphysicalmaterial), [`BuilderDock.SetupPhysicalMaterial`](/game-api/types/alta-crafting/builderdock#m-setupphysicalmaterial), [`ChiselingTool.NewMaterial`](/game-api/types/alta-crafting/chiselingtool#m-newmaterial), [`ChisellingDeckSaveData.physicalMaterial`](/game-api/types/alta-crafting/chisellingdecksavedata#m-physicalmaterial), [`TimberBlock.physicalMaterial`](/game-api/types/alta-crafting/timberblock#m-physicalmaterial), [`TimberBlock.PhysicalMaterial`](/game-api/types/alta-crafting/timberblock#m-physicalmaterial-2), [`TimberBlock.SetupPhysicalMaterial`](/game-api/types/alta-crafting/timberblock#m-setupphysicalmaterial), [`GenericCraftingComponent.material`](/game-api/types/alta-crafting/genericcraftingcomponent#m-material), [`GenericCraftingComponent.Material`](/game-api/types/alta-crafting/genericcraftingcomponent#m-material-2), [`GenericCraftingComponent.SetupAsRefuse`](/game-api/types/alta-crafting/genericcraftingcomponent#m-setupasrefuse), [`GenericCraftingPiece.LoadCompletePiece`](/game-api/types/alta-crafting/genericcraftingpiece#m-loadcompletepiece), [`GenericCraftingPiece.Material`](/game-api/types/alta-crafting/genericcraftingpiece#m-material), [`GenericCraftingPiece.SetMaterial`](/game-api/types/alta-crafting/genericcraftingpiece#m-setmaterial), [`GenericCraftingPiece.SpawnChunkedRefuseWithMaterial`](/game-api/types/alta-crafting/genericcraftingpiece#m-spawnchunkedrefusewithmaterial), [`PieceSaveData.material`](/game-api/types/alta-crafting/piecesavedata-alta-crafting#m-material), [`ImpactDetector.SetPhysicalMaterial`](/game-api/types/alta-items/impactdetector#m-setphysicalmaterial), [`Ingot.physicalMaterial`](/game-api/types/alta-items/ingot#m-physicalmaterial), [`Ingot.PhysicalMaterial`](/game-api/types/alta-items/ingot#m-physicalmaterial-2), [`Item.GetComponent`](/game-api/types/alta-items/item#m-getcomponent), [`StorageData.material`](/game-api/types/alta-items/storagedata#m-material), [`TreeSpecies.physicalMaterial`](/game-api/types/alta-crafting/treespecies#m-physicalmaterial), [`TreeSpecies.PhysicalMaterial`](/game-api/types/alta-crafting/treespecies#m-physicalmaterial-2), [`DurabilityModule.UpdateMaterial`](/game-api/types/global-c-d/durabilitymodule#m-updatematerial), [`IListenToPhysicalMaterial.SetPhysicalMaterial`](/game-api/types/global-i-l/ilistentophysicalmaterial#m-setphysicalmaterial), [`ItemComponent.CheckMatch`](/game-api/types/global-i-l/itemcomponent#m-checkmatch), [`ItemComponent.physicalMaterials`](/game-api/types/global-i-l/itemcomponent#m-physicalmaterials), [`PhysicalMaterialPart.physicalMaterial`](/game-api/types/global-p/physicalmaterialpart#m-physicalmaterial), [`PhysicalMaterialPart.PhysicalMaterial`](/game-api/types/global-p/physicalmaterialpart#m-physicalmaterial-2), [`PhysicalMaterialPart.SetMaterial`](/game-api/types/global-p/physicalmaterialpart#m-setmaterial), [`PhysicalMaterialPart.ChangedMaterial.BeginInvoke`](/game-api/types/global-p/physicalmaterialpart-changedmaterial#m-begininvoke), [`PhysicalMaterialPart.ChangedMaterial.Invoke`](/game-api/types/global-p/physicalmaterialpart-changedmaterial#m-invoke), [`PhysicalMaterialPartSaveData.material`](/game-api/types/global-p/physicalmaterialpartsavedata#m-material), [`RepairBox.item1Material`](/game-api/types/global-q-r/repairbox#m-item1material), [`RepairBox.item2Material`](/game-api/types/global-q-r/repairbox#m-item2material), [`RepairBox.item3Material`](/game-api/types/global-q-r/repairbox#m-item3material), [`RepairBox.Prepare`](/game-api/types/global-q-r/repairbox#m-prepare-2), [`RepairBoxSaveData.Item.physMat`](/game-api/types/global-q-r/repairboxsavedata-item#m-physmat) and 2 more.
