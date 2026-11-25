---
title: "PostboxSender"
description: "Sends items from its sending docks to another player's postbox, for a coin cost."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PostboxSender

A **class** in `Root.Township`, no namespace.

Sends items from its sending docks to another player's postbox, for a coin cost.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`EffectType`](/game-api/types/global-p/postboxsender-effecttype)
- **Documented in** [Trading](/game-api/game-systems/trading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PostboxSender()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-coininserteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" coinInsertEffect"}</code> |  |
| <Link id="m-costdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" costDock"}</code> |  |
| <Link id="m-currentplayeridentifier" /><code>{"private int currentPlayerIdentifier"}</code> |  |
| <Link id="m-friendselector" /><code>{"private "}<Link to="/game-api/types/global-e-h/friendselector">{"FriendSelector"}</Link>{" friendSelector"}</code> |  |
| <Link id="m-giftprefabdistribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" giftPrefabDistribution"}</code> |  |
| <Link id="m-gotplayer" /><code>{"private "}<Link to="/game-api/types/global-p/playerunityevent">{"PlayerUnityEvent"}</Link>{" gotPlayer"}</code> |  |
| <Link id="m-handle" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handle"}</code> |  |
| <Link id="m-isopen" /><code>{"private bool isOpen"}</code> |  |
| <Link id="m-issending" /><code>{"private bool isSending"}</code> |  |
| <Link id="m-lostplayer" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" lostPlayer"}</code> |  |
| <Link id="m-rejecteffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" rejectEffect"}</code> |  |
| <Link id="m-rejectposition" /><code>{"private Transform rejectPosition"}</code> |  |
| <Link id="m-restrictions" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{"[] restrictions"}</code> |  |
| <Link id="m-sendeffect" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" sendEffect"}</code> |  |
| <Link id="m-sendeffectposition" /><code>{"private Transform sendEffectPosition"}</code> |  |
| <Link id="m-sendingcostperdock" /><code>{"private int sendingCostPerDock"}</code> |  |
| <Link id="m-sendingdocks" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"[] sendingDocks"}</code> |  |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncEffect"}</code> |  |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> |  |
| <Link id="m-syncsend" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncSend"}</code> |  |
| <Link id="m-updatedopenstate" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" updatedOpenState"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checksend" /><code>{"void CheckSend()"}</code> |  |
| <Link id="m-closeforplayer" /><code>{"void CloseForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |  |
| <Link id="m-filtercoins" /><code>{"private void FilterCoins("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |  |
| <Link id="m-filterhandleinteraction" /><code>{"private void FilterHandleInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-filterinteractions" /><code>{"private void FilterInteractions("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-playeffect" /><code>{"private void PlayEffect("}<Link to="/game-api/types/global-p/postboxsender-effecttype">{"PostboxSender.EffectType"}</Link>{" effectType)"}</code> |  |
| <Link id="m-send" /><code>{"private async void Send(int from, int to)"}</code> |  |
| <Link id="m-setupforplayer" /><code>{"private void SetupForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int effectIndex)"}</code> |  |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncsend-2" /><code>{"private void SyncSend("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int toIdentifier)"}</code> |  |
| <Link id="m-updateownership" /><code>{"private void UpdateOwnership("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-updatestate" /><code>{"private void UpdateState()"}</code> |  |
