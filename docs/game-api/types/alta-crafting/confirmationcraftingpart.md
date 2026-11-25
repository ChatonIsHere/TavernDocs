---
title: "ConfirmationCraftingPart"
description: "A part whose join must be confirmed by nailing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConfirmationCraftingPart

A **class** in `Root.Township`, `Alta.Crafting`.

A part whose join must be confirmed by nailing.

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

| Member |
| --- |
| <Link id="m-nails" /><code>{"private "}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{"[] nails"}</code> |
| <Link id="m-nailsettings" /><code>{"private "}<Link to="/game-api/types/alta-crafting/nailsettings">{"NailSettings"}</Link>{" nailSettings"}</code> |
| <Link id="m-playtimeendingsound" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" playTimeEndingSound"}</code> |
| <Link id="m-popoutentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" popoutEntry"}</code> |
| <Link id="m-syncattemptcraft" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncAttemptCraft"}</code> |
| <Link id="m-syncclientnailhit" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync">{"ConfirmationCraftingPart.ClientSideNailHitSync"}</Link>{"> syncClientNailHit"}</code> |
| <Link id="m-synccompletedeffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncCompletedEffect"}</code> |
| <Link id="m-syncnail" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncNail"}</code> |
| <Link id="m-syncpopout" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPopout"}</code> |
| <Link id="m-syncsetup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncSetup"}</code> |
| <Link id="m-targetslot" /><code>{"private "}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" targetSlot"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-attemptcraft" /><code>{"override void AttemptCraft("}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" slot)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |

<details>
<summary>17 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |
| <Link id="m-craftclear" /><code>{"private void CraftClear("}<Link to="/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart, bool isLoad)"}</code> |
| <Link id="m-destroyclear" /><code>{"private void DestroyClear("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-hasoverflow" /><code>{"private bool Alta.Crafting.INailable.HasOverflow("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |
| <Link id="m-interactionpopout" /><code>{"private void InteractionPopout("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-oncomplete" /><code>{"private void Alta.Crafting.INailable.OnComplete("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, bool hasEffects)"}</code> |
| <Link id="m-oncompleteeffect" /><code>{"private void OnCompleteEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-playtimeendingsound-2" /><code>{"private void PlayTimeEndingSound()"}</code> |
| <Link id="m-popout" /><code>{"private void Popout()"}</code> |
| <Link id="m-receivehit" /><code>{"private void Alta.Crafting.INailable.ReceiveHit("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, Vector3 impactDirection, float impactDamage)"}</code> |
| <Link id="m-setupnailing" /><code>{"private void SetupNailing("}<Link to="/game-api/types/alta-crafting/jointslot">{"JointSlot"}</Link>{" slot)"}</code> |
| <Link id="m-syncattemptcraft-2" /><code>{"private void SyncAttemptCraft("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint slotIdentifier)"}</code> |
| <Link id="m-syncclientnailhit-2" /><code>{"private void SyncClientNailHit("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-crafting/confirmationcraftingpart-clientsidenailhitsync">{"ConfirmationCraftingPart.ClientSideNailHitSync"}</Link>{" arguments)"}</code> |
| <Link id="m-synchit" /><code>{"private void Alta.Crafting.INailable.SyncHit("}<Link to="/game-api/types/alta-crafting/genericcraftingnail">{"GenericCraftingNail"}</Link>{" nail, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hitWithTool)"}</code> |
| <Link id="m-syncnail-2" /><code>{"private void SyncNail("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int nailIndex)"}</code> |
| <Link id="m-syncpopout-2" /><code>{"private void SyncPopout("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-syncsetup-2" /><code>{"private void SyncSetup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>
