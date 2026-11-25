---
title: "TradeVendor"
description: "Subscribes to ServerHandler.PlayerJoined and never unsubscribes. A destroyed vendor throws when its owner joins, which stops the handlers after it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeVendor

A **class** in `Root.Township`, `Alta.Trading`.

Subscribes to `ServerHandler.PlayerJoined` and never unsubscribes. A destroyed vendor throws when its owner joins, which stops the handlers after it.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavableFull<TradeVendorSaveData>`](/game-api/types/alta-world/isavablefull-t), [`ISavable<TradeVendorSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TradeVendorSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`ISavableFull`](/game-api/types/alta-world/isavablefull-t), [`IOperateOnWipe`](/game-api/types/global-i-l/ioperateonwipe)
- **Derived types** [`TradeVendorSaveData`](/game-api/types/alta-crafting/tradevendorsavedata)
- **Nested types** [`StatusChangedHandler`](/game-api/types/alta-crafting/tradevendor-statuschangedhandler)
- **Documented in** [Trading](/game-api/game-systems/trading#tradevendor-and-taxmanager), [Performance](/game-api/performance)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TradeVendor()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-buycoindisplaydock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" buyCoinDisplayDock"}</code> |  |
| <Link id="m-buyitemdisplaydock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" buyItemDisplayDock"}</code> |  |
| <Link id="m-coincounter" /><code>{"private "}<Link to="/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" coinCounter"}</code> |  |
| <Link id="m-coinspawnpoint" /><code>{"private Transform coinSpawnPoint"}</code> |  |
| <Link id="m-isejecting" /><code>{"private bool isEjecting"}</code> |  |
| <Link id="m-isprocessingsale" /><code>{"private bool isProcessingSale"}</code> |  |
| <Link id="m-itemcounter" /><code>{"private "}<Link to="/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" itemCounter"}</code> |  |
| <Link id="m-itemspawnpoint" /><code>{"private Transform itemSpawnPoint"}</code> |  |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever"}</code> |  |
| <Link id="m-leverpickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" leverPickup"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-ownerplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" ownerPlayer"}</code> |  |
| <Link id="m-payments" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" payments"}</code> |  |
| <Link id="m-sellcoindock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" sellCoinDock"}</code> |  |
| <Link id="m-sellitemdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" sellItemDock"}</code> |  |
| <Link id="m-stockdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" stockDock"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-taxdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" taxDock"}</code> |  |
| <Link id="m-taxmanager" /><code>{"private "}<Link to="/game-api/types/alta-crafting/taxmanager">{"TaxManager"}</Link>{" taxManager"}</code> |  |
| <Link id="m-temporarycoindock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" temporaryCoinDock"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hasstock" /><code>{"bool HasStock { get; }"}</code> |  |
| <Link id="m-owner" /><code>{"int Owner { get; private set; }"}</code> |  |
| <Link id="m-taxdock-2" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" TaxDock { get; }"}</code> |  |
| <Link id="m-tradestate" /><code><Link to="/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" TradeState { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-statuschanged" /><code>{"event "}<Link to="/game-api/types/alta-crafting/tradevendor-statuschangedhandler">{"TradeVendor.StatusChangedHandler"}</Link>{" StatusChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-crafting/tradevendorsavedata">{"TradeVendorSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-loadsetup" /><code>{"void LoadSetup()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-crafting/tradevendorsavedata">{"TradeVendorSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-wipeoperation" /><code>{"void WipeOperation()"}</code> |  |
| <Link id="m-coinsejected" /><code>{"private void CoinsEjected()"}</code> |  |
| <Link id="m-deactivatevendor" /><code>{"private async void DeactivateVendor(bool isSendingToPostBox)"}</code> |  |
| <Link id="m-disablecolliders" /><code>{"private void DisableColliders("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-emptydock" /><code>{"private bool EmptyDock("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, out List<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> pouches)"}</code> |  |
| <Link id="m-failinteractiontobuyitemdisplaydock" /><code>{"private void FailInteractionToBuyItemDisplayDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-failinteractiontosellitemdock" /><code>{"private void FailInteractionToSellItemDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-filtertaxdocking" /><code>{"private void FilterTaxDocking("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |  |
| <Link id="m-filterwrongownerdock" /><code>{"private void FilterWrongOwnerDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |  |
| <Link id="m-filterwrongownerinteraction" /><code>{"private void FilterWrongOwnerInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-fixeddocktoitemdisplaydock" /><code>{"private void FixedDockToItemDisplayDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" interactable, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-fixeddocktosellitemdock" /><code>{"private void FixedDockToSellItemDock("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" interactable, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-fixvalidate" /><code>{"private void FixValidate()"}</code> |  |
| <Link id="m-forceamountonbothdocks" /><code>{"private void ForceAmountOnBothDocks(int amount)"}</code> |  |
| <Link id="m-initializedisplaydock" /><code>{"private void InitializeDisplayDock("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" displayDock)"}</code> |  |
| <Link id="m-markchunk" /><code>{"private void MarkChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-moneyenteredbuyer" /><code>{"private void MoneyEnteredBuyer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-moneyenteredseller" /><code>{"private void MoneyEnteredSeller("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ownerleft" /><code>{"private void OwnerLeft("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-playerjoined" /><code>{"private void PlayerJoined("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-resetammounts" /><code>{"private void ResetAmmounts()"}</code> |  |
| <Link id="m-returntobuydock" /><code>{"private void ReturnToBuyDock("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-returntoselldock" /><code>{"private void ReturnToSellDock("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-sendtopostbox" /><code>{"private void SendToPostBox("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{" ownerStorage)"}</code> |  |
| <Link id="m-setownerplayer" /><code>{"private void SetOwnerPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-statuschangedisnull" /><code>{"private bool StatusChangedIsNull()"}</code> |  |
| <Link id="m-stockadded" /><code>{"private void StockAdded("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-stockremoved" /><code>{"private void StockRemoved("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-taxfailed" /><code>{"private void TaxFailed()"}</code> |  |
| <Link id="m-undocktolocation" /><code>{"private void UndockToLocation("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, Transform location)"}</code> |  |
| <Link id="m-updatestatus" /><code>{"private void UpdateStatus("}<Link to="/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" counter)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TradeVendor`:

[`TaxManager.tradeVendor`](/game-api/types/alta-crafting/taxmanager#m-tradevendor), [`TradeConfiguration.vendor`](/game-api/types/alta-crafting/tradeconfiguration#m-vendor), [`TradeStateManager.vendor`](/game-api/types/alta-crafting/tradestatemanager#m-vendor).
