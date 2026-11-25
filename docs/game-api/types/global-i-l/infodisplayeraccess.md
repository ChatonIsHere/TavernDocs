---
title: "InfoDisplayerAccess"
description: "class InfoDisplayerAccess in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InfoDisplayerAccess

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`AccessUpdate`](/game-api/types/global-i-l/infodisplayeraccess-accessupdate)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InfoDisplayerAccess()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prefix" /><code>{"private string prefix"}</code> |  |
| <Link id="m-sufix" /><code>{"private string sufix"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> |  |
| <Link id="m-text" /><code>{"string Text { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-enabledupdated" /><code>{"event "}<Link to="/game-api/types/global-i-l/infodisplayeraccess-accessupdate">{"InfoDisplayerAccess.AccessUpdate"}</Link>{" EnabledUpdated"}</code> |  |
| <Link id="m-textupdated" /><code>{"event "}<Link to="/game-api/types/global-i-l/infodisplayeraccess-accessupdate">{"InfoDisplayerAccess.AccessUpdate"}</Link>{" TextUpdated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> |  |
| <Link id="m-updatetext" /><code>{"void UpdateText(string text)"}</code> |  |

## Used in

Members of other types that take, return or hold a `InfoDisplayerAccess`:

[`ClimberSettings.gripAccess`](/game-api/types/global-c-d/climbersettings#m-gripaccess), [`ClimberSettings.strengthAccessLeft`](/game-api/types/global-c-d/climbersettings#m-strengthaccessleft), [`ClimberSettings.strengthAccessRight`](/game-api/types/global-c-d/climbersettings#m-strengthaccessright), [`InfoDisplayer.accesses`](/game-api/types/global-i-l/infodisplayer#m-accesses), [`InfoDisplayer.texts`](/game-api/types/global-i-l/infodisplayer#m-texts), [`InfoDisplayer.UpdateEnabled`](/game-api/types/global-i-l/infodisplayer#m-updateenabled), [`InfoDisplayer.UpdateText`](/game-api/types/global-i-l/infodisplayer#m-updatetext), [`InfoDisplayerAccess.AccessUpdate.BeginInvoke`](/game-api/types/global-i-l/infodisplayeraccess-accessupdate#m-begininvoke), [`InfoDisplayerAccess.AccessUpdate.Invoke`](/game-api/types/global-i-l/infodisplayeraccess-accessupdate#m-invoke).
