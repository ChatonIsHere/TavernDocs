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
| [`ArmorManager<TSlot>`](/game-api/types/alta-customization/armormanager-tslot) | class | `MonoBehaviour` | 1 | [Customization](../game-systems/customization.md): `Set(TSlot slot, ArmorDefinition armor)`: shows armour on a slot. |
| [`ArmorManager<TSlot>.SlotPairing`](/game-api/types/alta-customization/armormanager-tslot-slotpairing) | class |  | 2 |  |
| [`BodyTypePickup`](/game-api/types/alta-customization/bodytypepickup) | class | `CustomizationPickup` | 1 |  |
| [`BonesBaking`](/game-api/types/alta-customization/bonesbaking) | class | `ScriptableObject` | 4 |  |
| [`CategoryScrollElement`](/game-api/types/alta-customization/categoryscrollelement) | class | `ScrollElement` | 4 |  |
| [`CategoryScrollManager`](/game-api/types/alta-customization/categoryscrollmanager) | class | `MonoBehaviour` | 3 |  |
| [`CategoryScrubberController`](/game-api/types/alta-customization/categoryscrubbercontroller) | class | `MonoBehaviour` | 0 |  |
| [`ColoredMeshes`](/game-api/types/alta-customization/coloredmeshes) | class | `MonoBehaviour` | 1 |  |
| [`CosmeticBodyType`](/game-api/types/alta-customization/cosmeticbodytype) | class | `CustomizationVisualPart<CustomizationArguments>` | 6 |  |
| [`CosmeticColor`](/game-api/types/alta-customization/cosmeticcolor) | class | `HashedGeneralValue<CosmeticColor>` | 6 |  |
| [`CosmeticCustomizationManager`](/game-api/types/alta-customization/cosmeticcustomizationmanager) | class | `MonoBehaviour` | 16 | [Customization](../game-systems/customization.md): Runs the customization room for the local player: randomize, undo, redo, exit. |
| [`CosmeticEyePart`](/game-api/types/alta-customization/cosmeticeyepart) | class | `CosmeticMeshPartBase<TwoColors>` | 1 |  |
| [`CosmeticFilterAttribute`](/game-api/types/alta-customization/cosmeticfilterattribute) | class | `PropertyAttribute` | 3 |  |
| [`CosmeticHairPart`](/game-api/types/alta-customization/cosmetichairpart) | class | `CosmeticMeshPart` | 1 |  |
| [`CosmeticMeshPart`](/game-api/types/alta-customization/cosmeticmeshpart) | class | `CosmeticMeshPartBase<TwoColors>` | 0 |  |
| [`CosmeticMeshPartBase<T>`](/game-api/types/alta-customization/cosmeticmeshpartbase-t) | class | `CustomizationVisualPart<T>`, `ICosmeticMeshPartBase`, `ICustomizationPart` | 12 |  |
| [`CosmeticOwnershipManager`](/game-api/types/alta-customization/cosmeticownershipmanager) | class |  | 10 | [Customization](../game-systems/customization.md): What a player owns and may use, by category. |
| [`CosmeticPacker`](/game-api/types/alta-customization/cosmeticpacker) | class | `MonoBehaviour` | 11 |  |
| [`CosmeticPacker.Input`](/game-api/types/alta-customization/cosmeticpacker-input) | class |  | 10 |  |
| [`CosmeticPacker.PartId`](/game-api/types/alta-customization/cosmeticpacker-partid) | struct | `IEquatable<PartId>` | 5 |  |
| [`CosmeticPackScheduler`](/game-api/types/alta-customization/cosmeticpackscheduler) | class |  | 3 |  |
| [`CosmeticPalette`](/game-api/types/alta-customization/cosmeticpalette) | class | `GeneralValue` | 1 |  |
| [`CosmeticPickup`](/game-api/types/alta-customization/cosmeticpickup) | class | `CustomizationPickup` | 1 |  |
| [`CosmeticPickupType`](/game-api/types/alta-customization/cosmeticpickuptype) | enum |  | 5 |  |
| [`CosmeticPresetApplier`](/game-api/types/alta-customization/cosmeticpresetapplier) | class | `MonoBehaviour` | 1 |  |
| [`CosmeticPresetData`](/game-api/types/alta-customization/cosmeticpresetdata) | class |  | 5 |  |
| [`CosmeticPresetDestroyer`](/game-api/types/alta-customization/cosmeticpresetdestroyer) | class | `MonoBehaviour` | 0 |  |
| [`CosmeticPresetSlot`](/game-api/types/alta-customization/cosmeticpresetslot) | class | `MonoBehaviour`, `ICosmeticPresetSlot` | 8 |  |
| [`CosmeticPresetsManager`](/game-api/types/alta-customization/cosmeticpresetsmanager) | class | `LoggedInTool` | 2 |  |
| [`CosmeticPresetTrophy`](/game-api/types/alta-customization/cosmeticpresettrophy) | class | `MonoBehaviour` | 12 |  |
| [`CosmeticPresetTrophyTrigger`](/game-api/types/alta-customization/cosmeticpresettrophytrigger) | class | `MonoBehaviour` | 5 |  |
| [`CosmeticRotatingSlot`](/game-api/types/alta-customization/cosmeticrotatingslot) | class | `MonoBehaviour`, `ICosmeticPresetSlot` | 12 |  |
| [`CosmeticScrollElement`](/game-api/types/alta-customization/cosmeticscrollelement) | class | `ScrollElement` | 2 |  |
| [`CosmeticScrollManager`](/game-api/types/alta-customization/cosmeticscrollmanager) | class | `ScrollManager` | 1 |  |
| [`CosmeticScrollSource`](/game-api/types/alta-customization/cosmeticscrollsource) | class | `MonoBehaviour` | 3 |  |
| [`CosmeticSetDefinition`](/game-api/types/alta-customization/cosmeticsetdefinition) | class | `Purchasable` | 2 |  |
| [`CosmeticSetFilterAttribute`](/game-api/types/alta-customization/cosmeticsetfilterattribute) | class | `PropertyAttribute` | 0 |  |
| [`CosmeticSkinColor`](/game-api/types/alta-customization/cosmeticskincolor) | class | `CustomizationVisualPart<CustomizationArguments>` | 1 |  |
| [`CurrentTalemBalance`](/game-api/types/alta-customization/currenttalembalance) | static class |  | 3 |  |
| [`CustomizationArguments`](/game-api/types/alta-customization/customizationarguments) | class |  | 5 |  |
| [`CustomizationCategory`](/game-api/types/alta-customization/customizationcategory) | abstract class | `ScriptableObject`, `ICustomizationCategory` | 10 |  |
| [`CustomizationHistoryAccess`](/game-api/types/alta-customization/customizationhistoryaccess) | class | `HistoryAccess` | 1 |  |
| [`CustomizationHistoryAction`](/game-api/types/alta-customization/customizationhistoryaction) | class | `IHistoryAction` | 1 |  |
| [`CustomizationItemAndArguments`](/game-api/types/alta-customization/customizationitemandarguments) | struct |  | 2 |  |
| [`CustomizationPackingSettings`](/game-api/types/alta-customization/customizationpackingsettings) | class | `GlobalSettings<CustomizationPackingSettings>` | 2 |  |
| [`CustomizationPickup`](/game-api/types/alta-customization/customizationpickup) | class | `MonoBehaviour` | 7 |  |
| [`CustomizationSettings`](/game-api/types/alta-customization/customizationsettings) | class | `GlobalSettings<CustomizationSettings>` | 6 |  |
| [`CustomizationSlot`](/game-api/types/alta-customization/customizationslot) | class |  | 6 |  |
| [`CustomizationSlotEntry`](/game-api/types/alta-customization/customizationslotentry) | class |  | 13 |  |
| [`CustomizationTester`](/game-api/types/alta-customization/customizationtester) | class | `MonoBehaviour` | 0 |  |
| [`CustomizationVisual`](/game-api/types/alta-customization/customizationvisual) | class | `MonoBehaviour`, `ICustomizationVisual` | 6 |  |
| [`CustomizationVisualManager`](/game-api/types/alta-customization/customizationvisualmanager) | class | `ICustomizationVisualManager` | 10 |  |
| [`CustomizationVisualPart`](/game-api/types/alta-customization/customizationvisualpart) | abstract class | `MonoBehaviour`, `ICustomizationPart` | 12 |  |
| [`CustomizationVisualPart<TArguments>`](/game-api/types/alta-customization/customizationvisualpart-targuments) | abstract class | `CustomizationVisualPart` | 2 |  |
| [`CustomizationWrapper`](/game-api/types/alta-customization/customizationwrapper) | abstract class | `IHasHistory`, `ICustomizationWrapper` | 26 | [Customization](../game-systems/customization.md): Base of both wrappers. `IEnumerable<uint> Items`, `Arguments`, `Task<bool> Add(uint item, CustomizationArguments[] arguments)`, undo history. |
| [`CustomizationWrapperSerializer`](/game-api/types/alta-customization/customizationwrapperserializer) | static class |  | 7 | [Customization](../game-systems/customization.md): Writes and reads a wrapper to a stream or a save (`Save`, `LoadAsync`, `SerializeStreamAsync`). |
| [`DefaultCosmeticInfo`](/game-api/types/alta-customization/defaultcosmeticinfo) | class | `ISerializationCallbackReceiver` | 9 |  |
| [`EditableCosmeticSlot`](/game-api/types/alta-customization/editablecosmeticslot) | class | `EditableSlot` | 0 |  |
| [`EditableEquipmentManager`](/game-api/types/alta-customization/editableequipmentmanager) | class |  | 2 |  |
| [`EditableEquipmentSlot`](/game-api/types/alta-customization/editableequipmentslot) | class | `EditableSlot` | 0 |  |
| [`EditableSlot`](/game-api/types/alta-customization/editableslot) | class | `MonoBehaviour` | 2 |  |
| [`EquipmentCustomizationRoom`](/game-api/types/alta-customization/equipmentcustomizationroom) | class | `MonoBehaviour` | 6 |  |
| [`EquipmentPart`](/game-api/types/alta-customization/equipmentpart) | class | `CustomizationVisualPart<CustomizationArguments>` | 0 |  |
| [`EquipmentPickup`](/game-api/types/alta-customization/equipmentpickup) | class | `CustomizationPickup` | 2 |  |
| [`EquipmentSlot`](/game-api/types/alta-customization/equipmentslot) | enum |  | 9 |  |
| [`EyePickup`](/game-api/types/alta-customization/eyepickup) | class | `CustomizationPickup` | 1 |  |
| [`ICosmeticMeshPartBase`](/game-api/types/alta-customization/icosmeticmeshpartbase) | interface | `ICustomizationPart` | 14 |  |
| [`ICosmeticPresetSlot`](/game-api/types/alta-customization/icosmeticpresetslot) | interface |  | 3 |  |
| [`ICustomizationCategory`](/game-api/types/alta-customization/icustomizationcategory) | interface |  | 10 |  |
| [`ICustomizationDefinition`](/game-api/types/alta-customization/icustomizationdefinition) | interface |  | 8 |  |
| [`ICustomizationHandler`](/game-api/types/alta-customization/icustomizationhandler) | interface |  | 11 |  |
| [`ICustomizationPart`](/game-api/types/alta-customization/icustomizationpart) | interface |  | 9 |  |
| [`ICustomizationVisual`](/game-api/types/alta-customization/icustomizationvisual) | interface |  | 4 |  |
| [`ICustomizationVisualManager`](/game-api/types/alta-customization/icustomizationvisualmanager) | interface |  | 10 |  |
| [`ICustomizationWrapper`](/game-api/types/alta-customization/icustomizationwrapper) | interface |  | 10 |  |
| [`MainMenuCustomizationInterface`](/game-api/types/alta-customization/mainmenucustomizationinterface) | class | `LoggedInTool` | 0 |  |
| [`MainMenuShopInterface`](/game-api/types/alta-customization/mainmenushopinterface) | class | `LoggedInTool` | 1 |  |
| [`MainMenuShopItem`](/game-api/types/alta-customization/mainmenushopitem) | class | `MonoBehaviour` | 3 |  |
| [`MeshPacker`](/game-api/types/alta-customization/meshpacker) | static class |  | 1 |  |
| [`PackingWatch`](/game-api/types/alta-customization/packingwatch) | static class |  | 3 |  |
| [`PlayerArmorManager`](/game-api/types/alta-customization/playerarmormanager) | class | `ArmorManager<EquipmentSlot>` | 0 |  |
| [`PlayerCharacterCustomizationManager`](/game-api/types/alta-customization/playercharactercustomizationmanager) | class |  | 7 | [Customization](../game-systems/customization.md): One per `Player`: `player.Customization`. |
| [`PlayerCosmeticCategory`](/game-api/types/alta-customization/playercosmeticcategory) | class | `CustomizationCategory` | 3 |  |
| [`PlayerCosmeticDefinition`](/game-api/types/alta-customization/playercosmeticdefinition) | class | `Purchasable`, `ICustomizationDefinition` | 8 | [Customization](../game-systems/customization.md): A `Purchasable` (`ScriptableObject` loaded through Addressables) with a `Hash`, `Sku`, `DisplayName`, category and visual. |
| [`PlayerCosmeticDefinitionSet`](/game-api/types/alta-customization/playercosmeticdefinitionset) | class | `ScriptableObject` | 1 |  |
| [`PlayerCosmeticWrapper`](/game-api/types/alta-customization/playercosmeticwrapper) | class | `CustomizationWrapper` | 3 |  |
| [`PlayerCustomizationHandler`](/game-api/types/alta-customization/playercustomizationhandler) | class | `MonoBehaviour`, `ICustomizationHandler` | 15 | [Customization](../game-systems/customization.md): On a body: applies the visuals, finds bones, first-person mode. `ArmorManager`, `EditableEquipmentManager`. |
| [`PlayerCustomizationSlot`](/game-api/types/alta-customization/playercustomizationslot) | enum |  | 148 |  |
| [`PlayerCustomizationSlotSet`](/game-api/types/alta-customization/playercustomizationslotset) | class |  | 1 |  |
| [`PlayerEquipmentCategory`](/game-api/types/alta-customization/playerequipmentcategory) | class | `CustomizationCategory` | 2 |  |
| [`PlayerEquipmentDefinition`](/game-api/types/alta-customization/playerequipmentdefinition) | class | `HashedGeneralValue<PlayerEquipmentDefinition>`, `ICustomizationDefinition` | 12 | [Customization](../game-systems/customization.md): `HashedGeneralValue<PlayerEquipmentDefinition>`: an armour piece's look, with its `ArmorDefinition` and `ArmorSlot`. |
| [`PlayerEquipmentWrapper`](/game-api/types/alta-customization/playerequipmentwrapper) | class | `CustomizationWrapper` | 2 |  |
| [`Purchasable`](/game-api/types/alta-customization/purchasable) | class | `ScriptableObject` | 14 |  |
| [`PurchasableMap`](/game-api/types/alta-customization/purchasablemap) | class | `GlobalSettings<PurchasableMap>` | 6 |  |
| [`PurchasableMap.CosmeticCategory`](/game-api/types/alta-customization/purchasablemap-cosmeticcategory) | class |  | 2 |  |
| [`PurchasableMap.CosmeticSet`](/game-api/types/alta-customization/purchasablemap-cosmeticset) | class |  | 4 |  |
| [`PurchasedList`](/game-api/types/alta-customization/purchasedlist) | class |  | 17 |  |
| [`ScrollManager`](/game-api/types/alta-customization/scrollmanager) | abstract class | `MonoBehaviour` | 4 |  |
| [`ShopConfigUtility`](/game-api/types/alta-customization/shopconfigutility) | static class |  | 2 |  |
| [`ShopConfigUtility.ShopItemConfigurations`](/game-api/types/alta-customization/shopconfigutility-shopitemconfigurations) | class |  | 2 |  |
| [`ShopInterface`](/game-api/types/alta-customization/shopinterface) | class | `LoggedInTool` | 5 |  |
| [`ShopInterfaceItem`](/game-api/types/alta-customization/shopinterfaceitem) | class | `MonoBehaviour` | 3 |  |
| [`SkinColorPickup`](/game-api/types/alta-customization/skincolorpickup) | class | `CustomizationPickup` | 1 |  |
| [`SkinMeshPart`](/game-api/types/alta-customization/skinmeshpart) | class | `CosmeticMeshPartBase<CustomizationArguments>` | 2 |  |
| [`SkinnedMeshPlatformQualityController`](/game-api/types/alta-customization/skinnedmeshplatformqualitycontroller) | class | `BuildRendererBakeable` | 1 |  |
| [`StaticRandomCustomization`](/game-api/types/alta-customization/staticrandomcustomization) | static class |  | 3 |  |
| [`StoreScrollManager`](/game-api/types/alta-customization/storescrollmanager) | class | `ScrollManager` | 1 |  |
| [`TexturePacker`](/game-api/types/alta-customization/texturepacker) | static class |  | 2 |  |
| [`TwoColors`](/game-api/types/alta-customization/twocolors) | class | `CustomizationArguments` | 9 |  |

