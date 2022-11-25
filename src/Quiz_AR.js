import React, { useState,useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Button, Modal, ModalFooter, ModalTitle,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";
import GaugeChart from 'react-gauge-chart'
import Navbar_AR from "./components/index_AR";import Timer from "./Timer";
import { useNavigate } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";


function About_AR() {
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
      text: " الرسالة و / أو الاتصال (الإبلاغ ) بشأن جوانب الصحة وسلامة المواد الغذائية لمنتجاتنا يتم تعريفهما على النحو التالي",
      options: [
        { id: 0, text: "مبتكرة ، استخدام الأساليب والأدوات الحديثة (الشبكات الاجتماعية الداخلية ، الإنترانت ، مشاركة الجميع في نشر الرسالة) ، يعتمد على قادة الرأي الداخلي ، ويتجاوز حياة الشركة من خلال دمج  قيمة 'المسؤولية'  للشركة والأطراف المهتمة"},
        { id: 1, text: "             قابلة للتطوير : عرض/ نشر عام ، تذكير بالتراتيب / التوجيهات في حالة وجود شكوى الزبائن" },
        { id: 2, text: "تشاركية : بالإضافة إلى النشر ، اجتماعات منتظمة للفريق مع تذكير بالأحداث الناقصة ومتابعة من قبل الرؤساء على الميدان" },
        { id: 3, text: "كلاسيكية: عرض إعلان 'الجودة' كما هو مطلوب بالمعايير / المواصفات الدولية" },
        { id: 4, text: "مُكيَّفة : النشر من خلال العديد من القنوات الرسمية وغير الرسمية ، بشكل واضح فيما يتعلق بالأهداف / القيمة والمؤشرات الميدانية" },
        
      ],
      cat:"Vision",
    },
    {
      text: "في ما يتمثل تدريب الموظفين على الأخطار والمخاطر المتعلقة بسلامة المواد الغذائية ؟:",
      options: [
        { id: 0, text: "إلى جانب القواعد المتعلقة بالممارسات الجيدة، يتم التعامل مع الحالات الملموسة والمحاكاة التي تسمح بتقييم الفهم الجيد للمخاطر، حيث يطرح العمال أنفسهم عناصر إضافية لتغذية التدريبات/التكوين من خلال دمج المخاطر الجديدة المكتشفة."},
        { id: 1, text: "لا يُطلب من جميع الموظفين الحضور وهناك عدد قليل من سجلات التدريبات/التكوين التي أجريت (لا يوجد اختبار رسمي للكفاءة والفهم)"},
        { id: 2, text: "يوجد نظام تدريب/ تكوين رسمي (تدريب أولي و تجديدي)، يفهم العمال القواعد العامة لسلامة المواد الغذائية، لكنهم لا يحترمونها دائمًا." },
        { id: 3, text: "يتم تكييف البرامج التدريبية (التكوين) بشكل مستمر وفقًا لتطور الفريق, الممارسات الجيدة متابعة على نطاق واسع (وفقًا لمؤشرات موثقة)" },
        { id: 4, text: "لا يوجد تدريب/ تكوين أو تدريب فقط على مطابقة المواصفات (BPH ، ومبادئ HACCP العامة ، وما إلى ذلك)" },
      ],
      cat:"Sensibilisation",
    },
    {
      text: "من حيث نظام الإنذار، أي من الاقتراحات التالية سيكون الأنسب ؟.",
      options: [
        { id: 0, text: "يتم التشجيع بشدة على الإبلاغ عن الانحرافات على جميع مستويات التسلسل الهرمي ويتم توفير المراجعات المنتظمة لإثبات المراقبة المناسبة لهذه الإجراءات ، النظام المجهول أو لا يعتمد على الدرجة في مكانه ووظيفته." },
        { id: 1, text: "تم إعداد نظام تنبيه بناءً على طلب الزبائن ولكنه لا يزال قليل الاستخدام ورسمي إلى حد ما." },
        { id: 2, text: "تم إعداد أداة تنبيه و عرض/ نشر في الانتظار، ولكن لا يُرى جيدًا في الشركة للإبلاغ والتصريح."},
        { id: 3, text: "لقد اعتاد الموظفون على الإبلاغ عن جميع الأنشطة اللامقبولة  بشكل غير رسمي لمديريهم التنفيذيين ويثقون بهم للمتابعة." },
        { id: 4, text: "لا يوجد نظام للإبلاغ عن المخالفات,  العمال لا يتم إبلاغهم." },
      ],
      cat:"Adaptabilité",
    },
    {
      text: "المؤشرات المتعلقة بالتطبيق السليم لقواعد ممارسات سلامة المواد الغذائية من قبل الموظفين هي:",
      options: [
        { id: 0, text: "قابلة للتطوير والتكيف مع جمع البيانات المتعلقة بالنتائج من حيث النظافة وتكرار الانحرافات , تقييم الأشخاص بناءً على المقابلات واستبيانات التقييم لقياس تطبيق الإجراءات وكذلك التفاعل."},
        { id: 1, text: "موصوفة و متابعة على أساس مراقبة حفظ الصحة في ورشة العمل، التدقيق، شكاوى الزبائن." },
        { id: 2, text: "تتم مراقبتها بشكل أساسي من خلال إكمال التدريب الداخلي والتقييمات بناءً على جدول المهارات." },
        { id: 3, text: "تم تأسيسها بشكل واضح على مجموعة من الممارسات الجيدة للسلوك ونتائج فعالية حفظ الصحة." },
        { id: 4, text: "تعريف غامض، مدرج في مؤشرات شكاوى الزبائن وحفظ الصحة." },
      ],
      cat:"Personnel",
    },
    {
      text: "فيما يتعلق بتدريب/ تكوين المشرفين الميدانيين والعملة، أي من هذه التأكيدات سيكون أكثر تمثيلاً لموقفك:",
      options: [
        { id: 0, text: "يعد التدريب /التكوين على سلامة المواد الغذائية جزءًا لا يتجزأ من الأدوار الإشرافية وقد تم تصميمه لمجالات محددة ، ولكن جميع المشرفين قادرون على شرح مجالات المخاطر الرئيسية. فهم يعملون دائمًا كأمثلة جيدة 'كمضاعفات’ للمعرفة بسلامة المواد الغذائية ويشجعون فرقهم التشغيلية (العملة) على التصرف بشكل استباقي." },
        { id: 1, text: "لا يوجد نظام تدريب / تكوين رسمي: يتم تنظيم بعض الجلسات المخصصة، وليس كل المشرفين حاضرين وقليل من التسجيلات الرسمية. لا يوجد اختبار موثق للمهارة والفهم." },
        { id: 2, text: "لا تزال الشركة في وضع رد الفعل ، ولكنها نفذت نظام تدريب وتطوير الموظفين الرسمي ، يظل النظام عمومًا بدون أدوار ومسؤوليات محددة تتعلق بسلامة المواد الغذائية. تغطي المواد التدريبية الأساسيات ولكنها لا تتناول المخاطر والعواقب المحتملة." },
        { id: 3, text: "  الرسائل الاستباقية لسلامة المواد الغذائية مدمجة في اتصالات الإدارة العليا المنتظمة ويتم نشرها ,نظام تدريب /  تكوين إداري رسمي مطبق. تؤكد المواد التدريبية على أهمية سلامة المواد الغذائية للموظفين وكذلك المعدات والممارسات الروتينية من خلال تسليط الضوء على المخاطر وعواقبها المحتملة" },
        { id: 4, text: "مواد تدريبية غير موجودة أو منتجة بشكل سيئ ، محتوى ضعيف أو غير مناسب للشركة. يقتصر التركيز التعليمي على المهارات الفنية أو يركز فقط أو بشكل أساسي على صحة الموظفين. تعتبر سلامة الأغذية ممارسة لا تتطلب تدريبًا نظريًا." },
      ],
      cat:"Personnel",
    },
    {
      text: "كيف تصف مستوى المعرفة لمهمة / رؤية الشركة فيما يتعلق بسلامة المواد الغذائية؟.",
      options: [
        { id: 0, text: "يمكن لجميع أعضاء الإدارة المشرفين وجميع الموظفين على جميع المستويات وضع أهدافهم الخاصة في إطار مهام الشركة ورؤيتها فيما يتعلق بسلامة المواد الغذائية وحفظ الصحة وتحسين صحة المستهلك." },
        { id: 1, text: "يتم نشر رؤية / سياسة الشركة، والأهداف العامة متاحة، ويعرف المشرفين أهدافهم الخاصة دون أي تركيز خاص على سلامة المواد الغذائية."},
        { id: 2, text: "يتم وصف أهداف سلامة المواد الغذائية بوضوح في السياسة / الالتزامات المنشورة والمفهومة: الإشارة على سبيل المثال إلى صحة المستهلكين ، والالتزام بتحسين التغذية ، إلخ ...." },
        { id: 3, text: "سلامة المواد الغذائية هي قيمة أساسية للشركة: يتم تنفيذ إجراءات التحسين ويمكن للمشرفين والموظفين توضيحها (آخر استثمار في العمل أو القرار المتخذ)." },
        { id: 4, text: "يدرك الموظفون والمشرفين أن السياسة موجودة دون مزيد من التفاصيل." },
      ],
      cat:"Vision",
    },{
      text: "مع مراعاة التفاوت وأقدمية كل شخص. كيف تحدد/  تعرف التزام فريق الإنتاج ؟.",
      options: [
        { id: 0, text: "الموظفون/ العمال متفاعلون ومتحمسون للغاية ، يلهم الموظفون/ العمال بعضهم البعض لبذل قصارى جهدهم ويريدون تحديد ما يمكنهم فعله للأخرين ، وأظهروا اهتمامًا نشطًا بالتحسين المستمر لسلامة المواد الغذائية: - مكافآت الحوافز للامتثال والتطبيق  المتناسق للمعايير الداخلية ، وتشجيع الاقتراحات للتحسين"},
        { id: 1, text: "محايد تمامًا : الموظفون/ العمال لا يقدرون مهامهم حقًا ولكنهم يستوعبونها. المشرفون مسؤولون عن تطوير الإجراءات وتطبيقها. يقوم الموظفون/ العمال بما يعتقدون أنه مناسب في ضوء ما هو مطلوب منهم." },
        { id: 2, text: "ملتزم نسبيًا : الموظفون/ العمال فخورين بالعمل في الشركة ولكن دون التفاعل مع الآخرين . يشك الموظفون/ العمال في أهمية مخاطر سلامة المواد الغذائية وفعالية لوائح ومتطلبات سلامة المواد الغذائية على الوضع ‘لقد فعلنا ذلك دائمًا بهذه الطريقة’"},
        { id: 3, text: "ملتزم : يشعر بأنه جزء حيوي من الشركة, شعور بالإنجاز في مهامه. يتم قبول مشاركة الموظفين (العملة) للمساعدة في الامتثال لللوائح .تطوير إجراءات سلامة المواد الغذائية مع تدخلات و اقتراحات من الموظفين (العملة) الذين أتيحت لهم الفرصة للتعليق عند الانتهاء." },
        { id: 4, text: "غير مرتبط بشكل أساسي : الموظفون/ العمال يعملون بشكل أساسي خوفًا من فقدان الوظيفة: غير راضٍون بشكل خاص أو غير متحمسين لمهامهم." },
      ],
      cat:"Personnel",
    },{
      text: " حسب رأيك، هل التزام الإدارة بسلامة المواد الغذائية هو:",
      options: [
        { id: 0, text: "متماشي مع قيم الشركة وقادتها منذ فترة طويلة من خلال تجاوز توقعات الزبائن" },
        { id: 1, text: "متكيف وقابل للتطوير وفقًا لطلبات الزبائن والإمكانيات المالية" },
        { id: 2, text: "لا يزال محدودا لأسباب متعددة من الوسائل المالية ,الأسواق ,التقنيات "},
        { id: 3, text: "يتحسن بشكل واضح بناءً على القرارات والمشاريع المتعاقبة التي لا يطلبها الزبائن بشكل مباشر" },
        { id: 4, text: "متوافق مع الطلبات الصريحة من الزبائن والسلطات" },
      ],
      cat:"Vision",
    },{
      text: "فيما يتعلق بسلامة المواد الغذائية ، كيف تدار العلاقة مع الأطراف المهتمة (الموزدين ، الوكالات المؤقتة ، إلخ)؟",
      options: [
        { id: 0, text: "يتم وضع تحليل الكفاءة لمقدمي الخدمات ، ووضع خطط التحسين المستمر ، وإنشاء أوجه التعاون لتحسين الأهداف المشتركة" },
        { id: 1, text: "تسعى الأطراف المهتمة / مقدمي الخدمات فقط إلى الامتثال للحد الأدنى من المتطلبات (القانونية)"},
        { id: 2, text: "يتضمن اختيار وتقييم الأطراف المهتمة / مقدمي الخدمات مؤشرات سلامة المواد الغذائية وتتم مراجعتها كلما أمكن ذلك. معرفة بعض المزودين بقضايا سلامة الأغذية منخفضة، والخلط المتكرر بين قضية الجودة ومسألة سلامة المواد الغذائية." },
        { id: 3, text: "تتم مناقشة الأهداف المشتركة من حيث سلامة المواد الغذائية من أجل أن تكون متناسقة في كل من الجوانب العملية (الملابس ، الأجسام الغريبة ، وما إلى ذلك) والقيم." },
        { id: 4, text: "لا توجد أدوات أو آليات لمراقبة الامتثال / التطابق لاتفاقيات ضمان سلامة المواد الغذائية مع مقدمي الخدمات" },
      ],
      cat:"Cohérence",
    },{
      text: "خلال العام الماضي؛ هل يمكنك تحديد عدد تقارير المخاطر التي صارت للمنتوج / عدد المخالفات في الإنتاج من قبل  العملة؟",
      options: [
        { id: 0, text: "بشكل  منتظم تقريبًا خلال كل اجتماع إنتاج / فريق ، تكون التعليقات والمقترحات هامة جدا ويتم اتباعها" },
        { id: 1, text: "متعلقة بمشاكل الإنتاج / كذلك الجودة."},
        { id: 2, text: "أكثر من عشرة تقارير مهمة للغاية (تشير إلى اقتراحات للتحسين)" },
        { id: 3, text: "أكثر من عشرين و / أو بشكل منتظم للغاية" },
        { id: 4, text: "لا توجد تقارير (على الرغم من المخالفات المكتشفة أثناء عمليات التدقيق الداخلية / الخارجية)" },
      ],
      cat:"Sensibilisation",
    },{
      text: "في أي مرحلة من مراحل نهج إدارة الموارد البشرية ستكون معنيا فيما يتعلق بمكون المهمة والقدرة على التكيف:",
      options: [
        { id: 0, text: "هناك استراتيجيات متطورة للغاية ومتكاملة على المدى القصير والطويل  للموارد بشرية. تتم مراجعة الاستراتيجية باستمرار لضمان توافقها مع الشركة وتجنب المخاطر. ينجذب العمال إلى هذه الشركة بسبب سمعتها في ثقافة الموارد البشرية المتنوعة. يتلقى الموظفون معلومات  في الوقت الفعلي عن الكفاء ة حتى يتمكنوا من اتخاذ إجراءات فورية للتكيف." },
        { id: 1, text: "  الاستراتيجيات المتعلقة  بالمواهب ووظائف التعلم (استحواذ المواهب ، التطوير وإدارة الكفاء ة) تدار بواسطة المشاريع ولكنها غير متكاملة. بدأت الموارد البشرية في الانخراط بشكل استباقي الشركة ، لكن الجهود غير  متلائمة ويميل التغيير إلى أن يأتي ببطء. هنالك تقدير أكبر لمشاركة العمال في التطوير والمهنية بدأت في الظهور."},
        { id: 2, text: "العمليات المفتاح للتعلم وإدارة المواهب بدأت في الادماج حيث تدرك الشركة الحاجة إلى قدر أكبر من التكيف. مجموع الأهداف التنظيمية كوسيلة لتوجيه الأهداف الفردية أو الجماعية و التطوير واسعة الانتشار. يتحمل الموظفون / العمال مسؤولية أكبر عن قيادة تطورهم ومسارهم المهني بدعم من الموارد البشرية" },
        { id: 3, text: "جميع الجوانب (جذب المواهب ، التطوير ، الترقية الوظيفية ،  الالتزام والمكافآت) مرتبطة ببعضها البعض من أجل زيادة أداء الشركة.  استغلال المواهب الداخلية أصبح أضعف. يُظهر الموظفون/ العمال قدرًا كبيرًا من المسؤولية للاستفادة مما تقدمه الشركة من خلال الموارد البشرية" },
        { id: 4, text: "هنالك استراتيجية  شاملة للتعلم ‘الحد الأدنى’ توجه جهود فريق الموارد البشرية ، فريق الموارد البشرية  يعمل إلى حد كبير في وضع ‘رد الفعل’ للعمليات (التوظيف ، التدريب ، الإندماج ، التطابق ، إلخ ...). ينظر الموظفون / العمال إلى الموارد البشرية على أنها سلبية في تعزيز تطورهم و مسارهم المهني. جزء كبير من الحاجة إلى التدريب إلزامي." },
      ],
      cat:"Adaptabilité",
    },{
      text: "من حيث سلامة المواد الغذائية ، ما هو مستوى فهم المخاطر من قبل الإدارة العليا والإشراف (المشرفين)؟",
      options: [
        { id: 0, text: "تم دمج رسائل استباقية لسلامة المواد الغذائية في اتصالات الإدارة المنتظمة. تشارك الإدارة العليا في أي مناقشة تتعلق بالمخاطر وتدابير الرقابة. لدى الشركة نظام لتقييم فهم الموظفين/ العملة و أدائهم" },
        { id: 1, text: "قد يتفهم المشرفين المواضيع المتعلقة ببرنامج سلامة المواد الغذائية ، ولكن يعتبرون أن هذه مسؤولية فرق الجودة ، ويجب التحقق من صحة المناقشات المتعلقة بالإجراءات في حالة المخاطر الناشئة يجب أن تكون  مصادق عليها من قبل الإدارة العليا."},
        { id: 2, text: "يتم تدريب جميع المديرين والمشرفين الميدانيين على نظام تحليل المخاطر ونقاط التحكم الحرجة HACCP ، تدريب إضافي على المخاطر الحرجة لسلامة المواد الغذائية, تم وضع آلية اتصال لإبقاء المديرين على اطلاع بالمشاكل المتعلقة بسلامة المواد الغذائية" },
        { id: 3, text: "تشارك الإدارة  العليا والمشرفين في تحليل المخاطر واتخاذ القرارات المتعلقة بسلامة المواد الغذائية.  يشارك المشرفين في جميع الدورات التدريبية المتعلقة بالمخاطر و اجتماعات متابعة خطة العمل" },
        { id: 4, text: "  مفهوم سلامة المواد الغذائية لم يتم دمجه من قبل الإدارة العليا التي تفوضه إلى إدارة الجودة بالكامل"},
      ],
      cat:"Sensibilisation",
    },{
      text: "             كيف تضع اشتراك / اهتمام الموارد البشرية في خطوات (سلسلة) سلامة المواد الغذائية:",
      options: [
        { id: 0, text: "  الموارد البشرية يتم دمجها في السلسلة ككل ولها نهج نشط في اختيار ودعم الموارد" },
        { id: 1, text: "غياب التفاعل مع الموارد البشرية، يضمن قسم الجودة إدارة حفظ الصحة" },
        { id: 2, text: "    اهتمام الموارد البشرية يدار بصفة استباقية ، وفقًا لقيم ومهام الشركة ، من أجل اكتشاف حالات الأخطاء وتكييف الوظيفة / الأشخاص. تنظيم الاتصال و التبليغ ,والتقييمات والتنسيق لبناء ثقة الموظفين" },
        { id: 3, text: "شارك في اجتماعات تقييم المهارات وتعليقات قسم الإنتاج / الجودة" },
        { id: 4, text: "الموارد البشرية تسهر على متابعة وثائق التدريب على حفظ الصحة"},
      ],
      cat:"Cohérence",
    },{
      text: "من حيث مشاركة الإدارة العليا والإشراف ، أي من هذه التأكيدات ستكون الأقرب إلى الوضع الحالي؟",
      options: [
        { id: 0, text: "يقوم القادة بنمذجة وتشجيع سلوكيات سلامة المواد الغذائية المرغوبة لموظفيهم وفقًا للوائح. القادة  يعارضون ويعاقبون ممارسات حفظ الصحة السيئة"},
        { id: 1, text: "تم ضمان الحد الأدنى من الاستثمار للامتثال لللوائح القانونية في وضع رد الفعل" },
        { id: 2, text: "كثيرًا ما يتم تشجيع الموظفين على تطبيق إجراءات سلامة المواد الغذائية من قبل الإدارة العليا التي تشرح سبب ضرورة ذلك وتسلط الضوء على الممارسات الجيدة ، على سبيل المثال: الاهتمام الفعال الواضح بسلامة الأغذية ؛ قيادة الموارد البشرية من خلال الأمثلة الجيدة" },
        { id: 3, text: "يكافح القادة ( المديرين) لنمذجة سلوكيات سلامة المواد الغذائية . تظل ممارسات سلامة المواد الغذائية السيئة دون اعتراض ولا يتم تقديم أي تعليق بشأن سلوكيات حفظ الصحة. على سبيل المثال لا تحترم الإدارة العليا القواعد المتعلقة بالملابس الواقية."},
        { id: 4, text: "قلة المبادرة والتحفيز من جانب الشركة - ضعف حضور مدير الشركة   في مكان العمل فيما يتعلق بسلامة المواد الغذائية ، باستثناء عمليات  المراقبة أو عمليات التدقيق الخارجية" },
      ],
      cat:"Cohérence",
    },{
      text: "كيف تدرك عموما قدرة الموظفون على إدارة التغييرات, الأزمات وحل المشاكل المتعلقة بسلامة المواد الغذائية:",
      options: [
        { id: 0, text: "أظهرت حالات إدارة الأزمات أو الاختبارات التي أجريت في الماضي حسن الإرادة من جانب الموظفين. على الرغم من وجود نقص في المبادرة ، إلا أن هذا لا يبطئ التغييرات التي يتم اتباعها" },
        { id: 1, text: "  المشرفين و رؤساء العمل موكول لهم الإدارة، الموظفون غير قادرين على اتخاذ القرارات في حالة حدوث تغييرات" },
        { id: 2, text: "يسمح النظام المطبق لجميع الموظفين باتخاذ المبادرات والتكيف بشكل متماسك مع التغييرات التي حدثت. الأمثلة الحديثة تثبت ذلك." },
        { id: 3, text: "يضمن المشرفون بشكل تفاعلي التكيفات أو إدارة الأزمات ولكن ليس على مستوى فريق الإنتاج" },
        { id: 4, text: "أظهر بعض العملة القدرة على التكيف مع التغيرات السريعة ولكن الغالبية (بما في ذلك المشرفين الميدانيين) تتجنب المبادرات" },
      ],
      cat:"Adaptabilité",
    },{
      text: "كيف تقيم فهم المشرفين و العملة للمسؤوليات والسلطات المتعلقة سلامة المواد الغذائية ؟:",
      options: [
        { id: 0, text: "وصف المهام والمسؤوليات واضح تمامًا ، ويتم تحديد وتسجيل أي تباين. سلطة الحجز مكفولة لكن القرارات تظل مسؤولية التسلسل الهرمي"},
        { id: 1, text: "تم  تبليغ مهام الإنتاج ، ضمان سلامة المواد الغذائية يتم عن طريق فريق مراقبة الجودة" },
        { id: 2, text: "تم وصف المسؤوليات والصلاحيات بشكل كافٍ في الوثائق وقد يتم استكمالها بالتنسيق مع المصالح الأخرى ويتم ضمان الاتصال الأفقي أيضًا من خلال الاستباقية" },
        { id: 3, text: "تشير الأوصاف الوظيفية إلى الخطوات الواجب اتخاذها من أجل حسن سير العمليات و المراقبة المحددة (HACCP ، حفظ الصحة). في حالة الانحرافات، هناك واجب الإعلام حسب التسلسل الهرمي" },
        { id: 4, text: "تم تحديد المراقبة والعمليات التي يتعين القيام بها ، يتم توجيه المشرفين وفريق إدارة الجودة عند الضرورة. إذا لم يكن هناك وصف للأنشطة، لا   ضمان لأي إجراء / تدخل." },
      ],
      cat:"Cohérence",
    },{
      text: "كم عدد الإجراءات / القرارات التي يمكنك الاستشهاد بها لتأكيد قيم سلامة المواد الغذائية (الاستثمار ، التغيير ، التنظيم ، علاقات الزبائن ، سلسلة المنتوجات ...) ؟:",
      options: [
        { id: 0, text: "أكثر من 5" },
        { id: 1, text: "لا شيء (أوغيرواضح بشكل مرتبط )"},
        { id: 2, text: "كل الإجراءات (أو تقريبًا = عنصر صحة المستهلك دائمًا مرتبط )" },
        { id: 3, text: " من 3 إلى 5"  },
        { id: 4, text: "من 1 أو 2"},
      ],
      cat:"Vision",
    },{
      text: "ما هو مستوى التفاعل في النظام المعتمد ؟",
      options: [
        { id: 0, text: "متكيف: يوفرالنظام والسندات مستويات تحمل للتعديلات المخصصة ويتم تحديد الصلاحيات",  },
        { id: 1, text: "قابل للتطوير: نشرعام ، تذكير بالتعليمات في حالة وجود شكوى الزبائن ",  },
        { id: 2, text: "تشاركي: بالإضافة إلى النشر ، اجتماعات منتظمة للفريق مع تذكير بالأحداث الناقصة ومتابعة من قبل الإدارة الميدانية",  },
        { id: 3, text: "كلاسيكي:  نشر إعلان 'الجودة' كما هو مطلوب بالمعايير",  },
        { id: 4, text: "مُكيَّف: النشر من خلال العديد من القنوات الرسمية وغير الرسمية ، بشكل واضح فيما يتعلق بالأهداف / القيم والمؤشرات الميدانية",  },
      ],
      cat:"Adaptabilité",
    },{
      text: "أي من المؤشرات التالية اللتي لديكم لمتابعة ثقافة المخاطر ؟",
      options: [
        { id: 0, text: "عدد الشبه حوادث / المخالفات الداخلية المكتشفة / التطابق من المرة الأولى",  },
        { id: 1, text: "تطابق مراقبة ( تفقد) حفظ الصحة /  إنجاز التدريب (التكوين)",  },
        { id: 2, text: "التطابق من المرة الأولى / مستوى التكرار / عدد تقارير التعليمات",  },
        { id: 3, text: "تطابق مراقبة (تفقد) حفظ الصحة /شكاوى الزبائن / عدد الشبه حوادث ",  },
        { id: 4, text: "تطابق مراقبة ( تفقد) حفظ الصحة / التدريب (التكوين) / المخالفات الداخلية / شكاوى الزبائن ",  },
      ],
      cat:"Sensibilisation",
    },{
      text: " ما هي درجة الموقف فيما يتعلق بنظام المكافآت المرتبطة بالممارسات الجيدة لسلامة المواد الغذائية ؟",
      options: [
        { id: 0, text: "لا تتطلب العقلية الصحيحة لغالبية الموظفين تقديرًا خاصًا للسلوك المتطابق",  },
        { id: 1, text: "لا يوجد نظام مكافأة أو حوافز",  },
        { id: 2, text: "نظام المكافآت أو الحوافز من شأنه الإضرار بالجو العام وليس له ما يبرره لإنجاز المهام المنصوص عليها في التوصيف الوظيفي",  },
        { id: 3, text: "تم وضع سياسة الاعتراف معتمدة على أساس أنها عادلة وشفافة مع جناح محدد لسلامة المواد الغذائية",  },
        { id: 4, text: "سياسة تقدير و إعتراف عامة جدًا على عدة جوانب (الإنتاجية ، شكاوى الزبائن ، إلخ) ولكنها شفافة إلى حد ما (وليست فردية)",  },
      ],
      cat:"Personnel",
    },
  ];

  // Helper Functions


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
      <table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"70%",height:"50px",cursor:"pointer"}} onClick={()=>navigate("/Accueil_AR")}></img>
