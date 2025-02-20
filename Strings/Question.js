/*
Scenario 4: Extracting Date Information
You have a string with a date in the format YYYY-MM-DD, like "2025-02-08". 
You need to extract the year, month, and day from this string.

Question: How would you extract just the month (e.g., "02") from the date string?
*/

let Date = "2025-02-08";
let [year, month, day] = Date.split("-");
console.log("year=", year, "month=", month, "day=", day);

/*Scenario 5: Search and Replace in Text
You are building a content moderation system for a blog or forum 
where certain offensive words need to be replaced with something more appropriate. 
For instance, you want to replace the word "badword" with "****".

Question: How would you replace a specific offensive word in a string with a safer word or asterisks?
*/
/*
Scenario 6: Generating a URL Slug
You are building a blog or website where titles are used to generate URL slugs. 
The title might have spaces, capital letters, and special characters, 
but you need to convert it to a lowercase string with _ instead of spaces 
(e.g., "This is a title!" becomes "this_is_a_title").

Question: How would you generate a clean URL-friendly version of a title string?
*/
//escape char
//let quote = "he said \"hello\"";

let quote = 'he said"Hello"';
console.log("quote=", quote);

let multilineString = `this is line one
this is line two
this is line three`;
console.log("multilineString=", multilineString);

//immutable string:
let str = "Hello";
//str[0] = J;
console.log("str=", str);

//mod a string:
let modstr = "J" + str.slice(1);
console.log("modstr=", modstr);
