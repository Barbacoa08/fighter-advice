<script lang="ts">
  import { Accordion, Icon } from "$lib/components";

  const header = "Nutrition";
</script>

<svelte:head>
  <title>FA: {header}</title>
  <meta name="description" content={`barbajoe's Fighter Advice on ${header}`} />
</svelte:head>

<h1>{header} <Icon icon="bowl" /></h1>

<p>"Abs are made in the gym"</p>

<p>
  This phrase is deceptively truthful. In a fight you want to be at your
  absolute best shape possible, and if you haven't been giving your body the
  nutrition it requires, it
  <i>will</i> negatively affect your performance.
</p>

<h2>General Advice</h2>

<Accordion>
  <div slot="header">Diet</div>

  <p>
    There is no one diet that is best for everyone. Every body is different, and
    best thing you can do is to experiment and see what works best for you.
  </p>

  <p>
    Experiment to find what works for you and then <i>stick with it</i> to see maxiumum
    effect. With that stated, here are things that work well for my body:
  </p>
</Accordion>

<Accordion>
  <div slot="header">First time fighters</div>

  <p><i>Do not</i> cut more than 5 pounds (roughly 2.5 kilograms)</p>

  <p>
    Cutting weight is an enormous stressor on your body, and you need to ease
    into it to find where your performance maximum is
  </p>
</Accordion>

<Accordion>
  <div slot="header">Amateur time fighters</div>

  <p>Don't cut more than 8% of your body weight</p>

  <p>
    Without a professional nutritionist, cutting more than 8% is dangerous,
    especially if you are already lean
  </p>
</Accordion>

<Accordion>
  <div slot="header">Alcohol</div>

  <p>Don't drink any alcohol three weeks out from fight day</p>

  <p>
    Alcohol is one of the most negative foods you can consume when getting ready
    for a fight. It slows muscle recovery, interfeers with sleep, and if you
    start, it becomes increasingly difficult to stop.
  </p>

  <p>
    There are exceptions to every rule, and you should feel free to have a glass
    of wine if you're at a dinner party, or a beer if out with friends, but
    avoid liquor likes it's the plague.
  </p>
</Accordion>

<h2>A collection of resources:</h2>

<Accordion>
  <div slot="header">Simple recipies</div>

  <p>
    <a href="https://barbie-meals.netlify.app/breakfast-burritos">
      Breakfast Burritos
    </a>: a favorite of mine on training days
  </p>

  <p>
    <a href="https://barbie-meals.netlify.app/baked-carrot-potatoes">
      Baked Carrots and Potatoes
    </a>: stores well and great for snacking on or adding to meals
  </p>

  <p>Greens Salad with Chicken and Thai Style Sweet Chili Sauce</p>
</Accordion>

<Accordion>
  <div slot="header">6 Meals a Day for Weight Loss</div>

  <ul>
    <li>
      <a
        href="https://www.webmd.com/diet/obesity/features/6_meals_a_day"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source (WebMD)
      </a>
    </li>
    <li>Many meals a day <i>does not</i> increase your metabolism</li>
    <li>
      Many meals a day <i>can</i> help you control cravings and appetite
    </li>
    <li>High fiber foods help you <i>feel</i> full for longer</li>
  </ul>
</Accordion>

<!--
  - [Fight Week Weight Cut Manual](https://drive.google.com/file/d/1y43TXbQSIMSszrYNAlToa68dzGUouU2O/view)
    - Lots of “DO NOT” (unsafe) methods
    - Lots of “DO” (safe) methods
    - Advice on foods to eat directly after weigh in
    - Advice on foods and meals for healthy week-of eating
- [Intermittent Fasting (16|8 strategy)](https://www.healthline.com/nutrition/16-8-intermittent-fasting#basics)
    - Once or twice a week, fast for 16hrs, eat for 8hrs
        - For those 16hrs, only zero-calorie drinks (water, tea, plain coffee)
    - Several links to studies showing IF to be safe and effective
        - Especially for controlling cravings and blood sugar levels
    - UNSAFE for some people
        - Diabetics, postmenopausal, pregnant, those wishing to become pregnant
- [Diet-boosting foods](https://medlineplus.gov/ency/patientinstructions/000810.htm)
    - Lots of links to studies showing what foods are ideal for individual goals
- [Don Heatrick](https://heatrick.com/)
    - Just an enormous amount of information for training, weight managment, motivation, and more
    - He also has a youtube channel, and [this video on Discipline](https://www.youtube.com/watch?v=mVI8Ff-J-sc) is particularly grea
-->
<style>
  h2 {
    margin-top: 3rem;
    border-bottom: 1px solid var(--border-color-gray);
  }
</style>
