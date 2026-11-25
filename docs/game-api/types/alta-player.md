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
| `Achievement` | class |  | 11 |  |
| `AchievementDefinition` | class | `ScriptableObject` | 1 |  |
| `AchievementDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Meta.ScriptableObject<AchievementDefinition>` | 0 |  |
| `AchievementManager` | class | `SingletonBehaviour<AchievementManager>`, `IAchievementManager`, `IStatManager` | 5 |  |
| `AchievementStatDefinition` | class | `ScriptableObject` | 2 |  |
| `AchievementStatDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Meta.ScriptableObject<AchievementStatDefinition>` | 0 |  |
| `IAchievementManager` | interface |  | 2 |  |
| `IStatManager` | interface |  | 2 |  |
| `PlatformStats` | abstract class |  | 6 |  |
| `SetupAchievements` | static class |  | 1 |  |
| `Stat` | class |  | 8 |  |
| `StatType` | enum |  | 2 |  |
| `SteamStats` | class | `PlatformStats` | 6 |  |

## Alta.Character

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AccessibleDocks` | class | `MonoBehaviour`, `IInitializeAsLocalPlayer` | 3 | [Player inventory](../items/player-inventory.md): The accessibility option that moves belt docks to easier spots (local player). |
| `ArmController` | class | `CharacterComponentController` | 11 |  |
| `ArmIKController` | class | `CharacterComponentController` | 10 |  |
| `ArmIKControllerHelper` | class | `CharacterComponentHelper<CharacterComponentControllerCollection>` | 4 |  |
| `BasicDummyCharacterController` | class | `MonoBehaviour` | 0 |  |
| `BlinkingController` | class | `MonoBehaviour` | 3 |  |
| `BodyController` | class | `CharacterComponentController` | 8 |  |
| `BodyControllerSettings` | class | `OverridableSettings` | 28 |  |
| `BodyControllerSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<BodyControllerSettings>` | 0 |  |
| `BodyProjection` | class | `MonoBehaviour` | 0 |  |
| `BodyTypeSettings` | class |  | 4 |  |
| `BoneWithRotationLimit` | class | `BoneWithTwistLimit` | 1 |  |
| `BoneWithTwistLimit` | class |  | 2 |  |
| `CharacterCollisionController` | class | `CharacterComponentController` | 2 |  |
| `CharacterCollisionController.CollidersToDisableWhenInteracting` | class |  | 2 |  |
| `CharacterCollisionControllerHelper` | class | `CharacterComponentHelper<CharacterCollisionController>` | 4 |  |
| `CharacterCollisionControllerHelper.BoneBoxCollider` | class | `BoneCollider` | 2 |  |
| `CharacterCollisionControllerHelper.BoneCapsuleCollider` | class | `BoneCollider` | 2 |  |
| `CharacterCollisionControllerHelper.BoneCollider` | class |  | 1 |  |
| `CharacterCollisionControllerHelper.BoneMeshCollider` | class | `BoneCollider` | 2 |  |
| `CharacterCollisionControllerHelper.HandPalmCollider` | class | `BoneBoxCollider` | 1 |  |
| `CharacterComponentController` | abstract class | `MonoBehaviour` | 7 |  |
| `CharacterComponentControllerCollection` | class | `CharacterComponentController` | 6 |  |
| `CharacterComponentHelper<T>` | abstract class | `ScriptHelper` | 0 |  |
| `CharacterDummy` | class | `MonoBehaviour` | 20 |  |
| `CharacterEye` | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 1 |  |
| `CharacterLocalityController` | class | `PlayerControllerLocalityController` | 2 |  |
| `ClavicleController` | class | `CharacterComponentController` | 6 |  |
| `ClavicleControllerSettings` | class | `ScriptableObject` | 12 |  |
| `ClavicleControllerSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<ClavicleControllerSettings>` | 0 |  |
| `ClothesSettings` | class |  | 10 |  |
| `CustomControllerOffset` | class |  | 3 |  |
| `CustomControllerOffsetReader` | class | `IDisposable`, `IInitializable`, `IIsolate` | 3 |  |
| `DestroyedHandRegenerate` | class | `MonoBehaviour` | 1 |  |
| `DockPositionController` | class |  | 2 | [Player inventory](../items/player-inventory.md): Places belt docks for the body type. |
| `DockStore` | class | `IInventoryStore<PickupDock>` | 10 |  |
| `DummyCharacterController` | class | `CharacterComponentController` | 3 |  |
| `ElbowController` | class | `CharacterComponentController` | 9 |  |
| `ElbowControllerSettings` | class | `ScriptableObject` | 8 |  |
| `ElbowControllerSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<ElbowControllerSettings>` | 0 |  |
| `ElbowDataPointScore` | class |  | 3 |  |
| `ElbowDataPointSet` | class | `ScriptableObject` | 3 |  |
| `ElbowGuideDataPoint` | class | `ScriptableObject`, `IElbowGuideDataPoint` | 7 |  |
| `ElbowGuideDataPointRuntime` | class | `IElbowGuideDataPoint` | 6 |  |
| `EyeFocus` | class | `MonoBehaviour` | 2 |  |
| `EyeFocusController` | class | `CharacterComponentController` | 5 |  |
| `EyeFocusControllerSettings` | class | `ScriptableObject` | 21 |  |
| `EyeFocusControllerSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<EyeFocusControllerSettings>` | 0 |  |
| `EyeSettings` | class |  | 3 |  |
| `GhostHandController` | class | `CharacterComponentController` | 10 |  |
| `Hand` | class | `CharacterComponentController` | 34 |  |
| `HandGrip` | class | `MonoBehaviour` | 11 |  |
| `HandGrip.GripFinger` | class |  | 7 |  |
| `HandGrip.GripJoint` | class |  | 10 |  |
| `HandGrip.ThumbGripJoint` | class | `GripJoint` | 3 |  |
| `HandGripConfiguration` | class | `ScriptableObject` | 7 |  |
| `HandGripConfiguration.Finger` | class |  | 4 |  |
| `HandGripConfiguration.Finger.Joint` | class |  | 4 |  |
| `HandGripConfiguration.RotationSnapshots` | class |  | 4 |  |
| `HandStore` | class | `IInventoryStore<Interactor>` | 10 |  |
| `HandTargetHandler` | class | `MonoBehaviour` | 1 |  |
| `IElbowGuideDataPoint` | interface |  | 6 |  |
| `IInventoryStore<out T>` | interface |  | 9 |  |
| `IKSolverManagerWrapper` | class | `CharacterComponentController` | 3 |  |
| `IKTwistRelaxerWrapper` | class | `CharacterComponentController` | 2 |  |
| `InteractionCollisionController` | class | `MonoBehaviour` | 0 |  |
| `Inventory` | class |  | 4 | [Player inventory](../items/player-inventory.md#altacharacterinventory): `PlayerCharacter.Inventory` is a small helper the micro tutorial uses: |
| `LocomotionStyle` | enum |  | 3 |  |
| `MasterHand` | class | `MonoBehaviour` | 3 |  |
| `NeckController` | class | `SimpleIKController` | 1 |  |
| `NeckIKController` | class | `CharacterComponentController` | 3 |  |
| `NeckIKControllerHelper` | class | `CharacterComponentHelper<NeckIKController>` | 3 |  |
| `PersonalSpace` | class | `MonoBehaviour` | 3 |  |
| `PlatformHandAlignment` | class |  | 2 |  |
| `PlayerCharacter` | class | `SmoothLocomotionPlayerController`, `IHasFingertips` | 26 | [PlayerController and the body](../networking/player-controller.md#playercharacter): `Alta.Character.PlayerCharacter`, the VR body. Extra members: |
| `PlayerControllerHandler` | delegate |  | 0 |  |
| `PlayerControllerSettings` | class | `ScriptableObject` | 10 |  |
| `PlayerControllerSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<PlayerControllerSettings>` | 0 |  |
| `PlayerText` | class | `MonoBehaviour` | 1 |  |
| `PositionChangedHandler` | delegate |  | 0 |  |
| `RotationChangedHandler` | delegate |  | 0 |  |
| `RotationLimitWrapper` | class | `CharacterComponentController` | 2 |  |
| `ScaleChangedHandler` | delegate |  | 0 |  |
| `ShoulderTwistController` | class | `CharacterComponentController` | 6 |  |
| `ShoulderTwistControllerHelper` | class | `CharacterComponentHelper<ShoulderTwistController>` | 2 |  |
| `SimpleIKController` | abstract class | `CharacterComponentController` | 0 |  |
| `SkinSettings` | class |  | 4 |  |
| `SpineController` | class | `SimpleIKController` | 2 |  |
| `SpineIKHelper` | class | `ScriptHelper` | 3 |  |
| `TeleportMode` | enum |  | 3 |  |
| `TwistRelaxerController` | class | `CharacterComponentController` | 4 |  |
| `TwistRelaxerControllerHelper` | class | `CharacterComponentHelper<TwistRelaxerController>` | 2 |  |
| `TwistRelaxerSetting` | class |  | 3 |  |

## Alta.Character.MeshRenderers

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CharacterRendererLOD` | internal class |  | 4 |  |

