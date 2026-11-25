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
| [`ArmorDefinition`](/game-api/types/alta-items/armordefinition) | class | `ScriptableObject` | 2 | [Impacts and hit detection](../items/impacts.md) |
| [`ArmorDefinition.Create`](/game-api/types/alta-items/armordefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Equipment.ScriptableObject<ArmorDefinition>` | 0 |  |
| [`BlockedTrigger`](/game-api/types/alta-items/blockedtrigger) | class | `MonoBehaviour` | 1 |  |
| [`BoulderDefinition`](/game-api/types/alta-items/boulderdefinition) | class | `HashedGeneralValue<BoulderDefinition>` | 6 |  |
| [`BoulderDefinition.Create`](/game-api/types/alta-items/boulderdefinition-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Mining.ScriptableObject<BoulderDefinition>` | 0 |  |
| [`ColliderMap`](/game-api/types/alta-items/collidermap) | class |  | 3 |  |
| [`ColliderModifierSettings`](/game-api/types/alta-items/collidermodifiersettings) | abstract class | `ScriptableObject` | 2 | [Impacts and hit detection](../items/impacts.md) |
| [`CollisionFilter`](/game-api/types/alta-items/collisionfilter) | delegate |  | 0 |  |
| [`ContactPointStructure`](/game-api/types/alta-items/contactpointstructure) | struct |  | 8 |  |
| [`ContactProjectile`](/game-api/types/alta-items/contactprojectile) | abstract class | `MonoBehaviour`, `IToolHitDependant`, `IImpactorResetEffect` | 4 | [Impacts and hit detection](../items/impacts.md) |
| [`CraftableImpactDetector`](/game-api/types/alta-items/craftableimpactdetector) | class | `CraftableImpactDetectorBase` | 0 | [Impacts and hit detection](../items/impacts.md) |
| [`CraftableImpactDetectorBase`](/game-api/types/alta-items/craftableimpactdetectorbase) | abstract class | `ImpactDetector` | 1 |  |
| [`CutableObject`](/game-api/types/alta-items/cutableobject) | class | `TriggerImpactDetectorBase` | 0 | [Impacts and hit detection](../items/impacts.md) |
| [`DamageData`](/game-api/types/alta-items/damagedata) | class |  | 2 | [Health and damage](../items/health-and-damage.md#damagedata-and-damagesource) |
| [`DamageMultiplierCollider`](/game-api/types/alta-items/damagemultipliercollider) | class | `ColliderModifierSettings` | 2 | [Impacts and hit detection](../items/impacts.md) |
| [`DamageSource`](/game-api/types/alta-items/damagesource) | enum |  | 8 | [Health and damage](../items/health-and-damage.md#damagedata-and-damagesource) |
| [`DelayedImpactResolver`](/game-api/types/alta-items/delayedimpactresolver) | static class |  | 3 | [Impacts and hit detection](../items/impacts.md) |
| [`DirectionalMultiplierCollider`](/game-api/types/alta-items/directionalmultipliercollider) | class | `ColliderModifierSettings` | 2 | [Impacts and hit detection](../items/impacts.md) |
| [`EmbeddableManager`](/game-api/types/alta-items/embeddablemanager) | class | `MonoBehaviour` | 9 |  |
| [`EmbeddableSurface`](/game-api/types/alta-items/embeddablesurface) | class | `MonoBehaviour` | 0 |  |
| [`EquipmentReference`](/game-api/types/alta-items/equipmentreference) | class | `MonoBehaviour` | 2 | [Impacts and hit detection](../items/impacts.md) |
| [`EquipmentReference.EquipmentChangedHandler`](/game-api/types/alta-items/equipmentreference-equipmentchangedhandler) | delegate |  | 0 |  |
| [`FixedImpactor`](/game-api/types/alta-items/fixedimpactor) | class | `ImpactGenerator`, `INetworkEntityBehaviour` | 11 |  |
| [`FixedImpactorGroup`](/game-api/types/alta-items/fixedimpactorgroup) | class | `ComponentGroup<FixedImpactor>` | 2 | [Combat, damage and death](../creatures/combat-and-damage.md): `Charge()` and `Reset()` for several at once. |
| [`HitModifierEffect`](/game-api/types/alta-items/hitmodifiereffect) | class | `NetworkEntityBehaviour` | 2 |  |
| [`IImpactEffect`](/game-api/types/alta-items/iimpacteffect) | interface |  | 1 |  |
| [`IImpactorResetEffect`](/game-api/types/alta-items/iimpactorreseteffect) | interface |  | 1 |  |
| [`ImpactChannel`](/game-api/types/alta-items/impactchannel) | class | `ScriptableObject` | 1 | [Impacts and hit detection](../items/impacts.md) |
| [`ImpactChannel.Create`](/game-api/types/alta-items/impactchannel-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Impact.ScriptableObject<ImpactChannel>` | 0 |  |
| [`ImpactDetector`](/game-api/types/alta-items/impactdetector) | class | `MonoBehaviour`, `IListenToPhysicalMaterial`, `INetworkEntityBehaviour`, +2 more | 16 | [Impacts and hit detection](../items/impacts.md#impactdetector): On anything that can be hit: creature body parts, rocks, trees, players. |
| [`ImpactDetector.ImpactSyncArguments`](/game-api/types/alta-items/impactdetector-impactsyncarguments) | struct |  | 7 |  |
| [`ImpactDetectorCentral`](/game-api/types/alta-items/impactdetectorcentral) | class | `NetworkEntityBehaviour` | 2 | [Impacts and hit detection](../items/impacts.md): On entities with several detectors. |
| [`ImpactDetectorColliderModifier`](/game-api/types/alta-items/impactdetectorcollidermodifier) | class | `MonoBehaviour` | 2 |  |
| [`ImpactDetectorSettings`](/game-api/types/alta-items/impactdetectorsettings) | class | `ScriptableObject` | 5 | [Impacts and hit detection](../items/impacts.md): Detector data: hit effects, whether it gives XP, whether it wears tools. |
| [`ImpactDetectorSettings.Create`](/game-api/types/alta-items/impactdetectorsettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Impact.ScriptableObject<ImpactDetectorSettings>` | 0 |  |
| [`ImpactDetectorSettings.ImpactSettings`](/game-api/types/alta-items/impactdetectorsettings-impactsettings) | class |  | 7 |  |
| [`ImpactGenerator`](/game-api/types/alta-items/impactgenerator) | abstract class | `MonoBehaviour` | 25 |  |
| [`ImpactHit`](/game-api/types/alta-items/impacthit) | class | `DamageData` | 23 | [Impacts and hit detection](../items/impacts.md#impacthit-and-impacthitwithtool) |
| [`ImpactHitEvent`](/game-api/types/alta-items/impacthitevent) | class | `AltaEvent<ImpactHitWithTool, ImpactHitUnityevent>` | 0 |  |
| [`ImpactHitThresholdTrigger`](/game-api/types/alta-items/impacthitthresholdtrigger) | class | `MonoBehaviour` | 0 |  |
| [`ImpactHitTrigger`](/game-api/types/alta-items/impacthittrigger) | class | `MonoBehaviour` | 0 |  |
| [`ImpactHitUnityevent`](/game-api/types/alta-items/impacthitunityevent) | class | `UnityEvent<ImpactHitWithTool>` | 0 |  |
| [`ImpactHitWithTool`](/game-api/types/alta-items/impacthitwithtool) | class | `ImpactHit` | 16 | [Impacts and hit detection](../items/impacts.md#impacthit-and-impacthitwithtool) |
| [`ImpactImmunityGroup`](/game-api/types/alta-items/impactimmunitygroup) | class | `ScriptableObject` | 1 | [Impacts and hit detection](../items/impacts.md): A multiplier when an impactor and a detector share a group. |
| [`ImpactImmunityGroup.Create`](/game-api/types/alta-items/impactimmunitygroup-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Impact.ScriptableObject<ImpactImmunityGroup>` | 0 |  |
| [`ImpactModifier`](/game-api/types/alta-items/impactmodifier) | class | `NetworkEntityBehaviour` | 2 |  |
| [`ImpactModifierComponent`](/game-api/types/alta-items/impactmodifiercomponent) | abstract class | `ScriptableObject` | 4 |  |
| [`ImpactModifierMultiplier`](/game-api/types/alta-items/impactmodifiermultiplier) | class | `ImpactModifierComponent` | 1 |  |
| [`ImpactModifierStatAffect`](/game-api/types/alta-items/impactmodifierstataffect) | class | `ImpactModifierComponent` | 1 |  |
| [`Impactor`](/game-api/types/alta-items/impactor) | class | `ImpactGenerator`, `IGetRigidbody` | 4 |  |
| [`ImpactorAreaFilter<T>`](/game-api/types/alta-items/impactorareafilter-t) | abstract class | `ImpactorFilter` | 2 |  |
| [`ImpactorFilter`](/game-api/types/alta-items/impactorfilter) | abstract class | `ScriptableObject` | 1 |  |
| [`ImpactorMap`](/game-api/types/alta-items/impactormap) | class | `MonoBehaviour` | 5 |  |
| [`ImpactorSettings`](/game-api/types/alta-items/impactorsettings) | class | `ScriptableObject` | 8 | [Impacts and hit detection](../items/impacts.md) |
| [`ImpactorValues`](/game-api/types/alta-items/impactorvalues) | class | `ScriptableObject` | 12 | [Impacts and hit detection](../items/impacts.md#impactorvalues): Each impactor points at an `ImpactorValues` asset: |
| [`ImpactTool`](/game-api/types/alta-items/impacttool) | class | `MonoBehaviour`, `IGetRigidbody` | 45 | [Impacts and hit detection](../items/impacts.md#impacttool): Get it with `GetComponent<ImpactTool>()` on the item, or `entity.CommonImpactTool`. |
| [`ImpactTool.OnCollidedHit`](/game-api/types/alta-items/impacttool-oncollidedhit) | delegate |  | 0 |  |
| [`ImpactTool.OnCollisionEnterEvent`](/game-api/types/alta-items/impacttool-oncollisionenterevent) | delegate |  | 0 |  |
| [`ImpactTool.OnGeneratedHit`](/game-api/types/alta-items/impacttool-ongeneratedhit) | delegate |  | 0 |  |
| [`ImpactType`](/game-api/types/alta-items/impacttype) | enum |  | 7 |  |
| [`ImpactTypeFilter`](/game-api/types/alta-items/impacttypefilter) | class |  | 2 |  |
| [`INetworkProjectile`](/game-api/types/alta-items/inetworkprojectile) | interface |  | 5 |  |
| [`IToolHitDependant`](/game-api/types/alta-items/itoolhitdependant) | interface |  | 2 |  |
| [`MiningSettings`](/game-api/types/alta-items/miningsettings) | class | `GlobalSettings<MiningSettings>` | 14 | [Impacts and hit detection](../items/impacts.md): Global haptics and strike sound settings. |
| [`MiningSettings.Create`](/game-api/types/alta-items/miningsettings-create) | class | `AltaMenuItemBase.Assets.Create.Global_Settings.ScriptableObject<MiningSettings>` | 0 |  |
| [`NetworkContactProjectile`](/game-api/types/alta-items/networkcontactprojectile) | class | `ContactProjectile`, `INetworkProjectile` | 4 | [Impacts and hit detection](../items/impacts.md) |
| [`NonDamagingCollider`](/game-api/types/alta-items/nondamagingcollider) | class | `ColliderModifierSettings` | 2 | [Impacts and hit detection](../items/impacts.md) |
| [`ParticleImpactor`](/game-api/types/alta-items/particleimpactor) | class | `MonoBehaviour` | 5 | [Impacts and hit detection](../items/impacts.md): Particle damage (`ParticleHit`). |
| [`PickupBreakOnImpact`](/game-api/types/alta-items/pickupbreakonimpact) | class | `BreakOnImpact` | 0 | [Impacts and hit detection](../items/impacts.md): Breaks an item on a hard hit. |
| [`PooledFixedImpactor`](/game-api/types/alta-items/pooledfixedimpactor) | class | `FixedImpactor` | 1 |  |
| [`ResourceDropChance`](/game-api/types/alta-items/resourcedropchance) | class |  | 2 |  |
| [`SparkImpactDetector`](/game-api/types/alta-items/sparkimpactdetector) | class | `CraftableImpactDetector` | 0 | [Impacts and hit detection](../items/impacts.md) |
| [`SparkSecondaryDetector`](/game-api/types/alta-items/sparksecondarydetector) | class | `NetworkEntityBehaviour` | 1 |  |
| [`TriggerImpactDetector`](/game-api/types/alta-items/triggerimpactdetector) | class | `MonoBehaviour` | 2 | [Impacts and hit detection](../items/impacts.md) |
| [`TriggerImpactDetectorBase`](/game-api/types/alta-items/triggerimpactdetectorbase) | abstract class | `MonoBehaviour` | 0 |  |
| [`TriggerImpactTool`](/game-api/types/alta-items/triggerimpacttool) | class | `ImpactTool` | 2 | [Impacts and hit detection](../items/impacts.md) |

## Alta.Inventory

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`AbstractDockEvents`](/game-api/types/alta-items/abstractdockevents) | abstract class | `MonoBehaviour` | 0 |  |
| [`AutomaticDockArea`](/game-api/types/alta-items/automaticdockarea) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 1 | [Items, interaction and damage](../items/overview.md) |
| [`BoundsDockPositioning`](/game-api/types/alta-items/boundsdockpositioning) | class | `MonoBehaviour` | 0 |  |
| [`CharacterDockManager`](/game-api/types/alta-items/characterdockmanager) | class | `ComponentGroup<PickupDockGroup>` | 0 | [Player inventory](../items/player-inventory.md): A `ComponentGroup` of `PickupDockGroup`s. |
| [`Chest`](/game-api/types/alta-items/chest) | class | `LockableHinge` | 5 | [Items, interaction and damage](../items/overview.md) |
| [`CommunalStorage`](/game-api/types/alta-items/communalstorage) | class | `NetworkEntityBehaviour`, `ISavable<CommunalStorageData>`, `ISavableSave<CommunalStorageData>`, +2 more | 3 | [Items, interaction and damage](../items/overview.md) |
| [`CommunalStorageData`](/game-api/types/alta-items/communalstoragedata) | class | `NewSaveData<CommunalStorage, CommunalStorageData>` | 1 |  |
| [`CommunalStorageUniqueIdentifier`](/game-api/types/alta-items/communalstorageuniqueidentifier) | class | `HashedGeneralValue<CommunalStorageUniqueIdentifier>` | 0 |  |
| [`ConsumableLock`](/game-api/types/alta-items/consumablelock) | class | `Lock` | 3 |  |
| [`CraftedDocks`](/game-api/types/alta-items/crafteddocks) | class | `MonoBehaviour`, `IBlockDisassembly` | 0 |  |
| [`DockArray`](/game-api/types/alta-items/dockarray) | class | `NetworkEntityBehaviour` | 14 |  |
| [`DockedOffset`](/game-api/types/alta-items/dockedoffset) | class | `NetworkEntityBehaviour` | 1 |  |
| [`DockFilter`](/game-api/types/alta-items/dockfilter) | delegate |  | 0 | [Docks](../items/docks.md) |
| [`DockHideOptions`](/game-api/types/alta-items/dockhideoptions) | enum |  | 3 |  |
| [`DockPositioning`](/game-api/types/alta-items/dockpositioning) | delegate |  | 0 |  |
| [`DockVisibilityMode`](/game-api/types/alta-items/dockvisibilitymode) | enum |  | 4 |  |
| [`DockVisual`](/game-api/types/alta-items/dockvisual) | class | `MonoBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 9 |  |
| [`GlobalCommunalStorageValues`](/game-api/types/alta-items/globalcommunalstoragevalues) | class | `NetworkEntityBehaviour` | 6 |  |
| [`GlobalCommunalStorageValuesData`](/game-api/types/alta-items/globalcommunalstoragevaluesdata) | class | `BasicSaveData<GlobalCommunalStorageValuesData>` | 3 |  |
| [`IInterfereWithDocking`](/game-api/types/alta-items/iinterferewithdocking) | interface |  | 1 |  |
| [`Ingot`](/game-api/types/alta-items/ingot) | class | `ItemComponent` | 2 | [Smelting and forging](../game-systems/smelting-and-forging.md): `ItemComponent` on ingot items: `SmeltingDuration` and `PhysicalMaterial`. |
| [`InvertedTriangleStackingInstruction`](/game-api/types/alta-items/invertedtrianglestackinginstruction) | class | `StackingInstructions<InvertedTriangleStackingInstructionSetup>` | 7 |  |
| [`InvertedTriangleStackingInstructionSetup`](/game-api/types/alta-items/invertedtrianglestackinginstructionsetup) | class | `StackingInstructionSetup<InvertedTriangleStackingInstruction>` | 0 |  |
| [`Item`](/game-api/types/alta-items/item) | class | `HashedGeneralValue<Item>`, `IPageBasis` | 35 | [Items and materials](../items/items-and-materials.md#item), [Arguments and results](../console-and-utilities/arguments-and-results.md): A `ScriptableObject` asset (through `Alta.HashedGeneralValue<Item>` in `Alta.Values`). The same on both sides; it's data. |
| [`Item.Create`](/game-api/types/alta-items/item-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<Item>` | 0 |  |
| [`Item.CustomDockPositioning`](/game-api/types/alta-items/item-customdockpositioning) | class | `DockPositioning` | 2 |  |
| [`Item.DockPositioning`](/game-api/types/alta-items/item-dockpositioning) | class |  | 3 |  |
| [`ItemCount`](/game-api/types/alta-items/itemcount) | class |  | 2 |  |
| [`ItemDockedVfxEvent`](/game-api/types/alta-items/itemdockedvfxevent) | class | `AbstractDockEvents` | 0 |  |
| [`ItemSet`](/game-api/types/alta-items/itemset) | class | `ScriptableObject` | 1 |  |
| [`ItemSet.Create`](/game-api/types/alta-items/itemset-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<ItemSet>` | 0 |  |
| [`JengaStackingInstruction`](/game-api/types/alta-items/jengastackinginstruction) | class | `StackingInstructions<JengaStackingInstructionSetup>` | 4 |  |
| [`JengaStackingInstructionSetup`](/game-api/types/alta-items/jengastackinginstructionsetup) | class | `StackingInstructionSetup<JengaStackingInstruction>` | 0 |  |
| [`JengaStackingInstructionSetup.Level`](/game-api/types/alta-items/jengastackinginstructionsetup-level) | struct |  | 3 |  |
| [`KeyItem`](/game-api/types/alta-items/keyitem) | class | `Pickup` | 7 | [Items, interaction and damage](../items/overview.md) |
| [`KeyItemEvent`](/game-api/types/alta-items/keyitemevent) | class | `AltaEvent<KeyItem, KeyUnityEvent>` | 0 |  |
| [`KeyUnityEvent`](/game-api/types/alta-items/keyunityevent) | class | `UnityEvent<KeyItem>` | 0 |  |
| [`Lock`](/game-api/types/alta-items/lock) | class | `NetworkEntityBehaviour` | 11 | [Items, interaction and damage](../items/overview.md) |
| [`LockableEvent`](/game-api/types/alta-items/lockableevent) | class | `AltaEvent<LockableHinge, LockableUnityEvent>` | 0 |  |
| [`LockableHinge`](/game-api/types/alta-items/lockablehinge) | class | `NetworkEntityBehaviour`, `ISavableFull<LockableHingeSaveData>`, `ISavable<LockableHingeSaveData>`, +3 more | 5 | [Items, interaction and damage](../items/overview.md) |
| [`LockableHingeSaveData`](/game-api/types/alta-items/lockablehingesavedata) | internal class | `NewSaveData<LockableHinge, LockableHingeSaveData>` | 4 |  |
| [`LockableUnityEvent`](/game-api/types/alta-items/lockableunityevent) | class | `UnityEvent<LockableHinge>` | 0 |  |
| [`LockEffectUnityEvent`](/game-api/types/alta-items/lockeffectunityevent) | class | `UnityEvent<Lock>` | 0 |  |
| [`LockEvent`](/game-api/types/alta-items/lockevent) | class | `AltaEvent<Lock, LockUnityEvent>` | 0 |  |
| [`LockItemEvent`](/game-api/types/alta-items/lockitemevent) | class | `AltaEvent<Lock, LockEffectUnityEvent>` | 0 |  |
| [`LockUnityEvent`](/game-api/types/alta-items/lockunityevent) | class | `UnityEvent<Lock>` | 0 |  |
| [`OnlyAllowDockingWhenEmpty`](/game-api/types/alta-items/onlyallowdockingwhenempty) | class | `NetworkEntityBehaviour` | 1 |  |
| [`PersonalChunk`](/game-api/types/alta-items/personalchunk) | class | `NetworkEntityBehaviour` | 4 |  |
| [`PickupDock`](/game-api/types/alta-items/pickupdock) | class | `Interactable`, `ISavableFull<PickupDockSaveData>`, `ISavable<PickupDockSaveData>`, +9 more | 54 | [Other systems](../game-systems/other-systems.md), [Player inventory](../items/player-inventory.md) |
| [`PickupDock.AllowedResult`](/game-api/types/alta-items/pickupdock-allowedresult) | enum |  | 23 |  |
| [`PickupDocker`](/game-api/types/alta-items/pickupdocker) | class |  | 10 |  |
| [`PickupDockFilter`](/game-api/types/alta-items/pickupdockfilter) | delegate |  | 0 |  |
| [`PickupDockHandler`](/game-api/types/alta-items/pickupdockhandler) | delegate |  | 0 |  |
| [`PickupDockHoverHandler`](/game-api/types/alta-items/pickupdockhoverhandler) | delegate |  | 0 |  |
| [`PickupDockInteractionHandler`](/game-api/types/alta-items/pickupdockinteractionhandler) | delegate |  | 0 |  |
| [`PickupDockSaveData`](/game-api/types/alta-items/pickupdocksavedata) | internal class | `NewSaveData<PickupDock, PickupDockSaveData>` | 3 |  |
| [`PickupDockSaveDataOld`](/game-api/types/alta-items/pickupdocksavedataold) | internal class | `OldSaveData` | 4 |  |
| [`PickupDockSettings`](/game-api/types/alta-items/pickupdocksettings) | class | `ScriptableObject` | 42 | [Docks](../items/docks.md#pickupdocksettings): `Alta.Inventory.PickupDockSettings` is a `ScriptableObject` asset that many docks share. |
| [`PickupDockSettings.Create`](/game-api/types/alta-items/pickupdocksettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<PickupDockSettings>` | 0 |  |
| [`PickupDockVisualSettings`](/game-api/types/alta-items/pickupdockvisualsettings) | class | `ScriptableObject` | 6 |  |
| [`PickupDockVisualSettings.Create`](/game-api/types/alta-items/pickupdockvisualsettings-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.Docking.ScriptableObject<PickupDockVisualSettings>` | 0 |  |
| [`PickupTag`](/game-api/types/alta-items/pickuptag) | class | `ScriptableObject` | 0 |  |
| [`PickupTag.Create`](/game-api/types/alta-items/pickuptag-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Items.ScriptableObject<PickupTag>` | 0 |  |
| [`PlayerDocks`](/game-api/types/alta-items/playerdocks) | class | `MonoBehaviour` | 0 | [Player inventory](../items/player-inventory.md): On the body; adds an `InteractionFilter` to every dock so only the owner can take from them. |
| [`PooledDockVisual`](/game-api/types/alta-items/pooleddockvisual) | class | `PooledObject` | 4 |  |
| [`QuantityChangeHandler`](/game-api/types/alta-items/quantitychangehandler) | delegate |  | 0 |  |
| [`RejectDockArea`](/game-api/types/alta-items/rejectdockarea) | class | `AutomaticDockArea`, `INetworkEntityBehaviour` | 1 | [Items, interaction and damage](../items/overview.md) |
| [`SphereInBoxStackingInstruction`](/game-api/types/alta-items/sphereinboxstackinginstruction) | class | `StackingInstructions<SphereInBoxStackingInstructionSetup>` | 4 |  |
| [`SphereInBoxStackingInstructionSetup`](/game-api/types/alta-items/sphereinboxstackinginstructionsetup) | class | `StackingInstructionSetup<SphereInBoxStackingInstruction>` | 0 |  |
| [`StabilizeJointContainer`](/game-api/types/alta-items/stabilizejointcontainer) | class | `StabilizePickupJoint` | 0 |  |
| [`StabilizeLantern`](/game-api/types/alta-items/stabilizelantern) | class | `StabilizeJointContainer` | 0 |  |
| [`StabilizePickupJoint`](/game-api/types/alta-items/stabilizepickupjoint) | class | `MonoBehaviour`, `IPostboxPopped` | 3 |  |
| [`StackingComponent`](/game-api/types/alta-items/stackingcomponent) | class | `MonoBehaviour`, `IReferenceRenderer`, `IPreventNoLongerReadable`, +2 more | 4 |  |
| [`StackingInstructions`](/game-api/types/alta-items/stackinginstructions) | abstract class | `ScriptableObject` | 2 |  |
| [`StackingInstructions<T>`](/game-api/types/alta-items/stackinginstructions-t) | abstract class | `StackingInstructions` | 1 |  |
| [`StackingInstructionSetup`](/game-api/types/alta-items/stackinginstructionsetup) | abstract class |  | 5 |  |
| [`StackingInstructionSetup<T>`](/game-api/types/alta-items/stackinginstructionsetup-t) | abstract class | `StackingInstructionSetup` | 1 |  |
| [`StorageData`](/game-api/types/alta-items/storagedata) | class |  | 3 |  |
| [`StorageOrganizer`](/game-api/types/alta-items/storageorganizer) | class | `MonoBehaviour`, `IUpdateOnMove` | 0 | [Items, interaction and damage](../items/overview.md) |
| [`SubDockHandler`](/game-api/types/alta-items/subdockhandler) | delegate |  | 0 |  |

## Alta.Inventory.Pickups.Scripts

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`PickupActionData`](/game-api/types/alta-items/pickupactiondata) | struct |  | 6 |  |
| [`PickupEventStreamLogger`](/game-api/types/alta-items/pickupeventstreamlogger) | static class |  | 4 |  |

## Alta.Logic

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`BoolSenderInput`](/game-api/types/alta-items/boolsenderinput) | class | `SenderInput<LogicBoolSender, LogicBoolSaveData>` | 0 |  |
| [`FloatSenderInput`](/game-api/types/alta-items/floatsenderinput) | class | `SenderInput<LogicFloatSender, LogicFloatSaveData>` | 0 |  |
| [`GlobalLogicManager`](/game-api/types/alta-items/globallogicmanager) | class | `NetworkEntityBehaviour`, `ISavable<LogicManagerData>`, `ISavableSave<LogicManagerData>`, +2 more | 6 | [Other systems](../game-systems/other-systems.md): Holds every logic value (`GetData<TData>(ref uint identifier)`). Saved. |
| [`ILogicComponent`](/game-api/types/alta-items/ilogiccomponent) | interface |  | 1 |  |
| [`ILogicValueData`](/game-api/types/alta-items/ilogicvaluedata) | interface |  | 1 |  |
| [`ILogicValueLinkReceiver`](/game-api/types/alta-items/ilogicvaluelinkreceiver) | interface |  | 1 |  |
| [`IntSenderInput`](/game-api/types/alta-items/intsenderinput) | class | `SenderInput<LogicIntSender, LogicIntSaveData>` | 0 |  |
| [`LogicBoolReceiver`](/game-api/types/alta-items/logicboolreceiver) | class | `LogicValueReceiver<BoolSenderInput>`, `ISavable<LogicBoolReceiverData>`, `ISavableSave<LogicBoolReceiverData>`, +1 more | 4 | [Other systems](../game-systems/other-systems.md): Reacts to a bool sender: `IsActive`, `event UnityAction<bool> Changed`, `Activated`, `Deactivated`. |
| [`LogicBoolReceiverData`](/game-api/types/alta-items/logicboolreceiverdata) | class | `NewSaveData<LogicBoolReceiver, LogicBoolReceiverData>` | 1 |  |
| [`LogicBoolSaveData`](/game-api/types/alta-items/logicboolsavedata) | class | `NewSaveData<LogicBoolSender, LogicBoolSaveData>`, `ILogicValueData` | 3 |  |
| [`LogicBoolSaveData1`](/game-api/types/alta-items/logicboolsavedata1) | class | `OldSaveData` | 3 |  |
| [`LogicBoolSender`](/game-api/types/alta-items/logicboolsender) | class | `LogicValueSender<LogicBoolSaveData>` | 2 | [Other systems](../game-systems/other-systems.md) |
| [`LogicChannel`](/game-api/types/alta-items/logicchannel) | class | `HashedGeneralValue<LogicChannel>` | 0 |  |
| [`LogicFloatChangeOnBool`](/game-api/types/alta-items/logicfloatchangeonbool) | class | `MonoBehaviour`, `ISavable<LogicFloatChangeOnBoolSaveData>`, `ISavableSave<LogicFloatChangeOnBoolSaveData>`, +1 more | 2 | [Other systems](../game-systems/other-systems.md) |
| [`LogicFloatChangeOnBoolSaveData`](/game-api/types/alta-items/logicfloatchangeonboolsavedata) | class | `NewSaveData<LogicFloatChangeOnBool, LogicFloatChangeOnBoolSaveData>`, `ILogicValueData` | 7 |  |
| [`LogicFloatChangeOnBoolSaveData1`](/game-api/types/alta-items/logicfloatchangeonboolsavedata1) | class | `OldSaveData` | 7 |  |
| [`LogicFloatChangeOnBoolSaveData2`](/game-api/types/alta-items/logicfloatchangeonboolsavedata2) | class | `OldSaveData` | 7 |  |
| [`LogicFloatRangeReceiver`](/game-api/types/alta-items/logicfloatrangereceiver) | class | `LogicValueReceiver<FloatSenderInput>`, `ISavable<LogicFloatRangeSaveData>`, `ISavableSave<LogicFloatRangeSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| [`LogicFloatRangeSaveData`](/game-api/types/alta-items/logicfloatrangesavedata) | class | `NewSaveData<LogicFloatRangeReceiver, LogicFloatRangeSaveData>` | 4 |  |
| [`LogicFloatReceiver`](/game-api/types/alta-items/logicfloatreceiver) | class | `LogicValueReceiver<FloatSenderInput>`, `ISavable<LogicFloatReceiverData>`, `ISavableSave<LogicFloatReceiverData>`, +1 more | 0 |  |
| [`LogicFloatReceiverData`](/game-api/types/alta-items/logicfloatreceiverdata) | class | `NewSaveData<LogicFloatReceiver, LogicFloatReceiverData>` | 1 |  |
| [`LogicFloatReset`](/game-api/types/alta-items/logicfloatreset) | class | `MonoBehaviour`, `ISavable<LogicFloatResetSaveData>`, `ISavableSave<LogicFloatResetSaveData>`, +1 more | 3 | [Other systems](../game-systems/other-systems.md) |
| [`LogicFloatResetSaveData`](/game-api/types/alta-items/logicfloatresetsavedata) | class | `NewSaveData<LogicFloatReset, LogicFloatResetSaveData>`, `ILogicValueData` | 6 |  |
| [`LogicFloatSaveData`](/game-api/types/alta-items/logicfloatsavedata) | class | `NewSaveData<LogicFloatSender, LogicFloatSaveData>`, `ILogicValueData` | 3 |  |
| [`LogicFloatSender`](/game-api/types/alta-items/logicfloatsender) | class | `LogicValueSender<LogicFloatSaveData>` | 1 | [Other systems](../game-systems/other-systems.md) |
| [`LogicFloatThresholdReceiver`](/game-api/types/alta-items/logicfloatthresholdreceiver) | class | `LogicValueReceiver<FloatSenderInput>`, `ISavable<LogicFloatThresholdSaveData>`, `ISavableSave<LogicFloatThresholdSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| [`LogicFloatThresholdSaveData`](/game-api/types/alta-items/logicfloatthresholdsavedata) | class | `NewSaveData<LogicFloatThresholdReceiver, LogicFloatThresholdSaveData>` | 3 |  |
| [`LogicGateReceiver`](/game-api/types/alta-items/logicgatereceiver) | class | `LogicValueReceiverArray<BoolSenderInput>`, `ISavable<LogicGateSaveData>`, `ISavableSave<LogicGateSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| [`LogicGateSaveData`](/game-api/types/alta-items/logicgatesavedata) | class | `NewSaveData<LogicGateReceiver, LogicGateSaveData>` | 3 |  |
| [`LogicGateSaveData1`](/game-api/types/alta-items/logicgatesavedata1) | class | `OldSaveData` | 3 |  |
| [`LogicIntRangeReceiver`](/game-api/types/alta-items/logicintrangereceiver) | class | `LogicValueReceiver<IntSenderInput>`, `ISavable<LogicIntRangeSaveData>`, `ISavableSave<LogicIntRangeSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| [`LogicIntRangeSaveData`](/game-api/types/alta-items/logicintrangesavedata) | class | `NewSaveData<LogicIntRangeReceiver, LogicIntRangeSaveData>` | 4 |  |
| [`LogicIntReceiver`](/game-api/types/alta-items/logicintreceiver) | class | `LogicValueReceiver<IntSenderInput>`, `ISavable<LogicIntReceiverData>`, `ISavableSave<LogicIntReceiverData>`, +1 more | 0 |  |
| [`LogicIntReceiverData`](/game-api/types/alta-items/logicintreceiverdata) | class | `NewSaveData<LogicIntReceiver, LogicIntReceiverData>` | 1 |  |
| [`LogicIntSaveData`](/game-api/types/alta-items/logicintsavedata) | class | `NewSaveData<LogicIntSender, LogicIntSaveData>`, `ILogicValueData` | 3 |  |
| [`LogicIntSender`](/game-api/types/alta-items/logicintsender) | class | `LogicValueSender<LogicIntSaveData>` | 2 | [Other systems](../game-systems/other-systems.md) |
| [`LogicIntThresholdReceiver`](/game-api/types/alta-items/logicintthresholdreceiver) | class | `LogicValueReceiver<IntSenderInput>`, `ISavable<LogicIntThresholdSaveData>`, `ISavableSave<LogicIntThresholdSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| [`LogicIntThresholdSaveData`](/game-api/types/alta-items/logicintthresholdsavedata) | class | `NewSaveData<LogicIntThresholdReceiver, LogicIntThresholdSaveData>` | 3 |  |
| [`LogicIntToBool`](/game-api/types/alta-items/logicinttobool) | class | `MonoBehaviour`, `ISavable<LogicIntToBoolData>`, `ISavableSave<LogicIntToBoolData>`, +1 more | 2 | [Other systems](../game-systems/other-systems.md) |
| [`LogicIntToBoolData`](/game-api/types/alta-items/logicinttobooldata) | class | `NewSaveData<LogicIntToBool, LogicIntToBoolData>` | 1 |  |
| [`LogicManagerData`](/game-api/types/alta-items/logicmanagerdata) | class | `NewSaveData<GlobalLogicManager, LogicManagerData>` | 2 |  |
| [`LogicManagerSet`](/game-api/types/alta-items/logicmanagerset) | class |  | 1 |  |
| [`LogicOperationType`](/game-api/types/alta-items/logicoperationtype) | enum |  | 5 |  |
| [`LogicSaveData`](/game-api/types/alta-items/logicsavedata) | class | `BasicSaveData<LogicSaveData>` | 5 |  |
| [`LogicSumFloatReceiver`](/game-api/types/alta-items/logicsumfloatreceiver) | class | `LogicValueReceiverArray<FloatSenderInput>`, `ISavable<LogicSumFloatSaveData>`, `ISavableSave<LogicSumFloatSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| [`LogicSumFloatSaveData`](/game-api/types/alta-items/logicsumfloatsavedata) | class | `NewSaveData<LogicSumFloatReceiver, LogicSumFloatSaveData>`, `ILogicValueData` | 3 |  |
| [`LogicSumIntReceiver`](/game-api/types/alta-items/logicsumintreceiver) | class | `LogicValueReceiverArray<IntSenderInput>`, `ISavable<LogicSumIntSaveData>`, `ISavableSave<LogicSumIntSaveData>`, +1 more | 1 | [Other systems](../game-systems/other-systems.md) |
| [`LogicSumIntSaveData`](/game-api/types/alta-items/logicsumintsavedata) | class | `NewSaveData<LogicSumIntReceiver, LogicSumIntSaveData>`, `ILogicValueData` | 3 |  |
| [`LogicValueReceiver<TSenderInput>`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput) | abstract class | `NetworkEntityBehaviour`, `ILogicValueLinkReceiver`, `ILogicComponent` | 4 |  |
| [`LogicValueReceiverArray<TSenderInput>`](/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput) | abstract class | `NetworkEntityBehaviour`, `ILogicValueLinkReceiver`, `ILogicComponent` | 4 |  |
| [`LogicValueSender`](/game-api/types/alta-items/logicvaluesender) | abstract class | `NetworkEntityBehaviour`, `ILogicComponent` | 5 |  |
| [`LogicValueSender<TData>`](/game-api/types/alta-items/logicvaluesender-tdata) | abstract class | `LogicValueSender`, `ISavable<TData>`, `ISavableSave<TData>`, +1 more | 6 |  |
| [`LogicVector3Receiver`](/game-api/types/alta-items/logicvector3receiver) | class | `LogicValueReceiver<Vector3SenderInput>`, `ISavable<LogicVector3ReceiverData>`, `ISavableSave<LogicVector3ReceiverData>`, +1 more | 0 |  |
| [`LogicVector3ReceiverData`](/game-api/types/alta-items/logicvector3receiverdata) | class | `NewSaveData<LogicVector3Receiver, LogicVector3ReceiverData>` | 1 |  |
| [`LogicVector3SaveData`](/game-api/types/alta-items/logicvector3savedata) | class | `NewSaveData<LogicVector3Sender, LogicVector3SaveData>`, `ILogicValueData` | 3 |  |
| [`LogicVector3Sender`](/game-api/types/alta-items/logicvector3sender) | class | `LogicValueSender<LogicVector3SaveData>` | 1 | [Other systems](../game-systems/other-systems.md) |
| [`PositionProvider`](/game-api/types/alta-items/positionprovider) | class | `NetworkEntityBehaviour`, `ISavable<PositionProviderSaveData>`, `ISavableSave<PositionProviderSaveData>`, +3 more | 2 | [Other systems](../game-systems/other-systems.md): A saved position (local or world) that logic can move. |
| [`PositionProviderSaveData`](/game-api/types/alta-items/positionprovidersavedata) | class | `NewSaveData<PositionProvider, PositionProviderSaveData>` | 2 |  |
| [`SenderInput`](/game-api/types/alta-items/senderinput) | abstract class | `ILogicValueLinkReceiver` | 5 |  |
| [`SenderInput<TSender, TData>`](/game-api/types/alta-items/senderinput-tsender-tdata) | class | `SenderInput` | 7 |  |
| [`SenderInputArrayConverter`](/game-api/types/alta-items/senderinputarrayconverter) | static class |  | 1 |  |
| [`Vector3SenderInput`](/game-api/types/alta-items/vector3senderinput) | class | `SenderInput<LogicVector3Sender, LogicVector3SaveData>` | 0 |  |

## Alta.Mechanisms

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`BendPath`](/game-api/types/alta-items/bendpath) | class | `Path` | 2 | [Other systems](../game-systems/other-systems.md) |
| [`Crank`](/game-api/types/alta-items/crank) | class | `Mechanism` | 0 | [Other systems](../game-systems/other-systems.md): A `Mechanism` turned by hand in half or quarter turns. |
| [`Mechanism`](/game-api/types/alta-items/mechanism) | abstract class | `NetworkEntityBehaviour` | 1 | [Other systems](../game-systems/other-systems.md): Watches an `ActivationPickup`; while it's held (and, if hand based, the base is held too), the server runs the subclass's `CheckAction` coroutine. |
| [`NonPhysicalLever`](/game-api/types/alta-items/nonphysicallever) | class | `NetworkEntityBehaviour` | 5 | [Other systems](../game-systems/other-systems.md): A lever with `IsActive`, `MoveToPosition(float)`, `ForceFull(bool)`, `ForceEmpty(bool)`. |
| [`Path`](/game-api/types/alta-items/path) | abstract class | `MonoBehaviour` | 2 | [Other systems](../game-systems/other-systems.md) |
| [`PullAway`](/game-api/types/alta-items/pullaway) | class | `NetworkEntityBehaviour` | 1 | [Other systems](../game-systems/other-systems.md): Something you pull off, raising `onPulled` past a distance. |
| [`Scrubber`](/game-api/types/alta-items/scrubber) | class | `MonoBehaviour` | 1 | [Other systems](../game-systems/other-systems.md): A grab handle that slides along a `Path` in `Steps` steps and raises `updatedStep`. |
| [`StraightPath`](/game-api/types/alta-items/straightpath) | class | `Path` | 2 | [Other systems](../game-systems/other-systems.md) |

## Alta.Pages

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`Book`](/game-api/types/alta-items/book) | class | `NetworkEntityBehaviour`, `ISavable<BookSaveData>`, `ISavableSave<BookSaveData>`, +3 more | 19 | [Pages and books](../items/pages-and-books.md): A book pickup. |
| [`BookFlair`](/game-api/types/alta-items/bookflair) | abstract class | `ScriptableObject` | 1 |  |
| [`BookPageInstance`](/game-api/types/alta-items/bookpageinstance) | class | `PageInstance` | 3 |  |
| [`BookRestrictor`](/game-api/types/alta-items/bookrestrictor) | class | `PositionRestrictor`, `ISavable<BookRestrictorSaveData>`, `ISavableSave<BookRestrictorSaveData>`, +1 more | 1 | [Pages and books](../items/pages-and-books.md) |
| [`BookRestrictorSaveData`](/game-api/types/alta-items/bookrestrictorsavedata) | internal class | `NewSaveData<BookRestrictor, BookRestrictorSaveData>` | 1 |  |
| [`BookSaveData`](/game-api/types/alta-items/booksavedata) | internal class | `NewSaveData<Book, BookSaveData>` | 2 |  |
| [`BookSpawner`](/game-api/types/alta-items/bookspawner) | class | `NetworkEntityBehaviour` | 1 | [Pages and books](../items/pages-and-books.md) |
| [`DisplayArguments`](/game-api/types/alta-items/displayarguments) | class |  | 5 |  |
| [`DockPageTask`](/game-api/types/alta-items/dockpagetask) | class | `HashSetAction<DockObjectTaskArgument>` | 1 |  |
| [`EdgeFaceFlairs`](/game-api/types/alta-items/edgefaceflairs) | class |  | 6 |  |
| [`FaceEdgeCorner`](/game-api/types/alta-items/faceedgecorner) | class | `BookFlair` | 0 |  |
| [`FaceEdgeCorner.Create`](/game-api/types/alta-items/faceedgecorner-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FaceEdgeCorner>` | 0 |  |
| [`FaceEdgeMiddle`](/game-api/types/alta-items/faceedgemiddle) | class | `BookFlair` | 0 |  |
| [`FaceEdgeMiddle.Create`](/game-api/types/alta-items/faceedgemiddle-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FaceEdgeMiddle>` | 0 |  |
| [`FaceEmblem`](/game-api/types/alta-items/faceemblem) | class | `BookFlair` | 0 |  |
| [`FaceEmblem.Create`](/game-api/types/alta-items/faceemblem-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FaceEmblem>` | 0 |  |
| [`FaceEmblemFrame`](/game-api/types/alta-items/faceemblemframe) | class | `BookFlair` | 0 |  |
| [`FaceEmblemFrame.Create`](/game-api/types/alta-items/faceemblemframe-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FaceEmblemFrame>` | 0 |  |
| [`FaceSpineCorner`](/game-api/types/alta-items/facespinecorner) | class | `BookFlair` | 0 |  |
| [`FaceSpineCorner.Create`](/game-api/types/alta-items/facespinecorner-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FaceSpineCorner>` | 0 |  |
| [`FaceSpineMiddle`](/game-api/types/alta-items/facespinemiddle) | class | `BookFlair` | 0 |  |
| [`FaceSpineMiddle.Create`](/game-api/types/alta-items/facespinemiddle-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FaceSpineMiddle>` | 0 |  |
| [`FlairLodSet`](/game-api/types/alta-items/flairlodset) | class | `MonoBehaviour` | 3 |  |
| [`FlairSet`](/game-api/types/alta-items/flairset) | class | `ScriptableObject` | 3 |  |
| [`FlairSet.Create`](/game-api/types/alta-items/flairset-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<FlairSet>` | 0 |  |
| [`FlairSettings`](/game-api/types/alta-items/flairsettings) | class |  | 13 |  |
| [`FlairSettings.FrameMaterialMode`](/game-api/types/alta-items/flairsettings-framematerialmode) | enum |  | 3 |  |
| [`GlobalPagesManager`](/game-api/types/alta-items/globalpagesmanager) | class | `NetworkEntityBehaviour`, `ISavable<GlobalPagesManagerSaveData>`, `ISavableSave<GlobalPagesManagerSaveData>`, +1 more | 9 | [Pages and books](../items/pages-and-books.md#globalpagesmanager): `Alta.Pages.GlobalPagesManager`, a `NetworkEntityBehaviour` singleton (`GlobalPagesManager.Instance`). The list is built and kept on the server and saved with the world. |
| [`GlobalPagesManagerSaveData`](/game-api/types/alta-items/globalpagesmanagersavedata) | internal class | `NewSaveData<GlobalPagesManager, GlobalPagesManagerSaveData>` | 2 |  |
| [`GlobalPagesManagerSaveData1`](/game-api/types/alta-items/globalpagesmanagersavedata1) | internal class | `OldSaveData` | 2 |  |
| [`Glyph`](/game-api/types/alta-items/glyph) | class | `HashedGeneralValue<Glyph>` | 6 | [Pages and books](../items/pages-and-books.md) |
| [`Glyph.Positioning`](/game-api/types/alta-items/glyph-positioning) | class |  | 12 |  |
| [`GlyphInstance`](/game-api/types/alta-items/glyphinstance) | class | `MonoBehaviour` | 3 | [Pages and books](../items/pages-and-books.md) |
| [`HapticWhileHeld`](/game-api/types/alta-items/hapticwhileheld) | class | `MonoBehaviour` | 2 |  |
| [`IPageBasis`](/game-api/types/alta-items/ipagebasis) | interface |  | 4 |  |
| [`MouldRestrictor`](/game-api/types/alta-items/mouldrestrictor) | class | `PositionRestrictor` | 2 | [Pages and books](../items/pages-and-books.md) |
| [`NewPageArguments`](/game-api/types/alta-items/newpagearguments) | class |  | 5 |  |
| [`Page`](/game-api/types/alta-items/page) | class | `SimpleHashedGeneralValue<Page>`, `IPageBasis` | 6 |  |
| [`Page.Create`](/game-api/types/alta-items/page-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.ScriptableObject<Page>` | 0 |  |
| [`PageCollection`](/game-api/types/alta-items/pagecollection) | class | `HashedGeneralValue<PageCollection>` | 9 | [Arguments and results](../console-and-utilities/arguments-and-results.md) |
| [`PageCollection.Create`](/game-api/types/alta-items/pagecollection-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.ScriptableObject<PageCollection>` | 0 |  |
| [`PageCollectionConverter`](/game-api/types/alta-items/pagecollectionconverter) | class | `TypeConverter` | 2 |  |
| [`PageData`](/game-api/types/alta-items/pagedata) | class |  | 11 |  |
| [`PageInstance`](/game-api/types/alta-items/pageinstance) | class | `GeneratedNetworkEntityBehaviour`, `ISavable<PageInstanceSaveData>`, `ISavableSave<PageInstanceSaveData>`, +1 more | 11 | [Pages and books](../items/pages-and-books.md): A page inside a book or on paper: `Book`, `Data`, `Set(PageData)`, `event Action<PageInstance> OnChangedPage`. |
| [`PageInstanceSaveData`](/game-api/types/alta-items/pageinstancesavedata) | class | `NewSaveData<PageInstance, PageInstanceSaveData>` | 5 |  |
| [`PageInstanceSaveData1`](/game-api/types/alta-items/pageinstancesavedata1) | class | `OldSaveData` | 4 |  |
| [`PageInstanceSaveData2`](/game-api/types/alta-items/pageinstancesavedata2) | class | `OldSaveData` | 5 |  |
| [`PageRenderer`](/game-api/types/alta-items/pagerenderer) | class | `MonoBehaviour` | 3 |  |
| [`PaperPageInstance`](/game-api/types/alta-items/paperpageinstance) | class | `PageInstance` | 4 | [Pages and books](../items/pages-and-books.md): A loose page you find. |
| [`Pinboard`](/game-api/types/alta-items/pinboard) | class | `NetworkEntityBehaviour` | 1 | [Pages and books](../items/pages-and-books.md): A board that shows a set of pages. |
| [`PositionRestrictor`](/game-api/types/alta-items/positionrestrictor) | class | `NetworkEntityBehaviour`, `ISavable<PositionRestrictorSaveData>`, `ISavableSave<PositionRestrictorSaveData>`, +1 more | 11 | [Pages and books](../items/pages-and-books.md) |
| [`PositionRestrictorSaveData`](/game-api/types/alta-items/positionrestrictorsavedata) | class | `NewSaveData<PositionRestrictor, PositionRestrictorSaveData>` | 7 |  |
| [`PositionRestrictorSaveData2`](/game-api/types/alta-items/positionrestrictorsavedata2) | class | `OldSaveData` | 8 |  |
| [`PositionRestrictorSaveDataOld1`](/game-api/types/alta-items/positionrestrictorsavedataold1) | class | `OldSaveData` | 2 |  |
| [`SpineEdge`](/game-api/types/alta-items/spineedge) | class | `BookFlair` | 0 |  |
| [`SpineEdge.Create`](/game-api/types/alta-items/spineedge-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<SpineEdge>` | 0 |  |
| [`SpineFaceFlairs`](/game-api/types/alta-items/spinefaceflairs) | class |  | 6 |  |
| [`SpineFlairs`](/game-api/types/alta-items/spineflairs) | class |  | 3 |  |
| [`SpineMiddle`](/game-api/types/alta-items/spinemiddle) | class | `BookFlair` | 0 |  |
| [`SpineMiddle.Create`](/game-api/types/alta-items/spinemiddle-create) | class | `AltaMenuItemBase.Assets.Create.Township.Features.Pages.Flairs.ScriptableObject<SpineMiddle>` | 0 |  |
| [`TurnPageArguments`](/game-api/types/alta-items/turnpagearguments) | class |  | 5 |  |
