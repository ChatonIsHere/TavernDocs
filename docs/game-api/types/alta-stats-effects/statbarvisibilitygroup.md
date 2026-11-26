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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatBarVisibilityGroup()"}</code> |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alphalimit" /><code>{"private readonly int _AlphaLimit"}</code> | Shader property ID for `_AlphaLimit`. |
| <Link id="m-alpha" /><code>{"private float alpha"}</code> | Backing field for `Alpha`. |
| <Link id="m-alphalerpspeed" /><code>{"private float alphaLerpSpeed"}</code> | How fast alpha fades per second. |
| <Link id="m-bars" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] bars"}</code> | Stat bars in this group. |
| <Link id="m-barsparent" /><code>{"private Transform barsParent"}</code> | Runtime parent object the bars are moved under. |
| <Link id="m-bodytypescaling" /><code>{"private Transform[] bodyTypeScaling"}</code> | Transforms scaled to match the character's body type. |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | Cached transform of this object. |
| <Link id="m-cameratarget" /><code>{"private Transform cameraTarget"}</code> | The local player's camera transform. |
| <Link id="m-gauntletoffset" /><code>{"private float gauntletOffset"}</code> | Serialized forward offset for the bars. Not used by `UpdateGauntlet` in this build. |
| <Link id="m-isdowned" /><code>{"private bool isDowned"}</code> | True while the player is in the downed state. |
| <Link id="m-isincombat" /><code>{"private bool isInCombat"}</code> | True while the player is in the combat state. |
| <Link id="m-islookingat" /><code>{"private bool isLookingAt"}</code> | Whether the player is currently looking at the bars. |
| <Link id="m-lookatleniency" /><code>{"private float lookAtLeniency"}</code> | Dot threshold above which the bars count as looked at. |
| <Link id="m-lookawayleniency" /><code>{"private float lookAwayLeniency"}</code> | Dot threshold below which the bars stop counting as looked at. |
| <Link id="m-notchesbasematerial" /><code>{"private Material notchesBaseMaterial"}</code> | Notch material cloned on Android so its alpha can be set. |
| <Link id="m-notchesmaterial" /><code>{"private Material notchesMaterial"}</code> | Android-only clone of the notch material. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> | The player controller these bars belong to. |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> | Maximum rotation step per frame toward the camera. 0 turns facing off. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alpha-2" /><code>{"float Alpha { get; set; }"}</code> | Group opacity, pushed to every bar. Ignored while in combat or downed. |
| <Link id="m-statmanager" /><code><Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" { get; }"}</code> | Stat manager of the player's health object. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canupdatealpha" /><code>{"private bool CanUpdateAlpha { get; }"}</code> | True unless the player is in combat or downed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pingstatbars" /><code>{"void PingStatBars(float duration)"}</code> | Pings every bar for the given duration. |

<details>
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignwithvision" /><code>{"private void AlignWithVision(bool isLerping, Vector3 right, Quaternion currentRotation)"}</code> | Rotates the group around its right axis to face the camera, optionally limited by `rotationSpeed`. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hides the group and waits for the local player to be set before initializing. |
| <Link id="m-checkcombatstate" /><code>{"private void CheckCombatState("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | On entering the combat state, shows the bars fully and locks alpha. |
| <Link id="m-checkdownedstate" /><code>{"private void CheckDownedState("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | On entering the downed state, hides the bars and locks alpha. |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> | Once the local player is set: destroys itself if not on the local player, otherwise parents and initializes the bars and hooks death, player state and body type events. |
| <Link id="m-isskippingupdateduetolackofinputfocusonquest" /><code>{"private bool IsSkippingUpdateDueToLackOfInputFocusOnQuest()"}</code> | On Quest, hides the bars and skips the update when the app has lost input focus. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Faces the camera and fades alpha in or out depending on whether the player is looking at the bars. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the local player, death and player state events. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Grabs the local camera, snaps to face it and resets alpha. Disables itself if there is no camera. |
| <Link id="m-onstateactivated" /><code>{"private void OnStateActivated("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | Player state handler that runs the combat and downed checks. |
| <Link id="m-onstatedeactivated" /><code>{"private void OnStateDeactivated("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | Clears the combat or downed flag when that state ends. |
| <Link id="m-playerdeath" /><code>{"private void PlayerDeath("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" health)"}</code> | Disables all bars and destroys the group. |
| <Link id="m-setupscaling" /><code>{"private void SetupScaling(float scaleFactor)"}</code> | Scales the body type transforms by the body type's stat bar distance ratio. |
| <Link id="m-updategauntlet" /><code>{"private void UpdateGauntlet()"}</code> | Resets the bars parent's forward offset. The offset is always 0 in this build. |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(bool isVisible)"}</code> | Bar visibility handler: enables the group when any bar shows, disables it when none are enabled. |

</details>

## Used in

Members of other types that take, return or hold a `StatBarVisibilityGroup`:

[`StatBarBase.visibilityGroup`](/game-api/types/alta-stats-effects/statbarbase#m-visibilitygroup), [`PlayerSpecialEffectsController.statBars`](/game-api/types/global-p/playerspecialeffectscontroller#m-statbars).
