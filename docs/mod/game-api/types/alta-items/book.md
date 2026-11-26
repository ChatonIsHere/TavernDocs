---
title: "Book"
description: "A networked book item that holds pages (recipe books, journals) from a PageCollection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Book

A **class** in `Root.Township`, `Alta.Pages`.

A networked book item that holds pages (recipe books, journals) from a `PageCollection`. The server keeps the page list and turns pages; clients see the spawned page objects and the page count it sends.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<BookSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<BookSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Derived types** [`BookSaveData`](/mod/game-api/types/alta-items/booksavedata)
- **Nested types** [`FlairPositions`](/mod/game-api/types/alta-items/book-flairpositions), [`LODRenderers`](/mod/game-api/types/alta-items/book-lodrenderers)
- **Documented in** [Pages and books](/mod/game-api/items/pages-and-books)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Book()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>68 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isfrommiddle" /><code>{"private static int _IsFromMiddle"}</code> | <span className="api-desc">Animator hash for IsFromMiddle.</span> |
| <Link id="m-isfront" /><code>{"private static int _IsFront"}</code> | <span className="api-desc">Animator hash for IsFront.</span> |
| <Link id="m-isinteracting" /><code>{"private static int _IsInteracting"}</code> | <span className="api-desc">Animator hash for IsInteracting.</span> |
| <Link id="m-isopen" /><code>{"private static int _IsOpen"}</code> | <span className="api-desc">Animator hash for IsOpen.</span> |
| <Link id="m-maintex" /><code>{"private static int _MainTex"}</code> | <span className="api-desc">Shader property ID for _MainTex.</span> |
| <Link id="m-open" /><code>{"private static int _Open"}</code> | <span className="api-desc">Animator hash for Open.</span> |
| <Link id="m-addhighlight" /><code>{"private GameObject addHighlight"}</code> | <span className="api-desc">Object shown when a page can be dropped in.</span> |
| <Link id="m-addpage" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/newpagearguments">{"NewPageArguments"}</Link>{"> addPage"}</code> | <span className="api-desc">Method sync for the add-page message.</span> |
| <Link id="m-backcover" /><code>{"private Transform backCover"}</code> | <span className="api-desc">Back cover transform.</span> |
| <Link id="m-backobject" /><code>{"private GameObject backObject"}</code> | <span className="api-desc">Back cover object.</span> |
| <Link id="m-bookanimator" /><code>{"private Animator bookAnimator"}</code> | <span className="api-desc">The book's animator.</span> |
| <Link id="m-booklodgroup" /><code>{"private LODGroup bookLodGroup"}</code> | <span className="api-desc">LOD group that flairs are added to.</span> |
| <Link id="m-bookopenanimation" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" bookOpenAnimation"}</code> | <span className="api-desc">Networked Open animator bool.</span> |
| <Link id="m-bookpages" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{"> bookPages"}</code> | <span className="api-desc">Server: the pages in the book, in order.</span> |
| <Link id="m-btduplicate" /><code>{"private bool btDuplicate"}</code> | <span className="api-desc">Editor button for `DuplicatePage`.</span> |
| <Link id="m-btnclose" /><code>{"private bool btnClose"}</code> | <span className="api-desc">Editor button for `Close`.</span> |
| <Link id="m-btnfill" /><code>{"private bool btnFill"}</code> | <span className="api-desc">Editor button for `Fill`.</span> |
| <Link id="m-btnleft" /><code>{"private bool btnLeft"}</code> | <span className="api-desc">Editor button for `TurnLeftDebug`.</span> |
| <Link id="m-btnopen" /><code>{"private bool btnOpen"}</code> | <span className="api-desc">Editor button for `Open`.</span> |
| <Link id="m-btnright" /><code>{"private bool btnRight"}</code> | <span className="api-desc">Editor button for `TurnRightDebug`.</span> |
| <Link id="m-clientpagecount" /><code>{"private uint clientPageCount"}</code> | <span className="api-desc">Page count as last synced; `PageCount` returns it on clients.</span> |
| <Link id="m-closedcoverrotation" /><code>{"private float closedCoverRotation"}</code> | <span className="api-desc">Cover rotation when closed, set to match the art.</span> |
| <Link id="m-closeduration" /><code>{"private float closeDuration"}</code> | <span className="api-desc">Seconds the close animation takes.</span> |
| <Link id="m-closeupwardsdotlimit" /><code>{"private float closeUpwardsDotLimit"}</code> | <span className="api-desc">The book closes when its forward vector's upward part drops below this.</span> |
| <Link id="m-closevelocitylimit" /><code>{"private float closeVelocityLimit"}</code> | <span className="api-desc">The book closes when moved faster than this.</span> |
| <Link id="m-collection" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection"}</code> | <span className="api-desc">The `PageCollection` this book holds. It is the only thing the book saves.</span> |
| <Link id="m-coverglyph" /><code>{"private Image coverGlyph"}</code> | <span className="api-desc">Image for the cover glyph.</span> |
| <Link id="m-displayedspawnindex" /><code>{"private int displayedSpawnIndex"}</code> | <span className="api-desc">Which spawned page is the one shown, or -1.</span> |
| <Link id="m-firstpageindex" /><code>{"private int firstPageIndex"}</code> | <span className="api-desc">Index in `bookPages` of the first spawned page.</span> |
| <Link id="m-flairpositions" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/book-flairpositions">{"Book.FlairPositions"}</Link>{" flairPositions"}</code> | <span className="api-desc">Cover attach points for flairs, plus the book renderers and letter text.</span> |
| <Link id="m-frontcover" /><code>{"private Transform frontCover"}</code> | <span className="api-desc">Front cover transform.</span> |
| <Link id="m-frontobject" /><code>{"private GameObject frontObject"}</code> | <span className="api-desc">Front cover object.</span> |
| <Link id="m-glyphandroidrenderer" /><code>{"private Renderer glyphAndroidRenderer"}</code> | <span className="api-desc">Android glyph renderer, removed at build time.</span> |
| <Link id="m-glyphcanvas" /><code>{"private Canvas glyphCanvas"}</code> | <span className="api-desc">Canvas the cover glyph is drawn on.</span> |
| <Link id="m-heldcoroutine" /><code>{"private Coroutine heldCoroutine"}</code> | <span className="api-desc">Server: the running `Held` coroutine.</span> |
| <Link id="m-hovering" /><code>{"private List<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> hovering"}</code> | <span className="api-desc">Loose pages in the drop area being watched.</span> |
| <Link id="m-inserting" /><code>{"private Queue<"}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{"> inserting"}</code> | <span className="api-desc">Pages waiting to be inserted while the book is open.</span> |
| <Link id="m-lastopenedpage" /><code>{"private int lastOpenedPage"}</code> | <span className="api-desc">Page the book was on when last closed; it reopens there.</span> |
| <Link id="m-locationchange" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" locationChange"}</code> | <span className="api-desc">Method sync for the page-location-changed message.</span> |
| <Link id="m-lods" /><code>{"private LOD[] lods"}</code> | <span className="api-desc">Cached LOD array of the book.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-openduration" /><code>{"private float openDuration"}</code> | <span className="api-desc">Seconds the open animation takes.</span> |
| <Link id="m-openupwardsdotlimit" /><code>{"private float openUpwardsDotLimit"}</code> | <span className="api-desc">The book opens when its forward vector's upward part is above this.</span> |
| <Link id="m-openvelocitylimit" /><code>{"private float openVelocityLimit"}</code> | <span className="api-desc">The book only opens when moving slower than this.</span> |
| <Link id="m-pageaxis" /><code>{"private Transform pageAxis"}</code> | <span className="api-desc">Parent transform spawned pages hang from.</span> |
| <Link id="m-pagecount" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" pageCount"}</code> | <span className="api-desc">Text showing pages found out of the total.</span> |
| <Link id="m-pagelocationchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pageLocationChanged"}</code> | <span className="api-desc">Event played when a newly added page opens the book somewhere else.</span> |
| <Link id="m-pagenumber" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" pageNumber"}</code> | <span className="api-desc">Text showing the current page number.</span> |
| <Link id="m-pageprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" pagePrefab"}</code> | <span className="api-desc">Prefab spawned for each page shown in the book.</span> |
| <Link id="m-pageturningsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" pageTurningSound"}</code> | <span className="api-desc">Sound played on a page turn.</span> |
| <Link id="m-paperprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" paperPrefab"}</code> | <span className="api-desc">Prefab of a loose paper page, spawned by `DuplicatePage`.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The book's pickup.</span> |
| <Link id="m-pickuparea" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickuparea">{"PickupArea"}</Link>{" pickupArea"}</code> | <span className="api-desc">Area that detects loose pages to add.</span> |
| <Link id="m-removepage" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> removePage"}</code> | <span className="api-desc">Method sync for the remove-page message.</span> |
| <Link id="m-renderers" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/book-lodrenderers">{"Book.LODRenderers"}</Link>{"[] renderers"}</code> | <span className="api-desc">Cached base renderers per LOD level, used when rebuilding flairs.</span> |
| <Link id="m-serverflippage" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> serverFlipPage"}</code> | <span className="api-desc">Method sync for client turn-page requests.</span> |
| <Link id="m-setdisplay" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/displayarguments">{"DisplayArguments"}</Link>{"> setDisplay"}</code> | <span className="api-desc">Method sync for the page count and number text.</span> |
| <Link id="m-sethighlight" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> setHighlight"}</code> | <span className="api-desc">Method sync for the add-page highlight.</span> |
| <Link id="m-setopen" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> setOpen"}</code> | <span className="api-desc">Method sync for open and close.</span> |
| <Link id="m-spawnedpages" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/bookpageinstance">{"BookPageInstance"}</Link>{"> spawnedPages"}</code> | <span className="api-desc">Page entities spawned in the open book, in order.</span> |
| <Link id="m-spineobject" /><code>{"private GameObject spineObject"}</code> | <span className="api-desc">Spine object.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for the initial book sync.</span> |
| <Link id="m-turndirection" /><code>{"private int turnDirection"}</code> | <span className="api-desc">Direction of the turn in progress: -1, 0 or 1.</span> |
| <Link id="m-turning" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{"> turning"}</code> | <span className="api-desc">Pages in the middle of turning.</span> |
| <Link id="m-turnpage" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/alta-items/turnpagearguments">{"TurnPageArguments"}</Link>{"> turnPage"}</code> | <span className="api-desc">Method sync for page turns.</span> |
| <Link id="m-turnrate" /><code>{"private float turnRate"}</code> | <span className="api-desc">Seconds between repeated page turns while input is held.</span> |
| <Link id="m-turnskipprogress" /><code>{"private float turnSkipProgress"}</code> | <span className="api-desc">Where a skipped turn starts in its animation, 0 to 1.</span> |
| <Link id="m-turntime" /><code>{"private float turnTime"}</code> | <span className="api-desc">Seconds a page turn takes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collection-2" /><code><Link to="/mod/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" Collection { get; }"}</code> | <span className="api-desc">The `PageCollection` that defines which pages this book can hold and their order. A book spawned without one destroys itself.</span> |
| <Link id="m-isatback" /><code>{"bool IsAtBack { get; private set; }"}</code> | <span className="api-desc">True when the open book shows its last page.</span> |
| <Link id="m-isatfront" /><code>{"bool IsAtFront { get; private set; }"}</code> | <span className="api-desc">True when the open book shows its first page.</span> |
| <Link id="m-ischangingopenstate" /><code>{"bool IsChangingOpenState { get; private set; }"}</code> | <span className="api-desc">True while the open or close animation runs. Page turns are refused then.</span> |
| <Link id="m-isinserting" /><code>{"bool IsInserting { get; }"}</code> | <span className="api-desc">True while pages are queued to be animated into the open book.</span> |
| <Link id="m-isopen-2" /><code>{"bool IsOpen { get; private set; }"}</code> | <span className="api-desc">Whether the book is open. The server opens it while held facing up and slow, and closes it otherwise.</span> |
| <Link id="m-pagecount-2" /><code>{"int PageCount { get; }"}</code> | <span className="api-desc">Number of pages in the book. On clients this is the count last sent by the server.</span> |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The book's `Pickup`. Holding it blocks locomotion and lets the holder turn pages.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Bake order for this renderer bakeable: 5.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addnewpage" /><code>{"bool AddNewPage("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page)"}</code> | <span className="api-desc">Server: adds a page in collection order and animates it in if the book is open. False on clients or if the collection lacks the page.</span> |
| <Link id="m-bookremovepage" /><code>{"void BookRemovePage("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" pageData)"}</code> | <span className="api-desc">Removes a page from the book's list and refreshes the open spread and page display. Called when a page is pulled out.</span> |
| <Link id="m-close" /><code>{"void Close()"}</code> | <span className="api-desc">Closes the book if it is open and not already opening or closing. The server closes it when it is dropped or tilted away.</span> |
| <Link id="m-duplicatepage" /><code><Link to="/mod/game-api/types/alta-items/paperpageinstance">{"PaperPageInstance"}</Link>{" DuplicatePage("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" pageData, ref bool isDuplicate)"}</code> | <span className="api-desc">Server: spawns a loose paper copy of a page at the book. Always a duplicate if the collection forbids removal. Null on clients.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the network messages for sync, adding, removing and turning pages, opening, highlighting and flipping.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: destroys the book if it has no collection, otherwise adds every collection page already unlocked globally and listens for new ones.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends a joining player the book's state, its spawned pages, page display and open state.</span> |
| <Link id="m-open-2" /><code>{"void Open()"}</code> | <span className="api-desc">Opens the book if it is closed and not already changing state.</span> |
| <Link id="m-setcollection" /><code>{"void SetCollection("}<Link to="/mod/game-api/types/alta-items/pagecollection">{"PageCollection"}</Link>{" collection)"}</code> | <span className="api-desc">Server: sets the page collection. Ignored on clients.</span> |
| <Link id="m-turnleft" /><code>{"bool TurnLeft(bool isSkipping = false)"}</code> | <span className="api-desc">Server: turns forward one page if the book is open and not at the back. Returns whether a turn started.</span> |
| <Link id="m-turnright" /><code>{"bool TurnRight(bool isSkipping = false)"}</code> | <span className="api-desc">Server: turns back one page if the book is open and not at the front. Returns whether a turn started.</span> |

