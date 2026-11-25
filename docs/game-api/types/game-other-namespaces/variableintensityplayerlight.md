---
title: "VariableIntensityPlayerLight"
description: "class VariableIntensityPlayerLight in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VariableIntensityPlayerLight

A **class** in `Root.Township`, `Features`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VariableIntensityPlayerLight()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-maxintensity" /><code>{"private float maxIntensity"}</code> |
| <Link id="m-minintensity" /><code>{"private float minIntensity"}</code> |
| <Link id="m-platformlight" /><code>{"private "}<Link to="/game-api/types/alta-world/platformlight">{"PlatformLight"}</Link>{" platformLight"}</code> |
| <Link id="m-playerlightcolorwithorb" /><code>{"private Color playerLightColorWithOrb"}</code> |
| <Link id="m-playerlightintensityperorb" /><code>{"private float playerLightIntensityPerOrb"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-setlightcolor" /><code>{"void SetLightColor(Color color)"}</code> |
| <Link id="m-setlightintensityfororbcount" /><code>{"void SetLightIntensityForOrbCount(int orbCount)"}</code> |
| <Link id="m-setplayerlightenabled" /><code>{"void SetPlayerLightEnabled(bool shouldEnable)"}</code> |
| <Link id="m-setplayerlightintensity" /><code>{"void SetPlayerLightIntensity(float intensity)"}</code> |

## Used in

Members of other types that take, return or hold a `VariableIntensityPlayerLight`:

[`PlayerController.playerLight`](/game-api/types/global-p/playercontroller#m-playerlight), [`PlayerController.PlayerLight`](/game-api/types/global-p/playercontroller#m-playerlight-2).
