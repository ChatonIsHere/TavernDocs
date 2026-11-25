---
title: Players and characters
description: "Types in Alta.Character, Alta.PlayerStates, Alta.PlayerEffects, Alta.Progression, Alta.Achievements and Alta.QuickAccessActions."
sidebar_position: 9
---

# Players and characters

Types in Alta.Character, Alta.PlayerStates, Alta.PlayerEffects, Alta.Progression, Alta.Achievements and Alta.QuickAccessActions. 250 types, 20 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Achievements

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`Achievement`](/game-api/types/alta-player/achievement) | class |  | 11 |  |
| [`AchievementDefinition`](/game-api/types/alta-player/achievementdefinition) | class | `ScriptableObject` | 1 |  |
| [`AchievementDefinition.Create`](/game-api/types/alta-player/achievementdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Meta.ScriptableObject<AchievementDefinition>` | 0 |  |
| [`AchievementManager`](/game-api/types/alta-player/achievementmanager) | class | `SingletonBehaviour<AchievementManager>`, `IAchievementManager`, `IStatManager` | 5 |  |
| [`AchievementStatDefinition`](/game-api/types/alta-player/achievementstatdefinition) | class | `ScriptableObject` | 2 |  |
| [`AchievementStatDefinition.Create`](/game-api/types/alta-player/achievementstatdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Meta.ScriptableObject<AchievementStatDefinition>` | 0 |  |
| [`IAchievementManager`](/game-api/types/alta-player/iachievementmanager) | interface |  | 2 |  |
| [`IStatManager`](/game-api/types/alta-player/istatmanager) | interface |  | 2 |  |
| [`PlatformStats`](/game-api/types/alta-player/platformstats) | abstract class |  | 6 |  |
| [`SetupAchievements`](/game-api/types/alta-player/setupachievements) | static class |  | 1 |  |
| [`Stat`](/game-api/types/alta-player/stat) | class |  | 8 |  |
| [`StatType`](/game-api/types/alta-player/stattype) | enum |  | 2 |  |
| [`SteamStats`](/game-api/types/alta-player/steamstats) | class | `PlatformStats` | 6 |  |

## Alta.Character

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AccessibleDocks`](/game-api/types/alta-player/accessibledocks) | class | `MonoBehaviour`, `IInitializeAsLocalPlayer` | 3 | [Player inventory](../items/player-inventory.md): The accessibility option that moves belt docks to easier spots (local player). |
| [`ArmController`](/game-api/types/alta-player/armcontroller) | class | `CharacterComponentController` | 11 |  |
| [`ArmIKController`](/game-api/types/alta-player/armikcontroller) | class | `CharacterComponentController` | 10 |  |
| [`ArmIKControllerHelper`](/game-api/types/alta-player/armikcontrollerhelper) | class | `CharacterComponentHelper<CharacterComponentControllerCollection>` | 4 |  |
| [`BasicDummyCharacterController`](/game-api/types/alta-player/basicdummycharactercontroller) | class | `MonoBehaviour` | 0 |  |
| [`BlinkingController`](/game-api/types/alta-player/blinkingcontroller) | class | `MonoBehaviour` | 3 |  |
| [`BodyController`](/game-api/types/alta-player/bodycontroller) | class | `CharacterComponentController` | 8 |  |
| [`BodyControllerSettings`](/game-api/types/alta-player/bodycontrollersettings) | class | `OverridableSettings` | 28 |  |
| [`BodyControllerSettings.Create`](/game-api/types/alta-player/bodycontrollersettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<BodyControllerSettings>` | 0 |  |
| [`BodyProjection`](/game-api/types/alta-player/bodyprojection) | class | `MonoBehaviour` | 0 |  |
| [`BodyTypeSettings`](/game-api/types/alta-player/bodytypesettings) | class |  | 4 |  |
| [`BoneWithRotationLimit`](/game-api/types/alta-player/bonewithrotationlimit) | class | `BoneWithTwistLimit` | 1 |  |
| [`BoneWithTwistLimit`](/game-api/types/alta-player/bonewithtwistlimit) | class |  | 2 |  |
| [`CharacterCollisionController`](/game-api/types/alta-player/charactercollisioncontroller) | class | `CharacterComponentController` | 2 |  |
| [`CharacterCollisionController.CollidersToDisableWhenInteracting`](/game-api/types/alta-player/charactercollisioncontroller-colliderstodisablewheninteracting) | class |  | 2 |  |
| [`CharacterCollisionControllerHelper`](/game-api/types/alta-player/charactercollisioncontrollerhelper) | class | `CharacterComponentHelper<CharacterCollisionController>` | 4 |  |
| [`CharacterCollisionControllerHelper.BoneBoxCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-boneboxcollider) | class | `BoneCollider` | 2 |  |
| [`CharacterCollisionControllerHelper.BoneCapsuleCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecapsulecollider) | class | `BoneCollider` | 2 |  |
| [`CharacterCollisionControllerHelper.BoneCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-bonecollider) | class |  | 1 |  |
| [`CharacterCollisionControllerHelper.BoneMeshCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-bonemeshcollider) | class | `BoneCollider` | 2 |  |
| [`CharacterCollisionControllerHelper.HandPalmCollider`](/game-api/types/alta-player/charactercollisioncontrollerhelper-handpalmcollider) | class | `BoneBoxCollider` | 1 |  |
| [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller) | abstract class | `MonoBehaviour` | 7 |  |
| [`CharacterComponentControllerCollection`](/game-api/types/alta-player/charactercomponentcontrollercollection) | class | `CharacterComponentController` | 6 |  |
| [`CharacterComponentHelper<T>`](/game-api/types/alta-player/charactercomponenthelper-t) | abstract class | `ScriptHelper` | 0 |  |
| [`CharacterDummy`](/game-api/types/alta-player/characterdummy) | class | `MonoBehaviour` | 20 |  |
| [`CharacterEye`](/game-api/types/alta-player/charactereye) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 1 |  |
| [`CharacterLocalityController`](/game-api/types/alta-player/characterlocalitycontroller) | class | `PlayerControllerLocalityController` | 2 |  |
| [`ClavicleController`](/game-api/types/alta-player/claviclecontroller) | class | `CharacterComponentController` | 6 |  |
| [`ClavicleControllerSettings`](/game-api/types/alta-player/claviclecontrollersettings) | class | `ScriptableObject` | 12 |  |
| [`ClavicleControllerSettings.Create`](/game-api/types/alta-player/claviclecontrollersettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<ClavicleControllerSettings>` | 0 |  |
| [`ClothesSettings`](/game-api/types/alta-player/clothessettings) | class |  | 10 |  |
| [`CustomControllerOffset`](/game-api/types/alta-player/customcontrolleroffset) | class |  | 3 |  |
| [`CustomControllerOffsetReader`](/game-api/types/alta-player/customcontrolleroffsetreader) | class | `IDisposable`, `IInitializable`, `IIsolate` | 3 |  |
| [`DestroyedHandRegenerate`](/game-api/types/alta-player/destroyedhandregenerate) | class | `MonoBehaviour` | 1 |  |
| [`DockPositionController`](/game-api/types/alta-player/dockpositioncontroller) | class |  | 2 | [Player inventory](../items/player-inventory.md): Places belt docks for the body type. |
| [`DockStore`](/game-api/types/alta-player/dockstore) | class | `IInventoryStore<PickupDock>` | 10 |  |
| [`DummyCharacterController`](/game-api/types/alta-player/dummycharactercontroller) | class | `CharacterComponentController` | 3 |  |
| [`ElbowController`](/game-api/types/alta-player/elbowcontroller) | class | `CharacterComponentController` | 9 |  |
| [`ElbowControllerSettings`](/game-api/types/alta-player/elbowcontrollersettings) | class | `ScriptableObject` | 8 |  |
| [`ElbowControllerSettings.Create`](/game-api/types/alta-player/elbowcontrollersettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<ElbowControllerSettings>` | 0 |  |
| [`ElbowDataPointScore`](/game-api/types/alta-player/elbowdatapointscore) | class |  | 3 |  |
| [`ElbowDataPointSet`](/game-api/types/alta-player/elbowdatapointset) | class | `ScriptableObject` | 3 |  |
| [`ElbowGuideDataPoint`](/game-api/types/alta-player/elbowguidedatapoint) | class | `ScriptableObject`, `IElbowGuideDataPoint` | 7 |  |
| [`ElbowGuideDataPointRuntime`](/game-api/types/alta-player/elbowguidedatapointruntime) | class | `IElbowGuideDataPoint` | 6 |  |
| [`EyeFocus`](/game-api/types/alta-player/eyefocus) | class | `MonoBehaviour` | 2 |  |
| [`EyeFocusController`](/game-api/types/alta-player/eyefocuscontroller) | class | `CharacterComponentController` | 5 |  |
| [`EyeFocusControllerSettings`](/game-api/types/alta-player/eyefocuscontrollersettings) | class | `ScriptableObject` | 21 |  |
| [`EyeFocusControllerSettings.Create`](/game-api/types/alta-player/eyefocuscontrollersettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<EyeFocusControllerSettings>` | 0 |  |
| [`EyeSettings`](/game-api/types/alta-player/eyesettings) | class |  | 3 |  |
| [`GhostHandController`](/game-api/types/alta-player/ghosthandcontroller) | class | `CharacterComponentController` | 10 |  |
| [`Hand`](/game-api/types/alta-player/hand) | class | `CharacterComponentController` | 34 |  |
| [`HandGrip`](/game-api/types/alta-player/handgrip) | class | `MonoBehaviour` | 11 |  |
| [`HandGrip.GripFinger`](/game-api/types/alta-player/handgrip-gripfinger) | class |  | 7 |  |
| [`HandGrip.GripJoint`](/game-api/types/alta-player/handgrip-gripjoint) | class |  | 10 |  |
| [`HandGrip.ThumbGripJoint`](/game-api/types/alta-player/handgrip-thumbgripjoint) | class | `GripJoint` | 3 |  |
| [`HandGripConfiguration`](/game-api/types/alta-player/handgripconfiguration) | class | `ScriptableObject` | 7 |  |
| [`HandGripConfiguration.Finger`](/game-api/types/alta-player/handgripconfiguration-finger) | class |  | 4 |  |
| [`HandGripConfiguration.Finger.Joint`](/game-api/types/alta-player/handgripconfiguration-finger-joint) | class |  | 4 |  |
| [`HandGripConfiguration.RotationSnapshots`](/game-api/types/alta-player/handgripconfiguration-rotationsnapshots) | class |  | 4 |  |
| [`HandStore`](/game-api/types/alta-player/handstore) | class | `IInventoryStore<Interactor>` | 10 |  |
| [`HandTargetHandler`](/game-api/types/alta-player/handtargethandler) | class | `MonoBehaviour` | 1 |  |
| [`IElbowGuideDataPoint`](/game-api/types/alta-player/ielbowguidedatapoint) | interface |  | 6 |  |
| [`IInventoryStore<out T>`](/game-api/types/alta-player/iinventorystore-outt) | interface |  | 9 |  |
| [`IKSolverManagerWrapper`](/game-api/types/alta-player/iksolvermanagerwrapper) | class | `CharacterComponentController` | 3 |  |
| [`IKTwistRelaxerWrapper`](/game-api/types/alta-player/iktwistrelaxerwrapper) | class | `CharacterComponentController` | 2 |  |
| [`InteractionCollisionController`](/game-api/types/alta-player/interactioncollisioncontroller) | class | `MonoBehaviour` | 0 |  |
| [`Inventory`](/game-api/types/alta-player/inventory) | class |  | 4 | [Player inventory](../items/player-inventory.md#altacharacterinventory): `PlayerCharacter.Inventory` is a small helper the micro tutorial uses: |
| [`LocomotionStyle`](/game-api/types/alta-player/locomotionstyle) | enum |  | 3 |  |
| [`MasterHand`](/game-api/types/alta-player/masterhand) | class | `MonoBehaviour` | 3 |  |
| [`NeckController`](/game-api/types/alta-player/neckcontroller) | class | `SimpleIKController` | 1 |  |
| [`NeckIKController`](/game-api/types/alta-player/neckikcontroller) | class | `CharacterComponentController` | 3 |  |
| [`NeckIKControllerHelper`](/game-api/types/alta-player/neckikcontrollerhelper) | class | `CharacterComponentHelper<NeckIKController>` | 3 |  |
| [`PersonalSpace`](/game-api/types/alta-player/personalspace) | class | `MonoBehaviour` | 3 |  |
| [`PlatformHandAlignment`](/game-api/types/alta-player/platformhandalignment) | class |  | 2 |  |
| [`PlayerCharacter`](/game-api/types/alta-player/playercharacter) | class | `SmoothLocomotionPlayerController`, `IHasFingertips` | 26 | [PlayerController and the body](../networking/player-controller.md#playercharacter): `Alta.Character.PlayerCharacter`, the VR body. Extra members: |
| [`PlayerControllerHandler`](/game-api/types/alta-player/playercontrollerhandler) | delegate |  | 0 |  |
| [`PlayerControllerSettings`](/game-api/types/alta-player/playercontrollersettings) | class | `ScriptableObject` | 10 |  |
| [`PlayerControllerSettings.Create`](/game-api/types/alta-player/playercontrollersettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<PlayerControllerSettings>` | 0 |  |
| [`PlayerText`](/game-api/types/alta-player/playertext) | class | `MonoBehaviour` | 1 |  |
| [`PositionChangedHandler`](/game-api/types/alta-player/positionchangedhandler) | delegate |  | 0 |  |
| [`RotationChangedHandler`](/game-api/types/alta-player/rotationchangedhandler) | delegate |  | 0 |  |
| [`RotationLimitWrapper`](/game-api/types/alta-player/rotationlimitwrapper) | class | `CharacterComponentController` | 2 |  |
| [`ScaleChangedHandler`](/game-api/types/alta-player/scalechangedhandler) | delegate |  | 0 |  |
| [`ShoulderTwistController`](/game-api/types/alta-player/shouldertwistcontroller) | class | `CharacterComponentController` | 6 |  |
| [`ShoulderTwistControllerHelper`](/game-api/types/alta-player/shouldertwistcontrollerhelper) | class | `CharacterComponentHelper<ShoulderTwistController>` | 2 |  |
| [`SimpleIKController`](/game-api/types/alta-player/simpleikcontroller) | abstract class | `CharacterComponentController` | 0 |  |
| [`SkinSettings`](/game-api/types/alta-player/skinsettings) | class |  | 4 |  |
| [`SpineController`](/game-api/types/alta-player/spinecontroller) | class | `SimpleIKController` | 2 |  |
| [`SpineIKHelper`](/game-api/types/alta-player/spineikhelper) | class | `ScriptHelper` | 3 |  |
| [`TeleportMode`](/game-api/types/alta-player/teleportmode) | enum |  | 3 |  |
| [`TwistRelaxerController`](/game-api/types/alta-player/twistrelaxercontroller) | class | `CharacterComponentController` | 4 |  |
| [`TwistRelaxerControllerHelper`](/game-api/types/alta-player/twistrelaxercontrollerhelper) | class | `CharacterComponentHelper<TwistRelaxerController>` | 2 |  |
| [`TwistRelaxerSetting`](/game-api/types/alta-player/twistrelaxersetting) | class |  | 3 |  |

## Alta.Character.MeshRenderers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`CharacterRendererLOD`](/game-api/types/alta-player/characterrendererlod) | internal class |  | 4 |  |

## Alta.PlayerEffects

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`CombatShellAnimator`](/game-api/types/alta-player/combatshellanimator) | class | `ShellAnimator` | 8 |  |
| [`CombatShellSetting`](/game-api/types/alta-player/combatshellsetting) | class | `ShellSetting` | 1 |  |
| [`ShellAnimationHandler`](/game-api/types/alta-player/shellanimationhandler) | class |  | 8 |  |
| [`ShellAnimator`](/game-api/types/alta-player/shellanimator) | abstract class |  | 7 |  |
| [`ShellSetting`](/game-api/types/alta-player/shellsetting) | abstract class |  | 1 |  |
| [`StatDrivenEffect`](/game-api/types/alta-player/statdriveneffect) | class |  | 5 |  |
| [`StatEffectHolder`](/game-api/types/alta-player/stateffectholder) | class |  | 5 |  |
| [`StatEffectsDefinition`](/game-api/types/alta-player/stateffectsdefinition) | class | `ScriptableObject` | 1 |  |
| [`StatEffectsDefinition.Create`](/game-api/types/alta-player/stateffectsdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<StatEffectsDefinition>` | 0 |  |
| [`StatEffectShellAnimator`](/game-api/types/alta-player/stateffectshellanimator) | class | `ShellAnimator` | 13 |  |
| [`StatEffectShellSetting`](/game-api/types/alta-player/stateffectshellsetting) | class | `ShellSetting` | 4 |  |

## Alta.PlayerEffects.General.Health

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`DamageState`](/game-api/types/alta-player/damagestate) | class |  | 7 |  |

## Alta.PlayerStates

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AllTransitions`](/game-api/types/alta-player/alltransitions) | class |  | 15 |  |
| [`CombatState`](/game-api/types/alta-player/combatstate) | class | `PlayerStateBase<PlayingState>` | 7 | [Player states](../networking/player-states.md) |
| [`CombatStateSettings`](/game-api/types/alta-player/combatstatesettings) | class | `PlayerStateSettings` | 9 |  |
| [`CombatStateSettings.Create`](/game-api/types/alta-player/combatstatesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<CombatStateSettings>` | 0 |  |
| [`CustomizationState`](/game-api/types/alta-player/customizationstate) | class | `PlayerStateBase` | 3 | [Player states](../networking/player-states.md) |
| [`DeadState`](/game-api/types/alta-player/deadstate) | class | `PlayerStateBase` | 4 | [Player states](../networking/player-states.md) |
| [`DeadStateSettings`](/game-api/types/alta-player/deadstatesettings) | class | `PlayerStateSettings` | 11 |  |
| [`DeadStateSettings.Create`](/game-api/types/alta-player/deadstatesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<DeadStateSettings>` | 0 |  |
| [`DeathAnimationSettings`](/game-api/types/alta-player/deathanimationsettings) | class |  | 11 |  |
| [`DownedState`](/game-api/types/alta-player/downedstate) | class | `PlayerStateBase<PlayingState>` | 6 | [Player states](../networking/player-states.md) |
| [`EquipmentState`](/game-api/types/alta-player/equipmentstate) | class | `PlayerStateBase<PlayingState>` | 5 | [Player states](../networking/player-states.md) |
| [`EquipmentStateSettings`](/game-api/types/alta-player/equipmentstatesettings) | class | `PlayerStateSettings` | 19 |  |
| [`EquipmentStateSettings.Create`](/game-api/types/alta-player/equipmentstatesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<EquipmentStateSettings>` | 0 |  |
| [`FirstJoinState`](/game-api/types/alta-player/firstjoinstate) | class | `PlayerStateBase` | 3 | [Player states](../networking/player-states.md) |
| [`IPlayerState`](/game-api/types/alta-player/iplayerstate) | interface |  | 21 |  |
| [`IPlayerStateFactory`](/game-api/types/alta-player/iplayerstatefactory) | interface |  | 1 |  |
| [`IPlayerStateSettings`](/game-api/types/alta-player/iplayerstatesettings) | interface |  | 3 |  |
| [`IStateTransitionsManager`](/game-api/types/alta-player/istatetransitionsmanager) | interface |  | 7 |  |
| [`KilledData`](/game-api/types/alta-player/killeddata) | class |  | 5 |  |
| [`ObjectKilledData`](/game-api/types/alta-player/objectkilleddata) | class | `KilledData` | 4 | [Console events](../console-and-utilities/console-events.md) |
| [`PlayerKilledData`](/game-api/types/alta-player/playerkilleddata) | class | `KilledData` | 2 | [Console events](../console-and-utilities/console-events.md) |
| [`PlayerStateBase`](/game-api/types/alta-player/playerstatebase) | abstract class | `IPlayerState` | 19 | [Player states](../networking/player-states.md#playerstatebase): `Alta.PlayerStates.PlayerStateBase` (and `PlayerStateBase<T>` for a decorating state with base `T`). What a state can override: |
| [`PlayerStateBase<T>`](/game-api/types/alta-player/playerstatebase-t) | abstract class | `PlayerStateBase` | 2 | [Player states](../networking/player-states.md#playerstatebase): `Alta.PlayerStates.PlayerStateBase` (and `PlayerStateBase<T>` for a decorating state with base `T`). What a state can override: |
| [`PlayerStateChangeData`](/game-api/types/alta-player/playerstatechangedata) | class |  | 4 | [Console events](../console-and-utilities/console-events.md) |
| [`PlayerStateFactory`](/game-api/types/alta-player/playerstatefactory) | class | `IPlayerStateFactory` | 2 |  |
| [`PlayerStateHandler`](/game-api/types/alta-player/playerstatehandler) | delegate |  | 0 |  |
| [`PlayerStateManager`](/game-api/types/alta-player/playerstatemanager) | class | `MonoBehaviour` | 13 | [Player states](../networking/player-states.md#playerstatemanager): `Alta.PlayerStates.PlayerStateManager`, a `MonoBehaviour` on the `Player`. |
| [`PlayerStateSettings`](/game-api/types/alta-player/playerstatesettings) | abstract class | `ScriptableObject`, `IPlayerStateSettings` | 3 |  |
| [`PlayerStateSettingsManager`](/game-api/types/alta-player/playerstatesettingsmanager) | static class |  | 1 |  |
| [`PlayerStateType`](/game-api/types/alta-player/playerstatetype) | enum |  | 9 |  |
| [`PlayingState`](/game-api/types/alta-player/playingstate) | class | `PlayerStateBase` | 6 | [Player states](../networking/player-states.md) |
| [`PlayingStateSettings`](/game-api/types/alta-player/playingstatesettings) | class | `PlayerStateSettings` | 1 |  |
| [`PlayingStateSettings.Create`](/game-api/types/alta-player/playingstatesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<PlayingStateSettings>` | 0 |  |
| [`PlayingToSpiritTransition`](/game-api/types/alta-player/playingtospirittransition) | class | `StateTransition<PlayingState, SpiritState>` | 1 |  |
| [`RemoteStateTransitionsManager`](/game-api/types/alta-player/remotestatetransitionsmanager) | class | `StateTransitionsManager` | 3 |  |
| [`SpiritState`](/game-api/types/alta-player/spiritstate) | class | `PlayerStateBase<PlayingState>` | 4 | [Player states](../networking/player-states.md) |
| [`SpiritStateSettings`](/game-api/types/alta-player/spiritstatesettings) | class | `PlayerStateSettings` | 6 |  |
| [`SpiritStateSettings.Create`](/game-api/types/alta-player/spiritstatesettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<SpiritStateSettings>` | 0 |  |
| [`SpiritToPlayingTransition`](/game-api/types/alta-player/spirittoplayingtransition) | class | `StateTransition<SpiritState, PlayingState>` | 1 |  |
| [`StateTransitionsManager`](/game-api/types/alta-player/statetransitionsmanager) | class | `IStateTransitionsManager` | 8 |  |
| [`StatThresholdValue`](/game-api/types/alta-player/statthresholdvalue) | struct |  | 7 |  |
| [`TestingPlayerStates`](/game-api/types/alta-player/testingplayerstates) | class | `MonoBehaviour` | 4 |  |

## Alta.PlayerStates.Transitions

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`CombatToCombatTransition`](/game-api/types/alta-player/combattocombattransition) | class | `ToCombatTransition<CombatState>` | 0 |  |
| [`CustomizationToPlayingTransition`](/game-api/types/alta-player/customizationtoplayingtransition) | class | `StateTransition<CustomizationState, PlayingState>` | 1 |  |
| [`DeadToPlayingTransition`](/game-api/types/alta-player/deadtoplayingtransition) | class | `StateTransition<DeadState, PlayingState>` | 1 |  |
| [`DownedToDeadTransition`](/game-api/types/alta-player/downedtodeadtransition) | class | `StateTransition<DownedState, DeadState>` | 1 |  |
| [`DownedToPlayingTransition`](/game-api/types/alta-player/downedtoplayingtransition) | class | `StateTransition<DownedState, PlayingState>` | 2 |  |
| [`EquipmentToPlayingTransition`](/game-api/types/alta-player/equipmenttoplayingtransition) | class | `EquipmentTransition<EquipmentState, PlayingState>` | 2 |  |
| [`EquipmentTransition<TFrom, TTo>`](/game-api/types/alta-player/equipmenttransition-tfrom-tto) | abstract class | `StateTransition<TFrom, TTo>` | 1 |  |
| [`FirstJoinToCustomizationTransition`](/game-api/types/alta-player/firstjointocustomizationtransition) | class | `StateTransition<FirstJoinState, CustomizationState>` | 1 |  |
| [`FirstJoinToPlayingTransition`](/game-api/types/alta-player/firstjointoplayingtransition) | class | `StateTransition<FirstJoinState, PlayingState>` | 1 |  |
| [`IPlayerStateTransition`](/game-api/types/alta-player/iplayerstatetransition) | interface |  | 6 |  |
| [`PlayingToCombatTransition`](/game-api/types/alta-player/playingtocombattransition) | class | `ToCombatTransition<PlayingState>` | 0 |  |
| [`PlayingToCustomizationTransition`](/game-api/types/alta-player/playingtocustomizationtransition) | class | `StateTransition<PlayingState, CustomizationState>` | 3 |  |
| [`PlayingToDeadTransition`](/game-api/types/alta-player/playingtodeadtransition) | class | `StateTransition<PlayingState, DeadState>` | 1 |  |
| [`PlayingToDownedTransition`](/game-api/types/alta-player/playingtodownedtransition) | class | `StateTransition<PlayingState, DownedState>` | 1 |  |
| [`PlayingToEquipmentTransition`](/game-api/types/alta-player/playingtoequipmenttransition) | class | `EquipmentTransition<PlayingState, EquipmentState>` | 2 |  |
| [`StateTransition<TFrom, TTo>`](/game-api/types/alta-player/statetransition-tfrom-tto) | abstract class | `IPlayerStateTransition` | 3 |  |
| [`ToCombatTransition<TFrom>`](/game-api/types/alta-player/tocombattransition-tfrom) | class | `StateTransition<TFrom, CombatState>` | 1 |  |

## Alta.Progression.Skills

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`BowDrawSkill`](/game-api/types/alta-player/bowdrawskill) | class | `SpecificPickupBasedSkill` | 3 |  |
| [`BowMultiArrowShot`](/game-api/types/alta-player/bowmultiarrowshot) | class | `PickupBasedSkillModifier` | 3 |  |
| [`BowMultiArrowShot.Create`](/game-api/types/alta-player/bowmultiarrowshot-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<BowMultiArrowShot>` | 0 |  |
| [`BowQuickdraw`](/game-api/types/alta-player/bowquickdraw) | class | `BowDrawSkill` | 0 |  |
| [`BowQuickdraw.Create`](/game-api/types/alta-player/bowquickdraw-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<BowQuickdraw>` | 0 |  |
| [`BowSlowdraw`](/game-api/types/alta-player/bowslowdraw) | class | `BowDrawSkill` | 0 |  |
| [`BowSlowdraw.Create`](/game-api/types/alta-player/bowslowdraw-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<BowSlowdraw>` | 0 |  |
| [`FloatValuesPerLevel`](/game-api/types/alta-player/floatvaluesperlevel) | class | `ValuePerLevel<float>` | 0 |  |
| [`IntValuesPerLevel`](/game-api/types/alta-player/intvaluesperlevel) | class | `ValuePerLevel<int>` | 0 |  |
| [`ItemLevitator`](/game-api/types/alta-player/itemlevitator) | class | `MonoBehaviour` | 2 |  |
| [`ItemLevitatorExtension`](/game-api/types/alta-player/itemlevitatorextension) | abstract class | `MonoBehaviour` | 0 |  |
| [`LightBeamSkill`](/game-api/types/alta-player/lightbeamskill) | class | `BowDrawSkill` | 1 |  |
| [`LightBeamSkill.Create`](/game-api/types/alta-player/lightbeamskill-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<LightBeamSkill>` | 0 |  |
| [`MultiArrowConfiguration`](/game-api/types/alta-player/multiarrowconfiguration) | class |  | 2 |  |
| [`SpecificPickupBasedSkill`](/game-api/types/alta-player/specificpickupbasedskill) | abstract class | `PickupBasedSkill` | 1 |  |
| [`ValuePerLevel<T>`](/game-api/types/alta-player/valueperlevel-t) | class |  | 1 |  |

## Alta.QuickAccessActions

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`ActionItemData`](/game-api/types/alta-player/actionitemdata) | class | `ScriptableObject` | 8 |  |
| [`ActionItemHandler`](/game-api/types/alta-player/actionitemhandler) | class |  | 5 |  |
| [`ActionItemHandlerCollection`](/game-api/types/alta-player/actionitemhandlercollection) | internal class | `ActionItemHandlersBase`, `IActionItemHandlerCollection` | 4 |  |
| [`ActionItemHandlerCollectionMap`](/game-api/types/alta-player/actionitemhandlercollectionmap) | internal class | `ActionItemHandlersBase`, `IActionItemHandlerCollection` | 4 |  |
| [`ActionItemHandlersBase`](/game-api/types/alta-player/actionitemhandlersbase) | internal abstract class |  | 0 |  |
| [`ActionItemsManager`](/game-api/types/alta-player/actionitemsmanager) | class | `NetworkEntityBehaviour` | 5 |  |
| [`AnimatedEmblem`](/game-api/types/alta-player/animatedemblem) | class | `NameBoardEmblem`, `IAnimationEndCallbackReceiver` | 1 |  |
| [`BoneWeightTestsMenuAction`](/game-api/types/alta-player/boneweighttestsmenuaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`DebugLightMenuAction`](/game-api/types/alta-player/debuglightmenuaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`DecreaseHeightMenuAction`](/game-api/types/alta-player/decreaseheightmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`DevToolsBoard`](/game-api/types/alta-player/devtoolsboard) | class | `PooledObject`, `IQuickAccessSettingsBoard` | 8 |  |
| [`EmptyMenu`](/game-api/types/alta-player/emptymenu) | class | `QuickAccessMenuAction` | 3 |  |
| [`EquipmentModeQuickAccess`](/game-api/types/alta-player/equipmentmodequickaccess) | class | `QuickAccessMenuAction` | 5 |  |
| [`HealthBar`](/game-api/types/alta-player/healthbar) | class | `IDisposable` | 5 |  |
| [`IActionItemHandlerCollection`](/game-api/types/alta-player/iactionitemhandlercollection) | internal interface |  | 3 |  |
| [`IQuickAccessDynamicIcon`](/game-api/types/alta-player/iquickaccessdynamicicon) | interface |  | 1 |  |
| [`IQuickAccessSettingsBoard`](/game-api/types/alta-player/iquickaccesssettingsboard) | interface |  | 4 |  |
| [`MemoryDumpMenuAction`](/game-api/types/alta-player/memorydumpmenuaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`MicMuteQuickAccessAction`](/game-api/types/alta-player/micmutequickaccessaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`ModMuteArgument`](/game-api/types/alta-player/modmuteargument) | struct |  | 2 |  |
| [`ModsMicMuteManager`](/game-api/types/alta-player/modsmicmutemanager) | class | `NetworkEntityBehaviour` | 5 |  |
| [`MODSMicMuteQuickAccessAction`](/game-api/types/alta-player/modsmicmutequickaccessaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`MuteNonFriendsActionIcon`](/game-api/types/alta-player/mutenonfriendsactionicon) | class | `MonoBehaviour`, `IQuickAccessDynamicIcon` | 2 |  |
| [`MuteNonFriendsQuickAccessAction`](/game-api/types/alta-player/mutenonfriendsquickaccessaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`NameBoard`](/game-api/types/alta-player/nameboard) | class | `ScaleLerpPooledObject` | 4 |  |
| [`NameBoardEmblem`](/game-api/types/alta-player/nameboardemblem) | class | `PooledObject` | 1 |  |
| [`NameBoardShield`](/game-api/types/alta-player/nameboardshield) | class | `ScriptableObject` | 1 |  |
| [`NestingMenuAction`](/game-api/types/alta-player/nestingmenuaction) | class | `QuickAccessMenuAction` | 9 |  |
| [`PhysicsFPSMenuAction`](/game-api/types/alta-player/physicsfpsmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`PlayerProxy`](/game-api/types/alta-player/playerproxy) | class | `NetworkEntityBehaviour`, `ISavable<PlayerProxyData>`, `ISavableSave<PlayerProxyData>`, +1 more | 7 |  |
| [`PlayerProxyData`](/game-api/types/alta-player/playerproxydata) | class | `NewSaveData<PlayerProxy, PlayerProxyData>` | 4 |  |
| [`PooledMenuSettings`](/game-api/types/alta-player/pooledmenusettings) | class | `PooledObject` | 2 |  |
| [`QuickAccessDynamicIcon`](/game-api/types/alta-player/quickaccessdynamicicon) | class | `MonoBehaviour`, `IQuickAccessDynamicIcon` | 1 |  |
| [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction) | abstract class | `ScriptableObject` | 15 | [Quick access menu](../items/quick-access-menu.md#quickaccessmenuaction): `Alta.QuickAccessActions.QuickAccessMenuAction`, an abstract `ScriptableObject`. Each bubble is one of these assets. |
| [`QuickAccessMenuBubble`](/game-api/types/alta-player/quickaccessmenububble) | class | `ScaleLerpPooledObject` | 10 |  |
| [`QuickAccessMenuController`](/game-api/types/alta-player/quickaccessmenucontroller) | class | `ControllerExtension` | 8 | [Quick access menu](../items/quick-access-menu.md#quickaccessmenucontroller): `Alta.QuickAccessActions.QuickAccessMenuController`, a `ControllerExtension` on each hand. |
| [`QuickAccessMenuOrientation`](/game-api/types/alta-player/quickaccessmenuorientation) | enum |  | 3 |  |
| [`QuickAccessMenuSettings`](/game-api/types/alta-player/quickaccessmenusettings) | class | `GlobalSettings<QuickAccessMenuSettings>` | 16 |  |
| [`QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent`](/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent) | struct |  | 3 |  |
| [`QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.VfxAndSfxEventSplit`](/game-api/types/alta-player/quickaccessmenusettings-quickaccessmenububbleselectevent-vfxandsfxeventsplit) | struct |  | 2 |  |
| [`QuickAccessSettingsBoard`](/game-api/types/alta-player/quickaccesssettingsboard) | class | `ScaleLerpPooledObject`, `IQuickAccessSettingsBoard` | 6 |  |
| [`ReturnToMainMenuAction`](/game-api/types/alta-player/returntomainmenuaction) | class | `QuickAccessMenuAction` | 5 |  |
| [`SettingsQuickAccessMenu`](/game-api/types/alta-player/settingsquickaccessmenu) | class | `QuickAccessMenuAction` | 9 |  |
| [`ShieldPartDefinition`](/game-api/types/alta-player/shieldpartdefinition) | class |  | 6 |  |
| [`ShowNames`](/game-api/types/alta-player/shownames) | class | `QuickAccessMenuAction` | 4 |  |
| [`SummonActionItemQuickAccess`](/game-api/types/alta-player/summonactionitemquickaccess) | class | `QuickAccessMenuAction` | 4 |  |
| [`ToggleAccessibleDockMenuAction`](/game-api/types/alta-player/toggleaccessibledockmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`ToggleDebugMovementMenuAction`](/game-api/types/alta-player/toggledebugmovementmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`ToggleEnemyHealthBars`](/game-api/types/alta-player/toggleenemyhealthbars) | class | `QuickAccessMenuAction` | 3 |  |
| [`ToggleLiveDataDisplayMenuAction`](/game-api/types/alta-player/togglelivedatadisplaymenuaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`ToggleLocalSpeedMenuAction`](/game-api/types/alta-player/togglelocalspeedmenuaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`ToggleRuntimeConsole`](/game-api/types/alta-player/toggleruntimeconsole) | class | `QuickAccessMenuAction` | 5 |  |
| [`TriggerDebugSetSpawnMenuAction`](/game-api/types/alta-player/triggerdebugsetspawnmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`UpdateFarClipMenuAction`](/game-api/types/alta-player/updatefarclipmenuaction) | class | `QuickAccessMenuAction` | 3 |  |
| [`UpdateHeightMenuAction`](/game-api/types/alta-player/updateheightmenuaction) | class | `QuickAccessMenuAction` | 4 |  |
| [`VivoxConnectionQuickAccessAction`](/game-api/types/alta-player/vivoxconnectionquickaccessaction) | class | `QuickAccessMenuAction` | 5 |  |
