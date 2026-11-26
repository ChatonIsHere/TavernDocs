---
title: "IAutoCompletionSource"
description: "Something that supplies a list of strings for an autocomplete text field, such as object names in a folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAutoCompletionSource

An **interface** in `Root.Township`, `Alta.Meta.UI`.

Something that supplies a list of strings for an autocomplete text field, such as object names in a folder.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Derived types** [`ObjectNamesInFolder`](/mod/game-api/types/alta-menus/objectnamesinfolder)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completions" /><code>{"string[] Completions { get; }"}</code> | <span className="api-desc">The strings offered as completions.</span> |

## Used in

Members of other types that take, return or hold a `IAutoCompletionSource`:

<div className="api-used-in">

[`AssistedSpawnCommandDefinition.AutoCompletionSource`](/mod/game-api/types/alta-menus/assistedspawncommanddefinition#m-autocompletionsource-2), [`AutoComplete.AutoComplete`](/mod/game-api/types/alta-menus/autocomplete#m-ctor), [`AutoComplete.autoCompletions`](/mod/game-api/types/alta-menus/autocomplete#m-autocompletions), [`AutoComplete.HasCompletionSource`](/mod/game-api/types/alta-menus/autocomplete#m-hascompletionsource), [`AutoComplete.TrySetNewCompletionSource`](/mod/game-api/types/alta-menus/autocomplete#m-trysetnewcompletionsource), [`InputFieldWithKeyboard.AutoCompletionSource`](/mod/game-api/types/alta-menus/inputfieldwithkeyboard#m-autocompletionsource-2), [`TouchScreenKeyboard.ApplyNewAutoCompletionSource`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-applynewautocompletionsource).

</div>
