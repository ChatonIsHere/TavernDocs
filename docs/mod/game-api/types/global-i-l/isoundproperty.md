---
title: "ISoundProperty"
description: "A Wwise sound setting (switch, RTPC value or trigger) that an audio control applies to a sound's game object before it plays."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISoundProperty

An **interface** in `Root.Township`, the global namespace.

A Wwise sound setting (switch, RTPC value or trigger) that an audio control applies to a sound's game object before it plays.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply(GameObject target)"}</code> | Sets this property on the given Wwise game object. |
| <Link id="m-clear" /><code>{"void Clear(GameObject target)"}</code> | Removes or resets this property on the given Wwise game object. |

## Used in

Members of other types that take, return or hold a `ISoundProperty`:

[`AudioControl.Play`](/mod/game-api/types/global-a-b/audiocontrol#m-play), [`AudioControl.soundProperties`](/mod/game-api/types/global-a-b/audiocontrol#m-soundproperties), [`AudioManager.PlayInternal`](/mod/game-api/types/global-a-b/audiomanager#m-playinternal), [`AudioManager.PlayInternalOneShot`](/mod/game-api/types/global-a-b/audiomanager#m-playinternaloneshot), [`AudioManager.PlaySoundEffect`](/mod/game-api/types/global-a-b/audiomanager#m-playsoundeffect), [`AudioManager.PlaySoundEffectAt`](/mod/game-api/types/global-a-b/audiomanager#m-playsoundeffectat), [`AudioManager.PlaySoundEffectOnObject`](/mod/game-api/types/global-a-b/audiomanager#m-playsoundeffectonobject), [`SimpleAudioControl.Play`](/mod/game-api/types/global-s/simpleaudiocontrol#m-play).
