---
title: "FadeInOutNetworkEntity"
description: "Fader for a network entity: when the scene destroys the entity (not on chunk unload), it spawns the fade-out effect for its meshes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FadeInOutNetworkEntity

A **class** in `Root.Township`, the global namespace.

Fader for a network entity: when the scene destroys the entity (not on chunk unload), it spawns the fade-out effect for its meshes. Client only; does nothing on a headless server.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`PracticeAreaShrinkFader`](/mod/game-api/types/global-p/practiceareashrinkfader)
- **Derived types** [`PracticeObjectFader`](/mod/game-api/types/global-p/practiceobjectfader)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FadeInOutNetworkEntity()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">Backing field for `Entity`, set from the same GameObject.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The `NetworkEntity` on the same GameObject.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Client: copies the fade material and hooks the entity's `DestroyedByScene` event to `FadeOut`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fadeout" /><code>{"private void FadeOut("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Handler for `DestroyedByScene`. Plays the fade-out unless the entity is only being unloaded.</span> |

</details>
