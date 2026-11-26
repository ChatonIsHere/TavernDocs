---
title: "FadeInOutNetworkEntity"
description: "Fader for a network entity: when the scene destroys the entity (not on chunk unload), it spawns the fade-out effect for its meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FadeInOutNetworkEntity

A **class** in `Root.Township`, no namespace.

Fader for a network entity: when the scene destroys the entity (not on chunk unload), it spawns the fade-out effect for its meshes. Client only; does nothing on a headless server.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`PracticeAreaShrinkFader`](/game-api/types/global-p/practiceareashrinkfader)
- **Derived types** [`PracticeObjectFader`](/game-api/types/global-p/practiceobjectfader)
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FadeInOutNetworkEntity()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | Backing field for `Entity`, set from the same GameObject. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The `NetworkEntity` on the same GameObject. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Client: copies the fade material and hooks the entity's `DestroyedByScene` event to `FadeOut`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadeout" /><code>{"private void FadeOut("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Handler for `DestroyedByScene`. Plays the fade-out unless the entity is only being unloaded. |

</details>
