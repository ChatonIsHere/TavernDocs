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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `IEnumerable<IRespawnShrineSettings>`, `IEnumerable`
- **Derived types** [`RespawnSystemSettings`](/mod/game-api/types/game-other-namespaces/respawnsystemsettings)
- **Attributes** `DefaultMember`

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeglyphcolor" /><code>{"Color ActiveGlyphColor { get; }"}</code> | <span className="api-desc">Glyph colour on a shrine the local player is subscribed to.</span> |
| <Link id="m-fuelconsumptiontickrateinseconds" /><code>{"float FuelConsumptionTickRateInSeconds { get; }"}</code> | <span className="api-desc">How often the server burns shrine fuel.</span> |
| <Link id="m-inactiveglyphcolor" /><code>{"Color InactiveGlyphColor { get; }"}</code> | <span className="api-desc">Glyph colour on a shrine the local player is not subscribed to.</span> |
| <Link id="m-isupdatingmarksonplayerjoinandleave" /><code>{"bool IsUpdatingMarksOnPlayerJoinAndLeave { get; }"}</code> | <span className="api-desc">Whether subscriber marks around a shrine update when players join or leave.</span> |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" this[Guid shrineId] { get; }"}</code> | <span className="api-desc">Settings for the shrine with the given id. Throws if there is none.</span> |
| <Link id="m-localplayersubscribermarkprefab" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LocalPlayerSubscriberMarkPrefab { get; }"}</code> | <span className="api-desc">Mark shown at a shrine for the local player's subscription.</span> |
| <Link id="m-maxbeaconradius" /><code>{"float MaxBeaconRadius { get; }"}</code> | <span className="api-desc">Beacon radius setting. Not read anywhere in this build.</span> |
| <Link id="m-minbeaconradius" /><code>{"float MinBeaconRadius { get; }"}</code> | <span className="api-desc">Beacon radius setting. Not read anywhere in this build.</span> |
| <Link id="m-minbeaconscreenwidth" /><code>{"float MinBeaconScreenWidth { get; }"}</code> | <span className="api-desc">Beacon screen width setting. Not read anywhere in this build.</span> |
| <Link id="m-modelupdatetickrateinseconds" /><code>{"float ModelUpdateTickRateInSeconds { get; }"}</code> | <span className="api-desc">How often the server checks for shrine changes and syncs them to clients.</span> |
| <Link id="m-remoteplayersubscribermarkprefab" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" RemotePlayerSubscriberMarkPrefab { get; }"}</code> | <span className="api-desc">Mark shown at a shrine for other players' subscriptions.</span> |
| <Link id="m-shrinedeactivationsfx" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ShrineDeactivationSfx { get; }"}</code> | <span className="api-desc">Sound when a powered shrine deactivates.</span> |
| <Link id="m-shrinesubscribesfx" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ShrineSubscribeSfx { get; }"}</code> | <span className="api-desc">Sound when subscribing to a shrine.</span> |
| <Link id="m-subscribermarkdistancefromcentre" /><code>{"float SubscriberMarkDistanceFromCentre { get; }"}</code> | <span className="api-desc">How far subscriber marks sit from the shrine's centre.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getshrinesettings" /><code><Link to="/mod/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" GetShrineSettings(Guid shrineId)"}</code> | <span className="api-desc">Settings for the shrine with the given id. Throws if there is none.</span> |

## Used in

Members of other types that take, return or hold a `IRespawnSystemSettings`:

<div className="api-used-in">

[`IRespawnBeaconView.Init`](/mod/game-api/types/game-other-namespaces/irespawnbeaconview#m-init), [`RespawnBeaconController.SystemSettings`](/mod/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-systemsettings), [`RespawnBeaconView.Init`](/mod/game-api/types/game-other-namespaces/respawnbeaconview#m-init), [`RespawnShrine.SystemSettings`](/mod/game-api/types/game-other-namespaces/respawnshrine#m-systemsettings), [`RespawnShrineFuelDockController.SystemSettings`](/mod/game-api/types/game-other-namespaces/respawnshrinefueldockcontroller#m-systemsettings), [`RespawnShrineSubscriberMarkController.SystemSettings`](/mod/game-api/types/game-other-namespaces/respawnshrinesubscribermarkcontroller#m-systemsettings), [`RespawnSystem.SystemSettings`](/mod/game-api/types/game-other-namespaces/respawnsystem#m-systemsettings).

</div>
