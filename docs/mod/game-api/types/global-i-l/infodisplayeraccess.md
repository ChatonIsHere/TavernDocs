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
| <Link id="m-ctor" /><code>{"InfoDisplayerAccess()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefix" /><code>{"private string prefix"}</code> | <span className="api-desc">Text put before every value passed to `UpdateText`.</span> |
| <Link id="m-sufix" /><code>{"private string sufix"}</code> | <span className="api-desc">Text put after every value passed to `UpdateText`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | <span className="api-desc">Whether the text should be shown. Turned on automatically by `UpdateText`.</span> |
| <Link id="m-text" /><code>{"string Text { get; private set; }"}</code> | <span className="api-desc">The current text, prefix and suffix included.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-enabledupdated" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/infodisplayeraccess-accessupdate">{"InfoDisplayerAccess.AccessUpdate"}</Link>{" EnabledUpdated"}</code> | <span className="api-desc">Raised when `IsEnabled` changes.</span> |
| <Link id="m-textupdated" /><code>{"event "}<Link to="/mod/game-api/types/global-i-l/infodisplayeraccess-accessupdate">{"InfoDisplayerAccess.AccessUpdate"}</Link>{" TextUpdated"}</code> | <span className="api-desc">Raised when the text changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> | <span className="api-desc">Shows or hides the text.</span> |
| <Link id="m-updatetext" /><code>{"void UpdateText(string text)"}</code> | <span className="api-desc">Sets the text (adding prefix and suffix) and enables it. Ignores changes that differ only in case.</span> |

## Used in

Members of other types that take, return or hold a `InfoDisplayerAccess`:

<div className="api-used-in">

[`ClimberSettings.gripAccess`](/mod/game-api/types/global-c-d/climbersettings#m-gripaccess), [`ClimberSettings.strengthAccessLeft`](/mod/game-api/types/global-c-d/climbersettings#m-strengthaccessleft), [`ClimberSettings.strengthAccessRight`](/mod/game-api/types/global-c-d/climbersettings#m-strengthaccessright), [`InfoDisplayer.accesses`](/mod/game-api/types/global-i-l/infodisplayer#m-accesses), [`InfoDisplayer.texts`](/mod/game-api/types/global-i-l/infodisplayer#m-texts), [`InfoDisplayer.UpdateEnabled`](/mod/game-api/types/global-i-l/infodisplayer#m-updateenabled), [`InfoDisplayer.UpdateText`](/mod/game-api/types/global-i-l/infodisplayer#m-updatetext), [`InfoDisplayerAccess.AccessUpdate.BeginInvoke`](/mod/game-api/types/global-i-l/infodisplayeraccess-accessupdate#m-begininvoke), [`InfoDisplayerAccess.AccessUpdate.Invoke`](/mod/game-api/types/global-i-l/infodisplayeraccess-accessupdate#m-invoke).

</div>
