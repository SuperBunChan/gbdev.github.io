import{r as a,o as i,c as r,a as e,b as s,F as l,e as t,d as n}from"./app.b9b4ba2d.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const c={},h=e("h1",{id:"game-boy-asm-style-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#game-boy-asm-style-guide","aria-hidden":"true"},"#"),t(" Game Boy ASM style guide")],-1),_=t("Written by "),u={href:"https://github.com/ISSOtm/",target:"_blank",rel:"noopener noreferrer"},b=t("ISSOtm"),p=e("hr",null,null,-1),g=e("p",null,"This style guide aims to formalize a style that most Game Boy ASM programmers agree on, and provide a good baseline for new programmers just starting in this field. (If that's you, welcome! \u{1F604})",-1),f=t("To quote the "),m={href:"https://github.com/torvalds/linux/blob/master/Documentation/process/coding-style.rst",target:"_blank",rel:"noopener noreferrer"},y=t("Linux kernel style guide"),v=t(":"),k=e("blockquote",null,[e("p",null,[t("Coding style is very personal, and I won't "),e("strong",null,"force"),t(" my views on anybody, but this is what goes for anything that I have to be able to maintain, and I'd prefer it for most other things too. Please at least consider the points made here.")])],-1),w=e("p",null,"Many people follow alternate style guides, and that's fine; but if you're starting to code in ASM, a clean style goes a long way to keep your code organized. Again: you don't have to do everything listed here, but please at least consider the reasons behind each bullet point.",-1),A=t("Oh, by the way, you're free to "),M={href:"https://github.com/gbdev/gbdev.github.io",target:"_blank",rel:"noopener noreferrer"},R=t("contribute to this document"),S=t(" and/or "),O={href:"https://gbdev.io/chat",target:"_blank",rel:"noopener noreferrer"},B=t("chat with us about it"),x=t("!"),C=e("h2",{id:"naming",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#naming","aria-hidden":"true"},"#"),t(" Naming")],-1),N={href:"https://rgbds.gbdev.io/docs/v0.4.2/rgbasm.5#SYMBOLS",target:"_blank",rel:"noopener noreferrer"},I=t("RGBASM accepts a lot of symbol names"),L=t(":"),E=e("blockquote",null,[e("p",null,"Symbol names can contain letters, numbers, underscores \u2018_\u2019, hashes \u2018#\u2019 and at signs \u2018@\u2019. However, they must begin with either a letter, or an underscore.")],-1),T=e("p",null,"However, naming conventions make code easier to read, since they help convey the different semantics between each symbol's name.",-1),G=n("<li><p>Labels use PascalCase: <code>DrawNPCs</code>, <code>GetOffsetFromCamera</code>.</p></li><li><p>Labels in RAM (VRAM, SRAM, WRAM, HRAM; you shouldn&#39;t be using Echo RAM or OAM) use the same convention but are prefixed with the initial of the RAM they&#39;re in, in lowercase: <code>wCameraOffsetBuffer</code>, <code>hVBlankFlag</code>, <code>vTilesetTiles</code>, <code>sSaveFileChecksum</code>. <em>Rationale: to know in which memory type the label is; this is important because VRAM and SRAM have special access precautions and HRAM can (should (must)) be accessed using the <code>ldh</code> instruction.</em></p></li><li><p>Local labels use camelCase, regardless of memory type: <code>.waitVRAM</code>, <code>wPlayer.xCoord</code>.</p></li><li><p>Macro names use snake_case: <code>wait_vram</code>, <code>end_struct</code>.</p></li>",4),q=e("p",null,[t("Constants use CAPS_SNAKE: "),e("code",null,"NB_NPCS"),t(", "),e("code",null,"OVERWORLD_STATE_LOAD_MAP"),t(".")],-1),D=t("Exception: constants that are used like labels should follow the label naming conventions. For example, see "),P={href:"https://github.com/gbdev/hardware.inc/blob/master/hardware.inc",target:"_blank",rel:"noopener noreferrer"},j=t("hardware.inc"),z=t("'s "),F=e("code",null,"rXXX",-1),H=t(" constants."),V=e("h2",{id:"best-practices",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#best-practices","aria-hidden":"true"},"#"),t(" Best practices")],-1),K=e("p",null,"Avoid hardcoding things. This means:",-1),U=e("li",null,[e("p",null,[t("No magic numbers. "),e("code",null,"ld a, CURSOR_SPEED"),t(" is much more obvious than "),e("code",null,"ld a, 5"),t(". In addition, if you ever change your mind and decide to change the cursor speed, you will only need to do so in one location ("),e("code",null,"CURSOR_SPEED equ 5"),t(" \u2192 "),e("code",null,"CURSOR_SPEED equ 4"),t(") instead of at every location you're using it, potentially missing some.")])],-1),W=t("Unless "),X=e("strong",null,"absolutely necessary",-1),Y=t(", don't "),$={href:"https://rgbds.gbdev.io/docs/v0.4.2/rgbasm.5#BANK",target:"_blank",rel:"noopener noreferrer"},Z=t("force a "),Q=e("code",null,"SECTION",-1),J=t("'s bank"),ee=t(" or address. This puts the burden of managing ROM space on you, instead of offloading the job to RGBLINK, which performs very well in typical cases. Exceptions:"),te=t("Your ROM's entry point "),oe={href:"https://gbdev.io/pandocs/#_0100-0103-entry-point",target:"_blank",rel:"noopener noreferrer"},se=t("must be at $0100"),ne=t(", however the jump does not have to be to $0150 ("),ae={href:"https://github.com/GreenAndEievui/vuibui-engine/blob/206fd814e67da2cebbeca7d011a5537fef22a29c/src/main.asm#L6",target:"_blank",rel:"noopener noreferrer"},ie=t("example"),re=t(")."),le={href:"https://gbdev.io/pandocs/#jump-vectors-in-first-rom-bank",target:"_blank",rel:"noopener noreferrer"},de=e("code",null,"rst",-1),ce=t(" vectors and interrupt handlers"),he=t(" obviously need to be at the corresponding locations."),_e={href:"https://github.com/gbdev/rgbds/issues/244",target:"_blank",rel:"noopener noreferrer"},ue=t("RGBDS presently does not allow forcing different sections to be in the same bank"),be=t(". If you need to do so, the ideal fix is to merge the two sections together (either by moving the code, or using "),pe={href:"https://rgbds.gbdev.io/docs/v0.4.2/rgbasm.5#Section_Fragments",target:"_blank",rel:"noopener noreferrer"},ge=e("code",null,"SECTION FRAGMENT",-1),fe=t("), but if that option is unavailable, the only alternative is to explicitly declare them with the same "),me=e("code",null,"BANK[]",-1),ye=t(" attribute. (In which case it's advisable to add an "),ve=e("code",null,'assert BANK("Section A") == BANK("Section B")',-1),ke=t(" line.)"),we=t("If you need some alignment, prefer "),Ae={href:"https://rgbds.gbdev.io/docs/v0.4.2/rgbasm.5#ALIGN",target:"_blank",rel:"noopener noreferrer"},Me=e("code",null,"ALIGN[]",-1),Re=t(" to forcing the address. A typical example is "),Se={href:"https://gbdev.io/pandocs/#lcd-oam-dma-transfers",target:"_blank",rel:"noopener noreferrer"},Oe=t("OAM DMA"),Be=t("; for that, prefer "),xe=e("code",null,'SECTION "Shadow OAM", WRAM0,ALIGN[8]',-1),Ce=t(" over e.g. "),Ne=e("code",null,'SECTION "Shadow OAM", WRAM0[$C000]',-1),Ie=t("."),Le=t("Allocate space for your variables using "),Ee={href:"https://rgbds.gbdev.io/docs/v0.4.2/rgbasm.5#SYMBOLS",target:"_blank",rel:"noopener noreferrer"},Te=t("labels"),Ge=t(" + "),qe={href:"https://rgbds.gbdev.io/docs/v0.4.2/rgbasm.5#Declaring_variables_in_a_RAM_section",target:"_blank",rel:"noopener noreferrer"},De=e("code",null,"ds",-1),Pe=t(" & co"),je=t(" instead of "),ze={href:"https://rgbds.gbdev.io/docs/v0.4.2/rgbasm.5#EQU",target:"_blank",rel:"noopener noreferrer"},Fe=e("code",null,"equ",-1),He=t(". This has several benefits:"),Ve=e("li",null,"Removing, adding, or changing the size of a variable that isn't the last one doesn't require updating every variable after it.",-1),Ke=e("li",null,[t("The size of each variable is obvious ("),e("code",null,"ds 4"),t(") instead of having to be calculated from the addresses.")],-1),Ue=e("li",null,[e("code",null,"equ"),t(" allocation is equivalent to hardcoding section addresses (see above), whereas labels are placed automatically by RGBLINK.")],-1),We=t("Labels support "),Xe={href:"https://rgbds.gbdev.io/docs/v0.4.2/rgbasm.5#Other_functions",target:"_blank",rel:"noopener noreferrer"},Ye=e("code",null,"BANK()",-1),$e=t(" and many cool other features!"),Ze=t("Labels are output in "),Qe={href:"https://rgbds.gbdev.io/docs/v0.4.2/rgblink.1#m",target:"_blank",rel:"noopener noreferrer"},Je=e("code",null,"map",-1),et=t(" and "),tt=e("code",null,"sym",-1),ot=t(" files."),st=e("li",null,[e("p",null,"If a file gets too big, you should split it. Files too large are harder to read and navigate. However, the splitting should stay coherent and consistent; having to jump around files constantly is equally as hard to read and navigate.")],-1),nt={href:"https://gbdev.io/pandocs/#no-mbc",target:"_blank",rel:"noopener noreferrer"},at=t("Unless you're making a 32k ROM"),it=t(", put things in "),rt={href:"https://rgbds.gbdev.io/docs/v0.4.2/rgbasm.5#ROMX",target:"_blank",rel:"noopener noreferrer"},lt=e("code",null,"ROMX",-1),dt=t(" by default. "),ct=e("code",null,"ROM0",-1),ht=t(" space is precious, and can deplete quickly; and when you run out, it's difficult to move things to ROMX."),_t=t("However, if you have code in ROM bank A refer to code or data in ROM bank B, then either should probably be moved to ROM0, or both be placed in the same bank (options for that are mentioned further above). "),ut={href:"https://github.com/pret/pokecrystal/blob/35219230960f0dc85c0cb6a5723877b247609e46/macros/rst.asm#L1-L5",target:"_blank",rel:"noopener noreferrer"},bt=e("code",null,"farcall",-1),pt=t(" is a good way to make your code really "),gt={href:"https://en.wikipedia.org/wiki/Spaghetti_code",target:"_blank",rel:"noopener noreferrer"},ft=t("spaghetti"),mt=t("."),yt=t("Don't clear RAM at init! Good debugging emulators will warn you when you're reading uninitialized RAM ("),vt={href:"https://bgb.bircd.org",target:"_blank",rel:"noopener noreferrer"},kt=t("BGB"),wt=t(" has one in the option's Exceptions tab, for example), which will let you know that you forgot to initialize a variable. Clearing RAM does not fix most of these bugs, but silences the helpful warnings."),At=e("p",null,"Also, a lot of the time, variables need to get initialized to values other than 0, so clearing RAM is actually counter-productive in these cases.",-1),Mt=e("h2",{id:"recommendations",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#recommendations","aria-hidden":"true"},"#"),t(" Recommendations")],-1),Rt=e("p",null,`The difference between these and the "best practices" above is that these are more subjective, but they're still worth talking about here.`,-1),St=t('Historically, RGBDS has required label definitions to begin at "column 1" (i.e. no whitespace before them on their line). However, later versions (with full support added in 0.5.0) allow '),Ot={href:"https://github.com/pinobatch/libbet/blob/cabe48bc4042338b9975cb32c2dbd0ee6640f31e/src/main.z80#L206-L231",target:"_blank",rel:"noopener noreferrer"},Bt=t("indenting labels"),xt=t(", for example to make loops stand out like in higher-level languages. However, "),Ct={href:"https://github.com/BlitterObjectBob/DeadCScroll/blob/9834372eb0d56e8b9a8cdcaae4b8aecb6d402266/DeadCScroll.asm#L410-L422",target:"_blank",rel:"noopener noreferrer"},Nt=t("a lot of people don't do this"),It=t(", so it's up to you."),Lt=n("<li><p>Please use the <code>.asm</code> (or <code>.s</code>) file extensions, not <code>.z80</code>. The GB CPU isn&#39;t a Z80, so syntax highlighters get it <em>mostly</em> right, but not quite. And it helps spreading the false idea that the GB CPU is a Z80. \u{1F622}</p></li><li><p>Compressing data is useful for several reasons; however, it&#39;s not necessary in a lot of cases nowadays, so you may want to only look at it after more high-priority aspects.</p></li><li><p>Avoid abusing macros. Macros tend to make code opaque and hard to read for people trying to help you, in addition to having side effects and sometimes leading to very inefficient code.</p></li><li><p>Never let the hardware draw a corrupted frame even if it&#39;s just one frame. If it&#39;s noticeable by squinting a bit, it must go.</p></li>",4),Et={href:"https://www.gnu.org/software/make/manual/html_node/",target:"_blank",rel:"noopener noreferrer"},Tt=t("Makefiles are bae"),Gt=t("; they speed up build time by not re-processing what hasn't changed, and they can automate a lot of tedium. Writing a good Makefile can be quite daunting, but "),qt={href:"https://github.com/ISSOtm/gb-boilerplate",target:"_blank",rel:"noopener noreferrer"},Dt=t("gb-boilerplate"),Pt=t(" and "),jt={href:"https://github.com/ISSOtm/gb-starter-kit",target:"_blank",rel:"noopener noreferrer"},zt=t("gb-starter-kit"),Ft=t(" can help you get started faster.");function Ht(Vt,Kt){const o=a("ExternalLinkIcon");return i(),r(l,null,[h,e("p",null,[_,e("a",u,[b,s(o)])]),p,g,e("p",null,[f,e("a",m,[y,s(o)]),v]),k,w,e("p",null,[A,e("a",M,[R,s(o)]),S,e("a",O,[B,s(o)]),x]),C,e("p",null,[e("a",N,[I,s(o)]),L]),E,T,e("ul",null,[G,e("li",null,[q,e("p",null,[D,e("a",P,[j,s(o)]),z,F,H])])]),V,e("ul",null,[e("li",null,[K,e("ul",null,[U,e("li",null,[e("p",null,[W,X,Y,e("a",$,[Z,Q,J,s(o)]),ee]),e("ul",null,[e("li",null,[te,e("a",oe,[se,s(o)]),ne,e("a",ae,[ie,s(o)]),re]),e("li",null,[e("a",le,[de,ce,s(o)]),he]),e("li",null,[e("a",_e,[ue,s(o)]),be,e("a",pe,[ge,s(o)]),fe,me,ye,ve,ke])]),e("p",null,[we,e("a",Ae,[Me,s(o)]),Re,e("a",Se,[Oe,s(o)]),Be,xe,Ce,Ne,Ie])])])]),e("li",null,[e("p",null,[Le,e("a",Ee,[Te,s(o)]),Ge,e("a",qe,[De,Pe,s(o)]),je,e("a",ze,[Fe,s(o)]),He]),e("ul",null,[Ve,Ke,Ue,e("li",null,[We,e("a",Xe,[Ye,s(o)]),$e]),e("li",null,[Ze,e("a",Qe,[Je,et,tt,s(o)]),ot])])]),st,e("li",null,[e("p",null,[e("a",nt,[at,s(o)]),it,e("a",rt,[lt,s(o)]),dt,ct,ht]),e("p",null,[_t,e("a",ut,[bt,s(o)]),pt,e("a",gt,[ft,s(o)]),mt])]),e("li",null,[e("p",null,[yt,e("a",vt,[kt,s(o)]),wt]),At])]),Mt,Rt,e("ul",null,[e("li",null,[e("p",null,[St,e("a",Ot,[Bt,s(o)]),xt,e("a",Ct,[Nt,s(o)]),It])]),Lt,e("li",null,[e("p",null,[e("a",Et,[Tt,s(o)]),Gt,e("a",qt,[Dt,s(o)]),Pt,e("a",jt,[zt,s(o)]),Ft])])])],64)}var Xt=d(c,[["render",Ht]]);export{Xt as default};
