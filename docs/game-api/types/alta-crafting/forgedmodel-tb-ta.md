---
title: "ForgedModel<TB, TA>"
description: "A metal piece that's shaped by hammering."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForgedModel&lt;TB, TA&gt;

An **abstract class** in `Root.Township`, `Alta.Blacksmithing`.

A metal piece that's shaped by hammering. Each hit on its forged points adds progress (and heat on the server); when every point is done the piece is complete, gives forging XP along the way and raises an item forged event.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HeatModel<ForgedPoint, TB, TA>`](/game-api/types/alta-crafting/heatmodel-tg-tb-ta), [`ISpawnArguments`](/game-api/types/alta-utilities/ispawnarguments), [`IAffectCrafting`](/game-api/types/alta-crafting/iaffectcrafting)
- **Derived types** [`ForgedModel`](/game-api/types/alta-crafting/forgedmodel)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ForgedModel()"}</code> |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coldeffect" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" coldEffect"}</code> | Impact effect for hitting the piece while it is too cold. |
| <Link id="m-distancedistribution" /><code>{"private float distanceDistribution"}</code> | Falloff distance for how a hit's damage spreads to forged points further from the impact. |
| <Link id="m-doneeffect" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" doneEffect"}</code> | Impact effect when most of the hit lands on points that are already finished. |
| <Link id="m-durabilitymodule" /><code>{"private "}<Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" durabilityModule"}</code> | Durability module on the item; disabled until the piece is complete. |
| <Link id="m-enableoncomplete" /><code>{"private GameObject[] enableOnComplete"}</code> | Objects that are hidden at start and shown once forging is complete. |
| <Link id="m-forgedpointcollection" /><code>{"private "}<Link to="/game-api/types/alta-crafting/forgedpointcollection">{"ForgedPointCollection"}</Link>{" forgedPointCollection"}</code> | Syncs the forged points' progress to clients. |
| <Link id="m-forgedpoints" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> forgedPoints"}</code> | Backing field for `ForgedPoints`: the points that must each reach full progress. |
| <Link id="m-hasdurabilitymodule" /><code>{"private bool hasDurabilityModule"}</code> | Cached flag for whether a durability module was found (client only). |
| <Link id="m-hoteffect" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" hotEffect"}</code> | Impact effect for a normal hit on hot, unfinished metal. |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | The parent `ImpactDetector` whose hits drive forging. |
| <Link id="m-isfirsteffectplayed" /><code>{"private bool isFirstEffectPlayed"}</code> | Client: whether the first done-impact effect has played. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-modified" /><code>{"private static List<Mesh> modified"}</code> | Static list of meshes; not used in this file. |
| <Link id="m-oncompleted" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onCompleted"}</code> | Event fired when the piece becomes complete. |
| <Link id="m-physicalmaterialpart" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" physicalMaterialPart"}</code> | Parent `PhysicalMaterialPart` whose material changes are tracked. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Parent `Pickup`, used to find the last player who held it for experience and events. |
| <Link id="m-provideexperience" /><code>{"private bool provideExperience"}</code> | Whether hits on this piece grant forging experience. |
| <Link id="m-synccomplete" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncComplete"}</code> | Network message used to tell clients the piece is complete. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forgedpointcollection-2" /><code><Link to="/game-api/types/alta-crafting/forgedpointcollection">{"ForgedPointCollection"}</Link>{" "}<Link to="/game-api/types/alta-crafting/forgedpointcollection">{"ForgedPointCollection"}</Link>{" { get; }"}</code> | Syncs the forged points' state. |
| <Link id="m-forgedpoints-2" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> ForgedPoints { get; }"}</code> | The points that take hammer hits. |
| <Link id="m-impactdetector-2" /><code><Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" { get; }"}</code> | The impact detector whose hits shape the piece. |
| <Link id="m-isdone" /><code>{"bool IsDone { get; private set; }"}</code> | True once the piece is complete. Only done pieces stack with done pieces. |
| <Link id="m-mesheffect" /><code><Link to="/game-api/types/global-p/pooledparticlesystemmeshemision">{"PooledParticleSystemMeshEmision"}</Link>{" MeshEffect { get; set; }"}</code> | The particle effect playing over the mesh after completion, if any. |
| <Link id="m-meshfilter" /><code>{"MeshFilter MeshFilter { get; }"}</code> | The piece's mesh filter. |
| <Link id="m-physicalmaterial" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; set; }"}</code> | The piece's metal. Sets how much each hit does and which effects play. |
| <Link id="m-defaultgreen" /><code>{"protected override float DefaultGreen { get; }"}</code> | 0: starting value for the colour model's green channel. |
| <Link id="m-greenpoints" /><code>{"protected override List<"}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> GreenPoints { get; }"}</code> | The forged points, used for the colour model. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcecomplete" /><code>{"void ForceComplete(bool isPlayingEffects)"}</code> | Sets every point's progress to full and completes the piece. Also used by the `forged` spawn argument. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up completion sync, and keeps durability and on-complete objects off until done. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: completes the piece straight away if all points are already done. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Tells a newly connected player the piece is complete, if it is. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Hooks material changes, durability visuals and hits. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Editor: finds the durability module if it's missing. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkarguments" /><code>{"private void Alta.Utilities.ISpawnArguments.CheckArguments(string[] arguments)"}</code> | Spawn argument hook: the argument `forged` makes the item spawn already complete. |
| <Link id="m-checkcomplete" /><code>{"private void CheckComplete(bool isPlayingEffects)"}</code> | Calls `SetComplete` once every forged point has reached full progress. |
| <Link id="m-forceactive" /><code>{"private void Alta.Crafting.IAffectCrafting.ForceActive()"}</code> | Crafting hook: forces the item complete without effects. |
| <Link id="m-handlehit" /><code>{"private void HandleHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Impact handler: spreads hit damage over nearby forged points; on the server also adds heat, grants forging experience and checks for completion. |
| <Link id="m-handlesetcompleteevents" /><code>{"private void HandleSetCompleteEvents(bool isPlayingEffects)"}</code> | Server: syncs completion to clients and broadcasts an `ItemForgedEvent` for the last player who held it. |
| <Link id="m-isactive" /><code>{"private bool Alta.Crafting.IAffectCrafting.IsActive()"}</code> | Crafting hook: true once the item is done. |
| <Link id="m-mesheffectreleased" /><code>{"private void MeshEffectReleased("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled)"}</code> | Clears `MeshEffect` when the pooled mesh particle effect is released. |
| <Link id="m-processforgedevent" /><code>{"private static void ProcessForgedEvent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, uint hash)"}</code> | Broadcasts an `ItemForgedEvent` on the township event bus (server or local test only). |
| <Link id="m-setcomplete" /><code>{"private void SetComplete(bool isPlayingEffects)"}</code> | Marks the item done, enables the complete objects, fires `onCompleted`, turns on durability and, on clients, swaps materials and plays the done effect. |
| <Link id="m-synccomplete-2" /><code>{"private void SyncComplete("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isPlayingEffects)"}</code> | Network handler: reads the completion message and calls `SetComplete` on remote clients. |
| <Link id="m-updatedurabilitystage" /><code>{"private void UpdateDurabilityStage("}<Link to="/game-api/types/global-c-d/durabilitymodule-durabilityvisual">{"DurabilityModule.DurabilityVisual"}</Link>{" durabilityStage)"}</code> | Client: switches the mesh used for heat colouring when the durability visual stage changes. |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel)"}</code> | Handles a material change from the `PhysicalMaterialPart`: on clients updates atlased mesh and materials, then stores the material. |

</details>
