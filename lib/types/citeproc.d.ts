// prettier-ignore

declare module "citeproc" {
  /** Declaration file generated by dts-gen */

  export class Blob {
    constructor(str: any, token: any, levelname: any);

    push(blob: any): void;
  }

  export class Disambiguation {
    constructor(state: any);

    captureStepToBase(): void;

    configModes(): void;

    disExtraText(): void;

    disNames(ismax: any): void;

    disYears(): void;

    evalScan(maxed: any): void;

    getCiteData(Item: any, base: any): void;

    incrementDisambig(): any;

    initVars(akey: any): any;

    padBase(base: any): void;

    run(akey: any): void;

    runDisambig(): void;

    scanItems(list: any): void;
  }

  export class Engine {
    constructor(
      sys: any,
      style: any,
      lang?: any,
      forceLang?: any,
      ...args: any[]
    );

    appendCitationCluster(citation: any): any;

    buildTokenLists(area_nodes: any, target: any): void;

    configureTokenList(tokens: any): void;

    configureTokenLists(): any;

    dateParseArray(date_obj: any): any;

    getCitationLabel(Item: any): any;

    getDate(form: any, forceDefaultLocale: any): any;

    getDateNum(ItemField: any, partname: any): any;

    getJurisdictionList(jurisdiction: any): any;

    getOpt(arg: any): any;

    getSortFunc(): any;

    getTerm(
      term: any,
      form: any,
      plural: any,
      gender: any,
      mode: any,
      forceDefaultLocale: any
    ): any;

    getTrigraphParams(): any;

    getVariable(Item: any, varname: any, form: any, plural: any): any;

    inheritOpt(
      token: any,
      attrname: any,
      parentname: any,
      defaultValue: any
    ): any;

    loadStyleModule(jurisdiction: any, xmlSource: any, skipFallback: any): any;

    localeConfigure(langspec: any, beShy: any): void;

    localeSet(myxml: any, lang_in: any, lang_out: any): void;

    makeBibliography(bibsection?: any): any;

    makeCitationCluster(rawList: any): any;

    normalDecorIsOrphan(blob: any, params: any): any;

    previewCitationCluster(
      citation: any,
      citationsPre: any,
      citationsPost: any,
      newMode: any
    ): any;

    processCitationCluster(
      citation: any,
      citationsPre: any,
      citationsPost: any[],
      flag?: any
    ): any;

    processNumber(node: any, ItemObject: any, variable: any): void;

    process_CitationCluster(sortedItems: any, citation: any): any;

    rebuildProcessorState(citations: any, mode: any, uncitedItemIDs: any): any;

    refetchItem(id: any): any;

    refetchItems(ids: any): any;

    remapSectionVariable(inputList: any): void;

    restoreProcessorState(citations: any): any;

    retrieveAllStyleModules(jurisdictionList: any): any;

    retrieveItem(id: any): any;

    setAbbreviations(arg: any): void;

    setAutoVietnameseNamesOption(arg: any): void;

    setCitationId(citation: any, force: any): any;

    setCloseQuotesArray(): void;

    setLangPrefsForCiteAffixes(affixList: any): void;

    setLangPrefsForCites(obj: any, conv: any): void;

    setLangTagsForCslSort(tags: any): void;

    setLangTagsForCslTranslation(tags: any): void;

    setLangTagsForCslTransliteration(tags: any): void;

    setNumberLabels(Item: any): void;

    setOpt(token: any, name: any, value: any): void;

    setOutputFormat(mode: any): void;

    setStyleAttributes(): void;

    setSuppressTrailingPunctuation(arg: any): void;

    updateItems(
      idList?: any,
      nosort?: any,
      rerun_ambigs?: any,
      implicitUpdate?: any
    ): any;

    updateUncitedItems(idList: any, nosort: any): any;

    static Bibliography(): void;

    static BibliographySort(): void;

    static Build(): void;

    static Citation(state: any): void;

    static CitationSort(): void;

    static Configure(): void;

    static Fun(state: any): void;

    static InText(): void;

    static Opt(): void;

    static Tmp(): void;

    static getField(
      mode: any,
      hash: any,
      term: any,
      form: any,
      plural: any,
      gender: any
    ): any;

    cslXml: any;
    opt: any;
  }

  export class NameOutput {
    constructor(state: any, Item: any, item: any);

    checkCommonAuthor(requireMatch: any): any;

    constrainNames(): void;

    disambigNames(): void;

    divideAndTransliterateNames(): void;

    fixupInstitution(name: any, varname: any, listpos: any): any;

    getEtAlConfig(): void;

    getName(name: any, slotLocaleset: any, fallback: any, stopOrig: any): any;

    getNameParams(langTag: any): any;

    getStaticOrder(name: any, refresh: any): any;

    init(names: any): void;

    isPerson(value: any): any;

    joinFreetersAndInstitutionSets(blobs: any): any;

    joinInstitutionSets(blobs: any, pos: any): any;

    joinPersons(blobs: any, pos: any, j: any, tokenname: any): any;