</td><td style={{float:"right",marginTop:"20px"}}>        <Navbar_AR/>
</td></tr></table></div>
<div style={{backgroundColor:"#177985",height:"120px"}}><center><h3  style={{color:"white",paddingTop:"25px"}}>
ثقافة سلامة الغذاء: التقييم الذاتي
</h3><h3 style={{color:"white"}}>ثقافة سلامة الغذاء</h3></center></div>
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
                         
                  <table   style={{width:"100 %",marginLeft:'20%',textAlign:"right"}}> <center><tr><td><h1 style={{color:"white",backgroundColor:"#177985"}}>%{(score/questions.length)} النتيجة النهائية</h1>
          </td><td>  <td style={{width:"200px",height:'200px'}} rowSpan={5}> <GaugeChart id="gauge-chart2" 
                           colors={['#FF5F6D', '#FFC371','#25CF00']}
                           
  nrOfLevels={20} 
  percent={  score / 20/100} 
  needleColor="grey"
  textColor="blue"
/>               </td></td></tr></center></table>

<div class="card text-white bg-dark mb-3">
        <center> <span style={{color:"white",fontSize:"40px",fontWeight:"bold"}}>شكرا لمشاركتكم</span></center>
        </div>
        <center><span style={{cursor:"pointer",color:"#177985",backgroundColor:"white",fontSize:"25px",fontWeight:"bold"}} onClick={()=>navigate("/Accueil_AR")}>رجوع إلى الصفحة الرئيسية</span></center>
        

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
          <div  style={{color:"#177985",fontSize:"25px",fontWeight:"bold",textAlignLast:'right',marginLeft:"auto",textAlign:"right"}}>{questions[currentQuestion].text}  </div>
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
                  
                  
                }}
                  key={option.id}
                  //onClick={() => optionClicked(option.isCorrect)}
                 
                  
                >
                  
                  <table style={{textAlign:"right",marginLeft:'auto'}}><tr><td style={{textAlignLast:'right',marginLeft:"auto",textAlign:"right"}}> {option.text}</td><td>  <label class="container" style={{marginRight:"auto"}}>
  <input type="radio"  name="Answer" id={i}  onClick={()=>(setRepo(option))}></input>
  <span class="checkmark"></span>
