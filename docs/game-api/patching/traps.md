---
title: Traps in the game's code
description: Game code that doesn't do what its name says, checks the server skips, and settings nothing reads. Read from the server build.
sidebar_position: 4
---

# Traps in the game's code

Things in Alta's code that look like they work one way and don't, found while writing the type pages. Each was read from the decompiled server build, not tested in the game, so check the code before you rely on one. The type pages say more about each.

## The server trusts the client

- `ProgressionSlotContainer` buys or sells a skill orb for its target player whenever any client asks (`syncOperate`). It never checks who asked.
- The server applies any player state change a client asks for, checked only by that state's own `ValidateStateActivation`.
- `PurchasedList.ValidatePlayersOwnedItems` always says yes, so `CustomizationState.Sync` takes whatever cosmetics a client sends.
- `ImpactDetector.SyncImpact` takes a tool hit only from the tool's last holder, but hits by a tool on anything other than a player are decided on the swinging player's own game.
- `PlayerControllerMultiLockModel`: while any lock is held, `PlayerHealth` ignores all damage, and the server takes `IsLocked` from the owning player's own message. A modified client can make itself unhurtable.
- Fall damage: `SmoothLocomotion` sends the fall distance and the server applies whatever it's told.
- `SparkSecondaryDetector` takes a spark point (anywhere within 10 m) and an effectiveness from the client and starts fires from them. `ClientSideNailHitSync` takes a client-reported effectiveness for nail damage on stations.
- `SocialTabletActionSyncStruct`: the server raises its report, ban and unban console events on the client's word alone, so those events can be faked.
- `SpiritModeDoorway` applies spirit mode with whatever `PlayerUnlock` the client's message names. `TwoStepLever`, `LongHoldInteractable`, `ItemShooter.SyncShoot` and bow shots (`BowString`) also act on the client's say-so.
- `ServerSettingsSync.IsServerSyncPermitted` always says yes in the game. TavernLib limits it to `owner` and `moderator`.
- `InGameInspector`'s command tool runs any command a client sends it through `CommandService.Handle`, with the only permission check on the client. No prefab in this build carries `InGameInspector`, so nothing can reach it, but a mod that spawns one opens it up.

## Limits that break quietly

- `Stat` values are packed into fixed ranges when they're sent to players: base, minimum and maximum 0 to 127, extras and multipliers -63 to 64, in steps of 0.01. A value outside those reaches players wrong.
- `LocationChunk` clamps positions to the chunk's box plus 10 units.
- `PlayerUnlockManager` sends orb indexes in 4 bits, so only 0 to 15 reach players correctly.
- `EntityManager` has 100,000 entity ids, and ids 0 and 1 of every block of 50 are markers, so about 96,000 are usable. A broken free list quits the server ("Corrupt entity list").
- `OutgoingPacketManager` disconnects a player once 64 reliable packets back up for them ("Reliable overflow").
- `ChunkEntityManager.CompareFeet` measures distance as `x*x + z + z`, so sending the nearest entities first (for Quest players) is out of order.

## Names that mislead

- `HashedGeneralValue<T>.Get(string)` takes the spaces out of the name but doesn't lowercase it, and the stored names are lowercase, so `Get("Iron Ingot")` finds nothing. Console arguments are lowercased first, so commands still work.
- `PlayerStateBase.IsDecorated` is true when there is *no* decorator.
- `SplineDisplay.IsHeadlessOnly = true` skips the display on a headless server.
- `HoverPickup.teleportToTargetOnRelease = true` makes the item fly back smoothly; false makes it snap.
- `AtmosphereManager.GetHighestPlugin` returns the last enabled plugin, not the one with the highest priority.
- `NetworkingStatistic.BytesPerFrame` is the average bytes per message.
- `MicroTutorialLogger.Warn` logs at Error.
- `PlayerEffectManager.EffectPosition` culling: any value other than `none` hides the effect for local and remote players alike.

## Things that run once, or never again