    joinPersonsAndInstitutions(blobs: any): any;

    outputNames(): void;

    reinit(names: any, labelVariable: any): void;

    renderAllNames(): void;

    renderInstitutionNames(): void;

    setCommonTerm(): void;

    setEtAlParameters(): void;

    setRenderedName(name: any): void;

    truncatePersonalNameLists(): void;
  }

  export class NumericBlob {
    constructor(
      state: any,
      particle: any,
      num: any,
      mother_token: any,
      id: any
    );

    checkLast(last: any): any;

    checkNext(next: any, start: any): void;

    setFormatter(formatter: any): void;
  }

  export class Parallel {
    constructor(state: any);

    StartCitation(sortedItems: any, out: any): void;

    checkRepeats(params: any): any;
  }

  export class PublisherOutput {
    constructor(state: any, group_tok: any);

    clearVars(): void;

    composeAndBlob(): void;

    composeElements(): void;

    composePublishers(): void;

    joinPublishers(): void;

    render(): void;
  }

  export class Registry {
    constructor(state: any);

    compareRegistryTokens(a: any, b: any): any;

    dodeletes(myhash: any): void;

    doinserts(mylist: any): void;

    dopurge(myhash: any): void;

    dorefreshes(): void;

    init(itemIDs: any, uncited_flag: any): void;

    rebuildlist(nosort: any): void;

    registerAmbigToken(akey: any, id: any, ambig_config: any): void;

    renumber(): void;

    setdisambigs(): void;

    setsortkeys(): void;

    sorttokens(nosort: any): void;

    static CitationReg(): void;

    static Comparifier(state: any, keyset: any): void;

    static NameReg(state: any): void;
  }

  export class Stack {
    constructor(val: any, literal: any);

    clear(): void;

    length(): any;

    pop(): any;

    push(val: any, literal: any): void;

    replace(val: any, literal: any): void;

    value(): any;
  }

  export class XmlDOM {
    constructor(dataObj: any);

    addInstitutionNodes(myxml: any): void;

    addMissingNameNodes(myxml: any): void;

    attributes(myxml: any): any;

    children(myxml: any): any;

    clean(xml: any): any;

    content(myxml: any): any;

    deleteAttribute(myxml: any, attr: any): void;

    deleteNodeByNameAttribute(myxml: any, val: any): void;

    flagDateMacros(myxml: any): void;

    getAttributeName(attr: any): any;

    getAttributeValue(myxml: any, name: any, namespace: any): any;

    getNodeValue(myxml: any, name: any): any;

    getNodesByName(myxml: any, name: any, nameattrval: any): any;

    getStyleId(myxml: any, styleName: any): any;

    insertChildNodeAfter(parent: any, node: any, pos: any, datexml: any): any;

    insertPublisherAndPlace(myxml: any): void;

    isChildOfSubstitute(node: any): any;

    makeXml(myxml: any): any;

    nodeCopy(myxml: any): any;

    nodeNameIs(myxml: any, name: any): any;

    nodename(myxml: any): any;

    numberofnodes(myxml: any): any;

    setAttribute(myxml: any, attr: any, val: any): any;

    setAttributeOnNodeIdentifiedByNameAttribute(
      myxml: any,
      nodename: any,
      partname: any,
      attrname: any,
      val: any
    ): void;
  }

  export class XmlJSON {
    constructor(dataObj: any);

    addInstitutionNodes(myjson: any): void;

    addMissingNameNodes(myjson: any, parents: any): void;

    attributes(myjson: any): any;

    children(myjson: any): any;

    clean(json: any): any;

    content(myjson: any): any;

    deleteAttribute(myjson: any, attrname: any): void;

    deleteNodeByNameAttribute(myjson: any, val: any): void;

    flagDateMacros(myjson: any): void;

    getAttributeValue(myjson: any, name: any, namespace: any): any;

    getNodeValue(myjson: any, name: any): any;

    getNodesByName(myjson: any, name: any, nameattrval: any, ret: any): any;

    getStyleId(myjson: any, styleName: any): any;

    insertChildNodeAfter(parent: any, node: any, pos: any, datejson: any): any;

    insertPublisherAndPlace(myjson: any): void;

    inspectDateMacros(myjson: any): any;

    isChildOfSubstitute(parents: any): any;

    makeXml(myjson: any): any;

    nodeCopy(myjson: any, clone: any): any;

    nodeNameIs(myjson: any, name: any): any;

    nodename(myjson: any): any;

    numberofnodes(myjson: any): any;

    setAttribute(myjson: any, attr: any, val: any): any;

    setAttributeOnNodeIdentifiedByNameAttribute(
      myjson: any,
      nodename: any,
      partname: any,
      attrname: any,
      val: any
    ): void;
  }

  export const AFTER: number;

  export const ALL_ROMANESQUE_REGEXP: RegExp;

  export const AREAS: string[];

  export const ASCENDING: number;

  export const ASSUME_ALL_ITEMS_REGISTERED: number;

