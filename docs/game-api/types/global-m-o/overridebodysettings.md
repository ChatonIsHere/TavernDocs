---
title: "OverrideBodySettings"
description: "Component on an interactable that swaps in different body controller settings for a player while they're interacting with it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OverrideBodySettings

A **class** in `Root.Township`, no namespace.

Component on an interactable that swaps in different body controller settings for a player while they're interacting with it.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OverrideBodySettings()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | The interactable on the same object. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" settings"}</code> | The body controller settings to use during the interaction. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the interactable's `InteractionStarted`. |
| <Link id="m-overridesettings" /><code>{"private void OverrideSettings("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Adds `settings` as an override on the player's body controller, lasting while the interactor still holds this interactable. |

</details>
