---
title: "PlaySound"
description: "Animator state behaviour that plays a sound at the animated object when the state is entered, after an optional delay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaySound

A **class** in `Root.Township`, the global namespace.

Animator state behaviour that plays a sound at the animated object when the state is entered, after an optional delay.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `StateMachineBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlaySound()"}</code> | <span className="api-desc">Creates a `PlaySound` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delay" /><code>{"private float delay"}</code> | <span className="api-desc">Seconds to wait before playing.</span> |
| <Link id="m-maxfalloffdistance" /><code>{"private float maxFalloffDistance"}</code> | <span className="api-desc">Obsolete; now set on the sound effect set.</span> |
| <Link id="m-minfalloffdistance" /><code>{"private float minFalloffDistance"}</code> | <span className="api-desc">Obsolete; now set on the sound effect set.</span> |
| <Link id="m-sound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" sound"}</code> | <span className="api-desc">Old single sound, used to fill `soundSet` if that's empty.</span> |
| <Link id="m-soundset" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundSet"}</code> | <span className="api-desc">The sound to play.</span> |
| <Link id="m-volume" /><code>{"private float volume"}</code> | <span className="api-desc">Obsolete; now set on the sound effect set.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstateenter" /><code>{"override void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)"}</code> | <span className="api-desc">Waits `delay` seconds, then plays `soundSet` at the animator's position.</span> |
