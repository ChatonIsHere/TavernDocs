---
title: "PhysicalMaterial"
description: "A material asset (iron, oak, copper and so on) that holds the heat, crafting, impact and bow numbers for items made of it, plus the render materials per..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalMaterial

A **class** in `Root.Township`, the global namespace.

A material asset (iron, oak, copper and so on) that holds the heat, crafting, impact and bow numbers for items made of it, plus the render materials per channel. A hashed `ScriptableObject`; look one up through `HashedGeneralValue`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`HashedGeneralValue<PhysicalMaterial>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PhysicalMaterial`](/mod/game-api/types/global-p/physicalmaterial), [`PhysicalMaterial.Create`](/mod/game-api/types/global-p/physicalmaterial-create)
- **Nested types** [`Create`](/mod/game-api/types/global-p/physicalmaterial-create), [`MaterialChannel`](/mod/game-api/types/global-p/physicalmaterial-materialchannel)
- **Documented in** [Items and materials](/mod/game-api/items/items-and-materials#physicalmaterial)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PhysicalMaterial()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>30 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-damagemultiplier" /><code>{"private float damageMultiplier"}</code> | <span className="api-desc">Backing field for `DamageMultiplier`: damage multiplier for weapons and tools made of this material.</span> |
| <Link id="m-density" /><code>{"private float density"}</code> | <span className="api-desc">Backing field for `Density`. The tooltip says it scales damage when chiselling wood on the chisel deck.</span> |
| <Link id="m-durabilitymultiplier" /><code>{"private float durabilityMultiplier"}</code> | <span className="api-desc">Backing field for `DurabilityMultiplier`, used by durability modules.</span> |
| <Link id="m-effectonfullyheated" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effectOnFullyHeated"}</code> | <span className="api-desc">Backing field for `EffectOnFullyHeated`.</span> |
| <Link id="m-firstisdoneimpacteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" firstIsDoneImpactEffect"}</code> | <span className="api-desc">Backing field for `FirstIsDoneImpactEffect`.</span> |
| <Link id="m-firstisdonemesheffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" firstIsDoneMeshEffect"}</code> | <span className="api-desc">Backing field for `FirstIsDoneMeshEffect`.</span> |
| <Link id="m-followingdoneimpactseffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" followingDoneImpactsEffect"}</code> | <span className="api-desc">Backing field for `FollowingDoneImpactsEffect`.</span> |
| <Link id="m-followingdonemesheffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" followingDoneMeshEffect"}</code> | <span className="api-desc">Backing field for `FollowingDoneMeshEffect`.</span> |
| <Link id="m-forgemultiplier" /><code>{"private float forgeMultiplier"}</code> | <span className="api-desc">Backing field for `ForgeMultiplier`: damage resistance when forging on an anvil.</span> |
| <Link id="m-glowingend" /><code>{"private float glowingEnd"}</code> | <span className="api-desc">Backing field for `GlowingEnd`: temperature where the forged model's glow particles cap out. Default 1000.</span> |
| <Link id="m-glowingstart" /><code>{"private float glowingStart"}</code> | <span className="api-desc">Backing field for `GlowingStart`: temperature where the forged model starts to glow. Default 100.</span> |
| <Link id="m-hardnesslevel" /><code>{"private uint hardnessLevel"}</code> | <span className="api-desc">Backing field for `HardnessLevel`: the tier needed to damage other materials of equal or lower level.</span> |
| <Link id="m-internalthermalconductivity" /><code>{"private float internalThermalConductivity"}</code> | <span className="api-desc">Backing field for `InternalThermalConductivity`, in W/m.k.</span> |
| <Link id="m-isshowinginlist" /><code>{"private bool isShowingInList"}</code> | <span className="api-desc">Backing field for `IsShowingInList`. Default true.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">Hidden inspector material that this class never reads; the per channel materials are used instead.</span> |
| <Link id="m-materialchannels" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial-materialchannel">{"PhysicalMaterial.MaterialChannel"}</Link>{"[] materialChannels"}</code> | <span className="api-desc">Per `PhysicalMaterialChannel` materials, so items of the same material can use different textures.</span> |
| <Link id="m-maxcraftingdamagemultiplier" /><code>{"private float maxCraftingDamageMultiplier"}</code> | <span className="api-desc">Backing field for `MaxCraftingDamageMultiplier`: raises the break threshold of generic crafting nails.</span> |
| <Link id="m-maxinvalidprojectilevelocitymultiplier" /><code>{"private float maxInvalidProjectileVelocityMultiplier"}</code> | <span className="api-desc">Backing field for `MaxInvalidProjectileVelocityMultiplier`: velocity multiplier for projectiles under the minimum weight.</span> |
| <Link id="m-maxtemperatureforparticles" /><code>{"private float maxTemperatureForParticles"}</code> | <span className="api-desc">Backing field for `MaxTemperatureForParticles`. Default 1250.</span> |
| <Link id="m-meltingpoint" /><code>{"private float meltingPoint"}</code> | <span className="api-desc">Backing field for `MeltingPoint`: the temperature at which the recycler consumes the item.</span> |
| <Link id="m-minimumprojectileweight" /><code>{"private float minimumProjectileWeight"}</code> | <span className="api-desc">Backing field for `MinimumProjectileWeight`. Lighter projectiles can only fire up to max bow speed. Default -1.</span> |
| <Link id="m-nailhealthmultiplier" /><code>{"private float nailHealthMultiplier"}</code> | <span className="api-desc">Backing field for `NailHealthMultiplier`: impact resistance when nailing a part made of this material.</span> |
| <Link id="m-noisemultiplier" /><code>{"private float noiseMultiplier"}</code> | <span className="api-desc">Backing field for `NoiseMultiplier`: scales stat impact values on a pickup, like shield bashing.</span> |
| <Link id="m-nondeformingmaterial" /><code>{"private Material nonDeformingMaterial"}</code> | <span className="api-desc">Hidden inspector material that this class never reads; the per channel materials are used instead.</span> |
| <Link id="m-receivethermalconductivity" /><code>{"private float receiveThermalConductivity"}</code> | <span className="api-desc">Backing field for `ReceiveThermalConductivity`, in W/m.k.</span> |
| <Link id="m-sourcematerialhash" /><code>{"private uint sourceMaterialHash"}</code> | <span className="api-desc">Backing field for `SourceMaterialHash`: a network prefab hash, probably the raw material this one comes from.</span> |
| <Link id="m-sourcethermalconductivity" /><code>{"private float sourceThermalConductivity"}</code> | <span className="api-desc">Backing field for `SourceThermalConductivity`, in W/m.k.</span> |
| <Link id="m-tightnessbowimpact" /><code>{"private float tightnessBowImpact"}</code> | <span className="api-desc">Backing field for `TightnessBowImpact`: how much tightness affects bow pull back speed.</span> |
| <Link id="m-tightnessmultiplier" /><code>{"private float tightnessMultiplier"}</code> | <span className="api-desc">Backing field for `TightnessMultiplier`: changes a shooter's firing distance with arrows.</span> |
| <Link id="m-weightmultiplier" /><code>{"private float weightMultiplier"}</code> | <span className="api-desc">Backing field for `WeightMultiplier`: multiplies a pickup's raw weight into its physical weight.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-damagemultiplier-2" /><code>{"float DamageMultiplier { get; }"}</code> | <span className="api-desc">Multiplies the damage of tools and weapons made of this material (also used for chiselling and digging).</span> |
| <Link id="m-density-2" /><code>{"float Density { get; }"}</code> | <span className="api-desc">Divides chisel damage on timber made of this material, so denser wood takes longer to carve.</span> |
| <Link id="m-durabilitymultiplier-2" /><code>{"float DurabilityMultiplier { get; }"}</code> | <span className="api-desc">Multiplies the base durability of a `DurabilityModule` on items of this material.</span> |
| <Link id="m-effectonfullyheated-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" EffectOnFullyHeated { get; }"}</code> | <span className="api-desc">Pooled effect a metal or melting heat point spawns once its temperature passes `MaxTemperatureForParticles`.</span> |
| <Link id="m-firstisdoneimpacteffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" FirstIsDoneImpactEffect { get; }"}</code> | <span className="api-desc">Pooled effect spawned at the hit point the first time a forged model is finished by a hammer blow.</span> |
| <Link id="m-firstisdonemesheffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" FirstIsDoneMeshEffect { get; }"}</code> | <span className="api-desc">Pooled mesh effect for the first time a forged model is finished.</span> |
| <Link id="m-followingdoneimpactseffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" FollowingDoneImpactsEffect { get; }"}</code> | <span className="api-desc">Pooled effect spawned on hits to a forged model that is already finished.</span> |
| <Link id="m-followingdonemesheffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" FollowingDoneMeshEffect { get; }"}</code> | <span className="api-desc">Pooled mesh effect for hits after a forged model is finished.</span> |
| <Link id="m-forgemultiplier-2" /><code>{"float ForgeMultiplier { get; }"}</code> | <span className="api-desc">Multiplies how much shaping progress each anvil hit gives a forged model of this material.</span> |
| <Link id="m-glowingend-2" /><code>{"float GlowingEnd { get; }"}</code> | <span className="api-desc">Temperature where glow caps out. Also the temperature every melting heat point must reach before the recycler melts the item.</span> |
| <Link id="m-glowingstart-2" /><code>{"float GlowingStart { get; }"}</code> | <span className="api-desc">Temperature where a heated metal item starts to glow.</span> |
| <Link id="m-hardnesslevel-2" /><code>{"uint HardnessLevel { get; }"}</code> | <span className="api-desc">Hardness tier copied to impact generators and detectors. A tool cannot damage a detector with a higher hardness level.</span> |
| <Link id="m-internalthermalconductivity-2" /><code>{"float InternalThermalConductivity { get; }"}</code> | <span className="api-desc">Conductivity (W/m.k) between heat points inside the same item; used by metal and melting heat points.</span> |
| <Link id="m-isshowinginlist-2" /><code>{"bool IsShowingInList { get; }"}</code> | <span className="api-desc">Whether the spawn command lists this material as an option.</span> |
| <Link id="m-maxcraftingdamagemultiplier-2" /><code>{"float MaxCraftingDamageMultiplier { get; }"}</code> | <span className="api-desc">Raises the damage threshold at which a crafting nail breaks, so strong nails stay valid.</span> |
| <Link id="m-maxinvalidprojectilevelocitymultiplier-2" /><code>{"float MaxInvalidProjectileVelocityMultiplier { get; }"}</code> | <span className="api-desc">Velocity multiplier a bow uses for a projectile lighter than `MinimumProjectileWeight`.</span> |
| <Link id="m-maxtemperatureforparticles-2" /><code>{"float MaxTemperatureForParticles { get; }"}</code> | <span className="api-desc">Above this temperature metal and melting heat points spawn `EffectOnFullyHeated`.</span> |
| <Link id="m-meltingpoint-2" /><code>{"float MeltingPoint { get; }"}</code> | <span className="api-desc">Serialized as the temperature at which the recycler consumes the item, but nothing in this build reads it; melting checks `GlowingEnd` instead.</span> |
| <Link id="m-minimumprojectileweight-2" /><code>{"float MinimumProjectileWeight { get; }"}</code> | <span className="api-desc">Projectiles lighter than this fire at reduced speed from a bow of this material. -1 turns the check off.</span> |
| <Link id="m-nailhealthmultiplier-2" /><code>{"float NailHealthMultiplier { get; }"}</code> | <span className="api-desc">Damage resistance when nailing a crafting part made of this material.</span> |
| <Link id="m-noisemultiplier-2" /><code>{"float NoiseMultiplier { get; }"}</code> | <span className="api-desc">Multiplies the stat impact value of hits from a pickup of this material (for example shield bashing).</span> |
| <Link id="m-receivethermalconductivity-2" /><code>{"float ReceiveThermalConductivity { get; }"}</code> | <span className="api-desc">Conductivity (W/m.k) used when this material takes heat from another object.</span> |
| <Link id="m-sourcematerialhash-2" /><code>{"uint SourceMaterialHash { get; }"}</code> | <span className="api-desc">Prefab hash of the raw material (ingot or similar) the recycler spawns when melting items of this material.</span> |
| <Link id="m-sourcethermalconductivity-2" /><code>{"float SourceThermalConductivity { get; }"}</code> | <span className="api-desc">Conductivity (W/m.k) used when this material gives heat to another object.</span> |
| <Link id="m-tightnessbowimpact-2" /><code>{"float TightnessBowImpact { get; }"}</code> | <span className="api-desc">How much `TightnessMultiplier` affects a bow string's pull speed.</span> |
| <Link id="m-tightnessmultiplier-2" /><code>{"float TightnessMultiplier { get; }"}</code> | <span className="api-desc">Multiplies bow string tightness, which changes how far a bow of this wood fires.</span> |
| <Link id="m-weightmultiplier-2" /><code>{"float WeightMultiplier { get; }"}</code> | <span className="api-desc">Multiplies a pickup's raw weight to give its physical weight.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmaterial" /><code>{"Material GetMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" channel)"}</code> | <span className="api-desc">Returns the Unity render material for a `PhysicalMaterialChannel`. Falls back to channel 0 if the channel is out of range.</span> |
| <Link id="m-getnonatlasednondeformingmaterial" /><code>{"Material GetNonAtlasedNonDeformingMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" channel)"}</code> | <span className="api-desc">Returns the plain non-deforming render material for a channel, without the atlas offset.</span> |
| <Link id="m-getnondeformingmaterial" /><code><Link to="/mod/game-api/types/alta-utilities/materialrect">{"MaterialRect"}</Link>{" GetNonDeformingMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" channel)"}</code> | <span className="api-desc">Returns the atlased non-deforming material for a channel as a `MaterialRect` (atlas material plus offset and scale).</span> |
| <Link id="m-setup" /><code>{"bool Setup("}<Link to="/mod/game-api/types/alta-utilities/atlasdefinition">{"AtlasDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Editor/build: fills in atlas offsets for each channel from an `AtlasDefinition`. Returns true if any channel matched.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getchannel" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial-materialchannel">{"PhysicalMaterial.MaterialChannel"}</Link>{" GetChannel(int index)"}</code> | <span className="api-desc">Returns the material channel at an index, falling back to the first channel when the index is out of range.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PhysicalMaterial`:

<div className="api-used-in">

[`BasicMeltingModel.InternalSetup`](/mod/game-api/types/alta-crafting/basicmeltingmodel#m-internalsetup), [`BasicMeltingModel.physicalMaterial`](/mod/game-api/types/alta-crafting/basicmeltingmodel#m-physicalmaterial), [`BasicMeltingModel.PhysicalMaterial`](/mod/game-api/types/alta-crafting/basicmeltingmodel#m-physicalmaterial-2), [`ForgedModel<TB, TA>.PhysicalMaterial`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-physicalmaterial), [`ForgedModel<TB, TA>.UpdateMaterial`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-updatematerial), [`MeltingModel.InternalSetup`](/mod/game-api/types/alta-crafting/meltingmodel#m-internalsetup), [`MeltingModel.PhysicalMaterial`](/mod/game-api/types/alta-crafting/meltingmodel#m-physicalmaterial), [`MeltingModel.Setup`](/mod/game-api/types/alta-crafting/meltingmodel#m-setup), [`MeltingModelPart.InternalSetup`](/mod/game-api/types/alta-crafting/meltingmodelpart#m-internalsetup), [`MeltingModelPart.PhysicalMaterial`](/mod/game-api/types/alta-crafting/meltingmodelpart#m-physicalmaterial), [`MetalHeatPoint.physicalMaterial`](/mod/game-api/types/alta-crafting/metalheatpoint#m-physicalmaterial), [`MetalHeatPoint.UpdateMaterial`](/mod/game-api/types/alta-crafting/metalheatpoint#m-updatematerial), [`Recycler.GetSlot`](/mod/game-api/types/alta-crafting/recycler#m-getslot), [`RecyclerOutputSlot.CurrentMaterial`](/mod/game-api/types/alta-crafting/recycleroutputslot#m-currentmaterial), [`RecyclerOutputSlot.Reappropriate`](/mod/game-api/types/alta-crafting/recycleroutputslot#m-reappropriate), [`RecyclerOutputSlot.SaveData.material`](/mod/game-api/types/alta-crafting/recycleroutputslot-savedata#m-material), [`Smelter.CheckMould`](/mod/game-api/types/alta-crafting/smelter#m-checkmould), [`Smelter.mouldMaterial`](/mod/game-api/types/alta-crafting/smelter#m-mouldmaterial), [`SmelterSaveData.currentMaterial`](/mod/game-api/types/alta-crafting/smeltersavedata#m-currentmaterial), [`SmelterUnlockManager.PhysicalMaterials`](/mod/game-api/types/alta-crafting/smelterunlockmanager#m-physicalmaterials), [`SmelterUnlockManager.physMats`](/mod/game-api/types/alta-crafting/smelterunlockmanager#m-physmats), [`SmelterUpgrades.physicalMaterials`](/mod/game-api/types/alta-crafting/smelterupgrades#m-physicalmaterials), [`SmelterUpgrades.PhysicalMaterials`](/mod/game-api/types/alta-crafting/smelterupgrades#m-physicalmaterials-2), [`BuilderDock.CurrentPhysicalMaterial`](/mod/game-api/types/alta-crafting/builderdock#m-currentphysicalmaterial), [`BuilderDock.SetupPhysicalMaterial`](/mod/game-api/types/alta-crafting/builderdock#m-setupphysicalmaterial), [`ChiselingTool.NewMaterial`](/mod/game-api/types/alta-crafting/chiselingtool#m-newmaterial), [`ChisellingDeckSaveData.physicalMaterial`](/mod/game-api/types/alta-crafting/chisellingdecksavedata#m-physicalmaterial), [`TimberBlock.physicalMaterial`](/mod/game-api/types/alta-crafting/timberblock#m-physicalmaterial), [`TimberBlock.PhysicalMaterial`](/mod/game-api/types/alta-crafting/timberblock#m-physicalmaterial-2), [`TimberBlock.SetupPhysicalMaterial`](/mod/game-api/types/alta-crafting/timberblock#m-setupphysicalmaterial), [`GenericCraftingComponent.material`](/mod/game-api/types/alta-crafting/genericcraftingcomponent#m-material), [`GenericCraftingComponent.Material`](/mod/game-api/types/alta-crafting/genericcraftingcomponent#m-material-2), [`GenericCraftingComponent.SetupAsRefuse`](/mod/game-api/types/alta-crafting/genericcraftingcomponent#m-setupasrefuse), [`GenericCraftingPiece.LoadCompletePiece`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-loadcompletepiece), [`GenericCraftingPiece.Material`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-material), [`GenericCraftingPiece.SetMaterial`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-setmaterial), [`GenericCraftingPiece.SpawnChunkedRefuseWithMaterial`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-spawnchunkedrefusewithmaterial), [`PieceSaveData.material`](/mod/game-api/types/alta-crafting/piecesavedata-alta-crafting#m-material), [`ImpactDetector.SetPhysicalMaterial`](/mod/game-api/types/alta-items/impactdetector#m-setphysicalmaterial), [`Ingot.physicalMaterial`](/mod/game-api/types/alta-items/ingot#m-physicalmaterial), [`Ingot.PhysicalMaterial`](/mod/game-api/types/alta-items/ingot#m-physicalmaterial-2), [`Item.GetComponent`](/mod/game-api/types/alta-items/item#m-getcomponent), [`StorageData.material`](/mod/game-api/types/alta-items/storagedata#m-material), [`TreeSpecies.physicalMaterial`](/mod/game-api/types/alta-crafting/treespecies#m-physicalmaterial), [`TreeSpecies.PhysicalMaterial`](/mod/game-api/types/alta-crafting/treespecies#m-physicalmaterial-2), [`DurabilityModule.UpdateMaterial`](/mod/game-api/types/global-c-d/durabilitymodule#m-updatematerial), [`IListenToPhysicalMaterial.SetPhysicalMaterial`](/mod/game-api/types/global-i-l/ilistentophysicalmaterial#m-setphysicalmaterial), [`ItemComponent.CheckMatch`](/mod/game-api/types/global-i-l/itemcomponent#m-checkmatch), [`ItemComponent.physicalMaterials`](/mod/game-api/types/global-i-l/itemcomponent#m-physicalmaterials), [`PhysicalMaterialPart.physicalMaterial`](/mod/game-api/types/global-p/physicalmaterialpart#m-physicalmaterial), [`PhysicalMaterialPart.PhysicalMaterial`](/mod/game-api/types/global-p/physicalmaterialpart#m-physicalmaterial-2), [`PhysicalMaterialPart.SetMaterial`](/mod/game-api/types/global-p/physicalmaterialpart#m-setmaterial), [`PhysicalMaterialPart.ChangedMaterial.BeginInvoke`](/mod/game-api/types/global-p/physicalmaterialpart-changedmaterial#m-begininvoke), [`PhysicalMaterialPart.ChangedMaterial.Invoke`](/mod/game-api/types/global-p/physicalmaterialpart-changedmaterial#m-invoke), [`PhysicalMaterialPartSaveData.material`](/mod/game-api/types/global-p/physicalmaterialpartsavedata#m-material), [`RepairBox.item1Material`](/mod/game-api/types/global-q-r/repairbox#m-item1material), [`RepairBox.item2Material`](/mod/game-api/types/global-q-r/repairbox#m-item2material), [`RepairBox.item3Material`](/mod/game-api/types/global-q-r/repairbox#m-item3material), [`RepairBox.Prepare`](/mod/game-api/types/global-q-r/repairbox#m-prepare-2), [`RepairBoxSaveData.Item.physMat`](/mod/game-api/types/global-q-r/repairboxsavedata-item#m-physmat) and 2 more.

</div>