  export const BEFORE: number;

  export const CITE_FIELDS: string[];

  export const CREATORS: string[];

  export const DATE_PARTS: string[];

  export const DATE_PARTS_ALL: string[];

  export const DATE_PARTS_INTERNAL: string[];

  export const DATE_VARIABLES: string[];

  export const DESCENDING: number;

  export const DISAMBIGUATE_OPTIONS: string[];

  export const DISPLAY_CLASSES: string[];

  export const END: number;

  export const ENDSWITH_ROMANESQUE_REGEXP: RegExp;

  export const ERROR_NO_RENDERED_FORM: number;

  export const FIELD_CATEGORY_REMAP: {
    "archive": string;
    "archive-place": string;
    "call-number": string;
    "chapter-number": string;
    "citation-number": string;
    "collection-number": string;
    "collection-title": string;
    "container-title": string;
    "country": string;
    "edition": string;
    "event": string;
    "event-place": string;
    "genre": string;
    "issue": string;
    "jurisdiction": string;
    "language-name": string;
    "language-name-original": string;
    "locator": string;
    "locator-extra": string;
    "medium": string;
    "number": string;
    "number-of-pages": string;
    "number-of-volumes": string;
    "page": string;
    "place": string;
    "publisher": string;
    "publisher-place": string;
    "title": string;
    "title-short": string;
    "volume": string;
  };

  export const FORMAT_KEY_SEQUENCE: string[];

  export const GENDERS: string[];

  export const GIVENNAME_DISAMBIGUATION_RULES: string[];

  export const INSTITUTION_KEYS: string[];

  export const ITERATION: number;

  export const LANGS: {
    "af-ZA": string;
    "ar": string;
    "bg-BG": string;
    "ca-AD": string;
    "cs-CZ": string;
    "da-DK": string;
    "de-AT": string;
    "de-CH": string;
    "de-DE": string;
    "el-GR": string;
    "en-GB": string;
    "en-US": string;
    "es-ES": string;
    "et-EE": string;
    "eu": string;
    "fa-IR": string;
    "fi-FI": string;
    "fr-CA": string;
    "fr-FR": string;
    "he-IL": string;
    "hr-HR": string;
    "hu-HU": string;
    "is-IS": string;
    "it-IT": string;
    "ja-JP": string;
    "km-KH": string;
    "ko-KR": string;
    "lt-LT": string;
    "lv-LV": string;
    "mn-MN": string;
    "nb-NO": string;
    "nl-NL": string;
    "nn-NO": string;
    "pl-PL": string;
    "pt-BR": string;
    "pt-PT": string;
    "ro-RO": string;
    "ru-RU": string;
    "sk-SK": string;
    "sl-SI": string;
    "sr-RS": string;
    "sv-SE": string;
    "th-TH": string;
    "tr-TR": string;
    "uk-UA": string;
    "vi-VN": string;
    "zh-CN": string;
    "zh-TW": string;
  };

  export const LANG_BASES: {
    af: string;
    ar: string;
    bg: string;
    ca: string;
    cs: string;
    da: string;
    de: string;
    el: string;
    en: string;
    es: string;
    et: string;
    eu: string;
    fa: string;
    fi: string;
    fr: string;
    he: string;
    hr: string;
    hu: string;
    is: string;
    it: string;
    ja: string;
    km: string;
    ko: string;
    lt: string;
    lv: string;
    mn: string;
    nb: string;
    nl: string;
    nn: string;
    pl: string;
    pt: string;
    ro: string;
    ru: string;
    sk: string;
    sl: string;
    sr: string;
    sv: string;
    th: string;
    tr: string;
    uk: string;
    vi: string;
    zh: string;
  };

  export const LITERAL: boolean;

  export const LOCATOR_LABELS_MAP: {
    add: string;
    amend: string;
    annot: string;
    app: string;
    art: string;
    bibliog: string;
    bk: string;
    ch: string;
    cl: string;
    cmt: string;
    col: string;
    dec: string;
    dept: string;
    ex: string;
    fig: string;
    fld: string;
    fol: string;
    hypo: string;
    illus: string;
    intro: string;
    l: string;
    n: string;
    no: string;
    op: string;
    p: string;
    para: string;
    pmbl: string;
    pp: string;
    princ: string;
    pt: string;
    pub: string;
    r: string;
    rn: string;
    sched: string;
    sec: string;
    ser: string;
    subch: string;
    subdiv: string;
    subpara: string;
    subsec: string;
    supp: string;
    sv: string;
    tbl: string;
    tit: string;
    vol: string;
    vrs: string;
  };

  export const LOCATOR_LABELS_REGEXP: RegExp;

  export const LOOSE: number;

  export const LangPrefsMap: {
    "archive": string;
    "archive-place": string;
    "authority": string;
    "collection-title": string;
    "container-title": string;
    "edition": string;
    "event": string;
    "event-place": string;
    "genre": string;
    "issue": string;
    "jurisdiction": string;
    "medium": string;
    "number": string;
    "publisher": string;
    "publisher-place": string;
    "title": string;
    "title-short": string;
    "volume": string;
  };

