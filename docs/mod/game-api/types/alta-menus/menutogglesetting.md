---
title: "MenuToggleSetting"
description: "Client menu control for an on/off setting, driven by a selection lever."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MenuToggleSetting

A **class** in `Root.Township`, `Alta.Menu`.

Client menu control for an on/off setting, driven by a selection lever. Colours its label and fires events when turned on or off.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`MenuGameSetting<ToggleGameSettingAccess>`](/mod/game-api/types/alta-menus/menugamesetting-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MenuToggleSetting()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isselected" /><code>{"private bool isSelected"}</code> | Whether the toggle is currently on. |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> | The selection lever the player moves. |
| <Link id="m-ondeselected" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onDeselected"}</code> | Event fired when the toggle turns off. |
| <Link id="m-onselected" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onSelected"}</code> | Event fired when the toggle turns on. |
| <Link id="m-selectedindex" /><code>{"private int selectedIndex"}</code> | The lever position that means on. Default 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: names the object after the setting, or logs if no setting is set. |
| <Link id="m-setup" /><code>{"protected override void Setup()"}</code> | Reads the setting's value and moves the lever to match. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Listens for the lever's selection changes. |
| <Link id="m-select" /><code>{"private void Select(bool isSelected)"}</code> | Sets the label to the on or off colour from `MenuSettings` and fires `onSelected` or `onDeselected`. |
| <Link id="m-toggleselection" /><code>{"private void ToggleSelection("}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" arg1, int arg2, int arg3)"}</code> | When the lever moves, turns the setting on if it is at `selectedIndex`, off otherwise, and saves it. |

</details>
