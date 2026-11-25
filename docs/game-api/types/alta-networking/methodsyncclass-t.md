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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`Sync<T>`](/game-api/types/alta-networking/sync-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MethodSyncClass("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/game-api/types/alta-networking/serializemethod-t">{"SerializeMethod"}</Link>{"<T> method, "}<Link to="/game-api/types/alta-networking/recreateargumentmode">{"RecreateArgumentMode"}</Link>{" recreateArgumentMode = 0)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-method" /><code>{"private "}<Link to="/game-api/types/alta-networking/serializemethod-t">{"SerializeMethod"}</Link>{"<T> method"}</code> |
| <Link id="m-recreateargumentmode" /><code>{"private "}<Link to="/game-api/types/alta-networking/recreateargumentmode">{"RecreateArgumentMode"}</Link>{" recreateArgumentMode"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"override "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" Handler { get; }"}</code> | The method run when the message is sent or received. It creates `Value` when reading if the mode says to, then calls your method. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-forward" /><code>{"private void Forward("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `MethodSyncClass&lt;T>`:

[`MapManager.syncMapManager`](/game-api/types/alta-world/mapmanager#m-syncmapmanager), [`NetworkRigidbody.syncSecondaryCollision`](/game-api/types/alta-networking/networkrigidbody#m-syncsecondarycollision), [`Book.addPage`](/game-api/types/alta-items/book#m-addpage), [`Book.setDisplay`](/game-api/types/alta-items/book#m-setdisplay), [`Book.turnPage`](/game-api/types/alta-items/book#m-turnpage), [`ServerSettingsSync.syncSettings`](/game-api/types/game-other-namespaces/serversettingssync#m-syncsettings), [`DomainController.syncAddDomainToAddedChunks`](/game-api/types/game-other-namespaces/domaincontroller#m-syncadddomaintoaddedchunks), [`DomainController.syncRemoveDomainFromAddedChunks`](/game-api/types/game-other-namespaces/domaincontroller#m-syncremovedomainfromaddedchunks), [`BreakOnImpact.syncBreaking`](/game-api/types/global-a-b/breakonimpact#m-syncbreaking), [`BreakOnImpact.syncHitting`](/game-api/types/global-a-b/breakonimpact#m-synchitting), [`Embeddable.syncEmbed`](/game-api/types/global-e-h/embeddable#m-syncembed), [`ExtraArrowUpdater.syncExtraArrows`](/game-api/types/global-e-h/extraarrowupdater#m-syncextraarrows), [`ClimbingTowerProgressionVisualizer.syncRuneActivationElements`](/game-api/types/game-other-namespaces/climbingtowerprogressionvisualizer#m-syncruneactivationelements), [`FestivityManager.sync`](/game-api/types/global-e-h/festivitymanager#m-sync), [`LocomotionController.syncMovement`](/game-api/types/global-i-l/locomotioncontroller#m-syncmovement), [`PlayerInteractionManager.syncMarker`](/game-api/types/global-p/playerinteractionmanager#m-syncmarker), [`PlayerProgressionManager.syncSlotPractice`](/game-api/types/global-p/playerprogressionmanager#m-syncslotpractice), [`SkillShrine.syncConnections`](/game-api/types/global-s/skillshrine#m-syncconnections).
