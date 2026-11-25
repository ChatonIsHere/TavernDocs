---
title: Customization and screenshots
description: Types in Alta.Customization and Alta.ScreenshotCamera.
sidebar_position: 10
---

# Customization and screenshots

Types in Alta.Customization and Alta.ScreenshotCamera. 144 types, 9 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Customization

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `ArmorManager<TSlot>` | class | `MonoBehaviour` | 1 | [Customization](../game-systems/customization.md): `Set(TSlot slot, ArmorDefinition armor)`: shows armour on a slot. |
| `ArmorManager<TSlot>.SlotPairing` | class |  | 2 |  |
| `BodyTypePickup` | class | `CustomizationPickup` | 1 |  |
| `BonesBaking` | class | `ScriptableObject` | 4 |  |
| `CategoryScrollElement` | class | `ScrollElement` | 4 |  |
| `CategoryScrollManager` | class | `MonoBehaviour` | 3 |  |
| `CategoryScrubberController` | class | `MonoBehaviour` | 0 |  |
| `ColoredMeshes` | class | `MonoBehaviour` | 1 |  |
| `CosmeticBodyType` | class | `CustomizationVisualPart<CustomizationArguments>` | 6 |  |
| `CosmeticColor` | class | `HashedGeneralValue<CosmeticColor>` | 6 |  |
| `CosmeticCustomizationManager` | class | `MonoBehaviour` | 16 | [Customization](../game-systems/customization.md): Runs the customization room for the local player: randomize, undo, redo, exit. |
| `CosmeticEyePart` | class | `CosmeticMeshPartBase<TwoColors>` | 1 |  |
| `CosmeticFilterAttribute` | class | `PropertyAttribute` | 3 |  |
| `CosmeticHairPart` | class | `CosmeticMeshPart` | 1 |  |
| `CosmeticMeshPart` | class | `CosmeticMeshPartBase<TwoColors>` | 0 |  |
| `CosmeticMeshPartBase<T>` | class | `CustomizationVisualPart<T>`, `ICosmeticMeshPartBase`, `ICustomizationPart` | 12 |  |
| `CosmeticOwnershipManager` | class |  | 10 | [Customization](../game-systems/customization.md): What a player owns and may use, by category. |
| `CosmeticPacker` | class | `MonoBehaviour` | 11 |  |
| `CosmeticPacker.Input` | class |  | 10 |  |
| `CosmeticPacker.PartId` | struct | `IEquatable<PartId>` | 5 |  |
| `CosmeticPackScheduler` | class |  | 3 |  |
| `CosmeticPalette` | class | `GeneralValue` | 1 |  |
| `CosmeticPickup` | class | `CustomizationPickup` | 1 |  |
| `CosmeticPickupType` | enum |  | 5 |  |
| `CosmeticPresetApplier` | class | `MonoBehaviour` | 1 |  |
| `CosmeticPresetData` | class |  | 5 |  |
| `CosmeticPresetDestroyer` | class | `MonoBehaviour` | 0 |  |
| `CosmeticPresetSlot` | class | `MonoBehaviour`, `ICosmeticPresetSlot` | 8 |  |
| `CosmeticPresetsManager` | class | `LoggedInTool` | 2 |  |
| `CosmeticPresetTrophy` | class | `MonoBehaviour` | 12 |  |
| `CosmeticPresetTrophyTrigger` | class | `MonoBehaviour` | 5 |  |
| `CosmeticRotatingSlot` | class | `MonoBehaviour`, `ICosmeticPresetSlot` | 12 |  |
| `CosmeticScrollElement` | class | `ScrollElement` | 2 |  |
| `CosmeticScrollManager` | class | `ScrollManager` | 1 |  |
| `CosmeticScrollSource` | class | `MonoBehaviour` | 3 |  |
| `CosmeticSetDefinition` | class | `Purchasable` | 2 |  |
| `CosmeticSetFilterAttribute` | class | `PropertyAttribute` | 0 |  |
| `CosmeticSkinColor` | class | `CustomizationVisualPart<CustomizationArguments>` | 1 |  |
| `CurrentTalemBalance` | static class |  | 3 |  |
| `CustomizationArguments` | class |  | 5 |  |
| `CustomizationCategory` | abstract class | `ScriptableObject`, `ICustomizationCategory` | 10 |  |
| `CustomizationHistoryAccess` | class | `HistoryAccess` | 1 |  |
| `CustomizationHistoryAction` | class | `IHistoryAction` | 1 |  |
| `CustomizationItemAndArguments` | struct |  | 2 |  |
| `CustomizationPackingSettings` | class | `GlobalSettings<CustomizationPackingSettings>` | 2 |  |
| `CustomizationPickup` | class | `MonoBehaviour` | 7 |  |
| `CustomizationSettings` | class | `GlobalSettings<CustomizationSettings>` | 6 |  |
| `CustomizationSlot` | class |  | 6 |  |
| `CustomizationSlotEntry` | class |  | 13 |  |
| `CustomizationTester` | class | `MonoBehaviour` | 0 |  |
| `CustomizationVisual` | class | `MonoBehaviour`, `ICustomizationVisual` | 6 |  |
| `CustomizationVisualManager` | class | `ICustomizationVisualManager` | 10 |  |
| `CustomizationVisualPart` | abstract class | `MonoBehaviour`, `ICustomizationPart` | 12 |  |
| `CustomizationVisualPart<TArguments>` | abstract class | `CustomizationVisualPart` | 2 |  |
| `CustomizationWrapper` | abstract class | `IHasHistory`, `ICustomizationWrapper` | 26 | [Customization](../game-systems/customization.md): Base of both wrappers. `IEnumerable<uint> Items`, `Arguments`, `Task<bool> Add(uint item, CustomizationArguments[] arguments)`, undo history. |
| `CustomizationWrapperSerializer` | static class |  | 7 | [Customization](../game-systems/customization.md): Writes and reads a wrapper to a stream or a save (`Save`, `LoadAsync`, `SerializeStreamAsync`). |
| `DefaultCosmeticInfo` | class | `ISerializationCallbackReceiver` | 9 |  |
| `EditableCosmeticSlot` | class | `EditableSlot` | 0 |  |
| `EditableEquipmentManager` | class |  | 2 |  |
| `EditableEquipmentSlot` | class | `EditableSlot` | 0 |  |
| `EditableSlot` | class | `MonoBehaviour` | 2 |  |
| `EquipmentCustomizationRoom` | class | `MonoBehaviour` | 6 |  |
| `EquipmentPart` | class | `CustomizationVisualPart<CustomizationArguments>` | 0 |  |
| `EquipmentPickup` | class | `CustomizationPickup` | 2 |  |
| `EquipmentSlot` | enum |  | 9 |  |
| `EyePickup` | class | `CustomizationPickup` | 1 |  |
| `ICosmeticMeshPartBase` | interface | `ICustomizationPart` | 14 |  |
| `ICosmeticPresetSlot` | interface |  | 3 |  |
| `ICustomizationCategory` | interface |  | 10 |  |
| `ICustomizationDefinition` | interface |  | 8 |  |
| `ICustomizationHandler` | interface |  | 11 |  |
| `ICustomizationPart` | interface |  | 9 |  |
| `ICustomizationVisual` | interface |  | 4 |  |
| `ICustomizationVisualManager` | interface |  | 10 |  |
| `ICustomizationWrapper` | interface |  | 10 |  |
| `MainMenuCustomizationInterface` | class | `LoggedInTool` | 0 |  |
| `MainMenuShopInterface` | class | `LoggedInTool` | 1 |  |
| `MainMenuShopItem` | class | `MonoBehaviour` | 3 |  |
| `MeshPacker` | static class |  | 1 |  |
| `PackingWatch` | static class |  | 3 |  |
| `PlayerArmorManager` | class | `ArmorManager<EquipmentSlot>` | 0 |  |
| `PlayerCharacterCustomizationManager` | class |  | 7 | [Customization](../game-systems/customization.md): One per `Player`: `player.Customization`. |
| `PlayerCosmeticCategory` | class | `CustomizationCategory` | 3 |  |
| `PlayerCosmeticDefinition` | class | `Purchasable`, `ICustomizationDefinition` | 8 | [Customization](../game-systems/customization.md): A `Purchasable` (`ScriptableObject` loaded through Addressables) with a `Hash`, `Sku`, `DisplayName`, category and visual. |
| `PlayerCosmeticDefinitionSet` | class | `ScriptableObject` | 1 |  |
| `PlayerCosmeticWrapper` | class | `CustomizationWrapper(manager)` | 3 |  |
| `PlayerCustomizationHandler` | class | `MonoBehaviour`, `ICustomizationHandler` | 15 | [Customization](../game-systems/customization.md): On a body: applies the visuals, finds bones, first-person mode. `ArmorManager`, `EditableEquipmentManager`. |
| `PlayerCustomizationSlot` | enum |  | 148 |  |
| `PlayerCustomizationSlotSet` | class |  | 1 |  |
| `PlayerEquipmentCategory` | class | `CustomizationCategory` | 2 |  |
| `PlayerEquipmentDefinition` | class | `HashedGeneralValue<PlayerEquipmentDefinition>`, `ICustomizationDefinition` | 12 | [Customization](../game-systems/customization.md): `HashedGeneralValue<PlayerEquipmentDefinition>`: an armour piece's look, with its `ArmorDefinition` and `ArmorSlot`. |
| `PlayerEquipmentWrapper` | class | `CustomizationWrapper` | 2 |  |
| `Purchasable` | class | `ScriptableObject` | 14 |  |
| `PurchasableMap` | class | `GlobalSettings<PurchasableMap>` | 6 |  |
| `PurchasableMap.CosmeticCategory` | class |  | 2 |  |
| `PurchasableMap.CosmeticSet` | class |  | 4 |  |
| `PurchasedList` | class |  | 17 |  |
| `ScrollManager` | abstract class | `MonoBehaviour` | 4 |  |
| `ShopConfigUtility` | static class |  | 2 |  |
| `ShopConfigUtility.ShopItemConfigurations` | class |  | 2 |  |
| `ShopInterface` | class | `LoggedInTool` | 5 |  |
| `ShopInterfaceItem` | class | `MonoBehaviour` | 3 |  |
| `SkinColorPickup` | class | `CustomizationPickup` | 1 |  |
| `SkinMeshPart` | class | `CosmeticMeshPartBase<CustomizationArguments>` | 2 |  |
| `SkinnedMeshPlatformQualityController` | class | `BuildRendererBakeable` | 1 |  |
| `StaticRandomCustomization` | static class |  | 3 |  |
| `StoreScrollManager` | class | `ScrollManager` | 1 |  |
| `TexturePacker` | static class |  | 2 |  |
| `TwoColors` | class | `CustomizationArguments` | 9 |  |

