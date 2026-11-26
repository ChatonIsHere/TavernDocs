---
title: "SettingsPanel.SettingsPanelConfiguration"
description: "One page of the settings panel: the board it shows and the lever that switches to it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SettingsPanel.SettingsPanelConfiguration

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One page of the settings panel: the board it shows and the lever that switches to it. Private to `SettingsPanel`, set in the inspector.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SettingsPanel`](/mod/game-api/types/global-s/settingspanel)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SettingsPanelConfiguration()"}</code> | Creates a `SettingsPanel.SettingsPanelConfiguration` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-board" /><code>{"private Transform board"}</code> | Backing field for `Board`. |
| <Link id="m-isswitchingto" /><code>{"private bool isSwitchingTo"}</code> | Inspector button for switching to this page in the editor. |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" lever"}</code> | Backing field for `Lever`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-board-2" /><code>{"Transform Board { get; }"}</code> | The board transform for this page. Hidden at start and shown when its lever is picked. |
| <Link id="m-isswitchingto-2" /><code>{"bool IsSwitchingTo { get; }"}</code> | Value of the Switch To inspector button. |
| <Link id="m-lever-2" /><code><Link to="/mod/game-api/types/global-s/selectionlever">{"SelectionLever"}</Link>{" Lever { get; }"}</code> | The `SelectionLever` that switches to this page. Other levers reset to 0 when this one moves. |

## Used in

Members of other types that take, return or hold a `SettingsPanelConfiguration`:

[`SettingsPanel.currentPanel`](/mod/game-api/types/global-s/settingspanel#m-currentpanel), [`SettingsPanel.panels`](/mod/game-api/types/global-s/settingspanel#m-panels), [`SettingsPanel.SwitchToBoard`](/mod/game-api/types/global-s/settingspanel#m-switchtoboard), [`SettingsPanel.SwitchToBoardCoroutine`](/mod/game-api/types/global-s/settingspanel#m-switchtoboardcoroutine).
