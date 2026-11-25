---
title: "PlayerHealth"
description: "A player's health."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerHealth

A **class** in `Root.Township`, no namespace.

A player's health. The server applies PvP, damage multiplier and immortality rules; reaching zero health downs the player instead of killing them. The local client shows hurt, hunger and nightmare effects.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`HealthObject`](/game-api/types/global-e-h/healthobject)
- **Documented in** [Health and damage](/game-api/items/health-and-damage#playerhealth)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerHealth()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-areplayersavoidingdamage" /><code>{"static "}<Link to="/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{" ArePlayersAvoidingDamage"}</code> | The `immortals` toggle. While on, players' health can't drop below its maximum. |

<details>
<summary>17 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-basesaturation" /><code>{"private float baseSaturation"}</code> |
| <Link id="m-hungerblurcoroutine" /><code>{"private Coroutine hungerBlurCoroutine"}</code> |
| <Link id="m-hungerstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" hungerStat"}</code> |
| <Link id="m-hurtvignette" /><code>{"private Coroutine hurtVignette"}</code> |
| <Link id="m-isinvincibletoimpacts" /><code>{"private bool isInvincibleToImpacts"}</code> |
| <Link id="m-lasthungerlevel" /><code>{"private int lastHungerLevel"}</code> |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> |
| <Link id="m-playercontrollermultilockmodel" /><code>{"private "}<Link to="/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel"}</code> |
| <Link id="m-playerdamagestate" /><code>{"private "}<Link to="/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" playerDamageState"}</code> |
| <Link id="m-postprocesscontroller" /><code>{"private IPostProcessController postProcessController"}</code> |
| <Link id="m-recentdamagestat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" recentDamageStat"}</code> |
| <Link id="m-recentdamagetimer" /><code>{"private float recentDamageTimer"}</code> |
| <Link id="m-recentdamagetimercoroutine" /><code>{"private Coroutine recentDamageTimerCoroutine"}</code> |
| <Link id="m-repeatblurry" /><code>{"private bool repeatBlurry"}</code> |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-p/playerhealthvisualeffectssettings">{"PlayerHealthVisualEffectsSettings"}</Link>{" settings"}</code> |
| <Link id="m-visionsaturationlerp" /><code>{"private Coroutine visionSaturationLerp"}</code> |
| <Link id="m-woundedregencoroutine" /><code>{"private Coroutine woundedRegenCoroutine"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Player { get; }"}</code> | The player controller this health belongs to. |
| <Link id="m-analyticsrecord" /><code>{"protected override "}<Link to="/game-api/types/global-e-h/healthobject-deathanalytics">{"HealthObject.DeathAnalytics"}</Link>{" AnalyticsRecord { get; }"}</code> | A death analytics record with the player's name, last hit and position. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-downed" /><code>{"event Action<"}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{"> Downed"}</code> | Raised with the last hit when the player is downed. |
| <Link id="m-handledamage" /><code>{"event Action<"}<Link to="/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{"> HandleDamage"}</code> | Server: raised before damage is applied. Mark the state handled to block the damage. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-grantinvincibilitytoimpacts" /><code>{"async void GrantInvincibilityToImpacts(float invincibilityTimeInSeconds)"}</code> | Server: ignores impact damage for a number of seconds. |
| <Link id="m-ondowned" /><code>{"void OnDowned()"}</code> | Raises `Downed`. |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float healthDamage, float crippleDamage, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact = null)"}</code> | Server: applies damage unless blocked, dead, ignoring damage or invincible. Player hits need PvP on and use the PvP multipliers. |
| <Link id="m-setowner" /><code>{"void SetOwner("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Sets the player controller. |
| <Link id="m-stopplayereffects" /><code>{"void StopPlayerEffects()"}</code> | Client: sets the dead colour saturation and stops the hunger blur. |
| <Link id="m-updatesaturation" /><code>{"void UpdateSaturation(float saturationTarget)"}</code> | Client: fades the screen colour saturation to a value. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Sets up local player effects once linked to the local player. |
| <Link id="m-handleobjectreachedzerohealth" /><code>{"protected override void HandleObjectReachedZeroHealth()"}</code> | Downs the player instead of the default death. |
| <Link id="m-inject" /><code>{"protected void Inject(IPostProcessController postProcessController, "}<Link to="/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel)"}</code> | Receives the post processing and controller lock services by injection. |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | Server: sets up the recent damage stat, immortals toggle and the block while controls are locked. |

<details>
<summary>15 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-blockdamageifcontrolsarelocked" /><code>{"private void BlockDamageIfControlsAreLocked("}<Link to="/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" damageState)"}</code> |
| <Link id="m-blureffect" /><code>{"private IEnumerator BlurEffect() (iterator)"}</code> |
| <Link id="m-checkfordamage" /><code>{"private void CheckForDamage("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float changeAmount, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> |
| <Link id="m-disableresetvisuals" /><code>{"private void DisableResetVisuals()"}</code> |
| <Link id="m-handlelocalplayerhit" /><code>{"private void HandleLocalPlayerHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> |
| <Link id="m-hurtvignette-2" /><code>{"private IEnumerator HurtVignette() (iterator)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |
| <Link id="m-onlinkedtoplayer" /><code>{"private void OnLinkedToplayer()"}</code> |
| <Link id="m-recentdamagetimer-2" /><code>{"private IEnumerator RecentDamageTimer() (iterator)"}</code> |
| <Link id="m-saturationlerp" /><code>{"private IEnumerator SaturationLerp(float saturationTarget) (iterator)"}</code> |
| <Link id="m-stopblur" /><code>{"private void StopBlur()"}</code> |
| <Link id="m-toggleimmortals" /><code>{"private void ToggleImmortals(bool arePlayersImmortal)"}</code> |
| <Link id="m-updatehunger" /><code>{"private void UpdateHunger("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |
| <Link id="m-updatevisuals" /><code>{"private void UpdateVisuals("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerHealth`:

[`PlayerCharacter.Health`](/game-api/types/alta-player/playercharacter#m-health), [`SpiritState.playerHealth`](/game-api/types/alta-player/spiritstate#m-playerhealth).
