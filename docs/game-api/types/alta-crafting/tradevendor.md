---
title: "TradeVendor"
description: "A player trading deck."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeVendor

A **class** in `Root.Township`, `Alta.Trading`.

A player trading deck. The first player to put coins in the tax dock claims it, stocks items and sets a price, and buyers pay coins to take stock. The server runs the trades.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<TradeVendorSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<TradeVendorSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TradeVendorSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t), [`IOperateOnWipe`](/game-api/types/global-i-l/ioperateonwipe)
- **Derived types** [`TradeVendorSaveData`](/game-api/types/alta-crafting/tradevendorsavedata)
- **Nested types** [`StatusChangedHandler`](/game-api/types/alta-crafting/tradevendor-statuschangedhandler)
- **Documented in** [Trading](/game-api/game-systems/trading#tradevendor-and-taxmanager), [Performance](/game-api/performance)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TradeVendor()"}</code> |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buycoindisplaydock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" buyCoinDisplayDock"}</code> | Buyer side display dock that gets one coin at start, probably to show the price. |
| <Link id="m-buyitemdisplaydock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" buyItemDisplayDock"}</code> | Buyer side dock showing a copy of the item for sale. |
| <Link id="m-coincounter" /><code>{"private "}<Link to="/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" coinCounter"}</code> | Counter for the price in coins. |
| <Link id="m-coinspawnpoint" /><code>{"private Transform coinSpawnPoint"}</code> | Where ejected coins and items are dropped. |
| <Link id="m-isejecting" /><code>{"private bool isEjecting"}</code> | Private: true while the vendor is being emptied, so a tax failure does not start a second empty. |
| <Link id="m-isprocessingsale" /><code>{"private bool isProcessingSale"}</code> | Private: true while a sale is being handled, to ignore more coins. |
| <Link id="m-itemcounter" /><code>{"private "}<Link to="/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" itemCounter"}</code> | Counter for how many items a lot holds. |
| <Link id="m-itemspawnpoint" /><code>{"private Transform itemSpawnPoint"}</code> | Where bought items are dropped. |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever"}</code> | Lever the owner pulls to empty and free the vendor. |
| <Link id="m-leverpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" leverPickup"}</code> | Pickup of the lever, used to check the owner is the one pulling it. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Private: logger for trade errors. |
| <Link id="m-ownerplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" ownerPlayer"}</code> | Private: the owner while they are online. |
| <Link id="m-payments" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" payments"}</code> | Dock where coins from sales collect for the owner. |
| <Link id="m-sellcoindock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" sellCoinDock"}</code> | Seller side display dock that gets one coin at start, probably to show the price. |
| <Link id="m-sellitemdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" sellItemDock"}</code> | Seller side dock showing a copy of the stocked item. |
| <Link id="m-stockdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" stockDock"}</code> | Dock the owner fills with stock to sell. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Private: owner sync message. |
| <Link id="m-taxdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" taxDock"}</code> | Backing field for `TaxDock`. |
| <Link id="m-taxmanager" /><code>{"private "}<Link to="/game-api/types/alta-crafting/taxmanager">{"TaxManager"}</Link>{" taxManager"}</code> | Handles the tax timer and its coin cost. |
| <Link id="m-temporarycoindock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" temporaryCoinDock"}</code> | Dock buyers put coins into to buy. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasstock" /><code>{"bool HasStock { get; }"}</code> | Whether the stock dock holds at least one lot of the set item amount. |
| <Link id="m-owner" /><code>{"int Owner { get; private set; }"}</code> | The user ID of the deck's owner. 0 when unclaimed. |
| <Link id="m-taxdock-2" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" TaxDock { get; }"}</code> | The dock the owner pays tax coins into. |
| <Link id="m-tradestate" /><code><Link to="/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" TradeState { get; private set; }"}</code> | Unoccupied, out of stock, or open for sale. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-statuschanged" /><code>{"event "}<Link to="/game-api/types/alta-crafting/tradevendor-statuschangedhandler">{"TradeVendor.StatusChangedHandler"}</Link>{" StatusChanged"}</code> | Raised when `TradeState` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Limits the stock and payment docks to the owner and sets up owner sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks up docks, counters, tax and lever. A deck whose display doesn't match its stock posts its contents to the owner and is replaced. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-crafting/tradevendorsavedata">{"TradeVendorSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Restores the owner's user ID. |
| <Link id="m-loadsetup" /><code>{"void LoadSetup()"}</code> | Works out the trade status after loading. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the owner to a player who has just spawned the deck. |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-crafting/tradevendorsavedata">{"TradeVendorSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Saves the owner's user ID. |
| <Link id="m-wipeoperation" /><code>{"void WipeOperation()"}</code> | Server: on a wipe, sends the owner's stock and coins to their postbox. |

