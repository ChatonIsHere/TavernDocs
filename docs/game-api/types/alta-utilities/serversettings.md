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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `Settings`, `ICloneable`
- **Attributes** `Obsolete`
- **Documented in** [ServerSettings](/tavernlib-api/types/backend-server-configs/serversettings), [Server settings](/game-api/networking/server-settings#serversettings), [Server settings](/tavernlib-api/config/server-settings#serversettings), [Folders](/tavernlib-api/directories)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ServerSettings()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-avoidspawncollectedpages" /><code>{"bool AvoidSpawnCollectedPages { get; set; }"}</code> | Default true. Nothing in the server build reads it. |
| <Link id="m-canonlybuyskillsafterpracticing" /><code>{"bool CanOnlyBuySkillsAfterPracticing { get; set; }"}</code> | Default true. When false, every skill slot counts as practised, so it can be bought straight away. |
| <Link id="m-chiselingxpx" /><code>{"float ChiselingXPX { get; set; }"}</code> | Experience multiplier for the chiseling path, applied before `XPX`. |
| <Link id="m-communitystoragemultiplier" /><code>{"float CommunityStorageMultiplier { get; set; }"}</code> | Scales how many interactions a charge allows in restricted (community) storage. Default 1. |
| <Link id="m-cookingxpx" /><code>{"float CookingXPX { get; set; }"}</code> | Experience multiplier for the cooking path, applied before `XPX`. |
| <Link id="m-damagex" /><code>{"float DamageX { get; set; }"}</code> | Global multiplier on impact and area-of-effect damage. Default 1. |
| <Link id="m-decaymultiplier" /><code>{"float DecayMultiplier { get; set; }"}</code> | Speeds up decay: decay times are divided by it. Default 1. |
| <Link id="m-downedstateduration" /><code>{"int DownedStateDuration { get; set; }"}</code> | Seconds a downed player has to be revived (0 to 120). Default 60. |
| <Link id="m-dropallondeath" /><code>{"bool DropAllOnDeath { get; set; }"}</code> | If true, players drop everything they carry when they die (unless revived). |
| <Link id="m-emptyservershutdowntimeinseconds" /><code>{"int EmptyServerShutdownTimeInSeconds { get; set; }"}</code> | Dev setting, default 300. Nothing in the server build reads it. |
| <Link id="m-fixeddaytime" /><code>{"float FixedDaytime { get; set; }"}</code> | If 0 or more, freezes the time of day at this value. Default -1 (time runs). |
| <Link id="m-forgingxpx" /><code>{"float ForgingXPX { get; set; }"}</code> | Experience multiplier for the forging path, applied before `XPX`. |
| <Link id="m-fpsformaximumfixedframecount" /><code>{"int FPSForMaximumFixedFrameCount { get; set; }"}</code> | Server frame rate at which physics runs at `MaximumPhysicsFixedFramesPerSecond`. Default 20. |
| <Link id="m-fpsforminimumfixedframecount" /><code>{"int FPSForMinimumFixedFrameCount { get; set; }"}</code> | Server frame rate at which physics drops to `MinimumPhysicsFixedFramesPerSecond`. Default 5. |
| <Link id="m-handoverrequireconfirmation" /><code>{"bool HandoverRequireConfirmation { get; set; }"}</code> | Default true. Nothing in the server build reads it. |
| <Link id="m-hasafktimer" /><code>{"bool HasAFKTimer { get; set; }"}</code> | Turns the AFK timer on or off. Default true. |
| <Link id="m-hasingamesettings" /><code>{"bool HasInGameSettings { get; set; }"}</code> | Whether players get the in-game server settings board. Default false; console commands can switch it. |
| <Link id="m-hasrunrepairboxfix" /><code>{"bool HasRunRepairBoxFix { get; set; }"}</code> | Saved flag for a one-off repair box fix. Nothing in the server build reads it. |
| <Link id="m-healthregenmultiplier" /><code>{"float HealthRegenMultiplier { get; set; }"}</code> | Scales health regained from being well fed. Default 1. |
| <Link id="m-hungerdealsdamage" /><code>{"bool HungerDealsDamage { get; set; }"}</code> | If true, players starve (lose health) when their fullness runs low. Default true. |
| <Link id="m-hungertick" /><code>{"float HungerTick { get; set; }"}</code> | Hunger lost on every stat update. Default 0.0005. |
| <Link id="m-impactinvincibilitytime" /><code>{"float ImpactInvincibilityTime { get; set; }"}</code> | Seconds a player ignores impacts after their controller spawns on the server or they use a cave teleporter. Default 12. |
| <Link id="m-initialplayerinventory" /><code><Link to="/game-api/types/alta-utilities/availableplayersavedata-available">{"AvailablePlayerSaveData.Available"}</Link>{" InitialPlayerInventory { get; set; }"}</code> | Which `PlayerSaveData` asset new players start with, matched by name. `None` gives nothing. |
| <Link id="m-isadvancingtimewhenoffline" /><code>{"bool IsAdvancingTimeWhenOffline { get; set; }"}</code> | If true, the world clock catches up on the time the server was down when it loads. Default true. |
| <Link id="m-isautosaving" /><code>{"bool IsAutoSaving { get; set; }"}</code> | Dev setting: whether the server saves on a timer. Read at start-up. Default true. |
| <Link id="m-iscustomizationenabled" /><code>{"bool IsCustomizationEnabled { get; set; }"}</code> | Dev setting: whether new players are sent to character customisation on first join. Default true. |
| <Link id="m-ispvpenabled" /><code>{"bool IsPVPEnabled { get; set; }"}</code> | If false, players do no damage to each other. Default false. |
| <Link id="m-isresetinghungerondeath" /><code>{"bool IsResetingHungerOnDeath { get; set; }"}</code> | If true, a player's hunger stat is reset when they die. |
| <Link id="m-issaving" /><code>{"bool IsSaving { get; set; }"}</code> | Whether the server writes save files at all. Default true. |
| <Link id="m-isupdatingphysicsfixedframecount" /><code>{"bool IsUpdatingPhysicsFixedFrameCount { get; set; }"}</code> | Dev setting: whether the physics rate follows the server frame rate. Default true. |
| <Link id="m-maximumphysicsfixedframespersecond" /><code>{"int MaximumPhysicsFixedFramesPerSecond { get; set; }"}</code> | Highest physics rate (fixed updates per second). Default 45. |
| <Link id="m-meleexpx" /><code>{"float MeleeXPX { get; set; }"}</code> | Experience multiplier for the melee path, applied before `XPX`. |
| <Link id="m-minimumphysicsfixedframespersecond" /><code>{"int MinimumPhysicsFixedFramesPerSecond { get; set; }"}</code> | Lowest physics rate when the server is struggling. Default 15. |
| <Link id="m-miningxpx" /><code>{"float MiningXPX { get; set; }"}</code> | Experience multiplier for the mining path, applied before `XPX`. |
| <Link id="m-minutesbetweenautosaving" /><code>{"float MinutesBetweenAutoSaving { get; set; }"}</code> | Dev setting: autosave interval in minutes (1 to 60). Read at start-up. Default 5. |
| <Link id="m-playerdamagetakenmultiplier" /><code>{"float PlayerDamageTakenMultiplier { get; set; }"}</code> | Scales all health damage players take. Default 1. |
| <Link id="m-playerlandmarkmode" /><code><Link to="/game-api/types/alta-world/playerlandmarkmode">{"PlayerLandmarkMode"}</Link>{" "}<Link to="/game-api/types/alta-world/playerlandmarkmode">{"PlayerLandmarkMode"}</Link>{" { get; set; }"}</code> | Which players show on the map: `ShowAll`, `FriendsOnly` or `Hidden`. |
| <Link id="m-playerlimit" /><code>{"int PlayerLimit { get; set; }"}</code> | Maximum players. -1 means no limit; simple servers cap it at 8. |
| <Link id="m-playersmoothinglevel" /><code><Link to="/game-api/types/alta-utilities/playersmoothinglevel">{"PlayerSmoothingLevel"}</Link>{" "}<Link to="/game-api/types/alta-utilities/playersmoothinglevel">{"PlayerSmoothingLevel"}</Link>{" { get; set; }"}</code> | Movement smoothing level that `PlayerSmoothManager` syncs to clients. |
| <Link id="m-pvpcripplemultiplier" /><code>{"float PVPCrippleMultiplier { get; set; }"}</code> | Scales cripple damage between players when PvP is on. Default 0.3. |
| <Link id="m-pvpmultiplier" /><code>{"float PVPMultiplier { get; set; }"}</code> | Scales health damage between players when PvP is on. Default 0.1. |
| <Link id="m-rangedxpx" /><code>{"float RangedXPX { get; set; }"}</code> | Experience multiplier for the ranged path, applied before `XPX`. |
| <Link id="m-respawntimeseconds" /><code>{"float RespawnTimeSeconds { get; set; }"}</code> | Default 4. Nothing in the server build reads it. |
| <Link id="m-spawningratemultiplier" /><code>{"float SpawningRateMultiplier { get; set; }"}</code> | Population spawn rate multiplier, exposed as `NetworkScene.SpawnRateMultiplier`. Default 1. |
| <Link id="m-timespeedmultiplier" /><code>{"float TimeSpeedMultiplier { get; set; }"}</code> | Speed of the world clock, set on the timeline at start-up. Default 1. |
| <Link id="m-unspentexperiencelostondeath" /><code>{"float UnspentExperienceLostOnDeath { get; set; }"}</code> | Fraction of unspent experience each path loses on death. 0 turns it off. |
| <Link id="m-wipeswhenempty" /><code>{"bool WipesWhenEmpty { get; set; }"}</code> | Dev setting. Nothing in the server build reads it. |
| <Link id="m-woodcuttingxpx" /><code>{"float WoodcuttingXPX { get; set; }"}</code> | Experience multiplier for the woodcutting path, applied before `XPX`. |
| <Link id="m-xpx" /><code>{"float XPX { get; set; }"}</code> | Global experience multiplier, applied after the per-path one. Default 1. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clone" /><code>{"private object System.ICloneable.Clone()"}</code> | Returns a shallow copy of the settings. |

</details>

## Used in

Members of other types that take, return or hold a `ServerSettings`:

[`AfkTimer.CheckUpdateSettings`](/game-api/types/global-a-b/afktimer#m-checkupdatesettings), [`DayTimeManager.UpdateSettings`](/game-api/types/alta-world/daytimemanager#m-updatesettings), [`ServerHandler.ServerConfig`](/game-api/types/alta-networking/serverhandler#m-serverconfig), [`SettingsQuickAccessMenu.ServerSettings`](/game-api/types/alta-player/settingsquickaccessmenu#m-serversettings), [`DynamicPhysicsTimeSet.settings`](/game-api/types/alta-utilities/dynamicphysicstimeset#m-settings), [`SettingsFieldAccess.SetupFromServerSettings`](/game-api/types/alta-utilities/settingsfieldaccess#m-setupfromserversettings), [`ServerSettingsChangeLogger.LogServerSettingsChange`](/game-api/types/game-other-namespaces/serversettingschangelogger#m-logserversettingschange), [`ServerSettingsSync.DeserializeServerSettingsFromStream`](/game-api/types/game-other-namespaces/serversettingssync#m-deserializeserversettingsfromstream), [`ServerSettingsSync.RequestServerSettingsFromServer`](/game-api/types/game-other-namespaces/serversettingssync#m-requestserversettingsfromserver), [`ServerSettingsSync.RequestSettings`](/game-api/types/game-other-namespaces/serversettingssync#m-requestsettings-3), [`ServerSettingsSync.SaveServerSettingsFromClient`](/game-api/types/game-other-namespaces/serversettingssync#m-saveserversettingsfromclient), [`ServerSettingsSync.serverSettings`](/game-api/types/game-other-namespaces/serversettingssync#m-serversettings), [`ServerSettingsSync.SetSettings`](/game-api/types/game-other-namespaces/serversettingssync#m-setsettings), [`ServerSettingsSync.settingsSyncTask`](/game-api/types/game-other-namespaces/serversettingssync#m-settingssynctask), [`ServerSettingsSync.syncSettings`](/game-api/types/game-other-namespaces/serversettingssync#m-syncsettings), [`ServerSettingsSync.SyncSettings`](/game-api/types/game-other-namespaces/serversettingssync#m-syncsettings-2), [`ServerSettingsSync.UpdateMenuSettingsValue`](/game-api/types/game-other-namespaces/serversettingssync#m-updatemenusettingsvalue), [`ServerSettingsSync.WriteServerSettings`](/game-api/types/game-other-namespaces/serversettingssync#m-writeserversettings), [`ServerSettingsChangeData.ServerSettingsChangeData`](/game-api/types/game-other-namespaces/serversettingschangedata#m-ctor-2), [`ServerSettingsChangeData.Settings`](/game-api/types/game-other-namespaces/serversettingschangedata#m-settings), [`SerializableServerSettings.FromSettings`](/game-api/types/global-s/serializableserversettings#m-fromsettings), [`SerializableServerSettings.ToSettings`](/game-api/types/global-s/serializableserversettings#m-tosettings).
