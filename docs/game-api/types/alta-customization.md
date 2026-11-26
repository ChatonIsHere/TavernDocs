---
title: Customization and screenshots
description: Types in Alta.Customization and Alta.ScreenshotCamera.
sidebar_position: 10
---

# Customization and screenshots

Types in Alta.Customization and Alta.ScreenshotCamera. 144 types, 9 with a hand-written page.

See [the overview](overview.md) for what the columns mean and how this list is made.

## Alta.Customization

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`ArmorManager<TSlot>`](/game-api/types/alta-customization/armormanager-tslot) | class | `MonoBehaviour` | 1 | [Customization](../game-systems/customization.md): `Set(TSlot slot, ArmorDefinition armor)`: shows armour on a slot. |
| [`ArmorManager<TSlot>.SlotPairing`](/game-api/types/alta-customization/armormanager-tslot-slotpairing) | class |  | 2 | Inspector pairing of one armour slot with the equipment references (detectors) that should take whatever armour goes in that slot. |
| [`BodyTypePickup`](/game-api/types/alta-customization/bodytypepickup) | class | `CustomizationPickup` | 1 |  |
| [`BonesBaking`](/game-api/types/alta-customization/bonesbaking) | class | `ScriptableObject` | 4 |  |
| [`CategoryScrollElement`](/game-api/types/alta-customization/categoryscrollelement) | class | `ScrollElement` | 4 |  |
| [`CategoryScrollManager`](/game-api/types/alta-customization/categoryscrollmanager) | class | `MonoBehaviour` | 3 | Customisation menu component holding the cosmetic categories the category scroller shows, filtered to those the player owns options for. |
| [`CategoryScrubberController`](/game-api/types/alta-customization/categoryscrubbercontroller) | class | `MonoBehaviour` | 0 |  |
| [`ColoredMeshes`](/game-api/types/alta-customization/coloredmeshes) | class | `MonoBehaviour` | 1 |  |
| [`CosmeticBodyType`](/game-api/types/alta-customization/cosmeticbodytype) | class | `CustomizationVisualPart<CustomizationArguments>` | 6 |  |
| [`CosmeticColor`](/game-api/types/alta-customization/cosmeticcolor) | class | `HashedGeneralValue<CosmeticColor>` | 6 | A hashed asset holding a three-colour set for cosmetics, written into material colour slots A or B. |
| [`CosmeticCustomizationManager`](/game-api/types/alta-customization/cosmeticcustomizationmanager) | class | `MonoBehaviour` | 16 | [Customization](../game-systems/customization.md): Runs the customization room for the local player: randomize, undo, redo, exit. |
| [`CosmeticEyePart`](/game-api/types/alta-customization/cosmeticeyepart) | class | `CosmeticMeshPartBase<TwoColors>` | 1 |  |
| [`CosmeticFilterAttribute`](/game-api/types/alta-customization/cosmeticfilterattribute) | class | `PropertyAttribute` | 3 |  |
| [`CosmeticHairPart`](/game-api/types/alta-customization/cosmetichairpart) | class | `CosmeticMeshPart` | 1 |  |
| [`CosmeticMeshPart`](/game-api/types/alta-customization/cosmeticmeshpart) | class | `CosmeticMeshPartBase<TwoColors>` | 0 |  |
| [`CosmeticMeshPartBase<T>`](/game-api/types/alta-customization/cosmeticmeshpartbase-t) | class | `CustomizationVisualPart<T>`, `ICosmeticMeshPartBase`, `ICustomizationPart` | 12 | A cosmetic part that adds a mesh with its own texture to the character, coloured with two cosmetic colours. Attaching it adds an input to the character's cosmetic packer and repacks. |
| [`CosmeticOwnershipManager`](/game-api/types/alta-customization/cosmeticownershipmanager) | class |  | 10 | [Customization](../game-systems/customization.md): What a player owns and may use, by category. |
| [`CosmeticPacker`](/game-api/types/alta-customization/cosmeticpacker) | class | `MonoBehaviour` | 11 | Client: merges a character's cosmetic parts into a few meshes and one packed texture, then applies them to the character's clothes. Packing is queued on `CosmeticPackScheduler`. |
| [`CosmeticPacker.Input`](/game-api/types/alta-customization/cosmeticpacker-input) | class |  | 10 | One cosmetic part to pack into a character's combined mesh and texture, with its colours and blit materials. |
| [`CosmeticPacker.PartId`](/game-api/types/alta-customization/cosmeticpacker-partid) | struct | `IEquatable<PartId>` | 5 | Identifies one mesh part of a cosmetic: the cosmetic's hash and the part's index in its visual. |
| [`CosmeticPackScheduler`](/game-api/types/alta-customization/cosmeticpackscheduler) | class |  | 3 |  |
| [`CosmeticPalette`](/game-api/types/alta-customization/cosmeticpalette) | class | `GeneralValue` | 1 | ScriptableObject list of cosmetic colours (menu Township/Cosmetic/Palette). |
| [`CosmeticPickup`](/game-api/types/alta-customization/cosmeticpickup) | class | `CustomizationPickup` | 1 |  |
| [`CosmeticPickupType`](/game-api/types/alta-customization/cosmeticpickuptype) | enum |  | 5 | What a cosmetic pickup changes on the character: a cosmetic item, eyes, skin colour, a skin part or body type. |
| [`CosmeticPresetApplier`](/game-api/types/alta-customization/cosmeticpresetapplier) | class | `MonoBehaviour` | 1 |  |
| [`CosmeticPresetData`](/game-api/types/alta-customization/cosmeticpresetdata) | class |  | 5 | A player's whole cosmetic setup written out as packed bits, so it can be stored or sent as a preset. |
| [`CosmeticPresetDestroyer`](/game-api/types/alta-customization/cosmeticpresetdestroyer) | class | `MonoBehaviour` | 0 |  |
| [`CosmeticPresetSlot`](/game-api/types/alta-customization/cosmeticpresetslot) | class | `MonoBehaviour`, `ICosmeticPresetSlot` | 8 |  |
| [`CosmeticPresetsManager`](/game-api/types/alta-customization/cosmeticpresetsmanager) | class | `LoggedInTool` | 2 |  |
| [`CosmeticPresetTrophy`](/game-api/types/alta-customization/cosmeticpresettrophy) | class | `MonoBehaviour` | 12 | A small character figure that shows a saved cosmetic preset and can be picked up and placed in a preset slot. Client-side (not a network entity); it burns away when destroyed. |
| [`CosmeticPresetTrophyTrigger`](/game-api/types/alta-customization/cosmeticpresettrophytrigger) | class | `MonoBehaviour` | 5 | Trigger volume that tracks cosmetic preset trophies placed in it, for example on a customization stand. Raises events as trophies come and go. |
| [`CosmeticRotatingSlot`](/game-api/types/alta-customization/cosmeticrotatingslot) | class | `MonoBehaviour`, `ICosmeticPresetSlot` | 12 | The cosmetic preset shelf slot in the customization room: ten numbered preset slots shown one at a time, each saved to the API as a trophy. Client side; used by `CosmeticPresetsManager`. |
| [`CosmeticScrollElement`](/game-api/types/alta-customization/cosmeticscrollelement) | class | `ScrollElement` | 2 |  |
| [`CosmeticScrollManager`](/game-api/types/alta-customization/cosmeticscrollmanager) | class | `ScrollManager` | 1 | Client: a scroll list of the cosmetics the local player owns in one category. Fills itself from `CustomizationManager.Owned` once customization has loaded. |
| [`CosmeticScrollSource`](/game-api/types/alta-customization/cosmeticscrollsource) | class | `MonoBehaviour` | 3 | Holds the list of cosmetic hashes a customisation scroll list shows, and raises an event when it changes. Read by `ScrollManager` and `CosmeticScrollElement`. |
| [`CosmeticSetDefinition`](/game-api/types/alta-customization/cosmeticsetdefinition) | class | `Purchasable` | 2 |  |
| [`CosmeticSetFilterAttribute`](/game-api/types/alta-customization/cosmeticsetfilterattribute) | class | `PropertyAttribute` | 0 |  |
| [`CosmeticSkinColor`](/game-api/types/alta-customization/cosmeticskincolor) | class | `CustomizationVisualPart<CustomizationArguments>` | 1 |  |
| [`CurrentTalemBalance`](/game-api/types/alta-customization/currenttalembalance) | static class |  | 3 |  |
| [`CustomizationArguments`](/game-api/types/alta-customization/customizationarguments) | class |  | 5 | Extra settings for one customization part, such as colours (`TwoColors`). This base class carries nothing; subclasses add fields and serialize them. |
| [`CustomizationCategory`](/game-api/types/alta-customization/customizationcategory) | abstract class | `ScriptableObject`, `ICustomizationCategory` | 10 | Asset for one cosmetic category (hair, hats and so on) in the character customizer: its database item category, ordering, icon and how random picks are made. |
| [`CustomizationHistoryAccess`](/game-api/types/alta-customization/customizationhistoryaccess) | class | `HistoryAccess` | 1 |  |
| [`CustomizationHistoryAction`](/game-api/types/alta-customization/customizationhistoryaction) | class | `IHistoryAction` | 1 | One undo/redo step in the character customiser: the look before and after a change. Pushed by `CustomizationWrapper`. |
| [`CustomizationItemAndArguments`](/game-api/types/alta-customization/customizationitemandarguments) | struct |  | 2 | A customization definition paired with the arguments (such as colours) to apply it with. |
| [`CustomizationPackingSettings`](/game-api/types/alta-customization/customizationpackingsettings) | class | `GlobalSettings<CustomizationPackingSettings>` | 2 |  |
| [`CustomizationPickup`](/game-api/types/alta-customization/customizationpickup) | class | `MonoBehaviour` | 7 | Base for the grabbable items in the character customization area (cosmetics, body types, eyes, equipment). Client side; spawned from a template with `Spawn`. |
| [`CustomizationSettings`](/game-api/types/alta-customization/customizationsettings) | class | `GlobalSettings<CustomizationSettings>` | 6 |  |
| [`CustomizationSlot`](/game-api/types/alta-customization/customizationslot) | class |  | 6 | One body slot in a character's customisation, tracking which cosmetic parts are in it and which one is visible. Other entries in the slot are marked impeded (shown in their reduced form). Created by `CustomizationVisualManager`. |
| [`CustomizationSlotEntry`](/game-api/types/alta-customization/customizationslotentry) | class |  | 13 | One part of a cosmetic or equipment visual placed in a customization slot. Tracks whether other items cover it (impeded) or a slot disables it (hidden). |
| [`CustomizationTester`](/game-api/types/alta-customization/customizationtester) | class | `MonoBehaviour` | 0 |  |
| [`CustomizationVisual`](/game-api/types/alta-customization/customizationvisual) | class | `MonoBehaviour`, `ICustomizationVisual` | 6 | Prefab component for one cosmetic's look: its visual parts plus the slots it takes as primary and the slots it disables. |
| [`CustomizationVisualManager`](/game-api/types/alta-customization/customizationvisualmanager) | class | `ICustomizationVisualManager` | 10 |  |
| [`CustomizationVisualPart`](/game-api/types/alta-customization/customizationvisualpart) | abstract class | `MonoBehaviour`, `ICustomizationPart` | 12 | Base component for a cosmetic visual part. Handles show, hide and argument changes across handlers, skipping first-person handlers if the part isn't shown in first person. |
| [`CustomizationVisualPart<TArguments>`](/game-api/types/alta-customization/customizationvisualpart-targuments) | abstract class | `CustomizationVisualPart` | 2 | A `CustomizationVisualPart` whose default arguments of type `TArguments` are set on the prefab. |
| [`CustomizationWrapper`](/game-api/types/alta-customization/customizationwrapper) | abstract class | `IHasHistory`, `ICustomizationWrapper` | 26 | [Customization](../game-systems/customization.md): Base of both wrappers. `IEnumerable<uint> Items`, `Arguments`, `Task<bool> Add(uint item, CustomizationArguments[] arguments)`, undo history. |
| [`CustomizationWrapperSerializer`](/game-api/types/alta-customization/customizationwrapperserializer) | static class |  | 7 | [Customization](../game-systems/customization.md): Writes and reads a wrapper to a stream or a save (`Save`, `LoadAsync`, `SerializeStreamAsync`). |
| [`DefaultCosmeticInfo`](/game-api/types/alta-customization/defaultcosmeticinfo) | class | `ISerializationCallbackReceiver` | 9 | A cosmetic every player must wear in a category unless they pick another, with its colours. Listed in `CustomizationSettings.RequiredDefaults` and added when loading a look that lacks one. |
| [`EditableCosmeticSlot`](/game-api/types/alta-customization/editablecosmeticslot) | class | `EditableSlot` | 0 |  |
| [`EditableEquipmentManager`](/game-api/types/alta-customization/editableequipmentmanager) | class |  | 2 | The set of editable equipment slots on a player's customisation handler, switched on and off together. Found on `PlayerCustomizationHandler.EditableEquipmentManager`. |
| [`EditableEquipmentSlot`](/game-api/types/alta-customization/editableequipmentslot) | class | `EditableSlot` | 0 |  |
| [`EditableSlot`](/game-api/types/alta-customization/editableslot) | class | `MonoBehaviour` | 2 |  |
| [`EquipmentCustomizationRoom`](/game-api/types/alta-customization/equipmentcustomizationroom) | class | `MonoBehaviour` | 6 | Client: the room spawned for a player's equipment (dress-up) mode, with a dummy that shows their customization and copies their pose. `EquipmentState` links and unlinks it. |
| [`EquipmentPart`](/game-api/types/alta-customization/equipmentpart) | class | `CustomizationVisualPart<CustomizationArguments>` | 0 |  |
| [`EquipmentPickup`](/game-api/types/alta-customization/equipmentpickup) | class | `CustomizationPickup` | 2 |  |
| [`EquipmentSlot`](/game-api/types/alta-customization/equipmentslot) | enum |  | 9 | Body slots armour can go in: head, shoulders, arms, chest and tassets. Used as the slot key by `PlayerArmorManager`. |
| [`EyePickup`](/game-api/types/alta-customization/eyepickup) | class | `CustomizationPickup` | 1 |  |
| [`ICosmeticMeshPartBase`](/game-api/types/alta-customization/icosmeticmeshpartbase) | interface | `ICustomizationPart` | 14 | A cosmetic part made of meshes and textures that gets packed into the character's combined cosmetic mesh, with two colours. |
| [`ICosmeticPresetSlot`](/game-api/types/alta-customization/icosmeticpresetslot) | interface |  | 3 | A place a cosmetic preset trophy can sit, such as `CosmeticPresetSlot` or `CosmeticRotatingSlot`. |
| [`ICustomizationCategory`](/game-api/types/alta-customization/icustomizationcategory) | interface |  | 10 | A category of customization items, such as a cosmetic slot, as shown in the customization menus. |
| [`ICustomizationDefinition`](/game-api/types/alta-customization/icustomizationdefinition) | interface |  | 8 | One cosmetic option for the character customiser: it can be shown on a character, spawned as a pickup for preview and given default arguments. |
| [`ICustomizationHandler`](/game-api/types/alta-customization/icustomizationhandler) | interface |  | 11 | Something that shows a customised player body, such as a player character or a dummy, and that the customization manager applies outfits to. |
| [`ICustomizationPart`](/game-api/types/alta-customization/icustomizationpart) | interface |  | 9 | One visual piece of a cosmetic that attaches to character models (third person body, first person hands and so on) in given slots. |
| [`ICustomizationVisual`](/game-api/types/alta-customization/icustomizationvisual) | interface |  | 4 | The visual for a cosmetic or equipment item: its parts and which customization slots it fills or disables. Used by `CustomizationVisualManager`. |
| [`ICustomizationVisualManager`](/game-api/types/alta-customization/icustomizationvisualmanager) | interface |  | 10 | Keeps track of which cosmetics and equipment are worn and shows them on every attached character (handler). `CustomizationVisualManager` is the implementation. |
| [`ICustomizationWrapper`](/game-api/types/alta-customization/icustomizationwrapper) | interface |  | 10 | Holds a character's set of cosmetic items and their arguments, and loads their assets in sessions. |
| [`MainMenuCustomizationInterface`](/game-api/types/alta-customization/mainmenucustomizationinterface) | class | `LoggedInTool` | 0 |  |
| [`MainMenuShopInterface`](/game-api/types/alta-customization/mainmenushopinterface) | class | `LoggedInTool` | 1 |  |
| [`MainMenuShopItem`](/game-api/types/alta-customization/mainmenushopitem) | class | `MonoBehaviour` | 3 | Client: one item on the main menu shop shelf. Shows the item and its price from the shop API, and buys it when enough currency are put in its deposit dock. |
| [`MeshPacker`](/game-api/types/alta-customization/meshpacker) | static class |  | 1 |  |
| [`PackingWatch`](/game-api/types/alta-customization/packingwatch) | static class |  | 3 |  |
| [`PlayerArmorManager`](/game-api/types/alta-customization/playerarmormanager) | class | `ArmorManager<EquipmentSlot>` | 0 | The player's armour manager, keyed by `EquipmentSlot`. Found on `PlayerCustomizationHandler.ArmorManager`. |
| [`PlayerCharacterCustomizationManager`](/game-api/types/alta-customization/playercharactercustomizationmanager) | class |  | 7 | [Customization](../game-systems/customization.md): One per `Player`: `player.Customization`. |
| [`PlayerCosmeticCategory`](/game-api/types/alta-customization/playercosmeticcategory) | class | `CustomizationCategory` | 3 | A category of player cosmetics (a slot such as a hat or shirt), loaded from `Resources/Cosmetic Categories`. Picks random items for random outfits. |
| [`PlayerCosmeticDefinition`](/game-api/types/alta-customization/playercosmeticdefinition) | class | `Purchasable`, `ICustomizationDefinition` | 8 | [Customization](../game-systems/customization.md): A `Purchasable` (`ScriptableObject` loaded through Addressables) with a `Hash`, `Sku`, `DisplayName`, category and visual. |
| [`PlayerCosmeticDefinitionSet`](/game-api/types/alta-customization/playercosmeticdefinitionset) | class | `ScriptableObject` | 1 | ScriptableObject list of cosmetic definition hashes (menu Township/Customization/Cosmetic Set). Used for `CustomizationSettings.DefaultCosmetics`. |
| [`PlayerCosmeticWrapper`](/game-api/types/alta-customization/playercosmeticwrapper) | class | `CustomizationWrapper` | 3 | The customization wrapper for player cosmetics: loads `PlayerCosmeticDefinition` items through the wrapper's addressable session. |
| [`PlayerCustomizationHandler`](/game-api/types/alta-customization/playercustomizationhandler) | class | `MonoBehaviour`, `ICustomizationHandler` | 15 | [Customization](../game-systems/customization.md): On a body: applies the visuals, finds bones, first-person mode. `ArmorManager`, `EditableEquipmentManager`. |
| [`PlayerCustomizationSlot`](/game-api/types/alta-customization/playercustomizationslot) | enum |  | 148 |  |
| [`PlayerCustomizationSlotSet`](/game-api/types/alta-customization/playercustomizationslotset) | class |  | 1 | A list of customization slot numbers. `EditableSlot` uses one to know which slots it edits. |
| [`PlayerEquipmentCategory`](/game-api/types/alta-customization/playerequipmentcategory) | class | `CustomizationCategory` | 2 |  |
| [`PlayerEquipmentDefinition`](/game-api/types/alta-customization/playerequipmentdefinition) | class | `HashedGeneralValue<PlayerEquipmentDefinition>`, `ICustomizationDefinition` | 12 | [Customization](../game-systems/customization.md): `HashedGeneralValue<PlayerEquipmentDefinition>`: an armour piece's look, with its `ArmorDefinition` and `ArmorSlot`. |
| [`PlayerEquipmentWrapper`](/game-api/types/alta-customization/playerequipmentwrapper) | class | `CustomizationWrapper` | 2 |  |
| [`Purchasable`](/game-api/types/alta-customization/purchasable) | class | `ScriptableObject` | 14 | Base asset for a shop item or cosmetic that can be owned, loaded through Addressables by its hash. With external cosmetics on, the catalog comes from Alta's DigitalOcean bundle store. |
| [`PurchasableMap`](/game-api/types/alta-customization/purchasablemap) | class | `GlobalSettings<PurchasableMap>` | 6 |  |
| [`PurchasableMap.CosmeticCategory`](/game-api/types/alta-customization/purchasablemap-cosmeticcategory) | class |  | 2 |  |
| [`PurchasableMap.CosmeticSet`](/game-api/types/alta-customization/purchasablemap-cosmeticset) | class |  | 4 |  |
| [`PurchasedList`](/game-api/types/alta-customization/purchasedlist) | class |  | 17 | Which cosmetic hashes the local player owns or can pick, built from default cosmetics, the shop API's owned items and developer items. The owned and available sets are static, so every instance shares them. Does nothing on a dedicated server. |
| [`ScrollManager`](/game-api/types/alta-customization/scrollmanager) | abstract class | `MonoBehaviour` | 4 |  |
| [`ShopConfigUtility`](/game-api/types/alta-customization/shopconfigutility) | static class |  | 2 |  |
| [`ShopConfigUtility.ShopItemConfigurations`](/game-api/types/alta-customization/shopconfigutility-shopitemconfigurations) | class |  | 2 |  |
| [`ShopInterface`](/game-api/types/alta-customization/shopinterface) | class | `LoggedInTool` | 5 |  |
| [`ShopInterfaceItem`](/game-api/types/alta-customization/shopinterfaceitem) | class | `MonoBehaviour` | 3 | One row in the in-game cosmetic shop, showing an item's name and price. Created by `ShopInterface`. |
| [`SkinColorPickup`](/game-api/types/alta-customization/skincolorpickup) | class | `CustomizationPickup` | 1 |  |
| [`SkinMeshPart`](/game-api/types/alta-customization/skinmeshpart) | class | `CosmeticMeshPartBase<CustomizationArguments>` | 2 |  |
| [`SkinnedMeshPlatformQualityController`](/game-api/types/alta-customization/skinnedmeshplatformqualitycontroller) | class | `BuildRendererBakeable` | 1 |  |
| [`StaticRandomCustomization`](/game-api/types/alta-customization/staticrandomcustomization) | static class |  | 3 |  |
| [`StoreScrollManager`](/game-api/types/alta-customization/storescrollmanager) | class | `ScrollManager` | 1 |  |
| [`TexturePacker`](/game-api/types/alta-customization/texturepacker) | static class |  | 2 |  |
| [`TwoColors`](/game-api/types/alta-customization/twocolors) | class | `CustomizationArguments` | 9 | Customization arguments holding a primary and secondary cosmetic colour for a cosmetic item. |

