---
title: "Smelter"
description: "The smelter machine: takes ore or ingots from its ore docks and fuel from its fuel docks, and spawns the output of a smelting recipe or a mould."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Smelter

A **class** in `Root.Township`, `Alta.Blacksmithing`.

The smelter machine: takes ore or ingots from its ore docks and fuel from its fuel docks, and spawns the output of a smelting recipe or a mould. The server runs the smelting; clients get icons and effects by method sync. Saved with `SmelterSaveData`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<SmelterSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<SmelterSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SmelterSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`SmelterSaveData`](/game-api/types/alta-crafting/smeltersavedata)
- **Nested types** [`AnimationEvents`](/game-api/types/alta-crafting/smelter-animationevents)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging#smelter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Smelter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>40 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeoperationsmoke" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeOperationSmoke"}</code> | The pooled smoke effect shown while operating. |
| <Link id="m-bellows" /><code>{"private "}<Link to="/game-api/types/global-a-b/bellows">{"Bellows"}</Link>{" bellows"}</code> | The smelter's bellows; its `SteadyValue` speeds up progress and fuel use. |
| <Link id="m-currentmould" /><code>{"private "}<Link to="/game-api/types/global-m-o/mould">{"Mould"}</Link>{" currentMould"}</code> | The mould in the mould dock, or null. |
| <Link id="m-debugfuelduration" /><code>{"private float debugFuelDuration"}</code> | Seconds of smelting time one fuel item gives (default 10). Used for real fuel despite the name. |
| <Link id="m-fuelandroidrenderer" /><code>{"private Renderer fuelAndroidRenderer"}</code> | Renderer for the fuel icon on Android builds. |
| <Link id="m-fueldocks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] fuelDocks"}</code> | Docks that take fuel. |
| <Link id="m-fueliconprogress" /><code>{"private int fuelIconProgress"}</code> | Current fuel icon level, synced to clients. |
| <Link id="m-fuelsprite" /><code>{"private SpriteRenderer fuelSprite"}</code> | Sprite renderer for the fuel level icon. |
| <Link id="m-innerfire" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{" innerFire"}</code> | The fire inside the smelter, lit when smelting starts and put out when it stops. |
| <Link id="m-issmelting" /><code>{"private bool isSmelting"}</code> | Backing field for `IsSmelting`. Saved. |
| <Link id="m-mouldbreak" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" mouldBreak"}</code> | Event invoked when a mould runs out of uses and is destroyed. |
| <Link id="m-moulddock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" mouldDock"}</code> | Dock that takes a mould. |
| <Link id="m-mouldmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" mouldMaterial"}</code> | Physical material of the ingots being cast in the mould. Saved. |
| <Link id="m-mouldresult" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" mouldResult"}</code> | The item the mould will produce for the current batch. Saved. |
| <Link id="m-operationalanimator" /><code>{"private Animation operationalAnimator"}</code> | Animation played while the smelter is operating. |
| <Link id="m-operationalsmoke" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" operationalSmoke"}</code> | Pooled smoke effect definition shown while operating. |
| <Link id="m-operationalsmokeposition" /><code>{"private Transform operationalSmokePosition"}</code> | Where the operational smoke spawns. |
| <Link id="m-oreandroidrenderer" /><code>{"private Renderer oreAndroidRenderer"}</code> | Renderer for the ore icon on Android builds. |
| <Link id="m-oredocks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] oreDocks"}</code> | Docks that take ore or ingots. |
| <Link id="m-oreiconprogress" /><code>{"private int oreIconProgress"}</code> | Current progress icon level, synced to clients. |
| <Link id="m-oresprite" /><code>{"private SpriteRenderer oreSprite"}</code> | Sprite renderer for the ore progress icon. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Progress of the current batch from 0 to 1. Saved. |
| <Link id="m-recipe" /><code>{"private "}<Link to="/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{" recipe"}</code> | The smelting recipe being run, or null when casting in a mould. Saved. |
| <Link id="m-remainingfueltime" /><code>{"private float remainingFuelTime"}</code> | Seconds of fuel left from items already burnt. Saved. |
| <Link id="m-requiredfuel" /><code>{"private float requiredFuel"}</code> | Fuel time the current batch needs. Saved. |
| <Link id="m-smelteractiveaudio" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" smelterActiveAudio"}</code> | Sound played while the smelter operates. |
| <Link id="m-smelteractiveaudiocontrol" /><code>{"private "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" smelterActiveAudioControl"}</code> | Control for the playing operational sound, used to stop it. |
| <Link id="m-smeltersoundpositioner" /><code>{"private Transform smelterSoundPositioner"}</code> | Where the operational sound plays from. |
| <Link id="m-smeltingplayers" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> smeltingPlayers"}</code> | Players who last handled the consumed ore, credited with smelting tasks. |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> | Where smelted items spawn. |
| <Link id="m-spritelevels" /><code>{"private Sprite[] spriteLevels"}</code> | Icon sprites for each fill level, from empty upwards. |
| <Link id="m-spritesteps" /><code>{"private AnimationCurve spriteSteps"}</code> | Curve that maps progress or fuel use (0 to 1) to an icon level. |
| <Link id="m-synceffects" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/smelter-animationevents">{"Smelter.AnimationEvents"}</Link>{"> syncEffects"}</code> | Method sync for smelter effects. |
| <Link id="m-syncicons" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncIcons"}</code> | Method sync for the icon state. |
| <Link id="m-totalfuel" /><code>{"private float totalFuel"}</code> | Total fuel time available when the batch was checked. Saved. |
| <Link id="m-unlockmanager" /><code>{"private "}<Link to="/game-api/types/alta-crafting/smelterunlockmanager">{"SmelterUnlockManager"}</Link>{" unlockManager"}</code> | Gives the unlocked recipes, materials and speed multiplier; adding an unlock rechecks smelting. |
| <Link id="m-whistleaudio" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" whistleAudio"}</code> | Whistle sound played with the ore, fuel and output willie animations. |
| <Link id="m-williefuelanimator" /><code>{"private Animation willieFuelAnimator"}</code> | Animation played when fuel is used. |
| <Link id="m-willieoreanimator" /><code>{"private Animation willieOreAnimator"}</code> | Animation played when a batch starts. |
| <Link id="m-willieoutputanimator" /><code>{"private Animation willieOutputAnimator"}</code> | Animation played when a batch finishes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-issmelting-2" /><code>{"bool IsSmelting { get; }"}</code> | True while the smelter is running a batch. Synced to clients with the icons. |

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maintex" /><code>{"private static int _MainTex { get; }"}</code> | Shader property id for `_MainTex`. |
| <Link id="m-isoperational" /><code>{"private static int IsOperational { get; }"}</code> | Animator hash for the `IsOperational` parameter. |
| <Link id="m-whistle" /><code>{"private static int whistle { get; }"}</code> | Animator hash for `whistle`. Not used in this file. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checksmelt" /><code>{"void CheckSmelt()"}</code> | Server: if not already smelting, restarts the `TrySmelt` coroutine. The public overload lets other code trigger a check. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the `syncIcons` and `syncEffects` method syncs. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: puts out the inner fire if the smelter is not burning. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends a joining player the icon state, and the operational effect if smelting. |