- `UpdateModule` drops an update callback for good the first time it throws, and logs only that first error.
- `ServerBoard.OnRefreshFinished` is cleared after every refresh, so a handler fires once.
- `FestivityManager` resets every festivity from its dates once a second, so setting `IsActivated` or calling `SetFestivityActive` from a mod only lasts until the next check.
- `VirtualKeyboard.ClearFocus` removes every `InputChanged` and `NextPressed` listener, not just yours. `SenderInput.Destroy` doesn't remove its own handler.

## Saved but not loaded, declared but never used

- `Enchantable` saves its enchantments and its `Load` ignores them. `Ecosystem` rebuilds its saved spawn points on load and then throws them away. `TransformSaveCollection.Save` saves nothing. `GrowthSaveData.position` and `rotation` are never filled in.
- A `TimedStatModifier` that was loaded or received over the network doesn't call `OnRemoved` when it runs out.
- `StatModifier.UpdateValue` always writes the buff fields, even on a modifier that isn't a buff.
- `SerializedSavedDynamicObject.Load` is obsolete and spawns network entities twice; use `LoadInto`.
- Save migrations that lose data: `FireSaveData1` (fuel progress), `LootModuleSaveData3` and `4` (`isOneOff`, and the fail chance resets), `EmbeddableSaveData1` (embeds), `GlobalPagesManagerSaveData1` (every page), `MovePickupSaveData1` and `LogicFloatChangeOnBoolSaveData2`. `CaveLayerManagerSaveData3.Migrate` probably throws. `CookingPot`'s load never restores the cooking stage.
- `SavingSystem.Reinitialize` only registers `[SaveStructure]` classes from the game's own assembly, so a mod's save data classes need a patch there to be saved at all.
- Never raised: `StaticEnvironmentPieceInstance.Released`, `PlayerScreenFader.ScreenFaded`. Never set: `SteamVRPose.IsConnected`, `Beam.Parent`, `Command.Method`, `Spriggull.IdleStart`, `GenerationCore.IsDynamic`.
- Not read anywhere: most of `MiningSettings` (only haptics, the strike sound value and drop speed are), `ClimberSettings` (climbing uses `ClimbingSettings`), `PickupTypeSettings.WeightMaxPerHand` and `WeightPenalty`, and these `ServerSettings`: `RespawnTimeSeconds`, `HandoverRequireConfirmation`, `AvoidSpawnCollectedPages`, `EmptyServerShutdownTimeInSeconds`, `WipesWhenEmpty`, `HasRunRepairBoxFix`.

## Items and the world

- Taking an item out of a `PickupDock` stack spawns a new copy, so a reference to the docked one goes stale.
- `BuildupPickup` fills every child slot on spawn, whatever its minimum and maximum say; the random count only picks the starting slot.
- `PositionRestrictor` snaps loose items outside its radius back, and yanks held ones back after `heldLimit` seconds. Items that "teleport" in the tutorial or mould areas are usually this.
- A container only pours into containers with a lower `ContainerPriority`.
- `DecraftingComponent` only knocks off outer parts (nothing attached to them), and needs a hit of at least 0.2.
- `ChiselDefinition.GetBest` picks an exact match if there is one; otherwise it picks at random, weighted by the squared error, so worse matches are more likely.
- `StewRecipe.PrefabQuantities` only counts prefabs with "Ripe" in their name.
- `VelocityPickupSettings` grip strengths only apply on clients; the server always uses 9 and 75.
- `ForestGenerator.Wipe` ignores the seed you pass. See [Resetting the forest](../world/forest.md#resetting-the-forest).

## Console commands

- Command methods must be static: `Command.Invoke` calls them with no instance.
- The `settings` command ignores the `JsonMin`, `JsonMax` and `JsonRange` limits when it sets a whole number.

## See also

- [Known patch points](known-patch-points.md), for what other mods already patch.
- The [type browser](../types/overview.md), where each of these has its own page.
