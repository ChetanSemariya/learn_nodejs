/*

What is EJS Template :- Embedded Javascript Templating.This template is based on Javascript.EJS provide a clean and convenient way to create views in ExpressJs.

Benifits :- Create Dynamic and Reusable Templates

// -------------- EJS Template Tag Syntax ------------- //

1). <% %>  => control flow, no output i.e flow control krne k kaam mai aata hai
2). <%= %> => Outputs escaped value (Safe), yhh hume variable ki value show karwane ke kaam mai aata hai and XSS attacks se bhi bachata hai isly yhh secure hai

example :- 

<ul>
   <% for(let i=1; i<=3; i++) { %>
      <li>Item <%= i %></li>
   <% } %>
</ul>

output :- 

<ul>
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
</ul>

3). <%- %>  => Outputs unescaped value (unsafe). unsafe because yhh hume xss attack se nahi bachata hai
4). <%# %> => Comment krne k liye iska use hota hai
5). <% -%> => Removes the following newline
6). <%_ %> => Removes whitespace before it. Starting se whitespace ko htane k liye iska use hota hai
7). <% _%> => Removes all whitespace after it. End mai whitespace ko hatane k liye iska use hota hai


*/
