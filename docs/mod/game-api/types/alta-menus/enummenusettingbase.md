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

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`MenuGameSetting<EnumSettingAccess>`](/mod/game-api/types/alta-menus/menugamesetting-t)
- **Derived types** [`ButtonEnumMenuSetting`](/mod/game-api/types/alta-menus/buttonenummenusetting), [`ScrollerEnumMenuSetting`](/mod/game-api/types/alta-menus/scrollerenummenusetting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnumMenuSettingBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isrefreshing" /><code>{"protected bool isRefreshing"}</code> | <span className="api-desc">True while the values are loading. Changes are ignored meanwhile.</span> |
| <Link id="m-possiblevalues" /><code>{"protected string[] possibleValues"}</code> | <span className="api-desc">The values to step through, from the setting.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-valuetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" valueText"}</code> | <span className="api-desc">Text that shows the current value.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentenumindex" /><code>{"int CurrentEnumIndex { get; protected set; }"}</code> | <span className="api-desc">Index of the shown value in `possibleValues`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gotonextvalue" /><code>{"void GoToNextValue()"}</code> | <span className="api-desc">Moves to the next value, wrapping round, and saves it.</span> |
| <Link id="m-gotopreviousvalue" /><code>{"void GoToPreviousValue()"}</code> | <span className="api-desc">Moves to the previous value, wrapping round, and saves it.</span> |
| <Link id="m-finishedrefresh" /><code>{"protected virtual void FinishedRefresh()"}</code> | <span className="api-desc">Called after the values have loaded. Empty by default.</span> |
| <Link id="m-refresh" /><code>{"protected void Refresh()"}</code> | <span className="api-desc">Wraps the index, writes the value to the setting and updates the text.</span> |
| <Link id="m-setup" /><code>{"protected override void Setup()"}</code> | <span className="api-desc">Loads the possible values and current value from the setting.</span> |
| <Link id="m-updatetext" /><code>{"protected virtual void UpdateText()"}</code> | <span className="api-desc">Shows the current value on the label.</span> |
| <Link id="m-wrapenumindex" /><code>{"protected int WrapEnumIndex(int index)"}</code> | <span className="api-desc">Wraps an index into the range of `possibleValues`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-refreshvalues" /><code>{"private async void RefreshValues()"}</code> | <span className="api-desc">Loads the setting's possible values and current value, finds its index and updates the text. Blocks changes while it runs.</span> |

</details>
