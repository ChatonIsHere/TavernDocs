---
title: "Region"
description: "Which Alta platform region an account belongs to: Global or China."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Region

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Enums`.

Which Alta platform region an account belongs to: Global or China.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-china" /><code>{"China = 1"}</code> |
| <Link id="m-global" /><code>{"Global = 0"}</code> |

## Used in

Members of other types that take, return or hold a `Region`:

<div className="api-used-in">

[`IPicoClient.GetLinkedAccount`](/mod/game-api/types/assembly-api-client/ipicoclient#m-getlinkedaccount), [`IPicoClient.HasLinkedAccount`](/mod/game-api/types/assembly-api-client/ipicoclient#m-haslinkedaccount), [`IPicoClient.LinkLoggedInAccount`](/mod/game-api/types/assembly-api-client/ipicoclient#m-linkloggedinaccount), [`PicoClient.GetLinkedAccount`](/mod/game-api/types/assembly-api-client/picoclient#m-getlinkedaccount), [`PicoClient.HasLinkedAccount`](/mod/game-api/types/assembly-api-client/picoclient#m-haslinkedaccount), [`PicoClient.LinkLoggedInAccount`](/mod/game-api/types/assembly-api-client/picoclient#m-linkloggedinaccount), [`AccountLinkData.Region`](/mod/game-api/types/assembly-api-models/accountlinkdata#m-region), [`AccountRequestBase.Region`](/mod/game-api/types/assembly-api-models/accountrequestbase#m-region).

</div>
