---
title: "PlayerUnlockConverter"
description: "Converter that finds a PlayerUnlock from text: a number is looked up as a hash by the base class, anything else by name."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockConverter

A **class** in `Root.Township`, the global namespace.

Converter that finds a `PlayerUnlock` from text: a number is looked up as a hash by the base class, anything else by name.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`HashedGeneralValueConverter<PlayerUnlock>`](/mod/game-api/types/assembly-other/hashedgeneralvalueconverter-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockConverter()"}</code> | <span className="api-desc">Creates a `PlayerUnlockConverter` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfromstring" /><code>{"protected override "}<Link to="/mod/game-api/types/assembly-other/hashedgeneralvalue-t">{"HashedGeneralValue"}</Link>{"<"}<Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"> GetFromString(string input)"}</code> | <span className="api-desc">Returns the unlock whose lowercase name matches the input, or null.</span> |
