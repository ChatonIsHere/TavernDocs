---
title: "MenuToggleSetting"
description: "class MenuToggleSetting in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MenuToggleSetting

A **class** in `Root.Township`, `Alta.Menu`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`MenuGameSetting<ToggleGameSettingAccess>`](/game-api/types/alta-menus/menugamesetting-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MenuToggleSetting()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isselected" /><code>{"private bool isSelected"}</code> |  |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> |  |
| <Link id="m-ondeselected" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onDeselected"}</code> |  |
| <Link id="m-onselected" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onSelected"}</code> |  |
| <Link id="m-selectedindex" /><code>{"private int selectedIndex"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |
| <Link id="m-select" /><code>{"private void Select(bool isSelected)"}</code> |  |
| <Link id="m-setup" /><code>{"protected override void Setup()"}</code> |  |
| <Link id="m-toggleselection" /><code>{"private void ToggleSelection("}<Link to="/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" arg1, int arg2, int arg3)"}</code> |  |
