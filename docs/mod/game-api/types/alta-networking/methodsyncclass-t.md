---
title: "MethodSyncClass<T>"
description: "An entity network method whose handler gets a class instance to read into or write from, as well as the stream."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MethodSyncClass&lt;T&gt;

A **class** in `Root.Township`, `Alta.Networking`.

An entity network method whose handler gets a class instance to read into or write from, as well as the stream. It can make a fresh instance when reading.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`Sync<T>`](/mod/game-api/types/alta-networking/sync-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MethodSyncClass("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/mod/game-api/types/alta-networking/serializemethod-t">{"SerializeMethod"}</Link>{"<T> method, "}<Link to="/mod/game-api/types/alta-networking/recreateargumentmode">{"RecreateArgumentMode"}</Link>{" recreateArgumentMode = 0)"}</code> | <span className="api-desc">Creates a `MethodSyncClass` from `entity`, `messageType`, `method` and `recreateArgumentMode`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-method" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/serializemethod-t">{"SerializeMethod"}</Link>{"<T> method"}</code> | <span className="api-desc">The serialize method called with the player, stream and value.</span> |
| <Link id="m-recreateargumentmode" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/recreateargumentmode">{"RecreateArgumentMode"}</Link>{" recreateArgumentMode"}</code> | <span className="api-desc">When reading makes a new `T`: never, always, or only if the value is null (default).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"override "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" Handler { get; }"}</code> | <span className="api-desc">The method run when the message is sent or received. It creates `Value` when reading if the mode says to, then calls your method.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forward" /><code>{"private void Forward("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Handler that makes a new `T` when reading (per the recreate mode) and calls the method with it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MethodSyncClass&lt;T>`:

<div className="api-used-in">

[`MapManager.syncMapManager`](/mod/game-api/types/alta-world/mapmanager#m-syncmapmanager), [`NetworkRigidbody.syncSecondaryCollision`](/mod/game-api/types/alta-networking/networkrigidbody#m-syncsecondarycollision), [`Book.addPage`](/mod/game-api/types/alta-items/book#m-addpage), [`Book.setDisplay`](/mod/game-api/types/alta-items/book#m-setdisplay), [`Book.turnPage`](/mod/game-api/types/alta-items/book#m-turnpage), [`ServerSettingsSync.syncSettings`](/mod/game-api/types/game-other-namespaces/serversettingssync#m-syncsettings), [`DomainController.syncAddDomainToAddedChunks`](/mod/game-api/types/game-other-namespaces/domaincontroller#m-syncadddomaintoaddedchunks), [`DomainController.syncRemoveDomainFromAddedChunks`](/mod/game-api/types/game-other-namespaces/domaincontroller#m-syncremovedomainfromaddedchunks), [`BreakOnImpact.syncBreaking`](/mod/game-api/types/global-a-b/breakonimpact#m-syncbreaking), [`BreakOnImpact.syncHitting`](/mod/game-api/types/global-a-b/breakonimpact#m-synchitting), [`Embeddable.syncEmbed`](/mod/game-api/types/global-e-h/embeddable#m-syncembed), [`ExtraArrowUpdater.syncExtraArrows`](/mod/game-api/types/global-e-h/extraarrowupdater#m-syncextraarrows), [`ClimbingTowerProgressionVisualizer.syncRuneActivationElements`](/mod/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-syncruneactivationelements), [`FestivityManager.sync`](/mod/game-api/types/global-e-h/festivitymanager#m-sync), [`LocomotionController.syncMovement`](/mod/game-api/types/global-i-l/locomotioncontroller#m-syncmovement), [`PlayerInteractionManager.syncMarker`](/mod/game-api/types/global-p/playerinteractionmanager#m-syncmarker), [`PlayerProgressionManager.syncSlotPractice`](/mod/game-api/types/global-p/playerprogressionmanager#m-syncslotpractice), [`SkillShrine.syncConnections`](/mod/game-api/types/global-s/skillshrine#m-syncconnections).

</div>
