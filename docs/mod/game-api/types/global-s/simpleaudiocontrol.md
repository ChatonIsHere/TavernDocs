---
title: "SimpleAudioControl"
description: "Plain Wwise playback helper: posts an event on a game object and calls back when it ends."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimpleAudioControl

A **class** in `Root.Township`, the global namespace.

Plain Wwise playback helper: posts an event on a game object and calls back when it ends. `AudioControl` builds on it.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Derived types** [`AudioControl`](/mod/game-api/types/global-a-b/audiocontrol)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimpleAudioControl()"}</code> | <span className="api-desc">Creates a `SimpleAudioControl` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-play" /><code>{"virtual void Play(Event soundEvent, AkGameObj akGameObj, Action endAction = null, params "}<Link to="/mod/game-api/types/global-i-l/isoundproperty">{"ISoundProperty"}</Link>{"[] soundProperties)"}</code> | <span className="api-desc">Applies the sound properties to the object, posts the Wwise event and calls `endAction` at end of event.</span> |

## Used in

Members of other types that take, return or hold a `SimpleAudioControl`:

<div className="api-used-in">

[`AudioManager.staticAudioControl`](/mod/game-api/types/global-a-b/audiomanager#m-staticaudiocontrol).

</div>
