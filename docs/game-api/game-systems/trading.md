---
title: Trading
description: Trade vendors and tax, the ATM and the per-player coin bank, and postboxes.
sidebar_position: 13
---

# Trading

`Alta.Trading` in `Root.Township`, plus top-level `ATMMachine`, `CentralGoldCoinBank`, `Postbox`, `PostboxSender` and friends. Server only.

Coins are ordinary items in docks. The trading machines move them between docks, a per-player bank file, and a per-player postbox file.

## Per-player storage

`PerPlayerManager<TThis, TContent, TSaveFormat> : NetworkEntityBehaviour` is a base for managers that keep one file of content per player, loaded when the player connects and saved when they leave (and on auto-save). `static TThis Instance`. On the server:

- `Task<TContent> GetContentAsync(int playerIdentifier, Player player = null, bool isCreatingNew = true)` loads (or creates) a player's content, even when they're offline.
- `TContent GetContentIfLoaded(int playerID)` returns it only if it's already loaded.

Two managers use it here:

| Manager | Content | What it holds |
| --- | --- | --- |
| `CentralGoldCoinBank` | `PlayerGoldBankAccount` (`PlayerGoldBankAccountData`) | A coin `Quantity`. While an ATM is open for the player, `Quantity` reads the ATM's teller instead. |
| `PostboxManager` | `PlayerPostboxStorage` (`PlayerPostboxStorageFileFormat`) | Saved objects waiting for the player. `Push(NetworkEntity entity, bool isDestroying = true)` saves an entity into it, `NetworkEntity Pop()` spawns the next one, `int GetCount()`. `PostboxManager.GetContentAsync(IPlayer)` also fills a brand-new storage with the manager's `initialContent`. |

