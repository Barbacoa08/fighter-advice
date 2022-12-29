import Accordion from "./Accordion.svelte";
import AccordionItem from "./AccordionItem.svelte";

// ideal it'd be this way:
// Accordion.Item = AccordionItem;

// but I can't figure out the typings to make `svelte-check` happy
// JS (non-TS) version here:
// https://github.com/diwakersurya/svelte-accordion

export { AccordionItem, Accordion };
