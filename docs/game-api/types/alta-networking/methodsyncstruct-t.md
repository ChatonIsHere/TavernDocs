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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`Sync<T>`](/game-api/types/alta-networking/sync-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MethodSyncStruct("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/game-api/types/alta-networking/serializemethod-t">{"SerializeMethod"}</Link>{"<T> method, bool isAlwaysRecreating = false)"}</code> | Creates a `MethodSyncStruct` from `entity`, `messageType`, `method` and `isAlwaysRecreating`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isalwaysrecreating" /><code>{"private bool isAlwaysRecreating"}</code> | When true, the value is reset to a new `T` before each read. |
| <Link id="m-method" /><code>{"private "}<Link to="/game-api/types/alta-networking/serializemethod-t">{"SerializeMethod"}</Link>{"<T> method"}</code> | The serialize method the message forwards to. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"override "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" Handler { get; }"}</code> | The serialize method the sync system calls. It resets the value first when reading with `isAlwaysRecreating`, then calls your method with the current value. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forward" /><code>{"private void Forward("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Calls the stored method with the player, stream and current value; resets the value to default first when reading and `isAlwaysRecreating` is set. |

</details>

## Used in

Members of other types that take, return or hold a `MethodSyncStruct&lt;T>`:

[`ActionItem.syncEffect`](/game-api/types/global-a-b/actionitem#m-synceffect), [`PlayerEffectController.remoteTeleportEffect`](/game-api/types/alta-stats-effects/playereffectcontroller#m-remoteteleporteffect), [`ForgedModel<TB, TA>.syncComplete`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-synccomplete), [`Recycler.syncOutputEffect`](/game-api/types/alta-crafting/recycler#m-syncoutputeffect), [`RecyclerOutputSlot.Setup`](/game-api/types/alta-crafting/recycleroutputslot#m-setup), [`RecyclerOutputSlot.syncMethod`](/game-api/types/alta-crafting/recycleroutputslot#m-syncmethod), [`Smelter.syncEffects`](/game-api/types/alta-crafting/smelter#m-synceffects), [`TimberBlock.syncPickup`](/game-api/types/alta-crafting/timberblock#m-syncpickup), [`TimberBlock.syncPieceEffects`](/game-api/types/alta-crafting/timberblock#m-syncpieceeffects), [`TimberBlock.syncStatus`](/game-api/types/alta-crafting/timberblock#m-syncstatus), [`TimberBlockSpawner.syncRotation`](/game-api/types/alta-crafting/timberblockspawner#m-syncrotation), [`CaveTeleporterManager.syncEffect`](/game-api/types/alta-world-generation/caveteleportermanager#m-synceffect), [`CaveTeleporterManager.syncProxy`](/game-api/types/alta-world-generation/caveteleportermanager#m-syncproxy), [`GenerationBase.clientSpawn`](/game-api/types/alta-world-generation/generationbase#m-clientspawn), [`CaveLayerStreamer.syncLayerSetup`](/game-api/types/alta-world/cavelayerstreamer#m-synclayersetup), [`PlayerEntitySync.syncLoaded`](/game-api/types/alta-world/playerentitysync#m-syncloaded), [`Cookable.syncEffect`](/game-api/types/alta-crafting/cookable#m-synceffect), [`StewManager.syncFadeOutIngredient`](/game-api/types/alta-crafting/stewmanager#m-syncfadeoutingredient), [`ConfirmationCraftingPart.syncAttemptCraft`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncattemptcraft), [`ConfirmationCraftingPart.syncClientNailHit`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncclientnailhit), [`ConfirmationCraftingPart.syncNail`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncnail), [`CraftingPart.attemptCraft`](/game-api/types/alta-crafting/craftingpart#m-attemptcraft), [`DecraftingComponent.syncDecraftingHit`](/game-api/types/alta-crafting/decraftingcomponent#m-syncdecraftinghit), [`GenericCraftingStation.syncClientNailHit`](/game-api/types/alta-crafting/genericcraftingstation#m-syncclientnailhit), [`GenericCraftingStation.syncDestroyEffect`](/game-api/types/alta-crafting/genericcraftingstation#m-syncdestroyeffect), [`GenericCraftingStation.syncNailHit`](/game-api/types/alta-crafting/genericcraftingstation#m-syncnailhit), [`GenericCraftingStation.syncPiece`](/game-api/types/alta-crafting/genericcraftingstation#m-syncpiece), [`GenericCraftingStation.syncPieceGrab`](/game-api/types/alta-crafting/genericcraftingstation#m-syncpiecegrab), [`GenericCraftingStation.syncProjectStatus`](/game-api/types/alta-crafting/genericcraftingstation#m-syncprojectstatus), [`JointSlot.syncInsert`](/game-api/types/alta-crafting/jointslot#m-syncinsert), [`GrassManager.sync`](/game-api/types/alta-world/grassmanager#m-sync), [`HitModifierEffect.syncHit`](/game-api/types/alta-items/hitmodifiereffect#m-synchit), [`ImpactDetector.syncImpact`](/game-api/types/alta-items/impactdetector#m-syncimpact), [`ImpactDetectorCentral.syncImpact`](/game-api/types/alta-items/impactdetectorcentral#m-syncimpact), [`SparkSecondaryDetector.syncSpark`](/game-api/types/alta-items/sparksecondarydetector#m-syncspark), [`Agent.syncEvent`](/game-api/types/alta-intelligence/agent#m-syncevent), [`FireBug.syncDrag`](/game-api/types/alta-intelligence/firebug#m-syncdrag), [`SeedSpray.syncBasicImpact`](/game-api/types/alta-intelligence/seedspray#m-syncbasicimpact), [`Wyrm.syncGameObjects`](/game-api/types/alta-intelligence/wyrm#m-syncgameobjects), [`PickupDocker.requestDock`](/game-api/types/alta-items/pickupdocker#m-requestdock), [`RejectDockArea.syncEffect`](/game-api/types/alta-items/rejectdockarea#m-synceffect), [`LiquidContainerLid.syncOpen`](/game-api/types/alta-stats-effects/liquidcontainerlid#m-syncopen), [`MapManager.syncPieceDiscovery`](/game-api/types/alta-world/mapmanager#m-syncpiecediscovery), [`PullAway.syncPull`](/game-api/types/alta-items/pullaway#m-syncpull), [`ModifiableStaticManager.syncModification`](/game-api/types/alta-networking/modifiablestaticmanager#m-syncmodification), [`NetworkColliderGroup.syncEnabled`](/game-api/types/alta-networking/networkcollidergroup#m-syncenabled), [`NetworkColliderGroup.syncIgnore`](/game-api/types/alta-networking/networkcollidergroup#m-syncignore), [`NetworkRotation.syncStatus`](/game-api/types/alta-networking/networkrotation#m-syncstatus), [`Book.removePage`](/game-api/types/alta-items/book#m-removepage), [`Book.serverFlipPage`](/game-api/types/alta-items/book#m-serverflippage), [`Book.setHighlight`](/game-api/types/alta-items/book#m-sethighlight), [`Book.setOpen`](/game-api/types/alta-items/book#m-setopen), [`PositionRestrictor.resetLocation`](/game-api/types/alta-items/positionrestrictor#m-resetlocation), [`PositionRestrictor.setHaptic`](/game-api/types/alta-items/positionrestrictor#m-sethaptic), [`PositionRestrictor.syncItem`](/game-api/types/alta-items/positionrestrictor#m-syncitem), [`DownedState.syncTimerIncreaseToDownedPlayer`](/game-api/types/alta-player/downedstate#m-synctimerincreasetodownedplayer), [`PlayerStateBase.requestStateChange`](/game-api/types/alta-player/playerstatebase#m-requeststatechange), [`PlayerStateManager.syncStateChange`](/game-api/types/alta-player/playerstatemanager#m-syncstatechange), [`ActionItemsManager.syncSpawnedToClient`](/game-api/types/alta-player/actionitemsmanager#m-syncspawnedtoclient), [`ActionItemsManager.syncSpawnRequestToServer`](/game-api/types/alta-player/actionitemsmanager#m-syncspawnrequesttoserver) and 85 more.
