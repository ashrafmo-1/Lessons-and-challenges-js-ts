// ===========================================
// == Variables And Concatenation Challenge ==
// ===========================================

// [1] Create 3 Variables [Title, Desctiption, Date]"done"
// -- All In One Statement "done"
// -- Variable Name Must Be Two Words "done"
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
// [2] Create Variable Contains Div And This Div Contains
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate

// Extra
// - Use ES6 Repeat

let ti = "Elzero",
    p = "Elzero Web School",
    da = "25/10";

let div =
`<div>
<h1>${ti}</h1>
<p>${p}</p>
<p>${da}</p>
</div>`;

document.write(div.repeat(4));