Steady keeps a list of these managers (`CentralGoldCoinBank`, `PostboxManager`, the climbing tower's per-player data) because their per-player tables can hold destroyed players.

## TradeVendor and TaxManager

`Alta.Trading.TradeVendor : NetworkEntityBehaviour`. A player-run shop stall.

- The first player to put coins in the seller coin dock becomes the `Owner` (a user id, saved). When they join again, they're the owner again.
- The owner stocks the `stockDock` and sets the price with two counters (coins and items per sale).
- When a buyer puts at least the price in coins, on the server the vendor works out how many lots the coins and stock cover, hands out the items at `itemSpawnPoint`, moves the coins to `payments`, and logs the sale (`TradingLogger.RecordSale`).
- All of this is wired up in `TradeVendor.InitializeAsServer`, which also gives the owner back the stall when they're online, and subscribes to `ServerHandler.PlayerJoined` for when they come back.
- When a vendor loads with its buy display showing an item that isn't the stocked one (a broken stall), the server posts the stall's coins (in a pouch if more than one) and stock to the owner's postbox, spawns a fresh `Trade Deck` in its place and destroys the old one, logging "Destroying Trade Deck of ...".
- The vendor charges tax while it's open: `TaxManager` takes `TaxedAmount` coins from the `TaxDock` every `taxingTime`. When the tax runs out, the vendor shuts: stock, payments and leftover tax go to the owner's postbox (`DeactivateVendor`, `async void`), and the owner is cleared.

| Member | What it does |
| --- | --- |
| `int Owner { get; }` | Owner's user id, 0 if none. |
| `TradeStatus TradeState { get; }` | Open, out of stock and so on. |
| `PickupDock TaxDock { get; }`, `bool HasStock { get; }` | |
| `TaxManager.TaxedAmount`, `IsTaxingInProgress`, `InitialiseTaxProcess()`, `CancelTimer()` | The tax side. |

Steady notes that a destroyed `TradeVendor` stays subscribed to `ServerHandler.PlayerJoined` and throws when its owner joins.

### Asset values

From the prefabs, build `main-1.7.2.1.42203`:

- The `Trade Deck` prefab's `TaxManager` takes `taxedAmount` 1 coin every `taxingTime` 7200 seconds of the game's `Timeline`: two hours at the host's default `TimeSpeedMultiplier` of 1, shorter when time runs faster. The tax dock's coins decide how long a stall stays open.
- The `Mail Deposit Box` (`PostboxSender`) has 3 sending docks and costs `sendingCostPerDock` 5 coins per filled dock.
- The `Coin Press` turns 1 input (`requiredInput`) into 5 `Coin` items (`output`, `outputItem`).

## ATMMachine

`ATMMachine : NetworkEntityBehaviour`, top level. A bank teller for one player at a time.

| Member | What it does |
| --- | --- |
| `async void ChangePlayer(IPlayer player)` | Server. Saves the current player's balance, empties the docks, then loads the new player's balance from `CentralGoldCoinBank` into the teller. Null closes it. |
| `void Close()` | `ChangePlayer(null)`. |
| `int QuantityInTeller { get; }` | Coins in the base and withdraw docks. |
| `void MoveToFromWithdraw(int movement)` | Server. Moves coins between the stored and withdraw docks. |
| `void UpdateWhileActive(int value)` | Sets the teller to a new total. |

Only the owner can interact or deposit. Saving a balance (the private `async void TrySave`) also raises the game's console event `ConsoleEvents.AtmBalanceChanged` on the server.

## Console commands

The server build has a `trade` module (`TradeCommandModule`):

| Command | What it does |
| --- | --- |
| `trade atm get <user>`, `set <user> <amount>`, `add <user> <amount>` | Reads or changes a player's bank balance, online or not. `add` never goes below 0. Saves at once if the player is offline. |
| `trade empty` | Wipes every trade deck: each owner's coins and stock go to their postbox, and each deck is replaced with a fresh one. |
| `trade post <user> <prefab>`, `trade post-string ...` | Spawns an item and puts it in a player's postbox. |

## Wipes

`TradeVendor.WipeOperation` (from `IOperateOnWipe`) hands the owner's tax, payments and stock to `PostboxManager.TradeWipe`. When `ServerWipeManager.WipeOperationsFinished` fires, `PostboxManager.ConcludeWipe` pushes all of it into the owners' postboxes. So a server wipe keeps players' stall money and stock.

## Postboxes

| Type | What it is |
| --- | --- |
| `Postbox` | Shows each player whether their `PlayerPostboxStorage` has anything, and gives items out when its handle lever is turned (server). |
| `PostboxSender` | Sends items from its sending docks to another player's postbox, for a coin cost. The client picks a friend (`friendSelector`) and asks the server to `Send`; the server only checks that the request comes from the player using the sender. |
| `PostBoxSenderManager` | Tracks how many items one player may still send another (`GetAvailableQuantity(from, to)`). |
| `PlayerPostboxStorage` | The per-player file, above. |

The friend picker uses Alta's friends service, which is gone. TavernEssentials patches `PostboxSender` (`Send(int, int)`, `SetupForPlayer(IPlayer)`, the private `friendSelector`, `sendingDocks` and `isSending` fields) to make sending work without it.

## Hooking it

- Give a player an item while they're offline: `PostboxManager.PostToPlayer(int playerIdentifier, NetworkPrefab prefab)` (static, `async void`, server) saves the spawned entity, destroys it, pushes it into the player's postbox and saves the file if they aren't online. For more control, `await PostboxManager.Instance.GetContentAsync(userId)` and `Push` yourself. Start either from the main thread, as the game's own callers do.
- Give coins straight to the bank: change `PlayerGoldBankAccount.Content.Quantity` from `CentralGoldCoinBank.Instance.GetContentAsync(userId)` and call `SaveIfNoPlayer()`, as `trade atm add` does.
- Watch sales: `TradingLogger.RecordSale` is static and called once per sale with the prefab, amounts and both user ids.
- Balance changes: postfix `ATMMachine`'s private `LogBalanceChangeWithConsoleEvents(UserInfo, int, int)`, which gets the old and new balance.

## See also

- [Docks](../items/docks.md), for the docks coins sit in
- [Other systems](other-systems.md), for `GameTaskManager`
