---
title: "PlayerHealth"
description: "A player's health."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerHealth

A **class** in `Root.Township`, the global namespace.

A player's health. The server applies PvP, damage multiplier and immortality rules; reaching zero health downs the player instead of killing them. The local client shows hurt, hunger and nightmare effects.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`HealthObject`](/mod/game-api/types/global-e-h/healthobject)
- **Documented in** [Health and damage](/mod/game-api/items/health-and-damage#playerhealth)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerHealth()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-areplayersavoidingdamage" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/togglebool">{"ToggleBool"}</Link>{" ArePlayersAvoidingDamage"}</code> | <span className="api-desc">The `immortals` toggle. While on, players' health can't drop below its maximum.</span> |

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basesaturation" /><code>{"private float baseSaturation"}</code> | <span className="api-desc">Unused saturation value (1).</span> |
| <Link id="m-hungerblurcoroutine" /><code>{"private Coroutine hungerBlurCoroutine"}</code> | <span className="api-desc">Running `BlurEffect`, or null.</span> |
| <Link id="m-hungerstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" hungerStat"}</code> | <span className="api-desc">The player's hunger stat, local player only.</span> |
| <Link id="m-hurtvignette" /><code>{"private Coroutine hurtVignette"}</code> | <span className="api-desc">Running `HurtVignette`, or null.</span> |
| <Link id="m-isinvincibletoimpacts" /><code>{"private bool isInvincibleToImpacts"}</code> | <span className="api-desc">Server: true during `GrantInvincibilityToImpacts`; impact damage is ignored.</span> |
| <Link id="m-lasthungerlevel" /><code>{"private int lastHungerLevel"}</code> | <span className="api-desc">Hunger level last seen by `UpdateHunger`.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | <span className="api-desc">Backing field for `Player`.</span> |
| <Link id="m-playercontrollermultilockmodel" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel"}</code> | <span className="api-desc">Injected model that says whether the player's controls are locked.</span> |
| <Link id="m-playerdamagestate" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" playerDamageState"}</code> | <span className="api-desc">Server: reused state passed to `HandleDamage` handlers so they can block damage.</span> |
| <Link id="m-postprocesscontroller" /><code>{"private IPostProcessController postProcessController"}</code> | <span className="api-desc">Injected controller for blur, vignette and saturation.</span> |
| <Link id="m-recentdamagestat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" recentDamageStat"}</code> | <span className="api-desc">Server: stat set to 1 while the player was recently damaged.</span> |
| <Link id="m-recentdamagetimer" /><code>{"private float recentDamageTimer"}</code> | <span className="api-desc">Seconds left before the recent damage stat clears.</span> |
| <Link id="m-recentdamagetimercoroutine" /><code>{"private Coroutine recentDamageTimerCoroutine"}</code> | <span className="api-desc">Running `RecentDamageTimer`, or null.</span> |
| <Link id="m-repeatblurry" /><code>{"private bool repeatBlurry"}</code> | <span className="api-desc">True while the hunger blur should keep repeating.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerhealthvisualeffectssettings">{"PlayerHealthVisualEffectsSettings"}</Link>{" settings"}</code> | <span className="api-desc">Visual effect settings: hunger, saturation, vignette and blur curves.</span> |
| <Link id="m-visionsaturationlerp" /><code>{"private Coroutine visionSaturationLerp"}</code> | <span className="api-desc">Running `SaturationLerp`, or null.</span> |
| <Link id="m-woundedregencoroutine" /><code>{"private Coroutine woundedRegenCoroutine"}</code> | <span className="api-desc">Declared but not used in this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player-2" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" Player { get; }"}</code> | <span className="api-desc">The player controller this health belongs to.</span> |
| <Link id="m-analyticsrecord" /><code>{"protected override "}<Link to="/mod/game-api/types/global-e-h/healthobject-deathanalytics">{"HealthObject.DeathAnalytics"}</Link>{" AnalyticsRecord { get; }"}</code> | <span className="api-desc">A death analytics record with the player's name, last hit and position.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-downed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{"> Downed"}</code> | <span className="api-desc">Raised with the last hit when the player is downed.</span> |
| <Link id="m-handledamage" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{"> HandleDamage"}</code> | <span className="api-desc">Server: raised before damage is applied. Mark the state handled to block the damage.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-grantinvincibilitytoimpacts" /><code>{"async void GrantInvincibilityToImpacts(float invincibilityTimeInSeconds)"}</code> | <span className="api-desc">Server: ignores impact damage for a number of seconds.</span> |
| <Link id="m-ondowned" /><code>{"void OnDowned()"}</code> | <span className="api-desc">Raises `Downed`.</span> |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float healthDamage, float crippleDamage, "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact = null)"}</code> | <span className="api-desc">Server: applies damage unless blocked, dead, ignoring damage or invincible. Player hits need PvP on and use the PvP multipliers.</span> |
| <Link id="m-setowner" /><code>{"void SetOwner("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Sets the player controller.</span> |
| <Link id="m-stopplayereffects" /><code>{"void StopPlayerEffects()"}</code> | <span className="api-desc">Client: sets the dead colour saturation and stops the hunger blur.</span> |
| <Link id="m-updatesaturation" /><code>{"void UpdateSaturation(float saturationTarget)"}</code> | <span className="api-desc">Client: fades the screen colour saturation to a value.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Sets up local player effects once linked to the local player.</span> |
| <Link id="m-handleobjectreachedzerohealth" /><code>{"protected override void HandleObjectReachedZeroHealth()"}</code> | <span className="api-desc">Downs the player instead of the default death.</span> |
| <Link id="m-inject" /><code>{"protected void Inject(IPostProcessController postProcessController, "}<Link to="/mod/game-api/types/global-i-l/iplayercontrollermultilockmodel">{"IPlayerControllerMultiLockModel"}</Link>{" playerControllerMultiLockModel)"}</code> | <span className="api-desc">Receives the post processing and controller lock services by injection.</span> |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | <span className="api-desc">Server: sets up the recent damage stat, immortals toggle and the block while controls are locked.</span> |

<details className="api-private">
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blockdamageifcontrolsarelocked" /><code>{"private void BlockDamageIfControlsAreLocked("}<Link to="/mod/game-api/types/alta-player/damagestate">{"DamageState"}</Link>{" damageState)"}</code> | <span className="api-desc">Server: marks damage as handled (ignored) while the player's controls are locked.</span> |
| <Link id="m-blureffect" /><code>{"private IEnumerator BlurEffect() (iterator)"}</code> | <span className="api-desc">Client coroutine for hunger: blurs the screen corners with a curve and plays stomach rumbles, repeating while very hungry.</span> |
| <Link id="m-checkfordamage" /><code>{"private void CheckForDamage("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" healthObject, float changeAmount, "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" impact)"}</code> | <span className="api-desc">Server: on any health loss, sets the recent damage stat to 1 and restarts its cooldown timer.</span> |
| <Link id="m-disableresetvisuals" /><code>{"private void DisableResetVisuals()"}</code> | <span className="api-desc">Local player: stops the effect coroutines and resets post processing and the atmosphere.</span> |
| <Link id="m-handlelocalplayerhit" /><code>{"private void HandleLocalPlayerHit("}<Link to="/mod/game-api/types/alta-items/impacthit">{"ImpactHit"}</Link>{" impact)"}</code> | <span className="api-desc">Local player: records combat with another player in recent players when they hit you.</span> |
| <Link id="m-hurtvignette-2" /><code>{"private IEnumerator HurtVignette() (iterator)"}</code> | <span className="api-desc">Client coroutine that flashes the injured vignette along the settings curve, then clears it.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the immortals toggle and resets visuals.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Resets the local player's post-processing visuals.</span> |
| <Link id="m-onlinkedtoplayer" /><code>{"private void OnLinkedToplayer()"}</code> | <span className="api-desc">Local player only: hooks health and hunger to the screen effects and sets the starting saturation.</span> |
| <Link id="m-recentdamagetimer-2" /><code>{"private IEnumerator RecentDamageTimer() (iterator)"}</code> | <span className="api-desc">Server coroutine that counts down, then sets the recent damage stat back to 0.</span> |
| <Link id="m-saturationlerp" /><code>{"private IEnumerator SaturationLerp(float saturationTarget) (iterator)"}</code> | <span className="api-desc">Client coroutine that eases the screen colour saturation to a target.</span> |
| <Link id="m-stopblur" /><code>{"private void StopBlur()"}</code> | <span className="api-desc">Lets the hunger blur finish its current cycle and stop.</span> |
| <Link id="m-toggleimmortals" /><code>{"private void ToggleImmortals(bool arePlayersImmortal)"}</code> | <span className="api-desc">Handles the `immortals` toggle: sets the health minimum to the maximum (no damage) or back to 0.</span> |
| <Link id="m-updatehunger" /><code>{"private void UpdateHunger("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Starts or stops the hunger blur when the hunger level changes.</span> |
| <Link id="m-updatevisuals" /><code>{"private void UpdateVisuals("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">On health loss plays the hurt vignette; always updates saturation from the health curve.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerHealth`:

<div className="api-used-in">

[`PlayerCharacter.Health`](/mod/game-api/types/alta-player/playercharacter#m-health), [`SpiritState.playerHealth`](/mod/game-api/types/alta-player/spiritstate#m-playerhealth).

</div>
