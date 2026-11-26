---
title: "InGameInspector.CommandRunner"
description: "Debug inspector tool that runs console commands listed in DebugToolCommandRunner.txt in the mods folder, one line per command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.CommandRunner

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that runs console commands listed in `DebugToolCommandRunner.txt` in the mods folder, one line per command. On a client it sends the chosen command to the server to run.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/game-api/types/global-i-l/ingameinspector-ingametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandRunner("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | Creates an `InGameInspector.CommandRunner` from `inspector`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commands" /><code>{"private string[] commands"}</code> | Lines read from the command file. |
| <Link id="m-currentcommand" /><code>{"private int currentCommand"}</code> | Index of the selected command. |
| <Link id="m-hascommands" /><code>{"private bool hasCommands"}</code> | Whether the file had at least one line. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Shown on the inspector as "Console Command Runner". |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-path" /><code>{"private string Path { get; }"}</code> | Full path of `DebugToolCommandRunner.txt` inside the configured mods directory. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Does nothing for this tool. |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Reads the command file into `commands`, if it exists. |
| <Link id="m-pressclearasync" /><code>{"override async void PressClearAsync()"}</code> | Runs the selected command through `CommandService.Handle` on the server, or sends it to the server from a client. |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | Selects the previous command, wrapping round. |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | Selects the next command, wrapping round. |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | Does nothing for this tool. |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Does nothing for this tool. |
| <Link id="m-serialize" /><code>{"override async void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the selected command into the sync message. When the server reads one, it runs it through `CommandService.Handle`. |
| <Link id="m-update" /><code>{"override void Update()"}</code> | Shows the selected command, or says none are available. |
