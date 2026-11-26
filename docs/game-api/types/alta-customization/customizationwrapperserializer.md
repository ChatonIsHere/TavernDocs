---
title: "CustomizationWrapperSerializer"
description: "Static helpers that write and read a player's cosmetics as a bit stream (item hashes plus their colour arguments), for saving presets and syncing to other..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationWrapperSerializer

A **static class** in `Root.Township`, `Alta.Customization`.

Static helpers that write and read a player's cosmetics as a bit stream (item hashes plus their colour arguments), for saving presets and syncing to other players.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Documented in** [Customization](/game-api/game-systems/customization)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadasync" /><code>{"static async Task<bool> LoadAsync("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" data)"}</code> | Loads cosmetics from saved data into the wrapper. Returns false on bad data, an error or a cancelled load. |
| <Link id="m-loadasync-2" /><code>{"static async Task<bool> LoadAsync("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, uint[] data, int bytes)"}</code> | Loads cosmetics from saved data into the wrapper. Returns false on bad data, an error or a cancelled load. |
| <Link id="m-readstreamasync" /><code>{"static async Task ReadStreamAsync("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/game-api/types/assembly-other/streamreader">{"StreamReader"}</Link>{" stream, bool isApplying = true, CancellationToken cancellation = null)"}</code> | Reads item hashes and arguments from a stream; when applying, fills in missing defaults and applies the items to the wrapper. Throws on an unknown hash. |
| <Link id="m-save" /><code>{"static void Save("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, out int bytes, out uint[] data)"}</code> | Writes the wrapper's cosmetics to a new buffer and returns its byte count and data. |
| <Link id="m-serializearguments" /><code>{"static void SerializeArguments("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint definitionHash, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | Writes or reads an item's arguments with a size prefix. On a size mismatch it skips the bits, except for two hashes it converts from an older format. |
| <Link id="m-serializestreamasync" /><code>{"static async Task SerializeStreamAsync("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isApplying = true, CancellationToken cancellation = null)"}</code> | Writes the wrapper, or reads into it inside an addressable loading session (clearing it first when applying). |
| <Link id="m-writestream" /><code>{"static void WriteStream("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" stream)"}</code> | Writes every item and its arguments, or only whitelisted categories if `UseCategoryWhitelistWhenSaving` is on. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adddefaultitem" /><code>{"private static void AddDefaultItem(ICollection<"}<Link to="/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> results, "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments = null)"}</code> | Adds a default item to the results unless something in its category (or the item itself) is already there. |
| <Link id="m-forcebasicbodyparts" /><code>{"private static void ForceBasicBodyParts("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, List<"}<Link to="/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> results)"}</code> | Adds any required default body parts missing from the loaded items. |
| <Link id="m-getdefaults" /><code>{"private static Dictionary<"}<Link to="/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{", "}<Link to="/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> GetDefaults("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper)"}</code> | Gets the required defaults per category from `CustomizationSettings`, swapped for the wrapper's override items where they match. |
| <Link id="m-getmissingdefaults" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> GetMissingDefaults(IReadOnlyCollection<"}<Link to="/game-api/types/alta-customization/customizationitemandarguments">{"CustomizationItemAndArguments"}</Link>{"> loadedItems, IReadOnlyDictionary<"}<Link to="/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{", "}<Link to="/game-api/types/alta-customization/defaultcosmeticinfo">{"DefaultCosmeticInfo"}</Link>{"> defaults)"}</code> | Lists required defaults whose category has no loaded item. |
| <Link id="m-writestreamrestricted" /><code>{"private static void WriteStreamRestricted("}<Link to="/game-api/types/alta-customization/icustomizationwrapper">{"ICustomizationWrapper"}</Link>{" wrapper, "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" stream)"}</code> | Writes only items in the debug category whitelist. |

</details>
