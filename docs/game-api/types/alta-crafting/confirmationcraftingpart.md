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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`CraftingPart`](/game-api/types/alta-crafting/craftingpart), [`INailable`](/game-api/types/alta-crafting/inailable)
- **Nested types** [`ClientSideNailHitSync`](/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConfirmationCraftingPart()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nails" /><code>{"private "}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{"[] nails"}</code> | The nails spawned for the current attempt, or null. |
| <Link id="m-nailsettings" /><code>{"private "}<Link to="/game-api/types/alta-crafting/nailsettings">{"NailSettings"}</Link>{" nailSettings"}</code> | Nail layout, time limit and damage rules for this part. |
| <Link id="m-playtimeendingsound" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" playTimeEndingSound"}</code> | Timer for the time-running-out sound. |
| <Link id="m-popoutentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" popoutEntry"}</code> | Server timer that pops the part out when nailing time runs out. |
| <Link id="m-syncattemptcraft" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncAttemptCraft"}</code> | Message sync for `SyncAttemptCraft`. |
| <Link id="m-syncclientnailhit" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync">{"ConfirmationCraftingPart.ClientSideNailHitSync"}</Link>{"> syncClientNailHit"}</code> | Message sync for `SyncClientNailHit`. |
| <Link id="m-synccompletedeffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCompletedEffect"}</code> | Message sync for `OnCompleteEffect`. |
| <Link id="m-syncnail" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncNail"}</code> | Message sync for `SyncNail`. |
| <Link id="m-syncpopout" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPopout"}</code> | Message sync for `SyncPopout`. |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> | Message sync for `SyncSetup`. |
| <Link id="m-targetslot" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" targetSlot"}</code> | The slot being nailed into. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptcraft" /><code>{"override void AttemptCraft("}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" slot)"}</code> | Starts nailing into the slot and tells other players. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the network syncs for setup, nailing, nail hits, pop-out and the done effect. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current nailing state to a joining player. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Clears nailing when crafted or destroyed. |

<details>
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Cancels the pop-out timer, releases the nails and frees the target slot. |
| <Link id="m-craftclear" /><code>{"private void CraftClear("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart, bool isLoad)"}</code> | Handler for `OnCrafted`: clears nailing state. |
| <Link id="m-destroyclear" /><code>{"private void DestroyClear("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Handler for the entity being destroyed: clears nailing state. |
| <Link id="m-hasoverflow" /><code>{"private bool Alta.Crafting.INailable.HasOverflow("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Always false; nails on this part can't be over-hit. |
| <Link id="m-interactionpopout" /><code>{"private void InteractionPopout("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Server: pops the part out when either piece is grabbed during nailing. |
| <Link id="m-oncomplete" /><code>{"private void Alta.Crafting.INailable.OnComplete("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, bool hasEffects)"}</code> | When every nail is done, plays the done effect and finishes the craft into the slot. |
| <Link id="m-oncompleteeffect" /><code>{"private void OnCompleteEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network message that plays the piece-completed effect on clients. |
| <Link id="m-playtimeendingsound-2" /><code>{"private void PlayTimeEndingSound()"}</code> | Client: plays the warning sound shortly before nailing time runs out. |
| <Link id="m-popout" /><code>{"private void Popout()"}</code> | Cancels nailing, turns physics back on and unparents the part. The server tells clients. |
| <Link id="m-receivehit" /><code>{"private void Alta.Crafting.INailable.ReceiveHit("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage)"}</code> | Applies a hammer hit to a nail and syncs that nail. |
| <Link id="m-setupnailing" /><code>{"private void SetupNailing("}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" slot)"}</code> | Aligns the part to the slot, spawns its nails and starts the timers. With no nails it crafts at once. |
| <Link id="m-syncattemptcraft-2" /><code>{"private void SyncAttemptCraft("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint slotIdentifier)"}</code> | Network message for starting nailing into a slot; the server relays it to other players. |
| <Link id="m-syncclientnailhit-2" /><code>{"private void SyncClientNailHit("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync">{"ConfirmationCraftingPart.ClientSideNailHitSync"}</Link>{" arguments)"}</code> | Network message for a client's nail hit; the server works out the damage and applies it. |
| <Link id="m-synchit" /><code>{"private void Alta.Crafting.INailable.SyncHit("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> | Sends a client's nail hit to the server. |
| <Link id="m-syncnail-2" /><code>{"private void SyncNail("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int nailIndex)"}</code> | Network message for one nail's state. |
| <Link id="m-syncpopout-2" /><code>{"private void SyncPopout("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network message that pops the part out on remote clients. |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Full sync for joining players: the target slot and every nail's state. |

</details>
