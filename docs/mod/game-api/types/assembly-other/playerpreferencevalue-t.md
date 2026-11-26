---
title: "PlayerPreferenceValue<T>"
description: "Base for a typed value stored in PlayerPreferences (the local player.prefs file) under one key."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPreferenceValue&lt;T&gt;

An **abstract class** in `Alta.IO`, the global namespace.

Base for a typed value stored in `PlayerPreferences` (the local `player.prefs` file) under one key.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IPlayerPreferenceValue<T>`](/mod/game-api/types/assembly-other/iplayerpreferencevalue-t)
- **Derived types** [`PlayerPreferenceBool`](/mod/game-api/types/assembly-other/playerpreferencebool), [`PlayerPreferenceFloat`](/mod/game-api/types/assembly-other/playerpreferencefloat), [`PlayerPreferenceInt`](/mod/game-api/types/assembly-other/playerpreferenceint), [`PlayerPreferenceString`](/mod/game-api/types/assembly-other/playerpreferencestring)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerPreferenceValue(string key, Action<string, T> setter, Func<string, T, T> getter)"}</code> | <span className="api-desc">Creates a `PlayerPreferenceValue` from `key`, `setter` and `getter`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getter" /><code>{"private readonly Func<string, T, T> getter"}</code> | <span className="api-desc">Function that reads a value by key with a default.</span> |
| <Link id="m-key" /><code>{"private readonly string key"}</code> | <span className="api-desc">Preference key the value is stored under.</span> |
| <Link id="m-setter" /><code>{"private readonly Action<string, T> setter"}</code> | <span className="api-desc">Function that writes a value by key.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"T Value { get; set; }"}</code> | <span className="api-desc">Reads the stored value (default if missing) or writes a new one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static T op_Implicit("}<Link to="/mod/game-api/types/assembly-other/playerpreferencevalue-t">{"PlayerPreferenceValue"}</Link>{"<T> value)"}</code> | <span className="api-desc">Lets the preference be used directly as its value.</span> |