  export const MODULE_MACROS: {
    "juris-locator": boolean;
    "juris-main": boolean;
    "juris-main-short": boolean;
    "juris-pretitle": boolean;
    "juris-pretitle-short": boolean;
    "juris-tail": boolean;
    "juris-tail-short": boolean;
    "juris-title": boolean;
    "juris-title-short": boolean;
  };

  export const MODULE_TYPES: {
    bill: boolean;
    gazette: boolean;
    hearing: boolean;
    legal_case: boolean;
    legislation: boolean;
    locator: boolean;
    patent: boolean;
    regulation: boolean;
    report: boolean;
    standard: boolean;
  };

  export const MULTI_FIELDS: string[];

  export const NAME_ATTRIBUTES: string[];

  export const NAME_INITIAL_REGEXP: RegExp;

  export const NAME_PARTS: string[];

  export const NAME_VARIABLES: string[];

  export const NONE: number;

  export const NOTE_FIELDS_REGEXP: RegExp;

  export const NOTE_FIELD_REGEXP: RegExp;

  export const NUMBER_REGEXP: RegExp;

  export const NUMERIC: number;

  export const NUMERIC_VARIABLES: string[];

  export const Node: {
    "#comment": {
      build: any;
    };
    "alternative": {
      build: any;
    };
    "alternative-text": {
      build: any;
    };
    "bibliography": {
      build: any;
    };
    "choose": {
      build: any;
      configure: any;
    };
    "citation": {
      build: any;
    };
    "condition": {
      build: any;
    };
    "conditions": {
      build: any;
    };
    "date": {
      build: any;
    };
    "date-part": {
      build: any;
    };
    "else": {
      build: any;
      configure: any;
    };
    "else-if": {
      build: any;
      configure: any;
    };
    "et-al": {
      build: any;
    };
    "group": {
      build: any;
    };
    "if": {
      build: any;
      configure: any;
    };
    "info": {
      build: any;
    };
    "institution": {
      build: any;
      configure: any;
    };
    "institution-part": {
      build: any;
    };
    "intext": {
      build: any;
    };
    "key": {
      build: any;
    };
    "label": {
      build: any;
    };
    "layout": {
      build: any;
    };
    "macro": {
      build: any;
    };
    "name": {
      build: any;
    };
    "name-part": {
      build: any;
    };
    "names": {
      build: any;
    };
    "number": {
      build: any;
    };
    "sort": {
      build: any;
    };
    "substitute": {
      build: any;
    };
    "text": {
      build: any;
    };
  };

  export const PARTICLE_FAMILY_REGEXP: RegExp;

  export const PARTICLE_GIVEN_REGEXP: RegExp;

  export const PLURAL: number;

  export const POSITION: number;

  export const POSITION_CONTAINER_SUBSEQUENT: number;

  export const POSITION_FIRST: number;

  export const POSITION_IBID: number;

  export const POSITION_IBID_WITH_LOCATOR: number;

  export const POSITION_MAP: {
    "0": number;
    "1": number;
    "2": number;
    "3": number;
    "4": number;
  };

  export const POSITION_SUBSEQUENT: number;

  export const POSITION_TEST_VARS: string[];

  export const PREFIX_PUNCTUATION: RegExp;

  export const PREVIEW: string;

  export const PRIMARY: number;

  export const PROCESSOR_VERSION: string;

  export const ParticleList: string[][];

  export const ROMANESQUE_NOT_REGEXP: RegExp;

  export const ROMANESQUE_REGEXP: RegExp;

  export const ROMAN_NUMERALS: string[][];

  export const SECONDARY: number;

  export const SEEN: number;

  export const SINGLETON: number;

  export const SINGULAR: number;

  export const SKIP_WORDS: string[];

  export const START: number;

  export const STARTSWITH_ROMANESQUE_REGEXP: RegExp;

  export const STATUTE_SUBDIV_PLAIN_REGEX: RegExp;

  export const STATUTE_SUBDIV_PLAIN_REGEX_FRONT: RegExp;

  export const STATUTE_SUBDIV_STRINGS: {
    "add.": string;
    "amend.": string;
    "annot.": string;
    "app.": string;
    "art.": string;
    "bibliog.": string;
    "bk.": string;
    "ch.": string;
    "cl.": string;
    "cmt.": string;
    "col.": string;
    "dec.": string;
    "dept.": string;
    "ex.": string;
    "fig.": string;
    "fld.": string;
    "fol.": string;
    "hypo.": string;
    "illus.": string;
    "intro.": string;
    "l.": string;
    "n.": string;
    "no.": string;
    "op.": string;
    "p.": string;
    "para.": string;
    "pmbl.": string;
    "pp.": string;
    "princ.": string;
    "pt.": string;
    "pub.": string;
    "r.": string;
    "rn.": string;
    "sched.": string;
    "sec.": string;
    "ser.": string;
    "subch.": string;
    "subdiv.": string;
    "subpara.": string;
    "subsec.": string;
    "supp.": string;
    "sv.": string;
    "tbl.": string;
    "tit.": string;
    "vol.": string;
    "vrs.": string;
  };

