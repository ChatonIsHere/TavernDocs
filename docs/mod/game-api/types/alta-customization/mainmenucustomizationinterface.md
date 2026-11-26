---
title: "MainMenuCustomizationInterface"
description: "Sets up the character customization room in the main menu when the player logs in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuCustomizationInterface

A **class** in `Root.Township`, `Alta.Customization`.

Sets up the character customization room in the main menu when the player logs in. Client side.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`LoggedInTool`](/mod/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuCustomizationInterface()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customizationinterface" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationInterface"}</code> | <span className="api-desc">The customization manager for the room.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected override void LoggedIn()"}</code> | <span className="api-desc">Calls `InitializeRoom`.</span> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | <span className="api-desc">Hides the customization room.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Saves the current look into `StaticRandomCustomization` for next time.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializeroom" /><code>{"private async void InitializeRoom()"}</code> | <span className="api-desc">Works out the subscriber status, loads owned cosmetics and starts the room, then randomizes the look or reloads the saved random one.</span> |

</details>