## Alta.ScreenshotCamera

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| `BlockableCamera` | abstract class | `MonoBehaviour` | 5 |  |
| `ButtonGroup` | class | `MonoBehaviour` | 1 |  |
| `CameraButton` | abstract class | `MonoBehaviour` | 0 |  |
| `CameraEventsListener` | class | `MonoBehaviour` | 0 |  |
| `CameraFilters` | class | `NetworkEntityBehaviour` | 3 |  |
| `CameraRenderEvents` | class | `MonoBehaviour` | 1 |  |
| `CameraStabilization` | class | `MonoBehaviour` | 0 |  |
| `CapsuleBlockableCamera` | class | `BlockableCamera` | 0 |  |
| `Filter` | class |  | 3 |  |
| `FilterAction` | abstract class | `ScriptableObject` | 2 |  |
| `FiltersButton` | class | `BasicTouchScreenButton` | 3 |  |
| `FocusButton` | class | `CameraButton` | 0 |  |
| `FocusPuller` | class | `MonoBehaviour` | 3 |  |
| `FocusPuller.FocusMode` | enum |  | 3 |  |
| `HandCamera` | class | `NetworkEntityBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 29 |  |
| `HandCameraEvent` | enum |  | 2 |  |
| `HandCameraRender` | delegate |  | 0 |  |
| `HandCameraSettings` | class | `ScriptableObject` | 9 |  |
| `HandCameraStreamer` | class | `MonoBehaviour` | 2 |  |
| `HandCameraViewfinderResizerSettings` | internal class | `ScriptableObject` | 2 |  |
| `HandyCameraManager` | class | `NetworkEntityBehaviour` | 5 |  |
| `LocalPlayerHeadRenderer` | class |  | 2 |  |
| `OnDrawFilter` | abstract class | `FilterAction` | 2 |  |
| `OpticalZoom` | class | `NetworkEntityBehaviour` | 2 |  |
| `PlayerSwapMaterialFilter` | abstract class | `OnDrawFilter` | 1 |  |
| `PlayerSwapMaterialFilter.MaterialTuple` | class |  | 3 |  |
| `PostProcessFilter` | class | `FilterAction` | 2 |  |
| `RemoteObiturator` | class | `MonoBehaviour` | 0 |  |
| `SpectralFilter` | class | `PlayerSwapMaterialFilter` | 0 |  |
| `SphereBlockableCamera` | class | `BlockableCamera` | 0 |  |
| `StreamingButton` | class | `CameraButton` | 0 |  |
| `SummonCameraQuickAccess` | class | `QuickAccessMenuAction` | 3 |  |
| `TimerButton` | class | `CameraButton` | 0 |  |
| `TouchScreenMenu` | class | `TouchScreenMenuBase` | 0 |  |
| `VisibilityTrigger` | class | `MonoBehaviour` | 2 |  |
