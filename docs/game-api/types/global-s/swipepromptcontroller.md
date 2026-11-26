---
title: "SwipePromptController"
description: "Shows a swipe hint on an item scroller after a delay, until the player has swiped once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SwipePromptController

A **class** in `Root.Township`, no namespace.

Shows a swipe hint on an item scroller after a delay, until the player has swiped once. Used on customization menus.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SwipePromptController()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaytoprompt" /><code>{"private float delayToPrompt"}</code> | Seconds to wait before showing the prompt. |
| <Link id="m-hasswiped" /><code>{"private bool hasSwiped"}</code> | True once the player has swiped. |
| <Link id="m-prompt" /><code>{"private GameObject prompt"}</code> | The hint object to show and hide. |
| <Link id="m-promptdelay" /><code>{"private Coroutine promptDelay"}</code> | The running delay coroutine. |
| <Link id="m-scroller" /><code>{"private "}<Link to="/game-api/types/global-i-l/itemscroller">{"ItemScroller"}</Link>{" scroller"}</code> | Item scroller checked for whether it can scroll. |
| <Link id="m-scrollmanagers" /><code>{"private "}<Link to="/game-api/types/alta-customization/scrollmanager">{"ScrollManager"}</Link>{"[] scrollManagers"}</code> | Scroll managers whose item changes recheck the prompt. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hasswiped-2" /><code>{"void HasSwiped()"}</code> | Marks that the player swiped, so the prompt doesn't show again. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to each scroll manager's items changed event, unless the player already swiped. |
| <Link id="m-checkprompt" /><code>{"private void CheckPrompt()"}</code> | Restarts the prompt delay if the scroller can scroll and the player hasn't swiped yet. |
| <Link id="m-cleardelay" /><code>{"private void ClearDelay()"}</code> | Stops the delay and hides the prompt. |
| <Link id="m-delayprompt" /><code>{"private IEnumerator DelayPrompt() (iterator)"}</code> | Coroutine that shows the prompt after `delayToPrompt` seconds. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: drops null entries from `scrollManagers`. |

</details>
