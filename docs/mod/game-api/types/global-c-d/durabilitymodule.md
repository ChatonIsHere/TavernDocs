---
title: "DurabilityModule"
description: "Wears a tool or weapon down with each hit, swaps its damage stage visuals and breaks it at zero."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilityModule

A **class** in `Root.Township`, the global namespace.

Wears a tool or weapon down with each hit, swaps its damage stage visuals and breaks it at zero. Wear is worked out on the server; clients get the stage. Get it with `pickup.DurabilityModule`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<DurabilityModuleSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<DurabilityModuleSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IEntityReplaceHandler`](/mod/game-api/types/alta-networking/ientityreplacehandler), [`IReferenceRenderer`](/mod/game-api/types/global-i-l/ireferencerenderer), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`DurabilityModuleSaveData`](/mod/game-api/types/global-c-d/durabilitymodulesavedata)
- **Nested types** [`DurabilityVisual`](/mod/game-api/types/global-c-d/durabilitymodule-durabilityvisual)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilityModule()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-brokeonserver" /><code><Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" brokeOnServer"}</code> | <span className="api-desc">Event raised on the server when the item breaks.</span> |

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attachedmodules" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{"> attachedModules"}</code> | <span className="api-desc">Modules attached to this one; their durability adds to this one's and damage is shared with them.</span> |
| <Link id="m-basedurability" /><code>{"private float baseDurability"}</code> | <span className="api-desc">Starting durability from the settings, scaled by the physical material.</span> |
| <Link id="m-candockwhendamaged" /><code>{"private bool canDockWhenDamaged"}</code> | <span className="api-desc">Lets damaged stackables dock, but only with items at the same stage.</span> |
| <Link id="m-currentdurability" /><code>{"private float currentDurability"}</code> | <span className="api-desc">Remaining durability; damage is divided by this to get the integrity loss.</span> |
| <Link id="m-durabilitysettings" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durabilitysettings">{"DurabilitySettings"}</Link>{" durabilitySettings"}</code> | <span className="api-desc">The durability settings asset: durability, damage conversion and chance-based mode.</span> |
| <Link id="m-integrity" /><code>{"private float integrity"}</code> | <span className="api-desc">Health of the item from 0 to 1; saved, and the pickup breaks at 0. Backing field for `Integrity`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-overridestatechangesound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" overrideStateChangeSound"}</code> | <span className="api-desc">Sound to play on a stage change instead of the global default.</span> |
| <Link id="m-stagescount" /><code>{"private int stagesCount"}</code> | <span className="api-desc">Number of stage visuals.</span> |
| <Link id="m-stagevisuals" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durabilitymodule-durabilityvisual">{"DurabilityModule.DurabilityVisual"}</Link>{"[] stageVisuals"}</code> | <span className="api-desc">Renderer sets for each damage stage with the integrity threshold for each.</span> |
| <Link id="m-statechangeeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupevent">{"PickupEvent"}</Link>{" stateChangeEffect"}</code> | <span className="api-desc">Pickup event invoked on a stage change, client side.</span> |
| <Link id="m-syncstage" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncStage"}</code> | <span className="api-desc">Method sync that sends the current stage to players.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attachedto" /><code><Link to="/mod/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" AttachedTo { get; private set; }"}</code> | <span className="api-desc">The module this one is attached to, or null.</span> |
| <Link id="m-currentstage" /><code>{"int CurrentStage { get; private set; }"}</code> | <span className="api-desc">Index of the damage stage shown.</span> |
| <Link id="m-integrity-2" /><code>{"float Integrity { get; }"}</code> | <span className="api-desc">How intact the item is, from 1 (new) to 0 (broken). This is what saves.</span> |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The entity's pickup.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-ientityreplacehandler-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Alta.Networking.IEntityReplaceHandler.Entity { get; }"}</code> | <span className="api-desc">The entity this module is on.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onchangedstage" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-c-d/durabilitymodule-durabilityvisual">{"DurabilityModule.DurabilityVisual"}</Link>{"> OnChangedStage"}</code> | <span className="api-desc">Raised when the damage stage changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-affectdurability" /><code>{"void AffectDurability(float damage)"}</code> | <span className="api-desc">Server: applies wear from a hit, passing it to the item this is attached to if any, then updates the stage or breaks.</span> |
| <Link id="m-attachto" /><code>{"void AttachTo("}<Link to="/mod/game-api/types/global-c-d/durabilitymodule">{"DurabilityModule"}</Link>{" to)"}</code> | <span className="api-desc">Joins this module's durability onto another (a crafted part joining the whole).</span> |
| <Link id="m-checkbreak" /><code>{"bool CheckBreak()"}</code> | <span className="api-desc">Breaks the pickup if integrity is 0 or less, raising `brokeOnServer` on the server. Returns whether it broke.</span> |
| <Link id="m-detach" /><code>{"void Detach()"}</code> | <span className="api-desc">Splits this module's durability back out and checks if the other breaks.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the stage sync message.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: listens for durability hits from the pickup and sets the starting stage.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the current stage to a joining player.</span> |
| <Link id="m-updatematerial" /><code>{"void UpdateMaterial("}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" physicalMaterial)"}</code> | <span className="api-desc">Scales the base durability by a material's multiplier. Has no effect on wear in this build.</span> |

<details className="api-private">
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatestatechange" /><code>{"private void AnimateStateChange(int stage)"}</code> | <span className="api-desc">Client: plays the stage change sound (override or global default) and the stage change effect.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Loads durability from the settings, resets visuals and hooks the dock filter and break effect where needed.</span> |
| <Link id="m-ondurabilitychanged" /><code>{"private void OnDurabilityChanged(bool hasEffects = true)"}</code> | <span className="api-desc">Breaks the pickup if integrity is gone, otherwise moves to the stage that matches the new integrity.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: drops missing renderers from every stage visual.</span> |
| <Link id="m-reevaluateremainingdurabilityfromintegrity" /><code>{"private void ReevaluateRemainingDurabilityFromIntegrity()"}</code> | <span className="api-desc">Recomputes remaining durability from integrity plus attached modules. Not called anywhere in this build.</span> |
| <Link id="m-removeintegrity" /><code>{"private void RemoveIntegrity(float amount)"}</code> | <span className="api-desc">Scales integrity and remaining durability down by the given fraction.</span> |
| <Link id="m-replacedwith" /><code>{"private void Alta.Networking.IEntityReplaceHandler.ReplacedWith("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/replaceavoidflags">{"ReplaceAvoidFlags"}</Link>{" replaceFlags)"}</code> | <span className="api-desc">Copies a damaged module's integrity onto the replacement entity and updates its stage without effects.</span> |
| <Link id="m-resetvisuals" /><code>{"private void ResetVisuals()"}</code> | <span className="api-desc">Shows stage 0's renderers and hides every other stage.</span> |
| <Link id="m-setstage" /><code>{"private void SetStage(int stage, bool hasEffects = true)"}</code> | <span className="api-desc">Switches the visible stage, syncs it to chunks on the server, raises `OnChangedStage` and plays effects on clients.</span> |
| <Link id="m-setupeffect" /><code>{"private void SetupEffect("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" effect)"}</code> | <span className="api-desc">Gives the break effect the mesh of the current stage.</span> |
| <Link id="m-stagestackfilter" /><code>{"private void StageStackFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | <span className="api-desc">Dock filter for stackable items: stops damaged items stacking, or stacking with a different stage when `canDockWhenDamaged` is set.</span> |
| <Link id="m-syncstage-2" /><code>{"private void SyncStage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasEffects)"}</code> | <span className="api-desc">Network handler for the stage message; clients apply the received stage.</span> |
| <Link id="m-updaterenderers" /><code>{"private void IReferenceRenderer.UpdateRenderers(Renderer[] oldFirstRenderers, Renderer[] newFirstRenderers)"}</code> | <span className="api-desc">Swaps renderer references in every stage visual when renderers are replaced, for example by atlasing.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DurabilityModule`:

<div className="api-used-in">

[`ForgedModel<TB, TA>.durabilityModule`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-durabilitymodule), [`CraftingPart.durabilityModule`](/mod/game-api/types/alta-crafting/craftingpart#m-durabilitymodule), [`DurabilityModule.DurabilityVisual.SetEnable`](/mod/game-api/types/global-c-d/durabilitymodule-durabilityvisual#m-setenable), [`PhysicalMaterialPart.durabilityModule`](/mod/game-api/types/global-p/physicalmaterialpart#m-durabilitymodule), [`Pickup.durabilityModule`](/mod/game-api/types/global-p/pickup#m-durabilitymodule), [`Pickup.DurabilityModule`](/mod/game-api/types/global-p/pickup#m-durabilitymodule-2).

</div>
