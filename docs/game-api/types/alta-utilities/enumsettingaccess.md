---
title: "EnumSettingAccess"
description: "Base for string settings that offer a fixed list of options, such as EnumGameSettingAccess and MicrophoneEnumSettingAccess."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnumSettingAccess

An **abstract class** in `Root.Township`, `Alta.Utilities`.

Base for string settings that offer a fixed list of options, such as `EnumGameSettingAccess` and `MicrophoneEnumSettingAccess`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`StringGameSettingsAccess`](/game-api/types/alta-utilities/stringgamesettingsaccess)
- **Derived types** [`EnumMenuSettingBase`](/game-api/types/alta-menus/enummenusettingbase), [`EnumGameSettingAccess`](/game-api/types/alta-utilities/enumgamesettingaccess), [`MicrophoneEnumSettingAccess`](/game-api/types/alta-utilities/microphoneenumsettingaccess)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected EnumSettingAccess()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpossiblevalue" /><code>{"virtual async Task<string[]> GetPossibleValue()"}</code> | The option names to show. The base returns a single empty string. |
