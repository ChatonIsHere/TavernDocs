---
title: "AnimatorSetup"
description: "Pair of ScalingFadeAnimators, used to fade from one UI panel to another."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatorSetup

A **class** in `Root.Township`, the global namespace.

Pair of `ScalingFadeAnimator`s, used to fade from one UI panel to another.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatorSetup()"}</code> | <span className="api-desc">Creates an `AnimatorSetup` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatefrom" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" animateFrom"}</code> | <span className="api-desc">Animator that fades out.</span> |
| <Link id="m-animateto" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/scalingfadeanimator">{"ScalingFadeAnimator"}</Link>{" animateTo"}</code> | <span className="api-desc">Animator whose object is faded to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fade" /><code>{"void Fade()"}</code> | <span className="api-desc">Fades `animateFrom` out to the `animateTo` object.</span> |

## Used in

Members of other types that take, return or hold a `AnimatorSetup`:

<div className="api-used-in">

[`AltaAccountRegistererAndLinker.onFailedToRegisterAccountFade`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker#m-onfailedtoregisteraccountfade).

</div>
