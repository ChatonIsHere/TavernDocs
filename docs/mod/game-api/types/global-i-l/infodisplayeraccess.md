---
title: "InfoDisplayerAccess"
description: "A debug text asset that code writes a line of text to and an InfoDisplayer shows on screen."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InfoDisplayerAccess

A **class** in `Root.Township`, the global namespace.

A debug text asset that code writes a line of text to and an `InfoDisplayer` shows on screen. Wraps the text in a set prefix and suffix.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`AccessUpdate`](/mod/game-api/types/global-i-l/infodisplayeraccess-accessupdate)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InfoDisplayerAccess()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefix" /><code>{"private string prefix"}</code> | Text put before every value passed to `UpdateText`. |
| <Link id="m-sufix" /><code>{"private string sufix"}</code> | Text put after every value passed to `UpdateText`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | Whether the text should be shown. Turned on automatically by `UpdateText`. |
| <Link id="m-text" /><code>{"string Text { get; private set; }"}</code> | The current text, prefix and suffix included. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-enabledupdated" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/infodisplayeraccess-accessupdate">{"InfoDisplayerAccess.AccessUpdate"}</Link>{" EnabledUpdated"}</code> | Raised when `IsEnabled` changes. |
| <Link id="m-textupdated" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/infodisplayeraccess-accessupdate">{"InfoDisplayerAccess.AccessUpdate"}</Link>{" TextUpdated"}</code> | Raised when the text changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> | Shows or hides the text. |
| <Link id="m-updatetext" /><code>{"void UpdateText(string text)"}</code> | Sets the text (adding prefix and suffix) and enables it. Ignores changes that differ only in case. |

## Used in

Members of other types that take, return or hold a `InfoDisplayerAccess`:

[`ClimberSettings.gripAccess`](/mod/game-api/types/global-c-d/climbersettings#m-gripaccess), [`ClimberSettings.strengthAccessLeft`](/mod/game-api/types/global-c-d/climbersettings#m-strengthaccessleft), [`ClimberSettings.strengthAccessRight`](/mod/game-api/types/global-c-d/climbersettings#m-strengthaccessright), [`InfoDisplayer.accesses`](/mod/game-api/types/global-i-l/infodisplayer#m-accesses), [`InfoDisplayer.texts`](/mod/game-api/types/global-i-l/infodisplayer#m-texts), [`InfoDisplayer.UpdateEnabled`](/mod/game-api/types/global-i-l/infodisplayer#m-updateenabled), [`InfoDisplayer.UpdateText`](/mod/game-api/types/global-i-l/infodisplayer#m-updatetext), [`InfoDisplayerAccess.AccessUpdate.BeginInvoke`](/mod/game-api/types/global-i-l/infodisplayeraccess-accessupdate#m-begininvoke), [`InfoDisplayerAccess.AccessUpdate.Invoke`](/mod/game-api/types/global-i-l/infodisplayeraccess-accessupdate#m-invoke).
