---
title: "AssistedSpawnCommandDefinition"
description: "Menu command asset that builds a spawn command for the local player from a chosen prefab and quantity, then routes it to the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AssistedSpawnCommandDefinition

A **class** in `Root.Township`, `Alta.Menu`.

Menu command asset that builds a `spawn` command for the local player from a chosen prefab and quantity, then routes it to the server. Created from the Township/Assisted Spawn asset menu.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ServerCommandDefinitionBase`](/game-api/types/alta-menus/servercommanddefinitionbase), [`IHasDynamicArguments`](/game-api/types/alta-menus/ihasdynamicarguments), [`IUsesMultipleButtons`](/game-api/types/alta-menus/iusesmultiplebuttons)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AssistedSpawnCommandDefinition()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prefab" /><code>{"const string Prefab"}</code> | Argument name for the prefab (`prefab`). |
| <Link id="m-quantity" /><code>{"const string Quantity"}</code> | Argument name for the quantity (`quantity`). |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-argumentmap" /><code>{"private readonly Dictionary<string, string> argumentMap"}</code> | Current prefab and quantity values by argument name. |
| <Link id="m-autocompletionsource" /><code>{"private Object autoCompletionSource"}</code> | Backing object for `AutoCompletionSource`. |
| <Link id="m-spawncommandbase" /><code>{"private const string SpawnCommandBase"}</code> | The command template, `spawn {localplayer} {prefab} {quantity}`. |
| <Link id="m-spawnquantities" /><code>{"private int[] spawnQuantities"}</code> | Backing field for `SpawnQuantities`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-labels" /><code>{"string[] Labels { get; }"}</code> | The spawn quantities as button labels. |
| <Link id="m-settingdescription" /><code>{"override string SettingDescription { get; }"}</code> | Always empty for this command. |
| <Link id="m-spawnquantities-2" /><code>{"int[] SpawnQuantities { get; }"}</code> | The quantities offered as buttons. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autocompletionsource-2" /><code>{"private "}<Link to="/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" AutoCompletionSource { get; }"}</code> | The completion source that lists valid prefab names. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-argumentisvalid" /><code>{"bool ArgumentIsValid(string argumentName)"}</code> | Checks one argument: the prefab must be in the completion source, the quantity must parse as an int. |
| <Link id="m-commandisvalid" /><code>{"bool CommandIsValid()"}</code> | True when both the prefab and quantity arguments are valid. |
| <Link id="m-getargument" /><code>{"string GetArgument(string name)"}</code> | Returns an argument's current value, or an empty string if unknown. |
| <Link id="m-runcommandonclient" /><code>{"override void RunCommandOnClient()"}</code> | Builds the command and sends it through `CommandSync.Instance.RouteCommand`. |
| <Link id="m-setargument" /><code>{"void SetArgument(string name, string argument)"}</code> | Sets an argument's value by name. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-parsecommand" /><code>{"private string ParseCommand()"}</code> | Fills the prefab and quantity into the command template, removing spaces from the values. |

</details>

## Used in

Members of other types that take, return or hold a `AssistedSpawnCommandDefinition`:

[`AssistedSpawnCommandAction.assistedCommandDefinition`](/game-api/types/alta-menus/assistedspawncommandaction#m-assistedcommanddefinition).
