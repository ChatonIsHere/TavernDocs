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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`StringGameSettingsAccess`](/mod/game-api/types/alta-utilities/stringgamesettingsaccess)
- **Derived types** [`EnumMenuSettingBase`](/mod/game-api/types/alta-menus/enummenusettingbase), [`EnumGameSettingAccess`](/mod/game-api/types/alta-utilities/enumgamesettingaccess), [`MicrophoneEnumSettingAccess`](/mod/game-api/types/alta-utilities/microphoneenumsettingaccess)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected EnumSettingAccess()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpossiblevalue" /><code>{"virtual async Task<string[]> GetPossibleValue()"}</code> | <span className="api-desc">The option names to show. The base returns a single empty string.</span> |