  export const STATUTE_SUBDIV_STRINGS_REVERSE: {
    "addendum": string;
    "amendment": string;
    "annotation": string;
    "appendix": string;
    "article": string;
    "bibliography": string;
    "book": string;
    "chapter": string;
    "clause": string;
    "column": string;
    "comment": string;
    "decision": string;
    "department": string;
    "example": string;
    "field": string;
    "figure": string;
    "folio": string;
    "hypothetical": string;
    "illustration": string;
    "introduction": string;
    "issue": string;
    "line": string;
    "note": string;
    "opus": string;
    "page": string;
    "paragraph": string;
    "part": string;
    "preamble": string;
    "principle": string;
    "publication": string;
    "randnummer": string;
    "rule": string;
    "schedule": string;
    "section": string;
    "series,": string;
    "sub verbo": string;
    "sub-verbo": string;
    "subchapter": string;
    "subdivision": string;
    "subparagraph": string;
    "subsection": string;
    "supplement": string;
    "table": string;
    "title": string;
    "verse": string;
    "volume": string;
  };

  export const STRICT: number;

  export const SUCCESSOR: number;

  export const SUCCESSOR_OF_SUCCESSOR: number;

  export const SUFFIX_CHARS: string;

  export const SUFFIX_PUNCTUATION: RegExp;

  export const SUPERSCRIPTS: {
    "ª": string;
    "²": string;
    "³": string;
    "¹": string;
    "º": string;
    "ʰ": string;
    "ʱ": string;
    "ʲ": string;
    "ʳ": string;
    "ʴ": string;
    "ʵ": string;
    "ʶ": string;
    "ʷ": string;
    "ʸ": string;
    "ˀ": string;
    "ˁ": string;
    "ˠ": string;
    "ˡ": string;
    "ˢ": string;
    "ˣ": string;
    "ˤ": string;
    "ۥ": string;
    "ۦ": string;
    "ᴬ": string;
    "ᴭ": string;
    "ᴮ": string;
    "ᴰ": string;
    "ᴱ": string;
    "ᴲ": string;
    "ᴳ": string;
    "ᴴ": string;
    "ᴵ": string;
    "ᴶ": string;
    "ᴷ": string;
    "ᴸ": string;
    "ᴹ": string;
    "ᴺ": string;
    "ᴼ": string;
    "ᴽ": string;
    "ᴾ": string;
    "ᴿ": string;
    "ᵀ": string;
    "ᵁ": string;
    "ᵂ": string;
    "ᵃ": string;
    "ᵄ": string;
    "ᵅ": string;
    "ᵆ": string;
    "ᵇ": string;
    "ᵈ": string;
    "ᵉ": string;
    "ᵊ": string;
    "ᵋ": string;
    "ᵌ": string;
    "ᵍ": string;
    "ᵏ": string;
    "ᵐ": string;
    "ᵑ": string;
    "ᵒ": string;
    "ᵓ": string;
    "ᵔ": string;
    "ᵕ": string;
    "ᵖ": string;
    "ᵗ": string;
    "ᵘ": string;
    "ᵙ": string;
    "ᵚ": string;
    "ᵛ": string;
    "ᵜ": string;
    "ᵝ": string;
    "ᵞ": string;
    "ᵟ": string;
    "ᵠ": string;
    "ᵡ": string;
    "⁰": string;
    "ⁱ": string;
    "⁴": string;
    "⁵": string;
    "⁶": string;
    "⁷": string;
    "⁸": string;
    "⁹": string;
    "⁺": string;
    "⁻": string;
    "⁼": string;
    "⁽": string;
    "⁾": string;
    "ⁿ": string;
    "℠": string;
    "™": string;
    "㆒": string;
    "㆓": string;
    "㆔": string;
    "㆕": string;
    "㆖": string;
    "㆗": string;
    "㆘": string;
    "㆙": string;
    "㆚": string;
    "㆛": string;
    "㆜": string;
    "㆝": string;
    "㆞": string;
    "㆟": string;
  };

  export const SUPERSCRIPTS_REGEXP: RegExp;

  export const SUPPRESS: number;

  export const SWAPPING_PUNCTUATION: string[];

  export const SYS_OPTIONS: string[];

  export const TERMINAL_PUNCTUATION: string[];

  export const TITLE_SPLIT_REGEXP: {
    match: RegExp;
    matchfirst: RegExp;
    split: RegExp;
  };

  export const TOLERANT: number;

  export const TRIGRAPH: number;

  export const VARIABLES_WITH_SHORT_FORM: string[];

  export const VIETNAMESE_NAMES: RegExp;

  export const VIETNAMESE_SPECIALS: RegExp;

  export function AbbreviationSegments(): void;

  export function AmbigConfig(): void;

