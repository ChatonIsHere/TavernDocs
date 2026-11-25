---
title: "AssistedSpawnCommandDefinition"
description: "class AssistedSpawnCommandDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AssistedSpawnCommandDefinition

A **class** in `Root.Township`, `Alta.Menu`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ServerCommandDefinitionBase`](/game-api/types/alta-menus/servercommanddefinitionbase), [`IHasDynamicArguments`](/game-api/types/alta-menus/ihasdynamicarguments), [`IUsesMultipleButtons`](/game-api/types/alta-menus/iusesmultiplebuttons)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AssistedSpawnCommandDefinition()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-prefab" /><code>{"const string Prefab"}</code> |
| <Link id="m-quantity" /><code>{"const string Quantity"}</code> |

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-argumentmap" /><code>{"private readonly Dictionary<string, string> argumentMap"}</code> |
| <Link id="m-autocompletionsource" /><code>{"private Object autoCompletionSource"}</code> |
| <Link id="m-spawncommandbase" /><code>{"private const string SpawnCommandBase"}</code> |
| <Link id="m-spawnquantities" /><code>{"private int[] spawnQuantities"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-labels" /><code>{"string[] Labels { get; }"}</code> |
| <Link id="m-settingdescription" /><code>{"override string SettingDescription { get; }"}</code> |
| <Link id="m-spawnquantities-2" /><code>{"int[] SpawnQuantities { get; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-autocompletionsource-2" /><code>{"private "}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" AutoCompletionSource { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-argumentisvalid" /><code>{"bool ArgumentIsValid(string argumentName)"}</code> |
| <Link id="m-commandisvalid" /><code>{"bool CommandIsValid()"}</code> |
| <Link id="m-getargument" /><code>{"string GetArgument(string name)"}</code> |
| <Link id="m-runcommandonclient" /><code>{"override void RunCommandOnClient()"}</code> |
| <Link id="m-setargument" /><code>{"void SetArgument(string name, string argument)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-parsecommand" /><code>{"private string ParseCommand()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `AssistedSpawnCommandDefinition`:

[`AssistedSpawnCommandAction.assistedCommandDefinition`](/game-api/types/alta-menus/assistedspawncommandaction#m-assistedcommanddefinition).
