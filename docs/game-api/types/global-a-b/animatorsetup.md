---
title: "AnimatorSetup"
description: "Pair of ScalingFadeAnimators, used to fade from one UI panel to another."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatorSetup

A **class** in `Root.Township`, no namespace.

Pair of `ScalingFadeAnimator`s, used to fade from one UI panel to another.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimatorSetup()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatefrom" /><code>{"private "}<Link to="/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" animateFrom"}</code> | Animator that fades out. |
| <Link id="m-animateto" /><code>{"private "}<Link to="/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" animateTo"}</code> | Animator whose object is faded to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fade" /><code>{"void Fade()"}</code> | Fades `animateFrom` out to the `animateTo` object. |

## Used in

Members of other types that take, return or hold a `AnimatorSetup`:

[`AltaAccountRegistererAndLinker.onFailedToRegisterAccountFade`](/game-api/types/alta-menus/altaaccountregistererandlinker#m-onfailedtoregisteraccountfade).
