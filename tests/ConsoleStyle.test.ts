import {
  bgBrightWhite,
  bgWhite,
  blue,
  bold,
  brightBlue,
  dim,
  hidden,
  inverse,
  italic,
  strikethrough,
  underline,
} from "https://deno.land/std@0.92.0/fmt/colors.ts";
import { assertEquals } from "https://deno.land/std@0.107.0/testing/asserts.ts";
import { ConsoleStyle } from "../mod.ts";

const style = new ConsoleStyle();

Deno.test("Altdx Console Style - should render modifiers", () => {
  assertEquals(bold("altdx"), style.bold().render("altdx"));

  style.reset().strikethrough().hidden().inverse().underline().italic().dim()
    .bold();
  assertEquals(
    bold(dim(italic(underline(inverse(hidden(strikethrough("altdx"))))))),
    style.render("altdx"),
  );
});

Deno.test("Altdx Console Style - should render normal color", () => {
  style.reset();
  assertEquals(blue("altdx"), style.color("blue").render("altdx"));
});

Deno.test("Altdx Console Style - should render light color", () => {
  style.reset();
  assertEquals(
    brightBlue("altdx"),
    style.color("blue", true).render("altdx"),
  );
});

Deno.test("Altdx Console Style - should render normal background color", () => {
  style.reset();
  assertEquals(bgWhite("altdx"), style.bgc("white").render("altdx"));
});

Deno.test("Altdx Console Style - should render light background color", () => {
  style.reset();
  assertEquals(
    bgBrightWhite("altdx"),
    style.bgc("white", true).render("altdx"),
  );
});

Deno.test("Altdx Console Style - should reset style", () => {
  assertEquals("altdx", style.reset().render("altdx"));
});
