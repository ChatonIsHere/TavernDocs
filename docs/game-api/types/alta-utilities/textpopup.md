---
title: "TextPopup"
description: "class TextPopup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextPopup

A **class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DamagePopup`](/game-api/types/alta-utilities/damagepopup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextPopup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-locomotioncontroller" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotioncontroller">{"LocomotionController"}</Link>{" locomotionController"}</code> |  |
| <Link id="m-maxdistance" /><code>{"private float maxDistance"}</code> |  |
| <Link id="m-scalebasedondistance" /><code>{"private AnimationCurve scaleBasedOnDistance"}</code> |  |
| <Link id="m-text" /><code>{"private Text text"}</code> |  |
| <Link id="m-upspeed" /><code>{"private float upSpeed"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-pooledobject" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" { get; set; }"}</code> |  |
| <Link id="m-localplayerhead" /><code>{"private Transform LocalPlayerHead { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatetext" /><code>{"void UpdateText(string textToDisplay)"}</code> |  |
| <Link id="m-updatetext-2" /><code>{"void UpdateText(string textToDisplay, Color color)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkenabled" /><code>{"private void CheckEnabled("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
| <Link id="m-updatehead" /><code>{"private void UpdateHead("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TextPopup`:

[`DurabilityGlobalSettings.GetPopup`](/game-api/types/global-c-d/durabilityglobalsettings#m-getpopup), [`InteractableInspector.text`](/game-api/types/global-i-l/interactableinspector#m-text).
