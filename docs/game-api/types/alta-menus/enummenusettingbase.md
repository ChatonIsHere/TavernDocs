---
title: "EnumMenuSettingBase"
description: "class EnumMenuSettingBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnumMenuSettingBase

A **class** in `Root.Township`, `Alta.Menu`.

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
| <Link id="m-isrefreshing" /><code>{"protected bool isRefreshing"}</code> |  |
| <Link id="m-possiblevalues" /><code>{"protected string[] possibleValues"}</code> |  |
| <Link id="m-valuetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" valueText"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentenumindex" /><code>{"int CurrentEnumIndex { get; protected set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gotonextvalue" /><code>{"void GoToNextValue()"}</code> |  |
| <Link id="m-gotopreviousvalue" /><code>{"void GoToPreviousValue()"}</code> |  |
| <Link id="m-finishedrefresh" /><code>{"protected virtual void FinishedRefresh()"}</code> |  |
| <Link id="m-refresh" /><code>{"protected void Refresh()"}</code> |  |
| <Link id="m-refreshvalues" /><code>{"private async void RefreshValues()"}</code> |  |
| <Link id="m-setup" /><code>{"protected override void Setup()"}</code> |  |
| <Link id="m-updatetext" /><code>{"protected virtual void UpdateText()"}</code> |  |
| <Link id="m-wrapenumindex" /><code>{"protected int WrapEnumIndex(int index)"}</code> |  |
