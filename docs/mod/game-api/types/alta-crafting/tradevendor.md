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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<TradeVendorSaveData>`](/mod/game-api/types/alta-world/isavablefull-t), [`ISavable<TradeVendorSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<TradeVendorSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/mod/game-api/types/alta-world/isavablefull-t), [`IOperateOnWipe`](/mod/game-api/types/global-i-l/ioperateonwipe)
- **Derived types** [`TradeVendorSaveData`](/mod/game-api/types/alta-crafting/tradevendorsavedata)
- **Nested types** [`StatusChangedHandler`](/mod/game-api/types/alta-crafting/tradevendor-statuschangedhandler)
- **Documented in** [Trading](/mod/game-api/game-systems/trading#tradevendor-and-taxmanager), [Performance](/mod/game-api/performance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TradeVendor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buycoindisplaydock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" buyCoinDisplayDock"}</code> | <span className="api-desc">Buyer side display dock that gets one coin at start, probably to show the price.</span> |
| <Link id="m-buyitemdisplaydock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" buyItemDisplayDock"}</code> | <span className="api-desc">Buyer side dock showing a copy of the item for sale.</span> |
| <Link id="m-coincounter" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" coinCounter"}</code> | <span className="api-desc">Counter for the price in coins.</span> |
| <Link id="m-coinspawnpoint" /><code>{"private Transform coinSpawnPoint"}</code> | <span className="api-desc">Where ejected coins and items are dropped.</span> |
| <Link id="m-isejecting" /><code>{"private bool isEjecting"}</code> | <span className="api-desc">Private: true while the vendor is being emptied, so a tax failure does not start a second empty.</span> |
| <Link id="m-isprocessingsale" /><code>{"private bool isProcessingSale"}</code> | <span className="api-desc">Private: true while a sale is being handled, to ignore more coins.</span> |
| <Link id="m-itemcounter" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" itemCounter"}</code> | <span className="api-desc">Counter for how many items a lot holds.</span> |
| <Link id="m-itemspawnpoint" /><code>{"private Transform itemSpawnPoint"}</code> | <span className="api-desc">Where bought items are dropped.</span> |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever"}</code> | <span className="api-desc">Lever the owner pulls to empty and free the vendor.</span> |
| <Link id="m-leverpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" leverPickup"}</code> | <span className="api-desc">Pickup of the lever, used to check the owner is the one pulling it.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Private: logger for trade errors.</span> |
| <Link id="m-ownerplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" ownerPlayer"}</code> | <span className="api-desc">Private: the owner while they are online.</span> |
| <Link id="m-payments" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" payments"}</code> | <span className="api-desc">Dock where coins from sales collect for the owner.</span> |
| <Link id="m-sellcoindock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" sellCoinDock"}</code> | <span className="api-desc">Seller side display dock that gets one coin at start, probably to show the price.</span> |
| <Link id="m-sellitemdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" sellItemDock"}</code> | <span className="api-desc">Seller side dock showing a copy of the stocked item.</span> |
| <Link id="m-stockdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" stockDock"}</code> | <span className="api-desc">Dock the owner fills with stock to sell.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Private: owner sync message.</span> |
| <Link id="m-taxdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" taxDock"}</code> | <span className="api-desc">Backing field for `TaxDock`.</span> |
| <Link id="m-taxmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/taxmanager">{"TaxManager"}</Link>{" taxManager"}</code> | <span className="api-desc">Handles the tax timer and its coin cost.</span> |
| <Link id="m-temporarycoindock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" temporaryCoinDock"}</code> | <span className="api-desc">Dock buyers put coins into to buy.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasstock" /><code>{"bool HasStock { get; }"}</code> | <span className="api-desc">Whether the stock dock holds at least one lot of the set item amount.</span> |
| <Link id="m-owner" /><code>{"int Owner { get; private set; }"}</code> | <span className="api-desc">The user ID of the deck's owner. 0 when unclaimed.</span> |
| <Link id="m-taxdock-2" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" TaxDock { get; }"}</code> | <span className="api-desc">The dock the owner pays tax coins into.</span> |
| <Link id="m-tradestate" /><code><Link to="/mod/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" TradeState { get; private set; }"}</code> | <span className="api-desc">Unoccupied, out of stock, or open for sale.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-statuschanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-crafting/tradevendor-statuschangedhandler">{"TradeVendor.StatusChangedHandler"}</Link>{" StatusChanged"}</code> | <span className="api-desc">Raised when `TradeState` changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Limits the stock and payment docks to the owner and sets up owner sync.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: hooks up docks, counters, tax and lever. A deck whose display doesn't match its stock posts its contents to the owner and is replaced.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/alta-crafting/tradevendorsavedata">{"TradeVendorSaveData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Restores the owner's user ID.</span> |
| <Link id="m-loadsetup" /><code>{"void LoadSetup()"}</code> | <span className="api-desc">Works out the trade status after loading.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the owner to a player who has just spawned the deck.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/alta-crafting/tradevendorsavedata">{"TradeVendorSaveData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Saves the owner's user ID.</span> |
| <Link id="m-wipeoperation" /><code>{"void WipeOperation()"}</code> | <span className="api-desc">Server: on a wipe, sends the owner's stock and coins to their postbox.</span> |

