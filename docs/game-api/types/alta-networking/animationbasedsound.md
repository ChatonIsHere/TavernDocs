---
title: "AnimationBasedSound"
description: "Plays sound effects from animation events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimationBasedSound

A **class** in `Root.Township`, `Alta.Networking.Animation`.

Plays sound effects from animation events. Sits next to an `Animator`; an animation event calls `PlaySound` with a clip index.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimationBasedSound()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clips" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{"[] clips"}</code> | The sound effect sets to pick from. |
| <Link id="m-clipstoplay" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{"[] clipsToPlay"}</code> | Obsolete list of single sound effects, kept as a fallback and migrated to `clips`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playsound" /><code>{"void PlaySound(int clipIndex)"}</code> | Plays the sound at the given index at this object's position, using `clips`, or the old `clipsToPlay` list if `clips` is empty. |
