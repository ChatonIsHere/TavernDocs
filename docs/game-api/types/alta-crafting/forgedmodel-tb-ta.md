---
title: "ForgedModel<TB, TA>"
description: "abstract class ForgedModel<TB, TA> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForgedModel&lt;TB, TA&gt;

An **abstract class** in `Root.Township`, `Alta.Blacksmithing`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HeatModel<ForgedPoint, TB, TA>`](/game-api/types/alta-crafting/heatmodel-tg-tb-ta), [`ISpawnArguments`](/game-api/types/alta-utilities/ispawnarguments), [`IAffectCrafting`](/game-api/types/alta-crafting/iaffectcrafting)
- **Derived types** [`ForgedModel`](/game-api/types/alta-crafting/forgedmodel)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ForgedModel()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-coldeffect" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" coldEffect"}</code> |  |
| <Link id="m-distancedistribution" /><code>{"private float distanceDistribution"}</code> |  |
| <Link id="m-doneeffect" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" doneEffect"}</code> |  |
| <Link id="m-durabilitymodule" /><code>{"private "}<Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" durabilityModule"}</code> |  |
| <Link id="m-enableoncomplete" /><code>{"private GameObject[] enableOnComplete"}</code> |  |
| <Link id="m-forgedpointcollection" /><code>{"private "}<Link to="/game-api/types/alta-crafting/forgedpointcollection">{"ForgedPointCollection"}</Link>{" forgedPointCollection"}</code> |  |
| <Link id="m-forgedpoints" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> forgedPoints"}</code> |  |
| <Link id="m-hasdurabilitymodule" /><code>{"private bool hasDurabilityModule"}</code> |  |
| <Link id="m-hoteffect" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetectorsettings">{"ImpactDetectorSettings"}</Link>{" hotEffect"}</code> |  |
| <Link id="m-impactdetector" /><code>{"private "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" impactDetector"}</code> |  |
| <Link id="m-isfirsteffectplayed" /><code>{"private bool isFirstEffectPlayed"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-modified" /><code>{"private static List<Mesh> modified"}</code> |  |
| <Link id="m-oncompleted" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onCompleted"}</code> |  |
| <Link id="m-physicalmaterialpart" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterialpart">{"PhysicalMaterialPart"}</Link>{" physicalMaterialPart"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-provideexperience" /><code>{"private bool provideExperience"}</code> |  |
| <Link id="m-synccomplete" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncComplete"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-forgedpointcollection-2" /><code><Link to="/game-api/types/alta-crafting/forgedpointcollection">{"ForgedPointCollection"}</Link>{" "}<Link to="/game-api/types/alta-crafting/forgedpointcollection">{"ForgedPointCollection"}</Link>{" { get; }"}</code> |  |
| <Link id="m-forgedpoints-2" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> ForgedPoints { get; }"}</code> |  |
| <Link id="m-impactdetector-2" /><code><Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" "}<Link to="/game-api/types/alta-items/impactdetector">{"ImpactDetector"}</Link>{" { get; }"}</code> |  |
| <Link id="m-isdone" /><code>{"bool IsDone { get; private set; }"}</code> |  |
| <Link id="m-mesheffect" /><code><Link to="/game-api/types/global-p/pooledparticlesystemmeshemision">{"PooledParticleSystemMeshEmision"}</Link>{" MeshEffect { get; set; }"}</code> |  |
| <Link id="m-meshfilter" /><code>{"MeshFilter MeshFilter { get; }"}</code> |  |
| <Link id="m-physicalmaterial" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-defaultgreen" /><code>{"protected override float DefaultGreen { get; }"}</code> |  |
| <Link id="m-greenpoints" /><code>{"protected override List<"}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> GreenPoints { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcecomplete" /><code>{"void ForceComplete(bool isPlayingEffects)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-checkarguments" /><code>{"private void Alta.Utilities.ISpawnArguments.CheckArguments(string[] arguments)"}</code> |  |
| <Link id="m-checkcomplete" /><code>{"private void CheckComplete(bool isPlayingEffects)"}</code> |  |
| <Link id="m-forceactive" /><code>{"private void Alta.Crafting.IAffectCrafting.ForceActive()"}</code> |  |
| <Link id="m-handlehit" /><code>{"private void HandleHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-handlesetcompleteevents" /><code>{"private void HandleSetCompleteEvents(bool isPlayingEffects)"}</code> |  |
| <Link id="m-isactive" /><code>{"private bool Alta.Crafting.IAffectCrafting.IsActive()"}</code> |  |
| <Link id="m-mesheffectreleased" /><code>{"private void MeshEffectReleased("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooled)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-processforgedevent" /><code>{"private static void ProcessForgedEvent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, uint hash)"}</code> |  |
| <Link id="m-setcomplete" /><code>{"private void SetComplete(bool isPlayingEffects)"}</code> |  |
| <Link id="m-synccomplete-2" /><code>{"private void SyncComplete("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isPlayingEffects)"}</code> |  |
| <Link id="m-updatedurabilitystage" /><code>{"private void UpdateDurabilityStage("}<Link to="/game-api/types/global-c-d/durabilitymodule-durabilityvisual">{"DurabilityModule.DurabilityVisual"}</Link>{" durabilityStage)"}</code> |  |
| <Link id="m-updatematerial" /><code>{"private void UpdateMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial, "}<Link to="/game-api/types/global-p/physicalmaterialchannel">{"PhysicalMaterialChannel"}</Link>{" materialChannel)"}</code> |  |
