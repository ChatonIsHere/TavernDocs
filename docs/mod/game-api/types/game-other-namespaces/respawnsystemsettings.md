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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GlobalSettings<RespawnSystemSettings>`](/mod/game-api/types/assembly-other/globalsettings-t), [`IRespawnSystemSettings`](/mod/game-api/types/game-other-namespaces/irespawnsystemsettings), `IEnumerable<IRespawnShrineSettings>`, `IEnumerable`
- **Derived types** [`RespawnSystemSettings`](/mod/game-api/types/game-other-namespaces/respawnsystemsettings)
- **Attributes** `DefaultMember`, `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnSystemSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeglyphcolor" /><code>{"private Color activeGlyphColor"}</code> | <span className="api-desc">Glyph colour when the player is subscribed to the shrine.</span> |
| <Link id="m-fuelconsumptiontickrateinseconds" /><code>{"private float fuelConsumptionTickRateInSeconds"}</code> | <span className="api-desc">How often shrine fuel is burned down.</span> |
| <Link id="m-inactiveglyphcolor" /><code>{"private Color inactiveGlyphColor"}</code> | <span className="api-desc">Glyph colour when the player isn't subscribed.</span> |
| <Link id="m-isupdatingmarksonplayerjoinandleave" /><code>{"private bool isUpdatingMarksOnPlayerJoinAndLeave"}</code> | <span className="api-desc">Whether subscriber marks refresh when players join or leave.</span> |
| <Link id="m-localplayersubscribermark" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" localPlayerSubscriberMark"}</code> | <span className="api-desc">Pooled mark shown for the local player on a shrine.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-maximumbeaconradius" /><code>{"private float maximumBeaconRadius"}</code> | <span className="api-desc">Largest beacon radius.</span> |
| <Link id="m-minimumbeaconradius" /><code>{"private float minimumBeaconRadius"}</code> | <span className="api-desc">Smallest beacon radius.</span> |
| <Link id="m-minimumbeaconscreenwidth" /><code>{"private float minimumBeaconScreenWidth"}</code> | <span className="api-desc">Smallest on-screen width a beacon is drawn at.</span> |
| <Link id="m-modelupdatetickrateinseconds" /><code>{"private float modelUpdateTickRateInSeconds"}</code> | <span className="api-desc">How often the respawn model is checked for changes to sync.</span> |
| <Link id="m-remoteplayersubscribermark" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" remotePlayerSubscriberMark"}</code> | <span className="api-desc">Pooled mark shown for other players on a shrine.</span> |
| <Link id="m-respawnshrinesettings" /><code>{"private List<"}<Link to="/mod/game-api/types/game-other-namespaces/respawnshrinedata">{"RespawnShrineData"}</Link>{"> respawnShrineSettings"}</code> | <span className="api-desc">Data for every respawn shrine, including the global one.</span> |
| <Link id="m-shrinedeactivationsfx" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" shrineDeactivationSfx"}</code> | <span className="api-desc">Sound for a shrine running out or being turned off.</span> |
| <Link id="m-shrinesubscribesfx" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" shrineSubscribeSfx"}</code> | <span className="api-desc">Sound played when a player subscribes to a shrine.</span> |
| <Link id="m-subscribermarkdistancefromcentre" /><code>{"private float subscriberMarkDistanceFromCentre"}</code> | <span className="api-desc">How far subscriber marks sit from the shrine centre.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeglyphcolor-2" /><code>{"Color ActiveGlyphColor { get; }"}</code> | <span className="api-desc">Glyph colour on an active shrine.</span> |
| <Link id="m-fuelconsumptiontickrateinseconds-2" /><code>{"float FuelConsumptionTickRateInSeconds { get; }"}</code> | <span className="api-desc">How often shrine fuel is consumed, in seconds.</span> |
| <Link id="m-inactiveglyphcolor-2" /><code>{"Color InactiveGlyphColor { get; }"}</code> | <span className="api-desc">Glyph colour on an inactive shrine.</span> |
| <Link id="m-isupdatingmarksonplayerjoinandleave-2" /><code>{"bool IsUpdatingMarksOnPlayerJoinAndLeave { get; }"}</code> | <span className="api-desc">Whether subscriber marks are refreshed when players join or leave.</span> |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" this[Guid shrineId] { get; }"}</code> | <span className="api-desc">Indexer: the settings for the shrine with this GUID. Throws if there's none.</span> |
| <Link id="m-localplayersubscribermarkprefab" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" LocalPlayerSubscriberMarkPrefab { get; }"}</code> | <span className="api-desc">Pooled mark shown on a shrine for the local player's subscription.</span> |
| <Link id="m-maxbeaconradius" /><code>{"float MaxBeaconRadius { get; }"}</code> | <span className="api-desc">Largest radius of a shrine's beacon.</span> |
| <Link id="m-minbeaconradius" /><code>{"float MinBeaconRadius { get; }"}</code> | <span className="api-desc">Smallest radius of a shrine's beacon.</span> |
| <Link id="m-minbeaconscreenwidth" /><code>{"float MinBeaconScreenWidth { get; }"}</code> | <span className="api-desc">Smallest width a beacon may take on screen.</span> |
| <Link id="m-modelupdatetickrateinseconds-2" /><code>{"float ModelUpdateTickRateInSeconds { get; }"}</code> | <span className="api-desc">How often shrine models update, in seconds.</span> |
| <Link id="m-remoteplayersubscribermarkprefab" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" RemotePlayerSubscriberMarkPrefab { get; }"}</code> | <span className="api-desc">Pooled mark shown on a shrine for other players' subscriptions.</span> |
| <Link id="m-shrinedeactivationsfx-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ShrineDeactivationSfx { get; }"}</code> | <span className="api-desc">Sound played when a shrine deactivates.</span> |
| <Link id="m-shrinesubscribesfx-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" ShrineSubscribeSfx { get; }"}</code> | <span className="api-desc">Sound played when a player subscribes to a shrine.</span> |
| <Link id="m-subscribermarkdistancefromcentre-2" /><code>{"float SubscriberMarkDistanceFromCentre { get; }"}</code> | <span className="api-desc">How far from the shrine's centre subscriber marks are placed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator" /><code>{"IEnumerator<"}<Link to="/mod/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{"> GetEnumerator()"}</code> | <span className="api-desc">Goes through every shrine's settings.</span> |
| <Link id="m-getshrinesettings" /><code><Link to="/mod/game-api/types/game-other-namespaces/irespawnshrinesettings">{"IRespawnShrineSettings"}</Link>{" GetShrineSettings(Guid shrineId)"}</code> | <span className="api-desc">The settings for the shrine with this GUID. Throws if there's none.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Goes through every shrine's settings.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Logs errors for duplicate shrine IDs and for a missing global shrine.</span> |

</details>
