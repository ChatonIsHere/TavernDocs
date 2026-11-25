---
title: "PhysicalMaterialPart"
description: "A networked behaviour on items that have a material. The server picks and syncs the material; clients follow."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalMaterialPart

A **class** in `Root.Township`, no namespace.

A networked behaviour on items that have a material. The server picks and syncs the material; clients follow.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour), [`ISavable<PhysicalMaterialPartSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PhysicalMaterialPartSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler), [`ISpawnArguments`](/game-api/types/alta-utilities/ispawnarguments), [`IInterfereWithDocking`](/game-api/types/alta-items/iinterferewithdocking), [`IPreventAtlasing`](/game-api/types/alta-utilities/ipreventatlasing), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`PhysicalMaterialPartSaveData`](/game-api/types/global-p/physicalmaterialpartsavedata)
- **Nested types** [`ChangedMaterial`](/game-api/types/global-p/physicalmaterialpart-changedmaterial)
- **Documented in** [Items and materials](/game-api/items/items-and-materials#physicalmaterialpart)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PhysicalMaterialPart()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-durabilitymodule" /><code>{"private "}<Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" durabilityModule"}</code> |  |
| <Link id="m-impactors" /><code>{"private "}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"[] impactors"}</code> |  |
| <Link id="m-listentophysicalmaterial" /><code>{"private MonoBehaviour[] listenToPhysicalMaterial"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-materialchannel" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel"}</code> |  |
| <Link id="m-materialdistribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" materialDistribution"}</code> |  |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> |  |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> |  |
| <Link id="m-syncmaterial" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncMaterial"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterial-2" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-materialchanged" /><code>{"event "}<Link to="/game-api/types/global-p/physicalmaterialpart-changedmaterial">{"PhysicalMaterialPart.ChangedMaterial"}</Link>{" MaterialChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-setmaterial" /><code>{"void SetMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial)"}</code> |  |
| <Link id="m-checkallowed" /><code>{"private bool Alta.Inventory.IInterfereWithDocking.CheckAllowed("}<Link to="/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{" other)"}</code> |  |
| <Link id="m-checkarguments" /><code>{"private void Alta.Utilities.ISpawnArguments.CheckArguments(string[] arguments)"}</code> |  |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-ispreventatlasing" /><code>{"private bool Alta.Utilities.Atlas.IPreventAtlasing.IsPreventAtlasing(Renderer renderer)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> |  |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PhysicalMaterialPart`:

[`ForgedModel<TB, TA>.physicalMaterialPart`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-physicalmaterialpart), [`MeltingModelPart.physicalMaterialPart`](/game-api/types/alta-crafting/meltingmodelpart#m-physicalmaterialpart), [`MetalHeatPoint.materialPart`](/game-api/types/alta-crafting/metalheatpoint#m-materialpart), [`ChiselingTool.materialPart`](/game-api/types/alta-crafting/chiselingtool#m-materialpart), [`GenericCraftingComponent.part`](/game-api/types/alta-crafting/genericcraftingcomponent#m-part), [`GenericCraftingResult.parts`](/game-api/types/alta-crafting/genericcraftingresult#m-parts), [`GenericCraftingResult.Parts`](/game-api/types/alta-crafting/genericcraftingresult#m-parts-2), [`Arrow.physicalMaterial`](/game-api/types/global-a-b/arrow#m-physicalmaterial), [`Pickup.physicalMaterial`](/game-api/types/global-p/pickup#m-physicalmaterial), [`Pickup.PhysicalMaterial`](/game-api/types/global-p/pickup#m-physicalmaterial-2), [`Shooter.physicalMaterial`](/game-api/types/global-s/shooter#m-physicalmaterial), [`SpawnerBase.materialPart`](/game-api/types/global-s/spawnerbase#m-materialpart).
