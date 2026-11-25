---
title: "IAPViewModel"
description: "class IAPViewModel in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAPViewModel

A **class** in `Root.Township`, `Features.Main_Menu.Scripts.TalemShop`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IAPViewModel()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currenttalemstext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" currentTalemsText"}</code> |
| <Link id="m-erroroutput" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" errorOutput"}</code> |
| <Link id="m-isprocessing" /><code>{"private bool isProcessing"}</code> |
| <Link id="m-loadingmarker" /><code>{"private GameObject loadingMarker"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-onpurchasesucceeded" /><code>{"private UnityEvent onPurchaseSucceeded"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-purchasetalems" /><code>{"async void PurchaseTalems(string sku)"}</code> |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-handleerror" /><code>{"private void HandleError("}<Link to="/game-api/types/game-other-namespaces/purchaseerror">{"PurchaseError"}</Link>{" error)"}</code> |
| <Link id="m-makepurchase" /><code>{"private async Task MakePurchase(string sku)"}</code> |
| <Link id="m-outputerror" /><code>{"private void OutputError(string error, bool isLoggingInGame = true)"}</code> |
| <Link id="m-purchasemade" /><code>{"private void PurchaseMade(bool wasSuccessful)"}</code> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |
| <Link id="m-updatebalance" /><code>{"private void UpdateBalance(int newBalance)"}</code> |

</details>
