---
title: "StewManager"
description: "Runs the stew in a cooking pot: liquid base, ingredients, garnishes, matching a stew recipe, and swapping the stew entity as it cooks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewManager

A **class** in `Root.Township`, `Alta.Cooking`.

Runs the stew in a cooking pot: liquid base, ingredients, garnishes, matching a stew recipe, and swapping the stew entity as it cooks. Probably server driven; the stew entity and ingredient fades are synced to clients.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<StewManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<StewManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`StewManagerSaveData`](/game-api/types/alta-crafting/stewmanagersavedata)
- **Documented in** [Cooking](/game-api/game-systems/cooking#stewmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StewManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cookingplayers" /><code>{"private List<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> cookingPlayers"}</code> | Players who last held each added ingredient. Only filled and cleared in this build, probably meant for experience. |
| <Link id="m-currentrecipe" /><code>{"private "}<Link to="/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" currentRecipe"}</code> | The stew recipe that matched, or null. |
| <Link id="m-garnishes" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{"> garnishes"}</code> | Backing field for `Garnishes`. Saved. |
| <Link id="m-garnishrejected" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" garnishRejected"}</code> | Event fired when a garnish is added beyond the pot's garnish limit. |
| <Link id="m-ingredients" /><code>{"private List<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> ingredients"}</code> | Backing field for `Ingredients`. Saved. |
| <Link id="m-isrealrecipe" /><code>{"private bool isRealRecipe"}</code> | True when the ingredients matched a real recipe. Only set and cleared in this build. |
| <Link id="m-liquidsurfaceentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" liquidSurfaceEntity"}</code> | Entity at the liquid surface that the stew entity is parented to. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-pot" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookingpot">{"CookingPot"}</Link>{" pot"}</code> | The cooking pot on the same object. |
| <Link id="m-stew" /><code>{"private "}<Link to="/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" stew"}</code> | The current stew component, or null. |
| <Link id="m-stewliquidbase" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" stewLiquidBase"}</code> | Backing field for `StewLiquidBase`. Saved. |
| <Link id="m-syncfadeoutingredient" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncFadeOutIngredient"}</code> | Method sync that fades out an added ingredient. |
| <Link id="m-syncstewfromentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncStewFromEntity"}</code> | Method sync that tells clients which entity is the stew. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-garnishes-2" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{"> Garnishes { get; }"}</code> | Garnishes added so far. |
| <Link id="m-ingredients-2" /><code>{"List<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Ingredients { get; }"}</code> | Ingredients added so far. |
| <Link id="m-stewliquidbase-2" /><code><Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" StewLiquidBase { get; }"}</code> | The liquid the stew is made from. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-addedingredient" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> AddedIngredient"}</code> | Raised with the cookable item when an ingredient is added. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addcookabletostew" /><code>{"void AddCookableToStew("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookable)"}</code> | Adds a cookable's item as an ingredient, fades it out and destroys it. Checks for a recipe once the pot's minimum ingredient count is reached. |
| <Link id="m-addgarnishtostew" /><code>{"void AddGarnishToStew("}<Link to="/game-api/types/alta-crafting/icookinggarnishmarker">{"ICookingGarnishMarker"}</Link>{" garnish)"}</code> | Adds a garnish and fades it out, or raises `garnishRejected` if the pot already has its maximum garnishes. |
| <Link id="m-createdefaultstew" /><code>{"void CreateDefaultStew()"}</code> | Spawns the default stew from the cooking settings and sets it as this pot's stew. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the stew created and ingredient fade out sync messages. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: tells the joining player which entity is the current stew. |
| <Link id="m-removeanystew" /><code>{"void RemoveAnyStew(bool isDestroyingStewEntity = true)"}</code> | Clears the stew, ingredients, garnishes, liquid base and recipe, and by default destroys the stew entity. |
| <Link id="m-setbaseliquid" /><code>{"void SetBaseLiquid("}<Link to="/game-api/types/alta-stats-effects/liquiddefinition">{"LiquidDefinition"}</Link>{" liquid)"}</code> | Sets the stew's liquid base. Ignores null. |
| <Link id="m-setstewfromentity" /><code>{"void SetStewFromEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" stewEntity, bool isUsingLiquidBaseTint = false)"}</code> | Makes an entity the pot's stew: parents it to the liquid surface, updates the liquid, syncs it and follows its cooking stages. |

