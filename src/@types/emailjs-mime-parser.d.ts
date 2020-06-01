declare module 'emailjs-mime-parser' {
  function parse(
    mime: any
  ): {
    childNodes: any[];
    content: Uint8Array;
    bodyStructure: string;
  };
  export default parse;
}
