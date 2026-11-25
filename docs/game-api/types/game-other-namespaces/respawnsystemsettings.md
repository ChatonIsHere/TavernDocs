---
title: "RespawnSystemSettings"
description: "class RespawnSystemSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnSystemSettings

A **class** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GlobalSettings<RespawnSystemSettings>`](/game-api/types/assembly-other/globalsettings-t), [`IRespawnSystemSettings`](/game-api/types/game-other-namespaces/irespawnsystemsettings), `IEnumerable<IRespawnShrineSettings>`, `IEnumerable`
- **Derived types** [`RespawnSystemSettings`](/game-api/types/game-other-namespaces/respawnsystemsettings)
- **Attributes** `DefaultMember`, `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnSystemSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeglyphcolor" /><code>{"private Color activeGlyphColor"}</code> |  |
| <Link id="m-fuelconsumptiontickrateinseconds" /><code>{"private float fuelConsumptionTickRateInSeconds"}</code> |  |
| <Link id="m-inactiveglyphcolor" /><code>{"private Color inactiveGlyphColor"}</code> |  |
| <Link id="m-isupdatingmarksonplayerjoinandleave" /><code>{"private bool isUpdatingMarksOnPlayerJoinAndLeave"}</code> |  |
| <Link id="m-localplayersubscribermark" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" localPlayerSubscriberMark"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-maximumbeaconradius" /><code>{"private float maximumBeaconRadius"}</code> |  |
| <Link id="m-minimumbeaconradius" /><code>{"private float minimumBeaconRadius"}</code> |  |
| <Link id="m-minimumbeaconscreenwidth" /><code>{"private float minimumBeaconScreenWidth"}</code> |  |
| <Link id="m-modelupdatetickrateinseconds" /><code>{"private float modelUpdateTickRateInSeconds"}</code> |  |
| <Link id="m-remoteplayersubscribermark" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" remotePlayerSubscriberMark"}</code> |  |
| <Link id="m-respawnshrinesettings" /><code>{"private List<"}<Link to="/game-api/types/game-other-namespaces/respawnshrinedata">{"RespawnShrineData"}</Link>{"> respawnShrineSettings"}</code> |  |
| <Link id="m-shrinedeactivationsfx" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" shrineDeactivationSfx"}</code> |  |
| <Link id="m-shrinesubscribesfx" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" shrineSubscribeSfx"}</code> |  |
| <Link id="m-subscribermarkdistancefromcentre" /><code>{"private float subscriberMarkDistanceFromCentre"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeglyphcolor-2" /><code>{"Color ActiveGlyphColor { get; }"}</code> |  |
| <Link id="m-fuelconsumptiontickrateinseconds-2" /><code>{"float FuelConsumptionTickRateInSeconds { get; }"}</code> |  |
| <Link id="m-inactiveglyphcolor-2" /><code>{"Color InactiveGlyphColor { get; }"}</code> |  |
| <Link id="m-isupdatingmarksonplayerjoinandleave-2" /><code>{"bool IsUpdatingMarksOnPlayerJoinAndLeave { get; }"}</code> |  |
| <Link id="m-item" /><code><Link to="/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" this[Guid shrineId] { get; }"}</code> |  |
| <Link id="m-localplayersubscribermarkprefab" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LocalPlayerSubscriberMarkPrefab { get; }"}</code> |  |
| <Link id="m-maxbeaconradius" /><code>{"float MaxBeaconRadius { get; }"}</code> |  |
| <Link id="m-minbeaconradius" /><code>{"float MinBeaconRadius { get; }"}</code> |  |
| <Link id="m-minbeaconscreenwidth" /><code>{"float MinBeaconScreenWidth { get; }"}</code> |  |
| <Link id="m-modelupdatetickrateinseconds-2" /><code>{"float ModelUpdateTickRateInSeconds { get; }"}</code> |  |
| <Link id="m-remoteplayersubscribermarkprefab" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" RemotePlayerSubscriberMarkPrefab { get; }"}</code> |  |
| <Link id="m-shrinedeactivationsfx-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ShrineDeactivationSfx { get; }"}</code> |  |
| <Link id="m-shrinesubscribesfx-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ShrineSubscribeSfx { get; }"}</code> |  |
| <Link id="m-subscribermarkdistancefromcentre-2" /><code>{"float SubscriberMarkDistanceFromCentre { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{"> GetEnumerator()"}</code> |  |
| <Link id="m-getshrinesettings" /><code><Link to="/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" GetShrineSettings(Guid shrineId)"}</code> |  |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
