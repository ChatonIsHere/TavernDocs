---
title: "IPlayer"
description: "The interface behind every player on the server or client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlayer

An **interface** in `Root.Township`, `Alta.Networking.Scripts.Player`.

The interface behind every player on the server or client. `Player` is the only implementation; `Player.Current`, `Player.AllPlayers` and `Player.Get` hand these out.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`INetworkEntity`](/mod/game-api/types/alta-networking/inetworkentity)
- **Derived types** [`Player`](/mod/game-api/types/global-p/player), [`PlayerEvent`](/mod/game-api/types/global-p/playerevent), [`PlayerList`](/mod/game-api/types/global-p/playerlist), [`PlayerUnityEvent`](/mod/game-api/types/global-p/playerunityevent)
- **Attributes** `TypeConverter`
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkmanager" /><code><Link to="/mod/game-api/types/global-p/playerchunkmanager">{"PlayerChunkManager"}</Link>{" ChunkManager { get; }"}</code> | <span className="api-desc">The player's `PlayerChunkManager`, which decides which chunks are loaded for them.</span> |
| <Link id="m-connectiontoremoteplayer" /><code><Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" ConnectionToRemotePlayer { get; }"}</code> | <span className="api-desc">Server: the network connection to this player. Null on clients.</span> |
| <Link id="m-customization" /><code><Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Customization { get; }"}</code> | <span className="api-desc">The player's cosmetics (their look).</span> |
| <Link id="m-friendshipmanager" /><code><Link to="/mod/game-api/types/global-e-h/friendshipmanager">{"FriendshipManager"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/friendshipmanager">{"FriendshipManager"}</Link>{" { get; }"}</code> | <span className="api-desc">Tracks which other players this player is friends with.</span> |
| <Link id="m-islocalplayer" /><code>{"bool IsLocalPlayer { get; }"}</code> | <span className="api-desc">True on a client for the player it controls. Always false on a dedicated server.</span> |
| <Link id="m-playercharacter" /><code><Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" { get; }"}</code> | <span className="api-desc">The current body as a `PlayerCharacter`. A hard cast of `PlayerController`.</span> |
| <Link id="m-playercontroller" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> | <span className="api-desc">The body the player currently controls, or null between spawns.</span> |
| <Link id="m-playereventsmanager" /><code><Link to="/mod/game-api/types/global-p/playereventsmanager">{"PlayerEventsManager"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playereventsmanager">{"PlayerEventsManager"}</Link>{" { get; }"}</code> | <span className="api-desc">The player's event hub component.</span> |
| <Link id="m-playermode" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; set; }"}</code> | <span className="api-desc">How the player joined (VR, fly, autocam and so on). Only normal modes are saved.</span> |
| <Link id="m-progressionmanager" /><code><Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" ProgressionManager { get; }"}</code> | <span className="api-desc">The player's skills and progression.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" Save { get; }"}</code> | <span className="api-desc">Server: the player's `PlayerSave` in memory, created at join if they had none. Null on clients.</span> |
| <Link id="m-statemanager" /><code><Link to="/mod/game-api/types/alta-player/playerstatemanager">{"PlayerStateManager"}</Link>{" StateManager { get; }"}</code> | <span className="api-desc">The player's state stack (playing, downed, character room and so on).</span> |
| <Link id="m-unityobjectname" /><code>{"string UnityObjectName { get; }"}</code> | <span className="api-desc">The GameObject's name, such as `12 - Remote Player Bob`.</span> |
| <Link id="m-unlockmanager" /><code><Link to="/mod/game-api/types/global-p/playerunlockmanager">{"PlayerUnlockManager"}</Link>{" UnlockManager { get; }"}</code> | <span className="api-desc">Which unlocks the player has.</span> |
| <Link id="m-userinfo" /><code><Link to="/mod/game-api/types/global-t-x/userinfoandrole">{"UserInfoAndRole"}</Link>{" UserInfo { get; }"}</code> | <span className="api-desc">The player's account id, username and member status.</span> |
| <Link id="m-voice" /><code>{"IParticipant Voice { get; set; }"}</code> | <span className="api-desc">The player's Vivox voice participant, if voice chat is on.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-loadcomplete" /><code>{"event Action LoadComplete"}</code> | <span className="api-desc">Raised after the player's save (entity, states and progression) has been loaded.</span> |
| <Link id="m-playercontrollerset" /><code>{"event "}<Link to="/mod/game-api/types/global-p/playercontrollerhandler">{"PlayerControllerHandler"}</Link>{" PlayerControllerSet"}</code> | <span className="api-desc">Raised when `PlayerController` is set or cleared.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroywithassociatedobjects" /><code>{"void DestroyWithAssociatedObjects()"}</code> | <span className="api-desc">Destroys the player's body and the entities spawned with it, then the player entity itself.</span> |
| <Link id="m-getspawnposition" /><code>{"Vector3 GetSpawnPosition(bool isHome)"}</code> | <span className="api-desc">Where the player should appear: their saved position on join, or their respawn point (home if set) when respawning.</span> |
| <Link id="m-isinsavablestate" /><code>{"bool IsInSavableState(bool isSavingIfDead = false)"}</code> | <span className="api-desc">Whether the player can be saved now. False with saving off, in fly or autocam mode, in the character room, dead or blocked.</span> |
| <Link id="m-kick" /><code>{"void Kick(string reason)"}</code> | <span className="api-desc">Server: disconnects the player and logs the reason.</span> |
| <Link id="m-safemovetochunk" /><code>{"void SafeMoveToChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, Vector3 controllerPosition, Action callback)"}</code> | <span className="api-desc">Server: parks the body in the void chunk, waits for the client to load the target chunk, moves it there, then calls the callback.</span> |
| <Link id="m-savecontrollerandstate" /><code>{"void SaveControllerAndState(bool isSavingIfDead = false)"}</code> | <span className="api-desc">Server: copies body, states and progression into `Save`, if the player is in a savable state. Does not write the file.</span> |
| <Link id="m-writesave" /><code>{"void WriteSave(bool isUnloading)"}</code> | <span className="api-desc">Server: serializes the player entity into `Save` and starts writing the file. Pass `isUnloading` when the player is leaving.</span> |

