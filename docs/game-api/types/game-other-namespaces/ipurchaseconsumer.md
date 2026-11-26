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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consumepurchases" /><code>{"Task<bool> ConsumePurchases()"}</code> | Consumes pending purchases; true on success. |
| <Link id="m-consumptiontask" /><code>{"Task ConsumptionTask()"}</code> | A task that finishes when consumption is done; the customization menu awaits it. |

## Used in

Members of other types that take, return or hold a `IPurchaseConsumer`:

[`InterfaceResolver.CreatePurchaseConsumer`](/game-api/types/game-other-namespaces/interfaceresolver#m-createpurchaseconsumer), [`InterfaceResolver.iPurchaseConsumer`](/game-api/types/game-other-namespaces/interfaceresolver#m-ipurchaseconsumer), [`InterfaceResolver.IPurchaseConsumer`](/game-api/types/game-other-namespaces/interfaceresolver#m-ipurchaseconsumer-2).
