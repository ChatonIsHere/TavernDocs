---
title: "PhysicalMaterialPart"
description: "Gives an item its physical material (iron, wood and so on): sets renderer materials, scales impact damage and hardness, updates durability, and syncs and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalMaterialPart

A **class** in `Root.Township`, no namespace.

Gives an item its physical material (iron, wood and so on): sets renderer materials, scales impact damage and hardness, updates durability, and syncs and saves the choice. Server picks a random one from its distribution on spawn.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`GeneratedNetworkEntityBehaviour`](/game-api/types/alta-networking/generatednetworkentitybehaviour), [`ISavable<PhysicalMaterialPartSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PhysicalMaterialPartSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler), [`ISpawnArguments`](/game-api/types/alta-utilities/ispawnarguments), [`IInterfereWithDocking`](/game-api/types/alta-items/iinterferewithdocking), [`IPreventAtlasing`](/game-api/types/alta-utilities/ipreventatlasing), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`PhysicalMaterialPartSaveData`](/game-api/types/global-p/physicalmaterialpartsavedata)
- **Nested types** [`ChangedMaterial`](/game-api/types/global-p/physicalmaterialpart-changedmaterial)
- **Documented in** [Items and materials](/game-api/items/items-and-materials#physicalmaterialpart)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PhysicalMaterialPart()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-durabilitymodule" /><code>{"private "}<Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" durabilityModule"}</code> | Parent durability module updated with the new material on every change. |
| <Link id="m-impactors" /><code>{"private "}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"[] impactors"}</code> | Impact generators whose damage multiplier and hardness level follow the material. |
| <Link id="m-listentophysicalmaterial" /><code>{"private MonoBehaviour[] listenToPhysicalMaterial"}</code> | Components implementing `IListenToPhysicalMaterial` that are told about every material change. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-materialchannel" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel"}</code> | Which of the material's render materials this part's renderers use. |
| <Link id="m-materialdistribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" materialDistribution"}</code> | Server: when set, a random material is picked from it by spawn attributes at generation. |
| <Link id="m-physicalmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial"}</code> | Backing field for `PhysicalMaterial`. The inspector value is applied on server start. |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | Renderers given the material's render material. Skipped on headless servers. |
| <Link id="m-syncmaterial" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncMaterial"}</code> | Method sync that sends the material hash to chunks on change and to each player on connect. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-physicalmaterial-2" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; }"}</code> | The item's current physical material. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-materialchanged" /><code>{"event "}<Link to="/game-api/types/global-p/physicalmaterialpart-changedmaterial">{"PhysicalMaterialPart.ChangedMaterial"}</Link>{" MaterialChanged"}</code> | Raised after the material is set, with the material and the channel used. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the material sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: applies the starting material. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current material to a joining player. |
| <Link id="m-setmaterial" /><code>{"void SetMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial)"}</code> | Applies a material: impactors, listeners, renderers (not on headless) and durability. Server: syncs to clients. Null is ignored. |
| <Link id="m-generate" /><code>{"protected override void Generate("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Picks a random material from the distribution using the spawn attributes. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkallowed" /><code>{"private bool Alta.Inventory.IInterfereWithDocking.CheckAllowed("}<Link to="/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{" other)"}</code> | Explicit `IInterfereWithDocking` method: only allows docking with another part of the same physical material. |
| <Link id="m-checkarguments" /><code>{"private void Alta.Utilities.ISpawnArguments.CheckArguments(string[] arguments)"}</code> | Explicit `ISpawnArguments` method: sets the material to the first spawn argument that names a physical material. |
| <Link id="m-ispreventatlasing" /><code>{"private bool Alta.Utilities.Atlas.IPreventAtlasing.IsPreventAtlasing(Renderer renderer)"}</code> | Explicit `IPreventAtlasing` method: true for renderers this part recolours, so they aren't atlased. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Empty. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Explicit build step: strips null entries from `renderers`. |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceAvoidFlags)"}</code> | Explicit `IEntityReplaceHandler` method: copies this material onto the replacement entity unless the replace is internal. |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the material hash; remote clients read it and call `SetMaterial`. |

</details>

## Used in

Members of other types that take, return or hold a `PhysicalMaterialPart`:

[`ForgedModel<TB, TA>.physicalMaterialPart`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-physicalmaterialpart), [`MeltingModelPart.physicalMaterialPart`](/game-api/types/alta-crafting/meltingmodelpart#m-physicalmaterialpart), [`MetalHeatPoint.materialPart`](/game-api/types/alta-crafting/metalheatpoint#m-materialpart), [`ChiselingTool.materialPart`](/game-api/types/alta-crafting/chiselingtool#m-materialpart), [`GenericCraftingComponent.part`](/game-api/types/alta-crafting/genericcraftingcomponent#m-part), [`GenericCraftingResult.parts`](/game-api/types/alta-crafting/genericcraftingresult#m-parts), [`GenericCraftingResult.Parts`](/game-api/types/alta-crafting/genericcraftingresult#m-parts-2), [`Arrow.physicalMaterial`](/game-api/types/global-a-b/arrow#m-physicalmaterial), [`Pickup.physicalMaterial`](/game-api/types/global-p/pickup#m-physicalmaterial), [`Pickup.PhysicalMaterial`](/game-api/types/global-p/pickup#m-physicalmaterial-2), [`Shooter.physicalMaterial`](/game-api/types/global-s/shooter#m-physicalmaterial), [`SpawnerBase.materialPart`](/game-api/types/global-s/spawnerbase#m-materialpart).
