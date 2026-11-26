---
title: "OverrideBodySettings"
description: "Component on an interactable that swaps in different body controller settings for a player while they're interacting with it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OverrideBodySettings

A **class** in `Root.Township`, the global namespace.

Component on an interactable that swaps in different body controller settings for a player while they're interacting with it.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OverrideBodySettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | <span className="api-desc">The interactable on the same object.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/bodycontrollersettings">{"BodyControllerSettings"}</Link>{" settings"}</code> | <span className="api-desc">The body controller settings to use during the interaction.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the interactable's `InteractionStarted`.</span> |
| <Link id="m-overridesettings" /><code>{"private void OverrideSettings("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Adds `settings` as an override on the player's body controller, lasting while the interactor still holds this interactable.</span> |

</details>