<details>
<summary>21 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the ore, fuel and mould docks and the unlock manager so docking an item calls `CheckSmelt`, and links the bellows to this smelter. |
| <Link id="m-checkmould" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" CheckMould(float totalFuel, Dictionary<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{", int> input, out "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material, out float requiredFuel, out "}<Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" activeMould)"}</code> | If a mould is docked and the input is one ingot type the mould allows and has unlocked, consumes the ingots, uses up the mould and returns the mould's product. |
| <Link id="m-checksmelt-2" /><code>{"private void CheckSmelt("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Server: if not already smelting, restarts the `TrySmelt` coroutine. The public overload lets other code trigger a check. |
| <Link id="m-checkspritezero" /><code>{"private void CheckSpriteZero("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] docks, SpriteRenderer sprite, Renderer renderer)"}</code> | Sets the dock icon sprite to the empty level when none of the given docks hold anything. |
| <Link id="m-consume" /><code>{"private void Consume(Dictionary<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{", int> requirement)"}</code> | Destroys the required amounts from the ore docks and records the players who last handled those items in `smeltingPlayers`. |
| <Link id="m-evaluatefuel" /><code>{"private float EvaluateFuel()"}</code> | Returns the fuel time left plus `debugFuelDuration` for each item in the first non-empty fuel dock. |
| <Link id="m-findrecipe" /><code>{"private "}<Link to="/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{" FindRecipe(float totalFuel, Dictionary<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{", int> input, out float requiredFuel)"}</code> | Finds the first unlocked smelting recipe whose inputs exactly match the docked ores and whose duration fits the fuel, and consumes its inputs. |
| <Link id="m-getinput" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{", int> GetInput()"}</code> | Totals the docked items in the ore docks by item type. |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | After a load, restarts `TrySmelt` with the saved progress if the smelter was smelting when saved. |
| <Link id="m-markplayersaction" /><code>{"private void MarkPlayersAction("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawned)"}</code> | Reports a smelted item to `GameTaskManager` for each player in `smeltingPlayers`, for smelting tasks. |
| <Link id="m-mouldadded" /><code>{"private void MouldAdded("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Stores the docked mould and checks whether smelting can start. |
| <Link id="m-mouldremoved" /><code>{"private void MouldRemoved("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Clears the current mould when it is undocked. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Does nothing. |
| <Link id="m-playeffect" /><code>{"private void PlayEffect("}<Link to="/game-api/types/alta-crafting/smelter-animationevents">{"Smelter.AnimationEvents"}</Link>{" eventIndex)"}</code> | On the server, sends the effect to the chunk; on non-headless builds, plays the matching sound, animation and smoke. |
| <Link id="m-releasesmoke" /><code>{"private void ReleaseSmoke("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Releases the pooled operational smoke when the entity is destroyed by the scene. |
| <Link id="m-restockfuel" /><code>{"private void RestockFuel()"}</code> | Uses one fuel item from the first non-empty fuel dock and adds `debugFuelDuration` seconds of fuel time. |
| <Link id="m-synceffects-2" /><code>{"private void SyncEffects("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-crafting/smelter-animationevents">{"Smelter.AnimationEvents"}</Link>{" eventIndex)"}</code> | Method sync handler that sends an effect index and plays it on remote clients. |
| <Link id="m-syncicons-2" /><code>{"private void SyncIcons("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync handler for `isSmelting` and the fuel and ore icon levels; remote clients update the icon sprites. |
| <Link id="m-trysmelt" /><code>{"private IEnumerator TrySmelt(bool isLoading = false) (iterator)"}</code> | Server coroutine that keeps smelting batches while there is input, fuel and a matching recipe or mould, then spawns the output at `spawnPoint`. |
| <Link id="m-updateandroidsprite" /><code>{"private void UpdateAndroidSprite(Renderer renderer, Sprite sprite)"}</code> | Sets an icon renderer's texture offset to a sprite's place in its atlas. Not called in this build. |
| <Link id="m-updateicons" /><code>{"private void UpdateIcons(bool isForced = false)"}</code> | Works out the fuel and progress icon levels and syncs them to the chunk when they change or when forced. |

</details>

## Used in

Members of other types that take, return or hold a `Smelter`:

[`Bellows.Smelter`](/game-api/types/global-a-b/bellows#m-smelter).
