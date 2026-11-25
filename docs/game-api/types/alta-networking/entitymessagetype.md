---
title: "EntityMessageType"
description: "Identifiers for messages sent through an entity's EntityMessageHandler."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityMessageType

An **enum** in `Root.Township`, `Alta.Networking`.

Identifiers for messages sent through an entity's `EntityMessageHandler`. Each entity has one handler per type, and setting a second one replaces the first, so the generic `SyncA` to `SyncE` must not clash between components on the same entity.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`EntityMessageStatistics`](/game-api/types/alta-networking/entitymessagestatistics)
- **Documented in** [Entity sync](/game-api/networking/entity-sync#entitymessagetype)

## Values

| Member | What it is |
| --- | --- |
| <Link id="m-arrowsync" /><code>{"ArrowSync = 252"}</code> |  |
| <Link id="m-bookadd" /><code>{"BookAdd = 121"}</code> |  |
| <Link id="m-booklocationchange" /><code>{"BookLocationChange = 125"}</code> |  |
| <Link id="m-bookremove" /><code>{"BookRemove = 122"}</code> |  |
| <Link id="m-booksetdisplay" /><code>{"BookSetDisplay = 127"}</code> |  |
| <Link id="m-booksethighlight" /><code>{"BookSetHighlight = 126"}</code> |  |
| <Link id="m-booksetopen" /><code>{"BookSetOpen = 124"}</code> |  |
| <Link id="m-booksync" /><code>{"BookSync = 120"}</code> |  |
| <Link id="m-bookturn" /><code>{"BookTurn = 123"}</code> |  |
| <Link id="m-breakonimpact" /><code>{"BreakOnImpact = 162"}</code> |  |
| <Link id="m-caveteleporterconnect" /><code>{"CaveTeleporterConnect = 210"}</code> |  |
| <Link id="m-caveteleporterplayer" /><code>{"CaveTeleporterPlayer = 212"}</code> |  |
| <Link id="m-caveteleporterupdate" /><code>{"CaveTeleporterUpdate = 211"}</code> |  |
| <Link id="m-characterpartslotsync" /><code>{"CharacterPartSlotSync = 128"}</code> |  |
| <Link id="m-chunkstatechanged" /><code>{"ChunkStateChanged = 52"}</code> |  |
| <Link id="m-confirmationcraft" /><code>{"ConfirmationCraft = 28"}</code> |  |
| <Link id="m-confirmationpopout" /><code>{"ConfirmationPopout = 29"}</code> |  |
| <Link id="m-cookableitemadded" /><code>{"CookableItemAdded = 136"}</code> |  |
| <Link id="m-craft" /><code>{"Craft = 31"}</code> |  |
| <Link id="m-crankvalue" /><code>{"CrankValue = 196"}</code> |  |
| <Link id="m-creaturestatechanged" /><code>{"CreatureStateChanged = 99"}</code> |  |
| <Link id="m-darknessspawnrequest" /><code>{"DarknessSpawnRequest = 82"}</code> |  |
| <Link id="m-destroyrequest" /><code>{"DestroyRequest = 79"}</code> |  |
| <Link id="m-disposerequest" /><code>{"DisposeRequest = 78"}</code> |  |
| <Link id="m-docking" /><code>{"Docking = 32"}</code> |  |
| <Link id="m-durabilitysync" /><code>{"DurabilitySync = 40"}</code> |  |
| <Link id="m-dynamiteexplosion" /><code>{"DynamiteExplosion = 151"}</code> |  |
| <Link id="m-dynamitefuseprogress" /><code>{"DynamiteFuseProgress = 150"}</code> |  |
| <Link id="m-effectrequest" /><code>{"EffectRequest = 77"}</code> |  |
| <Link id="m-enchantmenteffect" /><code>{"EnchantmentEffect = 42"}</code> |  |
| <Link id="m-fadesync" /><code>{"FadeSync = 200"}</code> |  |
| <Link id="m-fixedjoint" /><code>{"FixedJoint = 16"}</code> |  |
| <Link id="m-grabpositionsync" /><code>{"GrabPositionSync = 253"}</code> |  |
| <Link id="m-healthobjectdied" /><code>{"HealthObjectDied = 100"}</code> |  |
| <Link id="m-hitonimpact" /><code>{"HitOnImpact = 163"}</code> |  |
| <Link id="m-ignorecollision" /><code>{"IgnoreCollision = 80"}</code> |  |
| <Link id="m-ikcontroller" /><code>{"IKController = 61"}</code> |  |
| <Link id="m-interact" /><code>{"Interact = 10"}</code> |  |
| <Link id="m-interactend" /><code>{"InteractEnd = 11"}</code> |  |
| <Link id="m-interactionconfirmationrequest" /><code>{"InteractionConfirmationRequest = 13"}</code> |  |
| <Link id="m-levelstatmodifier" /><code>{"LevelStatModifier = 27"}</code> |  |
| <Link id="m-moveentity" /><code>{"MoveEntity = 36"}</code> |  |
| <Link id="m-networkedeventa" /><code>{"NetworkedEventA = 66"}</code> |  |
| <Link id="m-networkedeventb" /><code>{"NetworkedEventB = 67"}</code> |  |
| <Link id="m-networkedeventc" /><code>{"NetworkedEventC = 68"}</code> |  |
| <Link id="m-networkedeventd" /><code>{"NetworkedEventD = 69"}</code> |  |
| <Link id="m-none" /><code>{"None = 0"}</code> |  |
| <Link id="m-pickupbreak" /><code>{"PickupBreak = 165"}</code> |  |
| <Link id="m-pickupcontainer" /><code>{"PickupContainer = 33"}</code> |  |
| <Link id="m-playerclimbgrip" /><code>{"PlayerClimbGrip = 23"}</code> |  |
| <Link id="m-playercontrollermultilockstate" /><code>{"PlayerControllerMultiLockState = 50"}</code> |  |
| <Link id="m-playerfacetowardsmessage" /><code>{"PlayerFaceTowardsMessage = 112"}</code> |  |
| <Link id="m-playermessage" /><code>{"PlayerMessage = 101"}</code> |  |
| <Link id="m-playermoveandfacetowardsmessage" /><code>{"PlayerMoveAndFaceTowardsMessage = 113"}</code> |  |
| <Link id="m-playermovementmessage" /><code>{"PlayerMovementMessage = 110"}</code> |  |
| <Link id="m-playerrotationmessage" /><code>{"PlayerRotationMessage = 111"}</code> |  |
| <Link id="m-playerstatechanged" /><code>{"PlayerStateChanged = 18"}</code> |  |
| <Link id="m-playerstatesync" /><code>{"PlayerStateSync = 19"}</code> |  |
| <Link id="m-playerstatesynctoremote" /><code>{"PlayerStateSyncToRemote = 21"}</code> |  |
| <Link id="m-playerstatetransitionrequest" /><code>{"PlayerStateTransitionRequest = 20"}</code> |  |
| <Link id="m-potioncapremoved" /><code>{"PotionCapRemoved = 164"}</code> |  |
| <Link id="m-practicedsyncfull" /><code>{"PracticedSyncFull = 181"}</code> |  |
| <Link id="m-practicedsyncsingle" /><code>{"PracticedSyncSingle = 182"}</code> |  |
| <Link id="m-secondaryphysics" /><code>{"SecondaryPhysics = 14"}</code> |  |
| <Link id="m-setactive" /><code>{"SetActive = 76"}</code> |  |
| <Link id="m-setlocal" /><code>{"SetLocal = 1"}</code> |  |
| <Link id="m-setrenderersenabled" /><code>{"SetRenderersEnabled = 81"}</code> |  |
| <Link id="m-settingschanged" /><code>{"SettingsChanged = 2"}</code> |  |
| <Link id="m-singlestatsync" /><code>{"SingleStatSync = 26"}</code> |  |
| <Link id="m-skillinternalmessage" /><code>{"SkillInternalMessage = 180"}</code> |  |
| <Link id="m-sparkrequest" /><code>{"SparkRequest = 15"}</code> |  |
| <Link id="m-spawningchunk" /><code>{"SpawningChunk = 53"}</code> |  |
| <Link id="m-spawnpouch" /><code>{"SpawnPouch = 34"}</code> |  |
| <Link id="m-spawnseed" /><code>{"SpawnSeed = 48"}</code> |  |
| <Link id="m-staticseed" /><code>{"StaticSeed = 49"}</code> |  |
| <Link id="m-statsyncfull" /><code>{"StatSyncFull = 25"}</code> |  |
| <Link id="m-stewcreated" /><code>{"StewCreated = 137"}</code> |  |
| <Link id="m-steweffects" /><code>{"StewEffects = 139"}</code> |  |
| <Link id="m-synca" /><code>{"SyncA = 5"}</code> |  |
| <Link id="m-syncadditionalstaticcontent" /><code>{"SyncAdditionalStaticContent = 143"}</code> |  |
| <Link id="m-syncagentevents" /><code>{"SyncAgentEvents = 132"}</code> |  |
| <Link id="m-syncaltaevent" /><code>{"SyncAltaEvent = 174"}</code> |  |
| <Link id="m-syncanimationreset" /><code>{"SyncAnimationReset = 188"}</code> |  |
| <Link id="m-syncanimationstart" /><code>{"SyncAnimationStart = 186"}</code> |  |
| <Link id="m-syncanimationstop" /><code>{"SyncAnimationStop = 187"}</code> |  |
| <Link id="m-syncb" /><code>{"SyncB = 6"}</code> |  |
| <Link id="m-syncbake" /><code>{"SyncBake = 85"}</code> |  |
| <Link id="m-syncburied" /><code>{"SyncBuried = 250"}</code> |  |
| <Link id="m-syncc" /><code>{"SyncC = 7"}</code> |  |
| <Link id="m-synccount" /><code>{"SyncCount = 24"}</code> |  |
| <Link id="m-syncd" /><code>{"SyncD = 8"}</code> |  |
| <Link id="m-syncdebugcommand" /><code>{"SyncDebugCommand = 95"}</code> |  |
| <Link id="m-syncdebugcommandfull" /><code>{"SyncDebugCommandFull = 96"}</code> |  |
| <Link id="m-synce" /><code>{"SyncE = 9"}</code> |  |
| <Link id="m-syncfilters" /><code>{"SyncFilters = 220"}</code> |  |
| <Link id="m-syncfriendshiprequest" /><code>{"syncFriendshipRequest = 3"}</code> |  |
| <Link id="m-syncfriendshiprequesteffect" /><code>{"syncFriendshipRequestEffect = 4"}</code> |  |
| <Link id="m-syncgameconditionchange" /><code>{"SyncGameConditionChange = 93"}</code> |  |
| <Link id="m-syncimpact" /><code>{"SyncImpact = 254"}</code> |  |
| <Link id="m-syncliquidcontent" /><code>{"SyncLiquidContent = 138"}</code> |  |
| <Link id="m-syncliquidliquid" /><code>{"SyncLiquidLiquid = 135"}</code> |  |
| <Link id="m-syncmanager" /><code>{"SyncManager = 129"}</code> |  |
| <Link id="m-syncmaterial" /><code>{"SyncMaterial = 170"}</code> |  |
| <Link id="m-syncnail" /><code>{"SyncNail = 30"}</code> |  |
| <Link id="m-syncnameproxy" /><code>{"SyncNameProxy = 172"}</code> |  |
| <Link id="m-syncowner" /><code>{"SyncOwner = 38"}</code> |  |
| <Link id="m-syncplaced" /><code>{"SyncPlaced = 185"}</code> |  |
| <Link id="m-syncscrapper" /><code>{"SyncScrapper = 90"}</code> |  |
| <Link id="m-syncstaticcontent" /><code>{"SyncStaticContent = 145"}</code> |  |
| <Link id="m-syncstaticcontentdestruction" /><code>{"SyncStaticContentDestruction = 144"}</code> |  |
| <Link id="m-syncunburied" /><code>{"SyncUnburied = 251"}</code> |  |
| <Link id="m-taskinitialize" /><code>{"TaskInitialize = 190"}</code> |  |
| <Link id="m-taskupdate" /><code>{"TaskUpdate = 191"}</code> |  |
| <Link id="m-teleportrequest" /><code>{"TeleportRequest = 71"}</code> |  |
| <Link id="m-togglegrab" /><code>{"ToggleGrab = 12"}</code> |  |
| <Link id="m-vfxcontrollerplay" /><code>{"VfxControllerPlay = 91"}</code> |  |
| <Link id="m-vfxcontrollerstop" /><code>{"VfxControllerStop = 92"}</code> |  |
| <Link id="m-vfxdata" /><code>{"VfxData = 146"}</code> |  |
| <Link id="m-voip" /><code>{"VoIP = 64"}</code> |  |
| <Link id="m-voip2" /><code>{"VoIP2 = 65"}</code> |  |

## Used in

Members of other types that take, return or hold a `EntityMessageType`:

[`BaseSync.BaseSync`](/game-api/types/alta-networking/basesync#m-ctor), [`BaseSync.type`](/game-api/types/alta-networking/basesync#m-type), [`ClientSync.ClientSync`](/game-api/types/alta-networking/clientsync#m-ctor), [`ControlledWriteSync.ControlledWriteSync`](/game-api/types/alta-networking/controlledwritesync#m-ctor), [`ControlledWriteSync.type`](/game-api/types/alta-networking/controlledwritesync#m-type), [`EntityMessageHandler.ClearHandler`](/game-api/types/alta-networking/entitymessagehandler#m-clearhandler), [`EntityMessageHandler.HandleMessage`](/game-api/types/alta-networking/entitymessagehandler#m-handlemessage), [`EntityMessageHandler.HasHandler`](/game-api/types/alta-networking/entitymessagehandler#m-hashandler), [`EntityMessageHandler.messageHandlers`](/game-api/types/alta-networking/entitymessagehandler#m-messagehandlers), [`EntityMessageHandler.SendToChunks`](/game-api/types/alta-networking/entitymessagehandler#m-sendtochunks), [`EntityMessageHandler.SendToPlayer`](/game-api/types/alta-networking/entitymessagehandler#m-sendtoplayer), [`EntityMessageHandler.SetHandler`](/game-api/types/alta-networking/entitymessagehandler#m-sethandler), [`InternalMessage.SendToPlayers`](/game-api/types/alta-networking/internalmessage#m-sendtoplayers), [`InternalMessage.SendToServer`](/game-api/types/alta-networking/internalmessage#m-sendtoserver), [`MethodSync.MethodSync`](/game-api/types/alta-networking/methodsync#m-ctor), [`MethodSyncClass<T>.MethodSyncClass<T>`](/game-api/types/alta-networking/methodsyncclass-t#m-ctor), [`MethodSyncStruct<T>.MethodSyncStruct<T>`](/game-api/types/alta-networking/methodsyncstruct-t#m-ctor), [`ServerSync.ServerSync`](/game-api/types/alta-networking/serversync#m-ctor), [`Sync.Sync`](/game-api/types/alta-networking/sync#m-ctor), [`Sync.type`](/game-api/types/alta-networking/sync#m-type), [`Sync<T>.Sync<T>`](/game-api/types/alta-networking/sync-t#m-ctor), [`Sync<T>.type`](/game-api/types/alta-networking/sync-t#m-type), [`SyncFactory.Create`](/game-api/types/alta-networking/syncfactory#m-create), [`ThrottledMethodSync.ThrottledMethodSync`](/game-api/types/alta-networking/throttledmethodsync#m-ctor), [`ThrottledMethodSync.type`](/game-api/types/alta-networking/throttledmethodsync#m-type), [`EntityMessageStatistics.CreateNewStatistic`](/game-api/types/alta-networking/entitymessagestatistics#m-createnewstatistic), [`EntityMessageStatistics.RegisterMessageSend`](/game-api/types/alta-networking/entitymessagestatistics#m-registermessagesend), [`EntityMessageTypeStatistic.EntityMessageTypeStatistic`](/game-api/types/alta-networking/entitymessagetypestatistic#m-ctor), [`EntityMessageTypeStatistic.messageType`](/game-api/types/alta-networking/entitymessagetypestatistic#m-messagetype), [`EntityMessageTypeStatistic.MessageType`](/game-api/types/alta-networking/entitymessagetypestatistic#m-messagetype-2), [`EntityStatistic.RegisterMessageSend`](/game-api/types/alta-networking/entitystatistic#m-registermessagesend), [`EntityStatistics.RegisterMessageSend`](/game-api/types/alta-networking/entitystatistics#m-registermessagesend-2), [`ClassSerializationHelper.Prepare`](/game-api/types/global-c-d/classserializationhelper#m-prepare), [`ClassSerializer<T>.ClassSerializer<T>`](/game-api/types/global-c-d/classserializer-t#m-ctor), [`ParticlesToPlayer.uniqueMessageChannel`](/game-api/types/game-other-namespaces/particlestoplayer#m-uniquemessagechannel), [`NetworkedEvent.messageType`](/game-api/types/global-m-o/networkedevent#m-messagetype).
