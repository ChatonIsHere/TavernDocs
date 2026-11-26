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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`NameBoardEmblem`](/mod/game-api/types/alta-player/nameboardemblem), [`IAnimationEndCallbackReceiver`](/mod/game-api/types/global-i-l/ianimationendcallbackreceiver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedEmblem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">Animator that plays the closing animation.</span> |
| <Link id="m-callback" /><code>{"private Action callBack"}</code> | <span className="api-desc">Callback passed to `Close`.</span> |
| <Link id="m-disablingparameter" /><code>{"private string disablingParameter"}</code> | <span className="api-desc">Animator bool set to start closing.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"override void Close(Action callBack)"}</code> | <span className="api-desc">Sets the animator's disabling bool and stores the callback to run when the animation ends.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onanimationended" /><code>{"private void IAnimationEndCallbackReceiver.OnAnimationEnded()"}</code> | <span className="api-desc">Runs the stored close callback.</span> |

</details>
