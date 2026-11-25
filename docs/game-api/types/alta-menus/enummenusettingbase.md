---
title: "EnumMenuSettingBase"
description: "A menu setting that steps through a list of string values (next and previous) and writes the chosen one to its setting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnumMenuSettingBase

A **class** in `Root.Township`, `Alta.Menu`.

A menu setting that steps through a list of string values (next and previous) and writes the chosen one to its setting.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`MenuGameSetting<EnumSettingAccess>`](/game-api/types/alta-menus/menugamesetting-t)
- **Derived types** [`ButtonEnumMenuSetting`](/game-api/types/alta-menus/buttonenummenusetting), [`ScrollerEnumMenuSetting`](/game-api/types/alta-menus/scrollerenummenusetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnumMenuSettingBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isrefreshing" /><code>{"protected bool isRefreshing"}</code> | True while the values are loading. Changes are ignored meanwhile. |
| <Link id="m-possiblevalues" /><code>{"protected string[] possibleValues"}</code> | The values to step through, from the setting. |
| <Link id="m-valuetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" valueText"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentenumindex" /><code>{"int CurrentEnumIndex { get; protected set; }"}</code> | Index of the shown value in `possibleValues`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gotonextvalue" /><code>{"void GoToNextValue()"}</code> | Moves to the next value, wrapping round, and saves it. |
| <Link id="m-gotopreviousvalue" /><code>{"void GoToPreviousValue()"}</code> | Moves to the previous value, wrapping round, and saves it. |
| <Link id="m-finishedrefresh" /><code>{"protected virtual void FinishedRefresh()"}</code> | Called after the values have loaded. Empty by default. |
| <Link id="m-refresh" /><code>{"protected void Refresh()"}</code> | Wraps the index, writes the value to the setting and updates the text. |
| <Link id="m-refreshvalues" /><code>{"private async void RefreshValues()"}</code> |  |
| <Link id="m-setup" /><code>{"protected override void Setup()"}</code> | Loads the possible values and current value from the setting. |
| <Link id="m-updatetext" /><code>{"protected virtual void UpdateText()"}</code> | Shows the current value on the label. |
| <Link id="m-wrapenumindex" /><code>{"protected int WrapEnumIndex(int index)"}</code> | Wraps an index into the range of `possibleValues`. |
