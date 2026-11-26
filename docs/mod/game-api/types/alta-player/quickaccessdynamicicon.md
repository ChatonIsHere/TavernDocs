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
| <Link id="m-ctor" /><code>{"QuickAccessDynamicIcon()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" action"}</code> | The action shown. |
| <Link id="m-toggleonactive" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/toggleevent">{"ToggleEvent"}</Link>{" toggleOnActive"}</code> | Event given the active state. |
| <Link id="m-toggleonactiveinverse" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/toggleevent">{"ToggleEvent"}</Link>{" toggleOnActiveInverse"}</code> | Event given the opposite of the active state. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupaction" /><code>{"void SetupAction("}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" action)"}</code> | Hooks the action's active event and applies the current state. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from the action. |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | Fires `toggleOnActive` with the state and `toggleOnActiveInverse` with its opposite. |

</details>
