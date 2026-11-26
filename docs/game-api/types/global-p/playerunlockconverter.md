---
title: "PlayerUnlockConverter"
description: "Converter that finds a PlayerUnlock from text: a number is looked up as a hash by the base class, anything else by name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockConverter

A **class** in `Root.Township`, no namespace.

Converter that finds a `PlayerUnlock` from text: a number is looked up as a hash by the base class, anything else by name.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`HashedGeneralValueConverter<PlayerUnlock>`](/game-api/types/assembly-other/hashedgeneralvalueconverter-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockConverter()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfromstring" /><code>{"protected override "}<Link to="/game-api/types/assembly-other/hashedgeneralvalue-t">{"HashedGeneralValue"}</Link>{"<"}<Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"> GetFromString(string input)"}</code> | Returns the unlock whose lowercase name matches the input, or null. |
