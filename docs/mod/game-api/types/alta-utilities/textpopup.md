---
title: "TextPopup"
description: "Client: pooled floating text that drifts upward, faces the local player's head and scales with distance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextPopup

A **class** in `Root.Township`, `Alta.Utilities`.

Client: pooled floating text that drifts upward, faces the local player's head and scales with distance. It switches itself off beyond `maxDistance` and back on when the player comes close. `DamagePopup` extends it.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DamagePopup`](/mod/game-api/types/alta-utilities/damagepopup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextPopup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-locomotioncontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" locomotionController"}</code> | <span className="api-desc">The local player's locomotion controller, used to detect when they come back in range.</span> |
| <Link id="m-maxdistance" /><code>{"private float maxDistance"}</code> | <span className="api-desc">Squared distance beyond which the popup stops updating. Set as 10 metres in the inspector.</span> |
| <Link id="m-scalebasedondistance" /><code>{"private AnimationCurve scaleBasedOnDistance"}</code> | <span className="api-desc">Curve mapping distance to the head onto the popup's scale.</span> |
| <Link id="m-text" /><code>{"private Text text"}</code> | <span className="api-desc">UI text component that shows the message.</span> |
| <Link id="m-upspeed" /><code>{"private float upSpeed"}</code> | <span className="api-desc">How fast the popup rises, in metres per second.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pooledobject" /><code><Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The pooled object this popup belongs to. The popup stops updating once it is released.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localplayerhead" /><code>{"private Transform LocalPlayerHead { get; set; }"}</code> | <span className="api-desc">The local player's head transform the popup faces.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatetext" /><code>{"void UpdateText(string textToDisplay)"}</code> | <span className="api-desc">Sets the text, in red unless a colour is given.</span> |
| <Link id="m-updatetext-2" /><code>{"void UpdateText(string textToDisplay, Color color)"}</code> | <span className="api-desc">Sets the text, in red unless a colour is given.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Gets the pooled object and the local player's head, and hooks local player changes.</span> |
| <Link id="m-checkenabled" /><code>{"private void CheckEnabled("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Locomotion handler: re-enables the popup once the player moves within range.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the locomotion and local player events.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Moves the text up, turns it to face the head and scales it, or disables itself when the player is too far.</span> |
| <Link id="m-updatehead" /><code>{"private void UpdateHead("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Takes the head and locomotion controller of a newly set local player.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TextPopup`:

<div className="api-used-in">

[`DurabilityGlobalSettings.GetPopup`](/mod/game-api/types/global-c-d/durabilityglobalsettings#m-getpopup), [`InteractableInspector.text`](/mod/game-api/types/global-i-l/interactableinspector#m-text).

</div>
