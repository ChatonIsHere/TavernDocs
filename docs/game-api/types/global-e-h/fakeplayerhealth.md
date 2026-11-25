---
title: "FakePlayerHealth"
description: "A HealthObject for training targets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FakePlayerHealth

A **class** in `Root.Township`, no namespace.

A `HealthObject` for training targets.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`HealthObject`](/game-api/types/global-e-h/healthobject)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FakePlayerHealth()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-damage" /><code>{"private float damage"}</code> |
| <Link id="m-lastdamages" /><code>{"private Queue<float> lastDamages"}</code> |
| <Link id="m-mindamagevalue" /><code>{"private float minDamageValue"}</code> |
| <Link id="m-point" /><code>{"private Vector3 point"}</code> |
| <Link id="m-showlastxdamages" /><code>{"private int showLastXDamages"}</code> |
| <Link id="m-syncpopup" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPopup"}</code> |
| <Link id="m-textcanvas" /><code>{"private Text textCanvas"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-receivedamage" /><code>{"override void ReceiveDamage(float healthDamage, float crippleDamage, "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" damage = null)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-showpopup" /><code>{"private void ShowPopup(Vector3 position, float damage)"}</code> |
| <Link id="m-syncpopup-2" /><code>{"private void SyncPopup("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-updatelastdamagetext" /><code>{"private void UpdateLastDamageText()"}</code> |

</details>
