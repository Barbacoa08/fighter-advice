<script lang="ts">
  import { Accordion, AccordionItem, Icon, Link } from "$lib/components";

  const header = "Nutrition";
</script>

<svelte:head>
  <title>FA: {header}</title>
  <meta name="description" content={`barbajoe's Fighter Advice on ${header}`} />
</svelte:head>

<h1>{header} <Icon icon="bowl" /></h1>

<p>"Abs are made in the kitchen"</p>

<p>
  This phrase is deceptively truthful. In a fight you want to be at your
  absolute best shape possible, and if you haven't been giving your body the
  nutrition it requires, it
  <i>will</i> negatively affect your performance.
</p>

<Accordion>
  <h2 slot="header">General Advice</h2>

  <AccordionItem>
    <div slot="header">Diet</div>

    <p>
      There is no one diet that is best for everyone. Every body is different,
      and best thing you can do is to experiment and see what works best for
      you.
    </p>

    <p>
      Experiment to find what works for you and then <i>stick with it</i> to see
      maxiumum effect. With that stated, here are things that work well for my body:
    </p>
  </AccordionItem>

  <AccordionItem>
    <div slot="header">First time fighters</div>

    <p><i>Do not</i> cut more than 4% of your body weight</p>

    <p>
      Cutting weight is an enormous stressor on your body, and you need to ease
      into it to find where your performance maximum is
    </p>
  </AccordionItem>

  <AccordionItem>
    <div slot="header">Amateur fighters</div>

    <p>Don't cut more than 8% of your body weight</p>

    <p>
      Without a professional nutritionist, cutting more than 8% is dangerous,
      especially if you are already lean
    </p>
  </AccordionItem>

  <AccordionItem>
    <div slot="header">Alcohol</div>

    <p>Don't drink any alcohol three weeks out from fight day</p>

    <p>
      Alcohol is one of the most negative foods you can consume when getting
      ready for a fight. It slows muscle recovery, interfeers with sleep, and if
      you start, it becomes increasingly difficult to stop.
    </p>

    <p>
      There are exceptions to every rule, and you should feel free to have a
      glass of wine if you're at a dinner party, or a beer if out with friends,
      but avoid liquor likes it's the plague.
    </p>
  </AccordionItem>
</Accordion>

<Accordion>
  <h2 slot="header">A collection of resources:</h2>

  <AccordionItem>
    <div slot="header">Simple recipies</div>

    <p>
      <Link
        isExternal
        href="https://barbie-meals.netlify.app/breakfast-burritos"
      >
        Breakfast Burritos
      </Link>: a favorite of mine on training days
    </p>

    <p>
      <Link
        isExternal
        href="https://barbie-meals.netlify.app/baked-carrot-potatoes"
      >
        Baked Carrots and Potatoes
      </Link>: stores well and great for snacking on or adding to meals
    </p>

    <p>Greens Salad with Chicken and Thai Style Sweet Chili Sauce</p>
  </AccordionItem>

  <AccordionItem>
    <div slot="header">6 Meals a Day for Weight Loss</div>

    <p>
      <Link
        isExternal
        href="https://www.webmd.com/diet/obesity/features/6_meals_a_day"
      >
        Link to source
      </Link> (WebMD), my take aways are &darr;:
    </p>

    <ul>
      <li>Many meals a day <i>does not</i> increase your metabolism</li>

      <li>
        Many meals a day <i>can</i> help you control cravings and appetite
      </li>

      <li>High fiber foods help you <i>feel</i> full for longer</li>
    </ul>
  </AccordionItem>

  <AccordionItem>
    <div slot="header">Fight Week Weight Cut Manual</div>

    <p>
      <Link
        isExternal
        href="https://drive.google.com/file/d/1y43TXbQSIMSszrYNAlToa68dzGUouU2O/view"
      >
        Link to source
      </Link>
      (
      <Link isExternal href="https://www.instagram.com/condition.nutrition/">
        @condition.nutrition
      </Link> ), PDF contains &darr;:
    </p>

    <ul>
      <li>Lots of "<i>do not</i>" (unsafe) weight cut methods</li>
      <li>Lots of "<i>do</i>" (safe) weight cut methods</li>
      <li>Advice on foods to eat directly after weigh in</li>
      <li>Advice on foods and meals for healthy week-of eating</li>
    </ul>
  </AccordionItem>

  <AccordionItem>
    <div slot="header">Intermittent Fasting (16|8 strategy)</div>

    <p>
      <Link
        isExternal
        href="https://www.healthline.com/nutrition/16-8-intermittent-fasting#basics"
      >
        Link to source
      </Link> (healthline), my take aways are &darr;:
    </p>

    <ul>
      <li>Once or twice a week, fast for 16hrs, eat for 8hrs</li>
      <li>
        <ul>
          <li>
            For those 16hrs, only zero-calorie drinks (water, tea, plain coffee)
          </li>
        </ul>
      </li>

      <li>Several links to studies showing IF to be safe and effective</li>
      <li>
        <ul>
          <li>Especially for controlling cravings and blood sugar levels</li>
        </ul>
      </li>

      <li>UNSAFE for some people</li>
      <li>
        <ul>
          <li>
            Diabetics, postmenopausal, pregnant, those wishing to become
            pregnant
          </li>
        </ul>
      </li>
    </ul>
  </AccordionItem>

  <AccordionItem>
    <div slot="header">Diet-boosting foods</div>

    <p>
      <Link
        isExternal
        href="https://medlineplus.gov/ency/patientinstructions/000810.htm"
      >
        Link to source
      </Link> (Medline Plus), has lots of links to studies showing what foods are
      ideal for individual goals. My key take aways are &darr;:
    </p>

    <ul>
      <li>
        keep plenty of raw fruits/veggetables on hard for snacking to keep
        crazings at bay
      </li>

      <li>beans are excellent sources of protien and fiber</li>

      <li>whole grains should be at least half of the grains you eat</li>

      <li>
        nuts are great in small quantities as they are high in things like
        fiber, protien, and healthy fats, but are also high in caloric count
      </li>

      <li>
        Seafood is high in nutrients and heart-healthy fat, but should be eaten
        in moderation due to ocean polution
      </li>
    </ul>
  </AccordionItem>
</Accordion>
