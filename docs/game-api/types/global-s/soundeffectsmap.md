---
title: "SoundEffectsMap"
description: "Audio asset that maps each SoundEffect value to its SoundEffectSet."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SoundEffectsMap

A **class** in `Root.Township`, no namespace.

Audio asset that maps each `SoundEffect` value to its `SoundEffectSet`. Later sets with the same effect win.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`SoundEffectsMap.Create`](/game-api/types/global-s/soundeffectsmap-create)
- **Nested types** [`Create`](/game-api/types/global-s/soundeffectsmap-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SoundEffectsMap()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-soundeffectsets" /><code>{"private List<"}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{"> soundEffectSets"}</code> | The sound effect sets in this map. |
| <Link id="m-soundeventmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{", "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{"> soundEventMap"}</code> | Backing field for `SoundEventMap`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-soundeventmap-2" /><code>{"Dictionary<"}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{", "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{"> SoundEventMap { get; }"}</code> | Map from sound effect to its set, built on first use. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadsoundeventmap" /><code>{"private void LoadSoundEventMap()"}</code> | Builds the map from `soundEffectSets`, skipping nulls. |

</details>

## Used in

Members of other types that take, return or hold a `SoundEffectsMap`:

[`AudioManager.currentSoundEffectsMapping`](/game-api/types/global-a-b/audiomanager#m-currentsoundeffectsmapping).
