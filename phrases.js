// Phrases d'exemple : [arabe vocalisé, français, (optionnel) mots du dictionnaire liés, séparés par |]
// Les mots du dictionnaire sont aussi retrouvés automatiquement dans la phrase ; le 3e champ sert surtout aux verbes conjugués.
const phrasesData = [
  // --- Salutations et conversation ---
  ["السَّلَامُ عَلَيْكُمْ", "Que la paix soit sur vous (bonjour)."],
  ["وَعَلَيْكُمُ السَّلَامُ", "Et sur vous la paix (réponse)."],
  ["صَبَاحُ الْخَيْرِ", "Bonjour (le matin)."],
  ["مَسَاءُ الْخَيْرِ", "Bonsoir."],
  ["كَيْفَ حَالُكَ؟", "Comment vas-tu ?"],
  ["أَنَا بِخَيْرٍ، شُكْراً", "Je vais bien, merci."],
  ["مَا اسْمُكَ؟", "Comment t'appelles-tu ?"],
  ["اسْمِي أَحْمَد", "Je m'appelle Ahmed."],
  ["أَنَا مِنْ فَرَنْسَا", "Je viens de France."],
  ["أَتَكَلَّمُ الْعَرَبِيَّةَ قَلِيلاً", "Je parle un peu arabe."],
  ["أُحِبُّ اللُّغَةَ الْعَرَبِيَّةَ", "J'aime la langue arabe."],
  ["لَا أَفْهَمُ", "Je ne comprends pas.", "فهم"],
  ["هَلْ تَتَكَلَّمُ الْفَرَنْسِيَّةَ؟", "Parles-tu français ?"],
  ["شُكْراً جَزِيلاً", "Merci beaucoup."],
  ["عَفْواً", "De rien."],
  ["مَعَ السَّلَامَةِ", "Au revoir."],

  // --- École et objets ---
  ["هٰذَا كِتَاب جَدِيد", "Ceci est un livre neuf."],
  ["أَيْنَ الْقَلَم؟", "Où est le stylo ?"],
  ["أَنَا أَذْهَبُ إِلَى الْمَدْرَسَة", "Je vais à l'école.", "ذهب"],
  ["الطَّالِب يَقْرَأُ الْكِتَاب", "L'étudiant lit le livre.", "قرأ"],
  ["الْأُسْتَاذ فِي الْفَصْل", "Le professeur est dans la classe."],
  ["أُحِبُّ الْقِرَاءَة", "J'aime la lecture."],
  ["الدَّفْتَر عَلَى الطَّاوِلَة", "Le cahier est sur la table."],
  ["الْكُرْسِيّ تَحْتَ الطَّاوِلَة", "La chaise est sous la table."],
  ["افْتَحِ الْبَاب مِنْ فَضْلِك", "Ouvre la porte, s'il te plaît.", "فتح"],
  ["أَغْلِقِ النَّافِذَة", "Ferme la fenêtre.", "أغلق"],
  ["الْحَاسُوب عَلَى الْمَكْتَب", "L'ordinateur est sur le bureau."],
  ["هَاتِفِي جَدِيد", "Mon téléphone est neuf."],
  ["الْمِفْتَاح فِي الْحَقِيبَة", "La clé est dans le sac."],
  ["عِنْدِي قَلَم وَدَفْتَر", "J'ai un stylo et un cahier."],
  ["الْمُدِير فِي الْمَكْتَب", "Le directeur est dans le bureau."],
  ["عِنْدَنَا امْتِحَان غَداً", "Nous avons un examen demain."],
  ["الْخَرِيطَة عَلَى الْجِدَار", "La carte est sur le mur."],
  ["أَكْتُبُ عَلَى الْوَرَقَة", "J'écris sur la feuille.", "كتب"],

  // --- Le temps ---
  ["الْيَوْم أَذْهَبُ إِلَى الْمَكْتَبَة", "Aujourd'hui, je vais à la bibliothèque.", "ذهب"],
  ["أَمْسِ ذَهَبْتُ إِلَى السُّوق", "Hier, je suis allé au marché.", "ذهب"],
  ["غَداً عِنْدِي مَوْعِد", "Demain, j'ai un rendez-vous."],
  ["الْأُسْبُوع فِيهِ سَبْعَة أَيَّام", "La semaine compte sept jours."],
  ["السَّنَة فِيهَا اثْنَا عَشَرَ شَهْراً", "L'année compte douze mois."],
  ["اِنْتَظِرْ دَقِيقَة", "Attends une minute."],

  // --- Famille ---
  ["عِنْدِي أَخ وَاحِد وَأُخْتَان", "J'ai un frère et deux sœurs."],
  ["أَبِي طَبِيب", "Mon père est médecin."],
  ["أُمِّي تَطْبُخُ فِي الْمَطْبَخ", "Ma mère cuisine dans la cuisine.", "طبخ"],
  ["جَدِّي كَرِيم", "Mon grand-père est généreux."],
  ["جَدَّتِي لَطِيفَة", "Ma grand-mère est gentille.", "جدة"],
  ["عَمِّي سَائِق", "Mon oncle paternel est chauffeur."],
  ["خَالِي مُهَنْدِس", "Mon oncle maternel est ingénieur."],
  ["اِبْنِي يَنَامُ فِي الْغُرْفَة", "Mon fils dort dans la chambre.", "نام"],
  ["اِبْنَتِي تَقْرَأُ كِتَاباً", "Ma fille lit un livre.", "قرأ"],

  // --- Maison ---
  ["الْمِرْآة فِي الْحَمَّام", "Le miroir est dans la salle de bain."],
  ["السَّرِير فِي الْغُرْفَة", "Le lit est dans la chambre."],
  ["الثَّلَّاجَة فِي الْمَطْبَخ", "Le réfrigérateur est dans la cuisine."],
  ["الْمِصْبَاح عَلَى الرَّفّ", "La lampe est sur l'étagère."],
  ["التِّلْفَاز أَمَامَ الْأَرِيكَة", "La télévision est devant le canapé."],
  ["السِّجَّادَة جَمِيلَة", "Le tapis est beau."],
  ["الْقِطّ يَنَامُ عَلَى الْأَرِيكَة", "Le chat dort sur le canapé.", "نام"],
  ["النَّافِذَة مَفْتُوحَة", "La fenêtre est ouverte."],

  // --- Nature ---
  ["نَذْهَبُ إِلَى الْجَبَل", "Nous allons à la montagne.", "ذهب"],
  ["الشَّجَرَة طَوِيلَة", "L'arbre est grand."],
  ["الزَّهْرَة جَمِيلَة", "La fleur est belle."],
  ["الْمَطَر يَنْزِلُ الْيَوْم", "La pluie tombe aujourd'hui.", "نزل"],
  ["الثَّلْج أَبْيَض", "La neige est blanche."],
  ["الرِّيح قَوِيَّة", "Le vent est fort."],
  ["أَسْبَحُ فِي الْبَحْر", "Je nage dans la mer.", "سبح"],
  ["النَّهْر طَوِيل", "La rivière est longue."],
  ["السَّمَاء صَافِيَة", "Le ciel est dégagé."],
  ["الشَّمْس تَطْلُعُ مِنَ الشَّرْق", "Le soleil se lève à l'est."],
  ["الشَّمْس تَغْرُبُ فِي الْغَرْب", "Le soleil se couche à l'ouest."],

  // --- Corps ---
  ["رَأْسِي يُؤْلِمُنِي", "J'ai mal à la tête.", "رأس"],
  ["أَرَى بِعَيْنِي", "Je vois avec mes yeux.", "عين"],
  ["أَسْمَعُ بِأُذُنِي", "J'entends avec mon oreille.", "اذن"],
  ["أَغْسِلُ يَدَيَّ", "Je me lave les mains.", "غسل"],
  ["قَلْبِي سَعِيد", "Mon cœur est heureux.", "قلب"],

  // --- Nourriture ---
  ["أَشْرَبُ الْمَاء", "Je bois de l'eau.", "شرب"],
  ["أَشْرَبُ الْحَلِيب كُلَّ صَبَاح", "Je bois du lait chaque matin.", "شرب"],
  ["أُحِبُّ الْعَصِير", "J'aime le jus."],
  ["آكُلُ الْخُبْز", "Je mange du pain.", "أكل"],
  ["أَكَلْنَا الدَّجَاج وَالْأَرُز", "Nous avons mangé du poulet et du riz.", "أكل"],
  ["السَّمَك لَذِيذ", "Le poisson est délicieux."],
  ["الْفَاكِهَة حُلْوَة", "Les fruits sont sucrés."],
  ["الْخُضَار مُفِيد", "Les légumes sont bons pour la santé."],
  ["الْمِلْح عَلَى الطَّاوِلَة", "Le sel est sur la table."],
  ["الْعَسَل حُلْو", "Le miel est doux."],
  ["أُحِبُّ الشَّايَ بِالنَّعْنَاع", "J'aime le thé à la menthe."],

  // --- Cuisine ---
  ["الصَّحْن عَلَى الطَّاوِلَة", "L'assiette est sur la table."],
  ["أَشْرَبُ فِي الْكُوب", "Je bois dans le verre.", "شرب"],
  ["أَسْتَعْمِلُ الْمِلْعَقَة وَالشَّوْكَة", "J'utilise la cuillère et la fourchette."],
  ["السِّكِّين حَادّ", "Le couteau est tranchant."],
  ["الْقِدْر عَلَى الْمَوْقِد", "La marmite est sur la cuisinière."],
  ["الْفُرْن حَارّ", "Le four est chaud."],

  // --- Animaux ---
  ["الْكَلْب يَرْكُضُ فِي الْحَدِيقَة", "Le chien court dans le jardin.", "ركض"],
  ["الْحِصَان سَرِيع", "Le cheval est rapide."],
  ["الْأَسَد قَوِيّ", "Le lion est fort."],
  ["الْفِيل كَبِير", "L'éléphant est grand."],
  ["الْعُصْفُور يَطِيرُ فِي السَّمَاء", "L'oiseau vole dans le ciel.", "طار"],
  ["الْبَقَرَة تُعْطِي الْحَلِيب", "La vache donne du lait.", "أعطى"],
  ["الْجَمَل يَعِيشُ فِي الصَّحْرَاء", "Le chameau vit dans le désert."],
  ["الْأَرْنَب يَأْكُلُ الْجَزَر", "Le lapin mange la carotte.", "أكل"],
  ["النَّحْلَة تَصْنَعُ الْعَسَل", "L'abeille fabrique le miel."],
  ["الْقِرْد يَتَسَلَّقُ الشَّجَرَة", "Le singe grimpe à l'arbre."],

  // --- Métiers ---
  ["الطَّبِيب فِي الْمُسْتَشْفَى", "Le médecin est à l'hôpital."],
  ["الْمُمَرِّض لَطِيف", "L'infirmier est gentil."],
  ["الشُّرْطِيّ يُسَاعِدُنِي", "Le policier m'aide."],
  ["الطَّبَّاخ يَطْبُخُ السَّمَك", "Le cuisinier cuisine le poisson.", "طبخ"],
  ["النَّجَّار يَصْنَعُ طَاوِلَة", "Le menuisier fabrique une table."],
  ["التَّاجِر يَبِيعُ الْخُبْز", "Le commerçant vend du pain.", "باع"],
  ["الصَّحَفِيّ يَكْتُبُ مَقَالاً", "Le journaliste écrit un article.", "كتب"],
  ["الْفَلَّاح يَعْمَلُ فِي الْأَرْض", "L'agriculteur travaille la terre."],
  ["الطَّيَّار يَطِيرُ كُلَّ يَوْم", "Le pilote vole tous les jours.", "طار"],
  ["الْمُحَامِي يَتَكَلَّمُ كَثِيراً", "L'avocat parle beaucoup."],

  // --- Vêtements ---
  ["أَلْبَسُ قَمِيصاً أَبْيَض", "Je porte une chemise blanche.", "قميص"],
  ["الْفُسْتَان جَمِيل", "La robe est belle."],
  ["الْمِعْطَف دَافِئ", "Le manteau est chaud."],
  ["أَشْتَرِي حِذَاءً جَدِيداً", "J'achète des chaussures neuves.", "اشترى"],
  ["الْقُبَّعَة عَلَى رَأْسِي", "Le chapeau est sur ma tête."],
  ["أَضَعُ النَّظَّارَة عَلَى وَجْهِي", "Je mets les lunettes sur mon visage."],
  ["الْحِزَام فِي الْحَقِيبَة", "La ceinture est dans le sac."],
  ["أَلْبَسُ الْوِشَاحَ فِي الشِّتَاء", "Je porte l'écharpe en hiver."],

  // --- États ---
  ["أَنَا جَوْعَان", "J'ai faim."],
  ["أَنَا عَطْشَان", "J'ai soif."],
  ["أَنَا تَعْبَان الْيَوْم", "Je suis fatigué aujourd'hui."],
  ["أَنَا نَعْسَان", "J'ai sommeil."],
  ["أَنَا مَشْغُول الْآنَ", "Je suis occupé maintenant."],

  // --- Actions et mouvements ---
  ["جَلَسَ الطَّالِب عَلَى الْكُرْسِيّ", "L'étudiant s'est assis sur la chaise.", "جلس"],
  ["قَامَ الْأُسْتَاذ", "Le professeur s'est levé.", "قام"],
  ["دَخَلْتُ الْغُرْفَة", "Je suis entré dans la chambre.", "دخل"],
  ["خَرَجَ أَبِي مِنَ الْبَيْت", "Mon père est sorti de la maison.", "خرج"],
  ["أَمْشِي إِلَى الْمَدْرَسَة", "Je marche jusqu'à l'école.", "مشى"],
  ["رَكِبْتُ الدَّرَّاجَة", "J'ai fait du vélo.", "ركب"],
  ["نَزَلَ مِنَ الْجَبَل", "Il est descendu de la montagne.", "نزل"],
  ["فَتَحَتْ أُمِّي الْبَاب", "Ma mère a ouvert la porte.", "فتح"],
  ["كَسَرَ الْوَلَد الْكُوب", "Le garçon a cassé le verre.", "كسر"],
  ["أَصْلَحَ أَبِي الْكُرْسِيّ", "Mon père a réparé la chaise.", "أصلح"],
  ["نَظَّفَتْ أُمِّي الْغُرْفَة", "Ma mère a nettoyé la chambre.", "نظف"],
  ["غَسَلْتُ الصَّحْن", "J'ai lavé l'assiette.", "غسل"],
  ["طَبَخَتْ أُمِّي الْأَرُز", "Ma mère a cuisiné du riz.", "طبخ"],
  ["اشْتَرَيْتُ الْخُبْز", "J'ai acheté du pain.", "اشترى"],
  ["بَاعَ التَّاجِر السَّمَك", "Le commerçant a vendu le poisson.", "باع"],
  ["أَعْطَانِي أَبِي مِفْتَاحاً", "Mon père m'a donné une clé.", "أعطى"],

  // --- Personnalité ---
  ["هُوَ ذَكِيّ وَمُجْتَهِد", "Il est intelligent et travailleur."],
  ["هِيَ كَرِيمَة", "Elle est généreuse.", "كريم"],
  ["الصَّادِق مَحْبُوب", "L'homme honnête est aimé."],
  ["الْجُنْدِيّ شُجَاع", "Le soldat est courageux."],
  ["الْكَسْلَان لَا يَنْجَح", "Le paresseux ne réussit pas."],
  ["هٰذَا الرَّجُل مَشْهُور", "Cet homme est célèbre."],

  // --- Météo et saisons ---
  ["الشِّتَاء بَارِد", "L'hiver est froid."],
  ["الصَّيْف حَارّ", "L'été est chaud."],
  ["الزُّهُور جَمِيلَة فِي الرَّبِيع", "Les fleurs sont belles au printemps."],
  ["الْجَوّ جَمِيل الْيَوْم", "Il fait beau aujourd'hui.", "جو"],
  ["فِي السَّمَاء غَيْم", "Il y a des nuages dans le ciel."],
  ["سَمِعْتُ الرَّعْد وَرَأَيْتُ الْبَرْق", "J'ai entendu le tonnerre et vu l'éclair."],
  ["الْخَرِيف جَمِيل", "L'automne est beau."],

  // --- Voyage ---
  ["أُرِيدُ تَذْكِرَة", "Je voudrais un billet."],
  ["أَيْنَ جَوَازُ السَّفَر؟", "Où est le passeport ?"],
  ["حَقِيبَةُ السَّفَرِ ثَقِيلَة", "La valise est lourde."],
  ["هُنَاكَ تَأْخِير", "Il y a du retard."],

  // --- Lieu et temps ---
  ["أَنَا هُنَا", "Je suis ici."],
  ["هُوَ هُنَاكَ", "Il est là-bas."],
  ["أَدْرُسُ الْآنَ", "J'étudie maintenant."],
  ["هُوَ دَائِماً مُجْتَهِد", "Il est toujours studieux."],
  ["لَا أَكْذِبُ أَبَداً", "Je ne mens jamais."],
  ["أَحْيَاناً أَلْعَبُ كُرَةَ الْقَدَم", "Parfois, je joue au football."],
  ["الْقَلَم فَوْقَ الدَّفْتَر", "Le stylo est au-dessus du cahier."],
  ["الْقِطّ تَحْتَ السَّرِير", "Le chat est sous le lit."],
  ["أَنَا أَمَامَ الْمَدْرَسَة", "Je suis devant l'école."],
  ["الْمِفْتَاح خَلْفَ الْبَاب", "La clé est derrière la porte."],
  ["الطَّاوِلَة بَيْنَ الْكُرْسِيِّ وَالسَّرِير", "La table est entre la chaise et le lit."],
  ["الْمَكْتَبَة جَانِبَ الْمَدْرَسَة", "La bibliothèque est à côté de l'école."],

  // --- Questions et liaisons ---
  ["مَنْ هٰذَا؟", "Qui est-ce ?"],
  ["مَاذَا تَشْرَبُ؟", "Que bois-tu ?", "شرب"],
  ["لِمَاذَا أَنْتَ تَعْبَان؟", "Pourquoi es-tu fatigué ?"],
  ["مَتَى الِامْتِحَان؟", "Quand est l'examen ?"],
  ["أَيْنَ الْمَطْبَخ؟", "Où est la cuisine ?"],
  ["كَمْ ثَمَنُ هٰذَا الْكِتَاب؟", "Combien coûte ce livre ?"],
  ["أَيَّ كِتَابٍ تُرِيد؟", "Quel livre veux-tu ?"],
  ["أَنَا فَرْحَان لِأَنَّ الْجَوَّ جَمِيل", "Je suis content parce qu'il fait beau."],
  ["أُحِبُّ الشَّايَ وَلَكِنْ لَا أُحِبُّ الْقَهْوَة", "J'aime le thé mais pas le café."],
  ["أَنَا أَيْضاً أُحِبُّ الْقِرَاءَة", "Moi aussi, j'aime la lecture."],
  ["عِنْدِي كِتَاب وَاحِد فَقَط", "J'ai seulement un livre."],

  // --- Commerce ---
  ["هٰذَا الْكِتَاب غَالٍ", "Ce livre est cher."],
  ["هٰذَا الْقَمِيص رَخِيص", "Cette chemise est bon marché."],
  ["الْيَوْم فِي الدُّكَّان تَخْفِيض كَبِير", "Aujourd'hui, il y a une grande réduction au magasin."],
  ["أَدْفَعُ بِالْبِطَاقَةِ الْبَنْكِيَّة", "Je paie avec la carte bancaire.", "بطاقة بنكية"],
  ["الْفَاتُورَة عَلَى الطَّاوِلَة", "La facture est sur la table."],
  ["هٰذَا الْمَاء مَجَّانِيّ", "Cette eau est gratuite."],
  ["أَذْهَبُ إِلَى الْمَصْرِف", "Je vais à la banque.", "ذهب"],

  // --- Communication ---
  ["اتَّصَلْتُ بِأَبِي", "J'ai appelé mon père.", "اتصل"],
  ["سَأَلَ الطَّالِب الْأُسْتَاذ", "L'étudiant a posé une question au professeur.", "سأل"],
  ["أَجَابَ الْأُسْتَاذ", "Le professeur a répondu.", "أجاب"],
  ["شَرَحَ الْأُسْتَاذ الدَّرْس", "Le professeur a expliqué la leçon.", "شرح"],
  ["نَصَحَنِي أَبِي", "Mon père m'a conseillé.", "نصح"],
  ["وَعَدْتُ أُمِّي", "J'ai promis à ma mère.", "وعد"],

  // --- Pensée ---
  ["نَسِيتُ الْمِفْتَاح", "J'ai oublié la clé.", "نسي"],
  ["تَذَكَّرْتُ اسْمَهُ", "Je me suis souvenu de son nom.", "تذكر"],
  ["قَرَّرْتُ أَنْ أَدْرُسَ", "J'ai décidé d'étudier.", "قرر"],
  ["حَاوَلْتُ مَرَّةً أُخْرَى", "J'ai essayé une autre fois.", "حاول"],
  ["أَتَمَنَّى لَكَ النَّجَاح", "Je te souhaite la réussite.", "تمنى"],

  // --- Politesse ---
  ["مَبْرُوك!", "Félicitations !"],
  ["آسِف، تَأَخَّرْتُ", "Désolé, je suis en retard."],
  ["مَعْذِرَةً، أَيْنَ الْمَكْتَبَة؟", "Excusez-moi, où est la bibliothèque ?"],
  ["تَفَضَّلْ، هٰذَا الْكِتَاب", "Tiens, voici le livre."],
  ["بِالتَّأْكِيد", "Bien sûr."],
  ["رُبَّمَا أَذْهَبُ غَداً", "Peut-être que j'irai demain.", "ذهب"],
  ["مُوَافِق", "D'accord."],
  ["لِلْأَسَفِ، لَا أَعْرِفُ", "Malheureusement, je ne sais pas.", "عرف"],

  // --- Sports ---
  ["أَلْعَبُ كُرَةَ الْقَدَم", "Je joue au football.", "كرة القدم"],
  ["الْفَرِيق فِي الْمَلْعَب", "L'équipe est dans le stade."],
  ["أُحِبُّ السِّبَاحَة", "J'aime la natation."],
  ["أَرْكَبُ الدَّرَّاجَة كُلَّ يَوْم", "Je fais du vélo tous les jours.", "ركب"],

  // --- Nombres ---
  ["عِنْدِي ثَلَاثَة كُتُب", "J'ai trois livres."],
  ["فِي الْفَصْل خَمْسَة طُلَّاب", "Il y a cinq étudiants dans la classe."],
  ["عِنْدِي عَشَرَة أَقْلَام", "J'ai dix stylos."],

  // --- Géographie ---
  ["الْعَاصِمَة كَبِيرَة", "La capitale est grande."],
  ["الْعَلَم عَلَى الْمَدْرَسَة", "Le drapeau est sur l'école."],
  ["الشَّمَال بَارِد", "Le nord est froid."],
  ["الْجَنُوب حَارّ", "Le sud est chaud."]
];