<details className="api-private">
<summary>32 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coinsejected" /><code>{"private void CoinsEjected()"}</code> | <span className="api-desc">Private: when the owner pulls the lever, empties the vendor out in front of it and frees it.</span> |
| <Link id="m-deactivatevendor" /><code>{"private async void DeactivateVendor(bool isSendingToPostBox)"}</code> | <span className="api-desc">Private: empties stock, payments and tax to the owner's postbox or out of the vendor, cancels tax and clears the owner.</span> |
| <Link id="m-disablecolliders" /><code>{"private void DisableColliders("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Private: turns off colliders on items in the buyer's display dock.</span> |
| <Link id="m-emptydock" /><code>{"private bool EmptyDock("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, out List<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pouches)"}</code> | <span className="api-desc">Private: undocks everything in a dock as pouches.</span> |
| <Link id="m-failinteractiontobuyitemdisplaydock" /><code>{"private void FailInteractionToBuyItemDisplayDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Private: puts a display copy back in the buyer display dock when someone tries to grab it.</span> |
| <Link id="m-failinteractiontosellitemdock" /><code>{"private void FailInteractionToSellItemDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Private: puts a display copy back in the seller item dock when someone tries to grab it.</span> |
| <Link id="m-filtertaxdocking" /><code>{"private void FilterTaxDocking("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Private: while owned, only the owner can dock coins into the tax dock.</span> |
| <Link id="m-filterwrongownerdock" /><code>{"private void FilterWrongOwnerDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Private: only the owner can put items in the stock dock.</span> |
| <Link id="m-filterwrongownerinteraction" /><code>{"private void FilterWrongOwnerInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Private: only the owner can take from the stock and payment docks.</span> |
| <Link id="m-fixeddocktoitemdisplaydock" /><code>{"private void FixedDockToItemDisplayDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" interactable, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Private: sends a display copy back to the buyer display dock if it ends up in any other dock.</span> |
| <Link id="m-fixeddocktosellitemdock" /><code>{"private void FixedDockToSellItemDock("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" interactable, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Private: sends a display copy back to the seller item dock if it ends up in any other dock.</span> |
| <Link id="m-fixvalidate" /><code>{"private void FixValidate()"}</code> | <span className="api-desc">Private: on start, ejects leftovers from an unowned vendor and frees a vendor whose tax dock holds something other than coins.</span> |
| <Link id="m-forceamountonbothdocks" /><code>{"private void ForceAmountOnBothDocks(int amount)"}</code> | <span className="api-desc">Private: sets both the coin and item counters to one amount.</span> |
| <Link id="m-initializedisplaydock" /><code>{"private void InitializeDisplayDock("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" displayDock)"}</code> | <span className="api-desc">Private: spawns one coin into a display dock.</span> |
| <Link id="m-markchunk" /><code>{"private void MarkChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Private: marks the chunk as needing pre wipe work, so `WipeOperation` runs.</span> |
| <Link id="m-moneyenteredbuyer" /><code>{"private void MoneyEnteredBuyer("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Private: when a buyer pays, works out how many lots they can afford, spawns the items and moves the coins to payments.</span> |
| <Link id="m-moneyenteredseller" /><code>{"private void MoneyEnteredSeller("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Private: the first player to pay tax becomes the owner; enough tax starts the tax timer.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Private: unhooks from the owner player.</span> |
| <Link id="m-ownerleft" /><code>{"private void OwnerLeft("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Private: clears the counters' active player when the owner leaves. The vendor stays owned.</span> |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Private: reconnects the owner to the counters when they rejoin.</span> |
| <Link id="m-resetammounts" /><code>{"private void ResetAmmounts()"}</code> | <span className="api-desc">Private: resets both counters to 1 and updates the status.</span> |
| <Link id="m-returntobuydock" /><code>{"private void ReturnToBuyDock("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Private: docks a display copy back into the buyer display dock after it is grabbed.</span> |
| <Link id="m-returntoselldock" /><code>{"private void ReturnToSellDock("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Private: docks a display copy back into the seller item dock after it is grabbed.</span> |
| <Link id="m-sendtopostbox" /><code>{"private void SendToPostBox("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/mod/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{" ownerStorage)"}</code> | <span className="api-desc">Private: empties a dock into the owner's postbox storage.</span> |
| <Link id="m-setownerplayer" /><code>{"private void SetOwnerPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Private: sets or clears the owner, resets counters when it changes and syncs the owner to clients.</span> |
| <Link id="m-statuschangedisnull" /><code>{"private bool StatusChangedIsNull()"}</code> | <span className="api-desc">Private: whether nothing listens to `StatusChanged`.</span> |
| <Link id="m-stockadded" /><code>{"private void StockAdded("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Private: on the first stock item, spawns two display copies for the seller and buyer docks and caps the item counter.</span> |
| <Link id="m-stockremoved" /><code>{"private void StockRemoved("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Private: when stock runs out, destroys the display copies and resets the counters.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private: syncs the owner id. Clients let only the owner touch the stock and payment docks.</span> |
| <Link id="m-taxfailed" /><code>{"private void TaxFailed()"}</code> | <span className="api-desc">Private: frees the vendor and sends its contents to the postbox when tax can't be paid.</span> |
| <Link id="m-undocktolocation" /><code>{"private void UndockToLocation("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, Transform location)"}</code> | <span className="api-desc">Private: empties a dock and drops the pouches at a spawn point.</span> |
| <Link id="m-updatestatus" /><code>{"private void UpdateStatus("}<Link to="/mod/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" counter)"}</code> | <span className="api-desc">Private: sets the trade status to unoccupied, out of stock or open for sale and raises `StatusChanged`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TradeVendor`:

<div className="api-used-in">

[`TaxManager.tradeVendor`](/mod/game-api/types/alta-crafting/taxmanager#m-tradevendor), [`TradeConfiguration.vendor`](/mod/game-api/types/alta-crafting/tradeconfiguration#m-vendor), [`TradeStateManager.vendor`](/mod/game-api/types/alta-crafting/tradestatemanager#m-vendor).

</div>
