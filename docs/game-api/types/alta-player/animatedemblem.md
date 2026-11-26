---
title: "AnimatedEmblem"
description: "Name board emblem that plays a closing animation before it is removed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedEmblem

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Name board emblem that plays a closing animation before it is removed.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`NameBoardEmblem`](/game-api/types/alta-player/nameboardemblem), [`IAnimationEndCallbackReceiver`](/game-api/types/global-i-l/ianimationendcallbackreceiver)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimatedEmblem()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | Animator that plays the closing animation. |
| <Link id="m-callback" /><code>{"private Action callBack"}</code> | Callback passed to `Close`. |
| <Link id="m-disablingparameter" /><code>{"private string disablingParameter"}</code> | Animator bool set to start closing. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"override void Close(Action callBack)"}</code> | Sets the animator's disabling bool and stores the callback to run when the animation ends. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onanimationended" /><code>{"private void IAnimationEndCallbackReceiver.OnAnimationEnded()"}</code> | Runs the stored close callback. |

</details>