<details>
<summary>22 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addgarnish" /><code>{"private void AddGarnish("}<Link to="/game-api/types/alta-crafting/cookinggarnish">{"CookingGarnish"}</Link>{" garnishItem)"}</code> | Adds a garnish item to the stew's list and updates the liquid. |
| <Link id="m-addingredient" /><code>{"private void AddIngredient("}<Link to="/game-api/types/alta-crafting/cookable">{"Cookable"}</Link>{" cookable)"}</code> | Adds an ingredient to the stew, resets the stew's cooking progress and checks for a recipe once enough are in. |
| <Link id="m-checkforrecipe" /><code>{"private bool CheckForRecipe()"}</code> | Once the pot has its minimum number of ingredients, checks for a recipe and returns true. |
| <Link id="m-checkforvalidrecipe" /><code>{"private void CheckForValidRecipe()"}</code> | Swaps the stew to the matching recipe stew, or to the non-recipe stew, then locks the pot. |
| <Link id="m-cleanexperiencecalculation" /><code>{"private void CleanExperienceCalculation()"}</code> | Clears `cookingPlayers` and `isRealRecipe`. |
| <Link id="m-createcontentwithtint" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" CreateContentWithTint(Color colorTint)"}</code> | Builds custom stew liquid content from the stew's visuals and effects, the ingredients, chunk visuals and a tint. |
| <Link id="m-delaydestroyentity" /><code>{"private IEnumerator DelayDestroyEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entityToDestroy, float waitDuration) (iterator)"}</code> | Coroutine that destroys an added ingredient's root after the fade-out time. |
| <Link id="m-fadeoutaddedingredient" /><code>{"private void FadeOutAddedIngredient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint addedIngredientEntityIdentifier)"}</code> | Method sync handler: freezes an added ingredient's pickup and, on reading, dissolves its renderers. |
| <Link id="m-fadeoutentity" /><code>{"private void FadeOutEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Syncs the fade-out of an added ingredient or garnish and destroys it after the fade. |
| <Link id="m-getchunkvisuals" /><code>{"private IEnumerable<"}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{"> GetChunkVisuals() (iterator)"}</code> | Lists the chunk visuals of the base liquid, the ingredients and the garnishes. |
| <Link id="m-getcookableitems" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"[] GetCookableItems()"}</code> | Returns the ingredients as an array. |
| <Link id="m-getsteweffects" /><code>{"private IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"> GetStewEffects("}<Link to="/game-api/types/alta-crafting/stewcomponent">{"StewComponent"}</Link>{" stew)"}</code> | Gets the stew's effects from `StewRecipe.GetStewEffects` for the current recipe, base liquid, ingredients and garnishes. |
| <Link id="m-handlenewstewstage" /><code>{"private void HandleNewStewStage("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newStewEntity)"}</code> | When the stew cooks to its next stage, takes the new stew entity; if it burnt away, empties the pot. |
| <Link id="m-playstewcreatedeffect" /><code>{"private void PlayStewCreatedEffect()"}</code> | Plays the stew's created effect at the liquid surface. |
| <Link id="m-playvisualeffectforstew" /><code>{"private void PlayVisualEffectForStew()"}</code> | Plays the stew created effect. |
| <Link id="m-serializegarnisheslist" /><code>{"private void SerializeGarnishesList("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the garnish list as item hashes. Not called in this build. |
| <Link id="m-serializeingredientslist" /><code>{"private void SerializeIngredientsList("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the ingredient list as item hashes. Not called in this build. |
| <Link id="m-stewingredientsfilled" /><code>{"private void StewIngredientsFilled()"}</code> | Plays the ingredients-filled effect at the liquid surface. |
| <Link id="m-swapstewtorecipe" /><code>{"private void SwapStewToRecipe("}<Link to="/game-api/types/alta-crafting/stewrecipe">{"StewRecipe"}</Link>{" recipe)"}</code> | Replaces the stew with the recipe's base version. |
| <Link id="m-swapstewtorecipebaseversion" /><code>{"private void SwapStewToRecipeBaseVersion(uint recipeBaseVersionHash)"}</code> | Replaces the stew entity with the one for the given prefab hash and uses it. |
| <Link id="m-syncstewcreated" /><code>{"private void SyncStewCreated("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync handler that sends the stew entity; remote clients store it and play the created effect. |
| <Link id="m-updateliquidcontainer" /><code>{"private void UpdateLiquidContainer(bool isUsingLiquidBaseTint = false)"}</code> | Turns the pot's liquid into stew liquid with the current visuals and effects. |

</details>

## Used in

Members of other types that take, return or hold a `StewManager`:

[`CookingPot.stewManager`](/game-api/types/alta-crafting/cookingpot#m-stewmanager).
