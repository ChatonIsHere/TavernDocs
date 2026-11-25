---
title: Customization
description: Player cosmetics and outfits, how they're stored and synced, and armour visuals.
sidebar_position: 14
---

# Customization

`Alta.Customization` in `Root.Township`. Mostly client side.

A player's look is a list of cosmetic item hashes (with arguments such as colours) plus their equipment (armour). The look is chosen in the customization room, saved in the player's save, and sent to everyone else.

## The pieces

| Type | What it is |
| --- | --- |
| `PlayerCharacterCustomizationManager` | One per `Player`: `player.Customization`. Holds `Cosmetics` (a `PlayerCosmeticWrapper`) and `Equipment` (a `PlayerEquipmentWrapper`), and the visual handlers attached to the player's bodies. |
| `CustomizationWrapper` | Base of both wrappers. `IEnumerable<uint> Items`, `Arguments`, `Task<bool> Add(uint item, CustomizationArguments[] arguments)`, undo history. |
| `PlayerCosmeticDefinition` | A cosmetic. A `Purchasable` (`ScriptableObject` loaded through Addressables) with a `Hash`, `Sku`, `DisplayName`, category and visual. |
| `PlayerEquipmentDefinition` | `HashedGeneralValue<PlayerEquipmentDefinition>`: an armour piece's look, with its `ArmorDefinition` and `ArmorSlot`. |
| `PlayerCustomizationHandler` | On a body: applies the visuals, finds bones, first-person mode. `ArmorManager`, `EditableEquipmentManager`. |
| `CosmeticCustomizationManager` | Runs the customization room for the local player: randomize, undo, redo, exit. |
| `CosmeticOwnershipManager` | What a player owns and may use, by category. |
| `CustomizationWrapperSerializer` | Static. Writes and reads a wrapper to a stream or a save (`Save`, `LoadAsync`, `SerializeStreamAsync`). |
| `ArmorManager<TSlot>` | `Set(TSlot slot, ArmorDefinition armor)`: shows armour on a slot. |

## Sync and saves

- The player's client sends its own cosmetics with `Player.SyncCosmeticsToOthers()` when they leave the customization room. The server accepts the message only from that player (anyone else's is logged as unauthorized) and reads it into its copy of the wrapper without building visuals. It sends that copy to each player who connects later.
- On Tavern servers TavernLib replaces `Player.SyncCosmetics` with its own prefix. It keeps the same authority check, and when the server writes, it copies the player's saved cosmetic bytes (`saveData.CosmeticData`) straight into the message when there are any, instead of re-serializing the wrapper.
- Leaving the customization room checks ownership with `PurchasedList.ValidatePlayersOwnedItems`. In the server build that method already returns true without asking Alta, and TavernLib patches it to return true as well.
- `Player` saves the cosmetics into the player save (`CosmeticData`, `CosmeticBytes`) and loads them with `CustomizationWrapperSerializer.LoadAsync`.
- Most of this is `async` (Addressables loads). It runs on the main thread through Unity's synchronization context, but finishes frames later.

## Ownership and the shop

`CosmeticOwnershipManager.LoadFor` builds the owned list from `PurchasedList`, which asks Alta's shop service (`ApiAccess.ApiClient.ShopClient`) for purchases. That service is gone. TavernLib patches `PurchasedList.Refresh` so every player owns exactly the cosmetics in `PurchasedList.OwnedByAll` (no paid ones), and `UpdateCurrentRotation` so the store rotation is empty. It also handles cosmetic presets (`UserApiClient.GetAllCosmeticsPresets`, `CreateCosmeticsPreset`, `DeleteCosmeticPreset`) locally, as `.preset` files in a `presets` folder in the game's save directory. `ShopInterface`, `MainMenuShopInterface` and `CurrentTalemBalance` are the in-game shop UI.

## Server notes

- `Purchasable.LoadAllIntoRAM()` loads every cosmetic asset at once. TavernLib calls it on the server after start (`ServerHostingGameMode.OnStartSucceeded`) so lookups don't wait on Addressables later.
- The host setting `IsCustomizationEnabled` (dev only) decides whether new players go through the customization room on first join.

## Hooking it

The server holds the list of hashes but never shows anything, so visual changes belong in a client mod. A hash a client doesn't have as an Addressable can't be shown. New cosmetics need assets on every client, which is out of reach without a client mod.

## See also

- The items area, for armour as an item