<details className="api-private">
<summary>46 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addflair" /><code>{"private void AddFlair("}<Link to="/mod/game-api/types/alta-items/bookflair">{"BookFlair"}</Link>{" baseFlair, "}<Link to="/mod/game-api/types/alta-items/bookflair">{"BookFlair"}</Link>{" overrideFlair, Transform parent, Material material, List<Renderer>[] renderers)"}</code> | <span className="api-desc">Adds the override flair, or the base one if none, at a cover position with the flair material.</span> |
| <Link id="m-addpage-2" /><code>{"private void AddPage("}<Link to="/mod/game-api/types/alta-items/bookpageinstance">{"BookPageInstance"}</Link>{" newPage, int spawnedIndex, bool isFromMiddle = false)"}</code> | <span className="api-desc">Puts a spawned page into the book at a slot and sets its animator; overload is the add-page message handler on clients.</span> |
| <Link id="m-addpage-3" /><code>{"private void AddPage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-items/newpagearguments">{"NewPageArguments"}</Link>{" newPage)"}</code> | <span className="api-desc">Puts a spawned page into the book at a slot and sets its animator; overload is the add-page message handler on clients.</span> |
| <Link id="m-applyflairs" /><code>{"private void ApplyFlairs()"}</code> | <span className="api-desc">Rebuilds the cover decoration (emblem, glyph or letter, spine and edge flairs, book material) from the collection's flair settings.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks pickup grab, drop and interaction filter, and hides the page drop area.</span> |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | <span className="api-desc">Build step that removes the Android glyph renderer.</span> |
| <Link id="m-cachelods" /><code>{"private bool CacheLods()"}</code> | <span className="api-desc">Editor setup that caches the renderers of each LOD level, so flairs can be added later.</span> |
| <Link id="m-changeopen" /><code>{"private IEnumerator ChangeOpen(bool isOpening) (iterator)"}</code> | <span className="api-desc">Coroutine that opens or closes the book, spawning pages at the last opened page on open and removing them on close.</span> |
| <Link id="m-checkglobalpage" /><code>{"private void CheckGlobalPage(ValueTuple<int, uint> data)"}</code> | <span className="api-desc">Server: when a page is unlocked globally, adds it to this book if it belongs to the collection.</span> |
| <Link id="m-checkinsert" /><code>{"private void CheckInsert("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When a loose page is let go over the book, adds it, records it globally and destroys the loose page.</span> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Build clean step; does nothing.</span> |
| <Link id="m-clientmoveleft" /><code>{"private void ClientMoveLeft("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> | <span className="api-desc">Client: asks the server to turn left when the move-left action starts.</span> |
| <Link id="m-clientmoveright" /><code>{"private void ClientMoveRight("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> | <span className="api-desc">Client: asks the server to turn right when the move-right action starts.</span> |
| <Link id="m-clientswiped" /><code>{"private void ClientSwiped("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">Client: asks the server to turn a page from a left or right swipe.</span> |
| <Link id="m-delaytointeract" /><code>{"private IEnumerator DelayToInteract("}<Link to="/mod/game-api/types/alta-items/bookpageinstance">{"BookPageInstance"}</Link>{" newPage, bool isFromMiddle) (iterator)"}</code> | <span className="api-desc">Keeps a new page non-interactable for the open duration.</span> |
| <Link id="m-destroypage" /><code>{"private void DestroyPage(int spawnedIndex)"}</code> | <span className="api-desc">Removes a spawned page from the open book; on the server it also destroys the entity and tells clients.</span> |
| <Link id="m-dropped" /><code>{"private void Dropped("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Unblocks locomotion, stops the held check and closes the book when nobody holds it.</span> |
| <Link id="m-fill" /><code>{"private void Fill()"}</code> | <span className="api-desc">Debug: on an empty server book, adds every page of the collection and unlocks them globally.</span> |
| <Link id="m-finishturning" /><code>{"private IEnumerator FinishTurning("}<Link to="/mod/game-api/types/alta-items/bookpageinstance">{"BookPageInstance"}</Link>{" page, int direction, bool isSkipping) (iterator)"}</code> | <span className="api-desc">Coroutine that finishes a page turn, then on the server removes pages that went out of view.</span> |
| <Link id="m-getcurrentpage" /><code>{"private int GetCurrentPage()"}</code> | <span className="api-desc">Index in `bookPages` of the page shown, or -1.</span> |
| <Link id="m-getpagenumber" /><code>{"private int GetPageNumber()"}</code> | <span className="api-desc">Page number to display: the shown page's index in the collection, or -1.</span> |
| <Link id="m-held" /><code>{"private IEnumerator Held("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Server coroutine while held: opens the book when it faces up and is still, closes it otherwise, and turns pages from input.</span> |
| <Link id="m-insertpage" /><code>{"private IEnumerator InsertPage("}<Link to="/mod/game-api/types/alta-items/pagedata">{"PageData"}</Link>{" page) (iterator)"}</code> | <span className="api-desc">Coroutine that waits for turns to stop, then reopens the book at a newly added page.</span> |
| <Link id="m-interactionfilter" /><code>{"private void InteractionFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Stops a player grabbing the book with a second hand while already holding it.</span> |
| <Link id="m-listenforpagedrop" /><code>{"private void ListenForPageDrop("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">When a loose page from this collection enters the drop area, shows the highlight and waits for it to be let go.</span> |
| <Link id="m-locationchange-2" /><code>{"private void LocationChange("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client handler that plays the page-location-changed event.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the global page-added event.</span> |
| <Link id="m-pickedup" /><code>{"private void PickedUp("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Blocks locomotion for the holder, starts the server held check and hooks the local player's page-turn input.</span> |
| <Link id="m-removepage-2" /><code>{"private void RemovePage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int oldPage)"}</code> | <span className="api-desc">Client handler for the remove-page message.</span> |
| <Link id="m-serializebook" /><code>{"private void SerializeBook("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isIncludingPages)"}</code> | <span className="api-desc">Writes or reads the collection and page count (and the pages themselves, if asked).</span> |
| <Link id="m-serverflippage-2" /><code>{"private void ServerFlipPage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool flipRight)"}</code> | <span className="api-desc">Server handler for a client's turn-page request.</span> |
| <Link id="m-setdisplay-2" /><code>{"private void SetDisplay("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-items/displayarguments">{"DisplayArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Message handler that updates the page count and page number text.</span> |
| <Link id="m-sethighlight-2" /><code>{"private void SetHighlight("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isHighlighted)"}</code> | <span className="api-desc">Client handler that shows or hides the add-page highlight.</span> |
| <Link id="m-setopen-2" /><code>{"private void SetOpen("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isOpen)"}</code> | <span className="api-desc">Client handler that opens or closes the book.</span> |
| <Link id="m-showhighlight" /><code>{"private void ShowHighlight(bool isShowing)"}</code> | <span className="api-desc">Shows or hides the add-page highlight; the server also sends it to clients.</span> |
| <Link id="m-spawnpage" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pageinstance">{"PageInstance"}</Link>{" SpawnPage(int index, int spawnedIndex, bool isFromMiddle = false)"}</code> | <span className="api-desc">Server: spawns a page entity for a book page and adds it at a slot on every side.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Gets the networked Open animator bool and starts closed.</span> |
| <Link id="m-startlisteningfordrops" /><code>{"private void StartListeningForDrops()"}</code> | <span className="api-desc">Turns on the drop area for adding loose pages.</span> |
| <Link id="m-stoplistenforpagedrop" /><code>{"private void StopListenForPageDrop("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Stops watching a loose page that left the drop area.</span> |
| <Link id="m-stoplisteningfordrops" /><code>{"private void StopListeningForDrops()"}</code> | <span className="api-desc">Turns off the drop area and stops watching every hovering page.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Initial sync handler: sends the collection and page count, and clients apply the flairs.</span> |
| <Link id="m-turnleftdebug" /><code>{"private void TurnLeftDebug()"}</code> | <span className="api-desc">Editor button for `TurnLeft`.</span> |
| <Link id="m-turnpage-2" /><code>{"private void TurnPage(int spawnedIndex, int direction, bool isSkipping)"}</code> | <span className="api-desc">Plays a page turn locally; overload is the client handler for the turn message.</span> |
| <Link id="m-turnpage-3" /><code>{"private void TurnPage("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-items/turnpagearguments">{"TurnPageArguments"}</Link>{" turnPage)"}</code> | <span className="api-desc">Plays a page turn locally; overload is the client handler for the turn message.</span> |
| <Link id="m-turnpageasserver" /><code>{"private void TurnPageAsServer(int spawnedIndex, int direction, bool isSkipping)"}</code> | <span className="api-desc">Server: turns a spawned page, tells clients and spawns the next page in that direction.</span> |
| <Link id="m-turnrightdebug" /><code>{"private void TurnRightDebug()"}</code> | <span className="api-desc">Editor button for `TurnRight`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Book`:

<div className="api-used-in">

[`BookRestrictor.bookOnServer`](/mod/game-api/types/alta-items/bookrestrictor#m-bookonserver), [`BookRestrictor.bookPrefab`](/mod/game-api/types/alta-items/bookrestrictor#m-bookprefab), [`BookSpawner.bookPrefab`](/mod/game-api/types/alta-items/bookspawner#m-bookprefab), [`PageInstance.Book`](/mod/game-api/types/alta-items/pageinstance#m-book), [`PageInstance.SetInBook`](/mod/game-api/types/alta-items/pageinstance#m-setinbook).

</div>
