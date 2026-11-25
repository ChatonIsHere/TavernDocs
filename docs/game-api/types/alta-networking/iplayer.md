---
title: "IPlayer"
description: "interface IPlayer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayer

An **interface** in `Root.Township`, `Alta.Networking.Scripts.Player`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`INetworkEntity`](/game-api/types/alta-networking/inetworkentity)
- **Derived types** [`Player`](/game-api/types/global-p/player), [`PlayerEvent`](/game-api/types/global-p/playerevent), [`PlayerList`](/game-api/types/global-p/playerlist), [`PlayerUnityEvent`](/game-api/types/global-p/playerunityevent)
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkmanager" /><code><Link to="/game-api/types/global-p/playerchunkmanager">{"PlayerChunkManager"}</Link>{" ChunkManager { get; }"}</code> |  |
| <Link id="m-connectiontoremoteplayer" /><code><Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" ConnectionToRemotePlayer { get; }"}</code> |  |
| <Link id="m-customization" /><code><Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Customization { get; }"}</code> |  |
| <Link id="m-friendshipmanager" /><code><Link to="/game-api/types/global-e-h/friendshipmanager">{"FriendshipManager"}</Link>{" "}<Link to="/game-api/types/global-e-h/friendshipmanager">{"FriendshipManager"}</Link>{" { get; }"}</code> |  |
| <Link id="m-islocalplayer" /><code>{"bool IsLocalPlayer { get; }"}</code> |  |
| <Link id="m-playercharacter" /><code><Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" { get; }"}</code> |  |
| <Link id="m-playercontroller" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> |  |
| <Link id="m-playereventsmanager" /><code><Link to="/game-api/types/global-p/playereventsmanager">{"PlayerEventsManager"}</Link>{" "}<Link to="/game-api/types/global-p/playereventsmanager">{"PlayerEventsManager"}</Link>{" { get; }"}</code> |  |
| <Link id="m-playermode" /><code><Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-progressionmanager" /><code><Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" ProgressionManager { get; }"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" Save { get; }"}</code> |  |
| <Link id="m-statemanager" /><code><Link to="/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" StateManager { get; }"}</code> |  |
| <Link id="m-unityobjectname" /><code>{"string UnityObjectName { get; }"}</code> |  |
| <Link id="m-unlockmanager" /><code><Link to="/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" UnlockManager { get; }"}</code> |  |
| <Link id="m-userinfo" /><code><Link to="/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" UserInfo { get; }"}</code> |  |
| <Link id="m-voice" /><code>{"IParticipant Voice { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-loadcomplete" /><code>{"event Action LoadComplete"}</code> |  |
| <Link id="m-playercontrollerset" /><code>{"event "}<Link to="/game-api/types/global-p/playercontrollerhandler">{"PlayerControllerHandler"}</Link>{" PlayerControllerSet"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroywithassociatedobjects" /><code>{"void DestroyWithAssociatedObjects()"}</code> |  |
| <Link id="m-getspawnposition" /><code>{"Vector3 GetSpawnPosition(bool isHome)"}</code> |  |
| <Link id="m-isinsavablestate" /><code>{"bool IsInSavableState(bool isSavingIfDead = false)"}</code> |  |
| <Link id="m-kick" /><code>{"void Kick(string reason)"}</code> |  |
| <Link id="m-safemovetochunk" /><code>{"void SafeMoveToChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, Vector3 controllerPosition, Action callback)"}</code> |  |
| <Link id="m-savecontrollerandstate" /><code>{"void SaveControllerAndState(bool isSavingIfDead = false)"}</code> |  |
| <Link id="m-writesave" /><code>{"void WriteSave(bool isUnloading)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IPlayer`:

[`AchievementBoard.UpdateAchievement`](/game-api/types/global-a-b/achievementboard#m-updateachievement), [`AchievementBoard.UpdatePlayer`](/game-api/types/global-a-b/achievementboard#m-updateplayer), [`AchievementGroupAchievement.CheckCompletion`](/game-api/types/global-a-b/achievementgroupachievement#m-checkcompletion), [`ActionItem.OwnerUpdated`](/game-api/types/global-a-b/actionitem#m-ownerupdated), [`ActionItem.SetupOwner`](/game-api/types/global-a-b/actionitem#m-setupowner), [`ActionItem.SyncEffect`](/game-api/types/global-a-b/actionitem#m-synceffect-2), [`ActionItem.SyncOwner`](/game-api/types/global-a-b/actionitem#m-syncowner-2), [`AdditionalStaticContent.Sync`](/game-api/types/global-a-b/additionalstaticcontent#m-sync-2), [`PlayerEffectController.NetworkTeleport`](/game-api/types/alta-stats-effects/playereffectcontroller#m-networkteleport), [`ForgedModel<TB, TA>.ProcessForgedEvent`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-processforgedevent), [`ForgedModel<TB, TA>.SyncComplete`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-synccomplete-2), [`ForgedPoint.Sync`](/game-api/types/alta-crafting/forgedpoint#m-sync), [`Recycler.SyncFull`](/game-api/types/alta-crafting/recycler#m-syncfull-2), [`Recycler.SyncOutputEffect`](/game-api/types/alta-crafting/recycler#m-syncoutputeffect-2), [`Recycler.SyncTemperatureValue`](/game-api/types/alta-crafting/recycler#m-synctemperaturevalue-2), [`Smelter.SyncEffects`](/game-api/types/alta-crafting/smelter#m-synceffects-2), [`Smelter.SyncIcons`](/game-api/types/alta-crafting/smelter#m-syncicons-2), [`ChisellingDeck.NetworkUpdateBlock`](/game-api/types/alta-crafting/chisellingdeck#m-networkupdateblock), [`TimberBlock.SyncPickup`](/game-api/types/alta-crafting/timberblock#m-syncpickup-2), [`TimberBlock.SyncPieceEffects`](/game-api/types/alta-crafting/timberblock#m-syncpieceeffects-2), [`TimberBlock.SyncStatus`](/game-api/types/alta-crafting/timberblock#m-syncstatus-2), [`TimberBlockSpawner.SyncPosition`](/game-api/types/alta-crafting/timberblockspawner#m-syncposition-2), [`TimberBlockSpawner.SyncRotation`](/game-api/types/alta-crafting/timberblockspawner#m-syncrotation-2), [`CaveLayerManager.SyncSeed`](/game-api/types/alta-world-generation/cavelayermanager#m-syncseed), [`CaveTeleporter.AllowInteract`](/game-api/types/alta-world-generation/caveteleporter#m-allowinteract), [`CaveTeleporter.SyncLayer`](/game-api/types/alta-world-generation/caveteleporter#m-synclayer-2), [`CaveTeleporter.Teleport`](/game-api/types/alta-world-generation/caveteleporter#m-teleport), [`CaveTeleporter.teleporting`](/game-api/types/alta-world-generation/caveteleporter#m-teleporting), [`CaveTeleporterManager.DelayTeleport`](/game-api/types/alta-world-generation/caveteleportermanager#m-delayteleport), [`CaveTeleporterManager.SyncEffect`](/game-api/types/alta-world-generation/caveteleportermanager#m-synceffect-2), [`CaveTeleporterManager.SyncFull`](/game-api/types/alta-world-generation/caveteleportermanager#m-syncfull-2), [`CaveTeleporterManager.SyncProxy`](/game-api/types/alta-world-generation/caveteleportermanager#m-syncproxy-2), [`CaveTeleporterManager.TeleportPlayer`](/game-api/types/alta-world-generation/caveteleportermanager#m-teleportplayer), [`GenerationBase.ClientSpawn`](/game-api/types/alta-world-generation/generationbase#m-clientspawn-2), [`CaveLayerStreamer.SyncLayer`](/game-api/types/alta-world/cavelayerstreamer#m-synclayer-2), [`CaveLayerStreamer.SyncLayerSetup`](/game-api/types/alta-world/cavelayerstreamer#m-synclayersetup-2), [`Chunk.SyncIndex`](/game-api/types/alta-world/chunk#m-syncindex-2), [`ChunkSync.playerSyncs`](/game-api/types/alta-world/chunksync#m-playersyncs), [`PlayerEntitySync.ClientLoad`](/game-api/types/alta-world/playerentitysync#m-clientload), [`StaticCaveChunk.SyncSetup`](/game-api/types/alta-world/staticcavechunk#m-syncsetup-2), [`Inventory.Inventory`](/game-api/types/alta-console/inventory#m-ctor), [`UserInfoDetailed.UserInfoDetailed`](/game-api/types/alta-console/userinfodetailed#m-ctor), [`Cookable.SyncEffect`](/game-api/types/alta-crafting/cookable#m-synceffect-2), [`StewManager.FadeOutAddedIngredient`](/game-api/types/alta-crafting/stewmanager#m-fadeoutaddedingredient), [`StewManager.SyncStewCreated`](/game-api/types/alta-crafting/stewmanager#m-syncstewcreated), [`ConfirmationCraftingPart.OnCompleteEffect`](/game-api/types/alta-crafting/confirmationcraftingpart#m-oncompleteeffect), [`ConfirmationCraftingPart.SyncAttemptCraft`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncattemptcraft-2), [`ConfirmationCraftingPart.SyncClientNailHit`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncclientnailhit-2), [`ConfirmationCraftingPart.SyncNail`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncnail-2), [`ConfirmationCraftingPart.SyncPopout`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncpopout-2), [`ConfirmationCraftingPart.SyncSetup`](/game-api/types/alta-crafting/confirmationcraftingpart#m-syncsetup-2), [`CraftingPart.AttemptCraft`](/game-api/types/alta-crafting/craftingpart#m-attemptcraft-3), [`CraftingPart.ProcessCraftedEvent`](/game-api/types/alta-crafting/craftingpart#m-processcraftedevent), [`DecraftingComponent.SyncDecraftingHit`](/game-api/types/alta-crafting/decraftingcomponent#m-syncdecraftinghit-2), [`GenericAssemblyStation.SyncDockPosition`](/game-api/types/alta-crafting/genericassemblystation#m-syncdockposition-2), [`GenericCraftingComponent.SyncEffects`](/game-api/types/alta-crafting/genericcraftingcomponent#m-synceffects-2), [`GenericCraftingNail.LastHittingPlayer`](/game-api/types/alta-crafting/genericcraftingnail#m-lasthittingplayer), [`GenericCraftingProject.SetPieceComplete`](/game-api/types/alta-crafting/genericcraftingproject#m-setpiececomplete), [`GenericCraftingProject.SyncDestroyEffect`](/game-api/types/alta-crafting/genericcraftingproject#m-syncdestroyeffect), [`GenericCraftingProject.SyncPiece`](/game-api/types/alta-crafting/genericcraftingproject#m-syncpiece) and 706 more.
