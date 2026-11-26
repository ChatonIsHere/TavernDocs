---
title: "StatBarVisibilityGroup"
description: "Client: a group of stat bars on the local player's body that turns to face the camera and fades in when looked at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBarVisibilityGroup

A **class** in `Root.Township`, `Alta.StatSystem`.

Client: a group of stat bars on the local player's body that turns to face the camera and fades in when looked at. Forced visible in combat and hidden while downed; destroyed on remote players and on death.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatBarVisibilityGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphalimit" /><code>{"private readonly int _AlphaLimit"}</code> | <span className="api-desc">Shader property ID for `_AlphaLimit`.</span> |
| <Link id="m-alpha" /><code>{"private float alpha"}</code> | <span className="api-desc">Backing field for `Alpha`.</span> |
| <Link id="m-alphalerpspeed" /><code>{"private float alphaLerpSpeed"}</code> | <span className="api-desc">How fast alpha fades per second.</span> |
| <Link id="m-bars" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] bars"}</code> | <span className="api-desc">Stat bars in this group.</span> |
| <Link id="m-barsparent" /><code>{"private Transform barsParent"}</code> | <span className="api-desc">Runtime parent object the bars are moved under.</span> |
| <Link id="m-bodytypescaling" /><code>{"private Transform[] bodyTypeScaling"}</code> | <span className="api-desc">Transforms scaled to match the character's body type.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached transform of this object.</span> |
| <Link id="m-cameratarget" /><code>{"private Transform cameraTarget"}</code> | <span className="api-desc">The local player's camera transform.</span> |
| <Link id="m-gauntletoffset" /><code>{"private float gauntletOffset"}</code> | <span className="api-desc">Serialized forward offset for the bars. Not used by `UpdateGauntlet` in this build.</span> |
| <Link id="m-isdowned" /><code>{"private bool isDowned"}</code> | <span className="api-desc">True while the player is in the downed state.</span> |
| <Link id="m-isincombat" /><code>{"private bool isInCombat"}</code> | <span className="api-desc">True while the player is in the combat state.</span> |
| <Link id="m-islookingat" /><code>{"private bool isLookingAt"}</code> | <span className="api-desc">Whether the player is currently looking at the bars.</span> |
| <Link id="m-lookatleniency" /><code>{"private float lookAtLeniency"}</code> | <span className="api-desc">Dot threshold above which the bars count as looked at.</span> |
| <Link id="m-lookawayleniency" /><code>{"private float lookAwayLeniency"}</code> | <span className="api-desc">Dot threshold below which the bars stop counting as looked at.</span> |
| <Link id="m-notchesbasematerial" /><code>{"private Material notchesBaseMaterial"}</code> | <span className="api-desc">Notch material cloned on Android so its alpha can be set.</span> |
| <Link id="m-notchesmaterial" /><code>{"private Material notchesMaterial"}</code> | <span className="api-desc">Android-only clone of the notch material.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | <span className="api-desc">The player controller these bars belong to.</span> |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | <span className="api-desc">Maximum rotation step per frame toward the camera. 0 turns facing off.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alpha-2" /><code>{"float Alpha { get; set; }"}</code> | <span className="api-desc">Group opacity, pushed to every bar. Ignored while in combat or downed.</span> |
| <Link id="m-statmanager" /><code><Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" { get; }"}</code> | <span className="api-desc">Stat manager of the player's health object.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canupdatealpha" /><code>{"private bool CanUpdateAlpha { get; }"}</code> | <span className="api-desc">True unless the player is in combat or downed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pingstatbars" /><code>{"void PingStatBars(float duration)"}</code> | <span className="api-desc">Pings every bar for the given duration.</span> |

<details className="api-private">
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignwithvision" /><code>{"private void AlignWithVision(bool isLerping, Vector3 right, Quaternion currentRotation)"}</code> | <span className="api-desc">Rotates the group around its right axis to face the camera, optionally limited by `rotationSpeed`.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hides the group and waits for the local player to be set before initializing.</span> |
| <Link id="m-checkcombatstate" /><code>{"private void CheckCombatState("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">On entering the combat state, shows the bars fully and locks alpha.</span> |
| <Link id="m-checkdownedstate" /><code>{"private void CheckDownedState("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">On entering the downed state, hides the bars and locks alpha.</span> |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | <span className="api-desc">Once the local player is set: destroys itself if not on the local player, otherwise parents and initializes the bars and hooks death, player state and body type events.</span> |
| <Link id="m-isskippingupdateduetolackofinputfocusonquest" /><code>{"private bool IsSkippingUpdateDueToLackOfInputFocusOnQuest()"}</code> | <span className="api-desc">On Quest, hides the bars and skips the update when the app has lost input focus.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Faces the camera and fades alpha in or out depending on whether the player is looking at the bars.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the local player, death and player state events.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Grabs the local camera, snaps to face it and resets alpha. Disables itself if there is no camera.</span> |
| <Link id="m-onstateactivated" /><code>{"private void OnStateActivated("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">Player state handler that runs the combat and downed checks.</span> |
| <Link id="m-onstatedeactivated" /><code>{"private void OnStateDeactivated("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">Clears the combat or downed flag when that state ends.</span> |
| <Link id="m-playerdeath" /><code>{"private void PlayerDeath("}<Link to="/mod/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" health)"}</code> | <span className="api-desc">Disables all bars and destroys the group.</span> |
| <Link id="m-setupscaling" /><code>{"private void SetupScaling(float scaleFactor)"}</code> | <span className="api-desc">Scales the body type transforms by the body type's stat bar distance ratio.</span> |
| <Link id="m-updategauntlet" /><code>{"private void UpdateGauntlet()"}</code> | <span className="api-desc">Resets the bars parent's forward offset. The offset is always 0 in this build.</span> |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(bool isVisible)"}</code> | <span className="api-desc">Bar visibility handler: enables the group when any bar shows, disables it when none are enabled.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StatBarVisibilityGroup`:

<div className="api-used-in">

[`StatBarBase.visibilityGroup`](/mod/game-api/types/alta-stats-effects/statbarbase#m-visibilitygroup), [`PlayerSpecialEffectsController.statBars`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-statbars).

</div>