  export function Doppeler(rexStr: any, stringMangler: any): void;

  export function EVALUATE_GROUP_CONDITION(state: any, flags: any): any;

  export function GET_COURT_CLASS(state: any, Item: any, sortKey: any): any;

  export function INIT_JURISDICTION_MACROS(
    state: any,
    Item: any,
    item: any,
    macroName: any
  ): any;

  export function Mode(mode: any): any;

  export function SET_COURT_CLASSES(
    state: any,
    lang: any,
    myxml: any,
    dataObj: any
  ): void;

  export function TITLE_FIELD_SPLITS(seg: any): any;

  export function TITLE_SPLIT(str: any): any;

  export function Token(name: any, tokentype: any, conditional: any): void;

  export function Transform(state: any): void;

  export function UPDATE_GROUP_CONTEXT_CONDITION(
    state: any,
    str: any,
    valueTerm: any,
    token: any,
    value: any
  ): void;

  export function XmlToToken(
    state: any,
    tokentype: any,
    explicitTarget: any,
    var_stack: any
  ): void;

  export function ambigConfigDiff(a: any, b: any): any;

  export function buildMacro(mytarget: any, macro_nodes: any): void;

  export function castLabel(
    state: any,
    node: any,
    term: any,
    plural: any,
    mode: any
  ): any;

  export function checkIgnorePredecessor(state: any, prefix: any): any;

  export function checkNestedBrace(state: any): void;

  export function checkPrefixSpaceAppend(state: any, prefix: any): any;

  export function checkSuffixSpacePrepend(state: any, suffix: any): any;

  export function citeEnd(Item: any, item: any): void;

  export function citeStart(
    Item: any,
    item: any,
    blockShadowNumberReset: any
  ): void;

  export function cloneAmbigConfig(config: any, oldconfig: any): any;

  export function configureMacro(mytarget: any): void;

  export function dateAsSortKey(state: any, Item: any, isMacro: any): void;

  export function dateMacroAsSortKey(state: any, Item: any): void;

  export function debug(str: any): void;

  export function demoteNoiseWords(
    state: any,
    fld: any,
    drop_or_demote: any
  ): any;

  export function error(str: any): void;

  export function evaluateLabel(
    node: any,
    state: any,
    Item: any,
    item: any
  ): any;

  export function expandMacro(macro_key_token: any, target: any): void;

  export function extractTitleAndSubtitle(
    Item: any,
    narrowSpaceLocale: any
  ): void;

  export function getAbbrevsDomain(state: any, country: any, lang: any): any;

  export function getAmbigConfig(): any;

  export function getAmbiguousCite(
    Item: any,
    disambig: any,
    visualForm: any,
    item: any
  ): any;

  export function getBibliographyEntries(bibsection: any): any;

  export function getCitationCluster(inputList: any, citation: any): any;

  export function getCite(
    Item: any,
    item: any,
    prevItemID: any,
    blockShadowNumberReset: any
  ): any;

  export function getLocaleNames(myxml: any, preferredLocale: any): any;

  export function getMacroTarget(mkey: any): any;

  export function getMaxVals(): any;

  export function getMinVal(): any;

  export function getSafeEscape(state: any): any;

  export function getSortCompare(default_locale: any): any;

  export function getSortKeys(Item: any, key_type: any): any;

  export function getSpliceDelimiter(
    last_locator: any,
    last_collapsed: any,
    pos: any
  ): any;

  export function localeResolve(langstr: any, defaultLocale: any): any;

  export function makeBuilder(me: any, target: any): any;

  export function normalizeLocaleStr(str: any): any;

  export function parseLocator(item: any): any;

  export function parseNoteFieldHacks(
    Item: any,
    validFieldsForType: any,
    allowDateOverride: any
  ): void;

  export function parseParticles(nameObj: any): void;

  export function parseXml(str: any): any;

  export function setDecorations(state: any, attributes: any): any;

  export function setupXml(xmlObject: any): any;

  export function stripXmlProcessingInstruction(xml: any): any;

  export function substituteOne(template: any): any;

  export function substituteTwo(template: any): any;

  export function titlecaseSentenceOrNormal(
    state: any,
    Item: any,
    seg: any,
    lang: any,
    sentenceCase: any
  ): any;

  export function toLocaleLowerCase(...args: any[]): void;

  export function toLocaleUpperCase(...args: any[]): void;

  export function tokenExec(token: any, Item: any, item: any): any;

  export namespace Attributes {}

  export namespace Conditions {
    class Engine {
      constructor(state: any, token: any);

      addMatch(match: any): void;

      addTest(test: any): void;

      matchCombine(): void;
    }

    function Configure(state: any, pos: any): void;

    function TopNode(state: any): void;
  }

  export namespace DateParser {
    const dayGuess: number;

    const monthAbbrevs: string[][];

    const monthGuess: number;

    const monthRexes: RegExp[];

    const monthSets: string[][];

    const monthStrings: string[];

    function addDateParserMonths(lst: any): void;

    function convertDateObjectToArray(thedate: any): any;

