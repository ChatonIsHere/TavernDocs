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
| <Link id="m-ctor" /><code>{"RenderingDisabler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-map" /><code>{"static Dictionary<"}<Link to="/mod/game-api/types/global-q-r/renderingdisabler-type">{"RenderingDisabler.Type"}</Link>{", List<"}<Link to="/mod/game-api/types/global-q-r/renderingdisabler">{"RenderingDisabler"}</Link>{">> map"}</code> | All disablers grouped by category. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keyboardhandler" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" keyboardHandler"}</code> | Handle for the key registration. |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | Child renderers that get toggled. |
| <Link id="m-toggletype" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderingdisabler-type">{"RenderingDisabler.Type"}</Link>{" toggleType"}</code> | Category this object belongs to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggle" /><code>{"void Toggle()"}</code> | Flips every child renderer on or off. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches child renderers, registers the key handler and adds itself to `map`. |
| <Link id="m-checkkey" /><code>{"private void CheckKey(Key key)"}</code> | Toggles when the pressed key matches the first letter of the category name. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the key handler and its entry in `map`. |

</details>
