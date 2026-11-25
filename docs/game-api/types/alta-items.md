---
title: "Items, inventory and logic"
description: "Types in Alta.Inventory, Alta.Impact, Alta.Pages, Alta.Mechanisms and Alta.Logic."
sidebar_position: 6
---

# Items, inventory and logic

Types in Alta.Inventory, Alta.Impact, Alta.Pages, Alta.Mechanisms and Alta.Logic. 289 types, 82 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Impact

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ArmorDefinition` | class | `ScriptableObject` | 2 | [Impacts and hit detection](../items/impacts.md) |
| `ArmorDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Equipment.ScriptableObject<ArmorDefinition>` | 0 |  |
| `BlockedTrigger` | class | `MonoBehaviour` | 1 |  |
| `BoulderDefinition` | class | `HashedGeneralValue<BoulderDefinition>` | 6 |  |
| `BoulderDefinition.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Mining.ScriptableObject<BoulderDefinition>` | 0 |  |
| `ColliderMap` | class |  | 3 |  |
| `ColliderModifierSettings` | abstract class | `ScriptableObject` | 2 | [Impacts and hit detection](../items/impacts.md) |
| `CollisionFilter` | delegate |  | 0 |  |
| `ContactPointStructure` | struct |  | 8 |  |
| `ContactProjectile` | abstract class | `MonoBehaviour`, `IToolHitDependant`, `IImpactorResetEffect` | 4 | [Impacts and hit detection](../items/impacts.md) |
| `CraftableImpactDetector` | class | `CraftableImpactDetectorBase` | 0 | [Impacts and hit detection](../items/impacts.md) |
| `CraftableImpactDetectorBase` | abstract class | `ImpactDetector` | 1 |  |
| `CutableObject` | class | `TriggerImpactDetectorBase` | 0 | [Impacts and hit detection](../items/impacts.md) |
| `DamageData` | class |  | 2 | [Health and damage](../items/health-and-damage.md#damagedata-and-damagesource) |
| `DamageMultiplierCollider` | class | `ColliderModifierSettings` | 2 | [Impacts and hit detection](../items/impacts.md) |
| `DamageSource` | enum |  | 8 | [Health and damage](../items/health-and-damage.md#damagedata-and-damagesource) |
| `DelayedImpactResolver` | static class |  | 3 | [Impacts and hit detection](../items/impacts.md) |
| `DirectionalMultiplierCollider` | class | `ColliderModifierSettings` | 2 | [Impacts and hit detection](../items/impacts.md) |
| `EmbeddableManager` | class | `MonoBehaviour` | 9 |  |
| `EmbeddableSurface` | class | `MonoBehaviour` | 0 |  |
| `EquipmentReference` | class | `MonoBehaviour` | 2 | [Impacts and hit detection](../items/impacts.md) |
| `EquipmentReference.EquipmentChangedHandler` | delegate |  | 0 |  |
| `FixedImpactor` | class | `ImpactGenerator`, `INetworkEntityBehaviour` | 11 |  |
| `FixedImpactorGroup` | class | `ComponentGroup<FixedImpactor>` | 2 | [Combat, damage and death](../creatures/combat-and-damage.md): `Charge()` and `Reset()` for several at once. |
| `HitModifierEffect` | class | `NetworkEntityBehaviour` | 2 |  |
| `IImpactEffect` | interface |  | 1 |  |
| `IImpactorResetEffect` | interface |  | 1 |  |
| `ImpactChannel` | class | `ScriptableObject` | 1 | [Impacts and hit detection](../items/impacts.md) |
| `ImpactChannel.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Impact.ScriptableObject<ImpactChannel>` | 0 |  |
| `ImpactDetector` | class | `MonoBehaviour`, `IListenToPhysicalMaterial`, `INetworkEntityBehaviour`, +2 more | 16 | [Impacts and hit detection](../items/impacts.md#impactdetector): On anything that can be hit: creature body parts, rocks, trees, players. |
| `ImpactDetector.ImpactSyncArguments` | struct |  | 7 |  |
| `ImpactDetectorCentral` | class | `NetworkEntityBehaviour` | 2 | [Impacts and hit detection](../items/impacts.md): On entities with several detectors. |
| `ImpactDetectorColliderModifier` | class | `MonoBehaviour` | 2 |  |
| `ImpactDetectorSettings` | class | `ScriptableObject` | 5 | [Impacts and hit detection](../items/impacts.md): Detector data: hit effects, whether it gives XP, whether it wears tools. |
| `ImpactDetectorSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Impact.ScriptableObject<ImpactDetectorSettings>` | 0 |  |
| `ImpactDetectorSettings.ImpactSettings` | class |  | 7 |  |
| `ImpactGenerator` | abstract class | `MonoBehaviour` | 25 |  |
| `ImpactHit` | class | `DamageData` | 23 | [Impacts and hit detection](../items/impacts.md#impacthit-and-impacthitwithtool) |
| `ImpactHitEvent` | class | `AltaEvent<ImpactHitWithTool, ImpactHitUnityevent>` | 0 |  |
| `ImpactHitThresholdTrigger` | class | `MonoBehaviour` | 0 |  |
| `ImpactHitTrigger` | class | `MonoBehaviour` | 0 |  |
| `ImpactHitUnityevent` | class | `UnityEvent<ImpactHitWithTool>` | 0 |  |
| `ImpactHitWithTool` | class | `ImpactHit` | 16 | [Impacts and hit detection](../items/impacts.md#impacthit-and-impacthitwithtool) |
| `ImpactImmunityGroup` | class | `ScriptableObject` | 1 | [Impacts and hit detection](../items/impacts.md): A multiplier when an impactor and a detector share a group. |
| `ImpactImmunityGroup.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Impact.ScriptableObject<ImpactImmunityGroup>` | 0 |  |
| `ImpactModifier` | class | `NetworkEntityBehaviour` | 2 |  |
| `ImpactModifierComponent` | abstract class | `ScriptableObject` | 4 |  |
| `ImpactModifierMultiplier` | class | `ImpactModifierComponent` | 1 |  |
| `ImpactModifierStatAffect` | class | `ImpactModifierComponent` | 1 |  |
| `Impactor` | class | `ImpactGenerator`, `IGetRigidbody` | 4 |  |
| `ImpactorAreaFilter<T>` | abstract class | `ImpactorFilter` | 2 |  |
| `ImpactorFilter` | abstract class | `ScriptableObject` | 1 |  |
| `ImpactorMap` | class | `MonoBehaviour` | 5 |  |
| `ImpactorSettings` | class | `ScriptableObject` | 8 | [Impacts and hit detection](../items/impacts.md) |
| `ImpactorValues` | class | `ScriptableObject` | 12 | [Impacts and hit detection](../items/impacts.md#impactorvalues): Each impactor points at an `ImpactorValues` asset: |
| `ImpactTool` | class | `MonoBehaviour`, `IGetRigidbody` | 45 | [Impacts and hit detection](../items/impacts.md#impacttool): Get it with `GetComponent<ImpactTool>()` on the item, or `entity.CommonImpactTool`. |
| `ImpactTool.OnCollidedHit` | delegate |  | 0 |  |
| `ImpactTool.OnCollisionEnterEvent` | delegate |  | 0 |  |
| `ImpactTool.OnGeneratedHit` | delegate |  | 0 |  |
| `ImpactType` | enum |  | 7 |  |
| `ImpactTypeFilter` | class |  | 2 |  |
| `INetworkProjectile` | interface |  | 5 |  |
| `IToolHitDependant` | interface |  | 2 |  |
| `MiningSettings` | class | `GlobalSettings<MiningSettings>` | 14 | [Impacts and hit detection](../items/impacts.md): Global haptics and strike sound settings. |
| `MiningSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<MiningSettings>` | 0 |  |
| `NetworkContactProjectile` | class | `ContactProjectile`, `INetworkProjectile` | 4 | [Impacts and hit detection](../items/impacts.md) |
| `NonDamagingCollider` | class | `ColliderModifierSettings` | 2 | [Impacts and hit detection](../items/impacts.md) |
| `ParticleImpactor` | class | `MonoBehaviour` | 5 | [Impacts and hit detection](../items/impacts.md): Particle damage (`ParticleHit`). |
| `PickupBreakOnImpact` | class | `BreakOnImpact` | 0 | [Impacts and hit detection](../items/impacts.md): Breaks an item on a hard hit. |
| `PooledFixedImpactor` | class | `FixedImpactor` | 1 |  |
| `ResourceDropChance` | class |  | 2 |  |
| `SparkImpactDetector` | class | `CraftableImpactDetector` | 0 | [Impacts and hit detection](../items/impacts.md) |
| `SparkSecondaryDetector` | class | `NetworkEntityBehaviour` | 1 |  |
| `TriggerImpactDetector` | class | `MonoBehaviour` | 2 | [Impacts and hit detection](../items/impacts.md) |
| `TriggerImpactDetectorBase` | abstract class | `MonoBehaviour` | 0 |  |
| `TriggerImpactTool` | class | `ImpactTool` | 2 | [Impacts and hit detection](../items/impacts.md) |

## Alta.Inventory

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `AbstractDockEvents` | abstract class | `MonoBehaviour` | 0 |  |
| `AutomaticDockArea` | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 1 | [Items, interaction and damage](../items/overview.md) |
| `BoundsDockPositioning` | class | `MonoBehaviour` | 0 |  |
| `CharacterDockManager` | class | `ComponentGroup<PickupDockGroup>` | 0 | [Player inventory](../items/player-inventory.md): A `ComponentGroup` of `PickupDockGroup`s. |
| `Chest` | class | `LockableHinge` | 5 | [Items, interaction and damage](../items/overview.md) |
| `CommunalStorage` | class | `NetworkEntityBehaviour`, `ISavable<CommunalStorageData>`, `ISavableSave<CommunalStorageData>`, +2 more | 3 | [Items, interaction and damage](../items/overview.md) |
| `CommunalStorageData` | class | `NewSaveData<CommunalStorage, CommunalStorageData>` | 1 |  |
| `CommunalStorageUniqueIdentifier` | class | `HashedGeneralValue<CommunalStorageUniqueIdentifier>` | 0 |  |
| `ConsumableLock` | class | `Lock` | 3 |  |
| `CraftedDocks` | class | `MonoBehaviour`, `IBlockDisassembly` | 0 |  |
| `DockArray` | class | `NetworkEntityBehaviour` | 14 |  |
| `DockedOffset` | class | `NetworkEntityBehaviour` | 1 |  |
| `DockFilter` | delegate |  | 0 | [Docks](../items/docks.md) |
| `DockHideOptions` | enum |  | 3 |  |
| `DockPositioning` | delegate |  | 0 |  |
| `DockVisibilityMode` | enum |  | 4 |  |
| `DockVisual` | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 9 |  |
| `GlobalCommunalStorageValues` | class | `NetworkEntityBehaviour` | 6 |  |
| `GlobalCommunalStorageValuesData` | class | `BasicSaveData<GlobalCommunalStorageValuesData>` | 3 |  |
| `IInterfereWithDocking` | interface |  | 1 |  |
| `Ingot` | class | `ItemComponent` | 2 | [Smelting and forging](../game-systems/smelting-and-forging.md): `ItemComponent` on ingot items: `SmeltingDuration` and `PhysicalMaterial`. |
| `InvertedTriangleStackingInstruction` | class | `StackingInstructions<InvertedTriangleStackingInstructionSetup>` | 7 |  |
| `InvertedTriangleStackingInstructionSetup` | class | `StackingInstructionSetup<InvertedTriangleStackingInstruction>` | 0 |  |
| `Item` | class | `HashedGeneralValue<Item>`, `IPageBasis` | 35 | [Items and materials](../items/items-and-materials.md#item), [Arguments and results](../console-and-utilities/arguments-and-results.md): A `ScriptableObject` asset (through `Alta.HashedGeneralValue<Item>` in `Alta.Values`). The same on both sides; it's data. |
| `Item.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<Item>` | 0 |  |
| `Item.CustomDockPositioning` | class | `DockPositioning` | 2 |  |
| `Item.DockPositioning` | class |  | 3 |  |
| `ItemCount` | class |  | 2 |  |
| `ItemDockedVfxEvent` | class | `AbstractDockEvents` | 0 |  |
| `ItemSet` | class | `ScriptableObject` | 1 |  |
| `ItemSet.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<ItemSet>` | 0 |  |
| `JengaStackingInstruction` | class | `StackingInstructions<JengaStackingInstructionSetup>` | 4 |  |
| `JengaStackingInstructionSetup` | class | `StackingInstructionSetup<JengaStackingInstruction>` | 0 |  |
| `JengaStackingInstructionSetup.Level` | struct |  | 3 |  |
| `KeyItem` | class | `Pickup` | 7 | [Items, interaction and damage](../items/overview.md) |
| `KeyItemEvent` | class | `AltaEvent<KeyItem, KeyUnityEvent>` | 0 |  |
| `KeyUnityEvent` | class | `UnityEvent<KeyItem>` | 0 |  |
| `Lock` | class | `NetworkEntityBehaviour` | 11 | [Items, interaction and damage](../items/overview.md) |
| `LockableEvent` | class | `AltaEvent<LockableHinge, LockableUnityEvent>` | 0 |  |
| `LockableHinge` | class | `NetworkEntityBehaviour`, `ISavableFull<LockableHingeSaveData>`, `ISavable<LockableHingeSaveData>`, +3 more | 5 | [Items, interaction and damage](../items/overview.md) |
| `LockableHingeSaveData` | internal class | `NewSaveData<LockableHinge, LockableHingeSaveData>` | 4 |  |
| `LockableUnityEvent` | class | `UnityEvent<LockableHinge>` | 0 |  |
| `LockEffectUnityEvent` | class | `UnityEvent<Lock>` | 0 |  |
| `LockEvent` | class | `AltaEvent<Lock, LockUnityEvent>` | 0 |  |
| `LockItemEvent` | class | `AltaEvent<Lock, LockEffectUnityEvent>` | 0 |  |
| `LockUnityEvent` | class | `UnityEvent<Lock>` | 0 |  |
| `OnlyAllowDockingWhenEmpty` | class | `NetworkEntityBehaviour` | 1 |  |
| `PersonalChunk` | class | `NetworkEntityBehaviour` | 4 |  |
| `PickupDock` | class | `Interactable`, `ISavableFull<PickupDockSaveData>`, `ISavable<PickupDockSaveData>`, +9 more | 54 | [Other systems](../game-systems/other-systems.md), [Player inventory](../items/player-inventory.md) |
| `PickupDock.AllowedResult` | enum |  | 23 |  |
| `PickupDocker` | class |  | 10 |  |
| `PickupDockFilter` | delegate |  | 0 |  |
| `PickupDockHandler` | delegate |  | 0 |  |
| `PickupDockHoverHandler` | delegate |  | 0 |  |
| `PickupDockInteractionHandler` | delegate |  | 0 |  |
| `PickupDockSaveData` | internal class | `NewSaveData<PickupDock, PickupDockSaveData>` | 3 |  |
| `PickupDockSaveDataOld` | internal class | `OldSaveData` | 4 |  |
| `PickupDockSettings` | class | `ScriptableObject` | 42 | [Docks](../items/docks.md#pickupdocksettings): `Alta.Inventory.PickupDockSettings` is a `ScriptableObject` asset that many docks share. |
| `PickupDockSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<PickupDockSettings>` | 0 |  |
| `PickupDockVisualSettings` | class | `ScriptableObject` | 6 |  |
| `PickupDockVisualSettings.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.Docking.ScriptableObject<PickupDockVisualSettings>` | 0 |  |
| `PickupTag` | class | `ScriptableObject` | 0 |  |
| `PickupTag.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<PickupTag>` | 0 |  |
| `PlayerDocks` | class | `MonoBehaviour` | 0 | [Player inventory](../items/player-inventory.md): On the body; adds an `InteractionFilter` to every dock so only the owner can take from them. |
| `PooledDockVisual` | class | `PooledObject` | 4 |  |
| `QuantityChangeHandler` | delegate |  | 0 |  |
| `RejectDockArea` | class | `AutomaticDockArea`, `INetworkEntityBehaviour` | 1 | [Items, interaction and damage](../items/overview.md) |
| `SphereInBoxStackingInstruction` | class | `StackingInstructions<SphereInBoxStackingInstructionSetup>` | 4 |  |
| `SphereInBoxStackingInstructionSetup` | class | `StackingInstructionSetup<SphereInBoxStackingInstruction>` | 0 |  |
| `StabilizeJointContainer` | class | `StabilizePickupJoint` | 0 |  |
| `StabilizeLantern` | class | `StabilizeJointContainer` | 0 |  |
| `StabilizePickupJoint` | class | `MonoBehaviour`, `IPostboxPopped` | 3 |  |
| `StackingComponent` | class | `MonoBehaviour`, `IReferenceRenderer`, `IPreventNoLongerReadable`, +2 more | 4 |  |
| `StackingInstructions` | abstract class | `ScriptableObject` | 2 |  |
| `StackingInstructions<T>` | abstract class | `StackingInstructions` | 1 |  |
| `StackingInstructionSetup` | abstract class |  | 5 |  |
| `StackingInstructionSetup<T>` | abstract class | `StackingInstructionSetup` | 1 |  |
| `StorageData` | class |  | 3 |  |
| `StorageOrganizer` | class | `MonoBehaviour`, `IUpdateOnMove` | 0 | [Items, interaction and damage](../items/overview.md) |
| `SubDockHandler` | delegate |  | 0 |  |

## Alta.Inventory.Pickups.Scripts

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `PickupActionData` | struct |  | 6 |  |
| `PickupEventStreamLogger` | static class |  | 4 |  |

## Alta.Logic

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BoolSenderInput` | class | `SenderInput<LogicBoolSender, LogicBoolSaveData>` | 0 |  |
| `FloatSenderInput` | class | `SenderInput<LogicFloatSender, LogicFloatSaveData>` | 0 |  |
| `GlobalLogicManager` | class | `NetworkEntityBehaviour`, `ISavable<LogicManagerData>`, `ISavableSave<LogicManagerData>`, +2 more | 6 | [Other systems](../game-systems/other-systems.md): Holds every logic value (`GetData<TData>(ref uint identifier)`). Saved. |
| `ILogicComponent` | interface |  | 1 |  |
| `ILogicValueData` | interface |  | 1 |  |
| `ILogicValueLinkReceiver` | interface |  | 1 |  |
| `IntSenderInput` | class | `SenderInput<LogicIntSender, LogicIntSaveData>` | 0 |  |
| `LogicBoolReceiver` | class | `LogicValueReceiver<BoolSenderInput>`, `ISavable<LogicBoolReceiverData>`, `ISavableSave<LogicBoolReceiverData>`, +1 more | 4 | [Other systems](../game-systems/other-systems.md): Reacts to a bool sender: `IsActive`, `event UnityAction<bool> Changed`, `Activated`, `Deactivated`. |
| `LogicBoolReceiverData` | class | `NewSaveData<LogicBoolReceiver, LogicBoolReceiverData>` | 1 |  |
| `LogicBoolSaveData` | class | `NewSaveData<LogicBoolSender, LogicBoolSaveData>`, `ILogicValueData` | 3 |  |
| `LogicBoolSaveData1` | class | `OldSaveData` | 3 |  |
| `LogicBoolSender` | class | `LogicValueSender<LogicBoolSaveData>` | 2 | [Other systems](../game-systems/other-systems.md) |
| `LogicChannel` | class | `HashedGeneralValue<LogicChannel>` | 0 |  |
| `LogicFloatChangeOnBool` | class | `MonoBehaviour`, `ISavable<LogicFloatChangeOnBoolSaveData>`, `ISavableSave<LogicFloatChangeOnBoolSaveData>`, +1 more | 2 | [Other systems](../game-systems/other-systems.md) |
| `LogicFloatChangeOnBoolSaveData` | class | `NewSaveData<LogicFloatChangeOnBool, LogicFloatChangeOnBoolSaveData>`, `ILogicValueData` | 7 |  |
| `LogicFloatChangeOnBoolSaveData1` | class | `OldSaveData` | 7 |  |
| `LogicFloatChangeOnBoolSaveData2` | class | `OldSaveData` | 7 |  |
| `LogicFloatRangeReceiver` | class | `LogicValueReceiver<FloatSenderInput>`, `ISavable<LogicFloatRangeSaveData>`, `ISavableSave<LogicFloatRangeSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| `LogicFloatRangeSaveData` | class | `NewSaveData<LogicFloatRangeReceiver, LogicFloatRangeSaveData>` | 4 |  |
| `LogicFloatReceiver` | class | `LogicValueReceiver<FloatSenderInput>`, `ISavable<LogicFloatReceiverData>`, `ISavableSave<LogicFloatReceiverData>`, +1 more | 0 |  |
| `LogicFloatReceiverData` | class | `NewSaveData<LogicFloatReceiver, LogicFloatReceiverData>` | 1 |  |
| `LogicFloatReset` | class | `MonoBehaviour`, `ISavable<LogicFloatResetSaveData>`, `ISavableSave<LogicFloatResetSaveData>`, +1 more | 3 | [Other systems](../game-systems/other-systems.md) |
| `LogicFloatResetSaveData` | class | `NewSaveData<LogicFloatReset, LogicFloatResetSaveData>`, `ILogicValueData` | 6 |  |
| `LogicFloatSaveData` | class | `NewSaveData<LogicFloatSender, LogicFloatSaveData>`, `ILogicValueData` | 3 |  |
| `LogicFloatSender` | class | `LogicValueSender<LogicFloatSaveData>` | 1 | [Other systems](../game-systems/other-systems.md) |
| `LogicFloatThresholdReceiver` | class | `LogicValueReceiver<FloatSenderInput>`, `ISavable<LogicFloatThresholdSaveData>`, `ISavableSave<LogicFloatThresholdSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| `LogicFloatThresholdSaveData` | class | `NewSaveData<LogicFloatThresholdReceiver, LogicFloatThresholdSaveData>` | 3 |  |
| `LogicGateReceiver` | class | `LogicValueReceiverArray<BoolSenderInput>`, `ISavable<LogicGateSaveData>`, `ISavableSave<LogicGateSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| `LogicGateSaveData` | class | `NewSaveData<LogicGateReceiver, LogicGateSaveData>` | 3 |  |
| `LogicGateSaveData1` | class | `OldSaveData` | 3 |  |
| `LogicIntRangeReceiver` | class | `LogicValueReceiver<IntSenderInput>`, `ISavable<LogicIntRangeSaveData>`, `ISavableSave<LogicIntRangeSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| `LogicIntRangeSaveData` | class | `NewSaveData<LogicIntRangeReceiver, LogicIntRangeSaveData>` | 4 |  |
| `LogicIntReceiver` | class | `LogicValueReceiver<IntSenderInput>`, `ISavable<LogicIntReceiverData>`, `ISavableSave<LogicIntReceiverData>`, +1 more | 0 |  |
| `LogicIntReceiverData` | class | `NewSaveData<LogicIntReceiver, LogicIntReceiverData>` | 1 |  |
| `LogicIntSaveData` | class | `NewSaveData<LogicIntSender, LogicIntSaveData>`, `ILogicValueData` | 3 |  |
| `LogicIntSender` | class | `LogicValueSender<LogicIntSaveData>` | 2 | [Other systems](../game-systems/other-systems.md) |
| `LogicIntThresholdReceiver` | class | `LogicValueReceiver<IntSenderInput>`, `ISavable<LogicIntThresholdSaveData>`, `ISavableSave<LogicIntThresholdSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| `LogicIntThresholdSaveData` | class | `NewSaveData<LogicIntThresholdReceiver, LogicIntThresholdSaveData>` | 3 |  |
| `LogicIntToBool` | class | `MonoBehaviour`, `ISavable<LogicIntToBoolData>`, `ISavableSave<LogicIntToBoolData>`, +1 more | 2 | [Other systems](../game-systems/other-systems.md) |
| `LogicIntToBoolData` | class | `NewSaveData<LogicIntToBool, LogicIntToBoolData>` | 1 |  |
| `LogicManagerData` | class | `NewSaveData<GlobalLogicManager, LogicManagerData>` | 2 |  |
| `LogicManagerSet` | class |  | 1 |  |
| `LogicOperationType` | enum |  | 5 |  |
| `LogicSaveData` | class | `BasicSaveData<LogicSaveData>` | 5 |  |
| `LogicSumFloatReceiver` | class | `LogicValueReceiverArray<FloatSenderInput>`, `ISavable<LogicSumFloatSaveData>`, `ISavableSave<LogicSumFloatSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| `LogicSumFloatSaveData` | class | `NewSaveData<LogicSumFloatReceiver, LogicSumFloatSaveData>`, `ILogicValueData` | 3 |  |
| `LogicSumIntReceiver` | class | `LogicValueReceiverArray<IntSenderInput>`, `ISavable<LogicSumIntSaveData>`, `ISavableSave<LogicSumIntSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| `LogicSumIntSaveData` | class | `NewSaveData<LogicSumIntReceiver, LogicSumIntSaveData>`, `ILogicValueData` | 3 |  |
| `LogicValueReceiver<TSenderInput>` | abstract class | `NetworkEntityBehaviour`, `ILogicValueLinkReceiver`, `ILogicComponent` | 4 |  |
| `LogicValueReceiverArray<TSenderInput>` | abstract class | `NetworkEntityBehaviour`, `ILogicValueLinkReceiver`, `ILogicComponent` | 4 |  |
| `LogicValueSender` | abstract class | `NetworkEntityBehaviour`, `ILogicComponent` | 5 |  |
| `LogicValueSender<TData>` | abstract class | `LogicValueSender`, `ISavable<TData>`, `ISavableSave<TData>`, +1 more | 6 |  |
| `LogicVector3Receiver` | class | `LogicValueReceiver<Vector3SenderInput>`, `ISavable<LogicVector3ReceiverData>`, `ISavableSave<LogicVector3ReceiverData>`, +1 more | 0 |  |
| `LogicVector3ReceiverData` | class | `NewSaveData<LogicVector3Receiver, LogicVector3ReceiverData>` | 1 |  |
| `LogicVector3SaveData` | class | `NewSaveData<LogicVector3Sender, LogicVector3SaveData>`, `ILogicValueData` | 3 |  |
| `LogicVector3Sender` | class | `LogicValueSender<LogicVector3SaveData>` | 1 | [Other systems](../game-systems/other-systems.md) |
| `PositionProvider` | class | `NetworkEntityBehaviour`, `ISavable<PositionProviderSaveData>`, `ISavableSave<PositionProviderSaveData>`, +3 more | 2 | [Other systems](../game-systems/other-systems.md): A saved position (local or world) that logic can move. |
| `PositionProviderSaveData` | class | `NewSaveData<PositionProvider, PositionProviderSaveData>` | 2 |  |
| `SenderInput` | abstract class | `ILogicValueLinkReceiver` | 5 |  |
| `SenderInput<TSender, TData>` | class | `SenderInput` | 7 |  |
| `SenderInputArrayConverter` | static class |  | 1 |  |
| `Vector3SenderInput` | class | `SenderInput<LogicVector3Sender, LogicVector3SaveData>` | 0 |  |

## Alta.Mechanisms

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BendPath` | class | `Path` | 2 | [Other systems](../game-systems/other-systems.md) |
| `Crank` | class | `Mechanism` | 0 | [Other systems](../game-systems/other-systems.md): A `Mechanism` turned by hand in half or quarter turns. |
| `Mechanism` | abstract class | `NetworkEntityBehaviour` | 1 | [Other systems](../game-systems/other-systems.md): Watches an `ActivationPickup`; while it's held (and, if hand based, the base is held too), the server runs the subclass's `CheckAction` coroutine. |
| `NonPhysicalLever` | class | `NetworkEntityBehaviour` | 5 | [Other systems](../game-systems/other-systems.md): A lever with `IsActive`, `MoveToPosition(float)`, `ForceFull(bool)`, `ForceEmpty(bool)`. |
| `Path` | abstract class | `MonoBehaviour` | 2 | [Other systems](../game-systems/other-systems.md) |
| `PullAway` | class | `NetworkEntityBehaviour` | 1 | [Other systems](../game-systems/other-systems.md): Something you pull off, raising `onPulled` past a distance. |
| `Scrubber` | class | `MonoBehaviour` | 1 | [Other systems](../game-systems/other-systems.md): A grab handle that slides along a `Path` in `Steps` steps and raises `updatedStep`. |
| `StraightPath` | class | `Path` | 2 | [Other systems](../game-systems/other-systems.md) |