</label> </td></tr></table>
                  <div style={{color:"aliceblue",fontSize:'0px'}}>{i++}</div>
                </li>
                
                </>

              );
            })}
          </ul>
          <footer>
          <div class="total_que">
         
السؤال {currentQuestion + 1} من 20
            </div>
            <div id="BTS" style={{display: 'block' }}>
          <Button variant="success"  onClick={() =>next()+radio()+setQST(current => [...current, repo.text,questions[currentQuestion].text,repo.id])+optionClicked(repo.id,questions[currentQuestion].cat)+setRepo('')}>التالي</Button></div>
          <div id="BT" style={{display: 'none' }}>

          <Button variant="warning"  onClick={() => handleViewShow(click())}>إنهاء</Button>
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
                        <span style={{color:"red",marginLeft:"0%",fontWeight:"bold"}}>تهانينا ! </span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <center> <span style={{marginLeft:"40px",fontWeight:"bold",padding:'5px',fontSize:"20px"}}>لقد أكملت الاختبار</span></center><br></br>
                        
                    </Modal.Body>
                    <ModalFooter>
                    <div>
                       <center> <Button variant="info"  onClick={() =>setShowResults(true)+handledata()+hanldeViewClose()}> <b>انظر النتيجة</b></Button></center>

                          
                        </div>
                    </ModalFooter>
                   
                </Modal>
            </div>
    </div>
    
  );
  
}

export default About_AR;
