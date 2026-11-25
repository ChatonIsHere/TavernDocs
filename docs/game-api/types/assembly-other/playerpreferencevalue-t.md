---
title: "PlayerPreferenceValue<T>"
description: "abstract class PlayerPreferenceValue<T> in Alta.IO."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerPreferenceValue&lt;T&gt;

An **abstract class** in `Alta.IO`, no namespace.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IPlayerPreferenceValue<T>`](/game-api/types/assembly-other/iplayerpreferencevalue-t)
- **Derived types** [`PlayerPreferenceBool`](/game-api/types/assembly-other/playerpreferencebool), [`PlayerPreferenceFloat`](/game-api/types/assembly-other/playerpreferencefloat), [`PlayerPreferenceInt`](/game-api/types/assembly-other/playerpreferenceint), [`PlayerPreferenceString`](/game-api/types/assembly-other/playerpreferencestring)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PlayerPreferenceValue(string key, Action<string, T> setter, Func<string, T, T> getter)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-getter" /><code>{"private readonly Func<string, T, T> getter"}</code> |  |
| <Link id="m-key" /><code>{"private readonly string key"}</code> |  |
| <Link id="m-setter" /><code>{"private readonly Action<string, T> setter"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"T Value { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static T op_Implicit("}<Link to="/game-api/types/assembly-other/playerpreferencevalue-t">{"PlayerPreferenceValue"}</Link>{"<T> value)"}</code> |  |
