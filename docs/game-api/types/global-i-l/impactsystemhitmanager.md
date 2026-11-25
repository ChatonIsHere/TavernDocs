---
title: "ImpactSystemHitManager"
description: "Debug: sends the server's hits to subscribed clients."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactSystemHitManager

A **class** in `Root.Township`, no namespace.

Debug: sends the server's hits to subscribed clients.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `WithPermissionOnly`, `Module`
- **Documented in** [Impacts and hit detection](/game-api/items/impacts), [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactSystemHitManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/global-i-l/impactsystemhitmanager">{"ImpactSystemHitManager"}</Link>{" instance"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-subscribedplayers" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> subscribedPlayers"}</code> |  |
| <Link id="m-subscribemessage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> subscribeMessage"}</code> |  |
| <Link id="m-synchit" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-s/serializedimpacthit">{"SerializedImpactHit"}</Link>{"> syncHit"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/game-api/types/global-i-l/impactsystemhitmanager">{"ImpactSystemHitManager"}</Link>{" Instance { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-subscribetoserverhits" /><code>{"static void SubscribeToServerHits(bool isSubscribing)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-changesubscriptionstate" /><code>{"private void ChangeSubscriptionState(bool isSubscribing)"}</code> |  |
| <Link id="m-handleimpacthit" /><code>{"private void HandleImpactHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |  |
| <Link id="m-handleplayerleft" /><code>{"private void HandlePlayerLeft("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-handleplayersubscribe" /><code>{"private void HandlePlayerSubscribe("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool state)"}</code> |  |
| <Link id="m-handleplayersubscribe-2" /><code>{"private void HandlePlayerSubscribe("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, bool state)"}</code> |  |
| <Link id="m-handlereceivedimpacthit" /><code>{"private void HandleReceivedImpactHit("}<Link to="/game-api/types/global-s/serializedimpacthit">{"SerializedImpactHit"}</Link>{" hit)"}</code> |  |
| <Link id="m-syncimpacthit" /><code>{"private void SyncImpactHit("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-s/serializedimpacthit">{"SerializedImpactHit"}</Link>{" hit)"}</code> |  |
