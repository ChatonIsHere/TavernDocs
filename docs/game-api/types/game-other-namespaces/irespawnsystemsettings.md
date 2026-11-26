---
title: "IRespawnSystemSettings"
description: "Settings for respawn shrines and the respawn system, plus the list of shrine settings by id."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRespawnSystemSettings

An **interface** in `Root.Township`, `ATT.Respawn`.

Settings for respawn shrines and the respawn system, plus the list of shrine settings by id. `RespawnSystemSettings` is the global settings asset that implements it.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `IEnumerable<IRespawnShrineSettings>`, `IEnumerable`
- **Derived types** [`RespawnSystemSettings`](/game-api/types/game-other-namespaces/respawnsystemsettings)
- **Attributes** `DefaultMember`

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeglyphcolor" /><code>{"Color ActiveGlyphColor { get; }"}</code> | Glyph colour on a shrine the local player is subscribed to. |
| <Link id="m-fuelconsumptiontickrateinseconds" /><code>{"float FuelConsumptionTickRateInSeconds { get; }"}</code> | How often the server burns shrine fuel. |
| <Link id="m-inactiveglyphcolor" /><code>{"Color InactiveGlyphColor { get; }"}</code> | Glyph colour on a shrine the local player is not subscribed to. |
| <Link id="m-isupdatingmarksonplayerjoinandleave" /><code>{"bool IsUpdatingMarksOnPlayerJoinAndLeave { get; }"}</code> | Whether subscriber marks around a shrine update when players join or leave. |
| <Link id="m-item" /><code><Link to="/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" this[Guid shrineId] { get; }"}</code> | Settings for the shrine with the given id. Throws if there is none. |
| <Link id="m-localplayersubscribermarkprefab" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LocalPlayerSubscriberMarkPrefab { get; }"}</code> | Mark shown at a shrine for the local player's subscription. |
| <Link id="m-maxbeaconradius" /><code>{"float MaxBeaconRadius { get; }"}</code> | Beacon radius setting. Not read anywhere in this build. |
| <Link id="m-minbeaconradius" /><code>{"float MinBeaconRadius { get; }"}</code> | Beacon radius setting. Not read anywhere in this build. |
| <Link id="m-minbeaconscreenwidth" /><code>{"float MinBeaconScreenWidth { get; }"}</code> | Beacon screen width setting. Not read anywhere in this build. |
| <Link id="m-modelupdatetickrateinseconds" /><code>{"float ModelUpdateTickRateInSeconds { get; }"}</code> | How often the server checks for shrine changes and syncs them to clients. |
| <Link id="m-remoteplayersubscribermarkprefab" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" RemotePlayerSubscriberMarkPrefab { get; }"}</code> | Mark shown at a shrine for other players' subscriptions. |
| <Link id="m-shrinedeactivationsfx" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ShrineDeactivationSfx { get; }"}</code> | Sound when a powered shrine deactivates. |
| <Link id="m-shrinesubscribesfx" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ShrineSubscribeSfx { get; }"}</code> | Sound when subscribing to a shrine. |
| <Link id="m-subscribermarkdistancefromcentre" /><code>{"float SubscriberMarkDistanceFromCentre { get; }"}</code> | How far subscriber marks sit from the shrine's centre. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getshrinesettings" /><code><Link to="/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" GetShrineSettings(Guid shrineId)"}</code> | Settings for the shrine with the given id. Throws if there is none. |

## Used in

Members of other types that take, return or hold a `IRespawnSystemSettings`:

[`IRespawnBeaconView.Init`](/game-api/types/game-other-namespaces/irespawnbeaconview#m-init), [`RespawnBeaconController.SystemSettings`](/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-systemsettings), [`RespawnBeaconView.Init`](/game-api/types/game-other-namespaces/respawnbeaconview#m-init), [`RespawnShrine.SystemSettings`](/game-api/types/game-other-namespaces/respawnshrine#m-systemsettings), [`RespawnShrineFuelDockController.SystemSettings`](/game-api/types/game-other-namespaces/respawnshrinefueldockcontroller#m-systemsettings), [`RespawnShrineSubscriberMarkController.SystemSettings`](/game-api/types/game-other-namespaces/respawnshrinesubscribermarkcontroller#m-systemsettings), [`RespawnSystem.SystemSettings`](/game-api/types/game-other-namespaces/respawnsystem#m-systemsettings).
