---
title: "PlaySound"
description: "Animator state behaviour that plays a sound at the animated object when the state is entered, after an optional delay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlaySound

A **class** in `Root.Township`, no namespace.

Animator state behaviour that plays a sound at the animated object when the state is entered, after an optional delay.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `StateMachineBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlaySound()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delay" /><code>{"private float delay"}</code> | Seconds to wait before playing. |
| <Link id="m-maxfalloffdistance" /><code>{"private float maxFalloffDistance"}</code> | Obsolete; now set on the sound effect set. |
| <Link id="m-minfalloffdistance" /><code>{"private float minFalloffDistance"}</code> | Obsolete; now set on the sound effect set. |
| <Link id="m-sound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" sound"}</code> | Old single sound, used to fill `soundSet` if that's empty. |
| <Link id="m-soundset" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundSet"}</code> | The sound to play. |
| <Link id="m-volume" /><code>{"private float volume"}</code> | Obsolete; now set on the sound effect set. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onstateenter" /><code>{"override void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)"}</code> | Waits `delay` seconds, then plays `soundSet` at the animator's position. |
