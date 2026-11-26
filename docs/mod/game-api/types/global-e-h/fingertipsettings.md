---
title: "FingerTipSettings"
description: "Per-character setup of each hand's index finger tip transform and hand triangle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FingerTipSettings

A **class** in `Root.Township`, the global namespace.

Per-character setup of each hand's index finger tip transform and hand triangle. Used by `PlayerCharacter` and `CharacterDummy`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FingerTipSettings()"}</code> | <span className="api-desc">Creates a `FingerTipSettings` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-leftfingertip" /><code>{"private Transform leftFingerTip"}</code> | <span className="api-desc">Finger tip transform on the left hand.</span> |
| <Link id="m-lefthandtriangle" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handtriangle">{"HandTriangle"}</Link>{" leftHandTriangle"}</code> | <span className="api-desc">Triangle of points on the left hand.</span> |
| <Link id="m-rightfingertip" /><code>{"private Transform rightFingerTip"}</code> | <span className="api-desc">Finger tip transform on the right hand.</span> |
| <Link id="m-righthandtriangle" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handtriangle">{"HandTriangle"}</Link>{" rightHandTriangle"}</code> | <span className="api-desc">Triangle of points on the right hand.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfingertip" /><code>{"Transform GetFingerTip(bool isLeftHand)"}</code> | <span className="api-desc">Returns the left or right finger tip transform.</span> |
| <Link id="m-gettriangle" /><code><Link to="/mod/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" GetTriangle(bool isLeftHand)"}</code> | <span className="api-desc">Returns the left or right hand triangle as a world-space triangle.</span> |

## Used in

Members of other types that take, return or hold a `FingerTipSettings`:

<div className="api-used-in">

[`CharacterDummy.fingerTips`](/mod/game-api/types/alta-player/characterdummy#m-fingertips), [`CharacterDummy.FingerTips`](/mod/game-api/types/alta-player/characterdummy#m-fingertips-2), [`PlayerCharacter.IHasFingertips.FingerTips`](/mod/game-api/types/alta-player/playercharacter#m-ihasfingertips-fingertips), [`IHasFingertips.FingerTips`](/mod/game-api/types/global-i-l/ihasfingertips#m-fingertips), [`LocomotionlessPlayerController.fingerTips`](/mod/game-api/types/global-i-l/locomotionlessplayercontroller#m-fingertips), [`LocomotionlessPlayerController.IHasFingertips.FingerTips`](/mod/game-api/types/global-i-l/locomotionlessplayercontroller#m-ihasfingertips-fingertips), [`MainMenuPlayerController.fingerTips`](/mod/game-api/types/global-m-o/mainmenuplayercontroller#m-fingertips), [`MainMenuPlayerController.IHasFingertips.FingerTips`](/mod/game-api/types/global-m-o/mainmenuplayercontroller#m-ihasfingertips-fingertips).

</div>