## Alta.ScreenshotCamera

| Type | Kind | Base | Public members | Documented in |
| --- | --- | --- | --- | --- |
| [`BlockableCamera`](/game-api/types/alta-customization/blockablecamera) | abstract class | `MonoBehaviour` | 5 |  |
| [`ButtonGroup`](/game-api/types/alta-customization/buttongroup) | class | `MonoBehaviour` | 1 |  |
| [`CameraButton`](/game-api/types/alta-customization/camerabutton) | abstract class | `MonoBehaviour` | 0 |  |
| [`CameraEventsListener`](/game-api/types/alta-customization/cameraeventslistener) | class | `MonoBehaviour` | 0 |  |
| [`CameraFilters`](/game-api/types/alta-customization/camerafilters) | class | `NetworkEntityBehaviour` | 3 |  |
| [`CameraRenderEvents`](/game-api/types/alta-customization/camerarenderevents) | class | `MonoBehaviour` | 1 |  |
| [`CameraStabilization`](/game-api/types/alta-customization/camerastabilization) | class | `MonoBehaviour` | 0 |  |
| [`CapsuleBlockableCamera`](/game-api/types/alta-customization/capsuleblockablecamera) | class | `BlockableCamera` | 0 |  |
| [`Filter`](/game-api/types/alta-customization/filter) | class |  | 3 |  |
| [`FilterAction`](/game-api/types/alta-customization/filteraction) | abstract class | `ScriptableObject` | 2 |  |
| [`FiltersButton`](/game-api/types/alta-customization/filtersbutton) | class | `BasicTouchScreenButton` | 3 |  |
| [`FocusButton`](/game-api/types/alta-customization/focusbutton) | class | `CameraButton` | 0 |  |
| [`FocusPuller`](/game-api/types/alta-customization/focuspuller) | class | `MonoBehaviour` | 3 |  |
| [`FocusPuller.FocusMode`](/game-api/types/alta-customization/focuspuller-focusmode) | enum |  | 3 |  |
| [`HandCamera`](/game-api/types/alta-customization/handcamera) | class | `NetworkEntityBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 29 |  |
| [`HandCameraEvent`](/game-api/types/alta-customization/handcameraevent) | enum |  | 2 |  |
| [`HandCameraRender`](/game-api/types/alta-customization/handcamerarender) | delegate |  | 0 |  |
| [`HandCameraSettings`](/game-api/types/alta-customization/handcamerasettings) | class | `ScriptableObject` | 9 |  |
| [`HandCameraStreamer`](/game-api/types/alta-customization/handcamerastreamer) | class | `MonoBehaviour` | 2 |  |
| [`HandCameraViewfinderResizerSettings`](/game-api/types/alta-customization/handcameraviewfinderresizersettings) | internal class | `ScriptableObject` | 2 |  |
| [`HandyCameraManager`](/game-api/types/alta-customization/handycameramanager) | class | `NetworkEntityBehaviour` | 5 |  |
| [`LocalPlayerHeadRenderer`](/game-api/types/alta-customization/localplayerheadrenderer) | class |  | 2 |  |
| [`OnDrawFilter`](/game-api/types/alta-customization/ondrawfilter) | abstract class | `FilterAction` | 2 |  |
| [`OpticalZoom`](/game-api/types/alta-customization/opticalzoom) | class | `NetworkEntityBehaviour` | 2 |  |
| [`PlayerSwapMaterialFilter`](/game-api/types/alta-customization/playerswapmaterialfilter) | abstract class | `OnDrawFilter` | 1 |  |
| [`PlayerSwapMaterialFilter.MaterialTuple`](/game-api/types/alta-customization/playerswapmaterialfilter-materialtuple) | class |  | 3 |  |
| [`PostProcessFilter`](/game-api/types/alta-customization/postprocessfilter) | class | `FilterAction` | 2 |  |
| [`RemoteObiturator`](/game-api/types/alta-customization/remoteobiturator) | class | `MonoBehaviour` | 0 |  |
| [`SpectralFilter`](/game-api/types/alta-customization/spectralfilter) | class | `PlayerSwapMaterialFilter` | 0 |  |
| [`SphereBlockableCamera`](/game-api/types/alta-customization/sphereblockablecamera) | class | `BlockableCamera` | 0 |  |
| [`StreamingButton`](/game-api/types/alta-customization/streamingbutton) | class | `CameraButton` | 0 |  |
| [`SummonCameraQuickAccess`](/game-api/types/alta-customization/summoncameraquickaccess) | class | `QuickAccessMenuAction` | 3 |  |
| [`TimerButton`](/game-api/types/alta-customization/timerbutton) | class | `CameraButton` | 0 |  |
| [`TouchScreenMenu`](/game-api/types/alta-customization/touchscreenmenu) | class | `TouchScreenMenuBase` | 0 |  |
| [`VisibilityTrigger`](/game-api/types/alta-customization/visibilitytrigger) | class | `MonoBehaviour` | 2 |  |
