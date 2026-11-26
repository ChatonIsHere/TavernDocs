---
title: "PostboxSender"
description: "The machine for mailing items to a friend."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PostboxSender

A **class** in `Root.Township`, no namespace.

The machine for mailing items to a friend. The player pays coins into `costDock`, docks items in `sendingDocks`, picks a friend and pulls the handle; the server packs the items into a gift and pushes it into the friend's postbox.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`EffectType`](/game-api/types/global-p/postboxsender-effecttype)
- **Documented in** [Trading](/game-api/game-systems/trading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PostboxSender()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coininserteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" coinInsertEffect"}</code> | Effect played at the coin dock when coins go in. |
| <Link id="m-costdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" costDock"}</code> | The dock that holds the coins paid for sending. |
| <Link id="m-currentplayeridentifier" /><code>{"private int currentPlayerIdentifier"}</code> | Identifier of the player using the machine, or 0 when free. |
| <Link id="m-friendselector" /><code>{"private "}<Link to="/game-api/types/global-e-h/friendselector">{"FriendSelector"}</Link>{" friendSelector"}</code> | Picks the friend the items go to. |
| <Link id="m-giftprefabdistribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" giftPrefabDistribution"}</code> | Random choice of gift prefab that wraps the sent items. |
| <Link id="m-gotplayer" /><code>{"private "}<Link to="/game-api/types/global-p/playerunityevent">{"PlayerUnityEvent"}</Link>{" gotPlayer"}</code> | Event fired when a player takes ownership of the machine. |
| <Link id="m-handle" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handle"}</code> | The handle the player pulls to send. |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | True while enough coins are paid for at least one dock. |
| <Link id="m-issending" /><code>{"private bool isSending"}</code> | True while a send is in progress, so only one runs at a time. |
| <Link id="m-lostplayer" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" lostPlayer"}</code> | Event fired when the owner releases the machine. |
| <Link id="m-rejecteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" rejectEffect"}</code> | Effect played where rejected items are thrown out. |
| <Link id="m-rejectposition" /><code>{"private Transform rejectPosition"}</code> | Where rejected coins and items are undocked to. |
| <Link id="m-restrictions" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"[] restrictions"}</code> | Interactables only the current owner may use. |
| <Link id="m-sendeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" sendEffect"}</code> | Effect played when a gift is sent. |
| <Link id="m-sendeffectposition" /><code>{"private Transform sendEffectPosition"}</code> | Where the send effect plays. |
| <Link id="m-sendingcostperdock" /><code>{"private int sendingCostPerDock"}</code> | Coins needed for each filled sending dock. |
| <Link id="m-sendingdocks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] sendingDocks"}</code> | The docks for items to send. Dock N needs N times `sendingCostPerDock` coins paid. |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncEffect"}</code> | Message that tells clients which effect to play. |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> | Message that syncs the current owner. |
| <Link id="m-syncsend" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncSend"}</code> | Message a client sends to ask the server to send to a friend. |
| <Link id="m-updatedopenstate" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" updatedOpenState"}</code> | Event fired with the new open state when it changes. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checksend" /><code>{"void CheckSend()"}</code> | Sends to the friend picked in `friendSelector`, if the local player owns the machine. Runs directly on the server, otherwise asks the server. |
| <Link id="m-closeforplayer" /><code>{"void CloseForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Releases the machine if this player owns it: clears the docks and syncs the change. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the send, owner and effect sync messages. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: clears the docks on the next frame and hooks coin dock changes to ownership and state updates. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the interaction filters on the restricted interactables, the handle, the sending docks and the coin dock. |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | Server: throws everything in the coin dock and sending docks out at `rejectPosition`. |
| <Link id="m-filtercoins" /><code>{"private void FilterCoins("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Dock filter: only accepts coins from a known player, and only from the current owner once there is one. |
| <Link id="m-filterhandleinteraction" /><code>{"private void FilterHandleInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Interaction filter: blocks the handle until at least one dock's worth of coins is paid. |
| <Link id="m-filterinteractions" /><code>{"private void FilterInteractions("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Interaction filter for `restrictions`: only the current owner may use them. |
| <Link id="m-playeffect" /><code>{"private void PlayEffect("}<Link to="/game-api/types/global-p/postboxsender-effecttype">{"PostboxSender.EffectType"}</Link>{" effectType)"}</code> | Plays the coin, reject or send effect locally (not on headless) and, on the server, tells nearby clients to play it too. |
| <Link id="m-send" /><code>{"private async void Send(int from, int to)"}</code> | Server: packs the docked items (limited by what the sender may still send to that friend) into a random gift prefab, takes the coins and pushes the gift into the receiver's postbox. |
| <Link id="m-setupforplayer" /><code>{"private void SetupForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Server: makes this player the owner, fires `gotPlayer` and syncs the owner. |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int effectIndex)"}</code> | Serializes an effect index; remote clients play that effect. |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Serializes the current owner's player identifier. |
| <Link id="m-syncsend-2" /><code>{"private void SyncSend("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int toIdentifier)"}</code> | Serializes a send request; the server runs `Send` if the requester is the owner. |
| <Link id="m-updateownership" /><code>{"private void UpdateOwnership("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Server: when a coin is docked with no owner yet, makes the coin's player the owner, then plays the coin effect. |
| <Link id="m-updatestate" /><code>{"private void UpdateState()"}</code> | Server: opens or closes the machine as the coin count crosses one dock's cost, and rejects items from docks that aren't paid for. |

</details>
