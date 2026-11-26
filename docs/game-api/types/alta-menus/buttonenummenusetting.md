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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`EnumMenuSettingBase`](/game-api/types/alta-menus/enummenusettingbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonEnumMenuSetting()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-next" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" next"}</code> | Physical button that moves to the next value. |
| <Link id="m-previous" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" previous"}</code> | Physical button that moves to the previous value. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the buttons to `GoToNextValue` and `GoToPreviousValue`. |

</details>
