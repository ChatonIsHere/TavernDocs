---
title: "ICustomizationWrapper"
description: "Holds a character's set of cosmetic items and their arguments, and loads their assets in sessions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICustomizationWrapper

An **interface** in `Root.Township`, `Alta.Customization`.

Holds a character's set of cosmetic items and their arguments, and loads their assets in sessions.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Derived types** [`CustomizationWrapper`](/game-api/types/alta-customization/customizationwrapper)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"IEnumerable<uint> Items { get; }"}</code> | Hashes of the cosmetic items in the set. |
| <Link id="m-overrideset" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{", "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> OverrideSet { get; set; }"}</code> | Map that swaps one cosmetic definition for another. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applystreamitems" /><code>{"void ApplyStreamItems(IEnumerable<"}<Link to="/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> items)"}</code> | Replaces the set with items read from a stream. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the set. |
| <Link id="m-finishload" /><code>{"void FinishLoad(CancellationTokenSource source)"}</code> | Ends the load started with that token. |
| <Link id="m-getarguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] GetArguments(uint hash)"}</code> | Arguments (colours and so on) for an item's parts. |
| <Link id="m-getitem" /><code>{"Task<"}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{"> GetItem(uint hash)"}</code> | Loads a cosmetic definition by hash. |
| <Link id="m-startload" /><code>{"CancellationTokenSource StartLoad()"}</code> | Starts a load and returns a token to cancel it. |
| <Link id="m-startsession" /><code>{"Task StartSession("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" serializeSession)"}</code> | Starts using an addressable session to load assets. |
| <Link id="m-stopsession" /><code>{"void StopSession("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" serializeSession)"}</code> | Stops using an addressable session. |

## Used in

Members of other types that take, return or hold a `ICustomizationWrapper`:

[`CustomizationWrapperSerializer.ForceBasicBodyParts`](/game-api/types/alta-customization/customizationwrapperserializer#m-forcebasicbodyparts), [`CustomizationWrapperSerializer.GetDefaults`](/game-api/types/alta-customization/customizationwrapperserializer#m-getdefaults), [`CustomizationWrapperSerializer.LoadAsync`](/game-api/types/alta-customization/customizationwrapperserializer#m-loadasync), [`CustomizationWrapperSerializer.ReadStreamAsync`](/game-api/types/alta-customization/customizationwrapperserializer#m-readstreamasync), [`CustomizationWrapperSerializer.Save`](/game-api/types/alta-customization/customizationwrapperserializer#m-save), [`CustomizationWrapperSerializer.SerializeStreamAsync`](/game-api/types/alta-customization/customizationwrapperserializer#m-serializestreamasync), [`CustomizationWrapperSerializer.WriteStream`](/game-api/types/alta-customization/customizationwrapperserializer#m-writestream), [`CustomizationWrapperSerializer.WriteStreamRestricted`](/game-api/types/alta-customization/customizationwrapperserializer#m-writestreamrestricted).
