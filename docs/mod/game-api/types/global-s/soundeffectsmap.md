---
title: "SoundEffectsMap"
description: "Audio asset that maps each SoundEffect value to its SoundEffectSet."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SoundEffectsMap

A **class** in `Root.Township`, the global namespace.

Audio asset that maps each `SoundEffect` value to its `SoundEffectSet`. Later sets with the same effect win.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`SoundEffectsMap.Create`](/mod/game-api/types/global-s/soundeffectsmap-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/soundeffectsmap-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SoundEffectsMap()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-soundeffectsets" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{"> soundEffectSets"}</code> | <span className="api-desc">The sound effect sets in this map.</span> |
| <Link id="m-soundeventmap" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{", "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{"> soundEventMap"}</code> | <span className="api-desc">Backing field for `SoundEventMap`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-soundeventmap-2" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{", "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{"> SoundEventMap { get; }"}</code> | <span className="api-desc">Map from sound effect to its set, built on first use.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadsoundeventmap" /><code>{"private void LoadSoundEventMap()"}</code> | <span className="api-desc">Builds the map from `soundEffectSets`, skipping nulls.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SoundEffectsMap`:

<div className="api-used-in">

[`AudioManager.currentSoundEffectsMapping`](/mod/game-api/types/global-a-b/audiomanager#m-currentsoundeffectsmapping).

</div>
