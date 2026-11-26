---
title: "TouchScreenKeyboardKey.SpecialKeySetup"
description: "Event to run for one key code on a touch screen keyboard key, used for special key setup and for changes on press."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenKeyboardKey.SpecialKeySetup

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Event to run for one key code on a touch screen keyboard key, used for special key setup and for changes on press.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TouchScreenKeyboardKey`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecialKeySetup()"}</code> | <span className="api-desc">Creates a `TouchScreenKeyboardKey.SpecialKeySetup` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"private UnityEvent setup"}</code> | <span className="api-desc">Backing field for `Setup`.</span> |
| <Link id="m-targetkey" /><code>{"private KeyCode targetKey"}</code> | <span className="api-desc">Backing field for `TargetKey`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-setup-2" /><code>{"UnityEvent Setup { get; }"}</code> | <span className="api-desc">Event invoked for the matching key.</span> |
| <Link id="m-targetkey-2" /><code>{"KeyCode TargetKey { get; }"}</code> | <span className="api-desc">Key code this entry applies to.</span> |

## Used in

Members of other types that take, return or hold a `SpecialKeySetup`:

<div className="api-used-in">

[`TouchScreenKeyboardKey.onPressChange`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-onpresschange), [`TouchScreenKeyboardKey.specialSetups`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-specialsetups).

</div>
