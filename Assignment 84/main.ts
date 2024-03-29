function replaceJavaScriptWithTypeScript(sentence: string): string {
     return sentence.replace(/javaScript/g, "TypeScript");
}
console.log(replaceJavaScriptWithTypeScript("I love javaScript and javaScript is awesome!"))