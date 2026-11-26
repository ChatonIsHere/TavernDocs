---
title: "ImpactSystemHitManager"
description: "Debug tool (console module impacts, needs debug_features) meant to send every server-side tool hit to subscribed clients as damage popups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactSystemHitManager

A **class** in `Root.Township`, no namespace.

Debug tool (console module `impacts`, needs `debug_features`) meant to send every server-side tool hit to subscribed clients as damage popups.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `WithPermissionOnly`, `Module`
- **Documented in** [Impacts and hit detection](/game-api/items/impacts), [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ImpactSystemHitManager()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static "}<Link to="/game-api/types/global-i-l/impactsystemhitmanager">{"ImpactSystemHitManager"}</Link>{" instance"}</code> | Backing field for `Instance`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-subscribedplayers" /><code>{"private List<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> subscribedPlayers"}</code> | Server: players who asked for hit updates. |
| <Link id="m-subscribemessage" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> subscribeMessage"}</code> | Method sync for subscribe requests from clients. |
| <Link id="m-synchit" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-s/serializedimpacthit">{"SerializedImpactHit"}</Link>{"> syncHit"}</code> | Method sync that sends hits to players. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/game-api/types/global-i-l/impactsystemhitmanager">{"ImpactSystemHitManager"}</Link>{" Instance { get; }"}</code> | The scene's instance, set in `Awake`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the method syncs and, on the server, hooks player removal. |
| <Link id="m-subscribetoserverhits" /><code>{"static void SubscribeToServerHits(bool isSubscribing)"}</code> | Console command `impacts sync`: asks the server to start or stop sending this player its hits. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets the static instance. |
| <Link id="m-changesubscriptionstate" /><code>{"private void ChangeSubscriptionState(bool isSubscribing)"}</code> | Hooks or unhooks `ImpactTool.OnHitAny` on the server. |
| <Link id="m-handleimpacthit" /><code>{"private void HandleImpactHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Server: sends a hit to every subscribed player, dropping any that fail. |
| <Link id="m-handleplayerleft" /><code>{"private void HandlePlayerLeft("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: removes a leaving player from the subscribers. |
| <Link id="m-handleplayersubscribe" /><code>{"private void HandlePlayerSubscribe("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool state)"}</code> | Server: adds or removes a subscriber. It only adds a player who is already in the list, so subscribing probably never works. |
| <Link id="m-handleplayersubscribe-2" /><code>{"private void HandlePlayerSubscribe("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, bool state)"}</code> | Server: adds or removes a subscriber. It only adds a player who is already in the list, so subscribing probably never works. |
| <Link id="m-handlereceivedimpacthit" /><code>{"private void HandleReceivedImpactHit("}<Link to="/game-api/types/global-s/serializedimpacthit">{"SerializedImpactHit"}</Link>{" hit)"}</code> | Client: shows a red damage popup at the hit position. |
| <Link id="m-syncimpacthit" /><code>{"private void SyncImpactHit("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-s/serializedimpacthit">{"SerializedImpactHit"}</Link>{" hit)"}</code> | Sends a serialized hit. Client: shows it when received. |

</details>