## Alta.PlayerEffects

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CombatShellAnimator` | class | `ShellAnimator` | 8 |  |
| `CombatShellSetting` | class | `ShellSetting` | 1 |  |
| `ShellAnimationHandler` | class |  | 8 |  |
| `ShellAnimator` | abstract class |  | 7 |  |
| `ShellSetting` | abstract class |  | 1 |  |
| `StatDrivenEffect` | class |  | 5 |  |
| `StatEffectHolder` | class |  | 5 |  |
| `StatEffectsDefinition` | class | `ScriptableObject` | 1 |  |
| `StatEffectsDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Stats.ScriptableObject<StatEffectsDefinition>` | 0 |  |
| `StatEffectShellAnimator` | class | `ShellAnimator` | 13 |  |
| `StatEffectShellSetting` | class | `ShellSetting` | 4 |  |

## Alta.PlayerEffects.General.Health

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `DamageState` | class |  | 7 |  |

## Alta.PlayerStates

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AllTransitions` | class |  | 15 |  |
| `CombatState` | class | `PlayerStateBase<PlayingState>` | 7 | [Player states](../networking/player-states.md) |
| `CombatStateSettings` | class | `PlayerStateSettings` | 9 |  |
| `CombatStateSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<CombatStateSettings>` | 0 |  |
| `CustomizationState` | class | `PlayerStateBase` | 3 | [Player states](../networking/player-states.md) |
| `DeadState` | class | `PlayerStateBase` | 4 | [Player states](../networking/player-states.md) |
| `DeadStateSettings` | class | `PlayerStateSettings` | 11 |  |
| `DeadStateSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<DeadStateSettings>` | 0 |  |
| `DeathAnimationSettings` | class |  | 11 |  |
| `DownedState` | class | `PlayerStateBase<PlayingState>` | 6 | [Player states](../networking/player-states.md) |
| `EquipmentState` | class | `PlayerStateBase<PlayingState>` | 5 | [Player states](../networking/player-states.md) |
| `EquipmentStateSettings` | class | `PlayerStateSettings` | 19 |  |
| `EquipmentStateSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<EquipmentStateSettings>` | 0 |  |
| `FirstJoinState` | class | `PlayerStateBase` | 3 | [Player states](../networking/player-states.md) |
| `IPlayerState` | interface |  | 21 |  |
| `IPlayerStateFactory` | interface |  | 1 |  |
| `IPlayerStateSettings` | interface |  | 3 |  |
| `IStateTransitionsManager` | interface |  | 7 |  |
| `KilledData` | class |  | 5 |  |
| `ObjectKilledData` | class | `KilledData` | 4 | [Console events](../console-and-utilities/console-events.md) |
| `PlayerKilledData` | class | `KilledData` | 2 | [Console events](../console-and-utilities/console-events.md) |
| `PlayerStateBase` | abstract class | `IPlayerState` | 19 | [Player states](../networking/player-states.md#playerstatebase): `Alta.PlayerStates.PlayerStateBase` (and `PlayerStateBase<T>` for a decorating state with base `T`). What a state can override: |
| `PlayerStateBase<T>` | abstract class | `PlayerStateBase` | 2 | [Player states](../networking/player-states.md#playerstatebase): `Alta.PlayerStates.PlayerStateBase` (and `PlayerStateBase<T>` for a decorating state with base `T`). What a state can override: |
| `PlayerStateChangeData` | class |  | 4 | [Console events](../console-and-utilities/console-events.md) |
| `PlayerStateFactory` | class | `IPlayerStateFactory` | 2 |  |
| `PlayerStateHandler` | delegate |  | 0 |  |
| `PlayerStateManager` | class | `MonoBehaviour` | 13 | [Player states](../networking/player-states.md#playerstatemanager): `Alta.PlayerStates.PlayerStateManager`, a `MonoBehaviour` on the `Player`. |
| `PlayerStateSettings` | abstract class | `ScriptableObject`, `IPlayerStateSettings` | 3 |  |
| `PlayerStateSettingsManager` | static class |  | 1 |  |
| `PlayerStateType` | enum |  | 9 |  |
| `PlayingState` | class | `PlayerStateBase` | 6 | [Player states](../networking/player-states.md) |
| `PlayingStateSettings` | class | `PlayerStateSettings` | 1 |  |
| `PlayingStateSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<PlayingStateSettings>` | 0 |  |
| `PlayingToSpiritTransition` | class | `StateTransition<PlayingState, SpiritState>` | 1 |  |
| `RemoteStateTransitionsManager` | class | `StateTransitionsManager` | 3 |  |
| `SpiritState` | class | `PlayerStateBase<PlayingState>` | 4 | [Player states](../networking/player-states.md) |
| `SpiritStateSettings` | class | `PlayerStateSettings` | 6 |  |
| `SpiritStateSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Player.ScriptableObject<SpiritStateSettings>` | 0 |  |
| `SpiritToPlayingTransition` | class | `StateTransition<SpiritState, PlayingState>` | 1 |  |
| `StateTransitionsManager` | class | `IStateTransitionsManager` | 8 |  |
| `StatThresholdValue` | struct |  | 7 |  |
| `TestingPlayerStates` | class | `MonoBehaviour` | 4 |  |

## Alta.PlayerStates.Transitions

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `CombatToCombatTransition` | class | `ToCombatTransition<CombatState>` | 0 |  |
| `CustomizationToPlayingTransition` | class | `StateTransition<CustomizationState, PlayingState>` | 1 |  |
| `DeadToPlayingTransition` | class | `StateTransition<DeadState, PlayingState>` | 1 |  |
| `DownedToDeadTransition` | class | `StateTransition<DownedState, DeadState>` | 1 |  |
| `DownedToPlayingTransition` | class | `StateTransition<DownedState, PlayingState>` | 2 |  |
| `EquipmentToPlayingTransition` | class | `EquipmentTransition<EquipmentState, PlayingState>` | 2 |  |
| `EquipmentTransition<TFrom, TTo>` | abstract class | `StateTransition<TFrom, TTo>` | 1 |  |
| `FirstJoinToCustomizationTransition` | class | `StateTransition<FirstJoinState, CustomizationState>` | 1 |  |
| `FirstJoinToPlayingTransition` | class | `StateTransition<FirstJoinState, PlayingState>` | 1 |  |
| `IPlayerStateTransition` | interface |  | 6 |  |
| `PlayingToCombatTransition` | class | `ToCombatTransition<PlayingState>` | 0 |  |
| `PlayingToCustomizationTransition` | class | `StateTransition<PlayingState, CustomizationState>` | 3 |  |
| `PlayingToDeadTransition` | class | `StateTransition<PlayingState, DeadState>` | 1 |  |
| `PlayingToDownedTransition` | class | `StateTransition<PlayingState, DownedState>` | 1 |  |
| `PlayingToEquipmentTransition` | class | `EquipmentTransition<PlayingState, EquipmentState>` | 2 |  |
| `StateTransition<TFrom, TTo>` | abstract class | `IPlayerStateTransition` | 3 |  |
| `ToCombatTransition<TFrom>` | class | `StateTransition<TFrom, CombatState>` | 1 |  |

## Alta.Progression.Skills

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BowDrawSkill` | class | `SpecificPickupBasedSkill` | 3 |  |
| `BowMultiArrowShot` | class | `PickupBasedSkillModifier` | 3 |  |
| `BowMultiArrowShot.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<BowMultiArrowShot>` | 0 |  |
| `BowQuickdraw` | class | `BowDrawSkill` | 0 |  |
| `BowQuickdraw.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<BowQuickdraw>` | 0 |  |
| `BowSlowdraw` | class | `BowDrawSkill` | 0 |  |
| `BowSlowdraw.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<BowSlowdraw>` | 0 |  |
| `FloatValuesPerLevel` | class | `ValuePerLevel<float>` | 0 |  |
| `IntValuesPerLevel` | class | `ValuePerLevel<int>` | 0 |  |
| `ItemLevitator` | class | `MonoBehaviour` | 2 |  |
| `ItemLevitatorExtension` | abstract class | `MonoBehaviour` | 0 |  |
| `LightBeamSkill` | class | `BowDrawSkill` | 1 |  |
| `LightBeamSkill.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Progression.Skills.ScriptableObject<LightBeamSkill>` | 0 |  |
| `MultiArrowConfiguration` | class |  | 2 |  |
| `SpecificPickupBasedSkill` | abstract class | `PickupBasedSkill` | 1 |  |
| `ValuePerLevel<T>` | class |  | 1 |  |

## Alta.QuickAccessActions

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ActionItemData` | class | `ScriptableObject` | 8 |  |
| `ActionItemHandler` | class |  | 5 |  |
| `ActionItemHandlerCollection` | internal class | `ActionItemHandlersBase`, `IActionItemHandlerCollection` | 4 |  |
| `ActionItemHandlerCollectionMap` | internal class | `ActionItemHandlersBase`, `IActionItemHandlerCollection` | 4 |  |
| `ActionItemHandlersBase` | internal abstract class |  | 0 |  |
| `ActionItemsManager` | class | `NetworkEntityBehaviour` | 5 |  |
| `AnimatedEmblem` | class | `NameBoardEmblem`, `IAnimationEndCallbackReceiver` | 1 |  |
| `BoneWeightTestsMenuAction` | class | `QuickAccessMenuAction` | 3 |  |
| `DebugLightMenuAction` | class | `QuickAccessMenuAction` | 3 |  |
| `DecreaseHeightMenuAction` | class | `QuickAccessMenuAction` | 4 |  |
| `DevToolsBoard` | class | `PooledObject`, `IQuickAccessSettingsBoard` | 8 |  |
| `EmptyMenu` | class | `QuickAccessMenuAction` | 3 |  |
| `EquipmentModeQuickAccess` | class | `QuickAccessMenuAction` | 5 |  |
| `HealthBar` | class | `IDisposable` | 5 |  |
| `IActionItemHandlerCollection` | internal interface |  | 3 |  |
| `IQuickAccessDynamicIcon` | interface |  | 1 |  |
| `IQuickAccessSettingsBoard` | interface |  | 4 |  |
| `MemoryDumpMenuAction` | class | `QuickAccessMenuAction` | 3 |  |
| `MicMuteQuickAccessAction` | class | `QuickAccessMenuAction` | 3 |  |
| `ModMuteArgument` | struct |  | 2 |  |
| `ModsMicMuteManager` | class | `NetworkEntityBehaviour` | 5 |  |
| `MODSMicMuteQuickAccessAction` | class | `QuickAccessMenuAction` | 3 |  |
| `MuteNonFriendsActionIcon` | class | `MonoBehaviour`, `IQuickAccessDynamicIcon` | 2 |  |
| `MuteNonFriendsQuickAccessAction` | class | `QuickAccessMenuAction` | 3 |  |
| `NameBoard` | class | `ScaleLerpPooledObject` | 4 |  |
| `NameBoardEmblem` | class | `PooledObject` | 1 |  |
| `NameBoardShield` | class | `ScriptableObject` | 1 |  |
| `NestingMenuAction` | class | `QuickAccessMenuAction` | 9 |  |
| `PhysicsFPSMenuAction` | class | `QuickAccessMenuAction` | 4 |  |
| `PlayerProxy` | class | `NetworkEntityBehaviour`, `ISavable<PlayerProxyData>`, `ISavableSave<PlayerProxyData>`, +1 more | 7 |  |
| `PlayerProxyData` | class | `NewSaveData<PlayerProxy, PlayerProxyData>` | 4 |  |
| `PooledMenuSettings` | class | `PooledObject` | 2 |  |
| `QuickAccessDynamicIcon` | class | `MonoBehaviour`, `IQuickAccessDynamicIcon` | 1 |  |
| `QuickAccessMenuAction` | abstract class | `ScriptableObject` | 15 | [Quick access menu](../items/quick-access-menu.md#quickaccessmenuaction): `Alta.QuickAccessActions.QuickAccessMenuAction`, an abstract `ScriptableObject`. Each bubble is one of these assets. |
| `QuickAccessMenuBubble` | class | `ScaleLerpPooledObject` | 10 |  |
| `QuickAccessMenuController` | class | `ControllerExtension` | 8 | [Quick access menu](../items/quick-access-menu.md#quickaccessmenucontroller): `Alta.QuickAccessActions.QuickAccessMenuController`, a `ControllerExtension` on each hand. |
| `QuickAccessMenuOrientation` | enum |  | 3 |  |
| `QuickAccessMenuSettings` | class | `GlobalSettings<QuickAccessMenuSettings>` | 16 |  |
| `QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent` | struct |  | 3 |  |
| `QuickAccessMenuSettings.QuickAccessMenuBubbleSelectEvent.VfxAndSfxEventSplit` | struct |  | 2 |  |
| `QuickAccessSettingsBoard` | class | `ScaleLerpPooledObject`, `IQuickAccessSettingsBoard` | 6 |  |
| `ReturnToMainMenuAction` | class | `QuickAccessMenuAction` | 5 |  |
| `SettingsQuickAccessMenu` | class | `QuickAccessMenuAction` | 9 |  |
| `ShieldPartDefinition` | class |  | 6 |  |
| `ShowNames` | class | `QuickAccessMenuAction` | 4 |  |
| `SummonActionItemQuickAccess` | class | `QuickAccessMenuAction` | 4 |  |
| `ToggleAccessibleDockMenuAction` | class | `QuickAccessMenuAction` | 4 |  |
| `ToggleDebugMovementMenuAction` | class | `QuickAccessMenuAction` | 4 |  |
| `ToggleEnemyHealthBars` | class | `QuickAccessMenuAction` | 3 |  |
| `ToggleLiveDataDisplayMenuAction` | class | `QuickAccessMenuAction` | 3 |  |
| `ToggleLocalSpeedMenuAction` | class | `QuickAccessMenuAction` | 3 |  |
| `ToggleRuntimeConsole` | class | `QuickAccessMenuAction` | 5 |  |
| `TriggerDebugSetSpawnMenuAction` | class | `QuickAccessMenuAction` | 4 |  |
| `UpdateFarClipMenuAction` | class | `QuickAccessMenuAction` | 3 |  |
| `UpdateHeightMenuAction` | class | `QuickAccessMenuAction` | 4 |  |
| `VivoxConnectionQuickAccessAction` | class | `QuickAccessMenuAction` | 5 |  |
