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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<SmelterSaveData>`](/mod/game-api/types/alta-world/isavablefull-t), [`ISavable<SmelterSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<SmelterSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/mod/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`SmelterSaveData`](/mod/game-api/types/alta-crafting/smeltersavedata)
- **Nested types** [`AnimationEvents`](/mod/game-api/types/alta-crafting/smelter-animationevents)
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging#smelter)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Smelter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>40 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeoperationsmoke" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeOperationSmoke"}</code> | <span className="api-desc">The pooled smoke effect shown while operating.</span> |
| <Link id="m-bellows" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/bellows">{"Bellows"}</Link>{" bellows"}</code> | <span className="api-desc">The smelter's bellows; its `SteadyValue` speeds up progress and fuel use.</span> |
| <Link id="m-currentmould" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/mould">{"Mould"}</Link>{" currentMould"}</code> | <span className="api-desc">The mould in the mould dock, or null.</span> |
| <Link id="m-debugfuelduration" /><code>{"private float debugFuelDuration"}</code> | <span className="api-desc">Seconds of smelting time one fuel item gives (default 10). Used for real fuel despite the name.</span> |
| <Link id="m-fuelandroidrenderer" /><code>{"private Renderer fuelAndroidRenderer"}</code> | <span className="api-desc">Renderer for the fuel icon on Android builds.</span> |
| <Link id="m-fueldocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] fuelDocks"}</code> | <span className="api-desc">Docks that take fuel.</span> |
| <Link id="m-fueliconprogress" /><code>{"private int fuelIconProgress"}</code> | <span className="api-desc">Current fuel icon level, synced to clients.</span> |
| <Link id="m-fuelsprite" /><code>{"private SpriteRenderer fuelSprite"}</code> | <span className="api-desc">Sprite renderer for the fuel level icon.</span> |
| <Link id="m-innerfire" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{" innerFire"}</code> | <span className="api-desc">The fire inside the smelter, lit when smelting starts and put out when it stops.</span> |
| <Link id="m-issmelting" /><code>{"private bool isSmelting"}</code> | <span className="api-desc">Backing field for `IsSmelting`. Saved.</span> |
| <Link id="m-mouldbreak" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" mouldBreak"}</code> | <span className="api-desc">Event invoked when a mould runs out of uses and is destroyed.</span> |
| <Link id="m-moulddock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" mouldDock"}</code> | <span className="api-desc">Dock that takes a mould.</span> |
| <Link id="m-mouldmaterial" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" mouldMaterial"}</code> | <span className="api-desc">Physical material of the ingots being cast in the mould. Saved.</span> |
| <Link id="m-mouldresult" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" mouldResult"}</code> | <span className="api-desc">The item the mould will produce for the current batch. Saved.</span> |
| <Link id="m-operationalanimator" /><code>{"private Animation operationalAnimator"}</code> | <span className="api-desc">Animation played while the smelter is operating.</span> |
| <Link id="m-operationalsmoke" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" operationalSmoke"}</code> | <span className="api-desc">Pooled smoke effect definition shown while operating.</span> |
| <Link id="m-operationalsmokeposition" /><code>{"private Transform operationalSmokePosition"}</code> | <span className="api-desc">Where the operational smoke spawns.</span> |
| <Link id="m-oreandroidrenderer" /><code>{"private Renderer oreAndroidRenderer"}</code> | <span className="api-desc">Renderer for the ore icon on Android builds.</span> |
| <Link id="m-oredocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] oreDocks"}</code> | <span className="api-desc">Docks that take ore or ingots.</span> |
| <Link id="m-oreiconprogress" /><code>{"private int oreIconProgress"}</code> | <span className="api-desc">Current progress icon level, synced to clients.</span> |
| <Link id="m-oresprite" /><code>{"private SpriteRenderer oreSprite"}</code> | <span className="api-desc">Sprite renderer for the ore progress icon.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Progress of the current batch from 0 to 1. Saved.</span> |
| <Link id="m-recipe" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{" recipe"}</code> | <span className="api-desc">The smelting recipe being run, or null when casting in a mould. Saved.</span> |
| <Link id="m-remainingfueltime" /><code>{"private float remainingFuelTime"}</code> | <span className="api-desc">Seconds of fuel left from items already burnt. Saved.</span> |
| <Link id="m-requiredfuel" /><code>{"private float requiredFuel"}</code> | <span className="api-desc">Fuel time the current batch needs. Saved.</span> |
| <Link id="m-smelteractiveaudio" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" smelterActiveAudio"}</code> | <span className="api-desc">Sound played while the smelter operates.</span> |
| <Link id="m-smelteractiveaudiocontrol" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" smelterActiveAudioControl"}</code> | <span className="api-desc">Control for the playing operational sound, used to stop it.</span> |
| <Link id="m-smeltersoundpositioner" /><code>{"private Transform smelterSoundPositioner"}</code> | <span className="api-desc">Where the operational sound plays from.</span> |
| <Link id="m-smeltingplayers" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> smeltingPlayers"}</code> | <span className="api-desc">Players who last handled the consumed ore, credited with smelting tasks.</span> |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> | <span className="api-desc">Where smelted items spawn.</span> |
| <Link id="m-spritelevels" /><code>{"private Sprite[] spriteLevels"}</code> | <span className="api-desc">Icon sprites for each fill level, from empty upwards.</span> |
| <Link id="m-spritesteps" /><code>{"private AnimationCurve spriteSteps"}</code> | <span className="api-desc">Curve that maps progress or fuel use (0 to 1) to an icon level.</span> |
| <Link id="m-synceffects" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-crafting/smelter-animationevents">{"Smelter.AnimationEvents"}</Link>{"> syncEffects"}</code> | <span className="api-desc">Method sync for smelter effects.</span> |
| <Link id="m-syncicons" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncIcons"}</code> | <span className="api-desc">Method sync for the icon state.</span> |
| <Link id="m-totalfuel" /><code>{"private float totalFuel"}</code> | <span className="api-desc">Total fuel time available when the batch was checked. Saved.</span> |
| <Link id="m-unlockmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/smelterunlockmanager">{"SmelterUnlockManager"}</Link>{" unlockManager"}</code> | <span className="api-desc">Gives the unlocked recipes, materials and speed multiplier; adding an unlock rechecks smelting.</span> |
| <Link id="m-whistleaudio" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" whistleAudio"}</code> | <span className="api-desc">Whistle sound played with the ore, fuel and output willie animations.</span> |
| <Link id="m-williefuelanimator" /><code>{"private Animation willieFuelAnimator"}</code> | <span className="api-desc">Animation played when fuel is used.</span> |
| <Link id="m-willieoreanimator" /><code>{"private Animation willieOreAnimator"}</code> | <span className="api-desc">Animation played when a batch starts.</span> |
| <Link id="m-willieoutputanimator" /><code>{"private Animation willieOutputAnimator"}</code> | <span className="api-desc">Animation played when a batch finishes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-issmelting-2" /><code>{"bool IsSmelting { get; }"}</code> | <span className="api-desc">True while the smelter is running a batch. Synced to clients with the icons.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maintex" /><code>{"private static int _MainTex { get; }"}</code> | <span className="api-desc">Shader property id for `_MainTex`.</span> |
| <Link id="m-isoperational" /><code>{"private static int IsOperational { get; }"}</code> | <span className="api-desc">Animator hash for the `IsOperational` parameter.</span> |
| <Link id="m-whistle" /><code>{"private static int whistle { get; }"}</code> | <span className="api-desc">Animator hash for `whistle`. Not used in this file.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checksmelt" /><code>{"void CheckSmelt()"}</code> | <span className="api-desc">Server: if not already smelting, restarts the `TrySmelt` coroutine. The public overload lets other code trigger a check.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the `syncIcons` and `syncEffects` method syncs.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: puts out the inner fire if the smelter is not burning.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends a joining player the icon state, and the operational effect if smelting.</span> |

