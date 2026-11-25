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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Derived types** [`ImpactHit`](/game-api/types/alta-items/impacthit)
- **Documented in** [Health and damage](/game-api/items/health-and-damage#damagedata-and-damagesource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DamageData("}<Link to="/game-api/types/alta-items/damagesource">{"DamageSource"}</Link>{" source)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-source" /><code><Link to="/game-api/types/alta-items/damagesource">{"DamageSource"}</Link>{" Source { get; }"}</code> | What caused the damage, for example `DamageSource.AreaOfEffect`. |

## Used in

Members of other types that take, return or hold a `DamageData`:

[`HeatManager.damageData`](/game-api/types/alta-stats-effects/heatmanager#m-damagedata), [`EmbeddableManager.HandleDeath`](/game-api/types/alta-items/embeddablemanager#m-handledeath), [`Agent.HealthChanged`](/game-api/types/alta-intelligence/agent#m-healthchanged), [`IndependentWalker.OnBaseKilled`](/game-api/types/alta-intelligence/independentwalker#m-onbasekilled), [`DamageState.DamageImpact`](/game-api/types/alta-player/damagestate#m-damageimpact), [`DamageState.Setup`](/game-api/types/alta-player/damagestate#m-setup), [`DeadState.KillingImpact`](/game-api/types/alta-player/deadstate#m-killingimpact), [`DownedState.KillingImpact`](/game-api/types/alta-player/downedstate#m-killingimpact), [`KilledData.KilledData`](/game-api/types/alta-player/killeddata#m-ctor), [`ObjectKilledData.ObjectKilledData`](/game-api/types/alta-player/objectkilleddata#m-ctor), [`PlayerKilledData.PlayerKilledData`](/game-api/types/alta-player/playerkilleddata#m-ctor), [`DownedToDeadTransition.HandleDeath`](/game-api/types/alta-player/downedtodeadtransition#m-handledeath), [`DownedToDeadTransition.killingImpact`](/game-api/types/alta-player/downedtodeadtransition#m-killingimpact), [`PlayingToDeadTransition.HandleDeath`](/game-api/types/alta-player/playingtodeadtransition#m-handledeath), [`PlayingToDeadTransition.killingImpact`](/game-api/types/alta-player/playingtodeadtransition#m-killingimpact), [`PlayingToDownedTransition.HandlePlayerDowned`](/game-api/types/alta-player/playingtodownedtransition#m-handleplayerdowned), [`PlayingToDownedTransition.killingImpact`](/game-api/types/alta-player/playingtodownedtransition#m-killingimpact), [`ToCombatTransition<TFrom>.CheckEnterCombat`](/game-api/types/alta-player/tocombattransition-tfrom#m-checkentercombat), [`ReturnToMainMenuAction.PlayerDied`](/game-api/types/alta-player/returntomainmenuaction#m-playerdied), [`SettingsQuickAccessMenu.PlayerDied`](/game-api/types/alta-player/settingsquickaccessmenu#m-playerdied), [`HungerStat.hungerDamage`](/game-api/types/alta-stats-effects/hungerstat#m-hungerdamage), [`PoisonStat.poisonDamage`](/game-api/types/alta-stats-effects/poisonstat#m-poisondamage), [`TreeSpawner.BaseSplit`](/game-api/types/alta-crafting/treespawner#m-basesplit), [`WoodcutTree.LastPieceChopped`](/game-api/types/alta-crafting/woodcuttree#m-lastpiecechopped), [`BillboardToPlayer.PlayerKilled`](/game-api/types/global-a-b/billboardtoplayer#m-playerkilled), [`FakePlayerHealth.ReceiveDamage`](/game-api/types/global-e-h/fakeplayerhealth#m-receivedamage), [`HealthObject.Killed`](/game-api/types/global-e-h/healthobject#m-killed), [`HealthObject.LastHit`](/game-api/types/global-e-h/healthobject#m-lasthit), [`HealthObject.ReceiveDamage`](/game-api/types/global-e-h/healthobject#m-receivedamage), [`HealthObject.DeathAnalytics.DeathAnalytics`](/game-api/types/global-e-h/healthobject-deathanalytics#m-ctor), [`HealthObject.HealthChangedHandler.BeginInvoke`](/game-api/types/global-e-h/healthobject-healthchangedhandler#m-begininvoke), [`HealthObject.HealthChangedHandler.Invoke`](/game-api/types/global-e-h/healthobject-healthchangedhandler#m-invoke), [`PlayerEventsManager.Downed`](/game-api/types/global-p/playereventsmanager#m-downed), [`PlayerEventsManager.Killed`](/game-api/types/global-p/playereventsmanager#m-killed), [`PlayerEventsManager.OnDowned`](/game-api/types/global-p/playereventsmanager#m-ondowned), [`PlayerEventsManager.OnHealthChanged`](/game-api/types/global-p/playereventsmanager#m-onhealthchanged), [`PlayerEventsManager.OnKilled`](/game-api/types/global-p/playereventsmanager#m-onkilled), [`PlayerHealth.CheckForDamage`](/game-api/types/global-p/playerhealth#m-checkfordamage), [`PlayerHealth.Downed`](/game-api/types/global-p/playerhealth#m-downed), [`PlayerHealth.ReceiveDamage`](/game-api/types/global-p/playerhealth#m-receivedamage), [`PlayerProgressionManager.CharacterDied`](/game-api/types/global-p/playerprogressionmanager#m-characterdied), [`Rock.KilledEffects`](/game-api/types/global-q-r/rock#m-killedeffects), [`Rock.SpawnResources`](/game-api/types/global-q-r/rock#m-spawnresources), [`SmoothLocomotion.DeadDisable`](/game-api/types/global-s/smoothlocomotion#m-deaddisable).
