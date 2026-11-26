---
title: "IPurchaseConsumer"
description: "Consumes completed store purchases, got from InterfaceResolver.IPurchaseConsumer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPurchaseConsumer

An **interface** in `Root.Township`, `Features.Shop`.

Consumes completed store purchases, got from `InterfaceResolver.IPurchaseConsumer`. In this server build the resolver returns null.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consumepurchases" /><code>{"Task<bool> ConsumePurchases()"}</code> | <span className="api-desc">Consumes pending purchases; true on success.</span> |
| <Link id="m-consumptiontask" /><code>{"Task ConsumptionTask()"}</code> | <span className="api-desc">A task that finishes when consumption is done; the customization menu awaits it.</span> |

## Used in

Members of other types that take, return or hold a `IPurchaseConsumer`:

<div className="api-used-in">

[`InterfaceResolver.CreatePurchaseConsumer`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-createpurchaseconsumer), [`InterfaceResolver.iPurchaseConsumer`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-ipurchaseconsumer), [`InterfaceResolver.IPurchaseConsumer`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-ipurchaseconsumer-2).

</div>
