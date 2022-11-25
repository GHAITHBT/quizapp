import React, { useState,useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Button, Modal, ModalFooter, ModalTitle,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";
import GaugeChart from 'react-gauge-chart'
import Navbar from "./components";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";


function About() {
  const [ViewShow, SetViewShow] = useState(false)
  const handleViewShow = () => { SetViewShow(true) }
  const hanldeViewClose = () => { SetViewShow(false) }
  const navigate = useNavigate();

  var now  = " 15:00:00";
var then = " 14:20:00";

var ms = moment(now," HH:mm:ss").diff(moment(then," HH:mm:ss"));
var d = moment.duration(ms);
var s = d.minutes();
const [isActive, setIsActive] = useState(false);
const [isPaused, setIsPaused] = useState(true);
const [time, setTime] = useState(0);

  const current = new Date();

  const [timeStart, settimeStart] = useState("");
  const [timeFinish, settimeFinish] = useState("");
  const [timer, settimer] = useState(0);

   const [repo, setRepo] = useState("");
   const [QST, setQST] = useState([]);
const handledata = () => {
    const url = `http://localhost:5001/add_data`
    const Credentials = { Poste,QST,score,time,Vision,Cohérence,Personnel,Adaptabilité,Sensibilisation}

    axios.post(url, Credentials)
        .then(response => {
            const result = response.data;
            const { status, message, data } = result;
           
        })
        .catch(err => {
            console.log(err)
        })
      }
      const handletimer = () => {
        settimeStart(`${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`)
        var ms = moment(timeFinish,"HH:mm:ss").diff(moment(timeStart,"HH:mm:ss"));
        var d = moment.duration(ms);
        var s = d.minutes();
        settimer(s)
        console.log(timer)

          }
      
  // Properties
  const [showResults, setShowResults] = useState(false);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [Poste, setPoste] = useState("");
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  const [Vision,SetVision]=useState(0)
  const [Cohérence,SetCohérence]=useState(0)
  const [Personnel,SetPersonnel]=useState(0)
  const [Adaptabilité,SetAdaptabilité]=useState(0)
  const [Sensibilisation,SetSensibilisation]=useState(0)
 
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  useEffect(() => {
    console.log('test tijngsdfsd',s)

    console.log("start time",timeStart);
    console.log("finishc time",timeFinish);
    console.log("timer",timer)
    settimeFinish(`${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`)
    console.log("Reponse",repo)
    console.log(Poste)
    console.log(QST)
    console.log(Vision)
    console.log(Cohérence)
    console.log(Personnel)
    console.log(Adaptabilité)
    console.log(Sensibilisation)
    console.log("score",score)

    setPoste(localStorage.getItem("Poste"))
    let interval = null;

	if (isActive && isPaused === false) {
	interval = setInterval(() => {
		setTime((time) => time + 10);
	}, 10);
	} else {
	clearInterval(interval);
	}
	return () => {
	clearInterval(interval);
	};
  }, [timeStart,timeFinish,repo,Poste,QST,timer,isActive,isPaused,Vision,Personnel,Cohérence,Adaptabilité,Sensibilisation],score);

  const questions = [
    {
      text: " Le message et/ou la  communication sur les aspects santé et sécurité des aliments de nos produits finis se définit comme :",
      options: [
        { id: 0, text: "Innovant : utilisation des méthodes et outils modernes  (réseaux sociaux internes, intranet, implication de tous dans la diffusion du message), s'appuie sur les leaders d'opinion internes, va au-delà de la vie d'entreprise en intégrant des valeurs 'responsables' de l'entreprise et des parties intéressées." },
        { id: 1, text: "Evolutif : Affichage général, rappel des consignes en cas de réclamations.  " },
        { id: 2, text: "Participatif : en plus de l’affichage, réunions d'équipe régulières avec les rappels des faits marquants et suivi par l'encadrement terrain" },
        { id: 3, text: "Classique : Affichage, déclaration 'qualité' comme demandé par les normes." },
        { id: 4, text: "Adapté : Diffusion par plusieurs canaux officiels et informels, explicite concernant les objectifs / valeurs et les indicateurs de terrain.  "},
        
      ],
      cat:"Vision",
    },
    {
      text: " En quoi consiste actuellement, la formation des employés sur les dangers et les risques en matière des sécurités des aliments, à IAT ? :",
      options: [
        { id: 0, text: "Au-delà des bases sur les bonnes pratiques, des cas concrets sont abordés et des mises en situations permettant d'évaluer la bonne compréhension des risques, les employés apportent eux-mêmes des éléments supplémentaires pour alimenter les formations en y intégrant de nouveaux risques détectés."},
        { id: 1, text: "Tous les membres du personnel ne sont pas obligés d'assister et il existe peu d'enregistrements sur les formations réalisées (Pas de test formel de compétence et de la compréhension)." },
        { id: 2, text: "Un système formel de formation existe (formation initiale et de recyclage), les employés comprennent les règles générales de la sécurité des aliments, mais ne les respectent pas toujours." },
        { id: 3, text: "Les programmes de formation sont adaptés en continu en fonction de l'évolution de l'équipe .Les bonnes pratiques sont largement suivies (selon des indicateurs documentés)"},
        { id: 4, text: "Pas de formation ou formation à la conformité uniquement (BPH,principes généraux HACCP ,etc.)." },
      ],
      cat:"Sensibilisation",
    },
    {
      text: "En terme de système d’alerte, laquelle des propositions suivantes serait la plus adoptée à IAT? :",
      options: [
        { id: 0, text: "Il est vivement encouragé de faire remonter les déviations à tous les niveaux de la hiérarchie et des revues régulières sont assurées pour démontrer le bon suivi de ces actions , le système anonyme ou non en fonction du degré est en place et fonctionnel." },
        { id: 1, text: "Un système d'alerte a été mis en place à la demande de clients mais reste peu utilisé et plutôt formel." },
        { id: 2, text: "Un outil d'alerte a été mis en place et un affichage en attente, toutefois il n'est pas bien vu dans l'entreprise de faire de la déclaration." },
        { id: 3, text: "Le personnel a pris l'habitude de remonter à ses responsables hiérarchiques, toutes les activités déviantes de manière informelle et leur fait confiance pour le suivi."},
        { id: 4, text: "Pas de système de lanceur d'alerte en place les employés ne sont pas informés." },
      ],
      cat:"Adaptabilité",
    },
    {
      text: "Les indicateurs liés à la bonne application des pratiques de sécurité des aliments par le personnel sont :",
      options: [
        { id: 0, text: "Évolutifs et adaptés à la collecte des données liées aux résultats en matière d’hygiène, de récurrence des écarts, des évaluations des personnes sur la base d'entretien et des questionnaires d'évaluations permettant de mesurer 'application des procédures mais également l'agilité."},
        { id: 1, text: "Décrits et suivis sur la base des inspections hygiène en atelier, des audits, réclamations." },
        { id: 2, text: "Essentiellement suivis via la réalisation des formations internes et évaluations sur base des grilles de compétences." },
        { id: 3, text: "Clairement établis sur un ensemble de mesures du comportement et des résultats en matière d'hygiène d'efficacité des bonnes pratiques." },
        { id: 4, text: "Vagements définis, inclus dans les indicateurs de réclamations et d'hygiène" },
      ],
      cat:"Personnel",
    },
    {
      text: " En matière de formation des encadrants de terrain et des opérateurs, laquelle de ces affirmations serait la plus représentative de votre situation actuelle :",
      options: [
        { id: 0, text: "La formation en matière sécurité des aliments fait partie intégrante des rôles de supervision et s'est adaptée à des domaines spécifiques, mais tous les superviseurs sont en mesures d'expliquer les principaux domaines de risque .Les formations sont intéressantes et stimulent leur personnel à participer. Ils agissent toujours comme des bons exemples  en tant que 'multiplicateurs' de connaissances en matière de sécurité des aliments et encouragent leurs équipes opérationnelles à agir de manière proactive." },
        { id: 1, text: "Aucun système de formations formel n'existe : certaines sessions ponctuelles sont organisées, tous les superviseurs ne sont pas présents et peu d'enregistrements formels. Pas de test documenté de compétence et de compréhension" },
        { id: 2, text: "La société reste en  mode réactif, mais a mis en place un système formel de formation et de développement du personnel, le système reste en général sans rôle ni responsabilités spécifiés en matière de sécurité sanitaire des aliments. Le matériel de formation couvre les bases mais ne traite toujours pas des risques et des conséquences possibles. " },
        { id: 3, text: "Des messages proactifs sur la sécurité sanitaire des aliments sont intégrés aux communications régulières de la haute direction et diffusés .Système formel de formation à la gestion en place et mis en œuvre. Le matériel de formation souligne l'importance de la sécurité des aliments pour le personnel ainsi que pour l'équipement et les pratiques de base en mettant sur les risques et leurs conséquences éventuelles " },
        { id: 4, text: "Matériels de formation inexistants ou mal produits, contenus faibles ou non adaptés à l'entreprise .Accent éducatif limité aux compétences techniques ou se concentre uniquement ou principalement sur l'hygiène du personnel .On considère la sécurité des aliments comme une pratique qui ne nécessite pas de formation théorique."},
      ],
      cat:"Personnel",
    },
    {
      text: " Comment décrirez-vous le niveau de connaissance de la mission / vision de l'entreprise en matière de sécurité des aliments ?.",
      options: [
        { id: 0, text: "Tous les membres de l'encadrement et l'ensemble du personnel à tous les niveaux sont capables de placer leurs propres objectifs dans le cadre des missions et vision de l'entreprise en matière de sécurité des aliments, hygiène, amélioration de la santé du consommateur." },
        { id: 1, text: "La vision / politique de l'entreprise sont diffusées, des objectifs généraux sont disponibles, L'encadrement connait ses propres objectifs sans focus particulier sur la sécurité des aliments." },
        { id: 2, text: "Les objectifs de sécurité des aliments sont clairement décrites dans la politique / engagements diffusés et compris : référence par exemple à la santé des consommateurs, à l'engagement dans l'amélioration nutritionnelle, etc…." },
        { id: 3, text: "La sécurité des aliments est une valeur fondamentale de l'entreprise : des actions en matière d'amélioration sont menées, L'encadrement et le personnel peuvent les énoncer clairement (dernier investissement en la matière ou décision prise)." },
        { id: 4, text: "Le personnel et l'encadrement ont connaissances qu'une politique existe sans plus de détail." },
      ],
      cat:"Vision",
    },{
      text: " En tenant compte des disparités et de l'historique de chacun. Comment définirez-vous l'engagement du personnel de production?.",
      options: [
        { id: 0, text: "Personnel hautement engagé et motivé, les employés s'inspirent les uns des autres pour faire de leur mieux et souhaitent identifier ce qu'ils peuvent faire pour les autres, Intérêt actif manifeste pour l'amélioration continue de la sécurité des aliments :-incitations récompenses pour la conformité et application cohérente des normes internes, encouragements des suggestions d'amélioration " },
        { id: 1, text: "Assez neutre : n'apprécie pas vraiment ses taches mais s'en accommode .Les agents de maitrise sont responsables de l'élaboration et de l'application des procédures. Le personnel fait ce qu'il pense être approprié en fonction de ce qui lui est imposé." },
        { id: 2, text: "Relativement engagé : fier de travailler dans l'entreprise sans toutefois en parler aux autres .Doute de l'importance du risque posé par la sécurité des aliments et de l'efficacité des réglementations et des exigences en matière d'hygiène des aliments sur le mode 'On a toujours fait comme ça'" },
        { id: 3, text: "Engagé: ressent entre une partie vitale de l'entreprise ; sentiment d'accomplissement dans ses taches. L'engagement des employés est accepté pour aider à se conformer à la réglementation .élaboration des procédures en matière de sécurité des aliments avec la participation du personnel à qui on offre la possibilité de commenter une fois terminée."},
        { id: 4, text: "Principalement désengagé : travaillant principalement par crainte de perdre son emploi : pas particulièrement satisfait ni enthousiasmé par ses tâches." },
      ],
      cat:"Personnel",
    },{
      text: "D'après vous l'engagement de la direction en matière de sécurité des aliments est-il:",
      options: [
        { id: 0, text: "En Cohérence avec les valeurs de l'entreprise et ses dirigeants depuis une longue période en allant au-delà des attentes clients. " },
        { id: 1, text: "Adapté et évolutif en fonction des demandes des clients et des possibilités financières. " },
        { id: 2, text: "Encore limité pour des multiples raisons de moyens financiers, de marchés, techniques. "},
        { id: 3, text: "En nette amélioration s'appuyant sur des décisions successives et des projets qui ne sont pas directement demandés par les clients." },
        { id: 4, text: "Conforme aux demandes explicites des clients et des autorités. " },
      ],
      cat:"Vision",
    },{
      text: " Au regard de la sécurité des aliments, comment la relation entre les parties prenantes (fournisseurs, Agences d'intérim….) est-elle gérée?",
      options: [
        { id: 0, text: "Analyse de performance des prestataires est mise en place des plans d'amélioration continue sont établis et des collaborations pour améliorer les objectifs communs. "},
        { id: 1, text: "Les parties prenantes / prestataires cherchent uniquement à se conformer aux exigences minimales (légales)."},
        { id: 2, text: "La sélection et l'évaluation des parties prenantes /prestataires intègrent des indicateurs en matière de sécurité des aliments et sont revus quant cela est possible. Les connaissances de certains prestataires / fournisseurs des problèmes liés à la sécurité des aliments sont faibles .Confusion fréquente entre problème qualité et problème lié à la sécurité des aliments." },
        { id: 3, text: "Les objectifs communs en matière de sécurité des aliments sont discutés afin d'être en cohérence aussi bien sur des aspects pratiques (tenues, corps étrangers,….) que sur les valeurs." },
        { id: 4, text: "Aucun outil ou mécanisme n'est mis en place pour la surveillance de la conformité des accords avec les prestataires en matière de sécurité des aliments." },
      ],
      cat:"Cohérence",
    },{
      text: "Sur la dernière année; pourriez-vous identifier le nombre de signalement de risque produits / non-conformité identifiée en production par les opérateurs?",
      options: [
        { id: 0, text: "Quasi systématiquement lors de chaque réunion de production / d'équipe des retours d'informations et des propositions sont fatales et suivies."},
        { id: 1, text: " est  lié à des problèmes de production / qualité également. " },
        { id: 2, text: "Plus d'une dizaine de différentes importances (indiquant des propositions d'amélioration)." },
        { id: 3, text: "plus d'une vingtaine et ou très régulièrement. " },
        { id: 4, text: "Aucun signalement (malgré des NC identifiées lors d'audits internes / externes)." },
      ],
      cat:"Sensibilisation",
    },{
      text: " Selon vous, à quel stade, est l'approche managériale des RH,  concernant la composante mission et adaptabilité ? :",
      options: [
        { id: 0, text: "Il existe des stratégies très sophistiquées et intégrées à court et à long terme  RH. La stratégie est continuellement examinée pour s'assurer qu'elle est en phase avec l'entreprise et qu'elle évite le risque. Les employés sont attirés par cette organisation en raison de sa réputation de culture de ressources humaines diversifiée. Les employées reçoivent des informations en temps réel sur les performances afin de pouvoir des mesures immédiates pour s'adapter." },
        { id: 1, text: "Les stratégies concernant les talents critiques et les fonctions d'apprentissage (acquisition de talents, développement et gestion de la performance) sont gérées par des projets mais ne sont pas intégrés. Les RH commencent à s'engager de manière plus proactive dans l’entreprise, mais les efforts ne sont pas cohérents et le changement tend à se faire lentement. Une plus grande appréciation de la participation des employés au développement et à la carrière commence à émerger." },
        { id: 2, text: "Les processus clés d'apprentissage et de gestion des talents commencent à s'intégrer au fur et à mesure que l'organisation reconnait la nécessité d'une plus grande adaptabilité. La cascade d'objectifs organisationnels comme moyen de guider les objectifs individuels ou d'équipe et le développement commence à devenir omniprésente. Les employés sont plus responsables de diriger leur développement et leur carrière avec l'appui des RH." },
        { id: 3, text: "Tous les aspects (attraction des talents, développement, promotion, mobilités, engagement et récompenses) sont liés les uns aux autres afin d'accroitre le rendement de l’entreprise. L'exploitation de talents interne devient plus faible. Les employés font preuve d'une grande responsabilité pour tirer part de ce que l'organisation fournit au travers des RH." },
        { id: 4, text: "Une stratégie globale d'apprentissage 'a minima' oriente les efforts de l'équipe des ressources humaines, L’équipe des ressources humaines est en grande partie en mode 'réactif' pour les processus (recrutement, formation, intégration, conformité, etc…) . Les RH sont perçues par les employés comme passifs pour faire progresser leur développement et leur carrière. Une grande partie des besoins en formation sont obligatoires." },
      ],
      cat:"Adaptabilité",
    },{
      text: " En matière de sécurité des aliments, quel serait le niveau de compréhension des risques par la direction et l'encadrement ?",
      options: [
        { id: 0, text: "Des messages proactifs sur la sécurité des aliments sont intégrés aux communications régulières de la direction. La direction est impliquée dans toute discussion liée à des risques et des mesures de contrôle. L'organisation dispose d'un système pour évaluer la compréhension et les performances des employés" },
        { id: 1, text: "L'encadrement peut comprendre les sujets liés à la sécurité des aliments, mais considère que cela relève de la responsabilité des équipes qualité. Les discussions liées aux actions en cas de risques émergents doivent être validées par la direction." },
        { id: 2, text: "Tous les cadres sont formés à l’HACCP, Formation supplémentaire sur les risques critiques pour la sécurité sanitaire des aliments ? Mécanisme de communication mis en place pour tenir les dirigeants informés des problèmes liés à la sécurité des aliments." },
        { id: 3, text: "La direction et l'encadrement sont impliqués dans l'analyse de risque et la prise de décision concernant la sécurité des aliments. L'encadrement participe à toutes les sessions de formation liées aux risques et aux réunions de suivi des plans d'actions." },
        { id: 4, text: "Le concept de la sécurité des aliments n'est pas intégré par la direction qui délègue entièrement au service qualité. " },
      ],
      cat:"Sensibilisation",
    },{
      text: " Comment placez-vous l'implication des ressources humaines dans le processus de sécurité des aliments ? :",
      options: [
        { id: 0, text: "Sont intégrées au processus dans son ensemble et ont une démarche active dans la sélection et l'accompagnement des ressources. "},
        { id: 1, text: "Peu de relations, le service qualité assure la gestion de l'hygiène."},
        { id: 2, text: "Gèrent de manière proactive, dans le respect des valeurs et des missions de l’entreprise, afin de détecter les défaillances et adapter les postes / personnes .Organisent de manière globale la communication, les évaluations et la coordination pour mettre en confiance le personnel. " },
        { id: 3, text: "Participent aux réunions pour l'évaluation des compétences et les retours d'information de la production / service qualité." },
        { id: 4, text: "Assurant le suivi documentaire des formations hygiène, font un suivi avec les agences d'intérim et gèrent le budget formation. " },
      ],
      cat:"Cohérence",
    },{
      text: " En matière d'implication du management et de l’encadrement, le quelle de ces affirmations serait la plus proche de la situation actuelle ?",
      options: [
        { id: 0, text: "Les dirigeants donnent l'exemple et encouragent les comportements souhaites de la part de leur personnel en matière de sécurité des aliments conformément à la réglementation. Les dirigeants contestent et punissent les mauvaises pratiques d'hygiène. " },
        { id: 1, text: "Le minimum d'investissement est assuré pour respecter la réglementation en mode réactif."},
        { id: 2, text: "Le personnel est encouragé fréquemment à appliquer les procédures de sécurité des aliments par la direction qui ne manque pas d'expliquer pourquoi cela est nécessaire et met en avant les bonnes pratiques .Par exemple : intérêt actif évident pour la sécurité des aliments ; leadership des ressources humaines à travers de bons exemples." },
        { id: 3, text: "Les dirigeants ont du mal à incarner des comportements modèles en matière de sécurité des aliments. Les mauvaises pratiques en matière de sécurité des aliments restent incontestées et aucun commentaire n'est fourni concernant les comportements en matière d’hygiène. par exemple la direction ne respecte pas les règles relatives aux vêtements de protection." },
        { id: 4, text: "Manque d'initiative et de motivation de la part de l'entreprise -faible présence / direction de l'entreprise sur le lieu de travail en ce qui concerne la sécurité des aliments, sauf lors d'inspections ou d'audits externes. " },
      ],
      cat:"Cohérence",
    },{
      text: " Comment percevez-vous de manière globale, la capacité des employés de IAT, dans la gestion des changements, des crises et dans la résolution des problèmes liés à la sécurité des aliments ? :",
      options: [
        { id: 0, text: "Les cas de gestion de crises ou tests réalisés par le passé ont montré une bonne volonté de la part des employés. Bien qu'un manque d'initiative soit constaté cela sans freiner les changements qu’ils sont suivis." },
        { id: 1, text: "L'encadrement assure la gestion, le personnel n'est pas en mesure de prendre les décisions en cas de changements. "},
        { id: 2, text: "Le système en place permet à tout le personnel de prendre les initiatives et de s'adapter de manière cohérente aux changements induits. Des exemples récents permettent de le démontrer. "},
        { id: 3, text: "Les agents de maitrise assurent de manière réactive les adaptations ou les gestions de crises mais pas au niveau personnel de production."},
        { id: 4, text: "Certains employés ont montré des capacités à s'adapter aux changements rapides mais une majorité (encadrement de terrain inclus) évitent les initiatives." },
      ],
      cat:"Adaptabilité",
    },{
      text: " Comment qualifieriez-vous la compréhension par les employés des responsabilités et des autorités en matière de sécurité des aliments?:",
      options: [
        { id: 0, text: "La description des tâches et des responsabilités sont assez claires, tout écart est identifié et enregistré. L'autorité de blocage est assurée mais les décisions restent à la charge de la hiérarchie." },
        { id: 1, text: "Les tâches unitaires en termes de production ont été transmises, la sécurité des aliments est assurée par le contrôle qualité. " },
        { id: 2, text: "Responsabilités et autorités sont suffisamment décrites dans la documentation mais elles sont complètes par la coordination avec les autres services en interface et la communication transversale est également assurée par la pro-activité. "},
        { id: 3, text: "Les fiches des postes indiquent les étapes à assurer pour la bonne conduite des opérations et les contrôles spécifiques (HACCP, Hygiène). En cas de déviations, il y a devoir d'informations à la hiérarchie. " },
        { id: 4, text: "Les contrôles et les opérations à effectuer ont été définis, l'encadrement et le service qualité orienter en cas de besoins .Si les activités ne sont pas décrites aucune action / intervention ne doit être assurée." },
      ],
      cat:"Cohérence",
    },{
      text: " Combien pourriez-vous citer d'actions / décisions,  confirmant les valeurs en matière de sécurité des aliments (investissement, changement, organisation, relations clients, gammes de produits….)?:",
      options: [
        { id: 0, text: "plus de 5", isCorrect: false },
        { id: 1, text: "Aucune (ou pas clairement liée)", isCorrect: true },
        { id: 2, text: "Toutes ( ou presque = la composante santé santé consommateur est toujours liée)", isCorrect: false },
        { id: 3, text: "3 à 5", isCorrect: false },
        { id: 4, text: "1 ou 2", isCorrect: false },
      ],
      cat:"Vision",
    },{
      text: " Quel serait le niveau d'agilité de notre système mis en place? :",
      options: [
        { id: 0, text: "Adaptatif : le système et les supports prévoient des niveaux de tolérances pour les modifications ponctuelles et les autorités sont définies." },
        { id: 1, text: "Evolutif : Affichage général, rappel des consignes en cas de réclamations. "},
        { id: 2, text: "Participatif : en plus de l’affichage, réunions d'équipe régulières avec les rappels des faits marquants et suivi par l'encadrement terrain." },
        { id: 3, text: "Classique : Affichage, déclaration 'qualité' comme demandé par les normes."},
        { id: 4, text: "Adapté : Diffusion par plusieurs canaux officiels et informels, explicite concernant les objectifs / valeurs et les indicateurs de terrain. "},
      ],
      cat:"Adaptabilité",
    },{
      text: " Parmi ces indicateurs quels sont ceux dont vous disposez pour le suivi de la Culture du risque ?:",
      options: [
        { id: 0, text: "Nombre d’incidents déchets/ non conformités internes détectées / conformité dès la première fois." },
        { id: 1, text: "Conformité contrôle hygiène / réalisation des formations. " },
        { id: 2, text: "Conformité dès la première fois / niveau de récurrence / nombre de rapports de consignes." },
        { id: 3, text: "Conformité contrôle hygiène / réclamations / nombre de presqu'incidents. " },
        { id: 4, text: "Conformité contrôle hygiène / réalisation formation / non conformités interne / réclamations. "},
      ],
      cat:"Sensibilisation",
    },{
      text: " Quelle est la position au regard du système de récompense concernant les bonnes pratiques en sécurité des aliments?:",
      options: [
        { id: 0, text: "Le bon état d'esprit de la majorité du personnel ne nécessite pas une reconnaissance spéciale pour les comportements conformes."},
        { id: 1, text: "Pas de système de récompense ou d'encouragement. "},
        { id: 2, text: "Un système de récompense ou d'encouragement nuirait à l'ambiance générale et se justifie pas pour l'accomplissement de taches prévues dans les fiches de poste." },
        { id: 3, text: "Une politique de reconnaissance reconnue comme juste et transparente est mise en place avec un volet spécifique pour la sécurité des aliments." },
        { id: 4, text: "Politique de reconnaissance très générale sur plusieurs aspects (productivités, réclamation….) mais assez transparente (non individualisée)." },
      ],
      cat:"Personnel",
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (id,cat) => {
    // Increment the score
    if (id==0) {
      setScore(score + 100)
    
if(cat=="Vision"){
 SetVision(Vision+100)
 console.log(Vision)
}
if(cat=="Cohérence"){
  SetCohérence(Cohérence+100)
  console.log(Cohérence)
}
if(cat=="Personnel"){
  SetPersonnel(Personnel+100)
  console.log(Personnel)
}
if(cat=="Adaptabilité"){
  SetAdaptabilité(Adaptabilité+100)
  console.log(Adaptabilité)
}
if(cat=="Sensibilisation"){
  SetSensibilisation(Sensibilisation+100)
  console.log(Sensibilisation)
}

    }
/************************************ */
if (id==1) {
  setScore(score + 80)

if(cat=="Vision"){
SetVision(Vision+80)
console.log(Vision)
}
if(cat=="Cohérence"){
SetCohérence(Cohérence+80)
console.log(Cohérence)
}
if(cat=="Personnel"){
SetPersonnel(Personnel+80)
console.log(Personnel)
}
if(cat=="Adaptabilité"){
SetAdaptabilité(Adaptabilité+80)
console.log(Adaptabilité)
}
if(cat=="Sensibilisation"){
SetSensibilisation(Sensibilisation+80)
console.log(Sensibilisation)
}

}
/******************************************************* */
if (id==2) {
  setScore(score + 6)

if(cat=="Vision"){
SetVision(Vision+60)
console.log(Vision)
}
if(cat=="Cohérence"){
SetCohérence(Cohérence+60)
console.log(Cohérence)
}
if(cat=="Personnel"){
SetPersonnel(Personnel+60)
console.log(Personnel)
}
if(cat=="Adaptabilité"){
SetAdaptabilité(Adaptabilité+60)
console.log(Adaptabilité)
}
if(cat=="Sensibilisation"){
SetSensibilisation(Sensibilisation+60)
console.log(Sensibilisation)
}

}
/************************************************* */
if (id==3) {
  setScore(score + 40)

if(cat=="Vision"){
SetVision(Vision+40)
console.log(Vision)
}
if(cat=="Cohérence"){
SetCohérence(Cohérence+40)
console.log(Cohérence)
}
if(cat=="Personnel"){
SetPersonnel(Personnel+40)
console.log(Personnel)
}
if(cat=="Adaptabilité"){
SetAdaptabilité(Adaptabilité+40)
console.log(Adaptabilité)
}
if(cat=="Sensibilisation"){
SetSensibilisation(Sensibilisation+40)
console.log(Sensibilisation)
}

}
/********************************************** */
if (id==4) {
  setScore(score + 20)

if(cat=="Vision"){
SetVision(Vision+20)
console.log(Vision)
}
if(cat=="Cohérence"){
SetCohérence(Cohérence+20)
console.log(Cohérence)
}
if(cat=="Personnel"){
SetPersonnel(Personnel+20)
console.log(Personnel)
}
if(cat=="Adaptabilité"){
SetAdaptabilité(Adaptabilité+20)
console.log(Adaptabilité)
}
if(cat=="Sensibilisation"){
SetSensibilisation(Sensibilisation+20)
console.log(Sensibilisation)
}

}

    
  };
  const previous=()=> {
    
    

    if (currentQuestion>0) {
      setCurrentQuestion(currentQuestion -1);
    } 
    
  };
  const yesBtn = document.getElementById('a');

  const radio=()=> {
    
    

    document.getElementById(0).checked = false;
    document.getElementById(1).checked = false;   
    document.getElementById(2).checked = false;   
    document.getElementById(3).checked = false;   
    document.getElementById(4).checked = false;   
   
  };
  const next=()=> {
    
    

    if (currentQuestion<20) {
      setCurrentQuestion(currentQuestion +1);
    } 
    
    if(currentQuestion==18){
      BT()
      BTS()
    }
  };

  /* Resets the game back to default */
  const click = () => {
    
    optionClicked(repo.id,questions[currentQuestion].cat)
    setQST(current => [...current, repo.text,questions[currentQuestion].text,repo.id])
    
  };
  function BT() {
    var x = document.getElementById("BT");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
  }
  function BTS() {
    var x = document.getElementById("BTS");
    if (x.style.display === "block") {
      x.style.display = "none";
    } 
  }
 var i=0
  const [key, setKey] = useState(0);

  const clearClickHandler = () => setKey((k) => k + 1);
  const [color, setColor] = useState('black');

  const handleColor = e => {
    questions[currentQuestion].options[1].text.color('red')
};


  return (
    <div style={{minWidth:"1300px"}}>
        <div style={{height:"15px",backgroundColor:"#177985"}}></div>
    <div style={{backgroundImage: 
 "url('images/cheese6.png')",
 height:'70px',
 maxHeight:'80px',
        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}> 
      <table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"70%",height:"50px",cursor:"pointer"}} onClick={()=>navigate("/")}></img>
</td><td style={{float:"right",marginTop:"20px"}}>        <Navbar/>
</td></tr></table></div>
<div style={{backgroundColor:"#177985",height:"120px"}}><center><h3  style={{color:"white",paddingTop:"25px"}}>Food Safety Culture : Auto-évaluation
</h3><h3 style={{color:"white"}}>Culture Sécurité des Aliments</h3></center></div>
    <div  style={{backgroundImage: 
 "url('images/cheese2.jpg')",
        height:'110%',
        position:"block",
        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div style={{backgroundImage: 
          "url('images/cheese6.jpg')",
                 height:'100vh',
                 marginTop:'0px',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 width:"100%"}}>
                         
                  <table   style={{width:"100 %",marginLeft:'20%'}}> <center><tr><td><h1 style={{color:"white",backgroundColor:"#177985"}}>Resultats Finale {(score / questions.length) }%</h1>
          <h2 style={{color:"white",backgroundColor:"#177985"}}>
           
            
          </h2></td><td>  <td style={{width:"200px",height:'200px'}} rowSpan={5}> <GaugeChart id="gauge-chart2" 
                           colors={['#FF5F6D', '#FFC371','#25CF00']}
                           
  nrOfLevels={20} 
  percent={  score /20/100} 
  needleColor="grey"
  textColor="blue"
/>               </td></td></tr></center></table>

<div class="card text-white bg-dark mb-3">
        <center> <span style={{color:"white",fontSize:"40px",fontWeight:"bold"}}>Merci pour votre participation</span></center>
        </div>
        <center><span style={{cursor:"pointer",color:"#177985",backgroundColor:"white",fontSize:"25px",fontWeight:"bold"}} onClick={()=>navigate("/")}>Retour à la page d'accueil</span></center>
        

        </div>
        
      ) : (
        
       <div style={{backgroundImage: 
        "url('images/cheese2.jpg')",
               height:'200vh',
               marginTop:'0px',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat'}} >
         <div  style={{backgroundImage: 
 "url('images/cheese2.jpg')",
        height:'8vh',
        position:"block",
        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}></div>
        <div className="quiz_box" >
          {/* Current Question  */}
          <header>
          <div  style={{color:"#177985",fontSize:"25px",fontWeight:"bold"}}>{questions[currentQuestion].text}  </div>
          </header>
          <h3 className="question-text"style={{textAlign: 'center'}}></h3>

          {/* List of possible answers  */}
          <ul class="inline">
            {questions[currentQuestion].options.map((option) => {
              return (
                <>                      
                        <li
                style={{background: "aliceblue",
                  border: "1px solid #84c5fe",borderRadius:"5px", padding:" 8px 15px",
                  fontSize: "17px",
                  marginBottom: "15px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                  key={option.id}
                  //onClick={() => optionClicked(option.isCorrect)}
                 
                  
                >
                  
                  <table><tr><td>  <label class="container" style={{marginRight:"30px"}}>
  <input type="radio"  name="Answer" id={i}  onClick={()=>(setRepo(option)+console.log("reponse now",repo))}></input>
  <span class="checkmark"></span>
</label> </td><td> {option.text}</td></tr></table>
                  <div style={{color:"aliceblue",fontSize:'0px'}}>{i++}</div>
                </li>
                
                </>

              );
            })}
          </ul>
          <footer>
          <div class="total_que">
          Question: {currentQuestion + 1} sur {questions.length}

            </div>
            <div id="BTS" style={{display: 'block' }}>

          <Button variant="success"  onClick={() =>next()+radio()+setQST(current => [...current, repo.text,questions[currentQuestion].text,repo.id])+optionClicked(repo.id,questions[currentQuestion].cat)+setRepo('')}>Suivant</Button></div>
          <div id="BT" style={{display: 'none' }}>

          <Button variant="warning"  onClick={() => handleViewShow(click())}>Terminer</Button>
          </div>
          </footer>
        </div>
        </div>
      )}
      </div>
      <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                    size={"m"}
                >
                    <Modal.Header >
                        <Modal.Title>
                        <span style={{color:"red",marginLeft:"0%",fontWeight:"bold"}}>Félicitations ! </span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <center> <span style={{marginLeft:"40px",fontWeight:"bold",padding:'5px',fontSize:"20px"}}>Vous avez terminé le questionnaire</span></center><br></br>
                        
                    </Modal.Body>
                    <ModalFooter>
                    <div>
                       <center> <Button variant="info"  onClick={() =>setShowResults(true)+handledata()+hanldeViewClose()}> <b>Voir le résultat</b></Button></center>

                          
                        </div>
                    </ModalFooter>
                   
                </Modal>
            </div>
    </div>
    
  );
  
}

export default About;
