---
title: "SilenceAnimationEvents"
description: "Receiver for animation events (ActionIn, ActionOut, AnimationEnded, PlaySound) that does nothing except optional debug logging, so the events don't error."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SilenceAnimationEvents

A **class** in `Root.Township`, no namespace.

Receiver for animation events (`ActionIn`, `ActionOut`, `AnimationEnded`, `PlaySound`) that does nothing except optional debug logging, so the events don't error.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SilenceAnimationEvents()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islogging" /><code>{"private bool isLogging"}</code> | Turns on debug logging of the received events. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-actionin" /><code>{"void ActionIn()"}</code> | Logs "Action In" if logging is on. |
| <Link id="m-actionout" /><code>{"void ActionOut()"}</code> | Logs "Action Out" if logging is on. |
| <Link id="m-animationended" /><code>{"void AnimationEnded()"}</code> | Logs "Animation Ended" if logging is on. |
| <Link id="m-playsound" /><code>{"void PlaySound()"}</code> | Logs "Play Sound" if logging is on. Plays no sound. |
