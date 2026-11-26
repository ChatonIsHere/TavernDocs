---
title: "ButtonEnumMenuSetting"
description: "Client menu control for a choice setting with two physical buttons that step to the previous or next value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonEnumMenuSetting

A **class** in `Root.Township`, `Alta.Menu`.

Client menu control for a choice setting with two physical buttons that step to the previous or next value.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`EnumMenuSettingBase`](/mod/game-api/types/alta-menus/enummenusettingbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonEnumMenuSetting()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-next" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" next"}</code> | <span className="api-desc">Physical button that moves to the next value.</span> |
| <Link id="m-previous" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" previous"}</code> | <span className="api-desc">Physical button that moves to the previous value.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the buttons to `GoToNextValue` and `GoToPreviousValue`.</span> |

</details>