## Alta.Pages

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `Book` | class | `NetworkEntityBehaviour`, `ISavable<BookSaveData>`, `ISavableSave<BookSaveData>`, +3 more | 19 | [Pages and books](../items/pages-and-books.md): A book pickup. |
| `BookFlair` | abstract class | `ScriptableObject` | 1 |  |
| `BookPageInstance` | class | `PageInstance` | 3 |  |
| `BookRestrictor` | class | `PositionRestrictor`, `ISavable<BookRestrictorSaveData>`, `ISavableSave<BookRestrictorSaveData>`, +1 more | 1 | [Pages and books](../items/pages-and-books.md) |
| `BookRestrictorSaveData` | internal class | `NewSaveData<BookRestrictor, BookRestrictorSaveData>` | 1 |  |
| `BookSaveData` | internal class | `NewSaveData<Book, BookSaveData>` | 2 |  |
| `BookSpawner` | class | `NetworkEntityBehaviour` | 1 | [Pages and books](../items/pages-and-books.md) |
| `DisplayArguments` | class |  | 5 |  |
| `DockPageTask` | class | `HashSetAction<DockObjectTaskArgument>` | 1 |  |
| `EdgeFaceFlairs` | class |  | 6 |  |
| `FaceEdgeCorner` | class | `BookFlair` | 0 |  |
| `FaceEdgeCorner.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FaceEdgeCorner>` | 0 |  |
| `FaceEdgeMiddle` | class | `BookFlair` | 0 |  |
| `FaceEdgeMiddle.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FaceEdgeMiddle>` | 0 |  |
| `FaceEmblem` | class | `BookFlair` | 0 |  |
| `FaceEmblem.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FaceEmblem>` | 0 |  |
| `FaceEmblemFrame` | class | `BookFlair` | 0 |  |
| `FaceEmblemFrame.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FaceEmblemFrame>` | 0 |  |
| `FaceSpineCorner` | class | `BookFlair` | 0 |  |
| `FaceSpineCorner.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FaceSpineCorner>` | 0 |  |
| `FaceSpineMiddle` | class | `BookFlair` | 0 |  |
| `FaceSpineMiddle.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FaceSpineMiddle>` | 0 |  |
| `FlairLodSet` | class | `MonoBehaviour` | 3 |  |
| `FlairSet` | class | `ScriptableObject` | 3 |  |
| `FlairSet.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FlairSet>` | 0 |  |
| `FlairSettings` | class |  | 13 |  |
| `FlairSettings.FrameMaterialMode` | enum |  | 3 |  |
| `GlobalPagesManager` | class | `NetworkEntityBehaviour`, `ISavable<GlobalPagesManagerSaveData>`, `ISavableSave<GlobalPagesManagerSaveData>`, +1 more | 9 | [Pages and books](../items/pages-and-books.md#globalpagesmanager): `Alta.Pages.GlobalPagesManager`, a `NetworkEntityBehaviour` singleton (`GlobalPagesManager.Instance`). The list is built and kept on the server and saved with the world. |
| `GlobalPagesManagerSaveData` | internal class | `NewSaveData<GlobalPagesManager, GlobalPagesManagerSaveData>` | 2 |  |
| `GlobalPagesManagerSaveData1` | internal class | `OldSaveData` | 2 |  |
| `Glyph` | class | `HashedGeneralValue<Glyph>` | 6 | [Pages and books](../items/pages-and-books.md) |
| `Glyph.Positioning` | class |  | 12 |  |
| `GlyphInstance` | class | `MonoBehaviour` | 3 | [Pages and books](../items/pages-and-books.md) |
| `HapticWhileHeld` | class | `MonoBehaviour` | 2 |  |
| `IPageBasis` | interface |  | 4 |  |
| `MouldRestrictor` | class | `PositionRestrictor` | 2 | [Pages and books](../items/pages-and-books.md) |
| `NewPageArguments` | class |  | 5 |  |
| `Page` | class | `SimpleHashedGeneralValue<Page>`, `IPageBasis` | 6 |  |
| `Page.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.ScriptableObject<Page>` | 0 |  |
| `PageCollection` | class | `HashedGeneralValue<PageCollection>` | 9 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| `PageCollection.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.ScriptableObject<PageCollection>` | 0 |  |
| `PageCollectionConverter` | class | `TypeConverter` | 2 |  |
| `PageData` | class |  | 11 |  |
| `PageInstance` | class | `GeneratedNetworkEntityBehaviour`, `ISavable<PageInstanceSaveData>`, `ISavableSave<PageInstanceSaveData>`, +1 more | 11 | [Pages and books](../items/pages-and-books.md): A page inside a book or on paper: `Book`, `Data`, `Set(PageData)`, `event Action<PageInstance> OnChangedPage`. |
| `PageInstanceSaveData` | class | `NewSaveData<PageInstance, PageInstanceSaveData>` | 5 |  |
| `PageInstanceSaveData1` | class | `OldSaveData` | 4 |  |
| `PageInstanceSaveData2` | class | `OldSaveData` | 5 |  |
| `PageRenderer` | class | `MonoBehaviour` | 3 |  |
| `PaperPageInstance` | class | `PageInstance` | 4 | [Pages and books](../items/pages-and-books.md): A loose page you find. |
| `Pinboard` | class | `NetworkEntityBehaviour` | 1 | [Pages and books](../items/pages-and-books.md): A board that shows a set of pages. |
| `PositionRestrictor` | class | `NetworkEntityBehaviour`, `ISavable<PositionRestrictorSaveData>`, `ISavableSave<PositionRestrictorSaveData>`, +1 more | 11 | [Pages and books](../items/pages-and-books.md) |
| `PositionRestrictorSaveData` | class | `NewSaveData<PositionRestrictor, PositionRestrictorSaveData>` | 7 |  |
| `PositionRestrictorSaveData2` | class | `OldSaveData` | 8 |  |
| `PositionRestrictorSaveDataOld1` | class | `OldSaveData` | 2 |  |
| `SpineEdge` | class | `BookFlair` | 0 |  |
| `SpineEdge.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<SpineEdge>` | 0 |  |
| `SpineFaceFlairs` | class |  | 6 |  |
| `SpineFlairs` | class |  | 3 |  |
| `SpineMiddle` | class | `BookFlair` | 0 |  |
| `SpineMiddle.Create` | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<SpineMiddle>` | 0 |  |
| `TurnPageArguments` | class |  | 5 |  |
