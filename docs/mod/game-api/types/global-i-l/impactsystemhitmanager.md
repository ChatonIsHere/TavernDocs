---
title: "ImpactSystemHitManager"
description: "Debug tool (console module impacts, needs debug_features) meant to send every server-side tool hit to subscribed clients as damage popups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactSystemHitManager

A **class** in `Root.Township`, the global namespace.

Debug tool (console module `impacts`, needs `debug_features`) meant to send every server-side tool hit to subscribed clients as damage popups.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Attributes** `WithPermissionOnly`, `Module`
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts), [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactSystemHitManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/impactsystemhitmanager">{"ImpactSystemHitManager"}</Link>{" instance"}</code> | <span className="api-desc">Backing field for `Instance`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-subscribedplayers" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> subscribedPlayers"}</code> | <span className="api-desc">Server: players who asked for hit updates.</span> |
| <Link id="m-subscribemessage" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> subscribeMessage"}</code> | <span className="api-desc">Method sync for subscribe requests from clients.</span> |
| <Link id="m-synchit" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-s/serializedimpacthit">{"SerializedImpactHit"}</Link>{"> syncHit"}</code> | <span className="api-desc">Method sync that sends hits to players.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/mod/game-api/types/global-i-l/impactsystemhitmanager">{"ImpactSystemHitManager"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The scene's instance, set in `Awake`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the method syncs and, on the server, hooks player removal.</span> |
| <Link id="m-subscribetoserverhits" /><code>{"static void SubscribeToServerHits(bool isSubscribing)"}</code> | <span className="api-desc">Console command `impacts sync`: asks the server to start or stop sending this player its hits.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the static instance.</span> |
| <Link id="m-changesubscriptionstate" /><code>{"private void ChangeSubscriptionState(bool isSubscribing)"}</code> | <span className="api-desc">Hooks or unhooks `ImpactTool.OnHitAny` on the server.</span> |
| <Link id="m-handleimpacthit" /><code>{"private void HandleImpactHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | <span className="api-desc">Server: sends a hit to every subscribed player, dropping any that fail.</span> |
| <Link id="m-handleplayerleft" /><code>{"private void HandlePlayerLeft("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: removes a leaving player from the subscribers.</span> |
| <Link id="m-handleplayersubscribe" /><code>{"private void HandlePlayerSubscribe("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool state)"}</code> | <span className="api-desc">Server: adds or removes a subscriber. It only adds a player who is already in the list, so subscribing probably never works.</span> |
| <Link id="m-handleplayersubscribe-2" /><code>{"private void HandlePlayerSubscribe("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, bool state)"}</code> | <span className="api-desc">Server: adds or removes a subscriber. It only adds a player who is already in the list, so subscribing probably never works.</span> |
| <Link id="m-handlereceivedimpacthit" /><code>{"private void HandleReceivedImpactHit("}<Link to="/mod/game-api/types/global-s/serializedimpacthit">{"SerializedImpactHit"}</Link>{" hit)"}</code> | <span className="api-desc">Client: shows a red damage popup at the hit position.</span> |
| <Link id="m-syncimpacthit" /><code>{"private void SyncImpactHit("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-s/serializedimpacthit">{"SerializedImpactHit"}</Link>{" hit)"}</code> | <span className="api-desc">Sends a serialized hit. Client: shows it when received.</span> |

</details>
