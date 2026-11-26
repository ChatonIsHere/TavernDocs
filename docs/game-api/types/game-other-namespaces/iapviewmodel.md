---
title: "IAPViewModel"
description: "Client talem shop panel for Quest: shows the talem balance and buys talem packs through InterfaceResolver.IShopController."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAPViewModel

A **class** in `Root.Township`, `Features.Main_Menu.Scripts.TalemShop`.

Client talem shop panel for Quest: shows the talem balance and buys talem packs through `InterfaceResolver.IShopController`. Hidden on Windows and Pico, and when logged out.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IAPViewModel()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttalemstext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" currentTalemsText"}</code> | Text showing the talem balance. |
| <Link id="m-erroroutput" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" errorOutput"}</code> | Text showing purchase errors. |
| <Link id="m-isprocessing" /><code>{"private bool isProcessing"}</code> | True while a purchase is in progress. |
| <Link id="m-loadingmarker" /><code>{"private GameObject loadingMarker"}</code> | Object shown while a purchase is in progress. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-onpurchasesucceeded" /><code>{"private UnityEvent onPurchaseSucceeded"}</code> | Event fired after a purchase is made and consumed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-purchasetalems" /><code>{"async void PurchaseTalems(string sku)"}</code> | Buys the talem pack with the given SKU, showing the loading marker; ignored while a purchase is running. |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | Hides itself on Windows; otherwise sets up the balance and, on a Quest build, shows only if the Oculus entitlement check passes. |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | Hides the panel. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Unhooks the balance change event. |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | Hides the error text, and hides the whole panel on Windows or Pico. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleerror" /><code>{"private void HandleError("}<Link to="/game-api/types/game-other-namespaces/purchaseerror">{"PurchaseError"}</Link>{" error)"}</code> | Shows a purchase error's message. |
| <Link id="m-makepurchase" /><code>{"private async Task MakePurchase(string sku)"}</code> | Buys the SKU, consumes it if that worked, shows any error, then asks for a fresh balance. |
| <Link id="m-outputerror" /><code>{"private void OutputError(string error, bool isLoggingInGame = true)"}</code> | Logs the error and, by default, shows it in red on the panel. |
| <Link id="m-purchasemade" /><code>{"private void PurchaseMade(bool wasSuccessful)"}</code> | Fires `onPurchaseSucceeded` if the purchase was consumed, otherwise shows an error. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Shows the current balance and keeps it updated from `CurrentTalemBalance`. |
| <Link id="m-updatebalance" /><code>{"private void UpdateBalance(int newBalance)"}</code> | Writes the balance into `currentTalemsText`. |

</details>
