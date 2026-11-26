---
title: "SerializableServerSettings"
description: "Network form of ServerSettings: ServerSettingsSync writes the server's settings with it and clients read them back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializableServerSettings

A **class** in `Root.Township`, no namespace.

Network form of `ServerSettings`: `ServerSettingsSync` writes the server's settings with it and clients read them back. Each private field mirrors the `ServerSettings` property of the same name; `WipesWhenEmpty` and `HasRunRepairBoxFix` aren't included.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializableServerSettings()"}</code> | Creates a `SerializableServerSettings` from `stream`. |
| <Link id="m-ctor-2" /><code>{"SerializableServerSettings("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Creates a `SerializableServerSettings` from `stream`. |

## Fields

<details>
<summary>47 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-avoidspawncollectedpages" /><code>{"private bool AvoidSpawnCollectedPages"}</code> | Mirrors `ServerSettings.AvoidSpawnCollectedPages`: probably skips spawning pages players already collected. |
| <Link id="m-canonlybuyskillsafterpracticing" /><code>{"private bool CanOnlyBuySkillsAfterPracticing"}</code> | Mirrors `ServerSettings.CanOnlyBuySkillsAfterPracticing`. |
| <Link id="m-chiselingxpx" /><code>{"private float ChiselingXPX"}</code> | Mirrors `ServerSettings.ChiselingXPX`, the chiseling XP multiplier. |
| <Link id="m-communitystoragemultiplier" /><code>{"private float CommunityStorageMultiplier"}</code> | Mirrors `ServerSettings.CommunityStorageMultiplier`. |
| <Link id="m-cookingxpx" /><code>{"private float CookingXPX"}</code> | Mirrors `ServerSettings.CookingXPX`, the cooking XP multiplier. |
| <Link id="m-damagex" /><code>{"private float DamageX"}</code> | Mirrors `ServerSettings.DamageX`, the damage multiplier. |
| <Link id="m-decaymultiplier" /><code>{"private float DecayMultiplier"}</code> | Mirrors `ServerSettings.DecayMultiplier`. |
| <Link id="m-downedstateduration" /><code>{"private int DownedStateDuration"}</code> | Mirrors `ServerSettings.DownedStateDuration` (0 to 120, default 60). |
| <Link id="m-dropallondeath" /><code>{"private bool DropAllOnDeath"}</code> | Mirrors `ServerSettings.DropAllOnDeath`. |
| <Link id="m-emptyservershutdowntimeinseconds" /><code>{"private int EmptyServerShutdownTimeInSeconds"}</code> | Mirrors `ServerSettings.EmptyServerShutdownTimeInSeconds` (default 300). |
| <Link id="m-fixeddaytime" /><code>{"private float FixedDaytime"}</code> | Mirrors `ServerSettings.FixedDaytime`; -1 by default, probably meaning time isn't fixed. |
| <Link id="m-forgingxpx" /><code>{"private float ForgingXPX"}</code> | Mirrors `ServerSettings.ForgingXPX`, the forging XP multiplier. |
| <Link id="m-fpsformaximumfixedframecount" /><code>{"private int FPSForMaximumFixedFrameCount"}</code> | Mirrors `ServerSettings.FPSForMaximumFixedFrameCount`, part of the physics rate tuning. |
| <Link id="m-fpsforminimumfixedframecount" /><code>{"private int FPSForMinimumFixedFrameCount"}</code> | Mirrors `ServerSettings.FPSForMinimumFixedFrameCount`, part of the physics rate tuning. |
| <Link id="m-handoverrequireconfirmation" /><code>{"private bool HandoverRequireConfirmation"}</code> | Mirrors `ServerSettings.HandoverRequireConfirmation`. |
| <Link id="m-hasafktimer" /><code>{"private bool HasAFKTimer"}</code> | Mirrors `ServerSettings.HasAFKTimer`. |
| <Link id="m-hasingamesettings" /><code>{"private bool HasInGameSettings"}</code> | Mirrors `ServerSettings.HasInGameSettings`. |
| <Link id="m-healthregenmultiplier" /><code>{"private float HealthRegenMultiplier"}</code> | Mirrors `ServerSettings.HealthRegenMultiplier`. |
| <Link id="m-hungerdealsdamage" /><code>{"private bool HungerDealsDamage"}</code> | Mirrors `ServerSettings.HungerDealsDamage`. |
| <Link id="m-hungertick" /><code>{"private float HungerTick"}</code> | Mirrors `ServerSettings.HungerTick` (default 0.0005). |
| <Link id="m-impactinvincibilitytime" /><code>{"private float ImpactInvincibilityTime"}</code> | Mirrors `ServerSettings.ImpactInvincibilityTime` (1 to 30, default 12). |
| <Link id="m-initialplayerinventory" /><code>{"private int InitialPlayerInventory"}</code> | Mirrors `ServerSettings.InitialPlayerInventory`, stored as an int of `AvailablePlayerSaveData.Available`. |
| <Link id="m-isadvancingtimewhenoffline" /><code>{"private bool IsAdvancingTimeWhenOffline"}</code> | Mirrors `ServerSettings.IsAdvancingTimeWhenOffline`. |
| <Link id="m-isautosaving" /><code>{"private bool IsAutoSaving"}</code> | Mirrors `ServerSettings.IsAutoSaving`. |
| <Link id="m-iscustomizationenabled" /><code>{"private bool IsCustomizationEnabled"}</code> | Mirrors `ServerSettings.IsCustomizationEnabled`. |
| <Link id="m-ispvpenabled" /><code>{"private bool IsPVPEnabled"}</code> | Mirrors `ServerSettings.IsPVPEnabled`. |
| <Link id="m-isresetinghungerondeath" /><code>{"private bool IsResetingHungerOnDeath"}</code> | Mirrors `ServerSettings.IsResetingHungerOnDeath`. |
| <Link id="m-issaving" /><code>{"private bool IsSaving"}</code> | Mirrors `ServerSettings.IsSaving`. |
| <Link id="m-isupdatingphysicsfixedframecount" /><code>{"private bool IsUpdatingPhysicsFixedFrameCount"}</code> | Mirrors `ServerSettings.IsUpdatingPhysicsFixedFrameCount`. |
| <Link id="m-maximumphysicsfixedframespersecond" /><code>{"private int MaximumPhysicsFixedFramesPerSecond"}</code> | Mirrors `ServerSettings.MaximumPhysicsFixedFramesPerSecond` (default 45). |
| <Link id="m-meleexpx" /><code>{"private float MeleeXPX"}</code> | Mirrors `ServerSettings.MeleeXPX`, the melee XP multiplier. |
| <Link id="m-minimumphysicsfixedframespersecond" /><code>{"private int MinimumPhysicsFixedFramesPerSecond"}</code> | Mirrors `ServerSettings.MinimumPhysicsFixedFramesPerSecond` (default 15). |
| <Link id="m-miningxpx" /><code>{"private float MiningXPX"}</code> | Mirrors `ServerSettings.MiningXPX`, the mining XP multiplier. |
| <Link id="m-minutesbetweenautosaving" /><code>{"private float MinutesBetweenAutoSaving"}</code> | Mirrors `ServerSettings.MinutesBetweenAutoSaving` (default 5). |
| <Link id="m-playerdamagetakenmultiplier" /><code>{"private float PlayerDamageTakenMultiplier"}</code> | Mirrors `ServerSettings.PlayerDamageTakenMultiplier`. |
| <Link id="m-playerlandmarkmode" /><code>{"private int PlayerLandmarkMode"}</code> | Mirrors `ServerSettings.PlayerLandmarkMode`, stored as an int. |
| <Link id="m-playerlimit" /><code>{"private int PlayerLimit"}</code> | Mirrors `ServerSettings.PlayerLimit`; -1 by default. |
| <Link id="m-playersmoothinglevel" /><code>{"private int PlayerSmoothingLevel"}</code> | Mirrors `ServerSettings.PlayerSmoothingLevel`, stored as an int. |
| <Link id="m-pvpcripplemultiplier" /><code>{"private float PVPCrippleMultiplier"}</code> | Mirrors `ServerSettings.PVPCrippleMultiplier` (default 0.3). |
| <Link id="m-pvpmultiplier" /><code>{"private float PVPMultiplier"}</code> | Mirrors `ServerSettings.PVPMultiplier` (default 0.1). |
| <Link id="m-rangedxpx" /><code>{"private float RangedXPX"}</code> | Mirrors `ServerSettings.RangedXPX`, the ranged XP multiplier. |
| <Link id="m-respawntimeseconds" /><code>{"private float RespawnTimeSeconds"}</code> | Mirrors `ServerSettings.RespawnTimeSeconds` (default 4). |
| <Link id="m-spawningratemultiplier" /><code>{"private float SpawningRateMultiplier"}</code> | Mirrors `ServerSettings.SpawningRateMultiplier`. |
| <Link id="m-timespeedmultiplier" /><code>{"private float TimeSpeedMultiplier"}</code> | Mirrors `ServerSettings.TimeSpeedMultiplier`. |
| <Link id="m-unspentexperiencelostondeath" /><code>{"private float UnspentExperienceLostOnDeath"}</code> | Mirrors `ServerSettings.UnspentExperienceLostOnDeath`. |
| <Link id="m-woodcuttingxpx" /><code>{"private float WoodcuttingXPX"}</code> | Mirrors `ServerSettings.WoodcuttingXPX`, the woodcutting XP multiplier. |
| <Link id="m-xpx" /><code>{"private float XPX"}</code> | Mirrors `ServerSettings.XPX`, the general XP multiplier. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromsettings" /><code>{"static "}<Link to="/game-api/types/global-s/serializableserversettings">{"SerializableServerSettings"}</Link>{" FromSettings("}<Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | Copies every synced value out of a `ServerSettings`, turning enums into ints. |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes every field in a fixed order. Both sides must agree on that order. |
| <Link id="m-tosettings" /><code><Link to="/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" ToSettings()"}</code> | Builds a `ServerSettings` from the fields, turning ints back into enums. |