<details>
<summary>32 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coinsejected" /><code>{"private void CoinsEjected()"}</code> | Private: when the owner pulls the lever, empties the vendor out in front of it and frees it. |
| <Link id="m-deactivatevendor" /><code>{"private async void DeactivateVendor(bool isSendingToPostBox)"}</code> | Private: empties stock, payments and tax to the owner's postbox or out of the vendor, cancels tax and clears the owner. |
| <Link id="m-disablecolliders" /><code>{"private void DisableColliders("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Private: turns off colliders on items in the buyer's display dock. |
| <Link id="m-emptydock" /><code>{"private bool EmptyDock("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, out List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pouches)"}</code> | Private: undocks everything in a dock as pouches. |
| <Link id="m-failinteractiontobuyitemdisplaydock" /><code>{"private void FailInteractionToBuyItemDisplayDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Private: puts a display copy back in the buyer display dock when someone tries to grab it. |
| <Link id="m-failinteractiontosellitemdock" /><code>{"private void FailInteractionToSellItemDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Private: puts a display copy back in the seller item dock when someone tries to grab it. |
| <Link id="m-filtertaxdocking" /><code>{"private void FilterTaxDocking("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Private: while owned, only the owner can dock coins into the tax dock. |
| <Link id="m-filterwrongownerdock" /><code>{"private void FilterWrongOwnerDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Private: only the owner can put items in the stock dock. |
| <Link id="m-filterwrongownerinteraction" /><code>{"private void FilterWrongOwnerInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Private: only the owner can take from the stock and payment docks. |
| <Link id="m-fixeddocktoitemdisplaydock" /><code>{"private void FixedDockToItemDisplayDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" interactable, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Private: sends a display copy back to the buyer display dock if it ends up in any other dock. |
| <Link id="m-fixeddocktosellitemdock" /><code>{"private void FixedDockToSellItemDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" interactable, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Private: sends a display copy back to the seller item dock if it ends up in any other dock. |
| <Link id="m-fixvalidate" /><code>{"private void FixValidate()"}</code> | Private: on start, ejects leftovers from an unowned vendor and frees a vendor whose tax dock holds something other than coins. |
| <Link id="m-forceamountonbothdocks" /><code>{"private void ForceAmountOnBothDocks(int amount)"}</code> | Private: sets both the coin and item counters to one amount. |
| <Link id="m-initializedisplaydock" /><code>{"private void InitializeDisplayDock("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" displayDock)"}</code> | Private: spawns one coin into a display dock. |
| <Link id="m-markchunk" /><code>{"private void MarkChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Private: marks the chunk as needing pre wipe work, so `WipeOperation` runs. |
| <Link id="m-moneyenteredbuyer" /><code>{"private void MoneyEnteredBuyer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Private: when a buyer pays, works out how many lots they can afford, spawns the items and moves the coins to payments. |
| <Link id="m-moneyenteredseller" /><code>{"private void MoneyEnteredSeller("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Private: the first player to pay tax becomes the owner; enough tax starts the tax timer. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Private: unhooks from the owner player. |
| <Link id="m-ownerleft" /><code>{"private void OwnerLeft("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Private: clears the counters' active player when the owner leaves. The vendor stays owned. |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Private: reconnects the owner to the counters when they rejoin. |
| <Link id="m-resetammounts" /><code>{"private void ResetAmmounts()"}</code> | Private: resets both counters to 1 and updates the status. |
| <Link id="m-returntobuydock" /><code>{"private void ReturnToBuyDock("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Private: docks a display copy back into the buyer display dock after it is grabbed. |
| <Link id="m-returntoselldock" /><code>{"private void ReturnToSellDock("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Private: docks a display copy back into the seller item dock after it is grabbed. |
| <Link id="m-sendtopostbox" /><code>{"private void SendToPostBox("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{" ownerStorage)"}</code> | Private: empties a dock into the owner's postbox storage. |
| <Link id="m-setownerplayer" /><code>{"private void SetOwnerPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Private: sets or clears the owner, resets counters when it changes and syncs the owner to clients. |
| <Link id="m-statuschangedisnull" /><code>{"private bool StatusChangedIsNull()"}</code> | Private: whether nothing listens to `StatusChanged`. |
| <Link id="m-stockadded" /><code>{"private void StockAdded("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Private: on the first stock item, spawns two display copies for the seller and buyer docks and caps the item counter. |
| <Link id="m-stockremoved" /><code>{"private void StockRemoved("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Private: when stock runs out, destroys the display copies and resets the counters. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Private: syncs the owner id. Clients let only the owner touch the stock and payment docks. |
| <Link id="m-taxfailed" /><code>{"private void TaxFailed()"}</code> | Private: frees the vendor and sends its contents to the postbox when tax can't be paid. |
| <Link id="m-undocktolocation" /><code>{"private void UndockToLocation("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, Transform location)"}</code> | Private: empties a dock and drops the pouches at a spawn point. |
| <Link id="m-updatestatus" /><code>{"private void UpdateStatus("}<Link to="/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" counter)"}</code> | Private: sets the trade status to unoccupied, out of stock or open for sale and raises `StatusChanged`. |

</details>

## Used in

Members of other types that take, return or hold a `TradeVendor`:

[`TaxManager.tradeVendor`](/game-api/types/alta-crafting/taxmanager#m-tradevendor), [`TradeConfiguration.vendor`](/game-api/types/alta-crafting/tradeconfiguration#m-vendor), [`TradeStateManager.vendor`](/game-api/types/alta-crafting/tradestatemanager#m-vendor).
