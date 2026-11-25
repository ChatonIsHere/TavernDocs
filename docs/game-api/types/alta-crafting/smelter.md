---
title: "Smelter"
description: "One per smelter in the world."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Smelter

A **class** in `Root.Township`, `Alta.Blacksmithing`.

One per smelter in the world.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<SmelterSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<SmelterSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SmelterSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t)
- **Derived types** [`SmelterSaveData`](/game-api/types/alta-crafting/smeltersavedata)
- **Nested types** [`AnimationEvents`](/game-api/types/alta-crafting/smelter-animationevents)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging#smelter)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Smelter()"}</code> |

## Fields

<details>
<summary>40 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activeoperationsmoke" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeOperationSmoke"}</code> |
| <Link id="m-bellows" /><code>{"private "}<Link to="/game-api/types/global-a-b/bellows">{"Bellows"}</Link>{" bellows"}</code> |
| <Link id="m-currentmould" /><code>{"private "}<Link to="/game-api/types/global-m-o/mould">{"Mould"}</Link>{" currentMould"}</code> |
| <Link id="m-debugfuelduration" /><code>{"private float debugFuelDuration"}</code> |
| <Link id="m-fuelandroidrenderer" /><code>{"private Renderer fuelAndroidRenderer"}</code> |
| <Link id="m-fueldocks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] fuelDocks"}</code> |
| <Link id="m-fueliconprogress" /><code>{"private int fuelIconProgress"}</code> |
| <Link id="m-fuelsprite" /><code>{"private SpriteRenderer fuelSprite"}</code> |
| <Link id="m-innerfire" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/fire">{"Fire"}</Link>{" innerFire"}</code> |
| <Link id="m-issmelting" /><code>{"private bool isSmelting"}</code> |
| <Link id="m-mouldbreak" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" mouldBreak"}</code> |
| <Link id="m-moulddock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" mouldDock"}</code> |
| <Link id="m-mouldmaterial" /><code>{"private "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" mouldMaterial"}</code> |
| <Link id="m-mouldresult" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" mouldResult"}</code> |
| <Link id="m-operationalanimator" /><code>{"private Animation operationalAnimator"}</code> |
| <Link id="m-operationalsmoke" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" operationalSmoke"}</code> |
| <Link id="m-operationalsmokeposition" /><code>{"private Transform operationalSmokePosition"}</code> |
| <Link id="m-oreandroidrenderer" /><code>{"private Renderer oreAndroidRenderer"}</code> |
| <Link id="m-oredocks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] oreDocks"}</code> |
| <Link id="m-oreiconprogress" /><code>{"private int oreIconProgress"}</code> |
| <Link id="m-oresprite" /><code>{"private SpriteRenderer oreSprite"}</code> |
| <Link id="m-progress" /><code>{"private float progress"}</code> |
| <Link id="m-recipe" /><code>{"private "}<Link to="/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{" recipe"}</code> |
| <Link id="m-remainingfueltime" /><code>{"private float remainingFuelTime"}</code> |
| <Link id="m-requiredfuel" /><code>{"private float requiredFuel"}</code> |
| <Link id="m-smelteractiveaudio" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" smelterActiveAudio"}</code> |
| <Link id="m-smelteractiveaudiocontrol" /><code>{"private "}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{" smelterActiveAudioControl"}</code> |
| <Link id="m-smeltersoundpositioner" /><code>{"private Transform smelterSoundPositioner"}</code> |
| <Link id="m-smeltingplayers" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> smeltingPlayers"}</code> |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> |
| <Link id="m-spritelevels" /><code>{"private Sprite[] spriteLevels"}</code> |
| <Link id="m-spritesteps" /><code>{"private AnimationCurve spriteSteps"}</code> |
| <Link id="m-synceffects" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/smelter-animationevents">{"Smelter.AnimationEvents"}</Link>{"> syncEffects"}</code> |
| <Link id="m-syncicons" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncIcons"}</code> |
| <Link id="m-totalfuel" /><code>{"private float totalFuel"}</code> |
| <Link id="m-unlockmanager" /><code>{"private "}<Link to="/game-api/types/alta-crafting/smelterunlockmanager">{"SmelterUnlockManager"}</Link>{" unlockManager"}</code> |
| <Link id="m-whistleaudio" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" whistleAudio"}</code> |
| <Link id="m-williefuelanimator" /><code>{"private Animation willieFuelAnimator"}</code> |
| <Link id="m-willieoreanimator" /><code>{"private Animation willieOreAnimator"}</code> |
| <Link id="m-willieoutputanimator" /><code>{"private Animation willieOutputAnimator"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-issmelting-2" /><code>{"bool IsSmelting { get; }"}</code> |

<details>
<summary>3 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-maintex" /><code>{"private static int _MainTex { get; }"}</code> |
| <Link id="m-isoperational" /><code>{"private static int IsOperational { get; }"}</code> |
| <Link id="m-whistle" /><code>{"private static int whistle { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-checksmelt" /><code>{"void CheckSmelt()"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

<details>
<summary>21 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-checkmould" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" CheckMould(float totalFuel, Dictionary<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{", int> input, out "}<Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material, out float requiredFuel, out "}<Link to="/game-api/types/global-m-o/moulddefinition">{"MouldDefinition"}</Link>{" activeMould)"}</code> |
| <Link id="m-checksmelt-2" /><code>{"private void CheckSmelt("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-checkspritezero" /><code>{"private void CheckSpriteZero("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] docks, SpriteRenderer sprite, Renderer renderer)"}</code> |
| <Link id="m-consume" /><code>{"private void Consume(Dictionary<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{", int> requirement)"}</code> |
| <Link id="m-evaluatefuel" /><code>{"private float EvaluateFuel()"}</code> |
| <Link id="m-findrecipe" /><code>{"private "}<Link to="/game-api/types/alta-crafting/smeltingrecipe">{"SmeltingRecipe"}</Link>{" FindRecipe(float totalFuel, Dictionary<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{", int> input, out float requiredFuel)"}</code> |
| <Link id="m-getinput" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{", int> GetInput()"}</code> |
| <Link id="m-loadsetup" /><code>{"private void Alta.Chunks.ISavableFull.LoadSetup()"}</code> |
| <Link id="m-markplayersaction" /><code>{"private void MarkPlayersAction("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawned)"}</code> |
| <Link id="m-mouldadded" /><code>{"private void MouldAdded("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-mouldremoved" /><code>{"private void MouldRemoved("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-playeffect" /><code>{"private void PlayEffect("}<Link to="/game-api/types/alta-crafting/smelter-animationevents">{"Smelter.AnimationEvents"}</Link>{" eventIndex)"}</code> |
| <Link id="m-releasesmoke" /><code>{"private void ReleaseSmoke("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-restockfuel" /><code>{"private void RestockFuel()"}</code> |
| <Link id="m-synceffects-2" /><code>{"private void SyncEffects("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-crafting/smelter-animationevents">{"Smelter.AnimationEvents"}</Link>{" eventIndex)"}</code> |
| <Link id="m-syncicons-2" /><code>{"private void SyncIcons("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-trysmelt" /><code>{"private IEnumerator TrySmelt(bool isLoading = false) (iterator)"}</code> |
| <Link id="m-updateandroidsprite" /><code>{"private void UpdateAndroidSprite(Renderer renderer, Sprite sprite)"}</code> |
| <Link id="m-updateicons" /><code>{"private void UpdateIcons(bool isForced = false)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Smelter`:

[`Bellows.Smelter`](/game-api/types/global-a-b/bellows#m-smelter).
