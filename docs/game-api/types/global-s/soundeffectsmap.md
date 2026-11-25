---
title: "SoundEffectsMap"
description: "class SoundEffectsMap in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SoundEffectsMap

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`SoundEffectsMap.Create`](/game-api/types/global-s/soundeffectsmap-create)
- **Nested types** [`Create`](/game-api/types/global-s/soundeffectsmap-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SoundEffectsMap()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-soundeffectsets" /><code>{"private List<"}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{"> soundEffectSets"}</code> |
| <Link id="m-soundeventmap" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{", "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{"> soundEventMap"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-soundeventmap-2" /><code>{"Dictionary<"}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{", "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{"> SoundEventMap { get; }"}</code> |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-loadsoundeventmap" /><code>{"private void LoadSoundEventMap()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `SoundEffectsMap`:

[`AudioManager.currentSoundEffectsMapping`](/game-api/types/global-a-b/audiomanager#m-currentsoundeffectsmapping).
