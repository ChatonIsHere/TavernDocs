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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`HeatModel<ForgedPoint, TB, TA>`](/mod/game-api/types/alta-crafting/heatmodel-tg-tb-ta), [`ISpawnArguments`](/mod/game-api/types/alta-utilities/ispawnarguments), [`IAffectCrafting`](/mod/game-api/types/alta-crafting/iaffectcrafting)
- **Derived types** [`ForgedModel`](/mod/game-api/types/alta-crafting/forgedmodel)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ForgedModel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coldeffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" coldEffect"}</code> | <span className="api-desc">Impact effect for hitting the piece while it is too cold.</span> |
| <Link id="m-distancedistribution" /><code>{"private float distanceDistribution"}</code> | <span className="api-desc">Falloff distance for how a hit's damage spreads to forged points further from the impact.</span> |
| <Link id="m-doneeffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" doneEffect"}</code> | <span className="api-desc">Impact effect when most of the hit lands on points that are already finished.</span> |
| <Link id="m-durabilitymodule" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" durabilityModule"}</code> | <span className="api-desc">Durability module on the item; disabled until the piece is complete.</span> |
| <Link id="m-enableoncomplete" /><code>{"private GameObject[] enableOnComplete"}</code> | <span className="api-desc">Objects that are hidden at start and shown once forging is complete.</span> |
| <Link id="m-forgedpointcollection" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/forgedpointcollection">{"ForgedPointCollection"}</Link>{" forgedPointCollection"}</code> | <span className="api-desc">Syncs the forged points' progress to clients.</span> |
| <Link id="m-forgedpoints" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> forgedPoints"}</code> | <span className="api-desc">Backing field for `ForgedPoints`: the points that must each reach full progress.</span> |
| <Link id="m-hasdurabilitymodule" /><code>{"private bool hasDurabilityModule"}</code> | <span className="api-desc">Cached flag for whether a durability module was found (client only).</span> |
| <Link id="m-hoteffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" hotEffect"}</code> | <span className="api-desc">Impact effect for a normal hit on hot, unfinished metal.</span> |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> | <span className="api-desc">The parent `ImpactDetector` whose hits drive forging.</span> |
| <Link id="m-isfirsteffectplayed" /><code>{"private bool isFirstEffectPlayed"}</code> | <span className="api-desc">Client: whether the first done-impact effect has played.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-modified" /><code>{"private static List<Mesh> modified"}</code> | <span className="api-desc">Static list of meshes; not used in this file.</span> |
| <Link id="m-oncompleted" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onCompleted"}</code> | <span className="api-desc">Event fired when the piece becomes complete.</span> |
| <Link id="m-physicalmaterialpart" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" physicalMaterialPart"}</code> | <span className="api-desc">Parent `PhysicalMaterialPart` whose material changes are tracked.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Parent `Pickup`, used to find the last player who held it for experience and events.</span> |
| <Link id="m-provideexperience" /><code>{"private bool provideExperience"}</code> | <span className="api-desc">Whether hits on this piece grant forging experience.</span> |
| <Link id="m-synccomplete" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncComplete"}</code> | <span className="api-desc">Network message used to tell clients the piece is complete.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forgedpointcollection-2" /><code><Link to="/mod/game-api/types/alta-crafting/forgedpointcollection">{"ForgedPointCollection"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/forgedpointcollection">{"ForgedPointCollection"}</Link>{" { get; }"}</code> | <span className="api-desc">Syncs the forged points' state.</span> |
| <Link id="m-forgedpoints-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> ForgedPoints { get; }"}</code> | <span className="api-desc">The points that take hammer hits.</span> |
| <Link id="m-impactdetector-2" /><code><Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" { get; }"}</code> | <span className="api-desc">The impact detector whose hits shape the piece.</span> |
| <Link id="m-isdone" /><code>{"bool IsDone { get; private set; }"}</code> | <span className="api-desc">True once the piece is complete. Only done pieces stack with done pieces.</span> |
| <Link id="m-mesheffect" /><code><Link to="/mod/game-api/types/global-p/pooledparticlesystemmeshemision">{"PooledParticleSystemMeshEmision"}</Link>{" MeshEffect { get; set; }"}</code> | <span className="api-desc">The particle effect playing over the mesh after completion, if any.</span> |
| <Link id="m-meshfilter" /><code>{"MeshFilter MeshFilter { get; }"}</code> | <span className="api-desc">The piece's mesh filter.</span> |
| <Link id="m-physicalmaterial" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The piece's metal. Sets how much each hit does and which effects play.</span> |
| <Link id="m-defaultgreen" /><code>{"protected override float DefaultGreen { get; }"}</code> | <span className="api-desc">0: starting value for the colour model's green channel.</span> |
| <Link id="m-greenpoints" /><code>{"protected override List<"}<Link to="/mod/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> GreenPoints { get; }"}</code> | <span className="api-desc">The forged points, used for the colour model.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcecomplete" /><code>{"void ForceComplete(bool isPlayingEffects)"}</code> | <span className="api-desc">Sets every point's progress to full and completes the piece. Also used by the `forged` spawn argument.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up completion sync, and keeps durability and on-complete objects off until done.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: completes the piece straight away if all points are already done.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Tells a newly connected player the piece is complete, if it is.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Hooks material changes, durability visuals and hits.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Editor: finds the durability module if it's missing.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkarguments" /><code>{"private void Alta.Utilities.ISpawnArguments.CheckArguments(string[] arguments)"}</code> | <span className="api-desc">Spawn argument hook: the argument `forged` makes the item spawn already complete.</span> |
| <Link id="m-checkcomplete" /><code>{"private void CheckComplete(bool isPlayingEffects)"}</code> | <span className="api-desc">Calls `SetComplete` once every forged point has reached full progress.</span> |
| <Link id="m-forceactive" /><code>{"private void Alta.Crafting.IAffectCrafting.ForceActive()"}</code> | <span className="api-desc">Crafting hook: forces the item complete without effects.</span> |
| <Link id="m-handlehit" /><code>{"private void HandleHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Impact handler: spreads hit damage over nearby forged points; on the server also adds heat, grants forging experience and checks for completion.</span> |
| <Link id="m-handlesetcompleteevents" /><code>{"private void HandleSetCompleteEvents(bool isPlayingEffects)"}</code> | <span className="api-desc">Server: syncs completion to clients and broadcasts an `ItemForgedEvent` for the last player who held it.</span> |
| <Link id="m-isactive" /><code>{"private bool Alta.Crafting.IAffectCrafting.IsActive()"}</code> | <span className="api-desc">Crafting hook: true once the item is done.</span> |
| <Link id="m-mesheffectreleased" /><code>{"private void MeshEffectReleased("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled)"}</code> | <span className="api-desc">Clears `MeshEffect` when the pooled mesh particle effect is released.</span> |
| <Link id="m-processforgedevent" /><code>{"private static void ProcessForgedEvent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, uint hash)"}</code> | <span className="api-desc">Broadcasts an `ItemForgedEvent` on the township event bus (server or local test only).</span> |
| <Link id="m-setcomplete" /><code>{"private void SetComplete(bool isPlayingEffects)"}</code> | <span className="api-desc">Marks the item done, enables the complete objects, fires `onCompleted`, turns on durability and, on clients, swaps materials and plays the done effect.</span> |
| <Link id="m-synccomplete-2" /><code>{"private void SyncComplete("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isPlayingEffects)"}</code> | <span className="api-desc">Network handler: reads the completion message and calls `SetComplete` on remote clients.</span> |
| <Link id="m-updatedurabilitystage" /><code>{"private void UpdateDurabilityStage("}<Link to="/mod/game-api/types/global-c-d/durabilitymodule-durabilityvisual">{"DurabilityModule.DurabilityVisual"}</Link>{" durabilityStage)"}</code> | <span className="api-desc">Client: switches the mesh used for heat colouring when the durability visual stage changes.</span> |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/mod/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel)"}</code> | <span className="api-desc">Handles a material change from the `PhysicalMaterialPart`: on clients updates atlased mesh and materials, then stores the material.</span> |

</details>