    function convertDateObjectToString(thedate: any): any;

    function parse(txt: any): any;

    function parseDateToArray(txt: any): any;

    function parseDateToObject(txt: any): any;

    function parseDateToString(txt: any): any;

    function resetDateParserMonths(): void;

    function setOrderDayMonth(): void;

    function setOrderMonthDay(): void;
  }

  export namespace Output {
    class DefaultFormatter {
      constructor();

      format(num: any): any;
    }

    class Queue {
      constructor(state: any);

      addToken(name: any, modifier: any, token: any): void;

      append(
        str: any,
        tokname: any,
        notSerious: any,
        ignorePredecessor: any,
        noStripPeriods: any
      ): any;

      clearlevel(): void;

      closeLevel(name: any): void;

      endTag(name: any): void;

      getToken(name: any): any;

      mergeTokenStrings(base: any, modifier: any): any;

      openLevel(token: any): void;

      pop(): any;

      popFormats(): void;

      pushFormats(tokenstore: any): void;

      renderBlobs(blobs: any, delim: any, in_cite: any, parent: any): any;

      startTag(name: any, token: any): void;

      string(state: any, myblobs: any, blob: any): any;

      static adjust(punctInQuote: any): void;

      static purgeEmptyBlobs(parent: any): void;
    }

    const Formats: {
      asciidoc: {
        "@DOI/true": any;
        "@URL/true": any;
        "@bibliography/entry": any;
        "@cite/entry": any;
        "@display/block": any;
        "@display/indent": any;
        "@display/left-margin": any;
        "@display/right-inline": any;
        "@font-style/italic": string;
        "@font-style/normal": boolean;
        "@font-style/oblique": string;
        "@font-variant/normal": boolean;
        "@font-variant/small-caps": string;
        "@font-weight/bold": string;
        "@font-weight/light": boolean;
        "@font-weight/normal": boolean;
        "@passthrough/true": any;
        "@quotes/false": boolean;
        "@quotes/inner": any;
        "@quotes/true": any;
        "@showid/true": any;
        "@strip-periods/false": any;
        "@strip-periods/true": any;
        "@text-decoration/none": boolean;
        "@text-decoration/underline": string;
        "@vertical-align/baseline": boolean;
        "@vertical-align/sub": string;
        "@vertical-align/sup": string;
        "bibend": string;
        "bibstart": string;
        "text_escape": any;
      };
      fo: {
        "@DOI/true": any;
        "@URL/true": any;
        "@bibliography/entry": any;
        "@cite/entry": any;
        "@display/block": any;
        "@display/indent": any;
        "@display/left-margin": any;
        "@display/right-inline": any;
        "@font-style/italic": string;
        "@font-style/normal": string;
        "@font-style/oblique": string;
        "@font-variant/normal": string;
        "@font-variant/small-caps": string;
        "@font-weight/bold": string;
        "@font-weight/light": string;
        "@font-weight/normal": string;
        "@passthrough/true": any;
        "@quotes/false": boolean;
        "@quotes/inner": any;
        "@quotes/true": any;
        "@showid/true": any;
        "@strip-periods/false": any;
        "@strip-periods/true": any;
        "@text-decoration/none": string;
        "@text-decoration/underline": string;
        "@vertical-align/baseline": string;
        "@vertical-align/sub": string;
        "@vertical-align/sup": string;
        "bibend": string;
        "bibstart": string;
        "text_escape": any;
      };
      html: {
        "@DOI/true": any;
        "@URL/true": any;
        "@bibliography/entry": any;
        "@cite/entry": any;
        "@display/block": any;
        "@display/indent": any;
        "@display/left-margin": any;
        "@display/right-inline": any;
        "@font-style/italic": string;
        "@font-style/normal": string;
        "@font-style/oblique": string;
        "@font-variant/normal": string;
        "@font-variant/small-caps": string;
        "@font-weight/bold": string;
        "@font-weight/light": boolean;
        "@font-weight/normal": string;
        "@passthrough/true": any;
        "@quotes/false": boolean;
        "@quotes/inner": any;
        "@quotes/true": any;
        "@showid/true": any;
        "@strip-periods/false": any;
        "@strip-periods/true": any;
        "@text-decoration/none": string;
        "@text-decoration/underline": string;
        "@vertical-align/baseline": string;
        "@vertical-align/sub": string;
        "@vertical-align/sup": string;
        "bibend": string;
        "bibstart": string;
        "text_escape": any;
      };
      latex: {
        "@DOI/true": any;
        "@URL/true": any;
        "@bibliography/entry": any;
        "@cite/entry": any;
        "@display/block": any;
        "@display/indent": any;
        "@display/left-margin": any;
        "@display/right-inline": any;
        "@font-style/italic": string;
        "@font-style/normal": boolean;
        "@font-style/oblique": boolean;
        "@font-variant/normal": boolean;
        "@font-variant/small-caps": boolean;
        "@font-weight/bold": string;
        "@font-weight/light": boolean;
        "@font-weight/normal": boolean;
        "@passthrough/true": any;
        "@quotes/false": boolean;
        "@quotes/inner": any;
        "@quotes/true": any;
        "@showid/true": any;
        "@strip-periods/false": any;
        "@strip-periods/true": any;
        "@text-decoration/none": boolean;
        "@text-decoration/underline": boolean;
        "@vertical-align/baseline": boolean;
        "@vertical-align/sub": boolean;
        "@vertical-align/sup": boolean;
        "bibend": string;
        "bibstart": string;
        "text_escape": any;
      };
      rtf: {
        "@DOI/true": any;
        "@URL/true": any;
        "@bibliography/entry": any;
        "@cite/entry": any;
        "@display/block": string;
        "@display/indent": any;
        "@display/left-margin": any;
        "@display/right-inline": any;
        "@font-style/italic": string;
        "@font-style/normal": string;
        "@font-style/oblique": string;
        "@font-variant/normal": string;
        "@font-variant/small-caps": string;
        "@font-weight/bold": string;
        "@font-weight/light": boolean;
        "@font-weight/normal": string;
        "@passthrough/true": any;
        "@quotes/false": boolean;
        "@quotes/inner": any;
        "@quotes/true": any;
        "@showid/true": any;
        "@strip-periods/false": any;
        "@strip-periods/true": any;
        "@text-decoration/none": boolean;
        "@text-decoration/underline": string;
        "@vertical-align/baseline": boolean;
        "@vertical-align/sub": string;
        "@vertical-align/sup": string;
        "bibend": string;
        "bibstart": string;
        "text_escape": any;
      };
      text: {
        "@DOI/true": any;
        "@URL/true": any;
        "@bibliography/entry": any;
        "@cite/entry": any;
        "@display/block": any;
        "@display/indent": any;
        "@display/left-margin": any;
        "@display/right-inline": any;
        "@font-style/italic": boolean;
        "@font-style/normal": boolean;
        "@font-style/oblique": boolean;
        "@font-variant/normal": boolean;
        "@font-variant/small-caps": boolean;
        "@font-weight/bold": boolean;
        "@font-weight/light": boolean;
        "@font-weight/normal": boolean;
        "@passthrough/true": any;
        "@quotes/false": boolean;
        "@quotes/inner": any;
        "@quotes/true": any;
        "@showid/true": any;
        "@strip-periods/false": any;
        "@strip-periods/true": any;
        "@text-decoration/none": boolean;
        "@text-decoration/underline": boolean;
        "@vertical-align/baseline": boolean;
        "@vertical-align/sub": boolean;
        "@vertical-align/sup": boolean;
        "bibend": string;
        "bibstart": string;
        "text_escape": any;
      };
    };

