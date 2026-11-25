---
title: "StatBarVisibilityGroup"
description: "class StatBarVisibilityGroup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBarVisibilityGroup

A **class** in `Root.Township`, `Alta.StatSystem`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatBarVisibilityGroup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-alphalimit" /><code>{"private readonly int _AlphaLimit"}</code> |  |
| <Link id="m-alpha" /><code>{"private float alpha"}</code> |  |
| <Link id="m-alphalerpspeed" /><code>{"private float alphaLerpSpeed"}</code> |  |
| <Link id="m-bars" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statbarbase">{"StatBarBase"}</Link>{"[] bars"}</code> |  |
| <Link id="m-barsparent" /><code>{"private Transform barsParent"}</code> |  |
| <Link id="m-bodytypescaling" /><code>{"private Transform[] bodyTypeScaling"}</code> |  |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> |  |
| <Link id="m-cameratarget" /><code>{"private Transform cameraTarget"}</code> |  |
| <Link id="m-gauntletoffset" /><code>{"private float gauntletOffset"}</code> |  |
| <Link id="m-isdowned" /><code>{"private bool isDowned"}</code> |  |
| <Link id="m-isincombat" /><code>{"private bool isInCombat"}</code> |  |
| <Link id="m-islookingat" /><code>{"private bool isLookingAt"}</code> |  |
| <Link id="m-lookatleniency" /><code>{"private float lookAtLeniency"}</code> |  |
| <Link id="m-lookawayleniency" /><code>{"private float lookAwayLeniency"}</code> |  |
| <Link id="m-notchesbasematerial" /><code>{"private Material notchesBaseMaterial"}</code> |  |
| <Link id="m-notchesmaterial" /><code>{"private Material notchesMaterial"}</code> |  |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> |  |
| <Link id="m-rotationspeed" /><code>{"private float rotationSpeed"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alpha-2" /><code>{"float Alpha { get; set; }"}</code> |  |
| <Link id="m-statmanager" /><code><Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" "}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" { get; }"}</code> |  |
| <Link id="m-canupdatealpha" /><code>{"private bool CanUpdateAlpha { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-pingstatbars" /><code>{"void PingStatBars(float duration)"}</code> |  |
| <Link id="m-alignwithvision" /><code>{"private void AlignWithVision(bool isLerping, Vector3 right, Quaternion currentRotation)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkcombatstate" /><code>{"private void CheckCombatState("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |  |
| <Link id="m-checkdownedstate" /><code>{"private void CheckDownedState("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |  |
| <Link id="m-initialize" /><code>{"private void Initialize("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller)"}</code> |  |
| <Link id="m-isskippingupdateduetolackofinputfocusonquest" /><code>{"private bool IsSkippingUpdateDueToLackOfInputFocusOnQuest()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-onstateactivated" /><code>{"private void OnStateActivated("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |  |
| <Link id="m-onstatedeactivated" /><code>{"private void OnStateDeactivated("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |  |
| <Link id="m-playerdeath" /><code>{"private void PlayerDeath("}<Link to="/game-api/types/global-e-h/healthobject">{"HealthObject"}</Link>{" health)"}</code> |  |
| <Link id="m-setupscaling" /><code>{"private void SetupScaling(float scaleFactor)"}</code> |  |
| <Link id="m-updategauntlet" /><code>{"private void UpdateGauntlet()"}</code> |  |
| <Link id="m-updatevisibility" /><code>{"private void UpdateVisibility(bool isVisible)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StatBarVisibilityGroup`:

[`StatBarBase.visibilityGroup`](/game-api/types/alta-stats-effects/statbarbase#m-visibilitygroup), [`PlayerSpecialEffectsController.statBars`](/game-api/types/global-p/playerspecialeffectscontroller#m-statbars).