## Used in

Members of other types that take, return or hold a `IPlayer`:

<div className="api-used-in">

[`AchievementBoard.UpdateAchievement`](/mod/game-api/types/global-a-b/achievementboard#m-updateachievement), [`AchievementBoard.UpdatePlayer`](/mod/game-api/types/global-a-b/achievementboard#m-updateplayer), [`AchievementGroupAchievement.CheckCompletion`](/mod/game-api/types/global-a-b/achievementgroupachievement#m-checkcompletion), [`ActionItem.OwnerUpdated`](/mod/game-api/types/global-a-b/actionitem#m-ownerupdated), [`ActionItem.SetupOwner`](/mod/game-api/types/global-a-b/actionitem#m-setupowner), [`ActionItem.SyncEffect`](/mod/game-api/types/global-a-b/actionitem#m-synceffect-2), [`ActionItem.SyncOwner`](/mod/game-api/types/global-a-b/actionitem#m-syncowner-2), [`AdditionalStaticContent.Sync`](/mod/game-api/types/global-a-b/additionalstaticcontent#m-sync-2), [`PlayerEffectController.NetworkTeleport`](/mod/game-api/types/alta-stats-effects/playereffectcontroller#m-networkteleport), [`ForgedModel<TB, TA>.ProcessForgedEvent`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-processforgedevent), [`ForgedModel<TB, TA>.SyncComplete`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-synccomplete-2), [`ForgedPoint.Sync`](/mod/game-api/types/alta-crafting/forgedpoint#m-sync), [`Recycler.SyncFull`](/mod/game-api/types/alta-crafting/recycler#m-syncfull-2), [`Recycler.SyncOutputEffect`](/mod/game-api/types/alta-crafting/recycler#m-syncoutputeffect-2), [`Recycler.SyncTemperatureValue`](/mod/game-api/types/alta-crafting/recycler#m-synctemperaturevalue-2), [`Smelter.SyncEffects`](/mod/game-api/types/alta-crafting/smelter#m-synceffects-2), [`Smelter.SyncIcons`](/mod/game-api/types/alta-crafting/smelter#m-syncicons-2), [`ChisellingDeck.NetworkUpdateBlock`](/mod/game-api/types/alta-crafting/chisellingdeck#m-networkupdateblock), [`TimberBlock.SyncPickup`](/mod/game-api/types/alta-crafting/timberblock#m-syncpickup-2), [`TimberBlock.SyncPieceEffects`](/mod/game-api/types/alta-crafting/timberblock#m-syncpieceeffects-2), [`TimberBlock.SyncStatus`](/mod/game-api/types/alta-crafting/timberblock#m-syncstatus-2), [`TimberBlockSpawner.SyncPosition`](/mod/game-api/types/alta-crafting/timberblockspawner#m-syncposition-2), [`TimberBlockSpawner.SyncRotation`](/mod/game-api/types/alta-crafting/timberblockspawner#m-syncrotation-2), [`CaveLayerManager.SyncSeed`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-syncseed), [`CaveTeleporter.AllowInteract`](/mod/game-api/types/alta-world-generation/caveteleporter#m-allowinteract), [`CaveTeleporter.SyncLayer`](/mod/game-api/types/alta-world-generation/caveteleporter#m-synclayer-2), [`CaveTeleporter.Teleport`](/mod/game-api/types/alta-world-generation/caveteleporter#m-teleport), [`CaveTeleporter.teleporting`](/mod/game-api/types/alta-world-generation/caveteleporter#m-teleporting), [`CaveTeleporterManager.DelayTeleport`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-delayteleport), [`CaveTeleporterManager.SyncEffect`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-synceffect-2), [`CaveTeleporterManager.SyncFull`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-syncfull-2), [`CaveTeleporterManager.SyncProxy`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-syncproxy-2), [`CaveTeleporterManager.TeleportPlayer`](/mod/game-api/types/alta-world-generation/caveteleportermanager#m-teleportplayer), [`GenerationBase.ClientSpawn`](/mod/game-api/types/alta-world-generation/generationbase#m-clientspawn-2), [`CaveLayerStreamer.SyncLayer`](/mod/game-api/types/alta-world/cavelayerstreamer#m-synclayer-2), [`CaveLayerStreamer.SyncLayerSetup`](/mod/game-api/types/alta-world/cavelayerstreamer#m-synclayersetup-2), [`Chunk.SyncIndex`](/mod/game-api/types/alta-world/chunk#m-syncindex-2), [`ChunkSync.playerSyncs`](/mod/game-api/types/alta-world/chunksync#m-playersyncs), [`PlayerEntitySync.ClientLoad`](/mod/game-api/types/alta-world/playerentitysync#m-clientload), [`StaticCaveChunk.SyncSetup`](/mod/game-api/types/alta-world/staticcavechunk#m-syncsetup-2), [`Inventory.Inventory`](/mod/game-api/types/alta-console/inventory#m-ctor), [`UserInfoDetailed.UserInfoDetailed`](/mod/game-api/types/alta-console/userinfodetailed#m-ctor), [`Cookable.SyncEffect`](/mod/game-api/types/alta-crafting/cookable#m-synceffect-2), [`StewManager.FadeOutAddedIngredient`](/mod/game-api/types/alta-crafting/stewmanager#m-fadeoutaddedingredient), [`StewManager.SyncStewCreated`](/mod/game-api/types/alta-crafting/stewmanager#m-syncstewcreated), [`ConfirmationCraftingPart.OnCompleteEffect`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-oncompleteeffect), [`ConfirmationCraftingPart.SyncAttemptCraft`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncattemptcraft-2), [`ConfirmationCraftingPart.SyncClientNailHit`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncclientnailhit-2), [`ConfirmationCraftingPart.SyncNail`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncnail-2), [`ConfirmationCraftingPart.SyncPopout`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncpopout-2), [`ConfirmationCraftingPart.SyncSetup`](/mod/game-api/types/alta-crafting/confirmationcraftingpart#m-syncsetup-2), [`CraftingPart.AttemptCraft`](/mod/game-api/types/alta-crafting/craftingpart#m-attemptcraft-3), [`CraftingPart.ProcessCraftedEvent`](/mod/game-api/types/alta-crafting/craftingpart#m-processcraftedevent), [`DecraftingComponent.SyncDecraftingHit`](/mod/game-api/types/alta-crafting/decraftingcomponent#m-syncdecraftinghit-2), [`GenericAssemblyStation.SyncDockPosition`](/mod/game-api/types/alta-crafting/genericassemblystation#m-syncdockposition-2), [`GenericCraftingComponent.SyncEffects`](/mod/game-api/types/alta-crafting/genericcraftingcomponent#m-synceffects-2), [`GenericCraftingNail.LastHittingPlayer`](/mod/game-api/types/alta-crafting/genericcraftingnail#m-lasthittingplayer), [`GenericCraftingProject.SetPieceComplete`](/mod/game-api/types/alta-crafting/genericcraftingproject#m-setpiececomplete), [`GenericCraftingProject.SyncDestroyEffect`](/mod/game-api/types/alta-crafting/genericcraftingproject#m-syncdestroyeffect), [`GenericCraftingProject.SyncPiece`](/mod/game-api/types/alta-crafting/genericcraftingproject#m-syncpiece) and 706 more.

</div>
