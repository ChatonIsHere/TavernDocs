---
title: "FestiveFeature"
description: "Turns components and child objects on or off while a Festivity is active, for seasonal decorations."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FestiveFeature

A **class** in `Root.Township`, the global namespace.

Turns components and child objects on or off while a `Festivity` is active, for seasonal decorations. Runs on each side from the festivity's synced state.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable), [`IForcePresenceOnAndroidClient`](/mod/game-api/types/alta-networking/iforcepresenceonandroidclient), [`IIgnoreForStaticFlatten`](/mod/game-api/types/alta-utilities/iignoreforstaticflatten), [`IDontSplit`](/mod/game-api/types/global-i-l/idontsplit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FestiveFeature()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" activated"}</code> | <span className="api-desc">Event fired when the festivity turns on (also on enable if it is already on).</span> |
| <Link id="m-changedwhilespawned" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" changedWhileSpawned"}</code> | <span className="api-desc">Event fired only when the state changes after the object is enabled.</span> |
| <Link id="m-components" /><code>{"private Behaviour[] components"}</code> | <span className="api-desc">Behaviours whose `enabled` follows the festivity state.</span> |
| <Link id="m-deactivated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" deactivated"}</code> | <span className="api-desc">Event fired when the festivity turns off (also on enable if it is off).</span> |
| <Link id="m-festivity" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity"}</code> | <span className="api-desc">The festivity this feature follows.</span> |
| <Link id="m-gameobjects" /><code>{"private GameObject[] gameObjects"}</code> | <span className="api-desc">Game objects set active or inactive with the festivity.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"private void Modify(bool isActive)"}</code> | <span className="api-desc">Enables or disables every listed component and game object, then fires `activated` or `deactivated`.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unsubscribes from the festivity's `ActivationChanged` event.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Swaps in the resources copy of the festivity, applies its current state and subscribes to changes. Logs an error if none is assigned.</span> |
| <Link id="m-onfestivityactivationchanged" /><code>{"private void OnFestivityActivationChanged("}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity)"}</code> | <span className="api-desc">Handler for `ActivationChanged`: applies the new state and fires `changedWhileSpawned`.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step that strips null entries from `components` and `gameObjects`.</span> |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | <span className="api-desc">Applies a state by hand and fires `changedWhileSpawned`. Private and not called in this code.</span> |
| <Link id="m-trygetfestivityfromresources" /><code>{"private bool TryGetFestivityFromResources()"}</code> | <span className="api-desc">Replaces the serialized festivity with the instance from `HashedGeneralValue` by hash, so it shares the live state. False if not found.</span> |

</details>
