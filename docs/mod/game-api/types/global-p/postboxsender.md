---
title: "PostboxSender"
description: "The machine for mailing items to a friend."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PostboxSender

A **class** in `Root.Township`, the global namespace.

The machine for mailing items to a friend. The player pays coins into `costDock`, docks items in `sendingDocks`, picks a friend and pulls the handle; the server packs the items into a gift and pushes it into the friend's postbox.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`EffectType`](/mod/game-api/types/global-p/postboxsender-effecttype)
- **Documented in** [Trading](/mod/game-api/game-systems/trading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PostboxSender()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coininserteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" coinInsertEffect"}</code> | <span className="api-desc">Effect played at the coin dock when coins go in.</span> |
| <Link id="m-costdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" costDock"}</code> | <span className="api-desc">The dock that holds the coins paid for sending.</span> |
| <Link id="m-currentplayeridentifier" /><code>{"private int currentPlayerIdentifier"}</code> | <span className="api-desc">Identifier of the player using the machine, or 0 when free.</span> |
| <Link id="m-friendselector" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/friendselector">{"FriendSelector"}</Link>{" friendSelector"}</code> | <span className="api-desc">Picks the friend the items go to.</span> |
| <Link id="m-giftprefabdistribution" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" giftPrefabDistribution"}</code> | <span className="api-desc">Random choice of gift prefab that wraps the sent items.</span> |
| <Link id="m-gotplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunityevent">{"PlayerUnityEvent"}</Link>{" gotPlayer"}</code> | <span className="api-desc">Event fired when a player takes ownership of the machine.</span> |
| <Link id="m-handle" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handle"}</code> | <span className="api-desc">The handle the player pulls to send.</span> |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> | <span className="api-desc">True while enough coins are paid for at least one dock.</span> |
| <Link id="m-issending" /><code>{"private bool isSending"}</code> | <span className="api-desc">True while a send is in progress, so only one runs at a time.</span> |
| <Link id="m-lostplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" lostPlayer"}</code> | <span className="api-desc">Event fired when the owner releases the machine.</span> |
| <Link id="m-rejecteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" rejectEffect"}</code> | <span className="api-desc">Effect played where rejected items are thrown out.</span> |
| <Link id="m-rejectposition" /><code>{"private Transform rejectPosition"}</code> | <span className="api-desc">Where rejected coins and items are undocked to.</span> |
| <Link id="m-restrictions" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"[] restrictions"}</code> | <span className="api-desc">Interactables only the current owner may use.</span> |
| <Link id="m-sendeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" sendEffect"}</code> | <span className="api-desc">Effect played when a gift is sent.</span> |
| <Link id="m-sendeffectposition" /><code>{"private Transform sendEffectPosition"}</code> | <span className="api-desc">Where the send effect plays.</span> |
| <Link id="m-sendingcostperdock" /><code>{"private int sendingCostPerDock"}</code> | <span className="api-desc">Coins needed for each filled sending dock.</span> |
| <Link id="m-sendingdocks" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] sendingDocks"}</code> | <span className="api-desc">The docks for items to send. Dock N needs N times `sendingCostPerDock` coins paid.</span> |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncEffect"}</code> | <span className="api-desc">Message that tells clients which effect to play.</span> |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> | <span className="api-desc">Message that syncs the current owner.</span> |
| <Link id="m-syncsend" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncSend"}</code> | <span className="api-desc">Message a client sends to ask the server to send to a friend.</span> |
| <Link id="m-updatedopenstate" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" updatedOpenState"}</code> | <span className="api-desc">Event fired with the new open state when it changes.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checksend" /><code>{"void CheckSend()"}</code> | <span className="api-desc">Sends to the friend picked in `friendSelector`, if the local player owns the machine. Runs directly on the server, otherwise asks the server.</span> |
| <Link id="m-closeforplayer" /><code>{"void CloseForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Releases the machine if this player owns it: clears the docks and syncs the change.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the send, owner and effect sync messages.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: clears the docks on the next frame and hooks coin dock changes to ownership and state updates.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the interaction filters on the restricted interactables, the handle, the sending docks and the coin dock.</span> |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> | <span className="api-desc">Server: throws everything in the coin dock and sending docks out at `rejectPosition`.</span> |
| <Link id="m-filtercoins" /><code>{"private void FilterCoins("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Dock filter: only accepts coins from a known player, and only from the current owner once there is one.</span> |
| <Link id="m-filterhandleinteraction" /><code>{"private void FilterHandleInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Interaction filter: blocks the handle until at least one dock's worth of coins is paid.</span> |
| <Link id="m-filterinteractions" /><code>{"private void FilterInteractions("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Interaction filter for `restrictions`: only the current owner may use them.</span> |
| <Link id="m-playeffect" /><code>{"private void PlayEffect("}<Link to="/mod/game-api/types/global-p/postboxsender-effecttype">{"PostboxSender.EffectType"}</Link>{" effectType)"}</code> | <span className="api-desc">Plays the coin, reject or send effect locally (not on headless) and, on the server, tells nearby clients to play it too.</span> |
| <Link id="m-send" /><code>{"private async void Send(int from, int to)"}</code> | <span className="api-desc">Server: packs the docked items (limited by what the sender may still send to that friend) into a random gift prefab, takes the coins and pushes the gift into the receiver's postbox.</span> |
| <Link id="m-setupforplayer" /><code>{"private void SetupForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Server: makes this player the owner, fires `gotPlayer` and syncs the owner.</span> |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int effectIndex)"}</code> | <span className="api-desc">Serializes an effect index; remote clients play that effect.</span> |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Serializes the current owner's player identifier.</span> |
| <Link id="m-syncsend-2" /><code>{"private void SyncSend("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int toIdentifier)"}</code> | <span className="api-desc">Serializes a send request; the server runs `Send` if the requester is the owner.</span> |
| <Link id="m-updateownership" /><code>{"private void UpdateOwnership("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Server: when a coin is docked with no owner yet, makes the coin's player the owner, then plays the coin effect.</span> |
| <Link id="m-updatestate" /><code>{"private void UpdateState()"}</code> | <span className="api-desc">Server: opens or closes the machine as the coin count crosses one dock's cost, and rejects items from docks that aren't paid for.</span> |

</details>
