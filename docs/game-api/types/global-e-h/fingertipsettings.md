---
title: "FingerTipSettings"
description: "Per-character setup of each hand's index finger tip transform and hand triangle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FingerTipSettings

A **class** in `Root.Township`, no namespace.

Per-character setup of each hand's index finger tip transform and hand triangle. Used by `PlayerCharacter` and `CharacterDummy`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FingerTipSettings()"}</code> | Creates a `FingerTipSettings` with default values. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-leftfingertip" /><code>{"private Transform leftFingerTip"}</code> | Finger tip transform on the left hand. |
| <Link id="m-lefthandtriangle" /><code>{"private "}<Link to="/game-api/types/global-e-h/handtriangle">{"HandTriangle"}</Link>{" leftHandTriangle"}</code> | Triangle of points on the left hand. |
| <Link id="m-rightfingertip" /><code>{"private Transform rightFingerTip"}</code> | Finger tip transform on the right hand. |
| <Link id="m-righthandtriangle" /><code>{"private "}<Link to="/game-api/types/global-e-h/handtriangle">{"HandTriangle"}</Link>{" rightHandTriangle"}</code> | Triangle of points on the right hand. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfingertip" /><code>{"Transform GetFingerTip(bool isLeftHand)"}</code> | Returns the left or right finger tip transform. |
| <Link id="m-gettriangle" /><code><Link to="/game-api/types/global-t-x/worldspacetriangle">{"WorldSpaceTriangle"}</Link>{" GetTriangle(bool isLeftHand)"}</code> | Returns the left or right hand triangle as a world-space triangle. |

## Used in

Members of other types that take, return or hold a `FingerTipSettings`:

[`CharacterDummy.fingerTips`](/game-api/types/alta-player/characterdummy#m-fingertips), [`CharacterDummy.FingerTips`](/game-api/types/alta-player/characterdummy#m-fingertips-2), [`PlayerCharacter.IHasFingertips.FingerTips`](/game-api/types/alta-player/playercharacter#m-ihasfingertips-fingertips), [`IHasFingertips.FingerTips`](/game-api/types/global-i-l/ihasfingertips#m-fingertips), [`LocomotionlessPlayerController.fingerTips`](/game-api/types/global-i-l/locomotionlessplayercontroller#m-fingertips), [`LocomotionlessPlayerController.IHasFingertips.FingerTips`](/game-api/types/global-i-l/locomotionlessplayercontroller#m-ihasfingertips-fingertips), [`MainMenuPlayerController.fingerTips`](/game-api/types/global-m-o/mainmenuplayercontroller#m-fingertips), [`MainMenuPlayerController.IHasFingertips.FingerTips`](/game-api/types/global-m-o/mainmenuplayercontroller#m-ihasfingertips-fingertips).
