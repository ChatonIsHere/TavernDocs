---
title: "DamageData"
description: "Information passed along with damage, currently just its source."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DamageData

A **class** in `Root.Township`, `Alta.Impact`.

Information passed along with damage, currently just its source. Given to `ReceiveDamage` and the `Killed` events.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Derived types** [`ImpactHit`](/mod/game-api/types/alta-items/impacthit)
- **Documented in** [Health and damage](/mod/game-api/items/health-and-damage#damagedata-and-damagesource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageData("}<Link to="/mod/game-api/types/alta-items/damagesource">{"DamageSource"}</Link>{" source)"}</code> | Creates a `DamageData` from `source`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-source" /><code><Link to="/mod/game-api/types/alta-items/damagesource">{"DamageSource"}</Link>{" Source { get; }"}</code> | What caused the damage, for example `DamageSource.AreaOfEffect`. |

## Used in

Members of other types that take, return or hold a `DamageData`:

[`HeatManager.damageData`](/mod/game-api/types/alta-stats-effects/heatmanager#m-damagedata), [`EmbeddableManager.HandleDeath`](/mod/game-api/types/alta-items/embeddablemanager#m-handledeath), [`Agent.HealthChanged`](/mod/game-api/types/alta-intelligence/agent#m-healthchanged), [`IndependentWalker.OnBaseKilled`](/mod/game-api/types/alta-intelligence/independentwalker#m-onbasekilled), [`DamageState.DamageImpact`](/mod/game-api/types/alta-player/damagestate#m-damageimpact), [`DamageState.Setup`](/mod/game-api/types/alta-player/damagestate#m-setup), [`DeadState.KillingImpact`](/mod/game-api/types/alta-player/deadstate#m-killingimpact), [`DownedState.KillingImpact`](/mod/game-api/types/alta-player/downedstate#m-killingimpact), [`KilledData.KilledData`](/mod/game-api/types/alta-player/killeddata#m-ctor), [`ObjectKilledData.ObjectKilledData`](/mod/game-api/types/alta-player/objectkilleddata#m-ctor), [`PlayerKilledData.PlayerKilledData`](/mod/game-api/types/alta-player/playerkilleddata#m-ctor), [`DownedToDeadTransition.HandleDeath`](/mod/game-api/types/alta-player/downedtodeadtransition#m-handledeath), [`DownedToDeadTransition.killingImpact`](/mod/game-api/types/alta-player/downedtodeadtransition#m-killingimpact), [`PlayingToDeadTransition.HandleDeath`](/mod/game-api/types/alta-player/playingtodeadtransition#m-handledeath), [`PlayingToDeadTransition.killingImpact`](/mod/game-api/types/alta-player/playingtodeadtransition#m-killingimpact), [`PlayingToDownedTransition.HandlePlayerDowned`](/mod/game-api/types/alta-player/playingtodownedtransition#m-handleplayerdowned), [`PlayingToDownedTransition.killingImpact`](/mod/game-api/types/alta-player/playingtodownedtransition#m-killingimpact), [`ToCombatTransition<TFrom>.CheckEnterCombat`](/mod/game-api/types/alta-player/tocombattransition-tfrom#m-checkentercombat), [`ReturnToMainMenuAction.PlayerDied`](/mod/game-api/types/alta-player/returntomainmenuaction#m-playerdied), [`SettingsQuickAccessMenu.PlayerDied`](/mod/game-api/types/alta-player/settingsquickaccessmenu#m-playerdied), [`HungerStat.hungerDamage`](/mod/game-api/types/alta-stats-effects/hungerstat#m-hungerdamage), [`PoisonStat.poisonDamage`](/mod/game-api/types/alta-stats-effects/poisonstat#m-poisondamage), [`TreeSpawner.BaseSplit`](/mod/game-api/types/alta-crafting/treespawner#m-basesplit), [`WoodcutTree.LastPieceChopped`](/mod/game-api/types/alta-crafting/woodcuttree#m-lastpiecechopped), [`BillboardToPlayer.PlayerKilled`](/mod/game-api/types/global-a-b/billboardtoplayer#m-playerkilled), [`FakePlayerHealth.ReceiveDamage`](/mod/game-api/types/global-e-h/fakeplayerhealth#m-receivedamage), [`HealthObject.Killed`](/mod/game-api/types/global-e-h/healthobject#m-killed), [`HealthObject.LastHit`](/mod/game-api/types/global-e-h/healthobject#m-lasthit), [`HealthObject.ReceiveDamage`](/mod/game-api/types/global-e-h/healthobject#m-receivedamage), [`HealthObject.DeathAnalytics.DeathAnalytics`](/mod/game-api/types/global-e-h/healthobject-deathanalytics#m-ctor), [`HealthObject.HealthChangedHandler.BeginInvoke`](/mod/game-api/types/global-e-h/healthobject-healthchangedhandler#m-begininvoke), [`HealthObject.HealthChangedHandler.Invoke`](/mod/game-api/types/global-e-h/healthobject-healthchangedhandler#m-invoke), [`PlayerEventsManager.Downed`](/mod/game-api/types/global-p/playereventsmanager#m-downed), [`PlayerEventsManager.Killed`](/mod/game-api/types/global-p/playereventsmanager#m-killed), [`PlayerEventsManager.OnDowned`](/mod/game-api/types/global-p/playereventsmanager#m-ondowned), [`PlayerEventsManager.OnHealthChanged`](/mod/game-api/types/global-p/playereventsmanager#m-onhealthchanged), [`PlayerEventsManager.OnKilled`](/mod/game-api/types/global-p/playereventsmanager#m-onkilled), [`PlayerHealth.CheckForDamage`](/mod/game-api/types/global-p/playerhealth#m-checkfordamage), [`PlayerHealth.Downed`](/mod/game-api/types/global-p/playerhealth#m-downed), [`PlayerHealth.ReceiveDamage`](/mod/game-api/types/global-p/playerhealth#m-receivedamage), [`PlayerProgressionManager.CharacterDied`](/mod/game-api/types/global-p/playerprogressionmanager#m-characterdied), [`Rock.KilledEffects`](/mod/game-api/types/global-q-r/rock#m-killedeffects), [`Rock.SpawnResources`](/mod/game-api/types/global-q-r/rock#m-spawnresources), [`SmoothLocomotion.DeadDisable`](/mod/game-api/types/global-s/smoothlocomotion#m-deaddisable).
