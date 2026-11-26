---
title: "RandomAudioPlayer"
description: "Client: plays a random sound from a SoundEffectSet on this object over and over, with a random delay between plays."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomAudioPlayer

A **class** in `Root.Township`, no namespace.

Client: plays a random sound from a `SoundEffectSet` on this object over and over, with a random delay between plays.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomAudioPlayer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagelength" /><code>{"private float averageLength"}</code> | Seconds added to each delay to allow for the sound's length. |
| <Link id="m-hasbeendestroyed" /><code>{"private bool hasBeenDestroyed"}</code> | Set on destroy to stop the play loop. |
| <Link id="m-maxdelay" /><code>{"private float maxDelay"}</code> | Longest random wait between sounds. |
| <Link id="m-mindelay" /><code>{"private float minDelay"}</code> | Shortest random wait between sounds. |
| <Link id="m-set" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" set"}</code> | Sound set to play from. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Marks the player destroyed so the delayed calls stop. |
| <Link id="m-playsound" /><code>{"private void PlaySound()"}</code> | Plays a sound from the set and schedules the next one after a random delay plus `averageLength`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Schedules the first sound after a random delay, unless headless. |

</details>
