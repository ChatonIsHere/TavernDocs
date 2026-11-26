---
title: "RenderingDisabler"
description: "Debug toggle: hides or shows all child renderers of a category (rocks, houses, terrain and so on) from a Left Ctrl keyboard shortcut."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RenderingDisabler

A **class** in `Root.Township`, the global namespace.

Debug toggle: hides or shows all child renderers of a category (rocks, houses, terrain and so on) from a Left Ctrl keyboard shortcut.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Type`](/mod/game-api/types/global-q-r/renderingdisabler-type)
- **Attributes** `DisallowMultipleComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RenderingDisabler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-map" /><code>{"static Dictionary<"}<Link to="/mod/game-api/types/global-q-r/renderingdisabler-type">{"RenderingDisabler.Type"}</Link>{", List<"}<Link to="/mod/game-api/types/global-q-r/renderingdisabler">{"RenderingDisabler"}</Link>{">> map"}</code> | <span className="api-desc">All disablers grouped by category.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keyboardhandler" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" keyboardHandler"}</code> | <span className="api-desc">Handle for the key registration.</span> |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | <span className="api-desc">Child renderers that get toggled.</span> |
| <Link id="m-toggletype" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderingdisabler-type">{"RenderingDisabler.Type"}</Link>{" toggleType"}</code> | <span className="api-desc">Category this object belongs to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggle" /><code>{"void Toggle()"}</code> | <span className="api-desc">Flips every child renderer on or off.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches child renderers, registers the key handler and adds itself to `map`.</span> |
| <Link id="m-checkkey" /><code>{"private void CheckKey(Key key)"}</code> | <span className="api-desc">Toggles when the pressed key matches the first letter of the category name.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the key handler and its entry in `map`.</span> |

</details>
