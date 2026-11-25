---
title: "IRespawnSystemSettings"
description: "interface IRespawnSystemSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRespawnSystemSettings

An **interface** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `IEnumerable<IRespawnShrineSettings>`, `IEnumerable`
- **Derived types** [`RespawnSystemSettings`](/game-api/types/game-other-namespaces/respawnsystemsettings)
- **Attributes** `DefaultMember`

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeglyphcolor" /><code>{"Color ActiveGlyphColor { get; }"}</code> |  |
| <Link id="m-fuelconsumptiontickrateinseconds" /><code>{"float FuelConsumptionTickRateInSeconds { get; }"}</code> |  |
| <Link id="m-inactiveglyphcolor" /><code>{"Color InactiveGlyphColor { get; }"}</code> |  |
| <Link id="m-isupdatingmarksonplayerjoinandleave" /><code>{"bool IsUpdatingMarksOnPlayerJoinAndLeave { get; }"}</code> |  |
| <Link id="m-item" /><code><Link to="/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" this[Guid shrineId] { get; }"}</code> |  |
| <Link id="m-localplayersubscribermarkprefab" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LocalPlayerSubscriberMarkPrefab { get; }"}</code> |  |
| <Link id="m-maxbeaconradius" /><code>{"float MaxBeaconRadius { get; }"}</code> |  |
| <Link id="m-minbeaconradius" /><code>{"float MinBeaconRadius { get; }"}</code> |  |
| <Link id="m-minbeaconscreenwidth" /><code>{"float MinBeaconScreenWidth { get; }"}</code> |  |
| <Link id="m-modelupdatetickrateinseconds" /><code>{"float ModelUpdateTickRateInSeconds { get; }"}</code> |  |
| <Link id="m-remoteplayersubscribermarkprefab" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" RemotePlayerSubscriberMarkPrefab { get; }"}</code> |  |
| <Link id="m-shrinedeactivationsfx" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ShrineDeactivationSfx { get; }"}</code> |  |
| <Link id="m-shrinesubscribesfx" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ShrineSubscribeSfx { get; }"}</code> |  |
| <Link id="m-subscribermarkdistancefromcentre" /><code>{"float SubscriberMarkDistanceFromCentre { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getshrinesettings" /><code><Link to="/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" GetShrineSettings(Guid shrineId)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IRespawnSystemSettings`:

[`IRespawnBeaconView.Init`](/game-api/types/game-other-namespaces/irespawnbeaconview#m-init), [`RespawnBeaconController.SystemSettings`](/game-api/types/game-other-namespaces/respawnbeaconcontroller#m-systemsettings), [`RespawnBeaconView.Init`](/game-api/types/game-other-namespaces/respawnbeaconview#m-init), [`RespawnShrine.SystemSettings`](/game-api/types/game-other-namespaces/respawnshrine#m-systemsettings), [`RespawnShrineFuelDockController.SystemSettings`](/game-api/types/game-other-namespaces/respawnshrinefueldockcontroller#m-systemsettings), [`RespawnShrineSubscriberMarkController.SystemSettings`](/game-api/types/game-other-namespaces/respawnshrinesubscribermarkcontroller#m-systemsettings), [`RespawnSystem.SystemSettings`](/game-api/types/game-other-namespaces/respawnsystem#m-systemsettings).
