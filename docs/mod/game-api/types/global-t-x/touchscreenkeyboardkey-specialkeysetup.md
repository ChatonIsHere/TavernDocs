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
| <Link id="m-ctor" /><code>{"SpecialKeySetup()"}</code> | Creates a `TouchScreenKeyboardKey.SpecialKeySetup` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"private UnityEvent setup"}</code> | Backing field for `Setup`. |
| <Link id="m-targetkey" /><code>{"private KeyCode targetKey"}</code> | Backing field for `TargetKey`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-setup-2" /><code>{"UnityEvent Setup { get; }"}</code> | Event invoked for the matching key. |
| <Link id="m-targetkey-2" /><code>{"KeyCode TargetKey { get; }"}</code> | Key code this entry applies to. |

## Used in

Members of other types that take, return or hold a `SpecialKeySetup`:

[`TouchScreenKeyboardKey.onPressChange`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-onpresschange), [`TouchScreenKeyboardKey.specialSetups`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-specialsetups).
