---
title: "RespawnSystemSettings"
description: "Global settings for respawn shrines: per-shrine data by GUID, tick rates, beacon sizes, subscriber marks, glyph colours and sounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnSystemSettings

A **class** in `Root.Township`, `ATT.Respawn`.

Global settings for respawn shrines: per-shrine data by GUID, tick rates, beacon sizes, subscriber marks, glyph colours and sounds. Get it with `RespawnSystemSettings.Instance`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GlobalSettings<RespawnSystemSettings>`](/game-api/types/assembly-other/globalsettings-t), [`IRespawnSystemSettings`](/game-api/types/game-other-namespaces/irespawnsystemsettings), `IEnumerable<IRespawnShrineSettings>`, `IEnumerable`
- **Derived types** [`RespawnSystemSettings`](/game-api/types/game-other-namespaces/respawnsystemsettings)
- **Attributes** `DefaultMember`, `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RespawnSystemSettings()"}</code> |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeglyphcolor" /><code>{"private Color activeGlyphColor"}</code> | Glyph colour when the player is subscribed to the shrine. |
| <Link id="m-fuelconsumptiontickrateinseconds" /><code>{"private float fuelConsumptionTickRateInSeconds"}</code> | How often shrine fuel is burned down. |
| <Link id="m-inactiveglyphcolor" /><code>{"private Color inactiveGlyphColor"}</code> | Glyph colour when the player isn't subscribed. |
| <Link id="m-isupdatingmarksonplayerjoinandleave" /><code>{"private bool isUpdatingMarksOnPlayerJoinAndLeave"}</code> | Whether subscriber marks refresh when players join or leave. |
| <Link id="m-localplayersubscribermark" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" localPlayerSubscriberMark"}</code> | Pooled mark shown for the local player on a shrine. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |
| <Link id="m-maximumbeaconradius" /><code>{"private float maximumBeaconRadius"}</code> | Largest beacon radius. |
| <Link id="m-minimumbeaconradius" /><code>{"private float minimumBeaconRadius"}</code> | Smallest beacon radius. |
| <Link id="m-minimumbeaconscreenwidth" /><code>{"private float minimumBeaconScreenWidth"}</code> | Smallest on-screen width a beacon is drawn at. |
| <Link id="m-modelupdatetickrateinseconds" /><code>{"private float modelUpdateTickRateInSeconds"}</code> | How often the respawn model is checked for changes to sync. |
| <Link id="m-remoteplayersubscribermark" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" remotePlayerSubscriberMark"}</code> | Pooled mark shown for other players on a shrine. |
| <Link id="m-respawnshrinesettings" /><code>{"private List<"}<Link to="/game-api/types/game-other-namespaces/respawnshrinedata">{"RespawnShrineData"}</Link>{"> respawnShrineSettings"}</code> | Data for every respawn shrine, including the global one. |
| <Link id="m-shrinedeactivationsfx" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" shrineDeactivationSfx"}</code> | Sound for a shrine running out or being turned off. |
| <Link id="m-shrinesubscribesfx" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" shrineSubscribeSfx"}</code> | Sound played when a player subscribes to a shrine. |
| <Link id="m-subscribermarkdistancefromcentre" /><code>{"private float subscriberMarkDistanceFromCentre"}</code> | How far subscriber marks sit from the shrine centre. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeglyphcolor-2" /><code>{"Color ActiveGlyphColor { get; }"}</code> | Glyph colour on an active shrine. |
| <Link id="m-fuelconsumptiontickrateinseconds-2" /><code>{"float FuelConsumptionTickRateInSeconds { get; }"}</code> | How often shrine fuel is consumed, in seconds. |
| <Link id="m-inactiveglyphcolor-2" /><code>{"Color InactiveGlyphColor { get; }"}</code> | Glyph colour on an inactive shrine. |
| <Link id="m-isupdatingmarksonplayerjoinandleave-2" /><code>{"bool IsUpdatingMarksOnPlayerJoinAndLeave { get; }"}</code> | Whether subscriber marks are refreshed when players join or leave. |
| <Link id="m-item" /><code><Link to="/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" this[Guid shrineId] { get; }"}</code> | Indexer: the settings for the shrine with this GUID. Throws if there's none. |
| <Link id="m-localplayersubscribermarkprefab" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LocalPlayerSubscriberMarkPrefab { get; }"}</code> | Pooled mark shown on a shrine for the local player's subscription. |
| <Link id="m-maxbeaconradius" /><code>{"float MaxBeaconRadius { get; }"}</code> | Largest radius of a shrine's beacon. |
| <Link id="m-minbeaconradius" /><code>{"float MinBeaconRadius { get; }"}</code> | Smallest radius of a shrine's beacon. |
| <Link id="m-minbeaconscreenwidth" /><code>{"float MinBeaconScreenWidth { get; }"}</code> | Smallest width a beacon may take on screen. |
| <Link id="m-modelupdatetickrateinseconds-2" /><code>{"float ModelUpdateTickRateInSeconds { get; }"}</code> | How often shrine models update, in seconds. |
| <Link id="m-remoteplayersubscribermarkprefab" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" RemotePlayerSubscriberMarkPrefab { get; }"}</code> | Pooled mark shown on a shrine for other players' subscriptions. |
| <Link id="m-shrinedeactivationsfx-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ShrineDeactivationSfx { get; }"}</code> | Sound played when a shrine deactivates. |
| <Link id="m-shrinesubscribesfx-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ShrineSubscribeSfx { get; }"}</code> | Sound played when a player subscribes to a shrine. |
| <Link id="m-subscribermarkdistancefromcentre-2" /><code>{"float SubscriberMarkDistanceFromCentre { get; }"}</code> | How far from the shrine's centre subscriber marks are placed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{"> GetEnumerator()"}</code> | Goes through every shrine's settings. |
| <Link id="m-getshrinesettings" /><code><Link to="/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" GetShrineSettings(Guid shrineId)"}</code> | The settings for the shrine with this GUID. Throws if there's none. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Goes through every shrine's settings. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Logs errors for duplicate shrine IDs and for a missing global shrine. |

</details>
