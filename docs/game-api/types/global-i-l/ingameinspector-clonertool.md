---
title: "InGameInspector.ClonerTool"
description: "Debug inspector tool that saves the object you point at and spawns copies of it in front of the pointer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameInspector.ClonerTool

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Debug inspector tool that saves the object you point at and spawns copies of it in front of the pointer. Cloning only works on the server.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InGameInspector`](/game-api/types/global-i-l/ingameinspector)
- **Inherits or implements** [`InGameInspector.NonTeleporterInGameTool`](/game-api/types/global-i-l/ingameinspector-nonteleporteringametool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClonerTool("}<Link to="/game-api/types/global-i-l/ingameinspector">{"InGameInspector"}</Link>{" inspector)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-prefabname" /><code>{"private string prefabName"}</code> | Original name of the saved object, shown on the inspector. |
| <Link id="m-savedtool" /><code>{"private "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" savedTool"}</code> | Saved data of the object to clone, or null when nothing is selected. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"override string Name { get; }"}</code> | Shown on the inspector as "Cloner". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Restores teleport mode and hides the pointer line. |
| <Link id="m-enable" /><code>{"override void Enable("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Takes over the teleport button, clears the saved object and shows the pointer line. |
| <Link id="m-pressclearasync" /><code>{"override void PressClearAsync()"}</code> | Server: spawns a clone of the saved object one metre along the pointer, in the inspector's chunk. |
| <Link id="m-pressdown" /><code>{"override void PressDown()"}</code> | Does nothing for this tool. |
| <Link id="m-pressup" /><code>{"override void PressUp()"}</code> | Does nothing for this tool. |
| <Link id="m-receiveangle" /><code>{"override void ReceiveAngle(float angle)"}</code> | Does nothing for this tool. |
| <Link id="m-receiveinput" /><code>{"override void ReceiveInput("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | On a teleport press, raycasts and saves the hit object, walking up child-saved prefabs to the chunking parent. |
| <Link id="m-update" /><code>{"override void Update()"}</code> | Shows what is ready to clone, or says cloning isn't possible on a client. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getsaveof" /><code>{"private "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" GetSaveOf("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Serializes an entity's prefab with the latest chunk versioning into a `SavedDynamicObject`. |
| <Link id="m-spawnclone" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnClone()"}</code> | Spawns the saved prefab unchunked and loads the saved data into it. Returns the new entity. |

</details>
