---
title: "SwipePromptController"
description: "Shows a swipe hint on an item scroller after a delay, until the player has swiped once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SwipePromptController

A **class** in `Root.Township`, the global namespace.

Shows a swipe hint on an item scroller after a delay, until the player has swiped once. Used on customization menus.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SwipePromptController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaytoprompt" /><code>{"private float delayToPrompt"}</code> | <span className="api-desc">Seconds to wait before showing the prompt.</span> |
| <Link id="m-hasswiped" /><code>{"private bool hasSwiped"}</code> | <span className="api-desc">True once the player has swiped.</span> |
| <Link id="m-prompt" /><code>{"private GameObject prompt"}</code> | <span className="api-desc">The hint object to show and hide.</span> |
| <Link id="m-promptdelay" /><code>{"private Coroutine promptDelay"}</code> | <span className="api-desc">The running delay coroutine.</span> |
| <Link id="m-scroller" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/itemscroller">{"ItemScroller"}</Link>{" scroller"}</code> | <span className="api-desc">Item scroller checked for whether it can scroll.</span> |
| <Link id="m-scrollmanagers" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/scrollmanager">{"ScrollManager"}</Link>{"[] scrollManagers"}</code> | <span className="api-desc">Scroll managers whose item changes recheck the prompt.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-hasswiped-2" /><code>{"void HasSwiped()"}</code> | <span className="api-desc">Marks that the player swiped, so the prompt doesn't show again.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to each scroll manager's items changed event, unless the player already swiped.</span> |
| <Link id="m-checkprompt" /><code>{"private void CheckPrompt()"}</code> | <span className="api-desc">Restarts the prompt delay if the scroller can scroll and the player hasn't swiped yet.</span> |
| <Link id="m-cleardelay" /><code>{"private void ClearDelay()"}</code> | <span className="api-desc">Stops the delay and hides the prompt.</span> |
| <Link id="m-delayprompt" /><code>{"private IEnumerator DelayPrompt() (iterator)"}</code> | <span className="api-desc">Coroutine that shows the prompt after `delayToPrompt` seconds.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: drops null entries from `scrollManagers`.</span> |

</details>
