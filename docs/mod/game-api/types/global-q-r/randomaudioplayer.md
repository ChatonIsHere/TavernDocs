---
title: "RandomAudioPlayer"
description: "Client: plays a random sound from a SoundEffectSet on this object over and over, with a random delay between plays."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomAudioPlayer

A **class** in `Root.Township`, the global namespace.

Client: plays a random sound from a `SoundEffectSet` on this object over and over, with a random delay between plays.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomAudioPlayer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagelength" /><code>{"private float averageLength"}</code> | <span className="api-desc">Seconds added to each delay to allow for the sound's length.</span> |
| <Link id="m-hasbeendestroyed" /><code>{"private bool hasBeenDestroyed"}</code> | <span className="api-desc">Set on destroy to stop the play loop.</span> |
| <Link id="m-maxdelay" /><code>{"private float maxDelay"}</code> | <span className="api-desc">Longest random wait between sounds.</span> |
| <Link id="m-mindelay" /><code>{"private float minDelay"}</code> | <span className="api-desc">Shortest random wait between sounds.</span> |
| <Link id="m-set" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" set"}</code> | <span className="api-desc">Sound set to play from.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Marks the player destroyed so the delayed calls stop.</span> |
| <Link id="m-playsound" /><code>{"private void PlaySound()"}</code> | <span className="api-desc">Plays a sound from the set and schedules the next one after a random delay plus `averageLength`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Schedules the first sound after a random delay, unless headless.</span> |

</details>
