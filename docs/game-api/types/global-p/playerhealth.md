---
title: "PlayerHealth"
description: "PlayerHealth : HealthObject, no namespace. Get it with playerCharacter.Health (typed PlayerHealth) or playerController.Health as PlayerHealth."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerHealth

A **class** in `Root.Township`, no namespace.

`PlayerHealth : HealthObject`, no namespace. Get it with `playerCharacter.Health` (typed `PlayerHealth`) or `playerController.Health as PlayerHealth`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`HealthObject`](/game-api/types/global-e-h/healthobject)
- **Documented in** [Health and damage](/game-api/items/health-and-damage#playerhealth)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerHealth()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-areplayersavoidingdamage" /><code>{"static "}<Link to="/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{" ArePlayersAvoidingDamage"}</code> |  |
| <Link id="m-basesaturation" /><code>{"private float baseSaturation"}</code> |  |
| <Link id="m-hungerblurcoroutine" /><code>{"private Coroutine hungerBlurCoroutine"}</code> |  |
| <Link id="m-hungerstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" hungerStat"}</code> |  |
| <Link id="m-hurtvignette" /><code>{"private Coroutine hurtVignette"}</code> |  |
| <Link id="m-isinvincibletoimpacts" /><code>{"private bool isInvincibleToImpacts"}</code> |  |
| <Link id="m-lasthungerlevel" /><code>{"private int lastHungerLevel"}</code> |  |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> |  |
| <Link id="m-playercontrollermultilockmodel" /><code>{"private "}<Link to="/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel"}</code> |  |
| <Link id="m-playerdamagestate" /><code>{"private "}<Link to="/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" playerDamageState"}</code> |  |
| <Link id="m-postprocesscontroller" /><code>{"private IPostProcessController postProcessController"}</code> |  |
| <Link id="m-recentdamagestat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" recentDamageStat"}</code> |  |
| <Link id="m-recentdamagetimer" /><code>{"private float recentDamageTimer"}</code> |  |
| <Link id="m-recentdamagetimercoroutine" /><code>{"private Coroutine recentDamageTimerCoroutine"}</code> |  |
| <Link id="m-repeatblurry" /><code>{"private bool repeatBlurry"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-p/playerhealthvisualeffectssettings">{"PlayerHealthVisualEffectsSettings"}</Link>{" settings"}</code> |  |
| <Link id="m-visionsaturationlerp" /><code>{"private Coroutine visionSaturationLerp"}</code> |  |
| <Link id="m-woundedregencoroutine" /><code>{"private Coroutine woundedRegenCoroutine"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Player { get; }"}</code> |  |
| <Link id="m-analyticsrecord" /><code>{"protected override "}<Link to="/game-api/types/global-e-h/healthobject-deathanalytics">{"HealthObject.DeathAnalytics"}</Link>{" AnalyticsRecord { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-downed" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{"> Downed"}</code> |  |
| <Link id="m-handledamage" /><code>{"event Action<"}<Link to="/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{"> HandleDamage"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-grantinvincibilitytoimpacts" /><code>{"async void GrantInvincibilityToImpacts(float invincibilityTimeInSeconds)"}</code> |  |
| <Link id="m-ondowned" /><code>{"void OnDowned()"}</code> |  |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float healthDamage, float crippleDamage, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact = null)"}</code> |  |
| <Link id="m-setowner" /><code>{"void SetOwner("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-stopplayereffects" /><code>{"void StopPlayerEffects()"}</code> |  |
| <Link id="m-updatesaturation" /><code>{"void UpdateSaturation(float saturationTarget)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-blockdamageifcontrolsarelocked" /><code>{"private void BlockDamageIfControlsAreLocked("}<Link to="/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" damageState)"}</code> |  |
| <Link id="m-blureffect" /><code>{"private IEnumerator BlurEffect() (iterator)"}</code> |  |
| <Link id="m-checkfordamage" /><code>{"private void CheckForDamage("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float changeAmount, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> |  |
| <Link id="m-disableresetvisuals" /><code>{"private void DisableResetVisuals()"}</code> |  |
| <Link id="m-handlelocalplayerhit" /><code>{"private void HandleLocalPlayerHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |  |
| <Link id="m-handleobjectreachedzerohealth" /><code>{"protected override void HandleObjectReachedZeroHealth()"}</code> |  |
| <Link id="m-hurtvignette-2" /><code>{"private IEnumerator HurtVignette() (iterator)"}</code> |  |
| <Link id="m-inject" /><code>{"protected void Inject(IPostProcessController postProcessController, "}<Link to="/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onlinkedtoplayer" /><code>{"private void OnLinkedToplayer()"}</code> |  |
| <Link id="m-recentdamagetimer-2" /><code>{"private IEnumerator RecentDamageTimer() (iterator)"}</code> |  |
| <Link id="m-saturationlerp" /><code>{"private IEnumerator SaturationLerp(float saturationTarget) (iterator)"}</code> |  |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> |  |
| <Link id="m-stopblur" /><code>{"private void StopBlur()"}</code> |  |
| <Link id="m-toggleimmortals" /><code>{"private void ToggleImmortals(bool arePlayersImmortal)"}</code> |  |
| <Link id="m-updatehunger" /><code>{"private void UpdateHunger("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-updatevisuals" /><code>{"private void UpdateVisuals("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerHealth`:

[`PlayerCharacter.Health`](/game-api/types/alta-player/playercharacter#m-health), [`SpiritState.playerHealth`](/game-api/types/alta-player/spiritstate#m-playerhealth).
