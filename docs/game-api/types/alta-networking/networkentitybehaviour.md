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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)
- **Derived types** [`ActionItem`](/game-api/types/global-a-b/actionitem), [`AdditionalStaticContent`](/game-api/types/global-a-b/additionalstaticcontent), [`MeltingModel`](/game-api/types/alta-crafting/meltingmodel), [`Recycler`](/game-api/types/alta-crafting/recycler), [`Smelter`](/game-api/types/alta-crafting/smelter), [`BuilderDock`](/game-api/types/alta-crafting/builderdock), [`ChisellingDeck`](/game-api/types/alta-crafting/chisellingdeck), [`TimberBlock`](/game-api/types/alta-crafting/timberblock), [`TimberBlockSpawner`](/game-api/types/alta-crafting/timberblockspawner), [`CaveLayerManager`](/game-api/types/alta-world-generation/cavelayermanager), [`CaveTeleporter`](/game-api/types/alta-world-generation/caveteleporter), [`CaveTeleporterManager`](/game-api/types/alta-world-generation/caveteleportermanager), [`GenerationBase`](/game-api/types/alta-world-generation/generationbase), [`LevelSelector`](/game-api/types/alta-world-generation/levelselector), [`CaveLayerStaticObject`](/game-api/types/alta-world/cavelayerstaticobject), [`CaveLayerStreamer`](/game-api/types/alta-world/cavelayerstreamer), [`Chunk`](/game-api/types/alta-world/chunk), [`ChunkPositionSurface`](/game-api/types/alta-world/chunkpositionsurface), [`StaticCaveChunk`](/game-api/types/alta-world/staticcavechunk), [`WorldLandmarkManager`](/game-api/types/alta-world/worldlandmarkmanager), [`Cookable`](/game-api/types/alta-crafting/cookable), [`CookingGarnishComponent`](/game-api/types/alta-crafting/cookinggarnishcomponent), [`CookingLiquid`](/game-api/types/alta-crafting/cookingliquid), [`CookingPot`](/game-api/types/alta-crafting/cookingpot), [`FruitNinja`](/game-api/types/alta-crafting/fruitninja), [`StewComponent`](/game-api/types/alta-crafting/stewcomponent), [`StewManager`](/game-api/types/alta-crafting/stewmanager), [`CraftingPart`](/game-api/types/alta-crafting/craftingpart), [`CraftingTester`](/game-api/types/alta-crafting/craftingtester), [`DecraftingComponent`](/game-api/types/alta-crafting/decraftingcomponent), [`GenericCraftingComponent`](/game-api/types/alta-crafting/genericcraftingcomponent), [`GenericCraftingResult`](/game-api/types/alta-crafting/genericcraftingresult), [`GenericCraftingStation`](/game-api/types/alta-crafting/genericcraftingstation), [`JointPoint`](/game-api/types/alta-crafting/jointpoint), [`Enchantable`](/game-api/types/alta-crafting/enchantable), [`AtmosphereManager`](/game-api/types/alta-world/atmospheremanager), [`ForestDefinedAtmosphere`](/game-api/types/alta-world/forestdefinedatmosphere), [`GrassManager`](/game-api/types/alta-world/grassmanager), [`ForestGenerator`](/game-api/types/alta-world-generation/forestgenerator), [`ForestPopulationArea`](/game-api/types/alta-world-generation/forestpopulationarea), [`HandShakeOffDetector`](/game-api/types/alta-stats-effects/handshakeoffdetector), [`HeatArea`](/game-api/types/alta-stats-effects/heatarea), [`HeatSourceBase`](/game-api/types/alta-stats-effects/heatsourcebase), [`HitModifierEffect`](/game-api/types/alta-items/hitmodifiereffect), [`ImpactDetectorCentral`](/game-api/types/alta-items/impactdetectorcentral), [`ImpactModifier`](/game-api/types/alta-items/impactmodifier), [`SparkSecondaryDetector`](/game-api/types/alta-items/sparksecondarydetector), [`RotateToTargetWorldXZ`](/game-api/types/alta-intelligence/rotatetotargetworldxz), [`SeedSpray`](/game-api/types/alta-intelligence/seedspray), [`SeedSprayManager`](/game-api/types/alta-intelligence/seedspraymanager), [`Target`](/game-api/types/alta-intelligence/target), [`CommunalStorage`](/game-api/types/alta-items/communalstorage), [`DockArray`](/game-api/types/alta-items/dockarray), [`DockedOffset`](/game-api/types/alta-items/dockedoffset), [`GlobalCommunalStorageValues`](/game-api/types/alta-items/globalcommunalstoragevalues), [`Lock`](/game-api/types/alta-items/lock), [`LockableHinge`](/game-api/types/alta-items/lockablehinge), [`OnlyAllowDockingWhenEmpty`](/game-api/types/alta-items/onlyallowdockingwhenempty), [`PersonalChunk`](/game-api/types/alta-items/personalchunk), [`LiquidContainerLid`](/game-api/types/alta-stats-effects/liquidcontainerlid) and 235 more
- **Attributes** `RequireComponent`
- **Documented in** [Entity sync](/game-api/networking/entity-sync#networkentitybehaviour)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected NetworkEntityBehaviour()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | Backing field for `Entity`, filled from the same GameObject. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The `NetworkEntity` on the same GameObject, filled in at bake time. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"virtual void Initialize()"}</code> | Called on both sides when the entity is initialized. Empty by default. |
| <Link id="m-initializeasserver" /><code>{"virtual void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: called once when the server sets up the entity, whether freshly spawned or loaded from a save, with its `SpawnData`. Empty by default. |
| <Link id="m-onconnected" /><code>{"virtual void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: called when the entity is sent to a player, so you can send that player any extra state. Empty by default. |
| <Link id="m-ondisconnected" /><code>{"virtual void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: called when the entity stops being synced to a player. Empty by default. |