<details className="api-private">
<summary>21 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the ore, fuel and mould docks and the unlock manager so docking an item calls `CheckSmelt`, and links the bellows to this smelter.</span> |
| <Link id="m-checkmould" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" CheckMould(float totalFuel, Dictionary<"}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{", int> input, out "}<Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material, out float requiredFuel, out "}<Link to="/mod/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" activeMould)"}</code> | <span className="api-desc">If a mould is docked and the input is one ingot type the mould allows and has unlocked, consumes the ingots, uses up the mould and returns the mould's product.</span> |
| <Link id="m-checksmelt-2" /><code>{"private void CheckSmelt("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Server: if not already smelting, restarts the `TrySmelt` coroutine. The public overload lets other code trigger a check.</span> |
| <Link id="m-checkspritezero" /><code>{"private void CheckSpriteZero("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] docks, SpriteRenderer sprite, Renderer renderer)"}</code> | <span className="api-desc">Sets the dock icon sprite to the empty level when none of the given docks hold anything.</span> |
| <Link id="m-consume" /><code>{"private void Consume(Dictionary<"}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{", int> requirement)"}</code> | <span className="api-desc">Destroys the required amounts from the ore docks and records the players who last handled those items in `smeltingPlayers`.</span> |
| <Link id="m-evaluatefuel" /><code>{"private float EvaluateFuel()"}</code> | <span className="api-desc">Returns the fuel time left plus `debugFuelDuration` for each item in the first non-empty fuel dock.</span> |
| <Link id="m-findrecipe" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{" FindRecipe(float totalFuel, Dictionary<"}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{", int> input, out float requiredFuel)"}</code> | <span className="api-desc">Finds the first unlocked smelting recipe whose inputs exactly match the docked ores and whose duration fits the fuel, and consumes its inputs.</span> |
| <Link id="m-getinput" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{", int> GetInput()"}</code> | <span className="api-desc">Totals the docked items in the ore docks by item type.</span> |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> | <span className="api-desc">After a load, restarts `TrySmelt` with the saved progress if the smelter was smelting when saved.</span> |
| <Link id="m-markplayersaction" /><code>{"private void MarkPlayersAction("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawned)"}</code> | <span className="api-desc">Reports a smelted item to `GameTaskManager` for each player in `smeltingPlayers`, for smelting tasks.</span> |
| <Link id="m-mouldadded" /><code>{"private void MouldAdded("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Stores the docked mould and checks whether smelting can start.</span> |
| <Link id="m-mouldremoved" /><code>{"private void MouldRemoved("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Clears the current mould when it is undocked.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-playeffect" /><code>{"private void PlayEffect("}<Link to="/mod/game-api/types/alta-crafting/smelter-animationevents">{"Smelter.AnimationEvents"}</Link>{" eventIndex)"}</code> | <span className="api-desc">On the server, sends the effect to the chunk; on non-headless builds, plays the matching sound, animation and smoke.</span> |
| <Link id="m-releasesmoke" /><code>{"private void ReleaseSmoke("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Releases the pooled operational smoke when the entity is destroyed by the scene.</span> |
| <Link id="m-restockfuel" /><code>{"private void RestockFuel()"}</code> | <span className="api-desc">Uses one fuel item from the first non-empty fuel dock and adds `debugFuelDuration` seconds of fuel time.</span> |
| <Link id="m-synceffects-2" /><code>{"private void SyncEffects("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-crafting/smelter-animationevents">{"Smelter.AnimationEvents"}</Link>{" eventIndex)"}</code> | <span className="api-desc">Method sync handler that sends an effect index and plays it on remote clients.</span> |
| <Link id="m-syncicons-2" /><code>{"private void SyncIcons("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync handler for `isSmelting` and the fuel and ore icon levels; remote clients update the icon sprites.</span> |
| <Link id="m-trysmelt" /><code>{"private IEnumerator TrySmelt(bool isLoading = false) (iterator)"}</code> | <span className="api-desc">Server coroutine that keeps smelting batches while there is input, fuel and a matching recipe or mould, then spawns the output at `spawnPoint`.</span> |
| <Link id="m-updateandroidsprite" /><code>{"private void UpdateAndroidSprite(Renderer renderer, Sprite sprite)"}</code> | <span className="api-desc">Sets an icon renderer's texture offset to a sprite's place in its atlas. Not called in this build.</span> |
| <Link id="m-updateicons" /><code>{"private void UpdateIcons(bool isForced = false)"}</code> | <span className="api-desc">Works out the fuel and progress icon levels and syncs them to the chunk when they change or when forced.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Smelter`:

<div className="api-used-in">

[`Bellows.Smelter`](/mod/game-api/types/global-a-b/bellows#m-smelter).

</div>
