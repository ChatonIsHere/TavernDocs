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

| Member | What it is |
| --- | --- |
| <Link id="m-basesaturation" /><code>{"private float baseSaturation"}</code> | Unused saturation value (1). |
| <Link id="m-hungerblurcoroutine" /><code>{"private Coroutine hungerBlurCoroutine"}</code> | Running `BlurEffect`, or null. |
| <Link id="m-hungerstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" hungerStat"}</code> | The player's hunger stat, local player only. |
| <Link id="m-hurtvignette" /><code>{"private Coroutine hurtVignette"}</code> | Running `HurtVignette`, or null. |
| <Link id="m-isinvincibletoimpacts" /><code>{"private bool isInvincibleToImpacts"}</code> | Server: true during `GrantInvincibilityToImpacts`; impact damage is ignored. |
| <Link id="m-lasthungerlevel" /><code>{"private int lastHungerLevel"}</code> | Hunger level last seen by `UpdateHunger`. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | Backing field for `Player`. |
| <Link id="m-playercontrollermultilockmodel" /><code>{"private "}<Link to="/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel"}</code> | Injected model that says whether the player's controls are locked. |
| <Link id="m-playerdamagestate" /><code>{"private "}<Link to="/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" playerDamageState"}</code> | Server: reused state passed to `HandleDamage` handlers so they can block damage. |
| <Link id="m-postprocesscontroller" /><code>{"private IPostProcessController postProcessController"}</code> | Injected controller for blur, vignette and saturation. |
| <Link id="m-recentdamagestat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" recentDamageStat"}</code> | Server: stat set to 1 while the player was recently damaged. |
| <Link id="m-recentdamagetimer" /><code>{"private float recentDamageTimer"}</code> | Seconds left before the recent damage stat clears. |
| <Link id="m-recentdamagetimercoroutine" /><code>{"private Coroutine recentDamageTimerCoroutine"}</code> | Running `RecentDamageTimer`, or null. |
| <Link id="m-repeatblurry" /><code>{"private bool repeatBlurry"}</code> | True while the hunger blur should keep repeating. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/global-p/playerhealthvisualeffectssettings">{"PlayerHealthVisualEffectsSettings"}</Link>{" settings"}</code> | Visual effect settings: hunger, saturation, vignette and blur curves. |
| <Link id="m-visionsaturationlerp" /><code>{"private Coroutine visionSaturationLerp"}</code> | Running `SaturationLerp`, or null. |
| <Link id="m-woundedregencoroutine" /><code>{"private Coroutine woundedRegenCoroutine"}</code> | Declared but not used in this class. |

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

| Member | What it is |
| --- | --- |
| <Link id="m-blockdamageifcontrolsarelocked" /><code>{"private void BlockDamageIfControlsAreLocked("}<Link to="/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" damageState)"}</code> | Server: marks damage as handled (ignored) while the player's controls are locked. |
| <Link id="m-blureffect" /><code>{"private IEnumerator BlurEffect() (iterator)"}</code> | Client coroutine for hunger: blurs the screen corners with a curve and plays stomach rumbles, repeating while very hungry. |
| <Link id="m-checkfordamage" /><code>{"private void CheckForDamage("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float changeAmount, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | Server: on any health loss, sets the recent damage stat to 1 and restarts its cooldown timer. |
| <Link id="m-disableresetvisuals" /><code>{"private void DisableResetVisuals()"}</code> | Local player: stops the effect coroutines and resets post processing and the atmosphere. |
| <Link id="m-handlelocalplayerhit" /><code>{"private void HandleLocalPlayerHit("}<Link to="/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | Local player: records combat with another player in recent players when they hit you. |
| <Link id="m-hurtvignette-2" /><code>{"private IEnumerator HurtVignette() (iterator)"}</code> | Client coroutine that flashes the injured vignette along the settings curve, then clears it. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the immortals toggle and resets visuals. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Resets the local player's post-processing visuals. |
| <Link id="m-onlinkedtoplayer" /><code>{"private void OnLinkedToplayer()"}</code> | Local player only: hooks health and hunger to the screen effects and sets the starting saturation. |
| <Link id="m-recentdamagetimer-2" /><code>{"private IEnumerator RecentDamageTimer() (iterator)"}</code> | Server coroutine that counts down, then sets the recent damage stat back to 0. |
| <Link id="m-saturationlerp" /><code>{"private IEnumerator SaturationLerp(float saturationTarget) (iterator)"}</code> | Client coroutine that eases the screen colour saturation to a target. |
| <Link id="m-stopblur" /><code>{"private void StopBlur()"}</code> | Lets the hunger blur finish its current cycle and stop. |
| <Link id="m-toggleimmortals" /><code>{"private void ToggleImmortals(bool arePlayersImmortal)"}</code> | Handles the `immortals` toggle: sets the health minimum to the maximum (no damage) or back to 0. |
| <Link id="m-updatehunger" /><code>{"private void UpdateHunger("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Starts or stops the hunger blur when the hunger level changes. |
| <Link id="m-updatevisuals" /><code>{"private void UpdateVisuals("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | On health loss plays the hurt vignette; always updates saturation from the health curve. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerHealth`:

[`PlayerCharacter.Health`](/game-api/types/alta-player/playercharacter#m-health), [`SpiritState.playerHealth`](/game-api/types/alta-player/spiritstate#m-playerhealth).
