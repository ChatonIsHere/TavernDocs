---
title: "NetworkEntityBehaviour"
description: "Base class for game components that live on a NetworkEntity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkEntityBehaviour

An **abstract class** in `Root.Township`, `Alta.Networking`.

Base class for game components that live on a `NetworkEntity`. Override its hooks to run code when the entity is set up, spawned by the server, or sent to a player.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`ActionItem`](/mod/game-api/types/global-a-b/actionitem), [`AdditionalStaticContent`](/mod/game-api/types/global-a-b/additionalstaticcontent), [`MeltingModel`](/mod/game-api/types/alta-crafting/meltingmodel), [`Recycler`](/mod/game-api/types/alta-crafting/recycler), [`Smelter`](/mod/game-api/types/alta-crafting/smelter), [`BuilderDock`](/mod/game-api/types/alta-crafting/builderdock), [`ChisellingDeck`](/mod/game-api/types/alta-crafting/chisellingdeck), [`TimberBlock`](/mod/game-api/types/alta-crafting/timberblock), [`TimberBlockSpawner`](/mod/game-api/types/alta-crafting/timberblockspawner), [`CaveLayerManager`](/mod/game-api/types/alta-world-generation/cavelayermanager), [`CaveTeleporter`](/mod/game-api/types/alta-world-generation/caveteleporter), [`CaveTeleporterManager`](/mod/game-api/types/alta-world-generation/caveteleportermanager), [`GenerationBase`](/mod/game-api/types/alta-world-generation/generationbase), [`LevelSelector`](/mod/game-api/types/alta-world-generation/levelselector), [`CaveLayerStaticObject`](/mod/game-api/types/alta-world/cavelayerstaticobject), [`CaveLayerStreamer`](/mod/game-api/types/alta-world/cavelayerstreamer), [`Chunk`](/mod/game-api/types/alta-world/chunk), [`ChunkPositionSurface`](/mod/game-api/types/alta-world/chunkpositionsurface), [`StaticCaveChunk`](/mod/game-api/types/alta-world/staticcavechunk), [`WorldLandmarkManager`](/mod/game-api/types/alta-world/worldlandmarkmanager), [`Cookable`](/mod/game-api/types/alta-crafting/cookable), [`CookingGarnishComponent`](/mod/game-api/types/alta-crafting/cookinggarnishcomponent), [`CookingLiquid`](/mod/game-api/types/alta-crafting/cookingliquid), [`CookingPot`](/mod/game-api/types/alta-crafting/cookingpot), [`FruitNinja`](/mod/game-api/types/alta-crafting/fruitninja), [`StewComponent`](/mod/game-api/types/alta-crafting/stewcomponent), [`StewManager`](/mod/game-api/types/alta-crafting/stewmanager), [`CraftingPart`](/mod/game-api/types/alta-crafting/craftingpart), [`CraftingTester`](/mod/game-api/types/alta-crafting/craftingtester), [`DecraftingComponent`](/mod/game-api/types/alta-crafting/decraftingcomponent), [`GenericCraftingComponent`](/mod/game-api/types/alta-crafting/genericcraftingcomponent), [`GenericCraftingResult`](/mod/game-api/types/alta-crafting/genericcraftingresult), [`GenericCraftingStation`](/mod/game-api/types/alta-crafting/genericcraftingstation), [`JointPoint`](/mod/game-api/types/alta-crafting/jointpoint), [`Enchantable`](/mod/game-api/types/alta-crafting/enchantable), [`AtmosphereManager`](/mod/game-api/types/alta-world/atmospheremanager), [`ForestDefinedAtmosphere`](/mod/game-api/types/alta-world/forestdefinedatmosphere), [`GrassManager`](/mod/game-api/types/alta-world/grassmanager), [`ForestGenerator`](/mod/game-api/types/alta-world-generation/forestgenerator), [`ForestPopulationArea`](/mod/game-api/types/alta-world-generation/forestpopulationarea), [`HandShakeOffDetector`](/mod/game-api/types/alta-stats-effects/handshakeoffdetector), [`HeatArea`](/mod/game-api/types/alta-stats-effects/heatarea), [`HeatSourceBase`](/mod/game-api/types/alta-stats-effects/heatsourcebase), [`HitModifierEffect`](/mod/game-api/types/alta-items/hitmodifiereffect), [`ImpactDetectorCentral`](/mod/game-api/types/alta-items/impactdetectorcentral), [`ImpactModifier`](/mod/game-api/types/alta-items/impactmodifier), [`SparkSecondaryDetector`](/mod/game-api/types/alta-items/sparksecondarydetector), [`RotateToTargetWorldXZ`](/mod/game-api/types/alta-intelligence/rotatetotargetworldxz), [`SeedSpray`](/mod/game-api/types/alta-intelligence/seedspray), [`SeedSprayManager`](/mod/game-api/types/alta-intelligence/seedspraymanager), [`Target`](/mod/game-api/types/alta-intelligence/target), [`CommunalStorage`](/mod/game-api/types/alta-items/communalstorage), [`DockArray`](/mod/game-api/types/alta-items/dockarray), [`DockedOffset`](/mod/game-api/types/alta-items/dockedoffset), [`GlobalCommunalStorageValues`](/mod/game-api/types/alta-items/globalcommunalstoragevalues), [`Lock`](/mod/game-api/types/alta-items/lock), [`LockableHinge`](/mod/game-api/types/alta-items/lockablehinge), [`OnlyAllowDockingWhenEmpty`](/mod/game-api/types/alta-items/onlyallowdockingwhenempty), [`PersonalChunk`](/mod/game-api/types/alta-items/personalchunk), [`LiquidContainerLid`](/mod/game-api/types/alta-stats-effects/liquidcontainerlid) and 235 more
- **Attributes** `RequireComponent`
- **Documented in** [Entity sync](/mod/game-api/networking/entity-sync#networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected NetworkEntityBehaviour()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | Backing field for `Entity`, filled from the same GameObject. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The `NetworkEntity` on the same GameObject, filled in at bake time. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> | Called on both sides when the entity is initialized. Empty by default. |
| <Link id="m-initializeasserver" /><code>{"virtual void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: called once when the server sets up the entity, whether freshly spawned or loaded from a save, with its `SpawnData`. Empty by default. |
| <Link id="m-onconnected" /><code>{"virtual void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: called when the entity is sent to a player, so you can send that player any extra state. Empty by default. |
| <Link id="m-ondisconnected" /><code>{"virtual void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: called when the entity stops being synced to a player. Empty by default. |
