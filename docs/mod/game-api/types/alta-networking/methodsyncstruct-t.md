---
title: "MethodSyncStruct<T>"
description: "A Sync for struct values that hands the read or write to a method you pass in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MethodSyncStruct&lt;T&gt;

A **class** in `Root.Township`, `Alta.Networking`.

A `Sync` for struct values that hands the read or write to a method you pass in. Optionally resets the value to a new struct before each read.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`Sync<T>`](/mod/game-api/types/alta-networking/sync-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MethodSyncStruct("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/mod/game-api/types/alta-networking/serializemethod-t">{"SerializeMethod"}</Link>{"<T> method, bool isAlwaysRecreating = false)"}</code> | <span className="api-desc">Creates a `MethodSyncStruct` from `entity`, `messageType`, `method` and `isAlwaysRecreating`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isalwaysrecreating" /><code>{"private bool isAlwaysRecreating"}</code> | <span className="api-desc">When true, the value is reset to a new `T` before each read.</span> |
| <Link id="m-method" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/serializemethod-t">{"SerializeMethod"}</Link>{"<T> method"}</code> | <span className="api-desc">The serialize method the message forwards to.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"override "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" Handler { get; }"}</code> | <span className="api-desc">The serialize method the sync system calls. It resets the value first when reading with `isAlwaysRecreating`, then calls your method with the current value.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forward" /><code>{"private void Forward("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Calls the stored method with the player, stream and current value; resets the value to default first when reading and `isAlwaysRecreating` is set.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MethodSyncStruct&lt;T>`:

<div className="api-used-in">

[`ActionItem.syncEffect`](/mod/game-api/types/global-a-b/actionitem#m-synceffect), [`PlayerEffectController.remoteTeleportEffect`](/mod/game-api/types/alta-stats-effects/playereffectcontroller#m-remoteteleporteffect), [`ForgedModel<TB, TA>.syncComplete`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-synccomplete), [`Recycler.syncOutputEffect`](/mod/game-api/types/alta-crafting/recycler#m-syncoutputeffect), [`RecyclerOutputSlot.Setup`](/mod/game-api/types/alta-crafting/recycleroutputslot#m-setup), [`RecyclerOutputSlot.syncMethod`](/mod/game-api/types/alta-crafting/recycleroutputslot#m-syncmethod), [`Smelter.syncEffects`](/mod/game-api/types/alta-crafting/smelter#m-synceffects), [`TimberBlock.syncPickup`](/mod/game-api/types/alta-crafting/timberblock#m-syncpickup), [`TimberBlock.syncPieceEffects`](/mod/game-api/types/alta-crafting/timberblock#m-syncpieceeffects), [`TimberBlock.syncStatus`](/mod/game-api/types/alta-crafting/timberblock#m-syncstatus), [`TimberBlockSpawner.syncRotation`](/mod/game-api/types/alta-crafting/timberblockspawner#m-syncrotation), [`CaveTeleporterManager.syncEffect`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-synceffect), [`CaveTeleporterManager.syncProxy`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-syncproxy), [`GenerationBase.clientSpawn`](/mod/game-api/types/alta-world-generation/generationbase#m-clientspawn), [`CaveLayerStreamer.syncLayerSetup`](/mod/game-api/types/alta-world/cavelayerstreamer#m-synclayersetup), [`PlayerEntitySync.syncLoaded`](/mod/game-api/types/alta-world/playerentitysync#m-syncloaded), [`Cookable.syncEffect`](/mod/game-api/types/alta-crafting/cookable#m-synceffect), [`StewManager.syncFadeOutIngredient`](/mod/game-api/types/alta-crafting/stewmanager#m-syncfadeoutingredient), [`ConfirmationCraftingPart.syncAttemptCraft`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncattemptcraft), [`ConfirmationCraftingPart.syncClientNailHit`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncclientnailhit), [`ConfirmationCraftingPart.syncNail`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncnail), [`CraftingPart.attemptCraft`](/mod/game-api/types/alta-crafting/craftingpart#m-attemptcraft), [`DecraftingComponent.syncDecraftingHit`](/mod/game-api/types/alta-crafting/decraftingcomponent#m-syncdecraftinghit), [`GenericCraftingStation.syncClientNailHit`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-syncclientnailhit), [`GenericCraftingStation.syncDestroyEffect`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-syncdestroyeffect), [`GenericCraftingStation.syncNailHit`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-syncnailhit), [`GenericCraftingStation.syncPiece`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-syncpiece), [`GenericCraftingStation.syncPieceGrab`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-syncpiecegrab), [`GenericCraftingStation.syncProjectStatus`](/mod/game-api/types/alta-crafting/genericcraftingstation#m-syncprojectstatus), [`JointSlot.syncInsert`](/mod/game-api/types/alta-crafting/jointslot#m-syncinsert), [`GrassManager.sync`](/mod/game-api/types/alta-world/grassmanager#m-sync), [`HitModifierEffect.syncHit`](/mod/game-api/types/alta-items/hitmodifiereffect#m-synchit), [`ImpactDetector.syncImpact`](/mod/game-api/types/alta-items/impactdetector#m-syncimpact), [`ImpactDetectorCentral.syncImpact`](/mod/game-api/types/alta-items/impactdetectorcentral#m-syncimpact), [`SparkSecondaryDetector.syncSpark`](/mod/game-api/types/alta-items/sparksecondarydetector#m-syncspark), [`Agent.syncEvent`](/mod/game-api/types/alta-intelligence/agent#m-syncevent), [`FireBug.syncDrag`](/mod/game-api/types/alta-intelligence/firebug#m-syncdrag), [`SeedSpray.syncBasicImpact`](/mod/game-api/types/alta-intelligence/seedspray#m-syncbasicimpact), [`Wyrm.syncGameObjects`](/mod/game-api/types/alta-intelligence/wyrm#m-syncgameobjects), [`PickupDocker.requestDock`](/mod/game-api/types/alta-items/pickupdocker#m-requestdock), [`RejectDockArea.syncEffect`](/mod/game-api/types/alta-items/rejectdockarea#m-synceffect), [`LiquidContainerLid.syncOpen`](/mod/game-api/types/alta-stats-effects/liquidcontainerlid#m-syncopen), [`MapManager.syncPieceDiscovery`](/mod/game-api/types/alta-world/mapmanager#m-syncpiecediscovery), [`PullAway.syncPull`](/mod/game-api/types/alta-items/pullaway#m-syncpull), [`ModifiableStaticManager.syncModification`](/mod/game-api/types/alta-networking/modifiablestaticmanager#m-syncmodification), [`NetworkColliderGroup.syncEnabled`](/mod/game-api/types/alta-networking/networkcollidergroup#m-syncenabled), [`NetworkColliderGroup.syncIgnore`](/mod/game-api/types/alta-networking/networkcollidergroup#m-syncignore), [`NetworkRotation.syncStatus`](/mod/game-api/types/alta-networking/networkrotation#m-syncstatus), [`Book.removePage`](/mod/game-api/types/alta-items/book#m-removepage), [`Book.serverFlipPage`](/mod/game-api/types/alta-items/book#m-serverflippage), [`Book.setHighlight`](/mod/game-api/types/alta-items/book#m-sethighlight), [`Book.setOpen`](/mod/game-api/types/alta-items/book#m-setopen), [`PositionRestrictor.resetLocation`](/mod/game-api/types/alta-items/positionrestrictor#m-resetlocation), [`PositionRestrictor.setHaptic`](/mod/game-api/types/alta-items/positionrestrictor#m-sethaptic), [`PositionRestrictor.syncItem`](/mod/game-api/types/alta-items/positionrestrictor#m-syncitem), [`DownedState.syncTimerIncreaseToDownedPlayer`](/mod/game-api/types/alta-player/downedstate#m-synctimerincreasetodownedplayer), [`PlayerStateBase.requestStateChange`](/mod/game-api/types/alta-player/playerstatebase#m-requeststatechange), [`PlayerStateManager.syncStateChange`](/mod/game-api/types/alta-player/playerstatemanager#m-syncstatechange), [`ActionItemsManager.syncSpawnedToClient`](/mod/game-api/types/alta-player/actionitemsmanager#m-syncspawnedtoclient), [`ActionItemsManager.syncSpawnRequestToServer`](/mod/game-api/types/alta-player/actionitemsmanager#m-syncspawnrequesttoserver) and 85 more.

</div>
