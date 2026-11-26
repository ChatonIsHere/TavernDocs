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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`LoggedInTool`](/mod/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IAPViewModel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttalemstext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" currentTalemsText"}</code> | <span className="api-desc">Text showing the talem balance.</span> |
| <Link id="m-erroroutput" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" errorOutput"}</code> | <span className="api-desc">Text showing purchase errors.</span> |
| <Link id="m-isprocessing" /><code>{"private bool isProcessing"}</code> | <span className="api-desc">True while a purchase is in progress.</span> |
| <Link id="m-loadingmarker" /><code>{"private GameObject loadingMarker"}</code> | <span className="api-desc">Object shown while a purchase is in progress.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-onpurchasesucceeded" /><code>{"private UnityEvent onPurchaseSucceeded"}</code> | <span className="api-desc">Event fired after a purchase is made and consumed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-purchasetalems" /><code>{"async void PurchaseTalems(string sku)"}</code> | <span className="api-desc">Buys the talem pack with the given SKU, showing the loading marker; ignored while a purchase is running.</span> |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | <span className="api-desc">Hides itself on Windows; otherwise sets up the balance and, on a Quest build, shows only if the Oculus entitlement check passes.</span> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | <span className="api-desc">Hides the panel.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Unhooks the balance change event.</span> |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | <span className="api-desc">Hides the error text, and hides the whole panel on Windows or Pico.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleerror" /><code>{"private void HandleError("}<Link to="/mod/game-api/types/game-other-namespaces/purchaseerror">{"PurchaseError"}</Link>{" error)"}</code> | <span className="api-desc">Shows a purchase error's message.</span> |
| <Link id="m-makepurchase" /><code>{"private async Task MakePurchase(string sku)"}</code> | <span className="api-desc">Buys the SKU, consumes it if that worked, shows any error, then asks for a fresh balance.</span> |
| <Link id="m-outputerror" /><code>{"private void OutputError(string error, bool isLoggingInGame = true)"}</code> | <span className="api-desc">Logs the error and, by default, shows it in red on the panel.</span> |
| <Link id="m-purchasemade" /><code>{"private void PurchaseMade(bool wasSuccessful)"}</code> | <span className="api-desc">Fires `onPurchaseSucceeded` if the purchase was consumed, otherwise shows an error.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Shows the current balance and keeps it updated from `CurrentTalemBalance`.</span> |
| <Link id="m-updatebalance" /><code>{"private void UpdateBalance(int newBalance)"}</code> | <span className="api-desc">Writes the balance into `currentTalemsText`.</span> |

</details>
