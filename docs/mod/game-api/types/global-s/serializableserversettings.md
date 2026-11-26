---
title: "SerializableServerSettings"
description: "Network form of ServerSettings: ServerSettingsSync writes the server's settings with it and clients read them back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializableServerSettings

A **class** in `Root.Township`, the global namespace.

Network form of `ServerSettings`: `ServerSettingsSync` writes the server's settings with it and clients read them back. Each private field mirrors the `ServerSettings` property of the same name; `WipesWhenEmpty` and `HasRunRepairBoxFix` aren't included.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializableServerSettings()"}</code> | <span className="api-desc">Creates a `SerializableServerSettings` from `stream`.</span> |
| <Link id="m-ctor-2" /><code>{"SerializableServerSettings("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Creates a `SerializableServerSettings` from `stream`.</span> |

## Fields

<details className="api-private">
<summary>47 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-avoidspawncollectedpages" /><code>{"private bool AvoidSpawnCollectedPages"}</code> | <span className="api-desc">Mirrors `ServerSettings.AvoidSpawnCollectedPages`: probably skips spawning pages players already collected.</span> |
| <Link id="m-canonlybuyskillsafterpracticing" /><code>{"private bool CanOnlyBuySkillsAfterPracticing"}</code> | <span className="api-desc">Mirrors `ServerSettings.CanOnlyBuySkillsAfterPracticing`.</span> |
| <Link id="m-chiselingxpx" /><code>{"private float ChiselingXPX"}</code> | <span className="api-desc">Mirrors `ServerSettings.ChiselingXPX`, the chiseling XP multiplier.</span> |
| <Link id="m-communitystoragemultiplier" /><code>{"private float CommunityStorageMultiplier"}</code> | <span className="api-desc">Mirrors `ServerSettings.CommunityStorageMultiplier`.</span> |
| <Link id="m-cookingxpx" /><code>{"private float CookingXPX"}</code> | <span className="api-desc">Mirrors `ServerSettings.CookingXPX`, the cooking XP multiplier.</span> |
| <Link id="m-damagex" /><code>{"private float DamageX"}</code> | <span className="api-desc">Mirrors `ServerSettings.DamageX`, the damage multiplier.</span> |
| <Link id="m-decaymultiplier" /><code>{"private float DecayMultiplier"}</code> | <span className="api-desc">Mirrors `ServerSettings.DecayMultiplier`.</span> |
| <Link id="m-downedstateduration" /><code>{"private int DownedStateDuration"}</code> | <span className="api-desc">Mirrors `ServerSettings.DownedStateDuration` (0 to 120, default 60).</span> |
| <Link id="m-dropallondeath" /><code>{"private bool DropAllOnDeath"}</code> | <span className="api-desc">Mirrors `ServerSettings.DropAllOnDeath`.</span> |
| <Link id="m-emptyservershutdowntimeinseconds" /><code>{"private int EmptyServerShutdownTimeInSeconds"}</code> | <span className="api-desc">Mirrors `ServerSettings.EmptyServerShutdownTimeInSeconds` (default 300).</span> |
| <Link id="m-fixeddaytime" /><code>{"private float FixedDaytime"}</code> | <span className="api-desc">Mirrors `ServerSettings.FixedDaytime`; -1 by default, probably meaning time isn't fixed.</span> |
| <Link id="m-forgingxpx" /><code>{"private float ForgingXPX"}</code> | <span className="api-desc">Mirrors `ServerSettings.ForgingXPX`, the forging XP multiplier.</span> |
| <Link id="m-fpsformaximumfixedframecount" /><code>{"private int FPSForMaximumFixedFrameCount"}</code> | <span className="api-desc">Mirrors `ServerSettings.FPSForMaximumFixedFrameCount`, part of the physics rate tuning.</span> |
| <Link id="m-fpsforminimumfixedframecount" /><code>{"private int FPSForMinimumFixedFrameCount"}</code> | <span className="api-desc">Mirrors `ServerSettings.FPSForMinimumFixedFrameCount`, part of the physics rate tuning.</span> |
| <Link id="m-handoverrequireconfirmation" /><code>{"private bool HandoverRequireConfirmation"}</code> | <span className="api-desc">Mirrors `ServerSettings.HandoverRequireConfirmation`.</span> |
| <Link id="m-hasafktimer" /><code>{"private bool HasAFKTimer"}</code> | <span className="api-desc">Mirrors `ServerSettings.HasAFKTimer`.</span> |
| <Link id="m-hasingamesettings" /><code>{"private bool HasInGameSettings"}</code> | <span className="api-desc">Mirrors `ServerSettings.HasInGameSettings`.</span> |
| <Link id="m-healthregenmultiplier" /><code>{"private float HealthRegenMultiplier"}</code> | <span className="api-desc">Mirrors `ServerSettings.HealthRegenMultiplier`.</span> |
| <Link id="m-hungerdealsdamage" /><code>{"private bool HungerDealsDamage"}</code> | <span className="api-desc">Mirrors `ServerSettings.HungerDealsDamage`.</span> |
| <Link id="m-hungertick" /><code>{"private float HungerTick"}</code> | <span className="api-desc">Mirrors `ServerSettings.HungerTick` (default 0.0005).</span> |
| <Link id="m-impactinvincibilitytime" /><code>{"private float ImpactInvincibilityTime"}</code> | <span className="api-desc">Mirrors `ServerSettings.ImpactInvincibilityTime` (1 to 30, default 12).</span> |
| <Link id="m-initialplayerinventory" /><code>{"private int InitialPlayerInventory"}</code> | <span className="api-desc">Mirrors `ServerSettings.InitialPlayerInventory`, stored as an int of `AvailablePlayerSaveData.Available`.</span> |
| <Link id="m-isadvancingtimewhenoffline" /><code>{"private bool IsAdvancingTimeWhenOffline"}</code> | <span className="api-desc">Mirrors `ServerSettings.IsAdvancingTimeWhenOffline`.</span> |
| <Link id="m-isautosaving" /><code>{"private bool IsAutoSaving"}</code> | <span className="api-desc">Mirrors `ServerSettings.IsAutoSaving`.</span> |
| <Link id="m-iscustomizationenabled" /><code>{"private bool IsCustomizationEnabled"}</code> | <span className="api-desc">Mirrors `ServerSettings.IsCustomizationEnabled`.</span> |
| <Link id="m-ispvpenabled" /><code>{"private bool IsPVPEnabled"}</code> | <span className="api-desc">Mirrors `ServerSettings.IsPVPEnabled`.</span> |
| <Link id="m-isresetinghungerondeath" /><code>{"private bool IsResetingHungerOnDeath"}</code> | <span className="api-desc">Mirrors `ServerSettings.IsResetingHungerOnDeath`.</span> |
| <Link id="m-issaving" /><code>{"private bool IsSaving"}</code> | <span className="api-desc">Mirrors `ServerSettings.IsSaving`.</span> |
| <Link id="m-isupdatingphysicsfixedframecount" /><code>{"private bool IsUpdatingPhysicsFixedFrameCount"}</code> | <span className="api-desc">Mirrors `ServerSettings.IsUpdatingPhysicsFixedFrameCount`.</span> |
| <Link id="m-maximumphysicsfixedframespersecond" /><code>{"private int MaximumPhysicsFixedFramesPerSecond"}</code> | <span className="api-desc">Mirrors `ServerSettings.MaximumPhysicsFixedFramesPerSecond` (default 45).</span> |
| <Link id="m-meleexpx" /><code>{"private float MeleeXPX"}</code> | <span className="api-desc">Mirrors `ServerSettings.MeleeXPX`, the melee XP multiplier.</span> |
| <Link id="m-minimumphysicsfixedframespersecond" /><code>{"private int MinimumPhysicsFixedFramesPerSecond"}</code> | <span className="api-desc">Mirrors `ServerSettings.MinimumPhysicsFixedFramesPerSecond` (default 15).</span> |
| <Link id="m-miningxpx" /><code>{"private float MiningXPX"}</code> | <span className="api-desc">Mirrors `ServerSettings.MiningXPX`, the mining XP multiplier.</span> |
| <Link id="m-minutesbetweenautosaving" /><code>{"private float MinutesBetweenAutoSaving"}</code> | <span className="api-desc">Mirrors `ServerSettings.MinutesBetweenAutoSaving` (default 5).</span> |
| <Link id="m-playerdamagetakenmultiplier" /><code>{"private float PlayerDamageTakenMultiplier"}</code> | <span className="api-desc">Mirrors `ServerSettings.PlayerDamageTakenMultiplier`.</span> |
| <Link id="m-playerlandmarkmode" /><code>{"private int PlayerLandmarkMode"}</code> | <span className="api-desc">Mirrors `ServerSettings.PlayerLandmarkMode`, stored as an int.</span> |
| <Link id="m-playerlimit" /><code>{"private int PlayerLimit"}</code> | <span className="api-desc">Mirrors `ServerSettings.PlayerLimit`; -1 by default.</span> |
| <Link id="m-playersmoothinglevel" /><code>{"private int PlayerSmoothingLevel"}</code> | <span className="api-desc">Mirrors `ServerSettings.PlayerSmoothingLevel`, stored as an int.</span> |
| <Link id="m-pvpcripplemultiplier" /><code>{"private float PVPCrippleMultiplier"}</code> | <span className="api-desc">Mirrors `ServerSettings.PVPCrippleMultiplier` (default 0.3).</span> |
| <Link id="m-pvpmultiplier" /><code>{"private float PVPMultiplier"}</code> | <span className="api-desc">Mirrors `ServerSettings.PVPMultiplier` (default 0.1).</span> |
| <Link id="m-rangedxpx" /><code>{"private float RangedXPX"}</code> | <span className="api-desc">Mirrors `ServerSettings.RangedXPX`, the ranged XP multiplier.</span> |
| <Link id="m-respawntimeseconds" /><code>{"private float RespawnTimeSeconds"}</code> | <span className="api-desc">Mirrors `ServerSettings.RespawnTimeSeconds` (default 4).</span> |
| <Link id="m-spawningratemultiplier" /><code>{"private float SpawningRateMultiplier"}</code> | <span className="api-desc">Mirrors `ServerSettings.SpawningRateMultiplier`.</span> |
| <Link id="m-timespeedmultiplier" /><code>{"private float TimeSpeedMultiplier"}</code> | <span className="api-desc">Mirrors `ServerSettings.TimeSpeedMultiplier`.</span> |
| <Link id="m-unspentexperiencelostondeath" /><code>{"private float UnspentExperienceLostOnDeath"}</code> | <span className="api-desc">Mirrors `ServerSettings.UnspentExperienceLostOnDeath`.</span> |
| <Link id="m-woodcuttingxpx" /><code>{"private float WoodcuttingXPX"}</code> | <span className="api-desc">Mirrors `ServerSettings.WoodcuttingXPX`, the woodcutting XP multiplier.</span> |
| <Link id="m-xpx" /><code>{"private float XPX"}</code> | <span className="api-desc">Mirrors `ServerSettings.XPX`, the general XP multiplier.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fromsettings" /><code>{"static "}<Link to="/mod/game-api/types/global-s/serializableserversettings">{"SerializableServerSettings"}</Link>{" FromSettings("}<Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Copies every synced value out of a `ServerSettings`, turning enums into ints.</span> |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes every field in a fixed order. Both sides must agree on that order.</span> |
| <Link id="m-tosettings" /><code><Link to="/mod/game-api/types/alta-utilities/serversettings">{"ServerSettings"}</Link>{" ToSettings()"}</code> | <span className="api-desc">Builds a `ServerSettings` from the fields, turning ints back into enums.</span> |
