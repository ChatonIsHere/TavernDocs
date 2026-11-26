---
title: "StoreRotationPopup"
description: "class StoreRotationPopup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StoreRotationPopup

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StoreRotationPopup()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-maintex" /><code>{"private static readonly int _MainTex"}</code> |
| <Link id="m-laststorerotationprefskey" /><code>{"private const string LastStoreRotationPrefsKey"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-popupboard" /><code>{"private "}<Link to="/game-api/types/global-p/popupboard">{"PopupBoard"}</Link>{" popupBoard"}</code> |
| <Link id="m-storebanner" /><code>{"private Texture storeBanner"}</code> |
| <Link id="m-targetmaterial" /><code>{"private Material targetMaterial"}</code> |
| <Link id="m-www" /><code>{"private UnityWebRequest www"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-clear" /><code>{"private void Clear()"}</code> |
| <Link id="m-closeboard" /><code>{"private void CloseBoard("}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" board)"}</code> |
| <Link id="m-gethashforconfiguration" /><code>{"private int GetHashForConfiguration("}<Link to="/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{" configuration)"}</code> |
| <Link id="m-getstoretexture" /><code>{"private async Task<Texture> GetStoreTexture(string path)"}</code> |

</details>