## Alta.ScreenshotCamera

| Type | Kind | Base | Public members | Documented in, or what it is |
| --- | --- | --- | --- | --- |
| [`BlockableCamera`](/game-api/types/alta-customization/blockablecamera) | abstract class | `MonoBehaviour` | 5 | Base for a hand camera view that switches its camera off while something is in the way (a sphere or capsule check, in the subclasses). Client side. |
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
| [`FocusPuller.FocusMode`](/game-api/types/alta-customization/focuspuller-focusmode) | enum |  | 3 | Hand camera focus mode: `Perfect`, `Auto` (focuses when a photo is taken or the screen is free) or `Manual` (set by the player turning the control). |
| [`HandCamera`](/game-api/types/alta-customization/handcamera) | class | `NetworkEntityBehaviour`, `IBuildRendererBakeable`, `IBuildBakeable` | 29 | The handheld photo camera a player spawns from the quick access menu. Only its owner can pick it up; photos, selfie mode and streaming sync to others. Never saved. `HandCamera.Current` is the local player's. |
| [`HandCameraEvent`](/game-api/types/alta-customization/handcameraevent) | enum |  | 2 | Flags for what the hand-held screenshot camera is doing: `idle` or taking a `photo`. |
| [`HandCameraRender`](/game-api/types/alta-customization/handcamerarender) | delegate |  | 0 | Handler for the static `HandCamera.onPreRender` and `HandCamera.onPostRender` events, given the camera that is rendering and the camera event. |
| [`HandCameraSettings`](/game-api/types/alta-customization/handcamerasettings) | class | `ScriptableObject` | 9 | ScriptableObject with the hand camera's tuning: timer options, flash and fade timings, photo colours, antialiasing and the layers that block a shot. |
| [`HandCameraStreamer`](/game-api/types/alta-customization/handcamerastreamer) | class | `MonoBehaviour` | 2 | Client: shows the hand camera's live view on a plane through its own camera. `HandyCameraManager.StartStreaming` spawns one from a prefab on first use. |
| [`HandCameraViewfinderResizerSettings`](/game-api/types/alta-customization/handcameraviewfinderresizersettings) | internal class | `ScriptableObject` | 2 | Client: keeps the hand camera's viewfinder from going further than a set distance from the player's head, pulling it in along the line of sight. Internal asset. |
| [`HandyCameraManager`](/game-api/types/alta-customization/handycameramanager) | class | `NetworkEntityBehaviour` | 5 |  |
| [`LocalPlayerHeadRenderer`](/game-api/types/alta-customization/localplayerheadrenderer) | class |  | 2 |  |
| [`OnDrawFilter`](/game-api/types/alta-customization/ondrawfilter) | abstract class | `FilterAction` | 2 |  |
| [`OpticalZoom`](/game-api/types/alta-customization/opticalzoom) | class | `NetworkEntityBehaviour` | 2 |  |
| [`PlayerSwapMaterialFilter`](/game-api/types/alta-customization/playerswapmaterialfilter) | abstract class | `OnDrawFilter` | 1 | Base for hand camera filters that swap every living player's clothing materials for a copy while the camera renders, then put the originals back. Subclasses build the copy in `SetupTuple`. |
| [`PlayerSwapMaterialFilter.MaterialTuple`](/game-api/types/alta-customization/playerswapmaterialfilter-materialtuple) | class |  | 3 | A renderer's original material and the swapped copy a hand camera filter shows instead (for example the spectral look). |
| [`PostProcessFilter`](/game-api/types/alta-customization/postprocessfilter) | class | `FilterAction` | 2 |  |
| [`RemoteObiturator`](/game-api/types/alta-customization/remoteobiturator) | class | `MonoBehaviour` | 0 |  |
| [`SpectralFilter`](/game-api/types/alta-customization/spectralfilter) | class | `PlayerSwapMaterialFilter` | 0 |  |
| [`SphereBlockableCamera`](/game-api/types/alta-customization/sphereblockablecamera) | class | `BlockableCamera` | 0 |  |
| [`StreamingButton`](/game-api/types/alta-customization/streamingbutton) | class | `CameraButton` | 0 |  |
| [`SummonCameraQuickAccess`](/game-api/types/alta-customization/summoncameraquickaccess) | class | `QuickAccessMenuAction` | 3 |  |
| [`TimerButton`](/game-api/types/alta-customization/timerbutton) | class | `CameraButton` | 0 |  |
| [`TouchScreenMenu`](/game-api/types/alta-customization/touchscreenmenu) | class | `TouchScreenMenuBase` | 0 |  |
| [`VisibilityTrigger`](/game-api/types/alta-customization/visibilitytrigger) | class | `MonoBehaviour` | 2 |  |