    namespace Formatters {
      function lowercase(state: any, string: any): any;

      function passthrough(state: any, str: any): any;

      function sentence(state: any, string: any): any;

      function title(state: any, string: any): any;

      function uppercase(state: any, string: any): any;

      namespace nameDoppel {
        function join(obj: any): any;

        function split(str: any): any;
      }
    }
  }

  export namespace Util {
    class LongOrdinalizer {
      constructor();

      format(num: any, gender: any): any;

      init(state: any): void;
    }

    class Ordinalizer {
      constructor(state: any);

      format(num: any, gender: any): any;

      init(): void;
    }

    class Romanizer {
      constructor();

      format(num: any): any;
    }

    class Suffixator {
      constructor(slist: any);

      format(N: any): any;
    }

    function FlipFlopper(state: any): void;

    function Match(): void;

    function cloneToken(token: any): any;

    function fixDateNode(parent: any, pos: any, node: any): any;

    function outputNumericField(state: any, varname: any, itemID: any): void;

    function padding(num: any): any;

    function substituteEnd(state: any, target: any): void;

    function substituteStart(state: any, target: any): void;

    namespace Dates {
      function normalizeMonth(num: any, useSeason: any): any;

      namespace day {
        function numeric(state: any, num: any): any;

        function ordinal(state: any, num: any, gender: any): any;
      }

      namespace month {
        function numeric(state: any, num: any): any;
      }

      namespace year {
        function imperial(state: any, num: any, end: any): any;

        function numeric(state: any, num: any): any;
      }
    }

    namespace Names {
      function compareNamesets(base_nameset: any, nameset: any): any;

      function doInitialize(state: any, namelist: any, terminator: any): any;

      function doNormalize(state: any, namelist: any, terminator: any): any;

      function getRawName(name: any): any;

      function initializeWith(
        state: any,
        name: any,
        terminator: any,
        normalizeOnly: any
      ): any;

      function mergetag(state: any, tagstr: any, newstr: any): any;

      function notag(str: any): any;

      function tagonly(state: any, str: any): any;

      function unInitialize(state: any, name: any): any;
    }

    namespace PageRangeMangler {
      function getFunction(state: any, rangeType: any): any;
    }

    namespace Sort {
      function strip_prepositions(str: any): any;
    }
  }
}