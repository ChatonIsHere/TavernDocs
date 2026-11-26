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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Derived types** [`ObjectNamesInFolder`](/game-api/types/alta-menus/objectnamesinfolder)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completions" /><code>{"string[] Completions { get; }"}</code> | The strings offered as completions. |

## Used in

Members of other types that take, return or hold a `IAutoCompletionSource`:

[`AssistedSpawnCommandDefinition.AutoCompletionSource`](/game-api/types/alta-menus/assistedspawncommanddefinition#m-autocompletionsource-2), [`AutoComplete.AutoComplete`](/game-api/types/alta-menus/autocomplete#m-ctor), [`AutoComplete.autoCompletions`](/game-api/types/alta-menus/autocomplete#m-autocompletions), [`AutoComplete.HasCompletionSource`](/game-api/types/alta-menus/autocomplete#m-hascompletionsource), [`AutoComplete.TrySetNewCompletionSource`](/game-api/types/alta-menus/autocomplete#m-trysetnewcompletionsource), [`InputFieldWithKeyboard.AutoCompletionSource`](/game-api/types/alta-menus/inputfieldwithkeyboard#m-autocompletionsource-2), [`TouchScreenKeyboard.ApplyNewAutoCompletionSource`](/game-api/types/global-t-x/touchscreenkeyboard#m-applynewautocompletionsource).
