---
title: "SilenceAnimationEvents"
description: "Receiver for animation events (ActionIn, ActionOut, AnimationEnded, PlaySound) that does nothing except optional debug logging, so the events don't error."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SilenceAnimationEvents

A **class** in `Root.Township`, the global namespace.

Receiver for animation events (`ActionIn`, `ActionOut`, `AnimationEnded`, `PlaySound`) that does nothing except optional debug logging, so the events don't error.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SilenceAnimationEvents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islogging" /><code>{"private bool isLogging"}</code> | <span className="api-desc">Turns on debug logging of the received events.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-actionin" /><code>{"void ActionIn()"}</code> | <span className="api-desc">Logs "Action In" if logging is on.</span> |
| <Link id="m-actionout" /><code>{"void ActionOut()"}</code> | <span className="api-desc">Logs "Action Out" if logging is on.</span> |
| <Link id="m-animationended" /><code>{"void AnimationEnded()"}</code> | <span className="api-desc">Logs "Animation Ended" if logging is on.</span> |
| <Link id="m-playsound" /><code>{"void PlaySound()"}</code> | <span className="api-desc">Logs "Play Sound" if logging is on. Plays no sound.</span> |
