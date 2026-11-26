---
title: "ServerSettings"
description: "The game's own server settings, loaded from ServerConfiguration.json."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerSettings

A **class** in `Root.Township`, `Alta.Utilities`.

The game's own server settings, loaded from `ServerConfiguration.json`. Server: read them through `ServerHandler.Current.ServerConfig.Settings`. Marked obsolete in favour of `GlobalConstants`, but still what the game reads.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `Settings`, `ICloneable`
- **Attributes** `Obsolete`
- **Documented in** [ServerSettings](/mod/tavernlib-api/types/backend-server-configs/serversettings), [Server settings](/mod/game-api/networking/server-settings#serversettings), [Server settings](/mod/tavernlib-api/config/server-settings#serversettings), [Folders](/mod/tavernlib-api/directories)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ServerSettings()"}</code> | <span className="api-desc">Creates a `ServerSettings` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-avoidspawncollectedpages" /><code>{"bool AvoidSpawnCollectedPages { get; set; }"}</code> | <span className="api-desc">Default true. Nothing in the server build reads it.</span> |
| <Link id="m-canonlybuyskillsafterpracticing" /><code>{"bool CanOnlyBuySkillsAfterPracticing { get; set; }"}</code> | <span className="api-desc">Default true. When false, every skill slot counts as practised, so it can be bought straight away.</span> |
| <Link id="m-chiselingxpx" /><code>{"float ChiselingXPX { get; set; }"}</code> | <span className="api-desc">Experience multiplier for the chiseling path, applied before `XPX`.</span> |
| <Link id="m-communitystoragemultiplier" /><code>{"float CommunityStorageMultiplier { get; set; }"}</code> | <span className="api-desc">Scales how many interactions a charge allows in restricted (community) storage. Default 1.</span> |
| <Link id="m-cookingxpx" /><code>{"float CookingXPX { get; set; }"}</code> | <span className="api-desc">Experience multiplier for the cooking path, applied before `XPX`.</span> |
| <Link id="m-damagex" /><code>{"float DamageX { get; set; }"}</code> | <span className="api-desc">Global multiplier on impact and area-of-effect damage. Default 1.</span> |
| <Link id="m-decaymultiplier" /><code>{"float DecayMultiplier { get; set; }"}</code> | <span className="api-desc">Speeds up decay: decay times are divided by it. Default 1.</span> |
| <Link id="m-downedstateduration" /><code>{"int DownedStateDuration { get; set; }"}</code> | <span className="api-desc">Seconds a downed player has to be revived (0 to 120). Default 60.</span> |
| <Link id="m-dropallondeath" /><code>{"bool DropAllOnDeath { get; set; }"}</code> | <span className="api-desc">If true, players drop everything they carry when they die (unless revived).</span> |
| <Link id="m-emptyservershutdowntimeinseconds" /><code>{"int EmptyServerShutdownTimeInSeconds { get; set; }"}</code> | <span className="api-desc">Dev setting, default 300. Nothing in the server build reads it.</span> |
| <Link id="m-fixeddaytime" /><code>{"float FixedDaytime { get; set; }"}</code> | <span className="api-desc">If 0 or more, freezes the time of day at this value. Default -1 (time runs).</span> |
| <Link id="m-forgingxpx" /><code>{"float ForgingXPX { get; set; }"}</code> | <span className="api-desc">Experience multiplier for the forging path, applied before `XPX`.</span> |
| <Link id="m-fpsformaximumfixedframecount" /><code>{"int FPSForMaximumFixedFrameCount { get; set; }"}</code> | <span className="api-desc">Server frame rate at which physics runs at `MaximumPhysicsFixedFramesPerSecond`. Default 20.</span> |
| <Link id="m-fpsforminimumfixedframecount" /><code>{"int FPSForMinimumFixedFrameCount { get; set; }"}</code> | <span className="api-desc">Server frame rate at which physics drops to `MinimumPhysicsFixedFramesPerSecond`. Default 5.</span> |
| <Link id="m-handoverrequireconfirmation" /><code>{"bool HandoverRequireConfirmation { get; set; }"}</code> | <span className="api-desc">Default true. Nothing in the server build reads it.</span> |
| <Link id="m-hasafktimer" /><code>{"bool HasAFKTimer { get; set; }"}</code> | <span className="api-desc">Turns the AFK timer on or off. Default true.</span> |
| <Link id="m-hasingamesettings" /><code>{"bool HasInGameSettings { get; set; }"}</code> | <span className="api-desc">Whether players get the in-game server settings board. Default false; console commands can switch it.</span> |
| <Link id="m-hasrunrepairboxfix" /><code>{"bool HasRunRepairBoxFix { get; set; }"}</code> | <span className="api-desc">Saved flag for a one-off repair box fix. Nothing in the server build reads it.</span> |
| <Link id="m-healthregenmultiplier" /><code>{"float HealthRegenMultiplier { get; set; }"}</code> | <span className="api-desc">Scales health regained from being well fed. Default 1.</span> |
| <Link id="m-hungerdealsdamage" /><code>{"bool HungerDealsDamage { get; set; }"}</code> | <span className="api-desc">If true, players starve (lose health) when their fullness runs low. Default true.</span> |
| <Link id="m-hungertick" /><code>{"float HungerTick { get; set; }"}</code> | <span className="api-desc">Hunger lost on every stat update. Default 0.0005.</span> |
| <Link id="m-impactinvincibilitytime" /><code>{"float ImpactInvincibilityTime { get; set; }"}</code> | <span className="api-desc">Seconds a player ignores impacts after their controller spawns on the server or they use a cave teleporter. Default 12.</span> |
| <Link id="m-initialplayerinventory" /><code><Link to="/mod/game-api/types/alta-utilities/availableplayersavedata-available">{"AvailablePlayerSaveData.Available"}</Link>{" InitialPlayerInventory { get; set; }"}</code> | <span className="api-desc">Which `PlayerSaveData` asset new players start with, matched by name. `None` gives nothing.</span> |
| <Link id="m-isadvancingtimewhenoffline" /><code>{"bool IsAdvancingTimeWhenOffline { get; set; }"}</code> | <span className="api-desc">If true, the world clock catches up on the time the server was down when it loads. Default true.</span> |
| <Link id="m-isautosaving" /><code>{"bool IsAutoSaving { get; set; }"}</code> | <span className="api-desc">Dev setting: whether the server saves on a timer. Read at start-up. Default true.</span> |
| <Link id="m-iscustomizationenabled" /><code>{"bool IsCustomizationEnabled { get; set; }"}</code> | <span className="api-desc">Dev setting: whether new players are sent to character customisation on first join. Default true.</span> |
| <Link id="m-ispvpenabled" /><code>{"bool IsPVPEnabled { get; set; }"}</code> | <span className="api-desc">If false, players do no damage to each other. Default false.</span> |
| <Link id="m-isresetinghungerondeath" /><code>{"bool IsResetingHungerOnDeath { get; set; }"}</code> | <span className="api-desc">If true, a player's hunger stat is reset when they die.</span> |
| <Link id="m-issaving" /><code>{"bool IsSaving { get; set; }"}</code> | <span className="api-desc">Whether the server writes save files at all. Default true.</span> |
| <Link id="m-isupdatingphysicsfixedframecount" /><code>{"bool IsUpdatingPhysicsFixedFrameCount { get; set; }"}</code> | <span className="api-desc">Dev setting: whether the physics rate follows the server frame rate. Default true.</span> |
| <Link id="m-maximumphysicsfixedframespersecond" /><code>{"int MaximumPhysicsFixedFramesPerSecond { get; set; }"}</code> | <span className="api-desc">Highest physics rate (fixed updates per second). Default 45.</span> |
| <Link id="m-meleexpx" /><code>{"float MeleeXPX { get; set; }"}</code> | <span className="api-desc">Experience multiplier for the melee path, applied before `XPX`.</span> |
| <Link id="m-minimumphysicsfixedframespersecond" /><code>{"int MinimumPhysicsFixedFramesPerSecond { get; set; }"}</code> | <span className="api-desc">Lowest physics rate when the server is struggling. Default 15.</span> |
| <Link id="m-miningxpx" /><code>{"float MiningXPX { get; set; }"}</code> | <span className="api-desc">Experience multiplier for the mining path, applied before `XPX`.</span> |
| <Link id="m-minutesbetweenautosaving" /><code>{"float MinutesBetweenAutoSaving { get; set; }"}</code> | <span className="api-desc">Dev setting: autosave interval in minutes (1 to 60). Read at start-up. Default 5.</span> |
| <Link id="m-playerdamagetakenmultiplier" /><code>{"float PlayerDamageTakenMultiplier { get; set; }"}</code> | <span className="api-desc">Scales all health damage players take. Default 1.</span> |
| <Link id="m-playerlandmarkmode" /><code><Link to="/mod/game-api/types/alta-world/playerlandmarkmode">{"PlayerLandmarkMode"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/playerlandmarkmode">{"PlayerLandmarkMode"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Which players show on the map: `ShowAll`, `FriendsOnly` or `Hidden`.</span> |
| <Link id="m-playerlimit" /><code>{"int PlayerLimit { get; set; }"}</code> | <span className="api-desc">Maximum players. -1 means no limit; simple servers cap it at 8.</span> |
| <Link id="m-playersmoothinglevel" /><code><Link to="/mod/game-api/types/alta-utilities/playersmoothinglevel">{"PlayerSmoothingLevel"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/playersmoothinglevel">{"PlayerSmoothingLevel"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Movement smoothing level that `PlayerSmoothManager` syncs to clients.</span> |
| <Link id="m-pvpcripplemultiplier" /><code>{"float PVPCrippleMultiplier { get; set; }"}</code> | <span className="api-desc">Scales cripple damage between players when PvP is on. Default 0.3.</span> |
| <Link id="m-pvpmultiplier" /><code>{"float PVPMultiplier { get; set; }"}</code> | <span className="api-desc">Scales health damage between players when PvP is on. Default 0.1.</span> |
| <Link id="m-rangedxpx" /><code>{"float RangedXPX { get; set; }"}</code> | <span className="api-desc">Experience multiplier for the ranged path, applied before `XPX`.</span> |
| <Link id="m-respawntimeseconds" /><code>{"float RespawnTimeSeconds { get; set; }"}</code> | <span className="api-desc">Default 4. Nothing in the server build reads it.</span> |
| <Link id="m-spawningratemultiplier" /><code>{"float SpawningRateMultiplier { get; set; }"}</code> | <span className="api-desc">Population spawn rate multiplier, exposed as `NetworkScene.SpawnRateMultiplier`. Default 1.</span> |
| <Link id="m-timespeedmultiplier" /><code>{"float TimeSpeedMultiplier { get; set; }"}</code> | <span className="api-desc">Speed of the world clock, set on the timeline at start-up. Default 1.</span> |
| <Link id="m-unspentexperiencelostondeath" /><code>{"float UnspentExperienceLostOnDeath { get; set; }"}</code> | <span className="api-desc">Fraction of unspent experience each path loses on death. 0 turns it off.</span> |
| <Link id="m-wipeswhenempty" /><code>{"bool WipesWhenEmpty { get; set; }"}</code> | <span className="api-desc">Dev setting. Nothing in the server build reads it.</span> |
| <Link id="m-woodcuttingxpx" /><code>{"float WoodcuttingXPX { get; set; }"}</code> | <span className="api-desc">Experience multiplier for the woodcutting path, applied before `XPX`.</span> |
| <Link id="m-xpx" /><code>{"float XPX { get; set; }"}</code> | <span className="api-desc">Global experience multiplier, applied after the per-path one. Default 1.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"private object System.ICloneable.Clone()"}</code> | <span className="api-desc">Returns a shallow copy of the settings.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ServerSettings`:

<div className="api-used-in">

[`AfkTimer.CheckUpdateSettings`](/mod/game-api/types/global-a-b/afktimer#m-checkupdatesettings), [`DayTimeManager.UpdateSettings`](/mod/game-api/types/alta-world/daytimemanager#m-updatesettings), [`ServerHandler.ServerConfig`](/mod/game-api/types/alta-networking/serverhandler#m-serverconfig), [`SettingsQuickAccessMenu.ServerSettings`](/mod/game-api/types/alta-player/settingsquickaccessmenu#m-serversettings), [`DynamicPhysicsTimeSet.settings`](/mod/game-api/types/alta-utilities/dynamicphysicstimeset#m-settings), [`SettingsFieldAccess.SetupFromServerSettings`](/mod/game-api/types/alta-utilities/settingsfieldaccess#m-setupfromserversettings), [`ServerSettingsChangeLogger.LogServerSettingsChange`](/mod/game-api/types/game-other-namespaces/serversettingschangelogger#m-logserversettingschange), [`ServerSettingsSync.DeserializeServerSettingsFromStream`](/mod/game-api/types/game-other-namespaces/serversettingssync#m-deserializeserversettingsfromstream), [`ServerSettingsSync.RequestServerSettingsFromServer`](/mod/game-api/types/game-other-namespaces/serversettingssync#m-requestserversettingsfromserver), [`ServerSettingsSync.RequestSettings`](/mod/game-api/types/game-other-namespaces/serversettingssync#m-requestsettings-3), [`ServerSettingsSync.SaveServerSettingsFromClient`](/mod/game-api/types/game-other-namespaces/serversettingssync#m-saveserversettingsfromclient), [`ServerSettingsSync.serverSettings`](/mod/game-api/types/game-other-namespaces/serversettingssync#m-serversettings), [`ServerSettingsSync.SetSettings`](/mod/game-api/types/game-other-namespaces/serversettingssync#m-setsettings), [`ServerSettingsSync.settingsSyncTask`](/mod/game-api/types/game-other-namespaces/serversettingssync#m-settingssynctask), [`ServerSettingsSync.syncSettings`](/mod/game-api/types/game-other-namespaces/serversettingssync#m-syncsettings), [`ServerSettingsSync.SyncSettings`](/mod/game-api/types/game-other-namespaces/serversettingssync#m-syncsettings-2), [`ServerSettingsSync.UpdateMenuSettingsValue`](/mod/game-api/types/game-other-namespaces/serversettingssync#m-updatemenusettingsvalue), [`ServerSettingsSync.WriteServerSettings`](/mod/game-api/types/game-other-namespaces/serversettingssync#m-writeserversettings), [`ServerSettingsChangeData.ServerSettingsChangeData`](/mod/game-api/types/game-other-namespaces/serversettingschangedata#m-ctor-2), [`ServerSettingsChangeData.Settings`](/mod/game-api/types/game-other-namespaces/serversettingschangedata#m-settings), [`SerializableServerSettings.FromSettings`](/mod/game-api/types/global-s/serializableserversettings#m-fromsettings), [`SerializableServerSettings.ToSettings`](/mod/game-api/types/global-s/serializableserversettings#m-tosettings).

</div>
