---
title: "QuickAccessDynamicIcon"
description: "Bubble icon that fires toggle events when its action turns on or off."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuickAccessDynamicIcon

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Bubble icon that fires toggle events when its action turns on or off.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`, [`IQuickAccessDynamicIcon`](/mod/game-api/types/alta-player/iquickaccessdynamicicon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"QuickAccessDynamicIcon()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" action"}</code> | <span className="api-desc">The action shown.</span> |
| <Link id="m-toggleonactive" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/toggleevent">{"ToggleEvent"}</Link>{" toggleOnActive"}</code> | <span className="api-desc">Event given the active state.</span> |
| <Link id="m-toggleonactiveinverse" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/toggleevent">{"ToggleEvent"}</Link>{" toggleOnActiveInverse"}</code> | <span className="api-desc">Event given the opposite of the active state.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupaction" /><code>{"void SetupAction("}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" action)"}</code> | <span className="api-desc">Hooks the action's active event and applies the current state.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks from the action.</span> |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | <span className="api-desc">Fires `toggleOnActive` with the state and `toggleOnActiveInverse` with its opposite.</span> |

</details>
