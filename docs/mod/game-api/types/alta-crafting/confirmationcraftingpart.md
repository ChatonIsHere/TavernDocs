---
title: "ConfirmationCraftingPart"
description: "A crafting part that has to be nailed in before it connects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConfirmationCraftingPart

A **class** in `Root.Township`, `Alta.Crafting`.

A crafting part that has to be nailed in before it connects. Attaching it starts a timed nailing step; if the nails aren't finished in time, or someone grabs it, it pops back out.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`CraftingPart`](/mod/game-api/types/alta-crafting/craftingpart), [`INailable`](/mod/game-api/types/alta-crafting/inailable)
- **Nested types** [`ClientSideNailHitSync`](/mod/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConfirmationCraftingPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nails" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{"[] nails"}</code> | <span className="api-desc">The nails spawned for the current attempt, or null.</span> |
| <Link id="m-nailsettings" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/nailsettings">{"NailSettings"}</Link>{" nailSettings"}</code> | <span className="api-desc">Nail layout, time limit and damage rules for this part.</span> |
| <Link id="m-playtimeendingsound" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" playTimeEndingSound"}</code> | <span className="api-desc">Timer for the time-running-out sound.</span> |
| <Link id="m-popoutentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" popoutEntry"}</code> | <span className="api-desc">Server timer that pops the part out when nailing time runs out.</span> |
| <Link id="m-syncattemptcraft" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncAttemptCraft"}</code> | <span className="api-desc">Message sync for `SyncAttemptCraft`.</span> |
| <Link id="m-syncclientnailhit" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync">{"ConfirmationCraftingPart.ClientSideNailHitSync"}</Link>{"> syncClientNailHit"}</code> | <span className="api-desc">Message sync for `SyncClientNailHit`.</span> |
| <Link id="m-synccompletedeffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCompletedEffect"}</code> | <span className="api-desc">Message sync for `OnCompleteEffect`.</span> |
| <Link id="m-syncnail" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncNail"}</code> | <span className="api-desc">Message sync for `SyncNail`.</span> |
| <Link id="m-syncpopout" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPopout"}</code> | <span className="api-desc">Message sync for `SyncPopout`.</span> |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | <span className="api-desc">Message sync for `SyncSetup`.</span> |
| <Link id="m-targetslot" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" targetSlot"}</code> | <span className="api-desc">The slot being nailed into.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptcraft" /><code>{"override void AttemptCraft("}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" slot)"}</code> | <span className="api-desc">Starts nailing into the slot and tells other players.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the network syncs for setup, nailing, nail hits, pop-out and the done effect.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current nailing state to a joining player.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Clears nailing when crafted or destroyed.</span> |

<details className="api-private">
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Cancels the pop-out timer, releases the nails and frees the target slot.</span> |
| <Link id="m-craftclear" /><code>{"private void CraftClear("}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart, bool isLoad)"}</code> | <span className="api-desc">Handler for `OnCrafted`: clears nailing state.</span> |
| <Link id="m-destroyclear" /><code>{"private void DestroyClear("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Handler for the entity being destroyed: clears nailing state.</span> |
| <Link id="m-hasoverflow" /><code>{"private bool Alta.Crafting.INailable.HasOverflow("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Always false; nails on this part can't be over-hit.</span> |
| <Link id="m-interactionpopout" /><code>{"private void InteractionPopout("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Server: pops the part out when either piece is grabbed during nailing.</span> |
| <Link id="m-oncomplete" /><code>{"private void Alta.Crafting.INailable.OnComplete("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, bool hasEffects)"}</code> | <span className="api-desc">When every nail is done, plays the done effect and finishes the craft into the slot.</span> |
| <Link id="m-oncompleteeffect" /><code>{"private void OnCompleteEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Network message that plays the piece-completed effect on clients.</span> |
| <Link id="m-playtimeendingsound-2" /><code>{"private void PlayTimeEndingSound()"}</code> | <span className="api-desc">Client: plays the warning sound shortly before nailing time runs out.</span> |
| <Link id="m-popout" /><code>{"private void Popout()"}</code> | <span className="api-desc">Cancels nailing, turns physics back on and unparents the part. The server tells clients.</span> |
| <Link id="m-receivehit" /><code>{"private void Alta.Crafting.INailable.ReceiveHit("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage)"}</code> | <span className="api-desc">Applies a hammer hit to a nail and syncs that nail.</span> |
| <Link id="m-setupnailing" /><code>{"private void SetupNailing("}<Link to="/mod/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" slot)"}</code> | <span className="api-desc">Aligns the part to the slot, spawns its nails and starts the timers. With no nails it crafts at once.</span> |
| <Link id="m-syncattemptcraft-2" /><code>{"private void SyncAttemptCraft("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint slotIdentifier)"}</code> | <span className="api-desc">Network message for starting nailing into a slot; the server relays it to other players.</span> |
| <Link id="m-syncclientnailhit-2" /><code>{"private void SyncClientNailHit("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync">{"ConfirmationCraftingPart.ClientSideNailHitSync"}</Link>{" arguments)"}</code> | <span className="api-desc">Network message for a client's nail hit; the server works out the damage and applies it.</span> |
| <Link id="m-synchit" /><code>{"private void Alta.Crafting.INailable.SyncHit("}<Link to="/mod/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | <span className="api-desc">Sends a client's nail hit to the server.</span> |
| <Link id="m-syncnail-2" /><code>{"private void SyncNail("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int nailIndex)"}</code> | <span className="api-desc">Network message for one nail's state.</span> |
| <Link id="m-syncpopout-2" /><code>{"private void SyncPopout("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Network message that pops the part out on remote clients.</span> |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Full sync for joining players: the target slot and every nail's state.</span> |

</details>
