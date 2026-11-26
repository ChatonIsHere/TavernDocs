---
title: "InGameInspector.CommandRunner"
description: "Debug inspector tool that runs console commands listed in DebugToolCommandRunner.txt in the mods folder, one line per command."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.CommandRunner

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that runs console commands listed in `DebugToolCommandRunner.txt` in the mods folder, one line per command. On a client it sends the chosen command to the server to run.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/mod/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/mod/game-api/types/global-i-l/ingameinspector-ingametool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommandRunner("}<Link to="/mod/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> | <span className="api-desc">Creates an `InGameInspector.CommandRunner` from `inspector`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-commands" /><code>{"private string[] commands"}</code> | <span className="api-desc">Lines read from the command file.</span> |
| <Link id="m-currentcommand" /><code>{"private int currentCommand"}</code> | <span className="api-desc">Index of the selected command.</span> |
| <Link id="m-hascommands" /><code>{"private bool hasCommands"}</code> | <span className="api-desc">Whether the file had at least one line.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | <span className="api-desc">Shown on the inspector as "Console Command Runner".</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-path" /><code>{"private string Path { get; }"}</code> | <span className="api-desc">Full path of `DebugToolCommandRunner.txt` inside the configured mods directory.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Reads the command file into `commands`, if it exists.</span> |
| <Link id="m-pressclearasync" /><code>{"override async void PressClearAsync()"}</code> | <span className="api-desc">Runs the selected command through `CommandService.Handle` on the server, or sends it to the server from a client.</span> |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | <span className="api-desc">Selects the previous command, wrapping round.</span> |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | <span className="api-desc">Selects the next command, wrapping round.</span> |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Does nothing for this tool.</span> |
| <Link id="m-serialize" /><code>{"override async void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes the selected command into the sync message. When the server reads one, it runs it through `CommandService.Handle`.</span> |
| <Link id="m-update" /><code>{"override void Update()"}</code> | <span className="api-desc">Shows the selected command, or says none are available.</span> |
