---
title: "InGameInspector.CommandRunner"
description: "class InGameInspector.CommandRunner in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.CommandRunner

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.InGameTool`](/game-api/types/global-i-l/ingameinspector-ingametool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CommandRunner("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-commands" /><code>{"private string[] commands"}</code> |
| <Link id="m-currentcommand" /><code>{"private int currentCommand"}</code> |
| <Link id="m-hascommands" /><code>{"private bool hasCommands"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-path" /><code>{"private string Path { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-pressclearasync" /><code>{"override async void PressClearAsync()"}</code> |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |
| <Link id="m-serialize" /><code>{"override async void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-update" /><code>{"override void Update()"}</code> |
