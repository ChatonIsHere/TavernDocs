---
title: "ATMMachine"
description: "A bank teller machine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ATMMachine

A **class** in `Root.Township`, no namespace.

A bank teller machine. The server loads the owning player's bank coins into its docks; while it's open the bank balance is the coins in the teller, and it saves back when the owner changes or it closes.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Trading](/game-api/game-systems/trading#atmmachine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ATMMachine()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basedock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" baseDock"}</code> | The teller dock holding the owner's coins. |
| <Link id="m-depositdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" depositDock"}</code> | Slot where the owner drops coins to deposit. |
| <Link id="m-inversethrottleinteraction" /><code>{"private bool inverseThrottleInteraction"}</code> | If true (default), throttle movement is reversed. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-owner" /><code>{"private int owner"}</code> | User ID of the owner; 0 for none. |
| <Link id="m-syncowner" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOwner"}</code> | Method sync for the owner. |
| <Link id="m-throttleinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" throttleInteractable"}</code> | Lever that moves coins in and out of the withdraw slot. |
| <Link id="m-withdrawdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" withdrawDock"}</code> | Slot coins are taken out from. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-quantityinteller" /><code>{"int QuantityInTeller { get; }"}</code> | Coins in the teller plus the withdraw slot; this is the owner's balance while open. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-changeplayer" /><code>{"async void ChangePlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: saves the previous owner's balance, clears the docks, then loads the new player's coins (or no owner for null). |
| <Link id="m-close" /><code>{"void Close()"}</code> | Saves and clears the machine with no owner. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks the owner and deposit filters and creates the owner sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks deposits. |
| <Link id="m-movetofromwithdraw" /><code>{"void MoveToFromWithdraw(int movement)"}</code> | Server: moves coins between the teller and the withdraw slot by an amount, sign flipped if `inverseThrottleInteraction`. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the owner to the chunk. |
| <Link id="m-updatewhileactive" /><code>{"void UpdateWhileActive(int value)"}</code> | Called when the bank balance is set while open: adds or removes coins so the teller matches. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addquantitytodock" /><code>{"private void AddQuantityToDock(int quantity, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" toDock)"}</code> | Adds coins to a dock, spawning a coin stack if the dock is empty. |
| <Link id="m-deposittaken" /><code>{"private void DepositTaken("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Server: moves coins docked in the deposit slot into the teller next frame. Pouches are ignored. |
| <Link id="m-filterdeposit" /><code>{"private void FilterDeposit("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Only accepts coins last held by the owner. |
| <Link id="m-filterowner" /><code>{"private void FilterOwner("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Only lets the owner use the withdraw slot and the throttle. |
| <Link id="m-loadplayerbankcontent" /><code>{"private async Task LoadPlayerBankContent()"}</code> | Spawns the owner's bank balance as coins in the teller and links the account to this machine. |
| <Link id="m-logbalancechangewithconsoleevents" /><code>{"private void LogBalanceChangeWithConsoleEvents("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo, int previousBalance, int newBalance)"}</code> | Server: raises the `AtmBalanceChanged` console event with the change and new balance. |
| <Link id="m-movequantitybetweendocks" /><code>{"private void MoveQuantityBetweenDocks(int movement, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" fromDock, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" toDock)"}</code> | Moves up to a number of coins from one dock to another. |
| <Link id="m-ownerisnull" /><code>{"private bool OwnerIsNull()"}</code> | True when nobody owns the machine. |
| <Link id="m-removequantityfromatm" /><code>{"private void RemoveQuantityFromATM(int quantity)"}</code> | Removes coins from the teller, then the withdraw slot. When it needs the withdraw slot it passes a negative count, so that part doesn't work. |
| <Link id="m-resetdocks" /><code>{"private void ResetDocks()"}</code> | Destroys all coins in the teller and withdraw slot. |
| <Link id="m-spawnandsetcoinsindock" /><code>{"private void SpawnAndSetCoinsInDock(int quantity, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" toDock)"}</code> | Spawns a coin stack of a size in a dock. |
| <Link id="m-syncowner-2" /><code>{"private void SyncOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the owner's player ID to clients. |
| <Link id="m-trysave" /><code>{"private async void TrySave()"}</code> | Writes the teller amount back to the owner's bank account, logs the change and unlinks the machine. |

</details>

## Used in

Members of other types that take, return or hold a `ATMMachine`:

[`PlayerGoldBankAccountData.CurrentAtm`](/game-api/types/global-p/playergoldbankaccountdata#m-currentatm).
