---
title: "DurabilityModule"
description: "Wears a tool or weapon down with each hit, swaps its damage stage visuals and breaks it at zero."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilityModule

A **class** in `Root.Township`, no namespace.

Wears a tool or weapon down with each hit, swaps its damage stage visuals and breaks it at zero. Wear is worked out on the server; clients get the stage. Get it with `pickup.DurabilityModule`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<DurabilityModuleSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<DurabilityModuleSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IEntityReplaceHandler`](/game-api/types/alta-networking/ientityreplacehandler), [`IReferenceRenderer`](/game-api/types/global-i-l/ireferencerenderer), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`DurabilityModuleSaveData`](/game-api/types/global-c-d/durabilitymodulesavedata)
- **Nested types** [`DurabilityVisual`](/game-api/types/global-c-d/durabilitymodule-durabilityvisual)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilityModule()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-brokeonserver" /><code><Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" brokeOnServer"}</code> | Event raised on the server when the item breaks. |
| <Link id="m-attachedmodules" /><code>{"private HashSet<"}<Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{"> attachedModules"}</code> |  |
| <Link id="m-basedurability" /><code>{"private float baseDurability"}</code> |  |
| <Link id="m-candockwhendamaged" /><code>{"private bool canDockWhenDamaged"}</code> |  |
| <Link id="m-currentdurability" /><code>{"private float currentDurability"}</code> |  |
| <Link id="m-durabilitysettings" /><code>{"private "}<Link to="/game-api/types/global-c-d/durabilitysettings">{"DurabilitySettings"}</Link>{" durabilitySettings"}</code> |  |
| <Link id="m-integrity" /><code>{"private float integrity"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-overridestatechangesound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" overrideStateChangeSound"}</code> |  |
| <Link id="m-stagescount" /><code>{"private int stagesCount"}</code> |  |
| <Link id="m-stagevisuals" /><code>{"private "}<Link to="/game-api/types/global-c-d/durabilitymodule-durabilityvisual">{"DurabilityModule.DurabilityVisual"}</Link>{"[] stageVisuals"}</code> |  |
| <Link id="m-statechangeeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" stateChangeEffect"}</code> |  |
| <Link id="m-syncstage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncStage"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attachedto" /><code><Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" AttachedTo { get; private set; }"}</code> | The module this one is attached to, or null. |
| <Link id="m-currentstage" /><code>{"int CurrentStage { get; private set; }"}</code> | Index of the damage stage shown. |
| <Link id="m-integrity-2" /><code>{"float Integrity { get; }"}</code> | How intact the item is, from 1 (new) to 0 (broken). This is what saves. |
| <Link id="m-pickup" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The entity's pickup. |
| <Link id="m-alta-networking-ientityreplacehandler-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Alta.Networking.IEntityReplaceHandler.Entity { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onchangedstage" /><code>{"event Action<"}<Link to="/game-api/types/global-c-d/durabilitymodule-durabilityvisual">{"DurabilityModule.DurabilityVisual"}</Link>{"> OnChangedStage"}</code> | Raised when the damage stage changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-affectdurability" /><code>{"void AffectDurability(float damage)"}</code> | Server: applies wear from a hit, passing it to the item this is attached to if any, then updates the stage or breaks. |
| <Link id="m-attachto" /><code>{"void AttachTo("}<Link to="/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" to)"}</code> | Joins this module's durability onto another (a crafted part joining the whole). |
| <Link id="m-checkbreak" /><code>{"bool CheckBreak()"}</code> | Breaks the pickup if integrity is 0 or less, raising `brokeOnServer` on the server. Returns whether it broke. |
| <Link id="m-detach" /><code>{"void Detach()"}</code> | Splits this module's durability back out and checks if the other breaks. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the stage sync message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: listens for durability hits from the pickup and sets the starting stage. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the current stage to a joining player. |
| <Link id="m-updatematerial" /><code>{"void UpdateMaterial("}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial)"}</code> | Scales the base durability by a material's multiplier. Has no effect on wear in this build. |
| <Link id="m-animatestatechange" /><code>{"private void AnimateStateChange(int stage)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-ondurabilitychanged" /><code>{"private void OnDurabilityChanged(bool hasEffects = true)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-reevaluateremainingdurabilityfromintegrity" /><code>{"private void ReevaluateRemainingDurabilityFromIntegrity()"}</code> |  |
| <Link id="m-removeintegrity" /><code>{"private void RemoveIntegrity(float amount)"}</code> |  |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceFlags)"}</code> |  |
| <Link id="m-resetvisuals" /><code>{"private void ResetVisuals()"}</code> |  |
| <Link id="m-setstage" /><code>{"private void SetStage(int stage, bool hasEffects = true)"}</code> |  |
| <Link id="m-setupeffect" /><code>{"private void SetupEffect("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" effect)"}</code> |  |
| <Link id="m-stagestackfilter" /><code>{"private void StageStackFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> |  |
| <Link id="m-syncstage-2" /><code>{"private void SyncStage("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffects)"}</code> |  |
| <Link id="m-updaterenderers" /><code>{"private void IReferenceRenderer.UpdateRenderers(Renderer[] oldFirstRenderers, Renderer[] newFirstRenderers)"}</code> |  |

## Used in

Members of other types that take, return or hold a `DurabilityModule`:

[`ForgedModel<TB, TA>.durabilityModule`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-durabilitymodule), [`CraftingPart.durabilityModule`](/game-api/types/alta-crafting/craftingpart#m-durabilitymodule), [`DurabilityModule.DurabilityVisual.SetEnable`](/game-api/types/global-c-d/durabilitymodule-durabilityvisual#m-setenable), [`PhysicalMaterialPart.durabilityModule`](/game-api/types/global-p/physicalmaterialpart#m-durabilitymodule), [`Pickup.durabilityModule`](/game-api/types/global-p/pickup#m-durabilitymodule), [`Pickup.DurabilityModule`](/game-api/types/global-p/pickup#m-durabilitymodule-2).
