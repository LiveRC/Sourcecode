/*
 ┌──────────────────────────────────────────────────────────────────────────────┐
 │                                                                              │
 │                                                                              │
 │     LLLL         III                          RRRRRRRRRR        CCCCC        │
 │     LLLL         III                          RRRRRRRRRRRR    CCCCCCCCC      │
 │     LLLL                                      RRR      RRR   CCC     CCC     │
 │     LLLL         III  VV     VV  EEEEEEEEE    RRR      RRR  CCC              │
 │     LLLL         III   VV   VV   EEE          RRRRRRRRRRR   CCC              │
 │     LLLL         III   VV   VV   EEEEEE       RRRRRRRRRR    CCC              │
 │     LLLL         III    VV VV    EEEEEE       RRR     RRR    CCC     CCC     │
 │     LLLLLLLLLLL  III    VVVVV    EEE          RRR      RRR    CCCCCCCCC      │
 │     LLLLLLLLLLL  III     VVV     EEEEEEEEE    RRR       RRR     CCCCC        │
 │                                                                              │ 
 │                                                                              │
 └──────────────────────────────────────────────────────────────────────────────┘

{{Boîte déroulante|largeur=30%|alignB=right|titre=Sommaire|contenu={{Sommaire à droite}}}}

== Legal announcements ==

=== License ===

<div class="mw-code">
Copyright © 2013, copyright holders : see below

For any purpose, you can choose one of the following licenses :

{{Boîte déroulante/début|titre='''[http://opensource.org/licenses/mit-license.php MIT/X11]'''}}
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The Software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the Software.

Except as contained in this notice, the name of the copyright holders shall not be used in advertising or otherwise to promote the sale, use or other dealings in this Software without prior written authorization from the copyright holders. 

{{Boîte déroulante/fin}}{{Boîte déroulante/début|titre='''[http://creativecommons.org/licenses/by-sa/3.0/ CC-BY-SA-3.0 Unported]'''}}
You are free:
* to Share — to copy, distribute and transmit the work
* to Remix — to adapt the work
* to make commercial use of the work

Under the following conditions:
* Attribution — You must attribute the work in the manner specified by the author or licensor (but not in any way that suggests that they endorse you or your use of the work).
* Share Alike — If you alter, transform, or build upon this work, you may distribute the resulting work only under the same or similar license to this one.

With the understanding that:
* Waiver — Any of the above conditions can be waived if you get permission from the copyright holder.
* Public Domain — Where the work or any of its elements is in the public domain under applicable law, that status is in no way affected by the license.
* Other Rights — In no way are any of the following rights affected by the license:
** Your fair dealing or fair use rights, or other applicable copyright exceptions and limitations;
** The author's moral rights;
** Rights other persons may have either in the work itself or in how the work is used, such as publicity or privacy rights.
* Notice — For any reuse or distribution, you must make clear to others the license terms of this work. The best way to do this is with a link to this web page.

{{Boîte déroulante/fin}}
</div>

=== Authors ===

<div class="mw-code">
* Auteur : [[:fr:User:EDUCA33E]]
* Développement et maintenance :
** [[:fr:User:TiChou]],
** [[:pl:User:Leafnode]],
** [[:it:User:Jalo]],
** [[:fr:User:Nakor]],
** [[:fr:User:Arkanosis]],
** [[:pl:User:Nux]],
** [[:fr:User:Argos42]],
** [[:fr:User:Orlodrim]],
** [[:fr:User:Dr Brains]]
</div>

== Documentation ==

<div class="mw-code">
* [//fr.wikipedia.org/wiki/Wikipédia:LiveRC/Documentation Wikipédia:LiveRC/Documentation]

{{Catégorisation JS|LiveRC}}
{{clr}}
</div>

== Code source ==

=== Variables globales ===

<source lang="javascript"> */

var LiveRC_Version = "1.0.0";
var LiveRC_Version_Dev = "1.0.1-beta";

/* </source>

==== Paramètres de LiveRC ====

<source lang=javascript> */

  var Custom_lrcParams = new Array();

  var lrcParams = {
    "Language"            : "en",                                                     // Langue de l’interface (par défaut)
    "PageTitle"           : "Wikipédia:LiveRC",                                       // Page principale de LiveRC
    "SandboxPage"         : "Wikipédia:Bac à sable",                                  // Page bac à sable
    "WikidataURL"         : "https://www.wikidata.org/wiki/$1",                       // URL vers Wikidata
    "CommonsURL"          : "//upload.wikimedia.org/wikipedia/commons/",              // Adresse des images Commons
    "SearchURL"           : "https://duckduckgo.com/?q=$1",                           // Moteur de recherche externe
    "TchatURL"            : "https://kiwiirc.com/client/irc.freenode.net/?nick=$2$1", // Adresse du client IRC
    "TchatChannel"        : "#wikipedia-fr-liverc",                                   // Canal de tchat
    "MiniPreviewHeight"   : "250px", // Hauteur maxi par défaut du minidiff;
    "PreviewWindowHeight" : '250px', // Hauteur par défaut de la fenêtre de prévisualisation;
    "HistoryWindowHeight" : '250px', // Hauteur par défaut de l’historique des prévisualisations;
    "SearchWindowHeight"  : '250px', // Hauteur par défaut de la fenêtre de recherche Google;
    "TchatWindowHeight"   : '350px', // Hauteur par défaut de la fenêtre de tchat;
    "FollowWindowHeight"  : '100px', // Hauteur des listes de suivi;
    "TZ"                  : '00:00', // Fuseau horaire (+02:00, 02:00, -0200, -05:45, ...)
    "InterwikiList"       : '',      // Langues des interwikis montrés (exemple : 'de|en|es|fr|it')
    "RCLimit"             : 30,      // Nombre de ligne maximum de la table de RC;
    "Refresh"             : 10,      // Délai de rafraichissement des RC
    "ArticleLengthLimit"  : 0,       // Limite du nombre de caractères affichés de l’article dans les RC
    "UserLengthLimit"     : 0,       // Limite du nombre de caractères affichés de l’utilisateur dans les RC
    "MinYellowWatchers"   : 5,       // Limite basse du nombre de suiveurs de la page (rouge/jaune)
    "MinGreenWatchers"    : 10,      // Limite basse du nombre de suiveurs de la page (jaune/vert)
    "BoldComments"        : false,   // Commentaires de modification en gras
    "ShowUserInfos"       : false,   // Afficher les informations sur l’utilisateur
    "ShowPreviewOnTop"    : false,   // Afficher la prévisualisation au-dessus des RC
    "LoadSysopBotList"    : true,    // Charger la liste des bots et sysops
    "LoadWatchlist"       : true,    // Charger la liste des articles et utilisateurs suivis (coûteux au démarrage)
    "LoadIPCat"           : true,    // Charger les catégories d'utilisateurs (coûteux au démarrage)
    "LoadLastBlocks"      : true,    // Charger les derniers blocages (coûteux au démarrage)
    "GetPageInfos"        : true,    // Charger les catégories et modèles des articles (coûteux)
    "UseMiniDiff"         : false,   // Afficher le diff-réduit (très coûteux)
    "ShowNotifications"   : true,    // Afficher les notifications
    "ShowInterwikiList"   : true,    // Montrer les liens inter-langues dans les RC
    "KeepAllLines"        : false,   // Conserver toutes les lignes RC
    "InvertUpdate"        : false,   // Inverser le sens d’apparition des RC
    "AutoCloseDiff"       : false,   // Supprimer une ligne après visualisation du diff
    "PreloadLines"        : true,    // Préchargement des diff en utilisant le bouton [Suivant]
    "SubstWarnings"       : true,    // Substitution des modèles d'avertissement
    "BypassWatchdefault"  : true     // Ne pas ajouter automatiquement les pages modifiées à la liste de suivi
  }

/* </source>

==== Options de démarrage ====

<source lang=javascript> */

  var Custom_lrcOptionMenuValues = new Array();

  var lrcOptionMenuValues = {
    "LiveRCDisplayed"          : true,    // Afficher l’interface de LiveRC
    "LiveRCRCTableDisplayed"   : true,    // Afficher le tableau des RC
    "LiveRCTchatDisplayed"     : false,   // Afficher la fenêtre de tchat
    "LiveRCPreviewDisplayed"   : false,   // Afficher la fenêtre de prévisualisation
    "LiveRCFollowDisplayed"    : true,    // Afficher les listes de suivi  
    "DisplayliveAbuseLog"      : true,    // Afficher la liste de suivi AbuseLog
    "DisplayliveSpam"          : false,   // Afficher la liste de suivi Spam
    "DisplayliveRevoc"         : true,    // Afficher la liste de suivi Revoc
    "DisplayliveNewUsers"      : true,    // Afficher la liste de suivi NewUsers
    "DisplayliveContact"       : false,   // Afficher la liste de suivi Contacts
    "DisplayliveHidden"        : false,   // Afficher la liste de suivi Masqués
    "DisplayliveSuivi"         : true,    // Afficher la liste de suivi Suivi
    "DisplayliveNewPages"      : true,    // Afficher la liste de suivi Nouvelles pages
    "DisplaylivePending"       : true,    // Afficher la liste de suivi Pending Changes
    "DisplayliveFeedback"      : false,   // Afficher la liste de suivi Feedback
    "DisplayDebug"             : false,   // Afficher le panneau de débogage
    "Stop"                     : false,   // Case "Pause" 
    "Diff"                     : false,   // Case "Diff réduit" 
    "RC"                       : true,    // Case "RC" 
    "RC_edit"                  : true,    // Case "RC (modifications normales)" 
    "RC_minor"                 : true,    // Case "RC (modifications mineurs)" 
    "RC_new"                   : true,    // Case "RC (nouvelles pages)" 
    "RC_external"              : false,   // Case "RC (edits wikidata)" 
    "Log"                      : true,    // Case "Journaux" 
    "WL_watched"               : true,    // Case "Pages suivies"
    "WL_unwatched"             : true,    // Case "Pages non suivies"
    "NS"                       : false,   // Case "Espaces de noms"
    "User"                     : true,    // Case "Utilisateurs"
    "User_IP"                  : true,    // Case "IP"
    "User_REGISTRED"           : true,    // Case "Enregistrés"
    "User_NEWBIE"              : true,    // Case "Débutants"
    "User_AUTOPATROLLED"       : false,   // Case "Confirmés"
    "User_BOT"                 : false,   // Case "Bots"
    "User_ShowAllSelf"         : true,    // Case "Toujours afficher mes propres modifications"
    "User_ShowAllContact"      : true,    // Case "Toujours afficher mes contacts"
    "User_ShowAllWatchlist"    : true,    // Case "Toujours afficher ma liste de suivi"
    "User_ShowAllRevert"       : true,    // Case "Toujours afficher les révocations"
    "User_ShowAllBlanking"     : true,    // Case "Toujours afficher les blanchiments"
    "User_ShowAllReplaced"     : true,    // Case "Toujours afficher les remplacements"
    "User_HideOwnSubpage"      : false    // Case "Masquer les modifications d’un utilisateur sur ses propres sous-pages"
  }

/* </source>

==== Textes de l'interface ====

===== Textes non traduits =====

<source lang=javascript> */

  var Custom_UnTranslatedTexts = new Array();

var UnTranslatedTexts = {
    ON_ARTICLE:             "sur",
    UPDATEMESSAGES:         "Mise à jour de la configuration Mediawiki locale",
    MWSiteGlobalLegend:     "Configuration locale de Mediawiki",
    MWGeneralConfigLegend:  "Configuration générale de Mediawiki",
    MWLanguagesLegend:      "Langues supportées",
    MWMessagesLegend:       "Messages système",
    MWExtensionsLegend:     "Extensions Mediawiki",
    MWNamespacesLegend:     "Espaces de noms",
    MWMagicwordsLegend:     "Mots magiques",
    USERMSG_RESUME:         "Message",
    EMPTY_RESUME:           "Blanchiment",
    USERTHANK_RESUME:       "Remerciement",
    BLOCKTEMPLATE:          "Blocage",
    RESUMESTART:            "[[WP:LRC|LiveRC]] : ",
    Comment:                "Personnalisation pour LiveRC"
};
/* </source>

===== Textes traduits =====

<source lang=javascript> */

   // Textes
  var lrcTexts = new Array();
  var lrcTranslatedTexts = new Array();
  var Custom_lrcTranslatedTexts = new Array();

   // Descriptions de variables
  var lrcParamDesc = new Array();
  var lrcTranslatedParamDesc = new Array();
  var Custom_lrcTranslatedParamDesc = new Array();

/* </source>

==== Icônes ====

<source lang=javascript> */

  var Custom_lrcIcons = new Array();

  var lrcIcons = new Array();

// Page & Edit type

  lrcIcons["AdQIcon"] = {"type":1,
                       "src":"thumb/c/c7/Fairytale_bookmark_gold.png/10px-Fairytale_bookmark_gold.png",
                       "width":10,
                       "height":10
  }
  lrcIcons["APDQIcon"] = {"type":1,
                       "src":"thumb/9/9a/Fairytale_bookmark_light.png/10px-Fairytale_bookmark_light.png",
                       "width":10,
                       "height":10
  }
  lrcIcons["BAIcon"] = {"type":1,
                       "src":"thumb/8/8a/Fairytale_bookmark_silver_light.png/10px-Fairytale_bookmark_silver_light.png",
                       "width":10,
                       "height":10
  }
  lrcIcons["HomonIcon"] = {"type":0,
                       "src":"thumb/7/72/Disambig.svg/16px-Disambig.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["StubIcon"] = {"type":0,
                       "src":"thumb/a/a6/Construction_cone.png/16px-Construction_cone.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["PaSIcon"] = {"type":0,
                       "src":"thumb/9/9e/Icono_consulta_borrar.png/16px-Icono_consulta_borrar.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["CopyrightIcon"] = {"type":0,
                       "src":"thumb/b/b0/Copyright.svg/16px-Copyright.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["RecentIcon"] = {"type":0,
                       "src":"thumb/1/19/Ambox_currentevent.svg/16px-Ambox_currentevent.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["R3RIcon"] = {"type":0,
                       "src":"thumb/b/bc/R3R.svg/16px-R3R.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["WIPIcon"] = {"type":0,
                       "src":"thumb/6/6a/Under_construction_icon-orange.svg/16px-Under_construction_icon-orange.svg.png",
                       "width":16,
                       "height":13
  }
  lrcIcons["LockIcon"] = {"type":0,
                       "src":"thumb/e/e0/Padlock-gold.svg/16px-Padlock-gold.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["FullLockIcon"] = {"type":0,
                       "src":"thumb/4/48/Padlock-red.svg/16px-Padlock-red.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["Watchers0Icon"] = {"type":0,
                       "src":"thumb/b/b5/Webroot_Spy_Sweeper_%28red%29.png/12px-Webroot_Spy_Sweeper_%28red%29.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["Watchers1Icon"] = {"type":0,
                       "src":"thumb/4/48/Webroot_Spy_Sweeper_%28orange%29.png/12px-Webroot_Spy_Sweeper_%28orange%29.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["Watchers2Icon"] = {"type":0,
                       "src":"thumb/5/5b/Webroot_Spy_Sweeper.png/12px-Webroot_Spy_Sweeper.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["Watchers3Icon"] = {"type":0,
                       "src":"thumb/0/01/Webroot_Spy_Sweeper_%28green%29.png/12px-Webroot_Spy_Sweeper_%28green%29.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["RedirectIcon"] = {"type":0,
                       "src":"thumb/7/71/Symbol_redirect_arrow_with_gradient.svg/16px-Symbol_redirect_arrow_with_gradient.svg.png",
                       "width":16,
                       "height":10
  }
  lrcIcons["ExternalIcon"] = {"type":0,
                       "src":"thumb/e/e4/Wikidata-logo_S.svg/16px-Wikidata-logo_S.svg.png",
                       "width":16,
                       "height":9
  }

// Log

  lrcIcons["FilterIcon"] = {"type":0,
                       "src":"thumb/5/5e/Nuvola_apps_agent.svg/16px-Nuvola_apps_agent.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["UploadIcon"] = {"type":0,
                       "src":"thumb/4/47/Gartoon-Gnome-dev-floppy.png/16px-Gartoon-Gnome-dev-floppy.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["NewUserIcon"] = {"type":0,
                       "src":"thumb/c/c1/Crystal_personal.png/16px-Crystal_personal.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["BlockIcon"] = {"type":0,
                       "src":"thumb/8/8b/B1.svg/16px-B1.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["DeleteIcon"] = {"type":0,
                       "src":"thumb/e/ef/Editcut.png/16px-Editcut.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["MoveIcon"] = {"type":0,
                       "src":"thumb/0/0e/Forward.png/16px-Forward.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["ProtectIcon"] = {"type":0,
                       "src":"thumb/6/64/Crystal_Clear_action_lock3.png/16px-Crystal_Clear_action_lock3.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["articlefeedbackv5Icon"] = {"type":0,
                       "src":"thumb/b/b6/Gnome_User_Speech.svg/16px-Gnome_User_Speech.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["ThanksIcon"] = {"type":0,
                       "src":"thumb/7/7d/Heart_icon.svg/16px-Heart_icon.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["RenameuserIcon"] = {"type":0,
                       "src":"thumb/b/b9/Blue_&_gray_people.png/15px-Blue_&_gray_people.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["RightsIcon"] = {"type":0,
                       "src":"thumb/0/07/Fairytale_kdmconfig.png/18px-Fairytale_kdmconfig.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["MassMessageIcon"] = {"type":0,
                       "src":"thumb/b/b3/Nuvola_apps_email-several.png/16px-Nuvola_apps_email-several.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["CheckUserIcon"] = {"type":0,
                       "src":"thumb/c/cb/Nuvola_search_person.png/16px-Nuvola_search_person.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["OversightIcon"] = {"type":0,
                       "src":"thumb/2/2c/Icon_delete.svg/16px-Icon_delete.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["ReviewIcon"] = {"type":0,
                       "src":"thumb/6/66/Copyvio-NormalMagnifier.png/16px-Copyvio-NormalMagnifier.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["StableIcon"] = {"type":0,
                       "src":"thumb/a/a7/Copyvio-WarningMagnifier.png/16px-Copyvio-WarningMagnifier.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["PagetriageDeletionIcon"] = {"type":0,
                       "src":"thumb/c/ce/Curation_Bar_Icon_Trash_Blue.png/16px-Curation_Bar_Icon_Trash_Blue.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["PagetriageCurationIcon"] = {"type":0,
                       "src":"thumb/b/b5/Curation_Bar_Icon_Love_Blue.png/16px-Curation_Bar_Icon_Love_Blue.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["EducationProgramIcon"] = {"type":0,
                       "src":"thumb/4/47/WIKI_AND_ACADEMIA.PNG/16px-WIKI_AND_ACADEMIA.PNG",
                       "width":16,
                       "height":16
  }
  lrcIcons["LiquidThreadsIcon"] = {"type":0,
                       "src":"thumb/e/e7/FAQ_icon.svg/16px-FAQ_icon.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["TranslateIcon"] = {"type":0,
                       "src":"thumb/4/40/Icono_de_traducción.svg/16px-Icono_de_traducción.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["OAuthIcon"] = {"type":0,
                       "src":"thumb/e/e9/Crystal_Clear_Password.png/16px-Crystal_Clear_Password.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["MoodBarIcon"] = {"type":0,
                       "src":"thumb/7/75/Oxygen480-emotes-face-plain.svg/16px-Oxygen480-emotes-face-plain.svg.png",
                       "width":16,
                       "height":16
  }


// User type

  lrcIcons["SharedIPIcon"] = {"type":0,
                       "src":"thumb/b/b7/WLM_logo.svg/16px-WLM_logo.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["ScolarIPIcon"] = {"type":0,
                       "src":"thumb/9/98/Crystal_kdmconfig.png/16px-Crystal_kdmconfig.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["NewbieIcon"] = {"type":0,
                       "src":"thumb/c/c1/Crystal_personal.png/16px-Crystal_personal.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["SysopIcon"] = {"type":0,
                       "src":"thumb/6/61/Gnome-stock_person_admin2.svg/16px-Gnome-stock_person_admin2.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["BotIcon"] = {"type":0,
                       "src":"thumb/c/c2/Gnome-stock_person_bot.svg/16px-Gnome-stock_person_bot.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["BlockedIcon"] = {"type":0,
                       "src":"thumb/b/b8/Modern_clock_chris_kemps_01_with_Octagon-warning.svg/"
                       + "16px-Modern_clock_chris_kemps_01_with_Octagon-warning.svg.png",
                        "width":16,
                        "height":16
  }
  lrcIcons["CopyrightUserIcon"] = {"type":0,
                       "src":"thumb/b/b0/Copyright.svg/16px-Copyright.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["SpamblacklistUserIcon"] = {"type":0,
                       "src":"thumb/b/b5/Nospam_at.svg/16px-Nospam_at.svg.png",
                       "width":16,
                       "height":16
  }
  lrcIcons["PediaProjectIcon"] = {"type":0,
                       "src":"thumb/7/79/A13a_French_road_sign.svg/15px-A13a_French_road_sign.svg.png",
                       "width":16,
                       "height":16
  }

// Edit type (comments)

  lrcIcons["MinorEditIcon"] = {"type":0,
                       "src":"thumb/d/d0/M_in_a_Circle.png/12px-M_in_a_Circle.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["RevertIcon"] = {"type":0,
                       "src":"thumb/2/2c/Nuvola_actions_undo.png/12px-Nuvola_actions_undo.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["ReplacedIcon"] = {"type":0,
                       "src":"thumb/9/95/Categorie_III.svg/12px-Categorie_III.svg.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["RedirectedIcon"] = {"type":0,
                       "src":"thumb/7/7f/Redirect_arrow_without_text_(cropped).svg/12px-Redirect_arrow_without_text_(cropped).svg.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["BlankingIcon"] = {"type":0,
                       "src":"thumb/4/41/Kde_crystalsvg_eraser.png/12px-Kde_crystalsvg_eraser.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["WPCIcon"] = {"type":0,
                       "src":"thumb/2/2d/Nuvola_web_broom.svg/12px-Nuvola_web_broom.svg.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["AWBIcon"] = {"type":0,
                       "src":"thumb/b/b4/AWB_logo_draft.png/12px-AWB_logo_draft.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["BandeauxPortailsIcon"] = {"type":0,
                       "src":"thumb/e/e1/Portal_icon.svg/12px-Portal_icon.svg.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["BandeauxEbauchesIcon"] = {"type":0,
                       "src":"thumb/3/37/Icon-wrench.png/12px-Icon-wrench.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["HotCatIcon"] = {"type":0,
                       "src":"thumb/f/fd/Magnify-clip_%28sans_arrow%29.svg/12px-Magnify-clip_(sans_arrow).svg.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["PopupsIcon"] = {"type":0,
                       "src":"thumb/1/11/Toolbaricon_hiddencomment.png/12px-Toolbaricon_hiddencomment.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["CatRenameIcon"] = {"type":0,
                       "src":"thumb/5/56/Crystal_Project_2rightarrow.png/12px-Crystal_Project_2rightarrow.png",
                       "width":12,
                       "height":12
  }
  lrcIcons["LRCIcon"] = {"type":0,
                       "src":"thumb/b/b2/LiveRC.svg/12px-LiveRC.svg.png",
                       "width":12,
                       "height":12
  }

  // Interface icons

  lrcIcons["TchatButtonIcon"] = {"type":0,
                       "src":"thumb/7/7a/Mercury_bw.png/25px-Mercury_bw.png",
                       "width":32,
                       "height":32
  }
  lrcIcons["DebugButtonIcon"] = {"type":0,
                       "src":"thumb/6/69/Logviewer_bw.png/32px-Logviewer_bw.png",
                       "width":32,
                       "height":32
  }
  lrcIcons["ConfigButtonIcon"] = {"type":0,
                       "src":"thumb/2/27/Folder-system.png/32px-Folder-system.png",
                       "width":32,
                       "height":32
  }
  lrcIcons["LiveRCButtonIcon"] = {"type":0,
                       "src":"thumb/6/66/Exaile_bw.png/32px-Exaile_bw.png",
                       "width":32,
                       "height":32
  }
  lrcIcons["RCListButtonIcon"] = {"type":0,
                       "src":"thumb/7/78/Ethereal.png/25px-Ethereal.png",
                       "width":25,
                       "height":25
  }
  lrcIcons["PreviewButtonIcon"] = {"type":0,
                       "src":"thumb/0/05/Preferences-desktop-screensaver.png/25px-Preferences-desktop-screensaver.png",
                       "width":25,
                       "height":25
  }
  lrcIcons["FollowButtonIcon"] = {"type":0,
                       "src":"thumb/3/35/Utilities-system-monitor.png/25px-Utilities-system-monitor.png",
                       "width":25,
                       "height":25
  }
  lrcIcons["HistoryButtonIcon"] = {"type":0,
                       "src":"thumb/c/c7/File-manager.png/25px-File-manager.png",
                       "width":25,
                       "height":25
  }

  lrcIcons["LogoIcon"] = {"type":0,
                       "src":"thumb/2/2d/LiveRC_Ts-for_anim.svg/52px-LiveRC_Ts-for_anim.svg.png",
                       "width":52,
                       "height":32
  }
  lrcIcons["AnimatedLogoIcon"] = {"type":0,
                       "src":"9/97/LiveRC_Ts-anim1.gif",
                       "width":52,
                       "height":32
  }
  lrcIcons["FavIcon"] = {"type":0,
                       "src":"thumb/b/b2/LiveRC.svg/16px-LiveRC.svg.png",
                       "width":16,
                       "height":16
  }

  lrcIcons["SuggestExistIcon"] = {type:0,
                       src:"thumb/b/be/P_yes.svg/20px-P_yes.svg.png",
                       width:20,
                       height:20
  }
  lrcIcons["SuggestNoExistIcon"] = {type:0,
                       src:"thumb/4/42/P_no.svg/20px-P_no.svg.png",
                       width:20,
                       height:20
  }

/* </source>

==== Paramètres des fonctions automatiques ====

===== Avertissement =====

<source lang=javascript> */

  var Custom_lstAverto = new Array();

  var lstAverto = [
    { template: "Test 0"                , string: "Test 0"            , hasPage: true,  addName: true  },
    { template: "Test 1"                , string: "Test 1"            , hasPage: true,  addName: true  },
    { template: "Test 2"                , string: "Test 2"            , hasPage: false, addName: false },
    { template: "Test 3"                , string: "Test 3"            , hasPage: false, addName: false },
    { template: "Seul avertissement"    , string: "Test 4"            , hasPage: false, addName: false },
    { template: "Retrait injustifié"    , string: "Retrait injustifié", hasPage: true,  addName: true  },
    { template: "Motivation modif"      , string: "Résumé"            , hasPage: true,  addName: true  },
    { template: "LE HC"                 , string: "LE hors-critères"  , hasPage: true,  addName: true  },
    { template: "LE dans texte"         , string: "LE dans texte"     , hasPage: true,  addName: true  },
    { template: "Spammeur"              , string: "Spam"              , hasPage: true,  addName: true  },
    { template: "Ortho"                 , string: "Ortho"             , hasPage: true,  addName: true  },
    { template: "Ajout POV"             , string: "Non-neutre"        , hasPage: true,  addName: true  },
    { template: "Non-encyclo"           , string: "Non-encyclo"       , hasPage: true,  addName: true  },
    { template: "Faut sourcer"          , string: "Faut sourcer"      , hasPage: true,  addName: true  },
    { template: "Maladresse"            , string: "Modif corrigée"    , hasPage: true,  addName: true  },
    { template: "Suppr Bandeaux"        , string: "Bandeaux"          , hasPage: true,  addName: true  },
    { template: "Bienvenue Copyvio 1"   , string: "Copyright"         , hasPage: true,  addName: true  },
    { template: "Compte publicitaire"   , string: "PU publicitaire"   , hasPage: false, addName: true  },
    { template: "BSI CAA"               , string: "BSI CAA"           , hasPage: true,  addName: true  },
    { template: "BSI BàS"               , string: "BSI BàS"           , hasPage: true,  addName: true  },
    { template: "BSI promo"             , string: "BSI promo"         , hasPage: true,  addName: true  },
    { template: "BSI canular"           , string: "BSI canular"       , hasPage: true,  addName: true  },
    { template: "Aide sources"          , string: "Aide sources"      , hasPage: false, addName: true  },
    { template: "Aide images"           , string: "Aide images"       , hasPage: false, addName: true  },
    { template: "Aide wikification"     , string: "Aide wikif"        , hasPage: true,  addName: true  },
    { template: "Aide liens"            , string: "Aide liens"        , hasPage: false, addName: true  },
    { template: "AideMeta/Promo"        , string: "Aide BandoPromo"   , hasPage: true,  addName: true  },
    { template: "AideMeta/RefLié"       , string: "Aide BandoRefLié"  , hasPage: true,  addName: true  },
    { template: "AideMeta/RefSec"       , string: "Aide BandoRefSec"  , hasPage: true,  addName: true  },
    { template: "AideMeta/TI"           , string: "Aide BandoTI"      , hasPage: true,  addName: true  },
    { template: "AideMeta/Delist"       , string: "Aide BandoDelist"  , hasPage: true,  addName: true  },
    { template: "Bienvenue"             , string: "Bienvenue"         , hasPage: false, addName: true  },
    { template: "Bienvenue IP"          , string: "Bienvenue IP"      , hasPage: false, addName: true  },
    { template: "Bienvenue IP méritante", string: "Bienvenue IP +"    , hasPage: false, addName: true  }
  ];

/* </source>

===== Blanchiment =====

<source lang=javascript> */

  var Custom_lstBlank = new Array();

  var lstBlank = [
    {tooltip: "copyvio"      , resume: "[[WP:COPY|copie de site web sans autorisation explicite]]" },
    {tooltip: "CAA"          , resume: "[[WP:CAA|critères d’admissibilité non atteints]]"          },
    {tooltip: "non encyclo"  , resume: "[[WP:P|non encyclopédique en l’état]]"                     },
    {tooltip: "BaS"          , resume: "bac à sable"                                               },
    {tooltip: "vandalisme"   , resume: "vandalisme"                                                }
  ];

/* </source>

===== Révocation =====

<source lang=javascript> */

  var Custom_lrcRevertMessages = new Array();

  var lrcRevertMessages = [
    { resume: "[[Wikipédia:Bac à sable|Bac à sable]]" , text: "Bac à sable" },
    { resume: "[[Wikipédia:Vandalisme|Vandalisme]]"   , text: "Vandalisme"  },
    { resume: "Retrait d’information non sourcée"     , text: "Non-sourcé"  },
    { resume: "Traduction automatique"                , text: "Trad auto"   }
  ];

/* </source>

===== Bandeaux =====

<source lang=javascript> */

  var Custom_lstBando = new Array();

  var lstBando = [
    { template: "Admissibilité à vérifier" , string: "admissibilité"          , withDate: "$month $year" },
    { template: "Copie à vérifier"         , string: "copyvio"                , withDate: ""             },
    { template: "À sourcer"                , string: "à sourcer"              , withDate: "$month $year" },
    { template: "À wikifier"               , string: "à wikifier"             , withDate: "$month $year" },
    { template: "Sources secondaires"      , string: "sources secondaires"    , withDate: "$month $year" },
    { template: "Sources à lier"           , string: "sources à lier"         , withDate: "$month $year" },
    { template: "À délister"               , string: "à délister"             , withDate: "$month $year" },
    { template: "Rédaction"                , string: "rédaction"              , withDate: "$month $year" },
    { template: "Travail inédit"           , string: "TI"                     , withDate: ""             },
    { template: "Règle des 3 révocations"  , string: "R3R"                    , withDate: ""             }
  ];

/* </source>

===== Requête aux administrateurs =====

<source lang=javascript> */

    var Custom_lstReport = new Array();

    var lstReport = [
        {  userright:"delete",
           text:"REPORTING_DELETION",
           page:"Wikipédia:Demande de suppression immédiate",
           template:"Wikipédia:LiveRC/Modèles/Demande de suppression",
           parampage:true,
           paramuser:false,
           resume:"$1",
           reasonsdropdownname:"deletereason-dropdown"
        },
        {  userright:"protect",
           text:"REPORTING_PROTECTION",
           page:"Wikipédia:Demande de protection de page",
           template:"Wikipédia:LiveRC/Modèles/Demande de protection",
           parampage:true,
           paramuser:false,
           resume:"$1",
           reasonsdropdownname:"protect-dropdown"
        },
        {  userright:"block",
           text:"REPORTING_BLOCK",
           page:"Wikipédia:Vandalisme en cours",
           template:"Wikipédia:LiveRC/Modèles/Demande de blocage",
           parampage:false,
           paramuser:true,
           resume:"Demande de blocage : $2",
           reasonsdropdownname:"ipbreason-dropdown"
        },
        {  userright:"anyRight",
           text:"REPORTING_HELP",
           page:"Wikipédia:Forum des nouveaux",
           template:"Wikipédia:LiveRC/Modèles/Nouveau ayant besoin d'aide",
           parampage:false,
           paramuser:true,
           resume:"Demande d'aide pour un nouveau : $2",
           reasonsdropdownname:""
        }
    ];
	
/* </source>

==== Boutons de suppression de lignes ====
	
<source lang=javascript> */

  var Custom_lrcSupprLineParams = new Array();

  var lrcSupprLineParams = [
    {textid:"HIDE_ALL"      , color:"red"              , class:"*"          , separator:"|" },
    {textid:"HIDE_REVIEWED" , color:"rgb(255,235,71)"  , class:"RcChecked"  , separator:""  },
    {textid:"HIDE_REVERTS"  , color:"rgb(255,99,83)"   , class:"RcRevert"   , separator:""  },
    {textid:"HIDE_NEW"      , color:"rgb(178,243,113)" , class:"RcNew"      , separator:""  },
    {textid:"HIDE_BLANKING" , color:"white"            , class:"RcBlanking" , separator:""  },
    {textid:"HIDE_LOG"      , color:"blue"             , class:"RcLog"      , separator:""  }
  ];

/* </source>

==== Variables d'état (pour test sur rc.state) ====

===== Commentaire de modif =====

<source lang=javascript> */

  var Custom_commenttests = new Array();

  var commenttests = [
    { state: "REVERT"     , icon:"RevertIcon",           class:"RcRevert",           regex: "(Live|Patrouille)? *(RC)?( : )?Révocation |([Bb]ot : )?[Aa]nnulation des modifications|([Bb]ot : )?[Rr]évocation de |^(Undid|Revert to( the)?) revision|^(Undoing|Reverted( \d+)?) edit|^r(e)?v(ert(ing|ed)?)?\b|^La dernière modification du texte .* a été rejetée", hide:false},
    { state: "BLANKING"   , icon:"BlankingIcon",         class:"RcBlanking",         regex: "^Résumé automatique : blanchiment|^[Bb]lanchi|(Live|Patrouille) *(RC)?( : )?Blanchiment"  , hide:false},
    { state: "REPLACED"   , icon:"ReplacedIcon",         class:"RcReplaced",         regex: "^Résumé automatique : contenu remplacé par"  , hide:false},
    { state: "REDIRECTED" , icon:"RedirectedIcon",       class:"RcRedirected",       regex: "^Page redirigée vers|^#REDIRECT",   hide:false},
    { state: "WPCLEANER"  , icon:"WPCIcon",              class:"RcWPC",              regex: "(WPCleaner|Correction syntaxique)", hide:false},
    { state: "AWB"        , icon:"AWBIcon",              class:"RcAWB",              regex: "(AWB|AutoWikiBrowser)",             hide:false},
    { state: "B_PORTAIL"  , icon:"BandeauxPortailsIcon", class:"RcBandeauxPortails", regex: "BandeauxPortails",                  hide:false},
    { state: "B_EBAUCHE"  , icon:"BandeauxEbauchesIcon", class:"RcBandeauxEbauches", regex: "BandeauxEbauches",                  hide:false},
    { state: "HOTCAT"     , icon:"HotCatIcon",           class:"RcHotCat",           regex: "(HotCatsMulti|HotCat|Hotcat)",             hide:false},
    { state: "LRC"        , icon:"LRCIcon",              class:"RcLRC",              regex: "(Live|Patrouille) *(RC)?",          hide:false},
    { state: "POPUPS"     , icon:"PopupsIcon",           class:"RcPopups",           regex: "(P|p)opups",                        hide:false},
    { state: "CATRENAME"  , icon:"CatRenameIcon",        class:"RcCatRename",        regex: "Renommage de catégorie",            hide:false}
  ];

/* </source>

===== Catégories de pages =====

<source lang=javascript> */

  var Custom_categoriestests = new Array();

  var categoriestests = [
    { state: "ADQ"       , icon:"AdQIcon"      , class:"RcADQ",       regex: 'Article de qualité( contesté|)$'                },
    { state: "BA"        , icon:"BAIcon"       , class:"RcBA",        regex: 'Bon article$'                                   },
    { state: "APDQ"      , icon:"APDQIcon"     , class:"RcAPDQ",      regex: 'Article potentiellement (bon|de qualité)'       },
    { state: "STUB"      , icon:"StubIcon"     , class:"RcStub",      regex: 'Wikipédia:ébauche'                              },
    { state: "COPYRIGHT" , icon:"CopyrightIcon", class:"RcCopyright", regex: 'Article soupçonné de travail sous copyright'    },
    { state: "PAS"       , icon:"PaSIcon"      , class:"RcPaS",       regex: 'Page proposée à la suppression'                 }
  ];

/* </source>

===== Catégories d'utilisateurs =====

<source lang=javascript> */

  var Custom_watchCategories = new Array();

  var watchCategories = [
    { state: "SCOLARIP"      , icon:"ScolarIPIcon"      , class:"RcScolarIP",      category: "Adresse IP scolaire"                  },
    { state: "SHAREDIP"      , icon:"SharedIPIcon"      , class:"RcSharedIP",      category: "Adresse IP partagée"                  },
    { state: "COPYRIGHTUSER" , icon:"CopyrightUserIcon" , class:"RcCopyrightUser", category: "Utilisateur enfreignant un copyright" },
    { state: "PEDIAPROJECT"  , icon:"PediaProjectIcon"  , class:"RcPediaProject",  category: "Utilisateur projet pédagogique"       }
  ];

/* </source>

===== Modèles =====

<source lang=javascript> */

  var Custom_templatestests = new Array();

  var templatestests = [
    { state: "PORTAIL"    , icon:""             , class:"RcPortail"  , template: "Méta lien vers portail"          },
    { state: "RECENT"     , icon:"RecentIcon"   , class:"RcRecent"   , template: "Méta bandeau d'événement récent" },
    { state: "R3R"        , icon:"R3RIcon"      , class:"RcR3R"      , template: "Règle des 3 révocations"         },
    { state: "PAS"        , icon:"PaSIcon"      , class:"RcPaS"      , template: "Suppression"                     },
    { state: "COPYRIGHT"  , icon:"CopyrightIcon", class:"RcCopyright", template: "Copie de site"                   },
    { state: "COPYRIGHT"  , icon:"CopyrightIcon", class:"RcCopyright", template: "Copie à vérifier"                },
    { state: "COPYRIGHT"  , icon:"CopyrightIcon", class:"RcCopyright", template: "Copyrighté"                      },
    { state: "COPYRIGHT"  , icon:"CopyrightIcon", class:"RcCopyright", template: "Texte copyvio"                   },
    { state: "COPYRIGHT"  , icon:"CopyrightIcon", class:"RcCopyright", template: "Image copyvio"                   },
    { state: "COPYRIGHT"  , icon:"CopyrightIcon", class:"RcCopyright", template: "Synopsis"                        },
    { state: "WIP"        , icon:"WIPIcon"      , class:"RcWIP"      , template: "En cours"                        },
    { state: "WIP"        , icon:"WIPIcon"      , class:"RcWIP"      , template: "En travaux"                      }
  ];

/* </source>

==== Autres variables personnalisables ====

===== Extensions =====

<source lang=javascript> */

  var Custom_lrcExtensions = new Array();

  var lrcExtensions = [
    {
      "name":"ProposeTranslationExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/ProposeTranslationExtension.js",
      "desc":"Ajoute un formulaire pour proposer une traduction de l’interface."
    },
    {
      "name":"VisualeditorTagExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/VisualeditorTagExtension.js",
      "desc":"Permet de filtrer par mode d’édition et modifie le rendu des edits Visual Editor"
    },
    {
      "name":"UserWarningsExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/UserWarningsExtension.js",
      "desc":"Ajoute une icône aux utilisateurs ayant reçu un avertissement. En option, indique si la page de discussion de l’utilisateur existe ou non."
    },
    {
      "name":"MostModifiedPagesExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/MostModifiedPagesExtension.js",
      "desc":"Ajoute une icône aux pages ayant été modifiées récemment par plusieurs utilisateurs ou ayant fait l’objet de plusieurs reverts."
    },
    {
      "name":"LinkOnIconExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/LinkOnIconExtension.js",
      "desc":"Lie les icônes PàS, AdQ, BA et copyvio aux pages de discussion associées."
    },
    {
      "name":"EditCharactersExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/EditCharactersExtension.js",
      "desc":"Améliore la fenêtre de modification avec les fonctions standards du Common.js (toolbar et caractères spéciaux)."
    },
    {
      "name":"RunCommonJS",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/RunCommonJS.js",
      "desc":"Améliore la prévisualisation avec des fonctions du Common.js (boîtes déroulantes, palettes, {{Images}}, etc...)"
    },
    {
      "name":"HotCatsMulti",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/HotCatsMulti.js",
      "desc":"Permet d’ajouter/modifier/retirer une ou plusieurs catégories lors de la prévisualisation d’une page"
    },
    {
      "name":"BandeauPortail",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/BandeauPortail.js",
      "desc":"Permet d’ajouter/modifier/retirer un ou plusieurs bandeau de portail lors de la prévisualisation d’un article"
    },
    {
      "name":"CategoryRC",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/CategoryRCExtension.js",
      "desc":"Permet de ne surveiller que les pages appartenant à une ou plusieur catégories"
    },
    {
      "name":"PreviewAllLinksExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/PreviewAllLinksExtension.js",
      "desc":"Permet de prévisualiser tout lien interne de la fenêtre de prévisualisation"
    },
    {
      "name":"PreviewThisPageExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/PreviewThisPageExtension.js",
      "desc":"Permet de prévisualiser une page au choix"
    },
    {
      "name":"DiffExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/DiffExtension.js",
      "desc":"Permet d’avoir les fonctions automatiques de LiveRC dans les diff \"normaux\""
    },
    {
      "name":"ManageVarsExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=Utilisateur:Dr_Brains/LiveRC/ManageVarsExtension.js",
      "desc":"[Pour développeurs] Permet de vérifier rapidement si une description de variable est manquante ou obsolète"
    }
  ];


/* </source>

===== Styles CSS =====

<source lang=javascript> */

  var lrcCSSstyles = [ 
    {target:"#liveRC_RCList",
     style:"background: url('//upload.wikimedia.org/wikipedia/commons/thumb/d/d0/LiveRC_centered.png/1000px-LiveRC_centered.png') no-repeat scroll center center transparent;",
     desc:"Arrière-plan : Table RC"  
    },
    {target:"#TitleTable",
     style:"background-image: url('//upload.wikimedia.org/wikipedia/commons/b/ba/Double_Gradient_60px_V.png');background-position: center bottom;background-repeat: repeat;",
     desc:"Arrière-plan : Titre"  
    },
    {target:".LiveRC_MenuAnchor",
     style:"background-image: url('//upload.wikimedia.org/wikipedia/commons/c/cc/Double_Gradient_60px_V_50%25.png');background-position: center top;background-repeat: repeat;",
     desc:"Arrière-plan : Barres de titre"  
    }, 
    {target:"#livePreviewFoot, #livePreviewFoot td:hover",
     style:"background-image: url('//upload.wikimedia.org/wikipedia/commons/b/ba/Double_Gradient_60px_V.png');background-position: center top;background-repeat: repeat;",
     desc:"Arrière-plan : Barre de commande RC"  
    }, 
    {target:"#tabRC .th0RC",
     style:"background-image: url('//upload.wikimedia.org/wikipedia/commons/8/8c/Double_Gradient_60px_H.png');background-position: center top;background-repeat: repeat;",
     desc:"Arrière-plan : Lignes RC (première case)"  
    }, 
    {target:"#tabRC .th1RC, #tabRC .td2RC, #tabRC .td3RC, #tabRC .td4RC, #tabRC .td5RC",
     style:"background-image: url('//upload.wikimedia.org/wikipedia/commons/2/2f/Double_Gradient_60px.png');background-position: center top;background-repeat: repeat;",
     desc:"Arrière-plan : Lignes RC (autres cases)"  
    }, 
    {target:"#livePreviewFoot td:hover, .RCFilterCheckList li:hover",
     style:"background-color:silver;",
     desc:"Surbrillance : Barre de contrôle"  
    }, 
    {target:"#tabRC .rcLine:hover, #tabRC .rcLine:hover td, #tabRC .rcLine:hover th",
     style:"background-color:silver !important;",
     desc:"Surbrillance : Ligne RC (ligne complète)"
    },
    {target:"#tabRC .rcLine:hover td:hover, #tabRC .rcLine:hover th:hover", 
     style:"background-color:DarkGray !important;",
     desc:"Surbrillance : Ligne RC (cellule)"
    },
    {target:"#livePreviewTitle a:hover", 
     style:"border:1px solid grey !important;background-color:silver !important;",
     desc:"Surbrillance : Liens de la barre de titre de prévisualisation"
    },
    {target:"#liveFollow li:hover", 
     style:"background-color:silver !important;",
     desc:"Surbrillance : Ligne de journal de suivi (ligne complète)"
    },
    {target:"#liveFollow li li:hover", 
     style:"background-color:DarkGray !important;",
     desc:"Surbrillance : Ligne de journal de suivi (détail)"
    },
    {target:".ParamMenuLi:hover", 
     style:"border:1px solid gray !important;background-color:silver !important;",
     desc:"Surbrillance : Lignes du menu de configuration"
    },
    {target:"#liveDebugContent li:hover", 
     style:"background-color: silver;",
     desc:"Surbrillance : Lignes du panneau de débogage"
    },
    {target:".RcLog .th0RC",
     style:"background-color:LightBlue;",
     desc:"Ligne RC : Journal"  
    },
    {target:".RcFeedback .th1RC, .RcFeedback .td2RC, .RcFeedback .td3RC, .RcFeedback .td4RC",        
     style:"background-color:#AA9E60;",
     desc:"Ligne RC : Retour de lecteur"  
    }, 
    {target:".RcAbFilter .th1RC, .RcAbFilter .td2RC, .RcAbFilter .td3RC, .RcAbFilter .td4RC",        
     style:"background-color:#FFBE60;",
     desc:"Ligne RC : Détection du filtre anti-abus"  
    }, 
    {target:".RcUpload .th1RC, .RcUpload .td2RC, .RcUpload .td3RC, .RcUpload .td4RC",        
     style:"background-color:#D1CAFA;",
     desc:"Ligne RC : Import de fichier"  
    }, 
    {target:".RcNewUser .th1RC, .RcNewUser .td2RC, .RcNewUser .td3RC, .RcNewUser .td4RC",        
     style:"background-color:#C6FF6D;",
     desc:"Ligne RC : Nouvel utilisateur"  
    }, 
    {target:".RcBlock .th1RC, .RcBlock .td2RC, .RcBlock .td3RC, .RcBlock .td4RC",        
     style:"background-color:#EECC84;",
     desc:"Ligne RC : Blocage"  
    }, 
    {target:".RcDelete .th1RC, .RcDelete .td2RC, .RcDelete .td3RC, .RcDelete .td4RC",        
     style:"background-color:#E7CAA7;",
     desc:"Ligne RC : Suppression"  
    },
    {target:".RcMove .th1RC, .RcMove .td2RC, .RcMove .td3RC, .RcMove .td4RC",        
     style:"background-color:#FDC5FF;",
     desc:"Ligne RC : Renommage"  
    }, 
    {target:".RcProtect .th1RC, .RcProtect .td2RC, .RcProtect .td3RC, .RcProtect .td4RC",        
     style:"background-color:#B2BCC6;",
     desc:"Ligne RC : Protection"  
    },
    {target:".RcRights .th1RC, .RcRights .td2RC, .RcRights .td3RC, .RcRights .td4RC",        
     style:"background-color:#FF8080;",
     desc:"Ligne RC : Changement de statut"  
    }, 
    {target:".RcRenameuser .th1RC, .RcRenameuser .td2RC, .RcRenameuser .td3RC, .RcRenameuser .td4RC",        
     style:"background-color:MediumAquamarine;",
     desc:"Ligne RC : Renommage utilisateur"  
    },
    {target:".RcThanks .th1RC, .RcThanks .td2RC, .RcThanks .td3RC, .RcThanks .td4RC",        
     style:"background-color:pink;",
     desc:"Ligne RC : Remerciement utilisateur"  
    },
    {target:".RcMassMessage .th1RC, .RcMassMessage .td2RC, .RcMassMessage .td3RC, .RcMassMessage .td4RC",        
     style:"background-color:darkGrey;",
     desc:"Ligne RC : Message de masse"  
    },
    {target:".RcPagetriageDeletion .th1RC, .RcPagetriageDeletion .td2RC, .RcPagetriageDeletion .td3RC, .RcPagetriageDeletion .td4RC",        
     style:"background-color:lightblue;",
     desc:"Ligne RC : Pagetriage - tag de suppression"  
    }, 
    {target:".RcPagetriageCuration .th1RC, .RcPagetriageCuration .td2RC, .RcPagetriageCuration .td3RC, .RcPagetriageCuration .td4RC",        
     style:"background-color:lightblue;",
     desc:"Ligne RC : Pagetriage - amélioration"  
    }, 
    {target:".RcReview .th1RC, .RcReview .td2RC, .RcReview .td3RC, .RcReview .td4RC",        
     style:"background-color:Peru;",
     desc:"Ligne RC : Relecture"  
    }, 
    {target:".RcStable .th1RC, .RcStable .td2RC, .RcStable .td3RC, .RcStable .td4RC",        
     style:"background-color:Chocolate;",
     desc:"Ligne RC : Stabilisation"  
    }, 
    {target:".RcOversight .th1RC, .RcOversight .td2RC, .RcOversight .td3RC, .RcOversight .td4RC",        
     style:"background-color:Purple;",
     desc:"Ligne RC : Masquage de modification"  
    }, 
    {target:".RcCheckuser .th1RC, .RcCheckuser .td2RC, .RcCheckuser .td3RC, .RcCheckuser .td4RC",        
     style:"background-color:Thistle;",
     desc:"Ligne RC : Vérification d’utilisateur"  
    }, 
    {target:".RcEducationProgram .th1RC, .RcEducationProgram .td2RC, .RcEducationProgram .td3RC, .RcEducationProgram .td4RC",        
     style:"background-color:PeachPuff;",
     desc:"Ligne RC : Programme éducatif"  
    },
    {target:".RcLiquidThreads .th1RC, .RcLiquidThreads .td2RC, .RcLiquidThreads .td3RC, .RcLiquidThreads .td4RC", 
     style:"background-color:LightCyan;",
     desc:"Ligne RC : LiquidThreads"   
    },
    {target:".RcPageTranslation .th1RC, .RcPageTranslation .td2RC, .RcPageTranslation .td3RC, .RcPageTranslation .td4RC", 
     style:"background-color:RosyBrown;",
     desc:"Ligne RC : PageTranslation"   
    },
    {target:".RcTranslatorSandbox .th1RC, .RcTranslatorSandbox .td2RC, .RcTranslatorSandbox .td3RC, .RcTranslatorSandbox .td4RC", 
     style:"background-color:RosyBrown;",
     desc:"Ligne RC : TranslatorSandbox"   
    },
    {target:".RcTranslationReview .th1RC, .RcTranslationReview .td2RC, .RcTranslationReview .td3RC, .RcTranslationReview .td4RC", 
     style:"background-color:RosyBrown;",
     desc:"Ligne RC : TranslationReview"   
    },
    {target:".RcNotifyTranslators .th1RC, .RcNotifyTranslators .td2RC, .RcNotifyTranslators .td3RC, .RcNotifyTranslators .td4RC", 
     style:"background-color:RosyBrown;",
     desc:"Ligne RC : NotifyTranslators"   
    },
    {target:".RcOAuth .th1RC, .RcOAuth .td2RC, .RcOAuth .td3RC, .RcOAuth .td4RC", 
     style:"background-color:MistyRose;",
     desc:"Ligne RC : OAuth"   
    },
    {target:".RcMoodBar .th1RC, .RcMoodBar .td2RC, .RcMoodBar .td3RC, .RcMoodBar .td4RC", 
     style:"background-color:DarkKhaki;",
     desc:"Ligne RC : MoodBar"   
    },
    {target:".RcNotification .th0RC, .RcNotification .th1RC",
     style:"background-color:IndianRed;color:white;",
     desc:"Ligne RC : Notification"  
    }, 
    {target:".RcWatched .th0RC",        
     style:"border:3px solid gold !important;",
     desc:"Ligne RC : Page suivie"  
    },
    {target:".RcContact .th0RC",        
     style:"border:3px solid gold !important;",
     desc:"Ligne RC : Utilisateur suivi" 
    },
    {target:".RcNew .th1RC",        
     style:"background-color:#bdffb2;border:3px solid Lime !important;",
     desc:"Ligne RC : Nouvelle page"  
    },
    {target:".RcNotReviewed .th1RC",        
     style:"border:3px solid red !important;",
     desc:"Ligne RC : Modification en attente de validation"  
    },
    {target:".RcReverted .td2RC",        
     style:"border:3px solid red !important;",
     desc:"Ligne RC : Utilisateur révoqué"  
    }, 
    {target:".RcIp .td2RC, .RcIp .td3RC, .RcIp .td4RC",        
     style:"background-color:white;",
     desc:"Ligne RC : Utilisateur IP"  
    }, 
    {target:".RcNewbie .td2RC, .RcNewbie .td3RC, .RcNewbie .td4RC",        
     style:"background-color:#bdffb2;",
     desc:"Ligne RC : Utilisateur débutant"  
    }, 
    {target:".RcPatrolled .td2RC, .RcPatrolled .td3RC, .RcPatrolled .td4RC",        
     style:"background-color:#b2b2b2;",
     desc:"Ligne RC : Utilisateur autopatrolled"  
    },  
    {target:".RcSelf .td2RC, .RcSelf .td3RC, .RcSelf .td4RC",        
     style:"background-color:#a0b0e0 !important;",
     desc:"Ligne RC : Soi-même" 
    }, 
    {target:".RcTag .td3RC",        
     style:"border:2px solid red !important;",
     desc:"Ligne RC : Déclenchement de filtre"  
    },
    {target:"#tabRC .tagTemplate", 
     style:"color: red; font-weight: bold;",
     desc:"Ligne RC : Balises de filtrage"   
    },
    {target:".Rctd5NotEmpty .td5RC",        
     style:"background-color:Cornsilk;",
     desc:"Ligne RC : Commentaire de modification détecté"  
    }, 
    {target:".RcRevert .td5RC",        
     style:"border:3px solid red !important;",
     desc:"Ligne RC : Révocation"  
    },
    {target:".RcReplaced .td5RC",        
     style:"border:3px solid orange !important;",
     desc:"Ligne RC : Remplacement"  
    },
    {target:".RcBlanking .td5RC",        
     style:"border:3px solid white !important;",
     desc:"Ligne RC : Blanchiment"  
    },
    {target:".RcExternal th, .RcExternal td",        
     style:"background-color:#CFBE90;",
     desc:"Ligne RC : Modification externe (wikidata)"  
    }, 
    {target:".RcChecked th, .RcChecked td",        
     style:"background-color:#FFFFE0;",
     desc:"Ligne RC : Page vérifiée"
    },
    {target:".hidelineLink", 
     style:"padding:3px;color:red;",
     desc:"Lien : Suppression de ligne (journaux de suivi)"  
    },  
    {target:".diffDiffLink", 
     style:"color:orange;",
     desc:"Lien : Diff"   
    }, 
    {target:".newpageDiffLink", 
     style:"color:green;",
     desc:"Lien : New"   
    }, 
    {target:".uploadDiffLink", 
     style:"color:darkslateblue;",
     desc:"Lien : Upload"   
    }, 
    {target:".newuserDiffLink", 
     style:"color:darkGreen;",
     desc:"Lien : New user"   
    }, 
    {target:".blockDiffLink", 
     style:"color:darkgoldenrod;",
     desc:"Lien : Block"   
    }, 
    {target:".gbblockDiffLink", 
     style:"color:darkgoldenrod;",
     desc:"Lien : Gblblock"   
    }, 
    {target:".deleteDiffLink", 
     style:"color:saddlebrown;",
     desc:"Lien : Delete"   
    }, 
    {target:".moveDiffLink", 
     style:"color:black;",
     desc:"Lien : Move"   
    }, 
    {target:".protectDiffLink", 
     style:"color:darkslategray;",
     desc:"Lien : Protect"   
    }, 
    {target:".feedbackDiffLink", 
     style:"color:RoyalBlue;",
     desc:"Lien : Articlefeedbackv5"   
    }, 
    {target:".abfilterDiffLink", 
     style:"color:darkslategray;",
     desc:"Lien : Filter"   
    }, 
    {target:".abfilterdiffDiffLink", 
     style:"color:red;",
     desc:"Lien : Diff (Filter)"   
    }, 
    {target:".renameuserDiffLink", 
     style:"color:SlateGray;",
     desc:"Lien : Renameuser"   
    }, 
    {target:".userrightsDiffLink", 
     style:"color:DeepSkyBlue;",
     desc:"Lien : Userrights"   
    }, 
    {target:".gbuserrightsDiffLink", 
     style:"color:DeepSkyBlue;",
     desc:"Lien : Gbluserrights"   
    }, 
    {target:".thanksDiffLink", 
     style:"color:IndianRed;",
     desc:"Lien : Thanks"   
    }, 
    {target:".massmessageDiffLink", 
     style:"color:white;",
     desc:"Lien : Massmessage"   
    }, 
    {target:".pagetriageDeletionDiffLink", 
     style:"color:darkRed;",
     desc:"Lien : Pagetriage-deletion"   
    }, 
    {target:".pagetriageCurationDiffLink", 
     style:"color:MidnightBlue;",
     desc:"Lien : Pagetriage-curation"   
    }, 
    {target:".reviewDiffLink", 
     style:"color:black;",
     desc:"Lien : Review"   
    }, 
    {target:".reviewdiffDiffLink", 
     style:"color:red;",
     desc:"Lien : Diff (Review)"   
    }, 
    {target:".stableDiffLink", 
     style:"color:white;",
     desc:"Lien : Stable"   
    }, 
    {target:".oversightDiffLink", 
     style:"color:white;",
     desc:"Lien : Suppress"   
    }, 
    {target:".checkuserDiffLink", 
     style:"color:Indigo;",
     desc:"Lien : Checkuser"   
    }, 
    {target:".educationprogramDiffLink", 
     style:"color:DarkSlateGray;",
     desc:"Lien : Education program"   
    }, 
    {target:".liquidthreadsDiffLink", 
     style:"color:Teal;",
     desc:"Lien : Liquidthreads"   
    }, 
    {target:".translationreviewDiffLink", 
     style:"color:white;",
     desc:"Lien : Translationreview"   
    },
    {target:".translatorsandboxDiffLink", 
     style:"color:white;",
     desc:"Lien : Translatorsandbox"   
    },
    {target:".notifytranslatorsDiffLink", 
     style:"color:white;",
     desc:"Lien : Notifytranslators"   
    },
    {target:".pagetranslationDiffLink", 
     style:"color:white;",
     desc:"Lien : Pagetranslation"   
    },
    {target:".mwoauthconsumerDiffLink", 
     style:"color:MediumOrchid;",
     desc:"Lien : Mwoauthconsumer"   
    },
    {target:".moodbarDiffLink", 
     style:"color:SaddleBrown;",
     desc:"Lien : MoodBar"   
    },
    {target:".historyLink", 
     style:"color:darkorange;",
     desc:"Lien : Historique"   
    }, 
    {target:".editLink", 
     style:"color:OrangeRed;",
     desc:"Lien : Modifier"   
    }, 
    {target:".moveLink", 
     style:"color:tomato;",
     desc:"Lien : Renommer"   
    }, 
    {target:".deleteLink", 
     style:"color:orangered;",
     desc:"Lien : Supprimer"   
    }, 
    {target:".protectLink", 
     style:"color:coral;",
     desc:"Lien : Protéger"   
    }, 
    {target:".stableLink", 
     style:"color:Chocolate;",
     desc:"Lien : Stabiliser"   
    }, 
    {target:".pagetalkLink", 
     style:"color:seagreen;",
     desc:"Lien : Discuter (page)"   
    },  
    {target:".usertalkLink", 
     style:"color:seagreen;",
     desc:"Lien : Discuter (utilisateur)"   
    }, 
    {target:".usercontribLink", 
     style:"color:#43CD80;",
     desc:"Lien : Contributions"   
    }, 
    {target:".userdeletedcontribLink", 
     style:"color:#43CD80;",
     desc:"Lien : Contributions supprimées"   
    }, 
    {target:".pagewatchLink", 
     style:"color:RoyalBlue;",
     desc:"Lien : Suivre (page)"   
    }, 
    {target:".pageunwatchLink", 
     style:"color:RoyalBlue;",
     desc:"Lien : Ne plus suivre (page)"   
    }, 
    {target:".userwatchLink", 
     style:"color:black;",
     desc:"Lien : Suivre (utilisateur)"   
    }, 
    {target:".userunwatchLink", 
     style:"color:#AAAA00;",
     desc:"Lien : Ne plus suivre (utilisateur)"   
    }, 
    {target:".userblockLink", 
     style:"color:seagreen;",
     desc:"Lien : Bloquer"   
    }, 
    {target:".userhideLink", 
     style:"color:grey;",
     desc:"Lien : Masquer"   
    }
  ];

/* </source>

===== Autres =====

<source lang=javascript> */

    // Preview title-bar template
  var PreviewBarTemplate = '<table width="100%" ><tr>'
                         + '<td align="left" style="vertical-align:middle">$1</td>'
                         + '<td align="right" style="vertical-align:middle">$2</td>'
                         + '</tr><tr>'
                         + '<td align="left" style="vertical-align:middle"><small>$3</small></td>'
                         + '<td align="right" style="vertical-align:middle">$4</td>'
                         + '</tr></table>';

    // Config panel tabs
  var Custom_lstParamMenuTabs = new Array();
  var lstParamMenuTabs = {"lrcParams"              : true, 
                          "lrcOptionMenuValues"    : true, 
                          "lstBlank"               : true, 
                          "lrcRevertMessages"      : true, 
                          "lstAverto"              : true, 
                          "lstBando"               : true, 
                          "lstReport"              : false, 
                          "lrcIcons"               : true, 
                          "lrcTranslatedTexts"     : true, 
                          "lrcTranslatedParamDesc" : true, 
                          "UnTranslatedTexts"      : true,  
                          "lrcExtensions"          : false, 
                          "commenttests"           : true, 
                          "categoriestests"        : true, 
                          "templatestests"         : true, 
                          "watchCategories"        : true, 
                          "lrcSupprLineParams"     : false,
                          "ContactListLegend"      : true,
                          "HiddenListLegend"       : true,
                          "ExtensionsLegend"       : true,
                          "lrcCSSstyles"           : true
  };

/* </source>

==== Variables non personnalisables ====

<source lang=javascript> */

// Configuration

  if(typeof(LiveRC_Config)==="undefined") LiveRC_Config = new Array();

  if(typeof(LiveRC_Config["SiteConfigPage"])==="undefined") 
  LiveRC_Config["SiteConfigPage"] = "MediaWiki:Gadget-LiveRCSiteConfig.js";      // Page de stockage de la config locale

  LiveRC_Config["BugzillaURL"] = "https://fr.wikipedia.org/wiki/Discussion MediaWiki:Gadget-LiveRC.js";

  LiveRC_Config["LaunchProcess"] = new Array();    // Process d'initialisation

    // Configuration du wiki local
  LiveRC_Config["MediawikiGeneralConfig"] = new Array();                         // Liste des paramètres de configuration
  LiveRC_Config["MediawikiLanguages"] = new Array();                             // Liste des langues supportées
  LiveRC_Config["MediawikiMessages"] = new Array();                              // Liste des messages système Mediawiki
  LiveRC_Config["MediawikiExtensions"] = new Array();                            // Liste des extensions Mediawiki
  LiveRC_Config["MediawikiNamespaces"] = new Array();                            // Liste des espaces de noms
  LiveRC_Config["MediawikiMagicwords"] = new Array();                            // Liste des mots magiques

   // Listes d'utilisateurs locaux
  LiveRC_Config["Bot"] = new Array();                 // Liste des bots;
  LiveRC_Config["Sysop"] = new Array();               // Liste des administrateurs;
  LiveRC_Config["Blocks"] = new Array();              // Liste des utilisateurs récemment bloqués
  LiveRC_Config["UserCat"] = new Array();             // Liste des catégories d'utilisateurs

    // Informations sur l'utilisateur courant
  LiveRC_Config["UserInfos"] = new Object();                    
  LiveRC_Config["UserInfos"].Rights = new Array();                            // Liste des droits
  LiveRC_Config["UserInfos"].RealName = "";                                   // "Vrai" nom (si renseigné)
  LiveRC_Config["UserInfos"].eMail = "";                                      // adresse mail (si renseignée)
  LiveRC_Config["UserInfos"].Preferences = new Object();                      // Préférences
  LiveRC_Config["UserInfos"].APIlimit = 499;                                  // Limite de requête API
  LiveRC_Config["UserInfos"].isAdmin = (wgUserGroups.indexOf("sysop") != -1); // Utilisateur administrateur;

    // Gestion des langues
  LiveRC_Config["SupportedLanguages"] = new Array("fr", "en", "it");
  LiveRC_Config["AvailableLanguages"] = new Array();
  LiveRC_Config["LoadedLanguages"] = new Array();
  LiveRC_Config["LoadFunctions"] = new Array();

    //Historique des prévisualisations
  LiveRC_Config["History"] = new Object();
  LiveRC_Config["History"]["Type"] = new Array();
  LiveRC_Config["History"]["Params"] = new Array();
  LiveRC_Config["History"]["URL"] = new Array();
  LiveRC_Config["History"]["Text"] = new Array();
  LiveRC_Config["History"]["Index"] = -1;
  LiveRC_Config["History"]["IsOld"] = false;

    // Listes se suivi 

  LiveRC_Config["SpecialLogList"] = new Array();        // Définition des listes de suivi spéciales
  LiveRC_Config["Suivi"] = new Array();                 // Liste de suivi
  LiveRC_Config["AbuseLog"] = new Array();              // Liste des déclenchements de filtres
  LiveRC_Config["Revoc"] = new Array();                 // Liste des utilisateurs révoqués;
  LiveRC_Config["NewUsers"] = new Array();              // Liste des utilisateurs inscrits durant la session
  LiveRC_Config["Contact"] = new Array();               // Liste des contacts;
  LiveRC_Config["Hidden"] = new Array();                // Liste des utilisateurs masqués
  LiveRC_Config["Spam"] = new Array();                  // Liste des utilisateurs ayant déclenché le filtre anti-spam
  LiveRC_Config["Feedback"] = new Array();              // Liste des pages ayant reçu un avis
  LiveRC_Config["NewPages"] = new Array();              // Liste des nouvelles pages
  LiveRC_Config["PendingChanges"] = new Array();        // Liste des pages en attente de validation
  LiveRC_Config["Blocked"] = new Array();               // Liste des utilisateurs bloqués durant la session
  LiveRC_Config["Notificationtimestamp"] = new Array(); // Liste des notificationtimestamp

  LiveRC_Config["ListLoaded"] = new Array();            // État de chargement des liste spéciales 

  LiveRC_Config["Timeout"] = new Array();               // Liste des timeout
  LiveRC_Config["RequestError"] = 0;                    // Nombre de requêtes RC consécutives échoués
  LiveRC_Config["AlertCount"] = -1;                     // Index des alertes
  LiveRC_Config["ClockTime"] = new Array();             // Horloge de LiveRC ("H","M","S")
  LiveRC_Config["LoadingTime"] = 0;                     // Temps de chargement, en secondes
  LiveRC_Config["PendingDebug"] = new Array();          // Ligne de débogage en attente

  // Menu de paramétrage
  LiveRC_Config["ParamStartComment"] = '//<sou'+'rce lang="javascript">//<pre>//<nowiki>\n';
  LiveRC_Config["ParamEndComment"] = '//END PARAMS\n//</nowiki></pre></sour'+'ce>\n';
  LiveRC_Config["ExtensionSetupComment"] = '//EXTENSIONS SETUP : ';
  LiveRC_Config["CustomCatTemplate"] = 'Catégorisation JS';
  LiveRC_Config["LiveRCcustomParams"] = new Array();
  LiveRC_Config["AlwaysShownTabs"] = new Array("lstParamMenuTabs");

  // Z-index Checklists
  LiveRC_Config["CheckListZIndex"] = 6000;

  // Limitations
  LiveRC_Config["RevertLimit"] = 10;
  LiveRC_Config["LimitationsRight"] = "autopatrol";
  // Utilisateurs qui ne sont pas concernés par la limitation (reservé aux développeurs)
  LiveRC_Config["LimitationsWhitelist"] = new Array("Dr Brains");

// Timestamps d'initialisation des RC, Log et Filtres
  LiveRC_Config["LastRCid"] = 0;        
  LiveRC_Config["LastLOGid"] = 0;        
  LiveRC_Config["LastFILTERid"] = 0;
  LiveRC_Config["LastRCtimestamp"] = 1;
  LiveRC_Config["LastLOGtimestamp"] = 1;
  LiveRC_Config["LastFILTERtimestamp"] = 1;
  LiveRC_Config["LastCUtimestamp"] = 1;
  LiveRC_Config["NextFreeID"] = 0;
  LiveRC_Config["NextPreviewIndex"] = 0;

  // Préchargement de la prévisualisation
  LiveRC_Config["RCEvents"] = new Object();
  LiveRC_Config["AllLinesSeen"] = true;

    // Suggestions de pages
  LiveRC_Config["SuggestParams"] = new Array();
  LiveRC_Config["SuggestParams"]["ZIndex"] = 5;                         // Propriété "z-index" de départ
  LiveRC_Config["SuggestParams"]["Input"] = new Array();                // Matrice des <input> (champ de saisie)
  LiveRC_Config["SuggestParams"]["Suggest"] = new Array();              // Matrice des <select> (liste de suggestions)
  LiveRC_Config["SuggestParams"]["ExistInput"] = new Array();           // Matrice des <input> (page existe ou pas)
  LiveRC_Config["SuggestParams"]["ExistImg"] = new Array();             // Matrice des <img> (page existe ou pas)
  LiveRC_Config["SuggestParams"]["IsRunning"] = new Array();            // Matrice de l'état de la requête de suggestions
  LiveRC_Config["SuggestParams"]["NSFilter"] = new Array();             // Matrice de l'option de filtrage par espace de noms
  LiveRC_Config["SuggestParams"]["StripNS"] = new Array();              // Matrice de l'option d'affichage de l'espace de noms
  LiveRC_Config["SuggestParams"]["SuggestLimit"] = new Array();         // Matrice de la limite des suggestions
  LiveRC_Config["SuggestParams"]["SuggestSelectLimit"] = new Array();   // Matrice de la taille de la liste de suggestions
  LiveRC_Config["SuggestParams"]["ListDown"] = new Array();             // Matrice de l'affichage de la liste de suggestions
  LiveRC_Config["SuggestParams"]["AddExist"] = new Array();             // Matrice de l'affichage de l'icône
  LiveRC_Config["SuggestParams"]["Prefix"] = new Array();               // Matrice des préfixes de filtrage
  LiveRC_Config["SuggestParams"]["Suffix"] = new Array();               // Matrice des suffixes de filtrage
  LiveRC_Config["SuggestParams"]["RedirectFilter"] = new Array();       // Matrice des filtrages de redirection
  LiveRC_Config["SuggestParams"]["Index"] = 1;                          // Index de départ (id) 
    // Valeurs par défaut
  LiveRC_Config["SuggestParams"]["NSFilter"][0] = false;
  LiveRC_Config["SuggestParams"]["StripNS"][0] = false;
  LiveRC_Config["SuggestParams"]["SuggestLimit"][0] = 10;
  LiveRC_Config["SuggestParams"]["SuggestSelectLimit"][0] = 5;
  LiveRC_Config["SuggestParams"]["ListDown"][0] = false;
  LiveRC_Config["SuggestParams"]["AddExist"][0] = false;
  LiveRC_Config["SuggestParams"]["Prefix"][0] = false;
  LiveRC_Config["SuggestParams"]["Suffix"][0] = false;
  LiveRC_Config["SuggestParams"]["RedirectFilter"][0] = "all";


  // Flagged Revisions. TODO : trouver un moyen pour remplir ces variables automatiquement (via l'API ?)   
  LiveRC_Config["FlagRevNamespaces"] = new Array(0, 6, 10, 828);   // Liste des namespaces où la validation est active
  LiveRC_Config["FlagRevProtection"] = false;                      // Stabilisation intégrée à l'outil de protection


    // List des mots magiques utilisés
  LiveRC_Config["NeededMagicWords"] = new Array();

    // Messages systèmes utilisés
  LiveRC_Config["NeededMessages"] = new Array("abusefilter-log",
                                              "abusefilter-action-block",
                                              "abusefilter-action-blockautopromote",
                                              "abusefilter-action-degroup",
                                              "abusefilter-action-disallow",
                                              "abusefilter-action-rangeblock",
                                              "abusefilter-action-tag",
                                              "abusefilter-action-throttle",
                                              "abusefilter-action-warn",
                                              "abusefilter-log-noactions",
                                              "abusefilter-edit-warn-actions",
                                              "block-log-flags-angry-autoblock",
                                              "block-log-flags-anononly",
                                              "block-log-flags-hiddenname",
                                              "block-log-flags-noautoblock",
                                              "block-log-flags-nocreate",
                                              "block-log-flags-noemail",
                                              "block-log-flags-nousertalk",
                                              "hide",
                                              "show",
                                              "watch",
                                              "unwatch",
                                              "log",
                                              "mycontris",
                                              "protect-unchain-permissions",
                                              "red-link-title",
                                              "revertpage",
                                              "markedaspatrolled",
                                              "whatlinkshere-filters",
                                              "whatlinkshere-hideimages",
                                              "whatlinkshere-hidelinks",
                                              "whatlinkshere-hideredirs",
                                              "whatlinkshere-hidetrans",
                                              "articlefeedbackv5-special-central-pagetitle",
                                              "articlefeedbackv5-special-pagetitle",
                                              "january",
                                              "february",
                                              "march",
                                              "april",
                                              "may",
                                              "june",
                                              "july",
                                              "august",
                                              "september",
                                              "october",
                                              "november",
                                              "december"
                                             );

    // Types de journaux, avec extensions mediawiki et/ou droits nécessaires
  LiveRC_Config["LogNames"] = {
    'upload':             {page:'uploadlogpage'                                                                         },
    'newusers':           {page:'newuserlogpage'                                                                        },
    'patrol':             {page:'patrol-log-page'                                                                       },
    'move':               {page:'movelogpage'                                                                           },
    'merge':              {page:'mergelog'                                                                              },
    'protect':            {page:'protectlogpage'                                                                        },
    'delete':             {page:'dellogpage'                                                                            },
    'block':              {page:'blocklogpage'                                                                          },
    'rights':             {page:'rightslog'                                                                             },
    'import':             {page:'importlogpage'                                                                         },
    'gblrights':          {page:'centralauth-rightslog-name'                                                            },
    'gblblock':           {page:'globalblocking-logpage',           extension:'GlobalBlocking'                          },
    'globalauth':         {page:'centralauth-log-name',             extension:'Central Auth'                            },
    'renameuser':         {page:'log-name-renameuser',              extension:'Renameuser'                              },
    'abusefilter':        {page:'abusefilter-log-name',             extension:'Abuse Filter'                            },
    'abuselog':           {page:'abusefilter-log',                  extension:'Abuse Filter'                            },
    'thanks':             {page:'log-name-thanks',                  extension:'Thanks'                                  },
    'articlefeedbackv5':  {page:'log-name-articlefeedbackv5',       extension:'Article Feedback'                        },
    'massmessage':        {page:'log-name-massmessage',             extension:'MassMessage'                             },
    'suppress':           {page:'suppressionlog',                   extension:'Oversight',        right:'suppressionlog'},
    'checkuser':          {page:'checkuserlog',                     extension:'CheckUser',        right:'checkuser-log' },
    'pagetriage-curation':{page:'log-name-pagetriage-curation',     extension:'PageTriage'                              },
    'pagetriage-deletion':{page:'log-name-pagetriage-deletion',     extension:'PageTriage'                              },
    'review':             {page:'review-logpage',                   extension:'Flagged Revisions'                       },
    'stable':             {page:'stable-logpage',                   extension:'Flagged Revisions'                       },
    'online':             {page:'log-name-online',                  extension:'Education Program'                       },
    'campus':             {page:'log-name-campus',                  extension:'Education Program'                       },
    'course':             {page:'log-name-course',                  extension:'Education Program'                       },
    'institution':        {page:'log-name-institution',             extension:'Education Program'                       },
    'instructor':         {page:'log-name-instructor',              extension:'Education Program'                       },
    'student':            {page:'log-name-student',                 extension:'Education Program'                       },
    'student':            {page:'log-name-student',                 extension:'Education Program'                       },
    'translatorsandbox':  {page:'log-name-translatorsandbox',       extension:'Translate'                               },
    'translationreview':  {page:'log-name-translationreview',       extension:'Translate'                               },
    'pagetranslation':    {page:'log-name-pagetranslation',         extension:'Translate'                               },
    'notifytranslators':  {page:'log-name-notifytranslators',       extension:'TranslationNotifications'                },
    'liquidthreads':      {page:'lqt-log-name',                     extension:'Liquid Threads'                          },
    'mwoauthconsumer':    {page:'mwoauthconsumer-consumer-logpage', extension:'OAuth'                                   },
    'moodbar':            {page:'moodbar-log-name',                 extension:'MoodBar'                                 }
  }


    // Hooks;
  LiveRC_Config["Hooks"] = {
                  "AfterInitActivationProcess"  : new Array(),
                  "AfterTranslationsLoaded"     : new Array(),
                  "AfterSpecialLogList"         : new Array(),
                  "AfterOptions"                : new Array(),
                  "AfterMiniDiffPrewiew"        : new Array(),
                  "AfterPreviewDiff"            : new Array(),
                  "AfterPreviewArticle"         : new Array(),
                  "AfterPreviewHistory"         : new Array(),
                  "AfterPreviewContribs"        : new Array(),
                  "AfterPreviewDeletedContribs" : new Array(),
                  "AfterPreviewLog"             : new Array(),
                  "AfterPreviewFilter"          : new Array(),
                  "AfterPreviewEdit"            : new Array(),
                  "AfterPreviewMove"            : new Array(),
                  "AfterPreviewProtect"         : new Array(),
                  "AfterPreviewDelete"          : new Array(),
                  "AfterPreviewBlock"           : new Array(),
                  "AfterPreviewRevisiondelete"  : new Array(),
                  "AfterPreviewWhatlinkshere"   : new Array(),
                  "AfterPreviewFeedback"        : new Array(),
                  "AfterPreviewStabilization"   : new Array(),
                  "AfterFillParamPanel"         : new Array(),
                  "AfterCreateParamPanel"       : new Array(),
                  "BeforeRC"                    : new Array(),
                  "AfterRC"                     : new Array()
                 };

    // Chargement styles globaux
  importStylesheetURI('//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.css&action=raw&ctype=text/css');
  importStylesheetURI('//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.css/GlobalStyles.css&action=raw&ctype=text/css');

    // Chargement config locale sauvegardée
  importScript(LiveRC_Config["SiteConfigPage"]);

    // Chargement styles et javascript utilisateur
  importScript('User:'+wgUserName+'/LiveRCparam.js');
  importStylesheet('User:'+wgUserName+'/LiveRCparam.css');

    // Variables obsolètes, conservées pour compatibilité avec anciennes personnalisations
  var lang_log = new Array();
  var lrcManageParamsDesc = new Array();
  var lrcHotCatsVariables = new Array();
  var lrcHotCatsText = new Array();
  var lrcHooks = new Array();
  var lrcIcon = new Array();
  var lrcManageParams_Desc = new Array();
  var lrcParams_Custom = new Array();
  var lrcOptionMenuValues_Custom = new Array();
  var lstBlank_Custom = new Array();
  var lrcRevertMessages_Custom = new Array();
  var lstAverto_Custom = new Array();
  var lstBando_Custom = new Array();
  var lrcIcons_Custom = new Array();
  var lrcExtensions_Custom = new Array();
  var UnTranslatedTexts_Custom = new Array();
  var lrcTexts_Custom = new Array();
  var lrcParamDesc_Custom = new Array();

  // fonction spéciale pour supprimer/modifier un paramètre chargé dans le LiveRCparams.js d'un utilisateur

  function LiveRC_getSpecialCustom(){
    for(var a=0,l=lrcIcons.length;a<l;a++){
      if(lrcIcons[a].type == "sup_img") lrcIcons[a].type = 1;
      else if(lrcIcons[a].type == "sub_img") lrcIcons[a].type = 2;
      else lrcIcons[a].type = 0;
      if(!lrcIcons[a].height) lrcIcons[a].height = lrcIcons[a].width;
    }
    for(var a=0,l=Custom_lrcIcons.length;a<l;a++){
      if(Custom_lrcIcons[a].type == "sup_img") Custom_lrcIcons[a].type = 1;
      else if(Custom_lrcIcons[a].type == "sub_img") Custom_lrcIcons[a].type = 2;
      else Custom_lrcIcons[a].type = 0;
      if(!Custom_lrcIcons[a].height) lrcIcons[a].height = Custom_lrcIcons[a].width;
    }
    for(var a=0,l=Custom_commenttests.length;a<l;a++){
      if(!Custom_commenttests[a].hide) Custom_commenttests[a].hide = false;
    }
    for(var a=0,l=Custom_lstBando.length;a<l;a++){
      if(typeof(Custom_lstBando.withDate)==="boolean" && Custom_lstBando.withDate) Custom_lstBando.withDate = "$month $year";
      else if(!Custom_lstBando.withDate) Custom_lstBando.withDate = "";
    }
    var ObsoleteCustomParams = new Array("AddExtensionCustom", 
                                         "ShowAllRevoc", 
                                         "ShowAllBlank", 
                                         "HideWPCleaner", 
                                         "HideAWB",
                                         "RvMinorEdit",
                                         "AddStyleCustom", 
                                         "RCType", 
                                         "RCns"
    );
    var ParamToOption = new Array("ShowAllSelf" ,"ShowAllContact" ,"ShowAllWatchlist", "HideOwnSubpage");
    for(var param in Custom_lrcParams){
      if(ObsoleteCustomParams.indexOf(param)!=-1) delete Custom_lrcParams[param];
      if(ParamToOption.indexOf(param)!=-1){
        Custom_lrcOptionMenuValues[("User_"+param)] = Custom_lrcParams[param];
        delete Custom_lrcParams[param];
      }
    }
    var OptionToParam = new Array("InterwikiList");
    for(var option in Custom_lrcOptionMenuValues){
      if(ObsoleteCustomParams.indexOf(option)!=-1) delete Custom_lrcOptionMenuValues[option];
      if(OptionToParam.indexOf(option)!=-1){
        Custom_lrcParams[option] = Custom_lrcOptionMenuValues[option];
        delete Custom_lrcOptionMenuValues[option];
      }
    }

  }

/* </source>

=== Fonctions utilitaires ===

==== Ajax ====

<source lang="javascript"> */
var wpajax = {
  initReq: function() {
    var xmlhttp;
    try {
      xmlhttp = new XMLHttpRequest();
    } catch(e) {
      try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
          xmlhttp = false
        }
      }
    }
    return xmlhttp;
  },
  /* preloadReq.state
     0 : no request
     1 : pending request
     2 : pending request, the result will be used with preloadReq.bundle
         (preloadReq is locked until the request is complete)
     3 : completed request
  */
  preloadReq: {url: null, xmlhttp: null, bundle: null, state: 0},
  preload: function(url) {
    if (!lrcMakeParam("PreloadLines")) return;
    var plr = wpajax.preloadReq;
    if (plr.state == 2) return 0;
    var xmlhttp = wpajax.initReq();
    if (!xmlhttp) return 0;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState != 4
          || !((plr.state == 1 || plr.state == 2) && plr.url == url)) return;
      var oldState = plr.state;
      plr.xmlhttp = xmlhttp;
      plr.state = 3;
      if (oldState == 2)
        wpajax.httpComplete(xmlhttp, plr.bundle);
    };
    plr.state = 1;
    plr.url = url;
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
    return 1;
  },
  // mandatory: bundle.url
  // optional:  bundle.async
  // optional:  bundle.method
  // optional:  bundle.headers
  // optional:  bundle.data
  // optional:  bundle.onSuccess (xmlhttprequest, bundle)
  // optional:  bundle.onFailure (xmlhttprequest, bundle)
  // optional:  bundle.otherStuff OK too, passed to onSuccess and onFailure
  http: function(bundle) {
    lrcDisplayDebug("Ajax request sent : " + bundle.url + (bundle.data ? " ; data = "+bundle.data : ""), true);
    var plr = wpajax.preloadReq;
    if (!(bundle.method || bundle.headers || bundle.async == false || bundle.data)
        && (plr.state == 1 || plr.state == 3) && plr.url == bundle.url) {
      if (plr.state == 1) {
        plr.state = 2;
        plr.bundle = bundle;
      } else {
        wpajax.httpComplete(plr.xmlhttp, bundle);
      }
      return 2;
    }
    var xmlhttp = wpajax.initReq();
    if (!xmlhttp) return 0;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4)
        wpajax.httpComplete(xmlhttp, bundle);
    };
    xmlhttp.open(bundle.method ? bundle.method : "GET", bundle.url, bundle.async == false ? false : true);
    if (bundle.headers) {
      for (var field in bundle.headers)
        try {
          xmlhttp.setRequestHeader(field, bundle.headers[field]);
        } catch(err) {
          //Argos42 : pour rendre LiveRC fonctionnel sur chrome
        }
    }
    xmlhttp.send(bundle.data ? bundle.data : null);
    return 1;
  },
  httpComplete: function(xmlhttp, bundle) {
    if (xmlhttp.status == 200 || xmlhttp.status == 302) {
      if (bundle.onSuccess)
        bundle.onSuccess(xmlhttp, bundle);
    } else if (bundle.onFailure) {
      bundle.onFailure(xmlhttp, bundle);
    }
    lrcDisplayDebug("Ajax request received : " + bundle.url + (bundle.data ? " ; data = "+bundle.data : "") + " (" + xmlhttp.status+")", true);
  }
};

/* </source>

==== Hook functions ====

<source lang="javascript"> */

// Ajout d'une fonction à un hook

function LiveRC_AddHook(Type, func){
  if(typeof(LiveRC_Config["Hooks"][Type])==="undefined") LiveRC_Config["Hooks"][Type] = new Array();
  if(typeof(func)==="function") LiveRC_Config["Hooks"][Type].push(func);
}

// Exécution des fonctions

function LiveRC_RunHooks(Type, Params){
  var HookResult = true;
  if(typeof(LiveRC_Config["Hooks"][Type])!='undefined'){
    lrcDisplayDebug("Run hook ("+Type+")");
    for(var a=0,l=LiveRC_Config["Hooks"][Type].length;a<l;a++){
      var ThisHookResult = LiveRC_Config["Hooks"][Type][a](Params);
      if(ThisHookResult===false) HookResult = false;
    }
  }
  return HookResult;
}

/* </source>

==== Fonctions d'état ====

<source lang="javascript"> */


function lrcHasState(state, thisState){
    if(!state) return false;
    return (state.indexOf(thisState)!=-1);
}

function lrcAddState(state, thisState){
    if(!state) state = new Array();
    if(!lrcHasState(state, thisState)) state[(state.length)] = thisState;
    return state;
}

function lrcRemoveState(state, thisState){
    if(!typeof(state)=="undefined") return false;
    var index = state.indexOf(thisState);
    if(index!=-1) state = state.splice(index, 1);
    return state;
}

/* </source>

==== Fonctions de suivi ====

<source lang="javascript"> */

// Requête AJAX Ajout/Retrait d'un utilisateur ou d'une page du suivi

function watchAPICall(title, watch) {
  var url = wgServer + wgScriptPath + '/api.php?format=xml&action=query&prop=info&intoken=watch&titles='+encodeURIComponent(title);
  wpajax.http({url: url, onSuccess: watchAPICallStep2, title: title, watch: watch});
}

function watchAPICallStep2(xmlreq, data){
  var pageNode = xmlreq.responseXML.getElementsByTagName("page")[0];
  var url = wgServer + wgScriptPath + '/api.php?format=xml&action=watch';
  var postdata = "title=" + encodeURIComponent(data.title)
              + "&token=" + encodeURIComponent(pageNode.getAttribute("watchtoken"))
              + (data.watch ? "" : "&unwatch=1");
  var headers = {"Content-Type": "application/x-www-form-urlencoded"};
  wpajax.http({url: url, method: "POST", headers: headers, data: postdata, onSuccess: watchAPICallStep3,datas:data});
}

function watchAPICallStep3(xmlreq, data){
  var olddatas = data.datas;
  if(!olddatas) return;
  var title = olddatas.title;
  if(!title) return;
  var messageprefix = "WATCHLIST";
  if(title.indexOf('LiveRCWatch:')!=-1){
    title = title.split('LiveRCWatch:').join('');
    messageprefix = "WATCHUSER";
    try{ updateFollowContact(); }catch(e){ };
  }
  if(title.indexOf('LiveRCHidden:')!=-1){
    title = title.split('LiveRCHidden:').join('');
    messageprefix = "HIDEUSER";
    try{ updateFollowHidden(); }catch(e){ };
  }else{
    try{ updateFollowWatchlist(); }catch(e){ };
  }
  var messagesuffix = (olddatas.watch ? "ON" : "OFF");
  LiveRC_alert(lrcMakeText(messageprefix+messagesuffix).split("$1").join("<b>"+title+"</b>"));
}

// Basculement du bouton de suivi/masquage d'utilisateur

function lrcToggleWatchLink(WatchLink){
   try{
     var Li = WatchLink.parentNode.parentNode;
     var Spans = getElementsByClass("watchedLink", Li, "span");
     for(var a=0,l=Spans.length;a<l;a++){
        if(Spans[a].style.display == "none"){
          Spans[a].style.display = "";
        }else{
          Spans[a].style.display = "none";
        }
     }
  }catch(e){ }
}

function addPageToSuivi(title){
  if(typeof(LiveRC_Config["Suivi"][title])!="undefined") return
  LiveRC_Config["Suivi"][title] = new Object();
  LiveRC_Config["Suivi"][title].ts = "--:--";
  LiveRC_Config["Suivi"][title].users = new Array();
}


function removePageFromSuivi(title){
  if(typeof(LiveRC_Config["Suivi"][title])=="undefined") return
  delete LiveRC_Config["Suivi"][title];
}
/* </source>

===== Hors LiveRC =====

<source lang="javascript"> */

// Ajout du bouton de suivi d'utilisateur

function LiveWatchInitButtons(Req, data) {
  var Li = document.getElementById('n-liveRC');
  if(!Li) return;
  var user = data.user;
  var api = Req.responseXML.getElementsByTagName('api')[0];
  if (api.firstChild.nodeName == "error") return;
  LiveRC_getMediawikiDefaultLanguage();
  if(!LiveRC_Config["Contact"]) LiveRC_Config["Contact"] = new Object();
  if(!LiveRC_Config["Hidden"]) LiveRC_Config["Hidden"] = new Object();
  var ThisIsContact = false;
  var ThisIsHidden = false;
  var Pages = api.getElementsByTagName('page');
  if(Pages[0] && Pages[0].getAttributeNode('watched')){
    ThisIsContact = true;
    LiveRC_Config["Contact"][user] = new Object();
    LiveRC_Config["Contact"][user].ts = "--:--";
    LiveRC_Config["Contact"][user].pages = new Array();
  }
  if(Pages[1] && Pages[1].getAttributeNode('watched')){
    ThisIsHidden = true;
    LiveRC_Config["Hidden"][user] = new Object();
    LiveRC_Config["Hidden"][user].ts = "--:--";
    LiveRC_Config["Hidden"][user].pages = new Array();
  }
  var ContactLinks = lrcCreateWatchUserLink(wgTitle, ThisIsContact, 1);
  var HiddenLinks = lrcCreateHideUserLink(wgTitle, ThisIsHidden, 1);
  Li.innerHTML += "<ul><li>" + ContactLinks + "</li><li>" + HiddenLinks+"</li></ul>";

  var Links = Li.getElementsByTagName('a');
  for(var a=1,l=Links.length;a<l;a++){
    var Link = Links[a];
    Link.title = Link.title + ' (LiveRC)'; 
    Link.className = ""; 
  }
  lrcDisplayDebug('Add watch/hide links in tools panel : got user status (watched='+ThisIsContact+' ; hidden='+ThisIsHidden+')');
}

/* </source>

===== Dans LiveRC =====

====== Suivi de page ======

<source lang="javascript"> */

// Création du bouton de suivi de page

function lrcCreateWatchPageLink(title, watched, type, trID){
  var UnwatchLinkText = (type ? lrcGetMediawikiMessage("unwatch", true) : lrcMakeText("USER_UNWATCH_SHORT") );
  var WatchLinkText = (type ? lrcGetMediawikiMessage("watch", true) : lrcMakeText("USER_WATCH_SHORT") );
  trID = (trID ? (','+lrcEscapeStrHTML(trID)) : '');
  var WatchLinks = '<span>'
                 + '<span class="watchedLink" ' + (watched ? '' : 'style="display:none;"') + '><a '
                 + (type ? "" : ' class="pageunwatchLink" ')
                 + ' href="'+lrcGetUglyPageURL(title,'&action=unwatch') + '" '
                 + ' onclick="LiveRC_WatchArticle('+lrcEscapeStrHTML(title)+',false'+trID+');'
                 + ' lrcToggleWatchLink(this);'
                 + ' return false;"'
                 + ' title="'+lrcGetMediawikiMessage("unwatch", true)+' « '+title+' »" '
                 + '>'+UnwatchLinkText+'</a></span>'
                 + '<span class="watchedLink" ' + (watched ? 'style="display:none;"' : '' ) + '><a '
                 + (type ? "" : ' class="pagewatchLink" ')
                 + ' href="'+lrcGetUglyPageURL(title,'&action=watch') + '" '
                 + ' onclick="LiveRC_WatchArticle('+lrcEscapeStrHTML(title)+',true'+trID+');'
                 + ' lrcToggleWatchLink(this);'
                 + ' return false;"'
                 + ' title="'+lrcGetMediawikiMessage("watch", true)+' « '+title+' »" '
                 + '>'+WatchLinkText+'</a></span>'
                 + '</span>';
  return WatchLinks;
}

// Ajout du bouton de suivi de page

function LiveRC_WatchArticle(page, watch, trid){
  var sothername = lrcGetOtherPagename(page);
  if(watch){
    addPageToSuivi(page);
    addPageToSuivi(sothername);
    watchAPICall(page, true);
  }else{
    removePageFromSuivi(page);
    removePageFromSuivi(sothername);
    watchAPICall(page, false);
  }
  if (trid == null) return;
  var tr = document.getElementById(trid);
  if (tr == null) return;
  if(watch) {
    addClass(tr, "RcWatched");
  }else{
    removeClass(tr, "RcWatched");
  }
}

/* </source>

====== Suivi d'utilisateur ======

<source lang="javascript"> */

function lrcCreateWatchUserLink(user, watched, type, trID){
  var UnwatchLinkText = (type ? lrcGetMediawikiMessage("unwatch", true) : lrcMakeText("USER_UNWATCH_SHORT") );
  var WatchLinkText = (type ? lrcGetMediawikiMessage("watch", true) : lrcMakeText("USER_WATCH_SHORT") );
  trID = (trID ? (','+lrcEscapeStrHTML(trID)) : '');
  var ContactLinks = '<span>'
                   + '<span class="watchedLink" ' + (watched ? '' : 'style="display:none;"') + '><a '
                   + (type ? "" : ' class="userwatchLink" ')
                   + ' href="javascript:;" '
                   + ' onclick="LiveRC_WatchUser('+lrcEscapeStrHTML(user)+', false'+trID+');'
                   + ' lrcToggleWatchLink(this);'
                   + ' return false;"'
                   + ' title="'+lrcGetMediawikiMessage("unwatch")+' « '+user+' »" '
                   + '">'+UnwatchLinkText+'</a></span>'
                   + '<span class="watchedLink" ' + (watched ? 'style="display:none;"' : '' ) + '><a '
                   + (type ? "" : ' class="userunwatchLink" ')
                   + ' href="javascript:;" '
                   + ' onclick="LiveRC_WatchUser('+lrcEscapeStrHTML(user)+', true'+trID+');'
                   + ' lrcToggleWatchLink(this);'
                   + ' return false;"'
                   + ' title="'+lrcGetMediawikiMessage("watch")+' « '+user+' »" '
                   + '">'+WatchLinkText+'</a></span>'
                   + '</span>';
  return ContactLinks;
}

function LiveRC_WatchUser(uname, watch, trid) {
  var WLitem = LiveRC_Config["Contact"][uname];
  var page = 'LiveRCWatch:' + uname;
  if (!WLitem && watch) {
    LiveRC_Config["Contact"][uname] = new Object();
    LiveRC_Config["Contact"][uname].ts = "--:--";
    LiveRC_Config["Contact"][uname].pages = new Array();
    watchAPICall(page, true);
  } else if (WLitem && !watch) {
    watchAPICall(page, false);
    delete LiveRC_Config["Contact"][uname];
  }else{
    return;
  }
  if (trid == null) return;
  var tr = document.getElementById(trid);
  if (tr == null) return;
  if(watch) {
    addClass(tr, "RcContact");
  }else{
    removeClass(tr, "RcContact");
  }
}

/* </source>

====== Masquage d'utilisateur ======

<source lang="javascript"> */

function lrcCreateHideUserLink(user, hidden, type, trID){
  var UnhideLinkText = (type ? lrcGetMediawikiMessage("show", true) : lrcMakeText("USER_UNHIDE_SHORT") );
  var HideLinkText = (type ? lrcGetMediawikiMessage("hide", true) : lrcMakeText("USER_HIDE_SHORT") );
  trID = (trID ? (','+lrcEscapeStrHTML(trID)) : '');
  var HiddenLinks = '<span>'
                    + '<span class="watchedLink" ' + (hidden ? '' : 'style="display:none;"') + '><a '
                    + (type ? "" : ' class="userhideLink" ')
                    + ' href="javascript:;" '
                    + ' onclick="LiveRC_HideUser('+lrcEscapeStrHTML(user)+', false'+trID+');'
                    + ' lrcToggleWatchLink(this);'
                    + ' return false;"'
                    + ' title="'+lrcGetMediawikiMessage("show")+' « '+user+' »" '
                    + '">'+UnhideLinkText+'</a></span>'
                    + '<span class="watchedLink" ' + (hidden ? 'style="display:none;"' : '' ) + '><a '
                    + (type ? "" : ' class="userhideLink" ')
                    + ' href="javascript:;" '
                    + ' onclick="LiveRC_HideUser('+lrcEscapeStrHTML(user)+', true'+trID+');'
                    + ' lrcToggleWatchLink(this);'
                    + ' return false;"'
                    + ' title="'+lrcGetMediawikiMessage("hide")+' « '+user+' »" '
                    + '">'+HideLinkText+'</a></span>'
                    + '</span>';
  return HiddenLinks;
}


function LiveRC_HideUser(uname, hide, trid) {
  var WLitem = LiveRC_Config["Hidden"][uname];
  var page = 'LiveRCHidden:' + uname;
  if (!WLitem && hide) {
    LiveRC_Config["Hidden"][uname] = new Object();
    LiveRC_Config["Hidden"][uname].ts = "--:--";
    LiveRC_Config["Hidden"][uname].pages = new Array();
    watchAPICall(page, true);
  } else if (WLitem && !hide) {
    watchAPICall(page, false);
    delete LiveRC_Config["Hidden"][uname];
  }
  if(trid == null) return;
  var tr = document.getElementById(trid);
  if(tr == null) return;
  if(hide){
    supprLigne(tr.id);
  }
}

/* </source>

===== Remise à zéro des <code>notificationtimestamp</code> =====

<source lang="javascript"> */

function RAZnotificationtimestamps(){
  for(var title in LiveRC_Config["Notificationtimestamp"]){
    var timestamp = LiveRC_Config["Notificationtimestamp"][title];
    if(!timestamp) continue;
    var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query'
            + '&prop=info&intoken=edit&inprop=notificationtimestamp'
            + '&titles='+encodeURIComponent(title);
    wpajax.http({ url: URL,
                onSuccess: RAZthisnotificationtimestamp,
                title: title,
                timestamp:timestamp,
    });
  }
}

function RAZthisnotificationtimestamp(Req, data){
  var title = data.title;
  var timestamp = data.timestamp;
  
  var Page = Req.responseXML.getElementsByTagName("page")[0];
  var notificationtimestamp = encodeURIComponent(Page.getAttribute("notificationtimestamp"));
  if(notificationtimestamp == timestamp) return;
  var EditParam = new Array();
  EditParam["token"] = Page.getAttribute("edittoken");
  EditParam["titles"] = title;
  EditParam["timestamp"] = timestamp;
  EditParam["converttitles"] = "1";
  var Params = new Array();
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  Params = Params.join("&");
  var headers = new Array();
  headers['Content-Type'] = 'application/x-www-form-urlencoded';
  wpajax.http({ url: wgServer + wgScriptPath + '/api.php?action=setnotificationtimestamp',
                  method: "POST", headers: headers,
                  onSuccess:RAZthisnotificationtimestampDone,
                  data: Params,
                  editparams:EditParam
  });
}

function RAZthisnotificationtimestampDone(Req, data){
  var title = data.editparams["titles"];
  var ts = data.editparams["timestamp"];
  var translatedts = tsToDate(ts)+' '+tsToHhMm(ts);
  lrcDisplayDebug("notificationtimestamp reset for page "+title+" done ("+translatedts+")");
  delete LiveRC_Config["Notificationtimestamp"][title];
}

/* </source>

==== Horloge ====

<source lang="javascript"> */

function lrcSetClocks(){
  var ClockSpanTitle = document.getElementById('ClockSpanTitle');
  if(ClockSpanTitle){
    ClockSpanTitle.className="RunningClock";
    var Link = ClockSpanTitle.parentNode;
    if(Link){
      Link.href= "javascript:lrcToggleClockState('ClockSpanTitle');";
      Link.title= lrcMakeText("CLOCKTITLE");
      lrcClockTimer("ClockSpanTitle");
    }
  }
}

function lrcClockTimer(ID){
  var Now = new Date();
  var Heures = Now.getHours();
  var Minutes = Now.getMinutes();
  var Secondes = Now.getSeconds();
  LiveRC_Config["ClockTime"]["H"] = Heures;
  LiveRC_Config["ClockTime"]["M"] = Minutes;
  LiveRC_Config["ClockTime"]["S"] = Secondes;
  if(ID){
    var ClockSpan = document.getElementById(ID);
    if(ClockSpan){
      if(hasClass(ClockSpan, "RunningClock")){
        ClockSpan.innerHTML =  (Heures < 10 ? '0' : '') + Heures + ':' + (Minutes < 10 ? '0' : '') + Minutes + ':' + (Secondes<10 ? '0' : '') + Secondes;
      }
    }
  }
  if(LiveRC_Config["Timeout"][("Clock_"+ID)]) clearTimeout(LiveRC_Config["Timeout"][("Clock_"+ID)]);
  LiveRC_Config["Timeout"][("Clock_"+ID)] = setTimeout("lrcClockTimer("+lrcEscapeStr(ID)+");", 1000);
}

function lrcToggleClockState(ID){
  var ClockSpan = document.getElementById(ID);
  if(!ClockSpan) return;
  if(hasClass(ClockSpan, "RunningClock")){
    removeClass(ClockSpan, "RunningClock");
    addClass(ClockSpan, "FrozenClock");
  }else{
    removeClass(ClockSpan, "FrozenClock");
    addClass(ClockSpan, "RunningClock");
  }
}

/* </source>

==== Zones de déplacement et redimensionnement ====

<source lang="javascript"> */

// Détermination du type de navigateur

function LiveRC_NavIsIE(){
     var agt=navigator.userAgent.toLowerCase();
     var is_ie = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
     return is_ie;
}

// Détermination de la hauteur de l'écran

function LiveRC_GetScreenHeight(){
     var ScreenHeight = 0;
     if( typeof( window.innerHeight ) == 'number' ) {
          ScreenHeight = parseInt(window.innerHeight);
     }else if( document.documentElement && document.documentElement.clientHeight ){
          ScreenHeight = parseInt(document.documentElement.clientHeight);
     }else if( document.body && document.body.clientHeight ){
          ScreenHeight = parseInt(document.body.clientHeight);
     }
     return ScreenHeight;
}

// Détermination de la largeur de l'écran

function LiveRC_GetScreenWidth(){
     var ScreenWidth = 0;
     if( typeof( window.innerWidth ) == 'number' ) {
          ScreenWidth = parseInt(window.innerWidth);
     }else if( document.documentElement && document.documentElement.clientWidth ){
          ScreenWidth = parseInt(document.documentElement.clientWidth);
     }else if( document.body && document.body.clientWidth ){
          ScreenWidth = parseInt(document.body.clientWidth);
     }
     return ScreenWidth;
}

// Détermination du positionnement de la souris

function LiveRC_GetMousePosition(event){
     if(LiveRC_NavIsIE()){
          var Mouse_X = parseInt( event.clientX + document.getElementsByTagName('body')[0].scrollLeft );
          var Mouse_Y = parseInt( event.clientY + document.getElementsByTagName('body')[0].scrollTop );
     }else{
          var Mouse_X = parseInt( event.clientX );
          var Mouse_Y = parseInt( event.clientY );
     }
     return {"X": Mouse_X, "Y": Mouse_Y};
}

// Mise en place d'une zone de déplacement

function LiveRC_SetMoveZone(anchorNode, elementsToMove){
     if((!anchorNode)||(!elementsToMove)) return;
     anchorNode.onmousedown=function(event) {
          if(!event) { event = window.event; }
          var PositionSouris = LiveRC_GetMousePosition(event);
          var PositionSouris_X = PositionSouris["X"];
          var PositionSouris_Y = PositionSouris["Y"];
          for(var a=0;a<elementsToMove.length;a++){
               elementsToMove[a].initialX = parseInt( PositionSouris_X - elementsToMove[a].offsetLeft);
               elementsToMove[a].initialY = parseInt( PositionSouris_Y - elementsToMove[a].offsetTop);
          }
          addClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
          document.getElementsByTagName('body')[0].onmousemove = function(event) {
               if(!event) { event = window.event; }
               PositionSouris = LiveRC_GetMousePosition(event);
               PositionSouris_X = PositionSouris["X"];
               PositionSouris_Y = PositionSouris["Y"];
               for(var a=0;a<elementsToMove.length;a++){
                    var Element = elementsToMove[a];
                    if(!Element) continue;
                    var PositionGauche = parseInt( PositionSouris_X ) - Element.initialX;
                    var PositionHaut = parseInt(PositionSouris_Y ) - Element.initialY;
                    Element.style.left = PositionGauche + 'px';
                    Element.style.top = PositionHaut + 'px';
                    Element.style.right = '';
                    Element.style.bottom = '';
               }
          }
          document.getElementsByTagName('body')[0].onmouseup=function(event){
               document.getElementsByTagName('body')[0].onmousemove = null;
               document.getElementsByTagName('body')[0].onmouseup = null;
               removeClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
          }
     }
     anchorNode.style.cursor = "move";
}

// Mise en place d'une zone de redimensionnement vertical

function LiveRC_SetVerticalResizeZone(anchorNode, ToResizeNodes, containerNode){
     if((!anchorNode)||(!ToResizeNodes)) return;
     anchorNode.onmousedown = function(event){
          if(!event) { event = window.event; }
          var positionSouris_Y = LiveRC_GetMousePosition(event)["Y"];
          var MaxHeight = LiveRC_GetScreenHeight();
          for(var a=0;a<ToResizeNodes.length;a++){
               ToResizeNodes[a].initialHeight = parseInt( (MaxHeight-positionSouris_Y) - ToResizeNodes[a].offsetHeight );
          }
          addClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
          document.getElementsByTagName('body')[0].onmousemove=function(event) {
               if(!event) { event = window.event; }
               var positionSouris_Y = LiveRC_GetMousePosition(event)["Y"];
               var MaxHeight = LiveRC_GetScreenHeight();
               var HeightLimit = false;
               for(var a=0;a<ToResizeNodes.length;a++){
                    var NewHeight = parseInt( (MaxHeight-positionSouris_Y) - ToResizeNodes[a].initialHeight );
                    if(NewHeight>MaxHeight) HeightLimit = true;
               }
               if(HeightLimit) return;
               for(var a=0;a<ToResizeNodes.length;a++){
                    var Element = ToResizeNodes[a];
                    if(!Element) continue;
                    var NewHeight = parseInt( (MaxHeight-positionSouris_Y) - Element.initialHeight );
                    NewHeight = (NewHeight>0 ? NewHeight : 1);
                    if(Element.tagName && (Element.tagName.toLowerCase()=="iframe" || Element.tagName.toLowerCase()=="img")){
                         Element.height = NewHeight;
                    }else{
                         Element.style.height = NewHeight + 'px';
                    }
               }
               lrcInitTableHeight();

          }
          document.getElementsByTagName('body')[0].onmouseup=function(event) {
               document.getElementsByTagName('body')[0].onmousemove = null;
               document.getElementsByTagName('body')[0].onmouseup = null;
               removeClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
          }
     }
     addClass(anchorNode, "LiveRC_MenuAnchor");
     addClass(containerNode, "LiveRC_MenuContainer");
     anchorNode.style.cursor = "n-resize";
}

// Mise en place d'une zone de redimensionnement total

function LiveRC_SetTotalResizeZone(anchorNode, elementsToResize, Container){
  if((!anchorNode)||(!elementsToResize)) return;
  if(!LiveRC_Config["TotalResize"]) LiveRC_Config["TotalResize"] = new Array();
  var ID = Container.id;
  if(!ID) return;
  LiveRC_Config["TotalResize"][ID] = new Array();
  LiveRC_Config["TotalResize"][ID].initialWidthDiffs = new Array();
  LiveRC_Config["TotalResize"][ID].initialHeightDiffs  = new Array();
  for(var a=0;a<elementsToResize.length;a++){
    var element = elementsToResize[a];
    LiveRC_Config["TotalResize"][ID].initialWidthDiffs[a] = ( Container.offsetWidth - element.offsetWidth );
    LiveRC_Config["TotalResize"][ID].initialHeightDiffs[a] = ( Container.offsetHeight - element.offsetHeight );
  }
  anchorNode.onmousedown = function(event){
    if(!event) { event = window.event; }
    var PositionSouris = LiveRC_GetMousePosition(event);
    var PositionSouris_X = PositionSouris["X"];
    var PositionSouris_Y = PositionSouris["Y"];
    Container.initialWidth = ( PositionSouris_X - Container.offsetWidth ) ;
    Container.initialHeight = ( PositionSouris_Y - Container.offsetHeight ) ;
    Container.style.top = Container.offsetTop + 'px';
    Container.style.left = Container.offsetLeft + 'px';
    Container.style.right = '';
    Container.style.bottom = '';
    addClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
    document.getElementsByTagName('body')[0].onmousemove=function(event) {
      if(!event) { event = window.event; }
      var PositionSouris = LiveRC_GetMousePosition(event);
      var PositionSouris_X = PositionSouris["X"];
      var PositionSouris_Y = PositionSouris["Y"];
      var NewWidth = ( PositionSouris_X - Container.initialWidth );
      var NewHeight = ( PositionSouris_Y - Container.initialHeight );    
      Container.style.width = parseInt( NewWidth ) + 'px';
      Container.style.height = parseInt( NewHeight ) + 'px';
      for(var a=0;a<elementsToResize.length;a++){
        var Element = elementsToResize[a];
        if(!Element) continue;
        var NewElementWidth = parseInt( NewWidth - LiveRC_Config["TotalResize"][(Container.id)].initialWidthDiffs[a] );
        var NewElementHeight = parseInt( NewHeight - LiveRC_Config["TotalResize"][(Container.id)].initialHeightDiffs[a] );
        NewElementWidth = (NewElementWidth > 0 ? NewElementWidth : 1);
        NewElementHeight = (NewElementHeight > 0 ? NewElementHeight : 1);
        if(Element.tagName && (Element.tagName.toLowerCase()=="iframe" || Element.tagName.toLowerCase()=="img")){
          Element.width  = NewElementWidth + 'px';
          Element.height = NewElementHeight + 'px';
        }else{
          Element.style.width  = NewElementWidth + 'px';
          Element.style.height = NewElementHeight + 'px';
        }
      }
    }
    document.getElementsByTagName('body')[0].onmouseup=function(event) {
      document.getElementsByTagName('body')[0].onmousemove = null;
      document.getElementsByTagName('body')[0].onmouseup = null;
      removeClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
    }
  }
  anchorNode.style.cursor = "se-resize";
}

/* </source>

==== Suggestions ====

<source lang="javascript"> */

function LiveRC_Suggest_UpDateLabel(InputNode, NewID){
     var OldId = InputNode.id;
     var TheNode = InputNode.parentNode;
     if(!OldId || !TheNode) return;   
     var Labels = TheNode.getElementsByTagName('label');
     for(var a=0,l=Labels.length;a<l;a++){
          var For = Labels[a].getAttribute("for");
          if(For){
               if(For == OldId){
                    Labels[a].setAttribute("for", NewID);
                    return;
               }
          }
     }
}
 
function LiveRC_Suggest_GetSuggestionIndex( Element ){
    return parseInt(Element.id.replace(/[^0-9]/g, ""));
}

function LiveRC_Suggest_ucFirst(Text, Namespace) {
    if(LiveRC_Config["MediawikiNamespaces"][Namespace]["case"] === "first-letter"){
        Text = Text.substr(0,1).toUpperCase() + Text.substr(1,Text.length);
    }
    return Text;
}

/* </source>

===== Suggestions de page =====

<source lang="javascript"> */

function LiveRC_Suggest_AddPageSuggestion(Args){
     if(!Args) return;
     var InputNode = Args["InputNode"];
     if(!InputNode) return;
     var GlobalIndex = LiveRC_Config["SuggestParams"]["Index"]++;
     var NSFilter = (Args["NSFilter"] ? Args["NSFilter"] : LiveRC_Config["SuggestParams"]["NSFilter"][0] );
     var StripNS = (Args["StripNS"] ? Args["StripNS"] : LiveRC_Config["SuggestParams"]["StripNS"][0] );
     var SuggestLimit = (Args["SuggestLimit"] ? Args["SuggestLimit"] : LiveRC_Config["SuggestParams"]["SuggestLimit"][0] );
     var SuggestListSize = (Args["SuggestListSize"] ? Args["SuggestListSize"] : LiveRC_Config["SuggestParams"]["SuggestSelectLimit"][0] );
     var AddExist = (Args["AddExist"] ? Args["AddExist"] : LiveRC_Config["SuggestParams"]["AddExist"][0] );
     var ListDown = (Args["ListDown"] ? Args["ListDown"] : LiveRC_Config["SuggestParams"]["ListDown"][0]);
     var Prefix = (Args["Prefix"] ? Args["Prefix"] : LiveRC_Config["SuggestParams"]["Prefix"][0]);
     var Suffix = (Args["Suffix"] ? Args["Suffix"] : LiveRC_Config["SuggestParams"]["Suffix"][0]);
     var RedirectFilter = (Args["RedirectFilter"] ? Args["RedirectFilter"] : LiveRC_Config["SuggestParams"]["RedirectFilter"][0]);
     LiveRC_Suggest_UpDateLabel(InputNode, "InputWithSuggestion_"+GlobalIndex);
     InputNode.id = "InputWithSuggestion_"+GlobalIndex;
     var ExistInputNode = document.createElement("input");
     ExistInputNode.type = "hidden";
     ExistInputNode.id = "ThisPageExist_"+GlobalIndex;
     ExistInputNode.value = "0";
     InputNode.parentNode.insertBefore(ExistInputNode, InputNode.nextSibling);
     if(AddExist===true){
          var ExistImgNode = document.createElement("span");
          ExistImgNode.id = "ThisPageExistIMG_"+GlobalIndex;
          ExistImgNode.className = "SuggestionExist";
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestNoExistIcon").split("$1").join("").split("  ").join(" ");
          InputNode.parentNode.insertBefore(ExistImgNode, InputNode.nextSibling);
     }
     var SelectNode = document.createElement('select');
     SelectNode.id = "SuggestionForInput_"+GlobalIndex
     SelectNode.style.display = "none";
     SelectNode.className = "SuggestionList";
     InputNode.parentNode.insertBefore(SelectNode, InputNode.nextSibling);
     LiveRC_Config["SuggestParams"]["Input"][GlobalIndex] = InputNode;
     LiveRC_Config["SuggestParams"]["Suggest"][GlobalIndex] = SelectNode;
          LiveRC_Config["SuggestParams"]["ExistInput"][GlobalIndex] = ExistInputNode;
     if(AddExist===true){
          LiveRC_Config["SuggestParams"]["ExistImg"][GlobalIndex] = ExistImgNode;
     }
     LiveRC_Config["SuggestParams"]["NSFilter"][GlobalIndex] = NSFilter;
     if(!NSFilter) StripNS = false;
     if(Prefix){
          if(NSFilter){
               var ThisNamespaceName = lrcGetNamespaceName(NSFilter);
               var Match = new RegExp("^"+ThisNamespaceName+":", "ig");
               if(Prefix.match(Match)!=null){
                    Prefix = Prefix.substring((ThisNamespaceName=="" ? "" : ThisNamespaceName+":").length, Prefix.length);
               }
               StripNS = true;
          }
     }
     LiveRC_Config["SuggestParams"]["StripNS"][GlobalIndex] = StripNS;
     LiveRC_Config["SuggestParams"]["Prefix"][GlobalIndex] = Prefix;
     LiveRC_Config["SuggestParams"]["Suffix"][GlobalIndex] = Suffix;
     LiveRC_Config["SuggestParams"]["SuggestLimit"][GlobalIndex] = SuggestLimit;
     LiveRC_Config["SuggestParams"]["SuggestSelectLimit"][GlobalIndex] = SuggestListSize;
     LiveRC_Config["SuggestParams"]["ListDown"][GlobalIndex] = ListDown;
     LiveRC_Config["SuggestParams"]["AddExist"][GlobalIndex] = AddExist;
     LiveRC_Config["SuggestParams"]["RedirectFilter"][GlobalIndex] = RedirectFilter;
     LiveRC_Config["SuggestParams"]["IsRunning"][GlobalIndex] = false;
     InputNode.onkeyup = function(){
          var ThisIndex = LiveRC_Suggest_GetSuggestionIndex(this);
          LiveRC_Suggest_GetPageSuggestions(ThisIndex);
     }
     return GlobalIndex;
} 

function LiveRC_Suggest_GetPageSuggestions(Index){
     var IsRunning = LiveRC_Config["SuggestParams"]["IsRunning"][Index];
     if(IsRunning===true) return; 
     var NamespaceFilter = LiveRC_Config["SuggestParams"]["NSFilter"][Index];
     var StripNamespace = LiveRC_Config["SuggestParams"]["StripNS"][Index];
     var Limit = LiveRC_Config["SuggestParams"]["SuggestLimit"][Index];
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     var Prefix = LiveRC_Config["SuggestParams"]["Prefix"][Index];
     var Suffix = LiveRC_Config["SuggestParams"]["Suffix"][Index];
     var RedirectFilter = LiveRC_Config["SuggestParams"]["RedirectFilter"][Index];
     var Page = Input.value;
     if(Page===""){
          Select.style.display = "none";
          return;
     }
     var ValueNamespace = (NamespaceFilter ? NamespaceFilter : getNamespaceInfoFromPage(Prefix+Page));
     var ValuePageName = getNamespaceInfoFromPage(Page, "PageName");
     if(StripNamespace && NamespaceFilter && !Prefix){
          var ThisNamespaceName = lrcGetNamespaceName(NamespaceFilter);
          var Match = new RegExp("^"+ThisNamespaceName+":", "ig");
          if(Page.match(Match)!=null){ Page = ValuePageName; }
          var ThisCanonicalNamespaceName = lrcGetNamespaceName(NamespaceFilter, true);
          var CanonicalMatch = new RegExp("^"+ThisCanonicalNamespaceName+":", "ig");
          if(Page.match(CanonicalMatch)!=null){ Page = LiveRC_Suggest_ucFirst(ValuePageName, NamespaceFilter); }
          Input.value = LiveRC_Suggest_ucFirst(Page, NamespaceFilter);
     }else if(Prefix && NamespaceFilter){
          Match = new RegExp("^"+Prefix, "ig");
          if(Page.match(Match)!=null){
               Page = Page.substring(Prefix.length, Page.length);
          }
          Page = Prefix+Page;
     }else if(Prefix && !NamespaceFilter){
          ValueNamespace = getNamespaceInfoFromPage((Prefix+Page),"NamespaceNumber");
          Page = getNamespaceInfoFromPage((Prefix+Page), "PageName");
     }else if(!Prefix && !NamespaceFilter){
          ValueNamespace = getNamespaceInfoFromPage(Page,"NamespaceNumber");
          Page = getNamespaceInfoFromPage(Page, "PageName");
          Input.value = LiveRC_Suggest_ucFirst(Page, ValueNamespace);
     }
     LiveRC_Config["SuggestParams"]["IsRunning"][Index] = true;
     var APILimit = LiveRC_Config["UserInfos"].APIlimit;
     if(Limit>APILimit) Limit = APILimit;
     var URL =  wgServer + wgScriptPath + "/api.php?format=xml&action=query&list=allpages"
              + "&apnamespace=" + ValueNamespace
              + "&apprefix=" + encodeURIComponent(Page)
              + "&apfilterredir=" + RedirectFilter
              + "&aplimit=" + Limit;
     wpajax.http({url:URL,
                  onSuccess:LiveRC_Suggest_GetPageSuggestionsDone, 
                  index: Index
     });
}

function LiveRC_Suggest_GetPageSuggestionsDone(Req, data){
     var Index = data.index;
     var NamespaceFilter = LiveRC_Config["SuggestParams"]["NSFilter"][Index];
     var StripNamespace = LiveRC_Config["SuggestParams"]["StripNS"][Index];
     var Limit = LiveRC_Config["SuggestParams"]["SuggestLimit"][Index];
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     var Prefix = LiveRC_Config["SuggestParams"]["Prefix"][Index];
     var Suffix = LiveRC_Config["SuggestParams"]["Suffix"][Index];
     var RedirectFilter = LiveRC_Config["SuggestParams"]["RedirectFilter"][Index];
     var xml = Req.responseXML ;
     if ( xml == null ) return ;
     var titles = new Array () ;
     var pages = xml.getElementsByTagName("p") ;
     for(var i=0;i<pages.length;i++){
          var s = pages[i].getAttribute("title");
          if(Suffix){
               var Reg = new RegExp(Suffix+"$", "g")
               if(s.match(Reg)==null) continue;
          }
          if(StripNamespace){
               var ThisNamespaceName = lrcGetNamespaceName(NamespaceFilter);
               var Match = new RegExp("^"+ThisNamespaceName+":", "ig");
               if(s.match(Match)!=null){
                    s = getNamespaceInfoFromPage(s, "PageName");
               }
               var CanonicalThisNamespaceName = lrcGetNamespaceName(NamespaceFilter, true);
               var Cani=onicalMatch = new RegExp("^"+CanonicalThisNamespaceName+":", "ig");
               if(s.match(Cani=onicalMatch)!=null){
                    s = getNamespaceInfoFromPage(s, "PageName");
               }
          }
          if(Prefix){
               s = s.substring(s.indexOf(Prefix)+Prefix.length, s.length);
          }
          if(titles.indexOf(s)==-1) titles.push(s);
     }
     LiveRC_Config["SuggestParams"]["IsRunning"][Index] = false;
     LiveRC_Suggest_ShowPageSuggestions(titles, Index);
}

function LiveRC_Suggest_ShowPageSuggestions(titles, Index){
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     var ExistInputNode = LiveRC_Config["SuggestParams"]["ExistInput"][Index];
     var ExistImgNode = LiveRC_Config["SuggestParams"]["ExistImg"][Index];
     var ListDown = LiveRC_Config["SuggestParams"]["ListDown"][Index];
     var NamespaceFilter = LiveRC_Config["SuggestParams"]["NSFilter"][Index];
     var Prefix = LiveRC_Config["SuggestParams"]["Prefix"][Index];
     var TheNamespace = "";
     if(NamespaceFilter!==false){
          TheNamespace = lrcGetNamespaceName(NamespaceFilter);
          TheNamespace = (TheNamespace ==="" ? "" : TheNamespace+":");
     }
     if(Prefix){
          TheNamespace += Prefix;
     }
     var CurrentValue = Input.value;
     if(ExistInputNode) ExistInputNode.value = "0";
     if(ExistImgNode){
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestNoExistIcon").split("$1").join(TheNamespace+CurrentValue);
     }
     if(titles.length==0){
          Select.style.display = "none" ;
          Input.title = ""; 
          return;
     }
     Select.style.display = "inline" ;
     if(ExistInputNode) ExistInputNode.value = "1";
     if(ExistImgNode){
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestExistIcon").split("$1").join(TheNamespace+CurrentValue);
     }
     if(titles[0]===Input.value){
          Select.style.display = "none" ;
          Input.title = ""; 
          return;
     }
     var TailleListe = LiveRC_Config["SuggestParams"]["SuggestSelectLimit"][Index];
     if (titles.length < TailleListe ) TailleListe = titles.length;
     Select.size = TailleListe ;
     Select.style.align = "left" ;
     Select.style.zIndex = LiveRC_Config["SuggestParams"]["ZIndex"]++ ;
     Select.style.position = "relative" ;
     Select.style.width = Input.offsetWidth + "px" ;
     Select.style.height = (TailleListe * 20) + "px" ;
     while(Select.firstChild) Select.removeChild(Select.firstChild);
     for ( var i = 0 ; i < titles.length ; i++ ) {
          var opt = document.createElement("option");
          var ot = document.createTextNode(titles[i]);
          opt.appendChild(ot) ;
          opt.value = titles[i];
          Select.appendChild(opt) ;
     }
     Select.onkeyup = LiveRC_Suggest_ReplacePageSuggestionsKeyPress;
     Select.onclick = LiveRC_Suggest_ReplacePageSuggestions;
     if(ListDown){
          Select.style.top = parseInt(Input.offsetHeight) + "px";
          Select.style.marginBottom = "-" + ((TailleListe * 20) + parseInt(Input.offsetHeight)) + "px" ;
     }else{
          Select.style.marginTop = "-" + (TailleListe * 20) + "px" ;
     }
     Select.style.marginLeft = "-" + Input.offsetWidth + "px" ;
     var suggestion = titles[0] ;
     if(suggestion.match(new RegExp("^"+CurrentValue))==null){
          LiveRC_Suggest_GetPageSuggestions(Index);
          return;
     }
     var StripNamespace = LiveRC_Config["SuggestParams"]["StripNS"][Index];
     var CurrentValueLength = CurrentValue.length;
     if(StripNamespace){
          var NamespaceName = getNamespaceInfoFromPage(CurrentValue,"NamespaceName");
          NamespaceName = ( NamespaceName==="" ? "" : NamespaceName+":");
          if(NamespaceName==TheNamespace){
               CurrentValueLength = getNamespaceInfoFromPage(CurrentValue,"PageName").length + TheNamespace.length;
          }
     }else if(NamespaceFilter!==false && !Prefix){
          var NamespaceName = getNamespaceInfoFromPage(CurrentValue,"NamespaceName");
          NamespaceName = ( NamespaceName==="" ? "" : NamespaceName+":");
          if(NamespaceName==TheNamespace){
               CurrentValueLength = getNamespaceInfoFromPage(CurrentValue,"PageName").length + TheNamespace.length;
          }else{
               CurrentValueLength = CurrentValueLength  + TheNamespace.length;
          }
     }
     //alert("CurrentValueLength : "+CurrentValueLength+"\nsuggestion.length : "+suggestion.length);
     Input.value = suggestion;
     Input.title = TheNamespace + suggestion;
     if (Input.createTextRange) {
          var ra = Input.createTextRange();
          ra.moveStart("character", CurrentValueLength);
          ra.moveEnd("character", suggestion.length);
          ra.select();
     } else if( Input.setSelectionRange ) {
          Input.setSelectionRange( CurrentValueLength, suggestion.length );
     } else {
          Input.selectionStart = CurrentValueLength;
          Input.selectionEnd = suggestion.length ;
     }
     if(ExistImgNode){
          CurrentValue = Input.value;
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestExistIcon").split("$1").join(TheNamespace+CurrentValue);
     }
}
 
function LiveRC_Suggest_ReplacePageSuggestionsKeyPress(e){
     if (!e) var e = window.event;
     if (e.keyCode != 13) return;
     LiveRC_Suggest_ReplacePageSuggestions();
}
  
function LiveRC_Suggest_ReplacePageSuggestions(){
     var Index = LiveRC_Suggest_GetSuggestionIndex(this);
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     if(!Input|| !Select) return;
     var NamespaceFilter = LiveRC_Config["SuggestParams"]["NSFilter"][Index];
     var Prefix = LiveRC_Config["SuggestParams"]["Prefix"][Index];
     var TheNamespace = "";
     if(NamespaceFilter){
          TheNamespace = lrcGetNamespaceName(NamespaceFilter);
          TheNamespace = (TheNamespace ==="" ? "" : TheNamespace+":");
     }
     if(Prefix){
          TheNamespace += Prefix;
     }
     Select.style.zIndex = LiveRC_Config["SuggestParams"]["ZIndex"]++ ;
     var Options = Select.getElementsByTagName('option');
     for(var a=0;a<Options.length;a++){
          if(Options[a].selected){
            Input.value = Options[a].value;
            Input.title = TheNamespace+Options[a].value;
            Input.focus();
            LiveRC_Suggest_GetPageSuggestions(Index);
            return;
        }
    }
}

/* </source>

===== Suggestions d'utilisateur =====

<source lang="javascript"> */

function LiveRC_Suggest_AddUserSuggestion(Args){
     if(!Args) return;
     var InputNode = Args["InputNode"];
     if(!InputNode) return;
     var GlobalIndex = LiveRC_Config["SuggestParams"]["Index"]++;
     var SuggestLimit = (Args["SuggestLimit"] ? Args["SuggestLimit"] : LiveRC_Config["SuggestParams"]["SuggestLimit"][0] );
     var SuggestListSize = (Args["SuggestListSize"] ? Args["SuggestListSize"] : LiveRC_Config["SuggestParams"]["SuggestSelectLimit"][0] );
     var AddExist = (Args["AddExist"] ? Args["AddExist"] : LiveRC_Config["SuggestParams"]["AddExist"][0] );
     var ListDown = (Args["ListDown"] ? Args["ListDown"] : LiveRC_Config["SuggestParams"]["ListDown"][0]);
     LiveRC_Suggest_UpDateLabel(InputNode, "InputWithSuggestion_"+GlobalIndex);
     InputNode.id = "InputWithSuggestion_"+GlobalIndex;
     var ExistInputNode = document.createElement("input");
     ExistInputNode.type = "hidden";
     ExistInputNode.id = "ThisPageExist_"+GlobalIndex;
     ExistInputNode.value = "0";
     InputNode.parentNode.insertBefore(ExistInputNode, InputNode.nextSibling);
     if(AddExist===true){
          var ExistImgNode = document.createElement("span");
          ExistImgNode.id = "ThisPageExistIMG_"+GlobalIndex;
          ExistImgNode.className = "SuggestionExist";
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestNoExistIcon").split("$1").join("").split("  ").join(" ");
          InputNode.parentNode.insertBefore(ExistImgNode, InputNode.nextSibling);
     }
     var SelectNode = document.createElement('select');
     SelectNode.id = "SuggestionForInput_"+GlobalIndex
     SelectNode.style.display = "none";
     SelectNode.className = "SuggestionList";
     InputNode.parentNode.insertBefore(SelectNode, InputNode.nextSibling);
     LiveRC_Config["SuggestParams"]["Input"][GlobalIndex] = InputNode;
     LiveRC_Config["SuggestParams"]["Suggest"][GlobalIndex] = SelectNode;
          LiveRC_Config["SuggestParams"]["ExistInput"][GlobalIndex] = ExistInputNode;
     if(AddExist===true){
          LiveRC_Config["SuggestParams"]["ExistImg"][GlobalIndex] = ExistImgNode;
     }
     LiveRC_Config["SuggestParams"]["NSFilter"][GlobalIndex] = NSFilter;
     if(!NSFilter) StripNS = false;
     if(Prefix){
          if(NSFilter){
               var ThisNamespaceName = lrcGetNamespaceName(NSFilter);
               var Match = new RegExp("^"+ThisNamespaceName+":", "ig");
               if(Prefix.match(Match)!=null){
                    Prefix = Prefix.substring((ThisNamespaceName=="" ? "" : ThisNamespaceName+":").length, Prefix.length);
               }
               StripNS = true;
          }
     }
     LiveRC_Config["SuggestParams"]["SuggestLimit"][GlobalIndex] = SuggestLimit;
     LiveRC_Config["SuggestParams"]["SuggestSelectLimit"][GlobalIndex] = SuggestListSize;
     LiveRC_Config["SuggestParams"]["ListDown"][GlobalIndex] = ListDown;
     LiveRC_Config["SuggestParams"]["AddExist"][GlobalIndex] = AddExist;
     LiveRC_Config["SuggestParams"]["IsRunning"][GlobalIndex] = false;
     InputNode.onkeyup = function(){
          var ThisIndex = LiveRC_Suggest_GetSuggestionIndex(this);
          LiveRC_Suggest_GetUserSuggestions(ThisIndex);
     }
     return GlobalIndex;
} 

function LiveRC_Suggest_GetUserSuggestions(Index){
     var IsRunning = LiveRC_Config["SuggestParams"]["IsRunning"][Index];
     if(IsRunning===true) return; 
     var Limit = LiveRC_Config["SuggestParams"]["SuggestLimit"][Index];
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     var Page = Input.value;
     if(Page===""){
          Select.style.display = "none";
          return;
     }
     LiveRC_Config["SuggestParams"]["IsRunning"][Index] = true;
     var APILimit = LiveRC_Config["UserInfos"].APIlimit;
     if(Limit>APILimit) Limit = APILimit;
     var URL =  wgServer + wgScriptPath
            + "/api.php?format=xml&action=query&list=allusers"
            + "&auprefix=" + encodeURIComponent(Page)
            + "&aulimit=" + Limit;
     wpajax.http({url:URL,
                  onSuccess:LiveRC_Suggest_GetUserSuggestionsDone, 
                  index: Index
     });
}

function LiveRC_Suggest_GetUserSuggestionsDone(Req, data){
     var Index = data.index;
     var xml = Req.responseXML ;
     if ( xml == null ) return ;
     var titles = new Array () ;
     var pages = xml.getElementsByTagName("u") ;
     for(var i=0;i<pages.length;i++){
          var s = pages[i].getAttribute("name");
        if(titles.indexOf(s)==-1) titles.push(s);
     }
     LiveRC_Config["SuggestParams"]["IsRunning"][Index] = false;
     LiveRC_Suggest_ShowUserSuggestions(titles, Index);
}

function LiveRC_Suggest_ShowUserSuggestions(titles, Index){
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     var ExistInputNode = LiveRC_Config["SuggestParams"]["ExistInput"][Index];
     var ExistImgNode = LiveRC_Config["SuggestParams"]["ExistImg"][Index];
     var ListDown = LiveRC_Config["SuggestParams"]["ListDown"][Index];
     var TailleListe = LiveRC_Config["SuggestParams"]["SuggestSelectLimit"][Index];

     var CurrentValue = Input.value;
     if(ExistInputNode) ExistInputNode.value = "0";
     if(ExistImgNode){
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestNoExistIcon").split("$1").join(CurrentValue);
     }
     if(titles.length==0){
          Select.style.display = "none" ;
          Input.title = ""; 
          return;
     }
     Select.style.display = "inline" ;
     if(ExistInputNode) ExistInputNode.value = "1";
     if(ExistImgNode){
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestExistIcon").split("$1").join(TCurrentValue);
     }
     if(titles[0]===Input.value){
          Select.style.display = "none" ;
          Input.title = ""; 
          return;
     }
     if (titles.length < TailleListe ) TailleListe = titles.length;
     Select.size = TailleListe ;
     Select.style.align = "left" ;
     Select.style.zIndex = LiveRC_Config["SuggestParams"]["ZIndex"]++ ;
     Select.style.position = "relative" ;
     Select.style.width = Input.offsetWidth + "px" ;
     Select.style.height = (TailleListe * 20) + "px" ;
     while(Select.firstChild) Select.removeChild(Select.firstChild);
     for ( var i = 0 ; i < titles.length ; i++ ) {
          var opt = document.createElement("option");
          var ot = document.createTextNode(titles[i]);
          opt.appendChild(ot) ;
          opt.value = titles[i];
          Select.appendChild(opt) ;
     }
     Select.onkeyup = LiveRC_Suggest_ReplaceUserSuggestionsKeyPress;
     Select.onclick = LiveRC_Suggest_ReplaceUserSuggestions;
     if(ListDown){
          Select.style.top = parseInt(Input.offsetHeight) + "px";
          Select.style.marginBottom = "-" + ((TailleListe * 20) + parseInt(Input.offsetHeight)) + "px" ;
     }else{
          Select.style.marginTop = "-" + (TailleListe * 20) + "px" ;
     }
     Select.style.marginLeft = "-" + Input.offsetWidth + "px" ;
     var suggestion = titles[0] ;
     if(suggestion.match(new RegExp("^"+CurrentValue))==null){
          LiveRC_Suggest_GetUserSuggestions(Index);
          return;
     }
     var CurrentValueLength = CurrentValue.length;
     Input.value = suggestion;
     Input.title = lrcGetNamespaceName(2, true)+":"+suggestion;
     if (Input.createTextRange) {
          var ra = Input.createTextRange();
          ra.moveStart("character", CurrentValueLength);
          ra.moveEnd("character", suggestion.length);
          ra.select();
     } else if( Input.setSelectionRange ) {
          Input.setSelectionRange( CurrentValueLength, suggestion.length );
     } else {
          Input.selectionStart = CurrentValueLength;
          Input.selectionEnd = suggestion.length ;
     }
     if(ExistImgNode){
          CurrentValue = Input.value;
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestExistIcon").split("$1").join(suggestion);
     }
}
 
function LiveRC_Suggest_ReplaceUserSuggestionsKeyPress(e){
     if (!e) var e = window.event;
     if (e.keyCode != 13) return;
     LiveRC_Suggest_ReplaceUserSuggestions();
}
  
function LiveRC_Suggest_ReplaceUserSuggestions(){
     var Index = LiveRC_Suggest_GetSuggestionIndex(this);
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     if(!Input|| !Select) return;
     Select.style.zIndex = LiveRC_Config["SuggestParams"]["ZIndex"]++ ;
     var Options = Select.getElementsByTagName('option');
     for(var a=0;a<Options.length;a++){
          if(Options[a].selected){
            Input.value = Options[a].value;
            Input.title = lrcGetNamespaceName(2, true)+":"+Options[a].value;
            Input.focus();
            LiveRC_Suggest_GetUserSuggestions(Index);
            return;
        }
    }
}

/* </source>

==== Boîtes pop-up ====

<source lang="javascript"> */

function LiveRC_CreateNewAlert(){
  var Alert = document.getElementById("LiveRCAlert");
  if(!Alert){
    var Target = document.getElementById("LiveRCContainer");
    if(!Target) Target = document.body;
    if(!Target) return;
    Alert = document.createElement('ul');
    Alert.id = "LiveRCAlert";
    addClass(Alert, "error");
    Target.insertBefore(Alert, Target.firstChild);
  }
  Alert.style.maxWidth = Math.round(LiveRC_GetScreenWidth()/2) + "px";
  Alert.style.minWidth = Math.round(LiveRC_GetScreenWidth()/4) + "px";
  LiveRC_Config["AlertCount"]++
  var Lis = Alert.getElementsByTagName('li');
  var index = LiveRC_Config["AlertCount"];
  var id = "LiveRCAlert_"+index;
  var NewLi = document.createElement('li');
  NewLi.id = id;
  addClass(NewLi, "LiveRC_Opacity_100");
  Alert.appendChild(NewLi);
  return NewLi;
}

/* </source>

===== prompt =====

<source lang="javascript"> */

function LiveRC_prompt(text, onOK, onCancel, suggestion){
  if(!text) return;
  if(!suggestion) suggestion = '';
  text = text.split("\n").join("");
  var NewLi = LiveRC_CreateNewAlert();
  var id = NewLi.id;
  var Fieldset = document.createElement('fieldset');
  NewLi.appendChild(Fieldset);
  var Ptext = document.createElement('p');
  Ptext.className = "AlertText";
  Ptext.innerHTML = text;
  Fieldset.appendChild(Ptext);
  var Psuggest = document.createElement('input');
  Psuggest.id = id+"_AlertSuggest";
  Psuggest.type = "text";
  Psuggest.className = "AlertSuggest";
  if(suggestion) Psuggest.value = suggestion;
  Fieldset.appendChild(Psuggest);
  var Pbuttons = document.createElement('p');
  var OKInput = document.createElement('input');
  OKInput.type = "button";
  OKInput.value = lrcMakeText("OK");
  var OKFunction = function(){
    var SuggestInput = document.getElementById(id+"_AlertSuggest");
    if(typeof(onOK)==="function" && SuggestInput) onOK(SuggestInput.value); 
    NewLi.parentNode.removeChild(NewLi);
    return false; 
  } 
  OKInput.onclick = OKFunction;
  OKInput.onselect = OKFunction;
  Pbuttons.appendChild(OKInput);
  var CancelInput = document.createElement('input');
  CancelInput.type = "button";
  CancelInput.value = lrcMakeText("Cancel");
  var CancelFunction = function(){
    var SuggestInput = document.getElementById(id+"_AlertSuggest");
    if(typeof(onCancel)==="function" && SuggestInput) onCancel(SuggestInput.value); 
    NewLi.parentNode.removeChild(NewLi);
    return false; 
  } 
  CancelInput.onclick = CancelFunction;
  CancelInput.onselect = CancelFunction;
  Pbuttons.appendChild(CancelInput);
  NewLi.appendChild(Pbuttons);
  Psuggest.focus();
  return NewLi;
}

/* </source>

===== confirm =====

<source lang="javascript"> */

function LiveRC_confirm(text, onOK, onCancel){
  if(!text) return;
  text = text.split("\n").join("");
  var NewLi = LiveRC_CreateNewAlert();
  var Fieldset = document.createElement('fieldset');
  NewLi.appendChild(Fieldset);
  var Ptext = document.createElement('p');
  Ptext.className = "AlertText";
  Ptext.innerHTML = text;
  Fieldset.appendChild(Ptext);
  var Pbuttons = document.createElement('p');
  var OKInput = document.createElement('input');
  OKInput.type = "button";
  OKInput.value = lrcMakeText("OK");
  var OKFunction = function(){
    if(typeof(onOK)==="function") onOK(); 
    NewLi.parentNode.removeChild(NewLi);
    return false; 
  } 
  OKInput.onclick = OKFunction;
  OKInput.onselect = OKFunction;
  Pbuttons.appendChild(OKInput);
  var CancelInput = document.createElement('input');
  CancelInput.type = "button";
  CancelInput.value = lrcMakeText("Cancel");
  var CancelFunction = function(){
    if(typeof(onCancel)==="function") onCancel(); 
    NewLi.parentNode.removeChild(NewLi);
    return false; 
  } 
  CancelInput.onclick = CancelFunction;
  CancelInput.onselect = CancelFunction;
  Pbuttons.appendChild(CancelInput);
  NewLi.appendChild(Pbuttons);
  OKInput.focus();
  return NewLi;
}

/* </source>

===== alert =====

<source lang="javascript"> */

function LiveRC_alert(text){
  if(!text) return;
  var NewLi = LiveRC_CreateNewAlert();
  var id = NewLi.id;
  NewLi.innerHTML = text.split("\n").join("");
  NewLi.onmouseover = function(){ 
    LiveRC_alert_stopOpacity(this.id); 
  };
  NewLi.onmouseout = function(){ 
    LiveRC_Config["Timeout"][this.id] = setTimeout("LiveRC_alert_setOpacity("+lrcEscapeStr(this.id)+");", 500); 
  };
  LiveRC_Config["Timeout"][id] = setTimeout("LiveRC_alert_setOpacity("+lrcEscapeStr(id)+");", 3000);
  return NewLi;
}

function LiveRC_alert_setOpacity(id){
  var Element = document.getElementById(id);
  if(!Element || !Element.className) return;
  var ElClass = Element.className.match(/LiveRC_Opacity_[0-9]*/);
  if(ElClass==null) return;
  var Opacity = parseInt(ElClass[0].replace(/\D/g, ""));
  if(typeof(Opacity)!="number") return;
  var NewOpacity = (Opacity-5);
  if(NewOpacity < 1){
    Element.parentNode.removeChild(Element);
    return;
  }
  Element.className = Element.className.replace(ElClass[0], "LiveRC_Opacity_"+NewOpacity);
  clearTimeout(LiveRC_Config["Timeout"][id]);
  LiveRC_Config["Timeout"][id] = setTimeout("LiveRC_alert_setOpacity("+lrcEscapeStr(id)+");", 75);
}

function LiveRC_alert_stopOpacity(id){
  var Element = document.getElementById(id);
  if(!Element || !Element.className) return;
  var ElClass = Element.className.match(/LiveRC_Opacity_[0-9]*/);
  if(ElClass==null) return;
  Element.className = Element.className.replace(ElClass[0], "LiveRC_Opacity_100");
  LiveRC_Config["Timeout"][id] = clearTimeout(LiveRC_Config["Timeout"][id]);
}

/* </source>

==== Module de gestion des variables ====

===== Récupération de la page de paramétrage =====

<source lang=javascript> */

// Récupération oldid de la page de paramétrage

function liveOldPersonalJS(){
    lrcDisplayDebug("Get LiveRC personal params");
    var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query&prop=revisions&rvlimit=1&rvprop=ids&titles=User:'+encodeURIComponent(wgUserName) + "/LiveRCparam.js"
    wpajax.http({url: URL,
                 onSuccess: LiveRC_ManageParams_GetOldParamsOldid
    });
}

function LiveRC_ManageParams_GetOldParamsOldid(RequeteOldid){
  var ObjetXML = RequeteOldid.responseXML;
  if (ObjetXML){
    var LastRevision = ObjetXML.getElementsByTagName('rev')[0];
    if (LastRevision){
      var Oldid = LastRevision.getAttribute('revid');
      wpajax.http({url:wgServer + wgScript + '?title=User:' + encodeURIComponent(wgUserName) + '/LiveRCparam.js&action=raw&oldid=' + Oldid, onSuccess:LiveRC_ManageParams_GetOldParams });
    }
  }
}

// Récupération de la page de paramétrage

function LiveRC_ManageParams_GetOldParams(Req){
     var Response = Req.responseText;
     if(Response=="") return;
     var FoundSetup = false;
     var ResponseLines = Response.split('\n');
     for(var line = 0,linelength=ResponseLines.length;line<linelength;line++){
          var ThisLine = ResponseLines[line];
          if(ThisLine.indexOf(LiveRC_Config["ExtensionSetupComment"])!=-1){
               FoundSetup = true;
               for(var a=0,l=lrcExtensions.length;a<l;a++){
                    var Installed = false;
                    if(ThisLine.indexOf("|"+lrcExtensions[a]["name"]+"|")!=-1){
                         Installed = true;
                    }
                    lrcExtensions[a]["Installed"] = Installed;
               }
          }
     }
     if(!FoundSetup) for(var a=0,l=lrcExtensions.length;a<l;a++) lrcExtensions[a]["Installed"] = false;
}

/* </source>

===== Récupération de la feuille de style perso =====

<source lang=javascript> */

// Récupération oldid de la feuille de style perso

function liveOldPersonalCSS(){
    lrcDisplayDebug("Get LiveRC personal styles");
    var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query&prop=revisions&rvlimit=1&rvprop=ids&titles=User:'+encodeURIComponent(wgUserName) + "/LiveRCparam.css"
    wpajax.http({url: URL,
                 onSuccess: LiveRC_ManageParams_GetOldCSSOldid
    });
}

function LiveRC_ManageParams_GetOldCSSOldid(RequeteOldid){
  var ObjetXML = RequeteOldid.responseXML;
  if (ObjetXML){
    var LastRevision = ObjetXML.getElementsByTagName('rev')[0];
    if (LastRevision){
      var Oldid = LastRevision.getAttribute('revid');
      wpajax.http({url:wgServer + wgScript + '?title=User:' + encodeURIComponent(wgUserName) + '/LiveRCparam.css&action=raw&oldid=' + Oldid, onSuccess:LiveRC_ManageParams_GetOldCSS });
    }
  }
}

// Récupération de la feuille de style perso

function LiveRC_ManageParams_GetOldCSS(Req){
     var Response = Req.responseText;
     if(Response=="") return;
     Response = Response.split("/*");
     for(var a=0,l=Response.length;a<l;a++){
       if(Response[a].indexOf("*/")!=-1) Response[a] = Response[a].split("*/")[1];
     }
     Response = Response.join("");
     Response = Response.replace(/[ ]*\n[ ]*/g, "");
     var FoundSetup = false;
     var Reg = new RegExp("[^\\}]*\\{[^\\}]*\\}", "g");
     var matches = Response.match(Reg);
     if(matches == null) return;
     var personalstylescount = 0;
     for(var a=0,l=matches.length;a<l;a++){
         var Thismatch = matches[a];
         var matchtarget = Thismatch.split("{")[0];
         matchtarget = matchtarget.replace(/^ /g, "").replace(/ $/g, "");
         var matchstyle = Thismatch.split("}")[0].split("{")[1];
         matchstyle = LiveRC_ManageParams_StripStyle(matchstyle);
         var styleupdated = false;
         for(var b=0,r=lrcCSSstyles.length;b<r;b++){
             var target = lrcCSSstyles[b].target;
             if(target != matchtarget) continue;
             lrcCSSstyles[b].style = LiveRC_ManageParams_StripStyle(lrcCSSstyles[b].style);
             lrcCSSstyles[b].customstyle = matchstyle;
             styleupdated = true;
         }
         if(!styleupdated){
             personalstylescount++;
             var NewStyleItem = new Object();
             NewStyleItem.customtarget = matchtarget;
             NewStyleItem.customstyle = matchstyle;
             lrcCSSstyles.push(NewStyleItem);
         }
     }
}

function LiveRC_ManageParams_StripStyle(style){
  if(!style) return "";
  return style.replace(/^ /g, "").replace(/ $/g, "").replace(/( )*;( )*/g, ";").replace(/( )*:( )*/g, ":").replace(/;;/g, ";");
}

/* </source>

===== Fonctions d'ajout de variables =====

====== Variables par défaut ======

<source lang="javascript"> */



function defineParam(textcode, Param){
  lrcParams[textcode] = Param;
}

function defineOption(textcode, Option){
  lrcOptionMenuValues[textcode] = Option;
}

function defineBlankMessages(BlankMessages){
  lstBlank = BlankMessages;
}

function defineRevertMessages(RevertMessages){
  lrcRevertMessages = RevertMessages;
}

function defineWarningTemplates(WarningTemplates){
  lstAverto = WarningTemplates;
}

function defineTagTemplates(TagTemplates){
  lstBando = TagTemplates;
}

function defineReportParams(ReportParams){
  lstReport = ReportParams;
}

function defineIcon(textcode, Icon){
  lrcIcons[textcode] = Icon;
}

function defineUnTranslatedText(textcode, UnTranslatedText){
  UnTranslatedTexts[textcode] = UnTranslatedText;
}

function defineExtensions(Extensions){
  lrcExtensions = Extensions;
}

function defineCommentTests(CommentTests){
  commenttests = CommentTests;
}

function defineTemplateTest(TemplateTest){
  lstReport = TemplateTest;
}

function definePageCategoryTests(PageCategoryTests){
  categoriestests = PageCategoryTests;
}

function defineUserCategoryTests(UserCategoryTests){
  watchCategories = UserCategoryTests;
}

function defineSupprLineParams(SupprLineParams){
  lrcSupprLineParams = SupprLineParams;
}

function addParamMenuTab(textcode, ParamMenuTab){
  lstParamMenuTabs[textcode] = ParamMenuTab;
}

function addTradToTranslatedTexts(textcode, lang, text){
  if(typeof(lrcTranslatedTexts[textcode])!="object") lrcTranslatedTexts[textcode] = new Array();
  if(typeof(lrcTranslatedTexts[textcode][lang])==="undefined") lrcTranslatedTexts[textcode][lang] = text;
}

function addTradToTranslatedParamDesc(textcode, lang, text){
  if(typeof(lrcTranslatedParamDesc[textcode])!="object") lrcTranslatedParamDesc[textcode] = new Array();
  if(typeof(lrcTranslatedParamDesc[textcode][lang])==="undefined") lrcTranslatedParamDesc[textcode][lang] = text;
}

function addTradToExtensions(extensionname, lang, text){
  for(var a=0,l=lrcExtensions.length;a<l;a++){
    if(lrcExtensions[a]["name"] != extensionname) continue;
    lrcExtensions[a][("desc-"+lang)] = text;
    delete lrcExtensions[a]["desc"];
  }
}

function addTradToCSSstyles(stylename, lang, text){
  for(var a=0,l=lrcCSSstyles.length;a<l;a++){
    if(lrcCSSstyles[a]["target"] != stylename) continue;
    lrcCSSstyles[a][("desc-"+lang)] = text;
    delete lrcCSSstyles[a]["desc"];
  }
}

/* </source>

====== Variables personnalisées ======

<source lang=javascript> */

function addCustomParam(textcode, Param){
  Custom_lrcParams[textcode] = Param;
}

function addCustomOption(textcode, Option){
  Custom_lrcOptionMenuValues[textcode] = Option;
}

function defineCustomBlankMessages(BlankMessages){
  Custom_lstBlank = BlankMessages;
}

function defineCustomRevertMessages(RevertMessages){
  Custom_lrcRevertMessages = RevertMessages;
}

function defineCustomWarningTemplates(WarningTemplates){
  Custom_lstAverto = WarningTemplates;
}

function defineCustomTagTemplates(TagTemplates){
  Custom_lstBando = TagTemplates;
}

function defineCustomReportParams(ReportParams){
  Custom_lstReport = ReportParams;
}

function addCustomIcon(textcode, Icon){
  Custom_lrcIcons[textcode] = Icon;
}

function addCustomTradToTranslatedTexts(textcode, Args){
  if(typeof(Custom_lrcTranslatedTexts[textcode])!="object") Custom_lrcTranslatedTexts[textcode] = new Array();
  for(var lang in Args){
    var text = Args[lang];
    Custom_lrcTranslatedTexts[textcode][lang] = text;
  }
}

function addCustomTradToTranslatedParamDesc(textcode, Args){
  if(typeof(Custom_lrcTranslatedParamDesc[textcode])!="object") Custom_lrcTranslatedParamDesc[textcode] = new Array();
  for(var lang in Args){
    var text = Args[lang];
    Custom_lrcTranslatedParamDesc[textcode][lang] = text;
  }
}

function addCustomUnTranslatedText(textcode, UnTranslatedText){
  Custom_UnTranslatedTexts[textcode] = UnTranslatedText;
}

function defineCustomExtensions(Extensions){
  Custom_lrcExtensions = Extensions;
}

function defineCustomCommentTests(CommentTests){
  Custom_commenttests = CommentTests;
}

function defineCustomTemplateTest(TemplateTest){
  Custom_lstReport = TemplateTest;
}

function defineCustomPageCategoryTests(PageCategoryTests){
  Custom_categoriestests = PageCategoryTests;
}

function defineCustomUserCategoryTests(UserCategoryTests){
  Custom_watchCategories = UserCategoryTests;
}

function defineCustomSupprLineParams(SupprLineParams){
  Custom_lrcSupprLineParams = SupprLineParams;
}

function addCustomParamMenuTab(textcode, ParamMenuTab){
  Custom_lstParamMenuTabs[textcode] = ParamMenuTab;
}

/* </source>

===== Création du menu de paramétrage =====

====== Remplissage de la variable globale ======

<source lang=javascript> */

// Création des variables

function LiveRC_ManageParams_GlobalFill(){
    LiveRC_Config["LiveRCcustomParams"] = new Array();    
    LiveRC_ManageParams_Fill(lrcParams              , "lrcParams"              , "addCustomParam"                      , false );
    LiveRC_ManageParams_Fill(lrcOptionMenuValues    , "lrcOptionMenuValues"    , "addCustomOption"                     , false );
    LiveRC_ManageParams_Fill(lstBlank               , "lstBlank"               , "defineCustomBlankMessages"           , true  );
    LiveRC_ManageParams_Fill(lrcRevertMessages      , "lrcRevertMessages"      , "defineCustomRevertMessages"          , true  );
    LiveRC_ManageParams_Fill(lstAverto              , "lstAverto"              , "defineCustomWarningTemplates"        , true  );
    LiveRC_ManageParams_Fill(lstBando               , "lstBando"               , "defineCustomTagTemplates"            , true  );
    LiveRC_ManageParams_Fill(lstReport              , "lstReport"              , "defineCustomReportParams"            , true  );
    LiveRC_ManageParams_Fill(lrcIcons               , "lrcIcons"               , "addCustomIcon"                       , false );
    LiveRC_ManageParams_Fill(lrcTranslatedTexts     , "lrcTranslatedTexts"     , "addCustomTradToTranslatedTexts"      , false );
    LiveRC_ManageParams_Fill(lrcTranslatedParamDesc , "lrcTranslatedParamDesc" , "addCustomTradToTranslatedParamDesc"  , false );
    LiveRC_ManageParams_Fill(UnTranslatedTexts      , "UnTranslatedTexts"      , "addCustomUnTranslatedText"           , false );
    LiveRC_ManageParams_Fill(lrcExtensions          , "lrcExtensions"          , "defineCustomExtensions"              , true  );
    LiveRC_ManageParams_Fill(commenttests           , "commenttests"           , "defineCustomCommentTests"            , true  );
    LiveRC_ManageParams_Fill(templatestests         , "templatestests"         , "defineCustomTemplateTest"            , true  );
    LiveRC_ManageParams_Fill(categoriestests        , "categoriestests"        , "defineCustomPageCategoryTests"       , true  );
    LiveRC_ManageParams_Fill(watchCategories        , "watchCategories"        , "defineCustomUserCategoryTests"       , true  );
    LiveRC_ManageParams_Fill(lrcSupprLineParams     , "lrcSupprLineParams"     , "defineCustomSupprLineParams"         , true  );
    LiveRC_RunHooks("AfterFillParamPanel");
    LiveRC_ManageParams_Fill(lstParamMenuTabs       , "lstParamMenuTabs"       , "addCustomParamMenuTab"               , false);
}

function LiveRC_ManageParams_Fill(OptionArray, ArrayName, AddCustomFunction, AddButton){
    if(typeof(lstParamMenuTabs[ArrayName])==="undefined") lstParamMenuTabs[ArrayName] = true;
    var TheOptionArray = new Array();
    var CustomOptionArray = false;
    var test = "Custom_"+ ArrayName;
    CustomOptionArray = eval( test );
    if(typeof(CustomOptionArray) !== "object"){
        test = ArrayName + "_Custom";
        try{ CustomOptionArray = eval( test ); }catch(e){ };
    }
    if(typeof(CustomOptionArray) === "object"){
        if(AddButton){ // ------------------------------------------- if there is a custom array, search values
            var foundvalues = false;
            for(var val in CustomOptionArray){
                if((new Array('number','string','boolean','object')).indexOf(typeof(CustomOptionArray[val]))!=-1)
                    foundvalues = true;
            }
            if(foundvalues) TheOptionArray = CustomOptionArray; // --- if found values : take in account the custom array
            else TheOptionArray = OptionArray;                  // --- if not, take in account the normal array
        }else{  // --------------------------------------------------- otherwise, merge the two arrays
            for(var val in OptionArray) TheOptionArray[val] = OptionArray[val];
            for(var val in CustomOptionArray) TheOptionArray[val] = CustomOptionArray[val];
        }
    }else{
        TheOptionArray = OptionArray;
    }
    for(var Param in TheOptionArray){
        var ParamName = Param;
        var ParamDefValue = OptionArray[Param];
        var ParamCustomValue = CustomOptionArray[Param];
        var CustomValueType = typeof(ParamCustomValue);
        var CustomValueTest = ((new Array('number','string','boolean')).indexOf(CustomValueType) != -1 );
        if(CustomValueType == "object"){
            CustomValueTest = false;
            for(var X in ParamCustomValue){
                if((new Array('number','string','boolean')).indexOf(typeof(ParamCustomValue[X]))!= -1 ) CustomValueTest = true;
            }
        }
        var ParamOldValue = ( CustomValueTest ? ParamCustomValue : ParamDefValue);
        var Types = LiveRC_ManageParams_Fill_GetVarTypes(ParamOldValue);
        var ParamType = typeof(ParamOldValue);  // 'number', 'string', 'boolean', 'object'
        if(ParamType == 'number' || ParamType == 'string' || ParamType == 'boolean' || ParamType == 'object'){
            var NewArray = new Array();
            NewArray["ArrayName"]            = ArrayName;
            NewArray["Name"]                 = ParamName;
            NewArray["Desc"]                 = lrcMakeParamDescription(ParamName);
            NewArray["ValueType"]            = ParamType;
            NewArray["AddButton"]            = (AddButton ? true : false);
            NewArray["AddCustomFunction"]    = AddCustomFunction;
            NewArray["CustomValue"]          = ParamCustomValue;
            NewArray["DefaultValue"]         = ParamDefValue;
            NewArray["OldValue"]             = ParamOldValue;
            if(Types) NewArray["ItemsTypes"] = Types;
            if(!LiveRC_Config["LiveRCcustomParams"][ArrayName]) 
              LiveRC_Config["LiveRCcustomParams"][ArrayName] = new Array();
            LiveRC_Config["LiveRCcustomParams"][ArrayName][ParamName] = NewArray;
        }
    }
}

function LiveRC_ManageParams_Fill_GetVarTypes(ParamObject){
    var Types = new Array();
    if(typeof(ParamObject)!="object") return false;
    for(var VarIndex in ParamObject){
        Types.push(lrcEscapeStr(VarIndex)+":"+lrcEscapeStr(typeof(ParamObject[VarIndex])));
    }
    return '{'+Types.join(",")+'}';
}

/* </source>

====== Ouverture/Fermeture du menu de paramétrage ======

<source lang=javascript> */

// Fermeture du menu

function LiveRC_ManageParams_CloseMenu(){
    var Menu = document.getElementById("LiveRC_ParamMenu");
    if(Menu) Menu.parentNode.removeChild(Menu);
    removeClass(document.body, "LiveRCConfigDisplayed");
    lrcInitTableHeight();
    clearTimeout(LiveRC_Config["Timeout"]["ManageParams"]);
}

// Création du menu

function LiveRC_ManageParams_OpenMenu(){
    var OldMenu = document.getElementById("LiveRC_ParamMenu");
    if(OldMenu){
        LiveRC_ManageParams_CloseMenu();
        return;
    }
    addClass(document.body, "LiveRCConfigDisplayed");

    LiveRC_ManageParams_GlobalFill();
    var TargetDiv = document.getElementById("OutFixedBottomPanel");
    if(!TargetDiv) return;

    var Menu = document.createElement('div');
    Menu.id = "LiveRC_ParamMenu";
    var MenuAnchor = document.createElement('div');
    MenuAnchor.id = "LiveRC_ParamMenuAnchor";
    MenuAnchor.innerHTML = lrcMakeText("ConfigMenuTitle");
    Menu.appendChild(MenuAnchor);
    var MenuContent = document.createElement('div');
    MenuContent.id = "LiveRC_ParamMenuContent";
    addClass(MenuContent, "LiveRC_MenuContent");
    var Form = document.createElement('form');
    Form.id = "LiveRC_ParamMenuForm";
    MenuContent.appendChild(Form); 
    for(var ThisVariableIndex in LiveRC_Config["LiveRCcustomParams"]){
        var ArrayVariable = LiveRC_Config["LiveRCcustomParams"][ThisVariableIndex];
        var VariableFieldset = document.createElement('fieldset');
        VariableFieldset.id = "LiveRC_OptionsContent_"+ThisVariableIndex;
        VariableFieldset.setAttribute("style", "text-align:left;");
        var VariableLegend = document.createElement('legend');
        VariableLegend.appendChild(document.createTextNode(lrcMakeParamDescription(ThisVariableIndex)));
        VariableFieldset.appendChild(VariableLegend);
        VariableFieldset.appendChild(LiveRC_ManageParams_CreateActionButtons());
        var VariableDiv = document.createElement('div');
        VariableDiv.className = "LiveRC_ParamMenuPart";
        var VariableUl = document.createElement('ul');
        var ArraysInArray = false;
        var count = 0;
        for(var q in ArrayVariable){
          count++
          if(ArrayVariable[q]["ValueType"]=='object') ArraysInArray = true;
        }
        if(count==0) continue;
        if(!ArraysInArray) VariableUl.setAttribute("style", "-moz-column-count:2;-webkit-column-count:2;column-count:2;");
        VariableDiv.appendChild(VariableUl);
        VariableFieldset.appendChild(VariableDiv);
        var AddButton;
        for(var a in ArrayVariable){
            var ThisVariable = ArrayVariable[a];
            AddButton = ThisVariable["AddButton"];
            var P = LiveRC_ManageParams_CreateLiFromParam(ThisVariable);
            VariableUl.appendChild(P);
        }
        if(AddButton){
            var P = document.createElement('li');
            var Types = new Array()
            for(var VarIndex in ThisVariable["OldValue"]){
                Types.push(lrcEscapeStr(VarIndex)+":"+lrcEscapeStr(typeof(ThisVariable["OldValue"][VarIndex])));
            }
            var func = 'LiveRC_ManageParams_AddNewParam('+lrcEscapeStr(ThisVariableIndex)+', {'+Types.join(",")+'});'
            P.innerHTML = '<a id="AddParam_'+ThisVariableIndex+'" title="'+lrcMakeText("AddParamLineButton_Title")+'" href="javascript:'+func+'" >'+lrcMakeText("AddParamLineButton_Text")+'</a>';
            VariableUl.appendChild(P);
        }
        Form.appendChild(VariableFieldset);
    }
    Menu.appendChild(MenuContent);
    TargetDiv.appendChild(Menu);
    LiveRC_ManageParams_TransformInputToSelect();
    LiveRC_ManageParams_AddIconsDescriptions();
    LiveRC_ManageParams_AddNewIcon_CreateAddButton()
    LiveRC_ManageParams_AddTextTranslationsLangToggleAndDescriptions();
    LiveRC_ManageParams_AddNewText_CreateAddButton();
    LiveRC_ManageParams_MoveLogOptions();
    LiveRC_ManageParams_MoveNamespaceOptions();
    LiveRC_ManageParams_AddContactListMenu();
    LiveRC_ManageParams_AddHiddenListMenu();
    LiveRC_ManageParams_AddExtensionsMenu();
    LiveRC_ManageParams_AddStylesMenu();

    LiveRC_RunHooks("AfterCreateParamPanel");

    LiveRC_ManageParams_CreateToggleButtons();
    LiveRC_ManageParams_ToggleMenu();
    LiveRC_ManageParams_HideSomeTabs();
    LiveRC_SetVerticalResizeZone(document.getElementById("LiveRC_ParamMenuAnchor"),
                         getElementsByClass("LiveRC_ParamMenuPart",document.getElementById("LiveRC_ParamMenu"),"div"),
                         document.getElementById("LiveRC_ParamMenu")
                        );
    lrcInitTableHeight();
}

function LiveRC_ManageParams_HideSomeTabs(){
  for(var tab in lstParamMenuTabs){
    if(lrcMakeParamMenuTabs(tab) === false){
      var Fieldset = document.getElementById("LiveRC_OptionsContent_"+tab);
      if(Fieldset) Fieldset.style.display = "none";
      var Input = document.getElementById("LiveRC_OptionsContentInput_"+tab);
      if(Input) Input.style.display = "none";
    }
    if(LiveRC_Config["AlwaysShownTabs"].indexOf(tab)!=-1){
      var LI = document.getElementById("LI_"+tab);
      if(LI){
        var Inputs = LI.getElementsByTagName('input');
        for(var a=0,l=Inputs.length;a<l;a++){
          if(Inputs[a].type == "checkbox") Inputs[a].disabled = "disabled";
        }
      }
    }
  }
  var InputsP = document.getElementById("ToggleButtons");
  if(InputsP){
    var Inputs = InputsP.getElementsByTagName('input');
    var index = 0;
    var Input = Inputs[index];
    while(Input && Input.style && Input.style.display == "none"){
      index++; 
      Input = Inputs[index];
    }
    if(Input && index !== 0) LiveRC_ManageParams_ToggleMenu(Input);
  }
}

function LiveRC_ManageParams_CreateLiFromParam(ThisVariable){
  var ThisVariable_Desc = ThisVariable["Desc"];
  var ThisVariable_Name = ThisVariable["Name"];
  var ThisVariable_AddButton = ThisVariable["AddButton"];
  var ThisVariable_ValueType = ThisVariable["ValueType"];
  var ThisVariable_OldValue = ThisVariable["OldValue"];
  var ThisVariable_DefaultValue = ThisVariable["DefaultValue"];
  var P = document.createElement('li');
  addClass(P, "ParamMenuLi");
  addClass(P, "RealParamMenuLi");
  var addtitle = true;
  var thisvartitle = ThisVariable_Desc;
  for(var d=0,s=10;d<s;d++){ if(thisvartitle.indexOf("Desc"+d)!=-1) addtitle = false; }
  if(addtitle){ 
    P.title = thisvartitle;
    P.id = "LI_"+ThisVariable_Name;
  }
  var HiddenInput = document.createElement('input');
  HiddenInput.type = "hidden";
  HiddenInput.name = "variable_index";
  HiddenInput.value = ThisVariable_Name;
  P.appendChild(HiddenInput);
  var AddButton = ThisVariable_AddButton;
  if(ThisVariable_ValueType!='object'){
    if(ThisVariable_OldValue != ThisVariable_DefaultValue)
      addClass(P, "ParamMenuLiCustom");
    var Input = document.createElement('input');
    Input.name = ThisVariable_Name;
    if(ThisVariable_ValueType=="boolean"){
      Input.type = "checkbox";
      if(ThisVariable_OldValue) Input.checked = "checked";
    }else{
      Input.type = "text";
      if(ThisVariable_ValueType=="string") Input.size = 35;
      if(ThisVariable_ValueType=="number") Input.size = 3;
      Input.setAttribute("style", "padding:2px;margin:0");
      Input.value = ThisVariable_OldValue;
    }
    var Label = document.createElement('label');
    Label.setAttribute('for', ThisVariable_Name);
    Label.innerHTML = ThisVariable_Desc;
    var ValueSpan = document.createElement('span');
    addClass(ValueSpan, "ParamMenuLiElement");
    addClass(ValueSpan, "ParamMenuElement_"+ThisVariable_ValueType);
    ValueSpan.appendChild(Input);
    ValueSpan.appendChild(document.createTextNode(" "));
    ValueSpan.appendChild(Label);
    P.appendChild(ValueSpan);
  }else{
    for(var VarIndex in ThisVariable_OldValue){
      var VariableType = typeof(ThisVariable_OldValue[VarIndex]);
      if(VariableType!="boolean" && VariableType!="number" && VariableType!="string") continue;
      var Input = document.createElement('input');
      Input.name = VarIndex;
      if(VariableType=="boolean"){
        Input.type = "checkbox";
        if(ThisVariable_OldValue[VarIndex]) Input.checked = "checked";
      }else{
        Input.type = "text";
        if(VariableType=="string") Input.size = 35;
        if(VariableType=="number") Input.size = 3;
        Input.setAttribute("style", "padding:2px;margin:0");
        Input.value = ThisVariable_OldValue[VarIndex];
      }
      var Label = document.createElement('label');
      Label.setAttribute('for', VarIndex);
      Label.innerHTML = VarIndex;
      var ValueSpan = document.createElement('span');
      addClass(ValueSpan, "ParamMenuLiElement");
      addClass(ValueSpan, "ParamMenuLiElement_"+VariableType);
      if(typeof(ThisVariable_DefaultValue)!="object" || ThisVariable_OldValue[VarIndex] != ThisVariable_DefaultValue[VarIndex])
      addClass(ValueSpan, "ParamMenuLiCustom");
      P.appendChild(ValueSpan);
      ValueSpan.appendChild(Label);
      ValueSpan.appendChild(document.createTextNode(":"));
      ValueSpan.appendChild(Input);
      P.appendChild(document.createTextNode(" "));
    }
    if(AddButton) P.appendChild(LiveRC_ManageParams_AddDeleteParamLineLink());
  }
  return P;
}


// Ajouter une nouvelle ligne

function LiveRC_ManageParams_AddNewParam(Id, Vars){
    var Link = document.getElementById('AddParam_'+Id);
    if(!Link) return;
    var Variable = LiveRC_Config["LiveRCcustomParams"][Id];
    var ThisVariableName = 0;    
    var Li = Link.parentNode;
    PreviousLi = Li.previousSibling;
    if(PreviousLi){
        var PreviousLiHidden = PreviousLi.getElementsByTagName('input')[0];
        if(PreviousLiHidden){
            var PreviousLiHiddenValue = PreviousLiHidden.value;
            if(typeof(parseInt(PreviousLiHiddenValue))==="number") ThisVariableName = (parseInt(PreviousLiHiddenValue) + 1)
        }
    }
    var P = document.createElement('li');
    addClass(P, "ParamMenuLi");
    addClass(P, "RealParamMenuLi");
    addClass(P, "ParamMenuLiCustom");
    var HiddenInput = document.createElement('input');
    HiddenInput.type = "hidden";
    HiddenInput.name = "variable_index";
    HiddenInput.value = ThisVariableName;
    P.appendChild(HiddenInput);
    for(var iName in Vars){
        var Label = document.createElement('label');
        Label.setAttribute('for', iName);
        Label.innerHTML = iName;
        var Input = document.createElement('input');
        Input.name = iName;
        if(Vars[iName]=="boolean"){
            Input.type = "checkbox";
        }else{
            Input.type = "text";
            if(Vars[iName]=="string") Input.size = 35;
            if(Vars[iName]=="number") Input.size = 3;
            Input.setAttribute("style", "padding:2px;margin:0");
            Input.value = "";
        }
        var ValueSpan = document.createElement('span');
        addClass(ValueSpan, "ParamMenuLiElement");
        P.appendChild(ValueSpan);
        ValueSpan.appendChild(Label);
        ValueSpan.appendChild(document.createTextNode(":"));
        ValueSpan.appendChild(Input);
        P.appendChild(document.createTextNode(" "));
    }
    P.appendChild(LiveRC_ManageParams_AddDeleteParamLineLink());
    Li.parentNode.insertBefore(P, Li);
}

// Bouton de suppression de ligne (paramètres)

function LiveRC_ManageParams_AddDeleteParamLineLink(){
    var Link = document.createElement('a');
    Link.innerHTML = lrcMakeText("DeleteParamLineButton_Text");
    Link.title = lrcMakeText("DeleteParamLineButton_Title");
    Link.href = "javascript:;"
    Link.onclick = function(){ LiveRC_ManageParams_DeleteThisParam(this, true); }
    return Link;
} 

// Bouton de suppression de ligne (utilisateur)

function LiveRC_ManageParams_AddDeleteUserLink(){
    var Link = document.createElement('a');
    Link.innerHTML = lrcMakeText("DeleteUserButton_Text");
    Link.title = lrcMakeText("DeleteUserButton_Title");
    Link.href = "javascript:;"
    Link.onclick = function(){ LiveRC_ManageParams_DeleteThisParam(this, false); }
    return Link;
}

// Suppression d'une ligne
 
function LiveRC_ManageParams_DeleteThisParam(Link, LetOneLine){
    var Line = Link.parentNode;
    var UL = Line.parentNode;
    var LineNumber = getElementsByClass("ParamMenuLi", UL, "li").length;
    if(LetOneLine && LineNumber==1) return;
    Line.parentNode.removeChild(Line);
    return false;
}

// Création boutons d’action ( Valider / RAZ )

function LiveRC_ManageParams_CreateActionButtons(){
    var ActionP = document.createElement('p');
    ActionP.className = 'ActionButtons';
    var OKInput = document.createElement('input');
    OKInput.type = "button";
    OKInput.value = lrcMakeText("OK");
    OKInput.onclick = function(){ LiveRC_ManageParams_CheckMenu(this); return false;}
    OKInput.onselect = function(){ LiveRC_ManageParams_CheckMenu(this); return false;}
    ActionP.appendChild(OKInput);
    var RAZInput = document.createElement('input');
    RAZInput.type = "button";
    RAZInput.value = lrcMakeText("RAZ");
    RAZInput.onclick = function(){ LiveRC_ManageParams_RAZParams(this); return false;}
    RAZInput.onselect = function(){ LiveRC_ManageParams_RAZParams(this); return false;}
    ActionP.appendChild(RAZInput);
    var CancelInput = document.createElement('input');
    CancelInput.type = "button";
    CancelInput.value = lrcMakeText("Cancel");
    CancelInput.onclick = function(){ LiveRC_ManageParams_CloseMenu(this); return false;}
    CancelInput.onselect = function(){ LiveRC_ManageParams_CloseMenu(this); return false;}
    ActionP.appendChild(CancelInput);
    return ActionP;
}

// Création des onglets

function LiveRC_ManageParams_CreateToggleButtons(){
    var Form = document.getElementById("LiveRC_ParamMenuForm");
    var P = document.createElement('p');
    P.id = "ToggleButtons";
    var Fieldsets = Form.getElementsByTagName('fieldset');
    for(var a=0,l=Fieldsets.length;a<l;a++){
        var Id = ""+Fieldsets[a].id.split("LiveRC_OptionsContent_").join("");
        var Input = document.createElement('input');
        Input.id = "LiveRC_OptionsContentInput_"+Id;
        Input.type = "button";
        Input.value = lrcMakeParamDescription(Id+"_short");
        Input.title = lrcMakeParamDescription(Id);
        Input.onclick = function(){ LiveRC_ManageParams_ToggleMenu(this); return false;};
        Input.onselect = function(){ LiveRC_ManageParams_ToggleMenu(this); return false;};
        P.appendChild(Input);
    }
    var NSMessages = getNamespaceInfoFromPage(LiveRC_Config["SiteConfigPage"]);
    if( LiveRC_Config["SiteConfigPage"].indexOf(".js") != -1
        &&
        ( ( NSMessages==8 && lrcUserHasRight("editinterface")
          ) 
          || 
          ( NSMessages==2 && ( lrcUserHasRight("edituserjs")
                               || 
                               LiveRC_Config["SiteConfigPage"].indexOf(wgUserName) !=- 1 
                             )
          )
        )
      ){
        var MSInput = document.createElement('input');
        MSInput.type = "button";
        MSInput.id = "MWConfigSaveButton";
        MSInput.value = lrcMakeText("MWSiteInfoLegend");
        MSInput.title = lrcMakeText("UPDATEMESSAGES");
        MSInput.onclick = function(){ LiveRC_GetSiteInfos(true, this); return false;}
        MSInput.onselect = function(){ LiveRC_GetSiteInfos(true, this); return false;}
        P.appendChild(MSInput);
    }
    Form.parentNode.insertBefore( P, Form);
    LiveRC_Config["Timeout"]["ManageParams"] = setTimeout("LiveRC_ManageParams_SetMenuHeights()", 500);
}
 
// Gestion des onglets
 
function LiveRC_ManageParams_ToggleMenu(Input){
    var Id = false;
    if(Input) Id = Input.id.split("LiveRC_OptionsContentInput_").join("LiveRC_OptionsContent_");
    var Form = document.getElementById("LiveRC_ParamMenuForm");
    var Onglets = document.getElementById("ToggleButtons").getElementsByTagName('input');
    var Fieldsets = Form.getElementsByTagName('fieldset');
    for(var a=0,l=Fieldsets.length;a<l;a++){
        if(Id){
            Onglets[a].style.fontWeight = ((Id == Fieldsets[a].id)? "bold" : "");
            Fieldsets[a].style.display = ((Id == Fieldsets[a].id)? "" : "none");
        }else{
            Onglets[a].style.fontWeight = ((a==0)? "bold" : "");
            Fieldsets[a].style.display = ((a==0)? "" : "none");
        }
    }
}

// Égalisation de la hauteur des menus
function LiveRC_ManageParams_SetMenuHeights(){
  var Menu = document.getElementById("LiveRC_ParamMenu");
  if(!Menu) return;
  var HeightFound = false;
  var FieldSets = Menu.getElementsByTagName('fieldset');
  for(var b=0,m=FieldSets.length;b<m;b++){
    if(FieldSets[b].style.display == "none") continue;
    var MenuPart =  getElementsByClass("LiveRC_ParamMenuPart",FieldSets[b],'div')[0];
    if(!MenuPart) continue;
    var StyleHeight = MenuPart.style.height;
    if(StyleHeight) HeightFound = StyleHeight;
  }
  if(HeightFound){
    var MenuParts = getElementsByClass("LiveRC_ParamMenuPart",Menu,'div');
    for(var a=0,l=MenuParts.length;a<l;a++) MenuParts[a].style.height = HeightFound;
  }
  clearTimeout(LiveRC_Config["Timeout"]["ManageParams"]);
  LiveRC_Config["Timeout"]["ManageParams"] = setTimeout("LiveRC_ManageParams_SetMenuHeights()", 500);
}

// Création d'un sous-menu

function LiveRC_ManageParams_CreateNewListMenu(menuname, buttons, columns){
    var Form = document.getElementById("LiveRC_ParamMenuForm");
    if(!Form || !menuname) return;
    var NewListFieldset = document.createElement('fieldset');
    NewListFieldset.id = "LiveRC_OptionsContent_"+menuname;
    var NewListLegend = document.createElement('legend');
    NewListLegend.appendChild(document.createTextNode(lrcMakeParamDescription(menuname)));
    NewListFieldset.appendChild(NewListLegend);
    if(buttons) NewListFieldset.appendChild(buttons);
    var NewListDiv = document.createElement('div');
    NewListDiv.className = "LiveRC_ParamMenuPart";
    var NewListUl = document.createElement('ul');
    NewListUl.id = "LiveRC_OptionsContent_"+menuname+"ListUL";
    if(typeof(columns)=="number")
      NewListUl.setAttribute("style", "-moz-column-count:"+columns+";-webkit-column-count:"+columns+";column-count:"+columns+";");
    NewListDiv.appendChild(NewListUl);
    NewListFieldset.appendChild(NewListDiv);
    Form.appendChild(NewListFieldset);
    return NewListUl;
}

/* </source>

====== Modifications spéciales du menu de paramétrage ======

<source lang=javascript> */

// Déplacer les options « Case "XXX" »

function LiveRC_ManageParams_MoveLogOptions(){
  var LogOption = document.getElementById("LI_Log");
  if(!LogOption) return;
  var Target = LogOption.nextSibling;
  for(var id in LiveRC_Config["LogNames"]){
    var Li = document.getElementById("LI_Log_"+id);
    if(Li){
      Li.parentNode.removeChild(Li);
      Target.parentNode.insertBefore(Li, Target);
    }
  }  
}

// Déplacer les options « Case Espace de noms : XXX »

function LiveRC_ManageParams_MoveNamespaceOptions(){
  var NSOption = document.getElementById("LI_NS");
  if(!NSOption) return;
  var Target = NSOption.nextSibling;
  for(var id in LiveRC_Config["MediawikiNamespaces"]){
    var Li = document.getElementById("LI_NS_"+id);
    if(Li){
      Li.parentNode.removeChild(Li);
      Target.parentNode.insertBefore(Li, Target);
    }
  }  
}

// Transformer certaines <input> en <select> pour limiter les choix possibles

function LiveRC_ManageParams_TransformInputToSelect(){
  var InputsToTransform = new Array();
// ======= lrcParams ======= 
// ["Language"]----------------- 
  var Langs = new Array();
  for(var a=0,l=LiveRC_Config["SupportedLanguages"].length;a<l;a++){
    var langcode = LiveRC_Config["SupportedLanguages"][a];
    var newLang = new Object();
    newLang.value = langcode;
    newLang.text = LiveRC_Config["MediawikiLanguages"][langcode];
    Langs[Langs.length] = newLang;
  }
  InputsToTransform["Language"] = Langs;
// ----------------- ["TZ"]
  var TimeZones = new Array();
  for(var a=1,l=48;a<l;a++){
    var hour = (a-24);
    var ThisValue = (hour>0 ? "+":"")+TwoDigitsForNumber(hour)+":00";
    var newTZ = new Object();
    newTZ.value = ThisValue;
    newTZ.text = ThisValue;
    TimeZones[TimeZones.length] = newTZ;
  }
  InputsToTransform["TZ"] = TimeZones;
  LiveRC_ManageParams_CheckInputsToTransform(InputsToTransform);
// ======= lrcIcons ======= 
  InputsToTransform = new Array();
  var node = document.getElementById('LiveRC_OptionsContent_lrcIcons');
// ----------------- ["XXX"]["type"] 
  var IconTypeOptions = [{value:"0",text:"img"},{value:"1",text:"sup"},{value:"2",text:"sub"}];
  InputsToTransform["type"] = IconTypeOptions;
  LiveRC_ManageParams_CheckInputsToTransform(InputsToTransform, node);
}

function LiveRC_ManageParams_CheckInputsToTransform(InputsToTransform, node){
  var remainingInputs = 0
  for(var InputName in InputsToTransform){
    remainingInputs++
    var Li = document.getElementById("LI_"+InputName);
    if(Li){
      var ThisInputToTransform = new Array();
      ThisInputToTransform[InputName] = InputsToTransform[InputName];
      delete InputsToTransform[InputName];
      LiveRC_ManageParams_CheckInputsToTransformInThisNode(ThisInputToTransform, Li);
      remainingInputs--
    }
  }
  if(remainingInputs>0) LiveRC_ManageParams_CheckInputsToTransformInThisNode(InputsToTransform, node);
}

function LiveRC_ManageParams_CheckInputsToTransformInThisNode(InputsToTransform, node){
  if(!node) node = document.getElementById("LiveRC_ParamMenuForm");
  if(!node) return;
  var Inputs = node.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    var Input = Inputs[a];
    if(Input && Input.type && Input.type=="text" && Input.name && InputsToTransform[Input.name])
    LiveRC_ManageParams_TransformThisInputToSelect(Input, InputsToTransform[Input.name]);
  }
}

function LiveRC_ManageParams_TransformThisInputToSelect(Input, SuggestionsArray){
  if(!Input) return;
  var DefaultValue = Input.value;
  var Select = document.createElement('select');
  Select.name = Input.name;
  for(var a=0,l=SuggestionsArray.length;a<l;a++){
    var Suggestion = SuggestionsArray[a];
    var opt = document.createElement('option');
    opt.value = Suggestion.value;
    if(Suggestion.value === DefaultValue || Suggestion.value === parseInt(DefaultValue) ){
      opt.selected = "selected";
      opt.style.fontWeight = "bold";
    }
    opt.innerHTML = (Suggestion.text ? Suggestion.text : '');
    Select.appendChild(opt);
  }
  Select.style.width = Input.offsetWidth + "px";
  Input.parentNode.insertBefore(Select, Input);
  Input.parentNode.removeChild(Input);
}
/* </source>

====== Modifications spéciales de l'onglet des icônes ======

<source lang=javascript> */

// Ajoute une description dans l'onglet des icones ainsi qu'un aperçu

function LiveRC_ManageParams_AddIconsDescriptions(){
  var IconFieldset = document.getElementById("LiveRC_OptionsContent_lrcIcons");
  if(!IconFieldset) return;
  var IconLis = IconFieldset.getElementsByTagName('li');
  for(var a=0,l=IconLis.length;a<l;a++){
    LiveRC_ManageParams_AddIconDescription(IconLis[a]);
  }
}

function LiveRC_ManageParams_AddIconDescription(IconLi){
  var IconName = IconLi.getElementsByTagName('input')[0];
  if(!IconName) return;
  IconName = IconName.value;
  var Label = document.createElement('label');
  addClass(Label, "lrcIcons_Label");
  var UpdateLink = '<a id="IconTestLink_'+IconName+'" '
                 + 'title="'+lrcMakeText("IconTestUpdate_TIP")+'" '
                 + 'href="javascript:;" '
                 + 'onclick="lrcMakeCustomIcon(this); return false;" '
                 + '>'+lrcMakeText("IconTestUpdate_SHORT")+'</a>'
  Label.innerHTML = ' = <span id="IconTest_'+IconName+'">'+lrcMakeIcon(IconName)+'</span> <sup>'+UpdateLink+'</sup> : ' + lrcMakeParamDescription(IconName);
  IconLi.appendChild(document.createTextNode(" "));
  IconLi.appendChild(Label);
  if(typeof(lrcIcons[IconName])==="undefined"){
    IconLi.appendChild(document.createTextNode(" "));
    IconLi.appendChild(LiveRC_ManageParams_AddDeleteParamLineLink());
  }
}

function lrcMakeCustomIcon(Link){
  if(!Link) return;
  var IconName = Link.id.split("IconTestLink_").join("");
  var ImageSpan = document.getElementById("IconTest_"+IconName);
  var IconLi = document.getElementById("LI_"+IconName);
  if(!ImageSpan || !IconLi ) return;
  var Icon = new Object();
  var Elements = new Array();
  var InputList = IconLi.getElementsByTagName('input');
  var SelectList = IconLi.getElementsByTagName('select');
  for(var a=0,l=InputList.length;a<l;a++) Elements.push(InputList[a]);
  for(var a=0,l=SelectList.length;a<l;a++) Elements.push(SelectList[a]);
  for(var a=1,l=Elements.length;a<l;a++){
    var Input = Elements[a];
    Icon[Input.name] = Input.value;
  }
  var Title_Alt = ( typeof(lrcMakeText(IconName+"_Title"))==="string" ? lrcMakeText(IconName+"_Title") : "$1" );
  var SRC = (Icon.src ? lrcMakeParam("CommonsURL")+Icon.src : "");
  var width = (Icon.width ? Icon.width : 14);
  var height = (Icon.height ? Icon.height : width); 
  Icon.height = height;
  var HTML = ''
  if(Icon.type == "sup_img" || Icon.type == "1"){ Icon.type = 1; HTML += '<sup>'; }
  if(Icon.type == "sub_img" || Icon.type == "2"){ Icon.type = 2; HTML += '<sub>'; }
  if(Icon.type == "img") Icon.type = 0;
  HTML += '<img id="'+IconName+'" '
        + 'src="'+SRC+'" '
        + 'width="'+width+'" '
        + 'height="'+height+'" '
        + 'title="'+Title_Alt+'" '
        + 'alt="'+Title_Alt+'" />'
  if(Icon.type == 1) HTML += '</sup>';
  if(Icon.type == 2) HTML += '</sub>';
  ImageSpan.innerHTML = HTML;
}
 
function LiveRC_ManageParams_AddNewIcon_CreateAddButton(){
  var Fieldset = document.getElementById("LiveRC_OptionsContent_lrcIcons");
  if(!Fieldset) return;
  var VariableUl = Fieldset.getElementsByTagName('ul')[0];
  if(!VariableUl) return;
  var P = document.createElement('li');
  var func = 'LiveRC_ManageParams_AddNewIcon_CreateForm(this);'
  P.innerHTML = '<a id="AddParam_lrcIcons" href="javascript:;" onClick="'+func+'" '
              + 'title="'+lrcMakeText("AddParamLineButton_Title")+'" >'+lrcMakeText("AddParamLineButton_Text")+'</a>';
  VariableUl.appendChild(P);
}
 
function LiveRC_ManageParams_AddNewIcon_CreateForm(Link){
  var ParentLi = Link.parentNode;
  var Li = document.createElement('li');
  addClass(Li, "ParamMenuLi"); 
  var IDLabel = document.createElement('label');
  IDLabel.setAttribute('for', "id");
  IDLabel.innerHTML = lrcMakeText("CreateNewIcon_ID");
  Li.appendChild(IDLabel);
  var IDInput = document.createElement('input');
  IDInput.type = "text";
  IDInput.value = "";
  IDInput.name = "id";
  Li.appendChild(IDInput);
  Li.appendChild(document.createTextNode(" ")); 
  var TextLabel = document.createElement('label');
  TextLabel.setAttribute('for', "tooltip");
  TextLabel.innerHTML = lrcMakeText("CreateNewIcon_title")+" ("+lrcMakeParam("Language")+")";
  Li.appendChild(TextLabel);
  var TextInput = document.createElement('input');
  TextInput.type = "text";
  TextInput.value = "";
  TextInput.name = "tooltip";
  Li.appendChild(TextInput);
  Li.appendChild(document.createTextNode(" ")); 
  var OKInput = document.createElement('input');
  OKInput.type = "button";
  OKInput.value = lrcMakeText("OK");
  OKInput.onclick = function(){ LiveRC_ManageParams_AddNewIcon_CheckForm(this); return false;}
  OKInput.onselect = function(){ LiveRC_ManageParams_AddNewIcon_CheckForm(this); return false;}
  Li.appendChild(OKInput);
  var CancelInput = document.createElement('input');
  CancelInput.type = "button";
  CancelInput.value = lrcMakeText("Cancel");
  CancelInput.onclick = function(){ LiveRC_ManageParams_DeleteThisParam(this); return false;}
  CancelInput.onselect = function(){ LiveRC_ManageParams_DeleteThisParam(this); return false;}
  Li.appendChild(CancelInput);  
  ParentLi.parentNode.insertBefore(Li, ParentLi);
}
 
function LiveRC_ManageParams_AddNewIcon_CheckForm(OKInput){
  var Li = OKInput.parentNode;
  var Inputs = Li.getElementsByTagName('input');
  var CheckedParams = new Array(); 
  for(var a=0,l=Inputs.length;a<l;a++){
    var Input = Inputs[a];
    if(Input.type != "text") continue;
    var InputName = Input.name;
    var InputValue = Input.value;
    var Label = Input.previousSibling.innerHTML;
    if(!InputValue){
      LiveRC_alert(lrcMakeText("CreateNewIcon_InputEmpty").split("$1").join("<b>"+Label+"</b>"));
      return;
    }
    CheckedParams[InputName] = InputValue;
  }
  var ID = CheckedParams["id"];
  var Tooltip = CheckedParams["tooltip"];
  var Desc = lrcMakeText("CreateNewIcon_DescTemplate").split("$1").join(Tooltip);
  var Form = document.getElementById("LiveRC_ParamMenuForm");
  if(!Form) return;
  var ExistingLi = getElementWithId("LI_"+ID, 'li', Form);
  var ExistingLiBis = getElementWithId("LI_Desc"+ID, 'li', Form);
  if(ExistingLi || ExistingLiBis){
      LiveRC_alert(lrcMakeText("CreateNewText_IDExists").split("$1").join(ID));
      return;
  }
  var RunFonctionWithExistingTitle = function(){
    LiveRC_ManageParams_AddNewText_AddNewTextLi("lrcTranslatedParamDesc", ("Desc"+ID), lrcMakeText(ID+"_Title"));
    LiveRC_ManageParams_AddNewText_AddNewIconLi(ID);
    Li.parentNode.removeChild(Li);
  }
  var RunFonctionWithNewTitle = function(){
    LiveRC_ManageParams_AddNewText_AddNewTextLi("lrcTranslatedParamDesc", ("Desc"+ID+"_Title"), Desc);
    LiveRC_ManageParams_AddNewText_AddNewTextLi("lrcTranslatedParamDesc", ("Desc"+ID), Tooltip);
    LiveRC_ManageParams_AddNewText_AddNewTextLi("lrcTranslatedTexts", (ID+"_Title"), Tooltip);
    LiveRC_ManageParams_AddNewText_AddNewIconLi(ID);
    Li.parentNode.removeChild(Li);
  }
  var ExistingLiTer = getElementWithId("LI_"+ID+"_Title", 'li', Form);
  if(ExistingLiTer){
    var ConfirmText = '<ul>'+lrcMakeText("CreateNewIcon_TitleExists").split("$1").join("<li>"+lrcMakeText(ID+"_Title")+"</li>")+"</ul>";
    LiveRC_confirm(ConfirmText, RunFonctionWithExistingTitle);
  }else{
    RunFonctionWithNewTitle();
  }
}

function LiveRC_ManageParams_AddNewText_AddNewIconLi(ID){
  Custom_lrcIcons[ID] = {"type":0,"src":"thumb/0/00/LiveRC-anim.gif/14px-LiveRC-anim.gif","width":14,"height":14};
  var FakeIconArray = new Array();
  FakeIconArray[ID] = {"type":1,"src":"","width":1,"height":1};
  LiveRC_ManageParams_Fill(FakeIconArray, "lrcIcons", false);
  var IconLi = LiveRC_ManageParams_CreateLiFromParam(LiveRC_Config["LiveRCcustomParams"]["lrcIcons"][ID]);
  var IconFieldset = document.getElementById('LiveRC_OptionsContent_lrcIcons');
  var AllLis = IconFieldset.getElementsByTagName('li');
  var TheLi = false;
  for(var a=0,l=AllLis.length;a<l;a++){
    var ThisLi = AllLis[a];
    if(hasClass(ThisLi, "RealParamMenuLi")) TheLi = ThisLi;
  }
  if(TheLi){
    TheLi.parentNode.insertBefore(IconLi, TheLi.nextSibling);
    var IconTypeOptions = [{value:"0",text:"img"},{value:"1",text:"sup"},{value:"2",text:"sub"}];
    var InputToTransform = new Array();
    InputToTransform["type"] = IconTypeOptions;
    LiveRC_ManageParams_CheckInputsToTransformInThisNode(InputToTransform, IconLi);
    LiveRC_ManageParams_AddIconDescription(IconLi);
  }
}

/* </source>
 
====== Modifications spéciales des onglets de textes ======
 
<source lang=javascript> */
 
//  Ajoute des boutons pour switcher entre les traductions dans les variables textuelles + descriptions
 
function LiveRC_ManageParams_AddTextTranslationsLangToggleAndDescriptions(){
  var Variables = new Array("lrcTranslatedTexts", "lrcTranslatedParamDesc");
  for(var v=0,vlen=Variables.length;v<vlen;v++){
    var Variable = Variables[v];
    var Fieldset = document.getElementById("LiveRC_OptionsContent_"+Variable);
    if(!Fieldset) return;
    var Lis = Fieldset.getElementsByTagName('li');
    for(var a=0,l=Lis.length;a<l;a++){
      LiveRC_ManageParams_AddTextTranslationsAndDescription(Lis[a], Variable);
    }
    var ActionsButtons = getElementsByClass("ActionButtons", Fieldset, "p")[0];
    if(ActionsButtons){
      var Span = document.createElement('span');
      addClass(Span, "LangToggleButtons");
      var SelectedInputIndex = 0;
      for(var a=0,l=LiveRC_Config["SupportedLanguages"].length;a<l;a++){
        var lang = LiveRC_Config["SupportedLanguages"][a];
        var Display = ((LiveRC_Config["AvailableLanguages"].indexOf(lang)!=-1) ? '' : 'display:none;');
        var Button = document.createElement('input');
        Button.className = "LangToggleButton_" + Variable;
        Button.type = "button";
        Button.value = lang;
        Button.title = LiveRC_Config["MediawikiLanguages"][lang];
        Button.onclick = function(){ LiveRC_ManageParams_ToggleTextTranslations(this); };
        Button.onselect = function(){ LiveRC_ManageParams_ToggleTextTranslations(this); };
        Span.appendChild(Button);
        if(lang == lrcMakeParam("Language")){
          SelectedInputIndex = a;
          Button.setAttribute("style", "font-weight:bold;padding:0;color:darkGreen;text-decoration:underline;");
        }else{
          Button.setAttribute("style", "font-weight:bold;padding:0;color:darkGreen;"+Display);  
        } 
      }
      ActionsButtons.appendChild(document.createTextNode(" • • • "));
      ActionsButtons.appendChild(Span);
      var Inputs = Span.getElementsByTagName('input');
      for(var a=0,l=Inputs.length;a<l;a++){
        if(a!=SelectedInputIndex) LiveRC_ManageParams_ToggleTextTranslations(Inputs[a]);
      }
    }
  }
}
 
function LiveRC_ManageParams_AddTextTranslationsAndDescription(Li, Variable){
  var varName = Li.getElementsByTagName('input')[0];
  if(varName){
    varName = varName.value;
    var Label = document.createElement('label');
    addClass(Label, "Texts_Label");
    Label.innerHTML = " = " + lrcMakeParamDescription(varName);
    Li.appendChild(document.createTextNode(" "));
    Li.appendChild(Label);
    var CustomText = eval( Variable+'[\"'+varName+'\"]');
    if(typeof(CustomText)==="undefined"){
      Li.appendChild(document.createTextNode(" "));
      Li.appendChild(LiveRC_ManageParams_AddDeleteParamLineLink());
    }
  }
}
 
function LiveRC_ManageParams_ToggleTextTranslations(input){
  if(!input) return;
  var Lang = input.value;
  if(Lang == lrcMakeParam("Language")) return;
  var Variable = input.className.split("LangToggleButton_").join("");
  var Fieldset = document.getElementById("LiveRC_OptionsContent_"+Variable);
  if(!Fieldset) return;
  var Display = "";
  if(input.style.color == "red"){
    input.style.color = "darkGreen";
  }else{
    input.style.color = "red";
    Display = "none";       
  }
  var Inputs = Fieldset.getElementsByTagName("input");
  for(var i=0,ilen=Inputs.length;i<ilen;i++){
    var ThisInput = Inputs[i];
    if(ThisInput.type != "text") continue;
    var InputName = ThisInput.name;
    if(InputName != Lang) continue;
    if(LiveRC_Config["SupportedLanguages"].indexOf(InputName)==-1) continue;
    var Span = ThisInput.parentNode;
    while(Span && !hasClass(Span,"ParamMenuLiElement")){ Span = Span.parentNode; if(!Span) break; }
    if(!Span || !hasClass(Span,"ParamMenuLiElement")) continue;
    Span.style.display = Display;
  }
}
 
function LiveRC_ManageParams_AddNewText_CreateAddButton(){
  var Fieldset = document.getElementById("LiveRC_OptionsContent_lrcTranslatedTexts");
  if(!Fieldset) return;
  var VariableUl = Fieldset.getElementsByTagName('ul')[0];
  if(!VariableUl) return;
  var P = document.createElement('li');
  var func = 'LiveRC_ManageParams_AddNewText_CreateForm(this);'
  P.innerHTML = '<a id="AddParam_lrcTranslatedTexts" href="javascript:;" onClick="'+func+'" '
              + 'title="'+lrcMakeText("AddParamLineButton_Title")+'" >'+lrcMakeText("AddParamLineButton_Text")+'</a>';
  VariableUl.appendChild(P);
}
 
function LiveRC_ManageParams_AddNewText_CreateForm(Link){
  var ParentLi = Link.parentNode;
  var Li = document.createElement('li');
  addClass(Li, "ParamMenuLi");
 
  var IDLabel = document.createElement('label');
  IDLabel.setAttribute('for', "id");
  IDLabel.innerHTML = lrcMakeText("CreateNewText_ID")+" ";
  Li.appendChild(IDLabel);
  var IDInput = document.createElement('input');
  IDInput.type = "text";
  IDInput.value = "";
  IDInput.name = "id";
  Li.appendChild(IDInput);
  Li.appendChild(document.createTextNode(" "));
 
  var TextLabel = document.createElement('label');
  TextLabel.setAttribute('for', "text");
  TextLabel.innerHTML = lrcMakeText("CreateNewText_text")+" ("+lrcMakeParam("Language")+") ";
  Li.appendChild(TextLabel);
  var TextInput = document.createElement('input');
  TextInput.type = "text";
  TextInput.value = "";
  TextInput.name = "text";
  Li.appendChild(TextInput);
  Li.appendChild(document.createTextNode(" "));
 
  var DescLabel = document.createElement('label');
  DescLabel.setAttribute('for', "desc");
  DescLabel.innerHTML = lrcMakeText("CreateNewText_desc")+" ("+lrcMakeParam("Language")+") ";
  Li.appendChild(DescLabel);
  var DescInput = document.createElement('input');
  DescInput.type = "text";
  DescInput.value = "";
  DescInput.name = "desc";
  Li.appendChild(DescInput);
  Li.appendChild(document.createTextNode(" "));
 
  var OKInput = document.createElement('input');
  OKInput.type = "button";
  OKInput.value = lrcMakeText("OK");
  OKInput.onclick = function(){ LiveRC_ManageParams_AddNewText_CheckForm(this); return false;}
  OKInput.onselect = function(){ LiveRC_ManageParams_AddNewText_CheckForm(this); return false;}
  Li.appendChild(OKInput);
  var CancelInput = document.createElement('input');
  CancelInput.type = "button";
  CancelInput.value = lrcMakeText("Cancel");
  CancelInput.onclick = function(){ LiveRC_ManageParams_DeleteThisParam(this); return false;}
  CancelInput.onselect = function(){ LiveRC_ManageParams_DeleteThisParam(this); return false;}
  Li.appendChild(CancelInput);
  ParentLi.parentNode.insertBefore(Li, ParentLi);
}
 
function LiveRC_ManageParams_AddNewText_CheckForm(OKInput){
  var Li = OKInput.parentNode;
  var Inputs = Li.getElementsByTagName('input');
  var CheckedParams = new Array();
 
  for(var a=0,l=Inputs.length;a<l;a++){
    var Input = Inputs[a];
    if(Input.type != "text") continue;
    var InputName = Input.name;
    var InputValue = Input.value;
    var Label = Input.previousSibling.innerHTML;
    if(!InputValue){
      LiveRC_alert(lrcMakeText("CreateNewText_InputEmpty").split("$1").join("<b>"+Label+"</b>"));
      return;
    }
    CheckedParams[InputName] = InputValue;
  }
  var ID = CheckedParams["id"];
  var Text = CheckedParams["text"];
  var Desc = CheckedParams["desc"];
  var Form = document.getElementById("LiveRC_ParamMenuForm");
  if(!Form) return;
  var ExistingLi = getElementWithId("LI_"+ID, 'li', Form);
  var ExistingLiBis = getElementWithId("LI_Desc"+ID, 'li', Form);
  if(ExistingLi || ExistingLiBis){
      LiveRC_alert(lrcMakeText("CreateNewText_IDExists").split("$1").join(ID));
      return;
  }
  LiveRC_ManageParams_AddNewText_AddNewTextLi("lrcTranslatedParamDesc", ("Desc"+ID), Desc);
  LiveRC_ManageParams_AddNewText_AddNewTextLi("lrcTranslatedTexts", ID, Text);
  Li.parentNode.removeChild(Li);
}
 
function LiveRC_ManageParams_AddNewText_AddNewTextLi(Variable, ID, Text){
  var TextArray = new Array();
  TextArray[ID] = new Array();
  var FakeArray = new Array();
  FakeArray[ID] = new Array();
  var ExplodedArray = new Array();
  var FakeExplodedArray = new Array();
  for(var a=0,l=LiveRC_Config["AvailableLanguages"].length;a<l;a++){
    var Lang = LiveRC_Config["AvailableLanguages"][a];
    TextArray[ID][Lang] = Text;
    FakeArray[ID][Lang] = "";
    ExplodedArray.push(lrcEscapeStrHTML(Lang)+':'+lrcEscapeStrHTML(Text));
    FakeExplodedArray.push(lrcEscapeStrHTML(Lang)+':'+'""');
  }
  eval( "Custom_"+Variable+'[\"'+ID+'\"] = {'+ExplodedArray.join(",")+'};');
  eval( Variable+'[\"'+ID+'\"] = {'+FakeExplodedArray.join(",")+'};');
  LiveRC_ManageParams_Fill(FakeArray, Variable, false);
  var TextLi = LiveRC_ManageParams_CreateLiFromParam(LiveRC_Config["LiveRCcustomParams"][Variable][ID]);
 
  var TextFieldset = document.getElementById('LiveRC_OptionsContent_'+Variable);
  var AllLis = TextFieldset.getElementsByTagName('li');
  var TheLi = false;
  for(var a=0,l=AllLis.length;a<l;a++){
    var ThisLi = AllLis[a];
    if(hasClass(ThisLi, "RealParamMenuLi")) TheLi = ThisLi;
  }
  if(TheLi){
    TheLi.parentNode.insertBefore(TextLi, TheLi.nextSibling);
    LiveRC_ManageParams_UpdateTranslationToggleStates(Variable, TextLi);
    LiveRC_ManageParams_AddTextTranslationsAndDescription(TextLi, Variable);
  }
}
 
function LiveRC_ManageParams_UpdateTranslationToggleStates(VariableName, Li){
  var Fieldset = document.getElementById("LiveRC_OptionsContent_"+VariableName);
  if(!Fieldset) return;
  var ToggleSates = LiveRC_ManageParams_UpdateTranslationToggleStates_GetLangStates(Fieldset);
  if(!ToggleSates) return;
  var Spans =  getElementsByClass("ParamMenuLiElement", Li, "span");
  for(var a=0,l=Spans.length;a<l;a++){
    var Label = Spans[a].getElementsByTagName('label')[0];
    if(!Label) continue;
    var SpanLang = Label.innerHTML;
    if(ToggleSates[SpanLang] === true) Spans[a].style.display = "none";
  }
}
 
function LiveRC_ManageParams_UpdateTranslationToggleStates_GetLangStates(Fieldset){
  if(!Fieldset) return false;
  var LangButtons = getElementsByClass("LangToggleButtons", Fieldset, "span")[0];
  if(!LangButtons) return false;
  var ToggleStates = new Array();
  var Inputs = LangButtons.getElementsByTagName('input')
  for(var a=0,l=Inputs.length;a<l;a++){
    ToggleStates[Inputs[a].value] = (Inputs[a].style.color == "red");
  }
  return ToggleStates;
}

/* </source>

====== Onglet de gestion des contacts ======

<source lang=javascript> */

// Création du menu des contacts

function LiveRC_ManageParams_AddContactListMenu(){
    var ContactListUl = document.getElementById("LiveRC_OptionsContent_ContactListLegendListUL");
    if(!ContactListUl) ContactListUl = LiveRC_ManageParams_CreateNewListMenu("ContactListLegend", LiveRC_ManageParams_CreateContactButtons(), 3);
    if(!ContactListUl) return;
    while(ContactListUl.firstChild){ ContactListUl.removeChild(ContactListUl.firstChild); }
    var count = 0;
    for (var user in LiveRC_Config["Contact"]) {
        if(!LiveRC_Config["Contact"][user]) continue;
        count++
        var P = document.createElement('li');
        addClass(P, "ParamMenuLi");
        var Link = document.createElement('a');
        Link.className = "contact";
        Link.title = user;
        Link.innerHTML = user;
        Link.href= "javascript:liveArticle("+lrcEscapeStr(user)+");";
        P.appendChild(Link);
        P.appendChild(document.createTextNode(" "));
        P.appendChild(LiveRC_ManageParams_AddDeleteUserLink());
        ContactListUl.appendChild(P);
    }
    if(count<1 && !LiveRC_Config["ListLoaded"]["Watchlist"]){
        var P = document.createElement('li');
        addClass(P, "error");
        P.style.textAlign = "center";
        P.innerHTML = lrcMakeText("WatchlistNotLoaded");
        ContactListUl.appendChild(P); 
    }
}

// Création boutons

function LiveRC_ManageParams_CreateContactButtons(){
    var Paragraphe = document.createElement('p');
    Paragraphe.className = 'ActionButtons';
    var InputAdd = document.createElement('input');
    InputAdd.type = "button";
    InputAdd.value = lrcMakeText("ADDCONTACT");
    InputAdd.onclick = function(){ LiveRC_ManageParams_AddNewContact(); };
    InputAdd.onselect = function(){ LiveRC_ManageParams_AddNewContact(); };
    Paragraphe.appendChild(InputAdd);
    var InputOK = document.createElement('input');
    InputOK.type = "button";
    InputOK.value = lrcMakeText("OK");
    InputOK.onclick = function(){ LiveRC_ManageParams_CheckContactListMenu(); };
    InputOK.onselect = function(){ LiveRC_ManageParams_CheckContactListMenu(); };
    Paragraphe.appendChild(InputOK);
    var CancelInput = document.createElement('input');
    CancelInput.type = "button";
    CancelInput.value = lrcMakeText("Cancel");
    CancelInput.onclick = function(){ LiveRC_ManageParams_CloseMenu(this); return false;}
    CancelInput.onselect = function(){ LiveRC_ManageParams_CloseMenu(this); return false;}
    Paragraphe.appendChild(CancelInput);
    return Paragraphe;
}

// Ajout d'un contact

function LiveRC_ManageParams_AddNewContact(Name){
    var Ul  = document.getElementById("LiveRC_OptionsContent_ContactListLegendListUL");
    if(!Ul) return;
    var P = document.createElement('li');
    addClass(P, "ParamMenuLi");
    var Span = document.createElement('span')
    var Input = document.createElement('input');
    Input.type = "text";
    Input.value = (Name ? Name : "");
    Span.appendChild(Input);
    var InputOK = document.createElement('input');
    InputOK.type = "button";
    InputOK.value = lrcMakeText("OK");
    InputOK.onclick = function(){ LiveRC_ManageParams_AddThisContact(this); };
    InputOK.onselect = function(){ LiveRC_ManageParams_AddThisContact(this); };
    Span.appendChild(InputOK);
    P.appendChild(Span);
    P.appendChild(document.createTextNode(" "));
    P.appendChild(LiveRC_ManageParams_AddDeleteUserLink());
    Ul.appendChild(P);
    LiveRC_Suggest_AddUserSuggestion({
        "InputNode"       : Input
    });
    Input.focus();
}

// Ajout d'un contact (validation)

function LiveRC_ManageParams_AddThisContact(OK){
    if(!OK) return;
    var Li = OK.parentNode.parentNode;
    if(!Li) return;
    var UserInput = Li.getElementsByTagName('input')[0]
    if(!UserInput) return;
    var User = UserInput.value;
    if(!User) return;
    Li.removeChild(Li.getElementsByTagName('span')[0]);
    var Link = document.createElement('a');
    Link.className = "contact";
    Link.title = User;
    Link.innerHTML = User;
    Link.href= "javascript:liveArticle("+lrcEscapeStr(User)+");";
    Li.insertBefore(Link, Li.firstChild);
}

// Vérification du menu des contacts

function LiveRC_ManageParams_CheckContactListMenu(){
    var Menu = document.getElementById("LiveRC_OptionsContent_ContactListLegendListUL");
    if(!Menu) return;
    var Contacts = getElementsByClass("contact", Menu, "a");
    var ContactList = new Array();
    for(var a=0,l=Contacts.length;a<l;a++){
        var userName = Contacts[a].title;
        ContactList.push(userName);
        if(!LiveRC_Config["Contact"][userName]){
            LiveRC_WatchUser(userName , true);
        }
    }
    for(var user in LiveRC_Config["Contact"]){
        if(ContactList.indexOf(user)==-1){
            LiveRC_WatchUser(user, false);
        }
    }
}
/* </source>

====== Onglet de gestion des utilisateurs masqués ======

<source lang=javascript> */

// Création du menu des utilisateurs masqués

function LiveRC_ManageParams_AddHiddenListMenu(){
    var HiddenListUl = document.getElementById("LiveRC_OptionsContent_HiddenListLegendListUL");
    if(!HiddenListUl) HiddenListUl = LiveRC_ManageParams_CreateNewListMenu("HiddenListLegend", LiveRC_ManageParams_CreateHiddenButtons(), 3);
    if(!HiddenListUl) return;
    while(HiddenListUl.firstChild){ HiddenListUl.removeChild(HiddenListUl.firstChild); }
    var count = 0;
    for (var user in LiveRC_Config["Hidden"]) {
        if(!LiveRC_Config["Hidden"][user]) continue;
        count++
        var P = document.createElement('li');
        addClass(P, "ParamMenuLi");
        var Link = document.createElement('a');
        Link.className = "hiddenuser";
        Link.title = user;
        Link.innerHTML = user;
        Link.href= "javascript:liveArticle("+lrcEscapeStr(user)+");";
        P.appendChild(Link);
        P.appendChild(document.createTextNode(" "));
        P.appendChild(LiveRC_ManageParams_AddDeleteUserLink());
        HiddenListUl.appendChild(P);
    }
    if(count<1 && !LiveRC_Config["ListLoaded"]["Watchlist"]){
        var P = document.createElement('li');
        addClass(P, "error");
        P.style.textAlign = "center";
        P.innerHTML = lrcMakeText("WatchlistNotLoaded");
        HiddenListUl.appendChild(P); 
    }
}

// Création boutons

function LiveRC_ManageParams_CreateHiddenButtons(){
    var Paragraphe = document.createElement('p');
    Paragraphe.className = 'ActionButtons';
    var InputAdd = document.createElement('input');
    InputAdd.type = "button";
    InputAdd.value = lrcMakeText("ADDHIDDEN");
    InputAdd.onclick = function(){ LiveRC_ManageParams_AddNewHidden(); };
    InputAdd.onselect = function(){ LiveRC_ManageParams_AddNewHidden(); };
    Paragraphe.appendChild(InputAdd);
    var InputOK = document.createElement('input');
    InputOK.type = "button";
    InputOK.value = lrcMakeText("OK");
    InputOK.onclick = function(){ LiveRC_ManageParams_CheckHiddenListMenu(); };
    InputOK.onselect = function(){ LiveRC_ManageParams_CheckHiddenListMenu(); };
    Paragraphe.appendChild(InputOK);
    var CancelInput = document.createElement('input');
    CancelInput.type = "button";
    CancelInput.value = lrcMakeText("Cancel");
    CancelInput.onclick = function(){ LiveRC_ManageParams_CloseMenu(this); return false;}
    CancelInput.onselect = function(){ LiveRC_ManageParams_CloseMenu(this); return false;}
    Paragraphe.appendChild(CancelInput);
    return Paragraphe;
}

// Ajout d'un utilisateur masqué

function LiveRC_ManageParams_AddNewHidden(Name){
    var Ul  = document.getElementById("LiveRC_OptionsContent_HiddenListLegendListUL");
    if(!Ul) return;
    var P = document.createElement('li');
    addClass(P, "ParamMenuLi");
    var Span = document.createElement('span')
    var Input = document.createElement('input');
    Input.type = "text";
    Input.value = (Name ? Name : "");
    Span.appendChild(Input);
    var InputOK = document.createElement('input');
    InputOK.type = "button";
    InputOK.value = lrcMakeText("OK");
    InputOK.onclick = function(){ LiveRC_ManageParams_AddThisHidden(this); };
    InputOK.onselect = function(){ LiveRC_ManageParams_AddThisHidden(this); };
    Span.appendChild(InputOK);
    P.appendChild(Span);
    P.appendChild(document.createTextNode(" "));
    P.appendChild(LiveRC_ManageParams_AddDeleteUserLink());
    Ul.appendChild(P);
    LiveRC_Suggest_AddUserSuggestion({
        "InputNode"       : Input
    });
    Input.focus();
}

// Ajout d'un utilisateur masqué (validation)

function LiveRC_ManageParams_AddThisHidden(OK){
    if(!OK) return;
    var Li = OK.parentNode.parentNode;
    if(!Li) return;
    var UserInput = Li.getElementsByTagName('input')[0]
    if(!UserInput) return;
    var User = UserInput.value;
    if(!User) return;
    Li.removeChild(Li.getElementsByTagName('span')[0]);
    var Link = document.createElement('a');
    Link.className = "hiddenuser";
    Link.title = User;
    Link.innerHTML = User;
    Link.href= "javascript:liveArticle("+lrcEscapeStr(User)+");";
    Li.insertBefore(Link, Li.firstChild);
}

// Vérification du menu des utilisateurs masqués

function LiveRC_ManageParams_CheckHiddenListMenu(){
    var Menu = document.getElementById("LiveRC_OptionsContent_HiddenListLegendListUL");
    if(!Menu) return;
    var Hiddens = getElementsByClass("hiddenuser", Menu, "a");
    var HiddenList = new Array();
    for(var a=0,l=Hiddens.length;a<l;a++){
        var userName = Hiddens[a].title;
        HiddenList.push(userName);
        if(!LiveRC_Config["Hidden"][userName]){
            LiveRC_HideUser(userName , true);
        }
    }
    for(var user in LiveRC_Config["Hidden"]){
        if(HiddenList.indexOf(user)==-1){
            LiveRC_HideUser(user, false);
        }
    }
}
/* </source>

====== Onglet de gestion des extensions ======

<source lang=javascript> */

// Création du menu des extensions

function LiveRC_ManageParams_AddExtensionsMenu(){
    var ExtensionUl = LiveRC_ManageParams_CreateNewListMenu("ExtensionsLegend", LiveRC_ManageParams_CreateActionButtons());
    if(!ExtensionUl) return;
    for(var a=0,l=lrcExtensions.length;a<l;a++){
        var ThisExtension = lrcExtensions[a];
        var P = document.createElement('li');
        addClass(P, "ParamMenuLi");
        var Input = document.createElement('input');
        Input.id = ThisExtension["name"];
        Input.name = ThisExtension["name"];
        Input.type = "checkbox";
        if(ThisExtension["Installed"] && ThisExtension["Installed"]==true) Input.checked = "checked";
        var ExtDesc = ThisExtension[("desc-"+lrcMakeParam("Language"))];
        if(!ExtDesc) ExtDesc = ThisExtension[("desc-"+LiveRC_Config["MediawikiGeneralConfig"]["lang"])];
        if(!ExtDesc) ExtDesc = ThisExtension["desc"];
        var Label = document.createElement('label');
        Label.setAttribute('for', ThisExtension["name"]);
        Label.innerHTML = '<a href="'+ThisExtension["url"]+'" target="_blank" >'+ThisExtension["name"]+'</a>&nbsp;:&nbsp;' +ExtDesc;
        P.appendChild(Input);
        P.appendChild(document.createTextNode(" "));
        P.appendChild(Label);
        ExtensionUl.appendChild(P);
    }
}

/* </source>

====== Onglet de gestion des styles personnels ======

<source lang=javascript> */

// Création du menu des styles

function LiveRC_ManageParams_AddStylesMenu(){
    var StylesUl = LiveRC_ManageParams_CreateNewListMenu("lrcCSSstyles", LiveRC_ManageParams_CreateStylesButtons());
    if(!StylesUl) return;
    var personalstylecount = 0;
    for(var a=0,l=lrcCSSstyles.length;a<l;a++){
        var ThisStyle = lrcCSSstyles[a];
        var customtarget = false;
        var target = ThisStyle.target;
        if(!target){
            target = ThisStyle.customtarget;
            customtarget = true;
        }
        var customstyle = true;
        var style = ThisStyle.customstyle;
        if(!style || style === ThisStyle.style){
            style = ThisStyle.style;
            customstyle = false;
        }
        var styleName = target.replace(/ /g, "_");
        var P = document.createElement('li');
        addClass(P, "ParamMenuLi");
        var TargetInput = document.createElement('input');
        TargetInput.id = "target-"+styleName;
        TargetInput.name = "target-"+styleName;
        TargetInput.type = "text";
        TargetInput.size = 30;
        TargetInput.value = target;
        if(customtarget) TargetInput.style.color = "red";
        else TargetInput.disabled = "disabled";
        var StyleInput = document.createElement('input');
        StyleInput.id = "style-"+styleName;
        StyleInput.name = "style-"+styleName;
        StyleInput.type = "text";
        StyleInput.size = 60;
        StyleInput.value = style;
        if(customstyle) StyleInput.style.color = "red";
        var Label = document.createElement('label');
        Label.setAttribute('for', styleName);
        var StyleDesc = ThisStyle[("desc-"+lrcMakeParam("Language"))];
        if(!StyleDesc) StyleDesc = ThisStyle["desc"];
        if(!StyleDesc){
            personalstylecount++;
            StyleDesc = lrcMakeText("NewPersonalStyle")+" "+personalstylecount;
        }
        Label.innerHTML = StyleDesc;
        if(customtarget) Label.style.color = "red";
        P.appendChild(TargetInput);
        P.appendChild(document.createTextNode(" "));
        P.appendChild(StyleInput);
        P.appendChild(document.createTextNode(" "));
        P.appendChild(Label);
        if(customtarget){
            P.appendChild(document.createTextNode(" "));
            P.appendChild(LiveRC_ManageParams_AddDeleteParamLineLink());
        }
        StylesUl.appendChild(P);
    }
    StylesUl.appendChild(LiveRC_ManageParams_CreateAddNewStyleButton());
}

function LiveRC_ManageParams_CreateStylesButtons(){
    var ActionP = document.createElement('p');
    ActionP.className = 'ActionButtons';
    var OKInput = document.createElement('input');
    OKInput.type = "button";
    OKInput.value = lrcMakeText("OK");
    OKInput.onclick = function(){ LiveRC_ManageParams_CheckCSSMenu(this); return false;}
    OKInput.onselect = function(){ LiveRC_ManageParams_CheckCSSMenu(this); return false;}
    ActionP.appendChild(OKInput);
    var RAZInput = document.createElement('input');
    RAZInput.type = "button";
    RAZInput.value = lrcMakeText("RAZ");
    RAZInput.onclick = function(){ LiveRC_ManageParams_RAZCSSParams(this); return false;}
    RAZInput.onselect = function(){ LiveRC_ManageParams_RAZCSSParams(this); return false;}
    ActionP.appendChild(RAZInput);
    var CancelInput = document.createElement('input');
    CancelInput.type = "button";
    CancelInput.value = lrcMakeText("Cancel");
    CancelInput.onclick = function(){ LiveRC_ManageParams_CloseMenu(this); return false;}
    CancelInput.onselect = function(){ LiveRC_ManageParams_CloseMenu(this); return false;}
    ActionP.appendChild(CancelInput);
    return ActionP;
}

function LiveRC_ManageParams_CreateAddNewStyleButton(){
    var P = document.createElement('li');
    var Types = new Array()
    for(var VarIndex in lrcCSSstyles[0]){
        Types.push(lrcEscapeStr(VarIndex)+":"+lrcEscapeStr(""));
    }
    P.innerHTML = '<a id="AddParam_lrcCSSstyles" '
                + 'href="javascript:LiveRC_ManageParams_AddNewStyle('+lrcEscapeStr("lrcCSSstyles")+', {'+Types.join(",")+'});" >(+)</a>';
    return P;
}
 
// Ajouter une nouvelle ligne
 
function LiveRC_ManageParams_AddNewStyle(Id, Vars){
    var Link = document.getElementById('AddParam_'+Id);
    if(!Link) return;
    var P = document.createElement('li');
    addClass(P, "ParamMenuLi");
    var LiId = generateNewID();
    var TargetInput = document.createElement('input');
    TargetInput.id = "target-"+LiId;
    TargetInput.name = "target-"+LiId;
    TargetInput.type = "text";
    TargetInput.size = 30;
    TargetInput.value = "";
    TargetInput.style.color = "red";
    var StyleInput = document.createElement('input');
    StyleInput.id = "style-"+LiId;
    StyleInput.name = "style-"+LiId;
    StyleInput.type = "text";
    StyleInput.size = 60;
    StyleInput.value = "";
    StyleInput.style.color = "red";
    var Label = document.createElement('label');
    Label.setAttribute('for', LiId);
    Label.innerHTML = lrcMakeText("NewPersonalStyle");
    Label.style.color = "red";
    P.appendChild(TargetInput);
    P.appendChild(document.createTextNode(" "));
    P.appendChild(StyleInput);
    P.appendChild(document.createTextNode(" "));
    P.appendChild(Label);
    P.appendChild(document.createTextNode(" "));
    P.appendChild(LiveRC_ManageParams_AddDeleteParamLineLink());
    var Li = Link.parentNode;
    Li.parentNode.insertBefore(P, Li);
}

function LiveRC_ManageParams_CheckCSSMenu(OKInput){
    var StyleMenu = document.getElementById("LiveRC_OptionsContent_lrcCSSstyles");
    if(!StyleMenu) return;
    var NewStyles = new Array();
    NewStyles.push("\n/* ** "+lrcMakeText("Comment") + " ** */\n\n");
    var StyleLis = StyleMenu.getElementsByTagName('li');   
    for(var a=0,l=StyleLis.length;a<l;a++){
        var Li = StyleLis[a];
        var Inputs = Li.getElementsByTagName('input');
        var StyleTargetInput = Inputs[0];
        var StyleParamsInput = Inputs[1];
        if(!StyleTargetInput || !StyleParamsInput) continue;
        var StyleTarget = StyleTargetInput.value;
        var StyleParams = StyleParamsInput.value;
        if(!StyleTarget || !StyleParams) continue;
        StyleParams = LiveRC_ManageParams_StripStyle(StyleParams);
        var Stylechanged = true;
        for(var s=0,lens=lrcCSSstyles.length;s<lens;s++){
            if(!Stylechanged) continue;
            var OldStyle = lrcCSSstyles[s];
            var OldStyleTarget = OldStyle.target;
            if(!OldStyleTarget || (OldStyleTarget != StyleTarget)) continue;
            var OldStyleParams = OldStyle.style;
            if(!OldStyleParams) continue;
            if(StyleParams == LiveRC_ManageParams_StripStyle(OldStyleParams) ) Stylechanged = false;
        }
        if(!Stylechanged) continue;
        var StyleNameLabel = Li.getElementsByTagName('label')[0];
        var StyleName = (StyleNameLabel ? StyleNameLabel.innerHTML : "");
        StyleParams = StyleParams.replace(/;$/g, "").split(";");
        var NewStyleText = '/* --- ' + StyleName + ' --- */\n\n'
                         + StyleTarget + ' {\n'
                         + '  ' + StyleParams.join(';\n  ') + ';\n'
                         + '}\n\n\n';
        NewStyles.push(NewStyleText);
    }
    LiveRC_ManageParams_SaveCSSParams(NewStyles, OKInput);    
}

function LiveRC_ManageParams_RAZCSSParams(RAZInput){
    var NewStyles = new Array();
    NewStyles.push("\n/* ** "+lrcMakeText("Comment") + " ** */\n\n");
    LiveRC_ManageParams_SaveCSSParams(NewStyles, RAZInput);
}

function LiveRC_ManageParams_SaveCSSParams(NewStyles, Input){
    var Menu = document.getElementById("LiveRC_OptionsContent_lrcCSSstyles");
    if(Input) Input.disabled = "disabled";
    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(!P){
        P = document.createElement('p');
        P.id = "LiveRC_ParamMenuRunning";
        Menu.insertBefore(P,Menu.firstChild);
    }
    if(P){
        P.innerHTML = lrcMakeText("EditRunning").split("$1").join(lrcGetNamespaceName(2)+":"+wgUserName+"/LiveRCparam.css")
                    + '<span style="text-decoration:blink;">…</span>';
    }
    wpajax.http({ url: wgServer + wgScript + '?title='+lrcGetNamespaceName(2)+':' + encodeURIComponent(wgUserName) + '/LiveRCparam.css&action=edit',
                onSuccess: LiveRC_ManageParams_SaveCSSParamsRunning, newtext:NewStyles.join(""), input:Input});
}


function LiveRC_ManageParams_SaveCSSParamsRunning(Req, data){
    var Temp = document.createElement('div');
    Temp.id = "TempDiv";
    Temp.style.display = "none";
    document.body.insertBefore(Temp, document.body.firstChild);
    Temp.innerHTML = Req.responseText;
    var Textarea = getElementWithId("wpTextbox1", 'textarea', Temp);
    Textarea.value = data.newtext + "\n/* {{"+LiveRC_Config["CustomCatTemplate"] +"}} */\n";
    getElementWithId("wpSummary", 'input', Temp).value = lrcMakeText("RESUMESTART") + lrcMakeText("Comment");
    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(P){
        P.innerHTML += "<br />"
                     + lrcMakeText("SaveRunning").split("$1").join(lrcGetNamespaceName(2)+":"+wgUserName+"/LiveRCparam.css")
                     + '<span style=\"text-decoration:blink;\">…</span>';
    }
    var Editform = getElementWithId("editform", 'form', Temp);
    var action = Editform.action;
    var params = new Array();
    var Params = getFormParams(Editform);
    for(var Param in Params){
        params.push(Param+"="+encodeURIComponent(Params[Param]));
    }
    var headers = new Array();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    wpajax.http({ url: action,
                  method: "POST", headers: headers,
                  onSuccess:LiveRC_ManageParams_SaveCSSParamsDone,
                  data: params.join("&"),
                  input:data.input
    });
    if(Temp) Temp.parentNode.removeChild(Temp);
}

function LiveRC_ManageParams_SaveCSSParamsDone(Req, data){
    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(P){
        P.innerHTML = ""
                    + lrcMakeText("SaveDone").split("$1").join(lrcGetNamespaceName(2)+":"+ wgUserName+"/LiveRCparam.css" )
                    + "<br/>"
                    + '<span class="error">' + lrcMakeText("SaveRefresh") + '</span>'
                    + '<sup>'
                      +  '<a class="LiveRC_ManageParams_SaveParamsRefresh" '
                        +  'href="javascript:;" onclick="LiveRC_ManageParams_SaveParamsRefresh();" '
                        +  'title="'+lrcMakeText("HideRefreshP_TIP")+'" >'
                        + lrcMakeText("HideRefreshP_SHORT")
                      +  '</a>'
                    +  '</sup>';
    }
    if(data.input) data.input.disabled = false;

}

/* </source>

===== Vérification du menu / sauvegarde =====

<source lang=javascript> */

function LiveRC_ManageParams_CheckMenu(Input){
    var Menu = document.getElementById("LiveRC_ParamMenu");
    if(!Menu) return;
    lrcDisableLink(Input);
 // Variables
    var FieldSets = Menu.getElementsByTagName('fieldset');
    for(var b=0,m=FieldSets.length;b<m;b++){
        var ArrayName = FieldSets[b].id.split("LiveRC_OptionsContent_").join("");
        if(!LiveRC_Config["LiveRCcustomParams"][ArrayName]) continue;
        var AddButton = LiveRC_Config["LiveRCcustomParams"][ArrayName]["AddButton"];
        var Lis = FieldSets[b].getElementsByTagName('li');
        for(var a=0,l=Lis.length;a<l;a++){
            var ThisLi = Lis[a];
            if(!hasClass(ThisLi, "RealParamMenuLi")) continue;
            var Inputs = new Array();
            Inputs.push(ThisLi.getElementsByTagName('input')[0]);
            var ElementSpans = getElementsByClass("ParamMenuLiElement", ThisLi, "span");
            for(var y=0,z=ElementSpans.length;y<z;y++){
                var ElementSpan = ElementSpans[y];
                var InputList = ElementSpan.getElementsByTagName('input');
                var SelectList = ElementSpan.getElementsByTagName('select');
                for(var S=0,Slen=InputList.length;S<Slen;S++){ Inputs.push(InputList[S]); }
                for(var S=0,Slen=SelectList.length;S<Slen;S++){ Inputs.push(SelectList[S]); }
            }
            var Type = Inputs.length;      
            if(Type==0) continue;
            var LiParamName = Inputs[0].value;
            if(Type>2){   // ------------------------- object
                if(typeof(LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName])=='undefined'){
                    LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName] = new Array();
                    LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["ValueType"] = "object";
                    LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["AddButton"] = true;
                }
                var NewValue = new Array();
                for(var i=1,il=Inputs.length;i<il;i++){
                    var Input = Inputs[i];
                    var iName = Input.name;
                    var iValue;
                    if(Input.type && Input.type=="checkbox"){
                        iValue = Input.checked;
                    }else{
                        iValue = Input.value;
                        if(hasClass(Input.parentNode, "ParamMenuLiElement_number")) iValue = parseInt(iValue);
                    }
                    NewValue[iName] = iValue;
                }
                LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["NewValue"] = NewValue;
            }else{                // ------------------------- boolean, number, text
                var Input = Inputs[1];
                if(!Input) continue;
                var InputType = Input.type;
                var InputId = Input.id;
                if(typeof(LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName])=='undefined'){
                    LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName] = new Array();
                }
                if(InputType && InputType=="checkbox"){
                    LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["NewValue"] = Input.checked;
                }else{
                    if(LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["ValueType"] == "string") LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["NewValue"] = Input.value;
                    if(LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["ValueType"] == "number") LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["NewValue"] = parseInt(Input.value);

                }
            }
        }
    }
 // Extensions
    var ExtensionToInstall = new Array();
    var ExtensionsFieldset = document.getElementById("LiveRC_OptionsContent_ExtensionsLegend");
    var Inputs = ExtensionsFieldset.getElementsByTagName('input');
     var Extensions = lrcExtensions_Custom;
    if(!Extensions || Extensions.length==0) Extensions = Custom_lrcExtensions; 
    if(!Extensions || Extensions.length==0) Extensions = lrcExtensions; 
    for(var a=0,l=Inputs.length;a<l;a++){
        var iName = Inputs[a].name;
        if(Inputs[a].checked){
            for(var b=0,m=Extensions.length;b<m;b++){
                var ExtName = Extensions[b]["name"];
                if(ExtName==iName) ExtensionToInstall[ExtName] = true;
            }
        }
    }
    LiveRC_ManageParams_CreateNewParamPage(ExtensionToInstall);
}

// Création nouveau script (≠RAZ)
 
function LiveRC_ManageParams_CreateNewParamPage(ExtensionToInstall){
    var TextVariables = {
        "lrcTranslatedTexts"     : "addCustomTradToTranslatedTexts",
        "lrcTranslatedParamDesc" : "addCustomTradToTranslatedParamDesc"
    };
    var ParamPage = "// "+lrcMakeText("EditCustom")+ "\n";
    var Variables = "\n/* ** "+lrcMakeText("VariableLegend") + " ** */\n\n";
    Variables += "function LiveRC_getUserCustom(){\n\n";
    for(var ArrayName in LiveRC_Config["LiveRCcustomParams"]){
        var ThisArray = LiveRC_Config["LiveRCcustomParams"][ArrayName];
        if( (new Array("string","number","boolean","object")).indexOf(typeof(ThisArray))==-1) continue;
        var ParamStyle = "normal";
        var ThisVariableText = "";
        var Desc = lrcMakeParamDescription(ArrayName);
        var ThisVariableValues = new Array();
        var totalcustom = false;
        var addbutton = false;
        for(var LiParamName in ThisArray){
            var ParamLine = ThisArray[LiParamName];
            if( (new Array("string","number","boolean","object")).indexOf(typeof(ParamLine))==-1) continue;
            var ValueType = ParamLine["ValueType"];
            var DefaultValue = ParamLine["DefaultValue"];
            var OldValue = ParamLine["OldValue"];
            var NewValue = ParamLine["NewValue"];
            var strNewValue = lrcEscapeStrHTML(NewValue);
            var AddButton = ParamLine["AddButton"];
            var AddCustomFunction = ParamLine["AddCustomFunction"];
            var linecustom = false;
            if(ValueType=="object" && AddButton){
                addbutton = true;
                if(typeof(NewValue)=="undefined") continue;
                var ThisLineValues = new Array();
                for(var valuename in NewValue){
                    var newvaluevalue = NewValue[valuename];
                    var newvaluetype = typeof(newvaluevalue);
                    if( (new Array("string","number","boolean")).indexOf(newvaluetype)==-1) continue;
                    if(newvaluetype=="string") newvaluevalue = lrcEscapeStrHTML(newvaluevalue);
                    if(newvaluetype=="boolean") newvaluevalue = (newvaluevalue ? "true" : "false");
                    if(typeof(NewValue[valuename])!= "undefined") ThisLineValues.push(lrcEscapeStrHTML(valuename)+":"+newvaluevalue);
                    if(typeof(DefaultValue)=="undefined" || typeof(DefaultValue[valuename])=="undefined" || (typeof(NewValue[valuename])!= "undefined" && NewValue[valuename] !== DefaultValue[valuename])){
                        totalcustom = true;
                    }
                }
                if(ThisLineValues.length>0) ThisVariableValues.push("      {" + ThisLineValues.join(",") + "}");
            }else if(ValueType=="object"){
                var ThisLineValues = new Array();
                for(var valuename in NewValue){
                    var newvaluevalue = NewValue[valuename];
                    var newvaluetype = typeof(newvaluevalue);
                    if( (new Array("string","number","boolean","object")).indexOf(newvaluetype)==-1) continue;
                    if(newvaluetype=="string") newvaluevalue = lrcEscapeStrHTML(newvaluevalue);
                    if(newvaluetype=="boolean") newvaluevalue = (newvaluevalue ? "true" : "false");
                    ThisLineValues.push(lrcEscapeStrHTML(valuename)+":"+newvaluevalue);
                    if(typeof(DefaultValue)=="undefined" || typeof(DefaultValue[valuename])=="undefined" || NewValue[valuename] !== DefaultValue[valuename]){
                        linecustom = true;
                    }
                }
                if(linecustom){
                    var ValuesLine = "{" + ThisLineValues.join(",") + "}";
                    if(AddCustomFunction){
                        ThisVariableValues.push("    "+AddCustomFunction+"(\""+LiParamName+"\"," + ValuesLine + ");\n");
                    }else{
                        ThisVariableValues.push("    Custom_"+ArrayName+"[\""+LiParamName+"\"] = " + ValuesLine + ";\n");
                    }
                }
            }else if((ValueType=="string") && (NewValue !== DefaultValue)){
                if(AddCustomFunction){
                    ThisVariableValues.push("    "+AddCustomFunction+"(\""+LiParamName+"\","+strNewValue+");\n");
                }else{
                    ThisVariableValues.push("    Custom_"+ArrayName+"[\""+LiParamName+"\"] = "+strNewValue+";\n");
                }
            }else if((ValueType=="number") && (NewValue !== DefaultValue)){
                if(AddCustomFunction){
                    ThisVariableValues.push("    "+AddCustomFunction+"(\""+LiParamName+"\","+NewValue+");\n");
                }else{
                    ThisVariableValues.push("    Custom_"+ArrayName+"[\""+LiParamName+"\"] = " + NewValue + ";\n");
                }
            }else if((ValueType=="boolean") && (NewValue !== DefaultValue)){
                if(AddCustomFunction){
                    ThisVariableValues.push("    "+AddCustomFunction+"(\""+LiParamName+"\","+(NewValue ? "true" : "false")+");\n");
                }else{
                    ThisVariableValues.push("    Custom_"+ArrayName+"[\""+LiParamName+"\"] = "+(NewValue ? "true":"false")+";\n");
                }
            }
        }
        if(addbutton && totalcustom){
            if(AddCustomFunction){
                ThisVariableText="    "+AddCustomFunction+"([\n"+ThisVariableValues.join(",\n")+"\n    ]);\n";
            }else{
                ThisVariableText = "    Custom_"+ArrayName + " = [\n" + ThisVariableValues.join(",\n") + "\n    ];\n";
            }
        }else if(!addbutton && ThisVariableValues.length>0){
            ThisVariableText = ThisVariableValues.join("");            
        }
        if(ThisVariableText!==""){
            ThisVariableText = "  try{\n" + ThisVariableText + "  }catch(e){ }\n\n";           
            Variables += "\n  // -- "+ Desc +" --\n\n" + ThisVariableText;
        }
    }
    Variables += "}\n\n";
    try{ eval(Variables); LiveRC_getUserCustom(); }catch(e){ }
    ParamPage += Variables;
    var Extensions = "\n/* ** "+lrcMakeText("ExtensionLegend") + " ** */\n\n"
                     + LiveRC_Config["ExtensionSetupComment"];
    var ExtensionList = "";
    var ExtensionArray = lrcExtensions_Custom;
    if(!ExtensionArray || ExtensionArray.length == 0) ExtensionArray = Custom_lrcExtensions; 
    if(!ExtensionArray || ExtensionArray.length == 0) ExtensionArray = lrcExtensions;
    for(var ArrayName in ExtensionArray){
        var ThisArray = ExtensionArray[ArrayName];
        if(ExtensionToInstall[ThisArray["name"]] === true){
            Extensions += " |"+ThisArray["name"]+"|";
            var ExtDesc = ThisArray[("desc-"+lrcMakeParam("Language"))];
            if(!ExtDesc) ExtDesc = ThisArray[("desc-"+LiveRC_Config["MediawikiGeneralConfig"]["lang"])];
            if(!ExtDesc) ExtDesc = ThisArray["desc"];
            ExtensionList += "// -- "+ThisArray["name"]+ " : "+ExtDesc+" --\n"
                           + "importScriptURI('"+ThisArray["url"]+"&action=raw&ctype=text/javascript');\n\n"
        }
    }
    Extensions += "\n\n"+ExtensionList;
    ParamPage += Extensions;
    LiveRC_ManageParams_UpdateParams(ParamPage);
}

// Création nouveau script (RAZ)

function LiveRC_ManageParams_RAZParams(){
    var ParamPage = "// "+lrcMakeText("Comment")+ "\n";
    LiveRC_ManageParams_UpdateParams(ParamPage);
}

// Édition du script

function LiveRC_ManageParams_UpdateParams(NewPage){
    NewPage = LiveRC_Config["ParamStartComment"] + NewPage + "\n" + LiveRC_Config["ParamEndComment"] 
            + "\n// {{"+LiveRC_Config["CustomCatTemplate"] +"}}\n";
    var Menu = document.getElementById("LiveRC_ParamMenuForm");
    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(!P){
        P = document.createElement('p');
        P.id = "LiveRC_ParamMenuRunning";
        Menu.insertBefore(P,Menu.firstChild);
    }
    if(P){
        P.innerHTML = lrcMakeText("EditRunning").split("$1").join(lrcGetNamespaceName(2)+":"+wgUserName+"/LiveRCparam.js")
                    + '<span style="text-decoration:blink;">…</span>';
    }
    wpajax.http({ url: wgServer + wgScript + '?title='+lrcGetNamespaceName(2)+':' + encodeURIComponent(wgUserName) + '/LiveRCparam.js&action=edit',
                onSuccess: LiveRC_ManageParams_SaveParams, param:NewPage});
}

// Sauvegarde du script

function LiveRC_ManageParams_SaveParams(Req, data){
    var NewPage = data.param;
    var Temp = document.createElement('div');
    Temp.id = "TempDiv";
    Temp.style.display = "none";
    document.body.insertBefore(Temp, document.body.firstChild);
    Temp.innerHTML = Req.responseText;
    var Textarea = getElementWithId("wpTextbox1", 'textarea', Temp);
    Textarea.value = NewPage;
    getElementWithId("wpSummary", 'input', Temp).value = lrcMakeText("RESUMESTART") + lrcMakeText("Comment");
    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(P){
        P.innerHTML += "<br />"
                     + lrcMakeText("SaveRunning").split("$1").join(lrcGetNamespaceName(2)+":"+wgUserName+"/LiveRCparam.js")
                     + '<span style=\"text-decoration:blink;\">…</span>';
    }
    var Editform = getElementWithId("editform", 'form', Temp);
    var action = Editform.action;
    var params = new Array();
    var Params = getFormParams(Editform);
    for(var Param in Params){
        params.push(Param+"="+encodeURIComponent(Params[Param]));
    }
    var headers = new Array();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    wpajax.http({ url: action,
                  method: "POST", headers: headers,
                  onSuccess:LiveRC_ManageParams_SaveParamsDone,
                  data: params.join("&")
    });
    if(Temp) Temp.parentNode.removeChild(Temp);
}

// Script sauvegardé

function LiveRC_ManageParams_SaveParamsDone(Req){
    RefreshText = lrcMakeText("SaveDone").split("$1").join(lrcGetNamespaceName(2)+":"+ wgUserName+"/LiveRCparam.js" )
                  + "<br/>" 
                  + '<span class="error">' + lrcMakeText("SaveRefresh") + '</span>'
                  + '<sup>'
                   +  '<a class="LiveRC_ManageParams_SaveParamsRefresh" '
                    +  'href="javascript:;" onclick="LiveRC_ManageParams_SaveParamsRefresh();" '
                    +  'title="'+lrcMakeText("HideRefreshP_TIP")+'" >'
                    + lrcMakeText("HideRefreshP_SHORT")
                   +  '</a>'
                  +  '</sup>';

    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(P) P.innerHTML = RefreshText;
    LiveRC_ManageParams_GlobalFill();
}
 
function LiveRC_ManageParams_SaveParamsRefresh(){
    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(P) P.parentNode.removeChild(P);
}

/* </source>

==== Création/manipulation des variables personnalisables ====

===== Manipulation des paramètres =====

<source lang="javascript"> */

function lrcMakeParam(ParamID){
  var Param = lrcParams_Custom[ParamID];
  if(typeof(Param)=="undefined") Param = Custom_lrcParams[ParamID];
  if(typeof(Param)=="undefined") Param = lrcParams[ParamID];
  return Param;
}

function lrcMakeOption(OptionID){
  var  Option = lrcOptionMenuValues_Custom[OptionID];
  if(typeof(Option)=="undefined") Option = Custom_lrcOptionMenuValues[OptionID];
  if(typeof(Option)=="undefined") Option = lrcOptionMenuValues[OptionID];
  return Option;  
}

function lrcMakeParamMenuTabs(item){
  if(LiveRC_Config["AlwaysShownTabs"].indexOf(item)!=-1) return true;
  var ParamTab = Custom_lstParamMenuTabs[item];
  if(typeof(ParamTab)!=="undefined") return ParamTab;
  return lstParamMenuTabs[item];
}

/* </source>

===== Création/manipulation des textes =====

<source lang="javascript"> */

// Création des textes

function lrcMakeText(TextID){
  var Text = Custom_UnTranslatedTexts[TextID];
  if(typeof(Text)==="string") return Text;
  Text = UnTranslatedTexts[TextID];
  if(typeof(Text)==="string") return Text;
  var Lang = lrcMakeParam("Language");
  if(Custom_lrcTranslatedTexts[TextID] && typeof(Custom_lrcTranslatedTexts[TextID][Lang])==="string") return Custom_lrcTranslatedTexts[TextID][Lang];
  if(lrcTranslatedTexts[TextID] && typeof(lrcTranslatedTexts[TextID][Lang])==="string") return lrcTranslatedTexts[TextID][Lang];
  var DefaultLang = LiveRC_Config["MediawikiGeneralConfig"]["lang"];
  if(lrcTranslatedTexts[TextID] && typeof(lrcTranslatedTexts[TextID][DefaultLang])==="string") return lrcTranslatedTexts[TextID][DefaultLang];
  Text = lrcTexts[TextID];
  if(typeof(Text)==="string") return Text;
  return ("<"+TextID+">").htmlize();
}

// Création du noms des variables

function lrcMakeParamDescription(TextID){
  if(TextID.indexOf("Desc")!==0) TextID = ("Desc"+TextID);
  var Lang = lrcMakeParam("Language");
  if(Custom_lrcTranslatedParamDesc[TextID] && typeof(Custom_lrcTranslatedParamDesc[TextID][Lang])==="string") return Custom_lrcTranslatedParamDesc[TextID][Lang];
  if(lrcTranslatedParamDesc[TextID] && typeof(lrcTranslatedParamDesc[TextID][Lang])==="string") return lrcTranslatedParamDesc[TextID][Lang];
  var DefaultLang = LiveRC_Config["MediawikiGeneralConfig"]["lang"];
  if(lrcTranslatedParamDesc[TextID] && typeof(lrcTranslatedParamDesc[TextID][DefaultLang])==="string") return lrcTranslatedParamDesc[TextID][DefaultLang];
  Text = lrcParamDesc[TextID];
  if(typeof(Text)==="string") return Text;
  return ("<"+TextID+">").htmlize();
}

/* </source>

===== Création des icônes =====

<source lang="javascript"> */

function lrcMakeIcon(ID){
  if(typeof(lrcIcon[ID])==="string") return lrcIcon[ID];
  var Icon = lrcIcons_Custom[ID];  
  if(!Icon) Icon = Custom_lrcIcons[ID];
  if(!Icon) Icon = lrcIcons[ID];
  if(!Icon) return ((typeof(lrcMakeText((ID+"_Title")))==="string" ? lrcMakeText((ID+"_Title")) : "lrcIcons."+ID ) );
  var SRC = (Icon.src ? lrcMakeParam("CommonsURL")+Icon.src : "//upload.wikimedia.org/wikipedia/commons/thumb/0/00/LiveRC-anim.gif/14px-LiveRC-anim.gif");
  var width = (Icon.width ? Icon.width : 14);
  var height = (Icon.height ? Icon.height : width); 
  Icon.height = height;
  var Title_Alt = ( typeof(lrcMakeText(ID+"_Title"))==="string" ? lrcMakeText(ID+"_Title") : "$1" );
  var HTML = ''
  if(Icon.type == "sup_img" || Icon.type == 1){ Icon.type = 1; HTML += '<sup>'; }
  if(Icon.type == "sub_img" || Icon.type == 2){ Icon.type = 2; HTML += '<sub>'; }
  if(Icon.type == "img") Icon.type = 0;
  HTML += '<img class="'+ID+'" '
        + 'src="'+SRC+'" '
        + 'width="'+width+'" '
        + 'height="'+height+'" '
        + 'title="'+Title_Alt+'" '
        + 'alt="'+Title_Alt+'" />'
  if(Icon.type == 1) HTML += '</sup>';
  if(Icon.type == 2) HTML += '</sub>';
  return HTML;
}

/* </source>

===== Fonctions pour les extensions =====

====== Suppression d'une extension ======

<source lang="javascript"> */

function LiveRC_DeleteExtension(extensionName){
  var index = -1;
  for(var a=0,l=lrcExtensions.length;a<l;a++){
    if(lrcExtensions[a].name == extensionName) index = a;
  }
  if(index>-1) lrcExtensions.splice(index, 1);
}

/* </source>

====== Ajout d'une extension ======

<source lang="javascript"> */

function LiveRC_AddNewExtension(extensionValues){
  if(typeof(extensionValues)!="object") return;
  var NeededValues = new Array("name","url","desc");
  for(var a=0,l=NeededValues.length;a<l;a++){
    if(typeof(extensionValues[NeededValues[a]])==="undefined") return;
  }
  LiveRC_AddHook("AfterInitActivationProcess", function(){
    var index = -1;
    for(var ext=0,lext=lrcExtensions.length;ext<lext;ext++){
      if(lrcExtensions[ext]["name"] == extensionValues["name"]) index = ext;
    }
    if(index === -1) lrcExtensions.push(extensionValues);
  });
}

/* </source>

==== Création de liens ====

<source lang="javascript"> */
 
function lrcGetDiffLink(rc){ 
  var title = rc.title;
  var revid = rc.revid;
  var oldid = rc.old_revid;
  var user = rc.user;
  var state = rc.state;
  var escTitle = lrcEscapeStr(title);
  var escUser = lrcEscapeStr(user);
  var diff = "";
  var diffClose = ""; 
  var tr1ID1 = rc.pageid;
  if(!tr1ID1) tr1ID1 = rc.id; // filters
  var tr1ID2 = revid;
  if(!tr1ID2) tr1ID2 = rc.cur_revid; // patrol
  var tr1ID = tr1ID1+"_"+tr1ID2; 
  if (lrcMakeParam("AutoCloseDiff") == 1)
    diffClose='supprLigne(\''+tr1ID+'\');';
  if (lrcHasState(state, "NEW")) {
    diff = '<a class="lrc_PreviewLink newpageDiffLink" '
         + 'href="'+lrcGetPageURL(title)+'" '
         + 'onClick="changeLigne(\''+tr1ID+'\');liveArticle('+escTitle+','+escUser+');'+diffClose+' return false;" '
         + 'title="'+lrcMakeText("DIFFNEW_TIP")+'">'+lrcMakeText("DIFFNEW_SHORT")+'</a>';
  }else if (lrcHasState(state, "LOG")){
    var type=rc.type;
    if (lrcHasState(state, "FEEDBACK")){
        diff = '<a class="lrc_PreviewLink feedbackDiffLink" '
             + 'href="'+lrcGetPageURL('Special:ArticleFeedbackv5/'+title+'/'+rc.feedbackId)+'" '
             + 'onClick="changeLigne(\''+tr1ID+'\'); liveFeedback({title:'+lrcEscapeStr(title)+',user:'+escUser+',token:'+lrcEscapeStr(rc.feedbackId)+'}); '+diffClose+' return false;" '
             + 'title="'+getLogTitle(type)+'">'+type.ucFirst()+'</a>';
      }else if (lrcHasState(state, "ABFILTER")){
        diff = '<a class="'+( rc.filterrevid ? '' : 'lrc_PreviewLink ')+'abfilterDiffLink" '
             + 'href="'+lrcGetUglyPageURL('Special:AbuseLog', '&details='+revid)+'" '
             + 'onClick="changeLigne(\''+tr1ID+'\');liveFilter(\'AbuseLog\', {\'details\':'+revid+'});'+diffClose+' return false;" '
             + 'title="'+lrcMakeText("DIFFFILTER_TIP")+'">'+lrcMakeText("DIFFFILTER_SHORT")+'</a>';
        if(rc.filterrevid){
          diff += ' • '
                + '<a class="lrc_PreviewLink abfilterdiffDiffLink" '
                + 'href="'+lrcGetUglyPageURL(title, '&diff='+rc.filterrevid+'&oldid=prev&unhide=1')+'" '
                + 'onClick="changeLigne(\''+tr1ID+'\');liveDiff('+escTitle+','+lrcEscapeStr(rc.filterrevid)+',\'prev\'); '+diffClose+' return false;" '
                + 'title="'+lrcMakeText("DIFF_TIP")+'">'+lrcMakeText("DIFF_SHORT")+'</a>';
        }
    }else if(lrcHasState(state, "REVIEW")){
      diff = '<a class="reviewDiffLink" '
           + 'href="'+lrcGetUglyPageURL('Special:Log', '&type=review&user=&page='+encodeURIComponent(title))+'" '
           + 'onClick="changeLigne(\''+tr1ID+'\');liveLog(\'review\',{page:'+escTitle+'});'+diffClose+' return false;" '
           + 'title="'+getLogTitle(type)+'">'+type.ucFirst()+'</a>';
      if(rc.reviewedrevid && rc.reviewedoldid){
        diff += ' • '
              + '<a class="lrc_PreviewLink reviewdiffDiffLink" '
              + 'href="'+lrcGetUglyPageURL(title, '&diff='+rc.reviewedrevid+'&oldid='+rc.reviewedoldid+'&unhide=1')+'" '
              + 'onClick="'
                + 'changeLigne(\''+tr1ID+'\');'
                + 'liveDiff('+escTitle+','+lrcEscapeStr(rc.reviewedrevid)+','+lrcEscapeStr(rc.reviewedoldid)+');'
                + diffClose+' return false;" '
              + 'title="'+lrcMakeText("DIFF_TIP")+'">'+lrcMakeText("DIFF_SHORT")+'</a>';
      }
    }else if(lrcHasState(state, "CHECKUSER")){
      diff = '<span class="checkuserDiffLink" '
           + 'title="'+lrcGetMediawikiMessage("checkuserlog", true)+'">Checkuser</span>'
    }else{
      diff = '<a class="'+type+'DiffLink" '
           + 'href="'+lrcGetUglyPageURL('Special:Log', '&type='+type+'&user=&page='+encodeURIComponent(title))+'" '
           + 'onClick="'
             + 'changeLigne(\''+tr1ID+'\');'
             + 'liveLog('+lrcEscapeStr(type)+',{page:'+escTitle+'});'
             + diffClose+' return false;" '
           + 'title="'+getLogTitle(type)+'">'+type.ucFirst()+'</a>';
    }
  }else{
    if(lrcHasState(state, "EXTERNAL")){ // Wikidata
      diff = '<span class="externalDiffLink" '
           + 'title="'+lrcMakeText("DIFFEXTERNAL_TIP")+'">'+lrcMakeText("DIFFEXTERNAL_SHORT")+'</span>'
    }else{  // simple edit
      diff = '<a class="lrc_PreviewLink diffDiffLink" '
           + 'href="'+lrcGetUglyPageURL(title, '&diff='+revid+'&oldid='+oldid+'&unhide=1')+'" '
           + 'onClick="changeLigne(\''+tr1ID+'\');liveDiff('+escTitle+','+lrcEscapeStr(revid)+','+lrcEscapeStr(oldid)+');'+diffClose+' return false;" '
           + 'title="'+lrcMakeText("DIFF_TIP")+'">'+lrcMakeText("DIFF_SHORT")+'</a>'
    }
  }
  return diff;
}
 
function lrcGetArticleLink(rc){
  var user = rc.user;
  var title = rc.title;
  var escTitle = lrcEscapeStr(title);
  var escUser = lrcEscapeStr(user);
  var ns = rc.ns;
  var state = rc.state;
  var preArti = "", arti = "", postArti = "", artiStyle = ""; 
// --------------------------------- Icone avant l'article : type de modification 
  if(!lrcHasState(state, "THANKS")){
    var PCategories = Custom_categoriestests;
    if(PCategories.length===0) PCategories = categoriestests;
    var Templates = Custom_templatestests;
    if(Templates.length===0) Templates = templatestests;


    var testedStates = new Array();
    for(var a=0,l=PCategories.length;a<l;a++){
      var ThisState = PCategories[a].state;
      var ThisIcon = PCategories[a].icon;
      if(lrcHasState(state, ThisState) && testedStates.indexOf(ThisState)==-1 && ThisIcon){
        preArti += lrcMakeIcon(ThisIcon)+'&nbsp;';
        testedStates.push(ThisState);
      }
    }
    for(var a=0,l=Templates.length;a<l;a++){
      var ThisState = Templates[a].state;
      var ThisIcon = Templates[a].icon;
      if(lrcHasState(state, ThisState) && testedStates.indexOf(ThisState)==-1 && ThisIcon){
        preArti += lrcMakeIcon(ThisIcon)+'&nbsp;';
        testedStates.push(ThisState);
      }
    }
  } 
// --------------------------------- Icone après l'article : type et état de l'article 
  if(!lrcHasState(state, "THANKS")){
    if (lrcHasState(state, "FULLLOCK"))
      preArti += lrcMakeIcon("FullLockIcon")+'&nbsp;';
    else if(lrcHasState(state, "LOCK"))
      preArti += lrcMakeIcon("LockIcon")+'&nbsp;';
    if (ns == 0 && lrcHasState(state, "HOMONYMIE")) {
      artiStyle = 'color: darkorange; font-weight: bold; font-style: italic;';
      preArti += lrcMakeIcon("HomonIcon") + ' ';
    }
    if(!lrcHasState(state, "LOG")
      && !lrcHasState(state, "REDIRECT")
      && !lrcHasState(state, "HOMONYMIE")
      && !lrcHasState(state, "PORTAIL")
      && (ns == 0)
      && lrcMakeParam("GetPageInfos"))
        postArti += '<sup style="color:crimson">'+lrcMakeIcon("NoportalIcon")+'</sup>';
    if(!lrcHasState(state, "LOG")
      && !lrcHasState(state, "REDIRECT")
      && (ns == 0)
      && lrcMakeParam("GetPageInfos")
      && rc.backlinks < 3)
        postArti += '<sup style="color:crimson">'+lrcMakeIcon("NoBacklinkIcon").split("$1").join(rc.backlinks)+'</sup>';
    if((!lrcHasState(state, "LOG")||lrcHasState(state, "UPLOAD"))
      && !lrcHasState(state, "REDIRECT")
      && !lrcHasState(state, "CATEGORIZED")
      && (ns == 0 || ns==6)
      && lrcMakeParam("GetPageInfos"))
        postArti += '<sup style="color:crimson">'+lrcMakeIcon("NocatIcon")+'</sup>';
    if(!lrcHasState(state, "LOG")
      && !lrcHasState(state, "REDIRECT")
      && lrcMakeParam("GetPageInfos")
      && (ns == 0)){
        if(lrcHasState(state, "NOLANGLINK")){
          postArti += '<sup style="color:crimson">'+lrcMakeIcon("NolanglinkIcon")+'</sup>';
        }else if(lrcMakeParam("ShowInterwikiList")){
          var iw = rc.langlinks;
          var iwlength = iw.length;
          if(iwlength>0){
            var interwikitext = '<sup style="color:DarkGreen">'+lrcMakeText("NbLanglinkCount_Text")+'</sup>';
            var InterwikiSelected = lrcMakeParam("InterwikiList");
            var InterwikiSplit = InterwikiSelected.split("|");
            var ShownIWlist = new Array();
            var HiddenIWlist = new Array();
            for(var a=0,l=iwlength;a<l;a++){
              var iwlang = iw[a].lang;
              var iwtitle = iw[a].title;
              var iwurl = iw[a].url;
              if(iwlang==LiveRC_Config["MediawikiGeneralConfig"]["lang"]) continue;
              var ThisIWitem = '<a class="external" style="font-family:monospace;" '
                             + 'href="'+iwurl+'" target="_blank" '
                             + 'title="('+iwlang+') '+iwtitle+'"'
                             + '>('+iwlang+')</a>';
              if(InterwikiSplit.indexOf(iwlang)==-1) HiddenIWlist.push(ThisIWitem);
              else ShownIWlist.push(ThisIWitem); 
            }
            var interwikilist = '<b>' + iwlength + '</b>'
                              + '<span"> '+ShownIWlist.join(" ")+' </span>';
            if(HiddenIWlist.length){
              interwikilist += '<span style="display:none;"> '+HiddenIWlist.join(" ")+' </span>'
                             + '<a href="javascript:;" onClick="lrcTogglePreviousSibling(this); return false;" ><sup>⇔</sup></a>';
            }
            postArti += interwikitext.split("$1").join(interwikilist);
          }
        }
    }
  } 
// --------------------------------- Icone et autres infos après l'article : Log 
  if (lrcHasState(state, "MOVE")) {
    postArti = ' '+lrcMakeIcon("MoveIcon")+' '
             + '<a '
             + 'href="'+lrcGetPageURL(rc.new_title)+'" '
             + 'onClick="liveArticle('+lrcEscapeStr(rc.new_title)+','+escUser+'); return false;"'
             + 'title="'+rc.new_title+'" '
             + '>'+lrcStripString(rc.new_title, lrcMakeParam("ArticleLengthLimit"))+'</a>'
             + postArti;
  }else if(lrcHasState(state, "REDIRECT")) {
    artiStyle = 'color: green; font-weight: bold; font-style: italic;';
    postArti += ' '+lrcMakeIcon("RedirectIcon");
    postArti += ' <small><sub><a '
              + 'href="'+lrcGetPageURL(rc.redirect)+'" '
              + 'onClick="liveArticle('+lrcEscapeStr(rc.redirect)+','+escUser+');" '
              + '>'+lrcStripString(rc.redirect, lrcMakeParam("ArticleLengthLimit"))+'</a></sub></small>';
  } else if (lrcHasState(state, "UPLOAD")) {
    postArti += ' '+lrcMakeIcon("UploadIcon");
    if(rc.action!="upload")   postArti += " "+rc.action;
  }else if (lrcHasState(state, "NEWUSER")) {
    postArti += ' '+lrcMakeIcon("NewUserIcon");
    if(rc.action=="autocreate") postArti += ' <sub>autocreate</sub>'
  }else if (lrcHasState(state, "BLOCK")) {
    postArti += ' '+lrcMakeIcon("BlockIcon");
    var blockflags = "";
    if(typeof(rc.flags)==="object"){
      blockflags = new Array();
      for(var flag in rc.flags){
        blockflags.push('<span title="'+rc.flags[flag]+'">'+flag+'</span>')
      }
      blockflags = blockflags.join(" · ")+" – ";
    }
    postArti += ' <sub><small>'
              + blockflags + (rc.duration ? rc.duration : rc.action)
              + '</small></sub>';
  }else if (lrcHasState(state, "GBBLOCK")){
    postArti += ' '+lrcMakeIcon("BlockIcon");
    if(rc.action!="gblock")   postArti + " "+rc.action;
  }else if (lrcHasState(state, "DELETE")) {
    postArti += ' '+lrcMakeIcon("DeleteIcon");
    if(rc.action && rc.action!="delete"){
      postArti += ' <sub><small>'
                + rc.action
                + '</small></sub>';
    }
  }else if (lrcHasState(state, "OVERSIGHT")) {
    postArti += ' '+lrcMakeIcon("OversightIcon");
    if(rc.action){
      postArti += ' <sub><small>'
                + rc.action.replace(/.*\//g, "")
                + '</small></sub>';
    }
  }else if (lrcHasState(state, "CHECKUSER")) {
    postArti += ' '+lrcMakeIcon("CheckUserIcon");
    postArti += ' '+rc.type;
  }else if (lrcHasState(state, "EDUCATIONPROGRAM")) {
    postArti += ' '+lrcMakeIcon("EducationProgramIcon");
    postArti += ' <sub><small>'
              + rc.type
              + '</small></sub>';
  }else if (lrcHasState(state, "PROTECT")) {
    postArti += ' '+lrcMakeIcon("ProtectIcon")
              + ' <sub><small>'
              + '<span '+(rc.protectionparam ? ' title="'+rc.protectionparam+'"' : '')+'>' + rc.action + '</span>'
              + '</small></sub>';
  }else if (lrcHasState(state, "FEEDBACK")) {
    postArti += ' '+lrcMakeIcon("articlefeedbackv5Icon")+'<sub><small'+(rc.action=="create" ? ' style="color:red;" ' : '')+'>'+rc.action+'</small></sub>';
  }else if (lrcHasState(state, "ABFILTER")){
    postArti += ' '+lrcMakeIcon("FilterIcon");
  }else if (lrcHasState(state, "USERRIGHTS")){
    postArti += ' '+lrcMakeIcon("RightsIcon")+" <sup><small>("+rc.oldrights+"→"+rc.newrights+")</small></sup>";
  }else if (lrcHasState(state, "GBUSERRIGHTS")){
    postArti += ' '+lrcMakeIcon("RightsIcon");
  }else if (lrcHasState(state, "RENAMEUSER")){
    postArti += ' '+lrcMakeIcon("RenameuserIcon")+' '
              + '<a '
              + 'href="'+lrcGetPageURL(lrcGetNamespaceName(2)+":"+rc.newuser)+'" '
              + 'onClick="liveArticle('+lrcEscapeStr(lrcGetNamespaceName(2)+":"+rc.newuser)+',' + escUser +'); return false;" '
              + dlbClick + ' style="'+artiStyle+'"'
              + '>'+lrcStripString(lrcGetNamespaceName(2)+":"+rc.newuser, lrcMakeParam("ArticleLengthLimit"))+'</a>';
  }else if (lrcHasState(state, "THANKS")){
    postArti += ' '+lrcMakeIcon("ThanksIcon");
  }else if(lrcHasState(state, "MASSMESSAGE")){
    postArti += ' '+lrcMakeIcon("MassMessageIcon");
  }else if(lrcHasState(state, "PAGETRIAGE-DELETION")){
    postArti += ' '+lrcMakeIcon("PagetriageDeletionIcon");
  }else if(lrcHasState(state, "PAGETRIAGE-CURATION")){
    postArti += ' '+lrcMakeIcon("PagetriageCurationIcon");
    var PTtags = rc.pagetriagetags;
    if(PTtags){
      var pagetriagetagsList = "tag : (";
      for(var a=0,l=PTtags.length;a<l;a++){
         pagetriagetagsList += (a==0 ? '' : ' + ') + PTtags[a];
      }
      postArti += ' <small><sub>'+pagetriagetagsList+')</sub></small>';
    }else{
      postArti += ' <small><sub>'+rc.action+'</sub></small>';
    }
  }else if(lrcHasState(state, "REVIEW")){
    postArti += ' '+lrcMakeIcon("ReviewIcon");
    postArti += ' <small><sub>'+rc.action+'</sub></small>';
  }else if(lrcHasState(state, "STABLE")){
    postArti += ' '+lrcMakeIcon("StableIcon");
    var stableparamstitle = "";
    if(rc.stableparams) stableparamstitle = rc.stableparams.join(" - ");
    postArti += ' <span title="'+stableparamstitle+'">' + rc.action + '</span>';
  }else if(lrcHasState(state, "LIQUIDTHREADS")){
    postArti += ' '+lrcMakeIcon("LiquidThreadsIcon");
    postArti += ' <small><sub>'+rc.action+'</sub></small>';
  }else if(lrcHasState(state, "OAUTH")){
    postArti += ' '+lrcMakeIcon("OAuthIcon");
    postArti += ' <small><sub>'+rc.action+'</sub></small>';
  }else if(lrcHasState(state, "MOODBAR")){
    postArti += ' '+lrcMakeIcon("MoodBarIcon");
    postArti += ' <small><sub>'+rc.action+'</sub></small>';
  }else if(lrcHasState(state, "PAGETRANSLATION") || lrcHasState(state, "TRANSLATORSANDBOX") || lrcHasState(state, "TRANSLATIONREVIEW") || lrcHasState(state, "NOTIFYTRANSLATORS")){
    postArti += ' '+lrcMakeIcon("TranslateIcon");
    postArti += ' <small><sub>'+rc.type+'⇨'+rc.action+'</sub></small>';
  }else if (lrcHasState(state, "EXTERNAL")){
    preArti += ' '+lrcMakeIcon("ExternalIcon");
    if(rc.wikidataitem){
      postArti += ' <sup><small>(<a href="'+lrcMakeParam("WikidataURL").split("$1").join(rc.wikidataitem)+'" title="'+rc.wikidataitem+'" target="_blank" >'+rc.wikidataitem+'</a>)</small></sup>';
    }
  }
// --------------------------------- Article
  var dlbClick = 'onDblClick="window.open(' + lrcEscapeStr(lrcGetPageURL(title)) + ');"'
  var ArticleClass = (rc.redlink ? 'lrc_ArticleLink new' : 'lrc_ArticleLink');
  var ArticleTitle = (rc.redlink ? lrcGetMediawikiMessage("red-link-title", true) : '$1').split("$1").join(title);
  arti = '<a '
       + 'href="'+lrcGetPageURL(title)+'" '
       + 'onClick="liveArticle('+escTitle+','+escUser+'); return false;" '
       + dlbClick 
       + 'class="'+ArticleClass+'" '
       + 'title="'+ArticleTitle+'" '
       + 'style="'+artiStyle+'" >'+lrcStripString(title, lrcMakeParam("ArticleLengthLimit"))+'</a>';

  return (preArti + arti + postArti);
}
 
function lrcGetHistoryLink(rc){
  var title = rc.title;
  var HTML = '<a class="historyLink" '
           + 'href="'+lrcGetUglyPageURL(title,'&action=history') + '" '
           + 'onClick="liveHist('+lrcEscapeStrHTML(title)+'); return false;" '
           + 'title="'+lrcMakeText("HIST_TIP")+' « '+title+' »" '
           + '>'+lrcMakeText("HIST_SHORT")+'</a>';
  return HTML;
}

function lrcGetEditLink(rc){
  var title = rc.title;
  var HTML = '<a class="editLink" '
           + 'href="'+lrcGetUglyPageURL(title,'&action=edit') + '" '
           + 'onClick="liveEdit('+lrcEscapeStrHTML(title)+'); return false;" '
           + 'title="'+lrcMakeText("EDIT_TIP")+' « '+title+' »" '
           + '>'+lrcMakeText("EDIT_SHORT")+'</a>'; 
  return HTML;
}

function lrcGetMoveLink(rc, def){
  if(!def) def = "";
  var title = rc.title;
  if(!lrcUserHasRight("move") || getNamespaceInfoFromPage(title) == 14) return def;
  var HTML = '<a class="moveLink" '
           + 'href="'+lrcGetPageURL('Special:Movepage/'+title) + '" '
           + 'onClick="liveMove('+lrcEscapeStrHTML(title)+'); return false;" '
           + 'title="'+lrcMakeText("MOVE_TIP")+' « '+title+' »" '
           + '>'+lrcMakeText("MOVE_SHORT")+'</a>';
  return HTML;
}

function lrcGetDeleteLink(rc, def){
  if(!def) def = "";
  if (!lrcUserHasRight("delete")) return def;
  var title = rc.title;
  var HTML = '<a class="deleteLink" '
           + 'href="'+lrcGetUglyPageURL(title,'&action=delete') + '" '
           + 'onClick="liveDelete('+lrcEscapeStrHTML(title)+'); return false;" '
           + 'title="'+lrcMakeText("DEL_TIP")+' « '+title+' »" '
           + '>'+lrcMakeText("DEL_SHORT")+'</a>';
  return HTML;
}

function lrcGetProtectLink(rc, def){
  if(!def) def = "";
  var title = rc.title;
  if(!lrcUserHasRight("protect") || getNamespaceInfoFromPage(title) == 8) return def;
  var HTML = '<a class="protectLink" '
           + 'href="'+lrcGetUglyPageURL(title,'&action=protect') + '" '
           + 'onClick="liveProtect('+lrcEscapeStrHTML(title)+'); return false;" '
           + 'title="'+lrcMakeText("PROTECT_TIP")+' « '+title+' »" '
           + '>'+lrcMakeText("PROTECT_SHORT")+'</a>';
  return HTML;
}

function lrcGetStableLink(rc, def){
  if(!def) def = "";
  var title = rc.title;
  if(!lrcUserHasRight("stablesettings") || LiveRC_Config["FlagRevProtection"] || LiveRC_Config["FlagRevNamespaces"].indexOf(getNamespaceInfoFromPage(title)) == -1) return def;
  var HTML = '<a class="stableLink" '
           + 'href="'+lrcGetUglyPageURL("Special:Stabilisation","&page="+encodeURIComponent(title)) + '" '
           + 'onClick="liveStabilization('+lrcEscapeStrHTML(title)+'); return false;" '
           + 'title="'+lrcMakeText("STABLE_TIP")+' « '+title+' »" '
           + '>' +lrcMakeText("STABLE_SHORT")+'</a>';
  return HTML;
}

function lrcGetWatchersIcon(rc, def){
  if(!def) def = "";
  var HTML = def;
  var watchers = rc.watchers;
  if(lrcUserHasRight('unwatchedpages')){
    watchers = parseInt(watchers);
    if(watchers || watchers === 0) {
      if(watchers === 0){
        HTML = lrcMakeIcon("Watchers0Icon");
      }else if(watchers < lrcMakeParam("MinYellowWatchers")){
        HTML = lrcMakeIcon("Watchers1Icon").split("$1").join(watchers);
      }else if(watchers < lrcMakeParam("MinGreenWatchers")){
        HTML = lrcMakeIcon("Watchers2Icon").split("$1").join(watchers);
      }else{
        HTML = lrcMakeIcon("Watchers3Icon").split("$1").join(watchers);
      }
      HTML += ' – ';
    }
  }else{
    if(typeof(watchers)==="string"){
      HTML = lrcMakeIcon("Watchers3Icon").split("$1").join(watchers);
    }else{
      HTML = lrcMakeIcon("Watchers1Icon").split("$1").join("-");
    }
    HTML += ' – ';
  }
  return HTML;
}

function UserIsIP(user){
  var regexpIP4 = /^\d{1,3}\.\d{1,3}.\d{1,3}.\d{1,3}$/;
  var regexpIP6 = /\w{1,4}\:\w{1,4}:\w{1,4}:\w{1,4}:\w{1,4}:\w{1,4}:\w{1,4}:\w{1,4}/;
  if(regexpIP4.exec(user)){
    return "V4";
  }else if(regexpIP6.exec(user)){
    return "V6";
  }else{
    return false;
  }
}
 
function lrcGetUserLink(user, style) {
  var prefix = lrcGetNamespaceName(2)+":";
  var LiveFunction = "liveArticle("+lrcEscapeStr(prefix+user)+");";
  if(UserIsIP(user)) {
    prefix = "Special:Contributions/";
    LiveFunction = "liveContrib("+lrcEscapeStr(user)+");";
  }
  var blockedUser = '$1';
  if(LiveRC_Config["Blocked"][user]) blockedUser = '<span title="'+lrcMakeText("BLOCKED")+'"><s>$1</s></span>';
  var link = '<a class="lrc_EditorLink" '
           + (style ? 'style="'+ style +'" ' : '')
           + 'href="' + lrcGetPageURL(prefix + user) + '" '
           + 'onClick="'+LiveFunction+' return false;" '
           + '>' + lrcStripString(user, lrcMakeParam("UserLengthLimit")) + '</a>';
  link = blockedUser.split("$1").join(link);
  return link;
}

function lrcGetUserTalkLink(rc){
  var user = rc.user;
  var HTML = '<a class="usertalkLink" '
           + 'href="'+lrcGetPageURL(lrcGetNamespaceName(3)+':'+user)+'" '
           + 'onClick="liveArticle('+lrcEscapeStrHTML(lrcGetNamespaceName(3)+':'+user)+'); return false;" '
           + 'title="'+lrcMakeText("TALK_TIP")+'">'+lrcMakeText("TALK_SHORT")+'</a>';
  return HTML;
}

function lrcGetUserContribsLink(rc){
  var user = rc.user;
  var HTML = '<a class="usercontribLink" '
           + 'href="'+lrcGetPageURL('Special:Contributions/'+user)+'" '
           + 'onClick="liveContrib('+lrcEscapeStrHTML(user)+'); return false;" '
           + 'title="'+lrcMakeText("CONTRIB_TIP")+'">'+lrcMakeText("CONTRIB_SHORT")+'</a>';
  if (lrcUserHasRight("deletedhistory")) {
    HTML += '<a class="userdeletedcontribLink" '
          + 'href="'+lrcGetPageURL('Special:DeletedContributions/'+user)+'" '
          + 'onClick="liveDeletedContrib('+lrcEscapeStrHTML(user)+'); return false;" '
          + 'title="'+lrcMakeText("DELETEDCONTRIB_TIP")+'">'+lrcMakeText("DELETEDCONTRIB_SHORT")+'</a>';
  }
  return HTML;
}

function lrcGetBlockLink(rc, def){
  if(!def) def = "";
  if(!lrcUserHasRight("block")) return def;
  var user = rc.user;
  var HTML = '<a class="userblockLink" '
           + 'href="'+lrcGetPageURL('Special:Blockip/' + user)+'" '
           + 'onClick="liveBlock('+lrcEscapeStrHTML(user)+'); return false;" '
           + 'title="'+lrcMakeText("BLOCK_TIP")+'">'+lrcMakeText("BLOCK_SHORT")+'</a>';
  return HTML;
}

function lrcEncode(text){
 return encodeURIComponent(text).replace(/%3A/g, ":").replace(/%2F/g, "/");
}
 
function lrcGetPageURL(page) {
  return wgServer + wgArticlePath.split('$1').join(lrcEncode(page));
}
 
function lrcGetUglyPageURL(page, params) {
  return wgServer + wgScript + '?title=' + lrcEncode(page)+ (params ? params : "");
}
 
function lrcGetOtherPagename(page){
  var sotherns = getNamespaceInfoFromPage(page);
  var sotherpn = getNamespaceInfoFromPage(page, "PageName");
  if(sotherns%2==0){
    var sothernsnumber = (sotherns+1);
  }else{
    var sothernsnumber = (sotherns-1);
  }
  var sothername = (sothernsnumber == 0 ? sotherpn : lrcGetNamespaceName(sothernsnumber)+":"+sotherpn);
  return sothername;
} 

/* Returns s such that, when a piece of js code containing s is inserted in the
   property innerHTML of an element, the evaluation of s is the string str. */
 
function lrcEscapeStr(str) {
  return "'" + (""+str).replace(/\\/g, '\\\\').replace(/'/g, '\\\'').htmlize() + "'";
}
function lrcEscapeStrHTML(str) {
  return "'" + (""+str).replace(/\\/g, '\\\\').replace(/'/g, '\\\'') + "'";
}
 
// HTMLize
String.prototype.htmlize = function() {
  var chars = new Array('&','<','>','"');
  var entities = new Array('amp','lt','gt','quot');
  var string = this;
  if(!string) return "";
  for (var i=0; i<chars.length; i++) {
    var regex = new RegExp(chars[i], "g");
    string = string.replace(regex, '&' + entities[i] + ';');
  }
  return string;
}
 
String.prototype.unhtmlize = function() {
  var entities = new Array('amp','lt','gt','quot');
  var chars = new Array('&','<','>','"');
  var string = this;
  if(!string) return "";
  for (var i=0; i<entities.length; i++) {
    var regex = new RegExp("&"+entities[i]+";", "g");
    string = string.replace(regex, chars[i]);
  }
  return string;
}
 
String.prototype.ucFirst = function () {
    return this.substr(0,1).toUpperCase() + this.substr(1,this.length);
}
 
String.prototype.lcFirst = function () {
    return this.substr(0,1).toLowerCase() + this.substr(1,this.length);
}
 
function lrcStripString(string, limit){
  if(!limit || string.length<limit) return string;
  return string.substring(0, limit) + "…";
}
 
function LiveRC_StripWikitext(text){
     if(!text) return '';
     text = text.replace(/\{\{([^#\}\|]*)?\}\}/g, "");
     text = text.replace(/\[\[([^\]\|]*)?\]\]/g, "$1");
     text = text.replace(/\[\[[^\|]*\|([^\]]*)?\]\]/g, "$1");
     text = text.replace(/\{\{#[^\}\|]*\|[^\}\|]*\|([^\}]*)?\}\}/g, "$1");
     return text;
}
 
function lrcDisableLink(id) {
  var lnk = document.getElementById(id);
  if(!lnk) return;
  if(!lnk.tagName) return;
  var DisableElementTimer = 2;
  if(lnk.tagName.toLowerCase() == "a"){
    var DisabledLink = document.createElement('a');
    DisabledLink.id = id + "_disabled";
    DisabledLink.title = lnk.title;
    DisabledLink.innerHTML = lnk.innerHTML;
    DisabledLink.href = "javascript:;";
    DisabledLink.style.color = "silver";
    DisabledLink.style.cursor = "default";
    DisabledLink.style.textDecoration = "none";
    lnk.style.display = "none";
    lnk.parentNode.insertBefore(DisabledLink, lnk);
  }else if(lnk.tagName.toLowerCase() == "input" || lnk.tagName.toLowerCase() == "select"){
    lnk.disabled = "disabled";
  }
  setTimeout("lrcEnableLink('"+id+"')", DisableElementTimer*1000);
}
 
function lrcEnableLink(id, OldHref, OldOnclick, OldColor, OldCursor, OldTextDecoration) {
  var lnk = document.getElementById(id);
  if(!lnk) return;
  if(!lnk.tagName) return;
  var DisableElementTimer = 5;
  if(lnk.tagName.toLowerCase() == "a"){
    var DisabledLink = document.getElementById(id+"_disabled");
    if(!DisabledLink) return;
    DisabledLink.parentNode.removeChild(DisabledLink);
    lnk.style.display = "";
  }else if(lnk.tagName.toLowerCase() == "input" || lnk.tagName.toLowerCase() == "select"){
    lnk.disabled = false;
  }
}
 
function lrcToggleNextSibling(Link){
   if(!Link) return false;
   var Span = Link.nextSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
   }else{
      Span.style.display = "none";
   }
}
 
function lrcTogglePreviousSibling(Link){
   if(!Link) return false;
   var Span = Link.previousSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
   }else{
      Span.style.display = "none";
   }
}

/* </source>

==== Manipulation de classes ====

<source lang="javascript"> */

if(typeof(hasClass)!='function')
function hasClass(node, className){
    var haystack = node.className;
    if(!haystack) return false;
    if (className === haystack) {
        return true;
    }
    return (" " + haystack + " ").indexOf(" " + className + " ") > -1;
}

if(typeof(addClass)!='function')
function addClass(node, className) {
    if (hasClass(node, className)) {
        return false;
    }
    var cache = node.className;
    if (cache) {
        node.className = cache + ' ' + className;
    } else {
        node.className = className;
    }
    return true;
}

if(typeof(removeClass)!='function')
function removeClass(node, className) {
  if (!hasClass(node, className)) {
    return false;
  }
  node.className = node.className.replace(new RegExp('(^|\\s+)'+ className +'($|\\s+)','g'), ' ');
  return true;
}


function getElementsByClass(searchClass,node,tag) {
  var classElements = new Array();
  if ( node == null )
    node = document;
  if ( tag == null )
    tag = '*';
  var els = node.getElementsByTagName(tag);
  var elsLen = els.length;
  var pattern = new RegExp('(^|\\s)'+searchClass+'(\\s|$)');
  for (i = 0, j = 0; i < elsLen; i++) {
    if (pattern.test(els[i].className) ) {
      classElements[j] = els[i];
      j++;
    }
  }
  return classElements;
}

/* </source>

==== Divers ====

<source lang="javascript"> */

function lrcGetObjectLength(obj){
  var l = 0;
  for(var o in obj){
    if(obj.hasOwnProperty(o)){
      l++;
    } 
  }
  return l;
}

function getElementWithId( elementId , elementTagName , elementParentNode ){
      if(!elementParentNode) elementParentNode = document.body;

      if (elementParentNode.getElementById) return elementParentNode.getElementById(elementId);

      var TheElement = false;
      var Elements = elementParentNode.getElementsByTagName(elementTagName);
      var elementcount = 0;
      while(elementcount<Elements.length){
            var Id = Elements[elementcount].getAttribute('id');
            if(Id){
                  if(Id==elementId){
                        TheElement = Elements[elementcount];
                        break;
                  }
            }
            elementcount++
      }
      if (! TheElement) return null;
      return TheElement;
}

function generateNewID() {
  LiveRC_Config["NextFreeID"]++;
  return "idauto" + LiveRC_Config["NextFreeID"];
}

function canRevertUser(user) {
  return user == wgUserName || user == 'Salebot';
}

function TwoDigitsForNumber(num){
  return (num<0 ? '-' : '') + (num < 10 ? (num > -10 ? '0' : '') : '') + (num<0 ? -num : num);
}

function getTimeTag(timestamp){
    return ('<span title="'+tsToDate(timestamp)+'">'+tsToHhMm(timestamp)+'</span>');
}

function tsToDate(TS){
  var Year = parseInt(TS.substring(0, 4));
  var Month = parseInt(TS.substring(5, 7).replace(/^0/, ""));
  var Day = parseInt(TS.substring(8, 10).replace(/^0/, ""));
  var Hour = parseInt(TS.substring(11, 13).replace(/^0/, ""));
  var Minut = parseInt(TS.substring(14, 16).replace(/^0/, ""));
  var MonthNames = {"1" :"january","2" :"february","3" :"march","4" :"april","5" :"may","6" :"june","7" :"july","8" :"august","9" :"september","10":"october","11":"november","12":"december"};
  var DaysinMonth = {"1" :31,"2" :28,"3" :31,"4" :30,"5" :31,"6" :30,"7" :31,"8" :31,"9" :30,"10":31,"11":30,"12":31};
  if(Year%4==0 && (Year%100!=0 || Year%400==0) ) DaysinMonth[2]=29;
  Hour = Hour+((lrcGetTimeZone() - parseInt(LiveRC_Config["MediawikiGeneralConfig"]["timeoffset"]))/60);
  if(Hour<0){
    Hour = Hour + 24;
    Day = Day-1;
    if(Day == 0){
        Month = Month-1;
        if(Month==0){
          Month = 12;
          Year = Year-1;
        }
        Day = DaysinMonth[Month];
    }
  }else if(Hour>23){
    Hour = Hour - 24;
    Day = Day+1;
    if(Day>DaysinMonth[Month]){
       Day = Day - DaysinMonth[Month];
       Month = Month +1;
       if(Month>12){
         Month = Month-12;
         Year = Year +1;
       }
    }
  }
  var ThisDate = Day+" " + lrcGetMediawikiMessage(MonthNames[Month], true) + " " + Year;
  return ThisDate;
}

function tsToHhMm(timestamp) {
  var tz = lrcGetTimeZone();
  var regex = new RegExp(/^\d\d\d\d-\d\d-\d\dT(\d\d):(\d\d):\d\dZ$/);
  match = regex.exec(timestamp);
  if (!match) {
    return 'xx:xx';
  }
  var tt = (match[1]*60 + match[2]*1 + tz + 1440) % 1440;
  var mm = tt % 60;
  var hh = (tt - mm) / 60 % 24;
  return (TwoDigitsForNumber(hh)+ ':' + TwoDigitsForNumber(mm));
}

function lrcGetTimeZone(){
  var tz;
  var match;
  if (lrcMakeParam("TZ")) {
    var regex = new RegExp(/^([-+])?(\d?\d):?(\d\d)$/);
    match = regex.exec(lrcMakeParam("TZ"));
    if (!match) {
      return 0;
    }
    tz = match[2]*60 + match[3]*1;
    tz = match[1] == '-' ? -tz : tz;
  } else {
    var now = new Date();
    tz = -now.getTimezoneOffset();
  }
  return tz;
}

function lrcGetArgFromURL(URL, Arg){
  if(!URL || !Arg) return false;
  try{
    var Args = decodeURIComponent(URL).split("&");
    for(var a=0,l=Args.length;a<l;a++){
      if(Args[a].indexOf(Arg+"=")!=-1) return Args[a].split("=")[1];
    }
  }catch(e){
    return false;
  }
  return false;
}

function getNamespaceInfoFromPage(Page, ToReturn){
     if(!ToReturn || !Page) ToReturn = false;
     var NamespaceNumber = 0;
     var NamespaceName = "";
     var PageName = Page;
     var Found = false;
     for(var NS in LiveRC_Config["MediawikiNamespaces"]){
          if(Found) continue;
          var NamespaceNamesToTest = new Array(lrcGetNamespaceName(NS), lrcGetNamespaceName(NS, true));
          if(typeof(LiveRC_Config["MediawikiNamespaces"][NS]["aliases"])==="object"){
              for(var a=0,l=LiveRC_Config["MediawikiNamespaces"][NS]["aliases"].length;a<l;a++)
                  NamespaceNamesToTest.push(LiveRC_Config["MediawikiNamespaces"][NS]["aliases"][a]);
          }
          for(var a=0,l=NamespaceNamesToTest.length;a<l;a++){
              if(Found) continue;
              var ThisNamespaceName = NamespaceNamesToTest[a];
              if(ThisNamespaceName==="") continue;
              var NamespaceNameRegExp = new RegExp("^"+ThisNamespaceName+":", "ig");
              var Matches = Page.match(NamespaceNameRegExp);
              if(Matches!=null && Matches.length == 1){
                   NamespaceNumber = parseInt(NS);
                   NamespaceName = ThisNamespaceName;
                   PageName = Page.replace(NamespaceNameRegExp, "");
                   Found = true;
                   continue;
              }
          }
     }
     if(ToReturn==="NamespaceName") return NamespaceName;
     if(ToReturn==="PageName") return PageName;
     return NamespaceNumber;
}

if(typeof(getTextContent)!='function'){
  function getTextContent(oNode) {
    if(!oNode) return null;
    if (typeof(oNode.textContent)!="undefined") {return oNode.textContent;}
    switch (oNode.nodeType) {
      case 3: // TEXT_NODE
      case 4: // CDATA_SECTION_NODE
        return oNode.nodeValue;
        break;
      case 7: // PROCESSING_INSTRUCTION_NODE
      case 8: // COMMENT_NODE
        if (getTextContent.caller!=getTextContent) {
          return oNode.nodeValue;
        }
        break;
      case 9: // DOCUMENT_NODE
      case 10: // DOCUMENT_TYPE_NODE
      case 12: // NOTATION_NODE
        return null;
        break;
    }
    var _textContent = "";
    oNode = oNode.firstChild;
    while (oNode) {
      _textContent += getTextContent(oNode);
      oNode = oNode.nextSibling;
    }
    return _textContent;
  }
}

function LiveRC_ManageIPv6(user){
  if(!user) return "";
  var ipv6 = /\w{1,4}\:\w{1,4}:\w{1,4}:\w{1,4}:\w{1,4}:\w{1,4}:\w{1,4}:\w{1,4}/;
  if(ipv6.exec(user)){
    return (user.substr(0,1).toUpperCase() + user.substr(1, user.length).toLowerCase());
  }else{
    return user;
  }
}

/* </source>

=== Fonctions d'initialisation ===

==== Initialisation ====

<source lang="javascript"> */

function LiveRC_Init(){
  LiveRC_Config["LoadingTime"] = (new Date()).getTime();
  lrcDisplayDebug('Get configuration items');
    // Get Site config
  if(typeof(LiveRC_getSiteConfig)==="function") try{ LiveRC_getSiteConfig(); }catch(e){ }
    // Get Site params 
  if(typeof(LiveRC_getSiteCustom)==="function") try{ LiveRC_getSiteCustom(); }catch(e){ }
    // Get User params
  if(typeof(LiveRC_getUserCustom)==="function") try{ LiveRC_getUserCustom(); }catch(e){ }
    // Get Special params (only for developpers !!)
  if(typeof(LiveRC_getSpecialCustom)==="function") try{ LiveRC_getSpecialCustom(); }catch(e){ }
  LiveRC_InitActivationProcess();
  LiveRC_LaunchProcessNextStep();
}

function LiveRC_InitActivationProcess(){
  lrcDisplayDebug("Define LiveRC initialization process");
  var lrcPage = (wgPageName == lrcMakeParam("PageTitle") && (wgAction=="view"||wgAction=="purge"));
  LiveRC_Config["LaunchProcess"] = [
    { functions : LiveRC_Launch },
    { functions : LiveRC_PreloadIcons },
    { functions : new Array(liveOldPersonalCSS, liveOldPersonalJS, LiveRC_setInterfaceLanguage), condition:lrcPage },
    { functions : liveUserInfos, condition:lrcPage },
    { functions : LiveRC_GetSiteInfos , condition:lrcPage },
    { functions : LiveRC_CheckIfTranslationsLoaded, condition:lrcPage },
    { functions : LiveRC_InitTextTranslations, condition:lrcPage },
    { functions : liveBotSysop , condition:(lrcMakeParam("LoadSysopBotList")&&lrcPage) },
    { functions : liveWatch , condition:(lrcMakeParam("LoadWatchlist")&&lrcPage) },
    { functions : loadBlocks , condition:(lrcMakeParam("LoadLastBlocks")&&lrcPage) },
    { functions : loadUsersInCats , condition:(lrcMakeParam("LoadIPCat")&&lrcPage) },
    { functions : new Array(buildReportCreateReasons, lrcCreateInterface),condition:lrcPage },
    { functions : liveRCReady, condition:lrcPage },
    { functions : liveRC, condition:lrcPage }
  ];  
  LiveRC_RunHooks("AfterInitActivationProcess");
}

function LiveRC_LaunchProcessNextStep(){
  var Process = LiveRC_Config["LaunchProcess"];
  for(var a=0,l=Process.length;a<l;a++){
    var ThisProcess = Process[a];
    var launched = ThisProcess.launched;
    if(launched === true) continue;
    var condition = ThisProcess.condition;
    if(typeof(condition)!=="undefined" && !condition) continue;
    var functions = ThisProcess.functions;
    var Type = typeof(functions);
    if(Type==="function"){
      LiveRC_Config["LaunchProcess"][a].launched = true;
      // LiveRC_alert("Launch process : "+a);
      functions();
      return;
    }else if(Type==="object"){
      LiveRC_Config["LaunchProcess"][a].launched = true;
      for(var f=0,flen=functions.length;f<flen;f++){
        // LiveRC_alert("Launch process : "+a+" ("+f+")");
        var ThisFunction = functions[f];
        if(typeof(ThisFunction)=="function") ThisFunction();
      }
      return;
    }else{
      continue;
    }
  }
}

lrcClockTimer();
lrcDisplayDebug("Activate Clock");
addOnloadHook(LiveRC_Init);

/* </source>

==== Activation ====

<source lang="javascript"> */

function PleaseWait(){
  LiveRC_alert('<center><code><b>LiveRC is loading. Please wait a few seconds.</b></code></center>');
  addClass(document.body,'LiveRCLoading')
  clearTimeout(LiveRC_Config["Timeout"]["WaitLoading"]);
  LiveRC_Config["Timeout"]["WaitLoading"] = setTimeout("PleaseWait();", 5000);
}

function LiveRC_Launch(){
  lrcDisplayDebug("Init LiveRC");
  lstReportGetNeededMessages();
  var logs = LiveRC_Config["LogNames"];
  for(var logtype in logs){
    LiveRC_addNeededMessages(logs[logtype]["page"]);
  }

  if(wgPageName == lrcMakeParam("PageTitle") && (wgAction=="view"||wgAction=="purge")) {
    lrcDisplayDebug('Starting page <b>'+wgPageName+'</b> detected : run LiveRC initialization process');
    lrcDisplayDebug('<span style="color:darkGreen;">Hello <b>'+wgUserName+'</b>! You to fight vandals? OK, let\'s go !</span>');
    LiveRC_alert('<center><code><b><big>Hello <i>'+wgUserName+'</i>!</big></b></code></center>');
    PleaseWait();
    var LiveRCContainer = document.createElement("div");
    LiveRCContainer.id = "LiveRCContainer";
    document.body.appendChild(LiveRCContainer);
    var Alert = document.getElementById("LiveRCAlert");
    if(Alert){
      Alert.parentNode.removeChild(Alert);
      LiveRCContainer.appendChild(Alert);
    }
    var FavIcon = Custom_lrcIcons["FavIcon"];      
    if(!FavIcon) FavIcon = lrcIcons["FavIcon"];
    if(FavIcon.src){
      lrcDisplayDebug('Set favicon');
      var Links = document.getElementsByTagName("link");
      for(var a=0,l=Links.length;a<l;a++){
        var ThisLink = Links[a];
        if(!ThisLink) continue;
        var ThisLinkRel = ThisLink.getAttribute("rel");
        if(ThisLinkRel && ThisLinkRel.indexOf("shortcut icon")!=-1){
          ThisLink.parentNode.removeChild(ThisLink);
        }
      }
      var FaviconLink = document.createElement("link");
      FaviconLink.rel = 'shortcut icon';
      FaviconLink.href = lrcMakeParam("CommonsURL") + FavIcon.src;
      var Head = document.head || document.getElementsByTagName('head')[0];
      Head.appendChild(FaviconLink);
     }
    lrcDisplayDebug('Set window title');
    var Title = document.getElementsByTagName("title")[0];
    if(Title) Title.innerHTML = "LiveRC";
    // Start
    addClass(document.body, "LiveRCRunning");
  }
  // Add LiveRC link in left panel
  var RCLi = document.getElementById("n-recentchanges");
  if(RCLi){
    lrcDisplayDebug('Add LiveRC link in tools panel');
    var LiveRCLi = document.createElement('li');
    LiveRCLi.id = 'n-liveRC';
    var LiveRCLink = document.createElement('a');
    LiveRCLink.title = 'LiveRC';
    LiveRCLink.href = wgServer+wgArticlePath.split("$1").join(encodeURIComponent(lrcMakeParam("PageTitle")));
    LiveRCLink.appendChild(document.createTextNode('LiveRC'));
    LiveRCLi.appendChild(LiveRCLink);
    RCLi.parentNode.insertBefore(LiveRCLi,RCLi.nextSibling);
    if((wgNamespaceNumber==2 || wgNamespaceNumber==3) && wgPageName.indexOf('/') == -1 ){
        lrcDisplayDebug('Add watch/hide links in tools panel : check user status');
        wpajax.http({url : wgServer + wgScriptPath
                         + '/api.php?format=xml&action=query&prop=info&inprop=watched&titles=' + encodeURIComponent("LiveRCWatch:" + wgTitle)+"|"+encodeURIComponent("LiveRCHidden:" + wgTitle),
                     onSuccess : LiveWatchInitButtons, user:wgTitle
        });
    }
  }
  LiveRC_LaunchProcessNextStep();
}

function LiveRC_PreloadIcons(){
  lrcDisplayDebug('Preload all icons');
  var PreloadIconsDiv = document.createElement("div");
  PreloadIconsDiv.id = "PreloadIconsDiv";
  PreloadIconsDiv.style.position = "fixed";
  PreloadIconsDiv.style.top = "-20000px";
  PreloadIconsDiv.style.left = "-20000px";
  document.body.appendChild(PreloadIconsDiv);
  var LoadedIcons = new Array();
  for(var icon in Custom_lrcIcons){
    if(!Custom_lrcIcons.hasOwnProperty(icon)) continue;
    if(LoadedIcons.indexOf(icon)!=-1) continue;
    LoadedIcons.push(icon);
    var Span = document.createElement('span');
    Span.innerHTML = lrcMakeIcon(icon);
    PreloadIconsDiv.appendChild(Span);
  }
  for(var icon in lrcIcons){
    if(!lrcIcons.hasOwnProperty(icon)) continue;
    if(LoadedIcons.indexOf(icon)!=-1) continue;
    LoadedIcons.push(icon);
    var Span = document.createElement('span');
    Span.innerHTML = lrcMakeIcon(icon);
    PreloadIconsDiv.appendChild(Span);
  }
  LiveRC_LaunchProcessNextStep();
}

/* </source>

==== Récupération des informations sur l'utilisateur ====

<source lang="javascript"> */

function liveUserInfos(){
    lrcDisplayDebug("Get user infos");
    wpajax.http({url: wgServer + wgScriptPath + '/api.php?format=xml&action=query&meta=userinfo'
                    + '&uiprop=blockinfo|groups|implicitgroups|rights|options|editcount|email|realname',
                onSuccess: getUserInfos});
}

function getUserInfos(xmlreq, data) {
  var api = xmlreq.responseXML;

  if (api.firstChild.nodeName == "error") return;
  var UserInfos = api.getElementsByTagName('query')[0].getElementsByTagName('userinfo')[0];

// User rights
  var rights = UserInfos.getElementsByTagName('rights')[0].getElementsByTagName('r');
  for(var i=0, len=rights.length; i<len; i++) {
    var right = rights[i].firstChild.nodeValue;
    // Handle IE
    if (!right) right = rights[i].text;
    if(right) LiveRC_Config["UserInfos"].Rights.push(right);
  }
  if(lrcUserHasRight("apihighlimits")) LiveRC_Config["UserInfos"].APIlimit = 4999;
// real name
  LiveRC_Config["UserInfos"].RealName = UserInfos.getAttribute('realname');
// email
  LiveRC_Config["UserInfos"].eMail = UserInfos.getAttribute('email');
// preferences
  var preferences = UserInfos.getElementsByTagName('options')[0];
  if(preferences) preferences = preferences.attributes;
  for(var a=0,l=preferences.length;a<l;a++){
    LiveRC_Config["UserInfos"].Preferences[preferences[a].name] = preferences[a].value.unhtmlize();
  }
  LiveRC_LaunchProcessNextStep();
}

function lrcUserHasRight(Right){
  return (LiveRC_Config["UserInfos"].Rights.indexOf(Right)!=-1);
}

function LiveRC_CreatePersonalPanel(){
  var UserInfosTD = document.getElementById("LiveRCUserInfos");
  if(!UserInfosTD) return;
  var Buttons = document.getElementById("LiveRCButtons");
  if(Buttons) UserInfosTD.style.width = Buttons.offsetWidth + "px";
  if(!lrcMakeParam("ShowUserInfos")) return;
  var text = '<span style="font-size:150%">'+wgUserName+'</span>';
  if(LiveRC_Config["UserInfos"].RealName || LiveRC_Config["UserInfos"].eMail) text += '<br />';
  if(LiveRC_Config["UserInfos"].RealName) text += '('+LiveRC_Config["UserInfos"].RealName+')';
  if(LiveRC_Config["UserInfos"].eMail) text += ' '+LiveRC_Config["UserInfos"].eMail;
  UserInfosTD.innerHTML = text;
}

/* </source>

==== Récupération des infos sur la configuration du site ====

<source lang="javascript"> */

function LiveRC_addNeededMessages(messagename){
  if(LiveRC_Config["NeededMessages"].indexOf(messagename)==-1) LiveRC_Config["NeededMessages"].push(messagename);
}

function LiveRC_addNeededMagicWord(messagename){
  if(LiveRC_Config["NeededMagicWords"].indexOf(messagename)==-1) LiveRC_Config["NeededMagicWords"].push(messagename);
}

function LiveRC_GetSiteInfos(update, input){
  if(update && input){
      input.value = lrcMakeText("MWSiteInfoLegendRunning").split("$1").join("0");
      input.disabled = "disabled";
  }
  var lrcMissingMessages = new Array();
  if(update){
    lrcMissingMessages = LiveRC_Config["NeededMessages"];
  }else{
    for(var a=0,l=LiveRC_Config["NeededMessages"].length;a<l;a++){
      var NeededMessage = LiveRC_Config["NeededMessages"][a];
      if(typeof(LiveRC_Config["MediawikiMessages"][NeededMessage])==="undefined" || typeof(LiveRC_Config["MediawikiMessages"][NeededMessage]["default"])==="undefined")
        lrcMissingMessages.push(NeededMessage);
    }
  }
  var lrcNeededMagicWords = new Array();
  if(update){
    lrcNeededMagicWords = LiveRC_Config["NeededMagicWords"]
  }else{
    for(var a=0,l=LiveRC_Config["NeededMagicWords"].length;a<l;a++){
      var NeededMagicWord = LiveRC_Config["NeededMagicWords"][a];
      if(typeof(LiveRC_Config["MediawikiMagicwords"][NeededMagicWord])==="undefined")
        lrcNeededMagicWords.push(NeededMagicWord);
    }
  }
  var siprop = new Array();
  if(lrcGetObjectLength(LiveRC_Config["MediawikiGeneralConfig"]) === 0 || update ){
    siprop.push("general");
    lrcDisplayDebug("Get Mediawiki general configuration");
  }
  if(LiveRC_Config["MediawikiLanguages"].length === 0 || update ){
    siprop.push("languages");
    lrcDisplayDebug("Get Mediawiki languages");
  }
  if(lrcGetObjectLength(LiveRC_Config["MediawikiNamespaces"]) === 0 || update){
    siprop.push("namespaces");
    siprop.push("namespacealiases");
    lrcDisplayDebug("Get namespaces names and aliases");
  }
  if(lrcNeededMagicWords.length!=0 || update){
    siprop.push("magicwords");
    lrcDisplayDebug("Get magicwords");
  }
  if(lrcGetObjectLength(LiveRC_Config["MediawikiExtensions"]) === 0 || update ){
    siprop.push("extensions");
    lrcDisplayDebug("Get Mediawiki extensions");
  }
  if( (siprop.length === 0) && (lrcMissingMessages.length === 0) ){
    LiveRC_GetTranslatedMessagesDone({update:(update ? true : false),input:(input ? input : false)});
    return;
  }
  var meta = new Array();
  if((siprop.length !== 0)) meta.push("siteinfo");
  var ammessages = "";
  if(lrcMissingMessages.length > 0){
    lrcDisplayDebug("Get local system messages");
    meta.push("allmessages");
    ammessages = '&ammessages=' + lrcMissingMessages.join('|');
  }
  var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query'
            + '&meta=' + meta.join("|")
            + '&siprop=' + siprop.join("|")
            + ammessages;
  wpajax.http({url:URL,
               onSuccess:LiveRC_GotSiteInfos,
               update:(update ? true : false),
               input:(input ? input : false),
               messageslist:lrcMissingMessages
  });
}

function LiveRC_GotSiteInfos(xmlreq, data){
  if(xmlreq){
    var api = xmlreq.responseXML;
    var general = api.getElementsByTagName('general')[0];
    if(general){
      for (var j=0,lenj=general.attributes.length;j<lenj; j++) {
        var genname = general.attributes[j].name;
        var genvalue = general.attributes[j].value;
        if((new Array("git-hash", "time")).indexOf(genname)==-1) LiveRC_Config["MediawikiGeneralConfig"][genname] = genvalue;
      }
    }
    var languages = api.getElementsByTagName("languages")[0];
    if(languages){
      var lang = languages.getElementsByTagName("lang")
      for (var j=0,lenj=lang.length;j<lenj; j++) {
        var langcode = lang[j].getAttribute('code');
        var langName = lang[j].firstChild.nodeValue;
        if(!LiveRC_Config["MediawikiLanguages"][langcode])
          LiveRC_Config["MediawikiLanguages"][langcode] = langName;
      }
    }
    var messages = api.getElementsByTagName('message');
    for(var a=0,l=messages.length;a<l;a++){
      var MessageName = messages[a].getAttribute('name');
      var MessageValue = (messages[a].firstChild ? messages[a].firstChild.nodeValue : "").split('\n').join("");
      if(typeof(LiveRC_Config["MediawikiMessages"][MessageName])!="objet")
        LiveRC_Config["MediawikiMessages"][MessageName] = new Array();
      LiveRC_Config["MediawikiMessages"][MessageName]["default"] = MessageValue;
      LiveRC_Config["MediawikiMessages"][MessageName][LiveRC_Config["MediawikiGeneralConfig"]["lang"]] = MessageValue;
    }
    var magicwords = api.getElementsByTagName('magicword');
    for(var a=0,l=magicwords.length;a<l;a++){
      var MagicWordName = magicwords[a].getAttribute('name');      
      LiveRC_Config["MediawikiMagicwords"][MagicWordName] = new Array();
      var aliases = magicwords[a].getElementsByTagName('alias');
      for(var b=0,m=aliases.length;b<m;b++){
        if(aliases[b].firstChild) LiveRC_Config["MediawikiMagicwords"][MagicWordName].push(aliases[b].firstChild.nodeValue);
      }
    }
    var extensions = api.getElementsByTagName('ext');
    for(var a=0,l=extensions.length;a<l;a++){
      var ExtensionName = extensions[a].getAttribute('name');
      LiveRC_Config["MediawikiExtensions"][ExtensionName] = true;
    }
    var namespaces = api.getElementsByTagName('namespaces')[0];
    if(namespaces){
      var nss = namespaces.getElementsByTagName('ns');
      for(var a=0,l=nss.length;a<l;a++) {
        var id = nss[a].getAttribute('id');
        var nscanonical = nss[a].getAttribute('canonical');
        var nssubpages = (nss[a].getAttribute('subpages') === "");
        var nscase = nss[a].getAttribute('case');
        var nslocal = (nss[a].firstChild ? nss[a].firstChild.nodeValue : "");
        LiveRC_Config["MediawikiNamespaces"][id] = new Array();
        LiveRC_Config["MediawikiNamespaces"][id]["canonicalname"] = (nscanonical ? nscanonical : '');
        LiveRC_Config["MediawikiNamespaces"][id]["localname"] = nslocal;
        LiveRC_Config["MediawikiNamespaces"][id]["case"] = nscase;
        if(nssubpages) LiveRC_Config["MediawikiNamespaces"][id]["subpages"] = "";
      }
    }
    var namespacesaliases = api.getElementsByTagName('namespacealiases')[0];
    if(namespacesaliases){
      var nsaliases = namespacesaliases.getElementsByTagName('ns');
      for(var a=0,l=nsaliases.length;a<l;a++){
        var id = nsaliases[a].getAttribute('id');
        if(!LiveRC_Config["MediawikiNamespaces"][id]["aliases"]) LiveRC_Config["MediawikiNamespaces"][id]["aliases"] = new Array();
        if(nsaliases[a].firstChild) LiveRC_Config["MediawikiNamespaces"][id]["aliases"].push(nsaliases[a].firstChild.nodeValue);
      }
    }
  }
  var langlist = (data.update ? LiveRC_Config["SupportedLanguages"] : LiveRC_Config["AvailableLanguages"]);
  LiveRC_GetTranslatedMessages(0, langlist, data.messageslist, data.update, data.input);
}

function LiveRC_GetTranslatedMessages(index, langlist, messageslist, update, input){
  var Language = lrcMakeParam("Language");
  if(Language == LiveRC_Config["MediawikiGeneralConfig"]["lang"] && !update){
    LiveRC_GetTranslatedMessagesDone({update:false,input:false});
    return;
  }
  var NextLang = langlist[index];
  if(!NextLang){
    LiveRC_GetTranslatedMessagesDone({update:update,input:input});
    return;
  } 
  if((Language != NextLang && !update) || (!LiveRC_Config["MediawikiLanguages"][NextLang])){
    LiveRC_GetTranslatedMessages((index+1), messageslist, update, input);
    return;
  }
  if(update && input){
      var PerCent = Math.round((100*(index+1))/(langlist.length));
      input.value = lrcMakeText("MWSiteInfoLegendRunning").split("$1").join(PerCent);
  }
    lrcDisplayDebug("Get ("+NextLang+") system messages");
  var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query'
             + '&meta=allmessages'
             + '&ammessages=' + messageslist.join("|")
             + '&amlang=' + NextLang;
  wpajax.http({url:URL,
               onSuccess:LiveRC_ReceiveTranslatedMessages,
               update:update,
               input:input,
               index:index,
               lang:NextLang,
               messageslist:messageslist,
               langlist:langlist
  });
}

function LiveRC_ReceiveTranslatedMessages(xmlreq, data){
  if(xmlreq){
    var api = xmlreq.responseXML;
    var messages = api.getElementsByTagName('message');
    for(var a=0,l=messages.length;a<l;a++){
      var MessageName = messages[a].getAttribute('name');
      var MessageValue = (messages[a].firstChild ? messages[a].firstChild.nodeValue : "").split('\n').join("");
      LiveRC_Config["MediawikiMessages"][MessageName][data.lang] = MessageValue;
    }
  }
  LiveRC_GetTranslatedMessages((data.index+1), data.langlist, data.messageslist, data.update, data.input);
}

function LiveRC_GetTranslatedMessagesDone(data){
  if(data.update===true){
    UpdateSiteConfig(data.input);
  }else{
    LiveRC_LaunchProcessNextStep();
  }
}

function UpdateSiteConfig(input){
    lrcDisplayDebug("Save site config Running");
    var Intro = "\n/* ---- "+lrcMakeText("MWSiteGlobalLegend") + " ---- */\n\n"
              + "function LiveRC_getSiteConfig(){\n";

    var GeneralConfig = "\n/* ** "+lrcMakeText("MWGeneralConfigLegend") + " ** */\n\n"
                 + "  try{\n";
    for(var generalname in LiveRC_Config["MediawikiGeneralConfig"]){
        GeneralConfig += "    LiveRC_Config[\"MediawikiGeneralConfig\"][\""+generalname+"\"] = "+lrcEscapeStrHTML(LiveRC_Config["MediawikiGeneralConfig"][generalname])+";\n";
    }
    GeneralConfig += "  }catch(e){ }\n\n";

    var Languages = "\n/* ** "+lrcMakeText("MWLanguagesLegend") + " ** */\n\n"
                 + "  try{\n";
    Languages += "    LiveRC_Config[\"MediawikiLanguages\"] = {";
    var langlist = new Array();
    for(var langcode in LiveRC_Config["MediawikiLanguages"]){
        var langName = LiveRC_Config["MediawikiLanguages"][langcode];
        langlist.push(lrcEscapeStrHTML(langcode)+":"+lrcEscapeStrHTML(langName));
    }
    Languages += langlist.join(",") + "};\n"
    Languages += "  }catch(e){ }\n\n";

    var Messages = "\n/* ** "+lrcMakeText("MWMessagesLegend") + " ** */\n\n"
                 + "  try{\n";
    for(var MessageName in LiveRC_Config["MediawikiMessages"]){
        Messages += "    LiveRC_Config[\"MediawikiMessages\"][\""+MessageName+"\"] = {"
        var MessageList = new Array();
        for(var lang in LiveRC_Config["MediawikiMessages"][MessageName]){
            var MessageValue = LiveRC_Config["MediawikiMessages"][MessageName][lang];
            MessageList.push( lrcEscapeStrHTML(lang) + ":" + lrcEscapeStrHTML(MessageValue) );
        }
        Messages += MessageList.join(",") + "};\n"
    }
    Messages += "  }catch(e){ }\n\n";
    var Extensions = "\n/* ** "+lrcMakeText("MWExtensionsLegend") + " ** */\n\n"
                   + "  try{\n";
    for(var ExtensionName in LiveRC_Config["MediawikiExtensions"]){
        Extensions += "    LiveRC_Config[\"MediawikiExtensions\"][\""+ExtensionName+"\"] = true;\n";
    }
    Extensions += "  }catch(e){ }\n\n";

    var Namespaces = "\n/* ** "+lrcMakeText("MWNamespacesLegend") + " ** */\n\n"
                   + "  try{\n";    
    for(var nsnumber in LiveRC_Config["MediawikiNamespaces"]){
        Namespaces += "    LiveRC_Config[\"MediawikiNamespaces\"][\""+nsnumber+"\"] = {";
        var thisNS = new Array();
        for(var el in LiveRC_Config["MediawikiNamespaces"][nsnumber]){
            var val = LiveRC_Config["MediawikiNamespaces"][nsnumber][el];
            if(typeof(val)==="object"){
                var vals = new Array();
                for(var a=0,l=val.length;a<l;a++){ vals.push(lrcEscapeStrHTML(val[a])); }
                thisNS.push(lrcEscapeStrHTML(el)+":new Array("+vals.join(",")+")");                
            }else{
                thisNS.push(lrcEscapeStrHTML(el)+":"+lrcEscapeStrHTML(val));
            }
        }
        Namespaces += thisNS.join(",") + "};\n";
    }
    Namespaces += "  }catch(e){ }\n\n";
    var Magicwords = "\n/* ** "+lrcMakeText("MWMagicwordsLegend") + " ** */\n\n"
                   + "  try{\n";  
    for(var aliasname in LiveRC_Config["MediawikiMagicwords"]){
       var aliases = new Array();
       var val =LiveRC_Config["MediawikiMagicwords"][aliasname];
       for(var a=0,l=val.length;a<l;a++){ aliases.push(lrcEscapeStrHTML(val[a])); }
       Magicwords += "    LiveRC_Config[\"MediawikiMagicwords\"][\""+aliasname+"\"] = new Array("+aliases.join(",")+");\n";
    }
    Magicwords += "  }catch(e){ }\n\n";
    var SavedText = Intro + GeneralConfig + Languages + Namespaces + Extensions + Messages + Magicwords + "}";
    var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query&prop=info&intoken=edit&inprop=protection&titles='+encodeURIComponent(LiveRC_Config["SiteConfigPage"]);
    wpajax.http({ url: URL,
                onSuccess: UpdateSiteConfigRunning,
                messages: SavedText,
                input:input,
    });
}

function UpdateSiteConfigRunning(Req, data){
    var EditParam = new Array();
    var Page = Req.responseXML.getElementsByTagName("page")[0];
    EditParam["token"] = encodeURIComponent(Page.getAttribute("edittoken"));
    EditParam["text"] = encodeURIComponent(data.messages);
    EditParam["summary"] = encodeURIComponent(lrcMakeText("RESUMESTART")+lrcMakeText("UPDATEMESSAGES"));
    EditParam["title"] = encodeURIComponent(LiveRC_Config["SiteConfigPage"]);
    EditParam["watchlist"] = "preferences";
    if(lrcMakeParam("BypassWatchdefault")) EditParam["watchlist"] = "nochange";

    var Params = new Array();
    for(var Param in EditParam){
        Params.push(Param+"="+EditParam[Param]);
    }
    Params = Params.join("&");
    var headers = new Array();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    wpajax.http({ url: wgServer + wgScriptPath + '/api.php?action=edit',
                  method: "POST", headers: headers,
                  onSuccess:UpdateSiteConfigDone,
                  data: Params,
                  input:data.input
    });
}

function UpdateSiteConfigDone(Req, data){
   if(data.input){
    data.input.value = lrcMakeText("MWSiteInfoLegendDone");
  }
  lrcDisplayDebug("Save site config Done");
}

/* </source>

==== Gestion des langues ====

<source lang="javascript"> */

function LiveRC_getMediawikiDefaultLanguage(){
  var Support = "not supported (yet)";
  var SiteLanguage = LiveRC_Config["MediawikiGeneralConfig"]["lang"];
  if(typeof(SiteLanguage)=="undefined") SiteLanguage = mw.config.get('wgContentLanguage');
  if(LiveRC_Config["SupportedLanguages"].indexOf(SiteLanguage)!=-1){
    lrcParams["Language"] = SiteLanguage;
    Support = "supported";
  }
  var SLangName = LiveRC_Config["MediawikiLanguages"][SiteLanguage];
  lrcDisplayDebug("Get Site default interface language : " + SiteLanguage + (SLangName ? " ("+SLangName+")" : "") +" : "+Support);

  Support = "not supported (yet)";
  var UserLanguage = LiveRC_Config["UserInfos"].Preferences['language'];
  if(typeof(UserLanguage)=="undefined") UserLanguage = mw.user.options.get('language');
  if(LiveRC_Config["SupportedLanguages"].indexOf(UserLanguage)!=-1){
    lrcParams["Language"] = UserLanguage;
    Support = "supported";
  }
  var ULangName = LiveRC_Config["MediawikiLanguages"][UserLanguage];
  lrcDisplayDebug("Get user default interface language : " + UserLanguage + (ULangName ? " ("+ULangName+")" : "") +" : "+Support);
}

function LiveRC_setInterfaceLanguage(){
  LiveRC_getMediawikiDefaultLanguage();
  var Support = "not supported (yet)";
  var LiveRCUserLang = lrcMakeParam("Language");
  if(LiveRC_Config["AvailableLanguages"].indexOf(LiveRCUserLang)==-1){
     var lrcULangName = LiveRC_Config["MediawikiLanguages"][LiveRCUserLang];
     LiveRC_Config["AvailableLanguages"].push(LiveRCUserLang);
     Support = "supported";
  }
  lrcDisplayDebug("Get LiveRC user interface language : " + LiveRCUserLang + (lrcULangName ? " ("+lrcULangName+")" : "") + " : "+Support);
  if(LiveRC_Config["AvailableLanguages"].length===0) LiveRC_Config["AvailableLanguages"].push("en");
  var LoadLaunched = false;
  for(var a=0,l=LiveRC_Config["AvailableLanguages"].length;a<l;a++){
    var ThisLang = LiveRC_Config["AvailableLanguages"][a];
    LoadLaunched = true;
    lrcDisplayDebug("Load translations: " + ThisLang );
    mw.loader.load('//fr.wikipedia.org/w/index.php?title='
                 + 'MediaWiki:Gadget-LiveRC.js/i18n/'+ThisLang+'.js'
                 + '&action=raw&ctype=text/javascript');
  }
  if(LoadLaunched){
    LiveRC_Config["Timeout"]["LanguageMissing"] = setTimeout("LiveRC_Alert_TranslationsNotLoaded();", (25*1000));
  }
  LiveRC_LaunchProcessNextStep();
}

function LiveRC_CheckIfTranslationsLoaded(){
  for(var a=0,l=LiveRC_Config["AvailableLanguages"].length;a<l;a++){    
    var Lang = LiveRC_Config["AvailableLanguages"][a];
    if(typeof(LiveRC_Config["LoadFunctions"][Lang])==="function"){
      try{LiveRC_Config["LoadFunctions"][Lang](); }catch(e){  }
    }  
  }
  var MissingLanguages = new Array();
  for(var a=0,l=LiveRC_Config["AvailableLanguages"].length;a<l;a++){
    var Lang = LiveRC_Config["AvailableLanguages"][a];
    if(!LiveRC_Config["LoadedLanguages"][Lang]) MissingLanguages.push(Lang);
  }
  if(MissingLanguages.length === 0){
    clearTimeout(LiveRC_Config["Timeout"]["LanguageMissing"])
    LiveRC_RunHooks("AfterTranslationsLoaded");
    LiveRC_LaunchProcessNextStep();
  }else{
    clearTimeout(LiveRC_Config["Timeout"]["CheckIfTranslationsLoaded"]);
    LiveRC_Config["Timeout"]["CheckIfTranslationsLoaded"] = setTimeout("LiveRC_CheckIfTranslationsLoaded();", 500);
  }
}

function LiveRC_Alert_TranslationsNotLoaded(){
  var LangList = new Array();
  for(var a=0,l=LiveRC_Config["AvailableLanguages"].length;a<l;a++){    
    var Lang = LiveRC_Config["AvailableLanguages"][a];
    if(typeof(LiveRC_Config["LoadedLanguages"][Lang]) === "function"){
      try{LiveRC_Config["LoadFunctions"][Lang](); }catch(e){  }
    }else{
      LangList.push("("+Lang+")");
    }
  }
  if(LangList.length===0){
    LiveRC_LaunchProcessNextStep();
  }else{
    clearTimeout(LiveRC_Config["Timeout"]["CheckIfTranslationsLoaded"]);
    clearTimeout(LiveRC_Config["Timeout"]["WaitLoading"]);
    LiveRC_alert("Missing languages = "+LangList.join(" - "));
    clearTimeout(LiveRC_Config["Timeout"]["LanguageMissing"]);
    LiveRC_Config["Timeout"]["LanguageMissing"] = setTimeout("LiveRC_Alert_TranslationsNotLoaded();", (5*1000));
  }
}

function LiveRC_InitTextTranslations(){
  var ThereIsMoreText = new Array();
  var Lang = lrcMakeParam("Language")
  for(var textcode in lrcTexts){
    if(typeof(lrcTranslatedTexts[textcode])==="object") continue;
    lrcTranslatedTexts[textcode] = new Array();
    lrcTranslatedTexts[textcode][Lang] = lrcTexts[textcode];
    ThereIsMoreText.push(textcode);
  }
  for(var textcode in lrcParamDesc){
    if(typeof(lrcTranslatedParamDesc[textcode])==="object") continue;
    lrcTranslatedParamDesc[textcode] = new Array();
    lrcTranslatedParamDesc[textcode][Lang] = lrcParamDesc[textcode];
    ThereIsMoreText.push(textcode);
  }
  if(ThereIsMoreText.length!=0) lrcDisplayDebug("Load additionnal texts: "+ThereIsMoreText.join(", "));
  LiveRC_LaunchProcessNextStep();
}

function lrcGetMediawikiMessage(Message, translate, replaceItems){
  var MessageList = LiveRC_Config["MediawikiMessages"][Message];
  if(typeof(MessageList)!="object") return ("<"+Message+">").htmlize();
  var Mess;
  if(translate){
    Mess = LiveRC_Config["MediawikiMessages"][Message][lrcMakeParam("Language")];
  }
  if(typeof(Mess)=="undefined") Mess = LiveRC_Config["MediawikiMessages"][Message]["default"];
  if(typeof(replaceItems)!=="object") return Mess;
  for(var a=(replaceItems.length-1), l=-1;a>l;a--){
    Mess = Mess.split("$"+(a+1)).join(replaceItems[a]);
  }
  return Mess;
}

function lrcGetNamespaceName(nsnumber, translate){
  var NS = LiveRC_Config["MediawikiNamespaces"][nsnumber];
  if(translate && lrcMakeParam("Language") != LiveRC_Config["MediawikiGeneralConfig"]["lang"]){
    return LiveRC_Config["MediawikiNamespaces"][nsnumber]["canonicalname"];
  }
  return LiveRC_Config["MediawikiNamespaces"][nsnumber]["localname"];
}

/* </source>

==== Création de l'interface ====

<source lang="javascript"> */

  // Check LiveRC version

function lrcCheckLiveRCVersion(){
  var TestedVersionContainer = document.getElementById('TestedVersion');
  if(!TestedVersionContainer) return;
  var validatedVersion = '<span style="font-weight:bold;color:green;">'+LiveRC_Version+'</span>';
  var DEVvalidatedVersion = '<span style="font-weight:bold;color:darkOrange;">'+LiveRC_Version_Dev+'</span>';
  var VersionContainer = document.getElementById("currentVersion");
  if(VersionContainer){
    TestedVersionContainer.innerHTML = VersionContainer.innerHTML;
    var TestedVersion = TestedVersionContainer.innerHTML;
    if(LiveRC_Version == LiveRC_Version_Dev || LiveRC_Version.indexOf("beta")!=-1){
      TestedVersionContainer.innerHTML = DEVvalidatedVersion;
      var BugzillaLinkStart = '<u><a href="'+LiveRC_Config["BugzillaURL"]+'">';
      var Text = lrcMakeText("DEV_VERSION").split("$1").join(BugzillaLinkStart).split("$2").join('</a></u>');
      TestedVersionContainer.parentNode.innerHTML += '<br/>'
                                                   + '<span class="error">'
                                                   + Text;
                                                   + '</span>';
    }else if(TestedVersion == LiveRC_Version){
      TestedVersionContainer.innerHTML = validatedVersion;
    }else if(TestedVersion == validatedVersion || TestedVersion == DEVvalidatedVersion){
      TestedVersionContainer.parentNode.innerHTML += '<br/>'
                                                   + '<span class="error">'
                                                   + lrcMakeText("ALREADY_RUNNING")
                                                   + '</span>';
    }else{
      TestedVersionContainer.parentNode.innerHTML += '<br/>'
                                                   + '<span class="error">'
                                                   + lrcMakeText("NEW_VERSION").split("$1").join(LiveRC_Version)
                                                   + '</span>';
    }
  }else{
    if(LiveRC_Version.indexOf("beta")!=-1){
      TestedVersionContainer.innerHTML = DEVvalidatedVersion;
      var BugzillaLinkStart = '<u><a href="'+LiveRC_Config["BugzillaURL"]+'">';
      var Text = '<br/>'
               + '<span class="error">'
               + lrcMakeText("DEV_VERSION").split("$1").join(BugzillaLinkStart).split("$2").join('</a></u>')
               + '</span>';
      TestedVersionContainer.parentNode.innerHTML +=  Text;
    }else{
      TestedVersionContainer.innerHTML = validatedVersion;
    }
  }
}

function lrcCreateInterface(){
  lrcDisplayDebug("Create interface");
  var LiveRCContainer = document.getElementById("LiveRCContainer");
  if(!LiveRCContainer) return;

  var PreloadIconsDiv = document.getElementById("PreloadIconsDiv");
  if(PreloadIconsDiv) PreloadIconsDiv.parentNode.removeChild(PreloadIconsDiv);

  var FixedTitlePanel = document.createElement("div");
  FixedTitlePanel.id = "FixedTitlePanel";
  LiveRCContainer.appendChild(FixedTitlePanel);

  var TitleTable = document.createElement("table");
  TitleTable.id = "TitleTable";
  TitleTable.setAttribute("cellspacing","0"); 
  TitleTable.setAttribute("cellpadding","0"); 
  TitleTable.setAttribute("width","100%");
  TitleTable.innerHTML = ''
      + '<tr>'
        + '<td id="LiveRCButtons" valign="middle" width="1%" >'
          + '<span id="LiveRCTchatButtonOn" width="3px">'
            + '<span class="OnButton"><a href="#">'+lrcMakeIcon("TchatButtonIcon")+'</a></span>'
          + '</span>'
          + '<span id="LiveRCTchatButtonOff" >'
            + '<span class="OffButton"><a href="#">'+lrcMakeIcon("TchatButtonIcon")+'</a></span>'
          + '</span>'
          + ' '
          + '<span id="LiveRCDebugButtonOn" >'
            + '<span class="OnButton"><a href="#">'+lrcMakeIcon("DebugButtonIcon")+'</a></span>'
          + '</span>'
          + ' '
          + '<span id="LiveRCDebugButtonOff" >'
            + '<span class="OffButton"><a href="#">'+lrcMakeIcon("DebugButtonIcon")+'</a></span>'
          + '</span>'
          + ' '
          + '<span id="LiveRCConfigButtonOn" >'
            + '<span class="OnButton"><a href="#">'+lrcMakeIcon("ConfigButtonIcon")+'</a></span>'
          + '</span>'
          + ' '
          + '<span id="LiveRCConfigButtonOff" >'
            + '<span class="OffButton"><a href="#">'+lrcMakeIcon("ConfigButtonIcon")+'</a></span>'
          + '</span>'
          + ' '
          + '<span id="LiveRCButtonOn" >'
            + '<span class="OnButton"><a href="#">'+lrcMakeIcon("LiveRCButtonIcon")+'</a></span>'
            + ' '
            + '<span id="LiveRCRCTableButtonOn" >'
              + '<span class="OnButton"><a href="#">'+lrcMakeIcon("RCListButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCRCTableButtonOff" >'
              + '<span class="OffButton"><a href="#">'+lrcMakeIcon("RCListButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCFollowButtonOn" >'
              + '<span class="OnButton"><a href="#">'+lrcMakeIcon("FollowButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCFollowButtonOff" >'
              + '<span class="OffButton"><a href="#">'+lrcMakeIcon("FollowButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCPreviewButtonOn" >'
              + '<span class="OnButton"><a href="#">'+lrcMakeIcon("PreviewButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCPreviewButtonOff" >'
              + '<span class="OffButton"><a href="#">'+lrcMakeIcon("PreviewButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCHistoryButtonOn" >'
              + '<span class="OnButton"><a href="#">'+lrcMakeIcon("HistoryButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCHistoryButtonOff" >'
              + '<span class="OffButton"><a href="#">'+lrcMakeIcon("HistoryButtonIcon")+'</a></span>'
            + '</span>'
          + '</span>'
          + '<span id="LiveRCButtonOff">'
              + '<span class="OffButton"><a href="#">'+lrcMakeIcon("LiveRCButtonIcon")+'</a></span>'
          + '</span>'
        + '</td>'
        + '<td id="LiveRCTitle" align="center" valign="middle" style="display:none;font-size:80%;font-weight:bold;">'
          + '<a href="#"><span id="ClockSpanTitle">xx:xx:xx</span></a>'
          + '&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;'
          + '<span id="lrcLogo">'+lrcMakeIcon("LogoIcon")+'</span>'
          + '<span id="lrcAnimatedLogo" style="display:none">'+lrcMakeIcon("AnimatedLogoIcon")+'</span>'
          + '&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;'+lrcMakeText("Version")+' <span id="TestedVersion">'+ LiveRC_Version+'</span>'
        + '</td>'
        + '<td id="LiveRCUserInfos" align="right" valign="middle" style="display:none;font-size:80%;font-weight:bold;">'
        + '</td>'
      + '</tr>';
  FixedTitlePanel.appendChild(TitleTable);

  var FixedTopPanel = document.createElement('div');
  FixedTopPanel.id = "FixedTopPanel";
  FixedTitlePanel.appendChild(FixedTopPanel);

  var livePreviewFoot = document.createElement("table");
  livePreviewFoot.id = "livePreviewFoot";
  livePreviewFoot.setAttribute("cellspacing","0"); 
  livePreviewFoot.setAttribute("cellpadding","0"); 
  livePreviewFoot.setAttribute("width","100%");
  livePreviewFoot.innerHTML = ''
      + '<tr>'
        + '<td valign="middle" > '
        + '</td>'
      + '</tr>';
  FixedTitlePanel.appendChild(livePreviewFoot);


  var liveRC_RCList = document.createElement("div");
  liveRC_RCList.id = "liveRC_RCList";
  liveRC_RCList.innerHTML = ''
    + '<div id="divTabRC">'
      + '<table id="tabRC" cellspacing="0" cellpadding="0" />'
    + '</div>';
  FixedTitlePanel.appendChild(liveRC_RCList);


  var liveRC_ON = document.createElement("div");
  liveRC_ON.id = "liveRC_ON";
  LiveRCContainer.appendChild(liveRC_ON);

  var FixedBottomPanel = document.createElement("div");
  FixedBottomPanel.id = "FixedBottomPanel";
  liveRC_ON.appendChild(FixedBottomPanel);

  var LiveRC_Preview = document.createElement("div");
  LiveRC_Preview.id = "LiveRC_Preview";
  LiveRC_Preview.className = "LiveRC_MenuContainer";
  LiveRC_Preview.innerHTML = ''
        + '<div id="livePreviewTitle" class="LiveRC_MenuAnchor">'
          + '<span id="livePreviewFirstTitle">'+lrcMakeText("LiveRC_PreviewTitle") + '</span>'
        + '</div>'
        + '<div id="divLivePreview" class="LiveRC_MenuContent" >'
          + '<div id="livePreview" style="height:'+lrcMakeParam("PreviewWindowHeight")+';">...</div>' 
        + '</div>';

  if(lrcMakeParam("ShowPreviewOnTop")){
    FixedTopPanel.appendChild(LiveRC_Preview);
  }else{
    addClass(document.body, "LiveRCPreviewOnBottom");
    FixedBottomPanel.appendChild(LiveRC_Preview);
  }
  LiveRC_SetVerticalResizeZone(document.getElementById("livePreviewTitle"),
                          new Array(document.getElementById("livePreview")),
                          document.getElementById("LiveRC_Preview")
                         );

  var liveFollow = document.createElement("div");
  liveFollow.id = "liveFollow";
  liveFollow.className = "LiveRC_MenuContainer";
  var FollowAnchor = document.createElement('div');
  FollowAnchor.id = "LiveRC_FollowAnchor";
  addClass(FollowAnchor, "LiveRC_MenuAnchor");
  FollowAnchor.innerHTML = lrcMakeText("LiveRC_FollowTitle");
  liveFollow.appendChild(FollowAnchor);
  var FollowButtons = document.createElement('p');
  FollowButtons.id = "LiveRC_FollowButtons";
  liveFollow.appendChild(FollowButtons);
  var FollowContent = document.createElement('div');
  FollowContent.id = "LiveRC_FollowContent";
  addClass(FollowContent, "LiveRC_MenuContent");
  liveFollow.appendChild(FollowContent);
  lrcMakeSpecialLogList();
  var Lists = LiveRC_Config["SpecialLogList"];
  var FollowTable = document.createElement('table');
  FollowTable.setAttribute("cellspacing", "0");
  FollowTable.setAttribute("cellpadding", "0");
  FollowTable.setAttribute("style", "width:100%");
  FollowContent.appendChild(FollowTable);
  var FollowTitlesTR = document.createElement('tr');
  var FollowContentTR = document.createElement('tr');
  FollowTable.appendChild(FollowTitlesTR);
  FollowTable.appendChild(FollowContentTR);
  for(var a=0, l=Lists.length;a<l;a++){
    var FollowTH = document.createElement("th");
    FollowTH.id = Lists[a]+"_th";
    FollowTH.innerHTML = lrcMakeText(Lists[a]+"Title");
    FollowTitlesTR.appendChild(FollowTH);
    var FollowTD = document.createElement('td');
    FollowTD.id = Lists[a]+"_td";
    FollowTD.setAttribute("valign", "top");
    FollowContentTR.appendChild(FollowTD);
    var FollowListDiv = document.createElement('div');
    addClass(FollowListDiv, "VResize");
    FollowListDiv.id = Lists[a];
    FollowListDiv.style.height = lrcMakeParam("FollowWindowHeight");
    FollowTD.appendChild(FollowListDiv);
    var Button = document.createElement("input");
    Button.type = "button";
    Button.id = Lists[a]+"_button";
    Button.value = lrcMakeText(Lists[a]+"Title");
    Button.setAttribute("style", "color:darkGreen;");  
    Button.onclick = function(){ LiveRC_ToggleFollow(this); };
    Button.onselect = function(){ LiveRC_ToggleFollow(this); };
    FollowButtons.appendChild(Button);
  }
  FixedBottomPanel.appendChild(liveFollow);
  LiveRC_SetVerticalResizeZone(document.getElementById("LiveRC_FollowAnchor"),
                          getElementsByClass("VResize",document.getElementById("LiveRC_FollowContent"),"div"),
                          document.getElementById("liveFollow")
  );
  LiveRC_Config["Timeout"]["FollowLists"] = setTimeout("LiveRC_liveFollow_SetMenuHeights()", 500);

  var OutFixedBottomPanel = document.createElement("div");
  OutFixedBottomPanel.id = "OutFixedBottomPanel";
  LiveRCContainer.appendChild(OutFixedBottomPanel);

  if(lrcMakeOption("LiveRCRCTableDisplayed")) lrcToggleLiveRCButton("LiveRCRCTableDisplayed");
  if(lrcMakeOption("LiveRCPreviewDisplayed")) lrcToggleLiveRCButton("LiveRCPreviewDisplayed");
  if(lrcMakeOption("LiveRCTchatDisplayed")) buildTchatWindow();
  if(lrcMakeOption("LiveRCFollowDisplayed")) addClass(document.body, "LiveRCLiveFollowDisplayed");
  for(var a=0, l=Lists.length;a<l;a++){
    if(!lrcMakeOption("Display"+Lists[a])) LiveRC_ToggleFollow(document.getElementById(Lists[a]+"_button"));
  }
  LiveRC_ToggleFollow_setTHWidths();
  lrcToggleLogo(true);
  lrcCheckLiveRCVersion();
  LiveRC_CreateDebug();
  lrcCreateHistory();
  LiveRC_CreatePersonalPanel();
  lrcFixPosition();
  lrcSetClocks();
  lrcMakeButtons();
  lrcInitTableHeight();
  buildControlBar();
  LiveRC_LaunchProcessNextStep();
}

// Définition listes de suivi spéciales 

function lrcMakeSpecialLogList(){
  LiveRC_Config["SpecialLogList"] = new Array();
  var withFilters = (lrcUserHasRight("abusefilter-log") && typeof(LiveRC_Config["MediawikiExtensions"]["Abuse Filter"]) != "undefined");
  var withSpam = (lrcUserHasRight("spamblacklistlog") && typeof(LiveRC_Config["MediawikiExtensions"]["SpamBlacklist"]) != "undefined");
  var withPending = (lrcMakeParam("GetPageInfos") && typeof(LiveRC_Config["MediawikiExtensions"]["Flagged Revisions"]) != "undefined");
  var withFeedback = (typeof(LiveRC_Config["MediawikiExtensions"]["Article Feedback"]) != "undefined");
  lrcAddSpecialLogList("liveAbuseLog", withFilters);
  lrcAddSpecialLogList("liveSpam", withSpam);
  lrcAddSpecialLogList("liveRevoc");
  lrcAddSpecialLogList("liveNewUsers");
  lrcAddSpecialLogList("liveContact");
  lrcAddSpecialLogList("liveHidden");
  lrcAddSpecialLogList("liveSuivi");
  lrcAddSpecialLogList("liveNewPages");
  lrcAddSpecialLogList("livePending", withPending);
  lrcAddSpecialLogList("liveFeedback", withFeedback);
  LiveRC_RunHooks("AfterSpecialLogList");
}

function lrcAddSpecialLogList(listname, condition, nextlistname){
  if(!listname || condition===false) return;
  if(!nextlistname){
    LiveRC_Config["SpecialLogList"].push(listname);
  }else{
    var index = LiveRC_Config["SpecialLogList"].indexOf(nextlistname);
    if(index === -1){
      LiveRC_Config["SpecialLogList"].push(listname);
    }else{
      LiveRC_Config["SpecialLogList"].splice(index,0,listname);
    }
  }
}

// Extraction de l'interface LiveRC

function lrcFixPosition(){
    var LiveRCContainer = document.getElementById("LiveRCContainer");
    if(!LiveRCContainer) return;
    LiveRCContainer.parentNode.removeChild(LiveRCContainer);
    document.body.insertBefore(LiveRCContainer, document.body.firstChild);

    var Next = LiveRCContainer.nextSibling;
    var OtherContainer = document.createElement('div');
    OtherContainer.id = "OtherContainer";
    while(Next){
        Next.parentNode.removeChild(Next);
        OtherContainer.appendChild(Next)
        Next = LiveRCContainer.nextSibling
    }
    document.body.appendChild(OtherContainer);
    updatePreviewWindowAttributes();
    LiveRCContainer.style.display = "";
    if(lrcMakeOption("LiveRCDisplayed")) lrcToggleLiveRC();
}

// Mise en place des liens sur les boutons

function lrcMakeButtons(){
    lrcUpdateButton("LiveRCButtonOn", false, function(){ lrcToggleLiveRC(); return false; });
    lrcUpdateButton("LiveRCButtonOff", false, function(){ lrcToggleLiveRC(); return false; });
    lrcUpdateButton("LiveRCFollowButtonOn", false, function(){ lrcToggleLiveRCButton("LiveRCLiveFollowDisplayed", true); return false; });
    lrcUpdateButton("LiveRCFollowButtonOff", false, function(){ lrcToggleLiveRCButton("LiveRCLiveFollowDisplayed", true); return false; });
    lrcUpdateButton("LiveRCPreviewButtonOn", false, function(){ lrcToggleLiveRCButton("LiveRCPreviewDisplayed"); return false; });
    lrcUpdateButton("LiveRCPreviewButtonOff", false, function(){ lrcToggleLiveRCButton("LiveRCPreviewDisplayed"); return false; });
    lrcUpdateButton("LiveRCFooterButtonOff", false, function(){ lrcToggleLiveRCButton("LiveRCFooterDisplayed"); return false; });
    lrcUpdateButton("LiveRCFooterButtonOn", false, function(){ lrcToggleLiveRCButton("LiveRCFooterDisplayed"); return false; })

    lrcUpdateButton("LiveRCRCTableButtonOff", false, function(){ lrcToggleLiveRCButton("LiveRCRCTableDisplayed", true); return false; });
    lrcUpdateButton("LiveRCRCTableButtonOn", false, function(){ lrcToggleLiveRCButton("LiveRCRCTableDisplayed", true); return false; })

    lrcUpdateButton("LiveRCTchatButtonOn", false, function(){ buildTchatWindow(); return false; });
    lrcUpdateButton("LiveRCTchatButtonOff", false, function(){ buildTchatWindow(); return false; });


    lrcUpdateButton("LiveRCDebugButtonOff", false, function(){LiveRC_OpenDebug(); return false; });
    lrcUpdateButton("LiveRCDebugButtonOn", false, function(){ LiveRC_CloseDebug(); return false; });

    lrcUpdateButton("LiveRCConfigButtonOff", false, function(){ LiveRC_ManageParams_OpenMenu(); return false; });
    lrcUpdateButton("LiveRCConfigButtonOn", false, function(){ LiveRC_ManageParams_OpenMenu(); return false; });

    lrcUpdateButton("LiveRCHistoryButtonOn", false, function(){ lrcCloseHistory(); return false; });
    lrcUpdateButton("LiveRCHistoryButtonOff", false, function(){ lrcGetAllHistory(); return false; });

    var Buttons = document.getElementById("LiveRCButtons");
    if(Buttons) Buttons.style.display = "";
}

// Mise en place d'un lien

function lrcUpdateButton(ID, HREF, ONCLICK){
    var Button = document.getElementById(ID);
    if(!Button) return;
    var Link = Button.getElementsByTagName('a')[0];
    if(!Link) return;
    Link.href = (HREF ? HREF : "javascript:;");
    if(ONCLICK) Link.onclick = ONCLICK;
}

//////// Basculements de fenêtres //////

// Mode LiveRC/Normal

function lrcToggleLiveRC(){
  var IDs = new Array("liveRC_ON", "livePreviewFoot", "liveRC_RCList", "FixedBottomPanel", "FixedTopPanel");
  if(hasClass(document.body, "FixedLiveRCContainer")){
    removeClass(document.body, "FixedLiveRCContainer");
    for(var a=0,l=IDs.length;a<l;a++){
        var ThisNode = document.getElementById(IDs[a]);
        if(ThisNode) ThisNode.style.display = "none";
    }
  }else{
    addClass(document.body, "FixedLiveRCContainer");
    for(var a=0,l=IDs.length;a<l;a++){
        var ThisNode = document.getElementById(IDs[a]);
        if(ThisNode) ThisNode.style.display = "";
    }
    lrcInitTableHeight();
  }
}

// Ouverture fenêtre du bas ( prévisualisation / Listes / Footer / Historique )

function lrcToggleLiveRCButton(ClassName, nocloseall){
  if(hasClass(document.body, ClassName)){
    removeClass(document.body, ClassName);
  }else{
    if(!nocloseall) lrcCloseAll();
    addClass(document.body, ClassName);
  }
  lrcInitTableHeight();
}

// Fermeture de toutes les fenêtres

function lrcCloseAll(){
  var ClassN = new Array("LiveRCPreviewDisplayed", "LiveRCHistoryDisplayed");
  for(var a=0,l=ClassN.length;a<l;a++){
    removeClass(document.body, ClassN[a]);
  }
  lrcInitTableHeight();
}

// Fonctions pour les journaux de suivi

function LiveRC_ToggleFollow(Input){
  if(!Input) return;
  Id = Input.id.split("_button").join("");
  var TH = document.getElementById(Id + '_th');
  var TD = document.getElementById(Id + '_td');
  if(!TH || !TD) return;
  if(TH.style.display == "none"){
    TH.style.display = "";
    TD.style.display = "";
    Input.style.color = "darkGreen";  
  }else{
    TH.style.display = "none";
    TD.style.display = "none";
    Input.style.color = "red";
  }
  LiveRC_ToggleFollow_setTHWidths();
  LiveRC_ToggleFollow_setHeights(Input);
}

function LiveRC_ToggleFollow_setTHWidths(){
  var FollowContent = document.getElementById("LiveRC_FollowContent");
  var THs = FollowContent.getElementsByTagName('th');
  var VisibleTHs = 0;
  for(var a=0,l=THs.length;a<l;a++){
    if(THs[a].style.display == "none") continue;
    VisibleTHs++
  }
  if(VisibleTHs==0) return;
  var Width = (Math.round(1000/VisibleTHs)/10) + "%";
  for(var a=0,l=THs.length;a<l;a++){
    THs[a].style.width = Width;
  }
}

function LiveRC_ToggleFollow_setHeights(Input){
  if(!Input) return;
  Id = Input.id.split("_button").join("");
  var VResize = getElementsByClass("VResize",document.getElementById("LiveRC_FollowContent"),"div");
  var Height = false;
  for(var a=0,l=VResize.length;a<l;a++){
    if(VResize[a].style.display == "none" || Height!== false || VResize[a].id == Id) continue;
    Height = VResize[a].style.height;
  }
  var ThisVResize = document.getElementById(Id);
  if(ThisVResize) ThisVResize.style.height = Height;
}

// Égalisation de la hauteur des menus
function LiveRC_liveFollow_SetMenuHeights(){
  var FollowContent = document.getElementById("LiveRC_FollowContent");
  if(!FollowContent) return;
  var HeightFound = false;
  var FieldSets = FollowContent.getElementsByTagName('fieldset');
  for(var b=0,m=FieldSets.length;b<m;b++){
    if(FieldSets[b].style.display == "none") continue;
    var FollowPart =  getElementsByClass("VResize",FieldSets[b],"div")[0];
    if(!FollowPart) continue;
    var StyleHeight = FollowPart.style.height;
    if(StyleHeight) HeightFound = StyleHeight;
  }
  if(HeightFound){
    var FollowParts = getElementsByClass("VResize",FollowContent,"div");
    for(var a=0,l=FollowParts.length;a<l;a++) FollowParts[a].style.height = HeightFound;
  }
  clearTimeout(LiveRC_Config["Timeout"]["FollowLists"]);
  LiveRC_Config["Timeout"]["FollowLists"] = setTimeout("LiveRC_liveFollow_SetMenuHeights()", 500);
}

/* </source>

==== Création du menu de contrôle ====

<source lang="javascript"> */

function buildControlBar(){
  lrcDisplayDebug("Create control bar");

  var lvPreviewFoot = document.getElementById( 'livePreviewFoot' );
  var TR = lvPreviewFoot.getElementsByTagName('tr')[0];
  if(!TR) return;
  while(TR.firstChild){ TR.removeChild(TR.firstChild); }

  var SupprLigneForm = buildSupprLigneForm();
  AddButtonToControlBar(SupprLigneForm, false);

  var PreviewNavigationForm = ''
    + '<form id="PreviewNavigationForm">'
    + '<span id="historyPanel"></span>'
    + '<input id="btnNext" type="button" onclick="goNext();" onselect="goNext();" '
    + 'title="' + lrcMakeText("NEXTDIFF_TIP") + '" value="' + lrcMakeText("NEXTDIFF_SHORT") + '" '
    +'style="padding:0;" />'
    + '</form>';
  AddButtonToControlBar(PreviewNavigationForm, true);

  var StopForm = ''
    + '<form id="StopForm">'
    + '<input id="stopLive"  type="checkbox" value="true" '+(lrcMakeOption("Stop") ? 'checked="checked"':'')+'/>'
    + '<label for="stopLive" title="' + lrcMakeText("PAUSE_TIP") + '" >' + lrcMakeText("PAUSE_SHORT")   + '</label>'
   + '</form>';
  AddButtonToControlBar(StopForm, true);

  var DiffRForm = ''
    + '<form id="DiffRForm">'
    + '<input id="showDiffR" type="checkbox" '+(lrcMakeParam("UseMiniDiff") ? (lrcMakeOption("Diff") ? 'checked="checked"':'') : 'disabled="disabled" ')+'/>'
    + '<label for="showDiffR" title="' + lrcMakeText("DIFFR_TIP") + '" '+ (lrcMakeParam("UseMiniDiff") ? '' : 'style="color:gray"' )+ '>'+ lrcMakeText("DIFFR_SHORT") + '</label>'
    + '</form>';
  AddButtonToControlBar(DiffRForm, true);

  var ModeSelectionForm = ''
    + '<form id="RCFilterForm">'
    + '<span title="' + lrcMakeText("SHOWRC_TIP") + '" style="padding:3px;">'
    + '<input id="showRC" type="checkbox" '+(lrcMakeOption("RC") ? 'checked="checked"':'')+' />'
    + '<label for="showRC">' + lrcMakeText("SHOWRC_SHORT")  + ' </label>'
    + '</span>'
    + '</form>'
    + '<span>·</span>'
    + '<form id="LOGFilterForm">'
    + '<span title="' + lrcMakeText("SHOWLOG_TIP") + '" style="padding:3px;">'
    + '<input id="showLog"    type="checkbox" '+(lrcMakeOption("Log") ? 'checked="checked"':'')+' />'
    + '<label for="showLog">'   + lrcMakeText("SHOWLOG_SHORT")  + ' </label>'
    + '</span>'
    + '</form>';
  AddButtonToControlBar(ModeSelectionForm, true);

  var FiltersForm = ''
    + '<form id="NamespaceForm">'
    + '<span title="' + lrcMakeText("SHOWNS_TIP") + '" style="padding:3px;">'
    + '<input id="showNS" type="checkbox" '+(lrcMakeOption("NS") ? 'checked="checked"':'')+' />'
    + '<label for="showNS">' + lrcMakeText("SHOWNS_SHORT")  + ' </label>'
    + '</span>'
    + '</form>'
    + '<span>·</span>'
    + '<form id="UserTypeForm">'
    + '<span title="' + lrcMakeText("SHOWUSERS_TIP") + '" style="padding:3px;">'
    + '<input id="showUser" type="checkbox" '+(lrcMakeOption("User") ? 'checked="checked"':'')+' />'
    + '<label for="showUser">' + lrcMakeText("SHOWUSERS_SHORT")  + ' </label>'
    + '</span>'
    + '</form>';
  AddButtonToControlBar(FiltersForm, true);

  // Apply options
  lvPreviewFoot.onmouseover = function(){ lrcSetControlBarPosition(true); };
  lvPreviewFoot.onmouseout = function(){ lrcSetControlBarPosition(false); };
  buildHistoryPanel();
  if(lrcMakeParam("UseMiniDiff")) LiveRC_MiniDiffPreviewExtension_ModifyToggleInput();
  addRCtypesCheckInMenu();
  addLogtypesCheckInMenu();
  addNStypesCheckInMenu();
  addUsertypesCheckInMenu();
  updatePreviewWindowAttributes();
  LiveRC_RunHooks("AfterOptions");
}

function AddButtonToControlBar(Button, AddSeparator){
  if(!Button) return;
  var ControlBar = document.getElementById("livePreviewFoot");
  if(!ControlBar) return;
  var Line = ControlBar.getElementsByTagName('tr')[0];
  if(!Line) return;
  if(AddSeparator){
    var Separator = document.createElement('td');
    Separator.valign = "middle";
    addClass(Separator, "noHover");
    Separator.innerHTML = "&bull;";
    Line.appendChild(Separator);
  }
  var NewTD = document.createElement('td');
  NewTD.valign = "middle";
  Line.appendChild(NewTD);
  if(typeof(Button)=="string"){
    NewTD.innerHTML = Button;
  }else if(typeof(Button)=="object"){
    NewTD.appendChild(Button);
  }
}

/* </source>

===== Boutons de suppression de ligne(s) RC =====

<source lang="javascript"> */

function buildSupprLigneForm(){
  var SupprLineParams = Custom_lrcSupprLineParams;
  if(SupprLineParams.length===0) SupprLineParams = lrcSupprLineParams;
  var SupprLigneForm = '<form id="SupprLigneForm">';
  for(var a=0,l=SupprLineParams.length;a<l;a++){
    var ThisButton = SupprLineParams[a];
    SupprLigneForm += ''
      + '<input type="button" '
      + 'onclick="supprLigne('+a+'); return false;" '
      + 'onselect="supprLigne('+a+'); return false;" '
      + 'style="font-weight:bold;color:'+ThisButton.color+';" '
      + 'title="'+lrcMakeText(ThisButton.textid)+'" value="X" />'
      + (ThisButton.separator ? ThisButton.separator : '')
  }
  SupprLigneForm += '</form>';
  return SupprLigneForm;
}

function supprLigne(quelLigne) {
  var i,len;
  var tab = document.getElementById('tabRC');
  // IE automatically inserts a TBODY that we have to take care of
  if (tab.firstChild && (tab.firstChild.nodeName == "TBODY")) tab=tab.firstChild;
  var ScrollDown;
  var tableScroll = document.getElementById("liveRC_RCList");
  var table = document.getElementById( 'tabRC' );
  if(!tableScroll || !table ) ScrollDown = (table.offsetHeight - tableScroll.scrollTop);
  var els = new Array();
  var LigneType = lrcSupprLineParams[quelLigne];
  if(LigneType){
    var LigneClass = LigneType.class;  
    if (LigneClass == '*'){
      els = tab.getElementsByTagName('tr');
    }else{
      els = getElementsByClass(LigneClass,tab,'tr');
    }
  }else{
    els.push(document.getElementById(quelLigne));
  }
  len = els.length;
  for (i=len-1; i>=0; i--){
    if (els[i] != null) {
      var th0 = els[i].getElementsByTagName('th')[0];
      if(th0){
        lineUID = th0.id;
        if(typeof(LiveRC_Config["RCEvents"][lineUID])!="undefined") delete LiveRC_Config["RCEvents"][lineUID];
      }
      var Line = els[i];
      var LineMore = document.getElementById(Line.id+"_More");
      var LineLess = document.getElementById(Line.id.split("_More").join(""));
      if(LineLess && LineLess.parentNode != null) LineLess.parentNode.removeChild(LineLess);
      if(LineMore && LineMore.parentNode != null) LineMore.parentNode.removeChild(LineMore);
      if(Line && Line.parentNode != null) Line.parentNode.removeChild(Line);
    }
  }
  if(ScrollDown) tableScroll.scrollTop = (table.offsetHeight - ScrollDown);
  return false;
}

/* </source>

===== Bouton "mini diff" =====

<source lang="javascript"> */
 
function LiveRC_MiniDiffPreviewExtension_ModifyToggleInput(){
  var Input = document.getElementById("showDiffR");
  if(!Input) return;
  Input.onclick = function(){
    LiveRC_MiniDiffPreviewExtension_ToggleDiff(this);
  }
  LiveRC_MiniDiffPreviewExtension_ToggleDiff(Input);
}

/* </source>

===== Bouton "Suivant" =====

<source lang="javascript"> */

function goNext(mode) {
  //Argos
  var tab = document.getElementById('tabRC');
  // IE automatically inserts a TBODY that we have to take care of
  if (tab.firstChild && (tab.firstChild.nodeName == "TBODY")) tab=tab.firstChild;
  var lines = tab.getElementsByTagName('tr');
  var Nextlength = (lines.length - 1);
  var found = false;
  for (var j = Nextlength; j >= 0; j--) {
    var i = (lrcMakeParam("InvertUpdate")?(Nextlength - j):j);
    var thisline = lines[i];
    if(!hasClass(thisline, "RcChecked")){
      var Links = thisline.getElementsByTagName('a');
      for (var a=0,l=Links.length;a<l;a++) {
        if (hasClass(Links[a], "lrc_PreviewLink")) {
          if (found || mode) {
            var ln = LiveRC_Config["RCEvents"][thisline.getElementsByTagName('th')[0].id];
            if (ln.title && ln.revid && ln.oldid) {
              if (mode == 2) return;
              var lnURL = lrcGetUglyPageURL(ln.title, '&diffonly=1&unhide=1&diff=' + ln.revid + '&oldid=' + ln.oldid)
              wpajax.preload(lnURL);
              return;
            }
          } else {
            var code = Links[a].getAttribute("onclick");
            var ReturnRegExp = new RegExp("return[ ]+false[ ]*;");
            code = code.replace(ReturnRegExp, "");
            eval(code);
            found = true;
          }
        }
      }
    }
  }
  if (mode == 2) {
    LiveRC_Config["AllLinesSeen"] = true;
  }
}

/* </source>

===== Menus surgissants =====

<source lang="javascript"> */

function LiveRC_SetCheckListPosition(CL_ID){
  var CheckList = document.getElementById(CL_ID);
  if(!CheckList) return;
  var ParentSpan = CheckList.parentNode;
  var Form = ParentSpan.parentNode;
  // todo : trouver une méthode plus robuste pour positionner la liste des journaux
  var MargTop = (Form.offsetHeight + 3) + "px";
  var MarginLeft = 3;
  var PreviousNode = Form.previousSibling;
  while(PreviousNode){
    MarginLeft = MarginLeft + PreviousNode.offsetWidth;
    PreviousNode = PreviousNode.previousSibling;
  }
  CheckList.style.zIndex = LiveRC_Config["CheckListZIndex"]++ ;
  CheckList.style.marginTop = MargTop;
  CheckList.style.marginBottom = "-" + (CheckList.offsetHeight + 50) + "px" ;
  CheckList.style.marginLeft = MarginLeft + "px"  ;
  CheckList.style.marginRight = "-" + (15 * CheckList.offsetWidth) + "px" ;
  var RCList = document.getElementById('liveRC_RCList');
  if(!RCList) return;
  var RCListHeight = RCList.offsetHeight;
  var CheckListHeight = CheckList.offsetHeight;
  if(!hasClass(CheckList, "TwoColumsCheckList") && CheckListHeight>(0.75*RCListHeight)){
    addClass(CheckList, "TwoColumsCheckList");
    LiveRC_SetCheckListPosition(CL_ID)
  }else if(hasClass(CheckList, "TwoColumsCheckList") && (CheckListHeight*2)<(0.75*RCListHeight)){
    removeClass(CheckList, "TwoColumsCheckList");
    LiveRC_SetCheckListPosition(CL_ID);
  }
}

function toggleCheckList(CL_ID, show){
  var CheckList = document.getElementById(CL_ID);
  if(!CheckList) return;
  if(!show) CheckList.style.visibility = "hidden";
  else CheckList.style.visibility = "visible";
  LiveRC_SetCheckListPosition(CL_ID);
}
 
function disableAllCheckboxesInChecklist(InputID, ChecklistID){
  var Input = document.getElementById(InputID);
  var CheckList = document.getElementById(ChecklistID);
  if(!Input || !CheckList) return;
  var checked = (Input.checked ? false : "disabled" );
  var Inputs = CheckList.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    var ThisInput = Inputs[a];    
    if(ThisInput.type!="checkbox") continue;
    ThisInput.disabled = checked;
  }
}

function toggleCentralCheckBoxFromChecklist(InputID, ChecklistID){
  var Input = document.getElementById(InputID);
  var CheckList = document.getElementById(ChecklistID);
  if(!Input || !CheckList) return;
  var AllinputUnchecked = true;
  var Inputs = CheckList.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    var ThisInput = Inputs[a];    
    if(ThisInput.type!="checkbox") continue;
    if(ThisInput.checked) AllinputUnchecked = false;
  }
  Input.checked = (AllinputUnchecked ? false : "checked");
}

function createChecklistMenu(ID, Lines){
  var Input = document.getElementById(ID);
  if(!Input) return;
  var ParentSpan = Input.parentNode;
  var CheckListID = ID+"_CheckList";
  var CheckList = document.createElement('ul');
  CheckList.id = CheckListID;
  CheckList.className = "RCFilterCheckList";
  for(var a=0,l=Lines.length;a<l;a++){
    var Line = document.createElement('li');
    Line.innerHTML = Lines[a];
    CheckList.appendChild(Line);
  } 
  CheckList.style.align = "left";
  CheckList.style.fontSize = "10px";
  ParentSpan.appendChild(CheckList);
  var Inputs = CheckList.getElementsByTagName('input');
  for(var i=0,ilen=Inputs.length;i<ilen;i++){
    var ThisInput = Inputs[i];
    if(!ThisInput.type || ThisInput.type != "checkbox") continue;
    ThisInput.onclick = function(){
      toggleCentralCheckBoxFromChecklist(ID, CheckListID);
    }
  }
  ParentSpan.onmouseover = function(){
    toggleCheckList(CheckListID, true);
  }
  ParentSpan.onmouseout = function(){
    toggleCheckList(CheckListID, false);
  }
  Input.onclick = function(){
    disableAllCheckboxesInChecklist(ID, CheckListID);    
  }
  Input.onchange = function(){
    disableAllCheckboxesInChecklist(ID, CheckListID);    
  }
  toggleCheckList(CheckListID, false);
  disableAllCheckboxesInChecklist(ID, CheckListID);
  return CheckList;
}

/* </source>

====== RC ======

<source lang="javascript"> */

function addRCtypesCheckInMenu(){
  var Lines = new Array();
  var wchecked = (lrcMakeOption("WL_watched") ? ' checked="checked" ' : '');
  var LineContent = '<input id="showRC_WL_watched" type="checkbox" value="watched" ' + wchecked + ' />'
                    + '<label for="showRC_WL_watched">' + lrcMakeText("SHOWWL_WATCHED_TIP") + ' </label>';
  Lines.push(LineContent);
  var uwchecked = (lrcMakeOption("WL_unwatched") ? ' checked="checked" ' : '');
  var LineContent = '<input id="showRC_WL_notwatched" type="checkbox" value="notwatched" ' + uwchecked + ' />'
                    + '<label for="showRC_WL_notwatched">' + lrcMakeText("SHOWWL_UNWATCHED_TIP") + ' </label>';
  Lines.push(LineContent);
  Lines.push('<hr />');
  var RCtypes = {"edit":"SHOWRC_EDIT_TIP", "minor":"SHOWRC_MINOR_TIP", "new":"SHOWRC_NEW_TIP", "external":"SHOWRC_EXTERNAL_TIP"};
  for(var RCtype in RCtypes){
    var Tip = lrcMakeText(RCtypes[RCtype]);
    var checked = !!lrcMakeOption("RC_"+RCtype);
    checked = (checked ? ' checked="checked" ' : '');
    var LineContent = '<input id="showRC_'+RCtype+'" type="checkbox" value="'+RCtype+'" ' + checked + ' />'
                    + '<label for="showRC_'+RCtype+'">' + Tip + ' </label>';
    Lines.push(LineContent);
  }
  Lines.push('<hr />');
  var Comments = Custom_commenttests;
  if(Comments.length===0) Comments = commenttests;
  for(var a=0,l=Comments.length;a<l;a++){
    var Tip = lrcMakeText("SHOWRC_"+Comments[a].state+"_TIP");
    var checked = !Comments[a].hide;
    checked = (checked ? ' checked="checked" ' : ''); 
    var LineContent = '<input id="showRC_'+Comments[a].state+'" type="checkbox" value="'+Comments[a].state+'" ' + checked + ' />'
                    + '<label for="showRC_'+Comments[a].state+'">' + Tip + ' </label>';
    Lines.push(LineContent);
  }
  createChecklistMenu("showRC", Lines);
}

/* </source>

====== Logs ======

<source lang="javascript"> */

function addLogtypesCheckInMenu(){
  var Lines = new Array();
  var wchecked = (lrcMakeOption("WL_watched") ? ' checked="checked" ' : '');
  var LineContent = '<input id="showLOG_WL_watched" type="checkbox" value="watched" ' + wchecked + ' />'
                    + '<label for="showLOG_WL_watched">' + lrcMakeText("SHOWWL_WATCHED_TIP") + ' </label>';
  Lines.push(LineContent);
  var uwchecked = (lrcMakeOption("WL_unwatched") ? ' checked="checked" ' : '');
  var UWLine = document.createElement('li');
  var LineContent = '<input id="showLOG_WL_notwatched" type="checkbox" value="notwatched" ' + uwchecked + ' />'
                    + '<label for="showLOG_WL_notwatched">' + lrcMakeText("SHOWWL_UNWATCHED_TIP") + ' </label>';
  Lines.push(LineContent);
  Lines.push('<hr />');
  for(var lrcLogtype in LiveRC_Config["LogNames"]){
    var lrcLogExtension = LiveRC_Config["LogNames"][lrcLogtype]["extension"];
    if(typeof(lrcLogExtension)=="string" && typeof(LiveRC_Config["MediawikiExtensions"][lrcLogExtension])=="undefined") continue;
    var lrcLogRight = LiveRC_Config["LogNames"][lrcLogtype]["right"];
    if(typeof(lrcLogRight)=="string" && !lrcUserHasRight(lrcLogRight)) continue;
    var lrcLogName = LiveRC_Config["LogNames"][lrcLogtype]["page"];
    if(lrcGetMediawikiMessage(lrcLogName, true)) lrcLogName = lrcGetMediawikiMessage(lrcLogName, true);
    else lrcLogName = ("<" + lrcLogName + ">").htmlize();
    if(typeof(lrcOptionMenuValues["Log_"+lrcLogtype])==="undefined") lrcOptionMenuValues["Log_"+lrcLogtype] = true;
    if(typeof(lrcTranslatedParamDesc["DescLog_"+lrcLogtype])==="undefined"){
      addTradToTranslatedParamDesc("DescLog_"+lrcLogtype, lrcMakeParam("Language"), lrcMakeText("Log_StandardDesc").split("$1").join(lrcLogName));
    }
    var checked = !!lrcMakeOption("Log_"+lrcLogtype);
    checked = (checked ? ' checked="checked" ' : '');
    var LineContent = '<input id="showLog_'+lrcLogtype+'" type="checkbox" value="'+lrcLogtype+'" ' + checked + ' />'
                    + '<label for="showLog_'+lrcLogtype+'">' + lrcLogName  + ' </label>';
    Lines.push(LineContent);
  }
  createChecklistMenu("showLog", Lines);
}

/* </source>

====== Espaces de noms ======

<source lang="javascript"> */

function addNStypesCheckInMenu(){
  var Lines = new Array();
  for(var id in LiveRC_Config["MediawikiNamespaces"]){
    var ns = lrcGetNamespaceName(id, true);
    if (id < 0) continue;
    if (id == 0) ns = lrcMakeText("MAIN_NAMESPACE");
    if(typeof(lrcOptionMenuValues[("NS_"+id)])==="undefined"){
      lrcOptionMenuValues[("NS_"+id)] = true;
      addTradToTranslatedParamDesc(("DescNS_"+id), lrcMakeParam("Language"), lrcMakeText("NS_StandardDesc").split("$1").join(ns));
    }
    var checked = (lrcMakeOption("NS_"+id) ? ' checked="checked" ': '' );
    var LineContent = '<input id="showNS_'+id+'" type="checkbox" value="'+id+'" '
                    + checked + ' onclick="toggleCentralCheckBoxFromChecklist(\'showNS\', \'showNSCheckList\')" />'
                    + '<label for="showNS_'+id+'">' + ns + ' </label>';
    Lines.push(LineContent);
  }
  createChecklistMenu("showNS", Lines);
}

/* </source>

====== Utilisateurs ======

<source lang="javascript"> */

function addUsertypesCheckInMenu(){
  var Lines = new Array();
  var UserValues = (lrcUserHasRight("autopatrol") ? (new Array("IP", "NEWBIE", "AUTOPATROLLED","BOT")) : (new Array("IP", "REGISTRED","BOT")) );
  for(var a=0,l=UserValues.length;a<l;a++){
    var Value = UserValues[a];
    var Text = lrcMakeText("SHOWUSER_"+Value);
    var checked = (lrcMakeOption("User_"+Value) ? ' checked="checked" ': '' );
    var LineContent = '<input id="showUser_'+Value+'" type="checkbox" value="'+Value+'" '
                    + checked + ' onclick="toggleCentralCheckBoxFromChecklist(\'showUser\', \'showUSERCheckList\')" />'
                    + '<label for="showUser_'+Value+'">' + Text + ' </label>';
    Lines.push(LineContent);
  }
  Lines.push('<hr />');
  var SpecialShowValues = new Array("ShowAllSelf" ,"ShowAllContact" ,"ShowAllWatchlist", "ShowAllRevert", "ShowAllBlanking", "ShowAllReplaced");
  for(var a=0,l=SpecialShowValues.length;a<l;a++){
    var Value = SpecialShowValues[a];
    var Text = lrcMakeText("SHOWUSER_"+Value);
    var checked = (lrcMakeOption("User_"+Value) ? ' checked="checked" ': '' );
    var LineContent = '<input id="showUser_'+Value+'" type="checkbox" value="'+Value+'" '
                    + checked + ' onclick="toggleCentralCheckBoxFromChecklist(\'showUser\', \'showUSERCheckList\')" />'
                    + '<label for="showUser_'+Value+'">' + Text + ' </label>';
    Lines.push(LineContent);
  }
  Lines.push('<hr />');
  var SpecialHideValues = new Array("HideOwnSubpage");
  for(var a=0,l=SpecialHideValues.length;a<l;a++){
    var Value = SpecialHideValues[a];
    var Text = lrcMakeText("SHOWUSER_"+Value);
    var checked = (lrcMakeOption("User_"+Value) ? ' checked="checked" ': '' );
    var LineContent = '<input id="showUser_'+Value+'" type="checkbox" value="'+Value+'" '
                    + checked + ' onclick="toggleCentralCheckBoxFromChecklist(\'showUser\', \'showUSERCheckList\')" />'
                    + '<label for="showUser_'+Value+'">' + Text + ' </label>';
    Lines.push(LineContent);
  }
  createChecklistMenu("showUser", Lines);
}

/* </source>

===== Gestion de la position de la barre de commande =====

<source lang="javascript"> */

function lrcSetControlBarPosition(MouseOver, event){
  if(!event) { event = window.event; }
  var lvPreviewFoot = document.getElementById( 'livePreviewFoot' );
  var WindowWidth = LiveRC_GetScreenWidth();
  var TDs = lvPreviewFoot.getElementsByTagName('td');
  var PreviewFootWidth = 0;
  for(var a=0,l=TDs.length;a<l;a++){ PreviewFootWidth += TDs[a].offsetWidth; };
  var WidthDiff = WindowWidth - PreviewFootWidth;
  if(WidthDiff > 0){
    lvPreviewFoot.onmousemove = null;
    lvPreviewFoot.style.marginLeft = "0";
    return;
  }
  if(MouseOver!=true){
    lvPreviewFoot.onmousemove = null;
    return;
  }
  lvPreviewFoot.onmousemove = function(event){
    if(!event) { event = window.event; }
    var MousePosition = LiveRC_GetMousePosition(event)["X"];
    WindowWidth = LiveRC_GetScreenWidth();
    var MouseOffsetPercent = (MousePosition/WindowWidth);
    var NewMarginLeft = (Math.round(100*(WidthDiff*MouseOffsetPercent))/100);
    if(NewMarginLeft>0) NewMarginLeft = 0;
    lvPreviewFoot.style.marginLeft = NewMarginLeft + "px";
  }
}

/* </source>

==== Récupération de la liste des administrateurs et des bots ====

<source lang="javascript"> */

function liveBotSysop(listcontinue) {
  lrcDisplayDebug("Get sysop & bot names");
  var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query&list=allusers'
          + '&augroup=sysop|bot'
          + '&auprop=groups'
          + '&aulimit=' +LiveRC_Config["UserInfos"].APIlimit
          + (listcontinue ? listcontinue : "");
  wpajax.http({url:URL, onSuccess: getBotSysop, message: "Traitement en cours...\n\n" });
  if(listcontinue) return;
}

function getBotSysop(xmlreq, data) {
  var api = xmlreq.responseXML.getElementsByTagName('api')[0];
  if (api.firstChild.nodeName == "error") return;
  var rcs = api.getElementsByTagName('query')[0].getElementsByTagName('allusers')[0].getElementsByTagName('u');
  leni=rcs.length;
  for (i=leni-1; i>=0; i--) {
    var username = rcs[i].getAttribute('name');
    var groups = rcs[i].getElementsByTagName('g');
    for(var a=0,l=groups.length;a<l;a++){
      var thisgroup = groups[a].firstChild.nodeValue;
      if(thisgroup=="sysop") LiveRC_Config["Sysop"].push(username);
      if(thisgroup=="bot") LiveRC_Config["Bot"].push(username);
    }
  }
  var HavetoContinue = api.getElementsByTagName('query-continue')[0];
  if(HavetoContinue){
    var HavetoContinueValue = "&aufrom=" + encodeURIComponent(HavetoContinue.firstChild.getAttribute('aufrom'));
    liveBotSysop(HavetoContinueValue);
  }else{
    LiveRC_LaunchProcessNextStep();
  }
}

/* </source>

==== Récupération de la liste de suivi ====

<source lang="javascript"> */

function liveWatch() {
  lrcDisplayDebug("Get watchlist");
  var APIlimit = LiveRC_Config["UserInfos"].APIlimit;
  var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query&list=watchlistraw';
  if(lrcMakeParam("GetPageInfos")){ // we don't need all watchlist if we get each page infos
    URL += '&wrcontinue=0|LiveRC';
    APIlimit = Math.round(APIlimit/10);
  }
  URL += '&wrlimit=' + APIlimit;
  wpajax.http({url:URL,
               onSuccess: getWatch,
               suivi:new Array(),
               contact:new Array(),
               hidden:new Array()
  });
}

function getWatch(xmlreq, data){
  var Contact_Temp = data.contact;
  var Hidden_Temp = data.hidden;
  var Suivi_Temp = data.suivi;
  var api = xmlreq.responseXML.getElementsByTagName('api')[0];
  var WatchPrefix = 'LiveRCWatch:';
  var HiddenPrefix = 'LiveRCHidden:';
  if (api.firstChild.nodeName == "error") return;
  var rcs = api.getElementsByTagName('wr');
  leni=rcs.length;
  for (i=0; i<leni; i++) {
    var page = rcs[i].getAttribute('title');
    if (page.substr(0, WatchPrefix.length) == WatchPrefix) {
      page = page.substr(WatchPrefix.length, page.length);
      Contact_Temp[page] = new Object();
      Contact_Temp[page].ts = "--:--";
      Contact_Temp[page].pages = new Array();
    } else if (page.substr(0, HiddenPrefix.length) == HiddenPrefix) {
      page = page.substr(HiddenPrefix.length, page.length);
      Hidden_Temp[page] = new Object();
      Hidden_Temp[page].ts = "--:--";
      Hidden_Temp[page].pages = new Array();
    } else {
      Suivi_Temp[page] = new Object();
      Suivi_Temp[page].ts = "--:--";
      Suivi_Temp[page].users = new Array();
      var sotherns = getNamespaceInfoFromPage(page);
      var sotherpn = getNamespaceInfoFromPage(page, "PageName");
      if(sotherns%2==0){
          var sothernsnumber = (sotherns+1);
      }else{
          var sothernsnumber = (sotherns-1);
      }
      var sothername = (sothernsnumber == 0 ? sotherpn : lrcGetNamespaceName(sothernsnumber)+":"+sotherpn);
      Suivi_Temp[sothername] = new Object();
      Suivi_Temp[sothername].ts = "--:--";
      Suivi_Temp[sothername].users = new Array();
    }
  }
  var wc1=api.getElementsByTagName('query-continue')[0];
  if (wc1){
    var wrcontinue = wc1.firstChild.getAttribute('wrcontinue');
    if(!lrcMakeParam("GetPageInfos") || wrcontinue.indexOf("0|LiveRC")!=-1){
      var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query&list=watchlistraw'
              + '&wrcontinue=' + encodeURIComponent(wrcontinue);
      var APIlimit = LiveRC_Config["UserInfos"].APIlimit;
      if(lrcMakeParam("GetPageInfos")) APIlimit = Math.round(APIlimit/10);
      URL += '&wrlimit=' + APIlimit;
      wpajax.http({url:URL,
          onSuccess: getWatch,
          suivi:Suivi_Temp,
          contact:Contact_Temp,
          hidden:Hidden_Temp
      });
      return;
    }
  }
  LiveRC_Config["Suivi"] = Suivi_Temp;
  LiveRC_Config["Contact"] = Contact_Temp;
  LiveRC_Config["Hidden"] = Hidden_Temp;
  LiveRC_Config["ListLoaded"]["Watchlist"] = true;
  LiveRC_ManageParams_AddContactListMenu();
  LiveRC_ManageParams_AddHiddenListMenu();
  LiveRC_LaunchProcessNextStep();
}

/* </source>

==== Récupération des derniers blocages ====

<source lang="javascript"> */

function loadBlocks(){
  lrcDisplayDebug("Get blocked users");
  var blocksLimit = 1000;
  var queryLimit = Math.min(LiveRC_Config["UserInfos"].APIlimit, blocksLimit);
  var URL = wgServer + wgScriptPath+'/api.php?action=query&list=logevents&letype=block&lelimit='+queryLimit+'&format=xml';
  wpajax.http({url: URL,
                 onSuccess: readBlocks,
                 remaining: blocksLimit - queryLimit,
                 blocked:new Array()
  });
}

function readBlocks(xmlreq, data) {
  var logevents = xmlreq.responseXML.getElementsByTagName('logevents')[0];
  if (typeof(logevents) == 'undefined') return;
  var Blocks_Temp = data.blocked;
  lst = logevents.childNodes;
  for (var i = 0; i < lst.length; i++) {
    if (lst[i].getAttribute('action') == 'block') {
      var user = lst[i].getAttribute('title');
      if (user != null) {
        user = user.substr(user.indexOf(':') + 1);
        Blocks_Temp[user] = 1;
      }
    }
  }
  var cancontinue = xmlreq.responseXML.getElementsByTagName('query-continue')[0];
  if (data.remaining > 0 && cancontinue) {
    var queryLimit = Math.min(LiveRC_Config["UserInfos"].APIlimit, data.remaining);    
    var lestart = cancontinue.firstChild.getAttribute('lestart');
    var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query&list=logevents&letype=block'
            + '&lelimit=' + queryLimit
            + '&lestart=' + encodeURIComponent(lestart);
    wpajax.http({url: URL,
                 onSuccess: readBlocks,
                 remaining: data.remaining - queryLimit,
                 blocked:Blocks_Temp
    });
  } else {
    LiveRC_Config["Blocks"] = Blocks_Temp;
    LiveRC_LaunchProcessNextStep();
  }
}

/* </source>

==== Récupération des catégories d'utilisateurs ====

<source lang="javascript"> */

function loadUsersInCats(){
  LiveRC_Config["watchCategoriesLoaded"] = new Array();
  var UCategories = Custom_watchCategories;
  if(UCategories.length===0) UCategories = watchCategories;
  for(var i=0,l=UCategories.length;i<l;i++){
    var Cat = UCategories[i].category;
    lrcDisplayDebug("Get category members: "+Cat);
    LiveRC_Config["watchCategoriesLoaded"][Cat] = false;
    var URL = wgServer + wgScriptPath
            + '/api.php?format=xml&action=query&list=categorymembers'
            + '&cmlimit=' + LiveRC_Config["UserInfos"].APIlimit
            + '&cmtitle=' + encodeURIComponent(lrcGetNamespaceName(14)+":"+Cat)
    wpajax.http({url: URL,
                 onSuccess: fillUserCat,
                 wcIndex: i,
                 category:Cat
    });
  }
}

function fillUserCat(xmlreq,data) {
  var Cat = data.category;
  var cats = xmlreq.responseXML.getElementsByTagName('cm');
  for (var a = 0; a < cats.length; a++) {
    var ns = parseInt(cats[a].getAttribute('ns'));
    if (ns == 2 || ns == 3) {
      var title = cats[a].getAttribute('title').split(lrcGetNamespaceName(3)+":").join("");
      title = title.split(lrcGetNamespaceName(2)+":").join("").split("/")[0];
      if(typeof(LiveRC_Config["UserCat"][title])=="undefined") LiveRC_Config["UserCat"][title] = new Array();
      LiveRC_Config["UserCat"][title][data.wcIndex] = true;
    }else{
      continue;
    }
  }
  var cmcontinue="";
  if (xmlreq.responseXML.getElementsByTagName('query-continue')[0]) {
    cmcontinue = xmlreq.responseXML.getElementsByTagName('query-continue')[0].getElementsByTagName('categorymembers')[0].getAttribute('cmcontinue');
    var URL = wgServer + wgScriptPath
            + '/api.php?format=xml&action=query&list=categorymembers'
            + '&cmlimit=' + LiveRC_Config["UserInfos"].APIlimit
            + '&cmtitle=' + encodeURIComponent(lrcGetNamespaceName(14)+":"+Cat)
            + '&cmcontinue=' + encodeURIComponent(cmcontinue)
    wpajax.http({url: URL,
                 onSuccess: fillUserCat,
                 wcIndex: data.wcIndex,
                 category:data.category
    });
  }else{
    LiveRC_Config["watchCategoriesLoaded"][Cat] = true;
    var AllCatsLoaded = true;
    for(var cat in LiveRC_Config["watchCategoriesLoaded"]){
      if(LiveRC_Config["watchCategoriesLoaded"][cat]===false) AllCatsLoaded = false;
    }
    if(AllCatsLoaded){
      lrcDisplayDebug("Category members : all loads OK");
      LiveRC_LaunchProcessNextStep();
    }
  }
}

function liveRCReady(){
  removeClass(document.body,'LiveRCLoading');
  clearTimeout(LiveRC_Config["Timeout"]["WaitLoading"]);
  var LastAlerts = document.getElementById('LiveRCAlert');
  if(LastAlerts) LastAlerts.parentNode.removeChild(LastAlerts);

  LiveRC_Config["LoadingTime"] = Math.round(((new Date()).getTime() - LiveRC_Config["LoadingTime"])/1000);
  LiveRC_alert('<center><code><b>Launch sequence completed in '+LiveRC_Config["LoadingTime"]+' seconds.</code></center>')
  setTimeout("LiveRC_alert('<center><code><b><u>Assigned mission: <i>search and destroy</i></u></b></code></center>');",5000);
  setTimeout("LiveRC_alert('<center><code><b><big>Good luck, <i>"+wgUserName+"</i>!</big></b></code></center>');",6000);
  lrcDisplayDebug('<span style="color:darkGreen;">LiveRC launch sequence completed. Assigned mission: Search and destroy. Good luck, '+wgUserName+'!</span>');
  LiveRC_LaunchProcessNextStep();
}

/* </source>

=== Fonctions de mise à jour des modifications récentes ===

==== Lancement de la requête de mise à jour ====

<source lang="javascript"> */

function liveRC() {
  RAZnotificationtimestamps();
  if(document.getElementById('stopLive').checked){
    lrcToggleLogo(false);
    clearTimeout(LiveRC_Config["Timeout"]["RCRequest"]);
    LiveRC_Config["Timeout"]["RCRequest"] = setTimeout("liveRC()",1000);
    LiveRC_Config["RequestError"] = 0;
    return;
  }
  lrcToggleLogo(true);
  lrcDisplayDebug("Get RC");
  clearTimeout(LiveRC_Config["Timeout"]["RCRequest"]);
  LiveRC_Config["Timeout"]["RCRequest"] = setTimeout('LiveRC_Config["RequestError"]++; if(LiveRC_Config["RequestError"]>4){ document.getElementById("stopLive").checked = "checked"; }; liveRC(); ',(lrcMakeParam("Refresh")+30)*1000);

  var HookResult = LiveRC_RunHooks("BeforeRC");
  if(!HookResult) return;

  var withFilters = (lrcUserHasRight("abusefilter-log") && typeof(LiveRC_Config["MediawikiExtensions"]["Abuse Filter"]) != "undefined");

  var withEcho = (lrcMakeParam("ShowNotifications") && !!LiveRC_Config["MediawikiExtensions"]["Echo"]);

  var withCheckuser = (lrcUserHasRight("checkuser-log") && !!LiveRC_Config["MediawikiExtensions"]["CheckUser"]);

  var URL = wgServer + wgScriptPath + '/api.php?action=query'
    + '&list=recentchanges|logevents' + (withFilters ? '|abuselog' : '') + (withCheckuser ? '|checkuserlog' : '')
    + (withEcho ? '&meta=notifications' : '')
    + '&rcprop=user|comment|parsedcomment|flags|timestamp|title|ids|sizes|tags'+(lrcUserHasRight("autopatrol")?'|patrolled': '')
    + "&rctype=edit|new|external"
    + '&rcend=' + LiveRC_Config["LastRCtimestamp"] + '&rclimit=' + lrcMakeParam("RCLimit")
    + '&leprop=ids|title|type|user|userid|timestamp|comment|parsedcomment|details|tags'
    + '&leend=' + LiveRC_Config["LastLOGtimestamp"] + '&lelimit=' + lrcMakeParam("RCLimit")
    + (withFilters ? '&aflprop=ids|filter|user|title|action|result|timestamp|hidden|revid' : '') 
    + (withFilters ? '&aflend=' + LiveRC_Config["LastFILTERtimestamp"] + '&afllimit=' + lrcMakeParam("RCLimit") : '')
    + (withCheckuser ? 'culto=' + LiveRC_Config["LastCUtimestamp"] + '&cullimit=' + lrcMakeParam("RCLimit") : '')
    + '&format=xml';
  wpajax.http({url:URL, onSuccess:getRC});
}

/*</source>

==== Récupération de la requête de mise à jour ====

<source lang="javascript"> */

function getRC(xmlreq, data) {
  if (document.getElementById('stopLive').checked){
    lrcToggleLogo(false);
    clearTimeout(LiveRC_Config["Timeout"]["RCRequest"]);
    LiveRC_Config["Timeout"]["RCRequest"] = setTimeout("liveRC()",1000);
    return;
  }
  var api = xmlreq.responseXML.getElementsByTagName('api')[0];

  if (api.firstChild.nodeName == "error") return;

  goNext(2); // Set LiveRC_Config["AllLinesSeen"] if we need to preload a line after the function completes.

  var query = api.getElementsByTagName('query')[0];

  // Log
  var logevent = query.getElementsByTagName('logevents')[0];
  if(logevent){
    var logs = logevent.getElementsByTagName('item');
    for (var i=(logs.length-1); i>=0; i--) {
      if (logs[i].getAttribute('logid') <= LiveRC_Config["LastLOGid"]) continue;
      var log = new Object();
      log.state = lrcAddState(log.state, "LOG");       
      for (var j=0,lenj=logs[i].attributes.length;j<lenj; j++) {
        if (logs[i].attributes[j].name == 'type'){
          log.type = logs[i].attributes[j].value;
          switch(logs[i].attributes[j].value){
            case 'patrol':
              log.state = lrcAddState(log.state, "PATROL");
              if (logs[i].firstChild) {
                var patrol_attributes = logs[i].firstChild.attributes;
                for (var k=0,lenk=patrol_attributes.length;k<lenk; k++) {
                  var thispatrolattributeName = patrol_attributes[k].name;
                  var thispatrolattributeValue = patrol_attributes[k].value;                       
                  if ( thispatrolattributeName  == 'cur') {
                    log.cur_revid = thispatrolattributeValue;
                  } else if (thispatrolattributeName == 'prev') {
                    log.prev_revid = thispatrolattributeValue;
                  } else if (thispatrolattributeName == 'auto') {
                    lrcAddState(log.state, "AUTOPATROLLED");
                  }
                }
              }
              break;
            case 'liquidthreads':
              log.state = lrcAddState(log.state, "LIQUIDTHREADS");
              log.liquidthreadsparams = new Array();
              var LiquidThreadsParams = logs[i].getElementsByTagName('param');
              for(var ltp=0,ltpen=LiquidThreadsParams.length;ltp<spen;ltp++){
                var thisLTparam = (LiquidThreadsParams[ltp].firstChild ? LiquidThreadsParams[ltp].firstChild.nodeValue : false);
                if(thisLTparam) log.liquidthreadsparams.push(thisLTparam);
              }
              break;
            case 'pagetranslation':
              log.state = lrcAddState(log.state, "PAGETRANSLATION");
              break;
            case 'translatorsandbox':
              log.state = lrcAddState(log.state, "TRANSLATORSANDBOX");
              break;
            case 'translationreview':
              log.state = lrcAddState(log.state, "TRANSLATIONREVIEW");
              break;
            case 'notifytranslators':
              log.state = lrcAddState(log.state, "NOTIFYTRANSLATORS");
              break;
            case 'mwoauthconsumer':
              log.state = lrcAddState(log.state, "OAUTH");
              break;
            case 'moodbar':
              log.state = lrcAddState(log.state, "MOODBAR");
              break;
            case 'newusers':
              log.state = lrcAddState(log.state, "NEWUSER");
              break;
            case 'massmessage':
              log.state = lrcAddState(log.state, "MASSMESSAGE");
              break;
            case 'pagetriage-deletion':
              log.state = lrcAddState(log.state, "PAGETRIAGE-DELETION");
              break;
            case 'pagetriage-curation':
              log.state = lrcAddState(log.state, "PAGETRIAGE-CURATION");
              if(logs[i].firstChild){
                log.pagetriagetags = new Array();
                var node = logs[i].firstChild.firstChild;
                while(node){
                  log.pagetriagetags.push(node.firstChild ? node.firstChild.nodeValue : 'x');
                  node = node.nextSibling;
                  if(!node) break;
                }
              }
              break;
            case 'upload':
              log.state = lrcAddState(log.state, "UPLOAD");
              break;
            case 'block':
              log.state = lrcAddState(log.state, "BLOCK");
              var thisblockaction = logs[i].getAttribute("action");
              log.action = thisblockaction;
              if( (thisblockaction == "block" || thisblockaction == "reblock") && logs[i].firstChild){
                var blockAttributes = logs[i].firstChild.attributes;
                for(var la=0,lal=blockAttributes.length;la<lal;la++){                
                  log[blockAttributes[la].name] = blockAttributes[la].value;
                }
              }
              if(log.flags){
                var tempflags = log.flags.split(",");
                var newblockflags = new Object();
                for(var fla=0,flal=tempflags.length;fla<flal;fla++){
                  var blockmess = lrcGetMediawikiMessage(("block-log-flags-"+tempflags[fla]), true);
                  newblockflags[tempflags[fla]] = ( blockmess ? blockmess : tempflags[fla] );
                }
                log.flags = newblockflags;
              }
              break;
            case 'gblblock':
              log.state = lrcAddState(log.state, "GBBLOCK");
              break;
            case 'delete':
              log.state = lrcAddState(log.state, "DELETE");
              break;
            case 'suppress':
              log.state = lrcAddState(log.state, "OVERSIGHT");
              break;
            case 'online':
            case 'campus':
            case 'course':
            case 'institution':
            case 'instructor':
            case 'student':
              log.state = lrcAddState(log.state, "EDUCATIONPROGRAM");
              break;
            case 'move':
              log.state = lrcAddState(log.state, "MOVE");
              if (logs[i].firstChild)
                log.new_title = logs[i].firstChild.attributes[1].value;
              break;
            case 'protect':
              log.state = lrcAddState(log.state, "PROTECT");
              var protectparam = logs[i].getElementsByTagName('param')[0];
              if(protectparam && protectparam.firstChild) log.protectionparam = protectparam.firstChild.nodeValue;
              break;
            case 'review':
              log.state = lrcAddState(log.state, "REVIEW");
              var ReviewParams = logs[i].getElementsByTagName('param');
              if(ReviewParams[0] && ReviewParams[0].firstChild) log.reviewedrevid = ReviewParams[0].firstChild.nodeValue;
              if(ReviewParams[1] && ReviewParams[1].firstChild) log.reviewedoldid = ReviewParams[1].firstChild.nodeValue;
              if(ReviewParams[2] && ReviewParams[2].firstChild) log.reviewedtimestamp = ReviewParams[2].firstChild.nodeValue;
              break;
            case 'stable':
              log.state = lrcAddState(log.state, "STABLE");
              log.stableparams = new Array();
              var StableParams = logs[i].getElementsByTagName('param');
              for(var sp=0,spen=StableParams.length;sp<spen;sp++){
                var thisSTparam = (StableParams[sp].firstChild ? StableParams[sp].firstChild.nodeValue : false);
                if(thisSTparam) log.stableparams.push(thisSTparam);
              }
              break;
            case 'articlefeedbackv5':
              log.state = lrcAddState(log.state, "FEEDBACK");            
              break;
            case 'rights':
              log.state = lrcAddState(log.state, "USERRIGHTS");
              var userrightinfos = logs[i].getElementsByTagName('rights')[0];
              if(userrightinfos){
                log.oldrights = userrightinfos.getAttribute('old');
                if(!log.oldrights || log.oldrights == "") log.oldrights = "Ø";
                log.newrights = userrightinfos.getAttribute('new');   
                if(!log.newrights || log.newrights == "") log.newrights = "Ø";             
              }
              break;
            case 'gblrights':
              log.state = lrcAddState(log.state, "GBUSERRIGHTS");
              break;
            case 'renameuser':
              log.state = lrcAddState(log.state, "RENAMEUSER");
              log.newuser = logs[i].getAttribute("newuser");
              break;
            case 'spamblacklist':
              log.state = lrcAddState(log.state, "SPAMBLACKLIST");
              break;
            case 'thanks':
              log.state = lrcAddState(log.state, "THANKS");
              break;
            default:
              break;
          }
        }
        else
          log[logs[i].attributes[j].name] = logs[i].attributes[j].value;
      }
      if (!log.revid) {
        //Set a dummy revid to prevent deletion
        log.revid=log.logid;
      }

      // We don't care about the auto-patrolled edits
      if(lrcHasState(log.state, "PATROL") && lrcHasState(log.state, "AUTOPATROLLED") ) continue;

      // We don't care about the auto-reviewed edits
      if(lrcHasState(log.state, "REVIEW") && (new Array("approve-a", "approve-ia", "approve2-a", "approve2-ia")).indexOf(log.action) != -1) continue;

      if (LiveRC_Config["Sysop"].indexOf(log.user) != -1)
        log.state = lrcAddState(log.state, "SYSOP");

      if(lrcHasState(log.state, "LIQUIDTHREADS")){
        log.comment = log.liquidthreadsparams.join(" ⇨ ");
      }
      if(lrcHasState(log.state, "NEWUSER")){
        var newuser = log.title.split(lrcGetNamespaceName(2)+":").join("");
        if(!LiveRC_Config["NewUsers"][newuser]){
          LiveRC_Config["NewUsers"][newuser] = new Object();
          LiveRC_Config["NewUsers"][newuser].ts = log.timestamp;
          LiveRC_Config["NewUsers"][newuser].pages = new Array();
          updateFollowNewUsers();
        }
      } 

      if(lrcHasState(log.state, "SPAMBLACKLIST")){
        var spamuser = log.user;
        if(!LiveRC_Config["Spam"][spamuser]){
          LiveRC_Config["Spam"][spamuser] = new Object();
          LiveRC_Config["Spam"][spamuser].ts = log.timestamp;
          LiveRC_Config["Spam"][spamuser].pages = new Array();
        }
        LiveRC_Config["Spam"][spamuser].pages.push(log);
        updateFollowSpam();
        continue; // nothing more to do, cause there is no edit
      }

      if(lrcHasState(log.state, "BLOCK")){
        var blockedUserName = log.title.split(lrcGetNamespaceName(2)+":").join("");
        LiveRC_Config["Blocked"][blockedUserName] = true;
        updateFollowAbuseLog();
        updateFollowSpam();
        updateFollowRevoc();
        updateFollowNewUsers();
        updateFollowContact();
        updateFollowHidden();
        updateFollowWatchlist();
        updateFollowNewPages();
        updateFollowFeedback();
        updateFollowPendingChanges();
      }
      if(lrcHasState(log.state, "FEEDBACK")){
        log.title = log.title.split("/"+log.feedbackId).join("").replace(/[^\/]*\//, "");
        log.ns = getNamespaceInfoFromPage(log.title);
      }

      if (LiveRC_Config["Sysop"].indexOf(log.user) != -1)
        log.state = lrcAddState(log.state, "SYSOP");
      if(LiveRC_Config["NewUsers"][log.user])
        log.state = lrcAddState(log.state, "NEWBIE");
      if(LiveRC_Config["Bot"].indexOf(log.user)!=-1)
        log.state = lrcAddState(log.state, "BOT");

      if(lrcMakeParam("GetPageInfos")) {
        livePageInfos(log);
      } else {
        getRevision(log);
      }
    }
    if(logs[0]){
      LiveRC_Config["LastLOGid"] = logs[0].getAttribute('logid');
      LiveRC_Config["LastLOGtimestamp"] = logs[0].getAttribute('timestamp').replace(new RegExp(/\D/g), "");
    }
  }

  // Abuse Filters
  var filters = query.getElementsByTagName('abuselog')[0];
  if(filters){ 
    var filteritems = filters.getElementsByTagName('item');
    var i,j,leni,lenj,filter;
    leni=filteritems.length;
    for (i=leni-1; i>=0; i--) {
      if (filteritems[i].getAttribute('id') <= LiveRC_Config["LastFILTERid"]) continue;
      filter = new Object();
      filter.state = new Array();
      filter.state = lrcAddState(filter.state, "ABFILTER");
      filter.state = lrcAddState(filter.state, "LOG");
      lenj = filteritems[i].attributes.length;
      for (j=0; j<lenj; j++) {
        filter[filteritems[i].attributes[j].name] = filteritems[i].attributes[j].value;
      }
      if(filter.revid) filter.filterrevid = filter.revid;

      filter.revid = filter.id;
      filter.type = "abuselog";

      if (LiveRC_Config["Sysop"].indexOf(filter.user) != -1)
        filter.state = lrcAddState(filter.state, "SYSOP");
      if(LiveRC_Config["NewUsers"][filter.user])
        filter.state = lrcAddState(filter.state, "NEWBIE");
      if(LiveRC_Config["Bot"].indexOf(filter.user)!=-1)
        filter.state = lrcAddState(filter.state, "BOT");
 
      if (lrcMakeParam("GetPageInfos")) {
        livePageInfos(filter);
      } else {
        getRevision(filter);
      }
    }
    if(filteritems[0]){
      LiveRC_Config["LastFILTERid"] = filteritems[0].getAttribute('id');
      LiveRC_Config["LastFILTERtimestamp"] = filteritems[0].getAttribute('timestamp').replace(new RegExp(/\D/g), "");
    }
  }

  // CheckUser

  var checkuserlog = query.getElementsByTagName('checkuserlog')[0];
  if(checkuserlog){
    var CUentries = checkuserlog.getElementsByTagName('entry');
    for(var c=0,l=CUentries.length;c<l;c++){
      var entry = CUentries[c];
      cu = new Object();
      cu.state = new Array();
      cu.state = lrcAddState(cu.state, "LOG");
      cu.state = lrcAddState(cu.state, "CHECKUSER");
      var entryAttr = entry.attributes;
      for(var attr=0,attrlen=entryAttr.length;attr<attrlen;attr++){
        var attrib = entryAttr[attr];
        cu[attrib.name] = attrib.value;
      }
      cu.comment = cu.reason;
      cu.title = lrcGetNamespaceName(2)+":"+cu.target;
      cu.user = cu.checkuser;
    }
    getRevision(cu);
    if(CUentries[0]){
      LiveRC_Config["LastCUtimestamp"] = CUentries[0].getAttribute('timestamp').replace(new RegExp(/\D/g), "");
    }
  }

  // RC
  var i,j,leni,lenj,rc;
  var rcs = query.getElementsByTagName('rc');  
  leni=rcs.length;
  for (i=leni-1; i>=0; i--) {
    // Using rcid as revid can be 0 (e.g. when moving a page)
    if (rcs[i].getAttribute('rcid') <= LiveRC_Config["LastRCid"]) continue;

    rc = new Object();
    rc.state = new Array();
    lenj = rcs[i].attributes.length;
    for (j=0; j<lenj; j++) {
      switch(rcs[i].attributes[j].name) {
        case 'anon':
          rc.state = lrcAddState(rc.state, "IP");
          break;
        case 'bot':
          rc.state = lrcAddState(rc.state, "BOT");
          var u = rcs[i].getAttribute('user');
          if(LiveRC_Config["Bot"].indexOf(u)==-1) LiveRC_Config["Bot"].push(u);
          break;
        case 'new':
          rc.state = lrcAddState(rc.state, "NEW");
          break;
        case 'minor':
          rc.state = lrcAddState(rc.state, "MINOREDIT");
          break;
        case 'new_ns':
          rc.state = lrcAddState(rc.state, "NEWNS");
          break;
        case 'new_title':
          rc.state = lrcAddState(rc.state, "RENAMED");
          break;
        case 'patrolled':
          rc.state = lrcAddState(rc.state, "PATROLLED");
          break;
        default:
          rc[rcs[i].attributes[j].name] = rcs[i].attributes[j].value;
          break;
      }
    }

    var tags = rcs[i].getElementsByTagName('tags')[0].getElementsByTagName('tag');
    if (tags.length) {
      rc.state = lrcAddState(rc.state, "TAG");
      rc.tags = tags;
    }

    if (rc.newlen == 0) rc.state = lrcAddState(rc.state, "BLANKING");

    if (LiveRC_Config["Sysop"].indexOf(rc.user) != -1)
      rc.state = lrcAddState(rc.state, "SYSOP");
    if(LiveRC_Config["NewUsers"][rc.user])
      rc.state = lrcAddState(rc.state, "NEWBIE");
    if(LiveRC_Config["Bot"].indexOf(rc.user)!=-1)
      rc.state = lrcAddState(rc.state, "BOT");

    if(rc.type && rc.type == 'external')
      rc.state = lrcAddState(rc.state, "EXTERNAL");

    if ((typeof(rc.logtype) != "undefined") && rc.logtype == "newuser") continue;

    if (lrcMakeParam("GetPageInfos")) {
      livePageInfos(rc);
    } else {
      getRevision(rc);
    }
  }    
  if(rcs[0]){
    LiveRC_Config["LastRCid"] = rcs[0].getAttribute('rcid');
    LiveRC_Config["LastRCtimestamp"] = rcs[0].getAttribute('timestamp').replace(new RegExp(/\D/g), "");
  }

  // Notifications
  var notifications = query.getElementsByTagName('notification');
  for(var a=0,l=notifications.length;a<l;a++){
    var notification = notifications[a];
    var not = new Object();
    not.state = lrcAddState(not.state, "NOTIFICATION");
    for(var j=0,lenj=notification.attributes.length;j<lenj;j++) {
      not[notification.attributes[j].name] = notification.attributes[j].value;
    }
    for(var j=0,lenj=notification.childNodes.length;j<lenj;j++){
      var thisnode = notification.childNodes[j];
      for(var x=0,lenx=thisnode.attributes.length;x<lenx;x++) {
        var attrname = thisnode.attributes[x].name;
        if(attrname != "id") not[attrname] = thisnode.attributes[x].value;
      }      
    }
    if(typeof(not.read) === "undefined"){ // Show notification not read yet
      liveNotificationInfos(not);
    }else{
      var OldNotID = not.id+"_"+not.mw;
      if(document.getElementById(OldNotID)) supprLigne(OldNotID);
    }
  }
  lrcToggleLogo(false);
  LiveRC_Config["RequestError"] = 0;
  clearTimeout(LiveRC_Config["Timeout"]["RCRequest"]);
  LiveRC_Config["Timeout"]["RCRequest"] = setTimeout("liveRC()",lrcMakeParam("Refresh")*1000);
}

/*</source>

==== Requête des infos de la page (suivi, protection, modèles, catégories et interwikis) ====

<source lang="javascript"> */

function livePageInfos(rc){
  lrcDisplayDebug("Get page infos ("+rc.title+")");
  var withFlags = (typeof(LiveRC_Config["MediawikiExtensions"]["Flagged Revisions"])!="undefined");
  var title = rc.title;
  if(lrcHasState(rc.state, "FEEDBACK")) {
    var pagetoken = title.replace(/.*\//g, "");
    title = title.split("/"+pagetoken).join("").replace(/.*ArticleFeedbackv5\//, "");
  }
  var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query'
                  + '&titles=' + encodeURIComponent(title)
                  + '&prop=info|pageprops|categories|templates|langlinks' + (withFlags ? '|flagged' : '')
                  + '&inprop=watched|protection|watchers|notificationtimestamp'
                  + '&cllimit='+LiveRC_Config["UserInfos"].APIlimit+'&clprop=hidden'
                  + '&tllimit='+LiveRC_Config["UserInfos"].APIlimit
                  + '&lllimit='+LiveRC_Config["UserInfos"].APIlimit+'&llurl'
                  + '&redirects'
                  + '&list=backlinks&bllimit=5&bltitle=' + encodeURIComponent(title)
  wpajax.http({url: URL,
               onSuccess: getPageInfos, 
               edit: rc
  });
}

function getPageInfos(xmlreq, data){
  var api = xmlreq.responseXML.getElementsByTagName('api')[0];
  if (api.firstChild.nodeName == "error") return;

  var rc = data.edit;
  var title = rc.title;
  var state = rc.state;

// ------------------------- Page infos : Redirect ? 

  var Redirect = api.getElementsByTagName('redirects')[0];
  if(Redirect) {
    state = lrcAddState(state, "REDIRECT");
    var R = Redirect.getElementsByTagName('r');
    if(R.length)
      rc.redirect = R[0].getAttribute('to');
  }

// ------------------------- Page infos : Missing ? watched ? protections ? nb of watchers ? Disambig ? Wikidata item ? Notificationtimestamp ?

  var page = api.getElementsByTagName('page')[0];
  if(page){
    var pageismissing = (page.getAttribute('missing') ==="");
    if(pageismissing) rc.redlink = true;
    var pageiswatched = (page.getAttribute('watched') ==="");
    var sothername = lrcGetOtherPagename(title);
    if(!pageiswatched && LiveRC_Config["Suivi"].hasOwnProperty(title)){
      removePageFromSuivi(title);
      removePageFromSuivi(sothername);
      updateFollowWatchlist();
    }else if(pageiswatched && !LiveRC_Config["Suivi"].hasOwnProperty(title)){
      addPageToSuivi(title);
      addPageToSuivi(sothername);
      updateFollowWatchlist();
    }
    var notificationtimestamp = page.getAttribute('notificationtimestamp');
    if(pageiswatched && notificationtimestamp && !LiveRC_Config["Notificationtimestamp"][title]){
      LiveRC_Config["Notificationtimestamp"][title] = notificationtimestamp;
      rc.notificationtimestamp = notificationtimestamp;
    }
    rc.watchers = page.getAttribute('watchers');
    rc.lastrevid = page.getAttribute('lastrevid');
    var PageProtections = page.getElementsByTagName("pr");
    for(var a=0,l=PageProtections.length;a<l;a++){
      var pr = PageProtections[a];      
      var prType = pr.getAttribute("type");
      var prLevel =  pr.getAttribute("level");
      var prExpiry =  pr.getAttribute("expiry");
      if(prType == "edit" && prLevel == "autoconfirmed") state = lrcAddState(state, "LOCK");
      if(prType == "edit" && prLevel == "sysop") state = lrcAddState(state, "FULLLOCK");
    }
    var PageProps = page.getElementsByTagName('pageprops')[0];
    if(PageProps){
      var Disambig = PageProps.getAttribute("disambiguation");
      if(Disambig === "") state = lrcAddState(state, "HOMONYMIE");
      var WikidataItem = PageProps.getAttribute("wikibase_item"); 
      if(WikidataItem) rc.wikidataitem = WikidataItem;
    }
  }

// ------------------------- Categories

  rc.categories = new Array();
  if(api.getElementsByTagName('categories').length){ 
    var cats = api.getElementsByTagName('categories')[0].getElementsByTagName('cl');
    var pageHasCat = false;
    for (var i=0,leni = cats.length; i<leni; i++){
      if(cats[i].getAttribute("hidden")==null) pageHasCat = true;
      var catTitle = cats[i].getAttribute('title');
      rc.categories.push(catTitle);
    }
    if(pageHasCat) state = lrcAddState(state, "CATEGORIZED");
  }

// ------------------------- Templates

  rc.templates = new Array();
  if(api.getElementsByTagName('templates').length){
    var temps = api.getElementsByTagName('templates')[0].getElementsByTagName('tl');
    for (var i=0,leni = temps.length; i<leni; i++){
      var templateTitle = temps[i].getAttribute('title');
      rc.templates.push(templateTitle);
    }
  }

// ------------------------- Langlinks

  rc.langlinks = new Array();
  if(api.getElementsByTagName('langlinks').length){
    var temps = api.getElementsByTagName('langlinks')[0].getElementsByTagName('ll');
    for (var i=0,leni = temps.length; i<leni; i++){
      var langlinksLang = temps[i].getAttribute('lang');
      var langlinksURL = temps[i].getAttribute('url');
      var langlinksTitle = (temps[i].firstChild ? temps[i].firstChild.nodeValue : '');
      rc.langlinks.push({lang:langlinksLang,title:langlinksTitle,url:langlinksURL});
    }
  }
  if(rc.langlinks.length==0 && !rc.wikidataitem) state = lrcAddState(state, "NOLANGLINK")

// ------------------------- BackLinks

  rc.backlinks = api.getElementsByTagName('bl').length;

// ------------------------- Flagged ?

  if(api.getElementsByTagName('flagged').length){
    var flagAttributes = api.getElementsByTagName('flagged')[0].attributes;
    for(var i=0,leni=flagAttributes.length;i<leni;i++){
      var attrName = flagAttributes[i].name;
      var attrValue = flagAttributes[i].value;
      rc[attrName] = attrValue;
    }
    if(rc.stable_revid == rc.lastrevid){
      state = lrcAddState(state, "REVIEW_OK");
      if(LiveRC_Config["PendingChanges"][title]) removePendingChanges(title);
    }else{
      state = lrcAddState(state, "REVIEW_KO");
    }
  }

// -------------------------
  rc.state = state;
  getRevision(rc);
}

/*</source>

==== Gestion des noms de filtres ====

<source lang="javascript"> */

function getFilterAction(action){
  if(action) return lrcGetMediawikiMessage(("abusefilter-action-"+action), true);
  else return lrcGetMediawikiMessage("abusefilter-log-noactions", true);
}

function getFilterComment(filter) {
  filter.comment = lrcMakeText("FILTER")+' '
  filter.comment += '<a href="'+lrcGetUglyPageURL("Special:AbuseFilter/"+filter.filter_id)+'" '
+ ' onclick="liveFilter(\'AbuseFilter\', '+filter.filter_id+'); return false;" >'+filter.filter_id+'</a>';
  filter.comment += ': ';
  filter.comment += filter.filter;
  filter.comment += ' ('+lrcGetMediawikiMessage("abusefilter-edit-warn-actions", true) + getFilterAction(filter.result) + ')';
  return filter.comment;
}

/*</source>

==== Gestion des notifications ====

<source lang="javascript"> */

function liveNotificationInfos(not){
  wpajax.http({url: wgServer + wgScriptPath + '/api.php?format=xml&action=query'
                  + '&meta=notifications&notformat=html',
               onSuccess: getNotificationInfos, 
               not: not
  });
}

function getNotificationInfos(xmlreq, data){
  var not = data.not;
  var api = xmlreq.responseXML.getElementsByTagName('api')[0];
  if (api.firstChild.nodeName == "error") return;

  var notifications = api.getElementsByTagName('notification');
  for(var a=0,l=notifications.length;a<l;a++){
    var notification = notifications[a];
    var ID = notification.getAttribute('id');
    if(ID != not.id) continue;
    var HTML = ( notification.firstChild ? notification.firstChild.nodeValue : "");
    not.HTML = HTML.unhtmlize();
    getRevision(not);
  }  
}

function getRevisionNotification(not){
  var type = not.type;
  var category = not.category;
  var id = not.id;
  var user = not.name;
  var timestamp = not.mw;  
  var text = not.HTML;

  var tr1ID = id+"_"+timestamp;

  var tr1 = document.createElement('tr');
  var th0 = document.createElement('th');
  var td1 = document.createElement('td');
  tr1.className = "RcNotification";
  th0.className = "th0RC";
  td1.className = "th1RC";
  td1.setAttribute("colspan", "4");

  th0.innerHTML = '<a class="hidelineLink" href="javascript:;" onClick="markReadNotification('+lrcEscapeStr(id)+', '+lrcEscapeStr(tr1ID)+'); return false;" title="'+lrcMakeText("HIDE_THIS")+'">X</a>';
  td1.innerHTML = text;
  tr1.appendChild(th0);
  tr1.appendChild(td1);
  tr1.id = tr1ID;
 
  var tabScroll = document.getElementById("liveRC_RCList");
  var tab = document.getElementById( 'tabRC' );
  if(!lrcMakeParam("InvertUpdate")){ // Save scrollTop
    var ScrollDown = (tab.offsetHeight - tabScroll.scrollTop);
  }
  var alreadysuppr = false;
  var OldLine = document.getElementById(tr1ID);
  if(OldLine){ 
    OldLine.parentNode.removeChild(OldLine); 
    alreadysuppr = true;
  }
  if(!lrcMakeParam("InvertUpdate") && tab.firstChild){
    tab.insertBefore(tr1, tab.firstChild);
  }else{
    tab.appendChild(tr1);
  }
  var tabLines = getElementsByClass("rcLine",tab,"tr");
  if(!lrcMakeParam("KeepAllLines") && !alreadysuppr && tabLines.length > lrcMakeParam("RCLimit")){
    var idt = (lrcMakeParam("InvertUpdate") ? tab.firstChild.id : tab.lastChild.id);
    supprLigne(idt);
  }
  if(!lrcMakeParam("InvertUpdate")){ // Reload scrollTop
    if(ScrollDown) tabScroll.scrollTop = (tab.offsetHeight - ScrollDown);
  }
  var Links = tr1.getElementsByTagName('a');
  for(var a=0,l=Links.length;a<l;a++){
    Links[a].setAttribute("target", "_blank");
  }
  LiveRC_RunHooks("AfterRCNotification", {id:tr1.id, rc:not});
}

function markReadNotification(id, tr1ID){
  var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query&prop=info&intoken=edit&titles=AnyPage';
  wpajax.http({url: URL,
               onSuccess: markReadNotificationRunning, 
               tr1ID:tr1ID,
               id:id
  });
}
function markReadNotificationRunning(Req, data){
  var ObjetXML = Req.responseXML;
  var Page = ObjetXML.getElementsByTagName("page")[0];
  if(!Page) return;
  var token = encodeURIComponent(Page.getAttribute("edittoken"));
  var Params = 'list='+data.id + '&token=' + token;
  var headers = new Array();
  headers['Content-Type'] = 'application/x-www-form-urlencoded';
  wpajax.http({ url: wgServer + wgScriptPath + '/api.php?action=echomarkread',
                method: "POST", headers: headers,
                data: Params, 
                onSuccess: markReadNotificationDone, 
                tr1ID: data.tr1ID
  });
}
function markReadNotificationDone(req, data){
  var tr1ID = data.tr1ID;
  if(tr1ID && document.getElementById(tr1ID)) supprLigne(tr1ID); 
}

/* </source>

==== Affichage d'une ligne RC ====

===== Création de la ligne =====

<source lang="javascript"> */

LiveRC_Config["RCpaused"] = new Array();

function getRevisionPaused() {
  if (document.getElementById('stopLive').checked){
    setTimeout("getRevisionPaused()", 1000);
    return;
  }
  while(LiveRC_Config["RCpaused"].length!==0){
    getRevision(LiveRC_Config["RCpaused"][0]);
    LiveRC_Config["RCpaused"].shift();
  }
}

function getRevision(rc){
  if(!rc) return;
  if (document.getElementById('stopLive').checked){
    var ID = LiveRC_Config["RCpaused"].length;
    LiveRC_Config["RCpaused"][ID] = rc;
    if(ID==0) setTimeout("getRevisionPaused()", 1000);
    return;
  }
  if(lrcHasState(rc.state, "NOTIFICATION")){
    getRevisionNotification(rc);
    return;
  }

  var ScrollTop = document.body.scrollTop;
  var title = rc.title;
  var pageid = rc.pageid;
  var revid = rc.revid;
  var oldid = rc.old_revid;
  var user = rc.user;
  var comment = (rc.comment ? rc.comment : "");
  var timestamp = rc.timestamp;
  var ns = rc.ns;
  var state = rc.state;
  var categories = rc.categories;
  var templates = rc.templates;
  var lineUID = generateNewID();

  // INITIALISATION LIGNE RC //

  var tr1ID1 = pageid;
  if(!tr1ID1) tr1ID1 = rc.id; // filters
  var tr1ID2 = revid;
  if(!tr1ID2) tr1ID2 = rc.cur_revid; // patrol
  var tr1ID = tr1ID1+"_"+tr1ID2;
  var tr1 = document.createElement('tr');
  var th0 = document.createElement('th');
  var th1 = document.createElement('th');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  tr1.className = "rcLine";
  th0.className = "th0RC";
  th1.className = "th1RC";
  td2.className = "td2RC";
  td3.className = "td3RC";
  td4.className = "td4RC";
  td5.className = "td5RC";
  LiveRC_Config["RCEvents"][lineUID] = rc;
  lrcDisplayDebug("Display RC or LOG ("+tr1ID+")");

  th0.style.width = "20px";
  th1.style.width = "35%";
  td2.style.width = "25%";
//  td3.style.width = "35%";
  td4.style.width = "20px";
  td5.style.width = "20px";

  // state tests

  var Comments = Custom_commenttests;
  if(Comments.length===0) Comments = commenttests;
  var PCategories = Custom_categoriestests;
  if(PCategories.length===0) PCategories = categoriestests;
  var Templates = Custom_templatestests;
  if(Templates.length===0) Templates = templatestests;
  var UCategories = Custom_watchCategories;
  if(UCategories.length===0) UCategories = watchCategories;

  if(typeof(comment) != "undefined"){
    for(var j=0,lenj=Comments.length; j<lenj; j++){
      if(new RegExp(Comments[j].regex).test(comment))
        rc.state = lrcAddState(rc.state, Comments[j].state);
    }
  }
  if(typeof(LiveRC_Config["UserCat"][user]) != 'undefined'){
    for(var cat in LiveRC_Config["UserCat"][user]){
      rc.state = lrcAddState(rc.state, UCategories[cat].state);
    }
  }  
  if(typeof(categories)=="object" && categories.length>0){
    for(var a=0,l=categories.length;a<l;a++){
      for (var j=0,lenj = PCategories.length; j<lenj; j++){
        if (new RegExp(lrcGetNamespaceName(14)+":"+PCategories[j].regex, "i").test(categories[a]))
          rc.state = lrcAddState(rc.state, PCategories[j].state);
      }
    }
  }
  if(typeof(templates)=="object" && templates.length>0){
    for(var a=0,l=templates.length;a<l;a++){    
      var shorttemplateTitle = templates[a].split(lrcGetNamespaceName(10)+":").join("");
      for(var j=0, lenj=Templates.length; j<lenj; j++){
        if(Templates[j].template == shorttemplateTitle)
          rc.state = lrcAddState(rc.state, Templates[j].state);
      }
    }
  }

  // SUPPR. LIGNE //

  th0.innerHTML = '<a class="hidelineLink" href="javascript:;" onClick="supprLigne(\''+tr1ID+'\'); return false;" title="'+lrcMakeText("HIDE_THIS")+'">X</a>';
  th0.id = lineUID;

  // ARTICLE //

  th1.innerHTML = getRevision_th1Content(rc, tr1ID);
  addClass(th1,"RcLine-title");
  th1.style.textAlign="left";

  // EDITOR //

  var td2id = generateNewID();
  td2.innerHTML = getRevision_td2Content(rc, tr1ID);
  addClass(td2, "creator-name");
  td2.id = td2id;
  if(LiveRC_Config["Revoc"][user]) {
    addClass(tr1, "RcReverted");
    td2.innerHTML += '<sup style="color:red">('+LiveRC_Config["Revoc"][user].pages.length+" "+lrcMakeText("NbRevocCount_Text")+' <small><a href="javascript:;" onClick="removeRevoc('+lrcEscapeStr(user)+')" title="'+lrcMakeText("NbRevocCountRAZ_Title")+'">'+lrcMakeText("NbRevocCountRAZ_Text")+'</a></small> )</sup>'+lrcGetAllRevoc(user);
  }

  // COMMENT //

  if (lrcHasState(state, "TAG")){  // Abusefilter tag ? ;
    addClass(tr1, "RcTag");
  }
  td3.innerHTML = getRevision_td3Content(rc);
  if (!(lrcHasState(state, "ABFILTER"))) {
    var CommentLinks = td3.getElementsByTagName('a');
    for(var a=0,l=CommentLinks.length;a<l;a++){
      var ThisCommentLink = CommentLinks[a];
      var onclickAdded = false;
      var Target = ThisCommentLink.title.replace(lrcGetMediawikiMessage("red-link-title").split("$1").join(""), "");
      if(!Target || Target === "") Target = ThisCommentLink.innerHTML;
      if(hasClass(CommentLinks[a], "new")){
        ThisCommentLink.setAttribute("onClick", "liveEdit("+lrcEscapeStr(Target)+", '&redlink=1'); return false;");
        onclickAdded = true;
      }else{
        if(Target.indexOf(lrcGetNamespaceName(-1)+":"+lrcGetMediawikiMessage("mycontris")+"/")==0){
          Target = ThisCommentLink.innerHTML;
          ThisCommentLink.setAttribute("onClick", "liveContrib("+lrcEscapeStr(Target)+"); return false;");
          onclickAdded = true;
        }else{
          ThisCommentLink.setAttribute("onClick", "liveArticle("+lrcEscapeStr(Target)+"); return false;");
          onclickAdded = true;
        }
      }
      if(onclickAdded) ThisCommentLink.title = ThisCommentLink.title + lrcMakeText("LIVELINK");
    }
  }

  // DELTA SIZE //
  // delta de modif ;
  ///////////////////

  if(""+(rc.newlen - rc.oldlen) != "NaN" && !lrcHasState(state, "EXTERNAL")) {
    td4.innerHTML += getRevision_td4Content(rc);
    td4.style.textAlign = "right";
    td4.style.whiteSpace = "nowrap";
  }
  var td5HTML = getRevision_td5Content(rc)
  td5.innerHTML = td5HTML;
  if(td5HTML!="") addClass(tr1, "Rctd5NotEmpty");
  td5.style.textAlign = "center";
  td5.style.whiteSpace = "nowrap";

  // CSS classes

  getRevisionClasses(tr1, rc);

  // ASSEMBLAGE LIGNE //

  tr1.appendChild(th0);
  tr1.appendChild(th1);
  tr1.appendChild(td2);
  tr1.appendChild(td3);
  tr1.appendChild(td4);
  tr1.appendChild(td5);
  tr1.id = tr1ID;

  // Insertion ligne

  var MustBeShown = setRCRevisionShowStatus(rc);

  var tabScroll = document.getElementById("liveRC_RCList");
  var tab = document.getElementById( 'tabRC' );
  if(!lrcMakeParam("InvertUpdate")){ // Save scrollTop
    var ScrollDown = (tab.offsetHeight - tabScroll.scrollTop);
  }
    // IE automatically inserts a TBODY that we have to take care of
  if (tab.firstChild && (tab.firstChild.nodeName == "TBODY")) tab=tab.firstChild;
  if(MustBeShown){    
    var NextTR = getNextLine(timestamp);
    if(NextTR){
      tab.insertBefore(tr1, NextTR);
    }else{
      if(!lrcMakeParam("InvertUpdate") && tab.firstChild){
        tab.insertBefore(tr1, tab.firstChild);
      }else{
        tab.appendChild(tr1);
      }
    }
  }
  if(!lrcHasState(state, "EXTERNAL")){
    var elold = document.getElementById(pageid+"_"+oldid);
    if(!lrcMakeParam("KeepAllLines")){     // WITH LINE LIMIT
      if(elold == null){
        var tabLines = getElementsByClass("rcLine",tab,"tr");
        if(tabLines.length > lrcMakeParam("RCLimit")){
          var idt = (lrcMakeParam("InvertUpdate") ? tab.firstChild.id : tab.lastChild.id);
          supprLigne(idt);
        }
      }else{
        supprLigne(elold.id);
      }
    }else{                              // NO LINE LIMIT
      if(elold != null) supprLigne(elold.id);
    }
  }
  if(!lrcMakeParam("InvertUpdate")){ // Reload scrollTop
    if(ScrollDown) tabScroll.scrollTop = (tab.offsetHeight - ScrollDown);
  }

  // MISE A JOUR LISTES "Listes de suivi" //

  if(!lrcHasState(state, "PATROL")){
    if(LiveRC_Config["Suivi"][title]) {
      addClass(tr1, "RcWatched");
      LiveRC_Config["Suivi"][title].ts = timestamp;
      LiveRC_Config["Suivi"][title].users.push(rc);
      updateFollowWatchlist();
    }

    if (LiveRC_Config["Contact"][user]) {
      LiveRC_Config["Contact"][user].ts = timestamp;
      LiveRC_Config["Contact"][user].pages.push(rc);
      updateFollowContact();
    }

    if(LiveRC_Config["Hidden"][user]){
      LiveRC_Config["Hidden"][user].ts = timestamp;
      LiveRC_Config["Hidden"][user].pages.push(rc);
      updateFollowHidden();
    }

    if(!lrcHasState(state, "NEWUSER") && LiveRC_Config["NewUsers"][user]){
      LiveRC_Config["NewUsers"][user].ts = timestamp;
      LiveRC_Config["NewUsers"][user].pages.push(rc);
      updateFollowNewUsers();
    }

    if(lrcHasState(state, "ABFILTER")){
      if(!LiveRC_Config["AbuseLog"][user]){
        LiveRC_Config["AbuseLog"][user] = new Object();
        LiveRC_Config["AbuseLog"][user].pages = new Array();
      }
      LiveRC_Config["AbuseLog"][user].ts = timestamp;
      LiveRC_Config["AbuseLog"][user].pages.push(rc);
      updateFollowAbuseLog();
    }

    if(!LiveRC_Config["NewPages"][title] && ((lrcHasState(state, "NEW") && ns%2==0)||(lrcHasState(state, "UPLOAD"))) ){
      LiveRC_Config["NewPages"][title] = new Object();
      LiveRC_Config["NewPages"][title].users = new Array();
    }
    if(LiveRC_Config["NewPages"][title]){
      LiveRC_Config["NewPages"][title].ts = timestamp;
      LiveRC_Config["NewPages"][title].users.push(rc);
      updateFollowNewPages();
    }

    if(lrcHasState(state, "FEEDBACK")){
      if(!LiveRC_Config["Feedback"][title]){
        LiveRC_Config["Feedback"][title] = new Object();
        LiveRC_Config["Feedback"][title].users = new Array();
      }
      LiveRC_Config["Feedback"][title].ts = timestamp;
      LiveRC_Config["Feedback"][title].users.push(rc);
      updateFollowFeedback();
    }

    if(lrcHasState(state, "REVIEW_KO") && !lrcHasState(state, "LOG")){
      LiveRC_Config["PendingChanges"][title] = rc;
      updateFollowPendingChanges();
    }

    if (lrcHasState(state, "REVERT")) {
      var regex = new RegExp("\\[\\[" + lrcGetNamespaceName(-1) + ":" + lrcGetMediawikiMessage("mycontris") + "\\/([^\\]\\|]+)");
      var match = regex.exec(comment);
      if(!match){
        var regex2 = new RegExp(/\[\[Sp[ée]cial:Contributions\/([^\]\|]+)/);
        match = regex2.exec(comment);
        if (!match) {
          var regex3 = new RegExp(/\[\[Specjalna:Wkład\/([^\]\|]+)/);
            match = regex3.exec(comment);
        }
      }
      if (match) {
        var userR = match[1];
        if (userR != user && userR != wgUserName) {
          if (!LiveRC_Config["Revoc"][userR]){
            LiveRC_Config["Revoc"][userR] = new Object();
            LiveRC_Config["Revoc"][userR].pages = new Array();
          }
          LiveRC_Config["Revoc"][userR].ts = timestamp;
          LiveRC_Config["Revoc"][userR].pages.push(rc);
          updateFollowRevoc();
        }
      }
    }
  }
  lrcInitTableHeight();
  if(typeof(ScrollTop)!="undefined") document.body.scrollTop = ScrollTop;

  if(lrcMakeParam("UseMiniDiff"))
    LiveRC_MiniDiffPreviewExtension_Init({id:tr1.id, rc:rc});

  LiveRC_RunHooks("AfterRC", {id:tr1.id, rc:rc});
  if (LiveRC_Config["AllLinesSeen"] && document.getElementById(tr1.id)) {
    LiveRC_Config["AllLinesSeen"] = false;
    goNext(1);
  }
}

function getNextLine(timestamp){
    timestamp = parseInt(timestamp.replace(/\D/g, ""));
    var tab = document.getElementById( 'tabRC' );
    var target = null;
    var AllTimestampInputs = new Array();
    var AllInputs = tab.getElementsByTagName('input');
    for(var b=0,m=AllInputs.length;b<m;b++){
      var ThisInput = AllInputs[b];
      if(ThisInput.type != "hidden" || ThisInput.name != "timestamp") continue;      
      AllTimestampInputs.push(ThisInput);
    }
    for(var b=0,m=AllTimestampInputs.length;b<m;b++){
      if(target) continue;
      var ThisInput = AllTimestampInputs[b];      
      var ThisInputTimestamp = parseInt(ThisInput.value);
      if(!lrcMakeParam("InvertUpdate")){
        if(ThisInputTimestamp > timestamp) continue;
        target = AllTimestampInputs[b];
      }else{
        if(ThisInputTimestamp < timestamp) continue;
        target = AllTimestampInputs[b];
      }
    }
    if(target){
      while(target){
        if(target.tagName && target.tagName.toLowerCase() == "tr") break;
        target = target.parentNode;
      }
    }
    return target;
}

function lrcInitTableHeight(){
  var TabDiv = document.getElementById('liveRC_RCList');
  if(!TabDiv) return;
  var HauteurEcran = LiveRC_GetScreenHeight();
  var TitleTable = document.getElementById("TitleTable");
  var RCOptions = document.getElementById("livePreviewFoot");
  var Table = document.getElementById('tabRC');
  var body = document.body;
  if(hasClass(body, "LiveRCConfigDisplayed")){
    var BottomFixedElement = document.getElementById("OutFixedBottomPanel");
  }else{
    var BottomFixedElement = document.getElementById("FixedBottomPanel");
  }
  var TopFixedElement = document.getElementById("FixedTopPanel");
  if(TitleTable && RCOptions && BottomFixedElement && TopFixedElement){
    var NewHeight = parseInt(HauteurEcran - (TitleTable.offsetHeight+TopFixedElement.offsetHeight+RCOptions.offsetHeight+BottomFixedElement.offsetHeight+6));
    TabDiv.style.height = (NewHeight ? NewHeight : 1 ) + "px";
    if(Table){
      var TableInnerHeight = Table.offsetHeight;
      if(TableInnerHeight>NewHeight){
        if(LiveRC_NavIsIE()){
          TabDiv.style.overflowX = "hidden";
          TabDiv.style.paddingRight = "20px";
        }
        TabDiv.style.overflowY = "scroll";
      }else{
        if(LiveRC_NavIsIE()){
          TabDiv.style.overflowX = "";
          TabDiv.style.paddingRight = "0";
        }
        TabDiv.style.overflowY = "";
      }
    }
  }
  if(LiveRC_Config["Timeout"]["InitTableHeight"]) clearTimeout(LiveRC_Config["Timeout"]["InitTableHeight"]);
  LiveRC_Config["Timeout"]["InitTableHeight"] = setTimeout("lrcInitTableHeight()",200);
}

function changeLigne(quelLigne) {
  var el = document.getElementById(quelLigne);
  if(el) addClass(el, "RcChecked");
}

/* </source>

===== Cellule "page" =====

<source lang="javascript"> */

function getRevision_th1Content(rc, trID){
  var title = rc.title;
  var escTitle = lrcEscapeStr(title);
  var watchers = rc.watchers;
  var state = rc.state;
  var ns = rc.ns;
  var user = rc.user;
  var escUser = lrcEscapeStr(user);
  var timestamp = rc.timestamp;
  var diff = lrcGetDiffLink(rc);
  if(!diff || diff == "") return "";
  var histbutton = ' • ';
  var editbutton = ' • ';
  var watchbutton = ' • ';
  var deletebutton = ' • ';
  var movebutton = ' • ';
  var protectbutton = ' • ';
  var stablebutton = '';
  var watchersbutton = ' • ';
  
  if(!(lrcHasState(state, "LOG")) && !(lrcHasState(state, "EXTERNAL")) ){
    histbutton = lrcGetHistoryLink(rc);
    editbutton = lrcGetEditLink(rc); 
    watchbutton = lrcCreateWatchPageLink(title, LiveRC_Config["Suivi"][title], 0, trID);
    movebutton = lrcGetMoveLink(rc, movebutton);
    deletebutton = lrcGetDeleteLink(rc, deletebutton);
    protectbutton = lrcGetProtectLink(rc, protectbutton)
    watchersbutton = lrcGetWatchersIcon(rc, watchersbutton);
    stablebutton = lrcGetStableLink(rc, stablebutton);
  }
  var ArticleLink = lrcGetArticleLink(rc);
  var sortTag = '<input type="hidden" name="timestamp" value="'+timestamp.replace(/\D/g, "")+'" />'; 
  var th1Text = sortTag 
              + '<small>' + getTimeTag(timestamp) + ' • ' 
              + diff + ' • ' 
              + histbutton + ' • ' 
              + editbutton + ' • ' 
              + watchbutton + ' • ' 
              + movebutton + ' • ' 
              + deletebutton + ' • ' 
              + protectbutton + ' • ' 
              + (stablebutton === '' ? '' : stablebutton + ' • ')
              + watchersbutton 
              + '</small>'
              + ArticleLink;
  return th1Text;
}

/* </source>

===== Cellule "utilisateur" =====

<source lang="javascript"> */

function getRevision_td2Content(rc, trID){
  var state = rc.state;
  var user = rc.user;
  var escUser = lrcEscapeStr(user);
  var pageid = rc.pageid;
  var revid = rc.revid;
  var discut  = lrcGetUserTalkLink(rc);
  var contrib = lrcGetUserContribsLink(rc);
  var uwatch = lrcCreateWatchUserLink(user, LiveRC_Config["Contact"][user], 0, trID);
  var uadmin = lrcGetBlockLink(rc);
  var uhide  = lrcCreateHideUserLink(user, false, 0, trID);
  var editor = "", preEditor = ""; 
  var testedStates = new Array();
  for(var a=0,l=watchCategories.length;a<l;a++){
    var ThisState = watchCategories[a].state;
    var ThisIcon = watchCategories[a].icon;
    if(lrcHasState(state, ThisState) && testedStates.indexOf(ThisState)==-1 && ThisIcon){
      preEditor += lrcMakeIcon(ThisIcon)+'&nbsp;';
      testedStates.push(ThisState);
    }
  }
  if(lrcHasState(state, "NEWBIE") && !lrcHasState(state, "NEWUSER")) 
    preEditor += lrcMakeIcon("NewbieIcon")+'&nbsp;';
  if (lrcHasState(state, "BOT"))
    preEditor += lrcMakeIcon("BotIcon")+'&nbsp;';
  if (lrcHasState(state, "SYSOP"))
    preEditor += lrcMakeIcon("SysopIcon")+'&nbsp;';  
  if (typeof(LiveRC_Config["Blocks"][user]) != 'undefined' && user != wgUserName)
    preEditor += lrcMakeIcon("BlockedIcon")+'&nbsp;';
  if (typeof(LiveRC_Config["Spam"][user]) != 'undefined' && user != wgUserName)
    preEditor += lrcMakeIcon("SpamblacklistUserIcon")+'&nbsp;';
  editor = lrcGetUserLink(user);
  var X = ' • ';
  var td2Text = '<small>' + discut + X + contrib + X + uhide +  X + uwatch + (uadmin? X+uadmin : '') + X + '</small>'
              + preEditor + editor;
  return td2Text;
}

/* </source>

===== Cellule "commentaire de modification" =====

<source lang="javascript"> */

function getRevision_td3Content(rc){
  var state = rc.state;
  var comment = (rc.comment ? rc.comment : "");
  var parsedcomment = (rc.parsedcomment ? rc.parsedcomment : comment);
  var tags = rc.tags;
  var wcomment = "";
  if (lrcHasState(state, "ABFILTER")) {
    wcomment = getFilterComment(rc);
  }else{
    wcomment = parsedcomment;
  }
  if (lrcMakeParam("BoldComments")) wcomment = '<b>' + wcomment + '</b>'; 
  // Abusefilter tag ? ;
  /////////////////
  if(lrcHasState(state, "TAG") && typeof(tags)!="undefined") {
    var TagTemplate = '<br /><span class="tagTemplate">'+lrcMakeText("Tag_Text")+' : <span class="tagList">$1</span></span>';
    var taglist = new Array();
    for(var a=0,l=tags.length;a<l;a++){
      var thistag = '<span class="tagName">' + tags[a].firstChild.nodeValue + '</span>';
      taglist.push(thistag);
    }
    TagTemplate = TagTemplate.split("$1").join(taglist.join(" | "));
    wcomment += TagTemplate;
  }
  var td3Text = "<small>" + wcomment + "</small>";
  return td3Text;
}

/* </source>

===== Cellule "tailles" =====

<source lang="javascript"> */

function getRevision_td4Content(rc){
  var state = rc.state;
  var sizediff = rc.newlen - rc.oldlen;
  var td4Text = "";
  var tagstart = ( (sizediff > 500 || sizediff < -500) ? 'span style="font-weight:bold" ' : 'small');
  var tagend = ( (sizediff > 500 || sizediff < -500) ? 'span' : 'small');
  var txtdiff = "";
  if (sizediff < 0)
    txtdiff = '<'+tagstart+' class="mw-plusminus-neg"  >'+sizediff+'</'+tagend+'>';
  else if (sizediff == 0)
    txtdiff = '<'+tagstart+' class="mw-plusminus-null" >='+sizediff+'</'+tagend+'>';
  else
    txtdiff = '<'+tagstart+' class="mw-plusminus-pos" >+'+sizediff+'</'+tagend+'>';
  td4Text += txtdiff;
  return td4Text;
}

/* </source>

===== Cellule "test commentaire" =====

<source lang="javascript"> */

function getRevision_td5Content(rc){
  var state = rc.state;
  var td5Text = "";
  if(lrcHasState(state, "MINOREDIT")) 
    td5Text += lrcMakeIcon("MinorEditIcon");

  var testedStates = new Array();
  var Comments = Custom_commenttests;
  if(Comments.length===0) Comments = commenttests;
  for(var a=0,l=Comments.length;a<l;a++){
    var ThisState = Comments[a].state;
    var ThisIcon = Comments[a].icon;
    if(lrcHasState(state, ThisState) && testedStates.indexOf(ThisState)==-1 && ThisIcon){
      td5Text += (td5Text==="" ? "" : '&nbsp;') + lrcMakeIcon(ThisIcon);
      testedStates.push(ThisState);
    }
  }
  return td5Text;
}

/* </source>

===== Classes CSS =====

<source lang="javascript"> */

function getRevisionClasses(tr1, rc){
  var state = rc.state;
  var Comments = Custom_commenttests;
  if(Comments.length===0) Comments = commenttests;
  var PCategories = Custom_categoriestests;
  if(PCategories.length===0) PCategories = categoriestests;
  var Templates = Custom_templatestests;
  if(Templates.length===0) Templates = templatestests;
  var UCategories = Custom_watchCategories;
  if(UCategories.length===0) UCategories = watchCategories;
  var StateTests = new Array(Comments, PCategories, Templates, UCategories);
  for(var a=0,l=StateTests.length;a<l;a++){
    var StateTest = StateTests[a];
    for(var j=0, lenj=StateTest.length;j<lenj;j++){
      var Test = StateTest[j];
      if(Test.state && lrcHasState(state, Test.state) && Test.class) addClass(tr1, Test.class);
    }
  }
  if(lrcHasState(state, "LOG")) addClass(tr1, "RcLog");
  if(lrcHasState(state, "PATROLLED")) addClass(tr1, "RcPatrolled");
  if(lrcHasState(state, "ABFILTER")) addClass(tr1, "RcAbFilter");
  if(lrcHasState(state, "UPLOAD")) addClass(tr1, "RcUpload");
  if(lrcHasState(state, "NEWUSER")) addClass(tr1, "RcNewUser");
  if(lrcHasState(state, "BLOCK")) addClass(tr1, "RcBlock");
  if(lrcHasState(state, "GBBLOCK")) addClass(tr1, "RcBlock");
  if(lrcHasState(state, "DELETE")) addClass(tr1, "RcDelete");
  if(lrcHasState(state, "MOVE")) addClass(tr1, "RcMove");
  if(lrcHasState(state, "PROTECT")) addClass(tr1, "RcProtect");
  if(lrcHasState(state, "FEEDBACK")) addClass(tr1, "RcFeedback");
  if(lrcHasState(state, "USERRIGHTS")) addClass(tr1, "RcRights");
  if(lrcHasState(state, "GBUSERRIGHTS")) addClass(tr1, "RcRights");
  if(lrcHasState(state, "RENAMEUSER")) addClass(tr1, "RcRenameuser");
  if(lrcHasState(state, "THANKS")) addClass(tr1, "RcThanks");
  if(lrcHasState(state, "MASSMESSAGE")) addClass(tr1, "RcMassMessage");
  if(lrcHasState(state, "OVERSIGHT")) addClass(tr1, "RcOversight");
  if(lrcHasState(state, "CHECKUSER")) addClass(tr1, "RcCheckuser");
  if(lrcHasState(state, "EDUCATIONPROGRAM")) addClass(tr1, "RcEducationProgram");
  if(lrcHasState(state, "PAGETRIAGE-DELETION")) addClass(tr1, "RcPagetriageDeletion");
  if(lrcHasState(state, "PAGETRIAGE-CURATION")) addClass(tr1, "RcPagetriageCuration");
  if(lrcHasState(state, "REVIEW"))  addClass(tr1, "RcReview");
  if(lrcHasState(state, "STABLE"))  addClass(tr1, "RcStable");
  if(lrcHasState(state, "LIQUIDTHREADS")) addClass(tr1, "RcLiquidThreads");
  if(lrcHasState(state, "PAGETRANSLATION")) addClass(tr1, "RcPageTranslation");
  if(lrcHasState(state, "TRANSLATORSANDBOX")) addClass(tr1, "RcTranslatorSandbox");
  if(lrcHasState(state, "TRANSLATIONREVIEW")) addClass(tr1, "RcTranslationReview");
  if(lrcHasState(state, "NOTIFYTRANSLATORS")) addClass(tr1, "RcNotifyTranslators");
  if(lrcHasState(state, "OAUTH")) addClass(tr1, "RcOAuth");
  if(lrcHasState(state, "MOODBAR")) addClass(tr1, "RcMoodBar");
  if(lrcHasState(state, "EXTERNAL")) addClass(tr1, "RcExternal");
  if((rc.newlen == 0) && !lrcHasState(state, "EXTERNAL")) addClass(tr1, "RcBlanking");
  if(lrcHasState(state, "NEW")) addClass(tr1, "RcNew");
  if(lrcHasState(state, "IP") && !lrcHasState(state, "EXTERNAL")) addClass(tr1, "RcIp");
  if(lrcHasState(state, "NEWBIE"))  addClass(tr1, "RcNewbie");
  if(lrcHasState(state, "BOT"))  addClass(tr1, "RcBot");
  if(lrcHasState(state, "SYSOP"))  addClass(tr1, "RcSysop");
  if(LiveRC_Config["Contact"][rc.user]) addClass(tr1, "RcContact");
  if(rc.user == wgUserName)  addClass(tr1, "RcSelf");
  if(lrcHasState(state, "REVIEW_KO")) addClass(tr1, "RcNotReviewed");
  if(lrcHasState(state, "MINOREDIT")) addClass(tr1, "RcMinorEdit");
  if(lrcHasState(state, "PATROL")){
    var OldTR = document.getElementById(rc.pageid+"_"+rc.cur_revid);
    if(OldTR) addClass(OldTR, "RcPatrolled");
  }
}

/* </source>

===== Statut d'affichage =====

<source lang="javascript"> */

function setRCRevisionShowStatus(rc){
  var user = rc.user;
  var title = rc.title;
  var state = rc.state;
  var ns = rc.ns;
  var MustBeShown = true;

  // Don't show line if user doesn't match the user selectors
  var showUsersSelector = document.getElementById("showUser");
  if(showUsersSelector.checked){
    if(lrcHasState(state, "IP") && !document.getElementById("showUser_IP").checked) MustBeShown = false;
    if(lrcHasState(state, "BOT") && !document.getElementById("showUser_BOT").checked) MustBeShown = false;
    if(!lrcHasState(state, "IP") && !lrcHasState(state, "BOT")){
      if(lrcUserHasRight("autopatrol")){
       if(lrcHasState(state, "PATROLLED") && !document.getElementById("showUser_AUTOPATROLLED").checked) MustBeShown = false;
       if(!lrcHasState(state, "PATROLLED") && !document.getElementById("showUser_NEWBIE").checked) MustBeShown = false;
      }else{
        if(!document.getElementById("showUser_REGISTRED").checked) MustBeShown = false;
      }
    }
    // In some cases, show line despite the user selectors
    var ShowAllSelf = document.getElementById("showUser_ShowAllSelf");
    if(user == wgUserName && ShowAllSelf && ShowAllSelf.checked) MustBeShown = true;
    var ShowAllContact = document.getElementById("showUser_ShowAllContact");
    if(LiveRC_Config["Contact"][user] && ShowAllContact && ShowAllContact.checked) MustBeShown = true;
    var ShowAllWatchlist = document.getElementById("showUser_ShowAllWatchlist");
    if(LiveRC_Config["Suivi"][title] && ShowAllWatchlist && ShowAllWatchlist.checked) MustBeShown = true;
    var ShowAllRevert = document.getElementById("showUser_ShowAllRevert");
    if(lrcHasState(state, "REVERT") && ShowAllRevert && ShowAllRevert.checked ) MustBeShown = true;
    var ShowAllBlanking = document.getElementById("showUser_ShowAllBlanking");
    if((lrcHasState(state, "BLANKING") || rc.newlen == 0) && ShowAllBlanking && ShowAllBlanking.checked ) MustBeShown = true;
    var ShowAllReplaced = document.getElementById("showUser_ShowAllReplaced");
    if(lrcHasState(state, "REPLACED") && ShowAllReplaced && ShowAllReplaced.checked ) MustBeShown = true;
    // In some cases, hide line despite the user selectors
    var HideOwnSubpage = document.getElementById("showUser_HideOwnSubpage");
    if(HideOwnSubpage && HideOwnSubpage.checked && !lrcHasState(state, "IP") && ns===2 && title.indexOf(user)!=-1)
      MustBeShown = false;
  }

  // Don't show RC if RC checkbox is not checked
  if(!lrcHasState(state, "LOG")){
    if(!document.getElementById('showRC').checked)
      MustBeShown = false;
    var Comments = Custom_commenttests;
    if(Comments.length===0) Comments = commenttests;
    for(var a=0,l=Comments.length;a<l;a++){
      if(lrcHasState(state, Comments[a].state)){
        if(!document.getElementById('showRC_'+Comments[a].state).checked) MustBeShown = false;
      }
    }
    if(!lrcHasState(state, "MINOREDIT") && !lrcHasState(state, "EXTERNAL") && !document.getElementById('showRC_'+rc.type).checked)
      MustBeShown = false;
    if(lrcHasState(state, "MINOREDIT") &&  !lrcHasState(state, "EXTERNAL") && !document.getElementById('showRC_minor').checked)
      MustBeShown = false;
    if(lrcHasState(state, "EXTERNAL") && !document.getElementById('showRC_external').checked)
      MustBeShown = false;
    if(lrcMakeParam("LoadWatchlist") || lrcMakeParam("GetPageInfos")){
      var RCWatch = (document.getElementById('showRC_WL_watched').checked ? "1" : "0")
                   + (document.getElementById('showRC_WL_notwatched').checked ? "1" : "0")
                   + (LiveRC_Config["Suivi"][title] ? "1" : "0")
      if((new Array("111", "110", "101", "010")).indexOf(RCWatch)==-1) MustBeShown = false;
    }
  }

  // Don't show Log if LOG checkbox is not checked
  if(lrcHasState(state, "LOG")){
    if(!document.getElementById("showLog").checked) 
      MustBeShown = false;
    for(var LogType in LiveRC_Config["LogNames"]){
      if(rc.type == LogType){
        var LogInput = document.getElementById("showLog_"+LogType);
        if(LogInput && !LogInput.checked) MustBeShown = false;
      }
    }
    if(lrcMakeParam("LoadWatchlist") || lrcMakeParam("GetPageInfos")){
      var LogWatch = (document.getElementById('showLOG_WL_watched').checked ? "1" : "0")
                   + (document.getElementById('showLOG_WL_notwatched').checked ? "1" : "0")
                   + (LiveRC_Config["Suivi"][title] ? "1" : "0")
      if((new Array("111", "110", "101", "010")).indexOf(LogWatch)==-1) MustBeShown = false;
    }
  }

  // Don't show line if ns do not match the ns selectors
  if(typeof(ns)!="undefined" && document.getElementById('showNS').checked){
    var nstohide = new Array();
    var foundonens = false;
    for(var namespace in LiveRC_Config["MediawikiNamespaces"]){
      var nsInput = document.getElementById('showNS_'+namespace);
      if(nsInput){
        if(nsInput.checked) foundonens = true;
        else nstohide.push(namespace);
      }
      if(foundonens && nstohide.indexOf(ns)!=-1) MustBeShown = false;
    }
  }

  // Don't show line if user is hidden
  if(LiveRC_Config["Hidden"][user])
    MustBeShown = false;

  return MustBeShown;
}

/* </source>

===== Affichage MiniDiff =====

<source lang="javascript"> */

function LiveRC_MiniDiffPreviewExtension_Init(Args){ 
  var id = Args.id; 
  lrcDisplayDebug("Get mini-diff ("+id+")");
  var tr1 = document.getElementById(id);
  if (!tr1) return;
  var Link = getElementsByClass("lrc_PreviewLink",tr1,'a');
  if(!Link[0]) return;
  var trMore = document.getElementById(id+"_More");
  if(trMore) return;
  trMore = document.createElement('tr');
  trMore.id = id+"_More";
  trMore.className = "MiniDiffPreviewTR";
  trMore.style.display = "none";
  var tdClose = document.createElement('td');
  tdClose.className = "MiniDiffClosePreviewTD th0RC";
  tdClose.setAttribute("valign", "middle");
  tdClose.setAttribute("style", "text-align:center");
  var tdContent = document.createElement('td');
  var Col = (tr1.getElementsByTagName('th').length + tr1.getElementsByTagName('td').length -1);
  tdContent.setAttribute("colspan", Col);
  tdContent.className = "MiniDiffPreviewTD";
  trMore.appendChild(tdClose);
  trMore.appendChild(tdContent);
  if(tr1.nextSibling)
    tr1.parentNode.insertBefore(trMore, tr1.nextSibling);
  else if(tr1.parentNode)
    tr1.parentNode.appendChild(trMore);
  LiveRC_MiniDiffPreviewExtension_GetDiff(Args);
}
 
function LiveRC_MiniDiffPreviewExtension_GetDiff(Args){
  var id = Args.id;
  var tr1 = document.getElementById(id);
  var trMore = document.getElementById(id+"_More");
  if (!tr1 || !trMore) return;
  var Link = getElementsByClass("lrc_PreviewLink",tr1,'a');
  if (Link[0]){
    trMore.style.display = ""; 
    var URL = Link[0].href;
    trMore.lastChild.innerHTML = "Traitement en cours...";
    wpajax.http({url:URL, onSuccess: LiveRC_MiniDiffPreviewExtension_InsertDiff, Args:Args });
    return;
  }
}

function LiveRC_MiniDiffPreviewExtension_InsertDiff(req, data){
  var Args = data.Args;
  var id = Args.id;
  lrcDisplayDebug("Display mini-diff ("+id+")");
  var tr1 = document.getElementById(id);
  var trMore = document.getElementById(id+"_More");
  if (!tr1 || !trMore) return;
  var Link = getElementsByClass("lrc_PreviewLink",tr1,'a')[0];
  if(!Link) return;
  var bC  = getPageContent(req);
  var text = '';
  var FunctionsToRun = new Array();
  var Target = trMore.lastChild;
  switch(getTextContent(Link)) {
    case lrcMakeText("DIFF_SHORT"):
      var lD = getElementsByClass('diff',bC,null);
      if (lD[0] == null) {
        text += bC.innerHTML ;
      }else {
        text += '<table border="0" width="98%" cellpadding="0" cellspacing="4" class="diff">'+lD[0].innerHTML+'</table>';
        FunctionsToRun.push(function(node){ getElementsByClass('diff',node,null)[0].getElementsByTagName('tr')[0].style.display = "none"; });
      }
      break;
    case lrcMakeText("DIFFFILTER_SHORT"):
      var Fs = bC.getElementsByTagName('fieldset');
      if (Fs[0] == null) {
        text += bC.innerHTML ;
      }else {
        text += '<fieldset>'+Fs[0].innerHTML+'</fieldset>';
      }
      break;
    case lrcMakeText("DIFFFEEDBACK_SHORT"):
      text += bC.innerHTML ;
       FunctionsToRun.push(lrcmanageFeedbackElements);
      break;
    default:
      text += bC.innerHTML
      break;
  }
  Target.innerHTML = ('<div id="'+id+'_MiniPreview" class="MiniDiffPreviewContent" style="width:100%;max-height:'+lrcMakeParam("MiniPreviewHeight")+';overflow-y:auto;background:color:white">' + text + '</div>');

  if(FunctionsToRun.length>0){
    for(var a=0,l=FunctionsToRun.length;a<l;a++){
      var thisfunction = FunctionsToRun[a];
      if(typeof(thisfunction)==="function") try{ thisfunction(Target, Args); }catch(e){ }
    }
  }  
  LiveRC_RunHooks("AfterMiniDiffPrewiew", Args);
}

function LiveRC_MiniDiffPreviewExtension_ToggleDiff(Checkbox){
  if(!Checkbox) Checkbox = document.getElementById("showDiffR");
  if(!Checkbox) return;
  if(Checkbox.checked){
    removeClass(document.body, "MiniDiffPreviewHidden");
  }else{
    addClass(document.body, "MiniDiffPreviewHidden");
  }
}

/* </source>

==== Fonctions de mise à jour des journaux ====

===== Déclenchements du filtre anti-pourriels =====

<source lang="javascript"> */

function updateFollowSpam(){
  lrcDisplayDebug("Update list (Spam)");
  var tempAr = new Array();
  for (var user in LiveRC_Config["Spam"]) {
    if(!LiveRC_Config["Spam"].hasOwnProperty(user)) continue;
    var timestamp = LiveRC_Config["Spam"][user].ts;
    var uremove = '<a class="hidelineLink" href="javascript:;" '
                + 'title="'+lrcMakeText("DeleteUserButton_Title")+'" '
                + 'onClick="removeSpam('+lrcEscapeStrHTML(user)+');">x</a>';
    var udiscut  = lrcGetUserTalkLink({user:user});
    var ucontrib = lrcGetUserContribsLink({user:user});
    var ublock   = lrcGetBlockLink({user:user});
    var ueditor = lrcGetUserLink(user);
    var MoreLink  = '';
    if(LiveRC_Config["Spam"][user].pages.length>0) MoreLink = lrcGetAllSpam(user);
    if(MoreLink === false) return;
    var ligne = '<li><span id="spam-'+ timestamp+'">'
                + '<small>'+ uremove+' · '+getTimeTag(timestamp)+' : '+udiscut+' • '+ucontrib+(ublock?' • '+ublock:'')+' • </small>'
                + ueditor + MoreLink 
              + '</span></li>';
    tempAr.push(ligne);
  }
  tempAr = tempAr.sort();
  var lvSpam = document.getElementById('liveSpam');
  if(!lvSpam) return;
  lvSpam.innerHTML = "";
  var List = '<ul class="FollowList">';
  var len = tempAr.length;
  for (var n=len-1; n>=0; n--){
    if(tempAr[n]) List += tempAr[n];
  }
  List += "</ul>";
  lvSpam.innerHTML = List;
}

function lrcGetAllSpam(user){
    if(!LiveRC_Config["Spam"][user]) return "";
    var pages = LiveRC_Config["Spam"][user].pages;
    var display = ( LiveRC_Config["Spam"][user].display ? '' : 'style="display:none"');
    var ToggleLink = ' - ' + pages.length
                   + '<a class="FollowSublistToggleLink" href="javascript:;" '
                   + 'onclick="lrcShowHideAllSpam(this,'+lrcEscapeStrHTML(user)+');" '
                   + 'title="'+lrcMakeText("FollowSublistToggleTitle")+'" '
                   + '><b>±</b></a>'
                   + '<ul class="FollowSublist" '+display+'>';
    var Lines = new Array();
    for(var a=0,l=pages.length;a<l;a++){
        var thisedit = pages[a];
        var title = thisedit.title;
        var timestamp = thisedit.timestamp;
        var revid = thisedit.revid;
        var oldid = thisedit.old_revid;
        var target = thisedit.url;
        var Links = new Array();
        Links.time = getTimeTag(timestamp);
        Links.target = '<span style="cursor:pointer;" title="'+target+'">@</a>';
        Links.page = '<a class="lrc_ArticleLink" href="'+lrcGetPageURL(title)+'" onclick="liveArticle('+lrcEscapeStr(title)+'); return false;">'+title+'</a>';
        Lines.push('<li><span>'+Links.time+' – '+Links.target+ ' : ' + Links.page + '</span></li>');
    }
    
    return (ToggleLink += Lines.sort().reverse().join("") + '</ul>');
}

function removeSpam(user){
   delete LiveRC_Config["Spam"][user];
   updateFollowSpam();
}

function lrcShowHideAllSpam(Link, user){
   if(!Link) return false;
   var Span = Link.nextSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
      if(LiveRC_Config["Spam"][user]) LiveRC_Config["Spam"][user].display = true;
   }else{
      Span.style.display = "none";
      if(LiveRC_Config["Spam"][user]) LiveRC_Config["Spam"][user].display = false;
   }
}

/* </source>

===== Déclenchements du filtre anti-abus =====

<source lang="javascript"> */

function updateFollowAbuseLog(){
  lrcDisplayDebug("Update list (Abuselog)");
  var tempAr = new Array();
  for (var user in LiveRC_Config["AbuseLog"]) {
    if(!LiveRC_Config["AbuseLog"].hasOwnProperty(user)) continue;
    var timestamp = LiveRC_Config["AbuseLog"][user].ts;
    var uremove = '<a class="hidelineLink" href="javascript:;" '
                + 'title="'+lrcMakeText("DeleteUserButton_Title")+'" '
                + 'onClick="removeAbuseLog('+lrcEscapeStrHTML(user)+');">x</a>';
    var udiscut  = lrcGetUserTalkLink({user:user});
    var ucontrib = lrcGetUserContribsLink({user:user});
    var ublock   = lrcGetBlockLink({user:user});
    var ueditor = lrcGetUserLink(user, ((LiveRC_Config["AbuseLog"][user].pages.length>0) ? false : "color:black") );
    var MoreLink  = '';
    if(LiveRC_Config["AbuseLog"][user].pages.length>0) MoreLink = lrcGetAllAbuseLog(user);
    if(MoreLink === false) return;
    var ligne = '<li><span id="abuselog-'+ timestamp+'">'
                + '<small>'+ uremove+' · '+getTimeTag(timestamp)+' : '+udiscut+' • '+ucontrib+(ublock?' • '+ublock:'')+' • </small>'
                + ueditor + MoreLink 
              + '</span></li>';
    tempAr.push(ligne);
  }
  tempAr = tempAr.sort();
  var lvAbuseLog = document.getElementById('liveAbuseLog');
  if(!lvAbuseLog) return;
  lvAbuseLog.innerHTML = "";
  var List = '<ul class="FollowList">';
  var len = tempAr.length;
  for (var n=len-1; n>=0; n--){
    if(tempAr[n]) List += tempAr[n];
  }
  List += "</ul>";
  lvAbuseLog.innerHTML = List;
}

function lrcGetAllAbuseLog(user){
    if(!LiveRC_Config["AbuseLog"][user]) return "";
    var pages = LiveRC_Config["AbuseLog"][user].pages;
    var display = ( LiveRC_Config["AbuseLog"][user].display ? '' : 'style="display:none"');
    var ToggleLink = ' - ' + pages.length 
                   + '<a class="FollowSublistToggleLink" href="javascript:;" '
                   + 'onclick="lrcShowHideAllAbuseLog(this,'+lrcEscapeStrHTML(user)+');" '
                   + 'title="'+lrcMakeText("FollowSublistToggleTitle")+'" '
                   + '><b>±</b></a>'
                   + '<ul class="FollowSublist" '+display+'>';
    var Lines = new Array();
    for(var a=0,l=pages.length;a<l;a++){
        var thisedit = pages[a];
        var title = thisedit.title;
        var timestamp = thisedit.timestamp;
        var revid = thisedit.revid;
        var oldid = thisedit.old_revid;
        var Links = new Array();
        Links.time = getTimeTag(timestamp);
        Links.diff = lrcGetDiffLink(thisedit);
        Links.page = '<a class="lrc_ArticleLink" href="'+lrcGetPageURL(title)+'" onclick="liveArticle('+lrcEscapeStr(title)+'); return false;">'+title+'</a>';
        Links.filter = '<a href="'+lrcGetUglyPageURL("Special:AbuseFilter/"+thisedit.filter_id)+'" '
                     + 'onclick="liveFilter(\'AbuseFilter\', '+thisedit.filter_id+'); return false;" '
                     + 'title="'+thisedit.filter+'" '
                     + 'style="color: darkslategray">' + thisedit.filter_id + '</a>';
        Lines.push('<li><span>'+Links.time+' – '+Links.diff+ ' (' + Links.filter + ') : ' + Links.page + '</span></li>');
    }
    
    return (ToggleLink += Lines.sort().reverse().join("") + '</ul>');
}

function removeAbuseLog(name) {
   delete LiveRC_Config["AbuseLog"][name];
   updateFollowAbuseLog();
}

function lrcShowHideAllAbuseLog(Link, user){
   if(!Link) return false;
   var Span = Link.nextSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
      if(LiveRC_Config["AbuseLog"][user]) LiveRC_Config["AbuseLog"][user].display = true;
   }else{
      Span.style.display = "none";
      if(LiveRC_Config["AbuseLog"][user]) LiveRC_Config["AbuseLog"][user].display = false;
   }
}

/* </source>

===== Avis de lecteurs =====

<source lang="javascript"> */

function updateFollowFeedback(){
    lrcDisplayDebug("Update list (Feedback)");
    var tempsAr = new Array();
    for (var title in LiveRC_Config["Feedback"]) {
        if(!LiveRC_Config["Feedback"].hasOwnProperty(title)) continue;
        if(LiveRC_Config["Feedback"][title].users.length == 0) continue;
        var timestamp = LiveRC_Config["Feedback"][title].ts;
        var uremove = '<a class="hidelineLink" href="javascript:;" '
                    + 'title="'+lrcMakeText("HIDE_THIS")+'" '
                    + 'onClick="removeFeedback('+lrcEscapeStrHTML(title)+'); return false;" '
                    + '>x</a>';
        var shist = lrcGetHistoryLink({title:title});
        var sprotect = lrcGetProtectLink({title:title})
        var sotherns = getNamespaceInfoFromPage(title);
        var sotherpn = getNamespaceInfoFromPage(title, "PageName");
        if(sotherns%2==0){
            var sotherText = lrcMakeText("TALK_SHORT");
            var sothernsnumber = (sotherns+1);
        }else{
            var sotherText = lrcMakeText("SUBJECT_SHORT");
            var sothernsnumber = (sotherns-1);
        }
        var sothername = (sothernsnumber == 0 ? sotherpn : lrcGetNamespaceName(sothernsnumber)+":"+sotherpn);
        var stalk = '<a class="pagetalkLink" '
                + 'href="'+lrcGetPageURL(sothername)+'" '
                + 'onClick="liveArticle('+lrcEscapeStrHTML(sothername)+'); return false;"'
                + '>'+sotherText+'</a>';
        var sarti = '<a class="lrc_ArticleLink" '
                + 'href="'+lrcGetPageURL(title)+'" '
                + 'onClick="liveArticle('+lrcEscapeStrHTML(title)+'); return false;"'
                + '>'+title+'</a>';
        var MoreLink  = lrcGetAllFeedback(title);
        if(MoreLink === false) return;
        var ligne = '<li><span id="feedback-' + timestamp + '">'
                    + '<small>'+ uremove+' · '+getTimeTag(timestamp)+' : '+shist+(sprotect ? ' • '+sprotect : '')+' • </small>'
                    + stalk + ' · ' + sarti + MoreLink 
                  + '</span></li>';
        tempsAr.push(ligne);
    }
    tempAr = tempsAr.sort();
    var lvFeedback = document.getElementById( 'liveFeedback' );
    if(!lvFeedback) return;
    lvFeedback.innerHTML = "";
    var List = '<ul class="FollowList">';
    for (var n=tempsAr.length-1; n >= 0; n--){
        if(tempsAr[n]) List += tempsAr[n];
    }
    List += "</ul>";
    lvFeedback.innerHTML = List;
}

function lrcGetAllFeedback(page){
    if(!LiveRC_Config["Feedback"][page]) return "";
    var users = LiveRC_Config["Feedback"][page].users;
    if(users.length<1) return "";
    var display = ( LiveRC_Config["Feedback"][page].display ? '' : 'style="display:none"');
    var ToggleLink = ' - '+users.length
                   + '<a class="FollowSublistToggleLink" href="javascript:;" '
                   + 'onclick="lrcShowHideAllFeedback(this,'+lrcEscapeStrHTML(page)+');" '
                   + 'title="'+lrcMakeText("FollowSublistToggleTitle")+'" '
                   + '><b>±</b></a>'
                   + '<ul class="FollowSublist" '+display+'>';
    var Lines = new Array();
    for(var a=0,l=users.length;a<l;a++){
        var thisedit = users[a];
        var timestamp = thisedit.timestamp;
        var title = thisedit.title;
        var oldid = thisedit.old_revid;
        var revid = thisedit.revid;
        var user = thisedit.user;
        var action = '<sub><small'+(thisedit.action=="create" ? ' style="color:red;" ' : '')+'>'+thisedit.action+'</small></sub>';
        var Links = new Array();

        Links.time = getTimeTag(timestamp);
        Links.diff = lrcGetDiffLink(thisedit);
        Links.editor = lrcGetUserLink(user);

        Lines.push('<li><span>'+Links.time+' – '+Links.diff + ' : ' + Links.editor+' '+action+'</span></li>');
    }    
    return (ToggleLink + Lines.sort().reverse().join("") + '</ul>');
}

function lrcShowHideAllFeedback(Link, page){
   if(!Link) return false;
   var Span = Link.nextSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
      if(LiveRC_Config["Feedback"][page]) LiveRC_Config["Feedback"][page].display = true;
   }else{
      Span.style.display = "none";
      if(LiveRC_Config["Feedback"][page]) LiveRC_Config["Feedback"][page].display = false;
   }
}

function removeFeedback(title){
   delete LiveRC_Config["Feedback"][title];
   updateFollowFeedback();
}

/* </source>

===== Nouvelles pages =====

<source lang="javascript"> */

function updateFollowNewPages(){
    lrcDisplayDebug("Update list (NewPages)");
    var tempsAr = new Array();
    for (var title in LiveRC_Config["NewPages"]) {
        if(!LiveRC_Config["NewPages"].hasOwnProperty(title)) continue;
        if(LiveRC_Config["NewPages"][title].users.length == 0) continue;
        var timestamp = LiveRC_Config["NewPages"][title].ts;
        var uremove = '<a class="hidelineLink" href="javascript:;" '
                    + 'title="'+lrcMakeText("HIDE_THIS")+'" '
                    + 'onClick="removeNewPages('+lrcEscapeStrHTML(title)+'); return false;" '
                    + '>x</a>';
        var watchbutton = lrcCreateWatchPageLink(title, LiveRC_Config["Suivi"][title], 0);
        var sdelete = lrcGetDeleteLink({title:title});
        var sarti = '<a class="lrc_ArticleLink" '
                + 'href="'+lrcGetPageURL(title)+'" '
                + 'onClick="liveArticle('+lrcEscapeStrHTML(title)+'); return false;"'
                + '>'+title+'</a>';
        var MoreLink  = lrcGetAllNewPages(title);
        if(MoreLink === false) return;
        var ligne = '<li><span id="newpages-' + timestamp + '">'
                    + '<small>'+ uremove+ ' · '+getTimeTag(timestamp)+' : '+watchbutton+(sdelete ? ' • '+sdelete : '')+' • </small>'
                    + sarti + MoreLink 
                  + '</span></li>';
        tempsAr.push(ligne);
    }
    tempAr = tempsAr.sort();
    var lvNewPages = document.getElementById('liveNewPages');
    if(!lvNewPages) return;
    lvNewPages.innerHTML = "";
    var List = '<ul class="FollowList">';
    for (var n=tempsAr.length-1; n >= 0; n--){
        if(tempsAr[n]) List += tempsAr[n];
    }
    List += "</ul>";
    lvNewPages.innerHTML = List;
}

function lrcGetAllNewPages(page){
    if(!LiveRC_Config["NewPages"][page]) return "";
    var users = LiveRC_Config["NewPages"][page].users;
    if(users.length<1) return "";
    var display = ( LiveRC_Config["NewPages"][page].display ? '' : 'style="display:none"');
    var ToggleLink = ' - '+users.length
                   + '<a class="FollowSublistToggleLink" href="javascript:;" '
                   + 'onclick="lrcShowHideAllNewPages(this,'+lrcEscapeStrHTML(page)+');" '
                   + 'title="'+lrcMakeText("FollowSublistToggleTitle")+'" '
                   + '><b>±</b></a>'
                   + '<ul class="FollowSublist" '+display+'>';
    var Lines = new Array();
    for(var a=0,l=users.length;a<l;a++){
        var thisedit = users[a];
        var timestamp = thisedit.timestamp;
        var title = thisedit.title;
        var oldid = thisedit.old_revid;
        var revid = thisedit.revid;
        var user = thisedit.user;
        var Links = new Array();
        Links.time = getTimeTag(timestamp);
        Links.diff = lrcGetDiffLink(thisedit);
        Links.editor = lrcGetUserLink(user);
        Lines.push('<li><span>'+Links.time+' – '+Links.diff + ' : ' + Links.editor+'</span></li>');
    }    
    return (ToggleLink + Lines.sort().reverse().join("") + '</ul>');
}

function lrcShowHideAllNewPages(Link, page){
   if(!Link) return false;
   var Span = Link.nextSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
      if(LiveRC_Config["NewPages"][page]) LiveRC_Config["NewPages"][page].display = true;
   }else{
      Span.style.display = "none";
      if(LiveRC_Config["NewPages"][page]) LiveRC_Config["NewPages"][page].display = false;
   }

}

function removeNewPages(title){
   delete LiveRC_Config["NewPages"][title];
   updateFollowNewPages();
}

/* </source>

===== Liste de suivi =====

<source lang="javascript"> */

function updateFollowWatchlist(){
    lrcDisplayDebug("Update list (Watchlist)");
    var tempsAr = new Array();
    for (var title in LiveRC_Config["Suivi"]) {
        if(!LiveRC_Config["Suivi"].hasOwnProperty(title)) continue;
        if(LiveRC_Config["Suivi"][title].users.length == 0) continue;
        var timestamp = LiveRC_Config["Suivi"][title].ts;
        var uremove = '<a class="hidelineLink" href="'+lrcGetUglyPageURL(title,'&action=unwatch') + '" '
              + 'onClick="LiveRC_WatchArticle('+lrcEscapeStrHTML(title)+', false); this.onclick = null; return false;" '
              + 'title="'+lrcMakeText("UNWATCH_TIP")+' « '+title+' »" '
              + '>x</a>';
        var shist = lrcGetHistoryLink({title:title});
        var sprotect = lrcGetProtectLink({title:title});
        if(getNamespaceInfoFromPage(title)%2==0){
            var sotherText = lrcMakeText("TALK_SHORT");
        }else{
            var sotherText = lrcMakeText("SUBJECT_SHORT");
        }
        var sothername = lrcGetOtherPagename(title);
        var stalk = '<a class="pagetalkLink" '
                + 'href="'+lrcGetPageURL(sothername)+'" '
                + 'onClick="liveArticle('+lrcEscapeStr(sothername)+'); return false;"'
                + '>'+sotherText+'</a>';
        var sarti = '<a class="lrc_ArticleLink" '
                + 'href="'+lrcGetPageURL(title)+'" '
                + 'onClick="liveArticle('+lrcEscapeStrHTML(title)+'); return false;"'
                + '>'+title+'</a>';
        var MoreLink  = lrcGetAllSuivi(title);
        if(MoreLink === false) return;
        var ligne = '<li><span id="watch-' + timestamp + '">'
                    + '<small>'+ uremove+' · '+getTimeTag(timestamp)+' : '+shist+(sprotect ? ' • '+sprotect : '')+' • </small>'
                    + stalk + ' · ' + sarti + MoreLink 
                  + '</span></li>';
        tempsAr.push(ligne);
    }
    tempAr = tempsAr.sort();
    var lvSuivi = document.getElementById( 'liveSuivi' );
    if(!lvSuivi) return;
    lvSuivi.innerHTML = "";
    var List = '<ul class="FollowList">';
    for (var n=tempsAr.length-1; n >= 0; n--){
        if(tempsAr[n]) List += tempsAr[n];
    }
    List += "</ul>";
    lvSuivi.innerHTML = List;
}

function lrcGetAllSuivi(page){
    if(!LiveRC_Config["Suivi"][page]) return "";
    var users = LiveRC_Config["Suivi"][page].users;
    if(users.length<1) return "";
    var display = ( LiveRC_Config["Suivi"][page].display ? '' : 'style="display:none"');
    var ToggleLink = ' - '+users.length
                   + '<a class="FollowSublistToggleLink" href="javascript:;" '
                   + 'onclick="lrcShowHideAllSuivi(this,'+lrcEscapeStrHTML(page)+');" '
                   + 'title="'+lrcMakeText("FollowSublistToggleTitle")+'" '
                   + '><b>±</b></a>'
                   + '<ul class="FollowSublist" '+display+'>';
    var Lines = new Array();
    for(var a=0,l=users.length;a<l;a++){
        var thisedit = users[a];
        var timestamp = thisedit.timestamp;
        var title = thisedit.title;
        var oldid = thisedit.old_revid;
        var revid = thisedit.revid;
        var user = thisedit.user;
        var Links = new Array();
        Links.time = getTimeTag(timestamp);
        Links.diff = lrcGetDiffLink(thisedit);
        Links.editor = lrcGetUserLink(user);

        Lines.push('<li><span>'+Links.time+' – '+Links.diff + ' : ' + Links.editor+'</span></li>');
    }    
    return (ToggleLink + Lines.sort().reverse().join("") + '</ul>');
}

function lrcShowHideAllSuivi(Link, page){
   if(!Link) return false;
   var Span = Link.nextSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
      if(LiveRC_Config["Suivi"][page]) LiveRC_Config["Suivi"][page].display = true;
   }else{
      Span.style.display = "none";
      if(LiveRC_Config["Suivi"][page]) LiveRC_Config["Suivi"][page].display = false;
   }
}

/* </source>

===== Nouveaux utilisateurs =====

<source lang="javascript"> */

function updateFollowNewUsers(){
  lrcDisplayDebug("Update list (NewUsers)");
  var tempAr = new Array();
  for (var user in LiveRC_Config["NewUsers"]) {
    if(!LiveRC_Config["NewUsers"].hasOwnProperty(user)) continue;
    var timestamp = LiveRC_Config["NewUsers"][user].ts;
    var uremove = '<a class="hidelineLink" href="javascript:;" '
                + 'title="'+lrcMakeText("DeleteUserButton_Title")+'" '
                + 'onClick="removeNewUsers('+lrcEscapeStrHTML(user)+');">x</a>';
    var udiscut  = lrcGetUserTalkLink({user:user});
    var ucontrib = lrcGetUserContribsLink({user:user})
    var ublock   = lrcGetBlockLink({user:user});
    var ueditor = lrcGetUserLink(user, ((LiveRC_Config["NewUsers"][user].pages.length>0) ? false : "color:black") );
    var MoreLink  = '';
    if(LiveRC_Config["NewUsers"][user].pages.length>0) MoreLink = lrcGetAllNewUsers(user);
    if(MoreLink === false) return;
    var ligne = '<li><span id="newusers-' + timestamp + '">'
                + '<small>'+uremove+' · '+getTimeTag(timestamp)+' : '+udiscut+' • '+ucontrib+(ublock ? ' • '+ublock :'')+' • </small>'
                + ueditor + MoreLink
              + '</span></li>';
    tempAr.push(ligne);
  }
  tempAr = tempAr.sort();
  var lvNewUsers = document.getElementById('liveNewUsers');
  if(!lvNewUsers) return;
  lvNewUsers.innerHTML = "";
  var List = '<ul class="FollowList">';
  var len = tempAr.length;
  for (var n=len-1; n>=0; n--){
    if(tempAr[n]) List += tempAr[n];
  }
  List += "</ul>";
  lvNewUsers.innerHTML = List;
}

function lrcGetAllNewUsers(user){
    if(!LiveRC_Config["NewUsers"][user]) return "";
    var pages = LiveRC_Config["NewUsers"][user].pages;
    var display = ( LiveRC_Config["NewUsers"][user].display ? '' : 'style="display:none"');
    var ToggleLink = ' - ' + pages.length 
                   + '<a class="FollowSublistToggleLink" href="javascript:;" '
                   + 'onclick="lrcShowHideAllNewUsers(this,'+lrcEscapeStrHTML(user)+');" '
                   + 'title="'+lrcMakeText("FollowSublistToggleTitle")+'" '
                   + '><b>±</b></a>'
                   + '<ul class="FollowSublist" '+display+'>';
    var Lines = new Array();
    for(var a=0,l=pages.length;a<l;a++){
        var thisedit = pages[a];
        var title = thisedit.title;
        var timestamp = thisedit.timestamp;
        var revid = thisedit.revid;
        var oldid = thisedit.old_revid;
        var Links = new Array();
        Links.time = getTimeTag(timestamp);
        Links.diff = lrcGetDiffLink(thisedit);
        Links.page = '<a class="lrc_ArticleLink" href="'+lrcGetPageURL(title)+'" onclick="liveArticle('+lrcEscapeStr(title)+'); return false;">'+title+'</a>';
        Lines.push('<li><span>'+Links.time+' – '+Links.diff+ ' : ' + Links.page+'</span></li>');
    }
    
    return (ToggleLink += Lines.sort().reverse().join("") + '</ul>');
}

function removeNewUsers(name) {
   delete LiveRC_Config["NewUsers"][name];
   updateFollowNewUsers();
}

function lrcShowHideAllNewUsers(Link, user){
   if(!Link) return false;
   var Span = Link.nextSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
      if(LiveRC_Config["NewUsers"][user]) LiveRC_Config["NewUsers"][user].display = true;
   }else{
      Span.style.display = "none";
      if(LiveRC_Config["NewUsers"][user]) LiveRC_Config["NewUsers"][user].display = false;
   }
}

/* </source>

===== Masqués =====

<source lang="javascript"> */

function updateFollowHidden() {
  lrcDisplayDebug("Update list (HiddenUsers)");
  var tempAr = new Array();
  for (var user in LiveRC_Config["Hidden"]) {
    if(!LiveRC_Config["Hidden"].hasOwnProperty(user)) continue;
    if(LiveRC_Config["Hidden"][user].pages.length == 0) continue;
    var timestamp = LiveRC_Config["Hidden"][user].ts;
    var uremove = '<a class="hidelineLink" href="javascript:;" '
                + 'title="'+lrcMakeText("DeleteUserButton_Title")+'" '
                + 'onClick="LiveRC_HideUser('+lrcEscapeStrHTML(user)+', false);" >x</a>';
    var udiscut  = lrcGetUserTalkLink({user:user});
    var ucontrib = lrcGetUserContribsLink({user:user})
    var ublock   = lrcGetBlockLink({user:user});
    var ueditor  = lrcGetUserLink(user);
    var MoreLink = lrcGetAllHidden(user);
    if(MoreLink === false) return;
    var ligne = '<li><span id="hidden-' + timestamp + '">'
                + '<small>'+uremove+' · '+getTimeTag(timestamp)+' : '+udiscut+' • '+ucontrib+(ublock ? ' • '+ublock :'')+' • </small>'
                + ueditor + MoreLink
              + '</span></li>';
    tempAr.push(ligne);
  }
  tempAr = tempAr.sort();
  var lvHidden = document.getElementById('liveHidden');
  if(!lvHidden) return;
  lvHidden.innerHTML = "";
  var len = tempAr.length;
  var List = '<ul class="FollowList">';
  for (var n=len-1; n>=0; n--){
    if(tempAr[n]) List += tempAr[n];
  }
  List += "</ul>";
  lvHidden.innerHTML = List;
}

function lrcGetAllHidden(user){
    if(!LiveRC_Config["Hidden"][user]) return "";
    var pages = LiveRC_Config["Hidden"][user].pages;
    var display = ( LiveRC_Config["Hidden"][user].display ? '' : 'style="display:none"');
    var ToggleLink = ' - ' + pages.length 
                   + '<a class="FollowSublistToggleLink" href="javascript:;" '
                   + 'onclick="lrcShowHideAllHidden(this,'+lrcEscapeStrHTML(user)+');" '
                   + 'title="'+lrcMakeText("FollowSublistToggleTitle")+'" '
                   + '><b>±</b></a>'
                   + '<ul class="FollowSublist" '+display+'>';
    var Lines = new Array();
    for(var a=0,l=pages.length;a<l;a++){
        var thisedit = pages[a];
        var title = thisedit.title;
        var timestamp = thisedit.timestamp;
        var revid = thisedit.revid;
        var oldid = thisedit.old_revid;
        var Links = new Array();
        Links.time = getTimeTag(timestamp);
        Links.diff = lrcGetDiffLink(thisedit);
        Links.page = '<a class="lrc_ArticleLink" href="'+lrcGetPageURL(title)+'" onclick="liveArticle('+lrcEscapeStr(title)+'); return false;">'+title+'</a>';
        Lines.push('<li><span>'+Links.time+' – '+Links.diff + ' : ' + Links.page+'</span></li>');
    }    
    return (ToggleLink += Lines.sort().reverse().join("") + '</ul>');
}

function lrcShowHideAllHidden(Link, user){
   if(!Link) return false;
   var Span = Link.nextSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
      if(LiveRC_Config["Hidden"][user]) LiveRC_Config["Hidden"][user].display = true;
   }else{
      Span.style.display = "none";
      if(LiveRC_Config["Hidden"][user]) LiveRC_Config["Hidden"][user].display = false;
   }
}

function hideUser(user) {
   LiveRC_Config["Hidden"][user] = new Object;
   LiveRC_Config["Hidden"][user].ts = "--:--";
   LiveRC_Config["Hidden"][user].pages = new Array();
   updateFollowHidden();
}

function unhideUser(user) {
   delete LiveRC_Config["Hidden"][user];
   updateFollowHidden();
}

/* </source>

===== Contacts =====

<source lang="javascript"> */

function updateFollowContact() {
  lrcDisplayDebug("Update list (Watched Users)");
  var tempAr = new Array();
  for(var user in LiveRC_Config["Contact"]) {
    if(!LiveRC_Config["Contact"].hasOwnProperty(user)) continue;
    if(LiveRC_Config["Contact"][user].pages.length == 0) continue;
    var timestamp = LiveRC_Config["Contact"][user].ts;
    var uremove = '<a class="hidelineLink" href="javascript:;" '
                + 'title="'+lrcMakeText("DeleteUserButton_Title")+'" '
                + 'onClick="removeContact('+lrcEscapeStrHTML(user)+');">x</a>';
    var udiscut  = lrcGetUserTalkLink({user:user});
    var ucontrib = lrcGetUserContribsLink({user:user})
    var ublock   = lrcGetBlockLink({user:user});
    var ueditor  = lrcGetUserLink(user);
    var MoreLink = lrcGetAllContact(user);
    if(!MoreLink) return;
    var ligne = '<li><span id="contact-' + timestamp + '">'
                + '<small>'+uremove+' · '+getTimeTag(timestamp)+' : '+udiscut+' • '+ucontrib+(ublock ? ' • '+ublock :'')+' • </small>'
                + ueditor + MoreLink
              + '</span></li>';
    tempAr.push(ligne);
  }
  tempAr = tempAr.sort();
  var lvContact = document.getElementById('liveContact');
  if(!lvContact) return;
  lvContact.innerHTML = "";
  var List = '<ul class="FollowList">';
  var len = tempAr.length;
  for (var n=len-1; n>=0; n--){
    if(tempAr[n]) List += tempAr[n];
  }
  List += "</ul>";
  lvContact.innerHTML = List;
}

function lrcGetAllContact(user){
    if(!LiveRC_Config["Contact"][user]) return "";
    var pages = LiveRC_Config["Contact"][user].pages;
    var display = ( LiveRC_Config["Contact"][user].display ? '' : 'style="display:none"');
    var ToggleLink = ' - '+pages.length 
                   + '<a class="FollowSublistToggleLink" href="javascript:;" '
                   + 'onclick="lrcShowHideAllContact(this,'+lrcEscapeStrHTML(user)+');" '
                   + 'title="'+lrcMakeText("FollowSublistToggleTitle")+'" '
                   + '><b>±</b></a>'
                   + '<ul class="FollowSublist" '+display+'>';
    var Lines = new Array();
    for(var a=0,l=pages.length;a<l;a++){
        var thisedit = pages[a];
        var title = thisedit.title;
        var oldid = thisedit.old_revid;
        var revid = thisedit.revid;
        var timestamp = thisedit.timestamp;
        var Links = new Array();
        Links.time = getTimeTag(timestamp);
        Links.diff = lrcGetDiffLink(thisedit);
        Links.page = '<a class="lrc_ArticleLink" href="'+lrcGetPageURL(title)+'" onclick="liveArticle('+lrcEscapeStr(title)+'); return false;">'+title+'</a>';
        Lines.push( '<li id="contactsub_'+LiveRC_Config["Contact"][user].ts+'"><span>'+Links.time+' – '+Links.diff+ ' : ' + Links.page+'</span></li>');
    }    
    return (ToggleLink += Lines.sort().reverse().join("") + '</ul>');
}

function lrcShowHideAllContact(Link, user){
   if(!Link) return false;
   var Span = Link.nextSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
      if(LiveRC_Config["Contact"][user]) LiveRC_Config["Contact"][user].display = true;
   }else{
      Span.style.display = "none";
      if(LiveRC_Config["Contact"][user]) LiveRC_Config["Contact"][user].display = false;
   }
}

function removeContact(user){
    LiveRC_WatchUser(user, false);
}

/* </source>

===== Révoqués =====

<source lang="javascript"> */

function updateFollowRevoc() {
  lrcDisplayDebug("Update list (Reverted Users)");
  var tempAr = new Array();
  for (var user in LiveRC_Config["Revoc"]) {
    if(!LiveRC_Config["Revoc"].hasOwnProperty(user)) continue;
    if(LiveRC_Config["Revoc"][user].pages.length == 0) continue;
    var timestamp = LiveRC_Config["Revoc"][user].ts;
    var uremove = '<a class="hidelineLink" href="javascript:;" '
                + 'title="'+lrcMakeText("DeleteUserButton_Title")+'" '
                + 'onClick="removeRevoc('+lrcEscapeStrHTML(user)+');">x</a>';
    var udiscut  = lrcGetUserTalkLink({user:user});
    var ucontrib = lrcGetUserContribsLink({user:user})
    var ublock   = lrcGetBlockLink({user:user});
    var ueditor  = lrcGetUserLink(user);
    var MoreLink = lrcGetAllRevoc(user);
    if(MoreLink === false) return;
    var ligne = '<li><span id="revoc-' + timestamp + '">'
                + '<small>'+uremove+' · '+getTimeTag(timestamp)+' : '+udiscut+' • '+ucontrib+(ublock ? ' • '+ublock :'')+' • </small>'
                + ueditor + MoreLink
              + '</span></li>';
    tempAr.push(ligne);
  }
  tempAr = tempAr.sort();
  var lvRevoc = document.getElementById('liveRevoc');
  if(!lvRevoc) return;
  lvRevoc.innerHTML = "";
  var List = '<ul class="FollowList">';
  var len = tempAr.length;
  for (var n=len-1; n>=0; n--){
    if(tempAr[n]) List += tempAr[n];
  }
  List += "</ul>";
  lvRevoc.innerHTML = List;
}

function lrcGetAllRevoc(user){
    if(!LiveRC_Config["Revoc"][user]) return "";
    var pages = LiveRC_Config["Revoc"][user].pages;
    var display = ( LiveRC_Config["Revoc"][user].display ? '' : 'style="display:none"');
    var ToggleLink = ' - '+pages.length
                   + '<a class="FollowSublistToggleLink" href="javascript:;" '
                   + 'onclick="lrcShowHideAllRevoc(this,'+lrcEscapeStrHTML(user)+');" '
                   + 'title="'+lrcMakeText("FollowSublistToggleTitle")+'" '
                   + '><b>±</b></a>'
                   + '<ul class="FollowSublist" '+display+'>';
    var Lines = new Array();
    for(var a=0,l=pages.length;a<l;a++){
        var thisedit = pages[a];
        var title = thisedit.title;
        var timestamp = thisedit.timestamp;

        var revid = thisedit.revid;
        var oldid = thisedit.old_revid;

        var Links = new Array();
        Links.time = getTimeTag(timestamp);
        Links.diff = lrcGetDiffLink(thisedit);
        Links.page = '<a class="lrc_ArticleLink" href="'+lrcGetPageURL(title)+'" onclick="liveArticle('+lrcEscapeStr(title)+'); return false;">'+title+'</a>';
        Lines.push('<li><span>'+Links.time+' – '+Links.diff+ ' : ' + Links.page+'</span></li>');
    }    
    return (ToggleLink + Lines.sort().reverse().join("") + '</ul>');
}

function lrcShowHideAllRevoc(Link, user){
   if(!Link) return false;
   var Span = Link.nextSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
      if(LiveRC_Config["Revoc"][user]) LiveRC_Config["Revoc"][user].display = true;
   }else{
      Span.style.display = "none";
      if(LiveRC_Config["Revoc"][user]) LiveRC_Config["Revoc"][user].display = false;
   }
}

function removeRevoc(name) {
   delete LiveRC_Config["Revoc"][name];
   updateFollowRevoc();
}

/* </source>

===== Pending Changes =====

<source lang="javascript"> */

function updateFollowPendingChanges(){
  if(!lrcMakeParam("GetPageInfos")) return;
  lrcDisplayDebug("Update list (Pending changes)");
  var tempAr = new Array();
  for(var title in LiveRC_Config["PendingChanges"]) {
    if(!LiveRC_Config["PendingChanges"].hasOwnProperty(title)) continue;
    var rc = LiveRC_Config["PendingChanges"][title];
    var uremove = '<a class="hidelineLink" href="javascript:;" '
                + 'title="'+lrcMakeText("HIDE_THIS")+'" '
                + 'onClick="removePendingChanges('+lrcEscapeStrHTML(title)+');">x</a>';
    var shist = lrcGetHistoryLink(rc);
    var sprotect = lrcGetProtectLink(rc);
    var sotherns = getNamespaceInfoFromPage(title);
    var sotherpn = getNamespaceInfoFromPage(title, "PageName");
    if(sotherns%2==0){
      var sotherText = lrcMakeText("TALK_SHORT");
      var sothernsnumber = (sotherns+1);
    }else{
      var sotherText = lrcMakeText("SUBJECT_SHORT");
      var sothernsnumber = (sotherns-1);
    }
    var sothername = (sothernsnumber == 0 ? sotherpn : lrcGetNamespaceName(sothernsnumber)+":"+sotherpn);
    var stalk = '<a class="pagetalkLink" '
              + 'href="'+lrcGetPageURL(sothername)+'" '
              + 'onClick="liveArticle('+lrcEscapeStr(sothername)+'); return false;"'
              + '>'+sotherText+'</a>';
    var sarti = '<a class="lrc_ArticleLink" '
              + 'href="'+lrcGetPageURL(title)+'" '
              + 'onClick="liveArticle('+lrcEscapeStrHTML(title)+'); return false;"'
              + '>'+title+'</a>';
    var timestamp = rc.timestamp;
    rc.old_revid = rc.stable_revid;
    var diffLink = lrcGetDiffLink(rc);
    var ligne = '<li><span id="pending-' + timestamp + '">'
                + '<small>'+ uremove+' · '+getTimeTag(timestamp)+ ' : '+diffLink+' • '+shist+(sprotect ? ' • '+sprotect : '')+' • </small>' 
                + stalk + ' · ' + sarti 
              + '</span></li>';
    tempAr.push(ligne);
  }
  tempAr = tempAr.sort();
  var lvPending = document.getElementById('livePending');
  if(!lvPending) return;
  lvPending.innerHTML = "";
  var List = '<ul class="FollowList">';
  var len = tempAr.length;
  for (var n=len-1; n>=0; n--){
    if(tempAr[n]) List += tempAr[n];
  }
  List += "</ul>";
  lvPending.innerHTML = List;
}

function removePendingChanges(title){
   delete LiveRC_Config["PendingChanges"][title];
   updateFollowPendingChanges();
}

/* </source>

=== Fonctions de prévisualisation ===

==== Outils de la fenêtre de prévisualisation ====

<source lang="javascript"> */

// Mise à jour de la hauteur et du déroulé de la fenêtre de prévisualisation

function updatePreviewWindowAttributes(){
  var LP = document.getElementById( 'livePreview' );
  if(LP) LP.scrollTop = 0;
  lrcInitTableHeight();
}

// Annule le redimensionnement de la fenêtre lors d'un cliqué-glissé sur certains éléments

function LiveRC_DisableOnmouseMoveOnSelects(TabContainer){
  if(!TabContainer) return;
  var NodeTags = new Array('select', 'input', 'a');
  for(var i=0,ilen=NodeTags.length;i<ilen;i++){  
    var Nodes = TabContainer.getElementsByTagName(NodeTags[i]);
    for(var a=0,l=Nodes.length;a<l;a++){
      var Node = Nodes[a];
      Node.onmousemove = function(){
        document.getElementsByTagName('body')[0].onmousemove = null;
        removeClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
      }
    }
  }
}

/* </source>

===== Fenêtre de l'historique de prévisualisation =====

<source lang="javascript"> */

// Création de l'historique de prévisualisation

function lrcCreateHistory(){
  var TargetDiv;
  if(lrcMakeParam("ShowPreviewOnTop")){
    TargetDiv = document.getElementById("FixedTopPanel");
  }else{
    TargetDiv = document.getElementById("FixedBottomPanel");
  }
  var HistoryDiv = document.getElementById("LiveRC_History");
  if(HistoryDiv || !TargetDiv) return;
  var DivContainer = document.createElement('div');
  DivContainer.id = "LiveRC_History";
  var DivAnchor = document.createElement('div');
  DivAnchor.id = "LiveRC_HistoryAnchor";
  DivAnchor.innerHTML = lrcMakeText("LiveRC_HistoryTitle");
  var DivContent = document.createElement('div');
  DivContent.id = "LiveRC_HistoryContent";
  DivContent.setAttribute("style", "height:"+lrcMakeParam("HistoryWindowHeight")+";overflow-y:auto;");
  var Ol = document.createElement('ol');
  Ol.id = "LiveRC_History_OL";
  Ol.setAttribute("style", "-moz-column-count:3;-webkit-column-count:3;column-count:3");
  DivContent.appendChild(Ol);
  DivContainer.appendChild(DivAnchor);
  DivContainer.appendChild(DivContent);
  TargetDiv.insertBefore(DivContainer, TargetDiv.firstChild);
  addClass(DivContent, "LiveRC_MenuContent");
  LiveRC_SetVerticalResizeZone(document.getElementById("LiveRC_HistoryAnchor"),
                       new Array(document.getElementById("LiveRC_HistoryContent")),
                       document.getElementById("LiveRC_History")
                      );
}

// Affichage de l'historique de prévisualisation

function lrcGetAllHistory(){
  var Ol = document.getElementById("LiveRC_History_OL");
  if(!Ol) return;
  while(Ol.firstChild){ Ol.removeChild(Ol.firstChild); }
  var HistoryArray = new Array();
  for(var a=0,l=LiveRC_Config["History"]["Type"].length;a<l;a++){
    var Type = LiveRC_Config["History"]["Type"][a];
    var Params = LiveRC_Config["History"]["Params"][a];
    var URL = LiveRC_Config["History"]["URL"][a];
    var Text = LiveRC_Config["History"]["Text"][a];
    var Onclick = "lrcGetHistory("+a+"); lrcCloseHistory(); return false;";
    var Link = '<li>'+Type+'&nbsp;:&nbsp;<a href="'+URL+'" onClick="'+Onclick+'">'+Text+'</a></li>';
    if(HistoryArray.indexOf(Link)==-1) HistoryArray.push(Link);
  }
  Ol.innerHTML = HistoryArray.join("");
  lrcCloseAll();
  addClass(document.body, "LiveRCHistoryDisplayed");
  lrcInitTableHeight();
}

// Fermeture de l'historique de prévisualisation

function lrcCloseHistory(){
  removeClass(document.body, "LiveRCHistoryDisplayed");
  lrcInitTableHeight();
}

// Ajout d'une entrée à l'historique de prévisualisation

function lrcAddToHistory(Type, Params, URL, Text){
  lrcDisplayDebug("Launch preview ("+Type+")");
  lrcCloseHistory();
  LiveRC_Config["History"]["Type"].push(Type);
  LiveRC_Config["History"]["Params"].push(Params);
  LiveRC_Config["History"]["URL"].push(URL);
  LiveRC_Config["History"]["Text"].push(Text);
}

// Rechargement d'une entrée de l'historique de prévisualisation

function lrcGetHistory(index){
  LiveRC_Config["History"]["IsOld"] = true;
  var Type = LiveRC_Config["History"]["Type"][index];
  var Params = LiveRC_Config["History"]["Params"][index];
  var FuntionToEval = Type + "(" + Params.join(", ") + ");";
  //LiveRC_alert(FuntionToEval);
  eval(FuntionToEval);
  LiveRC_Config["History"]["Type"].pop();
  LiveRC_Config["History"]["Params"].pop();
  LiveRC_Config["History"]["URL"].pop();
  LiveRC_Config["History"]["Text"].pop();
  LiveRC_Config["History"]["Index"] = index;
}

// Mise à jour des boutons de l'historique de prévisualisation

function buildHistoryPanel(){
  if(!LiveRC_Config["History"]["IsOld"]) LiveRC_Config["History"]["Index"] = (LiveRC_Config["History"]["Type"].length-1);
  var PreviousDisabled = ((LiveRC_Config["History"]["Index"]>0) ? '' : ' disabled="disabled" ' );
  var NextDisabled = ((LiveRC_Config["History"]["Index"]<(LiveRC_Config["History"]["Type"].length-1)) ? '' : ' disabled="disabled" ' );
  var PreviousLink = '<input style="padding:0" type="button" ' + PreviousDisabled
                   + 'onclick="lrcGetHistory('+(LiveRC_Config["History"]["Index"]-1)+');" onselect="lrcGetHistory(-1);" '
                   + 'value="'+lrcMakeText("DIFFPREV_SHORT")+'" title="'+lrcMakeText("DIFFPREV_TIP")+'" />';
  var ShowHistoryLink = '<input style="padding:0" type="button" '
                      + 'onclick="lrcGetAllHistory();" onselect="lrcGetAllHistory();" '
                      +'value="'+lrcMakeText("DIFFHIST_SHORT")+'" title="'+lrcMakeText("DIFFHIST_TIP")+'" />';
  var NextLink = '<input style="padding:0" type="button" '+ NextDisabled
               + ' onclick="lrcGetHistory('+(LiveRC_Config["History"]["Index"]+1)+');" onselect="lrcGetHistory(1);" '
               +'value="'+lrcMakeText("DIFFNEXT_SHORT")+'" title="'+lrcMakeText("DIFFNEXT_TIP")+'" />';
  LiveRC_Config["History"]["IsOld"] = false;
  var historyPanel = document.getElementById("historyPanel");
  if(historyPanel) historyPanel.innerHTML = PreviousLink + ShowHistoryLink + NextLink ;
}

/* </source>

===== Fenêtre de recherche externe =====

<source lang="javascript"> */

// Ouverture

function liveGoogleSearch(PageName){
  var OldGoogle = document.getElementById("lrcGoogleDiv");
  if(OldGoogle) closeGoogleSearch();
  lrcDisplayDebug("Open search window"+(PageName ? " - "+PageName : ""));
  var PreviewWindow = document.getElementById("livePreviewTitle");
  if(!PreviewWindow) return;
  var DivGoogle = document.createElement('div');
  DivGoogle.id = "lrcGoogleDiv";
  DivGoogle.setAttribute("style", "width:99.4%;");
  PreviewWindow.parentNode.insertBefore(DivGoogle, PreviewWindow);
  var Titlebar = document.createElement('div');
  addClass(Titlebar, "LiveRC_MenuAnchor");
  var SearchForm = document.createElement('form');
  SearchForm.onsubmit = function(){
    liveGoogleSearch(document.getElementById('lrcSearchInput').value);
    return false;
  }
  SearchHTML = ''
  SearchHTML += '<b>' + lrcMakeText("LiveRC_SearchTitle") + ' : </b>'
                     + '&nbsp;&nbsp;&nbsp;&nbsp;';
  SearchHTML += '<input id="lrcSearchInput" type="text" '
                   + 'title="'+lrcMakeText("SEARCH_INPUT_TIP")+'" '
                   + 'value="'+( PageName ? PageName : '' )+'" />';
  SearchHTML += '<input type="button" '
                   + 'title="'+lrcMakeText("SEARCH_TIP")+'" '
                   + 'value="'+lrcMakeText("SEARCH_SHORT")+'" '
                   + 'onClick="liveGoogleSearch(document.getElementById(\'lrcSearchInput\').value);"/>'
                   + '&nbsp;&nbsp;';
  SearchHTML += '<input type="button" '
                   + 'title="'+lrcMakeText("SEARCH_CLOSE_TIP")+'" '
                   + 'value="'+lrcMakeText("SEARCH_CLOSE_SHORT")+'" '
                   + 'onClick="closeGoogleSearch();"/>';
  SearchForm.innerHTML = SearchHTML;
  Titlebar.appendChild(SearchForm);
  DivGoogle.appendChild(Titlebar);
  var DivGoogleContent = document.createElement('div');
  addClass(DivGoogleContent, "LiveRC_MenuContent");
  var URLTemplate = lrcMakeParam("SearchURL");
  var Iframe = document.createElement('iframe');
  Iframe.src = URLTemplate.split("$1").join('%22'+PageName.replace(/ /g, "+")+'%22');
  Iframe.width = "99.8%";
  Iframe.height = lrcMakeParam("SearchWindowHeight");
  Iframe.setAttribute("style", "margin-left:3px");
  DivGoogleContent.appendChild(Iframe);
  DivGoogle.appendChild(DivGoogleContent);
  LiveRC_SetVerticalResizeZone(Titlebar, new Array(DivGoogle, Iframe), DivGoogle);
  LiveRC_DisableOnmouseMoveOnSelects(Titlebar);
}

// Fermeture

function closeGoogleSearch(){
  var GoogleDiv = document.getElementById("lrcGoogleDiv");
  if(GoogleDiv) GoogleDiv.parentNode.removeChild(GoogleDiv);
  lrcInitTableHeight();
}

/* </source>

===== Fonctions standards =====

<source lang="javascript"> */

// Création barre de commandes standard

function buildBlanckPreviewBar(Text, History, TextHD, TextBG, TextBD){
    var Template = PreviewBarTemplate;
    Template = Template.split('$1').join(Text);
    Template = Template.split('$2').join((TextHD ? TextHD : "&nbsp;"));
    Template = Template.split('$3').join((TextBG ? TextBG : "&nbsp;"));
    Template = Template.split('$4').join((TextBD ? TextBD : "&nbsp;"));
    var TabContainer = document.getElementById("livePreviewTitle");
    if(TabContainer) TabContainer.innerHTML = Template;
    if(History) buildHistoryPanel();
    LiveRC_DisableOnmouseMoveOnSelects(TabContainer);
}

// Création barre de commandes avec liens

function buildPreviewBar(Args){
    var Mode = Args["Mode"];
    var URL  = Args["Url"];
    var Page = Args["Page"];
    var User1 = Args["User1"];
    var User2 = Args["User2"];
    var oldid = Args["Oldid"];
    var id = Args["Id"];
    var Previous = Args["Previous"];
    var Next = Args["Next"];

// $1 : case haut-gauche
    var TabsHautGauche = '<b><a href="'+URL+'" '
                       + 'onClick="liveArticle('+lrcEscapeStrHTML(Page)+'); return false;"'
                       + '>'+Page.replace(/_/g, " ")+'</a></b>';
    if(Mode=="Article" && Args.oldid) TabsHautGauche += '&nbsp;<small><sup>(oldid:'+Args.oldid+')</sup></small>';

if(Mode=="Article"||Mode=="Diff"||Mode=="Hist"||Mode=="Delete"||Mode=="Protect"||Mode=="Edit"||Mode=="Revisiondelete"||Mode=="Stabilization"){
        TabsHautGauche += '&nbsp;&nbsp;•&nbsp;&nbsp;'
                        + '<small><a href="'+lrcGetUglyPageURL('Special:Whatlinkshere/'+Page) + '" '
                        + 'onClick="liveWhatlinkshere('+lrcEscapeStrHTML(Page)+'); return false;" '
                        + 'title="'+lrcMakeText("WHATLINKSHERE_TIP")+' « '+Page+' »" '
                        + '>['+lrcMakeText("WHATLINKSHERE_SHORT")+']</a></small>';
        TabsHautGauche += '&nbsp;&nbsp;•&nbsp;&nbsp;'
                        + '<small><a href="'+lrcMakeParam("SearchURL").split("$1").join('%22'+Page.replace(/ /g, "+")+'%22')+'" '
                        + 'onClick="liveGoogleSearch('+lrcEscapeStrHTML(Page)+'); return false;" '
                        + 'title="'+lrcMakeText("SEARCH_TIP")+'">['+lrcMakeText("SEARCH_SHORT")+']</a></small>';
    }


   if(Mode=="Revisiondelete" && Args["RevisiondeleteOK"]){
      TabsHautGauche += ' <small>'+lrcMakeText("REVISIONDELETEOK")+'</small>';
   }

// $2 : case haut-droite
    var TabsHautDroite = "";     
    TabsHautDroite += lrcReplacePatrolLink();
    if(Mode=="Diff" && lrcUserHasRight("deleterevision") && typeof(LiveRC_Config["MediawikiExtensions"]["Oversight"]) != "undefined"){
        TabsHautDroite += (TabsHautDroite === '' ? '' : '&nbsp;&nbsp;•&nbsp;&nbsp;');
        TabsHautDroite += buildRevisiondeleteBar(Page);
    }
    if(Mode=="Diff" && Previous){
        TabsHautDroite += (TabsHautDroite === '' ? '' : '&nbsp;&nbsp;•&nbsp;&nbsp;');
        TabsHautDroite += '<small><a id="previousDiffLink" href="'+Previous["url"]+'" '
                        + 'onClick="liveDiff('+lrcEscapeStrHTML(Page)+',\'prev\',\''+Previous["oldid"]+'\'); return false;" '
                        + 'title="'+Previous["title"]+'">'+Previous["text"]+'</a></small>';
    }
    if(Mode=="Diff" && Next){
        if(Previous) TabsHautDroite += '<small> | </small>';
        TabsHautDroite += '<small><a id="nextDiffLink" href="'+Next["url"]+'" '
                        + 'onClick="liveDiff('+lrcEscapeStrHTML(Page)+',\'next\',\''+Next["oldid"]+'\'); return false;" '
                        + 'title="'+Next["title"]+'">'+Next["text"]+'</a></small>';
    }

// $3 : case bas-gauche
    var TabsBasGauche = buildPreviewNormalTabs(Args);

// $4 : case bas-droite
    var TabsBasDroite = buildPreviewSpecialTabs(Args);

// Affichage
    var Template = PreviewBarTemplate;
    Template = Template.split('$1').join(TabsHautGauche);
    Template = Template.split('$2').join(TabsHautDroite);
    Template = Template.split('$3').join(TabsBasGauche);
    Template = Template.split('$4').join(TabsBasDroite);
    var TabContainer = document.getElementById("livePreviewTitle");
    if(TabContainer) TabContainer.innerHTML = Template;
    buildHistoryPanel();
    LiveRC_RevertMessagesExtension_Init();
    LiveRC_DisableOnmouseMoveOnSelects(TabContainer);
}

// Liens en bas à gauche

function buildPreviewNormalTabs(Args){
    var Mode = Args["Mode"];
    var URL  = Args["Url"];
    var Page = Args["Page"];
    var User1 = Args["User1"];
    var User2 = Args["User2"];
    var oldid = Args["Oldid"];
    var Next = Args["Next"];

    var ParamOldid = (Next && oldid ? "&oldid="+oldid : "");

    var PageNamespaceNumber = getNamespaceInfoFromPage(Page);
    var PageName = getNamespaceInfoFromPage(Page, "PageName");
    var escTitle = lrcEscapeStrHTML(Page);
    var escUser = false;
    var User = User2;
    if(!User) User = User1;
    if(!User){
        if(PageNamespaceNumber==2 || PageNamespaceNumber==3){
            User = PageName.replace(/\/.*/g, "");
        }
    }
    if(User) escUser = lrcEscapeStrHTML(User);
    var Tabs = new Array();
// Other Page /////////////////////////////////
    if((new Array("Article","Diff","Hist","Move","Delete","Protect","Edit","Revisiondelete","Whatlinkshere","Stabilization")).indexOf(Mode)!=-1){

        if(PageNamespaceNumber%2==0){
            var OtherPageText = lrcMakeText("TALK_TIP");
            var OtherPageNamespaceNumber = (PageNamespaceNumber+1);
        }else{
            var OtherPageText = lrcMakeText("SUBJECT_TIP");
            var OtherPageNamespaceNumber = (PageNamespaceNumber-1);
        }
        var OtherPageName = (OtherPageNamespaceNumber == 0 ? PageName : lrcGetNamespaceName(OtherPageNamespaceNumber)+":"+PageName);
        Tabs["OtherPage"] = '<a href="'+lrcGetPageURL(OtherPageName)+'" '
                          + 'onClick="liveArticle('+lrcEscapeStrHTML(OtherPageName)+'); return false;" '
                          + 'title="'+OtherPageName+'" '
                          + '>'+OtherPageText+'</a>';
    }else if((new Array("Contrib","DeletedContrib","Block")).indexOf(Mode)!=-1){
        var UserPageName = lrcGetNamespaceName(2)+":"+User;
        Tabs["UserPage"] = '<a href="'+lrcGetPageURL(UserPageName)+'" '
                          + 'onClick="liveArticle('+lrcEscapeStrHTML(UserPageName)+'); return false;" '
                          + 'title="'+UserPageName+'" '
                          + '>'+lrcMakeText("SUBJECT_TIP")+'</a>';
        var TalkPageName = lrcGetNamespaceName(3)+":"+User;
        Tabs["TalkPage"] = '<a href="'+lrcGetPageURL(TalkPageName)+'" '
                          + 'onClick="liveArticle('+lrcEscapeStrHTML(TalkPageName)+'); return false;" '
                          + 'title="'+TalkPageName+'" '
                          + '>'+lrcMakeText("TALK_TIP")+'</a>';
    }
// Edit /////////////////////////////////
    if((new Array("Article","Diff","Hist","Move","Delete","Protect","Revisiondelete","Whatlinkshere","Stabilization")).indexOf(Mode)!=-1){
        Tabs["Edit"] = '<a href="'+lrcGetUglyPageURL(Page,'&action=edit'+ParamOldid) + '" '
                     + 'onClick="liveEdit('+escTitle+', \''+ParamOldid+'\'); return false;" '
                     + 'title="'+lrcMakeText("EDIT_TIP")+' « '+Page+' »" '
                     + '>'+lrcMakeText("EDIT_TIP")+'</a>';

    }
// New Section /////////////////////////////////
    if(PageNamespaceNumber%2!=0){
        if((new Array("Article","Diff","Hist","Move","Delete","Protect","Edit","Revisiondelete","Whatlinkshere","Stabilization")).indexOf(Mode)!=-1){
            Tabs["NewSection"] = '<a href="'+lrcGetUglyPageURL(Page,'&action=edit&section=new') + '" '
                               + 'onClick="liveEdit('+escTitle+',\'&section=new\'); return false;" '
                               + 'title="'+lrcMakeText("NEWSECTION_TIP")+'" '
                               + '>'+lrcMakeText("NEWSECTION_TIP")+'</a>';
        }
    }
// Hist /////////////////////////////////
    if((new Array("Article","Diff","Edit","Move","Delete","Protect","Revisiondelete","Whatlinkshere","Stabilization")).indexOf(Mode)!=-1){
        Tabs["Hist"] = '<a href="'+lrcGetUglyPageURL(Page,'&action=history') + '" '
                     + 'onClick="liveHist('+escTitle+'); return false;" '
                     + 'title="'+lrcMakeText("HIST_TIP")+'" '
                     + '>'+lrcMakeText("HIST_TIP")+'</a>';

    }
// Move /////////////////////////////////
    if(lrcUserHasRight("move") && PageNamespaceNumber!=14){
        if((new Array("Article","Diff","Edit"||Mode=="Hist","Delete","Protect","Revisiondelete","Whatlinkshere","Stabilization")).indexOf(Mode)!=-1){
            Tabs["Move"] = '<a href="'+lrcGetPageURL('Special:Movepage/'+Page) + '" '
                         + 'onClick="liveMove('+escTitle+'); return false;" '
                         + 'title="'+lrcMakeText("MOVE_TIP")+' « '+Page+' »" '
                         + '>'+lrcMakeText("MOVE_TIP")+'</a>';
        }
    }
// Contrib /////////////////////////////////
    if(escUser){
        if((new Array("Block","DeletedContrib")).indexOf(Mode)!=-1){
            Tabs["Contrib"] = '<a href="'+lrcGetPageURL('Special:Contributions/' + User)+'" '
                            + 'onClick="liveContrib('+escUser+'); return false;" '
                            + 'title="'+lrcMakeText("CONTRIB_TIP")+'" '
                            + '>'+lrcMakeText("CONTRIB_TIP")+'</a>';
        }
    }
// DeletedContrib /////////////////////////////////
    if(lrcUserHasRight("deletedhistory") && escUser){
        if((new Array("Block","Contrib")).indexOf(Mode)!=-1){
            Tabs["DeletedContrib"] = '<a href="'+lrcGetPageURL('Special:DeletedContributions/'+User)+'" '
                                   + 'onClick="liveDeletedContrib('+escUser+'); return false;" '
                                   + 'title="'+lrcMakeText("DELETEDCONTRIB_TIP")+'" '
                                   + '>'+lrcMakeText("DELETEDCONTRIB_TIP")+'</a>';
        }
    }
// Delete /////////////////////////////////
    if(lrcUserHasRight("delete")){
        if((new Array("Article","Diff","Hist","Move","Protect","Edit","Revisiondelete","Whatlinkshere","Stabilization")).indexOf(Mode)!=-1){
            Tabs["Delete"] = '<a href="'+lrcGetUglyPageURL(Page,'&action=delete') + '" '
                           + 'onClick="liveDelete('+escTitle+'); return false;" '
                           + 'title="'+lrcMakeText("DEL_TIP")+' « '+Page+' »" '
                           + '>'+lrcMakeText("DEL_TIP")+'</a>';
        }
    }
// Protect /////////////////////////////////
    if(lrcUserHasRight("protect") && getNamespaceInfoFromPage(Page) != 8){
        if((new Array("Article","Diff","Hist","Move","Delete","Edit","Revisiondelete","Whatlinkshere","Stabilization")).indexOf(Mode)!=-1){
            Tabs["Protect"] = '<a href="'+lrcGetUglyPageURL(Page,'&action=protect') + '" '
                            + 'onClick="liveProtect('+escTitle+'); return false;" '
                            + 'title="'+lrcMakeText("PROTECT_TIP")+' « '+Page+' »" '
                            + '>' +lrcMakeText("PROTECT_TIP")+'</a>';
        }
    }
// Stable /////////////////////////////////
    if(lrcUserHasRight("stablesettings") && !LiveRC_Config["FlagRevProtection"] && LiveRC_Config["FlagRevNamespaces"].indexOf(getNamespaceInfoFromPage(Page)) != -1){
        if((new Array("Article","Diff","Hist","Move","Delete","Edit","Revisiondelete","Whatlinkshere","Stabilization")).indexOf(Mode)!=-1){
            Tabs["Stable"] = '<a href="'+lrcGetUglyPageURL("Special:Stabilisation","&page="+encodeURIComponent(Page)) + '" '
                            + 'onClick="liveStabilization('+escTitle+'); return false;" '
                            + 'title="'+lrcMakeText("STABLE_TIP")+' « '+Page+' »" '
                            + '>' +lrcMakeText("STABLE_TIP")+'</a>';
        }
    }
// Block /////////////////////////////////
    if(lrcUserHasRight("block") && escUser){
        if((new Array("Contrib","DeletedContrib")).indexOf(Mode)!=-1){
            Tabs["Block"] = '<a href="'+lrcGetPageURL('Special:Blockip/'+User)+'" '
                          + 'onClick="liveBlock('+escUser+'); return false;" '
                          + 'title="'+lrcMakeText("BLOCK_TIP")+' « '+User+' »" '
                          + '>'+lrcMakeText("BLOCK_TIP")+'</a>';
        }else if(Mode=="Article" && (PageNamespaceNumber==2 || PageNamespaceNumber==3)){
            var ThisUser = PageName.replace(/\/.*/g, "");
            Tabs["Block"] = '<a href="'+lrcGetPageURL('Special:Blockip/'+ThisUser)+'" '
                          + 'onClick="liveBlock('+lrcEscapeStrHTML(ThisUser)+'); return false;" '
                          + 'title="'+lrcMakeText("BLOCK_TIP")+' « '+ThisUser+' »" '
                          + '>'+lrcMakeText("BLOCK_TIP")+'</a>';
        }
    }
// (Un)Watch /////////////////////////////////
    if(PageNamespaceNumber>-1){
      if((new Array("Article","Diff","Hist","Edit","Move","Delete","Protect","Revisiondelete","Whatlinkshere","Stabilization")).indexOf(Mode)!=-1){
        Tabs["Watch"] = lrcCreateWatchPageLink(Page, LiveRC_Config["Suivi"][Page], 1);
      }
    }

    var AllTabs = new Array();
    for(var Tab in Tabs){
        if(typeof(Tabs[Tab])=="string" && Tabs[Tab] !="") AllTabs.push(Tabs[Tab]);
    }
    if(AllTabs.length==0) return "&nbsp;";
    AllTabs = '<ul ><li>'+AllTabs.join("</li><li>") + '</li></ul>';
    return AllTabs;
}

// Liens de masquage

function buildRevisiondeleteBar(Page){
    var PreviewDiv = document.getElementById('livePreview');
    if(!PreviewDiv) return "";
    var HideSpans = getElementsByClass("mw-revdelundel-link", PreviewDiv, "span");
    var HideLinks = new Array();
    for(var a=0,l=HideSpans.length;a<l;a++){
        var Link = HideSpans[a].getElementsByTagName('a')[0];
        var Id = lrcGetArgFromURL(Link.href, "ids");
        var HideLink = '<a href="'+wgServer + wgScript + '?title=Special:Revisiondelete&type=revision&target='+encodeURIComponent(Page)+'&ids='+Id+'" '
                     + 'onClick="liveRevisiondelete('+lrcEscapeStrHTML(Page)+','+Id+'); return false;" '
                     + 'title="'+lrcMakeText("REVISIONDELETE_TIP")+' '+Id+'">'+Id+'</a>';
        HideLinks.push(HideLink);
    }
    if(HideLinks.length==0) return "";
    var RevisiondeleteTabs = '<small>'
                           + lrcMakeText("REVISIONDELETE_SHORT")
                           + '&nbsp;:&nbsp;'
                           + HideLinks.join('&nbsp;|&nbsp;')
                           + '</small>';
    return RevisiondeleteTabs;
}

// Commandes en bas à droite

function buildPreviewSpecialTabs(Args){
    if(!lrcUserHasRight(LiveRC_Config["LimitationsRight"]) && LiveRC_Config["LimitationsWhitelist"].indexOf(wgUserName)==-1) return "&nbsp;";
    var URL = Args["Url"];
    var Mode = Args["Mode"];
    var Page = Args["Page"];
    var User1 = Args["User1"];
    var User2 = Args["User2"];
    var oldid = Args["Oldid"];
    var id = Args["Id"];
    var patrolledDiff = Args["patrolledDiff"];
    var Next = Args["Next"];
    var SpecialTabs = new Array();
    if(Mode=="Diff") {
        if(!Next){
            var UndoBar = buildLiveUndo(Page, oldid, User1, User2);
            if(UndoBar) SpecialTabs.push(UndoBar);
        }
        var ThankBar = buildLiveThank(User2, Page, id);
        if(ThankBar) SpecialTabs.push(ThankBar);
        var AvertoBar = buildLiveAverto(Page, User2, true);
        if(AvertoBar) SpecialTabs.push(AvertoBar);
        var ReportBar = buildReport(Page, User2);
        if(ReportBar) SpecialTabs.push(ReportBar);
    }else if(Mode=="Article"){
        var TagBar = buildLiveTag(Page);
        if(TagBar) SpecialTabs.push(TagBar);
        var BlankBar = buildLiveBlank(Page);
        if(BlankBar) SpecialTabs.push(BlankBar);
        var User = Args["User1"];
        var HasPageParam = true;
        var PageNamespaceNumber = getNamespaceInfoFromPage(Page);
        var PageName = getNamespaceInfoFromPage(Page, "PageName");
        if(PageNamespaceNumber==2||PageNamespaceNumber==3){
            User = PageName.replace(/\/.*/g,"");
            HasPageParam = false;
        }
        if(User){ 
          var AvertoBar = buildLiveAverto(Page, User, HasPageParam);
          if(AvertoBar) SpecialTabs.push(AvertoBar);
          var ReportBar = buildReport(Page, User);
          if(ReportBar) SpecialTabs.push(ReportBar);
        }
    }else if(Mode=="Contrib"||Mode=="DeletedContrib"){
          var AvertoBar = buildLiveAverto(Page, User1, false);
          if(AvertoBar) SpecialTabs.push(AvertoBar);
          var ReportBar = buildReport(Page, User1);
          if(ReportBar) SpecialTabs.push(ReportBar);
    }
    SpecialTabs = SpecialTabs.join(' • ');
    if(SpecialTabs==="") SpecialTabs = "&nbsp;";
    return SpecialTabs;
}

// Récupération du contenu de la page prévisualisée

function getPageContent(Req, ID){
  var OldTemp = document.getElementById("TempDiv");
  if(OldTemp) OldTemp.parentNode.removeChild(OldTemp);
  var Temp = document.createElement('div');
  Temp.id = "TempDiv";
  Temp.style.display = "none";
  document.body.appendChild(Temp);
  Temp.innerHTML = Req.responseText;
  var bC;
  if(ID) bC  = getElementWithId(ID, '*', Temp);
  if(bC == null) bC = getElementWithId('bodyContent', 'div', Temp);
  if(bC == null) bC = getElementWithId('article', 'div', Temp);
  if(bC == null) bC = getElementWithId('mw_contentholder', 'div', Temp);
  return bC;
}

// Recherche de form à partir d'un bouton

function getFormFromThisInput(Input){
     //if(!Input) return null;
     var Element = Input.parentNode;
     while(Element){
          if(Element.tagName && Element.tagName.toLowerCase() == 'form') return Element;
          Element = Element.parentNode;
     }
     return null
}

// Récupération de paramètres depuis une form

function getFormParams(Form, searchedname){
     var Params = new Array();
     var Tags = new Array("textarea", "select", "input");
     for(var a=0,l=Tags.length;a<l;a++){
          var Elements = Form.getElementsByTagName(Tags[a]);
          for(var b=0,m=Elements.length;b<m;b++){
               var Element = Elements[b];
               var ElName = Element.name;
               if(!ElName) continue;
               if(searchedname && ElName == searchedname) return Element;
               var ElValue = Element.value;
               var ElType = Element.type;
               if(Tags[a].toLowerCase()=='input' && (ElType == "checkbox" || ElType == "radio") && Element.checked){
                    Params[ElName] = ElValue;
               }else if(Tags[a].toLowerCase()=='input' && (ElType == "text" || ElType == "hidden") ){
                    Params[ElName] = ElValue;
               }else if(Tags[a].toLowerCase()!='input'){
                    Params[ElName] = ElValue;
               }
          }
     }
     if(searchedname) return null;
     return Params;
}

/* </source>

===== Fonctions automatiques =====

====== Blanchiment ======

<source lang="javascript"> */

// Création de la commande de blanchiment

function buildLiveBlank(Page){
    if(!Page) return "";
    var List = lstBlank_Custom;
    if(!List || List.length==0 ) List = Custom_lstBlank;
    if(!List || List.length==0 ) List = lstBlank;
    var optBlank = "";
    for (j=0, optl=List.length; j<optl; j++) {
        optBlank += '<option value="' + List[j].resume + '" title="' + List[j].resume + '">' + List[j].tooltip + '</option>';
    }
    var BlankBar = '<form id="LiveBlankForm">'
                 + '<input id="LiveBlankLink" type="button" title="'+lrcMakeText("EMPTY")+' « '+Page+' »" '
                 + 'onclick="getLiveBlank('+lrcEscapeStr(Page)+'); return false;" '
                 + 'onselect="getLiveBlank('+lrcEscapeStr(Page)+'); return false;" '
                 + 'value="'+lrcMakeText("EMPTY")+'" />'
                 + '<select id="LiveBlankReason">' + optBlank + '</select>'
                 + '</form>';
    return BlankBar;
}

// Récupération des informations et requête de page

function getLiveBlank(page){
  lrcDisplayDebug("Automatic function (Blank)");
    var BlankSelect = document.getElementById("LiveBlankReason");
    var BlankButton = document.getElementById("LiveBlankLink");
    if(!BlankSelect || !BlankButton) return;
    BlankSelect.disabled = "disabled";
    BlankButton.disabled = "disabled";
    var message = BlankSelect.value;
    wpajax.http({ url: wgServer + wgScriptPath + '/api.php?format=xml&action=query&prop=info&intoken=edit&inprop=protection&titles='+encodeURIComponent(page),
                  onSuccess: postBlankPage,
                  page: page,
                  message: message
                });
    return false;
}

// Traitement de la requête de blanchiment

function postBlankPage(xmlreq, data){
  var page=data.page;
  var message=data.message;
  var EditParam = new Array();
  var ObjetXML = xmlreq.responseXML;
  var Isprotected = false;
  var PR = ObjetXML.getElementsByTagName("pr");
  for(var a=0,l=PR.length;a<l;a++){
    var Type = PR[a].getAttribute("type");
    var Level = PR[a].getAttribute("level");
    if(Type=="edit" && wgUserGroups.indexOf(Level)==-1) Isprotected = true;
  }
  if(Isprotected){
    LiveRC_alert("<b>"+lrcMakeText("PROTECTEDPAGE").split("$1").join(page)+"</b>");
    return;
  }
  var Page = ObjetXML.getElementsByTagName("page")[0];
  EditParam["token"] = Page.getAttribute("edittoken");
  EditParam["text"] = "";
  EditParam["summary"] = lrcMakeText("RESUMESTART")+lrcMakeText("EMPTY_RESUME")+' ; ' + message;
  EditParam["title"] = page;
  EditParam["watchlist"] = "preferences";
  if(lrcMakeParam("BypassWatchdefault")) EditParam["watchlist"] = "nochange";
  EditParam["nocreate"] = "1";
  EditParam["notminor"] = "1";
  var Params = new Array();
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  Params = Params.join("&");
  var headers = new Array();
  headers['Content-Type'] = 'application/x-www-form-urlencoded';
  wpajax.http({ url: wgServer + wgScriptPath + '/api.php?action=edit',
                method: "POST", headers: headers,
                data: Params,
                onSuccess: postBlankPageDone,
                params:EditParam
  });
}

function postBlankPageDone(Req, data){
  var params = data.params;
  var text = "<b>"+params["title"]+ " : " + lrcMakeText("EMPTY_DONE")+"</b>";
  LiveRC_alert(text);
}

/* </source>

====== Bandeaux ======

<source lang="javascript"> */

// Création de la commande d'ajout de bandeau

function buildLiveTag(Page){
    if(!Page) return "";
    var optTag = "";
    var ListBando = lstBando_Custom;
    if(!ListBando || ListBando.length ==0) ListBando = Custom_lstBando;
    if(!ListBando || ListBando.length ==0) ListBando = lstBando;
    for (var j=0,optl=ListBando.length;j<optl;j++) {
        optTag += '<option value="' + ListBando[j].template + '" '
               + 'title="{{' + ListBando[j].template + '}}" '
               + '>' + ListBando[j].string + '</option>';
    }
    var TagBar = '<form id="LiveTagForm">'
               + '<input id="LiveTagLink" type="button" title="'+lrcMakeText("TAG")+'" '
               + 'onclick="getLiveTag('+lrcEscapeStr(Page)+'); return false;" '
               + 'onselect="getLiveTag('+lrcEscapeStr(Page)+'); return false;" '
               + 'value="'+lrcMakeText("TAG")+'" />'
               + '<select id="LiveTagReason">' + optTag + '</select>'
               + '</form>';
    return TagBar;
}

// Récupération des information et requête de page

function getLiveTag(page){
  lrcDisplayDebug("Automatic function (Tag)");
    var TagSelect = document.getElementById("LiveTagReason");
    var TagButton = document.getElementById("LiveTagLink");
    if(!TagSelect || !TagButton) return;
    var message = TagSelect.value;
    lrcDisableLink("LiveTagReason");
    lrcDisableLink("LiveTagLink");
    wpajax.http({ url: wgServer + wgScriptPath + '/api.php?format=xml'
                     + '&action=query&prop=info&intoken=edit'
                     + '&inprop=protection'
                     + '&titles=' + encodeURIComponent(page),
                onSuccess: postTagPage,
                page: page,
                message: message});
  return false;
}

// Traitement ajout de bandeau

function postTagPage(xmlreq, data){
  var page = data.page;
  var message = data.message;

  var EditParam = new Array();
  var ObjetXML = xmlreq.responseXML;
  var Isprotected = false;
  var PR = ObjetXML.getElementsByTagName("pr");
  for(var a=0,l=PR.length;a<l;a++){
    var Type = PR[a].getAttribute("type");
    var Level = PR[a].getAttribute("level");
    if(Type=="edit" && wgUserGroups.indexOf(Level)==-1) Isprotected = true;
  }
  if(Isprotected){
    LiveRC_alert("<b>"+lrcMakeText("PROTECTEDPAGE").split("$1").join(page)+"</b>");
    return;
  }
  var ThisDate = "";
  var ListBando = lstBando_Custom;
  if(!ListBando || ListBando.length ==0) ListBando = Custom_lstBando;
  if(!ListBando || ListBando.length ==0) ListBando = lstBando;
  for(var Tag in ListBando){
    if(ListBando[Tag].template == message && ListBando[Tag].withDate){
      var Months = new Array("january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december");
      var Now = new Date();
      var Year = Now.getYear();
      if(Year < 2000) Year = Year + 1900;
      var month = lrcGetMediawikiMessage(Months[(Now.getMonth())]).toLowerCase();
      var Month = month.substring(0,1).toUpperCase() + month.substring(1, month.length);
      var day = Now.getDate();
      var DateParam = ListBando[Tag].withDate;
      DateParam = DateParam.split("$day").join(day);
      DateParam = DateParam.split("$month").join(month);
      DateParam = DateParam.split("$Month").join(Month);
      DateParam = DateParam.split("$year").join(Year);
      ThisDate = "|date="+DateParam;
    }
  }
  var Page = ObjetXML.getElementsByTagName("page")[0];
  EditParam["token"] = Page.getAttribute("edittoken");
  EditParam["prependtext"] = "{{"+message+ThisDate+"}}\n";
  EditParam["summary"] = lrcMakeText("RESUMESTART") + lrcMakeText("USERMSG_RESUME") + ' ' + message;
  EditParam["title"] = page;
  EditParam["watchlist"] = "preferences";
  EditParam["notminor"] = "1";
  EditParam["nocreate"] = "1";
  if(lrcMakeParam("BypassWatchdefault")) EditParam["watchlist"] = "nochange";

  var Params = new Array();
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  Params = Params.join("&");
  var headers = new Array();
  headers['Content-Type'] = 'application/x-www-form-urlencoded';
  wpajax.http({ url: wgServer + wgScriptPath + '/api.php?action=edit',
                method: "POST", headers: headers,
                data: Params,
                onSuccess: postTagPageDone,
                params:EditParam
  });
}

function postTagPageDone(Req, data){
  var params = data.params;
  var text = "<b>" +params["title"]+ " : " + lrcMakeText("TAG_DONE") + "</b> <small>("+params["prependtext"]+")</small>";
  LiveRC_alert(text);
}

/* </source>

====== Révocation ======

<source lang="javascript"> */

// Création de la commande de révocation

function buildLiveUndo(Page, oldid, User1, User2){
    if(!Page || !oldid || !User1 || !User2 ) return "";
    var specialNotice = "";
    var rollbackButton = "";
    if (User1 == User2) {
        specialNotice = "<small><b style='color:red'>[" + lrcMakeText("SAME_EDITOR") + "]</b></small> ";
        rollbackButton = '<input id="LiveRollbackLink" '
                       + 'type="button" title="'+lrcMakeText("REVERT")+' « '+User2+' » ('+Page+')" '
                       + 'onclick="lrcUndo(' + lrcEscapeStr(Page) + ',' + lrcEscapeStr(User2) +'); return false;" '
                       + 'onselect="lrcUndo(' + lrcEscapeStr(Page) + ',' + lrcEscapeStr(User2) +'); return false;" '
                       + 'value="' + lrcMakeText("REVERT") + '" />'
    }
    if (Page == lrcMakeParam("SanboxPage")) {
        specialNotice = "<small><b style='color:red'>[" + lrcMakeText("SANDBOX") + "]</small></b> ";
    }
    var UndoBar = '<form id="LiveUndoForm" onsubmit="return false;">'
                + specialNotice + rollbackButton
                + '<input id="LiveUndoLink" type="button" title="'+lrcMakeText("UNDORC")+' « '+User2+' » ('+Page+')" '
                + 'onclick="lrcUndo('+lrcEscapeStr(Page)+','+lrcEscapeStr(User2)+','+lrcEscapeStr(oldid)+'); return false;" '
                + 'onselect="lrcUndo('+lrcEscapeStr(Page)+','+lrcEscapeStr(User2)+','+lrcEscapeStr(oldid)+'); return false;" '
                + 'value="' + lrcMakeText("UNDORC") + '" />'
                + '<span><input id="LiveRevertMessage" title="'+lrcMakeText("AddResume")+'" value="" /></span>'
                + '</form>';
    return UndoBar;
}

// Mise en place des suggestions de résumé de révocation

function LiveRC_RevertMessagesExtension_Init(){
    var RevertInput = document.getElementById("LiveRevertMessage");
    if(!RevertInput) return;
    var ReverMessages = lrcRevertMessages_Custom;
    if(!ReverMessages || ReverMessages.length==0) ReverMessages = Custom_lrcRevertMessages;
    if(!ReverMessages || ReverMessages.length==0) ReverMessages = lrcRevertMessages;
    var Opt = '<option selected="selected" onClick="LiveRC_RevertMessagesExtension_Update()" value=""> </option>';
    for(var a=0,l=ReverMessages.length;a<l;a++){
      Opt += '<option value="'+ReverMessages[a].resume+'" '
            + 'title="'+ReverMessages[a].resume+'" '
            + 'onClick="LiveRC_RevertMessagesExtension_Update()" '
            + 'name="'+a+'">'+ReverMessages[a].text+'</option>';
    }
    var Select = document.createElement('select');
    Select.id = "LiveRevertMessage_List";
    Select.innerHTML = Opt;
    Select.style.display = "none";
    Select.style.position = "relative" ;
    Select.style.width = RevertInput.offsetWidth + "px" ;
    Select.style.top = parseInt(RevertInput.offsetHeight) + "px";
    Select.style.marginBottom = "-" + (20 + parseInt(RevertInput.offsetHeight)) + "px" ;
    Select.style.marginLeft = "-"+RevertInput.offsetWidth+"px" ;
    RevertInput.parentNode.insertBefore(Select, RevertInput.nextSibling);
    Select.onkeyup = LiveRC_RevertMessagesExtension_KeyPress;
    Select.onchange = LiveRC_RevertMessagesExtension_Update;
    RevertInput.parentNode.onmouseover = function(){ LiveRC_RevertMessagesExtension_Toggle(true); };
    RevertInput.parentNode.onmouseout = function(){ LiveRC_RevertMessagesExtension_Toggle(false); };
}

// Affichage / Masquage des suggestions de résumé de révocation

function LiveRC_RevertMessagesExtension_Toggle(show){
    var RevertSelect = document.getElementById("LiveRevertMessage_List");
    if(!RevertSelect) return;
    if(show){
        RevertSelect.style.display = "inline";
    }else{
        RevertSelect.style.display = "none";
    }
}

// Sélection d'une suggestion de résumé de révocation (clavier + souris)

function LiveRC_RevertMessagesExtension_KeyPress(e){
    if (!e) var e = window.event;
    if (e.keyCode != 13) return;
    LiveRC_RevertMessagesExtension_Update();
}

function LiveRC_RevertMessagesExtension_Update(){
    var RevertInput = document.getElementById("LiveRevertMessage");
    var RevertSelect = document.getElementById("LiveRevertMessage_List");
    if(!RevertInput || !RevertSelect) return;
    var InputValue = RevertInput.value;
    if(InputValue!="") RevertInput.value += " ; ";
    var Options = RevertSelect.getElementsByTagName('option');
    for(var a=0,l=Options.length;a<l;a++){
        if(!Options[a].selected) continue;
        RevertInput.value = Options[a].value;
        RevertInput.focus();
        return;
    }
}

// Récupération des informations et requête de page

function lrcUndo(title, user, oldid) {
  lrcDisplayDebug("Automatic function (Revert)");
  var RollbackButton = document.getElementById('LiveRollbackLink');
  var UndoButton = document.getElementById('LiveUndoLink');
  var UndoMessage = document.getElementById('LiveRevertMessage');
  var UndoMessageList = document.getElementById('LiveRevertMessage_List');
  if(!UndoMessage) return;
  if(RollbackButton) RollbackButton.disabled = "disabled";
  if(UndoButton) UndoButton.disabled = "disabled";
  UndoMessage.disabled = "disabled";
  if(UndoMessageList) UndoMessageList.disabled = "disabled";
  var summary = UndoMessage.value;
  var requestHistory = wgServer + wgScriptPath + '/api.php?format=xml'
          + '&action=query&prop=revisions|info'
          + '&rvlimit='+LiveRC_Config["RevertLimit"]+'&rvprop=user|ids'
          + '&intoken=edit&inprop=protection'
          + '&titles=' + encodeURIComponent(title);
  wpajax.http({url: requestHistory, onSuccess: lrcUndoCB, title: title,
               user: user, oldid: oldid, rvlimit:LiveRC_Config["RevertLimit"], summary: summary});
  return false;
}

// Traitement de la requête de révocation

function lrcUndoCB(xmlreq, data) {
  var ObjetXML = xmlreq.responseXML;
  var Isprotected = false;
  var PR = ObjetXML.getElementsByTagName("pr");
  for(var a=0,l=PR.length;a<l;a++){
    var Type = PR[a].getAttribute("type");
    var Level = PR[a].getAttribute("level");
    if(Type=="edit" && wgUserGroups.indexOf(Level)==-1) Isprotected = true;
  }
  if(Isprotected){
    LiveRC_alert("<b>"+lrcMakeText("PROTECTEDPAGE").split("$1").join(data.title)+"</b>");
    return;
  }
  var ErrorMSG = "<b>"+data.title+" : "+lrcMakeText("REVERT_ABORTED")+"</b>";
  var page = ObjetXML.getElementsByTagName('page')[0];
  var lst = page.getElementsByTagName('rev');
  var oldUser = LiveRC_ManageIPv6( lst[0].getAttribute('user') );
  var user = LiveRC_ManageIPv6(data.user);
  if(user != oldUser){
    LiveRC_alert(ErrorMSG);
    return;
  }
  var curid = lst[0].getAttribute('revid');
  var i;
  for (i=0; i < lst.length && LiveRC_ManageIPv6(lst[i].getAttribute('user')) == user
          && (data.oldid ? (lst[i].getAttribute('revid') != data.oldid) : true); i++) {}
  if(i == 0 || i == lst.length){
    LiveRC_alert(ErrorMSG+" (i = "+i+")");
    return;
  }
  var oldUser = LiveRC_ManageIPv6( lst[i].getAttribute('user') );
  var oldid = lst[i].getAttribute('revid');
  var summary = lrcMakeText("RESUMESTART")+lrcGetMediawikiMessage("revertpage");
  summary = summary.split("$1").join(oldUser);
  summary = summary.split("$2").join(data.user);
  if(data.summary) summary += ' ; ' + data.summary;
  var EditParam = new Array();
  EditParam["token"] = page.getAttribute('edittoken');
  EditParam["summary"] = summary;
  EditParam["title"] = data.title;
  EditParam["watchlist"] = (lrcMakeParam("BypassWatchdefault") ? 'nochange' : 'preferences');
  EditParam["notminor"] = "1";
  EditParam["undo"] = curid;
  EditParam["undoafter"] = oldid;
  var Params = new Array();
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  Params = Params.join("&");
  var headers = new Array();
  headers['Content-Type'] = 'application/x-www-form-urlencoded';
  wpajax.http({url: wgServer + wgScriptPath + '/api.php?action=edit',
               method: "POST", headers: headers, data: Params,
               onSuccess: lrcUndoCBDone,
               params:EditParam
  });
}

function lrcUndoCBDone(Req, data){
  var params = data.params;
  var text = "<b>"+params["title"]+" : "+lrcMakeText("REVERT_DONE")+"</b> <small>("+LiveRC_StripWikitext(params["summary"])+")</small>";
  LiveRC_alert(text);
}

/* </source>

====== Remerciement ======

<source lang="javascript"> */

// Création de la commande de remerciement utilisateur

function buildLiveThank(User, Page, Rev){
  lrcDisplayDebug("Automatic function (Thank)");
  var withEcho = (!!LiveRC_Config["MediawikiExtensions"]["Echo"]);
  if(!withEcho) return '';
  if(UserIsIP(User)) return '';
  if(!Rev) return '';

  var ThankBar = '<form id="LiveThankForm">'
               + '<input id="LiveThankLink" type="button" title="'+lrcMakeText("USERTHANK")+' « '+User+' », oldid = '+Rev+'" '
               + 'onclick="getLiveThank('+lrcEscapeStr(User)+','+lrcEscapeStr(Page)+','+lrcEscapeStr(Rev)+'); return false;" '
               + 'onselect="getLiveThank('+lrcEscapeStr(User)+','+lrcEscapeStr(Page)+','+lrcEscapeStr(Rev)+'); return false;" '
               + 'value="'+lrcMakeText("USERTHANK")+'" />'
               + '</form>';
  return ThankBar;
}

function getLiveThank(user, page, rev){
  lrcDisableLink('LiveThankLink');
  wpajax.http({ url: wgServer + wgScriptPath + '/api.php?format=xml&action=query&prop=info&intoken=edit&titles='+lrcGetNamespaceName(3)+":"+encodeURIComponent(user),
                onSuccess: postLiveThank,
                user: user, page:page, rev:rev });
}

function postLiveThank(xmlreq, data) {
  var user = data.user;
  var page = data.page;
  var rev = data.rev;  
  var ObjetXML = xmlreq.responseXML;
  var Page = ObjetXML.getElementsByTagName("page")[0];
  var EditParam = new Array();
  EditParam["token"] = Page.getAttribute("edittoken");
  EditParam["rev"] = rev;
  EditParam["source"] = lrcMakeText("RESUMESTART") + lrcMakeText("USERTHANK_RESUME") + ' ' + (page ? ' ' + lrcMakeText("ON_ARTICLE") + ' [['+page+']]' : '' ) + ' !';
  var Params = new Array();
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  EditParam["user"] = user;
  Params = Params.join("&");
  var headers = new Array();
  headers['Content-Type'] = 'application/x-www-form-urlencoded';
  wpajax.http({ url: wgServer + wgScriptPath + '/api.php?action=thank',
                method: "POST", headers: headers,
                data: Params,
                onSuccess: postLiveThankDone,
                params:EditParam
  });
}

function postLiveThankDone(Req, data){
  var params = data.params;
  var text = "<b>"+params["user"]+ " : " + lrcMakeText("USERTHANK_DONE") + "</b> <small>(revid = "+params["rev"]+")</small>";
  LiveRC_alert(text);
}

/* </source>

====== Avertissement / Message ======

<source lang="javascript"> */

// Création de la commande de message utilisateur

function buildLiveAverto(Page, User, WithPage){
    if((!Page && WithPage) || !User) return "";
    var optAvert = "";
    var ListAverto = lstAverto_Custom;
    if(!ListAverto || ListAverto.length==0) ListAverto = Custom_lstAverto;
    if(!ListAverto || ListAverto.length==0) ListAverto = lstAverto;
    for (var j=0,optl=ListAverto.length; j<optl; j++) {
        var Value = ListAverto[j].template;
        if(!Value) continue;
        if(ListAverto[j].addName) Value += "|user=" + wgUserName
        if(ListAverto[j].hasPage && WithPage) Value += '|1='+Page.replace(/\"/g, "");
        optAvert += '<option value="'+Value+'" ';
        optAvert += 'title="{{'+Value+'}}" '
        optAvert += '>'+ListAverto[j].string+'</option>';
    }
    var AvertoBar = '<form id="LiveAvertoForm">'
                  + '<input id="LiveAvertoLink" type="button" title="'+lrcMakeText("USERMSG")+' « '+User+' »" '
                  + 'onclick="getLiveAverto('+lrcEscapeStr(User)+','+lrcEscapeStr(Page)+'); return false;" '
                  + 'onselect="getLiveAverto('+lrcEscapeStr(User)+','+lrcEscapeStr(Page)+'); return false;" '
                  + 'value="'+lrcMakeText("USERMSG")+'" />'
                  + '<select id="averto">' + optAvert + '</select>'
                  + '</form>';
     return AvertoBar;
}

// Récupération des informations et requête de page

function getLiveAverto(user, page) {
  lrcDisplayDebug("Automatic function (Message)");
  var message = document.getElementById('averto').value;
  if(!message) return;
  lrcDisableLink('LiveAvertoLink');
  lrcDisableLink('averto');
  wpajax.http({ url: wgServer + wgScriptPath + '/api.php?format=xml&action=query&prop=info&intoken=edit&inprop=protection&titles='+lrcGetNamespaceName(3)+":"+encodeURIComponent(user),
                onSuccess: postLiveAverto,
                user: user, page:page, message: message });
  return false;
}

// Traitement de la requête de message utilisateur

function postLiveAverto(xmlreq, data) {
  var user = data.user;
  var page = data.page;
  var message = data.message;
  var typeofmessage = message.replace(/\|.*/g, "");
  var EditParam = new Array();
  var ObjetXML = xmlreq.responseXML;
  var Isprotected = false;
  var PR = ObjetXML.getElementsByTagName("pr");
  for(var a=0,l=PR.length;a<l;a++){
    var Type = PR[a].getAttribute("type");
    var Level = PR[a].getAttribute("level");
    if(Type=="edit" && wgUserGroups.indexOf(Level)==-1) Isprotected = true;
  }
  if(Isprotected){
    LiveRC_alert("<b>"+lrcMakeText("PROTECTEDPAGE").split("$1").join(page)+"</b>");
    return;
  }
  var Page = ObjetXML.getElementsByTagName("page")[0];
  EditParam["token"] = Page.getAttribute("edittoken");
  EditParam["appendtext"] = '\n\n{{subst:' + message + '}} ~~~~\n';
  EditParam["summary"] = lrcMakeText("RESUMESTART") + lrcMakeText("USERMSG_RESUME") + ' ' + typeofmessage + (page ? ' ' + lrcMakeText("ON_ARTICLE") + ' [['+page+']]' : '' ) + ' !';
  EditParam["notminor"] = "1";
  EditParam["title"] = lrcGetNamespaceName(3)+":"+user;
  EditParam["watchlist"] = "preferences";
  if(lrcMakeParam("BypassWatchdefault")) EditParam["watchlist"] = "nochange";

  var Params = new Array();
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  Params = Params.join("&");
  EditParam["user"] = user;
  var headers = new Array();
  headers['Content-Type'] = 'application/x-www-form-urlencoded';
  wpajax.http({ url: wgServer + wgScriptPath + '/api.php?action=edit',
                method: "POST", headers: headers,
                data: Params,
                onSuccess: postLiveAvertoDone,
                params:EditParam
  });
}

function postLiveAvertoDone(Req, data){
  var params = data.params;
  var text = "<b>"+params["user"]+ " : " + lrcMakeText("USERMSG_DONE") + "</b> <small>("+params["appendtext"]+")</small>";
  LiveRC_alert(text);
}

/* </source>

====== Signalement / demande administrative ======

<source lang="javascript"> */

// Récupération des motifs standards de demande administrative

function lstReportGetNeededMessages(){
     for(var Ask in lstReport){
          var ThisAsk = lstReport[Ask];
          if(!ThisAsk.reasonsdropdownname) return;
          LiveRC_addNeededMessages(ThisAsk.reasonsdropdownname);
     }
}

function buildReportCreateReasons(){
     for(var Ask in lstReport){
          var ThisAsk = lstReport[Ask];
          var Type = ThisAsk.userright;
          var DropType = ThisAsk.userright;
          ThisAsk.reasons = new Array();
          if(!ThisAsk.reasonsdropdownname) return;
          var Drop = lrcGetMediawikiMessage(ThisAsk.reasonsdropdownname);
          if(!Drop) continue;
          var Drop = Drop.split("**");
          for(var a=0,l=Drop.length;a<l;a++){
               var ThisReason = Drop[a];
               if(ThisReason.indexOf("*")!=-1) continue;
               ThisAsk.reasons.push(ThisReason);
          }
     }
}

// Création du lien de demande administrative

function buildReport(Page, User){
    Page = (Page ? Page : '');
    User = (User ? User : '');
    var optAskSysop = new Array('<option id="null" value="" title=""></option>');
    var optl = lstReport.length;
    for (j=0; j<optl; j++) {
        if((lstReport[j].parampage && Page) || (lstReport[j].paramuser && User)){
            if(lrcUserHasRight(lstReport[j].userright)) continue;
            var NewValue = lstReport[j].template;
            if(lstReport[j].parampage && Page) NewValue += '|page='+Page.replace(/\"/g, '\\"');
            if(lstReport[j].paramuser && User) NewValue += '|user='+User.replace(/\"/g, '\\"');
            var NewOption = '<option id="'+lstReport[j].userright+'" value="'+NewValue+'" '
                          + 'title="{{'+NewValue+'}} ⇨ '+buildReportPageMagicWords(lstReport[j].page)+'" '
                          + '>'+lrcMakeText(lstReport[j].text)+'</option>';
            optAskSysop.push(NewOption);
        }
    }
    if(optAskSysop.length===1) return "";
    var ReportBar = '<form id="ReportForm">'
                       + '<input id="LiveReport" type="button" href="javascript:;" '
                       + 'title="' + lrcMakeText("REPORTING_TIP") + ' " '
                       + 'onClick="liveReport('+lrcEscapeStr(User)+','+lrcEscapeStr(Page)+');" '
                       + 'value="'+lrcMakeText("REPORTING_SHORT")+'" />'
                       + '<select id="Report" onchange="buildReportGetReason()">' + optAskSysop.join("") + '</select>'
                       + '</form>';
     return ReportBar;
}

// Création du menu de demande administrative

function buildReportGetReason(){
     var OldDropDown = document.getElementById("ReportReasons");
     if(OldDropDown) OldDropDown.parentNode.removeChild(OldDropDown);
     var Select = document.getElementById("Report");
     if(!Select) return;
     var Options = Select.getElementsByTagName('option');
     for(var a=0,l=Options.length;a<l;a++){
          if(!Options[a].selected) continue;
          var ID = Options[a].id;
          if(!ID || ID==="null") continue;
          for(var Ask in lstReport){
               var Type = lstReport[Ask].userright;
               if(Type!=ID) continue;
               var Reasons = lstReport[Ask].reasons;
               if(!Reasons || Reasons.length===0){
                    var NewInput = document.createElement('input');
                    NewInput.type = "text";
                    NewInput.id = "ReportReasons";
                    NewInput.title = lrcMakeText("AddResume");
                    Select.parentNode.insertBefore(NewInput, Select.nextSibling);                    
               }else{
                    var NewSelect = document.createElement('select');
                    NewSelect.id = "ReportReasons";
                    NewSelect.style.fontSize = "80%";
                    var Opt = document.createElement('option');
                    Opt.value = "";
                    Opt.innerHTML = "";
                    NewSelect.appendChild(Opt);
                    for(var b=0,m=Reasons.length;b<m;b++){
                         var Reason = Reasons[b];
                         var Opt = document.createElement('option');
                         Opt.value = Reason;
                         Opt.title = Reason;
                         Opt.innerHTML = LiveRC_StripWikitext(Reason);
                         NewSelect.appendChild(Opt);
                    }
                    Select.parentNode.insertBefore(NewSelect, Select.nextSibling);
               }
          }
     }
}

function buildReportPageMagicWords(Page){
  var MonthNames = new Array("january","february","march","april","june","july","august","september","october","november","december");
  var today = new Date();
  var day = today.getDate();
  var month = lrcGetMediawikiMessage(MonthNames[(today.getMonth())]).toLowerCase();
  var Month = month.substring(0,1).toUpperCase() + month.substring(1, month.length);
  var year = today.getYear();
  if (year < 2000) year = year + 1900;
  Page = Page.split("$day").join(day);
  Page = Page.split("$month").join(month);
  Page = Page.split("$Month").join(Month);
  Page = Page.split("$year").join(year);
  return Page;
}

// Récupération des informations et requête de page

function liveReport(user, page) {
  lrcDisplayDebug("Automatic function (Reporting)");
  var GotOption = false;
  var GotOptionParams = false
  var GotReason = "";
  var summary = "";
  var Select = document.getElementById('Report');
  var Options = Select.getElementsByTagName('option');
  for(var a=0,l=Options.length;a<l;a++){
    var Option = Options[a];
    if(Option.selected && !GotOption){
      GotOption = Option;
      var ID = GotOption.id;
      for(var Ask in lstReport){
        var Type = lstReport[Ask].userright;
        if(Type!=ID) continue;
        GotOptionParams = lstReport[Ask];
        summary = lstReport[Ask].resume;
        summary = summary.split("$1").join("[["+page+"]]").split("$2").join("[[User:"+user+"|"+user+"]]");
      }
    }
  }
  var message = GotOption.value;
  var ReasonsSelect = document.getElementById('ReportReasons');
  if(ReasonsSelect){
    if(ReasonsSelect.tagName && ReasonsSelect.tagName.toLowerCase() == "select"){
      var ReasonsOptions = ReasonsSelect.getElementsByTagName('option');
      for(var a=0,l=ReasonsOptions.length;a<l;a++){
        var ReasonsOption = ReasonsOptions[a];
        if(ReasonsOption.selected){
          GotReason = ReasonsOption.value;
        }
      }
    }else if(ReasonsSelect.tagName && ReasonsSelect.tagName.toLowerCase() == "input"){
      if(ReasonsSelect.type = "text"){
          GotReason = ReasonsSelect.value;
      }
    }
  }
  if(!GotOption || !GotOptionParams) return;
  lrcDisableLink('LiveReport');
  lrcDisableLink('Report');
  lrcDisableLink('ReportReasons');
  var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query&prop=info&intoken=edit&inprop=protection&titles='+encodeURIComponent(buildReportPageMagicWords(GotOptionParams.page))
  wpajax.http({ url       : URL,
                onSuccess : postReport,
                message   : message,
                summary   : summary,
                page      : GotOptionParams.page,
                reason    : GotReason
  });
  return false;
}

// Traitement de la requête de demande administrative

function postReport(xmlreq, data) {
  var page = data.page;
  var message = data.message;
  var summary = data.summary;
  var reason = data.reason;
  var ObjetXML = xmlreq.responseXML;
  var Isprotected = false;
  var PR = ObjetXML.getElementsByTagName("pr");
  for(var a=0,l=PR.length;a<l;a++){
    var Type = PR[a].getAttribute("type");
    var Level = PR[a].getAttribute("level");
    if(Type=="edit" && wgUserGroups.indexOf(Level)==-1) Isprotected = true;
  }
  if(Isprotected){
    LiveRC_alert("<b>"+lrcMakeText("PROTECTEDPAGE").split("$1").join(page)+"</b>");
    return;
  }
  var Page = ObjetXML.getElementsByTagName("page")[0];
  var EditParam = new Array();
  EditParam["token"] = Page.getAttribute("edittoken");
  EditParam["section"] = "new";
  EditParam["sectiontitle"] = summary;
  EditParam["text"] = '\n\n{{subst:' + message + '|raison='+reason+'}}\n';
  EditParam["title"] = page;
  EditParam["notminor"] = "1";
  EditParam["watchlist"] = "preferences";
  if(lrcMakeParam("BypassWatchdefault")) EditParam["watchlist"] = "nochange";
  var Params = new Array();
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  Params = Params.join("&");
  var headers = new Array();
  headers['Content-Type'] = 'application/x-www-form-urlencoded';
  wpajax.http({ url: wgServer + wgScriptPath + '/api.php?action=edit',
                method: "POST", headers: headers,
                data: Params,
                onSuccess: postReportDone,
                params:EditParam
  });
}

function postReportDone(Req, data){
  var params = data.params;
  var text = "<b>"+params["title"]+ " : " + lrcMakeText("REPORTING_DONE") + "</b> <small>("+params["text"]+")</small>";
  LiveRC_alert(text);
}

/* </source>

====== Relecture (review) ======

<source lang="javascript"> */

// Modification de la forme pour relire un diff

function modifyReviewform(PreviewBarArgs){
  var PreviewWindow = document.getElementById('livePreview');
  if(!PreviewWindow) return;
  var TheForm = false;
  var Forms = PreviewWindow.getElementsByTagName('form');
  for(var a=0,l=Forms.length;a<l;a++){
    var Form = Forms[a];
    if(Form.id && Form.id.indexOf("-reviewform")!=-1) TheForm = Form;
  }
  if(!TheForm) return;
  var Inputs = TheForm.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    var Input = Inputs[a];
    if(Input.type != "submit") continue;
    var NewInput = document.createElement('input');
    NewInput.type = "button";
    NewInput.id = "Live_" + Input.id;
    NewInput.name = Input.name;
    NewInput.value = Input.value + lrcMakeText("LIVELINK");
    NewInput.onclick = function(){ processReview(this, PreviewBarArgs)}
    NewInput.onselect = function(){ processReview(this, PreviewBarArgs)}
    Input.parentNode.insertBefore(NewInput, Input.nextSibling);
    Input.style.display = "none";
  }
}

function processReview(Input, PreviewBarArgs){
    LiveRC_Config["NextPreviewIndex"]++;
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);    
    var Type = Input.name;
    Params[Type] = "1";
    var ParamsInURL = new Array();
    for(var P in Params){
        if(typeof(Params[P])==="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    ParamsInURL = ParamsInURL.join("&");
    var action = Form.action;
    var headers = new Array();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL,
                  onSuccess:doneReview,
                  params:Params,
                  PreviewBarArgs:PreviewBarArgs,
                  PreviewIndex:LiveRC_Config["NextPreviewIndex"]
    });
}

function doneReview(Req, data){
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(Req);
  var PreviewWindow = document.getElementById("livePreview");
  PreviewWindow.innerHTML = bC.innerHTML;
  lrcCloseAll();
  addClass(document.body, "LiveRCPreviewDisplayed");
  var Args = data.PreviewBarArgs;
  var IsRollback = data.params["wpReject"];
  var TheForm = PreviewWindow.getElementsByTagName('form')[0];
  if(IsRollback && TheForm){
      var Inputs = TheForm.getElementsByTagName('input');
      for(var a=0,l=Inputs.length;a<l;a++){
      var Input = Inputs[a];
      if(Input.type != "submit") continue;
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.id = "Live_" + Input.id;
      NewInput.name = Input.name;
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processReviewRollback(this, Args)}
      NewInput.onselect = function(){ processReviewRollback(this, Args)}
      Input.parentNode.insertBefore(NewInput, Input.nextSibling);
      Input.style.display = "none";
    }
  }else{
    modifyReviewform(Args);
    buildPreviewBar(Args);
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreview"+Args["Mode"]);
  }
}

function processReviewRollback(Input, PreviewBarArgs){
    LiveRC_Config["NextPreviewIndex"]++;
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);    
    var Type = Input.name;
    Params[Type] = "1";
    var ParamsInURL = new Array();
    for(var P in Params){
        if(typeof(Params[P])==="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    ParamsInURL = ParamsInURL.join("&");
    var action = Form.getAttribute("action");
    var headers = new Array();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL,
                  onSuccess:doneReview,
                  params:Params,
                  PreviewBarArgs:PreviewBarArgs,
                  PreviewIndex:LiveRC_Config["NextPreviewIndex"]
    });
}

/* </source>

====== Relecture (patrol) ======

<source lang="javascript"> */

// Modification et copie du lien "Marquer cette modification comme relue"

function lrcReplacePatrolLink() {
  var Node = document.getElementById("livePreview");
  if(!Node) return "";
  var x = getElementsByClass('patrollink',Node,null)[0];
  if (x == null) return "";
  var lrcPatrolLnk = x.getElementsByTagName('a')[0];
  lrcPatrolLnk.onclick = function(){ lrcPatrolEdit(this); return false;};
  lrcPatrolLnk.style.color = "darkgreen";
  var PatrolLink = '<small>'
                 + '<a href="'+lrcPatrolLnk.href+'" '
                 + 'onClick="lrcPatrolEdit(this); return false;"'
                 + '>'+lrcPatrolLnk.innerHTML+'</a>'
                 + '</small>';
  return PatrolLink;
}

// Relecture (Patrol)

function lrcPatrolEdit(lrcPatrolLnk) {
  lrcDisplayDebug("Automatic function (Patrol)");
  var oldLink = lrcPatrolLnk.href;
  lrcPatrolLnk.style.color = "silver";
  lrcPatrolLnk.style.cursor = "default";
  lrcPatrolLnk.style.textDecoration = "none";
  wpajax.http({ url: oldLink, onSuccess:lrcAfterPatrolEdit, link:lrcPatrolLnk});
}

function lrcAfterPatrolEdit(xmlreq, data) {
  try{
    var lrcPatrolLnk = data.link;
    lrcPatrolLnk.innerHTML = lrcGetMediawikiMessage("markedaspatrolled", true);
    lrcPatrolLnk.style.color = "darkgreen";
    lrcPatrolLnk.href = "javascript:;";
    lrcPatrolLnk.onclick = "";
  }catch(e){ }
}

/* </source>

==== LiveDiff ====

<source lang="javascript"> */

// Requête et affichage Diff

function liveDiff(page, id, oldid) {
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveDiff", new Array(lrcEscapeStr(page), lrcEscapeStr(id), lrcEscapeStr(oldid)), wgServer+wgScript+'?title='+encodeURIComponent(page)+'&diff='+id+'&oldid='+oldid+'&unhide=1', page + " : diff="+id+' oldid='+oldid);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Diff : <span style='color:red'>"+page+"</span>...</b>");
  wpajax.http({ url: lrcGetUglyPageURL(page, '&diffonly=1&unhide=1&diff='+id+'&oldid='+oldid),
                onSuccess: getDiff, mpage: page, mid: id, moldid:oldid,
                PreviewIndex: LiveRC_Config["NextPreviewIndex"]});
}

function getDiff(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var page=data.mpage;
  var oldid=data.moldid;
  var id = data.mid;
  var bC  = getPageContent(xmlreq);
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  lrcCloseAll();
  addClass(document.body, "LiveRCPreviewDisplayed");
  // Get username of submitter
  var user1 = getElementWithId('mw-diff-otitle2', 'div', bC);
  if(user1 != null) {
    user1 = user1.getElementsByTagName('a')[0].innerHTML;
  }
  var user2 = getElementWithId('mw-diff-ntitle2', 'div', bC);
  if(user2 != null) {
    user2 = user2.getElementsByTagName('a')[0].innerHTML;
  }
  // Get real ids
  var Div_oldid = getElementWithId('mw-diff-otitle1', 'div', bC);
  if(Div_oldid){
    var A_oldid =  Div_oldid.getElementsByTagName('a')[0];
    if(A_oldid){ 
      var X_oldid = lrcGetArgFromURL(A_oldid.href, "oldid");
      if(X_oldid) oldid = X_oldid;
    }
  }
  var Div_id = getElementWithId('mw-diff-ntitle1', 'div', bC);
  if(Div_id){
    var A_id =  Div_id.getElementsByTagName('a')[0];
    if(A_id){ 
      var X_id = lrcGetArgFromURL(A_id.href, "oldid");
      if(X_id) id = X_id;
    }
  }
  // Get previous and next ids (if exist)
  var Previous = false;
  var asPreviousDiff = getElementWithId('differences-prevlink', 'a', bC);
  if(asPreviousDiff !=null){
    var PreviousOldid = lrcGetArgFromURL(asPreviousDiff.href, "oldid");
    if(PreviousOldid){
      Previous = {
                  "url"   : asPreviousDiff.href,
                  "text"  : asPreviousDiff.innerHTML,
                  "title" : (asPreviousDiff.title ? asPreviousDiff.title : ""),
                  "oldid" : PreviousOldid
                 }
    }
  }
  var Next = false;
  var asNextDiff = getElementWithId('differences-nextlink', 'a', bC);
  if (asNextDiff != null){
    var NextOldid = lrcGetArgFromURL(asNextDiff.href, "oldid");
    if(NextOldid){
      Next = {
              "url"   : asNextDiff.href,
              "text"  : asNextDiff.innerHTML,
              "title" : (asNextDiff.title ? asNextDiff.title : ""),
              "oldid" : NextOldid
             }
    }
  }
  var Args = {
    "Mode"     : "Diff",
    "Url"      : lrcGetPageURL(page),
    "Page"     : page,
    "User1"    : user1,
    "User2"    : user2,
    "Oldid"    : oldid,
    "Id"       : id,
    "Previous" : Previous,
    "Next"     : Next
  }
  modifyReviewform(Args);
  buildPreviewBar(Args);
  updatePreviewWindowAttributes();
  LiveRC_RunHooks("AfterPreviewDiff", data);
}

/* </source>

==== LiveHist ====

<source lang="javascript"> */

function liveHist(page, Params) {
  LiveRC_Config["NextPreviewIndex"]++;
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Hist : <span style='color:red'>"+page+"</span>...</b>");
  var URL = lrcGetUglyPageURL(page, '&action=history');
  if(!Params){
    lrcAddToHistory("liveHist",
                    new Array(lrcEscapeStr(page)),
                    URL,
                    page
                   );
  }else{
    var HistoryParams = new Array();
    for(var param in Params){
      if(Params[param]){
        if(param!="title" && param!="action"){
          HistoryParams.push(param+":"+lrcEscapeStr(Params[param]));
          URL += "&"+param+"="+encodeURIComponent(Params[param]);
         }
      }
    }
    lrcAddToHistory("liveHist",
                    new Array(lrcEscapeStr(page), "{"+HistoryParams.join(",")+"}"),
                    URL,
                    page + " : " + HistoryParams.join(" ")
                   );
  }
  wpajax.http({url:URL, onSuccess: getHist, message: page , PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
}

function getHist(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(xmlreq);
  var c=data.message;
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  addClass(document.body, "LiveRCPreviewDisplayed");
  buildPreviewBar({
    "Mode"  : "Hist",
    "Url"   : lrcGetUglyPageURL(c, '&action=history'),
    "Page"  : c,
    "User1" : ""
  });
  modifyHistInput();
  updatePreviewWindowAttributes();
  LiveRC_RunHooks("AfterPreviewHistory", data);
}

function modifyHistInput(){
  var LP = document.getElementById( 'livePreview' );
  var SearchForm = getElementWithId('mw-history-searchform', 'form', LP);
  var SInputs = SearchForm.getElementsByTagName('input');
  for(var a=0,l=SInputs.length;a<l;a++){
    if(SInputs[a].type && SInputs[a].type === "submit"){
      var Input = SInputs[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processHistSearch(this)}
      NewInput.onselect = function(){ processHistSearch(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.parentNode.removeChild(Input);
    }
  }
  var CompareForm = getElementWithId('mw-history-compare', 'form', LP);
  var CInputs = CompareForm.getElementsByTagName('input');
  for(var a=0,l=CInputs.length;a<l;a++){
    if(CInputs[a].type && CInputs[a].type === "submit"){
      var Input = CInputs[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processHistCompare(this)}
      NewInput.onselect = function(){ processHistCompare(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.parentNode.removeChild(Input);
    }
  }
  var DRButtons = CompareForm.getElementsByTagName('button');
  for(var a=0,l=DRButtons.length;a<l;a++){
    if(DRButtons[a] && hasClass(DRButtons[a],"mw-history-revisiondelete-button")){
      var Input = DRButtons[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.innerHTML + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processHistRevisionDelete(this)}
      NewInput.onselect = function(){ processHistRevisionDelete(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.parentNode.removeChild(Input);
    }
  }
}

function processHistSearch(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var page = Params["title"];
  liveHist(page, Params);
}

function processHistCompare(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var page = Params["title"];
  var diff = Params["diff"];
  var oldid = Params["oldid"];
  liveDiff(page, diff, oldid);
}

function processHistRevisionDelete(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var page = Params["title"];
  var Ids = new Array();
  for(var Id in Params){
   if(Id.indexOf("ids[")==0) Ids.push(Id.split("ids[").join("").split("]").join(""));
  }
  if(!Ids[0]) return;
  liveRevisiondelete(page,Ids);
}

/* </source>

==== LiveArticle ====

<source lang="javascript"> */

function liveArticle(page, user, oldid) {
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveArticle", new Array(lrcEscapeStr(page), (user ? lrcEscapeStr(user):lrcEscapeStr("")), (oldid ? lrcEscapeStr(oldid):lrcEscapeStr(""))), wgServer + wgScript + '?title=' + encodeURIComponent(page) + '&redirect=no' + (oldid ? "&oldid="+oldid:""), page + (user ? " NewPage : User:"+user :""));
  buildBlanckPreviewBar("<b style='text-decoration: blink;'><span style='color:red'>"+page+"</span>...</b>");
  wpajax.http({url:lrcGetUglyPageURL(page, '&redirect=no'),
          onSuccess: getArticle,
          onFailure: getArticle, /* The return code might be 404 if the page has been deleted. */
          page: page, user:user,oldid:oldid , PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
}

function getArticle(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(xmlreq);
  var c=data.page;
  var User=data.user;
  var Url = data.url;
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  if (bC != null) {
    LP.innerHTML = bC.innerHTML;
  }
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  addClass(document.body, "LiveRCPreviewDisplayed");
  var Args = {
    "Mode"  : "Article",
    "Url"   : lrcGetPageURL(c),
    "Page"  : c,
    "User1" : (User ? User : false),
    "oldid" : (data.oldid ? data.oldid: false)
  }
  modifyReviewform(Args);
  buildPreviewBar(Args);
  updatePreviewWindowAttributes();
  LiveRC_RunHooks("AfterPreviewArticle", data);
}

/* </source>

==== LiveContrib ====

<source lang="javascript"> */

function liveContrib(user, Params) {
  LiveRC_Config["NextPreviewIndex"]++;
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Contributions : <span style='color:red'>"+user+"</span>...</b>");
  if(!Params){
    var URL = lrcGetPageURL('Special:Contributions/'+user);
    lrcAddToHistory("liveContrib",
                    new Array(lrcEscapeStr(user)),
                    URL,
                    user
                   );
  }else{
    var URL = lrcGetUglyPageURL('Special:Contributions')+"&contribs=user&target="+encodeURIComponent(user);
    var HistoryParams = new Array();
    for(var param in Params){
      if(Params[param]){
        URL += "&"+param+"="+encodeURIComponent(Params[param]);
        if(param!="target") HistoryParams.push(param+":"+lrcEscapeStr(Params[param]));
      }
    }
    lrcAddToHistory("liveContrib",
                    new Array(lrcEscapeStr(user), "{"+HistoryParams.join(",")+"}"),
                    URL,
                    user + " : " + HistoryParams.join(" ")
                   );
  }
  wpajax.http({url:URL, onSuccess: getContrib, message: user, PreviewIndex:LiveRC_Config["NextPreviewIndex"] });
}

function getContrib(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(xmlreq);
  var user=data.message;
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  addClass(document.body, "LiveRCPreviewDisplayed");
  buildPreviewBar({
    "Mode"  : "Contrib",
    "Url"   : lrcGetPageURL("Special:Contributions/" + user),
    "Page"  : "Special:Contributions/"+user,
    "User1" : user
  });
  modifyContribInput();
  LiveRC_RunHooks("AfterPreviewContribs", data);
}

function modifyContribInput(){
  var LP = document.getElementById( 'livePreview' );
  var Form = LP.getElementsByTagName('form')[0];
  var Inputs = Form.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    if(Inputs[a].type && Inputs[a].type === "submit"){
       var Input = Inputs[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processContrib(this)}
      NewInput.onselect = function(){ processContrib(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.style.display = "none";
    }
  }
  updatePreviewWindowAttributes();
}

function processContrib(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var user = Params["target"];
  liveContrib(user, Params);
}

/* </source>

==== LiveDeletedContrib ====

<source lang="javascript"> */

function liveDeletedContrib(user, Params) {
  LiveRC_Config["NextPreviewIndex"]++;
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>DeletedContributions : <span style='color:red'>"+user+"</span>...</b>");
  if(!Params){
    var URL = lrcGetPageURL('Special:DeletedContributions/'+user);
    lrcAddToHistory("liveDeletedContrib",
                    new Array(lrcEscapeStr(user)),
                    URL,
                    user
                   );
  }else{
    var URL = lrcGetUglyPageURL('Special:DeletedContributions')+"&target="+encodeURIComponent(user);
    var HistoryParams = new Array();
    for(var param in Params){
      if(Params[param]){
        URL += "&"+param+"="+encodeURIComponent(Params[param]);
        if(param!="target") HistoryParams.push(param+":"+lrcEscapeStr(Params[param]));
      }
    }
    lrcAddToHistory("liveDeletedContrib",
                    new Array(lrcEscapeStr(user), "{"+HistoryParams.join(",")+"}"),
                    URL,
                    user + " : " + HistoryParams.join(" ")
                   );
  }
  wpajax.http({url:URL, onSuccess: getDeletedContrib, message: user, PreviewIndex:LiveRC_Config["NextPreviewIndex"] });
}

function getDeletedContrib(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(xmlreq);
  var user=data.message;
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  addClass(document.body, "LiveRCPreviewDisplayed");
  buildPreviewBar({
    "Mode"  : "DeletedContrib",
    "Url"   : lrcGetPageURL("Special:DeletedContributions/" + user),
    "Page"  : "Special:DeletedContributions/"+user,
    "User1" : user
  });
  modifyDeletedContribInput();
  LiveRC_RunHooks("AfterPreviewDeletedContribs", data);
}

function modifyDeletedContribInput(){
  var LP = document.getElementById( 'livePreview' );
  var Form = LP.getElementsByTagName('form')[0];
  var Inputs = Form.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    if(Inputs[a].type && Inputs[a].type === "submit"){
       var Input = Inputs[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processDeletedContrib(this)}
      NewInput.onselect = function(){ processDeletedContrib(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.style.display = "none";
    }
  }
  updatePreviewWindowAttributes();
}

function processDeletedContrib(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var user = Params["target"];
  liveDeletedContrib(user, Params);
}

/* </source>

==== LiveLog ====

<source lang="javascript"> */
// (:it:User:Jalo)

function liveLog(action , params) {
  LiveRC_Config["NextPreviewIndex"]++;
  var titolo = getLogTitle(action);
  var URLParams = "";
  var HistoryParams = new Array();
  for(var param in params){
    if(params[param]){
      URLParams += "&"+ param + "=" + encodeURIComponent(params[param]);
      HistoryParams.push(param + ":" + lrcEscapeStr(""+params[param]));
    }
  }
  lrcAddToHistory("liveLog", new Array(lrcEscapeStr(action), "{"+HistoryParams.join(",")+"}"), wgServer + wgScript + '?title=Special:Log&type=' + action + URLParams, titolo + " : " + HistoryParams.join(", "));
  buildBlanckPreviewBar("<b style='text-decoration: blink;'><span style='color:red'>"+titolo+"</span>...</b>");
  wpajax.http({url:lrcGetUglyPageURL('Special:Log', '&type=' + action + URLParams), onSuccess: getLog, page:params["page"] , user:params["user"], PreviewIndex:LiveRC_Config["NextPreviewIndex"] });
}

function getLogTitle(action){
  for(var Action in LiveRC_Config["LogNames"]){
    if(action == Action) return lrcGetMediawikiMessage(LiveRC_Config["LogNames"][Action]["page"], true);
  }
  return lrcGetMediawikiMessage("log", true);
}

function getLog(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(xmlreq);
  var c = data.page;
  var pref = "Page : ";
  if(!c){
    c=data.user;
    pref = "User : ";
  }
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  addClass(document.body, "LiveRCPreviewDisplayed");
  buildBlanckPreviewBar('<b><a href="'+lrcGetPageURL(c)+'" target="_new">'+pref+c+'</a></b>', true);
  modifyLogInput();
  LiveRC_RunHooks("AfterPreviewLog", data);
}

function modifyLogInput(){
  var LP = document.getElementById( 'livePreview' );
  var Form = LP.getElementsByTagName('form')[0];
  var Inputs = Form.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    if(Inputs[a].type && Inputs[a].type === "submit"){
       var Input = Inputs[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processLog(this)}
      NewInput.onselect = function(){ processLog(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.style.display = "none";
    }
  }
  updatePreviewWindowAttributes();
}

function processLog(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var action = Params["type"];
  var page = Params["page"];
  var user = Params["user"];
  liveLog(action, {page:page,user:user});
}

/* </source>

==== LiveFilter ====
<source lang=javascript> */

function liveFilter(Page, params) {
  LiveRC_Config["NextPreviewIndex"]++;
  var URL = wgServer;
  if(Page=="AbuseFilter"){
    URL += wgArticlePath.split("$1").join("Special:AbuseFilter/"+params);
    var FilterParams = params;
  }else{
    URL += wgScript + "?title=Special:AbuseLog";
    var FilterParams = new Array();

    for(var param in params){
      if(params[param]){
        URL += "&"+ param + "=" + encodeURIComponent(params[param]);
        FilterParams.push(param + ":" + lrcEscapeStr(""+params[param]));
      }
    }
    FilterParams = "{"+FilterParams.join(",")+"}";
  }
  lrcAddToHistory("liveFilter", new Array(lrcEscapeStr(Page), FilterParams), URL, FilterParams);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Filter: <span style='color:red'></span>...</b>");
  wpajax.http({ url: URL,
                onSuccess: getFilter,
                page: Page,
                args: params,
                PreviewIndex:LiveRC_Config["NextPreviewIndex"]
              });
}

function getFilter(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var Args = data.args;
  var Page = data.page;
  var bC  = getPageContent(xmlreq);
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  addClass(document.body, "LiveRCPreviewDisplayed");
  if(typeof(Args)!="object"){
    var LogLink = '<a href="'+lrcGetUglyPageURL("Special:Abuselog", "&wpSearchFilter="+Args)+'" '
                + ' onclick="liveFilter(\'AbuseLog\', {\'wpSearchFilter\': \''+Args+'\'}); return false;" '
                + '>Abuselog '+Args+'</a>';
    buildBlanckPreviewBar('<b><a href="'+data.url+'" target="_new">'+Page+'</a></b> '+Args, true, LogLink);
  }else{
    var Text = "";
    for(var param in Args){
        Text += param + " = " + Args[param] + " ; ";
    }
    buildBlanckPreviewBar('<b><a href="'+data.url+'" target="_new">'+Page+'</a></b> '+Text, true);
    var InputTD = getElementsByClass("mw-submit", LP, "td")[0];
    if(InputTD){
        var Input = InputTD.firstChild;
        var NewInput = document.createElement('input');
        NewInput.type = "button";
        NewInput.id = "Live_mw-submit";
        NewInput.value = Input.value + lrcMakeText("LIVELINK");
        NewInput.onclick = function(){ processFilter(this)}
        NewInput.onselect = function(){ processFilter(this)}
        Input.parentNode.insertBefore(NewInput, Input);
        Input.style.display = "none";
     }
  }
  updatePreviewWindowAttributes();
  LiveRC_RunHooks("AfterPreviewFilter", data);
}

function processFilter(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  liveFilter("AbuseLog", Params);
}

/* </source>

==== LiveDelete ====

<source lang="javascript"> */

function liveDelete(Title){
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveDelete", new Array(lrcEscapeStr(Title)), lrcGetUglyPageURL(Title, '&action=delete'), Title);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Suppr : <span style='color:red'>"+Title+"</span>...</b>");
  wpajax.http({url: lrcGetUglyPageURL(Title, '&action=delete'),
               onSuccess: getDelete, title:Title, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
}

function getDelete(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.title;
    var bC  = getPageContent(xmlreq, "deleteconfirm");
    if(!bC) bC = getPageContent(xmlreq, "mw-img-deleteconfirm");
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = "";
    PreviewWindow.appendChild(bC);
    var PreviewDiv = document.getElementById( 'divLivePreview' );
    lrcCloseAll();
    addClass(document.body, "LiveRCPreviewDisplayed");
    var Input = document.getElementById("wpConfirmB");
    if(!Input) Input = document.getElementById("mw-filedelete-submit");
    var NewInput = document.createElement('input');
    NewInput.type = "button";
    NewInput.id = "Live_wpConfirmB";
    NewInput.value = Input.value + lrcMakeText("LIVELINK");
    NewInput.onclick = function(){ processDelete(this)}
    NewInput.onselect = function(){ processDelete(this)}
    Input.parentNode.insertBefore(NewInput, Input);
    Input.style.display = "none";
    buildPreviewBar({
      "Mode"  : "Delete",
      "Url"   : lrcGetPageURL(c),
      "Page"  : c,
      "User1" : ""
    });
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewDelete", data);
}

function processDelete(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var ParamsInURL = new Array();
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    var action = Form.action;
    var Page = false;
    try{ Page = action.split("?title=")[1].split("&action=delete")[0]; }catch(e){ }
    try{ Page = decodeURIComponent(Page); }catch(e){ }
    var headers = new Array();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL.join("&"),
                  onSuccess:doneDelete,
                  page:Page
                });
}

function doneDelete(ajaxDelete, data){
    var bC  = getPageContent(ajaxDelete);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = bC.innerHTML;
    var page = data.page;
    var otherpage = lrcGetOtherPagename(page);
    if(data.data.indexOf("&wpWatch=1")!=-1){
        addPageToSuivi(page);
        addPageToSuivi(otherpage);
    }else{
        removePageFromSuivi(page);
        removePageFromSuivi(otherpage);
    }
}

/* </source>

==== LiveProtect ====

<source lang="javascript"> */

function liveProtect(Title){
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveProtect", new Array(lrcEscapeStr(Title)), wgServer + wgScript + '?title=' + Title + '&action=protect', Title);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Protect : <span style='color:red'>"+Title+"</span>...</b>");
  wpajax.http({url: lrcGetUglyPageURL(Title, '&action=protect'),
               onSuccess: getProtect, title:Title, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
}

function getProtect(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.title;
    var ProtectionForm  = getPageContent(xmlreq, "mw-Protect-Form");
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = "";
    PreviewWindow.appendChild(ProtectionForm);
    var PreviewDiv = document.getElementById( 'divLivePreview' );
    lrcCloseAll();
    addClass(document.body, "LiveRCPreviewDisplayed");
    buildPreviewBar({
      "Mode"  : "Protect",
      "Url"   : wgServer + wgScript + '?title=' + encodeURIComponent(c) + '&action=protect',
      "Page"  : c,
      "User1" : ""
    });
    modifyProtectform();
}

function modifyProtectform(){
    var Input = document.getElementById("mw-Protect-submit");
    var NewInput = document.createElement('input');
    NewInput.type = "button";
    NewInput.id = "Live_mw-Protect-submit";
    NewInput.value = Input.value + lrcMakeText("LIVELINK");
    NewInput.onclick = function(){ processProtect(this)}
    NewInput.onselect = function(){ processProtect(this)}
    Input.parentNode.insertBefore(NewInput, Input);
    Input.style.display = "none";
    var Cascade = document.getElementById('mwProtect-cascade');
    if(Cascade) Cascade.checked = false;
    var PreviewWindow = document.getElementById("livePreview");

    var ProtectEditSelect  = getElementWithId("mwProtect-level-edit", 'select', PreviewWindow);
    ProtectEditSelect.onchange = function(){ modifyProtectformUpdate(this); };
    var ProtectMoveSelect  = getElementWithId("mwProtect-level-move", 'select', PreviewWindow);
    ProtectMoveSelect.onchange = function(){ modifyProtectformUpdate(this); };

    var ProtectSet = getElementWithId("mwProtectSet", "table", PreviewWindow);
    var Target = ProtectSet.getElementsByTagName('tr')[0].nextSibling;
    var UnchainedInput = document.createElement('input');
    UnchainedInput.id = "mwProtectUnchained";
    UnchainedInput.type = "checkbox";
    UnchainedInput.onclick = function(){ ProtectUnchainedToggle(); };
    var UnchainedLabel = document.createElement('label');
    UnchainedLabel.setAttribute("for", "mwProtectUnchained");
    UnchainedLabel.innerHTML = lrcGetMediawikiMessage("protect-unchain-permissions", true);
    var UnchainedTr = document.createElement('tr');
    var UnchainedTd = document.createElement('td');
    UnchainedTd.appendChild(UnchainedInput);
    UnchainedTd.appendChild(UnchainedLabel);
    UnchainedTr.appendChild(UnchainedTd);
    Target.parentNode.insertBefore(UnchainedTr, Target);

    ProtectUnchainedToggle();
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewProtect", data);
}

function ProtectUnchainedToggle(){
    var PreviewWindow = document.getElementById("livePreview");
    var ProtectUnchainedInput  = getElementWithId("mwProtectUnchained", 'input', PreviewWindow);
        var ProtectMoveSelect  = getElementWithId("mwProtect-level-move", 'select', PreviewWindow);
        if(ProtectUnchainedInput.checked){
            ProtectMoveSelect.disabled = false;
        }else{
            ProtectMoveSelect.disabled = "disabled";
        }
}

function modifyProtectformUpdate(Select){
    var PreviewWindow = document.getElementById("livePreview");
    var ProtectEditSelect  = getElementWithId("mwProtect-level-edit", 'select', PreviewWindow);
    var ProtectMoveSelect  = getElementWithId("mwProtect-level-move", 'select', PreviewWindow);
    var ProtectUnchainedInput  = getElementWithId("mwProtectUnchained", 'input', PreviewWindow);
    if(!ProtectEditSelect ||!ProtectMoveSelect || !ProtectUnchainedInput ) return;
    if(ProtectUnchainedInput.checked) return;
    var Value = Select.value;
    ProtectEditSelect.value = Value;
    ProtectMoveSelect.value = Value;
}

function processProtect(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var ParamsInURL = new Array();
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    var action = Form.action;
    var Page = false;
    try{ Page = action.split("?title=")[1].split("&action=protect")[0]; }catch(e){ }
    try{ Page = decodeURIComponent(Page); }catch(e){ }
    var headers = new Array();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL.join("&"),
                  onSuccess:doneProtect,
                  page:Page,
                  params:Params
                });
}

function doneProtect(ajaxProtect, data){
    var bC  = getPageContent(ajaxProtect);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = bC.innerHTML;
    var page = data.page;
    var otherpage = lrcGetOtherPagename(page);
    if(data.data.indexOf("&mwProtectWatch=1")!=-1){
        addPageToSuivi(page);
        addPageToSuivi(otherpage);
    }else{
        removePageFromSuivi(page);
        removePageFromSuivi(otherpage);
    }
    var Page = data.page;
    var Params = data.params;
    var StableParam = Params["mwStabilityLevel"];
    if(typeof(StableParam)!="undefined" && StableParam!="none"){
      var PreviewBarArgs = {
        "Mode"  : "Article",
        "Url"   : lrcGetPageURL(data.page),
        "Page"  : data.page
      }
      modifyReviewform(PreviewBarArgs);
      buildPreviewBar(PreviewBarArgs);
    }
    updatePreviewWindowAttributes();
}

/* </source>

==== LiveBlock ====

<source lang="javascript"> */

function liveBlock(UserName){
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveBlock", new Array(lrcEscapeStr(UserName)), lrcGetPageURL('Special:Blockip/' + UserName), UserName);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Block : <span style='color:red'>"+UserName+"</span>...</b>");
  wpajax.http({url: lrcGetPageURL('Special:Blockip/' + UserName) ,
               onSuccess: getBlock, user:UserName, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
}

function getBlock(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.user;
    var bC  = getPageContent(xmlreq);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = bC.innerHTML;
    lrcCloseAll();
    addClass(document.body, "LiveRCPreviewDisplayed");
    var Input = getElementsByClass("mw-htmlform-submit", PreviewWindow, "input")[0];
    if(Input){
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.id = "Live_wpBlock";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processBlock(this)}
      NewInput.onselect = function(){ processBlock(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.style.display = "none";
    }
    buildPreviewBar({
      "Mode"  : "Block",
      "Url"   : wgServer + wgScript + '?title=Special:Blockip/' + encodeURIComponent(c),
      "Page"  : c,
      "User1" : c
    });
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewBlock", data);
}

function processBlock(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var ParamsInURL = new Array();
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    var duration;
    var user = Params["wpBlockAddress"];
    var durationName = "wpExpiry";
    if(Params["wpExpiry-other"]!="") durationName = "wpExpiry-other";
    var durationInput = getFormParams(Form, durationName);
    if(durationInput.tagName.toLowerCase() == 'input') duration = durationInput.value;
    if(durationInput.tagName.toLowerCase() == 'select'){
      var options = durationInput.getElementsByTagName('option');
      for(var a=0,l=options.length;a<l;a++){
        if(options[a].selected) duration = options[a].innerHTML;
      }
    }
    var action = Form.getAttribute("action");
    var headers = new Array();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL.join("&"),
                  onSuccess:doneBlock,
                  user:user,
                  duration:duration
                });
}

function doneBlock(ajaxBlock, data){
    var user = data.user;
    var userpage = lrcGetNamespaceName(2)+":"+user;
    var usertalk = lrcGetNamespaceName(3)+":"+user;
    if(data.data.indexOf("&wpWatch=1")!=-1){
        addPageToSuivi(userpage);
        addPageToSuivi(usertalk);
    }else{
        removePageFromSuivi(userpage);
        removePageFromSuivi(usertalk);
    }
    var bC  = getPageContent(ajaxBlock);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = bC.innerHTML;
    var user = data.user;
    var duration = data.duration;
    if(user && duration ){
        var Bar = PreviewBarTemplate;
        var UserLink = '<b>'+lrcGetUserLink(user)+' : '+lrcMakeText("BLOCKED")+'</b>';
        var BlockAverto = '<form id="LiveBlockAvertoForm"  onsubmit="doBlockAverto('+lrcEscapeStr(user)+'); return false;">'
                        + '<input id="BlockAvertoParam" type="text" value="'+lrcMakeText("BLOCKTEMPLATE")+'|'+duration+'" />'
                        + '<input id="LiveBlockAvertoLink" type="button" title="'+lrcMakeText("USERMSG")+' « '+User+' »" '
                        + 'onclick="doBlockAverto('+lrcEscapeStr(user)+'); return false;" '
                        + 'onselect="doBlockAverto('+lrcEscapeStr(user)+'); return false;" '
                        + 'title="'+lrcMakeText("BLOCKAVERTO")+' « '+user+' »" '
                        + 'value="'+lrcMakeText("BLOCKAVERTO")+'" />'
                        + '</small>';
        Bar = Bar.split('$1').join(UserLink);
        Bar = Bar.split('$2').join("&nbsp;");
        Bar = Bar.split('$3').join("&nbsp;");
        Bar = Bar.split('$4').join(BlockAverto);
        var TabContainer = document.getElementById("livePreviewTitle");
        if(TabContainer) TabContainer.innerHTML = Bar;
    }
}

function doBlockAverto(user){
  var message = document.getElementById("BlockAvertoParam").value;
  var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query&prop=info&intoken=edit&inprop=protection&titles='+lrcGetNamespaceName(3)+":"+encodeURIComponent(user)
  wpajax.http({ url: URL,
                onSuccess: postLiveAverto,
                user: user, message: message
  });
}

/* </source>

==== LiveEdit ====

<source lang="javascript"> */

function liveEdit(Title, Param, preload){
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveEdit", new Array(lrcEscapeStr(Title), (Param?lrcEscapeStr(""+Param):'\'\'')), wgServer + wgScript + '?title=' + Title + '&action=edit' + (Param ? Param : ""), Title + (Param ? ' Param="'+Param+'"' : ""));
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Edit : <span style='color:red'>"+Title+"</span>...</b>");
  wpajax.http({url: lrcGetUglyPageURL(Title, '&action=edit' + (Param ? Param : "")),
               onSuccess: getEdit, title:Title, preload:preload, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
}

function getEdit(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.title;
    var bC  = getPageContent(xmlreq);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = "";
    PreviewWindow.appendChild(bC);
    if(data.preload){
      var textarea = bC.getElementsByTagName('textarea')[0];
      if(textarea) textarea.value = data.preload;
    }
    lrcCloseAll();
    addClass(document.body, "LiveRCPreviewDisplayed");
    buildPreviewBar({
      "Mode"  : "Edit",
      "Url"   : wgServer + wgScript + '?title=' + encodeURIComponent(c) + '&action=edit',
      "Page"  : c,
      "User1" : ""
    });
    modifyEditform(bC);
}

function modifyEditform(Editform){
    var inputs = new Array("wpSave", "wpPreview", "wpDiff");
    for(var a=0,l=inputs.length;a<l;a++){
        var Input = document.getElementById(inputs[a]);
        var NewInput = document.createElement('input');
        NewInput.type = "button";
        NewInput.id = "Live_" + Input.id;
        NewInput.value = Input.value + lrcMakeText("LIVELINK");
        NewInput.onclick = function(){ processEdit(this)}
        NewInput.onselect = function(){ processEdit(this)}
        Input.parentNode.insertBefore(NewInput, Input);
        Input.style.display = "none";
    }
    currentFocused = document.getElementById("wpTextbox1"); // Do not change variable name : used by insertTags()
    currentFocused.rows = 10;
    try{
        var ToolbarButtons = document.getElementById('toolbar').getElementsByTagName('script')[0].innerHTML;
        eval(ToolbarButtons);
        mwSetupToolbar();
    }catch(e){ }
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewEdit", data);
}

function processEdit(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var ParamsInURL = new Array();
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    var Type = Input.id.replace(/.*_/g, "");
    ParamsInURL  = ParamsInURL.join("&")+"&"+Type+"=1";
    var action = Form.action;
    var Page = false;
    try{ Page = action.split("?title=")[1].split("&action=submit")[0]; }catch(e){ }
    try{ Page = decodeURIComponent(Page); }catch(e){ }
    var headers = new Array();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL,
                  onSuccess:doneEdit,
                  type:Type,
                  page:Page
                });
}

function doneEdit(ajaxEdit, data){
    var Type = data.type;
    var bC  = getPageContent(ajaxEdit);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = bC.innerHTML;
    if(getElementWithId("editform", 'form', bC)){
        modifyEditform();
        if(Type=="wpDiff") getElementWithId('wikiPreview', 'div', PreviewWindow).style.display = "";
    }else if(Type == "wpSave"){
        PreviewWindow.className = "";
        var page = data.page;
        var otherpage = lrcGetOtherPagename(page);
        if(data.data.indexOf("&wpWatchtis=1")!=-1){
            addPageToSuivi(page);
            addPageToSuivi(otherpage);
        }else{
            removePageFromSuivi(page);
            removePageFromSuivi(otherpage);
        }
        LiveRC_RunHooks("AfterPreviewArticle", data);
    }
}

/* </source>

==== LiveMove ====

<source lang="javascript"> */

function liveMove(Title){
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveMove", new Array(lrcEscapeStr(Title)), lrcGetPageURL("Special:Movepage/"+ Title), Title);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Move : <span style='color:red'>"+Title+"</span>...</b>");
  wpajax.http({url: lrcGetPageURL("Special:Movepage/"+ Title), onSuccess: getMove, title:Title, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
}

function getMove(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.title;
    var bC  = getPageContent(xmlreq, "movepage");
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = "";
    PreviewWindow.appendChild(bC);
    var PreviewDiv = document.getElementById( 'divLivePreview' );
    lrcCloseAll();
    addClass(document.body, "LiveRCPreviewDisplayed");
    var MoveSubmit = false;
    var Inputs = bC.getElementsByTagName("input");
    for(var a=0,l=Inputs.length;a<l;a++){
        if(Inputs[a].name && Inputs[a].name == "wpMove") MoveSubmit = Inputs[a];
    }
    if(MoveSubmit){
        var NewInput = document.createElement('input');
        NewInput.type = "button";
        NewInput.id = "Live_wpMove";
        NewInput.name = "Live_wpMove";
        NewInput.value = MoveSubmit.value + lrcMakeText("LIVELINK");
        NewInput.onclick = function(){ processMove(this)}
        NewInput.onselect = function(){ processMove(this)}
        MoveSubmit.parentNode.insertBefore(NewInput, MoveSubmit);
        MoveSubmit.style.display = "none";

    }
    buildPreviewBar({
      "Mode"  : "Move",
      "Url"   : lrcGetPageURL('Special:Movepage/'+ c),
      "Page"  : c,
      "User1" : ""
    });
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewMove", data);
}

function processMove(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var ParamsInURL = new Array();
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    var action = Form.action;
    var OldPage = Params["wpOldTitle"];
    var NewPage = Params["wpNewTitle"];
    var headers = new Array();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL.join("&"),
                  onSuccess:doneMove,
                  oldpage:OldPage,
                  newpage:NewPage
                });
}

function doneMove(ajaxMove, Type){
    var bC  = getPageContent(ajaxMove);
    var PreviewWindow = document.getElementById("livePreview");
    var MoveForm = getElementWithId("movepage", 'form', PreviewWindow)
    if(MoveForm){
        var OldTitle = document.getElementsByName("wpOldTitle")[0].value;
        getMove(ajaxMove, OldTitle);
    }else{
        PreviewWindow.innerHTML = bC.innerHTML;
        var oldpage = data.oldpage;
        var oldotherpage = lrcGetOtherPagename(oldpage);
        var newpage = data.newpage;
        var newotherpage = lrcGetOtherPagename(newpage);
        if(data.data.indexOf("&wpWatch=1")!=-1){
            addPageToSuivi(oldpage);
            addPageToSuivi(oldotherpage);
            addPageToSuivi(newpage);
            addPageToSuivi(newotherpage);
        }else{
            removePageFromSuivi(oldpage);
            removePageFromSuivi(oldotherpage);
            removePageFromSuivi(newpage);
            removePageFromSuivi(newotherpage);
        }
    }
}

/* </source>

==== LiveRevisiondelete ====

<source lang="javascript"> */

function liveRevisiondelete(Page,Id){
    LiveRC_Config["NextPreviewIndex"]++;
    var URLids = "";
    var Histids = "";
    var HistPamamids = Id;
    if(typeof(Id)=='object'){
        URLids = lrcGetUglyPageURL(Page, '&action=historysubmit&revisiondelete=1&diff=prev&oldid='+Id[0]);
        HistPamamids = new Array();
        for(var Num in Id){
            HistPamamids.push(Num+":"+Id[Num]);
            URLids += "&ids[" + Id[Num] + "]=1";
            Histids += Id[Num] + " ";
        }
        HistPamamids = "{"+HistPamamids.join(",")+"}";
    }else{
        URLids = lrcGetUglyPageURL('Special:Revisiondelete', '&type=revision&target='+encodeURIComponent(Page)+"&");
        URLids += 'ids='+Id;
        Histids = Id;
    }
    lrcAddToHistory("liveRevisiondelete", new Array(lrcEscapeStr(Page), HistPamamids), URLids, Page + " id="+Histids);
    buildBlanckPreviewBar("<b style='text-decoration: blink;'>Revision delete : <span style='color:red'>"+Page+" id="+Histids+"</span>...</b>")
    wpajax.http({ url: URLids, onSuccess: getRevisiondelete, mpage: Page, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
}

function getRevisiondelete(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.mpage;
    var bC  = getPageContent(xmlreq);
    var PreviewDiv = document.getElementById( 'livePreview' );
    PreviewDiv.innerHTML = bC.innerHTML;
    if (PreviewDiv.innerHTML == "undefined") PreviewDiv.innerHTML = bC.xml;
    lrcCloseAll();
    addClass(document.body, "LiveRCPreviewDisplayed");
    buildPreviewBar({
      "Mode"  : "Revisiondelete",
      "Url"   : lrcGetPageURL(c),
      "Page"  : c,
      "User1" : "",
      "User2" : "",
      "patrolledDiff": true
    });
    getRevisiondelete_ModifyInputs();
}

function getRevisiondelete_ModifyInputs(){
    var Form = document.getElementById("mw-revdel-form-revisions");
    if(!Form) return;
    var Input = document.getElementsByName("wpSubmit")[0];
    if(Input){
        var NewInput = document.createElement('input');
        NewInput.type = "button";
        NewInput.id = "Live_Revisiondelete";
        NewInput.value = Input.value + lrcMakeText("LIVELINK");
        NewInput.onclick = function(){ processRevisiondelete(this)}
        NewInput.onselect = function(){ processRevisiondelete(this)}
        Input.parentNode.insertBefore(NewInput, Input);
        Input.style.display = "none";
    }
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewRevisiondelete", data);
}

function processRevisiondelete(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    if(!Params) return;
    var Page = decodeURIComponent(Params["target"]);
    var Id = Params["ids"];
    var action = Form.action;
    var headers = new Array();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    buildBlanckPreviewBar("<b style='text-decoration: blink;'>Revision delete : <span style='color:red'>"+Page+" id="+Id+"</span>...</b>")
    var ParamsInURL = new Array();
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL.join("&")+"&wpSubmit=1",
                  onSuccess:doneRevisiondelete,
                  mpage:Page,
                  mid:Id
                });
}

function doneRevisiondelete(xmlreq, data){
    var Page = data.mpage;
    var Id = data.mid;
    var bC  = getPageContent(xmlreq);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = bC.innerHTML;
    buildPreviewBar({
      "Mode"            : "Revisiondelete",
      "Url"             : lrcGetPageURL(Page),
      "Page"            : Page,
      "Oldid"           : Id,
      "User1"           : "",
      "User2"           : "",
      "patrolledDiff"   : true,
      "RevisiondeleteOK": true
    });
    getRevisiondelete_ModifyInputs();
}

/* </source>

==== LiveWhatLinkshere ====

<source lang="javascript"> */

function liveWhatlinkshere(page , params) {
  LiveRC_Config["NextPreviewIndex"]++;
  var URLParams = "";
  var HistoryParams = new Array();
  for(var param in params){
    if(params[param]){
      URLParams += "&"+ param + "=" + encodeURIComponent(params[param]);
      HistoryParams.push(param + ":" + lrcEscapeStr(""+params[param]));
    }
  }
  lrcAddToHistory("liveWhatlinkshere", new Array(lrcEscapeStr(page), "{"+HistoryParams.join(",")+"}"),
lrcGetUglyPageURL('Special:Whatlinkshere/'+page, URLParams), page + " : " + HistoryParams.join(", "));
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Whatlinkshere <span style='color:red'>"+page+"</span>...</b>");
  wpajax.http({url:lrcGetUglyPageURL('Special:Whatlinkshere/'+page, URLParams), onSuccess: getWhatlinkshere, page:page, PreviewIndex:LiveRC_Config["NextPreviewIndex"] });
}

function getWhatlinkshere(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(xmlreq);
  var c = data.page;
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  addClass(document.body, "LiveRCPreviewDisplayed");
    buildPreviewBar({
      "Mode"  : "Whatlinkshere",
      "Url"   : lrcGetPageURL(c),
      "Page"  : c,
      "User1" : "",
      "User2" : ""
    });
  modifyWhatlinkshereInput(data.url);
  LiveRC_RunHooks("AfterPreviewWhatlinkshere", data);
}

function modifyWhatlinkshereInput(url){
  var LP = document.getElementById( 'livePreview' );
  var Form = LP.getElementsByTagName('form')[0];
  var Inputs = Form.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    if(Inputs[a].type && Inputs[a].type === "submit"){
      var Input = Inputs[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processWhatlinkshere(this)}
      NewInput.onselect = function(){ processWhatlinkshere(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.style.display = "none";
    }
  }
  var NewFiltersContainer = document.createElement('p');
  Form.getElementsByTagName('fieldset')[0].appendChild(NewFiltersContainer);
  var FilterFieldset = LP.getElementsByTagName('fieldset')[1];
  if(FilterFieldset){
    var FilterLegend = FilterFieldset.getElementsByTagName('legend')[0];
    NewFiltersContainer.appendChild(document.createTextNode(lrcGetMediawikiMessage("whatlinkshere-filters", true)+' : '));
    FilterLegend.parentNode.removeChild(FilterLegend);
    var FilterLinks = FilterFieldset.getElementsByTagName('a');
    var FiltersTexts = getTextContent(FilterFieldset).split('|');
    var params = {
      "hidetrans"  : "whatlinkshere-hidetrans"  ,
      "hidelinks"  : "whatlinkshere-hidelinks" ,
      "hideredirs" : "whatlinkshere-hideredirs"  ,
      "hideimages" : "whatlinkshere-hideimages"
    };
    for(var param in params){
      var ThisParam = param;
      var ThisParamChecked = ( (lrcGetArgFromURL(url, ThisParam) === '1') ? true : false );
      var NewInput = document.createElement('input');
      NewInput.type = "checkbox";
      NewInput.id = ThisParam;
      NewInput.name = ThisParam;
      NewInput.value = 1;
      if(ThisParamChecked) NewInput.checked = "checked";
      var NewLabel = document.createElement('label')
      NewLabel.setAttribute('for', ThisParam);
      NewLabel.innerHTML = lrcGetMediawikiMessage(params[param], true).split("$1").join(lrcGetMediawikiMessage("hide", true));
      NewFiltersContainer.appendChild(NewInput);
      NewFiltersContainer.appendChild(NewLabel);
      NewFiltersContainer.appendChild(document.createTextNode(" • "));
    }
    FilterFieldset.parentNode.removeChild(FilterFieldset);
  }
  updatePreviewWindowAttributes(NewLabel);
}

function processWhatlinkshere(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var page = Params["target"];
  liveWhatlinkshere(page, Params);
}

/* </source>

==== LiveFeedback ====

<source lang="javascript"> */
  
function liveFeedback(Args){
  LiveRC_Config["NextPreviewIndex"]++;
  var title, user, token;
  if(Args){
    title = Args.title;
    user = Args.user;
    token = Args.token;
  }
  var longtitle = 'Special:Articlefeedbackv5' + (title ? '/'+title + (token ? '/'+token : '' ) :'');
  var HistoryParams = new Array();
    for(var param in Args){
      if(Args[param]){
        HistoryParams.push(param+":"+lrcEscapeStr(Args[param]));
      }
    }
  lrcAddToHistory("liveFeedback", new Array("{"+HistoryParams.join(",")+"}"), lrcGetPageURL(longtitle), longtitle);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Feedback : <span style='color:red'>"+(title?title:"List")+"</span>...</b>");
  wpajax.http({ url: lrcGetPageURL(longtitle),
                onSuccess: getFeedback, args:Args, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
}

function getFeedback(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var title, user, token;
  var Args = data.args;
  if(Args){
    title = Args.title;
    user = Args.user;
    token = Args.token;
    Args.url = data.url;
  }
  var LP = document.getElementById( 'livePreview' );

  var bC = getPageContent(xmlreq); 
  LP.innerHTML = bC.innerHTML;

  lrcmanageFeedbackElements(LP, Args);

  lrcCloseAll();
  addClass(document.body, "LiveRCPreviewDisplayed");
  buildFeedbackPreviewBar(Args, LP);
  updatePreviewWindowAttributes();
  LiveRC_RunHooks("AfterPreviewFeedback", data);
}


function lrcmanageFeedbackElements(LP, Args){
  title = Args.title;
  user = Args.user;
  token = Args.token;

  var CommentLinks = getElementsByClass("articleFeedbackv5-feedback", LP, "div"); 
  for(var a=0,l=CommentLinks.length;a<l;a++){
    var ThisCommentLinks = CommentLinks[a];  
    liveFeedback_manageCommentLinks(ThisCommentLinks, Args);
  }

  liveFeedback_manageUserLinks(LP);

  var ActivityLogDiv = getElementsByClass("articleFeedbackv5-feedback-permalink-activity", LP, "div");
  for(var a=0,l=ActivityLogDiv.length;a<l;a++){
    var Container = ActivityLogDiv[a];
    var ContainerLinks = Container.getElementsByTagName("a");
    for(var b=0,m=ContainerLinks.length;b<m;b++){
      var ThisLink = ContainerLinks[b];
      var ThisLinkAction = ThisLink.getAttribute("data-action");
      if(!ThisLinkAction) continue;
      if(ThisLinkAction == "activity2"){
        ThisLink.setAttribute("data-token", token);
        ThisLink.setAttribute("data-title", title);
        ThisLink.onclick = function(){
          var ChangedLink = this;
          var thislinktitle = ChangedLink.getAttribute("data-title");
          var thislinktoken = ChangedLink.getAttribute("data-token");
          if(!thislinktitle || !thislinktoken) return false;
          var thislinkcontinue = ChangedLink.getAttribute("data-continue");
          if(!thislinkcontinue) thislinkcontinue = false;
          this.href= "javascript:;";
          liveFeedback_liveFlagActivity2(this, thislinktoken, thislinktitle, thislinkcontinue);
          return false;
        }
      }
    }
  }

  var OldRevisionLinks = getElementsByClass("articleFeedbackv5-old-revision", LP, "p"); 
  for(var a=0,l=OldRevisionLinks.length;a<l;a++){   
    var OldRevisionLink = OldRevisionLinks[a].getElementsByTagName('a')[0];
    if(!OldRevisionLink) continue;
    OldRevisionLink.onclick = function(){
      var thisoldid = lrcGetArgFromURL(this.href, "oldid");
      var thispage = lrcGetArgFromURL(this.href, "title");
      this.href = "javascript:;";
      liveArticle(thispage, false, thisoldid);
      return false;
    }
  }

  // éléments masqués car redondants avec la barre de titre

  var HeaderLinks = getElementWithId( "articleFeedbackv5-header-links", "div", LP);
  if(HeaderLinks) HeaderLinks.style.display = "none";
  if(token && HeaderLinks) HeaderLinks.parentNode.style.display = "none";

  var FilterControls = getElementWithId( "articleFeedbackv5-sort-filter-controls", "div", LP); 
  if(FilterControls) FilterControls.style.display = "none";

  var Footer = getElementWithId( "articleFeedbackv5-footer", "div", LP); 
  if(Footer) Footer.style.display = "none";

  var GoBackLinks = getElementsByClass("articleFeedbackv5-feedback-permalink-goback", LP, "div");
  for(var a=0,l=GoBackLinks.length;a<l;a++){
    GoBackLinks[a].style.display = "none";
  }

  var CentralGoBackLinks = getElementsByClass("articleFeedbackv5-feedback-central-goback", LP, "div");
  for(var a=0,l=CentralGoBackLinks.length;a<l;a++){
    CentralGoBackLinks[a].style.display = "none";
  }
}

function buildFeedbackPreviewBar(Args, LP){
  var title, user, token, url;
  if(Args){
    title = Args.title;
    user = Args.user;
    token = Args.token;
    url = Args.url;
  }
  var TextHG = "", TextHD = "", TextBG = "", TextBD = "";
  if(title) TextHG = '<b><a href="'+url+'" target="_new">'+title+'</a></b>';
  else TextHG = '<b><a href="'+lrcGetPageURL(lrcGetNamespaceName(-1)+':Articlefeedbackv5')+'" target="_new">'+lrcGetNamespaceName(-1)+':Articlefeedbackv5</a></b>';
  if(title){
    if(token){
      TextHD += '<small><a href="'+lrcGetPageURL(lrcGetNamespaceName(-1)+':Articlefeedbackv5/'+title)+'" '
              + 'onClick="liveFeedback({title:'+lrcEscapeStr(title)+'}); return false;" '
              + 'title="'+lrcGetNamespaceName(-1)+':Articlefeedbackv5/'+title
              + '">'+lrcGetMediawikiMessage('articlefeedbackv5-special-pagetitle', true).split("$1").join('« '+title+' »')
              + '</a></small>'
              + '&nbsp;—&nbsp;';
    }
    TextHD += '<small><a href="'+lrcGetPageURL(lrcGetNamespaceName(-1)+':Articlefeedbackv5')+'" '
            + 'onClick="liveFeedback({}); return false;" '
            + 'title="'+lrcGetNamespaceName(-1)+':Articlefeedbackv5'
            + '">'+lrcGetMediawikiMessage('articlefeedbackv5-special-central-pagetitle', true)
            + '</a></small>';
 
    var PageNSNumber = getNamespaceInfoFromPage(title);
    var PageName = getNamespaceInfoFromPage(title, "PageName");
    if(PageNSNumber%2==0){
      var ArticlePageName = (PageNSNumber == 0 ? PageName : lrcGetNamespaceName(PageNSNumber)+":"+PageName);
      var TalkPageName = lrcGetNamespaceName((PageNSNumber+1))+":"+PageName;
    }else{
      var ArticlePageName = (PageNSNumber == 1 ? PageName : lrcGetNamespaceName((PageNSNumber-1))+":"+PageName);
      var TalkPageName = lrcGetNamespaceName((PageNSNumber))+":"+PageName;
    }
    TextBGLinks = new Array();
    TextBGLinks[0] = '<a href="'+lrcGetPageURL(ArticlePageName)+'" '
                          + 'onClick="liveArticle('+lrcEscapeStr(ArticlePageName)+'); return false;" '
                          + 'title="'+ArticlePageName+'" '
                          + '>'+lrcMakeText("SUBJECT_TIP")+'</a>';
    TextBGLinks[1] = '<a href="'+lrcGetPageURL(TalkPageName)+'" '
                          + 'onClick="liveArticle('+lrcEscapeStr(TalkPageName)+'); return false;" '
                          + 'title="'+TalkPageName+'" '
                          + '>'+lrcMakeText("TALK_TIP")+'</a>';
    TextBGLinks[2] = lrcCreateWatchPageLink(title, LiveRC_Config["Suivi"][title], 1);
    var HeaderLinks = getElementWithId( "articleFeedbackv5-header-links", "div", LP);
    if(HeaderLinks){
      var HelpLink = HeaderLinks.getElementsByTagName("a")[0];
      var HelpHref = HelpLink.href;
      try{ HelpHref = decodeURIComponent(HelpHref); }catch(e){ };
      var HelpTitle = HelpHref.split("/wiki/")[1];
      if(HelpTitle){
        HelpTitle = HelpTitle.split("#")[0];
        TextBGLinks[3] = '<a href="'+HelpHref + '" '
                       + 'onClick="liveArticle('+lrcEscapeStr(HelpTitle)+'); return false;" '
                       + 'title="'+lrcMakeText("HELP_TIP")+'" '
                       + '>'+lrcMakeText("HELP_SHORT")+'</a>';
      }
    } 
    TextBG = '<small><ul><li>'+TextBGLinks.join("</li><li>")+'</li></ul></small>';
  }
  buildBlanckPreviewBar(TextHG, true, TextHD, TextBG, TextBD);
}

 
function liveFeedback_manageCommentLinks(ThisComment, Args){
  var title, user, token, url;
  if(Args){
    title = Args.title;
    user = Args.user;
    token = Args.token;
    url = Args.url;
  }
  var dataid = ThisComment.getAttribute("data-id");
  var datapageid = ThisComment.getAttribute("data-pageid");

  // Liens à gauche : commentateur, page de feedback, page et détails

  var ThisCommentatorLinks = getElementsByClass("articleFeedbackv5-comment-head", ThisComment, "div")[0];
  var CommentatorLine = ThisCommentatorLinks.getElementsByTagName('h3')[0];
  var CommentatorLineLinks = CommentatorLine.getElementsByTagName('a');
  var CommentatorLineLinksLength = CommentatorLineLinks.length;
  var CommentatorLink, FeedbackPageLink, ThePageLink, DetailLinkSpan;
  DetailLinkSpan = getElementsByClass("articleFeedbackv5-comment-details-link", ThisCommentatorLinks, "span")[0];
  if(token){
    CommentatorLink = CommentatorLineLinks[0];
  }else if(title){
    CommentatorLink = CommentatorLineLinks[0]; 
  }else{
    CommentatorLink = CommentatorLineLinks[(CommentatorLineLinksLength-3)];
    FeedbackPageLink = CommentatorLineLinks[(CommentatorLineLinksLength-2)];
    ThePageLink = CommentatorLineLinks[(CommentatorLineLinksLength-1)];
  }
  if(!CommentatorLink){
    var AnnonLine = getElementsByClass("articleFeedbackv5-comment-anon-message", ThisCommentatorLinks, "p")[0];
    if(AnnonLine) CommentatorLink = AnnonLine.getElementsByTagName('a')[0];
  }
  if(CommentatorLink){
    CommentatorLink.onclick = function(){
      var thisUser = this.title;
      var regex = new RegExp("\\[\\[" + lrcGetNamespaceName(-1) + ":" + lrcGetMediawikiMessage("mycontris") + "\\/([^\\]\\|]+)", "g");
      var match = regex.exec(thisUser);
      if(!match){
        var regex2 = new RegExp(/\[\[Sp[ée]cial:Contributions\/([^\]\|]+)/g);
        match = regex2.exec(thisUser);
      }
      if (!match) {
        var regex3 = new RegExp(/\[\[Specjalna:Wkład\/([^\]\|]+)/g);
        match = regex3.exec(thisUser);
      }
      if (match) {
        thisUser = match[1];
      }
      if(UserIsIP(thisUser)) {
        liveContrib(thisUser);
      }else{
        liveArticle(thisUser);
      }
      this.href= "javascript:;";
      return false;
    }
  }
  if(FeedbackPageLink){
    FeedbackPageLink.onclick = function(){
      var FeedbackPageLinkTitle = this.title;
      FeedbackPageLinkTitle = FeedbackPageLinkTitle.split("rticleFeedbackv5/")[1];
      if(FeedbackPageLinkTitle){
        liveFeedback({title:FeedbackPageLinkTitle})
      }
      this.href = "javascript:;"; 
      return false;
    }
  }
  if(ThePageLink){
    ThePageLink.onclick = function(){
      var ThePageLinkTitle = this.title;
      if(ThePageLinkTitle) liveArticle(ThePageLinkTitle);
      this.href = "javascript:;";        
      return false;
    }
  }
  if(DetailLinkSpan){   
    var DetailLink = DetailLinkSpan.getElementsByTagName('a')[0];
    if(DetailLink){
      DetailLink.onclick = function(){
        var thistitle = this.title;      
        var thistoken = thistitle.replace(/.*\//g, "");
        var thispage = thistitle.split("/"+thistoken).join("").replace(/.*rticleFeedbackv5\//g, "");
        this.href = "javascript:;";
        liveFeedback({title:thispage, token:thistoken}); 
        return false;
      }
    }
  }

  // Lien "plus"

  var ToggleLink = getElementsByClass("articleFeedbackv5-comment-toggle", ThisComment, "a")[0];
  if(ToggleLink){
    ToggleLink.href = "javascript:;";
    ToggleLink.onclick = function(){
      var togglelink = this;
      var commentfull = togglelink.previousSibling;
      var commentshort = commentfull.previousSibling;
      commentfull.className = "articleFeedbackv5-comment-short";
      commentshort.parentNode.removeChild(commentshort);
      togglelink.parentNode.removeChild(togglelink);
    }
  }

  // Liens à droite : marquage, discussion, activité

  var FeedbackToolsContainer = getElementsByClass("articleFeedbackv5-feedback-tools", ThisComment, "div")[0]; 
  var ContainerLinks = FeedbackToolsContainer.getElementsByTagName("a");
  for(var b=0,m=ContainerLinks.length;b<m;b++){
    var ThisLink = ContainerLinks[b];
    var ThisLinkAction = ThisLink.getAttribute("data-action");
    if(!ThisLinkAction) continue;
    if(ThisLinkAction != "discuss" && ThisLinkAction != "activity" && ThisLinkAction != "activity2" && !hasClass(ThisLink, "articleFeedbackv5-note-link")){
      ThisLink.onclick = function(){
        var ChangedLink = this;
        var flag = ChangedLink.getAttribute("data-action");
        if(!flag) return false;
        var id = ChangedLink.id.split(ChangedLink.className+"-").join("");
        this.href= "javascript:;";
        liveFeedback_FlagComment(dataid, datapageid, flag, Args);
        return false;
      }
    }else if(ThisLinkAction == "discuss"){
      ThisLink.onclick = function(){
        var ChangedLink = this;
        var sectionpreloadtitle = ChangedLink.getAttribute("data-section-title");
        var sectionpreloadcontent = ChangedLink.getAttribute("data-section-content");
        var ChangedLinkTitle = decodeURIComponent(ChangedLink.href).unhtmlize();
        ChangedLinkTitle = ChangedLinkTitle.split("&action=")[0];
        ChangedLinkTitle = ChangedLinkTitle.split("?title=")[1];
        if(!ChangedLinkTitle || !sectionpreloadtitle || !sectionpreloadcontent) return false;
        sectionpreloadtitle = sectionpreloadtitle.unhtmlize();
        sectionpreloadcontent = sectionpreloadcontent.unhtmlize();
        var preload = "== " +sectionpreloadtitle+" ==\n\n" + sectionpreloadcontent;
        liveEdit(ChangedLinkTitle, "&section=new", preload );
        this.href = "javascript:;";
        return false;
      }
    }else if(ThisLinkAction == "activity"){ // ########### TODO
      ThisLink.style.display = "none";
      continue; // ---------------------------------- NOT READY YET
      ThisLink.setAttribute("data-token", token);
      ThisLink.setAttribute("data-title", title);
      ThisLink.onclick = function(){
        var ChangedLink = this;
        var thislinktitle = ChangedLink.getAttribute("data-title");
        var thislinktoken = ChangedLink.getAttribute("data-token");
        if(!thislinktitle || !thislinktoken) return false;
        var thislinkcontinue = ChangedLink.getAttribute("data-continue");
        if(!thislinkcontinue) thislinkcontinue = false;
        this.href= "javascript:;";
        liveFeedback_liveFlagActivity(this, thislinktoken, thislinktitle, thislinkcontinue);
        return false;
      }

    }else if(hasClass(ThisLink, "articleFeedbackv5-note-link")){
      ThisLink.onclick = function(){
        var ChangedLink = this;        
        var Text = ChangedLink.title;
        var PromptResultFunction = function(promptreturn){
          var NoteText = promptreturn;
          if(!NoteText) return false;
          var logidparam = ChangedLink.getAttribute("data-log-id");
          var actionparam = ChangedLink.getAttribute("data-action");
          var feedbackidparam = ChangedLink.id.split("articleFeedbackv5-note-link-").join("");
          liveFeedback_FlagAddNote(feedbackidparam, logidparam, datapageid, actionparam, NoteText, Args);
          ChangedLink.href= "javascript:;";
        }
        LiveRC_prompt(Text, PromptResultFunction);
        return false;
      }
    }else{
      continue;
    }
  }
}

function liveFeedback_manageUserLinks(Container){
  if(!Container) return;
  var UserLinks = getElementsByClass("mw-userlink", Container, "a"); 
  for(var a=0,l=UserLinks.length;a<l;a++){
    var UserLink = UserLinks[a];
    UserLink.onclick = function(){
      var thisUser = this.title;
      var regex = new RegExp("\\[\\[" + lrcGetNamespaceName(-1) + ":" + lrcGetMediawikiMessage("mycontris") + "\\/([^\\]\\|]+)", "g");
      var match = regex.exec(thisUser);
      if(!match){
        var regex2 = new RegExp(/\[\[Sp[ée]cial:Contributions\/([^\]\|]+)/g);
        match = regex2.exec(thisUser);
      }
      if (!match) {
        var regex3 = new RegExp(/\[\[Specjalna:Wkład\/([^\]\|]+)/g);
        match = regex3.exec(thisUser);
      }
      if (match) {
        thisUser = match[1];
      }
      var regexpIP4 = /^\d{1,3}\.\d{1,3}.\d{1,3}.\d{1,3}$/;
      var regexpIP6 = /\w{1,4}\:\w{1,4}:\w{1,4}:\w{1,4}:\w{1,4}:\w{1,4}:\w{1,4}:\w{1,4}/;
      if (regexpIP4.exec(thisUser) || regexpIP6.exec(thisUser)) {
        liveContrib(thisUser);
      }else{
        liveArticle(thisUser);
      }
      this.href= "javascript:;";
      return false;
    }
  }
}

function liveFeedback_FlagComment(feedbackid, pageid, flag, Args){
  var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=articlefeedbackv5-flag-feedback'
          + '&feedbackid=' + feedbackid
          + '&pageid=' + pageid
          + '&flagtype=' + flag;

  var headers = new Array();
  headers['Content-Type'] = 'application/x-www-form-urlencoded';
  wpajax.http({url:URL, 
               onSuccess: liveFeedback_FlagCommentDone,
               method: "POST",
               headers: headers, 
               feedbackid:feedbackid, 
               pageid:pageid, 
               flag:flag,
               args:Args
  });
}

function liveFeedback_FlagCommentDone(xmlreq, data){
  var LP = document.getElementById('livePreview');
  var ObjetXML = xmlreq.responseXML;
  var FeedbackReturn = ObjetXML.getElementsByTagName('articlefeedbackv5-flag-feedback')[0];
  if(!FeedbackReturn || !LP) return;
  var Rendertext = FeedbackReturn.getAttribute('render').unhtmlize();  

  var reg = new RegExp("data-section-[^=]*=\"[^data\-section]*\" data-section", "g");
  var Matches = Rendertext.match(reg);
  if(Matches != null){
    for(var a=0, l=Matches.length;a<l;a++){
      var ThisMatch = Matches[a].htmlize();
      var Quotes = ThisMatch.match(/&quot;/g);
      if(Quotes!=null){ 
        ThisMatch = ThisMatch.replace(Quotes[(Quotes.length-1)], '"');
        ThisMatch = ThisMatch.replace(Quotes[0], '"');
      }
      Rendertext = Rendertext.replace(Matches[a],ThisMatch);
    }  
  }

  var OldTemp = document.getElementById("TempDiv");
  if(OldTemp) OldTemp.parentNode.removeChild(OldTemp);
  var Temp = document.createElement('div');
  Temp.id = "TempDiv";
  Temp.style.display = "none";
  document.body.appendChild(Temp);
  Temp.innerHTML = Rendertext;
  var NewFeedBack = getElementsByClass("articleFeedbackv5-feedback", Temp, "div")[0];
  var OldFeedBacks = getElementsByClass("articleFeedbackv5-feedback", LP, "div");
  for(var a=0,l=OldFeedBacks.length;a<l;a++){
    var OldFeedback = OldFeedBacks[a];
    var DataID = OldFeedback.getAttribute("data-id");
    var DataPageID = OldFeedback.getAttribute("data-pageid");
    if(DataID==data.feedbackid && DataPageID == data.pageid){
      OldFeedback.innerHTML = NewFeedBack.innerHTML;
      liveFeedback_manageCommentLinks(OldFeedback, data.args);
      liveFeedback_manageUserLinks(OldFeedback);
    }
  }
}

function liveFeedback_FlagAddNote(feedbackid, logid, pageid, flagtype, note, Args){
  var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=articlefeedbackv5-add-flag-note'
          + '&feedbackid=' + feedbackid
          + '&logid=' + logid
          + '&pageid=' + pageid
          + '&flagtype=' + flagtype
          + '&note=' + note;
   
  var headers = new Array();
  headers['Content-Type'] = 'application/x-www-form-urlencoded';
  wpajax.http({url:URL, 
               onSuccess: liveFeedback_FlagAddNoteDone,
               method: "POST",
               headers: headers, 
               feedbackid:feedbackid, 
               logid:logid, 
               pageid:pageid, 
               flagtype:flagtype,
               note:note,
               args:Args
  });
}

// 

function liveFeedback_FlagAddNoteDone(xmlreq, data){
  var LP = document.getElementById('livePreview');
  var ObjetXML = xmlreq.responseXML;
  var FeedbackReturn = ObjetXML.getElementsByTagName('articlefeedbackv5-flag-feedback')[0];
  if(!FeedbackReturn || !LP) return;
  var Rendertext = FeedbackReturn.getAttribute('render').unhtmlize();  

  var reg = new RegExp("data-section-[^=]*=\"[^data\-section]*\" data-section", "g");
  var Matches = Rendertext.match(reg);
  if(Matches != null){
    for(var a=0, l=Matches.length;a<l;a++){
      var ThisMatch = Matches[a].htmlize();
      var Quotes = ThisMatch.match(/&quot;/g);
      if(Quotes!=null){ 
        ThisMatch = ThisMatch.replace(Quotes[(Quotes.length-1)], '"');
        ThisMatch = ThisMatch.replace(Quotes[0], '"');
      }
      Rendertext = Rendertext.replace(Matches[a],ThisMatch);
    }  
  }

  var OldTemp = document.getElementById("TempDiv");
  if(OldTemp) OldTemp.parentNode.removeChild(OldTemp);
  var Temp = document.createElement('div');
  Temp.id = "TempDiv";
  Temp.style.display = "none";
  document.body.appendChild(Temp);
  Temp.innerHTML = Rendertext;
  var NewFeedBack = getElementsByClass("articleFeedbackv5-feedback", Temp, "div")[0];
  var OldFeedBacks = getElementsByClass("articleFeedbackv5-feedback", LP, "div");
  for(var a=0,l=OldFeedBacks.length;a<l;a++){
    var OldFeedback = OldFeedBacks[a];
    var DataID = OldFeedback.getAttribute("data-id");
    var DataPageID = OldFeedback.getAttribute("data-pageid");
    if(DataID==data.feedbackid && DataPageID == data.pageid){
      OldFeedback.innerHTML = NewFeedBack.innerHTML;
      liveFeedback_manageCommentLinks(OldFeedback, data.args);
      liveFeedback_manageUserLinks(OldFeedback);
    }
  }
}


 // ---------------------------------------------------------------------------------- TODO
function liveFeedback_liveFlagActivity(Link, token, title, paramcontinue){
  var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query&list=articlefeedbackv5-view-activity'
          + '&aafeedbackid=' + token
          + '&aatitle=' + encodeURIComponent(title)
          + '&aalimit=' + LiveRC_Config["UserInfos"].APIlimit
          + (paramcontinue ? "&aacontinue=" + paramcontinue : ""); 
  wpajax.http({url:URL, onSuccess: liveFeedback_getFlagActivity, title:title, token:token, link:Link, paramcontinue:paramcontinue});
}

function liveFeedback_getFlagActivity(xmlreq, data){
  var ObjetXML = xmlreq.responseXML;
  var Activity = ObjetXML.getElementsByTagName("articlefeedbackv5-view-activity");
  Activity = Activity[(Activity.length-1)];
  if(!Activity) return;
  var Text = Activity.getAttribute("activity");
  Text = Text.unhtmlize();
  
  var MoreInfos = ObjetXML.getElementsByTagName("query-continue")[0];
  if(MoreInfos && data.link){
    data.link.setAttribute("data-continue", MoreInfos.firstChild.getAttribute("aacontinue"));
  }else{
    data.link.onclick = null;
  }
  var MenuId = "_afbActivity_"+data.token;  
  LiveRC_createPopUp({content:Text,title:"", MenuId:MenuId});
} // ----------------------------------------------------------------------------------
 


function liveFeedback_liveFlagActivity2(Link, token, title, paramcontinue){
  var URL = wgServer + wgScriptPath + '/api.php?format=xml&action=query&list=articlefeedbackv5-view-activity'
          + '&aafeedbackid=' + token
          + '&aatitle=' + encodeURIComponent(title)
          + '&aalimit=' + LiveRC_Config["UserInfos"].APIlimit
          + (paramcontinue ? "&aacontinue=" + paramcontinue : ""); 
  wpajax.http({url:URL, onSuccess: liveFeedback_getFlagActivity2, title:title, token:token, link:Link});
}

function liveFeedback_getFlagActivity2(xmlreq, data){
  var ObjetXML = xmlreq.responseXML;
  var Activity = ObjetXML.getElementsByTagName("articlefeedbackv5-view-activity");
  Activity = Activity[(Activity.length-1)];
  if(!Activity) return;
  var Text = Activity.getAttribute("activity");
  Text = Text.unhtmlize();
  
  var MoreInfos = ObjetXML.getElementsByTagName("query-continue")[0];
  if(MoreInfos && data.link){
    data.link.setAttribute("data-continue", MoreInfos.firstChild.getAttribute("aacontinue"));
  }

  var MoreLinkContainer = data.link.parentNode;
  if(MoreLinkContainer && MoreLinkContainer.nextSibling){
    var ActivityLog = MoreLinkContainer.nextSibling;
    ActivityLog.innerHTML += Text;
    // document.getElementById('articleFeedbackv5-permalink-activity-log');
    liveFeedback_manageUserLinks(ActivityLog);
    var Permalink = getElementsByClass("articleFeedbackv5-activity-feedback-permalink", ActivityLog, "div")[0];
    if(Permalink) Permalink.parentNode.removeChild(Permalink); 
    if(!MoreInfos) MoreLinkContainer.parentNode.removeChild(MoreLinkContainer);
  }
}

/* </source>

==== LiveStabilization ====

<source lang="javascript"> */

function liveStabilization(Title){
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveStabilization",new Array(lrcEscapeStr(Title)), wgServer+wgScript+'?title=Special:Stabilisation'+'&page='+Title, Title);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Stabilization : <span style='color:red'>"+Title+"</span>...</b>");
  wpajax.http({url: lrcGetUglyPageURL("Special:Stabilisation","&page="+encodeURIComponent(Title)),
               onSuccess: getStabilization, title:Title, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
}
 
function getStabilization(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.title;
    var bC  = getPageContent(xmlreq);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = "";
    PreviewWindow.innerHTML = bC.innerHTML;
    lrcCloseAll();
    addClass(document.body, "LiveRCPreviewDisplayed");
    buildPreviewBar({
      "Mode"  : "Stabilization",
      "Url"   : data.url,
      "Page"  : c
    });
    modifyStabilizationform(PreviewWindow.getElementsByTagName('form')[0]);
}
 
function modifyStabilizationform(Stabilizationform){
    if(!Stabilizationform) return;
    var inputs = Stabilizationform.getElementsByTagName('input');
    for(var a=0,l=inputs.length;a<l;a++){
        var Input = inputs[a];
        if(Input.type != "submit") continue;
        var NewInput = document.createElement('input');
        NewInput.type = "button";
        NewInput.id = "Live_" + Input.id;
        NewInput.value = Input.value + lrcMakeText("LIVELINK");
        NewInput.onclick = function(){ processStabilization(this)}
        NewInput.onselect = function(){ processStabilization(this)}
        Input.parentNode.insertBefore(NewInput, Input.nextSibling);
        Input.style.display = "none";
    }
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewStabilization", data);
    return;
}
 
function processStabilization(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var ParamsInURL = new Array();
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    ParamsInURL = ParamsInURL.join("&");
    var action = Form.action;
    var headers = new Array();
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL,
                  onSuccess:doneStabilization,
                  params:Params
                });
}
 
function doneStabilization(Req, data){
  var bC  = getPageContent(Req);
  var PreviewWindow = document.getElementById("livePreview");
  PreviewWindow.innerHTML = bC.innerHTML;
  var page = data.params["page"];
  var sothername = lrcGetOtherPagename(page);
  if(data.params["wpWatchthis"] === 1){
    addPageToSuivi(page);
    addPageToSuivi(sothername);
  }else{
    removePageFromSuivi(page);
    removePageFromSuivi(sothername);
  }
  buildPreviewBar({
    "Mode"  : "Article",
    "Url"   : lrcGetPageURL(c),
    "Page"  : c,
    "User1" : (User ? User : false),
    "oldid" : (data.oldid ? data.oldid: false)
  });
  updatePreviewWindowAttributes();
}

/* </source>

=== Fenêtre de tchat ===

<source lang="javascript"> */

// Création

function  buildTchatWindow(){
  var OldTchat = document.getElementById("liveTchat");
  if(OldTchat){
  lrcDisplayDebug("Close tchat window");
    toggleTchatWindow();
    return;
  }
  lrcDisplayDebug("Open tchat window");
  var TargetDiv = document.getElementById("LiveRCContainer");
  if(!TargetDiv) return;
  var DivTchat = document.createElement('div');
  DivTchat.id = "liveTchat";
  TargetDiv.appendChild(DivTchat);
  var TchatMoveAnchor = document.createElement('div');
  TchatMoveAnchor.id = "liveTchatMoveAnchor";
  addClass(TchatMoveAnchor, "LiveRC_MenuAnchor");
  var URL = lrcMakeParam("TchatURL");
  URL = URL.split("$1").join(lrcMakeParam("TchatChannel"));
  URL = URL.split("$2").join(encodeURIComponent(wgUserName.replace(/ /, "_")))
  var NewWindowParams = lrcEscapeStr("NewWindowTchat")
                      + ','
                      + lrcEscapeStr("menubar=no,titlebar=no,toolbar=no,location=no,scrollbars=yes,height=500,width=600")
                      + ','
                      + 'false';
  var NewWindowLink = '<a id="NewWindowTchatLink" '
                    + 'href="javascript:;" '
                    + 'onclick="'
                      + 'deleteTchatWindow(); '
                      + 'window.open('+lrcEscapeStr(URL)+','+NewWindowParams+'); '
                      + 'return false;'
                    + '" '
                    + 'title="'+lrcMakeText("NewWindowTchatLink_Title")+'">['
                    + lrcMakeText("NewWindowTchatLink_Text")
                    + ']</a>';
  TchatMoveAnchor.innerHTML = lrcMakeText("LiveRC_TchatTitle") + " " + NewWindowLink;
  var TchatContent = document.createElement('div');
  TchatContent.id = "liveTchatContent";
  addClass(TchatContent, "LiveRC_MenuContent");
  var Iframe = document.createElement('iframe');
  Iframe.id = "liveTchatFrame";
  Iframe.src = URL;
  Iframe.width = "99.9%";
  Iframe.height = lrcMakeParam("TchatWindowHeight");
  Iframe.setAttribute("style", "margin-left:3px");
  TchatContent.appendChild(Iframe);
  var TchatResizeAnchor = document.createElement('div');
  TchatResizeAnchor.id = "liveTchatResizeAnchor";
  addClass(TchatResizeAnchor, "LiveRC_MenuAnchor");
  DivTchat.appendChild(TchatMoveAnchor);
  DivTchat.appendChild(TchatContent);
  DivTchat.appendChild(TchatResizeAnchor);
  lrcCloseAll();
  addClass(document.body, "LiveRCTchatDisplayed");
  LiveRC_SetMoveZone(TchatMoveAnchor, new Array(DivTchat));
  LiveRC_SetTotalResizeZone(TchatResizeAnchor, new Array(Iframe), DivTchat);
  var HauteurEcran = LiveRC_GetScreenHeight();
  DivTchat.style.bottom = "0px";
}

// Affichage / Masquage

function toggleTchatWindow(){
    if(hasClass(document.body, "LiveRCTchatDisplayed")){
      removeClass(document.body, "LiveRCTchatDisplayed");
    }else{
      addClass(document.body, "LiveRCTchatDisplayed");
    }
}

function  deleteTchatWindow(){
  removeClass(document.body, "LiveRCTchatDisplayed");
  var OldTchat = document.getElementById("liveTchat");
  if(OldTchat) OldTchat.parentNode.removeChild(OldTchat);
}

/* </source>

=== Fenêtre de débogage ===

<source lang="javascript"> */

function LiveRC_CreateDebug(){
  var TargetDiv = document.getElementById("LiveRCContainer");
  if(!TargetDiv) return;
  var DivDebug = document.createElement('div');
  DivDebug.id = "liveDebug";
  TargetDiv.appendChild(DivDebug);
  var DebugMoveAnchor = document.createElement('div');
  DebugMoveAnchor.id = "liveDebugMoveAnchor";
  addClass(DebugMoveAnchor, "LiveRC_MenuAnchor");
  DebugMoveAnchor.innerHTML = lrcMakeText("LiveRC_DebugTitle");
  var DebugContent = document.createElement('div');
  DebugContent.id = "liveDebugContent";
  addClass(DebugContent, "LiveRC_MenuContent");
  DebugContent.innerHTML = '<ul id="debug_ul"></ul>';
  DivDebug.appendChild(DebugMoveAnchor);
  DivDebug.appendChild(LiveRC_CreateDebugOptions());
  DivDebug.appendChild(DebugContent);
  LiveRCContainer.appendChild(DivDebug);
  LiveRC_SetVerticalResizeZone(DebugMoveAnchor, new Array(DebugContent), DivDebug);
  if(lrcMakeOption("DisplayDebug")) LiveRC_OpenDebug();
}
function LiveRC_CreateDebugOptions(){
  var ClearInput = document.createElement('input');
  ClearInput.type = "button";
  ClearInput.id = "DebugClearButton";
  ClearInput.name = "DebugClearButton";
  ClearInput.value = lrcMakeText("DebugClearButtonLabel");
  ClearInput.onclick = LiveRC_ClearDebug;

  var AjaxInput = document.createElement('input');
  AjaxInput.id = "DebugAjaxSelector";
  AjaxInput.name = "DebugAjaxSelector";
  AjaxInput.type = "checkbox";
  AjaxInput.checked = "checked";
  AjaxInput.onclick = LiveRC_CheckDebugAjaxSelector;
  var AjaxLabel = document.createElement('label');
  AjaxLabel.setAttribute('for', "DebugAjaxSelector");
  AjaxLabel.innerHTML = lrcMakeText("DebugAjaxSelectorLabel");

  var ErrorsInput = document.createElement('input');
  ErrorsInput.id = "DebugErrorsSelector";
  ErrorsInput.name = "DebugErrorsSelector";
  ErrorsInput.type = "checkbox";
  ErrorsInput.onclick = LiveRC_CheckDebugErrorsSelector;
  var ErrorsLabel = document.createElement('label');
  ErrorsLabel.setAttribute('for', "DebugErrorsSelector");
  ErrorsLabel.innerHTML = lrcMakeText("DebugErrorsSelectorLabel");

  var P = document.createElement('p');
  P.appendChild(ClearInput);
  P.appendChild(document.createTextNode(" • "));
  P.appendChild(AjaxInput);
  P.appendChild(document.createTextNode(" "));
  P.appendChild(AjaxLabel);
  P.appendChild(document.createTextNode(" • "));
  P.appendChild(ErrorsInput);
  P.appendChild(document.createTextNode(" "));
  P.appendChild(ErrorsLabel);
  return P;
}

function LiveRC_ClearDebug(){
  var DebugUl = document.getElementById("debug_ul");
  if(DebugUl){
    while(DebugUl.firstChild){ DebugUl.removeChild(DebugUl.firstChild); }
  }
}

function LiveRC_CheckDebugAjaxSelector(){
  var Input = document.getElementById("DebugAjaxSelector");
  var DebugContent = document.getElementById("liveDebugContent");
  if(!Input || !DebugContent) return;
  if(Input.checked){
    removeClass(DebugContent, "NoAjax");
  }else{
    addClass(DebugContent, "NoAjax");
  }
}

function LiveRC_CheckDebugErrorsSelector(){
  var Input = document.getElementById("DebugErrorsSelector");
  var DebugContent = document.getElementById("liveDebugContent");
  if(!Input || !DebugContent) return;
  if(Input.checked){
    addClass(DebugContent, "OnlyErrors");
  }else{
    removeClass(DebugContent, "OnlyErrors");
  }
}

function LiveRC_OpenDebug(){
  addClass(document.body, "LiveRCDebugDisplayed");
}

function LiveRC_CloseDebug(){
  removeClass(document.body, "LiveRCDebugDisplayed");
}

function lrcToggleLogo(state){
  var Logo = document.getElementById("lrcLogo");
  var AnimatedLogo = document.getElementById("lrcAnimatedLogo");
  if(!Logo || !AnimatedLogo) return;
  if(!state){
    Logo.style.display = "";
    AnimatedLogo.style.display = "none";
  }else{
    Logo.style.display = "none";
    AnimatedLogo.style.display = "";
  }
}

function lrcDisplayDebug(text, Ajax, error){
  if(!text || text == "") return;
  var Heures = LiveRC_Config["ClockTime"]["H"];
  var Minutes = LiveRC_Config["ClockTime"]["M"];
  var Secondes = LiveRC_Config["ClockTime"]["S"];
  var Timestamp = (Heures<10?'0':'') + Heures + ':' + (Minutes<10?'0':'') + Minutes + ':' + (Secondes<10?'0':'') + Secondes;
  var Li = document.createElement('li');
  if(Ajax) addClass(Li, "Ajax");
  if(error) addClass(Li, "error");
  else addClass(Li, "noerror");
  Li.innerHTML = '<span class="TS">' + Timestamp + '</span> : <code>' + text + '</code>';
  var DebugUl = document.getElementById("debug_ul");
  if(DebugUl){
    while(LiveRC_Config["PendingDebug"].length>0){
      var PreviousLi = LiveRC_Config["PendingDebug"][0];
      if(!PreviousLi) break;
      DebugUl.insertBefore(PreviousLi, DebugUl.firstChild);
      LiveRC_Config["PendingDebug"].shift();
    }
    DebugUl.insertBefore(Li, DebugUl.firstChild);
  }else{
    LiveRC_Config["PendingDebug"].push(Li);
  }
}

/* </source> */
