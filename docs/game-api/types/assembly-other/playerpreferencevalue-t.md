---
title: "PlayerPreferenceValue<T>"
description: "Base for a typed value stored in PlayerPreferences (the local player.prefs file) under one key."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPreferenceValue&lt;T&gt;

An **abstract class** in `Alta.IO`, no namespace.

Base for a typed value stored in `PlayerPreferences` (the local `player.prefs` file) under one key.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IPlayerPreferenceValue<T>`](/game-api/types/assembly-other/iplayerpreferencevalue-t)
- **Derived types** [`PlayerPreferenceBool`](/game-api/types/assembly-other/playerpreferencebool), [`PlayerPreferenceFloat`](/game-api/types/assembly-other/playerpreferencefloat), [`PlayerPreferenceInt`](/game-api/types/assembly-other/playerpreferenceint), [`PlayerPreferenceString`](/game-api/types/assembly-other/playerpreferencestring)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected PlayerPreferenceValue(string key, Action<string, T> setter, Func<string, T, T> getter)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getter" /><code>{"private readonly Func<string, T, T> getter"}</code> | Function that reads a value by key with a default. |
| <Link id="m-key" /><code>{"private readonly string key"}</code> | Preference key the value is stored under. |
| <Link id="m-setter" /><code>{"private readonly Action<string, T> setter"}</code> | Function that writes a value by key. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"T Value { get; set; }"}</code> | Reads the stored value (default if missing) or writes a new one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static T op_Implicit("}<Link to="/game-api/types/assembly-other/playerpreferencevalue-t">{"PlayerPreferenceValue"}</Link>{"<T> value)"}</code> | Lets the preference be used directly as its value. |
